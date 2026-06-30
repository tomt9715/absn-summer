// Psych Exam 2 Simulator — all-new questions, distinct from topic KC/DD banks.
// Matches the professor's exam blueprint exactly (no random subsampling):
// Ch.19 Addiction (16, no SATA), Ch.17 Mood Disorders & Suicide (17, incl. 1 SATA),
// Ch.16 Schizophrenia & Psychosis (17, incl. 1 SATA) — 50 total, 2 SATA/NGN per blueprint
window.QUESTIONS = [

  // ===== CHAPTER 19: ADDICTION & SUBSTANCE USE (16, no SATA) =====
  {
    stem: "A nurse is triaging four clients with substance use histories. Which client requires the most immediate assessment?",
    options: ["A client 60 hours post-last drink with hyperreflexia, visual hallucinations, and a temperature of 38.9 degrees Celsius", "A client 8 hours post-last drink with mild anxiety and fine hand tremors", "A client in opioid withdrawal with rhinorrhea, yawning, and diarrhea", "A client reporting cannabis withdrawal with irritability and decreased appetite"],
    correct: 0,
    rationale: "Hyperreflexia, hallucinations, and fever 48 to 72 hours after the last drink indicate delirium tremens (DTs), a life-threatening medical emergency requiring immediate assessment and intervention. The other clients have findings consistent with earlier, less severe withdrawal stages that, while requiring monitoring, are not immediately life-threatening."
  },
  {
    stem: "A client in alcohol withdrawal is found seizing in bed. What is the nurse's priority action?",
    options: ["Position the client side-lying and protect from injury without restraining", "Restrain the client's extremities to prevent self-injury during the seizure", "Insert an oral airway while the seizure is actively occurring", "Leave the room immediately to retrieve IV lorazepam before addressing positioning"],
    correct: 0,
    rationale: "During an active seizure, the nurse positions the client side-lying to protect the airway and protects the client from injury without restraining, since restraint during a seizure risks injury. Inserting an airway during active seizure activity can cause harm, and the seizure should be allowed to run its course while safety is maintained."
  },
  {
    stem: "A client with chronic alcohol use disorder presents with confusion, ataxia, and nystagmus. The provider orders IV dextrose. What is the nurse's priority action before administering it?",
    options: ["Verify that thiamine has been given first to prevent precipitating or worsening Wernicke's encephalopathy", "Administer the dextrose immediately, since correcting blood glucose takes priority over all other interventions", "Hold both thiamine and dextrose until a neurology consultation is obtained", "Administer a benzodiazepine before any other intervention is considered"],
    correct: 0,
    rationale: "Confusion, ataxia, and nystagmus in a client with chronic alcohol use suggest Wernicke's encephalopathy from thiamine deficiency. Thiamine must be given before glucose, since administering dextrose first can precipitate or worsen Wernicke's encephalopathy in a thiamine-deficient patient."
  },
  {
    stem: "A client is found unresponsive with a respiratory rate of 4 breaths per minute and pinpoint pupils. What is the nurse's priority action?",
    options: ["Administer naloxone immediately and anticipate the need for repeat dosing", "Administer flumazenil to reverse the suspected sedative overdose", "Position the client supine and reassess in 10 minutes", "Administer activated charcoal to bind any remaining substance"],
    correct: 0,
    rationale: "Pinpoint pupils, severe respiratory depression, and unresponsiveness indicate opioid overdose, a life-threatening emergency requiring immediate naloxone administration. Repeat dosing should be anticipated since naloxone's duration of action may be shorter than that of the opioid causing the overdose."
  },
  {
    stem: "A client who received naloxone for an opioid overdose now has stable vital signs and requests to leave the emergency department. What is the nurse's priority teaching point?",
    options: ["The client must remain for observation, since naloxone can wear off before the opioid clears, allowing respiratory depression to recur", "The client may safely leave now that vital signs have normalized", "The client should be sent home with a prescription for methadone to prevent further overdose", "Naloxone provides permanent reversal and no further monitoring is needed"],
    correct: 0,
    rationale: "Naloxone's duration of action can be shorter than that of the opioid involved, meaning respiratory depression can recur after it wears off. The client requires continued observation despite the temporary improvement in vital signs."
  },
  {
    stem: "A client on methadone maintenance therapy has a new ECG showing a prolonged QT interval. What is the nurse's priority action?",
    options: ["Notify the provider, since methadone carries a risk of QT prolongation and Torsades de pointes", "Discontinue the methadone without provider notification", "Recognize this as an expected, clinically insignificant finding", "Administer naloxone to reverse the cardiac effect of methadone"],
    correct: 0,
    rationale: "Methadone carries a known risk of QT prolongation and the potentially fatal arrhythmia Torsades de pointes. The nurse notifies the provider of this finding so that dosing or an alternative therapy with lower cardiac risk, such as buprenorphine, can be considered."
  },
  {
    stem: "A client completing opioid detoxification is started on naltrexone for relapse prevention. What is the priority safety teaching?",
    options: ["Do not attempt to override the medication's blocking effect by taking more opioids, since doing so risks coma or death", "Naltrexone may be taken together with opioids for enhanced pain control", "Naltrexone should be started immediately during active opioid intoxication", "Naltrexone is a controlled substance requiring the same dispensing restrictions as methadone"],
    correct: 0,
    rationale: "Naltrexone blocks the euphoric effects of opioids. The critical safety teaching is that the client must never attempt to overcome this blockade by taking more opioids, since doing so significantly raises the risk of fatal overdose. It is used only after complete detoxification and is not a controlled substance."
  },
  {
    stem: "A client on disulfiram for alcohol use disorder asks if mouthwash containing alcohol is safe to use. What is the nurse's priority teaching point?",
    options: ["Avoid all products containing alcohol, including mouthwash and cough syrup, since even small amounts can trigger an acetaldehyde reaction", "Mouthwash is safe since disulfiram only reacts with beverage alcohol", "Disulfiram should only be taken on days the client plans to drink", "The client should switch to naltrexone if avoiding alcohol-containing products is difficult"],
    correct: 0,
    rationale: "Disulfiram inhibits aldehyde dehydrogenase and reacts with any source of alcohol, including over-the-counter products such as mouthwash and cough syrup. The nurse must teach the client to avoid all alcohol-containing products to prevent an acetaldehyde syndrome reaction."
  },
  {
    stem: "A nurse assesses a client with agitation, dilated pupils, tachycardia, and a report of tactile sensations of bugs crawling on the skin shortly after reported cocaine use. The client also reports chest pain. What is the nurse's priority concern?",
    options: ["Cardiovascular complications from stimulant intoxication, given the chest pain", "Reassurance that the tactile sensation is benign and requires no further evaluation", "Opioid withdrawal, given the skin sensations", "Cannabis intoxication, given the recent substance use history"],
    correct: 0,
    rationale: "Chest pain in the context of stimulant intoxication raises concern for cardiovascular complications such as myocardial ischemia or arrhythmia, which require urgent evaluation. The tactile hallucination (formication) is consistent with cocaine intoxication but should not distract from the more urgent cardiovascular concern."
  },
  {
    stem: "A client is admitted in a dissociative, extremely agitated state with nystagmus in horizontal, vertical, and rotary directions and hyperthermia. The nurse's attempt to verbally calm the client appears to worsen the agitation. What does the nurse recognize?",
    options: ["PCP intoxication; verbal de-escalation can worsen agitation in this substance", "Alcohol withdrawal; verbal de-escalation should be continued and intensified", "Opioid overdose; naloxone should be administered immediately", "Cannabis intoxication; the client should be engaged in conversation to redirect focus"],
    correct: 0,
    rationale: "Multi-directional nystagmus, hyperthermia, and extreme agitation are classic for PCP intoxication. Unlike many psychiatric crises, verbal de-escalation can worsen agitation in PCP intoxication, and the nurse should minimize verbal engagement while prioritizing safety."
  },
  {
    stem: "A nurse is caring for a client using xylazine-contaminated fentanyl who received naloxone but continues to have decreased respiratory effort. What does the nurse recognize?",
    options: ["Xylazine is not an opioid and is not fully reversed by naloxone, though naloxone should still be given for the fentanyl component", "The naloxone dose was administered incorrectly and should not be repeated", "This response indicates the client is not actually using opioids", "Xylazine fully reverses with standard-dose naloxone and no further action is needed"],
    correct: 0,
    rationale: "Xylazine is a non-opioid veterinary tranquilizer that does not fully respond to naloxone. Persistent respiratory depression despite naloxone in a client using xylazine-contaminated fentanyl should prompt continued supportive care and additional naloxone dosing for the fentanyl component."
  },
  {
    stem: "A client's family member states, 'I always call in sick for him when he's been drinking, and I've poured out his liquor before to control it.' What does the nurse recognize in this behavior?",
    options: ["Enabling behaviors that protect the client from the natural consequences of substance use", "Healthy boundary-setting that supports the client's recovery", "Therapeutic communication consistent with codependency recovery", "An appropriate application of motivational interviewing principles"],
    correct: 0,
    rationale: "Calling in sick for the client and destroying the alcohol supply are enabling behaviors, since they protect the client from the natural consequences of their substance use, which can prevent the client from experiencing the motivation needed for change."
  },
  {
    stem: "A client with both schizophrenia and a substance use disorder is admitted after a psychotic episode, and the treatment team cannot determine if the psychosis is substance-induced or a primary psychiatric illness. What does the nurse recognize about this presentation?",
    options: ["This reflects dual diagnosis, in which substance use can precipitate psychotic behavior and complicate identification of the primary driver of symptoms", "This presentation rules out a primary psychiatric illness entirely", "Dual diagnosis only applies when both conditions were diagnosed at a single visit", "The team should assume the substance use disorder is secondary without further assessment"],
    correct: 0,
    rationale: "Dual diagnosis describes a client with both a substance use disorder and a psychiatric illness. Substance use can precipitate or mimic psychotic symptoms, making it genuinely difficult to determine which condition is driving the current presentation, requiring careful longitudinal assessment."
  },
  {
    stem: "A client being discharged after alcohol detoxification tells the nurse, 'I think I'll just cut back gradually on my own next time instead of going through this again.' What is the nurse's priority response?",
    options: ["Explain that self-managing alcohol withdrawal at home can be life-threatening and future withdrawal should be medically supervised", "Affirm the plan, since gradual self-tapering is an effective relapse prevention strategy", "Tell the client that cutting back is acceptable as long as it is done over several months", "Avoid addressing the statement directly to protect the therapeutic relationship"],
    correct: 0,
    rationale: "The nurse must correct this misunderstanding: self-managing alcohol withdrawal at home, even gradually, can be life-threatening due to the risk of seizures and delirium tremens. Any future withdrawal should be medically supervised."
  },
  {
    stem: "A client newly entering a 12-step recovery program tells the nurse, 'I just need to try harder and use more willpower this time.' What is the nurse's best response, reflecting addiction as a chronic disease?",
    options: ["'Addiction involves changes in brain chemistry, not just willpower. Acknowledging powerlessness over the addiction is the foundational first step in programs like AA.'", "'You're right, willpower is the most important factor in recovery.'", "'Relapse means you weren't really committed to recovery the first time.'", "'The 12-step program requires you to delegate responsibility for your recovery to a sponsor.'"],
    correct: 0,
    rationale: "The nurse should reframe addiction as a neurobiological, chronic disease rather than a failure of willpower. The foundational principle of 12-step programs is acknowledging powerlessness over the addiction, not self-blame or relying on willpower alone, and recovery remains the individual's own ongoing process."
  },
  {
    stem: "A nurse is caring for a client with severe coughing, agitation, and broken, brown-stained teeth. What substance does the nurse suspect, and what is the priority focus of ongoing assessment?",
    options: ["Methamphetamine use; assess for cardiovascular complications such as hypertension and arrhythmias", "Opioid use; assess for respiratory depression and pinpoint pupils", "Alcohol use; assess for ataxia and slurred speech", "Cannabis use; assess for increased appetite and conjunctival injection"],
    correct: 0,
    rationale: "Severe coughing, agitation, and 'meth mouth' (broken, brown-stained, or missing teeth) are classic findings of methamphetamine use. The nurse prioritizes assessment for cardiovascular complications, since chronic methamphetamine use causes hypertension, arrhythmias, and other cardiac damage."
  },

  // ===== CHAPTER 17: MOOD DISORDERS & SUICIDE (17, incl. 1 SATA) =====
  {
    stem: "A nurse is admitting a client in acute mania to the inpatient unit. The client is loud, pacing, and attempting to engage other clients in conversation in the day room. What is the priority nursing intervention?",
    options: ["Move the client to a private, low-stimulation room and limit group activity", "Assign the client to a shared room to encourage social connection", "Allow the client to remain in the day room to expend excess energy", "Encourage the client to lead a group activity to channel their energy productively"],
    correct: 0,
    rationale: "A client in acute mania requires a low-stimulation environment to prevent escalation. Moving the client to a private room and limiting group activity reduces overstimulation, since manic clients can disrupt and overstimulate other clients in shared or group settings."
  },
  {
    stem: "A client on lithium reports 2 days of diarrhea and vomiting and appears unsteady when walking. What is the priority nursing action?",
    options: ["Hold the next dose, notify the provider, and anticipate a serum lithium level given signs of possible toxicity", "Administer the next scheduled dose without delay", "Encourage the client to restrict fluid intake to prevent further electrolyte loss", "Administer an antidiarrheal and reassess in 24 hours before any other action"],
    correct: 0,
    rationale: "Diarrhea, vomiting, and new ataxia in a client on lithium suggest toxicity, since fluid loss reduces renal clearance and raises serum lithium levels. The nurse holds the next dose, notifies the provider, and anticipates a serum lithium level before further dosing."
  },
  {
    stem: "Which findings would the nurse expect to assess in a client experiencing acute lithium toxicity?",
    options: ["Coarse hand tremor", "Ataxia", "Confusion", "Polydipsia and polyuria", "Improved fine motor coordination", "Decreased thirst"],
    correct: [0, 1, 2, 3],
    rationale: "Lithium toxicity presents with coarse tremor, ataxia, confusion, and polydipsia/polyuria, among other findings such as nausea, vomiting, diarrhea, and in severe cases, seizures or coma. Improved coordination and decreased thirst are not features of lithium toxicity and would be inconsistent with this presentation."
  },
  {
    stem: "A client newly prescribed lithium states they are starting a low-sodium diet to help manage their blood pressure. What is the nurse's priority teaching point?",
    options: ["A low-sodium diet increases lithium levels and toxicity risk; the client should maintain consistent, not reduced, sodium intake", "A low-sodium diet enhances lithium's therapeutic effect and should be encouraged", "Sodium intake has no relationship to lithium levels", "The client should double the lithium dose to compensate for the dietary change"],
    correct: 0,
    rationale: "A low-sodium diet raises lithium levels and increases toxicity risk, since the kidneys retain lithium more readily when sodium intake decreases. The nurse corrects this misunderstanding and advises the client to maintain consistent sodium intake."
  },
  {
    stem: "A client with bipolar disorder is started on an SSRI for depressive symptoms with no mood stabilizer or antipsychotic ordered. What is the nurse's priority concern?",
    options: ["Question the order, since an antidepressant given alone in bipolar disorder risks inducing a manic episode", "Administer the SSRI as ordered, since this is standard treatment for bipolar depression", "Recognize this as appropriate since SSRIs are always given as monotherapy in bipolar disorder", "Hold the medication only if the client currently reports manic symptoms"],
    correct: 0,
    rationale: "Giving an antidepressant alone in bipolar disorder, without a concurrent mood stabilizer or antipsychotic, can induce a manic episode. The nurse should question this order and clarify with the provider before administering the SSRI as monotherapy."
  },
  {
    stem: "A client started on fluoxetine 10 days ago reports feeling 'more energetic' but states their mood is 'still pretty low.' What is the priority nursing assessment at this point in treatment?",
    options: ["Assess for suicidal ideation and a specific plan, since this represents the highest-risk window where energy has improved before mood has lifted", "Reassure the client that full benefit typically takes 6 months and no further assessment is needed now", "Discontinue the fluoxetine immediately since the client reports inadequate response", "Recognize this as an adverse reaction requiring an immediate dose increase"],
    correct: 0,
    rationale: "The first 1 to 2 weeks after starting an SSRI represent the highest-risk window for suicide, since increased energy can return before mood lifts, giving a still-depressed client the physical capacity to act on suicidal thoughts. The nurse should directly assess for suicidal ideation and a specific plan."
  },
  {
    stem: "A client taking phenelzine reports eating aged cheese and drinking red wine at a celebration. The nurse notes a blood pressure of 198/118 and severe headache. What is the priority treatment?",
    options: ["Labetalol, for the hypertensive crisis caused by a tyramine reaction", "Cyproheptadine, for suspected serotonin syndrome", "Dantrolene, for suspected neuroleptic malignant syndrome", "A repeat lithium level, since this presentation suggests lithium toxicity"],
    correct: 0,
    rationale: "Consuming tyramine-rich foods while taking an MAOI like phenelzine can precipitate a hypertensive crisis, presenting with severe hypertension and headache. The priority treatment for this hypertensive crisis is labetalol."
  },
  {
    stem: "A client is being discharged on bupropion for depression and smoking cessation. The history includes a seizure disorder diagnosed in adolescence. What is the nurse's priority concern?",
    options: ["Bupropion lowers the seizure threshold and is contraindicated in clients with a seizure disorder; the nurse should notify the provider before dispensing", "Bupropion is the preferred antidepressant specifically for clients with a seizure history", "This history has no bearing on the appropriateness of bupropion therapy", "Bupropion should be increased to the maximum dose to compensate for the seizure history"],
    correct: 0,
    rationale: "Bupropion lowers the seizure threshold and is contraindicated in clients with a seizure disorder. The nurse should recognize this as a significant safety concern and notify the provider before the medication is dispensed."
  },
  {
    stem: "A client scheduled for ECT in the morning tells the nurse, 'I signed the consent form yesterday, but I've changed my mind, I don't want to do this anymore.' What is the nurse's priority action?",
    options: ["Notify the provider that the client is refusing the procedure, since consent can be withdrawn at any time", "Proceed with the ECT as scheduled, since consent was already obtained", "Tell the client that withdrawing consent at this stage is not permitted", "Administer pre-procedure sedation before notifying the provider"],
    correct: 0,
    rationale: "A client retains the right to refuse ECT at any time, even after previously signing informed consent. The nurse must respect this refusal and notify the provider immediately rather than proceeding against the client's current wishes."
  },
  {
    stem: "A client returns 45 minutes after an ECT treatment and is confused, unable to recall arriving that morning. What is the nurse's priority interpretation?",
    options: ["This is an expected post-ECT finding that typically resolves within hours; continue monitoring orientation and level of consciousness", "This is an unexpected complication requiring an emergent neurology consult", "This indicates permanent cognitive impairment requiring discontinuation of future treatments", "This indicates inadequate anesthesia during the procedure"],
    correct: 0,
    rationale: "Confusion and short-term memory loss are expected findings immediately following ECT and typically resolve within hours. The nurse's priority is to continue monitoring orientation and level of consciousness rather than treating this as an unexpected complication."
  },
  {
    stem: "A client started on both an SSRI and a newly added MAOI develops tachycardia, hyperthermia, dilated pupils, diarrhea, and muscle twitching within hours of the change. What is the priority action?",
    options: ["Notify the provider immediately, anticipate stopping the causative drug, and prepare for cyproheptadine administration", "Notify the provider and anticipate dantrolene as the priority treatment", "Recognize this as an expected adjustment reaction requiring no specific intervention", "Anticipate a serum lithium level as the priority action"],
    correct: 0,
    rationale: "Rapid onset of tachycardia, hyperthermia, dilated pupils, diarrhea, and muscle twitching after adding a second serotonergic agent indicates serotonin syndrome. The nurse notifies the provider immediately, anticipates stopping the causative drug, and prepares for cyproheptadine administration."
  },
  {
    stem: "A client on an antipsychotic develops lead-pipe muscle rigidity, a temperature of 39.8 degrees Celsius, and a blood pressure of 162/108 over several days. What laboratory finding would support this diagnosis?",
    options: ["Elevated creatine kinase (CPK)", "Decreased creatine kinase (CPK)", "Decreased white blood cell count", "Elevated serum lithium level"],
    correct: 0,
    rationale: "Lead-pipe muscle rigidity, high fever, and hypertension developing over days in a client on an antipsychotic are classic for neuroleptic malignant syndrome (NMS). An elevated creatine kinase (CPK) from muscle breakdown supports this diagnosis and distinguishes NMS from serotonin syndrome, where CPK is not significantly elevated."
  },
  {
    stem: "A nurse is interviewing a client who states, 'There's no reason to keep going, nothing matters anymore.' What is the nurse's priority next question?",
    options: ["'Are you thinking of harming yourself, and do you have a plan?'", "'What happened to make you feel this way?'", "'Have you talked to your family about how you're feeling?'", "'Don't you think things will get better with time?'"],
    correct: 0,
    rationale: "The priority response to a statement suggesting hopelessness is to ask directly and specifically about suicidal ideation and a plan. This assesses immediate safety risk and should not be delayed in favor of exploring the underlying cause first."
  },
  {
    stem: "A nurse finds a depressed inpatient, withdrawn and tearful for the past week, calmly giving away a treasured photo album, stating they 'won't need it anymore.' What is the priority action?",
    options: ["Recognize this as a warning sign of suicidal intent, implement one-to-one observation, and notify the provider", "Document the behavior as a positive sign of improved social connection", "Allow the exchange to continue, since giving gifts reflects generosity", "Wait until morning rounds to discuss with the treatment team"],
    correct: 0,
    rationale: "Giving away prized possessions is a recognized warning sign of suicidal intent. The nurse should recognize this immediately, implement one-to-one observation, and notify the provider rather than interpreting the behavior as benign or waiting until the next shift."
  },
  {
    stem: "A client with major depressive disorder is discharged after a recent suicide attempt by overdose. What is the nurse's priority discharge teaching for the family?",
    options: ["Remove firearms, medications, and sharp objects from the home", "Encourage the client to spend more time alone to process emotions", "Monitor social media use as the primary safety measure", "Avoid discussing the suicide attempt to prevent further distress"],
    correct: 0,
    rationale: "Means restriction, removing firearms, medications, and sharp objects from the home, is the single most effective and immediate intervention to prevent another suicide attempt. This is the most important discharge instruction given to families."
  },
  {
    stem: "A client newly diagnosed with major depressive disorder scores a 24 on the Beck Depression Inventory. How should the nurse interpret this result?",
    options: ["Moderate depression, indicating the need for continued treatment monitoring", "Minimal depression, indicating the client likely does not require ongoing treatment", "Severe depression requiring immediate inpatient transfer", "An invalid score requiring the assessment to be repeated"],
    correct: 0,
    rationale: "A Beck Depression Inventory score of 20 to 28 falls within the moderate depression range. The nurse documents this finding and uses it as a baseline for tracking treatment response over time."
  },
  {
    stem: "A client on carbamazepine for bipolar disorder reports a sore throat and the nurse notes a fever of 38.6 degrees Celsius three weeks into therapy. What is the priority action?",
    options: ["Notify the provider immediately and anticipate a CBC, given carbamazepine's black box warning for aplastic anemia and agranulocytosis", "Reassure the client that a sore throat and mild fever are expected, benign side effects", "Administer an over-the-counter analgesic and reassess in 48 hours", "Increase the carbamazepine dose to address the symptoms"],
    correct: 0,
    rationale: "Carbamazepine carries a black box warning for aplastic anemia and agranulocytosis. A sore throat and fever are concerning for bone marrow suppression and require urgent provider notification and an immediate CBC, similar to the flu-like symptom warning seen with clozapine."
  },

  // ===== CHAPTER 16: SCHIZOPHRENIA & PSYCHOSIS (17, incl. 1 SATA) =====
  {
    stem: "A client with schizophrenia tells the nurse, 'The voices are telling me to hurt my doctor when he comes in for rounds.' What is the nurse's priority action?",
    options: ["Implement one-to-one observation immediately, before notifying the provider", "Notify the provider first, then implement one-to-one observation once orders are received", "Document the statement and continue routine care without escalation", "Tell the client the voices are not real and encourage them to ignore them"],
    correct: 0,
    rationale: "When a client reports command hallucinations instructing harm to another person, safety takes priority over notification protocols. The nurse implements one-to-one observation immediately, then notifies the provider as soon as possible after safety measures are in place."
  },
  {
    stem: "A home health nurse arrives at a client's residence and observes the client, who has schizophrenia, standing in the driveway holding a firearm. What is the priority action?",
    options: ["Keep driving and leave the premises immediately, then call emergency services", "Honk the horn to announce arrival and wait for the client to put the weapon down", "Approach calmly and attempt to verbally de-escalate the situation", "Park and wait in the car until the client appears to calm down"],
    correct: 0,
    rationale: "When a nurse encounters an armed client during a home visit, nurse safety is the absolute first priority. The correct action is to keep driving and leave the premises immediately, then call emergency services. Honking, stopping, or verbal engagement all increase risk to the nurse."
  },
  {
    stem: "A client newly started on haloperidol develops sudden, severe neck spasms with the eyes rolling upward and reports difficulty breathing. What is the priority action?",
    options: ["Administer IM or IV benztropine or diphenhydramine immediately and notify the provider", "Recognize this as an expected, benign side effect requiring no intervention", "Anticipate dantrolene as the priority intervention for this presentation", "Hold all future doses and reassess in 24 hours before any intervention"],
    correct: 0,
    rationale: "Sudden neck spasms, oculogyric crisis, and difficulty breathing indicate acute dystonia with possible laryngospasm, an airway emergency. The nurse administers IM or IV benztropine or diphenhydramine immediately and notifies the provider promptly."
  },
  {
    stem: "Which findings would the nurse expect to assess in a client experiencing the negative symptoms of schizophrenia?",
    options: ["Flat affect", "Avolition", "Anhedonia", "Poverty of speech (alogia)", "Auditory hallucinations", "Disorganized speech"],
    correct: [0, 1, 2, 3],
    rationale: "The negative symptoms of schizophrenia are represented by the 5 A's: flat or blunted Affect, Alogia (poverty of speech), Avolition (lack of motivation), Asociality, and Anhedonia (inability to feel pleasure). Auditory hallucinations and disorganized speech are positive symptoms, representing an addition to normal function rather than a loss of it."
  },
  {
    stem: "A client on antipsychotic therapy paces constantly, rocks back and forth, and states, 'I just can't sit still.' What does the nurse suspect, and how should this be addressed?",
    options: ["Akathisia, a medication-induced restlessness often mistaken for anxiety; the finding should be reported for possible treatment with a beta-blocker", "Tardive dyskinesia, requiring an immediate dose increase of the antipsychotic", "Pseudoparkinsonism, requiring physostigmine administration", "A normal anxiety response unrelated to the antipsychotic medication"],
    correct: 0,
    rationale: "Constant pacing, rocking, and an inability to sit still in a client on antipsychotic therapy suggest akathisia, frequently mistaken for anxiety. This finding should be reported, since akathisia is typically treated with a beta-blocker or benzodiazepine rather than an anxiolytic alone."
  },
  {
    stem: "A client who has taken an antipsychotic for several years develops repetitive lip smacking and facial grimacing. What is the anticipated management approach?",
    options: ["The provider will likely reduce the antipsychotic dose or switch to clozapine, since this condition is often irreversible", "The nurse should administer benztropine immediately for full resolution", "This finding is expected to fully resolve within hours with no intervention", "The antipsychotic dose should be increased to control the movements"],
    correct: 0,
    rationale: "Repetitive orofacial movements developing after long-term antipsychotic use indicate tardive dyskinesia, which is often irreversible. The provider will likely reduce the antipsychotic dose or switch to clozapine, since benztropine is not effective for tardive dyskinesia."
  },
  {
    stem: "A client on haloperidol develops a fever of 40.1 degrees Celsius, lead-pipe muscle rigidity, and a blood pressure of 168/112 over the past 2 days. What is the priority action?",
    options: ["Notify the provider immediately, anticipate stopping the haloperidol, and prepare for dantrolene administration", "Administer an antipyretic and reassess in 4 hours", "Administer an additional dose of haloperidol to manage the agitation", "Recognize this as an expected, benign reaction requiring only comfort measures"],
    correct: 0,
    rationale: "Fever, lead-pipe rigidity, and hypertension developing over days in a client on an antipsychotic indicate neuroleptic malignant syndrome, a life-threatening emergency. The nurse notifies the provider immediately, anticipates discontinuation of the haloperidol, and prepares for dantrolene treatment."
  },
  {
    stem: "A client three weeks into clozapine therapy reports a sore throat, fatigue, and a temperature of 38.7 degrees Celsius. What is the priority action?",
    options: ["Notify the provider immediately and obtain a CBC, since these symptoms may indicate agranulocytosis", "Administer an over-the-counter analgesic and instruct follow-up if symptoms persist beyond 48 hours", "Reassure the client that flu-like symptoms are an expected, benign effect of clozapine", "Increase the clozapine dose to compensate for the breakthrough symptoms"],
    correct: 0,
    rationale: "Flu-like symptoms in a client on clozapine are a critical warning sign for agranulocytosis, a black box warning. The nurse must notify the provider immediately and obtain a CBC without delay, since waiting risks a fatal outcome."
  },
  {
    stem: "A client's most recent CBC while on clozapine shows a white blood cell count of 2,800 cells/mm3. What is the priority action?",
    options: ["Hold the clozapine and notify the provider immediately", "Administer the clozapine as scheduled and recheck the CBC in 1 week", "Increase the clozapine dose to boost the immune response", "Document the finding and continue routine weekly monitoring with no other action"],
    correct: 0,
    rationale: "A white blood cell count of 2,800 cells/mm3 is significantly low and concerning for agranulocytosis. The nurse holds the clozapine and notifies the provider immediately, since continuing risks severe, potentially fatal infection."
  },
  {
    stem: "A client receiving IM olanzapine for acute agitation has a standing order for IM lorazepam if agitation continues. The client remains agitated 20 minutes later. What is the priority concern before administering the lorazepam?",
    options: ["IM olanzapine should not be combined with IM or IV benzodiazepines due to the risk of respiratory failure; the order should be clarified with the provider", "There is no significant interaction, and the lorazepam should be administered as ordered", "The combination is safe only if administered at least 6 hours apart", "Olanzapine and lorazepam should always be combined for optimal sedation"],
    correct: 0,
    rationale: "The combination of IM olanzapine with IV or IM benzodiazepines carries a documented risk of respiratory failure and has caused multiple deaths. The nurse should clarify this order with the provider before administering the lorazepam."
  },
  {
    stem: "A client with paranoid schizophrenia repeatedly checks under their bed, stating staff are 'planning something.' Which nursing approach is most appropriate?",
    options: ["Assign consistent staff members and avoid challenging the client's beliefs directly", "Rotate staff assignments daily to demonstrate that no single staff member poses a threat", "Directly confront the client, stating, 'No one here is planning anything against you'", "Avoid all interaction with the client until the paranoid behavior resolves"],
    correct: 0,
    rationale: "Assigning consistent staff members reduces paranoia, since rotating unfamiliar staff increases suspicion. Directly challenging the client's beliefs escalates paranoia and damages the therapeutic relationship; the nurse instead avoids challenging the delusion while providing consistent, predictable care."
  },
  {
    stem: "A client with schizophrenia has been observed cheeking medication during the past three administrations. What is the most appropriate nursing intervention?",
    options: ["Check the client's mouth after each medication administration to confirm the medication was swallowed", "Discontinue the medication entirely, since the client is clearly refusing treatment", "Crush all future medications and administer them in food without informing the client", "Document the behavior without further action, since cheeking is not a safety concern"],
    correct: 0,
    rationale: "Cheeking medication is common in paranoid clients due to underlying mistrust. The appropriate intervention is to check the mouth after administration to confirm the medication was swallowed. Crushing medication into food without the client's knowledge violates informed consent."
  },
  {
    stem: "A client on risperidone reports breast tenderness, and the nurse notes the male client has developed breast enlargement. What is the likely cause?",
    options: ["Hyperprolactinemia from risperidone, which carries the highest risk of this effect among atypical antipsychotics", "An unrelated endocrine disorder requiring an oncology referral", "An expected effect of clozapine therapy, not risperidone", "A sign of agranulocytosis requiring an immediate CBC"],
    correct: 0,
    rationale: "Risperidone carries the highest risk of hyperprolactinemia among atypical antipsychotics due to strong dopamine blockade. Elevated prolactin causes gynecomastia and tenderness in male clients, along with galactorrhea and menstrual irregularities in female clients."
  },
  {
    stem: "A client newly started on aripiprazole reports an inability to sit still and constant urges to move their legs but denies feeling anxious. What does the nurse recognize?",
    options: ["Akathisia, a known side effect occurring in up to 30% of patients on aripiprazole", "Tardive dyskinesia, an expected and reversible early effect of aripiprazole", "An anxiety disorder unrelated to the new medication, requiring an anxiolytic", "Agranulocytosis, requiring an immediate CBC before any further assessment"],
    correct: 0,
    rationale: "Akathisia occurs in up to 30% of patients taking aripiprazole, even though the medication is otherwise weight-neutral with minimal QT prolongation. The nurse should recognize this restlessness as a medication side effect rather than a primary anxiety disorder."
  },
  {
    stem: "A client states, 'Everyone in the cafeteria was laughing, I know they were laughing at the secret government plan I uncovered.' What does the nurse identify in this statement?",
    options: ["A combination of ideas of reference and a paranoid/persecutory delusion", "A single, isolated grandiose delusion with no other thought content present", "A somatic delusion exclusively, with no persecutory component", "An auditory hallucination, since the client describes hearing laughter"],
    correct: 0,
    rationale: "This statement combines ideas of reference, in which the neutral event of group laughter is misinterpreted as personally directed, and a paranoid/persecutory delusion involving a government conspiracy. The nurse should document both components precisely."
  },
  {
    stem: "A family asks why their loved one with schizoaffective disorder takes both an antipsychotic and a mood stabilizer. What is the nurse's best explanation?",
    options: ["'Schizoaffective disorder involves both psychotic symptoms and mood symptoms, and the psychotic symptoms persist even when mood is stable, so both medications are needed'", "'The mood stabilizer is only a backup in case the antipsychotic stops working'", "'These are actually two unrelated diagnoses occurring at the same time'", "'The combination is used only during hospitalization and will be discontinued at discharge'"],
    correct: 0,
    rationale: "Schizoaffective disorder combines schizophrenia symptoms with mood disorder symptoms, but the psychotic symptoms persist even when mood symptoms are absent. This is why treatment requires both an antipsychotic for the persistent psychosis and a mood stabilizer or antidepressant for the mood component."
  },
  {
    stem: "A client newly started on chlorpromazine reports increased sedation and the nurse notes orthostatic hypotension when the client stands. The client's family asks why this medication was chosen over a higher-potency option. What is the nurse's best explanation?",
    options: ["Chlorpromazine is a low-potency typical antipsychotic, which causes more sedation and anticholinergic effects but carries less EPS risk than a high-potency agent like haloperidol", "Chlorpromazine has no relationship between potency and side effect profile compared to other typical antipsychotics", "Chlorpromazine was selected because it carries the highest EPS risk among all antipsychotic agents", "Chlorpromazine causes neither sedation nor orthostatic hypotension, and these findings are unrelated to the medication"],
    correct: 0,
    rationale: "Chlorpromazine is a low-potency, first-generation antipsychotic. Low-potency typical antipsychotics generally cause more sedation and anticholinergic/orthostatic effects but carry a lower EPS risk compared to high-potency agents like haloperidol, reflecting an inverse relationship between potency and these specific side effect profiles."
  }
];
