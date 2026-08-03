// MedSurg II FINAL EXAM Simulator
// Source: Obsidian "Final Exam Blueprint" (2026-07-28) -- cumulative, 75 questions, professor's exact chapter breakdown
// Fixed bank matching blueprint exactly (not a subsample), same convention as Exam 2 simulator.
// correct: 0 for single-select (engine shuffles at runtime), correct: [array] for the one SATA (Endocrine).
// STANDING SITE RULE: no EKG strip-reading/identification questions in the simulator (that's the EKG Interpreter's
// exclusive domain) -- Ch 22 questions below test rhythm recognition/action through clinical description instead of images.
// All questions are new, written for this cumulative final -- distinct from the Exam 1/2/3 KC/DD/simulator banks.

window.QUESTIONS = [

// ===================== CH 22 -- ARRHYTHMIAS AND CONDUCTION PROBLEMS (15 Q) =====================

{
  stem: "A patient is 2 days post-op abdominal surgery and is reluctant to cough and deep breathe because of incisional pain. What is the nurse's priority intervention to help the patient cough effectively?",
  options: [
    "Teach the patient to splint the incision with a pillow while coughing",
    "Instruct the patient to hold their breath during each cough",
    "Ask the patient to lie flat while attempting to cough",
    "Delay coughing exercises until the incision has fully healed"
  ],
  correct: 0,
  rationale: "Splinting the incision with a pillow reduces the pain and tension on the incision during coughing, making effective coughing possible and helping prevent atelectasis and pneumonia. Holding the breath or lying flat does not address the pain barrier, and delaying pulmonary hygiene increases the risk of post-op respiratory complications."
},
{
  stem: "A patient's heart rate is 42 bpm and they report dizziness and near-syncope. Which medication should the nurse anticipate administering?",
  options: [
    "Atropine 0.5 mg IV push",
    "Amiodarone IV infusion",
    "Adenosine IV push",
    "Metoprolol IV push"
  ],
  correct: 0,
  rationale: "Atropine is the first-line medication for symptomatic bradycardia, increasing heart rate by blocking vagal effects on the SA node. Amiodarone and metoprolol would further slow the heart rate, and adenosine is used for supraventricular tachyarrhythmias, not bradycardia."
},
{
  stem: "A patient in atrial fibrillation with rapid ventricular response has a blood pressure of 78/44 mmHg and is confused. What intervention should the nurse prepare for?",
  options: [
    "Synchronized cardioversion",
    "Unsynchronized defibrillation",
    "Oral beta blocker administration",
    "Vagal maneuvers"
  ],
  correct: 0,
  rationale: "This patient is unstable (hypotensive, altered mental status) with a pulse, so synchronized cardioversion is indicated to restore normal rhythm quickly. Defibrillation is reserved for pulseless rhythms, oral medications work too slowly for an unstable patient, and vagal maneuvers are used for stable sinus tachycardia, not unstable A-fib."
},
{
  stem: "A nurse finds a patient unresponsive on the floor with no pulse. What is the nurse's first action?",
  options: [
    "Call for help and check for a carotid pulse",
    "Begin chest compressions immediately without assessment",
    "Attach the patient to a 12-lead EKG",
    "Administer atropine IV push"
  ],
  correct: 0,
  rationale: "The first step when finding an unresponsive patient is to call for help and assess for a carotid pulse before beginning any intervention. Compressions should not start until pulselessness is confirmed, and diagnostic or medication interventions come after the initial assessment and call for assistance."
},
{
  stem: "A patient develops pulseless ventricular tachycardia on the monitor. What is the priority nursing action?",
  options: [
    "Prepare for immediate defibrillation",
    "Prepare for synchronized cardioversion",
    "Administer oral antiarrhythmic medication",
    "Reassess in 15 minutes if the patient remains asymptomatic"
  ],
  correct: 0,
  rationale: "Pulseless V-tach is a medical emergency treated the same as V-fib: immediate defibrillation. Synchronized cardioversion is used only when a pulse is present, and oral medications or delayed reassessment would be fatal delays in a pulseless rhythm."
},
{
  stem: "A patient newly diagnosed with atrial fibrillation asks why they need to take a blood thinner. What is the nurse's best explanation?",
  options: [
    "Blood pooling in the atria increases the risk of clot formation and stroke",
    "Anticoagulants will convert the heart back to a normal rhythm",
    "Blood thinners are given to control the heart rate",
    "The medication prevents the atria from fibrillating further"
  ],
  correct: 0,
  rationale: "In A-fib, blood pools in the poorly contracting atria, increasing the risk of clot formation and embolic stroke, so anticoagulation is used to reduce that risk. Anticoagulants do not convert rhythm or control rate, and they do not stop the atria from fibrillating."
},
{
  stem: "A patient's EKG shows a heart rate of 32 bpm with no relationship between P waves and QRS complexes, and the patient is symptomatic. What should the nurse anticipate as definitive treatment?",
  options: [
    "Pacemaker insertion",
    "Synchronized cardioversion",
    "Adenosine IV push",
    "Increased fluid resuscitation alone"
  ],
  correct: 0,
  rationale: "A heart rate this low with AV dissociation describes third-degree (complete) heart block, which is always symptomatic and requires a pacemaker for definitive treatment. Cardioversion and adenosine are not indicated for bradyarrhythmias, and fluids alone will not correct the underlying conduction problem."
},
{
  stem: "A patient reports crushing chest pain radiating to the jaw. Why does the nurse prioritize administering supplemental oxygen?",
  options: [
    "To reduce myocardial workload and support oxygen delivery to ischemic tissue",
    "To prevent the patient from developing a pneumothorax",
    "To reverse the underlying dysrhythmia causing the chest pain",
    "To replace the need for nitroglycerin administration"
  ],
  correct: 0,
  rationale: "In chest pain, supplemental oxygen supports oxygen delivery to compromised myocardial tissue and reduces the workload on an already stressed heart. Oxygen does not prevent pneumothorax, reverse dysrhythmias, or replace nitroglycerin, which addresses the underlying ischemia directly."
},
{
  stem: "A patient's telemetry shows premature ventricular contractions occurring once every hour with no associated symptoms. What is the appropriate nursing action?",
  options: [
    "Continue to monitor the patient without intervention",
    "Prepare to administer IV amiodarone immediately",
    "Notify the provider to schedule emergent cardioversion",
    "Initiate transcutaneous pacing"
  ],
  correct: 0,
  rationale: "Infrequent, isolated PVCs without symptoms require monitoring only, since they are common and usually benign at this frequency. Amiodarone, cardioversion, and pacing are reserved for symptomatic or frequent/dangerous ectopy, not an occasional asymptomatic PVC."
},
{
  stem: "A patient is being discharged with a low potassium level and is at risk for dysrhythmias. Which finding on the EKG would the nurse expect to correlate with this electrolyte imbalance?",
  options: [
    "A prominent U wave",
    "Peaked, tented T waves",
    "A widened QRS complex with absent P waves",
    "ST segment elevation"
  ],
  correct: 0,
  rationale: "A prominent U wave is the hallmark EKG finding of hypokalemia. Peaked T waves and absent P waves with a widened QRS reflect hyperkalemia, and ST elevation is associated with myocardial infarction, not an electrolyte disturbance."
},
{
  stem: "A patient develops atrial flutter with a regular ventricular rate of 130 bpm and stable vital signs. What medication does the nurse anticipate administering first?",
  options: [
    "Adenosine IV push",
    "Atropine IV push",
    "Calcium gluconate IV push",
    "Sodium bicarbonate IV push"
  ],
  correct: 0,
  rationale: "Adenosine is used for atrial flutter to briefly slow AV conduction, which can help reveal the underlying flutter waves and assist with diagnosis and rate control. Atropine would worsen tachycardia, and calcium gluconate and sodium bicarbonate are treatments for hyperkalemia, not atrial flutter."
},
{
  stem: "A patient has just returned to the unit after elective cardioversion for atrial fibrillation. What is a priority nursing action in the immediate post-procedure period?",
  options: [
    "Maintain continuous cardiac monitoring and assess airway and breathing",
    "Encourage the patient to ambulate immediately to promote circulation",
    "Remove the patient from oxygen once the procedure is complete",
    "Allow the patient to eat a full meal as soon as they return to the unit"
  ],
  correct: 0,
  rationale: "After cardioversion, the priority is continuous ECG monitoring along with airway and breathing assessment, since the patient received sedation and the heart rhythm needs close observation for recurrence or complications. Early ambulation, discontinuing oxygen, and resuming a full diet are not immediate priorities and may not be safe yet."
},
{
  stem: "A patient with a newly implanted permanent pacemaker is being discharged. Which instruction is most important for the nurse to include?",
  options: [
    "Avoid close proximity to strong magnets, including MRI machines",
    "Resume full contact sports within one week",
    "Discontinue the pacemaker ID card once the incision heals",
    "Expect the device to be replaced every 6 months"
  ],
  correct: 0,
  rationale: "Strong magnetic fields, including MRI, can interfere with pacemaker function, so patients are taught to avoid them and to carry their pacemaker ID card at all times, not discontinue it. Contact sports and vigorous activity should be avoided during initial healing, and pacemaker batteries typically last years, not months."
},
{
  stem: "A stable patient in sinus tachycardia at 118 bpm reports feeling anxious before a stressful event. What should the nurse encourage first?",
  options: [
    "Vagal maneuvers such as bearing down or coughing",
    "Immediate synchronized cardioversion",
    "IV adenosine push",
    "Emergency pacemaker placement"
  ],
  correct: 0,
  rationale: "For stable sinus tachycardia, treating the underlying cause and trying vagal maneuvers like Valsalva, coughing, or breath-holding are appropriate first steps. Cardioversion, adenosine, and pacemaker placement are unnecessary and inappropriate interventions for a stable sinus tachycardia."
},
{
  stem: "A patient taking digoxin reports new visual halos around lights, nausea, and a heart rate of 52 bpm. What should the nurse do first?",
  options: [
    "Hold the next dose of digoxin and notify the provider",
    "Administer the scheduled dose of digoxin as ordered",
    "Increase the digoxin dose to compensate for bradycardia",
    "Administer atropine before giving the digoxin dose"
  ],
  correct: 0,
  rationale: "Visual halos, nausea, and bradycardia are classic signs of digoxin toxicity, so the nurse should hold the dose and notify the provider rather than administer or increase it. Giving atropine does not address the underlying toxicity and is not the priority action here."
},

// ===================== CH 19 -- CHEST AND LOWER RESPIRATORY DISORDERS (6 Q) =====================

{
  stem: "A patient newly suspected of having active tuberculosis is admitted to the medical unit. What is the nurse's priority action?",
  options: [
    "Initiate airborne isolation precautions with an N95 respirator",
    "Obtain a chest X-ray before placing the patient in isolation",
    "Administer the first dose of anti-TB medication immediately",
    "Place the patient in a standard private room with the door closed"
  ],
  correct: 0,
  rationale: "Airborne isolation with a negative pressure room and N95 respirator should be initiated immediately upon suspicion of TB, before diagnostic confirmation. A sputum sample must be obtained before medications are started, and a standard private room does not provide the negative pressure needed to contain airborne droplet nuclei."
},
{
  stem: "A trauma patient has multiple contiguous rib fractures with a segment of the chest wall moving inward on inspiration and outward on expiration. What complication does the nurse suspect?",
  options: [
    "Flail chest",
    "Simple pneumothorax",
    "Pleural effusion",
    "Atelectasis"
  ],
  correct: 0,
  rationale: "Paradoxical chest wall movement from a free-floating segment of ribs is the classic sign of flail chest, a life-threatening emergency that may require intubation and mechanical ventilation. Simple pneumothorax, pleural effusion, and atelectasis do not produce this paradoxical movement pattern."
},
{
  stem: "An elderly patient with a decreased level of consciousness after a stroke is at high risk for aspiration pneumonia. What is the priority nursing intervention?",
  options: [
    "Keep the head of the bed elevated at all times",
    "Restrict oral intake to thin liquids only",
    "Position the patient supine during meals",
    "Delay swallow evaluation until symptoms of pneumonia appear"
  ],
  correct: 0,
  rationale: "Keeping the head of the bed elevated reduces the risk of aspiration in patients with decreased LOC or swallowing difficulty. Thin liquids are actually harder for dysphagic patients to control, supine positioning during meals increases aspiration risk, and swallow evaluation should occur proactively, not after pneumonia develops."
},
{
  stem: "A patient who is immobile after major surgery is at risk for pulmonary embolism. Which nursing action is most effective for prevention?",
  options: [
    "Encourage early and frequent ambulation",
    "Restrict fluid intake to reduce clot risk",
    "Maintain strict bed rest for the first 5 post-op days",
    "Apply heat packs to the lower extremities"
  ],
  correct: 0,
  rationale: "Early and frequent ambulation is one of the most effective interventions to prevent venous stasis and reduce the risk of DVT and subsequent pulmonary embolism. Restricting fluids and prolonged bed rest actually increase clot risk, and heat packs do not address the underlying venous stasis."
},
{
  stem: "A patient in acute respiratory distress has a PaO2 of 54 mmHg on 100% supplemental oxygen with bilateral infiltrates on chest X-ray. What does the nurse anticipate as the necessary intervention?",
  options: [
    "Intubation and mechanical ventilation",
    "Increasing the supplemental oxygen flow rate further",
    "Administering a bronchodilator via nebulizer alone",
    "Positioning the patient supine to improve oxygenation"
  ],
  correct: 0,
  rationale: "Hypoxemia that does not respond to supplemental oxygen, combined with bilateral infiltrates, is the hallmark of ARDS, which requires mechanical ventilation since oxygen therapy alone is insufficient. Increasing oxygen further will not correct the shunting physiology, a bronchodilator alone will not resolve ARDS, and prone (not supine) positioning is the position associated with improved oxygenation in ARDS."
},
{
  stem: "A patient reports sharp chest pain that worsens with every breath and is relieved somewhat when lying on the affected side. What teaching should the nurse provide?",
  options: [
    "Splint the chest with a pillow when coughing",
    "Avoid all deep breathing until the pain resolves",
    "Lie only on the unaffected side at all times",
    "Take antacids to relieve the chest discomfort"
  ],
  correct: 0,
  rationale: "This presentation is consistent with pleurisy, where pain worsens with respiratory movement due to inflamed, nerve-rich parietal pleura; splinting the chest when coughing reduces pain and protects the area. Avoiding all deep breathing increases the risk of atelectasis, positioning preference varies by patient comfort rather than a fixed rule, and antacids are unrelated to pleuritic pain."
},

// ===================== CH 10 -- FLUID AND ELECTROLYTES (6 Q) =====================

{
  stem: "A patient has a serum potassium of 3.1 mEq/L and reports muscle weakness and cramping. Which additional finding should the nurse anticipate?",
  options: [
    "Flat or inverted T waves on the EKG",
    "Peaked, tented T waves on the EKG",
    "Widened QRS complex with absent P waves",
    "ST segment elevation across precordial leads"
  ],
  correct: 0,
  rationale: "Hypokalemia is associated with flat or inverted T waves and a prominent U wave on the EKG. Peaked T waves and a widened QRS with absent P waves reflect hyperkalemia, and ST elevation reflects myocardial injury, not an electrolyte imbalance."
},
{
  stem: "A patient with acute kidney injury has a serum potassium of 6.8 mEq/L. The provider orders IV calcium gluconate. What is the purpose of this medication?",
  options: [
    "To stabilize the cardiac cell membrane and reduce the risk of dysrhythmia",
    "To directly lower the serum potassium level",
    "To promote renal excretion of excess potassium",
    "To shift potassium from the extracellular space into the cells"
  ],
  correct: 0,
  rationale: "Calcium gluconate protects the heart by stabilizing the cardiac cell membrane in severe hyperkalemia, but it does not actually lower the serum potassium level. Insulin with glucose shifts potassium into cells temporarily, and loop diuretics or dialysis are needed to actually remove potassium from the body."
},
{
  stem: "A patient reports numbness and tingling around the mouth, and the nurse observes carpal spasm when inflating a blood pressure cuff on the patient's arm. What electrolyte imbalance does the nurse suspect?",
  options: [
    "Hypocalcemia",
    "Hyperkalemia",
    "Hypernatremia",
    "Hypermagnesemia"
  ],
  correct: 0,
  rationale: "Carpal spasm elicited by BP cuff inflation is a positive Trousseau's sign, a hallmark finding of hypocalcemia, along with perioral numbness and tingling. Hyperkalemia, hypernatremia, and hypermagnesemia do not produce this specific finding."
},
{
  stem: "An older adult patient is admitted with confusion, thirst, and a serum sodium of 152 mEq/L. Which factor in the patient's history is most consistent with this presentation?",
  options: [
    "Inadequate oral fluid intake over several days",
    "Excessive administration of hypotonic IV fluids",
    "Chronic use of potassium-sparing diuretics",
    "Recent large-volume paracentesis"
  ],
  correct: 0,
  rationale: "Hypernatremia in older adults is often related to inadequate fluid intake, since decreased thirst sensation with aging increases the risk of dehydration and resulting sodium concentration. Hypotonic IV fluids would dilute sodium rather than concentrate it, and potassium-sparing diuretics or paracentesis are not directly linked to this presentation."
},
{
  stem: "An ABG shows pH 7.28, PaCO2 52 mmHg, and HCO3- 24 mEq/L in a patient found unresponsive with slow, shallow respirations. How does the nurse interpret this result?",
  options: [
    "Uncompensated respiratory acidosis",
    "Uncompensated metabolic acidosis",
    "Partially compensated respiratory alkalosis",
    "Fully compensated metabolic alkalosis"
  ],
  correct: 0,
  rationale: "The low pH and elevated PaCO2 with a still-normal HCO3- indicate an uncompensated respiratory acidosis, consistent with hypoventilation from slow, shallow breathing. This is not a metabolic problem since HCO3- is normal, and the pH direction rules out any form of alkalosis."
},
{
  stem: "A patient in diabetic ketoacidosis has an ABG showing pH 7.22, PaCO2 28 mmHg, and HCO3- 14 mEq/L, along with deep, rapid respirations. How does the nurse interpret the respiratory pattern?",
  options: [
    "Kussmaul breathing, a compensatory response to metabolic acidosis",
    "A sign the patient is developing respiratory alkalosis independently",
    "An indication that mechanical ventilation is immediately required",
    "A normal breathing pattern unrelated to the ABG results"
  ],
  correct: 0,
  rationale: "The deep, rapid respirations (Kussmaul breathing) represent the body's attempt to blow off CO2 and compensate for the underlying metabolic acidosis seen in DKA. This is a compensatory response, not a separate alkalosis, and it does not by itself indicate a need for mechanical ventilation."
},

// ===================== CH 11 -- SHOCK AND MULTI-ORGAN DYSFUNCTION SYNDROME (6 Q) =====================

{
  stem: "A patient's heart rate rises to 108 bpm while blood pressure remains within normal limits. What is the significance of this finding?",
  options: [
    "This is the earliest sign of the compensatory stage of shock",
    "This indicates the patient has entered irreversible shock",
    "This is a benign finding requiring no further assessment",
    "This confirms the patient is fluid overloaded"
  ],
  correct: 0,
  rationale: "An elevated heart rate with a still-normal blood pressure is the earliest, most reversible sign of compensatory shock; waiting for BP to drop means missing this window. It is not a benign finding, does not indicate irreversible shock, and is not specific to fluid overload."
},
{
  stem: "A patient with a suspected urinary tract infection develops fever, tachycardia, and hypotension. After blood cultures are drawn, what is the nurse's priority action?",
  options: [
    "Administer broad-spectrum antibiotics as ordered",
    "Wait for culture and sensitivity results before treatment",
    "Administer an antipyretic and reassess in one hour",
    "Restrict IV fluids until the source of infection is confirmed"
  ],
  correct: 0,
  rationale: "Once blood cultures are obtained, broad-spectrum antibiotics should be administered as the priority action in suspected septic shock from urosepsis, since delaying treatment increases mortality. Waiting for culture results, giving only an antipyretic, or restricting fluids all delay life-saving treatment."
},
{
  stem: "A patient meets criteria for septic shock with hypotension and a lactate of 4.5 mmol/L. What is the priority fluid intervention?",
  options: [
    "Administer a 30 mL/kg crystalloid fluid bolus",
    "Restrict fluids to prevent pulmonary edema",
    "Administer a small 250 mL fluid bolus only",
    "Withhold fluids until a central line is placed"
  ],
  correct: 0,
  rationale: "The sepsis bundle calls for an aggressive 30 mL/kg crystalloid bolus in patients with hypotension or a lactate above 4 mmol/L. Restricting fluids, giving only a small bolus, or delaying treatment for central line placement all fail to address the hypoperfusion driving the shock state."
},
{
  stem: "A patient with a spinal cord injury develops hypotension, bradycardia, and warm, flushed skin below the level of injury. What type of shock does the nurse suspect?",
  options: [
    "Neurogenic shock",
    "Septic shock",
    "Cardiogenic shock",
    "Hypovolemic shock"
  ],
  correct: 0,
  rationale: "Neurogenic shock is distinguished from other shock types by bradycardia (rather than tachycardia) along with hypotension and warm, flushed skin due to loss of sympathetic tone below the injury. Septic, cardiogenic, and hypovolemic shock all typically present with tachycardia rather than bradycardia."
},
{
  stem: "A trauma patient with significant external blood loss becomes tachycardic and hypotensive. What is the priority first-line treatment?",
  options: [
    "IV crystalloid fluid resuscitation",
    "Vasopressor administration alone",
    "Oxygen administration without fluids",
    "Epinephrine IM injection"
  ],
  correct: 0,
  rationale: "In hypovolemic shock, IV fluid resuscitation with crystalloids is the first-line treatment to restore intravascular volume, with blood products added for hemorrhagic losses. Vasopressors and oxygen alone do not correct the underlying volume deficit, and epinephrine IM is the treatment for anaphylactic shock, not hypovolemic shock."
},
{
  stem: "A patient with septic shock develops worsening renal function, altered mental status, and abnormal liver enzymes over 48 hours. What complication does the nurse recognize?",
  options: [
    "Multi-organ dysfunction syndrome (MODS)",
    "Compensatory stage of shock",
    "Isolated acute kidney injury with no other significance",
    "A normal expected progression that requires no escalation"
  ],
  correct: 0,
  rationale: "Altered function in two or more organ systems, as seen here with renal, neurologic, and hepatic involvement, defines MODS, a serious complication most often seen with sepsis. This is not the compensatory stage (which precedes organ damage), and it is not an isolated or normal, non-escalating finding."
},

// ===================== CH 48 -- KIDNEY DISORDERS (6 Q) =====================

{
  stem: "A nurse is caring for a patient with an arteriovenous fistula for hemodialysis. Which assessment finding requires immediate notification of the provider?",
  options: [
    "Absence of a palpable thrill over the fistula",
    "A palpable thrill and audible bruit over the fistula",
    "Mild warmth over the fistula site",
    "A faint pulse palpable proximal to the fistula"
  ],
  correct: 0,
  rationale: "Absence of a palpable thrill or audible bruit may indicate blockage or clotting of the vascular access and requires immediate provider notification. A palpable thrill and bruit are expected normal findings, and mild warmth or a faint proximal pulse are not concerning on their own."
},
{
  stem: "A patient develops acute kidney injury after several days of vomiting and diarrhea with poor oral intake. Which category of AKI does the nurse recognize?",
  options: [
    "Prerenal",
    "Intrarenal",
    "Postrenal",
    "This does not represent AKI"
  ],
  correct: 0,
  rationale: "Volume depletion from GI losses and poor intake reduces blood flow to the kidneys before it reaches the renal tissue, making this a prerenal cause of AKI. Intrarenal involves direct damage to kidney tissue, and postrenal involves obstruction distal to the kidney, neither of which fits this history."
},
{
  stem: "A patient with acute kidney injury has a serum potassium of 6.9 mEq/L. What is the nurse's priority concern?",
  options: [
    "Life-threatening cardiac dysrhythmia",
    "Worsening peripheral edema",
    "Progressive metabolic alkalosis",
    "Increased risk for hypoglycemia"
  ],
  correct: 0,
  rationale: "Hyperkalemia is the most life-threatening complication of AKI because it can precipitate fatal cardiac dysrhythmias, making it the priority concern. Peripheral edema is a concern in AKI but is not immediately life-threatening, and AKI is more commonly associated with metabolic acidosis, not alkalosis or hypoglycemia."
},
{
  stem: "A patient presents with periorbital and generalized edema, foamy urine, and a urine protein excretion of 4.2 g/day. What condition does the nurse suspect?",
  options: [
    "Nephrotic syndrome",
    "Acute glomerulonephritis with hematuria",
    "Postrenal obstruction",
    "Diabetes insipidus"
  ],
  correct: 0,
  rationale: "Massive proteinuria exceeding 3.5 g/day along with diffuse edema and foamy urine is the hallmark presentation of nephrotic syndrome. Glomerulonephritis typically presents with hematuria as the more prominent finding, and postrenal obstruction and diabetes insipidus do not cause this pattern of proteinuria and edema."
},
{
  stem: "A patient develops a headache, nausea, and restlessness shortly after their first hemodialysis treatment. What complication does the nurse suspect?",
  options: [
    "Dialysis disequilibrium syndrome",
    "Hemodialysis vascular access infection",
    "Expected post-dialysis fatigue requiring no action",
    "Hypervolemia from inadequate fluid removal"
  ],
  correct: 0,
  rationale: "Headache, nausea, restlessness, and potentially altered consciousness shortly after dialysis, especially the first treatment, are characteristic of dialysis disequilibrium syndrome caused by rapid fluid shifts in the brain. This is not simply expected fatigue, an access infection, or a sign of inadequate fluid removal."
},
{
  stem: "A patient is scheduled for hemodialysis this morning. What should the nurse do regarding the patient's antihypertensive medication?",
  options: [
    "Withhold the antihypertensive medication before dialysis",
    "Administer the antihypertensive medication as scheduled",
    "Double the antihypertensive dose before the treatment",
    "Administer the medication only after dialysis is complete with no other changes"
  ],
  correct: 0,
  rationale: "Antihypertensive agents are typically withheld before dialysis to avoid the combined hypotensive effect of the medication plus fluid removal during treatment. Administering the dose as scheduled or doubling it increases the risk of intradialytic hypotension."
},

// ===================== CH 57 -- BURN INJURY (5 Q) =====================

{
  stem: "A patient has burns covering the entire right arm and half of the anterior trunk. Using the Rule of Nines, what is the estimated total body surface area burned?",
  options: [
    "18%",
    "9%",
    "27%",
    "36%"
  ],
  correct: 0,
  rationale: "The entire right arm is 9% and half of the anterior trunk (18% total) is 9%, for a combined total of 18% TBSA. The other options do not correctly apply the Rule of Nines percentages to this burn distribution."
},
{
  stem: "A patient arrives in the emergency department with burns covering 35% TBSA. What is the priority intervention in the emergent phase?",
  options: [
    "Initiate fluid resuscitation with lactated Ringer's",
    "Begin wound debridement immediately",
    "Apply topical antimicrobial ointment to all burned areas",
    "Schedule the patient for skin grafting within the first hour"
  ],
  correct: 0,
  rationale: "Fluid resuscitation is initiated for burns exceeding 20% TBSA to maintain organ perfusion and is the priority in the emergent/resuscitative phase. Debridement, topical antimicrobials, and grafting occur later, in the acute phase of burn care, not in the initial emergent phase."
},
{
  stem: "A patient has a burn that appears leathery, dry, and white in color, with no pain reported at the site. What burn depth does the nurse recognize?",
  options: [
    "Full thickness (third degree)",
    "Superficial (first degree)",
    "Superficial partial thickness (second degree)",
    "Deep partial thickness with intact nerve function"
  ],
  correct: 0,
  rationale: "A leathery, dry, white or brown/black appearance with an absence of pain due to nerve destruction is characteristic of a full-thickness (third-degree) burn, which requires grafting and will not heal spontaneously. Superficial and superficial partial-thickness burns are painful, and deep partial thickness burns have reduced but not absent pain."
},
{
  stem: "A patient with a major burn injury is not adequately fluid resuscitated in the first several hours. What is the expected consequence for the surrounding zone of stasis?",
  options: [
    "The zone of stasis may progress to irreversible tissue necrosis",
    "The zone of stasis will spontaneously heal regardless of fluid status",
    "Fluid resuscitation status has no effect on the zone of stasis",
    "The zone of stasis will convert to the zone of hyperemia"
  ],
  correct: 0,
  rationale: "Failure to adequately resuscitate a burn patient converts the ischemic but salvageable zone of stasis into the zone of coagulation, deepening and worsening the burn, which is why fluid resuscitation is critical to protecting this tissue. The zone of stasis does not spontaneously heal regardless of treatment, and it converts toward necrosis, not toward the more superficial zone of hyperemia."
},
{
  stem: "A patient with extensive facial and hand burns becomes tearful and asks the nurse, \"Will I ever look normal again?\" What is the nurse's most therapeutic response?",
  options: [
    "\"This is a lot to process. Tell me more about what's worrying you most right now.\"",
    "\"Don't worry, plastic surgery will make you look exactly like you did before.\"",
    "\"Most patients feel this way at first, so try not to focus on it.\"",
    "\"It's too early to know, so let's talk about something else for now.\""
  ],
  correct: 0,
  rationale: "Acknowledging the patient's distress and inviting them to share more supports open, therapeutic communication without offering false reassurance. Promising a specific cosmetic outcome is false reassurance, minimizing the patient's feelings shuts down communication, and deflecting the conversation avoids addressing a valid psychosocial concern."
},

// ===================== CH 43 -- HEPATIC DISORDERS (5 Q) =====================

{
  stem: "A patient with hepatic encephalopathy is prescribed lactulose. What is the expected therapeutic effect of this medication?",
  options: [
    "Decreased serum ammonia levels through increased bowel elimination",
    "Increased serum albumin production by the liver",
    "Direct improvement of liver enzyme levels",
    "Reduced portal hypertension pressure"
  ],
  correct: 0,
  rationale: "Lactulose works by trapping ammonia in the colon and promoting its elimination through increased bowel movements, thereby reducing serum ammonia levels and improving encephalopathy. It does not directly affect albumin production, liver enzymes, or portal pressure."
},
{
  stem: "A patient asks how they may have contracted hepatitis B. Which behavior in the patient's history is most consistent with this transmission route?",
  options: [
    "Sharing needles during intravenous drug use",
    "Eating at a restaurant with poor food handling practices",
    "Drinking contaminated water while traveling",
    "Close household contact with an infected family member's dishes"
  ],
  correct: 0,
  rationale: "Hepatitis B is transmitted through blood and body fluids, including shared needles, unprotected sex, and needlesticks. Contaminated food, water, or shared dishes are associated with hepatitis A, which is transmitted via the fecal-oral route, not hepatitis B."
},
{
  stem: "A patient with advanced cirrhosis exhibits involuntary flapping movements of the hands when the wrists are extended. What does the nurse recognize this finding as?",
  options: [
    "Asterixis, a sign of worsening hepatic encephalopathy",
    "A normal finding in patients with chronic liver disease",
    "A sign of hypokalemia unrelated to liver function",
    "An expected side effect of lactulose therapy"
  ],
  correct: 0,
  rationale: "Asterixis is a classic sign of hepatic encephalopathy caused by rising ammonia levels affecting neuromuscular function, and it typically appears in stage II encephalopathy. It is not a normal or benign finding, and it is not caused by hypokalemia or a side effect of lactulose."
},
{
  stem: "A patient with cirrhosis is being taught about dietary modifications. Which diet is most appropriate for this patient?",
  options: [
    "High-calorie, low-protein, low-sodium diet",
    "High-protein, high-sodium diet",
    "Low-calorie, high-protein diet",
    "Unrestricted diet with no modifications needed"
  ],
  correct: 0,
  rationale: "A high-calorie, low-protein (20-40 g/day), low-fat, low-sodium diet is recommended in cirrhosis to reduce ammonia production from protein breakdown while limiting fluid retention from sodium. A high-protein or unrestricted diet would worsen ammonia buildup and encephalopathy risk."
},
{
  stem: "A patient with known esophageal varices develops sudden hematemesis. What is the priority intervention?",
  options: [
    "Prepare the patient for urgent endoscopy",
    "Administer an oral proton pump inhibitor and reassess in 4 hours",
    "Encourage the patient to eat small, frequent meals",
    "Apply ice packs to the abdomen to reduce bleeding"
  ],
  correct: 0,
  rationale: "Active bleeding from esophageal varices is life-threatening and requires urgent endoscopy to identify and treat the bleeding site. Oral medications, meals, and ice packs do not address the acute hemorrhage and would delay definitive treatment."
},

// ===================== CH 44 -- BILIARY DISORDERS (5 Q) =====================

{
  stem: "A patient reports right upper quadrant pain radiating to the right shoulder, along with nausea and vomiting. What condition does the nurse suspect?",
  options: [
    "Cholecystitis",
    "Acute pancreatitis",
    "Hepatic encephalopathy",
    "Nephrolithiasis"
  ],
  correct: 0,
  rationale: "Right upper quadrant pain radiating to the shoulder or midsternal area, along with nausea and vomiting, is the classic presentation of cholecystitis. Pancreatitis pain is typically midepigastric, hepatic encephalopathy presents with neurologic changes rather than localized pain, and nephrolithiasis produces flank pain."
},
{
  stem: "A patient is scheduled for an ERCP. What is an essential pre-procedure nursing action?",
  options: [
    "Confirm the patient has been NPO since midnight",
    "Encourage the patient to eat a full breakfast beforehand",
    "Withhold all vital sign monitoring during the procedure",
    "Administer a full meal immediately after the procedure regardless of gag reflex"
  ],
  correct: 0,
  rationale: "The patient must be NPO since midnight before an ERCP, and vital signs and breathing are closely monitored throughout the procedure due to moderate sedation. Eating beforehand is contraindicated, monitoring should never be withheld, and food should not be given post-procedure until gag and cough reflexes have returned."
},
{
  stem: "A patient is 1 day post-op laparoscopic cholecystectomy with a Jackson-Pratt drain in place, and the nurse notes no drainage in the bulb. What should the nurse do first?",
  options: [
    "Check the tubing for patency",
    "Immediately contact the surgeon",
    "Remove the drain since it is not functioning",
    "Increase the patient's oral fluid intake to stimulate drainage"
  ],
  correct: 0,
  rationale: "If no drainage is seen in a Jackson-Pratt drain, the nurse should first check the tubing for patency before escalating to the surgeon. Removing the drain is outside the nurse's scope, and increasing fluid intake will not resolve a tubing issue."
},
{
  stem: "A patient with acute pancreatitis reports severe midepigastric pain that worsens after eating and is not relieved by antacids. What does the nurse recognize about this pain pattern?",
  options: [
    "It is consistent with the classic presentation of pancreatitis",
    "It suggests the pain is unrelated to the pancreatitis diagnosis",
    "It indicates the pain will resolve without any intervention",
    "It is an atypical finding that should not be documented"
  ],
  correct: 0,
  rationale: "Severe midepigastric pain that worsens after meals and is unrelieved by antacids is the classic, expected pain pattern of acute pancreatitis. This is not an unrelated or atypical finding, and it will not resolve without treatment such as NPO status and pain management."
},
{
  stem: "A patient with chronic pancreatitis has a serum calcium level that is trending downward over several days. What does the nurse understand about this finding?",
  options: [
    "The degree of hypocalcemia correlates with the severity of pancreatitis",
    "This finding is unrelated to the pancreatitis and requires no follow-up",
    "Hypocalcemia in pancreatitis indicates the condition is resolving",
    "This is an expected finding that does not need to be reported"
  ],
  correct: 0,
  rationale: "Hypocalcemia is common in pancreatitis and its severity correlates with the severity of the disease process, making it an important trend to monitor and report. This finding is directly related to the pancreatitis, does not indicate resolution, and should be reported rather than ignored."
},

// ===================== CH 62 -- CEREBROVASCULAR DISORDERS / STROKE (5 Q) =====================

{
  stem: "A patient arrives at the emergency department with ischemic stroke symptoms that began 2 hours ago. What is a key eligibility factor the nurse knows for IV t-PA administration?",
  options: [
    "The stroke must be confirmed as ischemic, not hemorrhagic",
    "The patient must have a history of a prior stroke within the past year",
    "The patient must have a systolic blood pressure below 90 mmHg",
    "t-PA can be given regardless of stroke type as long as it is within the time window"
  ],
  correct: 0,
  rationale: "t-PA is only appropriate for ischemic stroke and is contraindicated in hemorrhagic stroke because it would worsen the bleeding, making confirmation via CT scan essential before administration. A prior stroke history, hypotension, and disregarding stroke type are not eligibility criteria for t-PA."
},
{
  stem: "A patient reports sudden facial drooping, arm weakness on one side, and slurred speech. What is the priority nursing action?",
  options: [
    "Note the time of symptom onset and activate the stroke protocol",
    "Administer aspirin immediately before any further assessment",
    "Wait to see if symptoms resolve before taking further action",
    "Encourage the patient to walk to assess for balance impairment"
  ],
  correct: 0,
  rationale: "For suspected stroke, noting the exact time of symptom onset and activating the stroke protocol (Code Gray) is the priority, since time directly affects treatment eligibility and outcomes. Aspirin should not be given until a hemorrhagic stroke is ruled out, waiting delays critical treatment, and ambulating an acute stroke patient risks a fall."
},
{
  stem: "A patient reports a sudden, severe \"worst headache of my life\" along with a decreased level of consciousness. What type of stroke does the nurse suspect?",
  options: [
    "Hemorrhagic stroke",
    "Ischemic stroke from large artery thrombosis",
    "Transient ischemic attack",
    "Cardioembolic ischemic stroke"
  ],
  correct: 0,
  rationale: "A sudden, severe \"exploding\" headache with decreased level of consciousness is the key distinguishing presentation of hemorrhagic stroke, unlike the more common numbness or weakness pattern of ischemic stroke. A TIA is transient and resolves, and ischemic strokes of any cause typically present without this sudden, severe headache."
},
{
  stem: "A nurse is providing patient education on stroke prevention. Which modifiable risk factor should be emphasized as the primary target for intervention?",
  options: [
    "Hypertension",
    "Advanced age",
    "Male gender",
    "Family history of stroke"
  ],
  correct: 0,
  rationale: "Hypertension is the primary modifiable risk factor for stroke and is a major focus of prevention education. Age, male gender, and family history are nonmodifiable risk factors that cannot be changed through intervention."
},
{
  stem: "A patient is recovering from an ischemic stroke and asks how long the most critical window for rehabilitation typically lasts. What is the nurse's best response?",
  options: [
    "\"The first 6 months after the stroke are the most critical for functional recovery.\"",
    "\"Recovery is generally complete within the first 2 weeks after the stroke.\"",
    "\"Functional recovery typically plateaus after 18 months for ischemic strokes.\"",
    "\"There is no defined window; recovery timing is unpredictable for all patients.\""
  ],
  correct: 0,
  rationale: "Functional recovery after ischemic stroke usually plateaus around 6 months, making the first 6 months the most crucial window for rehabilitation efforts. Recovery is not complete within 2 weeks, the 18-month plateau applies to hemorrhagic stroke recovery, and there is a generally recognized recovery window rather than complete unpredictability."
},

// ===================== ATI NUTRITION (5 Q) =====================

{
  stem: "A nurse is teaching a patient with chronic kidney disease about dietary modifications. Which foods should the nurse instruct the patient to limit?",
  options: [
    "Bananas, dairy products, and processed foods high in phosphorus",
    "Lean meats, fresh vegetables, and whole grains",
    "Foods high in fiber such as fruits and vegetables",
    "Foods low in sodium and low in potassium"
  ],
  correct: 0,
  rationale: "Patients with CKD are taught to restrict high-potassium and high-phosphorus foods such as bananas, dairy, and processed items, since impaired kidneys cannot adequately excrete these minerals. Lean meats and whole grains still require moderation for protein content, high-fiber produce is often also high in potassium, and foods that are already low in sodium and potassium would not need to be limited."
},
{
  stem: "A patient newly diagnosed with hypertension asks about dietary changes to help manage blood pressure. What diet should the nurse recommend?",
  options: [
    "The DASH diet, low in sodium and high in potassium and calcium",
    "A high-sodium diet to maintain fluid balance",
    "A diet that eliminates all dairy products",
    "A high-protein, low-carbohydrate diet"
  ],
  correct: 0,
  rationale: "The DASH diet, which emphasizes low sodium along with high potassium and calcium intake, has been proven to significantly lower hypertension. A high-sodium diet would worsen hypertension, and eliminating dairy or following a high-protein, low-carb diet are not the evidence-based recommendation for blood pressure management."
},
{
  stem: "A patient who had gastric bypass surgery reports faintness, diaphoresis, and palpitations shortly after eating. What discharge teaching should the nurse reinforce to prevent this?",
  options: [
    "Lie down after meals and consume liquids one hour after eating, not with meals",
    "Increase the size of meals to prevent rapid gastric emptying",
    "Drink large amounts of fluid with each meal to aid digestion",
    "Eat meals high in simple sugars to maintain blood glucose"
  ],
  correct: 0,
  rationale: "For dumping syndrome, lying down after meals and separating liquid intake from meals by about an hour helps delay gastric emptying and reduce symptoms. Larger meals, drinking fluids with meals, and high-sugar foods all worsen dumping syndrome symptoms rather than prevent them."
},
{
  stem: "A post-operative patient is being counseled on nutrition to support wound healing. Which nutrient recommendation is most appropriate?",
  options: [
    "25-40 grams of protein per meal along with vitamin C and zinc",
    "A low-protein diet to reduce metabolic demand",
    "Vitamin K supplementation as the primary focus for wound healing",
    "Elimination of all fat-soluble vitamins from the diet"
  ],
  correct: 0,
  rationale: "Adequate protein intake (25-40 g per meal) along with vitamin C and zinc supports collagen synthesis and immune function critical for wound healing. A low-protein diet would impair healing, vitamin K is primarily related to clotting rather than wound healing directly, and eliminating fat-soluble vitamins would be counterproductive."
},
{
  stem: "A nurse caring for a patient receiving total parenteral nutrition (TPN) is reviewing safe administration practices. Which statement reflects correct nursing management of TPN?",
  options: [
    "TPN tubing should be changed every 24 hours and administered through a central line only",
    "TPN may be administered through a peripheral IV if the central line is unavailable",
    "IV medications may be administered through the same TPN line to save time",
    "Insulin may be added directly to the TPN bag by the nurse if ordered"
  ],
  correct: 0,
  rationale: "TPN solutions greater than 10% dextrose require central line administration, and tubing should be changed every 24 hours to reduce infection risk. TPN should never be given peripherally at this concentration, IV medications should not be run through the same line, and adding insulin to the bag is done by pharmacy, not the nurse."
},

// ===================== CH 45 -- ENDOCRINE DISORDERS (4 Q, 1 SATA) =====================

{
  stem: "A patient with a head injury develops severe hyponatremia, concentrated urine, and weight gain without edema. What condition does the nurse suspect?",
  options: [
    "SIADH",
    "Diabetes insipidus",
    "Addison's disease",
    "Cushing syndrome"
  ],
  correct: 0,
  rationale: "SIADH causes excessive ADH secretion, leading to water retention, dilutional hyponatremia, concentrated urine, and weight gain, often triggered by CNS conditions like head injury. Diabetes insipidus causes the opposite pattern of dilute urine and hypernatremia, and Addison's and Cushing syndrome involve cortisol dysfunction, not this water-retention pattern."
},
{
  stem: "A patient is 12 hours post-thyroidectomy and reports tingling around the mouth and in the fingertips. What should the nurse ensure is readily available at the bedside?",
  options: [
    "IV calcium gluconate",
    "IV potassium chloride",
    "Oral levothyroxine",
    "IV magnesium sulfate"
  ],
  correct: 0,
  rationale: "Perioral and fingertip tingling after thyroidectomy suggests early hypocalcemia from parathyroid gland disruption, so IV calcium gluconate must be readily available to treat acute hypocalcemic tetany. Potassium chloride and magnesium sulfate do not address this specific complication, and oral levothyroxine is a long-term replacement, not an emergency treatment."
},
{
  stem: "A patient with known adrenal insufficiency develops hypotension, fever, and vomiting during a severe respiratory infection. What complication does the nurse suspect?",
  options: [
    "Addisonian crisis",
    "Thyroid storm",
    "Myxedema coma",
    "Diabetic ketoacidosis"
  ],
  correct: 0,
  rationale: "Addisonian crisis can be triggered by physical stress such as infection and presents with hypotension, fever, vomiting, and signs of shock in a patient with underlying adrenal insufficiency. Thyroid storm and myxedema coma relate to thyroid dysfunction, and DKA relates to insulin deficiency, none of which fit this patient's history."
},
{
  stem: "A nurse is assessing a patient with newly diagnosed hypothyroidism. Select all findings the nurse would expect to observe.",
  options: [
    "Bradycardia",
    "Cold intolerance",
    "Weight gain",
    "Constipation",
    "Heat intolerance",
    "Diarrhea"
  ],
  correct: [0, 1, 2, 3],
  rationale: "Hypothyroidism slows metabolic processes throughout the body, producing bradycardia, cold intolerance, weight gain, and constipation. Heat intolerance and diarrhea are findings associated with hyperthyroidism, the opposite condition, and would not be expected here."
},

// ===================== CH 60 -- NEURO ASSESSMENT / NEUROLOGIC DYSFUNCTION (3 Q) =====================

{
  stem: "An older adult patient reports new, localized weakness in one arm. The family attributes it to \"normal aging.\" What is the nurse's best response?",
  options: [
    "Localized weakness should always be further investigated, not attributed to aging alone",
    "Agree with the family, since strength decline is a normal part of aging",
    "Document the finding as expected and take no further action",
    "Recommend the patient simply increase activity to build strength"
  ],
  correct: 0,
  rationale: "While diminished strength and agility can be a normal part of aging, localized weakness can only be attributed to disease and requires further investigation rather than being dismissed as normal aging. Agreeing with the family, documenting it as expected without follow-up, or simply recommending more activity all risk missing a significant new neurologic finding."
},
{
  stem: "A nurse obtains cerebrospinal fluid via lumbar puncture and notes the fluid is cloudy rather than clear. What does this finding indicate?",
  options: [
    "An abnormal finding requiring further evaluation",
    "A normal variant with no clinical significance",
    "Evidence that the lumbar puncture was performed incorrectly",
    "A finding that should be repeated in one week before reporting"
  ],
  correct: 0,
  rationale: "Normal CSF is clear, so any deviation from clarity, such as cloudiness, is an abnormal finding that warrants further evaluation for conditions such as infection. This is not a normal variant, does not necessarily indicate a technical error in the procedure, and should be reported promptly rather than delayed."
},
{
  stem: "An older adult patient has a history of falls and requires patient education materials. What approach should the nurse use to enhance the patient's learning?",
  options: [
    "Provide instruction at an unrushed pace using short, concrete information",
    "Deliver all teaching content in a single rapid session",
    "Use only written materials without verbal reinforcement",
    "Assume the patient will retain standard-paced teaching without modification"
  ],
  correct: 0,
  rationale: "Older adults require adequate time to receive and process information, so teaching should be unrushed, with short, concise, and concrete content along with reinforcement. Rushing through content, relying on written materials alone, or assuming standard pacing works do not account for age-related changes in processing and response time."
},

// ===================== CH 58 -- EYE AND VISION DISORDERS (2 Q) =====================

{
  stem: "A patient with newly diagnosed glaucoma asks how long they will need to use their prescribed eye drops. What is the nurse's best response?",
  options: [
    "\"These eye drops will need to be used for the rest of your life to control eye pressure.\"",
    "\"You can stop the drops once your vision returns to normal.\"",
    "\"The drops are only needed during periods when your eyes feel painful.\"",
    "\"You will likely be able to stop the drops after about 6 months of treatment.\""
  ],
  correct: 0,
  rationale: "Glaucoma treatment with eye drops is lifelong, since the goal is ongoing control of intraocular pressure rather than a cure, and vision loss from optic nerve damage is irreversible. The other responses incorrectly suggest the medication can be stopped once symptoms or a set duration passes, which would allow IOP to rise again and cause further damage."
},
{
  stem: "A patient is being discharged after cataract surgery. Which instruction should the nurse include in discharge teaching?",
  options: [
    "Avoid bending, straining, or rubbing the affected eye",
    "Resume heavy lifting immediately to normal activity levels",
    "Expect significant pain that requires strong opioid medication",
    "Discontinue the eye shield use after the first night"
  ],
  correct: 0,
  rationale: "Post-cataract surgery teaching includes avoiding bending, straining, lifting, and rubbing the eye to prevent increased intraocular pressure and complications. Heavy lifting should be avoided, only mild discomfort managed with Tylenol is expected (not significant pain requiring opioids), and the eye shield is typically used at night beyond just the first night."
},

// ===================== CH 59 -- HEARING AND BALANCE DISORDERS (2 Q) =====================

{
  stem: "A patient reports episodic vertigo, tinnitus, and hearing loss in one ear. What condition does the nurse suspect, and what dietary modification should be taught?",
  options: [
    "Meniere's disease; a low-sodium diet",
    "Labyrinthitis; a high-sodium diet",
    "Otitis externa; a low-protein diet",
    "Ototoxicity; a high-potassium diet"
  ],
  correct: 0,
  rationale: "The classic triad of episodic vertigo, tinnitus, and unilateral sensorineural hearing loss is characteristic of Meniere's disease, and a low-sodium diet is taught to help reduce fluid retention in the inner ear. Labyrinthitis does not typically involve this specific triad, and otitis externa and ototoxicity have different presentations and are not managed with these dietary changes."
},
{
  stem: "A nurse is communicating with a patient who has significant hearing loss. Which technique is most appropriate?",
  options: [
    "Face the patient directly and speak in a low-pitched, normal volume voice",
    "Shout to ensure the patient can hear the message clearly",
    "Speak from behind the patient to avoid startling them",
    "Speak into the patient's more impaired ear for symmetry"
  ],
  correct: 0,
  rationale: "Facing the patient and using a low-tone, normal voice while speaking slowly and clearly is the most effective communication strategy for a hearing-impaired patient. Shouting distorts sound and can be perceived as anger, speaking from behind prevents lip-reading and visual cues, and the nurse should speak into the less impaired ear, not the more impaired one."
}

];
