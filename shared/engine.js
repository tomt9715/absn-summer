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
      /* Persistent badge next to Q number */
      .fire-badge {
        display: inline-flex; align-items: center; gap: 4px;
        font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700;
        color: #c94f00; background: #fff3eb; border: 1.5px solid #f4a56a;
        padding: 3px 9px; border-radius: 20px; letter-spacing: 0.03em;
        animation: badgePop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards;
      }
      @keyframes badgePop {
        from { transform: scale(0.4); opacity: 0; }
        to   { transform: scale(1);   opacity: 1; }
      }

      /* Actual fire animation from bottom */
      .fire-container {
        position: fixed;
        bottom: 0; left: 0; right: 0;
        height: 160px;
        pointer-events: none;
        z-index: 9999;
        display: flex; align-items: flex-end;
        opacity: 0;
        animation: fireEnter 4s ease forwards;
      }
      @keyframes fireEnter {
        0%   { opacity: 0; }
        10%  { opacity: 1; }
        75%  { opacity: 1; }
        100% { opacity: 0; }
      }
      .fire-container svg {
        width: 100%;
        height: 100%;
        display: block;
      }
      .flame {
        transform-origin: bottom center;
        animation: flicker 0.6s ease-in-out infinite alternate;
      }
      .flame:nth-child(2)  { animation-duration: 0.7s; animation-delay: 0.1s; }
      .flame:nth-child(3)  { animation-duration: 0.5s; animation-delay: 0.2s; }
      .flame:nth-child(4)  { animation-duration: 0.8s; animation-delay: 0.05s; }
      .flame:nth-child(5)  { animation-duration: 0.65s; animation-delay: 0.15s; }
      .flame:nth-child(6)  { animation-duration: 0.55s; animation-delay: 0.25s; }
      .flame:nth-child(7)  { animation-duration: 0.75s; animation-delay: 0.08s; }
      .flame:nth-child(8)  { animation-duration: 0.6s; animation-delay: 0.18s; }
      .flame:nth-child(9)  { animation-duration: 0.7s; animation-delay: 0.12s; }
      .flame:nth-child(10) { animation-duration: 0.5s; animation-delay: 0.22s; }
      .flame:nth-child(11) { animation-duration: 0.8s; animation-delay: 0.03s; }
      .flame:nth-child(12) { animation-duration: 0.6s; animation-delay: 0.28s; }
      @keyframes flicker {
        0%   { transform: scaleY(1)   scaleX(1)    skewX(0deg); }
        100% { transform: scaleY(0.8) scaleX(0.92) skewX(3deg); }
      }
      .fire-text {
        position: absolute;
        bottom: 140px;
        left: 50%;
        transform: translateX(-50%);
        font-family: 'Fraunces', serif;
        font-size: 1.6rem;
        font-weight: 600;
        color: #fff;
        white-space: nowrap;
        text-shadow: 0 0 20px rgba(255,100,0,0.9), 0 2px 8px rgba(0,0,0,0.3);
        animation: textFloat 4s ease forwards;
      }
      @keyframes textFloat {
        0%   { opacity: 0; transform: translateX(-50%) translateY(20px); }
        15%  { opacity: 1; transform: translateX(-50%) translateY(0); }
        70%  { opacity: 1; transform: translateX(-50%) translateY(0); }
        100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
      }
    `;
    document.head.appendChild(style);
  }

  function showFireToast() {
    const el = document.createElement('div');
    el.className = 'fire-container';
    el.innerHTML = `
      <div class="fire-text">🔥 On Fire</div>
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="fg1" cx="50%" cy="100%" r="60%">
            <stop offset="0%" stop-color="#fff176"/>
            <stop offset="40%" stop-color="#ff9500"/>
            <stop offset="100%" stop-color="#ff3d00" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="fg2" cx="50%" cy="100%" r="60%">
            <stop offset="0%" stop-color="#ffeb3b"/>
            <stop offset="50%" stop-color="#ff6d00"/>
            <stop offset="100%" stop-color="#b71c1c" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <!-- Base glow -->
        <ellipse cx="720" cy="160" rx="760" ry="60" fill="#ff3d00" opacity="0.35"/>
        <!-- Flame shapes — outer layer -->
        <path class="flame" d="M0,160 C60,130 80,80 120,50 C140,90 130,120 160,160Z" fill="url(#fg1)" opacity="0.7"/>
        <path class="flame" d="M100,160 C160,110 200,40 250,10 C270,60 260,110 300,160Z" fill="url(#fg1)" opacity="0.8"/>
        <path class="flame" d="M240,160 C290,120 310,60 360,20 C380,70 370,120 410,160Z" fill="url(#fg2)" opacity="0.75"/>
        <path class="flame" d="M370,160 C420,100 460,30 510,5 C530,55 510,120 550,160Z" fill="url(#fg1)" opacity="0.85"/>
        <path class="flame" d="M490,160 C540,110 580,50 620,15 C645,65 630,120 670,160Z" fill="url(#fg2)" opacity="0.8"/>
        <path class="flame" d="M620,160 C670,100 710,35 760,8 C780,55 765,115 800,160Z" fill="url(#fg1)" opacity="0.85"/>
        <path class="flame" d="M750,160 C800,105 840,40 885,12 C905,62 890,120 930,160Z" fill="url(#fg2)" opacity="0.75"/>
        <path class="flame" d="M880,160 C930,110 970,45 1015,15 C1035,65 1020,120 1060,160Z" fill="url(#fg1)" opacity="0.8"/>
        <path class="flame" d="M1010,160 C1060,100 1100,35 1150,10 C1170,60 1155,115 1195,160Z" fill="url(#fg2)" opacity="0.85"/>
        <path class="flame" d="M1150,160 C1195,115 1230,55 1270,20 C1290,70 1275,120 1315,160Z" fill="url(#fg1)" opacity="0.75"/>
        <path class="flame" d="M1280,160 C1325,110 1360,50 1400,18 C1420,65 1405,120 1440,160Z" fill="url(#fg2)" opacity="0.8"/>
        <!-- Inner brighter layer -->
        <path class="flame" d="M60,160 C100,140 115,105 140,80 C155,105 148,135 175,160Z" fill="#ffeb3b" opacity="0.6"/>
        <path class="flame" d="M200,160 C240,130 270,80 305,55 C320,85 310,130 340,160Z" fill="#fff176" opacity="0.55"/>
        <path class="flame" d="M430,160 C465,125 490,75 525,45 C540,78 532,128 560,160Z" fill="#ffeb3b" opacity="0.6"/>
        <path class="flame" d="M650,160 C685,125 710,70 748,40 C762,75 752,128 780,160Z" fill="#fff176" opacity="0.55"/>
        <path class="flame" d="M870,160 C905,128 930,72 968,42 C982,77 972,128 1000,160Z" fill="#ffeb3b" opacity="0.6"/>
        <path class="flame" d="M1100,160 C1135,128 1160,72 1198,42 C1212,77 1202,128 1230,160Z" fill="#fff176" opacity="0.55"/>
        <path class="flame" d="M1330,160 C1360,132 1380,88 1408,62 C1420,90 1412,132 1440,160Z" fill="#ffeb3b" opacity="0.6"/>
      </svg>
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4200);
  }

  function updateStreakUI() {
    const meta = document.querySelector('.q-meta');
    if (!meta) return;
    const existing = meta.querySelector('.fire-badge');
    if (onFire && !existing) {
      const badge = document.createElement('span');
      badge.className = 'fire-badge';
      badge.textContent = '🔥 On Fire';
      meta.appendChild(badge);
    } else if (!onFire && existing) {
      existing.remove();
    }
  }

  function handleStreak(isCorrect) {
    if (isCorrect) {
      streak++;
      if (streak === 6 && !onFire) {
        onFire = true;
        showFireToast();
      }
    } else {
      streak = 0;
      if (onFire) {
        onFire = false;
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
    updateStreakUI();
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
