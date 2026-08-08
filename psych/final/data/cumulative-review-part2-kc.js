/* Psych Final - Cumulative Review Part 2 - curated from Exam 1-3 question banks,
   selecting only the questions that test what Unit 6 of the gameplan asks for.
   Continues from Part 1 (Comm, Defenses, MSE, Schizophrenia). Do not rebuild --
   append new sections at the bottom, each marked with its own comment header.
   Sources so far: exam2/data/mood-kc.js + mood-dd.js (Section 5).
   Verbatim except minor rationale wording tightened where noted.
   KC convention: correct is always index 0 for single-select; engine shuffles. */
window.QUESTIONS = [
  // ── Section 5: Mood Disorders, Lithium, Suicide Safety (source: exam2 Mood) ──
  {
    stem: "What is the therapeutic range for lithium, and at what level does toxicity occur?",
    options: ["Therapeutic range is 0.6 to 1.2 mEq/L; a level of 1.8 mEq/L is toxic", "Therapeutic range is 1.5 to 2.5 mEq/L; a level of 1.8 mEq/L is subtherapeutic", "Therapeutic range is 0.1 to 0.3 mEq/L; a level of 1.8 mEq/L is appropriate dosing", "Therapeutic range is 3.0 to 5.0 mEq/L; a level of 1.8 mEq/L is below threshold"],
    correct: 0,
    rationale: "The therapeutic maintenance range for lithium is 0.6 to 1.2 mEq/L. A level of 1.8 mEq/L is toxic. Lithium also takes 1 to 3 weeks to reach full therapeutic effect."
  },
  {
    stem: "A client on lithium reports new onset of diarrhea and vomiting over the past 2 days, and the nurse notes the client appears unsteady when walking. What is the priority nursing action?",
    options: ["Hold the next dose, notify the provider, and anticipate an order for a serum lithium level given signs of possible toxicity", "Administer the next scheduled dose of lithium as ordered without delay", "Encourage the client to restrict fluid intake to prevent further electrolyte loss", "Administer an antidiarrheal medication and reassess in 24 hours before any other action"],
    correct: 0,
    rationale: "Diarrhea, vomiting, and new ataxia (unsteady gait) in a client on lithium are concerning for toxicity, since fluid loss raises serum lithium levels by reducing renal clearance. The nurse holds the next dose, notifies the provider, and anticipates a serum lithium level."
  },
  {
    stem: "A client newly prescribed lithium tells the nurse they are starting a low-sodium diet to help control their blood pressure. What is the nurse's priority teaching point?",
    options: ["A low-sodium diet increases the risk of lithium toxicity; the client should maintain consistent, not reduced, sodium intake and discuss blood pressure management separately with the provider", "A low-sodium diet is recommended specifically to enhance lithium's therapeutic effect", "Sodium intake has no relationship to lithium levels and the diet change is safe to start immediately", "The client should double their lithium dose to compensate for the dietary sodium change"],
    correct: 0,
    rationale: "A low-sodium diet raises lithium levels and increases toxicity risk, since the kidneys retain lithium more readily when sodium intake decreases. The nurse must correct this and advise maintaining consistent sodium intake."
  },
  {
    stem: "A client taking lithium reports occasional headaches and asks the nurse which over-the-counter pain reliever is safest to use. What is the nurse's best response?",
    options: ["Acetaminophen is the safer choice, since NSAIDs such as ibuprofen can raise lithium levels and increase the risk of toxicity", "Ibuprofen is preferred since it has no interaction with lithium", "Aspirin is the safest choice and should be used for all pain management while on lithium", "Any over-the-counter pain reliever is equally safe to use with lithium"],
    correct: 0,
    rationale: "NSAIDs, including ibuprofen, reduce renal clearance of lithium and raise serum lithium levels, increasing toxicity risk. Acetaminophen is the safer analgesic choice for a client taking lithium."
  },
  {
    stem: "Which routine laboratory values are monitored in a client taking lithium?",
    options: ["TSH, BUN/creatinine, sodium, and serum lithium level", "Complete blood count and liver function tests exclusively", "Hemoglobin A1c and fasting lipid panel exclusively", "Prothrombin time and international normalized ratio exclusively"],
    correct: 0,
    rationale: "Routine monitoring for lithium includes thyroid-stimulating hormone (TSH), since lithium can cause hypothyroidism, BUN/creatinine to assess renal function, sodium, since sodium levels affect lithium clearance, and serum lithium level to monitor for toxicity."
  },
  {
    stem: "Which findings indicate early lithium toxicity, and which indicate severe toxicity?",
    options: ["Early: fine tremors, nausea, vomiting, thirst, and confusion; Severe: ataxia, seizures, and coma", "Early toxicity presents with ataxia and coma; severe toxicity presents with mild thirst and polyuria", "Early and severe lithium toxicity present in an identical manner with no distinguishing features", "Early toxicity presents with hypertension and tachycardia; severe toxicity presents with hypotension and bradycardia"],
    correct: 0,
    rationale: "Early lithium toxicity presents with fine hand tremors, nausea, vomiting, diarrhea, thirst, polyuria, and confusion. Severe toxicity progresses to ataxia (unsteady gait), seizures, coma, and life-threatening arrhythmias."
  },
  {
    stem: "A nurse on an inpatient psychiatric unit is admitting a client in acute mania who is loud, pacing, and trying to engage other clients in conversation in the day room. What is the priority nursing intervention?",
    options: ["Move the client to a private, low-stimulation room and limit group activity", "Assign the client to a shared room to encourage social connection", "Allow the client to remain in the day room to expend excess energy", "Encourage the client to lead a group activity to channel their energy productively"],
    correct: 0,
    rationale: "A client in acute mania requires a low-stimulation environment to prevent escalation. Moving the client to a private room and limiting group activity reduces overstimulation, since manic clients can disrupt and overstimulate other clients in shared or group settings."
  },
  {
    stem: "A nurse is caring for a client newly diagnosed with bipolar disorder who is started on an SSRI for depressive symptoms, without a mood stabilizer or antipsychotic ordered. What is the nurse's priority concern?",
    options: ["Question the order, since giving an antidepressant alone in bipolar disorder, without a mood stabilizer or antipsychotic, risks inducing a manic episode", "Administer the SSRI as ordered without further action, since this is standard treatment for bipolar depression", "Recognize this as appropriate since SSRIs are always given as monotherapy in bipolar disorder", "Hold the medication only if the client reports current manic symptoms"],
    correct: 0,
    rationale: "Giving an antidepressant alone in bipolar disorder, without a concurrent mood stabilizer or antipsychotic, can induce a manic episode. The nurse should question this order and clarify with the provider."
  },
  {
    stem: "A client started on fluoxetine 10 days ago reports feeling 'more energetic' but states their mood is 'still pretty low.' What is the priority nursing assessment at this point in treatment?",
    options: ["Assess for suicidal ideation and a specific plan, since this represents the highest-risk window where energy has improved before mood has lifted", "Reassure the client that full benefit typically takes 6 months and no further assessment is needed now", "Discontinue the fluoxetine immediately since the client reports inadequate response", "Recognize this as an adverse reaction requiring an immediate dose increase"],
    correct: 0,
    rationale: "The first 1 to 2 weeks after starting an SSRI represent the highest-risk window for suicide, since increased energy can return before mood actually lifts, giving a still-depressed client the physical capacity to act on suicidal thoughts."
  },
  {
    stem: "A nurse is caring for a depressed inpatient who has been withdrawn and tearful for the past week. During evening rounds, the nurse finds the client calmly giving away a treasured photo album to another client, stating they 'won't need it anymore.' What is the nurse's priority action?",
    options: ["Recognize this as a warning sign of suicidal intent and implement one-to-one observation while notifying the provider", "Document the behavior as a positive sign of improved social connection on the unit", "Allow the exchange to continue since giving gifts reflects generosity and improved mood", "Wait until morning rounds to discuss the behavior with the treatment team"],
    correct: 0,
    rationale: "Giving away prized possessions is a recognized warning sign of suicidal intent. The nurse should recognize this immediately, implement one-to-one observation, and notify the provider rather than interpreting the behavior as benign."
  },
  {
    stem: "A client with major depressive disorder is being discharged after a recent suicide attempt by overdose. The client's parents ask what they can do at home to keep their teen safe. What is the nurse's priority discharge teaching?",
    options: ["Remove firearms, medications, and sharp objects from the home", "Encourage the teen to spend more time alone to process their emotions", "Monitor the teen's social media use exclusively as the primary safety measure", "Avoid discussing the suicide attempt to prevent further distress"],
    correct: 0,
    rationale: "The single most important discharge instruction is means restriction: removing firearms, medications, and sharp objects from the home, since this directly limits access to lethal means during a continued period of risk."
  },
  {
    stem: "What does the DIGFAST mnemonic represent, and what is its clinical use?",
    options: ["A mnemonic for manic symptoms: Distractibility, Impulsivity, Grandiosity, Flight of ideas, increased Activity, decreased Sleep, and Talkativeness", "A mnemonic for depressive symptoms used specifically to screen for major depressive disorder in adults", "A mnemonic describing the specific stages and timeline of alcohol withdrawal syndrome", "A mnemonic listing the extrapyramidal side effects caused by antipsychotic medications"],
    correct: 0,
    rationale: "DIGFAST stands for Distractibility, Impulsivity/Indiscretion, Grandiosity, Flight of ideas/pressured speech, increased Activity, decreased Sleep, and Talkativeness. It is used to assess for manic or hypomanic symptoms in bipolar spectrum disorders."
  }
];
