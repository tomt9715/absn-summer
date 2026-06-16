// MedSurg II Exam 1 Simulator — all-new questions, distinct from cluster banks.
// Weighted to professor blueprint: Vision(7) Hearing(7) Dysrhythmias(12) Respiratory(12) F&E(12)
// Engine draws a random 50 each attempt.
window.QUESTIONS = [

  // ===== VISION & HEARING (~14) =====
  {
    stem: "A patient with primary open-angle glaucoma is prescribed timolol eye drops but reports no symptoms and asks why they need medication. Which is the nurse's best response?",
    options: ["Glaucoma damages the optic nerve silently — by the time vision loss is noticeable, it is permanent and irreversible", "The drops treat the infection causing the elevated pressure and must be completed for the full course", "Timolol will restore the vision you have already lost by reducing intraocular pressure (IOP)", "Symptoms usually appear within a few weeks — the drops prevent them from getting worse"],
    correct: 0,
    rationale: "Primary open-angle glaucoma is asymptomatic in early stages, earning the name 'silent thief of sight.' Peripheral vision loss is gradual and irreversible. Treatment with medications like timolol (a beta blocker that decreases aqueous humor production) prevents further damage — it cannot restore lost vision."
  },
  {
    stem: "A nurse is reviewing medication orders for a patient with glaucoma who also has asthma. Which order should the nurse question?",
    options: ["Timolol (Timoptic) eye drops", "Latanoprost (Xalatan) eye drops", "Dorzolamide (Trusopt) eye drops", "Brimonidine (Alphagan) eye drops"],
    correct: 0,
    rationale: "Timolol is a non-selective beta blocker. Even as an eye drop, systemic absorption can cause bronchoconstriction — it is contraindicated in patients with asthma or chronic obstructive pulmonary disease (COPD). The nurse should question this order and notify the provider."
  },
  {
    stem: "Three days after cataract surgery, a patient calls reporting sudden severe eye pain, decreased vision, and a red eye. What is the nurse's priority action?",
    options: ["Instruct the patient to go to the emergency department immediately — these are signs of endophthalmitis", "Reassure the patient that mild pain and redness are expected during recovery", "Tell the patient to apply a warm compress and take acetaminophen for pain relief", "Schedule a routine follow-up appointment within the next week"],
    correct: 0,
    rationale: "Sudden severe pain, vision loss, and red eye post-cataract surgery are signs of endophthalmitis — a serious intraocular infection that is a surgical emergency. Immediate evaluation is required. This is not expected postoperative discomfort."
  },
  {
    stem: "A patient with wet age-related macular degeneration (AMD) asks why they need to avoid sunlight for 5 days after verteporfin (photodynamic therapy). What is the correct explanation?",
    options: ["Verteporfin remains activated in body tissues and sunlight can trigger burns to skin and eyes", "Sunlight will reverse the treatment effect by stimulating abnormal blood vessel regrowth", "Pupils are dilated from the procedure and bright light causes severe pain and retinal damage", "The photosensitizing dye stains the cornea and UV light will permanently discolor it"],
    correct: 0,
    rationale: "Verteporfin is a photosensitizing drug that remains in body tissues after photodynamic therapy. Activation by sunlight or bright light can cause serious skin and eye burns. Patients must avoid sunlight and bright indoor light for 5 days and wear protective clothing and sunglasses."
  },
  {
    stem: "A patient is admitted with sudden unilateral painless vision loss described as 'a curtain coming down over my eye.' Which condition does the nurse suspect and what is the priority action?",
    options: ["Retinal detachment — prepare the patient for emergency surgical repair", "Acute angle-closure glaucoma — administer pilocarpine eye drops immediately", "Wet age-related macular degeneration (AMD) — schedule urgent anti-VEGF injection", "Central retinal artery occlusion — apply warm compresses to dilate vessels"],
    correct: 0,
    rationale: "A painless 'curtain' descending over vision is the classic presentation of retinal detachment — the retina separates from the underlying retinal pigment epithelium. This is a surgical emergency requiring immediate ophthalmology consultation. Delays worsen prognosis significantly."
  },
  {
    stem: "A patient with Meniere's disease is having an acute attack with severe vertigo, nausea, and vomiting. Which nursing intervention takes priority?",
    options: ["Dim the lights, minimize noise, and implement fall precautions", "Encourage ambulation to stimulate vestibular compensation", "Irrigate the affected ear to relieve endolymphatic pressure", "Administer high-dose aspirin to reduce tinnitus and inflammation"],
    correct: 0,
    rationale: "During an acute Meniere's attack, the priority is safety and symptom management. A dim quiet environment reduces sensory stimulation that worsens vertigo, and fall precautions prevent injury. Ambulation is contraindicated — the patient cannot safely walk during a severe attack. Aspirin is ototoxic and worsens Meniere's symptoms."
  },
  {
    stem: "A patient on IV gentamicin for 10 days reports ringing in both ears and difficulty hearing high-pitched sounds. What is the nurse's priority action?",
    options: ["Hold the dose and notify the provider immediately — these are early signs of ototoxicity", "Reassure the patient that tinnitus is expected and will resolve after the course is complete", "Administer the dose as ordered and document the findings in the chart", "Check the gentamicin level and administer the dose if the trough is within range"],
    correct: 0,
    rationale: "Bilateral tinnitus and high-frequency hearing loss are early signs of aminoglycoside ototoxicity. Gentamicin damages cochlear hair cells — early detection and drug discontinuation may prevent permanent hearing loss. The nurse must hold the dose and notify the provider urgently."
  },
  {
    stem: "A nurse has four patients in the ophthalmology clinic. Which patient requires the most immediate assessment?",
    options: ["A patient who reports sudden painless vision loss in one eye that started one hour ago", "A patient with dry age-related macular degeneration (AMD) reporting gradual central vision blurring over 6 months", "A patient with glaucoma whose intraocular pressure (IOP) is 24 mmHg at a routine follow-up visit", "A patient post-cataract surgery (day 3) reporting mild itching and tearing at the operative site"],
    correct: 0,
    rationale: "Sudden painless unilateral vision loss is a medical emergency — it suggests retinal detachment, central retinal artery occlusion, or vitreous hemorrhage, all of which require immediate evaluation to preserve vision. Gradual AMD change, stable elevated intraocular pressure (IOP), and mild post-op tearing are all concerning but not emergencies. Time to treatment is vision."
  },
  {
    stem: "A patient returns to the clinic 48 hours after starting amoxicillin for acute otitis media. They report worsening ear pain, fever of 39.4°C, and new swelling and redness behind the ear with outward displacement of the auricle. What is the nurse's priority action?",
    options: ["Notify the provider immediately — these findings suggest mastoiditis, a serious complication requiring urgent evaluation", "Reassure the patient that the antibiotic needs more time to work and continue the current regimen", "Apply a warm compress to the area and increase the amoxicillin dose as ordered", "Schedule a follow-up visit in one week if symptoms do not improve with continued antibiotics"],
    correct: 0,
    rationale: "Postauricular swelling, redness, protrusion of the auricle, and high fever after starting antibiotics for otitis media are classic signs of mastoiditis — bacterial spread to the mastoid bone. This is a serious complication that can progress to meningitis or brain abscess. Immediate provider notification and urgent evaluation are required — IV antibiotics and possible surgical drainage may be needed."
  },
  {
    stem: "A patient is admitted for IV vancomycin therapy. On day 5, they report new ringing in both ears and the nurse notes the trough level is 22 mcg/mL (therapeutic range 10–15). What is the nurse's priority action?",
    options: ["Hold the vancomycin, notify the provider, and document the trough level — these are signs of ototoxicity", "Administer the scheduled dose and recheck the trough level in 24 hours", "Reassure the patient that tinnitus is a common and temporary side effect of vancomycin", "Reduce the dose by half and continue therapy without notifying the provider"],
    correct: 0,
    rationale: "A supratherapeutic vancomycin trough (22 mcg/mL vs goal 10–15) combined with new tinnitus are signs of ototoxicity. Aminoglycosides and vancomycin both cause cochlear hair cell damage — early detection and dose adjustment or discontinuation can prevent permanent hearing loss. The nurse must hold the dose and notify the provider immediately."
  },
  {
    stem: "A patient with known glaucoma presents to the emergency department with sudden severe eye pain, blurred vision with halos around lights, a mid-dilated non-reactive pupil, and a rock-hard eyeball on palpation. Which is the priority nursing action?",
    options: ["Notify the provider immediately and prepare to administer IV acetazolamide and topical pilocarpine — this is acute angle-closure glaucoma", "Apply a warm compress and administer acetaminophen while waiting for the ophthalmologist to arrive", "Reassure the patient this is a typical glaucoma flare and administer their usual timolol drops", "Obtain a full set of vital signs, start an IV, and wait for provider orders before administering any medications"],
    correct: 0,
    rationale: "Acute angle-closure glaucoma is an ophthalmologic emergency — sudden complete blockage of aqueous humor outflow causes intraocular pressure (IOP) to spike (often above 50 mmHg), causing ischemic optic nerve damage within hours. Classic triad: severe eye pain, halos around lights, mid-dilated non-reactive pupil, and rock-hard eye. Immediate intervention with IV acetazolamide, topical miotics (pilocarpine), and beta blockers is required. Permanent vision loss occurs without urgent treatment."
  },
  {
    stem: "A patient with dry age-related macular degeneration (AMD) calls the nurse reporting that straight lines now appear wavy when using their Amsler grid — a change from their last check one week ago. What is the nurse's priority response?",
    options: ["Instruct the patient to come in immediately — new Amsler grid distortion may indicate conversion to wet age-related macular degeneration (AMD) requiring urgent treatment", "Reassure the patient that wavy lines are expected with dry type and to monitor for further changes at the next scheduled visit", "Advise the patient to rest their eyes, avoid screens for 48 hours, and call back if the distortion worsens", "Tell the patient this is likely fatigue-related and to recheck the Amsler grid after a full night of sleep"],
    correct: 0,
    rationale: "New or worsening Amsler grid distortion in a patient with dry age-related macular degeneration (AMD) is a warning sign of conversion to wet age-related macular degeneration (AMD) — where abnormal blood vessel growth under the macula can cause rapid, irreversible central vision loss within days. This requires urgent evaluation for anti-VEGF injection therapy. Patients with dry AMD are specifically taught to use the Amsler grid daily and report new distortion immediately."
  },
  {
    stem: "The nurse is caring for four patients on a medical-surgical unit. Which patient should the nurse assess first?",
    options: ["A patient with atrial fibrillation whose heart rate has increased from 88 to 124 bpm over the last hour and who now reports new chest pain", "A patient post-cataract surgery (day 1) with mild photophobia and watery discharge from the operative eye", "A patient with Meniere's disease requesting their scheduled dose of meclizine (Antivert) for dizziness", "A patient with a new hearing aid asking for assistance with insertion before breakfast"],
    correct: 0,
    rationale: "The patient with atrial fibrillation and new chest pain is the priority — a rising ventricular rate with new chest pain suggests hemodynamic deterioration and possible ischemia, which can progress to an emergency. This requires immediate assessment. Mild post-operative photophobia after cataract surgery is expected. The Meniere's patient has a scheduled medication need — important but not urgent. The hearing aid patient has a comfort need."
  },
  {
    stem: "A patient one day after cataract surgery calls reporting mild watering and light sensitivity in the operative eye. At the end of the call they mention their vision suddenly went dark 20 minutes ago and has not returned. What is the nurse's priority action?",
    options: ["Instruct the patient to go to the emergency department immediately — sudden vision loss after cataract surgery is an emergency", "Reassure the patient that temporary darkening of vision is expected during the first 24 hours post-operatively", "Tell the patient to rest with their eye patched and call back if vision does not return within 2 hours", "Advise the patient to apply a warm compress and take acetaminophen for discomfort"],
    correct: 0,
    rationale: "Mild watering and light sensitivity are expected after cataract surgery. However, sudden vision loss is never expected — it is an emergency sign of complications such as central retinal artery occlusion, vitreous hemorrhage, or retinal detachment. The nurse must not be distracted by the benign symptoms mentioned first. Sudden vision loss requires immediate emergency evaluation."
  },

  // ===== DYSRHYTHMIAS (~12) =====
  {
    stem: "A patient with atrial fibrillation asks why they need to take warfarin every day even though they feel fine and have no symptoms. Which is the nurse's best response?",
    options: ["In atrial fibrillation, blood pools in the atria and can form clots that travel to the brain — anticoagulation significantly reduces your stroke risk", "Warfarin is given to convert your heart back to a normal rhythm over time", "The medication slows your heart rate by blocking the atrioventricular (AV) node conduction", "Anticoagulation is only necessary if you have symptoms — since you feel fine you can discuss stopping it with your provider"],
    correct: 0,
    rationale: "Atrial fibrillation causes turbulent, stagnant blood flow in the atria — particularly in the left atrial appendage — which promotes clot formation. These clots can embolize and cause stroke. Anticoagulation (warfarin, apixaban, rivaroxaban) significantly reduces this risk. Patients are often asymptomatic which is why they question the need — the nurse must explain the stroke risk clearly."
  },
  {
    stem: "A nurse is caring for a post-operative patient on bed rest following abdominal surgery. Which nursing interventions best prevent deep vein thrombosis (DVT) and pulmonary embolism (PE) in this patient?",
    options: ["Encourage early ambulation, apply sequential compression devices (SCDs), and administer prophylactic anticoagulation as ordered", "Keep the patient on strict bed rest and elevate both legs above heart level at all times", "Apply warm compresses to both calves twice daily and massage the legs to promote circulation", "Restrict fluid intake to prevent venous distension and clot formation in the lower extremities"],
    correct: 0,
    rationale: "Venous stasis from immobility is the primary risk factor for deep vein thrombosis (DVT) after surgery. Early ambulation is the most effective prevention — it promotes venous return. Sequential compression devices (SCDs) mechanically prevent stasis when the patient cannot ambulate. Pharmacologic prophylaxis (heparin, enoxaparin) reduces clotting risk. Massaging the calves is contraindicated — it can dislodge an existing clot."
  },
  {
    stem: "A patient with a history of heart failure is admitted for a myocardial infarction (MI). The provider orders IV furosemide 40 mg, IV heparin infusion, aspirin 325 mg, and metoprolol 5 mg IV. Before administering the metoprolol, the nurse assesses a heart rate of 48 bpm, blood pressure of 92/60 mmHg, and the patient reports feeling lightheaded. What is the nurse's priority action?",
    options: ["Hold the metoprolol, notify the provider, and document the assessment findings — administering it is unsafe given the bradycardia and hypotension", "Administer the metoprolol as ordered since it was prescribed to prevent further ischemia from tachycardia", "Give half the ordered dose of metoprolol and reassess the heart rate and blood pressure in 15 minutes", "Administer atropine 0.5 mg IV first, then give the metoprolol once the heart rate exceeds 60 bpm"],
    correct: 0,
    rationale: "Beta blockers like metoprolol are contraindicated when the patient is bradycardic (HR 48) and hypotensive (BP 92/60). Administering metoprolol would further decrease heart rate and blood pressure, risking hemodynamic collapse. The nurse must hold the medication and notify the provider — this is a clear safety issue. The nurse never halves or modifies a dose without a new order, and should not give atropine independently to make another medication safe to give."
  },
  {
    stem: "A patient on digoxin and furosemide has a potassium of 3.0 mEq/L and is now reporting nausea, loss of appetite, and seeing yellow-green halos around lights. What is the nurse's priority action?",
    options: ["Hold the digoxin, check the digoxin and potassium levels, and notify the provider immediately", "Administer the scheduled digoxin dose and replace the potassium before the next dose", "Increase the furosemide dose to eliminate the excess digoxin through the kidneys", "Reassure the patient that visual changes are a harmless side effect of digoxin"],
    correct: 0,
    rationale: "Nausea, anorexia, and xanthopsia (yellow-green halos) are classic signs of digoxin toxicity. Hypokalemia from furosemide potentiates digoxin toxicity by increasing myocardial sensitivity to digoxin. The nurse must hold the digoxin immediately, obtain digoxin and potassium levels, and notify the provider. Giving more digoxin to a toxic patient could be fatal."
  },
  {
    stem: "A patient with atrial fibrillation is scheduled for elective cardioversion. The patient's last dose of anticoagulation was 2 days ago and they forgot to take it yesterday. Which is the nurse's most important action before the procedure?",
    options: ["Notify the provider before proceeding — missed anticoagulation doses before cardioversion increase the risk of stroke from clot dislodgement", "Proceed with the cardioversion since one missed dose is unlikely to cause a significant clotting risk", "Administer a double dose of anticoagulation now and proceed with the scheduled cardioversion", "Reschedule the procedure for 6 months from now to allow full anticoagulation therapy to restart"],
    correct: 0,
    rationale: "Cardioversion can dislodge clots that form in the atria during inadequately anticoagulated atrial fibrillation, causing stroke. Guidelines require at least 3 weeks of therapeutic anticoagulation before elective cardioversion, or a transesophageal echocardiogram (TEE) to rule out atrial thrombus. A missed dose is a safety concern the provider must evaluate before proceeding."
  },
  {
    stem: "A patient with a permanent pacemaker is being discharged. Which instruction by the nurse requires the most emphasis to prevent a life-threatening complication?",
    options: ["Avoid placing cell phones, magnets, or MRI machines directly over the pacemaker site, and carry the pacemaker ID card at all times", "Avoid all air travel because altitude changes interfere with pacemaker battery function", "Take the pacemaker battery out and replace it monthly at the cardiologist's office", "Avoid any exercise or physical exertion permanently to prevent pacemaker lead displacement"],
    correct: 0,
    rationale: "Strong magnetic fields (MRI, large industrial magnets) can interfere with pacemaker function — switching it to an asynchronous mode or inhibiting it entirely, potentially causing life-threatening bradycardia or asystole in a pacemaker-dependent patient. Patients must always carry their pacemaker ID card for medical emergencies. Cell phones held over the pacemaker can also cause interference. Air travel is safe. Batteries are replaced surgically, not monthly. Exercise is encouraged within guidelines."
  },
  {
    stem: "A patient develops Torsades de Pointes during hospitalization. The nurse correctly identifies that this rhythm is most commonly caused by which condition?",
    options: ["Prolonged QT interval from medications or electrolyte imbalances", "Hypertension causing ventricular hypertrophy and increased automaticity", "Hyperkalemia causing peaked T waves and conduction abnormalities", "Sinus node dysfunction causing compensatory ectopic ventricular activity"],
    correct: 0,
    rationale: "Torsades de Pointes is a polymorphic ventricular tachycardia characterized by a twisting QRS pattern. It is classically triggered by a prolonged QT interval — from medications (antiarrhythmics, antibiotics, antipsychotics), hypokalemia, or hypomagnesemia. Treatment is IV magnesium sulfate and correction of the underlying cause."
  },
  {
    stem: "During a code, the nurse observes a completely flat baseline on the cardiac monitor with no discernible waveforms. The patient is pulseless and unresponsive. What is the correct immediate intervention?",
    options: ["Begin cardiopulmonary resuscitation (CPR) and confirm asystole in two leads — defibrillation is not indicated", "Deliver an immediate unsynchronized shock at maximum joules", "Administer adenosine 6 mg IV push and reassess rhythm", "Perform synchronized cardioversion at 100 joules"],
    correct: 0,
    rationale: "Asystole (flatline) is not a shockable rhythm — defibrillation will not help and can cause harm. The priority is cardiopulmonary resuscitation (CPR) and confirming asystole in at least 2 leads to rule out fine ventricular fibrillation. Epinephrine and vasopressin are the pharmacologic interventions. Synchronized cardioversion is for rhythms with organized electrical activity."
  },
  {
    stem: "A patient is admitted with complete heart block and a ventricular rate of 34 bpm. The provider places a transvenous pacemaker and sets it at 70 bpm. Thirty minutes later the nurse notices the patient's heart rate on the monitor is still 34 bpm despite pacemaker spikes visible on the strip. Blood pressure is 68/40 mmHg. What is the nurse's priority action?",
    options: ["Notify the provider immediately — this is failure to capture requiring urgent adjustment of pacemaker output or lead repositioning", "Increase IV fluid rate to 200 mL/hr to compensate for the low blood pressure from bradycardia", "Defibrillate the patient at 200 joules — the pacemaker spikes indicate a shockable rhythm", "Wait 30 more minutes for the pacemaker to reach therapeutic effect before escalating concerns"],
    correct: 0,
    rationale: "A transvenous pacemaker firing at 70 bpm with the patient's actual rate remaining at 34 bpm indicates failure to capture — the heart is not responding to the pacemaker's electrical stimulus. This is a pacemaker emergency. With a blood pressure of 68/40 mmHg the patient is in hemodynamic collapse. The provider must be notified immediately for urgent intervention — increasing output, repositioning the lead, or external pacing while the system is corrected."
  },
  {
    stem: "A patient on digoxin develops nausea, yellow-green halos around lights, and the following rhythm: regular rate of 48 bpm with frequent premature ventricular contractions (PVCs) in a bigeminy pattern. What is the nurse's priority action?",
    options: ["Hold the digoxin, check the digoxin level and potassium level, and notify the provider", "Administer the scheduled digoxin dose and increase the IV fluid rate", "Give atropine 0.5 mg IV for the bradycardia and continue the digoxin", "Reassure the patient — bigeminy is benign and visual changes are unrelated to digoxin"],
    correct: 0,
    rationale: "These are classic signs of digoxin toxicity: nausea, xanthopsia (yellow-green halos), bradycardia, and bigeminy. Digoxin toxicity is life-threatening. The nurse must hold the dose immediately, obtain a digoxin level, check potassium (hypokalemia potentiates toxicity), and notify the provider. Giving more digoxin would be dangerous."
  },
  {
    stem: "A nurse is preparing a patient for elective synchronized cardioversion. The patient is alert and anxious. Which pre-procedure action is the nurse's priority?",
    options: ["Ensure IV access, supplemental oxygen, and sedation are in place before delivering the shock", "Verify the patient is in a fasting state for at least 8 hours before the procedure", "Apply the defibrillator pads to the chest and immediately deliver the shock to minimize delay", "Obtain a 12-lead electrocardiogram (ECG) and wait for cardiology to interpret it before proceeding"],
    correct: 0,
    rationale: "Before synchronized cardioversion, IV access is needed for sedation, supplemental oxygen is required, and sedation must be administered because the procedure is painful. The patient should be monitored continuously and resuscitation equipment must be available. Fasting is ideal but not always possible in elective cases. Shocking an alert unsedated patient without preparation is unsafe and inappropriate."
  },
  {
    stem: "A patient on digoxin and furosemide has a serum potassium of 2.9 mEq/L. The provider orders oral potassium chloride 40 mEq. The patient refuses, stating it upsets their stomach. What is the nurse's best action?",
    options: ["Administer the potassium with food or juice, explain the risk of dysrhythmias from hypokalemia, and notify the provider if the patient continues to refuse", "Document the refusal, hold the potassium, and administer the next scheduled dose of digoxin and furosemide as ordered", "Override the patient's refusal because hypokalemia with digoxin use is a life-threatening combination", "Switch the patient to IV potassium without contacting the provider since it bypasses the GI tract"],
    correct: 0,
    rationale: "Hypokalemia with digoxin use is dangerous — low potassium potentiates digoxin toxicity and increases dysrhythmia risk. The nurse should first try to improve tolerability (give with food or juice), educate the patient on the serious risk, and document the exchange. If the patient still refuses, the nurse notifies the provider — a competent patient has the right to refuse, but the provider must be informed so alternative routes or doses can be ordered. The nurse cannot independently switch routes or override a patient's refusal."
  },
  {
    stem: "A patient with new-onset atrial flutter is admitted. The provider plans electrical cardioversion. The patient states they have not taken their anticoagulant for the past 3 weeks due to cost concerns. Which concern does the nurse immediately bring to the provider's attention?",
    options: ["Cardioversion without adequate anticoagulation risks dislodging atrial clots and causing stroke — the procedure may need to be postponed or a transesophageal echocardiogram (TEE) obtained first", "Cardioversion can proceed safely without anticoagulation since atrial flutter carries less stroke risk than atrial fibrillation", "The anticoagulant must be restarted for 24 hours before cardioversion can safely proceed", "Cardioversion is contraindicated permanently in patients who have ever been non-compliant with anticoagulation"],
    correct: 0,
    rationale: "Cardioversion — electrical or pharmacological — can dislodge clots that have formed in the atria during poorly anticoagulated flutter or fibrillation, causing embolic stroke. Guidelines require either adequate anticoagulation for at least 3 weeks prior, or a transesophageal echocardiogram (TEE) to rule out atrial thrombus before cardioversion. This is a patient safety issue requiring immediate provider communication before proceeding."
  },

  // ===== RESPIRATORY (~12) =====
  {
    stem: "A patient with a chest tube for a left pneumothorax has continuous bubbling in the water seal chamber that has been present since insertion 30 minutes ago. Which interpretation is correct?",
    options: ["This may indicate an air leak in the system or from the lung — assess connections and the insertion site", "Continuous bubbling is expected and confirms the chest tube is functioning correctly", "The lung has re-expanded — the chest tube can be removed", "Bubbling indicates the chest tube is in the pleural space filled with fluid, not air"],
    correct: 0,
    rationale: "Continuous bubbling in the water seal chamber indicates an air leak — either from the lung itself or from the system (loose connection, break in tubing). Gentle bubbling with respiration is expected initially. Continuous bubbling requires systematic assessment from the patient outward: check the dressing, all connections, and collection system. Absence of bubbling may indicate lung re-expansion or tube occlusion."
  },
  {
    stem: "A mechanically ventilated patient's peak airway pressure alarm sounds. The nurse notes the pressure reading is 42 cmH₂O (baseline 22 cmH₂O). Which assessment finding would most likely explain this change?",
    options: ["The patient is biting the endotracheal tube or has developed new secretions", "The patient self-extubated and the alarm is responding to disconnection", "The ventilator circuit has developed a large air leak", "The positive end-expiratory pressure (PEEP) has been inadvertently turned off"],
    correct: 0,
    rationale: "High pressure alarms indicate increased resistance or decreased compliance. Biting the tube creates obstruction; accumulated secretions obstruct airflow — both cause pressure to spike. A disconnection or large air leak would trigger a low pressure alarm. PEEP changes affect mean airway pressure differently. The nurse must assess and suction, reposition, or provide a bite block."
  },
  {
    stem: "A patient with community-acquired pneumonia (CAP) develops increasing confusion, respiratory rate of 30 breaths per minute, blood pressure of 88/56 mmHg, and temperature of 39.8°C. Which condition should the nurse suspect?",
    options: ["Septic shock secondary to pneumonia — notify the provider immediately and prepare for sepsis bundle interventions", "Expected progression of pneumonia — increase the antibiotic dose and monitor closely", "Pulmonary embolism (PE) — prepare for anticoagulation therapy", "Acute respiratory distress syndrome (ARDS) — begin prone positioning protocol"],
    correct: 0,
    rationale: "This patient meets sepsis criteria: infection source (pneumonia), plus signs of organ dysfunction (confusion = altered mental status, hypotension, tachypnea, high fever). This is a medical emergency — the nurse must notify the provider immediately and initiate sepsis bundle: blood cultures, IV fluids, antibiotics within 1 hour, vasopressors if needed. Early recognition and treatment significantly reduces mortality."
  },
  {
    stem: "A patient with active pulmonary tuberculosis (TB) is being treated with rifampin, isoniazid, pyrazinamide, and ethambutol. The patient calls reporting yellow skin and dark urine at week 6 of treatment. What is the nurse's most important response?",
    options: ["Advise the patient to stop all medications immediately, come to the clinic, and not restart without provider evaluation", "Reassure the patient that rifampin turns urine orange and skin discoloration is an expected side effect", "Tell the patient to continue medications but reduce the dose of rifampin by half", "Instruct the patient to increase fluid intake and take the medications with food only"],
    correct: 0,
    rationale: "Yellow skin (jaundice) and dark urine at week 6 of tuberculosis (TB) treatment are signs of hepatotoxicity — a serious adverse effect of isoniazid, rifampin, and pyrazinamide. The patient must stop all medications immediately and be evaluated before restarting. Rifampin causes orange urine but not jaundice. Continuing medications with dose reduction is dangerous when hepatotoxicity is suspected."
  },
  {
    stem: "A patient with acute respiratory distress syndrome (ARDS) has a PaO₂ of 55 mmHg despite being on 100% FiO₂ via non-rebreather mask. What intervention does the nurse anticipate?",
    options: ["Intubation and mechanical ventilation with positive end-expiratory pressure (PEEP) — non-rebreather mask is insufficient", "Increase the oxygen flow rate and add a face tent to improve delivery", "Place the patient in Trendelenburg position to improve pulmonary blood flow", "Administer IV furosemide (Lasix) to reduce pulmonary edema and improve oxygenation"],
    correct: 0,
    rationale: "Hypoxemia refractory to high-flow supplemental oxygen is the hallmark of acute respiratory distress syndrome (ARDS). Non-rebreather mask is inadequate — intubation with mechanical ventilation and positive end-expiratory pressure (PEEP) is required to recruit collapsed alveoli and maintain oxygenation. Trendelenburg worsens respiratory mechanics. Furosemide is for cardiogenic pulmonary edema, not ARDS."
  },
  {
    stem: "A patient develops sudden sharp pleuritic chest pain, absent breath sounds on the right, and tracheal deviation to the left after a central line insertion. What is the priority intervention?",
    options: ["Prepare for emergency needle decompression followed by chest tube insertion — this is a tension pneumothorax", "Obtain a stat chest X-ray before any intervention to confirm the diagnosis", "Administer morphine for pain and apply oxygen via nasal cannula at 2 L/min", "Place the patient in high Fowler's position and reassess breath sounds in 30 minutes"],
    correct: 0,
    rationale: "Tracheal deviation away from the affected side, absent breath sounds, and sudden onset after central line insertion are hallmarks of tension pneumothorax — a life-threatening emergency. Immediate needle decompression (2nd intercostal space, midclavicular line) is required before waiting for a chest X-ray. Delay causes obstructive shock and cardiac arrest. A chest tube is placed after decompression."
  },
  {
    stem: "A nurse is teaching a post-operative patient to use an incentive spirometer. Which instruction is most important to emphasize?",
    options: ["Inhale slowly and deeply, hold for 2–3 seconds, then exhale — repeat every 1–2 hours while awake", "Blow forcefully into the device as hard as possible to reach the highest ball position", "Use the spirometer only when experiencing shortness of breath or chest tightness", "Take three quick shallow breaths followed by one deep breath to fully expand the lungs"],
    correct: 0,
    rationale: "The incentive spirometer prevents atelectasis by promoting deep lung inflation. The correct technique is slow deep inhalation, sustained for 2–3 seconds to keep alveoli open, then normal exhalation. Frequency is every 1–2 hours while awake post-operatively. Forceful blowing is not the purpose — it is an inspiratory device. Shallow breaths do not achieve full alveolar expansion."
  },
  {
    stem: "A patient admitted with a flail chest segment is breathing at 28 breaths per minute with paradoxical chest wall movement and an SpO₂ of 87% on 4L nasal cannula. What is the priority nursing action?",
    options: ["Notify the provider immediately — this patient requires intubation and mechanical ventilation", "Apply a tight chest binder over the flail segment to stabilize it", "Increase oxygen to 15 L/min via non-rebreather mask and reassess in 30 minutes", "Place the patient prone to improve oxygenation through positional maneuver"],
    correct: 0,
    rationale: "Severe flail chest with hypoxia (SpO₂ 87%), tachypnea, and paradoxical movement indicates respiratory failure. The definitive treatment is internal pneumatic stabilization via mechanical ventilation with positive pressure. Chest binders are outdated and ineffective. Non-rebreather mask alone is insufficient for this degree of compromise. The nurse must notify the provider urgently for intubation."
  },
  {
    stem: "A patient diagnosed with active pulmonary tuberculosis (TB) is placed in airborne isolation. After two days the patient refuses meals and states 'I feel like a prisoner in here.' Which nursing response is most therapeutic?",
    options: ["Acknowledge the patient's feelings, explain why isolation is necessary for safety, and explore ways to maintain connection with family", "Remind the patient that isolation is required by law and there are no alternatives while they remain contagious", "Offer to discharge the patient to home isolation where they will feel more comfortable and less restricted", "Contact the provider to request a shorter isolation period since the patient is becoming emotionally distressed"],
    correct: 0,
    rationale: "Isolation for tuberculosis (TB) causes significant psychological distress — loneliness, depression, and loss of control are common. The therapeutic response acknowledges the patient's feelings (validation), explains the rationale clearly (education), and problem-solves ways to reduce isolation such as video calls, phone access, and window visits. Dismissing feelings or citing legal requirements without empathy is non-therapeutic."
  },
  {
    stem: "A patient with emphysema is admitted for acute exacerbation. The nurse's most important consideration when administering oxygen is which of the following?",
    options: ["Patients with chronic CO₂ retention may have a hypoxic drive — excessive oxygen can suppress respiratory drive", "Oxygen is always safe at any flow rate in emphysema — the priority is preventing hypoxia", "Oxygen must be humidified before administration to prevent bronchospasm in emphysema patients", "Supplemental oxygen is contraindicated in emphysema because it worsens air trapping"],
    correct: 0,
    rationale: "Patients with severe emphysema who chronically retain CO₂ may rely on hypoxic drive (low PaO₂) to stimulate breathing — their central chemoreceptors are desensitized to CO₂. High-flow oxygen can suppress this drive, causing hypoventilation and worsening respiratory failure. Oxygen should be titrated to maintain SpO₂ 88–92%, not higher. This is a nuanced concept — oxygen is still given, just carefully."
  },
  {
    stem: "A patient with a pulmonary embolism (PE) who is anticoagulated with heparin begins coughing up blood. What is the nurse's immediate priority action?",
    options: ["Hold the heparin infusion, notify the provider immediately, and monitor vital signs closely", "Continue the heparin infusion — hemoptysis is expected with pulmonary embolism and is not dangerous", "Administer protamine sulfate immediately to reverse heparin without waiting for provider orders", "Obtain a sputum culture and increase the IV fluid rate to dilute the anticoagulant"],
    correct: 0,
    rationale: "Hemoptysis (coughing up blood) in an anticoagulated patient is a serious bleeding complication. The heparin must be held immediately and the provider notified. Protamine sulfate reverses heparin but must be ordered by the provider — the nurse cannot independently administer it. Continuing heparin with active bleeding is dangerous. Monitoring hemodynamic status and preparing for potential reversal is the appropriate response."
  },
  {
    stem: "A tuberculosis (TB)-positive patient who has been on four-drug therapy for 3 weeks insists on returning to work at a day care center. Which response by the nurse is most accurate?",
    options: ["You are likely no longer contagious after 2–3 weeks of effective therapy, but return to work requires provider clearance and negative sputum cultures", "You can return to work immediately — three weeks of treatment makes tuberculosis (TB) completely non-contagious", "You must remain in isolation until the full 6–9 month course of therapy is completed", "Tuberculosis (TB) is not contagious in adults so working around children is safe at any point in treatment"],
    correct: 0,
    rationale: "After 2–3 weeks of effective four-drug therapy, most tuberculosis (TB) patients are no longer contagious and sputum culture conversion is expected. However, return to work — especially in settings with vulnerable populations like children — requires provider clearance and typically negative sputum smears. The nurse must not unilaterally clear the patient or give blanket reassurances."
  },

  // ===== FLUID & ELECTROLYTES & ABGs (~12) =====
  {
    stem: "A patient with heart failure receives IV furosemide and develops muscle weakness, abdominal cramping, and electrocardiogram (ECG) changes showing flat T waves and prominent U waves. Potassium is 2.8 mEq/L. IV potassium replacement is ordered. Which action is essential before administration?",
    options: ["Confirm adequate urine output (at least 30 mL/hr) before administering IV potassium", "Administer the potassium IV push over 2 minutes for fastest correction", "Mix the potassium in a small volume and give it as a bolus via peripheral IV", "Hold the potassium until the electrocardiogram (ECG) changes resolve spontaneously"],
    correct: 0,
    rationale: "IV potassium replacement requires confirmed adequate urine output — if the kidneys cannot excrete potassium, administration can cause life-threatening hyperkalemia and cardiac arrest. IV potassium must never be given as an IV push — it must be diluted and infused slowly via an infusion pump. The flat T waves and U waves confirm hypokalemia and validate the need for replacement."
  },
  {
    stem: "A patient with chronic kidney disease has a potassium of 6.4 mEq/L and peaked T waves on the electrocardiogram (ECG). IV calcium gluconate is administered. The nurse correctly understands that calcium gluconate performs which action in this situation?",
    options: ["Stabilizes the cardiac membrane to protect against dysrhythmias — it does NOT lower the serum potassium level", "Directly lowers serum potassium by driving it into cells alongside glucose and insulin", "Permanently removes potassium from the body through enhanced renal excretion", "Reverses the electrocardiogram (ECG) changes by blocking potassium channels permanently"],
    correct: 0,
    rationale: "Calcium gluconate is cardiac membrane stabilization — it raises the threshold for cardiac depolarization, protecting against fatal dysrhythmias while other measures lower the potassium. It has no effect on serum potassium levels. Insulin with glucose and sodium bicarbonate shift potassium into cells temporarily. Loop diuretics and Kayexalate actually remove potassium from the body."
  },
  {
    stem: "A patient with a serum sodium of 158 mEq/L is agitated, has dry mucous membranes, and a temperature of 38.5°C. The provider orders hypotonic IV fluid. The nurse understands that sodium must be corrected at which rate to prevent serious neurological complications?",
    options: ["No faster than 0.5–1 mEq/L per hour to prevent cerebral edema from rapid osmotic shifts", "As quickly as possible — the priority is normalizing sodium within 2 hours", "At a fixed rate of 10 mEq/L per hour until sodium reaches 140 mEq/L", "Correction rate does not matter for hypernatremia — only hyponatremia requires slow correction"],
    correct: 0,
    rationale: "Hypernatremia must be corrected slowly — no faster than 0.5–1 mEq/L per hour (max 10–12 mEq/L per day). Rapid correction with hypotonic fluid can cause brain cells to swell rapidly (cerebral edema), leading to seizures and herniation. This is the same principle as hyponatremia correction — osmotic shifts must be gradual to allow the brain to adapt."
  },
  {
    stem: "A patient with a bowel obstruction has been NPO with nasogastric (NG) suction for 3 days. Arterial blood gas (ABG) shows pH 7.52, PaCO₂ 46 mmHg, HCO₃⁻ 36 mEq/L. Which interpretation and intervention are correct?",
    options: ["Uncompensated metabolic alkalosis from hydrochloric acid (HCl) loss via NG suction — replace chloride and potassium", "Uncompensated respiratory alkalosis from hyperventilation — have the patient breathe into a paper bag", "Partially compensated metabolic acidosis from bowel obstruction causing bicarbonate loss", "Fully compensated respiratory acidosis from hypoventilation during nasogastric (NG) tube discomfort"],
    correct: 0,
    rationale: "pH 7.52 alkalotic, HCO₃⁻ 36 elevated, PaCO₂ 46 normal = uncompensated metabolic alkalosis. Prolonged nasogastric (NG) suction removes hydrochloric acid (HCl) and potassium, driving bicarbonate to rise. Treatment is chloride and potassium replacement (normal saline with KCl). The lungs have not yet compensated (PaCO₂ still normal). This is a classic NCLEX scenario."
  },
  {
    stem: "A patient prescribed hydromorphone via patient-controlled analgesia (PCA) has a respiratory rate of 7 breaths per minute and is difficult to arouse. An arterial blood gas (ABG) shows pH 7.28, PaCO₂ 62 mmHg, HCO₃⁻ 24 mEq/L. Which intervention is the nurse's priority?",
    options: ["Stop the PCA, stimulate the patient, apply oxygen, and prepare to administer naloxone — this is opioid-induced respiratory depression", "Decrease the PCA dose by half and reassess respiratory rate in one hour", "Encourage the patient to take deep breaths and continue the PCA at the current dose", "Obtain a repeat arterial blood gas (ABG) in 30 minutes before taking any action"],
    correct: 0,
    rationale: "pH 7.28 acidotic, PaCO₂ 62 elevated, HCO₃⁻ 24 normal = uncompensated respiratory acidosis. Combined with a respiratory rate of 7 and unresponsiveness, this is opioid-induced respiratory depression — a life-threatening emergency. The nurse must stop the PCA immediately, stimulate the patient, apply supplemental oxygen, and prepare naloxone (Narcan) for administration. The kidneys have not yet compensated (HCO₃⁻ is normal), confirming this is acute."
  },
  {
    stem: "A patient is two days post-abdominal surgery and has 3+ pitting edema and a blood pressure of 88/58 mmHg despite receiving two IV fluid boluses. The provider states the patient is in 'third spacing.' Which explanation best describes what is happening?",
    options: ["Fluid has shifted into a body compartment where it cannot circulate — the patient appears fluid overloaded but the vascular space is depleted", "The patient's kidneys are retaining too much sodium and water, causing both the edema and the hypotension simultaneously", "The IV fluids are leaking out of the IV site into surrounding tissue, preventing them from reaching the bloodstream", "Fluid overload is causing the heart to pump less effectively, resulting in low blood pressure from reduced cardiac output"],
    correct: 0,
    rationale: "Third spacing occurs when fluid shifts from the vascular space into compartments where it cannot participate in circulation — such as the interstitium (edema) or body cavities (ascites, pleural effusion). Despite visible fluid excess, the vascular compartment is depleted, causing hypotension. IV fluids given to correct this shift temporarily into the third space as well. Management includes treating the underlying cause while monitoring closely."
  },
  {
    stem: "A patient in the ICU has an arterial blood gas (ABG): pH 7.44, PaCO₂ 28 mmHg, HCO₃⁻ 19 mEq/L. The patient has a history of diabetic ketoacidosis (DKA) treated over 24 hours. Which interpretation is correct?",
    options: ["Fully compensated metabolic acidosis — the pH has normalized but both values remain abnormal", "Uncompensated respiratory alkalosis — the lungs are hyperventilating without metabolic cause", "Normal arterial blood gas (ABG) — all values are within acceptable limits", "Partially compensated metabolic alkalosis — the kidneys are excreting excess bicarbonate"],
    correct: 0,
    rationale: "pH 7.44 is normal but leans toward base (high-normal). HCO₃⁻ 19 is low (acid column). PaCO₂ 28 is low (base column — lungs compensating). Both are abnormal but pH is back to normal = fully compensated. pH leans toward base... wait — 7.44 leans toward base but HCO₃⁻ is in acid column. The primary driver is the HCO₃⁻ (metabolic acidosis from DKA), lungs have fully compensated by blowing off CO₂, normalizing pH = Fully Compensated Metabolic Acidosis."
  },
  {
    stem: "A patient's serum calcium is 12.8 mg/dL. Which assessment finding would the nurse most likely identify in this patient?",
    options: ["Hyporeflexia, muscle weakness, constipation, confusion, and polyuria", "Positive Trousseau's sign, carpopedal spasm, and QT prolongation on the electrocardiogram (ECG)", "Peaked T waves, widened QRS, and absent P waves on the electrocardiogram (ECG)", "Muscle cramps, perioral tingling, and positive Chvostek's sign"],
    correct: 0,
    rationale: "Hypercalcemia (> 10.4 mg/dL) presents with the classic 'bones, groans, moans, and stones' — bone pain, abdominal pain/constipation (groans), confusion/depression (moans), and kidney stones. Neuromuscular findings include hyporeflexia and muscle weakness (opposite of hypocalcemia). Trousseau's sign, carpopedal spasm, QT prolongation, and Chvostek's sign are all signs of hypocalcemia."
  },
  {
    stem: "A patient with hypovolemia is ordered IV fluids. The nurse has Lactated Ringer's and 0.9% normal saline available. Which correctly describes the behavior of these solutions once infused?",
    options: ["Both are isotonic solutions that stay in the vascular space and expand circulating blood volume without causing fluid shifts", "Both are hypotonic solutions that shift fluid into cells, expanding the intracellular compartment to correct dehydration", "Normal saline is isotonic and stays in the vascular space; Lactated Ringer's is hypertonic and pulls fluid from cells", "Normal saline shifts fluid into cells; Lactated Ringer's stays in the vascular space due to its electrolyte composition"],
    correct: 0,
    rationale: "Both 0.9% normal saline and Lactated Ringer's are isotonic solutions — their osmolality matches blood plasma. Isotonic fluids stay in the extracellular/vascular space and expand circulating blood volume without causing fluid shifts into or out of cells. This makes them the appropriate choice for hypovolemia, hemorrhage, and dehydration. Hypotonic solutions (0.45% NS, D5W after metabolism) shift fluid into cells."
  },
  {
    stem: "A patient in acute respiratory failure has an arterial blood gas (ABG): pH 7.28, PaCO₂ 68 mmHg, HCO₃⁻ 30 mEq/L, PaO₂ 52 mmHg. The nurse correctly identifies this as which acid-base disturbance?",
    options: ["Partially compensated respiratory acidosis with hypoxemia — intubation is likely needed", "Uncompensated metabolic acidosis with compensatory hyperventilation", "Fully compensated respiratory acidosis — the kidneys have normalized the pH", "Uncompensated respiratory alkalosis — the elevated CO₂ is a compensatory mechanism"],
    correct: 0,
    rationale: "pH 7.28 is acidotic. PaCO₂ 68 is elevated — acid column. HCO₃⁻ 30 is elevated — base column (kidneys retaining bicarbonate to compensate). Both PaCO₂ and HCO₃⁻ are abnormal but pH is still acidotic = Partially Compensated Respiratory Acidosis. PaO₂ 52 meets criteria for acute respiratory failure (< 60 mmHg). This patient requires urgent intervention — mechanical ventilation is likely needed."
  },
  {
    stem: "A patient with chronic kidney disease is found to have a magnesium level of 3.8 mEq/L. Which assessment finding is the nurse's highest priority to monitor?",
    options: ["Deep tendon reflexes — loss of patellar reflex is the earliest sign of magnesium toxicity and indicates the infusion should be stopped", "Blood pressure — hypermagnesemia always causes acute hypertension before any other symptoms appear", "Urine output — hypermagnesemia causes oliguria which is the first sign of toxicity", "Skin turgor — hypermagnesemia causes severe dehydration that manifests as poor skin turgor"],
    correct: 0,
    rationale: "Hypermagnesemia toxicity progresses in a predictable order: loss of deep tendon reflexes → respiratory depression → cardiac arrest. The patellar (knee) reflex is the earliest warning sign — when it disappears, the nurse must stop the magnesium infusion immediately and notify the provider. Calcium gluconate is the antidote and should be at the bedside. This applies to both IV magnesium therapy and hypermagnesemia from kidney disease."
  },
  {
    stem: "A nurse is caring for a patient receiving IV magnesium sulfate for hypomagnesemia. Which assessment finding requires the nurse to immediately stop the infusion?",
    options: ["Loss of deep tendon reflexes (patellar reflex absent)", "Respiratory rate of 16 breaths per minute", "Urine output of 35 mL per hour", "Mild flushing and warmth at the IV site"],
    correct: 0,
    rationale: "Loss of deep tendon reflexes is the earliest warning sign of magnesium toxicity — it occurs before respiratory depression and cardiac arrest. The nurse must stop the IV magnesium immediately and notify the provider. Normal respiratory rate (16), adequate urine output (35 mL/hr), and mild flushing are acceptable findings. Calcium gluconate should be at the bedside as the antidote for magnesium toxicity."
  },
// ===== ADDITIONAL PRIORITY QUESTIONS =====
  {
    stem: "A nurse on a respiratory unit receives morning report for four patients. Which patient should be assessed first?",
    options: ["A patient with chronic obstructive pulmonary disease (COPD) who developed a new productive cough overnight with SpO₂ dropping from 93% to 88%", "A patient with pneumonia who is requesting breakfast and asking when they can shower", "A patient with tuberculosis (TB) in airborne isolation who needs their morning medications", "A patient post-thoracotomy (day 2) with a chest tube that has 30 mL of serosanguineous drainage in the last hour"],
    correct: 0,
    rationale: "The patient with chronic obstructive pulmonary disease (COPD) whose SpO₂ dropped 5 points overnight with a new productive cough is the priority — acute respiratory deterioration in a COPD patient can progress rapidly to respiratory failure. A 30 mL/hr chest tube output post-thoracotomy is expected serosanguineous drainage and not alarming. The pneumonia patient requesting breakfast is stable. The tuberculosis (TB) patient needs medications but is in isolation and stable."
  },
  {
    stem: "A nurse is managing four cardiac patients. Which patient requires immediate intervention?",
    options: ["A patient with a permanent pacemaker whose rhythm strip shows pacemaker spikes not followed by QRS complexes at a rate of 48 bpm with complaints of dizziness", "A patient with atrial fibrillation on diltiazem whose heart rate is 74 bpm and who is eating lunch", "A patient with a first degree heart block, PR interval 0.24 seconds, asymptomatic with blood pressure 128/76 mmHg", "A patient in normal sinus rhythm who is anxious about their scheduled stress test this afternoon"],
    correct: 0,
    rationale: "Pacemaker spikes not followed by QRS complexes = failure to capture. At 48 bpm with dizziness, this patient is symptomatic and the pacemaker is not providing adequate cardiac output. This is a pacemaker malfunction requiring immediate provider notification and preparation for possible transcutaneous pacing. The other patients are stable — controlled atrial fibrillation rate, asymptomatic first degree block, and pre-test anxiety are all non-urgent."
  },
  {
    stem: "A nurse receives a call from a patient who had cataract surgery yesterday. The patient reports mild crusting on the eyelashes and some light sensitivity. At the end of the call, the patient also mentions their eye 'feels hard and really hurts' and vision has been getting worse all afternoon. What is the nurse's priority action?",
    options: ["Instruct the patient to go to the emergency department immediately — worsening pain, hardness, and vision loss suggest acute angle-closure glaucoma or endophthalmitis", "Reassure the patient that crusting, light sensitivity, pain, and mild vision blurring are all expected for the first few days after cataract surgery", "Advise the patient to apply a warm compress, take acetaminophen, and call back in the morning if symptoms persist", "Tell the patient to rest with their eye patched and come to the clinic at their regularly scheduled post-op visit tomorrow"],
    correct: 0,
    rationale: "The nurse initially heard mild expected symptoms (crusting, light sensitivity) but the additional details — worsening eye pain, hard eye, and declining vision — are red flags for either endophthalmitis or acute angle-closure glaucoma, both sight-threatening emergencies. This is a classic NCLEX trap: do not be distracted by the benign symptoms mentioned first. The nurse must address the most dangerous symptoms, not the ones mentioned first."
  },
  {
    stem: "A nurse is caring for a patient with a chest tube for pneumothorax. The water seal chamber suddenly stops fluctuating (tidaling) with respiration. Which interpretation and action are correct?",
    options: ["The tube may be kinked or occluded, or the lung may have re-expanded — assess the system, check for kinks, and notify the provider", "This is expected — fluctuation in the water seal always stops after 24 hours as the drainage system equilibrates", "The drainage system has malfunctioned — clamp the chest tube immediately and call the provider", "The lung has re-expanded — remove the chest tube immediately as it is no longer needed"],
    correct: 0,
    rationale: "Fluctuation (tidaling) in the water seal chamber with respiration is normal and indicates the system is patent and the lung has not fully re-expanded. When tidaling stops, there are two possibilities: (1) the tube is kinked, occluded, or has a dependent loop — assess and correct, or (2) the lung has fully re-expanded — confirmed by chest X-ray. The nurse must assess the system systematically, never clamp without a specific order, and never independently remove a chest tube."
  },
  {
    stem: "A nurse is preparing to administer IV potassium chloride 40 mEq in 100 mL normal saline over one hour to a patient with a potassium of 2.6 mEq/L. Which action is the nurse's highest priority before starting the infusion?",
    options: ["Confirm the patient has an adequate urine output of at least 30 mL/hr before starting", "Verify the potassium level was drawn from the same arm that has the peripheral IV", "Flush the IV line with 20 mL of normal saline to ensure patency before connecting the potassium bag", "Check that the patient's last meal was at least 2 hours ago to prevent electrolyte absorption interference"],
    correct: 0,
    rationale: "Adequate urine output must be confirmed before IV potassium replacement — if the kidneys cannot excrete excess potassium, administration can cause fatal hyperkalemia and cardiac arrest. This is a non-negotiable safety check. IV potassium is never pushed and must be given via an infusion pump. The other actions (flushing the line, checking arm) are correct nursing practice but are not the highest priority safety check before potassium administration."
  }
];
