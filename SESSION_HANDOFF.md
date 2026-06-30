# ABSN Summer Study Site — Session Handoff
**Last updated:** June 30, 2026  
**Repo:** `absn-summer` → live at `tomt9715.github.io/absn-summer/`  
**Local repo:** `/Users/tomthomas/Documents/GitHub/absn-summer/`  
**Deploy:** GitHub Desktop → commit → push

---

## Architecture

Shared-engine, config-driven. Every quiz is an HTML shell + a `data/*.js` file that sets `window.QUESTIONS` and `window.QUIZ_CONFIG`.

```
absn-summer/
├── index.html                          ← root hub (welcome modal)
├── ekg-verify.html                     ← EKG verification tool (not linked from hub)
├── shared/
│   ├── engine.js                       ← shared quiz engine (single-select + SATA w/ partial credit)
│   ├── quiz.css                        ← quiz page styles
│   ├── hub.css                         ← hub page styles
│   └── footer.js
├── medsurg2/exam1/
│   ├── index.html                      ← MedSurg II exam hub
│   ├── abg-interpreter.html            ← ABG interpreter (Tic-Tac-Toe + ROME)
│   ├── ekg-interpreter.html            ← EKG strip interpreter (4-step framework)
│   ├── simulator.html                  ← MedSurg II Exam 1 simulator
│   ├── [topic]-kc.html / -dd.html      ← 4 topics × 2 = 8 quiz pages
│   └── data/
│       ├── simulator.js                ← 56 Q bank, draws 50
│       ├── dysrhythmias-kc.js / -dd.js
│       ├── fluids-electrolytes-kc.js / -dd.js
│       ├── respiratory-kc.js / -dd.js
│       └── vision-hearing-kc.js / -dd.js
│   └── images/
│       ├── Cataracts.jpg
│       ├── Glaucoma.jpg
│       ├── age-related-macular-degeneration.jpg
│       └── [9 EKG strip JPEGs]
├── medsurg2/exam2/
│   ├── index.html                      ← MedSurg II Exam 2 hub
│   ├── simulator.html                  ← MedSurg II Exam 2 simulator (50 Q, exact blueprint, incl. SATA)
│   ├── shock-mods-kc.html / -dd.html
│   ├── burns-kc.html / -dd.html
│   ├── kidney-kc.html / -dd.html
│   ├── hepatic-kc.html / -dd.html
│   ├── biliary-kc.html / -dd.html
│   └── data/
│       ├── simulator.js                ← 50 Q, fixed (no subsampling), matches professor blueprint exactly
│       ├── shock-mods-kc.js / -dd.js
│       ├── burns-kc.js / -dd.js
│       ├── kidney-kc.js / -dd.js
│       ├── hepatic-kc.js / -dd.js
│       └── biliary-kc.js / -dd.js
└── psych/
    ├── index.html                      ← Psych exams root list (Exam 1, 2, 3, Final)
    ├── exam1/
    │   ├── index.html
    │   ├── simulator.html
    │   └── data/ (5 cluster files + simulator.js)
    └── exam2/
        ├── index.html                  ← Psych Exam 2 hub (source = uploaded study guides, not Obsidian)
        ├── simulator.html              ← Psych Exam 2 simulator (50 Q, exact blueprint, incl. SATA)
        ├── addiction-kc.html / -dd.html
        ├── mood-kc.html / -dd.html
        ├── schizophrenia-kc.html / -dd.html
        └── data/
            ├── simulator.js            ← 50 Q, fixed, matches professor blueprint exactly (16/17/17, 2 SATA)
            ├── addiction-kc.js / -dd.js
            ├── mood-kc.js / -dd.js
            └── schizophrenia-kc.js / -dd.js
```

---

## Design System

| Token | Value |
|---|---|
| `--bg` | `#f6f4ef` |
| `--accent` | `#b5482e` (terracotta) |
| `--teal` | `#2f6f6b` |
| `--gold` | `#b08534` |
| Fonts | Fraunces, DM Sans, JetBrains Mono |

---

## Engine Features (`shared/engine.js`)

- Fisher-Yates shuffle for questions AND answer positions
- `correct: 0` source convention for single-select — correct answer always at index 0 in data file
- **SATA (Select All That Apply) support:** set `correct` to an array of indices instead of a number (e.g. `correct: [0,1,2,3]`) to make a question SATA. Engine auto-detects via `Array.isArray(q.correct)`. Renders as toggleable checkboxes with a "Submit answer" button (disabled until at least one option is selected) instead of immediate-pick evaluation.
- **SATA partial credit:** scored as (correct options selected − incorrect options selected) / total correct options, floored at 0, capped at 1. Example: a question with 4 correct answers out of 6 options — selecting 3 correct + 1 incorrect nets (3-1)/4 = 50% credit on that question. Full marks require selecting exactly the correct set. The streak/fire system only counts a SATA question toward the streak if it earned full credit. Results review shows a gold "◐ Partial" badge with the points breakdown (e.g. "3/4 correct, 1 incorrect selected") distinct from the green "✓ Correct" and red "✗ Missed" badges. Added June 30, 2026, upgraded from all-or-nothing to partial credit same day per Tom's request.
- Optional `cfg.maxQuestions` cap (Exam 1 simulators use a draw from a larger pool; Exam 2 simulators for both MedSurg and Psych set 50 but the bank is exactly 50, so it's really just a safety cap, not a subsample)
- `image:` field support — renders image above stem with skeleton shimmer loader
- **Streak/fire system:** 10 consecutive correct → CSS flame animation on Q number (orange glowing circle with flickering CSS flame tips above it, no emoji). Resets on wrong answer. No popup animation — just the Q number itself.
- localStorage score persistence per quiz key (score is now able to be a non-integer percentage during accumulation when SATA partial credit is involved, but displayed percent is always rounded)

---

## Standing Rules (apply to ALL question writing)

- Every acronym expanded every occurrence (e.g. "electrocardiogram (ECG)")
- No em-dashes anywhere
- `correct: 0` always for single-select — correct answer at index 0 in the options array (SATA questions use `correct: [array of indices]` instead, see Engine Features above)
- **KC answer choices:** may include brief definitions/context since they test recall
- **DD answer choices:** plain clinical actions ONLY — no definitions, explanations, or rationale after a dash. The rationale field is where the teaching lives. Wrong: `"Administer atropine 0.5 mg IV push — first-line for symptomatic bradycardia"` / Right: `"Administer atropine 0.5 mg IV push"`
- Distractor length parity — correct answer must not be >1.5x longer than avg wrong answers
- All questions must map to content covered in KC/DD files for that topic
- No EKG reading/identification questions in the simulator or DD files — those belong exclusively to the EKG Interpreter
- When source material flags content with explicit emphasis (Obsidian `[!danger]`/`[!warning]` callouts, "TEST NOTE" language, or a professor study guide's red/highlighted/bolded text), that content gets heavier question coverage relative to its share of the material
- Simulator questions are always brand-new, NCLEX-style application/priority questions distinct from the KC/DD bank for that topic — never reused verbatim

---

## Question Bank Status

### MedSurg II Exam 1

| Topic | KC | DD |
|---|---|---|
| Vision & Hearing | 52 | 28 (incl. 3 image Qs) |
| Dysrhythmias | 43 | 23 |
| Respiratory | 48 | 22 |
| Fluid & Electrolytes | 43 | 20 |
| Simulator | 56 Q bank, draws 50 | — |

### MedSurg II Exam 2 (`medsurg2/exam2/`)

Same shared-engine architecture as Exam 1, separate hub at `medsurg2/exam2/index.html`. Exam date: Monday, July 7. **All 5 topics complete (231 questions) + full simulator built.**

| Topic | KC | DD | Status |
|---|---|---|---|
| Shock, Sepsis & MODS | 36 | 20 | Complete |
| Burns Management | 26 | 21 | Complete |
| Kidney Disorders | 34 | 20 | Complete |
| Hepatic Disorders | 32 | 18 | Complete |
| Biliary Disorders | 28 | 16 | Complete |

**Simulator** (`medsurg2/exam2/simulator.html` + `data/simulator.js`): 50 questions, fixed bank matching the professor's exact blueprint, not a random subsample like Exam 1's:
- Ch. 11 Shock, Sepsis, and MODS — 12 questions (2 SATA)
- Ch. 48 Kidney Disorders — 12 questions (1 SATA)
- Ch. 57 Burns Management — 12 questions
- Ch. 43 Hepatic Disorders — 7 questions
- Ch. 44 Biliary Disorders — 7 questions

All 50 are new application/priority-style questions distinct from the KC/DD banks. The 3 SATA questions required adding SATA support to `shared/engine.js` (see Engine Features above) — this is shared infrastructure, so SATA questions can now be authored for any quiz on the site going forward, not just this simulator. SATA scoring gives partial credit (see Engine Features).

Hepatic Disorders notes flagged two guaranteed-question topics ("there will be a question about lactulose" and a hepatitis transmission-modes test note) — both got dedicated heavy coverage across KC, DD, and the simulator.

Biliary Disorders notes flagged several `[!danger]` sections (cholecystitis signs/symptoms, post-op cholecystectomy interventions, patient education, pancreatitis signs/symptoms and nursing management) — all got proportionally heavier coverage, especially the pancreatitis subtopic.

Note: Burns content (KC, DD, and simulator) intentionally excludes Parkland formula calculation questions — Tom confirmed only Rule of Nines TBSA calculations are tested, not Parkland fluid resuscitation math. Existing Parkland calc questions were pulled and backfilled with Rule of Nines / other burns content to preserve question counts.

### Psych Exam 1
All 5 clusters complete + 45-Q simulator. Keys: `ps_e1_*`

### Psych Exam 2 (`psych/exam2/`)

New hub, built June 30, 2026. Exam date: **Tuesday, July 7** (same day as MedSurg Exam 2). Unlike MedSurg (sourced from Tom's own Obsidian lecture notes), Psych Exam 2 source material is two uploaded study guides since Tom's professor provides a comprehensive review sheet instead of requiring personal notes:
1. **Primary source (authoritative):** `NUR2010_Exam2_Master_StudyGuide.docx` — Tom's actual professor's guide. Contains the exact exam blueprint: 50 questions / 65 minutes / 2 SATA-NGN questions, split Ch 19 Addiction (16Q), Ch 17 Mood Disorders & Suicide (17Q), Ch 16 Schizophrenia & Psychosis (17Q).
2. **Secondary source (supplementary only):** `Psych_Study_Guide_Exam_2__Luiza_.pdf` — a different student's guide from a prior semester with a different professor. Compared against the primary guide; content overlaps heavily with no contradictions found. Used only to add non-conflicting depth (e.g. carbamazepine details, Beck Depression Inventory score cutoffs, succinylcholine as the ECT muscle relaxant, repetitive TMS, naloxone ED-observation requirement, anticholinergic toxicity mnemonic). One soft conflict noted: secondary guide states SSRIs in Bipolar I must always be paired specifically with olanzapine; primary guide only states an antidepressant should never be given alone in bipolar disorder without naming a specific agent. Treated the broader, primary-guide framing as the test-relevant fact and did not assert the olanzapine specificity as guaranteed exam content.

**All 3 topics + the simulator are now complete (214 questions total).**

| Topic | KC | DD | Status |
|---|---|---|---|
| Addiction & Substance Use (Ch 19) | 36 | 20 | Complete |
| Mood Disorders & Suicide (Ch 17) | 34 | 18 | Complete |
| Schizophrenia & Psychosis (Ch 16) | 36 | 20 | Complete |

**Simulator** (`psych/exam2/simulator.html` + `data/simulator.js`): 50 questions, fixed bank matching the professor's exact blueprint:
- Ch. 19 Addiction & Substance Use — 16 questions (no SATA)
- Ch. 17 Mood Disorders & Suicide — 17 questions (1 SATA: lithium toxicity findings)
- Ch. 16 Schizophrenia & Psychosis — 17 questions (1 SATA: negative symptom findings)

All 50 are new application/priority-style questions distinct from the KC/DD banks, mirroring the MedSurg Exam 2 simulator approach exactly. The 2 SATA questions match the blueprint's "2 SATA-NGN questions" requirement, distributed one in Mood Disorders (lithium toxicity, 4 correct of 6 options) and one in Schizophrenia (5 A's negative symptoms, 4 correct of 6 options), leaving Addiction as straightforward single-select to balance question-writing complexity across chapters.

**Addiction & Substance Use topic build notes:** heavily weighted toward the alcohol withdrawal timeline and DTs vasodilation/vasoconstriction mechanism (explicitly tested misconception: DTs cause hypertension/tachycardia, not hypotension/bradycardia), opioid overdose vs. withdrawal contrast, the naloxone/methadone/buprenorphine/naltrexone/clonidine medication framework (which drug for which phase), and the disulfiram-causes-acetaldehyde-syndrome-NOT-methadone distinction the guide calls out as "consistently tested."

**Mood Disorders & Suicide topic build notes:** heavily weighted toward lithium (therapeutic range 0.6-1.2, toxic at 1.8, factors that raise levels, early vs severe toxicity signs, consistent-not-low sodium teaching, Ebstein's anomaly/Category D), the SSRI 1-2 week danger window (energy returns before mood lifts), ECT specifics (informed consent can be withdrawn any time, succinylcholine, expected vs unexpected post-procedure findings), serotonin syndrome vs NMS (clonus/diarrhea/rapid onset vs lead-pipe rigidity/elevated CPK/slower onset), and the suicide risk-assessment and discharge-teaching content (direct questioning, sudden calm after depression, means restriction). Carbamazepine content (not in the primary guide at all) was folded in from the secondary guide since it's non-conflicting and the secondary guide treats it as a tested mood stabilizer alongside lithium.

**Schizophrenia & Psychosis topic build notes:** heavily weighted toward the three antipsychotic generations and the PINEs/DONEs/PIPs side-effect framework, complete EPS classification (acute dystonia, akathisia, pseudoparkinsonism, tardive dyskinesia, akinesia) with treatment and reversibility distinctions, clozapine's monitoring protocol and 5 black box warnings (agranulocytosis emphasized as most-tested), NMS recognition and treatment (cross-referenced with the same content built for Mood Disorders, since NMS is caused by antipsychotics and is relevant to both chapters), delusion and hallucination type vocabulary (paranoid/ideas of reference/control/grandiose/somatic/erotomanic; auditory/command/visual/tactile/olfactory/gustatory), and the paranoid schizophrenia nursing care and command-hallucination priority-action content (one-to-one observation before provider notification, home-visit firearm safety scenario from the primary guide).

---

## Image Questions (vision-hearing-dd.js)

3 patient-vision simulation images — shows what the patient sees, not clinical photographs:
- `Glaucoma.jpg` — tunnel vision (peripheral blackout, small central window)
- `Cataracts.jpg` — progressive blurring (normal → mildly blurry → very blurry)
- `age-related-macular-degeneration.jpg` — central blackout with peripheral vision intact

Answer choices for image questions = condition names only, no definitions.

---

## EKG Interpreter (`ekg-interpreter.html`)

9 strips, 5 parts each using the exact same 4-step framework every strip:
1. What is the heart rate?
2. Is the rhythm regular or irregular?
3. Are P waves present before every QRS?
4. What does the QRS complex look like?
5. Based on your analysis, what is this rhythm?

Strips shuffle each attempt. localStorage key: `ms2_e1_ekg`. Lives on the MedSurg II Exam 1 hub.

### 9 Verified Strips

| Strip | Rate | Rhythm | P Waves | QRS | Answer |
|---|---|---|---|---|---|
| normal-sinus-rhythm.jpg | 60-100 | Regular | Yes, upright before every QRS | Narrow normal | Normal Sinus Rhythm |
| sinus-bradycardia.jpg | <60 | Regular | Yes | Narrow normal | Sinus Bradycardia |
| sinus-tachycardia.jpg | >100 | Regular | Yes (may merge with T wave) | Narrow normal | Sinus Tachycardia |
| atrial-fibrillation.jpg | ~100 but irregular | Irregularly irregular | No — chaotic baseline | Narrow normal | Atrial Fibrillation |
| atrial-flutter.jpg | 75-150 | Regularly irregular | Sawtooth flutter waves | Narrow normal | Atrial Flutter |
| supraventricular-tachycardia.jpg | 150-250 | Regular | Hidden in T waves | Narrow normal | SVT |
| sinus-rhythm-with-1st-degree-heart-block.jpg | ~50 | Regular | Yes, PR >0.20 sec | Narrow normal | First Degree Heart Block |
| second-degree-av-block-type-1.jpg | ~50 | Regularly irregular | Progressive PR lengthening then dropped beat | Narrow normal | Wenckebach |
| ventricular-fibrillation.jpg | Indeterminate | Chaotic | None | None | V-Fib — defib immediately |

---

## ABG Interpreter (`abg-interpreter.html`)

20 scenarios. Two method options — toggle sticks for the whole session:

**Tic-Tac-Toe:** True 3×3 grid. Top row = ACID / NORMAL / BASE label squares (3 of the 9 squares). Rows 2-3 = clickable cells for pH, PaCO₂, HCO₃⁻. Student places each value in the correct column.

**ROME:** Student classifies each value as ↑ High / → Normal / ↓ Low by clicking buttons. Once all three classified, conclusion slides in showing:
- pH direction → Acidosis/Alkalosis
- PaCO₂ vs pH → Opposite = Respiratory (terracotta)
- HCO₃⁻ vs pH → Same = Metabolic (teal)

Numbers are displayed in the scenario text in bold — no separate value chips below the question.

---

## EKG Verify Tool (`ekg-verify.html`)

Standalone verification page at root of repo — not linked from any hub. Used to verify new strip questions before going live.

- One strip per screen, step dots show progress (5 dots per strip)
- Steps slide in horizontally from right (no scrolling)
- Wrong: shake animation + "Not quite — try again" toast (disappears after 2s)
- Correct: pulse animation, step dots fill green, next step slides in from right
- ← prev / next → navigation on both strips and steps
- Score tracks out of 45 total
- "Next strip →" button appears after completing all 5 steps

---

## MedSurg II Exam 1 Simulator — Key Decisions

56 question bank, draws 50 randomly per attempt. Hard, NCLEX-style, priority-based.

**Topics covered (mapped to KC/DD content):**
- Vision & Hearing: glaucoma emergencies, cataract post-op complications, ototoxicity, AMD urgent changes, Meniere's, BPPV, otitis media complications, hearing aid safety
- Dysrhythmias: A-fib anticoagulation, digoxin toxicity, cardioversion prep, pacemaker malfunction, Torsades, complete heart block emergency, atrial flutter + anticoagulation before cardioversion
- Respiratory: chest tube interpretation, tension pneumothorax, ARDS, TB complications, PE prevention, emphysema oxygen precautions, flail chest, incentive spirometer, TB isolation psychosocial
- F&E/ABGs: IV potassium safety, calcium gluconate mechanism, sodium correction rate, third spacing, opioid respiratory depression + ABG, isotonic fluid behavior, hypermagnesemia DTR monitoring

**Explicitly excluded (not covered in class):**
stapedectomy, enucleation, cardiac tamponade, glucagon antidote for beta blocker OD, amiodarone pulmonary toxicity, neutropenic precautions/ANC, refeeding syndrome/TPN, hyperchloremic metabolic acidosis from NS, postural drainage lobe positioning, mixed acidosis after seizure

## MedSurg II Exam 2 Simulator — Key Decisions

Fixed 50-question bank (not a draw-from-larger-pool like Exam 1) because Tom supplied the exact professor blueprint by chapter and SATA count. Engine still shuffles question order and answer-choice order each attempt. Question distribution:
- Ch. 11 Shock/Sepsis/MODS (12, 2 SATA): shock-type identification and priority interventions across all 5 shock types, vasopressor safety (SATA), MODS recognition (SATA), lactate trend interpretation
- Ch. 48 Kidney Disorders (12, 1 SATA): AKI category identification (prerenal/intrarenal/postrenal), hyperkalemia emergencies, GFR/dialysis thresholds, ESKD complications, nephrotic syndrome findings (SATA)
- Ch. 57 Burns Management (12): Rule of Nines TBSA calculations (x2 — no Parkland formula, see note above), zone of stasis, burn center transfer criteria, inhalation injury, CO poisoning, escharotomy, psychosocial care
- Ch. 43 Hepatic Disorders (7): lactulose titration, hepatitis transmission, asterixis/encephalopathy staging, variceal bleeding, hepatotoxic med avoidance, paracentesis care, bleeding risk
- Ch. 44 Biliary Disorders (7): cholecystitis recognition, ERCP NPO requirements, pancreatitis pain/labs, hypocalcemia severity correlation, JP drain troubleshooting, chronic pancreatitis causes, lithotripsy

SATA scoring uses partial credit (see Engine Features above), not all-or-nothing.

## Psych Exam 2 Simulator — Key Decisions

Fixed 50-question bank (not a draw-from-larger-pool), same approach as the MedSurg Exam 2 simulator, since the professor's study guide supplied the exact blueprint. Question distribution:
- Ch. 19 Addiction (16, no SATA): triage prioritization across withdrawal severities, DTs recognition, opioid OD vs withdrawal and naloxone follow-up, methadone QT risk, naltrexone safety teaching, disulfiram-alcohol reaction, stimulant/PCP/xylazine recognition, dual diagnosis, enabling vs codependency, relapse prevention and 12-step framing
- Ch. 17 Mood Disorders & Suicide (17, 1 SATA): manic-phase nursing care, lithium toxicity recognition and teaching (SATA: toxicity findings), SSRI danger window, MAOI tyramine crisis, bupropion contraindication, ECT consent/post-procedure care, serotonin syndrome vs NMS, suicide risk assessment and discharge teaching, BDI interpretation, carbamazepine monitoring
- Ch. 16 Schizophrenia & Psychosis (17, 1 SATA): command hallucination and home-visit safety priority actions, EPS recognition across all types (SATA: negative symptom findings), clozapine agranulocytosis monitoring, NMS, antipsychotic-specific side effects (risperidone hyperprolactinemia, aripiprazole akathisia, olanzapine+benzo respiratory risk, chlorpromazine potency profile), paranoid schizophrenia nursing care, delusion/hallucination vocabulary application

SATA scoring uses partial credit (see Engine Features above), not all-or-nothing.

---

## LocalStorage Keys

| Quiz | Key |
|---|---|
| Vision & Hearing KC | `ms2_e1_vh_kc` |
| Vision & Hearing DD | `ms2_e1_vh_dd` |
| Dysrhythmias KC | `ms2_e1_dysr_kc` |
| Dysrhythmias DD | `ms2_e1_dysr_dd` |
| Respiratory KC | `ms2_e1_resp_kc` |
| Respiratory DD | `ms2_e1_resp_dd` |
| Fluid & Electrolytes KC | `ms2_e1_fe_kc` |
| Fluid & Electrolytes DD | `ms2_e1_fe_dd` |
| MedSurg II Exam 1 Simulator | `ms2_e1_sim` |
| EKG Interpreter | `ms2_e1_ekg` |
| ABG Interpreter | `ms2_e1_abg` |
| Psych Exam 1 Simulator | `ps_e1_sim` |
| Shock, Sepsis & MODS KC | `ms2_e2_shock_kc` |
| Shock, Sepsis & MODS DD | `ms2_e2_shock_dd` |
| Burns Management KC | `ms2_e2_burns_kc` |
| Burns Management DD | `ms2_e2_burns_dd` |
| Kidney Disorders KC | `ms2_e2_kidney_kc` |
| Kidney Disorders DD | `ms2_e2_kidney_dd` |
| Hepatic Disorders KC | `ms2_e2_hepatic_kc` |
| Hepatic Disorders DD | `ms2_e2_hepatic_dd` |
| Biliary Disorders KC | `ms2_e2_biliary_kc` |
| Biliary Disorders DD | `ms2_e2_biliary_dd` |
| MedSurg II Exam 2 Simulator | `ms2_e2_sim` |
| Addiction & Substance Use KC | `ps_e2_addiction_kc` |
| Addiction & Substance Use DD | `ps_e2_addiction_dd` |
| Mood Disorders & Suicide KC | `ps_e2_mood_kc` |
| Mood Disorders & Suicide DD | `ps_e2_mood_dd` |
| Schizophrenia & Psychosis KC | `ps_e2_schiz_kc` |
| Schizophrenia & Psychosis DD | `ps_e2_schiz_dd` |
| Psych Exam 2 Simulator | `ps_e2_sim` |

To reset welcome modal: `localStorage.removeItem('absn_welcome_seen')` in browser console, then refresh.

---

## Tom's Preferences

- Casual, direct communication — no AI-sounding language, no excessive caveats
- Short confirmations, iterative hands-on review
- GitHub Desktop for all deploys
- No em-dashes anywhere (in code, content, or responses)
- No emojis in quiz content or UI
- DD answer choices: plain actions only, no embedded explanations
- Distractor length parity enforced on all question files
- `correct: 0` convention always for single-select; `correct: [array]` for SATA
- SATA questions score with partial credit, not all-or-nothing
- absn-summer stays free for cohort — TNC is the paid product (kept strictly separate)
- For Psych Exam 2: build one topic at a time rather than all at once, and confirm relevance/conflicts when supplementary (non-professor) source material is introduced
- When wiring up countdown dates on hub pages: never leave a placeholder `EXAM.date` in place while showing "TBD" as the label — the countdown number still computes off the placeholder and will show a real-looking but wrong number. Either use the confirmed real date for both `EXAM.date` and `EXAM.dateLabel`, or if truly unconfirmed, the JS countdown logic needs a guard to hide the number entirely (not yet implemented anywhere on the site as of June 30, 2026 — current pattern is to just use a real or best-guess date)

---

## Pending / Next Session

- More EKG strips to screenshot and add: V-tach, Torsades de Pointes, second degree type 2, third degree heart block, asystole
- ROME method: consider adding "leans acid / leans base" pH option for fully compensated ABG cases
- Psych Exam 1 simulator DD answer choices audit — same embedded-definition issue as MedSurg DD files, not yet fixed
- TNC platform Phase 4 (UI/UX redesign) and Phase 5 — separate product at thenursingcollective.pro
- MedSurg Exam 3 once that course material/Obsidian notes exist
- Psych Exam 2 is now fully built out (3 topics + simulator, confirmed exam date July 7). Next major content push would be Psych Exam 3 once that course material exists.

---

## Donation Footer

Full-width banner on all hub pages. Text: "This started as my own study tool and turned into something I wanted to share with everyone. No catch, no paywall — just hoping it helps. If it did, even a few dollars goes a long way for a tired nursing student trying to keep this thing growing. You know where to find me."  
Venmo: @Tom_Thomas · Zelle: (914) 646-0456
