// MedSurg II Exam 3 -- Neurodegenerative Disorders -- Deep Drill
// 90% hard / 10% medium, no easy. Scenario-driven: Parkinson's, Huntington's, and ALS
// recognition, priority nursing actions, and patient education evaluation.
// correct: 0 always -- engine shuffles option order at runtime.
window.QUESTIONS = [
  {
    stem: "A patient presents with a resting tremor that decreases when reaching for a cup, a shuffling gait, and a masked facial expression. Which condition does the nurse suspect?",
    options: ["Parkinson's disease", "Huntington's disease", "ALS", "Guillain-Barre Syndrome"],
    correct: 0,
    rationale: "A resting tremor that decreases with purposeful movement, a shuffling festinating gait, and facial masking (hypomimia) are the classic triad-plus findings of Parkinson's disease. Huntington's produces chorea rather than a resting tremor, ALS produces weakness and fasciculations without tremor, and GBS produces ascending weakness."
  },
  {
    stem: "A patient with Parkinson's disease taking carbidopa-levodopa asks why they were told to avoid a high-protein breakfast right before their morning dose. What is the nurse's best explanation?",
    options: ["Dietary protein can compete with levodopa for absorption and reduce its effectiveness", "High-protein meals cause a dangerous drug interaction requiring emergency treatment", "Protein has no effect on levodopa, and the instruction is unnecessary", "High-protein meals are required to help the body process levodopa"],
    correct: 0,
    rationale: "Amino acids from dietary protein compete with levodopa for absorption and transport across the blood-brain barrier, which can blunt the drug's effect on symptoms. Spacing protein intake away from dosing helps maintain more consistent symptom control -- it is not a dangerous interaction, and protein does not enhance the drug's effect."
  },
  {
    stem: "A patient with Parkinson's disease on long-term levodopa therapy develops involuntary writhing movements of the face and limbs. What does the nurse recognize this as?",
    options: ["Dyskinesia, a known long-term complication of levodopa therapy", "A sign that the medication dose is too low and should be increased immediately", "Chorea from an undiagnosed Huntington's disease", "A normal, expected finding unrelated to medication that requires no attention"],
    correct: 0,
    rationale: "Involuntary, often writhing movements developing after long-term levodopa use are dyskinesias, a recognized complication of the therapy rather than a sign of underdosing. The nurse reports this finding since the medication regimen may need adjustment, rather than assuming an unrelated new diagnosis or ignoring it."
  },
  {
    stem: "A nurse is caring for a patient with Parkinson's disease who has increasing difficulty finishing meals due to slowness and fatigue. What is the most appropriate intervention?",
    options: ["Offer small, frequent meals to reduce fatigue and aspiration risk during eating", "Encourage three large meals a day to ensure adequate caloric intake", "Restrict oral intake and initiate tube feeding immediately", "Instruct the patient to eat as quickly as possible to finish before fatigue sets in"],
    correct: 0,
    rationale: "Bradykinesia and dysphagia make eating a slow, tiring process for Parkinson's patients, so small, frequent meals reduce fatigue and the aspiration risk that comes with prolonged, effortful eating. Large meals worsen fatigue, rushing increases aspiration risk, and tube feeding is not indicated based on fatigue alone."
  },
  {
    stem: "An adult child of a parent with confirmed Huntington's disease asks the nurse about their own risk of developing the condition. What is the nurse's best response?",
    options: ["Each child of an affected parent has a 50% risk of inheriting the gene, since Huntington's disease is autosomal dominant, and genetic counseling and testing are available", "There is no genetic risk, since Huntington's disease is not inherited", "The risk is 100% for every child of an affected parent", "The risk applies only to female children, since the gene is X-linked"],
    correct: 0,
    rationale: "Huntington's disease is autosomal dominant, giving each child of an affected parent a 50% risk of inheriting the gene, regardless of the child's sex. Genetic counseling and testing can help at-risk individuals make informed decisions, though the emotional complexity of that decision should also be acknowledged."
  },
  {
    stem: "A patient with Huntington's disease has constant involuntary limb and trunk movements and has lost 10 pounds over the past 2 months despite reporting a normal appetite. What is the nurse's priority concern?",
    options: ["Increased caloric expenditure from chorea combined with dysphagia risk, requiring nutritional intervention", "The weight loss is unrelated to Huntington's disease and requires no further evaluation", "The patient is intentionally restricting intake and needs psychiatric referral only", "Weight loss is an expected and desirable outcome in Huntington's disease"],
    correct: 0,
    rationale: "The constant involuntary movement of chorea dramatically increases caloric expenditure, while chorea affecting the swallowing muscles increases dysphagia risk -- together these make unintentional weight loss common and clinically significant in Huntington's disease, requiring a nutritional intervention plan rather than being dismissed or treated as purely psychiatric."
  },
  {
    stem: "A patient with Huntington's disease becomes increasingly irritable and expresses feelings of hopelessness. What is the nurse's priority action?",
    options: ["Assess for suicidal ideation, since Huntington's disease carries an increased risk of depression and suicide", "Attribute the mood change entirely to the chorea and take no further action", "Reassure the patient that mood changes are not part of Huntington's disease", "Delay any psychiatric assessment until the next scheduled follow-up visit"],
    correct: 0,
    rationale: "Huntington's disease affects mood and psychiatric status in addition to motor and cognitive function, with an increased risk of depression and suicide. Expressed hopelessness and irritability warrant a prompt suicide risk assessment rather than being dismissed as purely physical or deferred to a later visit."
  },
  {
    stem: "A patient with ALS reports increasing difficulty swallowing and occasional coughing with meals. What is the nurse's priority action?",
    options: ["Notify the provider and initiate a swallowing evaluation to assess aspiration risk", "Encourage the patient to eat faster to finish meals before fatigue worsens", "Reassure the patient that this is unrelated to ALS and requires no evaluation", "Restrict all fluids only, while continuing solid food as before"],
    correct: 0,
    rationale: "New difficulty swallowing with coughing during meals in an ALS patient signals bulbar involvement and rising aspiration risk, both bulbar (dysarthria/dysphagia) symptoms as motor neurons controlling swallowing degenerate. This requires a swallowing evaluation and provider notification, not reassurance or a partial fluid-only restriction that ignores the solid food risk."
  },
  {
    stem: "A patient with ALS asks the nurse whether the disease will eventually affect their ability to think and feel sensation. What is the nurse's best response?",
    options: ["ALS typically spares sensation and cognition, so awareness and the ability to feel are generally preserved even as motor function declines", "ALS causes progressive loss of both cognition and sensation along with motor function", "ALS only affects sensation, while cognition remains completely unaffected and motor strength also stays fully intact", "It is impossible to predict whether cognition or sensation will be affected in any individual patient"],
    correct: 0,
    rationale: "ALS typically spares sensory function and cognition, meaning the patient remains fully aware and able to feel sensation even as motor control progressively declines. This preserved awareness is clinically important and also underlies much of the psychosocial burden of the disease, since patients are fully cognizant of their physical decline."
  },
  {
    stem: "A patient recently diagnosed with ALS is cognitively intact and asks about planning for future care needs. What is the nurse's best approach?",
    options: ["Begin advance care planning discussions now, while the patient can fully participate in decisions about future care such as ventilatory support", "Postpone all advance care planning until the patient can no longer communicate", "Direct all future care decisions to the family without involving the patient", "Avoid the topic entirely, since discussing prognosis will cause unnecessary distress"],
    correct: 0,
    rationale: "Because ALS is progressive and ultimately fatal but spares cognition, addressing advance care planning early, while the patient can fully participate, respects patient autonomy in decisions about future care, including ventilatory support. Waiting until the patient can no longer communicate removes their ability to have a voice in these decisions."
  },
  {
    stem: "A nurse is monitoring a patient with ALS for early signs of respiratory muscle involvement. Which finding is most concerning?",
    options: ["A declining vital capacity on serial pulmonary function testing", "A stable heart rate throughout the shift", "Normal bowel sounds in all four quadrants", "An unchanged Glasgow Coma Scale score"],
    correct: 0,
    rationale: "A declining vital capacity reflects worsening respiratory muscle strength, and respiratory muscle failure is the most common cause of death in ALS, making serial monitoring of vital capacity an important nursing assessment. Heart rate, bowel sounds, and GCS do not directly reflect the respiratory muscle involvement characteristic of ALS progression."
  }
];
