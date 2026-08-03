// MedSurg II FINAL EXAM REVIEW -- Neuro Assessment / Neurologic Dysfunction (Ch 60) -- Deep Drill
// 10 questions, 90% hard / 10% medium, no easy. NEW scenarios distinct from exam3/data/neuro-assessment-dd.js (8 Q)
// and from the final simulator's Ch60 questions. Source note is short, so gaps are narrower: dizziness vs vertigo,
// GBS/MS protein testing, LP insertion site/comfort role, post-dural puncture headache management, exam component
// matching, hearing consideration, normal vibration sense decline.
// correct: 0 always -- engine shuffles option order at runtime.
window.QUESTIONS = [
  {
    stem: "A patient reports an abnormal sensation of imbalance without any illusion of spinning or rotation. Another patient describes a sensation that the room is spinning around them. How should the nurse document these two complaints respectively?",
    options: ["The first patient is experiencing dizziness and the second is experiencing vertigo", "The first patient is experiencing vertigo and the second is experiencing dizziness", "Both patients are describing the identical symptom using different words", "Neither complaint is clinically significant without further neurologic testing"],
    correct: 0,
    rationale: "Dizziness is an abnormal sensation of imbalance or movement without a specific rotational quality, while vertigo is specifically an illusion of movement, usually rotational, such as the sensation that the room is spinning. These are distinct symptoms with different documentation and diagnostic implications, not interchangeable descriptions of the same complaint."
  },
  {
    stem: "A provider orders CSF analysis to help evaluate a patient with suspected Guillain-Barre syndrome. What specific CSF finding does the nurse anticipate this analysis will help identify?",
    options: ["Elevated protein levels in the cerebrospinal fluid", "Elevated red blood cell count in the cerebrospinal fluid", "Decreased glucose levels in the cerebrospinal fluid", "Elevated white blood cell count with no other abnormalities"],
    correct: 0,
    rationale: "CSF analysis for autoimmune disorders such as Guillain-Barre syndrome and multiple sclerosis specifically looks for elevated protein levels in the cerebrospinal fluid. Elevated red blood cells would suggest bleeding, decreased glucose is more associated with bacterial infection, and isolated elevated white blood cells without other findings would point toward an infectious rather than autoimmune process."
  },
  {
    stem: "A nurse is preparing a patient for a lumbar puncture. At what anatomic level does the nurse anticipate the provider will insert the needle?",
    options: ["The lower lumbar level, into the subarachnoid space", "The cervical level, into the epidural space", "The thoracic level, into the subdural space", "The upper lumbar level only, never lower, into the epidural space"],
    correct: 0,
    rationale: "A lumbar puncture involves inserting a needle into the subarachnoid space, usually at the lower lumbar level, to collect cerebrospinal fluid for analysis. This is performed at the lower lumbar level specifically to avoid the spinal cord itself, which ends higher up, and targets the subarachnoid space rather than the epidural or subdural space."
  },
  {
    stem: "A nurse is assisting with a lumbar puncture. What is the nurse's primary role during the procedure itself?",
    options: ["Providing patient comfort throughout the procedure", "Interpreting the CSF results immediately at the bedside", "Determining the exact needle insertion level independently", "Administering sedation without provider order"],
    correct: 0,
    rationale: "During a lumbar puncture, the nurse's primary role is providing patient comfort throughout the procedure, such as helping the patient maintain positioning and offering reassurance. Interpreting results, determining insertion level, and administering sedation independently are outside the nurse's role in this procedure and require provider involvement or orders."
  },
  {
    stem: "A patient develops a headache several hours after a lumbar puncture. The headache worsens when the patient sits up and improves significantly when lying flat. What is the nurse's best understanding of this finding?",
    options: ["This is a common post-dural puncture headache that is usually self-limiting and managed conservatively", "This finding indicates a serious infection requiring immediate antibiotic therapy", "This headache pattern indicates the patient is developing bacterial meningitis", "This finding should be ignored since headaches are unrelated to lumbar puncture procedures"],
    correct: 0,
    rationale: "A positional headache that worsens when upright and improves when lying flat is a classic post-dural puncture headache, a common and usually self-limiting complication managed conservatively with measures such as lying flat, hydration, and caffeine. This is distinct from signs of infection, such as redness, warmth, and purulent drainage at the site, which would require different action."
  },
  {
    stem: "A nurse is documenting findings from a comprehensive neurologic physical assessment. The nurse notes the patient's level of consciousness, muscle strength, Romberg test result, response to light touch and pinprick, and deep tendon reflexes. How many of the recognized major components of the neurologic physical exam does this assessment reflect?",
    options: ["All five components: consciousness and cognition, motor system, balance and coordination, sensory system, and reflexes", "Only three components, since sensory and reflex testing are not part of the standard exam", "Only two components, since this assessment focuses solely on motor function", "Four components, omitting the balance and coordination component"],
    correct: 0,
    rationale: "This assessment reflects all five recognized components of the neurologic physical exam: consciousness and cognition (level of consciousness), motor system (muscle strength), balance and coordination (Romberg test), sensory system (light touch and pinprick), and reflexes (deep tendon reflexes). All five are standard components of a comprehensive neuro exam."
  },
  {
    stem: "A nurse is preparing to explain a diagnostic test to an older adult patient and considers age-related sensory changes that may affect communication. In addition to visual changes, what other sensory change should the nurse account for when explaining procedures to this population?",
    options: ["Possible impaired hearing and slowed responses", "Enhanced tactile sensitivity requiring gentler touch during exams", "Improved color discrimination requiring simplified color-coded materials", "Heightened sensitivity to loud noises requiring a completely silent environment"],
    correct: 0,
    rationale: "When explaining procedures and preparations for diagnostic tests to older adults, the nurse should account for possible impaired hearing and slowed responses, in addition to visual changes, to ensure the patient fully understands the information being provided. Enhanced tactile sensitivity, improved color discrimination, and heightened noise sensitivity are not the recognized age-related considerations for this population."
  },
  {
    stem: "A nurse assesses vibration sense in the feet of two patients. Patient A, age 78, has mild, symmetric, bilateral diminished vibration sense in both feet with no other neurologic findings. Patient B, age 45, has sudden absent vibration sense in only the left foot. How should the nurse interpret these findings?",
    options: ["Patient A's finding is consistent with normal aging, while Patient B's sudden, unilateral finding warrants further investigation", "Both findings are consistent with normal aging and require no further investigation", "Both findings are pathologic and require identical emergent workup", "Patient A's finding is more concerning than Patient B's because of the patient's older age"],
    correct: 0,
    rationale: "A gradual, symmetric, bilateral diminished vibration sense, as seen in Patient A, is a recognized normal age-related change. In contrast, Patient B's sudden, unilateral loss of vibration sense is not consistent with normal aging and warrants further investigation, similar to how any sudden, focal neurologic change should be treated as potentially pathologic regardless of the patient's age."
  },
  {
    stem: "A nurse is obtaining a health history from a patient reporting seizure activity. In addition to asking about duration, what other key detail should the nurse ask about regarding the seizures?",
    options: ["Precipitating factors that may trigger the seizures", "The patient's shoe size at the time of the seizure", "The color of the patient's clothing during the seizure", "The exact make and model of any furniture nearby during the seizure"],
    correct: 0,
    rationale: "When obtaining a health history about seizures, the nurse asks about duration and precipitating factors, since identifying potential triggers is clinically important for understanding and managing the patient's seizure activity. Irrelevant environmental details do not contribute meaningfully to the neurologic history."
  },
  {
    stem: "A nurse is performing a sensory system examination as part of a comprehensive neurologic assessment. Which of the following would the nurse include in this portion of the exam?",
    options: ["Assessing the patient's response to light touch, pain, and vibration", "Assessing the patient's level of consciousness and orientation", "Assessing the patient's gait and Romberg test result", "Assessing deep tendon reflexes such as the patellar reflex"],
    correct: 0,
    rationale: "The sensory system examination includes assessing the patient's response to light touch, pain (pinprick), temperature, and vibration. Level of consciousness and orientation fall under the consciousness and cognition component, gait and Romberg fall under balance and coordination, and deep tendon reflexes fall under the reflex component, each a separate part of the comprehensive neuro exam."
  }
];
