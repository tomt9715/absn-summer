// MedSurg II FINAL EXAM REVIEW -- Arrhythmias (Ch 22) -- Deep Drill
// 16 questions, 90% hard / 10% medium, no easy. NEW scenarios distinct from exam1/data/dysrhythmias-dd.js
// and from the final exam simulator's Ch22 questions (different patients, vitals, and framing).
// correct: 0 always -- engine shuffles option order at runtime.
window.QUESTIONS = [
  {
    stem: "A nurse is teaching a nursing student how to prepare a patient for a 12-lead EKG. Which instruction should the nurse include?",
    options: ["Ask the patient to lie still, stay quiet, and avoid tensing muscles during the recording", "Instruct the patient to breathe deeply and talk normally throughout the recording", "Apply a thin layer of lotion to the skin before placing each electrode", "Position the patient sitting upright with legs dangling off the bed"],
    correct: 0,
    rationale: "The patient must lie still, stay quiet, and avoid tensing muscles, since talking or movement introduces artifact into the tracing. Lotion prevents proper electrode adhesion, and the patient is positioned supine, not sitting with legs dangling."
  },
  {
    stem: "A healthy 24-year-old marathon runner has a resting heart rate of 48 bpm on a routine physical and reports no symptoms. What is the nurse's most appropriate interpretation?",
    options: ["This is likely a normal variant related to conditioning and requires no treatment", "This requires immediate atropine administration to correct the bradycardia", "This indicates an underlying conduction system disease requiring pacemaker evaluation", "This is an emergency requiring transcutaneous pacing to be readily available"],
    correct: 0,
    rationale: "Sinus bradycardia is a normal variant in well-conditioned athletes due to increased vagal tone and requires no treatment when the patient is asymptomatic. Atropine and pacing are reserved for symptomatic bradycardia, and this presentation does not suggest conduction disease."
  },
  {
    stem: "A patient's monitor shows a PVC occurring after every other normal beat, forming a repeating pattern. How should the nurse document this finding?",
    options: ["Bigeminy", "Trigeminy", "Quadrigeminy", "Couplet"],
    correct: 0,
    rationale: "A PVC occurring every other beat is bigeminy. Trigeminy is a PVC every third beat and quadrigeminy every fourth beat. A couplet refers to two PVCs occurring consecutively, not a repeating alternating pattern."
  },
  {
    stem: "A patient in ventricular fibrillation has been defibrillated twice without conversion. Cardiopulmonary resuscitation (CPR) is ongoing. Which medications does the nurse anticipate administering between shocks?",
    options: ["IV epinephrine and amiodarone", "IV atropine and adenosine", "Oral metoprolol and digoxin", "IV magnesium sulfate only, with no epinephrine"],
    correct: 0,
    rationale: "During cardiac arrest from V-fib that persists after defibrillation, IV epinephrine and amiodarone are administered between shocks alongside continued CPR. Atropine and adenosine do not treat V-fib, and epinephrine remains a core part of the arrest algorithm alongside antiarrhythmics."
  },
  {
    stem: "A patient's chart shows they are scheduled for a permanent pacemaker after being diagnosed with symptomatic bradycardia unresponsive to medication. The patient asks what type of device this is compared to what they had temporarily in the ICU last week. What is the nurse's best explanation?",
    options: ["A permanent pacemaker is surgically implanted for long-term use, unlike the temporary transvenous or transcutaneous options used short-term", "A permanent pacemaker uses external pads on the chest, the same as what was used in the ICU", "A permanent pacemaker is only used during active cardiac arrest, unlike the ICU device", "A permanent pacemaker and a temporary pacemaker function identically with no difference in insertion method"],
    correct: 0,
    rationale: "A permanent pacemaker is surgically implanted for long-term management, while transvenous pacemakers are temporary devices inserted via a vein and transcutaneous pacemakers use external chest pads for emergency, short-term use. These are distinct devices with different indications and insertion methods."
  },
  {
    stem: "A patient with a history of anemia and a hemoglobin of 7.2 g/dL has a resting heart rate of 116 bpm. What is the most likely explanation for this finding?",
    options: ["The heart is compensating for decreased oxygen-carrying capacity by beating faster", "The patient is experiencing an unrelated primary cardiac arrhythmia requiring antiarrhythmic therapy", "The tachycardia indicates the anemia has fully resolved and no further workup is needed", "This finding is unrelated to the hemoglobin level and requires cardiology referral only"],
    correct: 0,
    rationale: "With significant anemia, the heart compensates for decreased oxygen-carrying capacity by increasing rate to maintain adequate tissue oxygenation. This tachycardia often resolves once the anemia is corrected, such as with a blood transfusion, rather than requiring separate antiarrhythmic treatment."
  },
  {
    stem: "A patient's EKG shows a PR interval of 0.26 seconds that remains constant on every beat, with no dropped beats. How should the nurse interpret this finding?",
    options: ["First degree heart block", "Second degree heart block, Type 1 (Wenckebach)", "Second degree heart block, Type 2", "Third degree (complete) heart block"],
    correct: 0,
    rationale: "A PR interval greater than 0.20 seconds that stays constant with no dropped beats is first degree heart block. Wenckebach shows progressive lengthening before a dropped beat, Type 2 shows a constant PR that suddenly drops a beat, and third degree shows no relationship between P waves and QRS complexes at all."
  },
  {
    stem: "A patient in stable atrial flutter with a ventricular rate of 88 bpm asks the nurse why they still need to be on an anticoagulant if their heart rate is well controlled. What is the nurse's best response?",
    options: ["A well-controlled rate does not eliminate the risk of clot formation from the underlying atrial rhythm disturbance", "Anticoagulation is only needed if the ventricular rate exceeds 150 bpm", "Rate control alone eliminates the need for anticoagulation in atrial flutter", "Anticoagulants are given only to prevent the flutter from converting to a more dangerous rhythm"],
    correct: 0,
    rationale: "Even with good rate control, the underlying atrial rhythm disturbance in flutter still predisposes to blood stasis and clot formation, so anticoagulation risk is not eliminated by rate alone. This mirrors the anticoagulation rationale used for atrial fibrillation."
  },
  {
    stem: "A patient's monitor shows a heart rate of 130 bpm with a regular rhythm, P waves hidden within the preceding T waves, and a narrow QRS. What rhythm does the nurse suspect?",
    options: ["Supraventricular tachycardia", "Ventricular tachycardia", "Atrial flutter", "Third degree heart block"],
    correct: 0,
    rationale: "A regular, narrow-QRS tachycardia with P waves hidden in the T waves is characteristic of supraventricular tachycardia (SVT). Ventricular tachycardia shows a wide QRS, atrial flutter shows sawtooth waves rather than hidden P waves, and third degree block shows a slow rate with no P-QRS relationship."
  },
  {
    stem: "A patient with symptomatic sinus bradycardia does not respond to two doses of IV atropine. What does the nurse anticipate as the next intervention?",
    options: ["Preparation for transcutaneous pacing", "A third dose of IV atropine at double the previous dose", "Synchronized cardioversion", "Administration of IV adenosine"],
    correct: 0,
    rationale: "When symptomatic bradycardia does not respond to atropine, the next step is transcutaneous pacing to mechanically stimulate the heart. Repeating a higher dose of atropine indefinitely is not the standard escalation, and cardioversion and adenosine both treat tachyarrhythmias, not bradycardia."
  },
  {
    stem: "A patient converted from atrial fibrillation to normal sinus rhythm one week ago asks the nurse whether they can stop their anticoagulant now that their rhythm looks normal on the monitor. What is the nurse's best response?",
    options: ["Atrial fibrillation can recur even after a successful conversion, so anticoagulation should continue as prescribed", "Anticoagulation can be safely stopped once normal sinus rhythm is confirmed for 48 hours", "The anticoagulant was only needed during the cardioversion procedure itself", "Stopping the anticoagulant is appropriate now since the rhythm has fully normalized"],
    correct: 0,
    rationale: "A-fib can revert even after a successful conversion back to normal sinus rhythm, so anticoagulation is continued as prescribed rather than discontinued based on a currently normal-appearing rhythm. Stopping prematurely leaves the patient at risk if the rhythm reverts."
  },
  {
    stem: "A patient's telemetry shows a narrow-complex rhythm at a rate of 190 bpm that begins and ends abruptly. The patient reports sudden palpitations that also stopped abruptly. What is this pattern most consistent with?",
    options: ["Paroxysmal supraventricular tachycardia", "Sustained ventricular tachycardia", "Atrial fibrillation with rapid ventricular response", "Sinus tachycardia from anxiety"],
    correct: 0,
    rationale: "An abrupt-onset, abrupt-offset narrow-complex tachycardia with sudden palpitations describes paroxysmal supraventricular tachycardia (PSVT), which characteristically starts and stops suddenly, unlike the gradual pattern of sinus tachycardia or the irregular pattern of A-fib."
  },
  {
    stem: "A patient with a newly inserted transvenous temporary pacemaker has pacer spikes on the monitor that are not consistently followed by a QRS complex. What does the nurse recognize, and what is the priority action?",
    options: ["Failure to capture; notify the provider promptly", "Expected pacemaker function requiring no action", "Failure to sense; increase the sensitivity setting independently", "Battery depletion; replace the generator battery without provider notification"],
    correct: 0,
    rationale: "A pacer spike that is not followed by a QRS complex indicates failure to capture, meaning the electrical stimulus is not triggering ventricular depolarization. This requires prompt provider notification, since the patient may not be receiving adequate cardiac output support from the device."
  },
  {
    stem: "A patient's rhythm strip shows a heart rate of 92 bpm, a regular rhythm, a normal P wave before every QRS, and a QRS duration of 0.08 seconds. How should the nurse interpret this strip?",
    options: ["Normal sinus rhythm, requiring no intervention", "Sinus tachycardia, requiring vagal maneuvers", "First degree heart block, requiring monitoring only", "Atrial flutter, requiring rate control"],
    correct: 0,
    rationale: "A rate of 92 with a regular rhythm, a normal P wave before every QRS, and a normal QRS duration of 0.08 seconds describes normal sinus rhythm, which requires no intervention. The rate is within the normal 60-100 range and every component of the strip is normal."
  },
  {
    stem: "A patient with a history of chronic atrial fibrillation reports new dizziness. The monitor shows the previously irregular rhythm has become perfectly regular at 40 bpm with no discernible P waves. What does the nurse suspect?",
    options: ["Progression to complete heart block with an underlying junctional or ventricular escape rhythm", "Successful conversion to normal sinus rhythm", "Expected fluctuation in chronic atrial fibrillation requiring no action", "Resolution of the atrial fibrillation without need for further monitoring"],
    correct: 0,
    rationale: "A previously irregular A-fib rhythm suddenly becoming perfectly regular at a slow rate with no discernible P waves suggests the AV node is no longer conducting atrial impulses at all, and a slower escape rhythm has taken over, consistent with progression to complete heart block. This is a concerning change requiring prompt evaluation, not a benign conversion to normal sinus rhythm."
  },
  {
    stem: "A patient reports chest pain rated 8 out of 10. The nurse notes the rhythm strip shows sinus tachycardia and prepares to apply supplemental oxygen. What is the primary rationale for this intervention?",
    options: ["Supplemental oxygen supports oxygen delivery to ischemic myocardial tissue and helps reduce cardiac workload", "Supplemental oxygen will directly convert the sinus tachycardia to a normal rate", "Supplemental oxygen is given to prevent the development of a pneumothorax during chest pain", "Supplemental oxygen replaces the need for further cardiac workup in this patient"],
    correct: 0,
    rationale: "In chest pain with tachycardia, supplemental oxygen supports oxygen delivery to stressed or ischemic myocardial tissue and helps reduce the workload on the heart. It does not correct the underlying rhythm, prevent pneumothorax, or substitute for further diagnostic workup such as an EKG and troponin levels."
  }
];
