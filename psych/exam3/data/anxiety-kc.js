/* Psych Exam 3 - Knowledge Check - Ch 14 Anxiety and Anxiety Disorders
   KC convention: correct is always index 0 for single-select; engine shuffles.
   SATA uses correct as an array of indices. */
window.QUESTIONS = [
  {
    stem: "Which level of anxiety actually sharpens perception and improves learning and problem solving?",
    options: ["Mild", "Moderate", "Severe", "Panic"],
    correct: 0,
    rationale: "Mild anxiety produces restlessness, irritability, and mild tension, but perception is sharpened and learning and problem solving improve. This is the useful kind of anxiety. Every level above mild narrows the perceptual field instead."
  },
  {
    stem: "Which findings are expected at the moderate level of anxiety? Select all that apply.",
    options: ["Pacing", "Difficulty concentrating", "Narrowed perceptual field", "Increased heart rate and respiratory rate", "Loss of contact with reality", "Sharpened perception"],
    correct: [0, 1, 2, 3],
    rationale: "Moderate anxiety produces pacing, difficulty concentrating, a narrowed perceptual field, and increased heart and respiratory rates, and the person can still follow direction with support. Loss of contact with reality belongs to panic, and sharpened perception belongs to mild anxiety."
  },
  {
    stem: "At which level of anxiety can the client still follow direction with support?",
    options: ["Moderate", "Severe", "Panic", "Severe and panic both"],
    correct: 0,
    rationale: "At moderate anxiety the perceptual field is narrowed but the client can still follow direction with support. At severe anxiety the client cannot follow directions or problem solve, and at panic the client cannot communicate or process the environment at all."
  },
  {
    stem: "Which findings are expected at the severe level of anxiety? Select all that apply.",
    options: ["Hyperventilation", "Sense of impending doom", "Focus only on relieving the distress", "Inability to follow directions or problem solve", "Loss of contact with reality", "Improved concentration"],
    correct: [0, 1, 2, 3],
    rationale: "Severe anxiety produces hyperventilation, pounding heart, tachypnea, a sense of impending doom, a greatly reduced perceptual field, focus only on relieving the distress, and inability to follow directions or problem solve. Cognition is impaired but the client remains in contact with reality, which is what separates severe from panic."
  },
  {
    stem: "Which feature separates severe anxiety from panic level anxiety?",
    options: ["Contact with reality is intact in severe anxiety and lost in panic", "The perceptual field is narrowed in severe anxiety and widened in panic", "Physical symptoms are present in severe anxiety and absent in panic", "The client can problem solve in severe anxiety but not in panic"],
    correct: 0,
    rationale: "Severe anxiety is extreme distress with intact reality contact. Panic adds fear of dying, possible hallucinations, and loss of contact with reality. Both narrow the perceptual field, both produce intense physical symptoms, and neither allows problem solving."
  },
  {
    stem: "Which findings are expected at the panic level of anxiety? Select all that apply.",
    options: ["Overwhelming terror and fear of dying", "Possible hallucinations", "Detachment from reality", "Inability to communicate", "Narrowed but functional perceptual field", "Enhanced ability to focus on a single task"],
    correct: [0, 1, 2, 3],
    rationale: "Panic produces overwhelming terror and fear of dying, possible hallucinations, detachment from reality, chest pain, palpitations, trembling, numbness, choking sensation, sweating, hot flashes, and nausea, and the client cannot communicate or process the environment. A functional perceptual field and enhanced focus do not occur at panic level."
  },
  {
    stem: "A client experiencing anxiety cannot articulate what is happening and appears to be responding to something no one else can see. Which level of anxiety does this indicate?",
    options: ["Panic", "Severe", "Moderate", "Mild"],
    correct: 0,
    rationale: "Inability to communicate plus hallucinations and detachment from reality indicate panic level anxiety. A client who can still describe her distress in words, however extreme, is at severe anxiety or below."
  },
  {
    stem: "The physiologic signs of anxiety reflect activation of which system?",
    options: ["Sympathetic nervous system", "Parasympathetic nervous system", "Endocrine system alone", "Central nervous system depression"],
    correct: 0,
    rationale: "The physiologic signs of anxiety are sympathetic, the fight or flight response: tachycardia, elevated blood pressure, hyperventilation, sweating, trembling, restlessness, dry mouth, and diarrhea."
  },
  {
    stem: "Which findings would the nurse NOT expect in a client experiencing anxiety?",
    options: ["Slowed respirations and lowered blood pressure", "Tachycardia and elevated blood pressure", "Trembling and restlessness", "Dry mouth and diarrhea"],
    correct: 0,
    rationale: "Anxiety does not slow respirations, lower blood pressure, or improve concentration. The sympathetic response drives everything upward: heart rate, blood pressure, and respiratory rate, along with trembling, restlessness, dry mouth, and diarrhea."
  },
  {
    stem: "Which neurotransmitter is believed to be dysfunctional in anxiety disorders and is enhanced by benzodiazepines?",
    options: ["Gamma-aminobutyric acid (GABA)", "Dopamine", "Acetylcholine", "Glutamate"],
    correct: 0,
    rationale: "Gamma-aminobutyric acid (GABA) is the amino acid neurotransmitter believed to be dysfunctional in anxiety disorders, and benzodiazepines work by enhancing it. GABA reduces anxiety while norepinephrine increases it. Dopamine is implicated in psychosis."
  },
  {
    stem: "Which criteria define generalized anxiety disorder (GAD)?",
    options: ["Excessive worry about many things, more days than not, for at least 6 months", "Recurrent unexpected panic attacks with persistent worry about having more", "Symptoms within 3 months of an identifiable stressor, resolving within 6 months", "Fear of open or public spaces from which escape might be difficult"],
    correct: 0,
    rationale: "GAD is excessive worry about many things, more days than not, for at least 6 months, with restlessness, fatigue, poor concentration, irritability, muscle tension, and sleep disturbance. The worry is chronic and free floating rather than tied to a stressor."
  },
  {
    stem: "Which symptoms accompany the worry in generalized anxiety disorder? Select all that apply.",
    options: ["Restlessness", "Fatigue", "Poor concentration", "Muscle tension", "Sleep disturbance", "Recurrent hallucinations"],
    correct: [0, 1, 2, 3, 4],
    rationale: "GAD presents with excessive worry plus restlessness, fatigue, poor concentration, irritability, muscle tension, and sleep disturbance. Hallucinations are not a feature of GAD."
  },
  {
    stem: "Which feature defines panic disorder?",
    options: ["Recurrent unexpected panic attacks with persistent worry about having more", "Excessive worry about many things for at least 6 months", "Fear of embarrassment or being the center of attention", "Irrational fear of a specific object or situation"],
    correct: 0,
    rationale: "Panic disorder involves recurrent, unexpected panic attacks plus persistent worry about having more. The attacks peak within minutes and can mimic a myocardial infarction."
  },
  {
    stem: "A panic attack most closely mimics which medical emergency?",
    options: ["Myocardial infarction", "Cerebrovascular accident", "Pulmonary embolism", "Hypoglycemic crisis"],
    correct: 0,
    rationale: "Panic attacks can mimic a myocardial infarction with chest pain, palpitations, sweating, and a sense of doom. Sudden onset in a person with no cardiac history plus psychological terror points to panic, though the cardiac cause must still be ruled out medically."
  },
  {
    stem: "Which condition is characterized by an irrational, disproportionate fear of a specific object or situation with immediate anxiety on exposure and subsequent avoidance?",
    options: ["Specific phobia", "Agoraphobia", "Social anxiety disorder", "Generalized anxiety disorder"],
    correct: 0,
    rationale: "A specific phobia is an irrational, disproportionate fear of a specific object or situation, such as spiders, heights, or needles, producing an immediate anxiety response on exposure and avoidance thereafter."
  },
  {
    stem: "What is the literal meaning of the root word in agoraphobia?",
    options: ["Open space", "Crowd", "Height", "Stranger"],
    correct: 0,
    rationale: "Agora means open space in Greek. Agoraphobia is fear of open or public spaces from which escape might be difficult, and the client often becomes housebound."
  },
  {
    stem: "Which statement about insight in agoraphobia is accurate?",
    options: ["Insight is intact; the person knows the fear is unreasonable but cannot change the behavior", "Insight is absent; the person believes the danger is real and proportionate", "Insight fluctuates with the severity of the anxiety at any given moment", "Insight is intact only when the person is accompanied by a trusted companion"],
    correct: 0,
    rationale: "Insight is intact in agoraphobia. The person knows the fear is unreasonable, as in \"it seems ridiculous, but I can't go out the door,\" yet cannot change the behavior. Agoraphobia is ego-dystonic, and families are usually distressed by it."
  },
  {
    stem: "Which condition is characterized by fear of embarrassment, judgment, and being the center of attention?",
    options: ["Social anxiety disorder", "Agoraphobia", "Panic disorder", "Avoidant personality disorder"],
    correct: 0,
    rationale: "Social anxiety disorder is fear of embarrassment, judgment, and being the center of attention in situations such as public speaking, meeting strangers, and parties, with anticipatory dizziness, sweating, blushing, and shaking at the mere thought of the event."
  },
  {
    stem: "Which criteria define adjustment disorder?",
    options: ["Symptoms within 3 months of an identifiable non-catastrophic stressor, resolving within 6 months once the stressor ends", "Excessive worry more days than not for at least 6 months regardless of stressors", "Symptoms occurring 3 days to 1 month after a catastrophic traumatic event", "Recurrent unexpected attacks with persistent worry about recurrence"],
    correct: 0,
    rationale: "Adjustment disorder is an emotional or behavioral response within 3 months of an identifiable non-catastrophic stressor such as job loss, divorce, or a move, out of proportion to the stressor but resolving within 6 months once the stressor ends."
  },
  {
    stem: "Which feature distinguishes generalized anxiety disorder from adjustment disorder?",
    options: ["GAD worry is chronic and stressor-independent while adjustment disorder follows an identifiable stressor", "GAD follows a catastrophic event while adjustment disorder follows a minor one", "GAD resolves within 6 months while adjustment disorder is lifelong", "GAD produces physical symptoms while adjustment disorder does not"],
    correct: 0,
    rationale: "GAD worry is chronic, free floating, and independent of any particular stressor, lasting at least 6 months. Adjustment disorder is a response to an identifiable non-catastrophic stressor and resolves within 6 months of the stressor ending."
  },
  {
    stem: "Which medication class is first-line for generalized anxiety disorder, panic disorder, social anxiety, obsessive-compulsive disorder, and posttraumatic stress disorder?",
    options: ["Selective serotonin reuptake inhibitors (SSRIs)", "Benzodiazepines", "Beta blockers", "Antipsychotics"],
    correct: 0,
    rationale: "SSRIs, including sertraline, fluoxetine, paroxetine, escitalopram, and citalopram, are first-line for GAD, panic disorder, social anxiety, OCD, and PTSD. Full effect takes several weeks, and that expectation must be set with the patient."
  },
  {
    stem: "How long does it take for a selective serotonin reuptake inhibitor to reach full therapeutic effect?",
    options: ["Several weeks", "Several hours", "24 to 48 hours", "6 months"],
    correct: 0,
    rationale: "SSRIs take several weeks to reach full therapeutic effect. Setting this expectation is essential teaching, because patients who expect immediate relief stop the medication early."
  },
  {
    stem: "Why is fluoxetine (Prozac) administered in the morning?",
    options: ["It is activating and evening dosing would cause insomnia", "It causes sedation that would impair daytime function", "Absorption is enhanced when taken before the first meal", "Morning dosing reduces the risk of serotonin syndrome"],
    correct: 0,
    rationale: "Fluoxetine is activating, so it is given in the morning to prevent insomnia. This is the opposite of paroxetine, which is the sedating SSRI."
  },
  {
    stem: "Which early side effects of fluoxetine should the nurse teach the patient to expect as transient?",
    options: ["Nausea, dizziness, and headache", "Agranulocytosis and neutropenia", "Myocarditis and heart failure", "Tardive dyskinesia and akathisia"],
    correct: 0,
    rationale: "Early transient effects of fluoxetine are nausea, dizziness, and headache, and these fade. Teach adherence rather than stopping. Agranulocytosis, neutropenia, and myocarditis are clozapine concerns, and tardive dyskinesia and akathisia are antipsychotic effects."
  },
  {
    stem: "Which drug interaction increases bleeding risk when taken with fluoxetine?",
    options: ["Aspirin or anticoagulants", "Acetaminophen", "Calcium supplements", "Proton pump inhibitors"],
    correct: 0,
    rationale: "Fluoxetine raises bleeding risk, especially when combined with aspirin or anticoagulants such as blood thinners. This is a required teaching point for the patient."
  },
  {
    stem: "Which selective serotonin reuptake inhibitor is sedating and anticholinergic, should be avoided in the elderly and in pregnancy, and carries the highest risk of discontinuation syndrome?",
    options: ["Paroxetine", "Fluoxetine", "Sertraline", "Escitalopram"],
    correct: 0,
    rationale: "Paroxetine is the sedating, anticholinergic SSRI. It should be avoided in the elderly and in pregnancy and has the highest risk of discontinuation syndrome because of its short half-life."
  },
  {
    stem: "The mnemonic FINISH describes which condition?",
    options: ["Selective serotonin reuptake inhibitor discontinuation syndrome", "Serotonin syndrome", "Neuroleptic malignant syndrome", "Benzodiazepine withdrawal"],
    correct: 0,
    rationale: "FINISH describes SSRI discontinuation syndrome: Flu-like symptoms, Insomnia, Nausea, Imbalance, Sensory disturbances, and Hyperarousal. It is worst with short half-life agents like paroxetine and mildest with fluoxetine."
  },
  {
    stem: "Which components make up the FINISH mnemonic for selective serotonin reuptake inhibitor discontinuation syndrome? Select all that apply.",
    options: ["Flu-like symptoms", "Insomnia", "Nausea", "Imbalance", "Sensory disturbances", "Hyperarousal", "Hyperthermia"],
    correct: [0, 1, 2, 3, 4, 5],
    rationale: "FINISH stands for Flu-like symptoms, Insomnia, Nausea, Imbalance, Sensory disturbances, and Hyperarousal. Hyperthermia is a sign of serotonin syndrome, a different and more dangerous entity."
  },
  {
    stem: "Discontinuation syndrome is mildest with which selective serotonin reuptake inhibitor?",
    options: ["Fluoxetine", "Paroxetine", "Sertraline", "Citalopram"],
    correct: 0,
    rationale: "Discontinuation syndrome is mildest with fluoxetine because of its long half-life, and worst with short half-life agents such as paroxetine. Regardless, an SSRI is never stopped abruptly."
  },
  {
    stem: "Which findings characterize serotonin syndrome? Select all that apply.",
    options: ["Agitation", "Hallucinations", "Fever", "Tachycardia", "Tremor and incoordination", "Agranulocytosis"],
    correct: [0, 1, 2, 3, 4],
    rationale: "Serotonin syndrome presents with agitation, hallucinations, fever, tachycardia, sweating, tremor, and incoordination. It is the emergency to teach patients to report, especially when serotonergic drugs are combined. Agranulocytosis is a clozapine effect."
  },
  {
    stem: "Which herbal supplement combined with a selective serotonin reuptake inhibitor increases the risk of serotonin syndrome?",
    options: ["St. John's wort", "Black cohosh", "Echinacea", "Coenzyme Q10"],
    correct: 0,
    rationale: "St. John's wort taken with antidepressants can increase the accumulation of serotonin in the body and cause serotonin syndrome. This applies to any SSRI, and paroxetine was the example used in lecture."
  },
  {
    stem: "Which adverse effect is specifically associated with venlafaxine?",
    options: ["Elevated diastolic blood pressure", "Hepatotoxicity", "Photosensitivity", "Weight gain"],
    correct: 0,
    rationale: "Venlafaxine, a serotonin-norepinephrine reuptake inhibitor (SNRI), can raise diastolic blood pressure. Duloxetine, the other SNRI used for anxiety, also treats neuropathic pain but carries hepatotoxicity risk."
  },
  {
    stem: "Which serotonin-norepinephrine reuptake inhibitor also treats neuropathic pain and carries hepatotoxicity risk?",
    options: ["Duloxetine", "Venlafaxine", "Buspirone", "Hydroxyzine"],
    correct: 0,
    rationale: "Duloxetine treats neuropathic pain in addition to anxiety and depression and carries hepatotoxicity risk. Venlafaxine is the SNRI associated with elevated diastolic blood pressure."
  },
  {
    stem: "Which statements about benzodiazepines are accurate? Select all that apply.",
    options: ["They enhance gamma-aminobutyric acid (GABA)", "They provide rapid relief for acute or severe anxiety", "They produce dependence and cross-tolerance with alcohol", "They are intended for short-term use rather than maintenance", "They take several weeks to reach full effect", "They can be stopped abruptly without risk"],
    correct: [0, 1, 2, 3],
    rationale: "Benzodiazepines enhance GABA, provide rapid relief for acute and severe anxiety, cause dependence and cross-tolerance with alcohol, and are short-term tools rather than maintenance therapy. They act quickly rather than over weeks, and abrupt withdrawal can be life-threatening, so they must be tapered."
  },
  {
    stem: "A patient taking alprazolam reports using an over-the-counter sleep aid containing diphenhydramine. What is the danger the nurse must teach?",
    options: ["Compounded sedation that can cause respiratory depression and overdose", "Reduced absorption of the benzodiazepine from the gastrointestinal tract", "Accelerated development of tolerance requiring higher benzodiazepine doses", "Increased risk of serotonin syndrome from the combined agents"],
    correct: 0,
    rationale: "Combining a benzodiazepine with any other central nervous system depressant, including alcohol, opioids, or over-the-counter sleep aids like diphenhydramine, compounds sedation and can cause respiratory depression and overdose. Patients must disclose all over-the-counter products."
  },
  {
    stem: "Which benzodiazepines bypass phase-I liver metabolism and are preferred in patients with liver impairment?",
    options: ["Lorazepam, oxazepam, and temazepam", "Alprazolam, diazepam, and clonazepam", "Diazepam, midazolam, and chlordiazepoxide", "Clonazepam, alprazolam, and temazepam"],
    correct: 0,
    rationale: "Lorazepam, oxazepam, and temazepam bypass phase-I liver metabolism, making them the preferred benzodiazepines when liver impairment is present."
  },
  {
    stem: "In which populations should the nurse watch for paradoxical agitation and disinhibition from benzodiazepines? Select all that apply.",
    options: ["The elderly", "The very young", "Patients with brain injury", "Middle-aged adults with no comorbidities", "Patients with hypertension"],
    correct: [0, 1, 2],
    rationale: "Paradoxical agitation and disinhibition from benzodiazepines occur in the elderly, the very young, and patients with brain injury. Instead of sedation, these patients become more agitated."
  },
  {
    stem: "Why must benzodiazepines be tapered rather than stopped abruptly?",
    options: ["Abrupt withdrawal can be life-threatening", "Abrupt withdrawal causes permanent gamma-aminobutyric acid receptor damage", "Abrupt withdrawal triggers serotonin syndrome", "Abrupt withdrawal causes rebound hypertension only"],
    correct: 0,
    rationale: "Abrupt benzodiazepine withdrawal can be life-threatening, producing seizures and severe autonomic instability, so these medications must always be tapered."
  },
  {
    stem: "Which statements about buspirone (BuSpar) are accurate? Select all that apply.",
    options: ["It takes several weeks for full effect", "It is not useful as needed for acute attacks", "It does not cause dependence", "It requires no taper on discontinuation", "It requires avoidance of aged cheese and smoked meats", "It provides rapid relief within 30 minutes"],
    correct: [0, 1, 2, 3],
    rationale: "Buspirone is a non-benzodiazepine anxiolytic for GAD that takes several weeks for full effect, is not useful as needed for acute attacks, causes no dependence, and needs no taper. It has no dietary restrictions; the aged cheese and smoked meat restriction belongs to monoamine oxidase inhibitors (MAOIs). This teaching cluster is a classic test target."
  },
  {
    stem: "Which dietary restriction is associated with monoamine oxidase inhibitors rather than buspirone?",
    options: ["Avoiding aged cheese and smoked meats", "Avoiding grapefruit juice", "Avoiding caffeine and chocolate", "Avoiding foods high in vitamin K"],
    correct: 0,
    rationale: "Avoiding aged cheese and smoked meats, which are high in tyramine, applies to MAOIs because of hypertensive crisis risk. Buspirone has no dietary restrictions, and this contrast is a common distractor pairing."
  },
  {
    stem: "Propranolol is used in social or performance anxiety to accomplish which purpose?",
    options: ["Blunt the physical symptoms such as racing heart and trembling", "Prevent the anticipatory worry before the event", "Provide long-term maintenance control of generalized worry", "Reverse an acute panic attack once it has begun"],
    correct: 0,
    rationale: "Propranolol, a beta blocker, blunts the physical symptoms of performance and social anxiety such as racing heart and trembling. It is taken as needed before the anxiety-provoking event, not daily, and does not cause weight gain or photosensitivity."
  },
  {
    stem: "How is propranolol dosed for social or performance anxiety?",
    options: ["As needed before the anxiety-provoking event", "Once daily every morning", "Twice daily with meals", "Continuously for at least 6 months"],
    correct: 0,
    rationale: "Propranolol for social or performance anxiety is taken on an as-needed basis before the anxiety-provoking situation, not on a daily schedule."
  },
  {
    stem: "Which antihistamine is used for anxiety because it is sedating and non-habit-forming?",
    options: ["Hydroxyzine", "Diphenhydramine", "Loratadine", "Cetirizine"],
    correct: 0,
    rationale: "Hydroxyzine is the antihistamine used as an anxiolytic; it is sedating and non-habit-forming, which makes it useful when dependence is a concern. Gabapentin and clonidine are also used as adjuncts."
  },
  {
    stem: "Which interventions promote relaxation in a client who has generalized anxiety disorder? Select all that apply.",
    options: ["Meditation", "Guided imagery", "Deep breathing", "Progressive muscle relaxation", "Identifying the client's positive qualities and accomplishments"],
    correct: [0, 1, 2, 3],
    rationale: "Meditation, guided imagery, deep breathing, and progressive muscle relaxation are the relaxation techniques taught in GAD. Identifying positive qualities and accomplishments targets self-esteem, not relaxation. Read what the question is actually asking for."
  },
  {
    stem: "A client with generalized anxiety disorder is pacing the hall after an upsetting phone call. Which action should the nurse take?",
    options: ["Walk with the client at a gradually slower pace", "Instruct the client to sit down and stop pacing", "Allow the client to pace alone until physically tired", "Escort the client to her room to pace in private"],
    correct: 0,
    rationale: "For the pacing, escalating patient, do not command them to stop, do not isolate them, and do not send them off alone. Walk with the patient at a gradually slower pace. Your calm is contagious."
  },
  {
    stem: "Which nursing actions are appropriate during severe to panic level anxiety? Select all that apply.",
    options: ["Stay with the patient", "Use short simple sentences", "Reduce environmental stimulation", "Begin teaching coping strategies", "Send the patient to a therapy group"],
    correct: [0, 1, 2],
    rationale: "During severe to panic anxiety: stay with the patient, use short simple sentences, reduce stimulation, and wait. Teaching happens later, when anxiety is mild to moderate, and group participation is impossible at these levels."
  },
  {
    stem: "At which anxiety levels can teaching be effective?",
    options: ["Mild to moderate", "Moderate to severe", "Severe to panic", "Any level if the nurse speaks slowly"],
    correct: 0,
    rationale: "Teaching happens when anxiety is mild to moderate. At severe and panic levels, the perceptual field is too narrowed for learning; the nurse stays with the patient, uses short simple sentences, reduces stimulation, and waits."
  },
  {
    stem: "Which findings result from chronic or prolonged stress? Select all that apply.",
    options: ["Frequent infections from immune suppression", "Amenorrhea", "Poor attention span", "Sleep disturbance", "Elevated heart rate and blood pressure", "Slowed respiratory rate"],
    correct: [0, 1, 2, 3, 4],
    rationale: "Chronic and prolonged stress produces immune suppression with frequent infections through sustained cortisol, amenorrhea from reproductive shutdown, poor attention span, sleep disturbance, and elevated heart rate and blood pressure. Chronic stress does not slow the respiratory rate."
  },
  {
    stem: "Which hormone drives the immune suppression seen in chronic stress?",
    options: ["Cortisol", "Insulin", "Thyroxine", "Aldosterone"],
    correct: 0,
    rationale: "Sustained cortisol elevation in chronic stress suppresses the immune system, which is why these clients present with frequent infections."
  }
];
