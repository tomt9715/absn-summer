// MedSurg II FINAL EXAM REVIEW -- Kidney Disorders (Ch 48) -- Deep Drill
// 14 questions, 90% hard / 10% medium, no easy. NEW scenarios distinct from exam2/data/kidney-dd.js (25 Q, very
// comprehensive) and from the final simulator's Ch48 questions (AVF bruit/thrill, antihypertensive-before-dialysis).
// Fills gaps: AVF maturation, bone disease, ESKD hypertension mechanism, pruritus, nephrotic hyperlipidemia/ACE-I,
// chronic glomerulonephritis presentation, transplant specifics, urine volume classification, CKD risk ranking, hormones.
// correct: 0 always -- engine shuffles option order at runtime.
window.QUESTIONS = [
  {
    stem: "A patient just had an arteriovenous fistula (AVF) surgically created in the forearm and asks the nurse when it can be used for dialysis. What is the nurse's best response?",
    options: ["The fistula typically needs 2 to 3 months to mature before it can be safely used", "The fistula can be used within 24 to 48 hours once swelling resolves", "The fistula must be used within 1 week or it will need to be surgically revised", "The fistula can be used immediately since it does not require a maturation period"],
    correct: 0,
    rationale: "An arteriovenous fistula requires approximately 2 to 3 months to mature, allowing the vein to thicken and strengthen in response to arterial blood flow, before it can be safely accessed for dialysis. Using it too early risks failure of the access site."
  },
  {
    stem: "A patient with end-stage kidney disease has a phosphorus level of 7.2 mg/dL and a corrected calcium level of 7.8 mg/dL. What complication does the nurse recognize this patient is at risk for?",
    options: ["Renal bone disease and vascular calcification", "Acute glomerulonephritis", "Nephrotic syndrome", "Postrenal acute kidney injury"],
    correct: 0,
    rationale: "Retained phosphorus, low serum calcium, and abnormal vitamin D metabolism in ESKD lead to renal bone disease and metastatic and vascular calcifications. Acute glomerulonephritis, nephrotic syndrome, and postrenal AKI are distinct conditions not driven by this specific phosphorus and calcium pattern."
  },
  {
    stem: "A nursing student asks why patients with end-stage kidney disease commonly develop hypertension even without a primary cardiac problem. What is the nurse's best explanation?",
    options: ["Sodium and water retention combined with malfunction of the renin-angiotensin-aldosterone system both contribute", "Hypertension in ESKD is solely caused by increased erythropoietin production", "Hypertension in ESKD occurs only in patients who are noncompliant with dialysis", "Hypertension in ESKD is unrelated to fluid balance and is a separate, unrelated diagnosis"],
    correct: 0,
    rationale: "In ESKD, the kidneys retain sodium and water, and the renin-angiotensin-aldosterone system becomes dysregulated, both of which drive chronic hypertension independent of a primary cardiac problem. This is not related to erythropoietin production or solely to dialysis noncompliance."
  },
  {
    stem: "A patient on maintenance hemodialysis reports severe itching and the nurse notes excoriated areas on the arms from scratching. What is the most appropriate nursing intervention?",
    options: ["Encourage regular skin moisturizing, keep the skin clean, and trim the patient's nails short", "Apply topical corticosteroid cream to all affected areas without provider order", "Restrict the patient's fluid intake further to reduce the itching", "Reassure the patient that pruritus is unrelated to their kidney disease"],
    correct: 0,
    rationale: "Pruritus is a common and uncomfortable complication in dialysis patients related to uremia and mineral imbalances. Appropriate nursing management includes regular skin moisturizing, keeping skin clean, and trimming nails short to reduce the risk of skin breakdown from scratching. Applying medication without an order and dismissing the symptom are both inappropriate."
  },
  {
    stem: "A patient with nephrotic syndrome has a fasting lipid panel showing significantly elevated LDL cholesterol. What long-term complication is this patient at increased risk for as a result?",
    options: ["Accelerated atherosclerosis", "Acute glomerulonephritis", "Postrenal obstruction", "Polycystic kidney disease"],
    correct: 0,
    rationale: "Nephrotic syndrome causes hyperlipidemia, including elevated LDL cholesterol, which places the patient at increased risk for accelerated atherosclerosis over time. This complication is unrelated to glomerulonephritis, postrenal obstruction, or polycystic kidney disease, which have separate causes."
  },
  {
    stem: "A patient with nephrotic syndrome and significant proteinuria is started on an ACE inhibitor even though their blood pressure is only mildly elevated. What is the primary rationale for this medication in this context?",
    options: ["ACE inhibitors reduce proteinuria in addition to their blood pressure effects", "ACE inhibitors are given solely to treat the hyperlipidemia associated with nephrotic syndrome", "ACE inhibitors are used to directly replace the albumin lost in the urine", "ACE inhibitors are given only to prevent thromboembolism in nephrotic syndrome"],
    correct: 0,
    rationale: "ACE inhibitors are used in nephrotic syndrome specifically to help reduce proteinuria, in addition to any blood pressure-lowering effect, making them useful even when hypertension is only mild. They do not treat hyperlipidemia directly, replace lost albumin, or prevent thromboembolism."
  },
  {
    stem: "A patient with long-standing kidney disease presents with yellow-gray skin pigmentation, poor nutritional status, periorbital edema, and new confusion. Labs show significantly elevated BUN and creatinine. What condition does the nurse suspect?",
    options: ["Chronic glomerulonephritis", "Acute postrenal AKI", "Nephrotic syndrome from minimal change disease", "Polycystic kidney disease with early cyst formation"],
    correct: 0,
    rationale: "Yellow-gray skin pigmentation, poor nutritional status, edema, and confusion alongside elevated BUN and creatinine are characteristic of advanced chronic glomerulonephritis, which some patients may have with no symptoms for years until this presentation develops. This constellation of findings does not fit acute postrenal AKI, nephrotic syndrome alone, or early PKD."
  },
  {
    stem: "A patient with end-stage kidney disease is discussing treatment options with the nurse and asks about the cost difference between long-term dialysis and kidney transplantation. What is the nurse's best response?",
    options: ["Maintaining a successful transplant typically costs about one-third the cost of ongoing dialysis", "Transplantation is significantly more expensive than dialysis over the long term", "The cost of dialysis and transplantation are approximately equal over a patient's lifetime", "Cost should not be considered when choosing between treatment options"],
    correct: 0,
    rationale: "Maintaining a successful kidney transplant costs approximately one-third the cost of maintaining a patient on long-term dialysis, which is an important consideration the nurse can accurately share as part of patient education, while transplantation remains an elective rather than emergency procedure. Cost is a legitimate and relevant factor for patients to weigh."
  },
  {
    stem: "A patient is 2 days post-kidney transplant. What nursing intervention is most important for preventing deep vein thrombosis (DVT) during this recovery period?",
    options: ["Encourage leg exercises and early ambulation", "Maintain strict bed rest for the first week to protect the surgical site", "Apply ice packs to the lower extremities every 4 hours", "Restrict oral fluid intake to reduce venous pressure"],
    correct: 0,
    rationale: "Encouraging leg exercises and early ambulation is the key nursing intervention to prevent DVT, a known postoperative complication after kidney transplantation. Strict bed rest would increase DVT risk rather than reduce it, and ice packs and fluid restriction do not address venous stasis prevention."
  },
  {
    stem: "A patient with a preoperative kidney infection is scheduled for nephrectomy and the provider orders a broad-spectrum antibiotic to prevent bacteremia. What is an important nursing consideration regarding this order?",
    options: ["Many antibiotics are nephrotoxic and must be given with extreme care in a patient with kidney disease", "Antibiotics are contraindicated entirely in any patient scheduled for kidney surgery", "The antibiotic should be given at full standard dosing without any special monitoring", "Antibiotic administration should be delayed until after the surgical procedure is complete"],
    correct: 0,
    rationale: "Many antibiotics are nephrotoxic, so when treating a preoperative kidney infection with antimicrobials, the nurse understands these medications must be given with extreme care in a patient with compromised kidney function, often requiring dose adjustment and close monitoring. Antibiotics are not contraindicated outright, and treating the infection before surgery, not after, is standard to prevent bacteremia."
  },
  {
    stem: "A 70 kg patient's urine output over the last hour is measured at 25 mL. How should the nurse classify this finding?",
    options: ["Oliguria", "Nonoliguria", "Anuria", "Normal urine output requiring no further classification"],
    correct: 0,
    rationale: "Oliguria is defined as urine output less than 0.5 mL/kg/hr, which for this 70 kg patient would be less than 35 mL/hr. An hourly output of 25 mL falls below this threshold and is classified as oliguria. Nonoliguria refers to a 24-hour output greater than 800 mL, and anuria refers to a 24-hour output less than 50 mL, neither of which applies to this single hourly measurement."
  },
  {
    stem: "A patient develops prerenal acute kidney injury from severe dehydration. The provider aggressively corrects the fluid deficit within hours of onset. What does the nurse anticipate regarding the patient's renal function?",
    options: ["Renal function may fully reverse since prerenal causes are often reversible if corrected before permanent damage occurs", "Renal function will not improve regardless of how quickly the underlying cause is treated", "The patient will require permanent dialysis regardless of the timing of fluid correction", "Renal function can only improve if the patient also receives a nephrotoxic medication is discontinued"],
    correct: 0,
    rationale: "Prerenal causes of AKI, such as hypovolemia, are often reversible if the underlying condition is identified and corrected promptly before the kidneys sustain permanent damage. This is a key distinguishing feature of prerenal AKI compared to intrarenal injury, where actual tissue damage has already occurred and may not fully reverse."
  },
  {
    stem: "A patient newly diagnosed with chronic kidney disease asks the nurse what condition most commonly leads to this diagnosis. What is the nurse's best response?",
    options: ["Diabetes is the leading cause of chronic kidney disease, followed by hypertension", "Hypertension is the leading cause of chronic kidney disease in nearly all patients", "Polycystic kidney disease is the most common cause of chronic kidney disease", "Glomerulonephritis is responsible for the majority of chronic kidney disease cases"],
    correct: 0,
    rationale: "Diabetes is the primary cause of chronic kidney disease, with hypertension as the second leading cause, followed by glomerulonephritis and pyelonephritis, then polycystic or hereditary disorders, and finally renal cancers. Hypertension, PKD, and glomerulonephritis are all important but are not the leading cause."
  },
  {
    stem: "A patient with advanced chronic kidney disease develops worsening fatigue and pale mucous membranes. The nurse understands this is related to the kidney's diminished ability to perform which specific function?",
    options: ["Production of erythropoietin, which stimulates red blood cell production", "Activation of vitamin D for calcium metabolism", "Regulation of blood pressure through the renin-angiotensin system", "Excretion of nitrogenous waste products"],
    correct: 0,
    rationale: "The kidneys normally produce erythropoietin, a hormone that stimulates red blood cell production in the bone marrow; when kidney function declines, erythropoietin production drops, leading to anemia with fatigue and pale mucous membranes. Vitamin D activation, blood pressure regulation, and waste excretion are also kidney functions but do not directly explain this specific anemia presentation."
  }
];
