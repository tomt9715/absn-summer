// MedSurg II Exam 2 Simulator — all-new questions, distinct from topic KC/DD banks.
// Matches the professor's exam blueprint exactly (no random subsampling):
// Ch.11 Shock/Sepsis/MODS (12, incl. 2 SATA), Ch.48 Kidney Disorders (12, incl. 1 SATA),
// Ch.57 Burns Management (12), Ch.43 Hepatic Disorders (7), Ch.44 Biliary Disorders (7)
window.QUESTIONS = [

  // ===== CHAPTER 11: SHOCK, SEPSIS, AND MULTI-ORGAN DYSFUNCTION SYNDROME (12, incl. 2 SATA) =====
  {
    stem: "A nurse is caring for four patients in the emergency department. Which patient should the nurse assess first?",
    options: ["A patient with a BP of 82/48, HR 132, and cool, clammy skin", "A patient with a BP of 128/76, HR 88, and warm, dry skin", "A patient with a BP of 118/70, HR 92, and mild anxiety", "A patient with a BP of 134/82, HR 78, and a 2-day-old surgical incision"],
    correct: 0,
    rationale: "The patient with hypotension, tachycardia, and cool, clammy skin shows signs of compensatory shock and requires immediate assessment to identify the type of shock and intervene before progression to the decompensated stage. The other patients have stable or near-normal vital signs."
  },
  {
    stem: "A patient in cardiogenic shock has a BP of 84/52, HR 122, jugular venous distension, and bilateral crackles. The provider orders a 1-liter normal saline bolus. What is the nurse's priority action?",
    options: ["Question the order and clarify with the provider, since aggressive fluids can worsen cardiogenic shock", "Administer the bolus as ordered over 15 minutes", "Administer the bolus but hold all other interventions", "Refuse to administer any IV fluids to this patient under any circumstance"],
    correct: 0,
    rationale: "Aggressive fluid administration is contraindicated as first-line treatment in cardiogenic shock, since these patients already have volume overload behind the failing pump, evidenced by jugular venous distension and crackles. The nurse should question the order and clarify with the provider before administering a large fluid bolus."
  },
  {
    stem: "A trauma patient with a T6 spinal cord injury has a BP of 76/40, HR 46, and warm, flushed skin below the level of injury. Which type of shock does the nurse recognize, and what distinguishes it from other shock types?",
    options: ["Neurogenic shock; bradycardia distinguishes it, since all other shock types present with tachycardia", "Hypovolemic shock; tachycardia distinguishes it from all other types", "Septic shock; fever distinguishes it from all other types", "Cardiogenic shock; jugular venous distension distinguishes it from all other types"],
    correct: 0,
    rationale: "Neurogenic shock is uniquely characterized by bradycardia, since loss of sympathetic tone removes the normal compensatory tachycardic response. Warm, flushed skin below the level of injury and hypotension complete the classic triad. All other shock types present with tachycardia as a compensatory mechanism."
  },
  {
    stem: "A patient receiving IV antibiotics develops sudden onset of facial swelling, audible wheezing, and a BP of 70/40. What is the nurse's priority action?",
    options: ["Administer epinephrine intramuscularly immediately", "Administer diphenhydramine IV and reassess in 10 minutes", "Stop the antibiotic infusion and notify the provider before giving any medication", "Apply oxygen and wait for the provider to arrive before treating"],
    correct: 0,
    rationale: "Anaphylactic shock requires immediate intramuscular epinephrine as the first-line, life-saving treatment. This should not be delayed for antihistamines, corticosteroids, or waiting for the provider to arrive at the bedside, since anaphylaxis can rapidly progress to airway obstruction and cardiovascular collapse."
  },
  {
    stem: "A patient on a vasopressor drip for septic shock has a MAP of 61 mmHg. What is the nurse's priority action?",
    options: ["Titrate the vasopressor upward per protocol to achieve a MAP of at least 65 mmHg", "Decrease the vasopressor rate since the MAP is close to normal", "Discontinue the vasopressor and switch to an IV fluid bolus only", "Take no action since a MAP of 61 mmHg is within an acceptable range"],
    correct: 0,
    rationale: "A MAP below 65 mmHg indicates inadequate perfusion pressure to vital organs. The nurse titrates the vasopressor upward per protocol to achieve the target MAP of at least 65 mmHg, which is the threshold required to sustain adequate organ perfusion."
  },
  {
    stem: "A nurse is caring for a patient receiving a norepinephrine infusion for septic shock. Which nursing actions are appropriate?",
    options: ["Administer the infusion through a central venous line", "Monitor vital signs at least every 15 minutes until the patient is stable", "Titrate the drip rate based on the prescribed MAP target and the patient's response", "Target a mean arterial pressure (MAP) of at least 65 mmHg", "Administer the infusion through a peripheral IV if no central line is available", "Discontinue the infusion abruptly once the patient's blood pressure normalizes"],
    correct: [0, 1, 2, 3],
    rationale: "Vasopressors such as norepinephrine must be given through a central line due to the risk of severe tissue necrosis from extravasation through a peripheral IV. Vital signs are monitored at least every 15 minutes until stable, the nurse titrates the drip based on the prescribed MAP target of at least 65 mmHg, and the infusion is always weaned gradually rather than stopped abruptly, since abrupt discontinuation can cause rebound hypotension."
  },
  {
    stem: "A patient with a 3-day history of vomiting and diarrhea presents with a HR of 124, orthostatic hypotension, and dry mucous membranes. What is the priority intervention?",
    options: ["Administer IV crystalloid fluids to restore intravascular volume", "Administer a vasopressor to increase blood pressure", "Restrict oral and IV fluids until electrolytes are corrected", "Position the patient in high Fowler's position"],
    correct: 0,
    rationale: "This presentation reflects hypovolemic shock from GI fluid losses. The priority intervention is IV crystalloid fluid administration to restore intravascular volume, which addresses the underlying cause of the hypotension and tachycardia rather than masking it with vasopressors."
  },
  {
    stem: "Which organ system most commonly fails first in a patient progressing to multi-organ dysfunction syndrome (MODS), and what is the underlying mechanism?",
    options: ["The lungs, presenting as acute respiratory distress syndrome (ARDS) driven by systemic inflammation and microvascular injury", "The kidneys, presenting as anuria driven exclusively by direct nephrotoxic injury", "The liver, presenting as fulminant hepatic failure driven by viral infection", "The heart, presenting as cardiogenic shock driven by coronary artery occlusion"],
    correct: 0,
    rationale: "The lungs typically fail first in MODS, presenting as acute respiratory distress syndrome (ARDS). This is driven by the systemic inflammatory response, cytokine release, and endothelial damage that causes microvascular coagulopathy and ischemia across distant organs."
  },
  {
    stem: "A nurse is comparing the hemodynamic profile of two patients in shock. Patient A has jugular venous distension and bilateral crackles. Patient B has flat neck veins with no crackles. Which type of shock does each patient most likely have?",
    options: ["Patient A has cardiogenic shock; Patient B has hypovolemic shock", "Patient A has hypovolemic shock; Patient B has cardiogenic shock", "Patient A has septic shock; Patient B has neurogenic shock", "Patient A has anaphylactic shock; Patient B has cardiogenic shock"],
    correct: 0,
    rationale: "Cardiogenic shock presents with jugular venous distension and crackles because fluid backs up behind the failing pump. Hypovolemic shock presents with flat neck veins and no crackles because there is an actual volume deficit, not volume overload."
  },
  {
    stem: "A patient in shock has a lactate of 7.2 mmol/L on admission. Two hours later, after fluid resuscitation, the lactate is 7.0 mmol/L. How should the nurse interpret this trend?",
    options: ["Minimal clearance; the patient remains in significant shock and resuscitation should continue with close monitoring", "Significant improvement; the patient is ready to be weaned off all support", "A normal variation that requires no further action", "A laboratory error, since lactate should normalize within an hour of treatment"],
    correct: 0,
    rationale: "A lactate drop from 7.2 to 7.0 mmol/L represents minimal clearance, far from the goal of less than 2 mmol/L. This trend indicates ongoing tissue hypoperfusion despite treatment, and the nurse should communicate this finding to the provider and continue aggressive resuscitation with close monitoring."
  },
  {
    stem: "A patient with septic shock who has been hospitalized for 4 days now has a urine output of 0.3 mL/kg/hr, a creatinine that has doubled from baseline, and new-onset confusion. Which findings support the nurse's recognition that this patient is developing multi-organ dysfunction syndrome (MODS)?",
    options: ["Urine output of 0.3 mL/kg/hr", "Creatinine doubled from baseline", "New-onset confusion", "Declining PaO2/FiO2 ratio noted on the most recent ABG", "Stable platelet count within normal limits", "Urine output that has improved over the last 4 hours"],
    correct: [0, 1, 2, 3],
    rationale: "Oliguria, a doubling of creatinine, new confusion, and a declining PaO2/FiO2 ratio each reflect dysfunction in a separate organ system, renal, renal, central nervous system, and pulmonary respectively, meeting the definition of MODS as altered function in two or more organ systems. A stable platelet count and improving urine output would not support this finding."
  },
  {
    stem: "A patient with septic shock has been on a vasopressor for 72 hours. The MAP has been above 65 mmHg for the past 8 hours and lactate has normalized. The provider orders the vasopressor to be weaned. What is the correct nursing approach?",
    options: ["Wean the vasopressor gradually while closely monitoring the MAP for any drop below 65 mmHg", "Stop the vasopressor immediately since the lactate has normalized", "Continue the current vasopressor dose for another 48 hours before considering a wean", "Increase the IV fluid rate as the sole method of weaning the vasopressor"],
    correct: 0,
    rationale: "Vasopressors should always be weaned gradually rather than stopped abruptly, since sudden discontinuation can cause severe rebound hypotension. The nurse monitors the MAP closely throughout the wean to ensure it remains at or above 65 mmHg."
  },

  // ===== CHAPTER 48: KIDNEY DISORDERS (12, incl. 1 SATA) =====
  {
    stem: "A patient's baseline creatinine is 0.8 mg/dL. A repeat lab shows a creatinine of 1.3 mg/dL. Does this meet the diagnostic criterion for acute kidney injury (AKI), and why?",
    options: ["Yes, this represents a 62.5% increase, which exceeds the 50% threshold that defines AKI", "No, this represents only a 0.5 mg/dL absolute increase, which is below the diagnostic threshold", "Yes, any increase in creatinine above 1.0 mg/dL automatically meets the criterion for AKI", "No, AKI can only be diagnosed when creatinine exceeds 2.0 mg/dL regardless of baseline"],
    correct: 0,
    rationale: "The diagnostic criterion for AKI is a 50% or greater increase in serum creatinine above baseline. A rise from 0.8 to 1.3 mg/dL represents a 62.5% increase, which meets this threshold, confirming a diagnosis of AKI even though the absolute value remains below 2.0 mg/dL."
  },
  {
    stem: "A trauma patient has been hypotensive following blood loss, with urine output dropping to 18 mL/hr and a rising BUN and creatinine. Which category of acute kidney injury (AKI) does the nurse recognize, and what is the priority intervention?",
    options: ["Prerenal AKI; restore intravascular volume and blood pressure", "Intrarenal AKI; administer a loop diuretic", "Postrenal AKI; insert a urinary catheter to relieve obstruction", "Chronic kidney disease; schedule outpatient nephrology follow-up"],
    correct: 0,
    rationale: "Hypotension from blood loss reduces renal perfusion, causing prerenal AKI, the most common category. The priority intervention is restoring intravascular volume and blood pressure to reverse the hypoperfusion before the injury progresses to intrarenal damage."
  },
  {
    stem: "A patient received IV contrast dye 3 days ago for a cardiac catheterization and now has a rising creatinine with no history of hypotension or obstruction. Which category of acute kidney injury (AKI) does the nurse suspect?",
    options: ["Intrarenal AKI from acute tubular necrosis caused by the nephrotoxic contrast agent", "Prerenal AKI from inadequate renal perfusion during the procedure", "Postrenal AKI from ureteral obstruction caused by contrast crystallization", "Chronic kidney disease unrelated to the recent procedure"],
    correct: 0,
    rationale: "Nephrotoxic contrast dye causes direct damage to the kidney tubules, known as acute tubular necrosis, an intrarenal cause of AKI. With no history of hypotension or obstruction, intrarenal injury is the most likely category in this scenario."
  },
  {
    stem: "An older adult male with benign prostatic hypertrophy (BPH) develops sudden inability to void, a palpably distended bladder, and a rapidly rising creatinine. What is the priority nursing intervention?",
    options: ["Insert a urinary catheter to relieve the obstruction", "Administer IV fluids to flush the obstruction through", "Prepare the patient for emergent hemodialysis before any other intervention", "Administer a loop diuretic to force urine output"],
    correct: 0,
    rationale: "This presentation indicates postrenal AKI from bladder outlet obstruction related to BPH. The priority intervention is relieving the obstruction with a urinary catheter, which often resolves the AKI once urine flow is restored."
  },
  {
    stem: "A patient with acute kidney injury (AKI) has a potassium of 7.1 mEq/L and new widened QRS complexes on the cardiac monitor. What is the nurse's priority action?",
    options: ["Notify the provider immediately and anticipate orders for IV calcium gluconate, insulin, and dextrose", "Administer an oral potassium binder and recheck the level in 4 hours", "Restrict the patient's dietary potassium and reassess in the morning", "Document the finding and continue routine monitoring"],
    correct: 0,
    rationale: "A potassium of 7.1 mEq/L with widened QRS complexes indicates severe, life-threatening hyperkalemia with significant cardiac toxicity. The nurse notifies the provider immediately, since this requires emergent treatment with IV calcium gluconate to stabilize the cardiac membrane and insulin with dextrose to rapidly shift potassium intracellularly."
  },
  {
    stem: "How does sodium polystyrene sulfonate (Kayexalate) lower serum potassium, and why is it not used as the sole treatment for a cardiac emergency from hyperkalemia?",
    options: ["It exchanges sodium for potassium in the gastrointestinal tract for excretion in the stool, but its onset is too slow for an immediate cardiac emergency", "It directly shifts potassium into the cells within minutes, making it ideal for emergencies", "It increases renal excretion of potassium immediately upon administration", "It binds calcium in the bloodstream, which is contraindicated in a cardiac emergency"],
    correct: 0,
    rationale: "Kayexalate works by exchanging sodium for potassium in the gastrointestinal tract, with potassium then excreted in the stool. Because this process takes hours, it is too slow to address a cardiac emergency from hyperkalemia, which requires immediate measures like IV calcium and insulin/dextrose."
  },
  {
    stem: "A patient with chronic kidney disease (CKD) has a glomerular filtration rate (GFR) of 13. What does the nurse anticipate regarding this patient's plan of care?",
    options: ["Initiation of renal replacement therapy, since a GFR below 15 indicates end-stage kidney disease (ESKD)", "Continued dietary management alone, since a GFR of 13 does not yet require dialysis", "Discharge with outpatient follow-up in 6 months", "A repeat GFR in 3 months before any treatment changes are made"],
    correct: 0,
    rationale: "A GFR of 13 falls below the threshold of 15, indicating stage 5 CKD, also known as end-stage kidney disease (ESKD). At this stage, the patient requires renal replacement therapy, dialysis, or transplantation, rather than continued conservative management."
  },
  {
    stem: "A patient with end-stage kidney disease (ESKD) reports chest discomfort. The nurse notes muffled heart sounds, a pericardial friction rub, and jugular venous distension. What does the nurse suspect, and what is the priority action?",
    options: ["Pericardial effusion progressing toward cardiac tamponade; notify the provider immediately", "Expected uremic finding requiring routine monitoring only", "Fluid volume deficit from inadequate dialysis; encourage oral fluids", "Anxiety related to chronic illness; offer reassurance and reassess in 2 hours"],
    correct: 0,
    rationale: "Muffled heart sounds, a pericardial friction rub, and jugular venous distension in an ESKD patient are concerning for pericardial effusion progressing toward cardiac tamponade, a life-threatening complication from retained uremic waste products. This requires immediate provider notification."
  },
  {
    stem: "A patient with nephrotic syndrome develops sudden unilateral leg swelling, warmth, and pain. What complication does the nurse suspect?",
    options: ["Thromboembolism, possibly of the renal vein, related to urinary loss of antithrombotic proteins", "Expected worsening of nephrotic edema requiring leg elevation only", "Cellulitis from skin breakdown requiring topical antibiotic ointment", "Lymphedema from chronic venous insufficiency requiring compression therapy"],
    correct: 0,
    rationale: "Patients with nephrotic syndrome are at increased risk for thromboembolism, especially of the renal vein, due to urinary loss of antithrombotic proteins such as antithrombin III. Sudden unilateral leg swelling, warmth, and pain require immediate evaluation for a thrombotic event rather than routine edema management."
  },
  {
    stem: "A patient is undergoing the first hemodialysis treatment of their life. Thirty minutes into the session, the patient develops a headache, nausea, and increasing restlessness. What does the nurse suspect?",
    options: ["Dialysis disequilibrium syndrome from cerebral fluid shifts", "An allergic reaction to the dialysis membrane", "Hypoglycemia from glucose loss during dialysis", "Expected discomfort that requires no intervention"],
    correct: 0,
    rationale: "Headache, nausea, and restlessness developing during or shortly after a first hemodialysis treatment are classic for dialysis disequilibrium syndrome, caused by cerebral fluid shifts. The nurse notifies the provider promptly, as the treatment may need to be slowed or stopped."
  },
  {
    stem: "A nurse is reviewing the chart of a patient newly diagnosed with nephrotic syndrome. Which findings would the nurse expect to see?",
    options: ["Proteinuria exceeding 3.5 g/day", "Hypoalbuminemia", "Diffuse edema, including periorbital and dependent areas", "Hyperlipidemia", "Hypercalcemia", "Polyuria with dilute urine"],
    correct: [0, 1, 2, 3],
    rationale: "Nephrotic syndrome is characterized by massive proteinuria exceeding 3.5 g/day, hypoalbuminemia from urinary protein loss, diffuse edema from decreased oncotic pressure, and hyperlipidemia. Hypercalcemia and polyuria with dilute urine are not characteristic findings of nephrotic syndrome."
  },
  {
    stem: "A patient with acute kidney injury (AKI) has been eating bananas and drinking orange juice daily, believing it will help with energy. What is the nurse's priority teaching point?",
    options: ["These foods are high in potassium and should be avoided given the risk of life-threatening hyperkalemia", "These foods should be encouraged since they provide essential calories during recovery", "These foods should be replaced with high-protein supplements instead", "These foods are appropriate as long as the patient's urine output remains normal"],
    correct: 0,
    rationale: "Bananas and citrus fruits and juices are high in potassium and should be restricted in patients with AKI because of the risk of hyperkalemia, the most life-threatening complication of AKI. Clear dietary teaching is essential to prevent dangerous potassium elevation."
  },

  // ===== CHAPTER 57: BURNS MANAGEMENT (12) =====
  {
    stem: "A nurse is calculating fluid resuscitation for an 80 kg patient with 45% total body surface area (TBSA) burns using the Parkland formula. What is the total fluid volume for the first 24 hours, and how much should be given in the first 8 hours?",
    options: ["14,400 mL total; 7,200 mL in the first 8 hours from the time of the burn", "14,400 mL total; 7,200 mL in the first 8 hours from the time of hospital arrival", "7,200 mL total; 3,600 mL in the first 8 hours from the time of hospital arrival", "3,600 mL total; 1,800 mL in the first 8 hours from the time of the burn"],
    correct: 0,
    rationale: "The Parkland formula is 4 mL x weight in kg x percent TBSA burned. 4 x 80 x 45 equals 14,400 mL total. The first half, 7,200 mL, is given in the first 8 hours calculated from the time of the burn, not the time of arrival."
  },
  {
    stem: "Using the Rule of Nines, a patient has burns to the entire posterior trunk and the entire left leg. What is the estimated total body surface area (TBSA) burned?",
    options: ["36%, because the posterior trunk equals 18% and the entire leg equals 18%", "27%, because the posterior trunk equals 9% and the entire leg equals 18%", "18%, because only the larger of the two regions is counted", "45%, because the posterior trunk equals 18% and the leg, anterior and posterior, equals 27%"],
    correct: 0,
    rationale: "The Rule of Nines assigns 18% to the posterior trunk and 18% to each entire leg (9% anterior plus 9% posterior). Posterior trunk (18%) plus entire left leg (18%) equals 36% TBSA."
  },
  {
    stem: "A burn patient is receiving fluid resuscitation. What is the purpose of adequate fluid resuscitation in relation to the zone of stasis surrounding the burn injury?",
    options: ["It preserves perfusion to the zone of stasis, preventing conversion to irreversible necrosis", "It directly regenerates destroyed nerve endings in the zone of coagulation", "It prevents bacterial colonization in the zone of hyperemia exclusively", "It has no effect on tissue viability, since the zones are determined entirely at the time of injury"],
    correct: 0,
    rationale: "The zone of stasis is ischemic but still viable tissue surrounding the necrotic zone of coagulation. Adequate fluid resuscitation preserves perfusion to this zone, preventing it from converting to irreversible necrosis and deepening the burn."
  },
  {
    stem: "A patient sustains burns to the face, both hands, and the perineum, covering 12% total body surface area (TBSA). What is the priority disposition decision for this patient?",
    options: ["Transfer to a burn center, since burns to the face, hands, and perineum meet transfer criteria regardless of TBSA percentage", "Manage at the local hospital, since the TBSA is below the 20% threshold for transfer", "Discharge home with outpatient wound care follow-up given the low TBSA", "Transfer only if the TBSA increases to greater than 20% on reassessment"],
    correct: 0,
    rationale: "Burns to the face, hands, feet, genitalia, perineum, or major joints meet burn center transfer criteria regardless of total body surface area percentage, since these areas are functionally and aesthetically critical and require specialized multidisciplinary care."
  },
  {
    stem: "A patient with facial burns and singed nasal hairs develops progressive hoarseness with audible wheezing and stridor. What is the nurse's priority action?",
    options: ["Prepare the patient for immediate intubation", "Apply a non-rebreather mask and reassess in 30 minutes", "Administer a bronchodilator and continue routine monitoring", "Obtain a chest x-ray before taking any other action"],
    correct: 0,
    rationale: "Progressive hoarseness with audible wheezing and stridor indicate impending upper airway obstruction from inhalation injury. The nurse prepares the patient for immediate intubation before complete airway obstruction occurs, since this can progress rapidly."
  },
  {
    stem: "A patient with burns from a house fire has a pulse oximetry reading of 97% on room air, but the nurse remains concerned about carbon monoxide poisoning. Why is pulse oximetry unreliable in this situation?",
    options: ["Pulse oximetry cannot distinguish carboxyhemoglobin from oxyhemoglobin, producing a falsely normal reading", "Carbon monoxide poisoning causes peripheral vasoconstriction that prevents accurate probe placement", "Pulse oximetry only measures venous oxygen saturation, not arterial saturation", "Carbon monoxide directly damages the pulse oximetry sensor, causing equipment malfunction"],
    correct: 0,
    rationale: "Pulse oximetry cannot differentiate between oxyhemoglobin and carboxyhemoglobin, since both absorb light similarly at the wavelengths used. This produces a falsely normal saturation reading in carbon monoxide poisoning. A carboxyhemoglobin level must be measured directly to confirm exposure."
  },
  {
    stem: "Why is silver sulfadiazine (Silvadene) avoided on facial burns, and which topical agent is preferred instead?",
    options: ["Silvadene carries a risk of neutropenia with large application areas; bacitracin is preferred for the face", "Silvadene causes permanent skin staining; mafenide acetate is preferred for the face", "Silvadene cannot penetrate eschar; silver nitrate is preferred for the face", "Silvadene is too expensive for routine facial use; petroleum jelly is preferred instead"],
    correct: 0,
    rationale: "Silver sulfadiazine carries a risk of neutropenia from systemic absorption, particularly with larger application areas, so it is avoided on the face. Bacitracin is preferred for facial burns because it has less systemic effect and is well tolerated on sensitive tissue."
  },
  {
    stem: "A patient with circumferential full-thickness burns to the right lower leg reports numbness, and the nurse is unable to obtain a Doppler pulse distal to the burn. What does the nurse anticipate?",
    options: ["Escharotomy to relieve pressure from the constrictive eschar", "Immediate amputation of the affected limb", "A repeat Doppler assessment in 4 hours with no other intervention", "Application of a compression bandage to support venous return"],
    correct: 0,
    rationale: "Circumferential full-thickness burns create a rigid eschar that acts like a tourniquet as edema develops underneath, causing compartment syndrome with loss of distal pulses. An escharotomy is required to release the pressure and restore perfusion."
  },
  {
    stem: "A patient with electrical burns to both hands has burgundy-colored urine. What does the nurse recognize as the cause, and what is the target urine output until the urine clears?",
    options: ["Myoglobinuria from muscle breakdown; target urine output of 75 to 100 mL per hour", "Hematuria from bladder trauma; target urine output of 30 mL per hour", "Expected finding from Foley catheter trauma; no specific urine output target", "Hemoglobinuria from red blood cell destruction; target urine output of 200 mL per hour"],
    correct: 0,
    rationale: "Electrical burns cause deep muscle destruction, releasing myoglobin that is directly toxic to the renal tubules. Burgundy-colored urine indicates myoglobinuria. IV fluids are increased to flush myoglobin through the kidneys, targeting a urine output of 75 to 100 mL per hour until the urine clears."
  },
  {
    stem: "A nurse is providing prophylaxis for a major burn patient at risk for Curling's ulcer. Which medication class does the nurse anticipate?",
    options: ["A histamine-2 blocker or proton pump inhibitor", "A nonsteroidal anti-inflammatory drug (NSAID)", "An oral corticosteroid", "A bulk-forming laxative"],
    correct: 0,
    rationale: "Curling's ulcer is a stress ulcer caused by mucosal ischemia and the hypermetabolic stress response in major burn patients. Prophylaxis with a histamine-2 blocker or proton pump inhibitor is mandatory to prevent gastrointestinal bleeding from this complication."
  },
  {
    stem: "Why does a burn nurse keep the patient's room warmed to 28 to 32 degrees Celsius and use warming blankets during wound care?",
    options: ["Burn patients lose their primary heat retention barrier and are at high risk for hypothermia, which worsens coagulopathy and immune function", "Warmth reduces the metabolic rate, decreasing caloric requirements during recovery", "Warmth prevents bacterial colonization of the wound bed", "Burn patients are at risk for malignant hyperthermia and require careful temperature titration"],
    correct: 0,
    rationale: "Burn patients lose the skin's heat retention function and have significant evaporative heat loss from open wounds, placing them at high risk for hypothermia. Hypothermia worsens coagulopathy, impairs immune function, and increases metabolic demand, so room warming and warming blankets are priority nursing interventions."
  },
  {
    stem: "A patient with major burns refuses to allow family visits, stating they cannot bear to be seen. What is the nurse's priority intervention?",
    options: ["Validate the patient's feelings, initiate early referral to psychiatry and social work, and educate the family on supporting the patient without forcing contact", "Encourage the family to visit regardless of the patient's wishes, since isolation worsens depression", "Reassure the patient that scarring will be minimal and appearance will return to normal", "Focus exclusively on physical wound care and defer all psychosocial concerns to the psychiatry team"],
    correct: 0,
    rationale: "Body image disturbance and social withdrawal are significant psychosocial complications of major burn injury. The nurse validates the patient's feelings, initiates early interdisciplinary referrals, and helps the family understand how to be supportive without overwhelming the patient. False reassurance is harmful and undermines trust."
  },

  // ===== CHAPTER 43: HEPATIC DISORDERS (7) =====
  {
    stem: "A patient with hepatic encephalopathy is started on lactulose. After 24 hours, the patient has had 4 watery stools and remains lethargic with no improvement in orientation. What does the nurse recognize?",
    options: ["The lactulose dose may need adjustment; watery stools beyond the goal of 2 to 3 soft stools per day risk dehydration without added benefit", "The lactulose is working perfectly and no further action is needed", "Watery stools indicate the ammonia level has normalized and lactulose should be discontinued", "Lethargy without improvement means lactulose should be increased to the maximum dose immediately without provider notification"],
    correct: 0,
    rationale: "Lactulose is titrated to produce 2 to 3 soft stools per day. Four watery stools without mental status improvement suggests the dose may not be appropriately balanced and the patient is at risk for dehydration and electrolyte loss without the expected reduction in ammonia-related symptoms. The nurse notifies the provider to reassess the regimen."
  },
  {
    stem: "A patient develops jaundice, fatigue, and right upper quadrant discomfort 3 weeks after eating at a restaurant later found to have a contaminated water supply. What does the nurse suspect, and what is the priority teaching point?",
    options: ["Hepatitis A, transmitted via the fecal-oral route; emphasize hand hygiene to prevent further spread", "Hepatitis B, transmitted via unprotected sex; emphasize condom use", "Hepatitis C, transmitted via blood-to-blood contact; emphasize avoiding shared needles", "Hepatitis A, transmitted via airborne droplets; emphasize mask use"],
    correct: 0,
    rationale: "Hepatitis A is transmitted via the fecal-oral route, often through contaminated food or water in public settings such as restaurants. The priority teaching point is hand hygiene, the key prevention strategy for this transmission route."
  },
  {
    stem: "A nurse asks a patient with cirrhosis to extend the arms with wrists dorsiflexed and observes an involuntary flapping movement. What stage of hepatic encephalopathy does this finding classically indicate, and what should the nurse do next?",
    options: ["Stage II; notify the provider and anticipate a repeat ammonia level", "Stage IV; prepare the patient for immediate intubation", "Stage I; document the finding with no further action needed", "This finding is unrelated to hepatic encephalopathy and requires no follow-up"],
    correct: 0,
    rationale: "Asterixis, the involuntary flapping of the hands elicited by wrist dorsiflexion, classically indicates stage II hepatic encephalopathy. The nurse notifies the provider and anticipates a repeat ammonia level, since this finding signals worsening hepatic toxin clearance."
  },
  {
    stem: "A patient with known esophageal varices vomits a large volume of bright red blood and becomes tachycardic and hypotensive. What is the nurse's priority sequence of actions?",
    options: ["Notify the provider immediately, keep the patient NPO, and prepare for emergent endoscopy", "Administer an oral proton pump inhibitor and reassess in 1 hour", "Encourage small sips of water to assess the patient's ability to swallow safely", "Apply a warm compress to the abdomen and recheck vital signs in 30 minutes"],
    correct: 0,
    rationale: "Hematemesis with tachycardia and hypotension in a patient with known esophageal varices indicates active, life-threatening variceal bleeding. The nurse notifies the provider immediately, keeps the patient NPO, and prepares for emergent endoscopy to identify and treat the bleeding site."
  },
  {
    stem: "A patient with cirrhosis reports a headache and requests something for pain. A PRN order for acetaminophen is available. What is the nurse's priority action?",
    options: ["Hold the acetaminophen and contact the provider to discuss a safer alternative", "Administer the maximum allowable dose since acetaminophen is available over the counter", "Administer the acetaminophen with food to reduce hepatotoxicity", "Administer the acetaminophen and monitor liver enzymes only if symptoms worsen"],
    correct: 0,
    rationale: "Acetaminophen is hepatotoxic and should be avoided in patients with cirrhosis, regardless of its over-the-counter status. The nurse holds the medication and contacts the provider to discuss a safer alternative for pain management."
  },
  {
    stem: "A patient with cirrhosis and severe ascites is scheduled for a paracentesis. What are the priority nursing actions before and after the procedure?",
    options: ["Have the patient void before the procedure, and monitor vital signs and abdominal girth closely afterward", "Encourage a high-sodium meal immediately before the procedure", "Restrict all oral intake for 24 hours following the procedure", "Place the patient supine flat for the duration of the post-procedure period"],
    correct: 0,
    rationale: "Before paracentesis, the patient should void to reduce the risk of bladder puncture. After the procedure, the nurse monitors vital signs closely for hypotension from fluid shifts and measures abdominal girth to track the amount of fluid removed."
  },
  {
    stem: "A patient with cirrhosis has a PT/INR significantly above normal and new bruising on the arms. What does the nurse recognize as the cause, and what precaution should be implemented?",
    options: ["Impaired clotting factor synthesis from liver dysfunction; implement bleeding precautions and avoid intramuscular injections", "Vitamin K toxicity requiring an antidote", "An allergic reaction to a recent medication requiring discontinuation", "A normal finding in cirrhosis that requires no specific precautions"],
    correct: 0,
    rationale: "Cirrhosis impairs the liver's ability to synthesize clotting factors, prolonging PT/INR and increasing bleeding risk, which explains the new bruising. The nurse implements bleeding precautions, such as avoiding intramuscular injections, and monitors closely for further bleeding."
  },

  // ===== CHAPTER 44: BILIARY DISORDERS (7) =====
  {
    stem: "A patient develops right upper quadrant pain radiating to the right shoulder, nausea, and vomiting after eating a fried meal. What does the nurse suspect, and what is the priority action?",
    options: ["Cholecystitis; keep the patient NPO and notify the provider", "Acute pancreatitis; administer an antacid immediately", "Peptic ulcer disease; encourage a regular diet to buffer stomach acid", "Appendicitis; prepare the patient for ambulation"],
    correct: 0,
    rationale: "Right upper quadrant pain radiating to the shoulder after a fatty meal, with nausea and vomiting, is classic for cholecystitis, since fat intake stimulates gallbladder contraction against the inflamed or obstructed organ. The nurse keeps the patient NPO and notifies the provider for further evaluation."
  },
  {
    stem: "A nurse is preparing a patient for an endoscopic retrograde cholangiopancreatography (ERCP) scheduled for the morning. The patient reports eating a snack 3 hours ago. What is the nurse's priority action?",
    options: ["Notify the provider, since the patient is not adequately NPO as required before the procedure", "Proceed with the procedure as scheduled since 3 hours is an adequate fasting period", "Administer an antiemetic and proceed with the procedure", "Delay the procedure by exactly 3 hours and proceed without further notification"],
    correct: 0,
    rationale: "Patients must be NPO since midnight before ERCP due to the use of moderate sedation. Eating 3 hours prior means the patient is not adequately fasted, increasing aspiration risk during the procedure. The nurse notifies the provider so the procedure timing can be appropriately addressed."
  },
  {
    stem: "A patient presents with severe midepigastric pain that began 30 hours after a heavy alcohol intake. The pain is diffuse, worse after eating, and unrelieved by the antacid taken at home. What does the nurse suspect, and what laboratory values does the nurse anticipate?",
    options: ["Acute pancreatitis; anticipate elevated serum amylase, lipase, and a low serum calcium", "Peptic ulcer disease; anticipate a urea breath test", "Cholecystitis; anticipate an elevated direct bilirubin only", "Gastroenteritis; anticipate a stool culture"],
    correct: 0,
    rationale: "Severe midepigastric pain occurring 24 to 48 hours after heavy alcohol intake, worse after meals, and unrelieved by antacids is classic for acute pancreatitis. The nurse anticipates elevated serum amylase and lipase, along with hypocalcemia, which correlates with disease severity."
  },
  {
    stem: "A patient with severe acute pancreatitis has a serum calcium of 6.5 mg/dL and the nurse notes new perioral tingling and a positive Chvostek's sign. What does the nurse recognize, and what is the priority action?",
    options: ["Hypocalcemia correlating with pancreatitis severity; notify the provider and institute seizure precautions", "An expected finding that requires no further action", "Hypercalcemia from pancreatic enzyme release; restrict dietary calcium", "A normal stress response to severe pain requiring no specific monitoring"],
    correct: 0,
    rationale: "Hypocalcemia is present in many patients with acute pancreatitis and correlates with disease severity. Perioral tingling and a positive Chvostek's sign are early signs of hypocalcemia that may progress to tetany or seizures if untreated. The nurse notifies the provider and institutes seizure precautions."
  },
  {
    stem: "A nurse caring for a post-cholecystectomy patient notes the Jackson-Pratt drain has stopped producing output, and the tubing is visibly kinked under the patient. What is the priority nursing action?",
    options: ["Straighten the kinked tubing and reassess for drainage", "Contact the surgeon immediately without further assessment", "Remove the drain since it is no longer functioning", "Apply manual pressure to the insertion site to stimulate drainage"],
    correct: 0,
    rationale: "When a Jackson-Pratt drain shows no output, the nurse first checks the tubing for patency, since kinking is a common and easily corrected cause. The tubing should be straightened and the drain reassessed before escalating to the surgeon."
  },
  {
    stem: "A patient with chronic pancreatitis who continues to smoke and drink alcohol despite previous education asks the nurse why the abdominal pain keeps recurring. What is the nurse's best response?",
    options: ["Smoking, alcohol consumption, and malnutrition are major causes of chronic pancreatitis, and continuing these behaviors contributes to recurring attacks", "Recurring pain in chronic pancreatitis is unrelated to lifestyle factors", "Smoking has no effect on pancreatic disease progression", "Alcohol intake only affects acute pancreatitis, not the chronic form"],
    correct: 0,
    rationale: "Smoking, alcohol consumption, and malnutrition are the major causes of chronic pancreatitis, characterized by recurring attacks of severe upper abdominal and back pain. The nurse educates the patient that continuing these behaviors perpetuates the disease process and recurring symptoms."
  },
  {
    stem: "A patient with a single small gallstone in the common bile duct is not a surgical candidate due to comorbidities. What noninvasive option does the nurse explain may be used to manage the stone?",
    options: ["Lithotripsy, which uses repeated shock waves to fragment the stone so it can pass more easily", "Cholecystectomy, performed under local anesthesia only", "Endoscopic banding therapy applied directly to the stone", "Oral antibiotics to dissolve the stone over several months"],
    correct: 0,
    rationale: "Lithotripsy is a noninvasive procedure that uses repeated shock waves directed at gallstones to fragment them, allowing the pieces to pass more easily. It is a nonsurgical option for patients who are not candidates for cholecystectomy."
  }
];
