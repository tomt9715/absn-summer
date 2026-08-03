// MedSurg II FINAL EXAM REVIEW -- Endocrine Disorders (Ch 45) -- Deep Drill
// 13 questions, 90% hard / 10% medium, no easy. NEW scenarios distinct from exam3/data/endocrine-dd.js (15 Q, very
// comprehensive) and from the final simulator's Ch45 questions (SIADH, thyroidectomy calcium, Addisonian crisis,
// hypothyroidism SATA). Fills gaps: panhypopituitarism, acromegaly/gigantism timing, primary aldosteronism (untested
// anywhere), DI diet teaching, desmopressin route, thyroid iodine allergy, levothyroxine timing, hyper/hypo diet,
// Graves epidemiology, Addison diet, dexamethasone suppression test, thyroidectomy positioning/voice.
// correct: 0 always -- engine shuffles option order at runtime.
window.QUESTIONS = [
  {
    stem: "A patient with total destruction of the pituitary gland from a traumatic brain injury presents with extreme weight loss, hair loss, and hypoglycemia. What does the nurse recognize as the priority concern for this patient?",
    options: ["Coma and death can occur if the missing hormones are not replaced", "This presentation is self-limiting and will resolve without hormone replacement", "Only thyroid hormone replacement is necessary since the other glands are unaffected", "This presentation indicates the pituitary gland is regenerating and improving"],
    correct: 0,
    rationale: "Total pituitary destruction, or panhypopituitarism, removes all stimuli normally sent to the thyroid, gonads, and adrenal glands, resulting in extreme weight loss, atrophy of endocrine organs, hypometabolism, and hypoglycemia; coma and death can occur if the missing hormones are not replaced. This is not self-limiting, and multiple hormone systems, not just thyroid, require replacement."
  },
  {
    stem: "A 45-year-old patient develops progressive enlargement of the hands, feet, and jaw over several years, with X-rays confirming abnormal bone growth. A 10-year-old child presents with proportional overgrowth of all body tissues. What distinguishes these two growth hormone disorders?",
    options: ["The adult's condition is acromegaly, occurring after growth plate closure, while the child's condition is gigantism, occurring before growth plate closure", "Both patients have the identical condition, acromegaly, which occurs at any age with the same presentation", "The adult's condition is gigantism, while the child's condition is acromegaly", "The distinguishing factor between these two conditions is unrelated to growth plate closure timing"],
    correct: 0,
    rationale: "Acromegaly is GH hypersecretion occurring after puberty, once growth plates have closed, producing abnormal bone growth in areas like the hands, feet, and jaw rather than proportional height increase. Gigantism is GH hypersecretion occurring in childhood, before growth plate closure, producing proportional overgrowth of all body tissues. The timing relative to growth plate closure is the key distinguishing factor."
  },
  {
    stem: "A patient presents with hypertension, polyuria, polydipsia, muscle weakness, and laboratory results showing hypokalemia and hypernatremia. Imaging reveals an adrenal tumor. What condition does the nurse suspect?",
    options: ["Primary aldosteronism", "Addison disease", "Cushing syndrome", "Diabetes insipidus"],
    correct: 0,
    rationale: "Primary aldosteronism results from hypersecretion of aldosterone, usually from an adrenal tumor, causing hypertension, polyuria, polydipsia, hypokalemia, hypernatremia, and muscle weakness as aldosterone drives sodium retention and potassium excretion. Addison disease presents with hyperkalemia and hyponatremia, the opposite pattern, and Cushing syndrome and DI do not fit this specific electrolyte and blood pressure picture."
  },
  {
    stem: "A patient newly diagnosed with diabetes insipidus is being taught about dietary considerations. Which food should the nurse advise the patient to limit due to its mild diuretic effect?",
    options: ["Watermelon", "Grilled chicken", "White rice", "Scrambled eggs"],
    correct: 0,
    rationale: "Watermelon, along with grapes and blueberries, has a mild diuretic effect and should be limited in patients with diabetes insipidus, since these foods could worsen the excessive fluid loss already caused by the condition. Chicken, rice, and eggs do not carry this same diuretic consideration."
  },
  {
    stem: "A patient with diabetes insipidus is prescribed desmopressin (DDAVP). What administration route does the nurse anticipate teaching the patient to use?",
    options: ["Intranasal spray", "Subcutaneous injection only", "Rectal suppository", "Transdermal patch"],
    correct: 0,
    rationale: "Desmopressin is commonly administered intranasally, where the patient sprays the solution into the nose through a flexible calibrated plastic tube, valued for its longer duration of action and fewer adverse effects compared to natural ADH. Subcutaneous injection, rectal, and transdermal routes are not the typical teaching for this medication in DI management."
  },
  {
    stem: "A nurse is scheduling a patient for thyroid function testing and reviewing the patient's allergy history. What allergy is most important to identify before this testing?",
    options: ["Shellfish or iodine allergy", "Penicillin allergy", "Latex allergy", "Sulfa drug allergy"],
    correct: 0,
    rationale: "It is necessary to determine if a patient is allergic to iodine, such as a shellfish allergy, before thyroid testing, since iodine-containing medications or agents may alter test results and the contrast used in some thyroid imaging contains iodine. Penicillin, latex, and sulfa allergies are not the specific concern for this particular testing."
  },
  {
    stem: "A nurse is providing discharge teaching for a patient newly started on levothyroxine. What is the most important timing instruction to include?",
    options: ["Take the medication in the morning on an empty stomach", "Take the medication at bedtime with a snack", "Take the medication with a high-fiber breakfast for best absorption", "Timing of administration does not affect this medication's absorption"],
    correct: 0,
    rationale: "Levothyroxine should be taken in the morning on an empty stomach to optimize absorption, since food, especially high-fiber foods, and other medications can interfere with how well the body absorbs this medication. Taking it at bedtime with food or with a high-fiber meal would not support optimal absorption."
  },
  {
    stem: "A nurse is planning dietary teaching for two patients: one with hypothyroidism and one with hyperthyroidism. What is the key difference in caloric recommendations between these two conditions?",
    options: ["The hypothyroid patient needs a low-calorie diet due to decreased metabolism, while the hyperthyroid patient needs a high-calorie diet due to increased metabolism", "Both patients require an identical high-calorie diet regardless of their thyroid status", "Both patients require an identical low-calorie diet regardless of their thyroid status", "Caloric needs are unrelated to thyroid hormone levels in either condition"],
    correct: 0,
    rationale: "Hypothyroidism slows metabolism, so a low-calorie, low-cholesterol, low-fat diet with increased fiber is recommended to prevent further weight gain, while hyperthyroidism speeds metabolism significantly, requiring a high-calorie diet to prevent unintended weight loss and meet the increased metabolic demand."
  },
  {
    stem: "A young female patient presents with heat intolerance, tachycardia, and bulging eyes. The provider diagnoses Graves disease. What does the nurse understand about the epidemiology of this condition?",
    options: ["Graves disease is an autoimmune disorder that affects women approximately eight times more often than men", "Graves disease affects men and women equally and is not classified as an autoimmune disorder", "Graves disease is a rare condition that occurs almost exclusively in older adult men", "Graves disease is caused by iodine deficiency rather than an autoimmune process"],
    correct: 0,
    rationale: "Graves disease is an autoimmune disorder in which circulating immunoglobulins overstimulate the thyroid, and it affects women approximately eight times more often than men, making it the most common cause of hyperthyroidism. It is not caused by iodine deficiency and does not affect men and women equally."
  },
  {
    stem: "A patient with Addison disease is receiving dietary teaching before discharge. Which diet does the nurse recommend?",
    options: ["High-protein, high-carbohydrate diet with increased fluid intake, avoiding caffeine and alcohol", "Low-protein, low-carbohydrate diet with fluid restriction", "High-protein, high-calcium, low-sodium diet", "Low-sodium, low-potassium diet with no other modifications"],
    correct: 0,
    rationale: "Patients with Addison disease are recommended a high-protein, high-carbohydrate diet with increased fluids, while avoiding caffeine and alcohol, to help support the body given the cortisol deficiency. The high-protein, high-calcium, low-sodium diet is instead used for Cushing syndrome, the opposite condition."
  },
  {
    stem: "A patient undergoes a dexamethasone suppression test as part of a Cushing syndrome workup. What result would the nurse expect to see confirming the diagnosis?",
    options: ["Cortisol levels remain elevated and fail to suppress after the dexamethasone dose", "Cortisol levels drop to below normal after the dexamethasone dose", "Cortisol levels remain completely unchanged regardless of the dexamethasone dose in all patients", "The test result is unrelated to cortisol levels and instead measures serum sodium directly"],
    correct: 0,
    rationale: "In a healthy person, dexamethasone suppresses the body's own cortisol production through negative feedback, but in Cushing syndrome, cortisol levels remain elevated and fail to suppress, confirming that cortisol production is happening independent of normal feedback control. A drop to below normal would be the expected healthy response, not a finding confirming Cushing syndrome."
  },
  {
    stem: "A nurse is positioning a patient immediately after a thyroidectomy. What position and additional nursing action are most appropriate?",
    options: ["Semi-Fowler's position with support for the head and neck, while discouraging unnecessary talking", "Flat supine position with the head turned fully to one side", "Trendelenburg position to promote venous drainage from the surgical site", "High Fowler's position with active encouragement to talk frequently to assess voice quality"],
    correct: 0,
    rationale: "After thyroidectomy, the patient is positioned in semi-Fowler's position with support for the head and neck to reduce tension on the suture line, and talking is discouraged except for periodic voice assessment, since the surgical site is close to the vocal cords and excessive talking can increase strain and discomfort. Flat supine, Trendelenburg, and actively encouraging frequent talking are all inappropriate for this post-operative period."
  },
  {
    stem: "A patient's thyroid function tests show a low T3 and T4 with an elevated TSH. What condition do these findings support?",
    options: ["Hypothyroidism", "Hyperthyroidism", "Primary aldosteronism", "Addison disease"],
    correct: 0,
    rationale: "Low T3 and T4 with an elevated TSH reflects hypothyroidism, since the pituitary increases TSH output in an attempt to stimulate a thyroid that cannot produce adequate hormone. Hyperthyroidism would show the opposite pattern (elevated T3/T4 with suppressed TSH), and this lab pattern is unrelated to primary aldosteronism or Addison disease, which are adrenal, not thyroid, conditions."
  }
];
