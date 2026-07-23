// MedSurg II Exam 3 -- Endocrine Disorders (Ch 46) -- Knowledge Check
// Covers: pituitary gland (anterior/posterior, tumors, acromegaly, gigantism, dwarfism,
// diabetes insipidus, SIADH), thyroid gland (hypothyroidism, hyperthyroidism, thyroidectomy),
// adrenal glands (Addison disease, Cushing syndrome, primary aldosteronism).
// correct: 0 always -- engine shuffles option order at runtime.
window.QUESTIONS = [
  {
    stem: "Which hormones are secreted by the anterior pituitary gland? Select all that apply.",
    options: ["Follicle-stimulating hormone (FSH)", "Luteinizing hormone (LH)", "Prolactin (PRL)", "Adrenocorticotropic hormone (ACTH)", "Thyroid-stimulating hormone (TSH)", "Growth hormone (GH)", "Vasopressin (ADH)", "Oxytocin"],
    correct: [0, 1, 2, 3, 4, 5],
    rationale: "The anterior pituitary secretes FSH, LH, prolactin, ACTH, TSH, and growth hormone (also called somatotropin). Vasopressin (ADH) and oxytocin are stored and released by the posterior pituitary, not produced by the anterior lobe."
  },
  {
    stem: "Which two hormones are stored and released by the posterior pituitary gland?",
    options: ["Vasopressin (ADH) and oxytocin", "FSH and LH", "ACTH and TSH", "Growth hormone and prolactin"],
    correct: 0,
    rationale: "The posterior pituitary releases vasopressin (ADH) and oxytocin -- an easy way to remember it is 'PEE PEE.' The other hormone pairs listed are all anterior pituitary hormones."
  },
  {
    stem: "Total destruction of the pituitary gland removes stimulation to which three target glands?",
    options: ["The thyroid, gonads, and adrenal glands", "The thyroid, pancreas, and kidneys", "The gonads, pancreas, and parathyroid glands", "The adrenal glands, liver, and thyroid"],
    correct: 0,
    rationale: "Panhypopituitarism removes stimuli normally received by the thyroid, gonads, and adrenal glands, leading to extreme weight loss, atrophy of endocrine organs, hair loss, impotence, amenorrhea, hypometabolism, and hypoglycemia. Coma and death occur if the missing hormones are not replaced."
  },
  {
    stem: "What is true about the majority of pituitary tumors?",
    options: ["They are benign but can still cause life-threatening effects depending on location and hormone impact", "They are almost always malignant and metastasize early", "They never affect hormone production", "They are exclusively found in children"],
    correct: 0,
    rationale: "Almost all pituitary tumors are benign, but their location and effects on hormone production by target organs can still have life-threatening effects, which is why they are taken seriously despite not being cancerous."
  },
  {
    stem: "Which diagnostic tools are used to determine the presence and extent of a pituitary tumor?",
    options: ["CT and MRI scans along with assessment of visual acuity and visual fields", "Chest x-ray and pulmonary function tests", "Colonoscopy and abdominal ultrasound", "EEG and lumbar puncture only"],
    correct: 0,
    rationale: "Workup for a pituitary tumor includes history and physical exam, assessment of visual acuity and visual fields (since the optic chiasm sits near the pituitary), CT and MRI scans, and serum pituitary hormone levels."
  },
  {
    stem: "Acromegaly results from hypersecretion of growth hormone occurring during which period of life?",
    options: ["After puberty, once the growth plates have closed", "Before puberty, while growth plates are still open", "During fetal development only", "During menopause"],
    correct: 0,
    rationale: "Acromegaly is hypersecretion of GH after puberty, once the growth plates have already closed, so growth is seen as thickening of bone and soft tissue rather than an increase in height. First-choice treatment is surgical removal of the pituitary gland."
  },
  {
    stem: "Gigantism results from hypersecretion of growth hormone occurring during which period of life?",
    options: ["Childhood, prior to closure of the growth plates", "Adulthood, after growth plates have closed", "The neonatal period only", "Late adolescence, after puberty is complete"],
    correct: 0,
    rationale: "Gigantism is hypersecretion of GH in childhood, before the growth plates close, causing proportional overgrowth in all body tissue. Treatment and care are the same as for acromegaly."
  },
  {
    stem: "Dwarfism results from which pituitary hormone abnormality?",
    options: ["Hyposecretion of growth hormone during fetal development or childhood", "Hypersecretion of growth hormone during childhood", "Hyposecretion of ADH from the posterior pituitary", "Hypersecretion of ACTH from the anterior pituitary"],
    correct: 0,
    rationale: "Dwarfism results from hyposecretion of GH during fetal development or childhood, which may be congenital or result from damage to the pituitary gland. It presents with disproportionate head and extremities relative to the torso, short stature, and delayed puberty."
  },
  {
    stem: "Diabetes insipidus is caused by which hormonal abnormality?",
    options: ["Insufficient output of vasopressin (ADH) from the posterior pituitary", "Excessive output of vasopressin (ADH) from the posterior pituitary", "Insufficient output of growth hormone from the anterior pituitary", "Excessive output of aldosterone from the adrenal cortex"],
    correct: 0,
    rationale: "A low ADH level causes diabetes insipidus. Causes include head trauma, brain tumor, surgical ablation or irradiation of the pituitary, CNS infections, and failure of the renal tubules to respond to ADH."
  },
  {
    stem: "Which findings are expected in a patient with diabetes insipidus?",
    options: ["Large amounts of dilute urine, hypernatremia, and excessive thirst", "Small amounts of concentrated urine and hyponatremia", "Weight gain with fluid retention", "Elevated urine specific gravity with a normal serum sodium"],
    correct: 0,
    rationale: "DI presents with polyuria greater than 250 mL/hr, decreased urine osmolality and specific gravity, hypernatremia, and polydipsia -- patients may crave ice water in excessive amounts."
  },
  {
    stem: "Which test is used to diagnose diabetes insipidus by withholding fluids for 8 to 12 hours?",
    options: ["Fluid deprivation test", "Dexamethasone suppression test", "ACTH stimulation test", "Water intoxication test"],
    correct: 0,
    rationale: "The fluid deprivation test withholds fluids for 8 to 12 hours, or until the patient loses 3% to 5% of body weight, while plasma and urine osmolality are measured at the start and end of the test."
  },
  {
    stem: "During a fluid deprivation test, what finding is characteristic of diabetes insipidus?",
    options: ["Inability to increase urine specific gravity and osmolality despite fluid restriction", "A rapid rise in urine specific gravity above 1.030", "A drop in serum sodium below normal during the test", "A decrease in serum osmolality below normal"],
    correct: 0,
    rationale: "Because ADH is unavailable to signal water reabsorption, the kidneys cannot concentrate urine even during fluid restriction, so specific gravity and osmolality stay low. The patient continues to lose weight while serum osmolality and sodium rise."
  },
  {
    stem: "Which medication is used for long-term treatment of diabetes insipidus?",
    options: ["Desmopressin (DDAVP)", "Furosemide (Lasix)", "Propylthiouracil (PTU)", "Levothyroxine (Synthroid)"],
    correct: 0,
    rationale: "Desmopressin (DDAVP) is a synthetic vasopressin valued for its longer duration of action and fewer adverse effects than natural ADH. It is typically part of a lifelong therapeutic program."
  },
  {
    stem: "Desmopressin for diabetes insipidus is typically administered by which route?",
    options: ["Intranasally through a flexible calibrated plastic tube", "Intramuscular injection only", "Subcutaneous injection into the abdomen", "Rectal suppository"],
    correct: 0,
    rationale: "Desmopressin is usually given intranasally, with the patient spraying the solution into the nose through a flexible calibrated plastic tube."
  },
  {
    stem: "SIADH results from which hormonal abnormality?",
    options: ["Excessive secretion of vasopressin (ADH) from the pituitary gland", "Insufficient secretion of vasopressin (ADH) from the pituitary gland", "Excessive secretion of growth hormone", "Insufficient secretion of aldosterone"],
    correct: 0,
    rationale: "SIADH is excessive vasopressin secretion from the pituitary gland, causing the patient to retain fluid and develop a dilutional sodium deficiency. CNS disorders such as head injury, brain surgery, tumor, and infection can produce SIADH by directly stimulating the pituitary."
  },
  {
    stem: "What sodium abnormality develops in SIADH as a result of fluid retention?",
    options: ["Dilutional hyponatremia", "Hypernatremia", "Hyperkalemia", "Hypocalcemia"],
    correct: 0,
    rationale: "Excess ADH causes the patient to retain fluid, diluting serum sodium into dilutional hyponatremia -- also called water intoxication -- which is life-threatening if severe."
  },
  {
    stem: "Which findings are consistent with SIADH?",
    options: ["Concentrated urine, weight gain, and confusion from hyponatremia", "Dilute urine, weight loss, and excessive thirst", "Elevated serum sodium with decreased ADH levels", "Polyuria greater than 250 mL/hr"],
    correct: 0,
    rationale: "SIADH presents with very concentrated urine (increased specific gravity and osmolality), weight gain, increased ADH levels, and confusion, irritability, lethargy, or seizures from the resulting hyponatremia."
  },
  {
    stem: "Which interventions are used to manage SIADH?",
    options: ["Restricting fluid intake and administering hypertonic saline if severe hyponatremia is present", "Encouraging free water intake and administering desmopressin", "Administering unrestricted IV normal saline boluses", "Increasing sodium restriction to less than 500 mg per day"],
    correct: 0,
    rationale: "Management centers on eliminating the underlying cause if possible, restricting fluid intake, giving diuretics such as furosemide or vasopressin receptor antagonists, and administering hypertonic (3% to 5%) saline if hyponatremia is severe."
  },
  {
    stem: "For a patient with SIADH, oral fluids are typically restricted to what range per day?",
    options: ["500 to 1000 mL per day", "1500 to 2000 mL per day", "2000 to 2500 mL per day", "No restriction is needed"],
    correct: 0,
    rationale: "Nursing management of SIADH includes restricting oral fluids to 500 to 1000 mL per day, along with daily weights, close I&O monitoring, urine and blood chemistries, and neurologic assessment."
  },
  {
    stem: "Which comparison correctly distinguishes diabetes insipidus from SIADH?",
    options: ["DI causes high urine output and low ADH, while SIADH causes low urine output and high ADH", "DI causes low urine output and high ADH, while SIADH causes high urine output and low ADH", "Both conditions cause identical urine output and ADH levels", "DI causes hyponatremia while SIADH causes hypernatremia"],
    correct: 0,
    rationale: "DI is low ADH with high, dilute urine output and hypernatremia from fluid loss. SIADH is high ADH with low, concentrated urine output and hyponatremia from fluid retention -- the two conditions are essentially opposite pictures. Both can cause excessive thirst."
  },
  {
    stem: "Before scheduling thyroid diagnostic tests, what is essential for the nurse to assess?",
    options: ["Whether the patient is allergic to iodine or shellfish and has taken any iodine-containing medications", "Whether the patient has a latex allergy", "Whether the patient is fasting for 12 hours", "Whether the patient has taken NSAIDs recently"],
    correct: 0,
    rationale: "Iodine allergy (including shellfish allergy) and recent use of iodine-containing medications or agents can alter thyroid test results, so this must be assessed before tests such as radioactive iodine uptake or a thyroid scan."
  },
  {
    stem: "Hypothyroidism most commonly occurs in which population?",
    options: ["Women between the ages of 30 and 60", "Men older than 70", "Children under age 5", "Pregnant adolescents"],
    correct: 0,
    rationale: "Hypothyroidism -- suboptimal or low thyroid hormone levels resulting in decreased metabolism -- occurs most often in women between ages 30 and 60."
  },
  {
    stem: "Which findings are consistent with hypothyroidism?",
    options: ["Cold intolerance, weight gain, bradycardia, and dry skin", "Heat intolerance, weight loss, tachycardia, and warm moist skin", "Exophthalmos and elevated systolic blood pressure", "Diarrhea and increased appetite with weight loss"],
    correct: 0,
    rationale: "Hypothyroidism slows metabolic processes throughout the body: weight gain despite decreased appetite, cold intolerance, bradycardia, constipation, fatigue, depression, and dry skin with hair loss and brittle nails."
  },
  {
    stem: "Myxedema coma is a life-threatening complication of which condition?",
    options: ["Severe, untreated hypothyroidism", "Severe, untreated hyperthyroidism", "Uncontrolled diabetes insipidus", "Addisonian crisis"],
    correct: 0,
    rationale: "Myxedema coma is a rare but life-threatening complication of severe hypothyroidism, where the patient becomes hypothermic and unconscious with respiratory depression and cardiovascular collapse, carrying a high mortality rate."
  },
  {
    stem: "Which lab findings confirm a diagnosis of hypothyroidism?",
    options: ["Low serum T4 and T3 with elevated TSH", "High serum T4 and T3 with decreased TSH", "Low TSH with normal T4 and T3", "Elevated calcium with low phosphorus"],
    correct: 0,
    rationale: "In hypothyroidism, the thyroid is underproducing hormone, so T3 and T4 are low while the pituitary raises TSH in an attempt to stimulate more output -- this pattern of low T3/T4 with high TSH is the key diagnostic finding."
  },
  {
    stem: "Which medication is the mainstay treatment for hypothyroidism?",
    options: ["Levothyroxine (Synthroid)", "Propylthiouracil (PTU)", "Desmopressin (DDAVP)", "Prednisone"],
    correct: 0,
    rationale: "Levothyroxine (Synthroid) is lifelong replacement therapy for hypothyroidism. The patient needs ongoing follow-up to assess serum levels and should be monitored for signs of overdose such as palpitations, insomnia, increased appetite, and tremors."
  },
  {
    stem: "Patients taking levothyroxine should be taught to take the medication how?",
    options: ["Early in the morning on an empty stomach", "At bedtime with a full meal", "Only when symptoms are present", "With calcium supplements to increase absorption"],
    correct: 0,
    rationale: "Levothyroxine should be taken early in the morning on an empty stomach for consistent absorption, and it is lifelong therapy requiring ongoing follow-up appointments to check serum levels."
  },
  {
    stem: "What is the most common cause of hyperthyroidism?",
    options: ["Graves disease, an autoimmune disorder", "A pituitary tumor secreting excess TSH", "Iodine deficiency", "Adrenal cortex hyperplasia"],
    correct: 0,
    rationale: "Graves disease is the most common type of hyperthyroid disease. It is an autoimmune disorder that causes overstimulation of the thyroid by circulating immunoglobulins, and it affects women about eight times more than men."
  },
  {
    stem: "Which findings are consistent with hyperthyroidism?",
    options: ["Heat intolerance, tremors, tachycardia, and weight loss with increased appetite", "Cold intolerance, bradycardia, and weight gain", "Constipation and dry, coarse hair", "Subnormal body temperature and pulse rate"],
    correct: 0,
    rationale: "Hyperthyroidism speeds up metabolism: nervousness, rapid pulse, heat intolerance, tremors, flushed warm moist skin, exophthalmos, increased appetite with weight loss, elevated systolic BP, and cardiac dysrhythmias."
  },
  {
    stem: "Thyroid storm is a life-threatening complication presenting with tachycardia, hypertension, and hyperpyrexia. It occurs in which untreated condition?",
    options: ["Hyperthyroidism", "Hypothyroidism", "Diabetes insipidus", "Cushing syndrome"],
    correct: 0,
    rationale: "Thyroid storm is a life-threatening complication of untreated hyperthyroidism, with symptoms including tachycardia, hypertension, and hyperpyrexia (temperature over 106°F)."
  },
  {
    stem: "Which lab findings confirm a diagnosis of hyperthyroidism?",
    options: ["Elevated T4 and T3 with decreased TSH", "Low T4 and T3 with elevated TSH", "Normal T4 and T3 with elevated TSH", "Elevated TSH with elevated T4"],
    correct: 0,
    rationale: "In hyperthyroidism, the thyroid overproduces hormone, so T3 and T4 are elevated while TSH is suppressed through negative feedback -- the opposite lab pattern from hypothyroidism."
  },
  {
    stem: "Which medication works by blocking thyroid hormone production in hyperthyroidism?",
    options: ["Propylthiouracil (PTU)", "Levothyroxine (Synthroid)", "Desmopressin (DDAVP)", "Furosemide (Lasix)"],
    correct: 0,
    rationale: "PTU blocks thyroid hormone production. Other management options include beta blockers for tachycardia, anxiety, and tremors, iodides such as Lugol's solution to inhibit hormone release, radioactive iodine to shrink the thyroid, and thyroidectomy."
  },
  {
    stem: "Following a thyroidectomy, what is a priority nursing assessment related to airway?",
    options: ["Monitoring respirations for potential airway impairment and checking the posterior dressing for bleeding", "Monitoring bowel sounds every shift", "Assessing for peripheral edema in the lower extremities", "Checking pupillary response every hour"],
    correct: 0,
    rationale: "Post-thyroidectomy care prioritizes monitoring respirations for airway impairment and watching for bleeding or hematoma formation by checking the posterior dressing, since swelling in the neck can rapidly compromise the airway."
  },
  {
    stem: "Why must IV calcium gluconate be kept at the bedside after any thyroid surgery?",
    options: ["The parathyroid glands, which sit on the posterior thyroid, can be injured during surgery and cause acute hypocalcemia", "Thyroid surgery routinely causes hyperkalemia requiring immediate correction", "Calcium gluconate reverses the sedative effects of general anesthesia", "Thyroid hormone replacement requires concurrent calcium administration"],
    correct: 0,
    rationale: "The four parathyroid glands sit directly on the posterior surface of the thyroid and can be injured, disrupted, or removed during a thyroidectomy. Since the parathyroids secrete PTH, which raises blood calcium, damage to them can cause acute hypocalcemia within 24 to 48 hours post-op, which can progress quickly to tetany, laryngospasm, and airway compromise -- calcium gluconate must be immediately available."
  },
  {
    stem: "Which two signs indicate early hypocalcemia in a post-thyroidectomy patient?",
    options: ["Chvostek's sign and Trousseau's sign", "Homans' sign and Babinski's sign", "Kernig's sign and Brudzinski's sign", "Murphy's sign and McBurney's sign"],
    correct: 0,
    rationale: "Chvostek's sign (facial twitching when tapping the facial nerve) and Trousseau's sign (carpal spasm with a BP cuff inflated above systolic) are both early signs of hypocalcemia and should be watched for after thyroid surgery."
  },
  {
    stem: "Addison disease is best described as which condition?",
    options: ["Primary adrenal insufficiency causing insufficient cortisol production", "Excess secretion of cortisol from the adrenal cortex", "Excess secretion of aldosterone from the adrenal cortex", "Insufficient secretion of ADH from the posterior pituitary"],
    correct: 0,
    rationale: "Addison disease is primary adrenal insufficiency (PAI). The adrenal glands are damaged and cannot produce sufficient cortical hormones, primarily cortisol, and this can be caused by autoimmune disease, adrenalectomy, tumors, HIV, or abrupt cessation of long-term steroid medication."
  },
  {
    stem: "Which findings are consistent with Addison disease?",
    options: ["Hypotension, hyperkalemia, hyponatremia, and dark pigmentation of the skin", "Hypertension, hypokalemia, and moon face", "Hyperglycemia and central obesity", "Bradycardia and cold intolerance"],
    correct: 0,
    rationale: "Addison disease presents with muscle weakness, anorexia, GI symptoms, fatigue, dark pigmentation of the skin and mucosa, hypotension, low blood glucose, low serum sodium, high serum potassium, and apathy or confusion -- essentially a picture of cortisol deficiency."
  },
  {
    stem: "Addisonian crisis can be precipitated by which situation?",
    options: ["Abrupt cessation of long-term steroid medication", "Gradual tapering of steroid medication over several weeks", "Excess dietary sodium intake", "Mild seasonal allergies"],
    correct: 0,
    rationale: "Addisonian crisis develops with disease progression and can be secondary to infection, trauma, surgery, pregnancy, stress, or abrupt cessation of steroid medication, since long-term steroid use suppresses the body's own cortisol production. It presents with hypotension, cyanosis, fever, nausea, vomiting, and signs of shock."
  },
  {
    stem: "Which medications are used for lifelong replacement therapy in Addison disease?",
    options: ["Prednisone and cortisone", "Levothyroxine and liothyronine", "Desmopressin and vasopressin", "Insulin and metformin"],
    correct: 0,
    rationale: "Addison disease is managed with adrenocorticoid replacement using prednisone and cortisone, along with teaching the patient to notify the provider during times of stress since medication doses may need adjustment."
  },
  {
    stem: "What dietary recommendation is appropriate for a patient with Addison disease?",
    options: ["A high-protein, high-carbohydrate diet with increased fluids and avoidance of caffeine and alcohol", "A low-sodium, low-protein diet", "A high-potassium, low-carbohydrate diet", "A fluid-restricted diet"],
    correct: 0,
    rationale: "Patient education for Addison disease includes a high-protein, high-carbohydrate diet with increased fluids, avoiding caffeine and alcohol, along with emotional support and lifelong disease management."
  },
  {
    stem: "Cushing syndrome results from which hormonal abnormality?",
    options: ["Excessive adrenocortical activity or corticosteroid medication use", "Insufficient adrenocortical activity", "Excessive vasopressin secretion", "Insufficient growth hormone secretion"],
    correct: 0,
    rationale: "Cushing syndrome results from excessive adrenocortical activity or from corticosteroid medications, producing a picture of excess cortisol that is essentially the opposite of Addison disease."
  },
  {
    stem: "Which findings are consistent with Cushing syndrome?",
    options: ["Moon face, buffalo hump, central obesity, and hyperglycemia", "Weight loss, hypotension, and hyperpigmentation", "Bradycardia and cold intolerance", "Polyuria with dilute urine"],
    correct: 0,
    rationale: "Cushing syndrome presents with a round 'moon face,' a 'buffalo hump' of fat on the back of the neck, central-type obesity with thin extremities, fragile thin skin with striae and ecchymosis, hypertension, osteoporosis, muscle wasting, and hyperglycemia."
  },
  {
    stem: "Which electrolyte pattern is expected in Cushing syndrome?",
    options: ["Increased serum sodium and decreased serum potassium", "Decreased serum sodium and increased serum potassium", "Increased calcium and decreased phosphorus", "Decreased sodium and decreased potassium"],
    correct: 0,
    rationale: "Cushing syndrome typically shows increased serum sodium and decreased serum potassium, which is the opposite electrolyte pattern from Addison disease (low sodium, high potassium)."
  },
  {
    stem: "In a healthy person, what should happen to cortisol levels after the dexamethasone suppression test, and how does this differ in Cushing syndrome?",
    options: ["Cortisol should be suppressed in a healthy person; in Cushing syndrome, cortisol fails to suppress and stays high", "Cortisol should rise sharply in a healthy person; in Cushing syndrome, it stays flat", "Cortisol levels are unaffected by dexamethasone in either case", "Cortisol should be suppressed in Cushing syndrome but not in healthy people"],
    correct: 0,
    rationale: "Dexamethasone is a synthetic corticosteroid that should suppress the body's own cortisol production through negative feedback in a healthy person. In Cushing syndrome, cortisol fails to suppress and stays elevated, confirming that the adrenal glands (or the pituitary or tumor source) are overproducing cortisol independent of normal feedback control."
  },
  {
    stem: "What does an elevated night-time salivary cortisol level suggest?",
    options: ["Cushing syndrome, since cortisol should normally be lowest at night", "Addison disease, since cortisol should normally be highest at night", "Normal diurnal variation", "Diabetes insipidus"],
    correct: 0,
    rationale: "Cortisol normally follows a diurnal rhythm and should be at its lowest at night. In Cushing syndrome, cortisol stays elevated instead of dropping, since excess production does not follow the normal daily pattern."
  },
  {
    stem: "Which nursing interventions are priorities for a patient with Cushing syndrome?",
    options: ["Monitoring for infection, protecting from falls, and monitoring and treating hyperglycemia", "Encouraging a high-sodium, high-carbohydrate diet", "Restricting protein intake", "Applying heat to edematous extremities"],
    correct: 0,
    rationale: "Because Cushing syndrome causes fragile skin, osteoporosis, and hyperglycemia, priority nursing care includes monitoring for infection, protecting the patient from falls, and monitoring and treating hyperglycemia, along with a high-protein, high-calcium, low-carbohydrate, low-sodium diet."
  },
  {
    stem: "Primary aldosteronism results from hypersecretion of aldosterone, usually caused by what?",
    options: ["A tumor of the adrenal cortex", "A pituitary tumor secreting excess ACTH", "Autoimmune destruction of the adrenal cortex", "Chronic hyponatremia"],
    correct: 0,
    rationale: "Primary aldosteronism is the hypersecretion of aldosterone from the adrenal cortex, usually due to a tumor. Aldosterone regulates blood pressure by managing sodium and potassium levels, so excess aldosterone disrupts that balance."
  },
  {
    stem: "Which findings are consistent with primary aldosteronism?",
    options: ["Hypertension, hypokalemia, and hypernatremia", "Hypotension, hyperkalemia, and hyponatremia", "Weight loss and hyperpigmentation", "Bradycardia and cold intolerance"],
    correct: 0,
    rationale: "Primary aldosteronism presents with hypertension, headache, polyuria, polydipsia, hypokalemia, hypernatremia, and muscle weakness or numbness -- too much aldosterone drives sodium and water retention while potassium is lost."
  }
];
