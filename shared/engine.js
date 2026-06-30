/* ============================================
   ABSN Summer — Shared Quiz Engine
   Generic. Reads two globals set by the quiz shell:
     QUIZ_CONFIG = { key, title, type, tag, passThreshold, maxQuestions }
     QUESTIONS   = [ { stem, options[], correct, rationale }, ... ]
       - correct as a number = single-select question
       - correct as an array of numbers = Select All That Apply (SATA), partial credit scored
   Renders into #quiz-area.
   ============================================ */
(function () {
  const cfg = window.QUIZ_CONFIG || {};
  const QUESTIONS = window.QUESTIONS || [];
  const PASS = cfg.passThreshold || 77;
  const TAG = cfg.tag || '';
  const KEY = cfg.key || 'quiz';
  const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

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
      const isSata = Array.isArray(q.correct);
      const optionObjs = q.options.map((text, i) => ({
        text,
        isCorrect: isSata ? q.correct.includes(i) : i === q.correct
      }));
      return { stem: q.stem, rationale: q.rationale, image: q.image || null, opts: shuffle(optionObjs), isSata };
    });
  }

  function startQuiz() {
    injectFireStyles();
    buildDeck();
    idx = 0; correctCount = 0; answered = false; results = [];
    streak = 0; onFire = false;
    renderQuestion();
  }

  function renderQuestion() {
    answered = false;
    selected = new Set();
    const q = deck[idx];
    const area = document.getElementById('quiz-area');
    const pct = Math.round((idx / deck.length) * 100);
    const scoreText = (idx > 0) ? Math.round((correctCount / idx) * 100) + '%' : '—';

    let optsHTML = '';
    q.opts.forEach((o, i) => {
      const clickHandler = q.isSata ? `__quizToggle(${i})` : `__quizPick(${i})`;
      optsHTML += `<button class="opt" data-i="${i}" onclick="${clickHandler}">
        <span class="opt-letter">${LETTERS[i]}</span>
        <span class="opt-text">${o.text}</span>
      </button>`;
    });

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
        ${q.image ? `<div class="q-image-wrap">
          <div class="q-image-skeleton" id="img-skeleton"></div>
          <img src="${q.image}" alt="Clinical image" class="q-image" style="display:none" id="q-img"
            onload="this.style.display='block';this.style.opacity=0;var s=document.getElementById('img-skeleton');if(s)s.style.display='none';setTimeout(function(){var el=document.getElementById('q-img');if(el)el.style.opacity=1;},10);"
            onerror="var s=document.getElementById('img-skeleton');if(s){s.textContent='Image unavailable';s.style.background='var(--surface2)';}" />
        </div>` : ''}
        <div class="options" id="opts">${optsHTML}</div>
        ${q.isSata ? `<button class="next-btn sata-submit" id="sata-submit-btn" onclick="__quizSubmitSata()" disabled>Submit answer</button>` : ''}
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

  function next() {
    if (idx < deck.length - 1) {
      idx++;
      renderQuestion();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      showResults();
    }
  }

  function showResults() {
    streak = 0; onFire = false;
    const pct = Math.round((correctCount / deck.length) * 100);
    const pass = pct >= PASS;
    try {
      const prev = parseInt(localStorage.getItem(KEY + '_best') || '0', 10);
      if (pct > prev) localStorage.setItem(KEY + '_best', String(pct));
      localStorage.setItem(KEY + '_last', String(pct));
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
        <div class="review-item-ans">
          ${r.isCorrect
            ? `<span class="ri-correct-ans">Your answer: ${r.yourLetter} — ${r.yourText} ✓</span>`
            : `<span class="ri-yours">You chose: ${r.yourLetter} — ${r.yourText}</span>
               <span class="ri-correct-ans">Correct: ${r.correctLetter} — ${r.correctText}</span>`}
        </div>
        <div class="ri-rationale">${r.rationale}</div>
      </div>
    `;
    }).join('');
  }

  // expose handlers for inline onclick
  window.__quizPick = pick;
  window.__quizToggle = toggleSata;
  window.__quizSubmitSata = submitSata;
  window.__quizNext = next;
  window.__quizTab = setTab;
  window.__quizStart = startQuiz;

  // boot when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startQuiz);
  } else {
    startQuiz();
  }
})();
