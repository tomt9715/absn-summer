// MedSurg II FINAL EXAM REVIEW -- ATI Nutrition -- Deep Drill
// 14 questions, 90% hard / 10% medium, no easy. NEW scenarios distinct from exam3/data/nutrition-dd.js (20 Q, very
// comprehensive) and from the final simulator's ATI Nutrition questions. Fills gaps: specific vitamin deficiencies,
// LDL/HDL function, anemia distinguishing (neuro symptoms), dumping syndrome late-phase, ileostomy/lactose/IBD/GERD/
// celiac diets, dysphagia diet, AKI phase-specific fluid changes, cultural considerations.
// correct: 0 always -- engine shuffles option order at runtime.
window.QUESTIONS = [
  {
    stem: "A patient taking warfarin asks why the provider wants consistent, moderate intake of green leafy vegetables rather than avoiding them entirely. What is the nurse's best explanation?",
    options: ["Vitamin K, found in green leafy vegetables, is the antidote to warfarin, so consistent intake helps keep anticoagulation stable rather than fluctuating", "Green leafy vegetables must be avoided entirely since they contain warfarin-like compounds", "Vitamin K has no relationship to warfarin therapy and the recommendation is unrelated to anticoagulation", "Green leafy vegetables should be increased as much as possible to enhance the effect of warfarin"],
    correct: 0,
    rationale: "Vitamin K, abundant in dark green leafy vegetables, is the antidote to warfarin, so wide swings in intake can destabilize INR control; the goal is consistent, moderate intake rather than complete avoidance or maximizing intake. This helps maintain steady anticoagulation rather than unpredictable fluctuations."
  },
  {
    stem: "A nurse is teaching a patient about LDL and HDL cholesterol. Which statement by the patient indicates correct understanding?",
    options: ["\"LDL carries cholesterol out to my body's tissues where it can build up in my arteries, while HDL carries it back to my liver to be removed.\"", "\"HDL is the 'bad' cholesterol that builds up in my arteries, while LDL is protective.\"", "\"LDL and HDL perform the exact same function in the body with no meaningful difference.\"", "\"HDL carries cholesterol out to my tissues, which is why higher HDL is dangerous.\""],
    correct: 0,
    rationale: "LDL (low-density lipoprotein) carries cholesterol from the liver out to the rest of the body, where excess can build up in artery walls and contribute to atherosclerosis, while HDL (high-density lipoprotein) carries excess cholesterol from tissues back to the liver for removal, making higher HDL protective. The other statements reverse or misstate these roles."
  },
  {
    stem: "A patient who underwent gastric bypass surgery 2 hours ago after eating reports anxiety, diaphoresis, and hunger, without the cramping and diarrhea experienced shortly after the meal. What phase of dumping syndrome does the nurse recognize, and what is the underlying cause?",
    options: ["Late dumping syndrome, caused by a rapid rise in blood glucose followed by an insulin surge leading to rebound hypoglycemia", "Early dumping syndrome, caused by rapid gastric emptying of hypertonic contents into the small intestine", "A vagal reflex response unrelated to dumping syndrome", "An allergic reaction to a component of the most recent meal"],
    correct: 0,
    rationale: "Late dumping syndrome occurs 1 to 3 hours after eating and presents with anxiety, diaphoresis, and hunger caused by a rapid rise in blood glucose followed by an insulin surge that leads to rebound hypoglycemia. This differs from early dumping syndrome, which occurs 10 to 20 minutes after eating with cramping, nausea, vomiting, and vasomotor symptoms from rapid intestinal distention."
  },
  {
    stem: "A patient with a new ileostomy is being taught about food choices. Which food should the nurse advise the patient to avoid due to the risk of stomal blockage?",
    options: ["Popcorn", "Baked chicken breast", "White rice", "Scrambled eggs"],
    correct: 0,
    rationale: "Popcorn, along with nuts and raw carrots, is specifically avoided in patients with an ileostomy due to the risk of stomal blockage from poorly digested, high-fiber pieces. Baked chicken, white rice, and eggs do not carry this same specific blockage risk, though eggs are also limited separately for gas formation."
  },
  {
    stem: "A patient with lactose intolerance asks the nurse whether they must avoid all dairy products entirely. What is the nurse's most accurate response?",
    options: ["Small amounts of milk, around 4 to 6 ounces, can typically be tolerated, though high-lactose foods should be limited", "All dairy products must be completely eliminated from the diet with no exceptions", "Lactose intolerance requires only avoiding cheese, while milk and ice cream are unrestricted", "Lactose intolerance has no relationship to dairy intake and no dietary changes are needed"],
    correct: 0,
    rationale: "Patients with lactose intolerance can typically tolerate small amounts of milk, around 4 to 6 ounces, while limiting high-lactose foods such as soft cheese, ice cream, cream soups, and sour cream. Complete elimination of all dairy is not usually necessary, and cheese alone is not the only food requiring limitation."
  },
  {
    stem: "A patient with Crohn's disease is being counseled on dietary management during a period of active symptoms. What diet does the nurse anticipate will be recommended?",
    options: ["Low-residue, high-protein, high-calorie diet with vitamin and mineral supplementation", "High-fiber, high-residue diet to promote bowel motility", "Low-protein, low-calorie diet to rest the bowel completely", "A diet with no specific modifications beyond avoiding dairy"],
    correct: 0,
    rationale: "Inflammatory bowel disease, including Crohn's disease, is managed with a low-residue, high-protein, high-calorie diet along with vitamin and mineral supplementation to address malabsorption and support healing, rather than a high-fiber diet, which would increase bowel irritation, or an overly restrictive low-protein approach."
  },
  {
    stem: "A patient with GERD asks which dietary habit is most important to change to reduce symptoms. What is the nurse's best teaching?",
    options: ["Avoid lying down within 3 hours of eating and limit foods that reduce lower esophageal sphincter pressure, such as caffeine and chocolate", "Eat larger meals less frequently throughout the day to reduce total daily intake", "Increase intake of peppermint tea to soothe the esophagus after meals", "Lie flat immediately after eating to help food settle in the stomach"],
    correct: 0,
    rationale: "GERD management includes avoiding lying down within 3 hours of eating and limiting foods that reduce lower esophageal sphincter pressure, such as caffeine, chocolate, fatty foods, and alcohol; peppermint also reduces LES pressure and should be avoided, not encouraged. Lying flat after eating and large infrequent meals would both worsen reflux symptoms."
  },
  {
    stem: "A patient newly diagnosed with celiac disease asks which grain-based food is safe to eat. What is the nurse's best response?",
    options: ["Rice-based products are safe, since rice does not contain gluten", "Wheat bread is safe as long as it is consumed in small amounts", "Barley-based products are safe since barley is a distinct grain from wheat", "Rye-based products are safe as long as they are labeled 'whole grain'"],
    correct: 0,
    rationale: "Rice does not contain gluten and is a safe grain choice for patients with celiac disease, unlike wheat, rye, and barley, which all contain gluten and must be avoided regardless of preparation, quantity, or labeling claims like 'whole grain.'"
  },
  {
    stem: "A nurse is caring for a patient with dysphagia who is cleared for a modified diet. Which positioning instruction is most important for the nurse to reinforce during meals?",
    options: ["Remain upright in a high Fowler's position while eating", "Recline to a semi-reclined position to slow the swallowing process", "Lie flat with the head turned to one side during meals", "Sit at a 30-degree angle only during the final bites of the meal"],
    correct: 0,
    rationale: "Patients with dysphagia should remain upright in a high Fowler's position during meals to facilitate safe swallowing and reduce aspiration risk. Reclining, lying flat, or only sitting upright for part of the meal all increase aspiration risk rather than reducing it."
  },
  {
    stem: "A patient with acute kidney injury is in the oliguric phase. The nurse anticipates which fluid management approach during this specific phase?",
    options: ["Fluid restriction, since urine output is significantly reduced", "Liberal fluid administration to flush the kidneys and stimulate urine output", "No fluid modification is needed during the oliguric phase specifically", "Fluid restriction only if the patient also develops hyperkalemia"],
    correct: 0,
    rationale: "During the oliguric phase of AKI, fluids are restricted because urine output is significantly reduced and the kidneys cannot adequately excrete excess fluid, risking fluid overload and pulmonary edema. This restriction is a defining feature of this specific phase, not something added later; fluids are instead increased during the subsequent diuretic phase."
  },
  {
    stem: "A patient recovering from acute kidney injury enters the diuretic phase. What change in fluid management does the nurse anticipate compared to the earlier oliguric phase?",
    options: ["Increased fluid intake to match the significantly increased urine output", "Continued fluid restriction at the same level as the oliguric phase", "Complete fluid restriction until renal function fully normalizes", "No change in fluid management is needed between phases"],
    correct: 0,
    rationale: "During the diuretic phase of AKI, urine output increases significantly as the kidneys begin to recover, so fluid intake is increased to match these losses and prevent dehydration, in contrast to the fluid restriction used during the earlier oliguric phase. This represents a clear change in management between the two phases."
  },
  {
    stem: "A patient with vitamin B12 deficiency anemia and a patient with folic acid deficiency anemia both present with pallor and fatigue. What distinguishing clinical feature should the nurse expect to find only in the patient with B12 deficiency?",
    options: ["Neurologic manifestations, such as numbness in the hands and feet", "Glossitis, or inflammation of the tongue", "Fatigue disproportionate to the degree of anemia", "Pallor of the skin and mucous membranes"],
    correct: 0,
    rationale: "Vitamin B12 deficiency anemia is distinguished from folic acid deficiency anemia by the presence of neurologic manifestations, such as numbness in the hands and feet, since B12 plays a role in nerve myelin maintenance that folate does not. Glossitis, fatigue, and pallor can occur with both types of anemia and are not the distinguishing feature."
  },
  {
    stem: "A nurse caring for a Hispanic/Latino patient recalls learning about cultural food beliefs common in this population. Which concept reflects an accurate understanding the nurse should keep in mind, without assuming it applies to every individual patient?",
    options: ["Certain foods may be considered 'hot' or 'cold' and are used to provide balance for healing, and this should be explored respectfully rather than assumed", "All Hispanic and Latino patients strictly follow identical dietary practices with no individual variation", "Cultural food beliefs have no relevance to nutritional assessment or patient-centered care", "Whole grain and milk intake is typically higher in this population compared to the general population"],
    correct: 0,
    rationale: "Some patients from Hispanic/Latino backgrounds may hold beliefs that certain foods are 'hot' or 'cold' and use this framework for balance in healing, but the nurse should explore this respectfully with each individual patient rather than assuming it applies universally, since decreased whole grain and milk intake, not increased, is more commonly noted in this population and beliefs vary widely by individual."
  },
  {
    stem: "A nurse caring for an Asian American patient recalls the yin and yang framework for food balance. Which food would be classified as a 'yang' food within this belief system?",
    options: ["Fried foods", "Seaweed", "Fresh fruit", "Cold beverages"],
    correct: 0,
    rationale: "Within the yin and yang framework, fried foods, coffee, spice, and meat are classified as 'yang' foods, while seaweed, fruits and vegetables, and cold beverages are classified as 'yin' foods. The nurse should still explore individual beliefs respectfully rather than assuming every patient follows this framework."
  }
];
