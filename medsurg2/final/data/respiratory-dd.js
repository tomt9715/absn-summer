// MedSurg II FINAL EXAM REVIEW -- Chest & Lower Respiratory Disorders (Ch 19) -- Deep Drill
// 14 questions, 90% hard / 10% medium, no easy. NEW scenarios distinct from exam1/data/respiratory-dd.js
// and from the final exam simulator's Ch19 questions (different patients, findings, and framing).
// correct: 0 always -- engine shuffles option order at runtime.
window.QUESTIONS = [
  {
    stem: "A trauma patient has absent breath sounds on the right side and tracheal deviation toward the LEFT (unaffected) side. Which condition does this presentation suggest, distinguishing it from tension pneumothorax?",
    options: ["Hemothorax", "Tension pneumothorax", "Simple pneumothorax", "Pleural effusion"],
    correct: 0,
    rationale: "Hemothorax causes tracheal deviation toward the unaffected side as blood fills the pleural cavity, while tension pneumothorax deviates the trachea away from the affected side. Both share absent breath sounds and hemodynamic compromise, but the direction of tracheal shift is the key differentiator between the two."
  },
  {
    stem: "A nurse is explaining to a new graduate why a patient with suspected active tuberculosis is placed in a negative pressure room rather than a standard private room. What is the correct explanation?",
    options: ["Negative pressure keeps air flowing into the room so contaminated air cannot escape into the hallway", "Negative pressure keeps air flowing out of the room to dilute the concentration of infectious droplets", "Negative pressure rooms are required only when the patient also has a productive cough", "Negative pressure rooms eliminate the need for the staff to wear an N95 respirator"],
    correct: 0,
    rationale: "A negative pressure room has lower air pressure inside than outside, so air flows inward into the room rather than out into the hallway, preventing airborne droplet nuclei from escaping and infecting others. Staff must still wear an N95 respirator regardless of room pressure."
  },
  {
    stem: "A patient with empyema has a chest tube in place draining thick, purulent fluid. The provider orders a 5-week course of IV antibiotics. The patient asks why the antibiotic course is so much longer than a typical infection. What is the nurse's best explanation?",
    options: ["Empyema is a localized pocket of infection that requires a prolonged antibiotic course of 4 to 6 weeks along with drainage to fully resolve", "The extended course is standard for any patient requiring a chest tube regardless of the underlying cause", "A shorter course would be adequate, but the extended course is being used as a precaution only", "The chest tube alone would not be effective without an extended antibiotic course for any pleural condition"],
    correct: 0,
    rationale: "Empyema involves a localized pocket of purulent fluid in the pleural space that is difficult to fully clear, requiring both drainage via chest tube and a prolonged antibiotic course of 4 to 6 weeks to resolve the infection. A standard short antibiotic course would be inadequate for this walled-off infection."
  },
  {
    stem: "A nurse is caring for an intubated patient on mechanical ventilation. Which nursing intervention is most effective in reducing the risk of ventilator-associated pneumonia (VAP)?",
    options: ["Provide frequent oral care and keep the head of the bed elevated", "Suction the endotracheal tube on a strict schedule every 15 minutes regardless of need", "Keep the patient supine at all times to reduce movement of the endotracheal tube", "Administer prophylactic systemic antibiotics for the duration of intubation"],
    correct: 0,
    rationale: "Frequent oral care reduces the bacterial load in the mouth that can be aspirated into the lungs, and keeping the head of the bed elevated reduces aspiration risk, both key VAP prevention strategies. Suctioning should be performed based on assessment, not a rigid schedule, and prophylactic systemic antibiotics are not standard VAP prevention."
  },
  {
    stem: "A patient reports chest discomfort, and the nurse notes decreased breath sounds and a dull, flat sound on percussion over the right lower lung field. What does the nurse suspect?",
    options: ["Pleural effusion", "Pneumothorax", "Atelectasis from mucus plugging", "Tension pneumothorax"],
    correct: 0,
    rationale: "Decreased or absent breath sounds combined with a dull, flat percussion note over the affected area indicates fluid in the pleural space, consistent with pleural effusion. Pneumothorax would produce a hyperresonant, not dull, percussion note since air rather than fluid is present."
  },
  {
    stem: "A patient with a 40-pack-year smoking history reports that their usual morning cough has recently changed, becoming deeper and occurring throughout the day rather than only in the morning. What should this finding prompt the nurse to do?",
    options: ["Recognize this as a warning sign of possible lung cancer and ensure it is reported for further workup", "Reassure the patient that a cough change is expected with a long smoking history", "Advise the patient to increase fluid intake and reassess in one month", "Attribute the change to a mild upper respiratory infection and provide symptomatic care only"],
    correct: 0,
    rationale: "A cough that changes in character, becoming different from the patient's baseline pattern, is the classic early warning sign of lung cancer and should prompt further evaluation, especially in a patient with a significant smoking history. This finding should never be dismissed as an expected smoker's cough."
  },
  {
    stem: "A postoperative patient who has been immobile for several days develops sudden dyspnea, pleuritic chest pain, and a swollen, tender calf. What nursing intervention earlier in the hospital stay could have most reduced this risk?",
    options: ["Early and frequent ambulation with sequential compression devices while on bed rest", "Restricting oral fluid intake to reduce circulating blood volume", "Keeping the patient in a supine position at all times during recovery", "Applying heat packs to the lower extremities throughout the hospital stay"],
    correct: 0,
    rationale: "This presentation suggests a DVT that has progressed to a pulmonary embolism. Early and frequent ambulation along with sequential compression devices are the most effective prevention strategies for immobile patients, reducing venous stasis that leads to clot formation. Fluid restriction and heat application do not prevent DVT formation."
  },
  {
    stem: "A patient sustains a fracture of the 6th and 7th ribs from a fall. The chest X-ray shows no flail segment and the patient's oxygen saturation is stable. What is the priority nursing focus for this patient?",
    options: ["Adequate pain management to prevent splinting, shallow breathing, and subsequent atelectasis", "Immediate preparation for mechanical ventilation given the rib fracture location", "Strict bed rest for the full 3 to 6 week healing period to prevent further injury", "Chest tube insertion, since any rib fracture in the 4th through 10th ribs requires drainage"],
    correct: 0,
    rationale: "Most rib fractures, including this one without a flail segment, are managed conservatively, but pain management is critical since undertreated pain leads to splinting, shallow breathing, and atelectasis or pneumonia. Ribs 4 through 10 are the most commonly fractured and typically heal in 3 to 6 weeks without ventilation or chest tube unless complications develop."
  },
  {
    stem: "A patient develops sudden severe dyspnea within 48 hours of a major traumatic injury. Chest X-ray shows bilateral diffuse infiltrates, and the patient remains hypoxemic despite a 100% non-rebreather mask. What does the nurse recognize as the most likely diagnosis?",
    options: ["Acute respiratory distress syndrome (ARDS)", "Community-acquired pneumonia", "Pulmonary embolism", "Simple pneumothorax"],
    correct: 0,
    rationale: "Bilateral diffuse infiltrates with hypoxemia unresponsive to high-concentration oxygen, developing within 72 hours of a precipitating event such as major trauma, is the classic presentation of ARDS. Pneumonia typically shows more localized infiltrates, and PE or simple pneumothorax would not produce this bilateral pattern with oxygen-refractory hypoxemia."
  },
  {
    stem: "A nurse assesses a patient's chest tube drainage system and notes continuous bubbling in the water seal chamber that persists even when the patient is not coughing. What does this finding most likely indicate?",
    options: ["An air leak somewhere in the chest tube system", "Normal, expected tidaling that occurs with respiration", "The lung has fully reinflated and the tube is ready for removal", "The suction level is set too high and should be reduced immediately"],
    correct: 0,
    rationale: "Continuous bubbling in the water seal chamber, especially when it persists regardless of the respiratory cycle or coughing, indicates an air leak in the chest tube system that needs to be located and addressed. Tidaling refers to fluid level fluctuation with breathing, a different and expected finding, not continuous bubbling."
  },
  {
    stem: "A patient with active tuberculosis is receiving nursing care that includes postural drainage. What is the purpose of this intervention?",
    options: ["Using gravity to help mobilize and clear bronchial secretions", "Delivering aerosolized antibiotic medication directly to the lungs", "Measuring the volume of sputum produced over a 24-hour period", "Reducing the risk of transmission to healthcare workers during care"],
    correct: 0,
    rationale: "Postural drainage uses gravity, by positioning the patient in specific ways, to help move and clear bronchial secretions from the lungs, which is particularly useful in TB given the chronic, thick secretions associated with the disease. It does not deliver medication, measure sputum volume, or itself reduce transmission risk."
  },
  {
    stem: "A patient presents to the emergency department with sudden onset of sharp chest pain and mild dyspnea after coughing forcefully. Chest X-ray reveals a small area of lung collapse with no hemodynamic instability, and the provider elects to observe rather than insert a chest tube. What does the nurse understand about this decision?",
    options: ["A small spontaneous pneumothorax without hemodynamic compromise may reinflate on its own with close monitoring", "This decision is inappropriate and a chest tube should always be inserted for any pneumothorax", "Observation is only appropriate if the patient has no chest pain at all", "The provider is treating this as a tension pneumothorax requiring emergent intervention"],
    correct: 0,
    rationale: "A small, simple spontaneous pneumothorax without signs of hemodynamic instability may be managed with close observation, since the lung can sometimes reinflate on its own. A chest tube becomes necessary if the lung does not reinflate or if the patient develops worsening symptoms. This is distinctly different from the emergent management required for a tension pneumothorax."
  },
  {
    stem: "A patient with suspected active pulmonary tuberculosis has an order for both a sputum culture and the first dose of anti-tuberculosis medication. In what order should the nurse complete these tasks?",
    options: ["Obtain the sputum culture first, then administer the medication", "Administer the medication first, then obtain the sputum culture", "Either order is acceptable as long as both are completed within the same shift", "Administer the medication and defer the sputum culture to the following morning"],
    correct: 0,
    rationale: "The sputum sample must be obtained before any anti-tuberculosis medication is given, since starting treatment first can suppress the organism and compromise the accuracy of the culture results used to confirm the diagnosis and guide therapy."
  },
  {
    stem: "A patient on mechanical ventilation is due for repositioning of the endotracheal tube per protocol. What is the primary rationale for this routine intervention?",
    options: ["To prevent pressure injury at the lip or mouth from prolonged tube placement in one position", "To improve the taste of oral secretions for patient comfort", "To reduce the need for suctioning throughout the shift", "To eliminate the need for confirming tube placement after the initial insertion"],
    correct: 0,
    rationale: "Repositioning the endotracheal tube periodically, such as moving it from one side of the mouth to the other, helps prevent pressure injury to the lips and oral mucosa from prolonged placement in a single position. Tube placement should still be reassessed and confirmed after any repositioning, not eliminated as a concern."
  }
];
