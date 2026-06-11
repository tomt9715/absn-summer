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
    buildDeck();
    idx = 0; correctCount = 0; answered = false; results = [];
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
        ${q.image ? `<div class="q-image-wrap"><img src="${q.image}" alt="Clinical image" class="q-image" /></div>` : ''}
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
