/* ============================================
   ABSN Summer — Shared Quiz Engine
   Generic. Reads two globals set by the quiz shell:
     QUIZ_CONFIG = { key, title, type, tag, passThreshold }
     QUESTIONS   = [ { stem, options[], correct, rationale }, ... ]
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

  // ── Streak / Fire system ──────────────────────────────────────
  function injectFireStyles() {
    if (document.getElementById('fire-styles')) return;
    const style = document.createElement('style');
    style.id = 'fire-styles';
    style.textContent = `
      /* Fire badge — persistent */
      .fire-badge {
        display: inline-flex; align-items: center; gap: 5px;
        font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700;
        color: #c94f00; background: #fff3eb; border: 1.5px solid #f4a56a;
        padding: 3px 10px; border-radius: 20px;
        animation: badgePop 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards;
      }
      @keyframes badgePop {
        from { transform: scale(0.5); opacity: 0; }
        to   { transform: scale(1);   opacity: 1; }
      }
      /* Fire toast — big burst */
      .fire-toast {
        position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%) scale(0.6);
        background: linear-gradient(135deg, #ff6b00, #ff9500);
        color: #fff; font-family: 'Fraunces', serif; font-size: 1.5rem; font-weight: 600;
        padding: 14px 32px; border-radius: 50px;
        box-shadow: 0 8px 32px rgba(255,107,0,0.45);
        z-index: 9999; opacity: 0; white-space: nowrap;
        animation: toastBurst 2.4s cubic-bezier(0.34,1.56,0.64,1) forwards;
        pointer-events: none;
      }
      @keyframes toastBurst {
        0%   { transform: translateX(-50%) scale(0.6); opacity: 0; }
        20%  { transform: translateX(-50%) scale(1.08); opacity: 1; }
        35%  { transform: translateX(-50%) scale(0.97); opacity: 1; }
        70%  { transform: translateX(-50%) scale(1);    opacity: 1; }
        100% { transform: translateX(-50%) scale(1);    opacity: 0; }
      }
      /* Flame pulse on score pill row */
      .score-pill.on-fire {
        background: #fff3eb; color: #c94f00; border: 1.5px solid #f4a56a;
      }
    `;
    document.head.appendChild(style);
  }

  function showFireToast() {
    const toast = document.createElement('div');
    toast.className = 'fire-toast';
    toast.textContent = '🔥 On Fire!';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  }

  function updateStreakUI() {
    const pill = document.querySelector('.score-pill');
    if (!pill) return;
    if (onFire) {
      // replace score pill content to add flame badge
      const scoreText = pill.textContent.replace('🔥', '').trim();
      pill.innerHTML = `${scoreText} &nbsp;<span class="fire-badge">🔥 On Fire</span>`;
      pill.classList.add('on-fire');
    } else {
      pill.classList.remove('on-fire');
      // restore clean score text
      const scoreText = (idx > 0) ? Math.round((correctCount / idx) * 100) + '%' : '—';
      pill.textContent = scoreText;
    }
  }

  function handleStreak(isCorrect) {
    if (isCorrect) {
      streak++;
      if (streak === 6 && !onFire) {
        onFire = true;
        showFireToast();
        setTimeout(updateStreakUI, 300);
      } else if (onFire) {
        updateStreakUI();
      }
    } else {
      streak = 0;
      if (onFire) {
        onFire = false;
        updateStreakUI();
      }
    }
  }

  function buildDeck() {
    let pool = shuffle(QUESTIONS);
    if (cfg.maxQuestions && cfg.maxQuestions > 0 && pool.length > cfg.maxQuestions) {
      pool = pool.slice(0, cfg.maxQuestions);
    }
    deck = pool.map(q => {
      const optionObjs = q.options.map((text, i) => ({ text, isCorrect: i === q.correct }));
      return { stem: q.stem, rationale: q.rationale, image: q.image || null, opts: shuffle(optionObjs) };
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
    const q = deck[idx];
    const area = document.getElementById('quiz-area');
    const pct = Math.round((idx / deck.length) * 100);
    const scoreText = (idx > 0) ? Math.round((correctCount / idx) * 100) + '%' : '—';

    let optsHTML = '';
    q.opts.forEach((o, i) => {
      optsHTML += `<button class="opt" data-i="${i}" onclick="__quizPick(${i})">
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
        ${q.image ? `<div class="q-image-wrap">
          <div class="q-image-skeleton" id="img-skeleton"></div>
          <img src="${q.image}" alt="Clinical image" class="q-image" style="display:none" id="q-img"
            onload="this.style.display='block';this.style.opacity=0;var s=document.getElementById('img-skeleton');if(s)s.style.display='none';setTimeout(function(){var el=document.getElementById('q-img');if(el)el.style.opacity=1;},10);"
            onerror="var s=document.getElementById('img-skeleton');if(s){s.textContent='Image unavailable';s.style.background='var(--surface2)';}" />
        </div>` : ''}
        <div class="options" id="opts">${optsHTML}</div>
        <div id="feedback"></div>
      </div>
    `;
  }

  function pick(chosenI) {
    if (answered) return;
    answered = true;
    const q = deck[idx];
    const correctI = q.opts.findIndex(o => o.isCorrect);
    const isCorrect = chosenI === correctI;
    if (isCorrect) correctCount++;
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

    const area = document.getElementById('quiz-area');
    area.innerHTML = `
      <div class="results-card">
        <div class="score-big ${pass ? 'pass' : 'fail'}">${pct}%</div>
        <div class="score-sub">${correctCount} / ${deck.length} correct · ${cfg.title || ''}</div>
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

    list.innerHTML = items.map(r => `
      <div class="review-item">
        <div class="ri-meta">
          <span class="q-num">Q${r.n}</span>
          <span class="ri-result ${r.isCorrect ? 'correct' : 'wrong'}">${r.isCorrect ? '✓ Correct' : '✗ Missed'}</span>
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
    `).join('');
  }

  // expose handlers for inline onclick
  window.__quizPick = pick;
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
