/* Psych Final - Cumulative Review Part 2 - curated from Exam 1-3 question banks,
   selecting only the questions that test what Unit 6 of the gameplan asks for.
   Continues from Part 1 (Comm, Defenses, MSE, Schizophrenia). Do not rebuild --
   append new sections at the bottom, each marked with its own comment header.
   Sources so far: exam2/data/mood-kc.js + mood-dd.js (Section 5),
   exam2/data/addiction-kc.js + addiction-dd.js (Section 6).
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
  },

  // ── Section 6: Substance Use & Withdrawal (source: exam2 Addiction) ──
  {
    stem: "A client who reports drinking daily for the past 5 years had their last drink 18 hours ago. The nurse notes anxiety, fine hand tremors, palpitations, and mild insomnia. What does the nurse recognize, and what is the priority action?",
    options: ["Early alcohol withdrawal; notify the provider and anticipate a benzodiazepine per protocol", "Delirium tremens; prepare for emergent intubation", "Normal anxiety unrelated to alcohol cessation; no specific action needed", "Opioid withdrawal; administer clonidine per standing order"],
    correct: 0,
    rationale: "Anxiety, mild tremors, palpitations, and insomnia within 6 to 24 hours of the last drink are classic early signs of alcohol withdrawal. The nurse notifies the provider and anticipates a benzodiazepine to prevent progression to more severe withdrawal."
  },
  {
    stem: "A client with a history of heavy alcohol use has not had a drink in 60 hours. The nurse notes hyperreflexia, visual hallucinations, a temperature of 38.9 degrees Celsius, BP 168/100, and HR 128. What does the nurse recognize, and what is the priority action?",
    options: ["Delirium tremens; notify the provider immediately and anticipate IV benzodiazepine therapy with escalated monitoring", "Expected, mild alcohol withdrawal requiring no escalation in care", "Opioid overdose; administer naloxone immediately", "Serotonin syndrome; stop all serotonergic medications immediately"],
    correct: 0,
    rationale: "Hyperreflexia, hallucinations, fever, hypertension, and tachycardia occurring 48 to 72 hours after the last drink indicate delirium tremens, a medical emergency. The nurse notifies the provider immediately and anticipates IV benzodiazepine therapy along with escalated monitoring given the significant mortality risk if untreated."
  },
  {
    stem: "A nurse is caring for a client in alcohol withdrawal who suddenly develops tonic-clonic seizure activity. What is the priority nursing action?",
    options: ["Position the client side-lying, protect from injury, and do not restrain the client during the seizure", "Restrain the client's extremities to prevent injury during the seizure", "Position the client supine and insert an oral airway during the active seizure", "Leave the room to retrieve emergency medications before addressing positioning"],
    correct: 0,
    rationale: "During an active seizure, the nurse positions the client side-lying to protect the airway and prevent aspiration, and protects the client from injury without restraining them, since restraint during a seizure can cause injury."
  },
  {
    stem: "A client with chronic alcohol use disorder presents with ataxia, nystagmus, and acute confusion. The nurse anticipates an order for IV dextrose. What is the priority nursing consideration before administering the dextrose?",
    options: ["Verify that thiamine has been given first, since glucose administered before thiamine can precipitate or worsen Wernicke's encephalopathy", "No specific sequencing is required between thiamine and dextrose administration", "Administer the dextrose first to address the client's confusion, then give thiamine afterward", "Hold both thiamine and dextrose until a neurology consult is obtained"],
    correct: 0,
    rationale: "Ataxia, nystagmus, and confusion in a client with chronic alcohol use suggest Wernicke's encephalopathy from thiamine deficiency. The nurse must verify that thiamine is given before glucose, since administering glucose first can precipitate or worsen Wernicke's encephalopathy."
  },
  {
    stem: "A client in alcohol withdrawal becomes acutely agitated, reporting that insects are crawling on their arms. The nurse observes the client repeatedly brushing at their skin. What is the most therapeutic nursing response?",
    options: ["'I don't see any bugs, but you seem very frightened. I'm here with you.'", "'There's nothing there, you need to stop doing that.'", "'The bugs are part of your withdrawal and will not hurt you.'", "'Let's talk about something else to take your mind off it.'"],
    correct: 0,
    rationale: "Acknowledging the client's fear while gently orienting them to reality, without dismissing the experience or validating the hallucination as real, is the therapeutic approach."
  },
  {
    stem: "What is Wernicke-Korsakoff syndrome, and what is its classic symptom triad?",
    options: ["A brain disorder caused by chronic alcohol use and thiamine deficiency, presenting with ataxia, nystagmus, and confusion", "A withdrawal syndrome caused by abrupt benzodiazepine discontinuation, presenting with seizures and tachycardia", "A liver disorder caused by chronic alcohol metabolism, presenting with jaundice and ascites", "A cardiac disorder caused by chronic alcohol use, presenting with dilated cardiomyopathy"],
    correct: 0,
    rationale: "Wernicke-Korsakoff syndrome is a brain disorder resulting from chronic alcohol use and the resulting thiamine (vitamin B1) deficiency. The classic triad is ataxia, nystagmus, and confusion. Thiamine must always be administered before glucose."
  },
  {
    stem: "Which benzodiazepine is considered the gold standard for alcohol withdrawal and is the most frequently tested on the NCLEX?",
    options: ["Chlordiazepoxide (Librium)", "Lorazepam (Ativan)", "Diazepam (Valium)", "Alprazolam (Xanax)"],
    correct: 0,
    rationale: "Chlordiazepoxide (Librium) is considered the gold standard, long-acting benzodiazepine for alcohol withdrawal. Lorazepam is preferred in liver disease due to extrahepatic metabolism, and diazepam is noted for better seizure prevention and self-tapering properties."
  },
  {
    stem: "Why is lorazepam often preferred over diazepam for a client with alcohol withdrawal and significant liver disease?",
    options: ["Lorazepam is metabolized extrahepatically and has a shorter half-life, making it safer in impaired liver function", "Lorazepam has a longer half-life than diazepam, so it is always preferred regardless of liver function", "Lorazepam is the only benzodiazepine that is effective for preventing withdrawal seizures", "Lorazepam requires hepatic metabolism, making it ideal for stimulating liver regeneration"],
    correct: 0,
    rationale: "Lorazepam is metabolized extrahepatically and has a shorter half-life, making it the preferred benzodiazepine in clients with significant liver disease."
  },
  {
    stem: "What physiologic mechanism explains why alcohol withdrawal produces hypertension and tachycardia rather than hypotension?",
    options: ["Chronic alcohol use causes vasodilation; when alcohol is removed, the body vasoconstricts, producing hypertension and tachycardia", "Chronic alcohol use causes vasoconstriction; when alcohol is removed, the body vasodilates, producing hypotension and bradycardia", "Alcohol withdrawal directly damages the cardiac conduction system, producing arrhythmias unrelated to any change in vascular tone", "Alcohol withdrawal causes adrenal insufficiency, producing hypotension as the primary cardiovascular finding"],
    correct: 0,
    rationale: "Alcohol causes vasodilation during chronic use. When the client stops drinking, the body rebounds into vasoconstriction, which produces hypertension, tachycardia, and increased respiratory rate -- the hallmark findings to monitor in withdrawal."
  },
  {
    stem: "A client is found unresponsive with shallow respirations of 4 breaths per minute and pinpoint pupils. Empty pill bottles labeled oxycodone are found nearby. What is the nurse's priority action?",
    options: ["Administer naloxone immediately and prepare to repeat dosing as needed", "Administer activated charcoal to bind the remaining medication", "Position the client supine and reassess respiratory status in 15 minutes", "Administer flumazenil to reverse the suspected sedative overdose"],
    correct: 0,
    rationale: "Pinpoint pupils, severe respiratory depression, and unresponsiveness with evidence of opioid use indicate an opioid overdose. Naloxone must be administered immediately, with repeat dosing anticipated since its duration may be shorter than that of the opioid causing the overdose."
  },
  {
    stem: "A client received naloxone in the emergency department for an opioid overdose and now appears alert with respirations of 16 breaths per minute. The client requests to leave against medical advice. What is the nurse's priority teaching point?",
    options: ["The client must remain for observation, since naloxone's effects can wear off before the opioid clears, allowing respiratory depression to recur", "The client may safely leave since the naloxone has fully reversed the overdose", "The client should be discharged with a prescription for methadone to prevent further overdose", "The client's vital signs confirm no further monitoring is needed at this time"],
    correct: 0,
    rationale: "Naloxone's duration of action can be shorter than that of the opioid involved, meaning respiratory depression can recur after the naloxone wears off. The client requires continued observation despite the temporary improvement in symptoms."
  },
  {
    stem: "A client in early recovery from substance use disorder tells the nurse, 'I just need willpower this time, that's why I failed before.' What is the nurse's best response reflecting an understanding of addiction as a chronic disease?",
    options: ["'Addiction involves changes in brain chemistry, not just willpower. Building a strong support system and coping strategies will help more than willpower alone.'", "'You're right, you just need to try harder this time.'", "'Relapse means you weren't really committed to recovery the first time.'", "'Willpower is the single most important factor in preventing relapse.'"],
    correct: 0,
    rationale: "The nurse should reframe addiction as a neurobiological, chronic disease rather than a failure of willpower. Relapse is part of the chronic disease model, not a personal failure, and medication-assisted treatment is a legitimate part of recovery, not a sign of weakness."
  },
  {
    stem: "A client on methadone maintenance therapy has an ECG showing a prolonged QT interval. What is the nurse's priority action?",
    options: ["Notify the provider of the QT prolongation, since methadone carries a risk of QT prolongation and Torsades de pointes", "Discontinue the methadone immediately without provider notification", "Recognize this as an expected, clinically insignificant finding requiring no action", "Administer naloxone to reverse the cardiac effects of methadone"],
    correct: 0,
    rationale: "Methadone carries a known risk of QT prolongation and the potentially fatal arrhythmia Torsades de pointes. The nurse notifies the provider of this ECG finding so that dosing or an alternative such as buprenorphine, which carries lower cardiac risk, can be considered."
  },
  {
    stem: "A nurse assesses a client with agitation, severe coughing, and notes the client has broken, brown-stained teeth. The client's pupils are dilated and heart rate is 132. What substance does the nurse suspect, and what is the priority focus of assessment?",
    options: ["Methamphetamine use; assess for cardiovascular complications such as hypertension and arrhythmias", "Opioid use; assess for respiratory depression and pinpoint pupils", "Alcohol use; assess for ataxia and slurred speech", "Cannabis use; assess for increased appetite and conjunctival injection"],
    correct: 0,
    rationale: "Severe coughing, agitation, and 'meth mouth' along with dilated pupils and tachycardia are classic findings of methamphetamine use. The nurse prioritizes assessment for cardiovascular complications, since chronic use causes hypertension, arrhythmias, and other cardiac damage."
  },
  {
    stem: "What are the expected findings of cannabis (THC) intoxication and withdrawal?",
    options: ["Intoxication includes relaxation and increased appetite; withdrawal includes irritability and decreased appetite", "Intoxication includes severe, life-threatening respiratory depression requiring emergency intervention", "Intoxication includes pinpoint pupils with bradycardia; withdrawal includes dilated pupils with tachycardia", "Intoxication and withdrawal present in a clinically indistinguishable manner"],
    correct: 0,
    rationale: "Cannabis intoxication produces relaxation, elevated mood, increased appetite ('munchies'), red eyes, and paranoia at high potency. Withdrawal produces irritability, anxiety, insomnia, and decreased appetite."
  }
];
