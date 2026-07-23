# ABSN Summer Study Site — KC & DD Build Playbook

A handoff guide so any new Claude session can build Knowledge Check (KC), Deep Drill (DD),
Professor question banks, Mixed Review rounds, and hub pages for Tom's `absn-summer` study
site exactly the way we do it. Point Claude at this file at the start of a session: "read the
playbook on my Desktop first."

---

## 0. Quick orientation

The site is a config-driven quiz platform. Every quiz is just a JavaScript data file
(`window.QUESTIONS = [...]`) loaded by a thin HTML shell that hands it to one shared engine
(`shared/engine.js`). To add a quiz you write a data file, write a matching HTML page, and
add a card to the exam hub. That is the whole job.

Four kinds of question bank exist:
- **KC (Knowledge Check)** — "Know it cold." Recall and facts. Comprehensive per chapter.
- **DD (Deep Drill)** — "Apply it." Clinical scenarios. 90% hard / 10% medium, never easy.
- **Professor bank** — the professor's actual lecture questions, reproduced faithfully.
- **Mixed Review / Exam Simulator** — a large cross-chapter bank that randomly samples a
  subset each attempt. See section 6. Reusable pattern — expect to build one of these per
  exam going forward, not just for psych exam 3.

---

## 1. Environment and file system (READ THIS FIRST)

Tom's machine is connected over the Filesystem MCP. It is a DIFFERENT filesystem from
Claude's own code-execution container. That distinction causes the most mistakes.

**Tools that work on Tom's Mac (use these):**
- `Filesystem:read_text_file` — read a file (has `head` / `tail` options)
- `Filesystem:write_file` — create OR overwrite a whole file (there is no partial write)
- `Filesystem:edit_file` — line-based find/replace on an existing file (git-style diff back).
  Re-read the file right before editing; exact whitespace must match.
- `Filesystem:list_directory`, `Filesystem:create_directory`

**Tools that DO NOT work on Tom's Mac (they hit Claude's container, not the Mac):**
- `str_replace` and `create_file` — never use these for site files. They will fail or write
  to the wrong place. Use `Filesystem:write_file` / `Filesystem:edit_file` instead.

**No delete tool exists on Tom's Mac.** To retire a file, move it to `_archive/` at the repo
root (`Filesystem:move_file`) instead of trying to delete it. Keeps it recoverable and out
of the way without needing a delete capability that isn't there.

**If the Filesystem MCP times out or returns "File not found" for a file you just wrote**:
this has happened as a transient hiccup, not a real problem — re-read the file to check what
actually landed before assuming the write failed, and just retry the edit. Don't restructure
your approach based on one failed call; confirm state first.

**Key paths:**
- Repo root: `/Users/tomthomas/Documents/GitHub/absn-summer/`
- Shared engine: `shared/engine.js` — the one quiz engine, shared by every quiz
- Shared styles: `shared/quiz.css` (quiz pages), `shared/hub.css` (hubs), `shared/footer.js`
- Courses: `medsurg2/`, `psych/`
- Deploy target: GitHub Pages at `tomt9715.github.io/absn-summer/` — changes go live only
  after Tom commits and pushes. Nothing is auto-deployed.

**Directory shape (per exam):**
```
psych/exam3/
  index.html            <- the exam hub (lists topics + prof banks + mixed review)
  ocd-kc.html           <- one thin shell per quiz
  ocd-dd.html
  nclex-challenge.html  <- the mixed review round for this exam
  data/
    ocd-kc.js           <- window.QUESTIONS = [...]
    ocd-dd.js
    ocd-prof-qs.js
    nclex-challenge.js
```

---

## 2. Question data file format

Every data file is just:
```js
window.QUESTIONS = [ { ...question... }, ... ];
```

The engine supports THREE question types. It auto-detects by the fields present.

### a. Single-select
```js
{
  stem: "Question text",
  options: ["Correct answer", "Distractor", "Distractor", "Distractor"],
  correct: 0,
  rationale: "Why the answer is right and the others are wrong."
}
```
**`correct: 0` ALWAYS for KC and DD.** Author the correct answer as option index 0; the engine
shuffles option order at runtime, so position 0 is never a tell. (Exception: professor banks —
see section 5 — preserve her real answer position.)

### b. Select All That Apply (SATA) — partial credit
```js
{
  stem: "... Select all that apply.",
  options: ["Right", "Right", "Right", "Wrong", "Wrong"],
  correct: [0, 1, 2],
  rationale: "..."
}
```
`correct` is an array of indices. Scoring: +1 per correct selected, -1 per incorrect selected,
floored at 0, normalized to the number of correct options (so 3 of 5 correct with nothing wrong
selected scores 3/5). Author correct ones first; engine shuffles.

### c. Matching — partial credit (engine feature we added for psych exam 3)
```js
{
  stem: "Match each description to the correct term.",
  pairs: [
    { left: "Prompt shown with a dropdown", right: "Its correct match" },
    { left: "Another prompt", right: "Its correct match" }
  ],
  decoys: ["An extra right-column choice that matches nothing"],  // optional
  rationale: "..."
}
```
Rendered as a lettered answer key plus one dropdown per left item. Scoring: one point per
correctly matched pair, normalized to the pair count. `decoys` is optional (extra wrong options).
Use matching mainly in professor banks when she ran an in-class matching game.

**Formatting rules for data files:**
- Escape double quotes inside strings with `\"`.
- Tom's doc style: no em dashes (use `--`), no emojis. Applies to stems, options, rationales.
- Start each data file with a short header comment naming the course/exam/chapter and the
  convention (see existing files for the exact comment style).
- **No embedded reasoning inside answer options.** For any question that asks "which term
  applies" or "which diagnosis fits," the options should be the bare term/diagnosis only —
  never "Term, since [reason]." A justification clause attached only to the correct answer
  (or attached with more confidence/completeness than the distractors) is a tell; it lets
  someone pick the right answer by spotting the best-written explanation instead of actually
  knowing the material. All reasoning belongs in the `rationale` field, which the person only
  sees after answering. This applies to KC and Mixed Review as much as DD — the DD section
  below has more detail on the parallel-option standard this rule is part of.
- Similarly, never build a "term — definition" pairing where the options literally spell out
  the definition next to the term (e.g. "Excoriation — skin-picking disorder"). That's the
  same tell in SATA form. If the point is testing term-to-definition recall, test it through
  a vignette that requires recognizing the concept, not a dictionary lookup.

---

## 3. KC (Knowledge Check) construction rules

Purpose: drill the facts of a chapter cold. Comprehensive.

- Cover the whole chapter. Typical KC is ~30-50 questions depending on chapter density.
- Question-style variety: direct recall, "which finding distinguishes X from Y," two-item
  compare, cause-and-effect, "which statement correctly explains," priority/first-action,
  plus SATA where the source material lists sets.
- Distractors must be plausible and specific, not obviously wrong. The answer should not stand
  out by being longer, more detailed, or the only "complete" option.
- KC options may include brief definitions when the question is genuinely a definition
  question ("which statement best defines X") — but see the no-embedded-reasoning rule in
  section 2: even here, don't attach a justification clause that only the correct option gets.
- Rationales are thorough (2-4 sentences): state why the answer is right AND why the key
  distractors are wrong; teach an extra point where useful.
- `correct: 0`, `passThreshold: 77`.
- Stay tight to the source (study guide + the professor's own materials). Do not test facts
  the professor did not cover. When the study guide and her lecture deck conflict on a fact,
  teach the study-guide version, put BOTH in the rationale, and flag the conflict to Tom.

---

## 4. DD (Deep Drill) construction rules — THE IMPORTANT ONE

Purpose: apply the material the way the exam will. These are the saved preferences Tom
calibrated carefully. Follow them exactly.

**Difficulty mix: 90% HARD, 10% MEDIUM. NO EASY questions in any topic.**

**Distractor standard (this is the whole game):**
- All 4 options must be PARALLEL in form, length, and detail. If the correct answer is a plain
  clinical action, every distractor is a plain clinical action of similar length.
- Distractors must be genuinely plausible: real misconceptions, or right-category/wrong-specific
  (a true fact aimed at the wrong condition), or a reasonable-but-wrong-priority action. You
  should need to know the content to eliminate them. NEVER blatantly wrong or absurd ("no nurse
  would do this") distractors.
- NO TELLS on the correct answer:
  - No editorializing that flags it, e.g. "...which suggests infection."
  - No soft padding that only the correct choice gets, e.g. "provide comfort and reassurance."
  - Do not make the correct one the only option with a justification clause (see section 2 —
    this applies beyond DD too, but DD is where it matters most).
- Single-term / bare answers stay BARE — no definitions attached (e.g. Vertigo / Dizziness /
  Syncope / Ataxia, with nothing after them). DD answer choices are plain clinical actions or
  bare terms only; no embedded definition after a dash.

**Content approach:**
- Scenario-driven vignettes: priority/"first action," "which client to assess first,"
  discrimination vignettes (tell apart look-alike conditions), and "need for further teaching"
  / "indicates understanding" stems (hunt the one false or one true statement).
- DD should COMPLEMENT the KC, not duplicate it. KC owns the definitions and facts; DD owns
  application, judgment, and discrimination. If a fact is already a KC recall item, turn it into
  a scenario in DD rather than repeating it.
- Typical DD is ~16-19 questions, usually with one SATA. `correct: 0`, `passThreshold: 77`.

---

## 5. Professor bank construction rules

Purpose: her actual lecture questions, reproduced as faithfully as possible.

- Reproduce her stems and options close to verbatim. Preserve her original answer position —
  `correct` is NOT always 0 in prof bank files, unlike KC and DD.
- Adapt her rationale (clean it up, keep her reasoning). Keep her SATA as SATA and her in-class
  matching games as matching questions (`pairs`, with `decoys` if she had extra options).
- If a matching game has an ambiguous pairing (two prompts validly mapping to one answer),
  collapse it so scoring stays fair, and note the change to Tom.
- Tag these "Exam Review." They render in a separate `.prof-banner` card grid at the TOP of the
  hub (above the topic sections), one card per chapter.
- File name: `{topic}-prof-qs.js`; key: `{course}_{exam}_{topic}_prof` (e.g. `ps_e3_ocd_prof`).

**Extracting her questions from Keynote (.key) files:**
Her decks are Apple Keynote. Text lives in compressed protobuf (IWA) inside the .key zip.
In Claude's code-execution container (not the Mac):
```bash
pip install python-snappy --break-system-packages
```
Then decompress each `Index/Slide-*.iwa`: read 4-byte chunk headers (1 flag byte + 3-byte
little-endian length), `snappy.decompress` each chunk, concatenate, and pull printable ASCII
runs. Slides carry the stem, lettered options, and often "Rationale:" text. (A working
extraction script was used for exam 3 — rewrite it the same way if her .key files come again.)
`.docx` study guides: `extract-text /path/file.docx` in the container.

---

## 6. Mixed Review / Exam Simulator round — reusable pattern

Purpose: a big cross-chapter bank that draws a fresh random subset every attempt, so it feels
like a full practice exam rather than another per-chapter quiz. Built once for psych exam 3
(as "NCLEX Challenge Round"), and it's a good enough practice format to build for every future
exam — topics and question counts will differ each time, the pattern doesn't.

**Data file:**
- One large bank (e.g. 100-120 questions) covering every chapter in the exam, tagged only by
  which chapter each question belongs to in your own bookkeeping (not in the file itself).
- `QUIZ_CONFIG.maxQuestions: 50` (or whatever fraction makes sense) caps each attempt to a
  random subset of the full bank, reshuffled every attempt — the engine handles this natively,
  no extra code needed beyond setting `maxQuestions`.
- Same `correct`/SATA conventions as KC/DD. Apply the no-embedded-reasoning rule from section 2
  especially carefully here.

**The single biggest risk building this: duplicating the KC/DD/prof content.**
Since the same person (Claude) typically writes all four banks from the same finite study
guide, it's very easy to unconsciously reach for the same "canonical" vignette a second time —
the same character setup, the same illustrative example, sometimes the same sentence. This
happened for real building the psych exam 3 round: over half the first draft turned out to
closely match existing KC/DD/prof questions (same quote, same scenario, sometimes near-verbatim).
Before finalizing a mixed review bank:
1. Read through the KC, DD, and prof bank files for every chapter it covers.
2. For each fact you're about to test, deliberately pick a different character, setting, or
   question framing than whatever those files already used for that same fact. Changing the
   underlying question TYPE (e.g. KC tests it as direct recall, DD as a single vignette — make
   the mixed-review version a SATA or a two-client comparison instead) is often the most
   reliable way to make it feel genuinely different, not just reworded.
3. When a fact only has one sensible way to test it and full non-overlap isn't realistic (the
   guide is finite), that's fine — but the framing, wording, and vignette details should still
   differ from the other banks even when the tested fact is identical.

**Dark theme reskin — scoped to this quiz type only, not a general technique.**
Tom wanted the mixed-review/simulator page specifically to feel different from the rest of the
site (a bigger, more "final exam" moment), so it gets a dark theme. The other quiz types (KC,
DD, prof) stay on the site's normal light theme — don't reach for this elsewhere without being
asked. The technique: add a `<style>` block in the page's own `<head>`, placed AFTER the
`shared/quiz.css` `<link>`, that redeclares the same CSS custom properties `quiz.css` already
defines (`--bg`, `--surface`, `--accent`, `--correct`, `--wrong`, etc.) with dark-theme values.
Because it's a later declaration of the same variable names, it overrides the light theme for
that one page only — `quiz.css` itself is never touched, so every other quiz on the site is
unaffected. Copy the exact variable block from `nclex-challenge.html` or a simulator page
rather than reinventing the palette.

**Gated start screen** (also page-local, not an engine change):
`engine.js` has no built-in start screen — it renders question 1 into `#quiz-area` immediately
on load. To get a "here's what's in this round, click to begin" screen instead:
```html
<div class="nclex-start-card" id="startCard"> ...chapter list, Enter button... </div>
<div id="quiz-area" style="display:none;"></div>
<script>
  document.getElementById('enterBtn').addEventListener('click', function () {
    document.getElementById('startCard').style.display = 'none';
    document.getElementById('quiz-area').style.display = 'block';
  });
</script>
```
The engine has already rendered question 1 behind the scenes by the time someone clicks in.
Also show the person's attempt history (score + date/time, best one badged) on this start
screen, reading the same `{key}_history` array the engine already writes — no new storage.

**Results-screen extras:** since `engine.js`'s results markup is shared by every quiz, don't
hardcode round-specific button text into the shared file. Instead, watch for the results card
to render with a small `MutationObserver` on `#quiz-area`, then inject page-local buttons (e.g.
"Try another 50 questions" calling the engine's exposed `window.__quizStart()`, and "Back to
[round name] start" calling `location.reload()`). Keeps the shared engine generic while still
getting round-specific wording.

**Naming:** file/key names follow whatever the exam already calls this feature — psych exam 3
uses `nclex-challenge.js`/`.html`, key `ps_e3_mixed_nclex`; exam 1/2 call it `simulator.js`/
`.html`, key `{course}_{exam}_sim`. Match the existing convention for that exam rather than
forcing one name everywhere.

---

## 7. HTML quiz page template

One thin shell per quiz. Copy an existing one and change the title line, the `quiz-sub`
blurb, and the `QUIZ_CONFIG`. KC and DD shells are identical except the tag/type/title/data-src.
Mixed Review / Simulator shells add the dark reskin and gated start screen from section 6 —
copy an existing one of those (e.g. `nclex-challenge.html`) rather than building from scratch.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TOPIC: Deep Drill -- Psych Exam 3</title>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<link rel="stylesheet" href="../../shared/quiz.css">
</head>
<body>
<div class="wrap">
  <div class="top-bar">
    <a href="index.html" class="back-link">&larr; Back to hub</a>
  </div>
  <div class="quiz-title-row">
    <span class="quiz-type-tag">Deep Drill</span>
    <h1>TOPIC: Apply It</h1>
    <p class="quiz-sub">N questions &middot; short description of scope &middot; Select All That Apply questions score partial credit</p>
  </div>
  <div id="quiz-area"></div>
</div>
<script>
  window.QUIZ_CONFIG = {
    key: "ps_e3_topic_dd",
    title: "TOPIC: Deep Drill",
    type: "Deep Drill",
    tag: "TOPIC",
    passThreshold: 77
  };
</script>
<script src="data/topic-dd.js"></script>
<script src="../../shared/engine.js"></script>
</body>
</html>
```
For KC: `quiz-type-tag` and `type` = "Knowledge Check", title "TOPIC: Know It Cold",
`key` ends `_kc`, data src ends `-kc.js`. Depth of `../../` assumes `course/examN/` (two levels
under repo root); match whatever the neighboring files use.

---

## 8. Wiring the exam hub (`examN/index.html`) — current default layout

The hub layout was substantially redesigned during the psych exam 3 build. This is now the
default for new exam hubs going forward, and the plan is to retrofit the older MedSurg hubs to
match rather than keep two different layouts on the site.

**Structure, top to bottom:**
1. Hero: back link, eyebrow, exam title, countdown card with a readiness ring.
2. Jump-nav: a row of small color-coded chips, one per chapter plus one for the professor bank
   section and one for the mixed review round, linking to anchors further down the page. Uses
   IntersectionObserver to highlight whichever chip corresponds to the section currently in view.
3. Professor's Practice Questions banner (if this exam has one) — unchanged from before, a
   `.prof-banner` card grid.
4. Topic Practice banner — the KC/DD content, now grouped into bordered "topic-pair" boxes
   (one box per chapter, colored top edge + chapter label, with the KC and DD cards inside),
   NOT six separate full-width stacked sections like the old layout. Same content, much less
   vertical scrolling, and it matches the density of the professor banner instead of looking
   like a different design system.
5. Mixed Review / Exam Simulator banner (see section 6) — dark, visually distinct from
   everything else on the page since it's the "final exam" moment.
6. How-to-use-this tips box, donation footer.

**Chapter color palette** — six colors, reused consistently across jump-nav chips, topic-pair
top-edge borders, and card hover accents so a chapter reads as the same color everywhere it
appears on the page:
```
personality: #9c4fb0 (purple)     trauma:  #b5762e (amber)
anxiety:     #3a72b0 (blue)       abuse:   #a83d5c (rose)
ocd:         #2f7d70 (teal)       anger:   #9c8a2e (olive/gold)
```
For exams with fewer or different topics, assign colors from this same set in whatever order
the chapters appear — don't invent a new palette per exam, reuse this one for visual consistency
across the whole site.

**Readiness ring:** shows the average of best scores across every KC/DD/prof quiz the person
has actually attempted (not just "% of quizzes attempted," which doesn't say anything about how
they're doing). Excludes the mixed review round from the average, since it draws from the same
material rather than adding new ground to cover.

**Width note:** `.wrap` is a narrow container (~760px). Banners that need to be wider (prof
banner, topics banner, mixed review banner) intentionally break out using:
```css
width: min(1180px, calc(100vw - 2.4rem));
margin-left: 50%;
transform: translateX(-50%);
```
Don't use plain `margin: 0 auto` for these — it only centers reliably when the parent's actual
width matches what you expect, and `.wrap` being narrower than the banner breaks that. The
hero, tips box, and footer stay at the narrow width on purpose (prose content reads better
narrower; grids benefit from the extra width).

**Data + wiring:** the hub has an `EXAM` object. Each topic needs a `slug` (used for the
jump-nav anchor and the topic-pair `id`), a `chapterLabel` (used on the topic-pair header), and
a `quizzes` array with a KC and DD entry:
```js
{
  name: "Obsessive-Compulsive & Related Disorders",
  slug: "ocd",
  chapterLabel: "Ch 15 \u00b7 OCD",
  count: "51 questions",
  quizzes: [
    { type: "Knowledge Check", name: "Know it cold", count: "33 questions", href: "ocd-kc.html", key: "ps_e3_ocd_kc" },
    { type: "Deep Drill",     name: "Apply it",     count: "18 questions", href: "ocd-dd.html", key: "ps_e3_ocd_dd" }
  ]
}
```
Set `href` to the page to make a card live; `href: null` renders a "Soon" badge. Update the
topic `count` to the combined KC+DD total when both are live.

Professor banks live in the `.prof-banner` block, one `<a class="prof-card">` per chapter, each
pointing at its `-prof-qs.html` shell — give each card the same `--card-accent` inline style as
its chapter color for consistency with the topic-pair boxes.

Also flip the parent course list (`psych/index.html` or `medsurg2/index.html`): find the exam in
the `EXAMS` array and set `href` + `ready: true` + a topics string so the exam is reachable.

Use `Filesystem:edit_file` for small hub edits (read the file first, match whitespace exactly).
Use `Filesystem:write_file` when creating a new file or rewriting a whole one — for a layout
change this size, a full rewrite is usually safer than a long chain of small edits.

---

## 9. Naming conventions

- Files: `{topic}-kc.js` / `{topic}-dd.js` / `{topic}-prof-qs.js` and matching `.html`.
  Mixed review: `nclex-challenge.js`/`.html` or `simulator.js`/`.html` depending on what the
  exam calls it (see section 6).
- localStorage keys (must be unique per quiz): `{course}_{exam}_{topic}_{type}`
  - course: `ms2` (MedSurg II), `ps` (Psych)
  - exam: `e1`, `e2`, `e3`
  - type: `kc`, `dd`, `prof`, or `sim`/`mixed_{name}` for the mixed review round
  - Examples: `ms2_e3_stroke_dd`, `ps_e3_anger_kc`, `ps_e3_ocd_prof`, `ps_e3_mixed_nclex`
- The engine stores `{key}_best`, `{key}_last`, `{key}_history`, `{key}_inprogress` off this key,
  and the hub reads `{key}_best` for the badge — so the key in the HTML `QUIZ_CONFIG` and in the
  hub's `quizzes[]` entry MUST match exactly.

---

## 10. Engine behavior (so you know what you get for free)

`shared/engine.js` already handles: shuffling questions and options; single-select, SATA
(partial credit), and matching (partial credit); a streak/fire animation at 10 correct in a row;
resume-from-exit (saves progress in localStorage, offers Continue/Start over — only triggers
once the person is at least on question 2, not while still sitting on question 1 with nothing
answered yet); best-score + full attempt history (every past attempt with score and date, best
one highlighted) + up/down trend; auto-advance on full credit (correct single-select, 100%
SATA, or a fully-correct matching question moves to the next question automatically after a
brief pause — anything less than full credit still pauses on the rationale with a manual Next
button); and a results screen with Full Review / Missed Only tabs showing each rationale, plus
a "Back to hub" link (goes to `index.html` in the same folder as the quiz). `passThreshold`
(use 77) only sets the pass/fail color and message. You do not need to touch the engine to add
quizzes — only if adding a brand-new question TYPE or a genuinely new shared behavior.

---

## 11. Step-by-step: adding one topic

1. Read the study guide section for the chapter (and the professor bank if one exists) so KC and
   DD complement each other and match how she tests.
2. Write `data/{topic}-kc.js` — comprehensive, `correct: 0`, thorough rationales.
3. Write `data/{topic}-dd.js` — 90/10 hard, parallel tell-free distractors, scenario-driven.
4. Write `{topic}-kc.html` and `{topic}-dd.html` from the template (fix title, sub, config, src).
5. Edit `examN/index.html`: set both `href`s live and update the topic `count`.
6. If it is the last piece of the exam, confirm the parent course list marks the exam `ready`,
   and consider whether the exam is ready for a Mixed Review / Exam Simulator round (section 6).
7. Tell Tom it is not live until he commits + pushes `absn-summer`.

Standing preference: when finishing a topic, put it fully on the site (data + html + hub) in the
same pass so we do not have to come back to it.

---

## 12. Tom's preferences (quick reference)

- DD: 90% hard / 10% medium, no easy. Parallel, plausible, tell-free options. Bare single-term
  answers. (Section 4 is the full spec.)
- No embedded reasoning inside answer options ("Term, since [reason]") for any bank, not just
  DD — reasoning belongs in the rationale, never in the option itself. (Section 2.)
- Docs/writing: no em dashes (use `--`), no emojis, brief and casual.
- Build the whole topic (KC + DD + hub wiring) before moving on.
- Flag any conflict between the study guide and her lecture deck rather than silently picking one.
- Mixed Review / Exam Simulator rounds are a standing feature to build for every future exam,
  not a one-off for psych exam 3 — topics and counts will differ, the pattern stays the same.
- The new hub layout (jump-nav, readiness ring, topic-pair boxes, color palette) is the new
  default going forward, including retrofitting the older MedSurg hubs to match.
- The dark theme reskin is specific to Mixed Review / Exam Simulator pages only — don't apply
  it to KC, DD, or professor bank pages, which stay on the site's normal light theme.

---

## 13. Current state (as of July 2026)

**MedSurg II**
- exam1, exam2: complete.
- exam3 (Neuro): 5 topics, each KC + DD complete -- Neuro Assessment, Neurological Dysfunction,
  Stroke, Neuro Trauma, Neuro Infections & Autoimmune. Pending: full mixed simulator (waiting on
  the exam blueprint) and possibly one more week of topics. CH 66 (Parkinson's/Huntington's/ALS)
  was dropped from this exam.
- Still on the old hub layout -- planned to be retrofitted to the new layout from section 8.

**Psych (NUR 2010)**
- exam1, exam2: complete (exam2 has KC + DD + professor banks + simulator). Both hubs and
  simulators updated to the new layout and dark-reskin pattern from sections 6 and 8.
- exam3: COMPLETE. Six topics, each with KC + DD + professor bank --
  Personality Disorders (Ch 18), Anxiety (Ch 14), OCD & Related (Ch 15), Trauma & PTSD (Ch 13),
  Abuse & Violence (Ch 12), Anger & Aggression (Ch 11). Exam date Tue Jul 21, 2026.
- Mixed Review round ("NCLEX Challenge Round") complete: 116 questions across all six chapters,
  `nclex-challenge.js`, key `ps_e3_mixed_nclex`, `maxQuestions: 50`. Checked against the KC, DD,
  and professor banks to remove overlap, and checked directly against
  `NUR2010_Exam3_Study_Guide.docx` for accuracy. Uses the new hub layout and dark-reskin pattern.
- PTSD timeline: her study guide places the acute-stress/PTSD line at 1 month; her lecture deck
  separately frames PTSD as "3 months or more." KC/DD/mixed-review all teach the 1-month line as
  primary with the 3-month framing noted in the rationale, per the standing conflict-resolution
  rule in section 3. Worth confirming with her which one her exam actually uses.

**Shared**
- `engine.js` supports matching questions (`pairs` + optional `decoys`) with partial credit,
  auto-advance on full credit, attempt history display, and a fixed resume-prompt threshold
  (only offers Continue once the person is past question 1). Backward compatible with every
  existing quiz.

Nothing is pushed automatically -- remind Tom to commit + push to publish.
