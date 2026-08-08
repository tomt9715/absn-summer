/* Psych Final - Self-Check Review - drawn from the guide's own 24 self-check
   questions, which the guide's "cut order" section flags as never-cut,
   highest-yield material alongside the five comparison tables.
   Spans all five Final topics plus a handful of cumulative Exam 1-3 facts
   that appear in the self-check list itself (defense mechanisms, crisis/
   suicide priority, mania, lithium, alcohol withdrawal, schizophrenia,
   restraints) -- not a full Unit 6 rebuild, just what the self-check asks.
   KC convention: correct is always index 0 for single-select; engine shuffles.
   SATA uses correct as an array of indices.
   Several matching-format questions (pairs/decoys) used for the guide's
   own comparison pairs, per shared engine.js support. */
window.QUESTIONS = [
  {
    stem: "A daughter says her hospitalized father \"never acted this confused before.\" What should the nurse suspect?",
    options: ["Delirium", "Baseline dementia", "Normal aging", "A primary psychiatric disorder"],
    correct: 0,
    rationale: "A sudden change in mental status in a previously lucid hospitalized patient is delirium until proven otherwise."
  },
  {
    stem: "For that same patient, what is the nurse's first priority?",
    options: ["Investigate for an underlying cause while ensuring safety", "Reorient the patient to person, place, and time", "Reassure the family that this is expected with hospitalization", "Obtain a baseline MMSE for future comparison"],
    correct: 0,
    rationale: "Delirium priority is finding and treating the underlying cause plus safety, not simply reorienting, reassuring, or baseline testing."
  },
  {
    stem: "Which factors should the nurse screen for as potential causes of new-onset confusion in a hospitalized patient? Select all that apply.",
    options: ["Infection such as UTI or pneumonia", "Medications, including OTC or laxative misuse", "Hypoxia", "Electrolyte disturbance or dehydration", "Obesity"],
    correct: [0, 1, 2, 3],
    rationale: "Infection, medications, hypoxia, and electrolyte disturbance or dehydration are all causes to screen for in new-onset confusion. Obesity is not a recognized delirium risk factor."
  },
  {
    stem: "Match each term to its correct definition.",
    pairs: [
      { left: "Agnosia", right: "Inability to recognize familiar objects or people despite intact senses" },
      { left: "Apraxia", right: "Inability to execute purposeful motor tasks despite intact motor ability" },
      { left: "Aphasia", right: "Deterioration of language ability" },
      { left: "Amnesia", right: "Memory loss" },
      { left: "Confabulation", right: "Unconsciously filling memory gaps with fabricated but plausible detail" },
      { left: "Sundowning", right: "Worsening confusion and agitation in the late afternoon and evening" },
      { left: "Palilalia", right: "Involuntary repetition of one's own words" }
    ],
    rationale: "These seven terms describe the core vocabulary of dementia symptoms: recognition failure (agnosia), motor-task failure (apraxia), language breakdown (aphasia), memory loss (amnesia), unconscious confabulation, the evening-worsening pattern of sundowning, and involuntary word repetition (palilalia)."
  },
  {
    stem: "Match each dementia type to its earliest distinguishing symptom.",
    pairs: [
      { left: "Alzheimer's disease", right: "Recent memory loss appears first" },
      { left: "Frontotemporal dementia", right: "Personality and behavior change appears first" },
      { left: "Vascular dementia", right: "Stepwise decline tied to strokes" },
      { left: "Lewy body dementia", right: "Fluctuating cognition with visual hallucinations and parkinsonism" }
    ],
    rationale: "Alzheimer's leads with memory loss, frontotemporal dementia leads with personality change, vascular dementia declines in steps tied to cerebrovascular events, and Lewy body dementia presents with fluctuating cognition, hallucinations, and parkinsonism."
  },
  {
    stem: "Which drug class is dangerous to give a patient with Lewy body dementia?",
    options: ["Antipsychotics", "Cholinesterase inhibitors", "Alpha-2 agonists", "SSRIs"],
    correct: 0,
    rationale: "Lewy body dementia carries extreme sensitivity to antipsychotics, which can cause a severe, potentially life-threatening reaction."
  },
  {
    stem: "A family asks whether their mother with dementia will live independently again, and whether donepezil will restore her memory. What is the honest, therapeutic response?",
    options: ["The disease is progressive and independence will not return; donepezil slows decline but does not restore lost memory", "Independence will likely return once donepezil reaches full effect", "Donepezil will restore her memory to baseline within a few months", "It is too early to discuss prognosis at this stage"],
    correct: 0,
    rationale: "The honest, therapeutic answer acknowledges that dementia is progressive and independence will not return, and that donepezil slows further decline rather than restoring what has already been lost."
  },
  {
    stem: "When is memantine added to a dementia patient's treatment regimen?",
    options: ["At the moderate-severe stage, alongside a cholinesterase inhibitor", "At the mild stage, in place of a cholinesterase inhibitor", "Only after a cholinesterase inhibitor is fully discontinued", "Memantine is not used in dementia treatment"],
    correct: 0,
    rationale: "Memantine is added at the moderate-severe stage of Alzheimer's disease, combined with a cholinesterase inhibitor since the two work through different mechanisms."
  },
  {
    stem: "Which adverse effects should be taught for cholinesterase inhibitors? Select all that apply.",
    options: ["SLUDGEM symptoms", "Bradycardia", "Syncope", "Weight gain", "Hypertension"],
    correct: [0, 1, 2],
    rationale: "Cholinesterase inhibitors can cause SLUDGEM symptoms, bradycardia, and syncope. Weight gain and hypertension are not expected effects of this drug class."
  },
  {
    stem: "Which features belong to a therapeutic environment for a cognitively impaired inpatient? Select all that apply.",
    options: ["Consistent routine and caregivers", "Adequate lighting", "Familiar belongings", "Low noise", "Frequent room changes for variety"],
    correct: [0, 1, 2, 3],
    rationale: "A therapeutic environment for cognitive impairment includes consistent routine and caregivers, adequate lighting, familiar belongings, and low noise. Frequent room changes work against this structure."
  },
  {
    stem: "A dementia patient wanders into another patient's bed at night. What is the correct nursing response?",
    options: ["Calmly redirect the patient back to their own room", "Firmly scold the patient for entering another room", "Apply a restraint to prevent further wandering", "Allow the patient to remain until morning"],
    correct: 0,
    rationale: "A wandering dementia patient is calmly redirected, never scolded, restrained, or simply left in place."
  },
  {
    stem: "Which tool screens specifically for delirium?",
    options: ["The Confusion Assessment Method (CAM)", "The Mini-Mental State Examination (MMSE)", "The clock drawing test", "The Global Deterioration Scale"],
    correct: 0,
    rationale: "The CAM screens specifically for delirium, while the other tools listed assess or stage dementia instead."
  },
  {
    stem: "A patient scores 16 on the MMSE. What does this indicate?",
    options: ["Moderate cognitive impairment", "Mild cognitive impairment", "Severe cognitive impairment", "Normal cognition"],
    correct: 0,
    rationale: "MMSE bands are 20-24 mild, 13-20 moderate, and below 12 severe. A score of 16 falls in the moderate range."
  },
  {
    stem: "Which components belong to the Mental Status Exam (MSE)? Select all that apply.",
    options: ["Appearance and grooming", "Affect and orientation", "Recall and concentration", "Abstract thinking", "Coping skills and support systems"],
    correct: [0, 1, 2, 3],
    rationale: "The MSE covers appearance/grooming, affect, orientation, recall, concentration, judgment, and abstract thinking. Coping skills and support systems belong to a broader assessment, not the MSE itself."
  },
  {
    stem: "How is abstract thinking tested during the Mental Status Exam?",
    options: ["Asking the patient to interpret a proverb", "Asking the patient to recall three words after five minutes", "Asking the patient the date and location", "Asking the patient to subtract serial sevens"],
    correct: 0,
    rationale: "Abstract thinking is tested by asking the patient to interpret a proverb; a literal, concrete answer suggests impairment."
  },
  {
    stem: "Why is an untreated adolescent with ADHD at risk for injury?",
    options: ["Impulsivity increases risk-taking behavior without intent to harm", "Aggression toward others increases the risk of retaliation", "Deliberate self-harm is common in untreated ADHD", "Social isolation increases the risk of accidents at home"],
    correct: 0,
    rationale: "Untreated ADHD's impulsivity drives risk-taking behavior without intent to harm, making risk for injury the priority nursing diagnosis."
  },
  {
    stem: "Which symptoms overlap between ADHD and pediatric bipolar disorder?",
    options: ["Distractibility, hyperactivity, impulsivity, and irritability", "Psychomotor retardation and flat affect", "Auditory hallucinations and paranoia", "Selective mutism and social withdrawal"],
    correct: 0,
    rationale: "ADHD and pediatric bipolar disorder overlap in distractibility, hyperactivity, impulsivity, and irritability, requiring careful differential assessment."
  },
  {
    stem: "What timing and monitoring teaching accompanies methylphenidate?",
    options: ["Dose in the morning, last dose in early-to-mid afternoon, and track growth curves", "Dose only at bedtime, and track liver enzymes", "Dose every 4 hours around the clock, and track thyroid function", "Dose with the evening meal, and track renal function"],
    correct: 0,
    rationale: "Methylphenidate is dosed in the morning with the last dose in the early-to-mid afternoon to avoid insomnia, and growth curves are tracked given the risk of growth suppression."
  },
  {
    stem: "Which adverse effects are associated with atomoxetine, including its black box warning? Select all that apply.",
    options: ["GI upset and decreased appetite", "Fatigue and dizziness", "Rare liver injury with jaundice or dark urine", "Suicidal ideation (black box warning)", "Growth suppression"],
    correct: [0, 1, 2, 3],
    rationale: "Atomoxetine can cause GI upset, decreased appetite, fatigue, dizziness, and rare liver injury, and it carries a black box warning for suicidal ideation. Growth suppression is a stimulant-associated effect, not atomoxetine's primary profile."
  },
  {
    stem: "Which findings are part of the typical ASD assessment picture? Select all that apply.",
    options: ["Delayed speech", "Absent or poor eye contact", "Echolalia", "Insistence on sameness", "Sustained attention to social stimuli"],
    correct: [0, 1, 2, 3],
    rationale: "The ASD assessment picture includes delayed speech, absent or poor eye contact, echolalia, and insistence on sameness. Sustained attention to social stimuli is the opposite of what's typically seen."
  },
  {
    stem: "What is the strongest known risk factor for autism spectrum disorder (ASD), and what tool screens for it, at what ages?",
    options: ["Having a sibling with autism; M-CHAT-R at 18 and 24 months", "Advanced maternal age; M-CHAT-R at 6 and 12 months", "Childhood vaccination; CARS at 12 and 18 months", "Being an only child; Vanderbilt scale at 24 and 36 months"],
    correct: 0,
    rationale: "Having a sibling with autism is the strongest known risk factor, and the M-CHAT-R, administered at 18 and 24 months, is the screening tool."
  },
  {
    stem: "What is the priority inpatient intervention for a hospitalized child with ASD, and what does risperidone actually treat in this population?",
    options: ["A structured routine with minimal environmental change; risperidone treats irritability and aggression, not the core disorder", "Immediate social skills training; risperidone treats the core communication deficits", "Introducing new sensory stimuli; risperidone cures the underlying disorder", "Peer interaction on the unit; risperidone treats restricted and repetitive behaviors"],
    correct: 0,
    rationale: "The priority is a structured routine with minimal environmental change, and risperidone treats irritability and aggression symptoms, not the core disorder itself."
  },
  {
    stem: "Match each disorder to its one-sentence distinguishing feature.",
    pairs: [
      { left: "Oppositional defiant disorder (ODD)", right: "Defies authority figures without a serious rights violation" },
      { left: "Conduct disorder (CD)", right: "Serious violations of others' rights and social norms" },
      { left: "Intermittent explosive disorder (IED)", right: "Sudden episodic aggression with an unremarkable baseline between episodes" },
      { left: "Disruptive mood dysregulation disorder (DMDD)", right: "Chronic irritable mood between frequent temper outbursts" }
    ],
    rationale: "ODD defies authority without a rights violation, CD crosses into actual rights violations, IED is episodic with a calm baseline in between, and DMDD is chronically irritable even between outbursts."
  },
  {
    stem: "Which of these four disorders becomes a precursor to antisocial personality disorder if diagnosed before age 18?",
    options: ["Conduct disorder (CD)", "Oppositional defiant disorder (ODD)", "Intermittent explosive disorder (IED)", "Disruptive mood dysregulation disorder (DMDD)"],
    correct: 0,
    rationale: "Conduct disorder diagnosed before age 18 is considered a precursor to antisocial personality disorder in adulthood."
  },
  {
    stem: "How should the nurse handle a defiant child who refuses medication?",
    options: ["Maintain calm, firm, consistent limits and avoid a power struggle", "Withhold privileges immediately until the child complies", "Argue with the child until they agree to take it", "Skip the dose and avoid revisiting the issue"],
    correct: 0,
    rationale: "Calm, firm, consistent limits without engaging in a power struggle is the appropriate approach to a defiant child, consistent with the broader behavioral management strategy for ODD-spectrum presentations."
  },
  {
    stem: "What is the primary nursing objective in anorexia nervosa care?",
    options: ["Restore nutritional status and physiologic safety before psychotherapy or body-image work", "Begin body-image therapy immediately on admission", "Focus on family therapy before addressing nutrition", "Prioritize discharge planning over nutritional stabilization"],
    correct: 0,
    rationale: "The primary objective is restoring nutritional status and physiologic safety before starting psychotherapy or body-image work."
  },
  {
    stem: "Which body system is monitored during refeeding, and why?",
    options: ["Cardiovascular, because refeeding syndrome's electrolyte shifts can cause dysrhythmias and heart failure", "Renal, because refeeding causes acute kidney injury", "Hepatic, because refeeding causes liver failure", "Neurologic, because refeeding causes seizures independent of electrolytes"],
    correct: 0,
    rationale: "Cardiovascular monitoring is the priority during refeeding, since the hypophosphatemia, hypokalemia, and hypomagnesemia of refeeding syndrome can cause dysrhythmias and heart failure."
  },
  {
    stem: "Which personality trait is most associated with anorexia nervosa?",
    options: ["Perfectionism", "Impulsivity", "Extroversion", "Novelty-seeking"],
    correct: 0,
    rationale: "Perfectionism is the trait most associated with anorexia nervosa, alongside rigidity and a need for control."
  },
  {
    stem: "A 16-year-old of normal weight, socially outgoing, presents with an eating disorder. Which diagnosis and lab finding fit this presentation?",
    options: ["Bulimia nervosa; hypokalemia", "Anorexia nervosa; hypokalemia", "Bulimia nervosa; hypercalcemia", "Anorexia nervosa; hyponatremia"],
    correct: 0,
    rationale: "A normal-weight, outgoing teenager with an eating disorder points to bulimia nervosa, and hypokalemia is the lab finding to expect."
  },
  {
    stem: "For that same patient, which complication is most life-threatening, and which intervention has the highest priority?",
    options: ["Hypokalemia-related cardiac dysrhythmia is most dangerous; identifying binge triggers is the highest-priority intervention", "Esophageal rupture is most dangerous; supervised weighing is the highest-priority intervention", "Dental erosion is most dangerous; dental referral is the highest-priority intervention", "Metabolic alkalosis is most dangerous; fluid restriction is the highest-priority intervention"],
    correct: 0,
    rationale: "Hypokalemia's cardiac dysrhythmia risk is the most life-threatening complication in bulimia nervosa, and helping the patient identify binge triggers is the highest-priority intervention."
  },
  {
    stem: "What discharge teaching accompanies fluoxetine for bulimia nervosa?",
    options: ["It takes weeks to work, should be taken in the morning, not stopped abruptly, and worsening mood should be reported", "It works within days, should be taken at bedtime, and can be stopped abruptly if needed", "It requires no specific timing and has no monitoring requirements", "It should be taken only during active binge episodes"],
    correct: 0,
    rationale: "Fluoxetine for bulimia takes weeks to reach effect, should be taken consistently in the morning since it's activating, should not be stopped abruptly, and any worsening mood should be reported."
  },
  {
    stem: "Which antidepressant is contraindicated in eating disorders, and why?",
    options: ["Bupropion, due to increased seizure risk with electrolyte disturbance", "Sertraline, due to weight gain risk", "Escitalopram, due to hepatotoxicity risk", "Venlafaxine, due to bradycardia risk"],
    correct: 0,
    rationale: "Bupropion is contraindicated due to an increased seizure risk that is compounded by the electrolyte disturbances common in eating disorders."
  },
  {
    stem: "How would you define somatization in one sentence?",
    options: ["Real, distressing physical symptoms with disproportionate thoughts, anxiety, or time devoted to them", "Deliberately feigning illness for external gain", "Preoccupation with illness despite minimal physical symptoms", "A neurological deficit without an identifiable organic cause"],
    correct: 0,
    rationale: "Somatization, as seen in somatic symptom disorder, is real, distressing physical symptoms accompanied by disproportionate thoughts, anxiety, or time devoted to them."
  },
  {
    stem: "What is the correct nursing response to a patient with repeated pain complaints and consistently negative workups?",
    options: ["Validate the patient's experience, then redirect toward coping strategies", "Reassure the patient that nothing is wrong", "Order additional testing at every visit to rule out new causes", "Attribute the pain to a psychological cause early in the conversation"],
    correct: 0,
    rationale: "The correct response validates the patient's experience before redirecting toward coping, rather than dismissing, over-testing, or prematurely psychologizing the complaint."
  },
  {
    stem: "What self-observation method should be taught for somatic symptom disorder (SSD), and what care-coordination model works best?",
    options: ["Identify stressors that worsen the symptom; coordinate care through one consistent provider", "Track pain scores hourly; coordinate care through a rotating panel of specialists", "Avoid discussing symptoms entirely; coordinate care through the emergency department", "Compare symptoms with other patients; coordinate care through self-referral only"],
    correct: 0,
    rationale: "Identifying stressors that worsen the symptom, and coordinating care through one consistent provider rather than a rotating roster of specialists, are the recommended strategies for SSD."
  },
  {
    stem: "What is the primary treatment goal in illness anxiety disorder, and what is the priority approach in conversion disorder?",
    options: ["Reduce health anxiety and improve functioning; supportive, nonjudgmental care without confrontation", "Eliminate all illness-related beliefs; immediate psychiatric referral", "Restrict healthcare access; confront the patient with exam findings", "Order confirmatory testing at every visit; minimize contact with the patient"],
    correct: 0,
    rationale: "Illness anxiety disorder's goal is reducing health anxiety and improving functioning without necessarily eliminating the belief, while conversion disorder calls for supportive, nonjudgmental care without confrontation."
  },
  {
    stem: "What is the classic sign of striking unconcern seen in conversion disorder?",
    options: ["La belle indifference", "Russell's sign", "Cyberchondria", "Splitting"],
    correct: 0,
    rationale: "La belle indifference, a striking lack of concern about a significant neurological deficit, is the classic conversion disorder finding."
  },
  {
    stem: "Sorting by motivation, which condition is driven by the sick role, which by external gain, and which is reportable child abuse?",
    options: ["Factitious disorder: sick role. Malingering: external gain. Factitious disorder imposed on another: reportable child abuse", "Malingering: sick role. Factitious disorder: external gain. Malingering: reportable child abuse", "Factitious disorder: external gain. Malingering: sick role. Neither is reportable", "All three are driven by external gain, and none are reportable"],
    correct: 0,
    rationale: "Factitious disorder is motivated by assuming the sick role, malingering by external gain, and factitious disorder imposed on another constitutes reportable child abuse."
  },
  {
    stem: "A 22-year-old with somatic symptom disorder (SSD) starts sertraline. What is the priority monitoring, and why?",
    options: ["Suicidal thoughts and behavior, due to the black box warning in young adults", "Gastrointestinal upset, since it is the most common side effect", "Weight changes, since SSRIs commonly affect appetite", "Sleep pattern changes, since sertraline can be activating"],
    correct: 0,
    rationale: "In a young adult starting sertraline, suicidal thoughts and behavior are the priority monitoring concern due to the black box warning for this age group."
  },
  {
    stem: "Identify the defense mechanism: adoring a partner on Monday, then refusing to see them on Tuesday.",
    options: ["Splitting", "Rationalization", "Sublimation", "Undoing"],
    correct: 0,
    rationale: "Splitting is viewing people or situations as all-good or all-bad, with no middle ground, and switching abruptly between the two, a hallmark of borderline presentations."
  },
  {
    stem: "Identify the defense mechanism: \"My job made me start drinking.\"",
    options: ["Rationalization", "Splitting", "Sublimation", "Undoing"],
    correct: 0,
    rationale: "Rationalization replaces the real reason for a behavior with a more socially acceptable excuse."
  },
  {
    stem: "Identify the defense mechanism: volunteering at a shelter to channel feelings of anger.",
    options: ["Sublimation", "Rationalization", "Splitting", "Undoing"],
    correct: 0,
    rationale: "Sublimation redirects an unacceptable impulse into a socially acceptable activity."
  },
  {
    stem: "Identify the defense mechanism: buying flowers for a partner immediately after an act of cruelty toward them.",
    options: ["Undoing", "Splitting", "Rationalization", "Sublimation"],
    correct: 0,
    rationale: "Undoing is a behavior that symbolically cancels out or makes up for a prior act."
  },
  {
    stem: "A depressed teenager says \"nothing matters anymore.\" What is the priority action, phrased exactly as the nurse would say it?",
    options: ["\"Are you thinking about suicide?\"", "\"Everything will get better soon.\"", "\"Why do you feel that way?\"", "\"Let's talk about something more positive.\""],
    correct: 0,
    rationale: "Directly asking about suicidal ideation is the priority action for acute risk, phrased plainly and directly; asking does not plant the idea."
  },
  {
    stem: "A manic patient disrupts group therapy. What is the best nursing response?",
    options: ["Redirect privately with a physical outlet, such as a walk, and decrease environmental stimulation", "Confront the patient publicly in front of the group", "Ignore the disruption and continue the group session", "Immediately apply restraints to remove the patient"],
    correct: 0,
    rationale: "The best response redirects the patient privately toward a physical outlet and decreases stimulation, rather than confronting publicly, ignoring the behavior, or jumping to restraints."
  },
  {
    stem: "Which two care-plan staples support a manic patient's daily needs?",
    options: ["High-calorie finger foods and brief, frequent contacts", "Strict caloric restriction and prolonged one-on-one sessions", "Unlimited unstructured free time and minimal staff contact", "Sedentary activities only and isolation from peers"],
    correct: 0,
    rationale: "High-calorie finger foods (since a manic patient often cannot sit still to eat a full meal) and brief, frequent contacts are standard care-plan staples for mania."
  },
  {
    stem: "Which findings in alcohol withdrawal demand immediate action, and what condition do they signal?",
    options: ["Autonomic instability and visual hallucinations, signaling delirium tremens", "Tremors and mild anxiety, signaling early withdrawal", "Nausea and irritability, signaling early withdrawal", "Insomnia alone, signaling early withdrawal"],
    correct: 0,
    rationale: "Autonomic instability (severely elevated BP, tachycardia, fever) plus visual hallucinations signal delirium tremens, a medical emergency, distinct from the tremors, anxiety, nausea, and irritability expected early in withdrawal."
  },
  {
    stem: "What is the treatment for alcohol withdrawal, including the drug class, the vitamin, and the scoring tool used?",
    options: ["Benzodiazepines, thiamine, and CIWA scoring", "Antipsychotics, vitamin B12, and PANSS scoring", "Beta blockers, vitamin D, and CAM scoring", "SSRIs, folate, and MMSE scoring"],
    correct: 0,
    rationale: "Alcohol withdrawal is treated with benzodiazepines and thiamine, with severity tracked using CIWA scoring."
  },
  {
    stem: "What is the therapeutic range for lithium, and what is the toxicity progression, in order?",
    options: ["0.6 to 1.2 mEq/L; coarse tremor, then GI distress, then ataxia, then confusion and seizures", "1.5 to 2.5 mEq/L; confusion, then seizures, then tremor, then GI distress", "0.2 to 0.5 mEq/L; GI distress, then tremor, then confusion, then seizures", "2.0 to 3.0 mEq/L; ataxia, then confusion, then tremor, then GI distress"],
    correct: 0,
    rationale: "Lithium's therapeutic range is 0.6 to 1.2 mEq/L, and toxicity progresses from coarse tremor, to GI distress, to ataxia, to confusion and seizures."
  },
  {
    stem: "Which factors raise lithium levels? Select all that apply.",
    options: ["Renal impairment", "Dehydration", "Low sodium", "NSAIDs or diuretics", "High-carbohydrate meals"],
    correct: [0, 1, 2, 3],
    rationale: "Renal impairment, dehydration, low sodium, and NSAIDs or diuretics all raise lithium levels, since the kidneys excrete lithium and these factors interfere with that clearance."
  },
  {
    stem: "Which two organ systems require long-term monitoring in a patient on lithium?",
    options: ["Renal and thyroid", "Hepatic and cardiac", "Pulmonary and renal", "Cardiac and thyroid"],
    correct: 0,
    rationale: "Renal function and thyroid function both require long-term monitoring in patients on lithium, since lithium is renally excreted and can cause hypothyroidism."
  },
  {
    stem: "A patient with schizophrenia hears voices calling them worthless. What is the priority action, and what should the nurse never say about the voices?",
    options: ["Stay with the patient and provide presence and safety first; never argue that the voices aren't real", "Administer a PRN antipsychotic before assessing further; tell the patient the voices are not real", "Leave the patient alone to avoid reinforcing the hallucination; ignore the content entirely", "Call security immediately; tell the patient to stop listening to the voices"],
    correct: 0,
    rationale: "The priority is staying with the patient and providing presence and safety before reaching for a PRN, and the nurse should never argue that the voices aren't real, since that can damage trust."
  },
  {
    stem: "A patient with schizophrenia throws a tray and yells that staff are poisoning the food. What is the priority action?",
    options: ["Calmly remove the patient from the area and reduce stimulation", "Attempt to logically convince the patient the food is safe", "Apply restraints immediately", "Ignore the outburst and continue with the meal service"],
    correct: 0,
    rationale: "The priority for paranoid agitation is calmly removing the patient from the area and reducing stimulation, not logic, restraints, or ignoring the behavior."
  },
  {
    stem: "What are the four restraint numbers: order within, monitoring every, release reassessment every, and renewal every?",
    options: ["Order within 1 hour, monitor every 15 minutes, release reassessment every 2 hours, renewal every 4 hours", "Order within 4 hours, monitor every 1 hour, release reassessment every 8 hours, renewal every 24 hours", "Order within 30 minutes, monitor every 30 minutes, release reassessment every 1 hour, renewal every 2 hours", "Order within 2 hours, monitor every 10 minutes, release reassessment every 4 hours, renewal every 8 hours"],
    correct: 0,
    rationale: "Restraint standards require an order within 1 hour, monitoring every 15 minutes, release reassessment every 2 hours, and renewal every 4 hours."
  },
  {
    stem: "What is the first action for any suddenly aggressive patient?",
    options: ["Ensure safety, using the least restrictive intervention first", "Apply restraints immediately to prevent injury", "Administer a PRN sedative before any other action", "Call for a psychiatric consult before intervening"],
    correct: 0,
    rationale: "The first action for a suddenly aggressive patient is ensuring safety, starting with the least restrictive intervention rather than jumping to restraints or sedation."
  }
];
