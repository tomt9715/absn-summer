// MedSurg II Exam 3 -- Nutrition -- Knowledge Check
// Scoped to the professor's focused Exam 3 review topics (Med_Surg_II_Exam_3_review.docx):
// iron & protein sources, malnutrition, kidney disease nutrition, diet orders, TPN & lipid
// emulsion, laryngectomy, low sodium diet, high fiber/low fat diet, hypoglycemia, and
// increasing protein/calories for post-op healing and cancer management.
// correct: 0 always -- engine shuffles option order at runtime.
window.QUESTIONS = [
  {
    stem: "Iron is responsible for which key function in the body?",
    options: ["Oxygen distribution to hemoglobin", "Blood clotting and nerve transmission", "Bone formation and phosphorus balance", "Synthesis of thyroxine"],
    correct: 0,
    rationale: "Iron is responsible for oxygen distribution to hemoglobin, which is why iron deficiency leads to anemia and the fatigue that comes with inadequate oxygen-carrying capacity."
  },
  {
    stem: "Which foods are good dietary sources of iron?",
    options: ["Meat, fish, grain, legumes, and vegetables", "Citrus fruits and green leafy vegetables only", "Dairy products and egg yolks only", "Seafood and iodized salt"],
    correct: 0,
    rationale: "Iron is found in meat, fish, grain, legumes (beans), and vegetables. Iron-fortified foods and whole grains are also good sources for patients who need to increase intake."
  },
  {
    stem: "What nutrient increases the absorption of dietary iron?",
    options: ["Vitamin C", "Vitamin D", "Calcium", "Vitamin B12"],
    correct: 0,
    rationale: "Vitamin C increases iron absorption, which is why teaching often pairs iron-rich foods with a vitamin C source, such as having orange juice with an iron-fortified cereal."
  },
  {
    stem: "Which findings are consistent with iron deficiency anemia?",
    options: ["Fatigue, tachycardia, and pallor of the nail beds", "Glossitis and neurologic numbness of the hands and feet", "Edema and a swollen abdomen", "Hyperpigmented skin and hypotension"],
    correct: 0,
    rationale: "Iron deficiency anemia presents with fatigue, tachycardia, and pallor of the nail beds. Glossitis with neurologic manifestations is more characteristic of B12 deficiency, since iron deficiency does not involve neurologic symptoms."
  },
  {
    stem: "What distinguishes complete proteins from incomplete proteins?",
    options: ["Complete proteins come from animal sources and soy and contain all 9 essential amino acids, while incomplete proteins come from plant sources", "Complete proteins come from plant sources only, while incomplete proteins come from animal sources", "Complete proteins contain no essential amino acids, while incomplete proteins contain all of them", "There is no nutritional difference between the two"],
    correct: 0,
    rationale: "Complete proteins, from animal sources and soy, contain all 9 essential amino acids the body cannot make on its own. Incomplete proteins come from plant sources and can be missing sufficient amounts of one or more amino acids, limiting protein synthesis."
  },
  {
    stem: "How should a patient on a plant-based diet be taught to obtain complete protein?",
    options: ["Pair incomplete proteins together, such as rice with black beans or hummus with crackers", "Eat only soy products, since no other plant food provides adequate protein", "Incomplete proteins cannot be combined to form a complete protein", "Take a single amino acid supplement instead of combining foods"],
    correct: 0,
    rationale: "Incomplete plant proteins can be paired to form a complete protein, such as rice and black beans or hummus and crackers -- each food supplies the amino acids the other is missing."
  },
  {
    stem: "What is the recommended dietary allowance (RDA) for protein?",
    options: ["0.8 g/kg of body weight", "2.0 g/kg of body weight", "0.2 g/kg of body weight", "1.5 g/kg of body weight"],
    correct: 0,
    rationale: "The RDA for protein is 0.8 g/kg of body weight, though needs increase in specific conditions such as heart failure, kidney disease, or acute physiologic stress."
  },
  {
    stem: "Which foods are recommended sources of protein for a patient following a plant-based diet?",
    options: ["Hummus and beans", "White bread and pasta", "Butter and cream", "Soda and fruit juice"],
    correct: 0,
    rationale: "Protein diet recommendations include foods such as hummus and beans, which provide protein without relying on animal sources."
  },
  {
    stem: "Which condition is caused by protein deficiency with adequate calorie intake, presenting with edema and a fatty liver despite the body not appearing emaciated?",
    options: ["Kwashiorkor", "Marasmus", "Nephrotic syndrome", "Dumping syndrome"],
    correct: 0,
    rationale: "Kwashiorkor is protein malnutrition with adequate total calorie intake. Because calories are present but protein is not, the classic presentation is edema and fatty liver rather than the wasted appearance seen in calorie-deficient malnutrition."
  },
  {
    stem: "Which condition is caused by a deficiency of both calories and protein, presenting with significant muscle wasting and an emaciated appearance?",
    options: ["Marasmus", "Kwashiorkor", "Nephrotic syndrome", "Refeeding syndrome"],
    correct: 0,
    rationale: "Marasmus is a severe deficiency of both calories and protein, resulting in significant muscle wasting, loss of subcutaneous fat, and an emaciated appearance -- unlike kwashiorkor, where calories are adequate but protein is not."
  },
  {
    stem: "Which lab value is specifically useful for assessing malnutrition in critically ill patients?",
    options: ["Prealbumin", "Albumin only", "Total cholesterol", "Hemoglobin A1c"],
    correct: 0,
    rationale: "Prealbumin can be used in critically ill patients to assess for malnutrition, in addition to checking albumin as part of the overall protein assessment."
  },
  {
    stem: "For chronic kidney disease (stages 1-4), which nutrient is restricted to slow the progression of kidney disease, limiting foods such as peanut butter, dried peas and beans, cola, and chocolate?",
    options: ["Phosphorus", "Vitamin C", "Fiber", "Calcium"],
    correct: 0,
    rationale: "Phosphorus is restricted in CKD to slow disease progression, limiting foods such as peanut butter, dried peas and beans, cola, chocolate, and beer to 1 serving or less per day."
  },
  {
    stem: "Why is protein intake restricted in chronic kidney disease?",
    options: ["Urea is a waste by-product of protein metabolism, and urea levels rise as kidney disease progresses", "Protein directly raises blood pressure in kidney disease", "Protein causes phosphorus levels to drop too low", "Protein restriction is only needed to manage taste preferences"],
    correct: 0,
    rationale: "Urea is a waste by-product of protein metabolism, and urea levels rise with kidney disease, so monitoring and restricting protein intake (0.8-1.0 g/kg/day) is critical to reduce the workload on failing kidneys."
  },
  {
    stem: "In chronic kidney disease, meat intake is typically restricted to what amount per day?",
    options: ["5 to 6 oz/day for males, 4 oz for females", "10 to 12 oz/day for all patients", "1 oz/day for all patients", "There is no restriction on meat intake in CKD"],
    correct: 0,
    rationale: "As part of protein restriction in CKD, meat is typically limited to 5-6 oz/day for males and 4 oz/day for females, with dairy limited to about 1/2 cup per day."
  },
  {
    stem: "Which additional dietary restrictions are part of managing chronic kidney disease?",
    options: ["Sodium restriction to maintain blood pressure and potassium restriction to prevent hyperkalemia", "Unrestricted sodium and potassium intake", "Increased phosphorus intake to support bone health", "Increased protein intake to prevent muscle wasting"],
    correct: 0,
    rationale: "CKD management also restricts sodium to help maintain blood pressure and restricts potassium to prevent hyperkalemia, since failing kidneys cannot excrete potassium effectively."
  },
  {
    stem: "What does the diet for end-stage kidney disease (stage 5) typically include?",
    options: ["Low protein, low phosphorus, low potassium, low sodium (2-3 g/day), and fluid restriction", "High protein and unrestricted fluids", "High potassium and high phosphorus to replace dialysis losses", "No dietary restrictions once dialysis begins"],
    correct: 0,
    rationale: "End-stage kidney disease requires a difficult diet: low protein, low phosphorus, low potassium, low sodium (2-3 g/day), and fluid restriction. The National Renal Diet provides food choice lists to help patients follow it."
  },
  {
    stem: "When should phosphate binders be taken by a patient with end-stage kidney disease?",
    options: ["With all meals and snacks", "Once daily at bedtime, away from food", "Only when phosphorus levels are checked and found to be high", "On an empty stomach in the morning"],
    correct: 0,
    rationale: "Phosphate binders are taken with all meals and snacks so they can bind dietary phosphorus in the gut before it is absorbed, which is why timing with food (not away from it) is essential."
  },
  {
    stem: "Acute kidney injury progresses through which three phases?",
    options: ["Oliguric, diuretic, and recovery", "Compensated, decompensated, and refractory", "Prerenal, intrarenal, and postrenal", "Acute, subacute, and chronic"],
    correct: 0,
    rationale: "AKI progresses through the oliguric, diuretic, and recovery phases. Fluids are typically restricted during the oliguric phase and increased during the diuretic phase as urine output rebounds."
  },
  {
    stem: "Which electrolyte abnormalities are expected with acute kidney injury?",
    options: ["Hyponatremia, hyperkalemia, hypocalcemia, and hyperphosphatemia", "Hypernatremia, hypokalemia, hypercalcemia, and hypophosphatemia", "Normal electrolytes throughout all phases of AKI", "Hyperkalemia only, with no other electrolyte changes"],
    correct: 0,
    rationale: "AKI can cause hyponatremia, hyperkalemia, hypocalcemia, and hyperphosphatemia, along with fluid overload and pulmonary edema, since the kidneys can no longer regulate fluid and electrolyte balance."
  },
  {
    stem: "Nephrotic syndrome, characterized by increased excretion of protein into the urine, requires which dietary approach?",
    options: ["Sufficient protein intake with low sodium intake (2,000 mg/day)", "Severe protein restriction to reduce urinary protein loss further", "Unrestricted sodium to replace urinary losses", "A high-fat, low-carbohydrate diet"],
    correct: 0,
    rationale: "Because nephrotic syndrome causes protein loss through the urine, the diet includes sufficient protein intake (rather than restriction) along with low sodium intake (2,000 mg/day), with carbohydrates making up the majority of daily calories."
  },
  {
    stem: "For a patient with calcium oxalate kidney stones (nephrolithiasis), which dietary teaching is appropriate?",
    options: ["Increase fluid intake to produce at least 2 L of urine per day and avoid excessive oxalates such as rhubarb, spinach, and chocolate", "Restrict all fluid intake to reduce urine volume", "Increase intake of high-oxalate foods to help dissolve the stone", "Restrict protein and sodium only, with no fluid changes needed"],
    correct: 0,
    rationale: "Nephrolithiasis management includes increasing fluid intake to produce at least 2 L of urine per day and avoiding excessive protein, sodium, calcium, and oxalates such as rhubarb, spinach, beets, nuts, chocolate, and strawberries."
  },
  {
    stem: "For a patient with uric acid kidney stones, which foods should be limited?",
    options: ["Foods high in purines, such as organ meats and legumes", "Foods high in calcium, such as dairy products", "Foods high in vitamin C, such as citrus fruits", "Foods high in fiber, such as whole grains"],
    correct: 0,
    rationale: "Uric acid stones form from purine metabolism, so patients are taught to limit foods high in purines, including lean meats, organ meats, whole grains, and legumes."
  },
  {
    stem: "Which diet order describes a regular diet that has only been modified in texture?",
    options: ["Mechanical soft diet", "Clear liquid diet", "Blenderized pureed diet", "Dysphagia diet, Level 1"],
    correct: 0,
    rationale: "A mechanical soft diet is a regular diet modified only in texture, appropriate for patients who have chewing difficulty but no other dietary restrictions."
  },
  {
    stem: "A diet ordered to progress \"as tolerated\" after acute illness typically follows which sequence?",
    options: ["Clear liquids, then full liquids, then advancing toward a regular diet as the patient tolerates each step", "Regular diet immediately, then stepping down only if symptoms occur", "Pureed diet permanently, with no further advancement", "NPO status maintained indefinitely until discharge"],
    correct: 0,
    rationale: "A diet advanced \"as tolerated\" progresses in stages, typically clear liquids, then full liquids, then soft or regular foods, advancing only as the patient shows they can tolerate each step without symptoms returning."
  },
  {
    stem: "What are the three progressive levels of a dysphagia diet?",
    options: ["Pureed, mechanically altered, and advanced", "Clear liquid, full liquid, and regular", "Low residue, high residue, and normal", "Soft, bland, and low-fiber"],
    correct: 0,
    rationale: "A dysphagia diet progresses through three levels: Level 1 pureed, Level 2 mechanically altered, and Level 3 advanced, matching the patient's swallowing ability as it improves."
  },
  {
    stem: "From least to most restrictive in texture, how are liquid consistencies typically ordered?",
    options: ["Thin, nectar-like, honey-like, and spoon-thick", "Spoon-thick, honey-like, nectar-like, and thin", "Honey-like, thin, spoon-thick, and nectar-like", "All liquid consistencies are equivalent"],
    correct: 0,
    rationale: "Liquid consistency levels progress from thin (non-restrictive), to nectar-like (can be sipped through a straw), to honey-like, to spoon-thick (pudding or custard consistency) -- used to reduce aspiration risk in dysphagia."
  },
  {
    stem: "TPN can only be administered through which type of venous access, and requires what dextrose concentration?",
    options: ["A central line, using solutions greater than 10% dextrose", "A peripheral IV, using solutions less than 10% dextrose", "Either central or peripheral access with any dextrose concentration", "Subcutaneous access only"],
    correct: 0,
    rationale: "TPN can only be given through a central line because the high dextrose concentration, greater than 10%, is too irritating and hypertonic for a peripheral vein."
  },
  {
    stem: "IV lipid emulsions used with TPN are contraindicated in patients with which allergy?",
    options: ["Egg allergy", "Peanut allergy", "Latex allergy", "Shellfish allergy"],
    correct: 0,
    rationale: "IV lipid emulsions are contraindicated in patients with an egg allergy, since the emulsion is egg-based."
  },
  {
    stem: "Who is permitted to add medications such as insulin or heparin to a TPN solution?",
    options: ["Pharmacy only, as this is outside the scope of nursing practice", "The bedside nurse, using sterile technique", "Either the nurse or pharmacy, depending on facility policy", "The patient's provider at the bedside"],
    correct: 0,
    rationale: "Insulin and heparin can be added to TPN, but only by pharmacy -- this is not within nursing scope to add. Nurses should also never administer any other IV medication through a TPN or PN line or port."
  },
  {
    stem: "Which findings indicate a TPN solution should not be used and should be discarded?",
    options: ["The solution appears cracked, oily, or has a layer of fat on top", "The solution is clear and free of particulate matter", "The solution has been hanging for less than 24 hours", "The solution was refrigerated prior to administration"],
    correct: 0,
    rationale: "A TPN solution that appears cracked, oily, or has a layer of fat on top should not be used, as this indicates the emulsion has separated or is otherwise compromised."
  },
  {
    stem: "How often should TPN tubing be changed?",
    options: ["Every 24 hours", "Every 2 hours", "Once per week", "Only when visibly soiled"],
    correct: 0,
    rationale: "TPN tubing should be changed every 24 hours, and TPN must always be administered using a pump and a micron filter to reduce the risk of infection and particulate infusion."
  },
  {
    stem: "What technique should a laryngectomy patient be taught to use when eating to facilitate safe swallowing?",
    options: ["Lowering the chin down toward the chest", "Tilting the head back while swallowing", "Eating in a supine position", "Avoiding all liquids permanently"],
    correct: 0,
    rationale: "Laryngectomy patients should be taught to lower the chin down toward the chest when eating, which helps protect the airway and facilitates safer swallowing."
  },
  {
    stem: "For a patient with hypertension, the DASH diet recommends sodium intake below what amount for maximum benefit?",
    options: ["Less than 1500 mg/day", "Less than 3000 mg/day", "Less than 500 mg/day", "There is no specific sodium target for maximum benefit"],
    correct: 0,
    rationale: "The DASH diet for hypertension recommends less than 1500 mg/day of sodium for maximum benefit, along with avoiding canned soups, sauces, chips, and processed foods."
  },
  {
    stem: "Besides limiting sodium, what else does the DASH diet emphasize for a patient with hypertension?",
    options: ["Low-fat dairy for calcium and high-potassium fruits and vegetables such as apricots, bananas, tomatoes, and potatoes", "High-fat dairy and low-potassium foods", "Unlimited processed and canned foods as long as they are low in fat", "Eliminating all fruits and vegetables"],
    correct: 0,
    rationale: "The DASH diet is a low-sodium, high-potassium, high-calcium diet -- it includes low-fat dairy for calcium and emphasizes fruits and vegetables high in potassium, such as apricots, bananas, tomatoes, and potatoes."
  },
  {
    stem: "For a patient with heart failure, sodium is typically restricted to what range depending on severity?",
    options: ["Less than 3000 mg/day for mild-to-moderate CHF and less than 2000 mg/day for severe CHF", "Less than 500 mg/day regardless of severity", "No sodium restriction is needed in heart failure", "Less than 5000 mg/day for all severities"],
    correct: 0,
    rationale: "Heart failure causes excess sodium and fluid retention, so sodium is restricted to less than 3000 mg/day for mild-to-moderate CHF and less than 2000 mg/day for severe CHF, often alongside a fluid restriction of about 2 L/day."
  },
  {
    stem: "Why is protein intake often increased (to about 1.12 g/kg) in a patient with heart failure, along with small, frequent meals?",
    options: ["To support nutritional status and reduce the metabolic burden of large meals on a compromised heart", "To help the kidneys excrete more sodium", "Protein directly lowers blood pressure in heart failure", "To replace protein lost through diuretic-induced diarrhea"],
    correct: 0,
    rationale: "Heart failure patients often need increased protein intake to support nutritional status, and small, frequent meals reduce the metabolic and circulatory demand of digesting large meals, which can be taxing on a compromised heart."
  },
  {
    stem: "For a patient with elevated LDL and coronary heart disease risk, which dietary teaching is appropriate?",
    options: ["Trim fat from meats, avoid frying foods, choose low-fat dairy, and increase fiber and omega-3 fatty acids", "Increase saturated fat intake to help raise HDL", "Fry foods instead of baking to preserve nutrients", "Eliminate all dietary fat, including omega-3 sources"],
    correct: 0,
    rationale: "Coronary heart disease teaching includes trimming fat from meats, avoiding fried foods in favor of boiling, baking, or grilling, choosing low-fat dairy, and increasing fiber and omega-3 fatty acids from sources like fish, walnuts, and flaxseed."
  },
  {
    stem: "What is the recommended dietary cholesterol limit for a patient managing coronary heart disease risk?",
    options: ["Less than 200 mg", "Less than 1000 mg", "Less than 50 mg", "There is no recommended limit"],
    correct: 0,
    rationale: "Coronary heart disease teaching recommends limiting dietary cholesterol to less than 200 mg, along with limiting trans fats and saturated fats."
  },
  {
    stem: "How does a high-fiber diet help prevent diverticulosis and diverticulitis?",
    options: ["It produces stools that are more easily passed, which decreases pressure within the colon", "It increases colon pressure to help move stool along faster", "It has no effect on colon pressure or stool consistency", "It reduces the need for adequate fluid intake"],
    correct: 0,
    rationale: "A high-fiber diet prevents diverticulosis and diverticulitis by producing stools that are easily passed, which decreases the pressure within the colon that contributes to diverticula formation."
  },
  {
    stem: "During an acute diverticulitis flare, how is the diet typically progressed?",
    options: ["Clear liquids initially, then progressing to a high-fiber, low-fat diet", "A high-fiber diet immediately, without any liquid phase", "A high-fat diet to provide concentrated calories during the flare", "No dietary changes are needed during an acute flare"],
    correct: 0,
    rationale: "Acute diverticulitis is managed with clear liquids initially to rest the bowel, then progressing to a high-fiber, low-fat diet once the acute inflammation has resolved."
  },
  {
    stem: "Hypoglycemia is defined as a blood glucose below what value?",
    options: ["70 mg/dL", "100 mg/dL", "50 mg/dL", "140 mg/dL"],
    correct: 0,
    rationale: "Hypoglycemia is defined as a blood glucose below 70 mg/dL, which requires prompt treatment to prevent progression to more severe neurologic symptoms."
  },
  {
    stem: "What is the appropriate initial treatment for a conscious patient with hypoglycemia?",
    options: ["2-3 glucose tablets, 6-10 hard candies, or 1/2 cup (4 oz) of juice or regular soda, then retest in 15 minutes", "A full meal with a large glass of water", "Nothing by mouth until a provider is notified", "1 cup of diet soda to avoid raising blood glucose too much"],
    correct: 0,
    rationale: "Treatment for hypoglycemia in a conscious patient includes 2-3 glucose tablets, 6-10 hard candies, or 1/2 cup (4 oz) of juice or regular soda, with blood glucose retested in 15 minutes and treatment repeated if still low -- diet soda would not raise glucose since it lacks sugar."
  },
  {
    stem: "For a patient with diabetes mellitus, carbohydrates should make up what percentage of total daily caloric intake?",
    options: ["45% to 65%", "10% to 20%", "80% to 90%", "There is no target percentage for carbohydrates"],
    correct: 0,
    rationale: "Diabetes diet teaching recommends that carbohydrates make up 45% to 65% of total daily caloric intake, with an emphasis on limiting simple carbs (refined grains and sugars) in favor of more complex sources."
  },
  {
    stem: "For a patient with diabetes, which type of fat is emphasized in dietary teaching?",
    options: ["Polyunsaturated fats found in fish", "Saturated fats found in red meat", "Trans fats found in fried foods", "There is no specific fat recommendation for diabetes"],
    correct: 0,
    rationale: "Diabetes diet teaching emphasizes polyunsaturated fats found in fish, along with promoting fiber intake, choosing protein sources like meats, eggs, fish, nuts, beans, and soy, and limiting sodium to less than 2300 mg/day."
  },
  {
    stem: "In carbohydrate counting for diabetes management, how many grams of carbohydrate equal one serving?",
    options: ["15 grams", "5 grams", "30 grams", "50 grams"],
    correct: 0,
    rationale: "In carbohydrate counting, 1 serving equals 15 grams of carbohydrate. Using exchange lists, a patient can choose foods they like as long as the carb count per serving stays consistent, such as 1 slice of bread, 1/2 cup of cooked pasta, or 3 cups of raw vegetables."
  },
  {
    stem: "For a patient with cancer or an immunosuppressive disorder who has a poor appetite, what dietary strategy is recommended?",
    options: ["Eat more on days when feeling better, and consume high-protein, high-calorie nutritional supplements between meals", "Restrict calories until appetite fully returns", "Eat only when hungry and avoid supplements between meals", "Limit protein intake to reduce the burden on digestion"],
    correct: 0,
    rationale: "Patients with cancer or immunosuppressive disorders are taught to eat more on days when they feel better and to use high-protein, high-calorie nutritional supplements between meals to maintain intake despite a fluctuating appetite."
  },
  {
    stem: "Which practical strategies help increase protein and calorie intake for a patient recovering from surgery or managing cancer treatment?",
    options: ["Adding milk, cheese, yogurt, or ice cream to dishes, and topping fruit with yogurt or peanut butter", "Switching to skim milk and fat-free toppings", "Reducing meal frequency to conserve energy", "Avoiding dairy products entirely to reduce calorie density"],
    correct: 0,
    rationale: "Simple ways to boost protein and calories include adding milk, cheese, yogurt, or ice cream to dishes, and topping fruit with yogurt or peanut butter -- small additions that increase nutrient density without requiring the patient to eat significantly more volume."
  },
  {
    stem: "For a patient with HIV wasting syndrome, what dietary approach is recommended?",
    options: ["Small, frequent meals made up of high-protein, high-calorie, nutrient-dense foods", "Large infrequent meals to reduce mealtime fatigue", "A low-protein, low-calorie diet to reduce GI burden", "Fluid restriction to manage weight loss"],
    correct: 0,
    rationale: "HIV wasting syndrome is managed with small, frequent meals made up of high-protein, high-calorie, nutrient-dense foods, similar to the approach used for other patients with significantly increased nutritional needs and reduced appetite."
  }
];
