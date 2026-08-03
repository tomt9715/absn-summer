/* MedSurg II FINAL EXAM -- NCLEX Challenge Round -- mixed review across all 14 blueprint chapters.
   Bank of 69 questions, checked against: the Exam 1/2/3 KC+DD banks, the 14 per-topic Final Deep Drill banks
   built this session, and the fixed 75-question Final Exam Simulator -- all of which now exist on the site.
   Distinct vignettes/framing throughout; some underlying facts necessarily recur across this many layers of
   content on a finite curriculum, but no scenario, patient, or specific value set is reused verbatim from any
   of those banks.
   QUIZ_CONFIG.maxQuestions caps each attempt at 45, randomly drawn from this pool each time.
   Convention: correct is always index 0 for single-select; engine shuffles. SATA uses correct as an array. */
window.QUESTIONS = [

// ===================== ARRHYTHMIAS (10) =====================
{
  stem: "A patient recovering from an MI has frequent PVCs occurring in a bigeminal pattern along with occasional runs of 4-5 consecutive PVCs. What is the nurse's priority concern with this pattern?",
  options: ["Risk of progression to ventricular tachycardia", "Risk of progression to atrial fibrillation", "Risk of progression to first degree heart block", "No concern -- bigeminy is always benign regardless of frequency"],
  correct: 0,
  rationale: "Frequent PVCs occurring in bigeminy along with short runs of consecutive PVCs raise concern for progression to sustained ventricular tachycardia, especially in the setting of recent myocardial injury. This pattern is more concerning than isolated, infrequent PVCs and is not simply benign regardless of context."
},
{
  stem: "A patient with new atrial fibrillation of unknown duration is being considered for elective cardioversion. What must the nurse anticipate before this procedure can safely proceed?",
  options: ["Anticoagulation for at least 3 weeks or a transesophageal echocardiogram to rule out an atrial clot", "Immediate cardioversion without further workup, since A-fib of any duration can be safely converted", "A 24-hour period of bed rest with no other preparation required", "Discontinuation of all cardiac medications 48 hours prior"],
  correct: 0,
  rationale: "When the duration of atrial fibrillation is unknown or exceeds 48 hours, cardioversion carries a risk of dislodging an atrial clot and causing a stroke, so the patient requires either 3 weeks of anticoagulation beforehand or a transesophageal echocardiogram to rule out a clot before the procedure. Proceeding immediately without this precaution is unsafe."
},
{
  stem: "A patient's cardiac monitor shows a wide, bizarre QRS complex tachycardia at 160 bpm and the patient is awake, talking, with a blood pressure of 108/70. What does the nurse anticipate as the treatment approach?",
  options: ["Synchronized cardioversion with sedation, since the patient has a pulse", "Immediate unsynchronized defibrillation", "No treatment needed since the patient is asymptomatic", "IV atropine to slow the ventricular rate"],
  correct: 0,
  rationale: "This presentation is ventricular tachycardia with a pulse; since the patient has a pulse and is unstable enough to require intervention despite currently maintaining a blood pressure, synchronized cardioversion with sedation is the treatment approach. Unsynchronized defibrillation is reserved for pulseless rhythms, and atropine treats bradycardia, not VT."
},
{
  stem: "A nurse is teaching a patient recently diagnosed with atrial fibrillation about their new anticoagulant. The patient asks what would happen if they simply stopped taking it since they feel fine. What is the nurse's best response?",
  options: ["Stopping anticoagulation does not resolve the underlying stroke risk from clot formation in the atria, even without symptoms", "It is safe to stop once symptoms of palpitations resolve", "The medication can be stopped once the heart rate is below 100", "Anticoagulation is only needed during active chest pain episodes"],
  correct: 0,
  rationale: "The stroke risk in atrial fibrillation comes from blood pooling and clotting in the poorly contracting atria, a risk that persists regardless of symptoms, so stopping anticoagulation does not resolve the underlying danger. Feeling fine, having a controlled heart rate, or the absence of chest pain do not indicate it is safe to discontinue therapy."
},
{
  stem: "A patient's rhythm strip shows no identifiable P waves, an irregularly irregular rhythm, and a ventricular rate of 145 bpm. The patient reports palpitations and mild dyspnea but has a stable blood pressure. What is the priority medication class the nurse anticipates?",
  options: ["IV beta blocker to control the ventricular rate", "IV epinephrine to increase contractility", "Oral warfarin as the first and only intervention", "IV atropine to increase the heart rate further"],
  correct: 0,
  rationale: "This is atrial fibrillation with rapid ventricular response; since the patient remains stable but symptomatic, the priority is rate control with an IV beta blocker or calcium channel blocker rather than cardioversion. Epinephrine and atropine would worsen the tachycardia, and while warfarin is important for stroke prevention, it does not address the acute rate issue."
},
{
  stem: "A patient with a permanent pacemaker reports feeling dizzy, and the nurse notes pacer spikes on the monitor with no corresponding QRS complex following approximately half of the spikes. What does the nurse suspect?",
  options: ["Failure to capture", "Normal expected pacemaker function", "Failure to sense", "Battery depletion requiring no action"],
  correct: 0,
  rationale: "Pacer spikes not consistently followed by a QRS complex indicate failure to capture, meaning the electrical stimulus is not successfully triggering ventricular depolarization, which explains the patient's dizziness from inadequate cardiac output. This is not normal function and requires prompt provider notification, not simply monitoring."
},
{
  stem: "A patient with a serum magnesium of 1.2 mg/dL develops a twisting, undulating pattern on the rhythm strip that varies in amplitude. What does the nurse anticipate as the treatment?",
  options: ["IV magnesium sulfate", "IV calcium gluconate", "Oral potassium supplementation", "Synchronized cardioversion as the sole treatment"],
  correct: 0,
  rationale: "A twisting, undulating pattern varying in amplitude describes Torsades de Pointes, which is strongly associated with hypomagnesemia, and IV magnesium sulfate is the specific treatment of choice regardless of the patient's serum potassium level. Calcium gluconate treats hyperkalemia, not this rhythm, and while cardioversion or defibrillation may be needed if the patient decompensates, magnesium replacement addresses the underlying cause."
},
{
  stem: "A patient's EKG shows a PR interval that is constant at 0.28 seconds on every beat with no dropped beats. The patient is asymptomatic. What is the nurse's priority action?",
  options: ["Continue routine monitoring since this is generally a benign finding", "Prepare immediately for transcutaneous pacing", "Administer atropine regardless of symptoms", "Notify the provider for emergent pacemaker placement"],
  correct: 0,
  rationale: "A constantly prolonged PR interval above 0.20 seconds with no dropped beats describes first degree heart block, which is generally benign and requires only routine monitoring in an asymptomatic patient. Pacing, atropine, and emergent pacemaker placement are reserved for symptomatic bradyarrhythmias or higher-degree blocks."
},
{
  stem: "A patient develops sudden cardiac arrest and the monitor shows a rhythm with organized electrical activity but the patient has no palpable pulse. What does the nurse recognize this represents, and what is the priority intervention?",
  options: ["Pulseless electrical activity; begin CPR and search for a reversible cause", "Ventricular fibrillation; defibrillate immediately", "Sinus rhythm; reassess in 5 minutes since electrical activity is organized", "Asystole; defibrillate immediately"],
  correct: 0,
  rationale: "Organized electrical activity on the monitor without a corresponding palpable pulse is pulseless electrical activity (PEA), which is treated with immediate CPR while searching for and treating a reversible cause (such as hypovolemia, hypoxia, or tension pneumothorax), rather than defibrillation, since PEA is not a shockable rhythm."
},
{
  stem: "A patient is about to undergo elective synchronized cardioversion for stable atrial flutter. The nurse notices the defibrillator is set to unsynchronized mode. What is the nurse's priority action?",
  options: ["Correct the setting to synchronized mode before the shock is delivered", "Proceed with the shock as ordered without changing the setting", "Increase the joules setting to compensate", "Cancel the procedure entirely and reschedule for another day"],
  correct: 0,
  rationale: "Delivering an unsynchronized shock in a patient with a pulse risks the shock landing on the T wave (R-on-T phenomenon), which can induce ventricular fibrillation, so the nurse must ensure the device is set to synchronized mode before the shock is delivered for a patient with a perfusing rhythm like atrial flutter. Proceeding with the wrong setting or simply increasing joules does not address this critical safety issue."
},

// ===================== RESPIRATORY (5) =====================
{
  stem: "A patient with severe COPD has an oxygen saturation of 88% on room air. The provider orders supplemental oxygen. What target saturation range does the nurse aim for when titrating oxygen in this patient?",
  options: ["88% to 92%", "95% to 100%", "Below 85% to avoid suppressing respiratory drive", "100% at all times regardless of baseline"],
  correct: 0,
  rationale: "In patients with severe COPD, oxygen is typically titrated to a target saturation of 88% to 92% rather than the higher targets used in patients without chronic CO2 retention, since excessive oxygen can worsen ventilation-perfusion mismatch and CO2 retention in this population. Targeting 95-100% or allowing saturations to remain critically low are both inappropriate."
},
{
  stem: "A nurse assessing a patient's chest tube drainage system notes intermittent bubbling in the water seal chamber that rises and falls with the patient's respirations. How should the nurse interpret this finding?",
  options: ["Normal tidaling reflecting appropriate pressure changes with breathing", "An air leak requiring immediate intervention", "Evidence the chest tube is no longer needed and can be removed", "A sign of chest tube occlusion requiring milking of the tubing"],
  correct: 0,
  rationale: "Fluid level fluctuation, or tidaling, that rises and falls with respiration in the water seal chamber is a normal, expected finding reflecting appropriate pressure changes in the pleural space with breathing. This is different from continuous bubbling, which would indicate an air leak, and does not indicate the tube should be removed or is occluded."
},
{
  stem: "A patient with dysphagia following a stroke is being fed by a family member who has not received swallow safety training. The nurse observes the patient coughing after a sip of thin liquid. What is the nurse's priority action?",
  options: ["Stop the feeding, assess the patient's airway, and arrange for a formal swallow evaluation", "Continue the feeding at a slower pace with the same liquid consistency", "Reassure the family that coughing is a normal part of eating", "Switch only the food texture while continuing to offer thin liquids"],
  correct: 0,
  rationale: "Coughing during oral intake in a patient with known dysphagia is a warning sign of aspiration risk, so the nurse should stop the feeding, assess the airway, and arrange for a formal swallow evaluation before further oral intake resumes. Continuing to feed, reassuring the family without action, or only modifying food texture while continuing thin liquids all risk further aspiration."
},
{
  stem: "A patient on mechanical ventilation triggers a high-pressure alarm. What is the nurse's priority assessment?",
  options: ["Assess for secretions, biting on the tube, or kinked tubing causing an obstruction", "Immediately increase the ventilator's set tidal volume", "Assume the tubing has disconnected and reconnect all connections", "Silence the alarm and reassess in 30 minutes"],
  correct: 0,
  rationale: "A high-pressure ventilator alarm most often indicates an obstruction to airflow, such as secretions, the patient biting the tube, or kinked tubing, so the priority assessment is to identify and address the source of obstruction, which may include suctioning. A disconnection would trigger a low-pressure alarm, not high, and alarms should never simply be silenced without assessment."
},
{
  stem: "A patient with a new diagnosis of pulmonary embolism is started on anticoagulation. What is the priority nursing intervention to prevent additional clot formation while the patient remains hospitalized?",
  options: ["Encourage early and frequent ambulation along with sequential compression devices when not ambulating", "Maintain strict bed rest until the anticoagulant reaches a full therapeutic level", "Restrict oral fluid intake to reduce venous congestion", "Apply warm compresses to the lower extremities continuously"],
  correct: 0,
  rationale: "Early and frequent ambulation, along with sequential compression devices when the patient is not ambulating, helps prevent venous stasis and additional clot formation in a patient recovering from pulmonary embolism. Strict bed rest actually increases venous stasis and clot risk, and fluid restriction or warm compresses do not address the underlying prevention strategy."
},

// ===================== FLUID & ELECTROLYTES (5) =====================
{
  stem: "A patient with severe, chronic hyponatremia is being corrected with hypertonic saline. The nurse understands that overly rapid correction of sodium places the patient at risk for which complication?",
  options: ["Osmotic demyelination syndrome", "Acute pulmonary edema exclusively", "Immediate seizure from the correction itself", "Rebound hypokalemia"],
  correct: 0,
  rationale: "Correcting chronic hyponatremia too rapidly places the patient at risk for osmotic demyelination syndrome, a serious and potentially permanent neurologic injury caused by rapid fluid shifts in brain cells, which is why sodium correction rate is closely monitored and limited. This is distinct from pulmonary edema, correction-induced seizures, or rebound hypokalemia."
},
{
  stem: "A provider orders IV potassium chloride for a patient with hypokalemia. What is an essential safety principle the nurse must follow when administering this medication?",
  options: ["Potassium chloride must be diluted and infused via a pump, never given as an IV push", "Potassium chloride should be given as a rapid IV push for fastest correction", "Potassium chloride can be added directly to a running IV bag without dilution verification", "Potassium chloride requires no special infusion precautions compared to other electrolytes"],
  correct: 0,
  rationale: "IV potassium chloride must always be diluted appropriately and administered via an infusion pump, never as a rapid IV push, since a bolus of concentrated potassium can cause fatal cardiac arrhythmias. This is one of the most critical medication safety principles in electrolyte replacement."
},
{
  stem: "A severely malnourished patient begins receiving aggressive enteral nutrition after being NPO for over a week. On day 2, the nurse notes new muscle weakness and confusion. What electrolyte disturbance should the nurse suspect?",
  options: ["Hypophosphatemia from refeeding syndrome", "Hypercalcemia from excess nutritional intake", "Hyperkalemia from increased caloric intake", "Hypernatremia from the enteral formula"],
  correct: 0,
  rationale: "Refeeding a severely malnourished patient too aggressively causes a rapid intracellular shift of phosphate, producing hypophosphatemia with muscle weakness and confusion, which is why calories are reintroduced gradually and phosphate is monitored closely in this population. This is not related to calcium, potassium, or sodium disturbances from the formula itself."
},
{
  stem: "A patient with prolonged nasogastric suction develops a pH of 7.49, an elevated bicarbonate, and a normal PaCO2. The nurse also notes new muscle twitching. What underlying process explains this laboratory picture?",
  options: ["Loss of hydrochloric acid from gastric contents, producing metabolic alkalosis", "Loss of bicarbonate from the lower GI tract, producing metabolic acidosis", "Hyperventilation causing respiratory alkalosis", "Hypoventilation causing respiratory acidosis"],
  correct: 0,
  rationale: "Prolonged nasogastric suction removes hydrochloric acid from the stomach, and this acid loss results in a relative excess of bicarbonate, producing metabolic alkalosis, consistent with the elevated pH and bicarbonate with a normal PaCO2. This is distinct from lower GI bicarbonate losses, which cause metabolic acidosis, or a primary respiratory process."
},
{
  stem: "A patient with hypercalcemia is being monitored on telemetry. What EKG change does the nurse anticipate as a hallmark finding of this electrolyte imbalance?",
  options: ["Shortened QT interval", "Prolonged QT interval", "Peaked T waves", "Prominent U waves"],
  correct: 0,
  rationale: "Hypercalcemia classically causes a shortened QT interval on the EKG, distinct from the peaked T waves of hyperkalemia, the prominent U waves of hypokalemia, or the prolonged QT interval more commonly associated with hypocalcemia or hypomagnesemia."
},

// ===================== SHOCK, SEPSIS & MODS (5) =====================
{
  stem: "A patient with a severe bee sting allergy received epinephrine IM and their blood pressure has improved significantly. Six hours later, the patient's symptoms of anaphylaxis suddenly return. What does the nurse recognize this represents?",
  options: ["A biphasic anaphylactic reaction", "A completely new, unrelated allergic exposure", "Normal residual effects of the original epinephrine wearing off", "Evidence the initial epinephrine dose was never effective"],
  correct: 0,
  rationale: "A biphasic anaphylactic reaction is a recurrence of anaphylaxis symptoms hours after the initial episode has resolved, which is why patients who experience anaphylaxis are typically observed for an extended period after treatment. This is not simply the epinephrine wearing off, an unrelated new exposure, or evidence the original treatment failed, since the initial improvement did occur."
},
{
  stem: "A patient with cardiogenic shock following a large MI is being considered for mechanical circulatory support. The provider orders placement of an intra-aortic balloon pump. What is the primary purpose of this device?",
  options: ["To improve coronary perfusion and reduce the workload on the failing left ventricle", "To directly replace the function of the kidneys during shock", "To deliver antibiotics directly into the coronary arteries", "To serve as a permanent replacement for the heart's pumping function"],
  correct: 0,
  rationale: "An intra-aortic balloon pump improves coronary artery perfusion during diastole and reduces the workload (afterload) on the failing left ventricle during systole, supporting cardiac output in cardiogenic shock. It does not replace kidney function, deliver antibiotics, or serve as a permanent heart replacement."
},
{
  stem: "A nurse is comparing two patients in shock. Patient A has cool, clammy extremities with poor capillary refill. Patient B has warm, flushed extremities despite a low blood pressure. What general category of shock does each presentation suggest?",
  options: ["Patient A suggests a hypovolemic or cardiogenic process; Patient B suggests a distributive process", "Patient A suggests a distributive process; Patient B suggests a hypovolemic process", "Both presentations suggest the identical shock category", "Extremity temperature has no relationship to shock classification"],
  correct: 0,
  rationale: "Cool, clammy extremities reflect peripheral vasoconstriction as the body shunts blood to vital organs, typical of hypovolemic or cardiogenic shock, while warm, flushed extremities despite hypotension reflect the vasodilation characteristic of distributive shock (septic, neurogenic, or anaphylactic). Extremity temperature is a genuinely useful bedside clue for narrowing the shock category."
},
{
  stem: "A trauma patient has lost approximately 35% of their circulating blood volume and now shows a significant drop in blood pressure, marked tachycardia, and confusion. What class of hemorrhagic shock does this presentation represent?",
  options: ["Class III hemorrhage", "Class I hemorrhage", "Class II hemorrhage", "Class IV hemorrhage"],
  correct: 0,
  rationale: "A blood loss of approximately 30-40% with a significant drop in blood pressure, marked tachycardia, and altered mental status corresponds to Class III hemorrhagic shock. Class I involves minimal blood loss with normal vital signs, Class II involves mild tachycardia with a still-normal blood pressure, and Class IV represents blood loss exceeding 40% with profound instability."
},
{
  stem: "A patient in septic shock develops worsening liver function tests, a rising creatinine, and new confusion over the course of 48 hours despite ongoing treatment. What does the nurse recognize this trend represents?",
  options: ["Progression toward multi-organ dysfunction syndrome (MODS)", "An expected, self-limiting response to sepsis requiring no escalation", "Isolated hepatic dysfunction unrelated to the septic process", "Resolution of the septic shock as the body adapts"],
  correct: 0,
  rationale: "Worsening dysfunction across multiple organ systems, in this case hepatic, renal, and neurologic, despite ongoing treatment reflects progression toward multi-organ dysfunction syndrome (MODS), a serious complication of unresolved septic shock. This is not an expected or self-limiting finding and does not indicate resolution."
},

// ===================== KIDNEY DISORDERS (5) =====================
{
  stem: "A patient with chronic kidney disease is prescribed an erythropoiesis-stimulating agent. What is the primary purpose of this medication in this population?",
  options: ["To stimulate red blood cell production and treat the anemia of chronic kidney disease", "To directly lower the patient's blood pressure", "To reduce serum potassium levels", "To replace the kidney's filtration function"],
  correct: 0,
  rationale: "Erythropoiesis-stimulating agents replace the erythropoietin that diseased kidneys can no longer adequately produce, stimulating red blood cell production to treat the anemia commonly seen in chronic kidney disease. These medications do not lower blood pressure, reduce potassium, or replace filtration function."
},
{
  stem: "A patient is scheduled to begin peritoneal dialysis. The nurse is explaining the three phases of each exchange cycle. Which phase involves the dialysate remaining in the peritoneal cavity to allow diffusion of waste products?",
  options: ["The dwell phase", "The inflow phase", "The outflow phase", "The priming phase"],
  correct: 0,
  rationale: "The dwell phase is when the dialysate remains in the peritoneal cavity, allowing diffusion of waste products and excess fluid across the peritoneal membrane before being drained. The inflow phase is instillation of the dialysate, and the outflow phase is drainage; priming is not one of the three standard exchange phases."
},
{
  stem: "A patient with pre-existing chronic kidney disease is scheduled for a CT scan with IV contrast. What nursing intervention is most important to help prevent contrast-induced nephropathy?",
  options: ["Ensure adequate IV hydration before and after the procedure as ordered", "Restrict all fluids for 24 hours prior to the scan", "Administer a loop diuretic immediately before contrast administration", "No special precautions are needed since contrast is not nephrotoxic"],
  correct: 0,
  rationale: "Adequate IV hydration before and after contrast administration is a key strategy to help prevent contrast-induced nephropathy in patients with pre-existing kidney disease, since it helps maintain renal perfusion and promotes clearance of the contrast agent. Fluid restriction or diuretics before contrast would worsen the risk, and contrast dye is indeed nephrotoxic, especially in this population."
},
{
  stem: "A patient is 2 hours post-renal biopsy. What is the priority nursing assessment during this recovery period?",
  options: ["Monitoring for hematuria and maintaining bedrest positioning as ordered", "Encouraging immediate ambulation to assess for complications", "Restricting oral fluid intake to reduce pressure on the biopsy site", "Removing the pressure dressing to inspect the site every 15 minutes"],
  correct: 0,
  rationale: "After a renal biopsy, the priority nursing assessment is monitoring for hematuria (a sign of bleeding) while maintaining the ordered bedrest positioning to reduce bleeding risk at the biopsy site. Immediate ambulation, fluid restriction, and frequently removing the pressure dressing would all increase the risk of bleeding complications."
},
{
  stem: "A patient with untreated end-stage kidney disease develops a dry, frost-like deposit of urea crystals visible on the skin. What does the nurse recognize this finding as?",
  options: ["Uremic frost, a late finding of severe, untreated uremia", "A normal skin finding requiring no further evaluation", "A sign the patient's kidney function has fully recovered", "An allergic skin reaction to a recent medication"],
  correct: 0,
  rationale: "Uremic frost is a late, concerning finding of severe untreated uremia, in which urea crystals deposit on the skin as the body attempts to excrete waste products through an alternate route when the kidneys can no longer adequately filter them. This is not a normal finding, a sign of recovery, or an allergic reaction."
},

// ===================== BURNS (5) =====================
{
  stem: "A patient with extensive facial burns is being treated with silver sulfadiazine on other body areas, but the provider orders bacitracin specifically for the facial burns. What is the primary reason for this choice?",
  options: ["Bacitracin has less systemic absorption and is better tolerated on sensitive facial tissue", "Silver sulfadiazine is more effective for facial burns specifically", "Bacitracin provides broader antimicrobial coverage than silver sulfadiazine", "Facial burns do not require any topical antimicrobial agent"],
  correct: 0,
  rationale: "Bacitracin is preferred for burns of the face and ears because it has less systemic absorption and is better tolerated on this sensitive tissue, while silver sulfadiazine carries a risk of neutropenia with larger or more sensitive areas of application. This is not about broader coverage or facial burns requiring no treatment at all."
},
{
  stem: "A nurse assesses a burn wound and notes green-blue purulent drainage with a distinctive odor. What organism does the nurse suspect is causing this wound infection?",
  options: ["Pseudomonas aeruginosa", "Staphylococcus aureus", "Escherichia coli", "Candida albicans"],
  correct: 0,
  rationale: "Green-blue purulent drainage with a distinctive odor is classically associated with Pseudomonas aeruginosa infection, a common and concerning pathogen in burn wounds given the loss of the normal skin barrier. This appearance is not typical of Staphylococcus, E. coli, or Candida infections."
},
{
  stem: "A patient sustains a chemical burn to the forearm from an industrial cleaning agent. What is the priority nursing intervention before any further assessment of the specific chemical involved?",
  options: ["Immediate, copious irrigation of the affected area with water", "Identifying the exact chemical agent before any intervention begins", "Applying a neutralizing agent based on the chemical's pH", "Covering the area with a dry sterile dressing without irrigation"],
  correct: 0,
  rationale: "Immediate, copious irrigation with water is the priority intervention for a chemical burn, taking precedence over identifying the specific agent, since ongoing tissue damage occurs the longer the chemical remains in contact with the skin. Attempting to neutralize the chemical based on assumed pH can worsen injury through an exothermic reaction, and simply covering the area without irrigation fails to remove the causative agent."
},
{
  stem: "A patient sustains an electrical burn with entry and exit wounds on the hands. What is the priority ongoing monitoring concern for this specific type of burn injury?",
  options: ["Cardiac arrhythmias from the electrical current's effect on the heart", "Isolated skin infection risk identical to a thermal burn", "Risk of hypothermia exceeding that of other burn types", "Delayed wound healing as the only significant concern"],
  correct: 0,
  rationale: "Electrical burns carry a significant risk of cardiac arrhythmias as the electrical current can directly affect the heart's conduction system, even when the visible skin injury appears limited to entry and exit points, making continuous cardiac monitoring a priority. This risk is distinct from and in addition to the typical concerns of thermal burns."
},
{
  stem: "A patient in the rehabilitation phase of burn recovery is being screened by the nurse for psychological complications. What condition is the nurse specifically screening for given the nature of major burn injury?",
  options: ["Post-traumatic stress disorder (PTSD)", "Generalized seasonal mood changes unrelated to the injury", "Isolated sleep disturbances with no other psychological component", "Cognitive decline unrelated to the traumatic event"],
  correct: 0,
  rationale: "Patients recovering from major burn injuries are screened for PTSD given the traumatic nature of the injury itself and the often painful, prolonged treatment course, making early psychological screening and support an important part of the rehabilitation phase. This is a specific, recognized complication rather than a general mood or cognitive concern."
},

// ===================== HEPATIC DISORDERS (5) =====================
{
  stem: "A patient with chronic hepatitis B is being taught about preventing transmission to household members. Which statement indicates a need for further teaching?",
  options: ["\"It's fine for my family to share my toothbrush since we live in the same house.\"", "\"I will make sure any cuts or wounds I have are covered.\"", "\"My sexual partner should be vaccinated against hepatitis B.\"", "\"I should avoid donating blood.\""],
  correct: 0,
  rationale: "Sharing a toothbrush poses a transmission risk since hepatitis B is spread through blood and body fluids, and toothbrushes can carry trace amounts of blood from bleeding gums, so this statement indicates a need for further teaching. The other statements reflect correct understanding of hepatitis B transmission prevention."
},
{
  stem: "A patient who received a liver transplant 3 months ago is being taught about lifelong immunosuppression. What is the priority teaching point related to this therapy?",
  options: ["Increased susceptibility to infection requires prompt reporting of fever or new symptoms", "Immunosuppression can be safely discontinued once liver function tests normalize", "Immunosuppressive medications only need to be taken during the first month post-transplant", "No special precautions are needed once the transplant has healed"],
  correct: 0,
  rationale: "Lifelong immunosuppression after liver transplant significantly increases susceptibility to infection, so patients must be taught to promptly report fever or new symptoms rather than assuming the medication can be stopped once lab values normalize or after a fixed time period. This is a lifelong therapy, not a temporary one."
},
{
  stem: "A patient with cirrhosis reports joint pain and asks if it is safe to take an over-the-counter NSAID for relief. What is the nurse's best response?",
  options: ["NSAIDs should be avoided in cirrhosis due to bleeding risk and potential kidney injury", "NSAIDs are the preferred choice for pain relief in cirrhosis over other options", "NSAIDs are safe as long as they are taken with food", "Only high doses of NSAIDs pose a risk in cirrhosis; low doses are safe"],
  correct: 0,
  rationale: "NSAIDs should be avoided in patients with cirrhosis due to the combined risk of worsening bleeding tendencies (given impaired clotting factor synthesis) and the potential for kidney injury, particularly hepatorenal syndrome. This caution applies regardless of dose or whether the medication is taken with food, and NSAIDs are not a preferred option in this population."
},
{
  stem: "A patient with advanced cirrhosis develops progressive oliguria and a rising creatinine despite no other clear cause of kidney injury, such as nephrotoxic medications or hypovolemia. What complication does the nurse suspect?",
  options: ["Hepatorenal syndrome", "Acute glomerulonephritis unrelated to the liver disease", "Expected normal renal aging unrelated to cirrhosis", "Diabetes insipidus secondary to liver failure"],
  correct: 0,
  rationale: "Hepatorenal syndrome is a serious complication of advanced liver disease in which kidney function declines in the absence of other identifiable causes of renal injury, related to the severe hemodynamic changes caused by liver failure. This is not an unrelated glomerular process, normal aging, or diabetes insipidus."
},
{
  stem: "A patient with refractory ascites undergoes a TIPS (transjugular intrahepatic portosystemic shunt) procedure. What complication should the nurse monitor for closely following this procedure?",
  options: ["Worsening hepatic encephalopathy", "Improved kidney function as the primary expected outcome", "Resolution of all liver disease symptoms permanently", "Decreased need for any further dietary modification"],
  correct: 0,
  rationale: "A TIPS procedure creates a shunt that diverts portal blood flow around the liver, which can worsen hepatic encephalopathy since blood carrying ammonia and other toxins bypasses hepatic filtration; close neurologic monitoring is essential after this procedure. It does not permanently resolve all liver disease or eliminate the need for dietary management."
},

// ===================== BILIARY DISORDERS (5) =====================
{
  stem: "A patient develops abdominal pain and elevated amylase and lipase levels shortly after undergoing an ERCP procedure. What complication does the nurse recognize as the most common risk of this procedure?",
  options: ["Post-ERCP pancreatitis", "Cholangitis unrelated to the procedure", "An unrelated peptic ulcer perforation", "Expected, benign post-procedure discomfort requiring no further evaluation"],
  correct: 0,
  rationale: "Pancreatitis is the most common complication of ERCP, caused by irritation or trauma to the pancreatic duct during the procedure, and elevated amylase and lipase with abdominal pain following ERCP should prompt evaluation for this specific complication rather than being dismissed as benign discomfort."
},
{
  stem: "A patient with chronic pancreatitis is prescribed pancrelipase (pancreatic enzyme replacement). What is the correct timing for administering this medication?",
  options: ["With meals and snacks", "Once daily at bedtime on an empty stomach", "Only when the patient reports abdominal pain", "30 minutes before eating on an empty stomach"],
  correct: 0,
  rationale: "Pancreatic enzyme replacement must be taken with meals and snacks to effectively aid in digestion of the food being consumed at that time, since the enzymes work by breaking down nutrients as they pass through the GI tract. Taking it at bedtime, only with pain, or well before eating would not align with when digestive support is actually needed."
},
{
  stem: "A patient reports intermittent right upper quadrant pain that occurs after fatty meals but resolves within an hour or two, without fever or significant tenderness on exam. How does the nurse differentiate this presentation from acute cholecystitis?",
  options: ["This presentation is more consistent with biliary colic, since cholecystitis typically involves more persistent pain, fever, and tenderness", "This presentation is identical to cholecystitis and requires the same emergent management", "The absence of fever rules out any gallbladder-related pathology entirely", "This presentation is more severe than typical cholecystitis and requires more urgent intervention"],
  correct: 0,
  rationale: "Biliary colic typically presents as intermittent pain after fatty meals that resolves within a few hours without fever or significant tenderness, reflecting temporary obstruction, while acute cholecystitis involves more persistent pain, fever, and tenderness from ongoing gallbladder inflammation. This distinction matters for how urgently the patient needs to be evaluated and treated."
},
{
  stem: "A patient with chronic pancreatitis develops a fluid-filled collection near the pancreas that is causing early satiety and abdominal fullness. What complication does the nurse recognize this represents?",
  options: ["A pancreatic pseudocyst", "An expected and harmless finding in chronic pancreatitis requiring no follow-up", "Acute cholecystitis", "A gallstone lodged in the common bile duct"],
  correct: 0,
  rationale: "A pancreatic pseudocyst is a fluid-filled collection that can develop as a complication of pancreatitis, and depending on its size, it can cause symptoms like early satiety and abdominal fullness from compression of nearby structures. This is a recognized complication requiring monitoring or intervention, not a harmless expected finding, and is distinct from cholecystitis or a bile duct stone."
},
{
  stem: "A patient post-cholecystectomy with a T-tube in place for common bile duct drainage has the tube accidentally clamped by a family member trying to help reposition the patient. What is the nurse's priority concern?",
  options: ["Bile backing up and causing increased pressure or leakage, since the drainage pathway has been obstructed", "No concern, since the T-tube does not require unobstructed drainage", "The clamping will improve bile flow to the duodenum", "The tube should be immediately and permanently removed due to the clamping event"],
  correct: 0,
  rationale: "A T-tube is placed to allow bile drainage while the common bile duct heals, and obstructing this drainage pathway by clamping can cause bile to back up, increasing pressure or causing leakage, so the nurse's priority is to unclamp the tube and assess for any resulting complications. This is not an improvement in bile flow, and the clamping event alone does not necessarily mean permanent removal is required."
},

// ===================== STROKE (5) =====================
{
  stem: "A patient with acute stroke symptoms is being evaluated for tPA eligibility. The family reports the patient underwent major abdominal surgery 10 days ago. What does the nurse anticipate regarding tPA administration?",
  options: ["Recent major surgery is a contraindication that must be discussed before administering tPA", "Recent surgery has no bearing on tPA eligibility", "tPA should be given immediately regardless of surgical history", "Surgical history only matters if the surgery involved the brain specifically"],
  correct: 0,
  rationale: "Recent major surgery is one of several contraindications to tPA administration due to the significantly increased bleeding risk, so this history must be discussed with the stroke team before proceeding. Surgical history involving any major procedure, not only brain surgery, is relevant to this eligibility decision."
},
{
  stem: "A nurse is using a standardized stroke severity scale to assess a patient with acute stroke symptoms. What is the primary purpose of this type of objective scoring tool?",
  options: ["To quantify stroke severity and track changes in the patient's neurologic status over time", "To determine the patient's eligibility for insurance coverage only", "To replace the need for any imaging studies", "To calculate the patient's expected hospital discharge date"],
  correct: 0,
  rationale: "A standardized stroke severity scale, such as the NIH Stroke Scale, quantifies the severity of neurologic deficits and allows the care team to track changes in the patient's status over time, which is clinically important for guiding treatment decisions and monitoring for improvement or deterioration. It does not replace imaging, determine insurance coverage, or calculate discharge timing."
},
{
  stem: "A patient recovering from an acute stroke is being assessed before the first oral intake since admission. What is the priority nursing action before offering any food or liquid?",
  options: ["Perform a bedside swallow screening to assess for dysphagia and aspiration risk", "Offer a regular diet immediately since the patient is alert", "Assume swallowing is intact since the patient can speak clearly", "Wait 24 hours after admission before any swallow assessment regardless of clinical status"],
  correct: 0,
  rationale: "A bedside swallow screening should be performed before any oral intake in a stroke patient to assess for dysphagia and aspiration risk, since stroke commonly affects swallowing function even when a patient is alert and can speak. The ability to speak clearly does not confirm safe swallowing, and screening should not be delayed by an arbitrary time frame."
},
{
  stem: "A patient several weeks post-stroke reports persistent low mood, loss of interest in previously enjoyed activities, and difficulty engaging in rehabilitation exercises. What complication should the nurse screen for?",
  options: ["Post-stroke depression", "Expected and untreatable emotional lability with no intervention available", "A new, unrelated primary psychiatric diagnosis with no connection to the stroke", "Normal grief that requires no clinical attention or follow-up"],
  correct: 0,
  rationale: "Post-stroke depression is a common and treatable complication affecting a significant proportion of stroke survivors, presenting with low mood, loss of interest, and reduced engagement in rehabilitation, and should be screened for and addressed since it can significantly impact recovery outcomes. This is not simply untreatable emotional lability or normal grief requiring no attention."
},
{
  stem: "A patient is undergoing a carotid endarterectomy to address significant carotid artery stenosis. What is a priority post-operative nursing assessment specific to this surgery?",
  options: ["Assessment of cranial nerve function, including voice quality and swallowing", "Assessment of lower extremity reflexes as the primary neurologic focus", "Routine post-operative care identical to any abdominal surgery with no specific additions", "Assessment of visual acuity as the sole neurologic priority"],
  correct: 0,
  rationale: "Carotid endarterectomy carries a risk of cranial nerve injury given the surgical location near several cranial nerves, so post-operative assessment specifically includes monitoring voice quality, swallowing ability, and other cranial nerve functions, in addition to standard neurologic and vital sign monitoring. This is a surgery-specific concern beyond routine post-operative care."
},

// ===================== NUTRITION (5) =====================
{
  stem: "A nurse is verifying placement of a newly inserted nasogastric feeding tube before initiating feeds. What is the most reliable bedside method to help confirm correct gastric placement, in addition to obtaining an X-ray?",
  options: ["Aspirating gastric contents and checking the pH", "Auscultating for a whoosh sound while injecting air as the sole confirmation method", "Asking the patient to state whether the tube feels correctly placed", "Observing for the absence of coughing during insertion as the sole confirmation method"],
  correct: 0,
  rationale: "Aspirating gastric contents and checking the pH (typically acidic, below 5.5, for correct gastric placement) is a reliable bedside method used alongside X-ray confirmation, which remains the gold standard, especially for initial placement verification. The whoosh test and absence of coughing are unreliable methods that should not be used as sole confirmation, and patient report of comfort does not confirm tube position."
},
{
  stem: "A nurse is administering an enteral tube feeding to a patient at risk for aspiration. What positioning is essential during and after the feeding?",
  options: ["Head of bed elevated 30 to 45 degrees", "Head of bed flat during the feeding to promote gastric emptying", "Trendelenburg position during the feeding", "Left lateral position with the head of bed flat"],
  correct: 0,
  rationale: "The head of the bed should be elevated 30 to 45 degrees during and after enteral tube feeding to reduce the risk of aspiration by using gravity to help keep gastric contents from refluxing into the esophagus and airway. A flat, Trendelenburg, or flat lateral position would all increase aspiration risk."
},
{
  stem: "A patient with pernicious anemia requires lifelong vitamin B12 replacement due to an inability to absorb the vitamin orally. What administration route does the nurse anticipate for this therapy?",
  options: ["Intramuscular injection", "Oral tablet exclusively, since absorption issues resolve with supplementation", "Topical application to intact skin", "Rectal suppository"],
  correct: 0,
  rationale: "Pernicious anemia results from an inability to absorb vitamin B12 through the GI tract due to a lack of intrinsic factor, so B12 replacement is given via intramuscular injection to bypass this absorption problem entirely, rather than relying on oral, topical, or rectal routes that would not address the underlying absorption defect."
},
{
  stem: "A patient with newly diagnosed type 2 diabetes is being taught about carbohydrate choices using the concept of glycemic index. What is the nurse's best explanation of this concept?",
  options: ["It ranks how quickly a carbohydrate-containing food raises blood glucose compared to a reference food", "It measures the total fat content of a food item", "It determines the exact caloric content of a meal", "It is only relevant for patients using insulin and irrelevant for oral medication management"],
  correct: 0,
  rationale: "Glycemic index ranks how quickly a carbohydrate-containing food raises blood glucose levels compared to a reference food, helping patients make choices that support more stable blood glucose control. It does not measure fat content or total calories directly, and it is a relevant concept for diabetes management regardless of whether the patient uses insulin or oral medications."
},
{
  stem: "A nurse is teaching a patient about using MyPlate as a general guide for balanced meals. What proportion of the plate does MyPlate recommend for vegetables?",
  options: ["Approximately one quarter of the plate", "The entire plate, with all other food groups eliminated", "Less than 5 percent of the plate", "Exactly half of the plate, with no other food group represented at that proportion"],
  correct: 0,
  rationale: "The MyPlate model recommends that vegetables make up approximately one quarter of the plate, alongside a quarter for whole grains and the remainder split between fruits and healthy protein, providing a simple visual guide for balanced meal planning rather than eliminating other food groups or using an extreme proportion."
},

// ===================== ENDOCRINE (5, incl 1 SATA) =====================
{
  stem: "A patient with a head injury develops dilute urine, polyuria, and a rising serum sodium. The provider orders desmopressin. What is the nurse's understanding of why fluid restriction is NOT part of this patient's treatment plan, unlike a patient with SIADH?",
  options: ["This patient has diabetes insipidus, where the problem is excessive fluid loss, requiring fluid replacement rather than restriction", "Fluid restriction is always avoided in any pituitary disorder regardless of the specific diagnosis", "This patient actually requires the same fluid restriction as SIADH since both are pituitary-related conditions", "Desmopressin makes fluid restriction unnecessary in all pituitary conditions"],
  correct: 0,
  rationale: "Diabetes insipidus involves insufficient ADH leading to excessive fluid loss and dilute urine, so the treatment approach involves fluid replacement and desmopressin to replace ADH, the opposite management from SIADH, which involves fluid retention and requires fluid restriction. These two conditions require essentially mirror-image management strategies."
},
{
  stem: "A patient with hypothyroidism asks the nurse what caused their condition, since they have no history of thyroid surgery or radiation. What autoimmune condition is a common cause of hypothyroidism in this context?",
  options: ["Hashimoto's thyroiditis", "Graves disease", "Cushing syndrome", "Primary aldosteronism"],
  correct: 0,
  rationale: "Hashimoto's thyroiditis is an autoimmune condition in which the immune system attacks the thyroid gland, making it a common cause of hypothyroidism in patients without a history of surgery or radiation. Graves disease is an autoimmune cause of hyperthyroidism, the opposite condition, and Cushing syndrome and primary aldosteronism are unrelated adrenal conditions."
},
{
  stem: "A nurse is teaching a newly diagnosed patient about the difference between type 1 and type 2 diabetes. What is the most accurate distinction to include in this teaching?",
  options: ["Type 1 involves autoimmune destruction of insulin-producing cells, while type 2 involves insulin resistance with relative insulin deficiency", "Type 1 and type 2 diabetes have identical underlying causes and only differ in age of onset", "Type 2 diabetes always requires insulin therapy while type 1 never does", "Type 1 diabetes is caused by diet and lifestyle factors exclusively"],
  correct: 0,
  rationale: "Type 1 diabetes results from autoimmune destruction of the insulin-producing beta cells in the pancreas, leading to an absolute insulin deficiency, while type 2 diabetes involves insulin resistance with a relative insulin deficiency, often related to lifestyle and genetic factors. These are distinct underlying mechanisms, not identical processes differing only by age, and insulin needs vary by individual regardless of type."
},
{
  stem: "A patient with a history of episodic severe hypertension, palpitations, headache, and profuse sweating is diagnosed with a catecholamine-secreting adrenal tumor. What condition does the nurse recognize this represents?",
  options: ["Pheochromocytoma", "Primary aldosteronism", "Cushing syndrome", "Addison disease"],
  correct: 0,
  rationale: "Pheochromocytoma is a catecholamine-secreting tumor, usually of the adrenal medulla, that classically presents with episodic severe hypertension, palpitations, headache, and diaphoresis due to surges of epinephrine and norepinephrine release. This is distinct from primary aldosteronism, Cushing syndrome, and Addison disease, which involve different hormonal mechanisms."
},
{
  stem: "A nurse is caring for a patient in Addisonian crisis. Select all findings the nurse would expect to observe.",
  options: ["Hypotension", "Fever", "Nausea and vomiting", "Signs of shock", "Hypertension", "Bradycardia as the primary cardiovascular finding"],
  correct: [0, 1, 2, 3],
  rationale: "Addisonian crisis presents with hypotension, fever, nausea and vomiting, and signs of shock as the adrenal glands fail to produce adequate cortisol during a period of physiologic stress. Hypertension and bradycardia as a primary finding are not expected in this presentation, which is characterized by cardiovascular collapse rather than elevated blood pressure."
},

// ===================== NEURO ASSESSMENT (3) =====================
{
  stem: "A nurse assesses a patient's level of consciousness using a standardized scoring tool that evaluates eye opening, verbal response, and motor response. What is this tool called?",
  options: ["Glasgow Coma Scale (GCS)", "Romberg test", "Mini-Mental State Examination", "Braden Scale"],
  correct: 0,
  rationale: "The Glasgow Coma Scale (GCS) is a standardized tool that scores eye opening, verbal response, and motor response to objectively quantify a patient's level of consciousness. The Romberg test assesses balance and proprioception, the Mini-Mental State Examination assesses cognition, and the Braden Scale assesses pressure injury risk, none of which use this specific three-component scoring system."
},
{
  stem: "A nurse documents a patient's pupils as equal, round, and reactive to light and accommodation. What does this common charting abbreviation represent?",
  options: ["PERRLA", "GCS", "AAOx3", "ROME"],
  correct: 0,
  rationale: "PERRLA stands for Pupils Equal, Round, and Reactive to Light and Accommodation, a standard documentation shorthand for normal pupillary assessment findings. GCS refers to the Glasgow Coma Scale, AAOx3 refers to orientation to person, place, and time, and ROME is an unrelated acronym used in ABG interpretation."
},
{
  stem: "A patient with a traumatic brain injury develops hypertension, bradycardia, and irregular respirations. What does the nurse recognize this triad as, and what does it indicate?",
  options: ["Cushing's triad, indicating rising intracranial pressure", "A normal stress response requiring no further evaluation", "An expected medication side effect unrelated to intracranial status", "Signs of hypovolemic shock requiring aggressive fluid resuscitation"],
  correct: 0,
  rationale: "Hypertension, bradycardia, and irregular respirations together are known as Cushing's triad, a late and ominous sign of rising intracranial pressure requiring immediate intervention. This is not a normal stress response, a medication side effect, or consistent with hypovolemic shock, which would instead present with hypotension and tachycardia."
},

// ===================== EYE (3) =====================
{
  stem: "A patient asks the nurse what visual acuity qualifies as legal blindness. What is the nurse's best response?",
  options: ["Visual acuity of 20/200 or worse in the better eye, even with correction", "Any visual acuity worse than 20/20 without correction", "Complete absence of any light perception in both eyes", "Visual acuity of 20/40 or worse in either eye"],
  correct: 0,
  rationale: "Legal blindness is defined as visual acuity of 20/200 or worse in the better eye even with the best possible correction, or a significantly restricted visual field. This is a specific clinical and legal threshold, not simply any acuity worse than 20/20, complete absence of light perception, or a less severe acuity level."
},
{
  stem: "A patient sustains blunt trauma to the eye from a sports injury. What is the priority nursing action while awaiting ophthalmology evaluation?",
  options: ["Apply a rigid eye shield without placing any pressure on the globe", "Apply a firm pressure patch directly over the eye", "Irrigate the eye vigorously regardless of the injury mechanism", "Encourage the patient to keep the eye open and blink frequently"],
  correct: 0,
  rationale: "For suspected globe trauma, a rigid shield should be applied without placing pressure on the eye, since pressure on a potentially ruptured globe can cause further extrusion of intraocular contents and worsen the injury. A firm pressure patch is contraindicated, vigorous irrigation is not appropriate for blunt trauma without a chemical exposure, and encouraging blinking does not protect the injured eye."
},
{
  stem: "A patient with poorly controlled type 2 diabetes is diagnosed with diabetic retinopathy. What is the most important modifiable factor the nurse emphasizes to help slow the progression of this condition?",
  options: ["Tight blood glucose control", "Increasing dietary vitamin A intake as the primary intervention", "Wearing sunglasses at all times as the primary preventive measure", "Avoiding all forms of physical activity"],
  correct: 0,
  rationale: "Tight blood glucose control is the most important modifiable factor in slowing the progression of diabetic retinopathy, since chronic hyperglycemia is the primary driver of the microvascular damage to the retina seen in this condition. Vitamin A intake, sunglasses use, and activity avoidance are not the primary evidence-based interventions for this specific complication."
},

// ===================== HEARING (3) =====================
{
  stem: "An older adult patient reports gradual, progressive high-frequency hearing loss over several years with no other identifiable cause. What age-related condition does the nurse recognize this represents?",
  options: ["Presbycusis", "Otosclerosis", "Meniere's disease", "Acute labyrinthitis"],
  correct: 0,
  rationale: "Presbycusis is the gradual, progressive, age-related hearing loss that typically affects high frequencies first and develops over years without another identifiable cause. This is distinct from otosclerosis (abnormal bone growth affecting the middle ear), Meniere's disease (episodic vertigo with hearing loss), and acute labyrinthitis (sudden-onset inflammation)."
},
{
  stem: "A patient with profound bilateral sensorineural hearing loss who receives no benefit from hearing aids is being evaluated for a surgical option. What device is the patient being considered for?",
  options: ["A cochlear implant", "A standard behind-the-ear hearing aid", "A tympanostomy tube", "A bone-anchored conduction device for conductive loss only"],
  correct: 0,
  rationale: "A cochlear implant is considered for patients with profound sensorineural hearing loss who receive little to no benefit from conventional hearing aids, since it bypasses the damaged inner ear structures to directly stimulate the auditory nerve. Standard hearing aids would not be effective in this population, tympanostomy tubes address middle ear fluid, and bone-anchored devices are typically used for conductive rather than profound sensorineural loss."
},
{
  stem: "A patient with a ruptured tympanic membrane is being discharged with instructions to keep the ear dry. What is the primary rationale for this instruction?",
  options: ["Water entering the middle ear through the perforation increases the risk of infection", "Water exposure will permanently worsen the hearing loss regardless of infection risk", "Keeping the ear dry speeds the healing of the perforation by reducing wax production", "This instruction is precautionary only and has no real clinical basis"],
  correct: 0,
  rationale: "A perforated tympanic membrane no longer provides a barrier protecting the middle ear, so water exposure increases the risk of introducing bacteria and causing infection, which is the primary rationale for keeping the ear dry during healing. This is a real, clinically important precaution, not related to wax production or permanent hearing worsening from water exposure alone."
}
];
