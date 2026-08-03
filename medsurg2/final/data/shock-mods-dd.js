// MedSurg II FINAL EXAM REVIEW -- Shock, Sepsis & MODS (Ch 11) -- Deep Drill
// 14 questions, 90% hard / 10% medium, no easy. NEW scenarios distinct from exam2/data/shock-mods-dd.js (22 Q)
// and from the final simulator's Ch11 questions. Fills gaps: obstructive shock, shock classification, MAP concept,
// acid-base flip, anaphylaxis sequencing, nutrition, vasoactive med comparison, MODS-by-type driver.
// correct: 0 always -- engine shuffles option order at runtime.
window.QUESTIONS = [
  {
    stem: "A trauma patient develops sudden hypotension and tachycardia after a chest injury. Absent breath sounds and tracheal deviation are noted, but an echocardiogram shows normal cardiac contractility. What type of shock does the nurse recognize?",
    options: ["Obstructive shock", "Cardiogenic shock", "Hypovolemic shock", "Distributive shock"],
    correct: 0,
    rationale: "Obstructive shock occurs when cardiac output is impaired despite normal heart muscle function, as with a tension pneumothorax physically obstructing venous return and cardiac filling. This is distinct from cardiogenic shock, where the heart muscle itself is the problem, and from hypovolemic or distributive shock, which do not involve this mechanical obstruction."
  },
  {
    stem: "A nursing student asks how neurogenic shock differs mechanistically from septic and anaphylactic shock, since all three are classified as distributive shock. What is the nurse's best explanation?",
    options: ["All three cause widespread vasodilation, but neurogenic shock results from increased parasympathetic stimulation rather than infection or an allergic reaction", "Neurogenic shock is caused by decreased intravascular volume, unlike the other two distributive shock types", "Neurogenic shock is caused by impaired cardiac contractility, unlike the vasodilation seen in septic and anaphylactic shock", "Neurogenic shock does not involve vasodilation at all and is a completely different physiologic process"],
    correct: 0,
    rationale: "All distributive shock types share widespread vasodilation as the underlying mechanism, but the trigger differs: neurogenic shock results from increased parasympathetic stimulation (often from spinal cord injury), while septic shock is triggered by a dysregulated infection response and anaphylactic shock by a severe allergic reaction. None of the three are defined by volume loss or impaired cardiac contractility."
  },
  {
    stem: "A patient's blood pressure is 92/58 mmHg. The nurse calculates the mean arterial pressure and determines it is 69 mmHg. How does the nurse interpret this finding in the context of shock management?",
    options: ["This MAP is adequate to sustain organ perfusion, since it exceeds the critical threshold of 65 mmHg", "This MAP indicates inadequate perfusion and immediate vasopressor therapy is required", "This MAP cannot be used to assess perfusion status without also knowing the heart rate", "This MAP indicates the patient is in the irreversible stage of shock"],
    correct: 0,
    rationale: "A MAP of 69 mmHg exceeds the critical threshold of 65 mmHg required to sustain adequate organ perfusion, so this value is reassuring rather than a trigger for immediate vasopressor escalation. MAP alone, without requiring heart rate, is used specifically because it reflects average perfusion pressure across the cardiac cycle, and this value does not suggest irreversible shock."
  },
  {
    stem: "A patient in the compensatory stage of shock has an ABG showing pH 7.47, PaCO2 30 mmHg, and HCO3- 24 mEq/L. Two hours later, as the patient progresses, a repeat ABG shows pH 7.28, PaCO2 34 mmHg, and HCO3- 16 mEq/L. What does the nurse recognize about this change?",
    options: ["The patient has shifted from respiratory alkalosis to metabolic acidosis as shock progressed from compensatory to progressive", "The patient has shifted from metabolic alkalosis to respiratory acidosis, indicating worsening lung function", "Both ABGs reflect the same underlying acid-base disturbance at different severities", "The second ABG indicates the patient's condition has improved compared to the first"],
    correct: 0,
    rationale: "The first ABG shows respiratory alkalosis from rapid compensatory breathing blowing off CO2, characteristic of the compensatory stage. The second ABG shows metabolic acidosis from anaerobic metabolism and lactate production, characteristic of the progressive stage. This is a genuine reversal in the primary disturbance type, not simply a worsening of the same problem, and represents clinical deterioration, not improvement."
  },
  {
    stem: "A patient who has been in septic shock for several days develops new jaundice along with previously noted mottled skin and petechiae. What does the nurse recognize about this progression?",
    options: ["Jaundice suggests the patient has progressed to the irreversible stage of shock with liver failure", "Jaundice is an expected and reassuring sign that the patient's liver is compensating well", "Jaundice at this stage is unrelated to the shock progression and likely reflects a separate diagnosis", "Jaundice indicates the patient has returned to the compensatory stage of shock"],
    correct: 0,
    rationale: "Skin findings track organ failure as shock progresses: cold and clammy skin in the compensatory stage, mottling and petechiae in the progressive stage, and jaundice from liver failure in the irreversible stage. This progression indicates worsening, not improvement or a return to an earlier, more reversible stage."
  },
  {
    stem: "A patient develops anaphylaxis after receiving IV contrast dye. The nurse has epinephrine, diphenhydramine, and IV fluids available. What should the nurse administer first?",
    options: ["Epinephrine IM", "Diphenhydramine IV", "IV fluid bolus", "Famotidine IV"],
    correct: 0,
    rationale: "Epinephrine IM is always given first in anaphylaxis, without delay for other medications, since it addresses the life-threatening hemodynamic collapse and airway compromise directly. Antihistamines, H2 blockers, and IV fluids are all important supportive treatments but must not delay epinephrine administration."
  },
  {
    stem: "A patient recovering from anaphylactic shock is stable and being prepared for discharge from the emergency department after epinephrine, antihistamines, and bronchodilator therapy. The provider adds a corticosteroid to the discharge plan. What is the primary purpose of this medication?",
    options: ["To help prevent a biphasic anaphylactic reaction from occurring after initial symptoms resolve", "To provide immediate bronchodilation in place of the previously administered bronchodilator", "To rapidly reverse any remaining hypotension before discharge", "To replace the need for an epinephrine auto-injector prescription at discharge"],
    correct: 0,
    rationale: "Corticosteroids are given in anaphylaxis primarily to help prevent a biphasic reaction, a recurrence of symptoms hours after the initial episode resolves, since their anti-inflammatory effect takes hours to occur rather than providing immediate relief. They do not replace bronchodilators for immediate bronchospasm or an epinephrine auto-injector prescription for future exposures."
  },
  {
    stem: "A patient in septic shock has been hemodynamically stable for 24 hours. The provider orders enteral nutrition to begin. The nurse's colleague suggests waiting several more days until the patient is \"fully recovered.\" What is the nurse's best response?",
    options: ["Early enteral nutrition, started within 24 to 48 hours in a hemodynamically stable patient, helps preserve gut integrity and reduces infection risk", "Parenteral nutrition should be started instead, since it is always preferred over enteral nutrition in critically ill patients", "Nutritional support should be delayed until the patient is off all vasopressors, regardless of hemodynamic stability", "Enteral nutrition carries no benefit over delayed feeding in septic shock and the timing does not matter"],
    correct: 0,
    rationale: "Early enteral nutrition, ideally within 24 to 48 hours of ICU admission in a hemodynamically stable patient, is preferred over parenteral nutrition because it preserves gut integrity, reduces bacterial translocation, and lowers infection risk. Waiting until full recovery unnecessarily delays a therapy shown to improve outcomes in shock states."
  },
  {
    stem: "A patient in septic shock is receiving enteral nutrition and insulin per protocol. The nurse reviews the blood glucose trend and notes values consistently around 210 mg/dL. What is the most appropriate nursing action?",
    options: ["Notify the provider, since the target blood glucose range in shock is 140 to 180 mg/dL", "Continue the current regimen since blood glucose in shock patients does not require tight control", "Hold the enteral nutrition until the blood glucose normalizes to under 140 mg/dL", "Document the finding as expected, since hyperglycemia is not a concern in critically ill patients"],
    correct: 0,
    rationale: "Shock creates a hypermetabolic state with common insulin resistance, and the target blood glucose range is 140 to 180 mg/dL; a level of 210 mg/dL is above this target and should be reported so the insulin regimen can be adjusted. Blood glucose does require monitoring and control in shock, and holding enteral nutrition entirely is not the appropriate response to hyperglycemia alone."
  },
  {
    stem: "A family member of a critically ill patient in septic shock asks the nurse to explain what is happening using simple terms, since the physician's explanation was full of medical terminology they didn't understand. What is the nurse's best approach?",
    options: ["Provide clear, honest communication in plain language, avoiding medical jargon while remaining truthful about the patient's condition", "Defer entirely to the physician and tell the family to wait for the next physician update", "Simplify the explanation by telling the family the patient will likely be fine to reduce their anxiety", "Explain that nursing staff are not permitted to discuss the patient's condition with family members"],
    correct: 0,
    rationale: "Providing frequent, honest, and clear communication in plain language, without medical jargon, is a critical nursing role in supporting families of critically ill patients. Offering false reassurance that the patient will be fine is inappropriate, as is deferring entirely to the physician or declining to communicate with the family at all, since nurses play an active role in family support and education."
  },
  {
    stem: "A patient in septic shock is started on both norepinephrine and dopamine per provider order, with the dopamine dose being adjusted frequently. What does the nurse understand about dopamine's role in this regimen?",
    options: ["Dopamine has dose-dependent effects and must be titrated carefully to achieve the desired hemodynamic response", "Dopamine is always the first-line vasopressor in septic shock, ahead of norepinephrine", "Dopamine has a fixed effect regardless of dose and does not require titration", "Dopamine should never be combined with another vasopressor in septic shock management"],
    correct: 0,
    rationale: "Dopamine has dose-dependent effects on different receptors, meaning its clinical effect changes based on the infusion rate, which is why it must be titrated carefully in the ICU setting. Norepinephrine, not dopamine, is the first-line vasopressor for septic shock, and combination vasopressor therapy is sometimes used when a single agent is insufficient to reach the hemodynamic target."
  },
  {
    stem: "A patient in hypovolemic shock is found to have the shock triggered by diabetes insipidus causing massive free water loss. In addition to IV fluid replacement, what medication does the nurse anticipate the provider will order to treat the underlying cause?",
    options: ["Desmopressin (DDAVP)", "Insulin", "An antiemetic", "An antidiarrheal agent"],
    correct: 0,
    rationale: "Desmopressin (DDAVP) is used to treat diabetes insipidus by replacing antidiuretic hormone activity and reducing the massive free water losses driving the hypovolemic shock. Insulin is used when dehydration is secondary to hyperglycemia, antiemetics for vomiting-related losses, and antidiarrheals for diarrhea-related losses, none of which apply to this specific cause."
  },
  {
    stem: "A patient in shock now requires mechanical ventilation, is unconscious, and has anuria requiring dialysis despite maximum vasopressor and fluid support. What stage of shock does the nurse recognize this represents?",
    options: ["Irreversible stage", "Compensatory stage", "Progressive stage", "This does not correspond to a specific stage of shock"],
    correct: 0,
    rationale: "Requiring mechanical ventilation, unconsciousness, and anuria requiring dialysis despite maximum support are hallmark findings of the irreversible stage of shock, where compensation has failed completely and organs are shutting down without full mechanical or pharmacologic replacement of their function. This is far beyond the compensatory stage, where BP remains normal, and beyond the progressive stage, which has some remaining physiologic reserve."
  },
  {
    stem: "A patient in cardiogenic shock is being monitored for MODS. The nurse understands that in this specific shock type, MODS risk is primarily driven by which factor, distinguishing it from septic shock's primary driver?",
    options: ["Oxygen delivery failure, compared to elevated lactate as the primary driver in septic shock", "Elevated lactate, identical to the primary driver in septic shock", "Inadequate fluid resuscitation, identical to the primary driver in hypovolemic shock", "Widespread vasodilation, which is not a factor in cardiogenic shock's MODS risk"],
    correct: 0,
    rationale: "In cardiogenic shock, MODS risk is primarily driven by oxygen delivery failure from the failing pump, whereas in septic shock, an elevated lactate (at or above 2) is the key trigger and indicator. Cardiogenic shock's driver is distinct from both septic shock's lactate-based trigger and hypovolemic shock's inadequate fluid resuscitation driver, and vasodilation is not the relevant mechanism in cardiogenic shock."
  }
];
