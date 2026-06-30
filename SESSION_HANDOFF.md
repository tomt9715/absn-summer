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
│   ├── engine.js                       ← shared quiz engine
│   ├── quiz.css                        ← quiz page styles
│   ├── hub.css                         ← hub page styles
│   └── footer.js
├── medsurg2/exam1/
│   ├── index.html                      ← MedSurg II exam hub
│   ├── abg-interpreter.html            ← ABG interpreter (Tic-Tac-Toe + ROME)
│   ├── ekg-interpreter.html            ← EKG strip interpreter (4-step framework)
│   ├── simulator.html                  ← MedSurg II exam simulator
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
│   ├── shock-mods-kc.html / -dd.html
│   ├── burns-kc.html / -dd.html
│   ├── kidney-kc.html / -dd.html
│   ├── hepatic-kc.html / -dd.html
│   ├── biliary-kc.html / -dd.html
│   └── data/
│       ├── shock-mods-kc.js / -dd.js
│       ├── burns-kc.js / -dd.js
│       ├── kidney-kc.js / -dd.js
│       ├── hepatic-kc.js / -dd.js
│       └── biliary-kc.js / -dd.js
└── psych/exam1/
    ├── index.html
    ├── simulator.html
    └── data/ (5 cluster files + simulator.js)
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
- `correct: 0` source convention — correct answer always at index 0 in data file
- Optional `cfg.maxQuestions` cap (simulator uses 50 of 56)
- `image:` field support — renders image above stem with skeleton shimmer loader
- **Streak/fire system:** 10 consecutive correct → CSS flame animation on Q number (orange glowing circle with flickering CSS flame tips above it, no emoji). Resets on wrong answer. No popup animation — just the Q number itself.
- localStorage score persistence per quiz key

---

## Standing Rules (apply to ALL question writing)

- Every acronym expanded every occurrence (e.g. "electrocardiogram (ECG)")
- No em-dashes anywhere
- `correct: 0` always — correct answer at index 0 in the options array
- **KC answer choices:** may include brief definitions/context since they test recall
- **DD answer choices:** plain clinical actions ONLY — no definitions, explanations, or rationale after a dash. The rationale field is where the teaching lives. Wrong: `"Administer atropine 0.5 mg IV push — first-line for symptomatic bradycardia"` / Right: `"Administer atropine 0.5 mg IV push"`
- Distractor length parity — correct answer must not be >1.5x longer than avg wrong answers
- All questions must map to content covered in KC/DD files for that topic
- No EKG reading/identification questions in the simulator or DD files — those belong exclusively to the EKG Interpreter
- When Obsidian notes flag content with `[!danger]`, `[!warning]` callouts, or explicit "TEST NOTE" / "professor's exam focus" language, that content gets heavier question coverage relative to its share of the notes

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

Same shared-engine architecture as Exam 1, separate hub at `medsurg2/exam2/index.html`. Exam date: Monday, July 7. **All 5 topics complete — 231 questions total.**

| Topic | KC | DD | Status |
|---|---|---|---|
| Shock, Sepsis & MODS | 36 | 20 | Complete |
| Burns Management | 26 | 21 | Complete |
| Kidney Disorders | 34 | 20 | Complete |
| Hepatic Disorders | 32 | 18 | Complete |
| Biliary Disorders | 28 | 16 | Complete |

No Exam 2 simulator built yet. All 5 topics are now done, so this is unblocked — next session should build a combined simulator mirroring the Exam 1 pattern (56-Q bank, draws 50, hard NCLEX-style priority questions, no isolated recall items).

Hepatic Disorders notes flagged two guaranteed-question topics ("there will be a question about lactulose" and a hepatitis transmission-modes test note) — both got dedicated heavy coverage across KC and DD.

Biliary Disorders notes flagged several `[!danger]` sections (cholecystitis signs/symptoms, post-op cholecystectomy interventions, patient education, pancreatitis signs/symptoms and nursing management) — all got proportionally heavier coverage, especially the pancreatitis subtopic (8 KC + 6 DD of the 28/16 total).

### Psych Exam 1
All 5 clusters complete + 45-Q simulator. Keys: `ps_e1_*`

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

## MedSurg II Simulator — Key Decisions

56 question bank, draws 50 randomly per attempt. Hard, NCLEX-style, priority-based.

**Topics covered (mapped to KC/DD content):**
- Vision & Hearing: glaucoma emergencies, cataract post-op complications, ototoxicity, AMD urgent changes, Meniere's, BPPV, otitis media complications, hearing aid safety
- Dysrhythmias: A-fib anticoagulation, digoxin toxicity, cardioversion prep, pacemaker malfunction, Torsades, complete heart block emergency, atrial flutter + anticoagulation before cardioversion
- Respiratory: chest tube interpretation, tension pneumothorax, ARDS, TB complications, PE prevention, emphysema oxygen precautions, flail chest, incentive spirometer, TB isolation psychosocial
- F&E/ABGs: IV potassium safety, calcium gluconate mechanism, sodium correction rate, third spacing, opioid respiratory depression + ABG, isotonic fluid behavior, hypermagnesemia DTR monitoring

**Explicitly excluded (not covered in class):**
stapedectomy, enucleation, cardiac tamponade, glucagon antidote for beta blocker OD, amiodarone pulmonary toxicity, neutropenic precautions/ANC, refeeding syndrome/TPN, hyperchloremic metabolic acidosis from NS, postural drainage lobe positioning, mixed acidosis after seizure

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
| MedSurg II Simulator | `ms2_e1_sim` |
| EKG Interpreter | `ms2_e1_ekg` |
| ABG Interpreter | `ms2_e1_abg` |
| Psych Simulator | `ps_e1_sim` |
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
- `correct: 0` convention always
- absn-summer stays free for cohort — TNC is the paid product (kept strictly separate)

---

## Pending / Next Session

- Build the Exam 2 simulator now that all 5 topics are complete (mirror the Exam 1 56-Q bank / draws-50 pattern; pull priority/application-style questions across Shock/MODS, Burns, Kidney, Hepatic, and Biliary)
- More EKG strips to screenshot and add: V-tach, Torsades de Pointes, second degree type 2, third degree heart block, asystole
- ROME method: consider adding "leans acid / leans base" pH option for fully compensated ABG cases
- Psych simulator DD answer choices audit — same embedded-definition issue as MedSurg DD files, not yet fixed
- TNC platform Phase 4 (UI/UX redesign) and Phase 5 — separate product at thenursingcollective.pro

---

## Donation Footer

Full-width banner on all hub pages. Text: "This started as my own study tool and turned into something I wanted to share with everyone. No catch, no paywall — just hoping it helps. If it did, even a few dollars goes a long way for a tired nursing student trying to keep this thing growing. You know where to find me."  
Venmo: @Tom_Thomas · Zelle: (914) 646-0456
