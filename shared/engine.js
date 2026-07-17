/* ============================================
   ABSN Summer — Shared Quiz Engine
   Generic. Reads two globals set by the quiz shell:
     QUIZ_CONFIG = { key, title, type, tag, passThreshold, maxQuestions }
     QUESTIONS   = [ { stem, options[], correct, rationale }, ... ]
       - correct as a number = single-select question
       - correct as an array of numbers = Select All That Apply (SATA), partial credit scored
     A question may instead supply pairs[] for a matching question:
       { stem, pairs: [ { left, right }, ... ], decoys: [ 'extra right', ... ], rationale }
       - decoys (optional) are extra right-column choices that match nothing
       - rendered as a lettered answer key + one dropdown per left item
       - scored with partial credit: one point per correctly matched pair,
         normalized to the pair count; counts toward the final score
   Renders into #quiz-area.
   ============================================ */
(function () {
  const cfg = window.QUIZ_CONFIG || {};
  const QUESTIONS = window.QUESTIONS || [];
  const PASS = cfg.passThreshold || 77;
  const TAG = cfg.tag || '';
  const KEY = cfg.key || 'quiz';
  const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  let deck = [], idx = 0, correctCount = 0, answered = false, results = [], activeTab = 'full';
  let streak = 0, onFire = false;
  let selected = new Set();

  // ── Streak / Fire system ──────────────────────────────────────
  function injectFireStyles() {
    if (document.getElementById('fire-styles')) return;
    const style = document.createElement('style');
    style.id = 'fire-styles';
    style.textContent = `
      .q-num.on-fire {
        position: relative;
        background: linear-gradient(135deg, #ff9500, #ff6b00);
        color: #fff;
        border-radius: 50%;
        width: 36px; height: 36px;
        display: inline-flex; align-items: center; justify-content: center;
        font-weight: 700;
        box-shadow: 0 0 0 3px rgba(255,107,0,0.2), 0 0 16px rgba(255,107,0,0.5);
        animation: qNumPulse 2s ease-in-out infinite;
      }
      .q-num.on-fire::before {
        content: '';
        position: absolute;
        top: -14px; left: 50%;
        transform: translateX(-50%);
        width: 10px; height: 18px;
        background: linear-gradient(to top, #ff6b00, #ffb300, transparent);
        border-radius: 50% 50% 30% 30%;
        filter: blur(2px);
        animation: flameTip 0.5s ease-in-out infinite alternate;
      }
      .q-num.on-fire::after {
        content: '';
        position: absolute;
        top: -8px; left: 50%;
        transform: translateX(-50%);
        width: 14px; height: 12px;
        background: linear-gradient(to top, #ff9500, #ffcc00, transparent);
        border-radius: 50% 50% 30% 30%;
        filter: blur(1.5px);
        animation: flameTip 0.5s ease-in-out infinite alternate-reverse;
      }
      @keyframes qNumPulse {
        0%, 100% { box-shadow: 0 0 0 3px rgba(255,107,0,0.2), 0 0 14px rgba(255,107,0,0.4); }
        50%       { box-shadow: 0 0 0 4px rgba(255,107,0,0.3), 0 0 22px rgba(255,107,0,0.7); }
      }
      @keyframes flameTip {
        from { transform: translateX(-50%) scaleX(1)    scaleY(1)    skewX(0deg); }
        to   { transform: translateX(-50%) scaleX(0.85) scaleY(0.9)  skewX(4deg); }
      }
      .match-key {
        display: flex; flex-direction: column; gap: 6px;
        margin: 0 0 16px; padding: 12px 14px;
        background: var(--surface2, rgba(0,0,0,0.03));
        border: 1px solid var(--border, #ddd);
        border-radius: 10px;
      }
      .match-key-item { display: flex; gap: 10px; align-items: baseline; font-size: 14.5px; }
      .match-rows { display: flex; flex-direction: column; gap: 10px; margin-bottom: 14px; }
      .match-row {
        display: flex; align-items: center; gap: 12px;
        padding: 10px 12px;
        border: 1.5px solid var(--border, #ddd);
        border-radius: 10px;
        background: var(--surface, #fff);
      }
      .match-row.correct { border-color: var(--correct, #2e7d32); background: rgba(46,125,50,0.07); }
      .match-row.wrong   { border-color: var(--wrong, #c62828);   background: rgba(198,40,40,0.07); }
      .match-left { flex: 1; font-size: 15px; }
      .match-select {
        font: inherit; font-size: 15px;
        padding: 6px 10px; min-width: 64px;
        border: 1.5px solid var(--border, #ddd);
        border-radius: 8px;
        background: var(--surface, #fff);
        color: inherit;
      }
      .match-fix { font-weight: 700; color: var(--correct, #2e7d32); white-space: nowrap; font-size: 14px; }
      .review-match-list { display: flex; flex-direction: column; gap: 4px; margin: 6px 0; }
      .review-match-list .good  { color: var(--correct, #2e7d32); }
      .review-match-list .bad   { color: var(--wrong, #c62828); }
    `;
    document.head.appendChild(style);
  }
  function updateStreakUI() {
    const qNum = document.querySelector('.q-num');
    if (!qNum) return;
    if (onFire) {
      qNum.classList.add('on-fire');
    } else {
      qNum.classList.remove('on-fire');
    }
  }

  function handleStreak(isCorrect) {
    if (isCorrect) {
      streak++;
      if (streak === 10 && !onFire) {
        onFire = true;
      }
    } else {
      streak = 0;
      if (onFire) onFire = false;
    }
  }

  function buildDeck() {
    let pool = shuffle(QUESTIONS);
    if (cfg.maxQuestions && cfg.maxQuestions > 0 && pool.length > cfg.maxQuestions) {
      pool = pool.slice(0, cfg.maxQuestions);
    }
    deck = pool.map(q => {
      if (Array.isArray(q.pairs)) {
        const rights = q.pairs.map((p, i) => ({ text: p.right, key: i }));
        (q.decoys || []).forEach((d, j) => rights.push({ text: d, key: -(j + 1) }));
        return {
          stem: q.stem,
          rationale: q.rationale,
          image: q.image || null,
          isMatching: true,
          lefts: shuffle(q.pairs.map((p, i) => ({ text: p.left, key: i }))),
          rights: shuffle(rights)
        };
      }
      const isSata = Array.isArray(q.correct);
      const optionObjs = q.options.map((text, i) => ({
        text,
        isCorrect: isSata ? q.correct.includes(i) : i === q.correct
      }));
      return { stem: q.stem, rationale: q.rationale, image: q.image || null, opts: shuffle(optionObjs), isSata };
    });
  }

  // ── In-progress save / resume ─────────────────────────────────
  function saveProgress() {
    try {
      const state = { deck, idx, correctCount, results, streak, onFire, ts: Date.now() };
      localStorage.setItem(KEY + '_inprogress', JSON.stringify(state));
    } catch (e) {}
  }
  function clearProgress() {
    try { localStorage.removeItem(KEY + '_inprogress'); } catch (e) {}
  }
  function loadProgress() {
    try {
      const raw = localStorage.getItem(KEY + '_inprogress');
      if (!raw) return null;
      const state = JSON.parse(raw);
      if (!state || !Array.isArray(state.deck) || typeof state.idx !== 'number') return null;
      if (state.idx >= state.deck.length) return null;
      return state;
    } catch (e) { return null; }
  }

  function renderResumePrompt(saved) {
    injectFireStyles();
    const scoreSoFar = saved.idx > 0 ? Math.round((saved.correctCount / saved.idx) * 100) + '%' : '—';
    const area = document.getElementById('quiz-area');
    area.innerHTML = `
      <div class="results-card">
        <div class="score-sub" style="font-size:19px;color:var(--ink);font-weight:600;margin-bottom:10px;">Pick up where you left off?</div>
        <div class="score-msg">You were on question ${saved.idx + 1} of ${saved.deck.length} · ${scoreSoFar} so far</div>
        <div class="results-actions">
          <button class="action-btn primary" onclick="__quizResume()">Continue</button>
          <button class="action-btn ghost" onclick="__quizStartOver()">Start over</button>
        </div>
      </div>
    `;
  }

  function resumeQuiz(saved) {
    deck = saved.deck;
    idx = saved.idx;
    correctCount = saved.correctCount;
    results = saved.results || [];
    streak = saved.streak || 0;
    onFire = saved.onFire || false;
    answered = false;
    renderQuestion();
  }

  function startQuiz() {
    injectFireStyles();
    clearProgress();
    buildDeck();
    idx = 0; correctCount = 0; answered = false; results = [];
    streak = 0; onFire = false;
    renderQuestion();
    saveProgress();
  }

  function init() {
    injectFireStyles();
    const saved = loadProgress();
    if (saved) {
      renderResumePrompt(saved);
    } else {
      startQuiz();
    }
  }

  function renderQuestion() {
    answered = false;
    selected = new Set();
    const q = deck[idx];
    const area = document.getElementById('quiz-area');
    const pct = Math.round((idx / deck.length) * 100);
    const scoreText = (idx > 0) ? Math.round((correctCount / idx) * 100) + '%' : '—';

    let bodyHTML = '';
    if (q.isMatching) {
      const keyHTML = q.rights.map((r, ri) => `
        <div class="match-key-item"><span class="opt-letter">${LETTERS[ri]}</span><span>${r.text}</span></div>`).join('');
      const rowsHTML = q.lefts.map((l, li) => `
        <div class="match-row" data-li="${li}">
          <span class="match-left">${l.text}</span>
          <select class="match-select" data-li="${li}" onchange="__quizMatchChange()">
            <option value="">&mdash;</option>
            ${q.rights.map((r, ri) => `<option value="${r.key}">${LETTERS[ri]}</option>`).join('')}
          </select>
        </div>`).join('');
      bodyHTML = `
        <div class="match-key">${keyHTML}</div>
        <div class="match-rows" id="opts">${rowsHTML}</div>
        <button class="next-btn sata-submit" id="match-submit-btn" onclick="__quizSubmitMatch()" disabled>Submit answer</button>`;
    } else {
      let optsHTML = '';
      q.opts.forEach((o, i) => {
        const clickHandler = q.isSata ? `__quizToggle(${i})` : `__quizPick(${i})`;
        optsHTML += `<button class="opt" data-i="${i}" onclick="${clickHandler}">
          <span class="opt-letter">${LETTERS[i]}</span>
          <span class="opt-text">${o.text}</span>
        </button>`;
      });
      bodyHTML = `
        <div class="options" id="opts">${optsHTML}</div>
        ${q.isSata ? `<button class="next-btn sata-submit" id="sata-submit-btn" onclick="__quizSubmitSata()" disabled>Submit answer</button>` : ''}`;
    }

    area.innerHTML = `
      <div class="progress-row">
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
        <span class="progress-label">${idx + 1} / ${deck.length}</span>
        <span class="score-pill">${scoreText}</span>
      </div>
      <div class="question-card">
        <div class="q-meta">
          <span class="q-num">Q${idx + 1}</span>
          ${TAG ? `<span class="q-tag">${TAG}</span>` : ''}
        </div>
        <div class="q-stem">${q.stem}</div>
        ${q.isSata ? `<div class="sata-hint">Select all that apply · partial credit awarded</div>` : ''}
        ${q.isMatching ? `<div class="sata-hint">Match each item to a letter · partial credit awarded</div>` : ''}
        ${q.image ? `<div class="q-image-wrap">
          <div class="q-image-skeleton" id="img-skeleton"></div>
          <img src="${q.image}" alt="Clinical image" class="q-image" style="display:none" id="q-img"
            onload="this.style.display='block';this.style.opacity=0;var s=document.getElementById('img-skeleton');if(s)s.style.display='none';setTimeout(function(){var el=document.getElementById('q-img');if(el)el.style.opacity=1;},10);"
            onerror="var s=document.getElementById('img-skeleton');if(s){s.textContent='Image unavailable';s.style.background='var(--surface2)';}" />
        </div>` : ''}
        ${bodyHTML}
        <div id="feedback"></div>
      </div>
    `;
    updateStreakUI();
  }

  function pick(chosenI) {
    if (answered) return;
    answered = true;
    const q = deck[idx];
    const correctI = q.opts.findIndex(o => o.isCorrect);
    const isCorrect = chosenI === correctI;
    if (isCorrect) correctCount += 1;
    handleStreak(isCorrect);

    document.querySelectorAll('.opt').forEach((b, i) => {
      b.setAttribute('disabled', 'true');
      if (i === correctI) b.classList.add('correct');
      else if (i === chosenI) b.classList.add('wrong');
      else b.classList.add('dimmed');
    });

    results.push({
      stem: q.stem,
      image: q.image || null,
      yourLetter: LETTERS[chosenI],
      yourText: q.opts[chosenI].text,
      correctLetter: LETTERS[correctI],
      correctText: q.opts[correctI].text,
      isCorrect,
      isPartial: false,
      rationale: q.rationale
    });
    saveProgress();

    const fb = document.getElementById('feedback');
    let verdict, cls;
    if (isCorrect) {
      verdict = `✓ Correct — ${LETTERS[correctI]} is right.`;
      cls = 'r-correct';
    } else {
      verdict = `✗ You chose ${LETTERS[chosenI]}. The correct answer is ${LETTERS[correctI]}.`;
      cls = 'r-wrong';
    }
    const isLast = idx === deck.length - 1;
    fb.innerHTML = `
      <div class="rationale ${cls}">
        <span class="verdict">${verdict}</span>
        ${q.rationale}
      </div>
      <button class="next-btn" onclick="__quizNext()">${isLast ? 'See results →' : 'Next question →'}</button>
    `;
  }

  function toggleSata(i) {
    if (answered) return;
    const btn = document.querySelector(`.opt[data-i="${i}"]`);
    if (!btn) return;
    if (selected.has(i)) {
      selected.delete(i);
      btn.classList.remove('selected');
    } else {
      selected.add(i);
      btn.classList.add('selected');
    }
    const submitBtn = document.getElementById('sata-submit-btn');
    if (submitBtn) submitBtn.disabled = selected.size === 0;
  }

  // Partial-credit SATA scoring: +1 per correct option selected, -1 per incorrect
  // option selected, floored at 0, normalized against the total number of correct options.
  function submitSata() {
    if (answered) return;
    if (selected.size === 0) return;
    answered = true;
    const q = deck[idx];
    const correctIs = q.opts.map((o, i) => o.isCorrect ? i : null).filter(i => i !== null);
    const selArr = Array.from(selected).sort((a, b) => a - b);

    const numCorrectSelected = selArr.filter(i => correctIs.includes(i)).length;
    const numIncorrectSelected = selArr.filter(i => !correctIs.includes(i)).length;
    const rawScore = numCorrectSelected - numIncorrectSelected;
    const fraction = Math.max(0, Math.min(1, rawScore / correctIs.length));
    const isFullCredit = fraction === 1;
    const isPartial = fraction > 0 && fraction < 1;

    correctCount += fraction;
    handleStreak(isFullCredit);

    document.querySelectorAll('.opt').forEach((b, i) => {
      b.setAttribute('disabled', 'true');
      b.classList.remove('selected');
      if (q.opts[i].isCorrect) b.classList.add('correct');
      else if (selected.has(i)) b.classList.add('wrong');
      else b.classList.add('dimmed');
    });
    const submitBtn = document.getElementById('sata-submit-btn');
    if (submitBtn) submitBtn.remove();

    const yourLetters = selArr.map(i => LETTERS[i]).join(', ');
    const correctLetters = correctIs.map(i => LETTERS[i]).join(', ');
    const yourTexts = selArr.map(i => q.opts[i].text).join('; ');
    const correctTexts = correctIs.map(i => q.opts[i].text).join('; ');
    const pointsLabel = `${numCorrectSelected}/${correctIs.length} correct${numIncorrectSelected > 0 ? `, ${numIncorrectSelected} incorrect selected` : ''}`;

    results.push({
      stem: q.stem,
      image: q.image || null,
      isSata: true,
      yourLetter: yourLetters || '(none selected)',
      yourText: yourTexts || '(none selected)',
      correctLetter: correctLetters,
      correctText: correctTexts,
      isCorrect: isFullCredit,
      isPartial,
      pointsLabel,
      rationale: q.rationale
    });
    saveProgress();

    const fb = document.getElementById('feedback');
    let verdict, cls;
    if (isFullCredit) {
      verdict = `✓ Correct — ${correctLetters} ${correctIs.length > 1 ? 'are' : 'is'} right.`;
      cls = 'r-correct';
    } else if (isPartial) {
      verdict = `◐ Partial credit (${pointsLabel}). Full correct answer: ${correctLetters}.`;
      cls = 'r-partial';
    } else {
      verdict = `✗ No credit (${pointsLabel}). The correct answer${correctIs.length > 1 ? 's are' : ' is'} ${correctLetters}.`;
      cls = 'r-wrong';
    }
    const isLast = idx === deck.length - 1;
    fb.innerHTML = `
      <div class="rationale ${cls}">
        <span class="verdict">${verdict}</span>
        ${q.rationale}
      </div>
      <button class="next-btn" onclick="__quizNext()">${isLast ? 'See results →' : 'Next question →'}</button>
    `;
  }

  function matchChange() {
    if (answered) return;
    const sels = document.querySelectorAll('.match-select');
    const allSet = Array.from(sels).every(s => s.value !== '');
    const btn = document.getElementById('match-submit-btn');
    if (btn) btn.disabled = !allSet;
  }

  // Partial-credit matching scoring: one point per correctly matched pair,
  // normalized to the pair count. No penalty for wrong matches beyond the lost point.
  function submitMatch() {
    if (answered) return;
    const q = deck[idx];
    const sels = Array.from(document.querySelectorAll('.match-select'));
    if (!sels.every(s => s.value !== '')) return;
    answered = true;

    let numCorrect = 0;
    const matchDetail = [];
    sels.forEach(s => {
      const li = parseInt(s.getAttribute('data-li'), 10);
      const left = q.lefts[li];
      const chosenKey = parseInt(s.value, 10);
      const good = chosenKey === left.key;
      if (good) numCorrect++;
      const chosenRight = q.rights.find(r => r.key === chosenKey);
      const correctRightIdx = q.rights.findIndex(r => r.key === left.key);
      matchDetail.push({
        left: left.text,
        chosen: chosenRight ? chosenRight.text : '',
        correctTxt: q.rights[correctRightIdx].text,
        good
      });
      const row = s.closest('.match-row');
      row.classList.add(good ? 'correct' : 'wrong');
      s.setAttribute('disabled', 'true');
      if (!good) {
        row.insertAdjacentHTML('beforeend', `<span class="match-fix">${LETTERS[correctRightIdx]}</span>`);
      }
    });
    const submitBtn = document.getElementById('match-submit-btn');
    if (submitBtn) submitBtn.remove();

    const total = q.lefts.length;
    const fraction = numCorrect / total;
    const isFullCredit = fraction === 1;
    const isPartial = fraction > 0 && fraction < 1;
    correctCount += fraction;
    handleStreak(isFullCredit);

    const pointsLabel = `${numCorrect}/${total} pairs matched`;
    results.push({
      stem: q.stem,
      image: q.image || null,
      isMatching: true,
      matchDetail,
      yourLetter: '', yourText: '', correctLetter: '', correctText: '',
      isCorrect: isFullCredit,
      isPartial,
      pointsLabel,
      rationale: q.rationale
    });
    saveProgress();

    const fb = document.getElementById('feedback');
    let verdict, cls;
    if (isFullCredit) {
      verdict = `✓ Correct — all ${total} pairs matched.`;
      cls = 'r-correct';
    } else if (isPartial) {
      verdict = `◐ Partial credit (${pointsLabel}). Correct letters shown in green on the missed rows.`;
      cls = 'r-partial';
    } else {
      verdict = `✗ No credit (${pointsLabel}). Correct letters shown in green on each row.`;
      cls = 'r-wrong';
    }
    const isLast = idx === deck.length - 1;
    fb.innerHTML = `
      <div class="rationale ${cls}">
        <span class="verdict">${verdict}</span>
        ${q.rationale}
      </div>
      <button class="next-btn" onclick="__quizNext()">${isLast ? 'See results →' : 'Next question →'}</button>
    `;
  }

  function next() {
    if (idx < deck.length - 1) {
      idx++;
      renderQuestion();
      saveProgress();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      showResults();
    }
  }

  function showResults() {
    streak = 0; onFire = false;
    clearProgress();
    const pct = Math.round((correctCount / deck.length) * 100);
    const pass = pct >= PASS;
    let historyLine = '';
    try {
      const prev = parseInt(localStorage.getItem(KEY + '_best') || '0', 10);
      if (pct > prev) localStorage.setItem(KEY + '_best', String(pct));
      localStorage.setItem(KEY + '_last', String(pct));
      const histRaw = localStorage.getItem(KEY + '_history');
      let hist = [];
      try { hist = histRaw ? JSON.parse(histRaw) : []; } catch (e2) { hist = []; }
      if (!Array.isArray(hist)) hist = [];
      hist.push({ pct, date: Date.now() });
      if (hist.length > 50) hist = hist.slice(hist.length - 50);
      localStorage.setItem(KEY + '_history', JSON.stringify(hist));

      const attemptNum = hist.length;
      const bestNow = Math.max(prev, pct);
      if (attemptNum > 1) {
        const priorPct = hist[hist.length - 2].pct;
        const diff = pct - priorPct;
        let trendText;
        if (diff > 0) trendText = `up ${diff} pts from your last try`;
        else if (diff < 0) trendText = `down ${Math.abs(diff)} pts from your last try`;
        else trendText = 'same as your last try';
        historyLine = `Attempt ${attemptNum} · best ${bestNow}% · ${trendText}`;
      } else {
        historyLine = `Attempt 1 · first try on the books`;
      }
    } catch (e) {}

    let msg;
    if (pct >= 90) msg = "You've got this cold. Maybe one more pass to keep it sharp.";
    else if (pct >= PASS) msg = "Solid pass. Review the ones you missed and you're in good shape.";
    else msg = "Below passing — run through the missed questions and take it again.";

    const scoreDisplay = Number.isInteger(correctCount) ? correctCount : correctCount.toFixed(1);

    const area = document.getElementById('quiz-area');
    area.innerHTML = `
      <div class="results-card">
        <div class="score-big ${pass ? 'pass' : 'fail'}">${pct}%</div>
        <div class="score-sub">${scoreDisplay} / ${deck.length} points · ${cfg.title || ''}</div>
        ${historyLine ? `<div class="score-history">${historyLine}</div>` : ''}
        <div class="score-msg">${msg}</div>
        <div class="results-tabs">
          <button class="r-tab ${activeTab === 'full' ? 'active' : ''}" onclick="__quizTab('full', this)">Full Review</button>
          <button class="r-tab ${activeTab === 'missed' ? 'active' : ''}" onclick="__quizTab('missed', this)">Missed Only</button>
        </div>
        <div class="review-list" id="review-list"></div>
        <div class="results-actions">
          <button class="action-btn primary" onclick="__quizStart()">Retake quiz</button>
          <a class="action-btn ghost" href="../index.html">Back to hub</a>
        </div>
      </div>
    `;
    renderReview();
  }

  function setTab(t, el) {
    activeTab = t;
    document.querySelectorAll('.r-tab').forEach(b => b.classList.remove('active'));
    if (el) el.classList.add('active');
    renderReview();
  }

  function renderReview() {
    const list = document.getElementById('review-list');
    let items = results.map((r, i) => ({ ...r, n: i + 1 }));
    if (activeTab === 'missed') items = items.filter(r => !r.isCorrect);

    if (items.length === 0) {
      const emptyMsg = (activeTab === 'missed')
        ? '<i class="fa-solid fa-circle-check" style="color:var(--correct)"></i> No missed questions — perfect score!'
        : 'Nothing here.';
      list.innerHTML = `<div class="empty-msg">${emptyMsg}</div>`;
      return;
    }

    list.innerHTML = items.map(r => {
      const resultCls = r.isCorrect ? 'correct' : (r.isPartial ? 'partial' : 'wrong');
      const resultLabel = r.isCorrect ? '✓ Correct' : (r.isPartial ? `◐ Partial (${r.pointsLabel})` : '✗ Missed');
      return `
      <div class="review-item">
        <div class="ri-meta">
          <span class="q-num">Q${r.n}</span>
          <span class="ri-result ${resultCls}">${resultLabel}</span>
        </div>
        <div class="review-item-q">${r.stem}</div>
        ${r.image ? `<img src="${r.image}" alt="Clinical image" class="q-image" style="max-width:260px;margin:8px 0;border-radius:8px;border:1px solid var(--border);" />` : ''}
        ${r.isMatching
          ? `<div class="review-match-list">${r.matchDetail.map(d => d.good
              ? `<span class="good">✓ ${d.left} → ${d.chosen}</span>`
              : `<span class="bad">✗ ${d.left} → ${d.chosen || '(none)'}${' '}(correct: ${d.correctTxt})</span>`).join('')}</div>`
          : `<div class="review-item-ans">
          ${r.isCorrect
            ? `<span class="ri-correct-ans">Your answer: ${r.yourLetter} — ${r.yourText} ✓</span>`
            : `<span class="ri-yours">You chose: ${r.yourLetter} — ${r.yourText}</span>
               <span class="ri-correct-ans">Correct: ${r.correctLetter} — ${r.correctText}</span>`}
        </div>`}
        <div class="ri-rationale">${r.rationale}</div>
      </div>
    `;
    }).join('');
  }

  // expose handlers for inline onclick
  window.__quizPick = pick;
  window.__quizToggle = toggleSata;
  window.__quizSubmitSata = submitSata;
  window.__quizMatchChange = matchChange;
  window.__quizSubmitMatch = submitMatch;
  window.__quizNext = next;
  window.__quizTab = setTab;
  window.__quizStart = startQuiz;
  window.__quizResume = function () {
    const saved = loadProgress();
    if (saved) resumeQuiz(saved);
    else startQuiz();
  };
  window.__quizStartOver = startQuiz;

  // boot when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
