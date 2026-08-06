/* Psych Final - Knowledge Check - Ch 24 Neurocognitive Disorders (Delirium, Dementia)
   KC convention: correct is always index 0 for single-select; engine shuffles.
   SATA uses correct as an array of indices. */
window.QUESTIONS = [
  {
    stem: "How does the onset of delirium typically compare to dementia?",
    options: ["Delirium is sudden and acute, developing over hours to days", "Delirium is gradual, developing over months to years", "Both develop at the same rate", "Delirium has no identifiable onset pattern"],
    correct: 0,
    rationale: "Delirium is sudden and acute, hours to days, while dementia is gradual, months to years. Onset speed is one of the fastest ways to tell them apart at the bedside."
  },
  {
    stem: "How does the course of delirium differ from the course of dementia?",
    options: ["Delirium fluctuates through the day and is often worse at night; dementia shows a progressive, steady decline", "Delirium shows a steady decline; dementia fluctuates through the day", "Both fluctuate equally throughout the day", "Neither condition changes over the course of a day"],
    correct: 0,
    rationale: "Delirium fluctuates, often worsening at night, while dementia progresses steadily downward without the day-to-day swings."
  },
  {
    stem: "How is level of consciousness affected differently in delirium versus dementia?",
    options: ["Delirium impairs and fluctuates consciousness; consciousness stays clear in dementia until late stages", "Consciousness is clear in delirium and impaired early in dementia", "Both impair consciousness equally from onset", "Neither condition affects consciousness"],
    correct: 0,
    rationale: "Delirium involves impaired, fluctuating awareness. In dementia, consciousness remains clear until very late in the disease, even as cognition declines."
  },
  {
    stem: "Which of these is reversible with appropriate treatment?",
    options: ["Delirium", "Dementia (major neurocognitive disorder)", "Both are equally reversible", "Neither is ever reversible"],
    correct: 0,
    rationale: "Delirium is treatable and usually resolves once the underlying cause is corrected. Dementia is not reversible."
  },
  {
    stem: "What is the nursing priority for a patient in delirium?",
    options: ["Find and treat the underlying cause, and maintain safety", "Establish a consistent daily routine", "Begin long-term caregiver support planning", "Administer scheduled antipsychotics"],
    correct: 0,
    rationale: "Delirium priority is finding and treating the cause plus safety, since it is a medical problem showing up as confusion. Dementia priority shifts to safety, structure, and routine because there is no underlying cause to reverse."
  },
  {
    stem: "A hospitalized 78-year-old becomes acutely confused overnight and the family says 'he was never like this before.' What should the nurse assume until proven otherwise?",
    options: ["Delirium", "Dementia", "Normal aging", "Psychiatric decompensation"],
    correct: 0,
    rationale: "A sudden change in mental status in a hospitalized older adult is delirium until proven otherwise. It is a medical emergency requiring investigation of the cause, not an assumption of baseline dementia."
  },
  {
    stem: "Which findings are risk factors for delirium? Select all that apply.",
    options: ["Infection such as UTI or pneumonia", "Medications, including OTC and laxative misuse", "Hypoxia", "Hyponatremia", "Obesity", "Baseline cognitive impairment"],
    correct: [0, 1, 2, 3, 5],
    rationale: "Delirium risk factors include infection (UTI and pneumonia lead the list), medications including OTC and laxative misuse, hypoxia, electrolyte disturbance like hyponatremia, dehydration, fever, advanced age, severity of illness, and baseline cognitive impairment. Obesity is not a delirium risk factor."
  },
  {
    stem: "Which of the following is NOT a recognized risk factor for delirium?",
    options: ["Coping style", "Dehydration", "Advanced age", "Severity of illness"],
    correct: 0,
    rationale: "Coping style is not a delirium risk factor. Delirium is driven by physiologic insults such as infection, hypoxia, electrolyte imbalance, dehydration, fever, advanced age, illness severity, and baseline cognitive impairment."
  },
  {
    stem: "Which two infections most commonly lead the list of delirium triggers?",
    options: ["Urinary tract infection and pneumonia", "Sinusitis and otitis media", "Cellulitis and conjunctivitis", "Gastroenteritis and appendicitis"],
    correct: 0,
    rationale: "UTI and pneumonia lead the infection-related delirium risk list, which is why a sudden change in mental status often prompts a urinalysis and chest assessment first."
  },
  {
    stem: "Which dementia type is characterized by insidious recent-memory loss first, progressing through the four A's, with plaques and tangles on autopsy?",
    options: ["Alzheimer's disease", "Vascular dementia", "Lewy body dementia", "Frontotemporal dementia"],
    correct: 0,
    rationale: "Alzheimer's is the most common dementia type. It begins with insidious recent-memory loss, progresses through the four A's (amnesia, aphasia, apraxia, agnosia), and shows plaques and tangles pathologically."
  },
  {
    stem: "What is the expected teaching point about prognosis in Alzheimer's disease?",
    options: ["It is progressive, and independence does not return", "Symptoms plateau permanently after the first year", "Function is expected to improve with cholinesterase inhibitors", "It resolves once the underlying cause is treated"],
    correct: 0,
    rationale: "Alzheimer's is progressive and independence does not return. Medications slow decline but do not reverse it or restore function."
  },
  {
    stem: "By roughly how many points per year does the MMSE score decline in untreated Alzheimer's disease?",
    options: ["2 to 4 points per year", "10 to 12 points per year", "Less than 1 point per year", "It typically does not decline"],
    correct: 0,
    rationale: "MMSE score in Alzheimer's typically declines about 2 to 4 points per year, useful for tracking disease progression over time."
  },
  {
    stem: "Which dementia type presents with a stepwise pattern of decline tied to strokes or infarcts?",
    options: ["Vascular dementia", "Alzheimer's disease", "Huntington's disease", "Korsakoff syndrome"],
    correct: 0,
    rationale: "Vascular dementia progresses in a stepwise pattern linked to strokes or infarcts, and cardiovascular risk factors drive its development, unlike the slow, continuous decline of Alzheimer's."
  },
  {
    stem: "Which dementia type presents with fluctuating cognition, vivid visual hallucinations, and parkinsonism?",
    options: ["Lewy body dementia", "Frontotemporal dementia", "Vascular dementia", "Creutzfeldt-Jakob disease"],
    correct: 0,
    rationale: "Lewy body dementia presents with fluctuating cognition, vivid visual hallucinations, and parkinsonism, and carries extreme sensitivity to antipsychotics, a critical safety point."
  },
  {
    stem: "A patient with Lewy body dementia becomes agitated and hallucinating. Why is an antipsychotic particularly dangerous for this patient?",
    options: ["Lewy body dementia carries extreme sensitivity to antipsychotics", "Antipsychotics are contraindicated in all forms of dementia", "Antipsychotics worsen visual hallucinations specifically", "Antipsychotics interact with the parkinsonism medications only"],
    correct: 0,
    rationale: "Lewy body dementia patients have extreme sensitivity to antipsychotics due to the dopamine depletion already present from the Lewy body pathology, which can cause a severe, potentially life-threatening reaction."
  },
  {
    stem: "Which dementia type presents with personality and behavior change FIRST, before memory loss, and typically has a younger age of onset?",
    options: ["Frontotemporal dementia (Pick's disease)", "Alzheimer's disease", "Vascular dementia", "Korsakoff syndrome"],
    correct: 0,
    rationale: "Frontotemporal dementia (Pick's) leads with personality and behavior change, before memory loss, and tends to have a younger onset than Alzheimer's."
  },
  {
    stem: "A 54-year-old is brought in by family who report he has become rude, impulsive, and stopped caring about hygiene, while his memory for recent events is still intact. Which dementia type fits this picture?",
    options: ["Frontotemporal dementia", "Alzheimer's disease", "Vascular dementia", "Lewy body dementia"],
    correct: 0,
    rationale: "Personality and behavior change occurring before memory loss, plus a younger age, points to frontotemporal dementia. Alzheimer's would present the opposite way, with memory loss first."
  },
  {
    stem: "Which dementia type is autosomal dominant and presents with choreiform movements plus cognitive decline?",
    options: ["Huntington's disease", "Frontotemporal dementia", "Vascular dementia", "Creutzfeldt-Jakob disease"],
    correct: 0,
    rationale: "Huntington's disease is autosomal dominant, meaning a single copy of the gene from one parent causes the disease, and it presents with choreiform (involuntary, dance-like) movements plus progressive cognitive decline."
  },
  {
    stem: "Which dementia type is a prion disease that is rapidly progressive and fatal?",
    options: ["Creutzfeldt-Jakob disease", "Alzheimer's disease", "Frontotemporal dementia", "Vascular dementia"],
    correct: 0,
    rationale: "Creutzfeldt-Jakob disease (and kuru) is a prion disease, rapidly progressive and fatal, unlike the slower courses of Alzheimer's, vascular, or frontotemporal dementia."
  },
  {
    stem: "Which dementia type results from thiamine (vitamin B1) deficiency due to chronic alcohol use and presents with anterograde amnesia and confabulation?",
    options: ["Korsakoff syndrome", "Frontotemporal dementia", "Huntington's disease", "Lewy body dementia"],
    correct: 0,
    rationale: "Korsakoff syndrome results from chronic alcohol use causing thiamine (B1) deficiency, producing anterograde amnesia (inability to form new memories) with confabulation to fill the gaps."
  },
  {
    stem: "Which vitamin deficiency underlies Korsakoff syndrome?",
    options: ["Thiamine (vitamin B1)", "Cobalamin (vitamin B12)", "Folate (vitamin B9)", "Niacin (vitamin B3)"],
    correct: 0,
    rationale: "Korsakoff syndrome results from thiamine (vitamin B1) deficiency, most often from chronic alcohol use and poor nutritional intake."
  },
  {
    stem: "Which term describes memory loss?",
    options: ["Amnesia", "Aphasia", "Apraxia", "Agnosia"],
    correct: 0,
    rationale: "Amnesia is memory loss. It is one of the four A's used to describe the progressive symptom cluster in dementia."
  },
  {
    stem: "Which term describes deterioration of language ability?",
    options: ["Aphasia", "Amnesia", "Apraxia", "Agnosia"],
    correct: 0,
    rationale: "Aphasia is language deterioration, affecting the ability to speak, understand, read, or write."
  },
  {
    stem: "Which term describes the inability to execute purposeful motor tasks despite intact motor ability, such as being unable to button a shirt?",
    options: ["Apraxia", "Agnosia", "Aphasia", "Amnesia"],
    correct: 0,
    rationale: "Apraxia is the inability to execute purposeful motor tasks despite intact motor function; the muscles work fine, but the brain cannot organize the purposeful action, such as buttoning a shirt or walking."
  },
  {
    stem: "Which term describes the inability to recognize familiar objects or people despite intact senses?",
    options: ["Agnosia", "Apraxia", "Aphasia", "Amnesia"],
    correct: 0,
    rationale: "Agnosia is the inability to recognize familiar objects or people despite intact senses; vision and hearing work fine, but the brain cannot identify what it is sensing."
  },
  {
    stem: "A patient can correctly use a pen when handed one and asked to write, but cannot come up with the word 'pen' when asked to name it. Which deficit is this?",
    options: ["Aphasia", "Apraxia", "Agnosia", "Amnesia"],
    correct: 0,
    rationale: "Correct motor use plus intact recognition, with only word retrieval failing, isolates the deficit to language, which is aphasia. If he could not perform the writing motion, that would be apraxia; if he could not identify what the pen was, that would be agnosia."
  },
  {
    stem: "A patient cannot recognize his own daughter's face despite normal vision. Which deficit is this?",
    options: ["Agnosia", "Apraxia", "Aphasia", "Confabulation"],
    correct: 0,
    rationale: "Failure to recognize a familiar person despite intact vision is agnosia, recognition failure rather than a sensory or motor problem."
  },
  {
    stem: "Which term describes unconsciously filling memory gaps with fabricated but plausible detail, as seen in Korsakoff syndrome?",
    options: ["Confabulation", "Agnosia", "Aphasia", "Sundowning"],
    correct: 0,
    rationale: "Confabulation is unconsciously filling memory gaps with fabricated but plausible detail. The patient is not lying; they believe what they are saying."
  },
  {
    stem: "A patient with dementia tells an elaborate, believable story about a family trip that never happened, and does not know it is false. Is she lying, and what is this called?",
    options: ["She is not lying; this is confabulation", "She is lying to avoid embarrassment", "This is a hallucination", "This is a delusion of grandeur"],
    correct: 0,
    rationale: "This is confabulation, an unconscious filling of memory gaps, not deliberate lying. The patient genuinely believes the fabricated detail."
  },
  {
    stem: "Which term describes worsening confusion and agitation in the late afternoon and evening?",
    options: ["Sundowning", "Confabulation", "Palilalia", "Agnosia"],
    correct: 0,
    rationale: "Sundowning is worse confusion and agitation in the late afternoon to evening, a predictable pattern seen in dementia rather than a random bad day."
  },
  {
    stem: "A dementia patient is calm all morning but becomes agitated and confused every day around 5 pm. What is this pattern called?",
    options: ["Sundowning", "Delirium", "Confabulation", "Palilalia"],
    correct: 0,
    rationale: "A predictable pattern of worsening confusion in the late afternoon or evening is sundowning, distinct from delirium, which is an acute new-onset change rather than a recurring daily pattern."
  },
  {
    stem: "Which term describes planning, organizing, and judgment abilities?",
    options: ["Executive functioning", "Abstract thinking", "Orientation", "Concentration"],
    correct: 0,
    rationale: "Executive functioning refers to planning, organizing, and judgment, higher-level cognitive skills that decline as dementia progresses."
  },
  {
    stem: "Which term describes involuntary repetition of one's own words?",
    options: ["Palilalia", "Confabulation", "Sundowning", "Agnosia"],
    correct: 0,
    rationale: "Palilalia is the involuntary repetition of one's own words, a language symptom that can appear in advancing dementia."
  },
  {
    stem: "The MMSE (Mini-Mental State Examination) is scored out of how many points?",
    options: ["30 points", "20 points", "50 points", "10 points"],
    correct: 0,
    rationale: "The MMSE is a 30-point cognitive screening tool used to gauge severity of cognitive impairment."
  },
  {
    stem: "On the MMSE, which score range corresponds to moderate cognitive impairment?",
    options: ["13 to 20", "20 to 24", "Below 12", "25 to 30"],
    correct: 0,
    rationale: "MMSE bands are 20 to 24 for mild impairment, 13 to 20 for moderate impairment, and below 12 for severe impairment."
  },
  {
    stem: "A patient scores 11 on the MMSE. How should the nurse interpret this?",
    options: ["Severe cognitive impairment", "Mild cognitive impairment", "Moderate cognitive impairment", "Normal cognition"],
    correct: 0,
    rationale: "A score of 11 falls below the 12-point cutoff, indicating severe impairment. Mild is 20 to 24 and moderate is 13 to 20."
  },
  {
    stem: "Which assessment tool screens specifically for delirium rather than dementia?",
    options: ["The Confusion Assessment Method (CAM)", "The MMSE", "The clock drawing test", "The FAST scale"],
    correct: 0,
    rationale: "The CAM screens specifically for delirium. The MMSE, clock drawing test, and FAST scale are used for dementia screening and staging instead."
  },
  {
    stem: "Which of these tools are used to assess or stage dementia, rather than screen for delirium? Select all that apply.",
    options: ["Mini-Cog", "Clock drawing test", "Functional Dementia Scale", "Global Deterioration Scale", "FAST (Functional Assessment Staging Tool)", "Confusion Assessment Method"],
    correct: [0, 1, 2, 3, 4],
    rationale: "Mini-Cog, clock drawing, Functional Dementia Scale, Global Deterioration Scale, and FAST all assess or stage dementia. The Confusion Assessment Method screens for delirium specifically, not dementia."
  },
  {
    stem: "Which components belong to the Mental Status Examination (MSE)? Select all that apply.",
    options: ["Appearance and grooming", "Affect", "Orientation", "Recall and short-term/long-term memory", "Concentration and calculations", "Coping skills and support systems"],
    correct: [0, 1, 2, 3, 4],
    rationale: "The MSE covers appearance/grooming, affect, orientation, recall/short-term/long-term memory, concentration and calculations, judgment, and abstract thinking. Coping skills, support systems, and pain belong to a different part of the overall assessment, not the MSE itself."
  },
  {
    stem: "How is abstract thinking typically tested during the Mental Status Examination?",
    options: ["Asking the patient to interpret a proverb, such as 'a stitch in time saves nine'", "Asking the patient to recall three words after five minutes", "Asking the patient their name, location, and the date", "Asking the patient to subtract serial sevens from 100"],
    correct: 0,
    rationale: "Abstract thinking is tested with a proverb such as 'a stitch in time saves nine.' A literal, concrete interpretation of the proverb suggests cognitive impairment."
  },
  {
    stem: "A patient interprets the proverb 'a stitch in time saves nine' literally, as being only about sewing. What does this suggest?",
    options: ["Impaired abstract thinking, consistent with cognitive impairment", "Normal orientation", "Intact executive functioning", "A language-only deficit with intact cognition"],
    correct: 0,
    rationale: "A literal, concrete interpretation of a proverb rather than grasping the figurative meaning suggests impaired abstract thinking, one component of the MSE that reflects cognitive decline."
  },
  {
    stem: "What is the core principle behind therapeutic nursing care for a patient with dementia?",
    options: ["Consistency: routine, caregivers, and schedule stay the same", "Frequent rotation of staff to build broad familiarity", "Varying the daily schedule to provide stimulation", "Rushing through care tasks to minimize patient fatigue"],
    correct: 0,
    rationale: "Consistency is the therapy for dementia: consistent routine, consistent caregivers, posted unchanging schedules, and one-step directions. Rotating caregivers, varying schedules, and rushing all worsen function."
  },
  {
    stem: "Which environmental features support a patient with dementia?",
    options: ["Room near the nursing station, adequate lighting, familiar belongings, and low noise", "A private room far from staff for quiet", "Frequent room changes to prevent boredom", "Minimal personal items to reduce clutter and confusion"],
    correct: 0,
    rationale: "Supportive dementia environments include a room near the nursing station, adequate lighting, familiar belongings, and low noise, all of which reduce disorientation and agitation."
  },
  {
    stem: "A nurse finds a dementia patient trying to leave through a locked door, agitated and wandering. What is the correct nursing response?",
    options: ["Redirect the patient calmly back", "Restrain the patient to prevent elopement", "Scold the patient and explain why leaving is unsafe", "Leave the patient alone until they tire out"],
    correct: 0,
    rationale: "A wandering patient is calmly redirected back, never restrained or scolded. Restraint and confrontation increase agitation rather than resolving it."
  },
  {
    stem: "During a home visit, a nurse notices the caregiver spouse of a dementia patient has lost significant weight, hasn't left the house in weeks, and appears exhausted. What should the nurse prioritize assessing?",
    options: ["Caregiver role strain", "The patient's MMSE score", "The patient's medication adherence", "The home's fall-risk modifications"],
    correct: 0,
    rationale: "Weight loss, exhaustion, and isolation in the caregiver are priority signs of caregiver role strain during a home visit, an assessment focus distinct from the patient's own cognitive status."
  },
  {
    stem: "A caregiver spouse has hired a part-time aide and installed grab bars after a fall scare. How should the nurse interpret this?",
    options: ["This reflects healthy coping, not a red flag for caregiver strain", "This is a sign of caregiver burnout requiring intervention", "This indicates the caregiver is in denial about the diagnosis", "This suggests the patient's condition has worsened significantly"],
    correct: 0,
    rationale: "Safety adaptations and hiring help are healthy coping strategies, not signs of caregiver strain. True strain markers are weight loss, exhaustion, and isolation."
  },
  {
    stem: "A spouse expresses ongoing sadness and grief months after her husband's death from dementia. How should the nurse frame this?",
    options: ["Normal grief, not mental illness", "A major depressive episode requiring referral", "Complicated grief disorder", "An adjustment disorder needing medication"],
    correct: 0,
    rationale: "Normal grief after losing a spouse to dementia is not mental illness. The nurse should say so plainly rather than over-pathologizing an expected grief response."
  },
  {
    stem: "What is the mechanism of action of cholinesterase inhibitors such as donepezil, rivastigmine, and galantamine?",
    options: ["They slow progression by preserving acetylcholine", "They restore lost cognitive function", "They block dopamine receptors", "They act as NMDA receptor antagonists"],
    correct: 0,
    rationale: "Cholinesterase inhibitors slow progression by preserving acetylcholine levels. They do not restore lost function; they only slow further decline."
  },
  {
    stem: "Donepezil (Aricept) is indicated for which stage of Alzheimer's disease, and when is it typically dosed?",
    options: ["Mild to severe AD, dosed at bedtime", "Only severe AD, dosed in the morning", "Only mild AD, dosed with meals", "Moderate to severe AD only, dosed twice daily"],
    correct: 0,
    rationale: "Donepezil is used across mild to severe Alzheimer's disease and is typically dosed at bedtime."
  },
  {
    stem: "Rivastigmine (Exelon) has which additional indication beyond Alzheimer's disease, and how may it be administered?",
    options: ["Parkinson's disease dementia; available as a patch or oral form taken with food", "Vascular dementia only; available only as an injection", "Huntington's disease; available only as a sublingual tablet", "Lewy body dementia only; contraindicated in oral form"],
    correct: 0,
    rationale: "Rivastigmine is also indicated for Parkinson's disease dementia and can be given as a transdermal patch or orally with food to reduce GI upset."
  },
  {
    stem: "Galantamine (Razadyne) is indicated for which stage of Alzheimer's disease?",
    options: ["Mild to moderate AD", "Moderate to severe AD", "Severe AD only", "All stages, including preclinical"],
    correct: 0,
    rationale: "Galantamine is indicated for mild to moderate Alzheimer's disease, distinguishing it from donepezil, which spans mild to severe."
  },
  {
    stem: "Which adverse effects should the nurse monitor for with cholinesterase inhibitors? Select all that apply.",
    options: ["SLUDGEM symptoms", "Bradycardia", "Syncope", "Weight gain", "Hypertension"],
    correct: [0, 1, 2],
    rationale: "Cholinesterase inhibitors increase acetylcholine, producing SLUDGEM symptoms (salivation, lacrimation, urination, defecation, GI upset, emesis), bradycardia, and syncope. Weight gain and hypertension are not the expected concerns with this drug class."
  },
  {
    stem: "Cholinesterase inhibitors should be used with caution in patients with which comorbidities?",
    options: ["Asthma or COPD", "Type 2 diabetes", "Hyperlipidemia", "Osteoarthritis"],
    correct: 0,
    rationale: "Cholinesterase inhibitors are used with caution in asthma or COPD because their cholinergic effects can worsen bronchoconstriction and respiratory secretions."
  },
  {
    stem: "Why should a cholinesterase inhibitor be tapered rather than stopped abruptly?",
    options: ["To avoid a rebound worsening of symptoms when stopping the medication", "To prevent a hypertensive crisis", "To avoid triggering serotonin syndrome", "To prevent tardive dyskinesia"],
    correct: 0,
    rationale: "Cholinesterase inhibitors are tapered to stop rather than discontinued abruptly, since abrupt discontinuation can worsen cognitive symptoms."
  },
  {
    stem: "What is the mechanism of action of memantine (Namenda), and for which stage of Alzheimer's disease is it indicated?",
    options: ["NMDA receptor antagonist, for moderate to severe AD", "Cholinesterase inhibitor, for mild to moderate AD", "Dopamine agonist, for all stages of AD", "Beta blocker, for severe AD only"],
    correct: 0,
    rationale: "Memantine is an NMDA receptor antagonist indicated for moderate to severe Alzheimer's disease, and it may be combined with a cholinesterase inhibitor since the two work by different mechanisms."
  },
  {
    stem: "A patient on donepezil progresses to moderate-severe Alzheimer's disease. The provider adds memantine rather than switching medications entirely. Why keep both?",
    options: ["They work through different mechanisms, so combining protects via two pathways instead of one", "Memantine has no effect unless paired with a cholinesterase inhibitor", "Donepezil becomes toxic if stopped abruptly at this stage", "Switching would violate FDA labeling requirements"],
    correct: 0,
    rationale: "Donepezil preserves remaining acetylcholine while memantine blocks NMDA-receptor-mediated glutamate excitotoxicity, two separate protective mechanisms. Combining them provides both effects rather than trading one for the other."
  },
  {
    stem: "What is the nursing concern regarding antipsychotic use in dementia patients?",
    options: ["They are last-resort agents carrying a black box warning for increased mortality", "They are first-line for managing dementia-related agitation", "They reverse cognitive decline when used early", "They have no significant risk in this population"],
    correct: 0,
    rationale: "Antipsychotics in dementia are last-resort medications with a black box warning for increased mortality, and should only be used when non-pharmacologic approaches have failed and safety is at risk."
  },
  {
    stem: "What additional risk do benzodiazepines carry in dementia patients?",
    options: ["Increased fall and confusion risk", "Increased risk of tardive dyskinesia", "Increased risk of agranulocytosis", "Increased risk of hepatotoxicity"],
    correct: 0,
    rationale: "Benzodiazepines add fall and confusion risk in dementia patients, compounding the cognitive impairment already present."
  }
];
