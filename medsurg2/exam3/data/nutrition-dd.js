// MedSurg II Exam 3 -- Nutrition -- Deep Drill
// Scoped to the professor's focused Exam 3 review topics. 90% hard / 10% medium, no easy.
// Scenario-driven: iron/protein recognition, malnutrition discrimination, kidney disease diet
// management, TPN safety, low sodium/high fiber diet teaching, hypoglycemia, and healing nutrition.
// correct: 0 always -- engine shuffles option order at runtime.
window.QUESTIONS = [
  {
    stem: "A patient reports fatigue and is found to have tachycardia and pale nail beds. Diet history reveals minimal meat or iron-fortified food intake. Which teaching point does the nurse include when discussing iron sources?",
    options: ["Pair iron-rich foods like meat, fish, and legumes with a vitamin C source to increase absorption", "Avoid all vitamin C intake, since it competes with iron absorption", "Iron is found primarily in dairy products", "Iron absorption is unaffected by other nutrients in the meal"],
    correct: 0,
    rationale: "This presentation is consistent with iron deficiency anemia. Iron sources include meat, fish, grain, legumes, and vegetables, and vitamin C increases iron absorption, so pairing the two in teaching helps the patient get the most benefit from dietary changes."
  },
  {
    stem: "A patient following a vegan diet asks how to get a complete protein without eating meat. What is the nurse's best teaching?",
    options: ["Pair incomplete plant proteins together, such as rice with black beans, so the amino acids missing from one are supplied by the other", "Complete protein cannot be achieved without eating animal products", "Eat only one type of plant protein at each meal for best absorption", "Soy products should be avoided entirely on a vegan diet"],
    correct: 0,
    rationale: "Incomplete plant proteins can be combined to form a complete protein, such as rice and black beans or hummus and crackers. Soy is actually a plant-based complete protein and does not need to be avoided; the key teaching point is pairing complementary incomplete proteins."
  },
  {
    stem: "Two malnourished patients are compared. Patient A has a swollen abdomen and fatty liver despite adequate calorie intake. Patient B has significant muscle wasting and an emaciated appearance from inadequate calories and protein. Which conditions do these represent respectively?",
    options: ["Patient A has kwashiorkor and Patient B has marasmus", "Patient A has marasmus and Patient B has kwashiorkor", "Both patients have kwashiorkor at different stages", "Both patients have marasmus with different severity"],
    correct: 0,
    rationale: "Patient A's edema and fatty liver despite adequate calories is kwashiorkor, protein deficiency with sufficient total calorie intake. Patient B's wasting and emaciation from a deficiency of both calories and protein is marasmus. The distinguishing factor is whether total calorie intake was adequate."
  },
  {
    stem: "A critically ill patient's albumin is within normal limits, but the provider orders a prealbumin level to assess nutritional status. What is the nurse's best understanding of why?",
    options: ["Prealbumin better reflects recent nutritional changes in acutely ill patients than albumin does", "Prealbumin is easier to collect than albumin", "Albumin cannot be measured in critically ill patients", "Prealbumin and albumin measure entirely unrelated body systems"],
    correct: 0,
    rationale: "Prealbumin is specifically useful in critically ill patients to assess for malnutrition, since it reflects more recent nutritional changes than albumin. Albumin can still be measured in critically ill patients, but prealbumin gives a more current picture in this population."
  },
  {
    stem: "A patient with chronic kidney disease (stage 3) selects peanut butter crackers and a cola for a snack. What is the nurse's priority teaching concern?",
    options: ["Both foods are high in phosphorus, which should be limited to slow progression of kidney disease", "Both foods are high in potassium, which is not restricted in CKD", "Both foods are excellent choices and require no further teaching", "Both foods are high in calcium, which should be increased in CKD"],
    correct: 0,
    rationale: "Peanut butter and cola are both high in phosphorus, which is restricted in CKD (limited to 1 serving or less per day) because phosphorus restriction slows the progression of kidney disease. This is a teaching opportunity, not an appropriate snack choice for this patient."
  },
  {
    stem: "A patient with CKD asks why the provider wants protein intake limited when protein is usually considered healthy. What is the nurse's best explanation?",
    options: ["Protein metabolism produces urea as a waste product, and failing kidneys cannot clear urea efficiently, so limiting protein reduces that burden", "Protein directly raises blood pressure more than any other nutrient", "Protein restriction is only a taste preference with no physiologic basis", "Protein causes potassium levels to rise independent of kidney function"],
    correct: 0,
    rationale: "Urea is a waste by-product of protein metabolism, and urea levels rise as kidney function declines, so restricting protein intake (0.8-1.0 g/kg/day) reduces the metabolic burden on kidneys that can no longer clear waste products effectively."
  },
  {
    stem: "A patient with end-stage kidney disease is prescribed a phosphate binder. When should the nurse instruct the patient to take it?",
    options: ["With all meals and snacks", "Once daily at bedtime on an empty stomach", "Only before the largest meal of the day", "Whenever phosphorus levels are drawn and found to be elevated"],
    correct: 0,
    rationale: "Phosphate binders work by binding dietary phosphorus in the GI tract before it can be absorbed, so they must be taken with all meals and snacks to be effective -- taking them away from food would defeat their purpose."
  },
  {
    stem: "A patient in the oliguric phase of acute kidney injury has a serum potassium of 6.2 mEq/L. What is the nurse's priority concern?",
    options: ["Cardiac dysrhythmias related to hyperkalemia", "Hypocalcemia-related tetany as the primary risk", "Fluid volume deficit requiring aggressive rehydration", "Hyponatremia requiring hypertonic saline"],
    correct: 0,
    rationale: "AKI, especially in the oliguric phase, commonly causes hyperkalemia since the kidneys cannot excrete potassium, and a level of 6.2 mEq/L places the patient at risk for life-threatening cardiac dysrhythmias -- this is the priority concern requiring close cardiac monitoring, not fluid administration."
  },
  {
    stem: "A patient with nephrotic syndrome asks why the provider has not restricted protein, since protein loss is part of the diagnosis. What is the nurse's best explanation?",
    options: ["Because protein is being lost through the urine, sufficient protein intake is needed to help replace those losses, while sodium is restricted instead", "Protein is restricted the same way it is in chronic kidney disease", "Protein has no relevance to nephrotic syndrome management", "Only fat intake matters in nephrotic syndrome, not protein"],
    correct: 0,
    rationale: "Nephrotic syndrome causes protein loss through the urine, so unlike CKD, the diet calls for sufficient protein intake to help offset those losses, paired with a low sodium intake of about 2,000 mg/day rather than protein restriction."
  },
  {
    stem: "A patient with a history of calcium oxalate kidney stones asks which foods to limit. Which response is most accurate?",
    options: ["Limit rhubarb, spinach, beets, nuts, chocolate, and strawberries, and increase fluid intake to at least 2 L per day", "Limit dairy entirely and avoid all fluids to reduce urine volume", "Increase intake of high-oxalate vegetables to help flush the stone", "Limit citrus fruits only, with no fluid intake changes needed"],
    correct: 0,
    rationale: "Calcium oxalate stone prevention involves limiting high-oxalate foods such as rhubarb, spinach, beets, nuts, chocolate, and strawberries, along with excessive protein, sodium, and calcium, while increasing fluid intake to produce at least 2 L of urine per day."
  },
  {
    stem: "A nurse is hanging a new bag of TPN and notices an oily film on the surface of the solution. What should the nurse do?",
    options: ["Discard the solution and obtain a new bag rather than administering it", "Shake the bag vigorously to remix the solution before hanging", "Administer the solution as ordered since minor separation is expected", "Warm the solution to room temperature and reassess in one hour"],
    correct: 0,
    rationale: "An oily film or layer of fat on top of a TPN solution means the emulsion has separated and it should not be administered -- the solution must be discarded and a new bag obtained rather than shaken, infused anyway, or simply monitored."
  },
  {
    stem: "A patient with a documented egg allergy is ordered TPN with a lipid emulsion. What is the nurse's priority action?",
    options: ["Hold the lipid emulsion and notify the provider of the allergy concern", "Administer the lipid emulsion as ordered since the allergy is unrelated", "Premedicate with an antihistamine and proceed with the infusion", "Substitute the lipid emulsion with a double dose of dextrose without provider notice"],
    correct: 0,
    rationale: "IV lipid emulsions are egg-based and contraindicated in patients with an egg allergy, so the nurse should hold the lipid component and notify the provider rather than infusing it, premedicating around the allergy, or substituting components without an order."
  },
  {
    stem: "A patient with heart failure is choosing a lunch and picks canned tomato soup with crackers. What is the nurse's priority teaching point?",
    options: ["Canned soups are typically very high in sodium and should be limited given the heart failure sodium restriction", "This is an excellent low-sodium choice for heart failure", "Crackers are the concern, not the canned soup", "Heart failure patients have no sodium restriction once on diuretics"],
    correct: 0,
    rationale: "Canned soups are typically high in sodium, working directly against the heart failure sodium restriction (less than 3000 mg/day for mild-to-moderate CHF, less than 2000 mg/day for severe CHF), which contributes to the fluid retention heart failure patients need to avoid."
  },
  {
    stem: "A patient newly diagnosed with hypertension is being taught about the DASH diet. Which statement indicates a need for further teaching?",
    options: ["\"I can eat as much canned soup as I want since it's low in fat.\"", "\"I will choose low-fat dairy for calcium.\"", "\"I will eat more fruits and vegetables like bananas and tomatoes for potassium.\"", "\"I will try to keep my sodium under 1500 mg a day.\""],
    correct: 0,
    rationale: "Canned soup being low in fat says nothing about its sodium content, and canned soups are often very high in sodium, directly conflicting with the DASH diet's sodium goals -- this statement shows a misunderstanding and needs correction. The other statements reflect accurate DASH diet teaching."
  },
  {
    stem: "A patient with elevated LDL and a history of coronary heart disease asks how to modify cooking habits. What is the nurse's best teaching?",
    options: ["Boil, bake, or grill foods instead of frying, and use olive oil instead of butter or lard", "Continue frying foods but switch to a healthier oil", "Increase saturated fat intake to help raise HDL levels", "Cooking method does not affect cardiovascular risk, only ingredients matter"],
    correct: 0,
    rationale: "Coronary heart disease teaching includes avoiding fried foods in favor of boiling, baking, or grilling, and using olive oil instead of butter or lard -- both the cooking method and the fat source affect the saturated and trans fat content of the meal."
  },
  {
    stem: "A patient recovering from an acute diverticulitis flare is ready to advance from clear liquids. What is the most appropriate next diet order?",
    options: ["Progress toward a high-fiber, low-fat diet as tolerated", "Advance directly to a regular diet with no fiber considerations", "Remain on clear liquids indefinitely to prevent recurrence", "Advance to a high-fat, low-fiber diet"],
    correct: 0,
    rationale: "Acute diverticulitis is managed with clear liquids during the flare, then progressed to a high-fiber, low-fat diet once the acute inflammation has resolved -- the same high-fiber approach used to prevent future flares."
  },
  {
    stem: "A patient with diabetes reports a blood glucose of 58 mg/dL and feels shaky but is alert and able to swallow safely. What is the nurse's priority action?",
    options: ["Give 15-20 grams of fast-acting carbohydrate, such as glucose tablets or 4 oz of juice, and retest in 15 minutes", "Administer the patient's scheduled dose of insulin", "Encourage a large regular meal immediately", "Withhold treatment until the provider is notified"],
    correct: 0,
    rationale: "A blood glucose of 58 mg/dL is hypoglycemia (below 70 mg/dL), and the priority for a conscious patient able to swallow is 15-20 grams of fast carbohydrate, such as glucose tablets, hard candy, or juice, followed by a recheck in 15 minutes -- giving insulin would worsen the hypoglycemia."
  },
  {
    stem: "A patient using carbohydrate counting wants to know how many servings are in a meal containing 2 slices of bread and 1 cup of cooked pasta. Using standard exchanges where 1 slice of bread and 1/2 cup of pasta each equal 1 serving, how many total carbohydrate servings does this meal represent?",
    options: ["4 servings", "2 servings", "6 servings", "1 serving"],
    correct: 0,
    rationale: "Two slices of bread equal 2 servings, and 1 cup of pasta (twice the 1/2 cup reference serving) equals 2 more servings, for a total of 4 carbohydrate servings (60 grams) in this meal -- carb counting relies on totaling servings across all carb-containing foods in the meal."
  },
  {
    stem: "A cancer patient undergoing treatment has a poor appetite and is losing weight. What is the nurse's best initial teaching?",
    options: ["Eat more on days the appetite is better, and add high-calorie, high-protein additions like yogurt or peanut butter to foods already being tolerated", "Restrict intake until appetite fully normalizes", "Eat only three large meals a day at fixed times", "Avoid nutritional supplements between meals since they may reduce appetite further"],
    correct: 0,
    rationale: "For a cancer patient with fluctuating appetite, teaching focuses on eating more on better days and boosting the calorie and protein density of foods already tolerated, such as adding yogurt, cheese, or peanut butter, rather than forcing large meals or restricting intake."
  }
];
