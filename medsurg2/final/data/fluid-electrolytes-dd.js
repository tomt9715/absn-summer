// MedSurg II FINAL EXAM REVIEW -- Fluid & Electrolytes (Ch 10) -- Deep Drill
// 14 questions, 90% hard / 10% medium, no easy. NEW scenarios distinct from exam1/data/fluids-electrolytes-dd.js
// (that bank is heavy on Na/K/Ca/Mg + ABGs -- these questions fill the gaps: chloride, phosphate risk factors,
// specific hallmark-sign identification, and untested risk-factor angles) and from the final simulator's Ch10 questions.
// Per the professor's own note in the source file: focus on S/S, causes/risk factors, and patient education only.
// correct: 0 always -- engine shuffles option order at runtime.
window.QUESTIONS = [
  {
    stem: "A patient has been vomiting for several days and reports agitation, tremors, and occasional muscle cramps. Serum chloride is 92 mmol/L. What is the most likely explanation for this electrolyte disturbance?",
    options: ["Gastric losses of hydrochloric acid from prolonged vomiting", "Excessive dietary intake of chloride-rich foods", "Chronic kidney disease causing chloride retention", "Overuse of chloride-containing IV fluids"],
    correct: 0,
    rationale: "Chloride is produced in the stomach as part of gastric acid, so prolonged vomiting causes significant gastric chloride losses, leading to hypochloremia. Dietary intake, kidney retention, and IV fluid overuse would not explain a low chloride level in this clinical picture."
  },
  {
    stem: "A patient with a history of bicarbonate loss from chronic diarrhea and a diagnosis of metabolic acidosis has a chloride level of 112 mmol/L. What does the nurse recognize about this relationship?",
    options: ["Bicarbonate loss is commonly associated with a corresponding rise in chloride, since the two have an inverse relationship", "This chloride level is unrelated to the patient's bicarbonate loss or acid-base status", "Elevated chloride in this context indicates the patient is developing metabolic alkalosis instead", "This finding suggests the patient needs immediate chloride restriction regardless of the underlying cause"],
    correct: 0,
    rationale: "Bicarbonate and chloride have an inverse relationship, so when bicarbonate is lost (as in diarrhea) or excreted, chloride often rises correspondingly, contributing to hyperchloremia and reinforcing the metabolic acidosis. This is an expected physiologic relationship, not an unrelated or contradictory finding."
  },
  {
    stem: "A malnourished patient with a history of alcohol use disorder is started on parenteral nutrition after several days without adequate oral intake. Within 24 hours, the patient develops confusion, muscle weakness, and paresthesias. What electrolyte disturbance does the nurse suspect?",
    options: ["Hypophosphatemia related to refeeding syndrome", "Hyperphosphatemia related to excessive nutritional intake", "Hypercalcemia related to sudden calorie reintroduction", "Hyperkalemia related to parenteral nutrition administration"],
    correct: 0,
    rationale: "Refeeding a malnourished patient too quickly causes a rapid intracellular shift of phosphate, leading to hypophosphatemia with confusion, muscle weakness, and paresthesias, which is why calories should be introduced gradually in these patients. This is not a hyperphosphatemia, hypercalcemia, or hyperkalemia presentation."
  },
  {
    stem: "A patient with chronic kidney disease and hyperphosphatemia is being taught about dietary modifications. Which beverage should the nurse instruct the patient to avoid?",
    options: ["Cola-based soft drinks", "Ginger ale", "Cranberry juice", "Plain water"],
    correct: 0,
    rationale: "Cola-based soft drinks are high in phosphate and should be avoided by patients with hyperphosphatemia, along with other processed foods high in phosphates. Ginger ale and cranberry juice are actually low-potassium options taught for a different electrolyte imbalance, and plain water has no phosphate content."
  },
  {
    stem: "A patient with heart failure is prescribed spironolactone, and the provider also adds lisinopril to the regimen. What electrolyte imbalance is this combination most likely to cause?",
    options: ["Hyperkalemia", "Hypokalemia", "Hypercalcemia", "Hypomagnesemia"],
    correct: 0,
    rationale: "Spironolactone is a potassium-sparing diuretic, and lisinopril is an ACE inhibitor; both medication classes reduce potassium excretion, so combining them significantly increases the risk of hyperkalemia. This combination would not be expected to cause hypokalemia, hypercalcemia, or hypomagnesemia."
  },
  {
    stem: "A patient reports chronic use of over-the-counter laxatives for weight management and now presents with generalized weakness and muscle cramping. What electrolyte imbalance should the nurse suspect?",
    options: ["Hypokalemia", "Hyperkalemia", "Hypercalcemia", "Hyperphosphatemia"],
    correct: 0,
    rationale: "Chronic laxative abuse causes significant gastrointestinal potassium losses, leading to hypokalemia, which presents with weakness and muscle cramping. Hyperkalemia, hypercalcemia, and hyperphosphatemia are not associated with this history of chronic laxative misuse."
  },
  {
    stem: "A nurse taps lightly over a patient's facial nerve just anterior to the ear and observes twitching of the facial muscles on that side. What is this finding called, and what does it indicate?",
    options: ["A positive Chvostek's sign, indicating hypocalcemia", "A positive Trousseau's sign, indicating hypocalcemia", "A positive Chvostek's sign, indicating hyperkalemia", "A positive Babinski sign, indicating a neurologic deficit"],
    correct: 0,
    rationale: "Tapping the facial nerve and observing facial muscle twitching is a positive Chvostek's sign, a hallmark indicator of hypocalcemia due to increased neuromuscular excitability. Trousseau's sign instead involves carpal spasm elicited by inflating a blood pressure cuff, and this finding is not related to hyperkalemia or a Babinski reflex."
  },
  {
    stem: "A patient with a known malignancy reports new-onset bone pain, flank pain, and diminished deep tendon reflexes. What electrolyte imbalance is most consistent with this presentation?",
    options: ["Hypercalcemia", "Hypocalcemia", "Hyperkalemia", "Hypomagnesemia"],
    correct: 0,
    rationale: "Bone pain, flank pain (from possible kidney stones), and hyporeflexia are characteristic manifestations of hypercalcemia, which is often associated with malignancy due to bone breakdown releasing calcium. Hypocalcemia would cause hyperreflexia and tetany rather than hyporeflexia, and hyperkalemia and hypomagnesemia do not produce this specific symptom pattern."
  },
  {
    stem: "A patient admitted for diabetic ketoacidosis has a magnesium level of 1.3 mg/dL. What is the most likely explanation for this finding?",
    options: ["Magnesium shifts and losses commonly occur during the metabolic disturbances of DKA", "Diabetic ketoacidosis has no known association with magnesium disturbances", "This finding indicates the patient is developing acute kidney injury from the DKA", "The low magnesium level is an expected laboratory error requiring no further action"],
    correct: 0,
    rationale: "Diabetic ketoacidosis is a recognized risk factor for hypomagnesemia due to fluid shifts, osmotic diuresis, and metabolic derangements that occur during the disease process. This is a real and expected finding in DKA, not a laboratory error or an indicator of kidney injury specifically."
  },
  {
    stem: "A patient with acute kidney injury has a magnesium level of 3.1 mg/dL. What is the priority nursing assessment for this patient?",
    options: ["Deep tendon reflexes and respiratory status", "Skin turgor and capillary refill time", "Bowel sounds and abdominal girth", "Peripheral pulses and capillary refill in the lower extremities"],
    correct: 0,
    rationale: "Since the kidneys are the primary route of magnesium excretion, acute kidney injury places the patient at risk for hypermagnesemia, which can cause depressed reflexes, respiratory depression, and even cardiac arrest, making deep tendon reflexes and respiratory status the priority assessments. Skin turgor, bowel sounds, and peripheral pulses are not the priority focus for monitoring magnesium toxicity."
  },
  {
    stem: "A patient recovering from fluid overload related to acute hyponatremia is being taught about dietary sodium intake once their levels normalize. Which food choice reflects understanding of appropriate sodium-containing foods?",
    options: ["Canned bean soup with a side of salted pretzels", "Fresh steamed vegetables with no added seasoning", "Grilled chicken breast with a banana", "Plain oatmeal with fresh berries"],
    correct: 0,
    rationale: "Canned bean soup and salted pretzels are sodium-rich foods appropriate for a patient recovering from hyponatremia who needs to increase sodium intake. The other options are all low in sodium and would not help correct or maintain a normal sodium level in this context."
  },
  {
    stem: "A patient with severe symptomatic hyponatremia and a sodium level of 118 mEq/L develops seizure activity. What type of IV fluid does the nurse anticipate the provider will order?",
    options: ["Hypertonic saline, such as 3% sodium chloride", "Hypotonic saline, such as 0.45% sodium chloride", "D5W to provide free water for cellular rehydration", "A large volume 0.9% normal saline bolus given rapidly"],
    correct: 0,
    rationale: "Severe, symptomatic hyponatremia with seizure activity requires hypertonic saline (such as 3% NaCl) to rapidly and carefully raise the serum sodium level, since standard isotonic or hypotonic fluids would not correct the imbalance quickly enough for this critical presentation. Hypotonic fluids and D5W would worsen hyponatremia rather than correct it."
  },
  {
    stem: "A patient with cirrhosis develops a pleural effusion in addition to abdominal ascites. What does the nurse understand about this combination of findings?",
    options: ["Both are examples of third spacing, where fluid is trapped in a space that does not contribute to circulating volume", "The pleural effusion indicates the ascites has resolved and shifted to the chest", "These findings occur independently and are not related to the same underlying fluid imbalance", "This combination indicates the patient is fluid volume deficient rather than fluid overloaded"],
    correct: 0,
    rationale: "Both ascites and pleural effusion are examples of third spacing, where fluid becomes trapped in a space such as the peritoneal or pleural cavity and no longer contributes to equilibrium between the intracellular and extracellular compartments. This can occur simultaneously in conditions like cirrhosis and does not mean the ascites resolved or that the patient is actually volume deficient overall."
  },
  {
    stem: "A college student taking large doses of aspirin for a headache develops rapid, deep breathing. An ABG shows pH 7.49, PaCO2 30 mmHg, and HCO3- 25 mEq/L. How does the nurse interpret this finding?",
    options: ["Uncompensated respiratory alkalosis, potentially related to salicylate toxicity", "Uncompensated metabolic alkalosis related to excessive aspirin ingestion", "Partially compensated respiratory acidosis from opioid-induced hypoventilation", "Fully compensated metabolic acidosis with normalized pH"],
    correct: 0,
    rationale: "The elevated pH and low PaCO2 with a normal HCO3- indicate uncompensated respiratory alkalosis, and salicylate (aspirin) toxicity is a known cause of hyperventilation leading to this acid-base disturbance, distinct from the more commonly tested anxiety-related cause. This is not a metabolic disturbance since HCO3- remains normal, and it does not fit a respiratory acidosis or fully compensated pattern."
  }
];
