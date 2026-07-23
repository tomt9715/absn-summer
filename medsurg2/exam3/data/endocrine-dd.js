// MedSurg II Exam 3 -- Endocrine Disorders (Ch 46) -- Deep Drill
// 90% hard / 10% medium, no easy. Scenario-driven: DI/SIADH discrimination, post-thyroidectomy
// emergencies, thyroid storm, myxedema coma, Addisonian crisis, Cushing teaching, priority actions.
// correct: 0 always -- engine shuffles option order at runtime.
window.QUESTIONS = [
  {
    stem: "A patient with a history of head trauma develops urine output of 300 mL/hr, a serum sodium of 152 mEq/L, and a urine specific gravity of 1.002. What does the nurse suspect?",
    options: ["Diabetes insipidus", "SIADH", "Cushing syndrome", "Primary aldosteronism"],
    correct: 0,
    rationale: "High urine output with low specific gravity and hypernatremia is the hallmark of diabetes insipidus -- the kidneys cannot concentrate urine because ADH is unavailable, and head trauma is a common cause. SIADH would show the opposite picture (concentrated urine, hyponatremia), and Cushing syndrome or aldosteronism would not produce this dilute-urine picture."
  },
  {
    stem: "A patient recovering from a subarachnoid hemorrhage develops confusion, a serum sodium of 118 mEq/L, and concentrated urine with weight gain. What does the nurse suspect?",
    options: ["SIADH", "Diabetes insipidus", "Addison disease", "Primary aldosteronism"],
    correct: 0,
    rationale: "Concentrated urine, hyponatremia, weight gain, and confusion after a CNS event point to SIADH, where excess ADH causes fluid retention and dilutional hyponatremia. DI produces dilute urine and hypernatremia, the opposite pattern, and neither Addison disease nor aldosteronism fits this sodium and fluid picture."
  },
  {
    stem: "A nurse is comparing two patients on the neuro unit. Patient A has polyuria, dilute urine, and hypernatremia. Patient B has oliguria, concentrated urine, and hyponatremia. Which conditions do these findings represent respectively?",
    options: ["Patient A has diabetes insipidus and Patient B has SIADH", "Patient A has SIADH and Patient B has diabetes insipidus", "Both patients have diabetes insipidus at different stages", "Both patients have SIADH with different severity"],
    correct: 0,
    rationale: "Patient A's high output of dilute urine with hypernatremia is classic DI, driven by too little ADH. Patient B's low output of concentrated urine with hyponatremia is classic SIADH, driven by too much ADH. The two conditions are essentially mirror images of each other."
  },
  {
    stem: "A patient two days post-thyroidectomy reports tingling around the mouth and in the fingertips. Tapping the cheek in front of the ear produces facial twitching. What does the nurse suspect and do first?",
    options: ["Hypocalcemia from parathyroid injury; notify the provider and have calcium gluconate available", "Normal post-operative nerve irritation; reassure the patient", "Hyperkalemia from tissue trauma; obtain an ECG only", "Anxiety related to surgery; provide emotional support"],
    correct: 0,
    rationale: "Perioral and fingertip tingling with a positive Chvostek's sign are classic early signs of hypocalcemia from parathyroid injury during thyroidectomy. This needs prompt provider notification and calcium gluconate readily available, since it can progress quickly to tetany and airway compromise -- dismissing it as normal irritation or anxiety would delay recognition of a dangerous trend."
  },
  {
    stem: "A patient post-thyroidectomy suddenly develops stridor and increasing difficulty breathing. What is the nurse's priority action?",
    options: ["Assess airway patency and prepare for emergency intervention", "Reposition the patient flat and notify the family", "Administer the scheduled oral pain medication", "Document the finding and reassess in one hour"],
    correct: 0,
    rationale: "Stridor and respiratory distress after thyroidectomy suggest airway compromise from swelling, hematoma, or laryngospasm, all life-threatening. The priority is assessing airway patency and preparing for emergency intervention; anything that delays action, including waiting an hour or giving oral medication, risks a rapidly worsening airway."
  },
  {
    stem: "A patient with untreated hyperthyroidism is admitted with a temperature of 106.1°F, a heart rate of 160, and severe agitation after a recent infection. What does the nurse suspect?",
    options: ["Thyroid storm", "Myxedema coma", "Addisonian crisis", "Cushing crisis"],
    correct: 0,
    rationale: "Extreme hyperpyrexia, tachycardia, and agitation in an untreated hyperthyroid patient, often precipitated by infection or stress, is thyroid storm -- a life-threatening complication of hyperthyroidism. Myxedema coma presents with the opposite picture of hypothermia and depressed function, and Addisonian crisis presents with hypotension and shock rather than hyperpyrexia and tachycardia."
  },
  {
    stem: "A patient with long-standing untreated hypothyroidism is found unresponsive with a temperature of 92°F and shallow respirations. What does the nurse suspect?",
    options: ["Myxedema coma", "Thyroid storm", "Addisonian crisis", "Diabetic ketoacidosis"],
    correct: 0,
    rationale: "Hypothermia, unresponsiveness, and respiratory depression in a patient with untreated hypothyroidism is myxedema coma, a rare but life-threatening complication with a high mortality rate. Thyroid storm presents with hyperthermia and tachycardia, the opposite picture, and this scenario has no findings pointing to adrenal insufficiency or DKA."
  },
  {
    stem: "A patient with Addison disease reports having stopped their prednisone abruptly three days ago due to nausea. The patient now has hypotension, fever, and vomiting. What does the nurse suspect?",
    options: ["Addisonian crisis", "Thyroid storm", "SIADH", "Cushing syndrome"],
    correct: 0,
    rationale: "Abrupt cessation of long-term steroid therapy in a patient with Addison disease removes the exogenous cortisol the body depends on, precipitating Addisonian crisis -- hypotension, fever, GI symptoms, and shock. This is a direct result of the medication change, not a thyroid or fluid-balance disorder."
  },
  {
    stem: "A patient with Addison disease is being taught about managing their condition during illness. Which statement indicates a need for further teaching?",
    options: ["\"I will skip my steroid dose if I am too nauseated to eat.\"", "\"I will contact my provider if I have a fever or significant stress.\"", "\"I may need my medication dose adjusted during illness.\"", "\"I will wear a medical alert bracelet at all times.\""],
    correct: 0,
    rationale: "Skipping the steroid dose during illness is dangerous and indicates a need for further teaching -- illness and stress are exactly when the body needs more cortisol, not less, and abrupt cessation risks Addisonian crisis. The other statements reflect correct understanding of managing Addison disease during periods of stress or illness."
  },
  {
    stem: "A patient with Cushing syndrome asks why her diet has been changed to high-protein, high-calcium, low-carbohydrate, and low-sodium. What is the nurse's best explanation?",
    options: ["This diet addresses the muscle wasting, osteoporosis risk, hyperglycemia, and fluid retention caused by excess cortisol", "This diet is standard for all endocrine patients regardless of diagnosis", "This diet is meant to increase her cortisol production", "This diet will cure the underlying pituitary tumor"],
    correct: 0,
    rationale: "Excess cortisol in Cushing syndrome causes muscle wasting, osteoporosis, hyperglycemia, and sodium and fluid retention, so the diet is tailored to counter those specific effects: extra protein and calcium to offset wasting and bone loss, and less carbohydrate and sodium to limit hyperglycemia and fluid retention. It is not a generic endocrine diet, and diet alone will not treat the underlying tumor."
  },
  {
    stem: "A nurse is caring for a patient with Cushing syndrome. Which findings does the nurse expect to observe? Select all that apply.",
    options: ["Moon face", "Buffalo hump", "Thin, fragile skin with striae", "Central obesity", "Hyperpigmented skin", "Hypotension"],
    correct: [0, 1, 2, 3],
    rationale: "Cushing syndrome from excess cortisol produces a round moon face, a buffalo hump of fat on the upper back, thin fragile skin with striae, and central obesity. Hyperpigmented skin and hypotension are findings of Addison disease (cortisol deficiency), which is essentially the opposite hormonal picture."
  },
  {
    stem: "A patient taking levothyroxine for six weeks reports palpitations, insomnia, tremors, and increased appetite. What does the nurse suspect?",
    options: ["Overdose of thyroid replacement medication", "Expected therapeutic effect of levothyroxine", "Worsening untreated hypothyroidism", "An unrelated anxiety disorder"],
    correct: 0,
    rationale: "Palpitations, insomnia, tremors, and increased appetite after starting levothyroxine are signs of thyroid medication overdose, essentially pushing the patient into a hyperthyroid state -- the dose likely needs to be reassessed. These are not expected effects of correctly dosed replacement therapy, and worsening hypothyroidism would produce the opposite symptoms."
  },
  {
    stem: "A patient with hyperthyroidism is prescribed a beta blocker in addition to PTU. What is the nurse's best explanation for why the beta blocker was added?",
    options: ["It controls the tachycardia, tremors, and anxiety caused by excess thyroid hormone while PTU addresses the underlying hormone production", "It replaces the deficient thyroid hormone", "It treats the hypocalcemia caused by hyperthyroidism", "It prevents the need for thyroidectomy in all patients"],
    correct: 0,
    rationale: "Beta blockers manage the cardiovascular and neurologic symptoms of excess thyroid hormone, tachycardia, tremors, and anxiety, providing symptom relief while PTU works more slowly to reduce hormone production at its source. Beta blockers do not replace hormone, treat calcium levels, or eliminate the possible need for surgery."
  },
  {
    stem: "Two patients present with excess growth hormone. Patient A is 8 years old with proportional overgrowth of all body tissue. Patient B is 45 years old with enlarged hands, feet, and jaw but normal height. Which conditions do these represent respectively?",
    options: ["Patient A has gigantism and Patient B has acromegaly", "Patient A has acromegaly and Patient B has gigantism", "Both patients have acromegaly at different ages", "Both patients have dwarfism with different presentations"],
    correct: 0,
    rationale: "Patient A's proportional overgrowth before the growth plates close is gigantism. Patient B's disproportionate growth of hands, feet, and jaw without a height change, since the growth plates are already closed in adulthood, is acromegaly. Both share the same underlying hormone excess but differ based on timing relative to growth plate closure."
  },
  {
    stem: "A patient completes a fluid deprivation test. Which finding confirms a diagnosis of diabetes insipidus rather than a normal response?",
    options: ["Urine specific gravity remains low despite fluid restriction and continued weight loss", "Urine specific gravity rises above 1.020 during the test", "Serum sodium decreases to below normal during the test", "Urine output decreases to less than 30 mL/hr during the test"],
    correct: 0,
    rationale: "In DI, the kidneys cannot concentrate urine even under fluid restriction, so specific gravity stays abnormally low while the patient continues to lose weight and serum sodium and osmolality rise. A normal response would show rising specific gravity and decreasing urine output as the body appropriately conserves water."
  },
  {
    stem: "A patient with SIADH has a serum sodium of 116 mEq/L and is now exhibiting confusion and a new-onset seizure. What is the nurse's priority action?",
    options: ["Notify the provider immediately and prepare for possible hypertonic saline administration", "Encourage the patient to drink more water to dilute excess sodium", "Restrict the patient to bedrest and reassess in four hours", "Administer the next scheduled dose of desmopressin"],
    correct: 0,
    rationale: "A sodium of 116 with confusion and seizure reflects severe, symptomatic hyponatremia, a medical emergency requiring immediate provider notification and likely hypertonic saline to correct sodium safely. Encouraging more water would worsen the dilutional hyponatremia, and desmopressin would only make SIADH worse since it increases water retention."
  },
  {
    stem: "A patient with primary aldosteronism has a potassium level of 2.9 mEq/L and reports muscle weakness and numbness. What is the nurse's priority concern?",
    options: ["Cardiac dysrhythmias related to severe hypokalemia", "Hyperglycemia related to excess aldosterone", "Respiratory depression related to hypernatremia", "Hypocalcemia related to parathyroid suppression"],
    correct: 0,
    rationale: "A potassium of 2.9 with muscle weakness is significant hypokalemia, which places the patient at risk for life-threatening cardiac dysrhythmias -- this is the priority concern requiring close cardiac monitoring. Aldosteronism does not directly cause hyperglycemia or affect calcium and parathyroid function, and hypernatremia alone does not cause respiratory depression."
  }
];
