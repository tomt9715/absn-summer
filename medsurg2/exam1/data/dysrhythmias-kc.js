window.QUESTIONS = [
  {
    stem: "On an EKG, what does the P wave represent?",
    options: ["Atrial depolarization", "Ventricular depolarization", "Ventricular repolarization", "Early ventricular repolarization"],
    correct: 0,
    rationale: "The P wave represents atrial depolarization (the atria contracting). The QRS complex is ventricular depolarization, the T wave is ventricular repolarization, and the ST segment is early ventricular repolarization."
  },
  {
    stem: "What is the normal duration of the PR interval?",
    options: ["0.12–0.20 seconds", "0.04–0.10 seconds", "0.20–0.30 seconds", "Less than 0.12 seconds"],
    correct: 0,
    rationale: "Normal PR interval is 0.12–0.20 seconds. Anything greater than 0.20 sec indicates a 1st degree heart block. A QRS complex is normally less than 0.12 sec."
  },
  {
    stem: "A U wave appearing on an EKG strip is associated with which electrolyte abnormality?",
    options: ["Hypokalemia", "Hyperkalemia", "Hypocalcemia", "Hypernatremia"],
    correct: 0,
    rationale: "A U wave is an abnormal finding that indicates hypokalemia (low potassium). This is a classic strip-reading question your professor flagged."
  },
  {
    stem: "What does the QRS complex represent, and what is its normal duration?",
    options: ["Ventricular depolarization; less than 0.12 sec", "Atrial depolarization; 0.12–0.20 sec", "Ventricular repolarization; less than 0.12 sec", "Atrial repolarization; 0.20 sec"],
    correct: 0,
    rationale: "The QRS complex represents ventricular depolarization (the ventricles contracting) and is normally less than 0.12 seconds. A wide QRS suggests a ventricular origin like PVCs or V-tach."
  },
  {
    stem: "On an EKG, ST segment elevation indicates which condition?",
    options: ["Myocardial infarction (MI)", "Hypokalemia, identified by a prominent U wave and flat or inverted T waves", "First degree heart block, identified by a prolonged PR interval greater than 0.20 seconds", "Atrial fibrillation, identified by an irregularly irregular rhythm with no discernible P waves"],
    correct: 0,
    rationale: "ST segment elevation indicates an myocardial infarction (MI), while ST depression indicates ischemia. The ST segment reflects early ventricular repolarization."
  },
  {
    stem: "An EKG rhythm strip is typically how many seconds long?",
    options: ["6 seconds", "10 seconds", "3 seconds", "12 seconds"],
    correct: 0,
    rationale: "Most strips are 6 seconds long. To get the heart rate, count the number of R waves (QRS complexes) on the 6-second strip and multiply by 10."
  },
  {
    stem: "To calculate heart rate from a 6-second strip, the nurse should:",
    options: ["Count the R waves and multiply by 10", "Count the P waves and multiply by 6", "Count the QRS complexes and multiply by 6", "Count the T waves and multiply by 10"],
    correct: 0,
    rationale: "Count the number of R points (QRS complexes) on the 6-second strip and multiply by 10 to get the heart rate. This is step 1 of the 4-step identification method (Rate, Rhythm, P wave, QRS)."
  },
  {
    stem: "Sinus bradycardia is defined by which heart rate?",
    options: ["Less than 60 bpm", "60–100 bpm", "100–150 bpm", "Greater than 100 bpm"],
    correct: 0,
    rationale: "Sinus bradycardia is a rate under 60 bpm with a regular rhythm and a P wave before every QRS. Sinus tachycardia is over 100 bpm."
  },
  {
    stem: "Which medication is given for symptomatic sinus bradycardia, and at what dose?",
    options: ["Atropine 0.5 mg IV push", "Adenosine 6 mg IV push", "Amiodarone 150 mg IV", "Epinephrine 1 mg IV"],
    correct: 0,
    rationale: "Atropine 0.5 mg IV push is given for symptomatic/unstable bradycardia. It should NOT be given to asymptomatic patients — first identify and treat the underlying cause."
  },
  {
    stem: "Atropine is appropriate for a bradycardic patient under which condition?",
    options: ["Only when the patient is symptomatic or unstable", "For all bradycardic patients regardless of symptoms", "Only when the patient is asymptomatic", "Only when the heart rate is above 60"],
    correct: 0,
    rationale: "Atropine is given only for symptomatic or unstable bradycardia (hypotension, altered level of consciousness (LOC), chest pain). Never give it to an asymptomatic patient — those may simply be monitored."
  },
  {
    stem: "Which of the following is a recognized cause of sinus tachycardia?",
    options: ["Fever", "Hypothyroidism", "Beta blocker use", "Sleep"],
    correct: 0,
    rationale: "Fever, shock, stress, exercise, anxiety, pain, and stimulants like caffeine and nicotine cause sinus tachycardia. Hypothyroidism, beta blockers, and sleep are causes of bradycardia."
  },
  {
    stem: "Which intervention is a vagal maneuver used to treat sinus tachycardia?",
    options: ["Bearing down (Valsalva)", "Administering Atropine", "Applying a warm compress to the chest", "Increasing IV fluid rate"],
    correct: 0,
    rationale: "Vagal maneuvers include bearing down (Valsalva), holding the breath, coughing, and applying an ice pack to the face. The first priority is always to treat the underlying cause."
  },
  {
    stem: "Which EKG finding is the classic identifier of atrial fibrillation?",
    options: ["Irregularly irregular rhythm with no discernible P waves", "Sawtooth-like flutter waves at a regular rate of approximately 250 to 400 beats per minute", "A twisting QRS pattern spiraling around the baseline at a rate of 150 to 300 beats per minute", "Progressive lengthening of the PR interval until a beat is dropped, then the cycle repeats"],
    correct: 0,
    rationale: "A-fib is identified by an irregularly irregular rhythm with no discernible P waves. Sawtooth waves are atrial flutter, wide bizarre QRS is PVC/V-tach, and progressive PR lengthening is Wenckebach."
  },
  {
    stem: "Why are all atrial fibrillation patients placed on anticoagulants (blood thinners)?",
    options: ["Blood pools in the atria and can form clots, leading to stroke", "Anticoagulants slow the ventricular rate", "They convert the rhythm back to normal sinus", "They prevent the atria from fibrillating"],
    correct: 0,
    rationale: "In A-fib the atria don't contract effectively, so blood pools and can form clots. A dislodged clot can travel to the brain and cause a stroke — the major risk. All A-fib patients are on blood thinners to prevent this."
  },
  {
    stem: "Atrial fibrillation with rapid ventricular response (RVR) is defined as:",
    options: ["A-fib with a heart rate over 100 bpm", "A-fib with a heart rate under 60 bpm", "A-fib that has converted to sinus rhythm", "A-fib with a regular rhythm"],
    correct: 0,
    rationale: "A-fib with rapid ventricular response (RVR) means the heart rate is over 100 bpm. It is treated with beta blockers to slow the ventricular rate. Plain A-fib runs under 100 bpm."
  },
  {
    stem: "Which EKG finding is the classic identifier of atrial flutter?",
    options: ["Sawtooth-like waves", "Irregularly irregular rhythm", "A twisting pattern around the baseline", "A completely flat line"],
    correct: 0,
    rationale: "Atrial flutter is identified by sawtooth-like waves, with a regular rhythm and a rate of 75–150 bpm. The QRS is typically narrow because ventricular conduction is normal. Treatment is IV push Adenosine."
  },
  {
    stem: "Atrial flutter differs from atrial fibrillation in which way?",
    options: ["Atrial flutter has a regular rhythm, while A-fib is irregularly irregular", "Atrial flutter has no P waves, while A-fib has clear P waves", "Atrial flutter is always pulseless, while A-fib has a pulse", "Atrial flutter has a wide QRS, while A-fib has a narrow QRS"],
    correct: 0,
    rationale: "The key distinction is rhythm regularity — atrial flutter is regular (sawtooth waves, rate 75–150 bpm), while A-fib is irregularly irregular with no discernible P waves. Both can have a pulse and both typically have a narrow QRS."
  },
  {
    stem: "A premature ventricular contraction (PVC) appears on the EKG as:",
    options: ["A wide, bizarre-looking QRS complex occurring earlier than expected", "A sawtooth-like flutter wave pattern occurring at a regular atrial rate of 250 to 400 bpm", "A progressively lengthening PR interval followed by a dropped QRS beat in a repeating cycle", "An absent P wave with an irregularly irregular rhythm and variable ventricular response"],
    correct: 0,
    rationale: "A PVC starts in the ventricle and fires before the next normal sinus impulse, producing a wide, bizarre QRS that comes earlier than expected."
  },
  {
    stem: "A PVC occurring every other beat is called:",
    options: ["Bigeminy", "Trigeminy", "Quadrigeminy", "Couplet"],
    correct: 0,
    rationale: "Bigeminy is a PVC every other beat. Trigeminy is every third beat, and quadrigeminy is every fourth beat."
  },
  {
    stem: "Infrequent PVCs occurring once or twice a day in an asymptomatic patient are managed how?",
    options: ["Monitor only", "Immediate defibrillation", "Adenosine IV push", "Emergency cardioversion"],
    correct: 0,
    rationale: "Infrequent PVCs (every 5 min or once/twice a day) are monitored only. If symptoms are severe, Amiodarone or beta blockers are used and the underlying cause is corrected."
  },
  {
    stem: "Ventricular tachycardia (V-tach) is defined as:",
    options: ["Three or more PVCs in a row at a rate over 100 bpm", "A single PVC every other beat", "An irregularly irregular rhythm with no P waves", "A rate under 60 bpm with a regular rhythm"],
    correct: 0,
    rationale: "V-tach is 3 or more PVCs in a row at over 100 bpm — a medical emergency. The QRS is very wide and abnormally shaped, and P waves cannot be distinguished."
  },
  {
    stem: "A patient in ventricular tachycardia WITH a pulse is treated with:",
    options: ["Cardioversion plus IV medication", "Immediate unsynchronized defibrillation with the highest available joule setting", "Atropine 0.5 mg IV push followed by transcutaneous pacing if no response", "Vagal maneuvers and adenosine since ventricular tachycardia with a pulse is a stable rhythm"],
    correct: 0,
    rationale: "V-tach WITH a pulse is treated with cardioversion plus IV medication. V-tach that is PULSELESS requires immediate defibrillation."
  },
  {
    stem: "A patient is found pulseless in ventricular tachycardia. What is the immediate treatment?",
    options: ["Defibrillate immediately", "Synchronized cardioversion", "Atropine IV push", "Vagal maneuvers"],
    correct: 0,
    rationale: "Pulseless V-tach requires immediate defibrillation (unsynchronized, high joules). Cardioversion is only for a patient who still has a pulse."
  },
  {
    stem: "What is the key difference between cardioversion and defibrillation?",
    options: ["Cardioversion is synchronized to the R wave; defibrillation is unsynchronized", "Cardioversion uses higher joules than defibrillation", "Cardioversion is for pulseless patients; defibrillation is for patients with a pulse", "There is no difference between the two"],
    correct: 0,
    rationale: "Cardioversion is synchronized (timed to the R point), uses lower joules, and is for an unstable patient WITH a pulse. Defibrillation is unsynchronized, uses higher joules, and is for a PULSELESS patient."
  },
  {
    stem: "Torsades de Pointes appears on the EKG as:",
    options: ["A twisting pattern with a rate of 150–300 bpm", "Sawtooth-like flutter waves at a regular atrial rate of 250 to 400 beats per minute", "An irregularly irregular rhythm with no discernible P waves and variable ventricular rate", "A flat, isoelectric baseline with no QRS complexes, P waves, or T waves visible"],
    correct: 0,
    rationale: "Torsades de Pointes shows a twisting pattern around the baseline with a rapid, irregular heartbeat of 150–300 bpm."
  },
  {
    stem: "Which dysrhythmia is the most common in cardiac arrest and requires immediate defibrillation?",
    options: ["Ventricular fibrillation (V-fib)", "Atrial fibrillation with rapid ventricular response, requiring synchronized cardioversion", "Third degree heart block, requiring emergent transcutaneous pacemaker placement", "Sinus bradycardia with hypotension, requiring atropine 0.5 mg IV push as first-line treatment"],
    correct: 0,
    rationale: "V-fib is the most common dysrhythmia in cardiac arrest and is a medical emergency requiring immediate defibrillation. Between cardiopulmonary resuscitation (CPR) and defibrillation, IV Amiodarone and IV Epinephrine are given."
  },
  {
    stem: "Ventricular asystole on an EKG appears as:",
    options: ["A flatline with no QRS complexes", "An irregularly irregular rhythm", "A sawtooth pattern", "A wide bizarre QRS at 120 bpm"],
    correct: 0,
    rationale: "Asystole is a flatline with no QRS complexes — the patient is pulseless and not breathing. Treatment is immediate cardiopulmonary resuscitation (CPR). A common cause is myocardial infarction (MI)."
  },
  {
    stem: "A first degree heart block is identified by:",
    options: ["A constant but prolonged PR interval greater than 0.20 sec", "Progressive PR lengthening until a beat is dropped", "A constant PR that suddenly drops a beat", "No relationship between P waves and QRS complexes"],
    correct: 0,
    rationale: "First degree block has a PR interval greater than 0.20 sec that is constant but prolonged — it never drops a beat. Progressive lengthening then drop is Wenckebach; sudden drop is Type 2; no P–QRS relationship is 3rd degree."
  },
  {
    stem: "Which heart block is characterized by a PR interval that progressively lengthens until a beat is dropped?",
    options: ["2nd degree Type 1 (Wenckebach)", "1st degree heart block, which has a constant prolonged PR interval that never drops a beat", "3rd degree (complete) heart block, in which P waves and QRS complexes have no relationship", "2nd degree Type 2, which has a constant PR interval that suddenly drops a beat without warning"],
    correct: 0,
    rationale: "2nd degree Type 1 (Wenckebach) shows progressive PR lengthening until a beat drops. 2nd degree Type 2 has a constant PR that suddenly drops — and is considered more dangerous."
  },
  {
    stem: "A third degree (complete) heart block typically requires which treatment?",
    options: ["A pacemaker", "Adenosine IV push", "Vagal maneuvers", "Monitoring only"],
    correct: 0,
    rationale: "In 3rd degree block the P waves and QRS have no relationship (atrioventricular (AV) dissociation), the rate runs 30–40 bpm, and the patient is always symptomatic — requiring a pacemaker. There is no cardioversion for this rhythm; pacing only."
  },
  {
    stem: "Which type of pacemaker uses external pads placed on the chest for emergency use?",
    options: ["Transcutaneous pacemaker", "Permanent pacemaker", "Transvenous temporary pacemaker", "Implantable defibrillator"],
    correct: 0,
    rationale: "A transcutaneous pacemaker uses external pads on the chest for emergency use. A permanent pacemaker is surgically implanted, and a transvenous temporary pacemaker is inserted via a vein."
  },
  {
    stem: "Which instruction is essential for a patient with a newly implanted pacemaker?",
    options: ["Avoid MRI and magnets, which can interfere with function", "Apply a magnet to the site daily to test it", "Limit fluid intake to prevent dislodgement", "Avoid all physical activity permanently"],
    correct: 0,
    rationale: "Magnets and MRI can interfere with pacemaker function, so the patient must avoid them and carry a pacemaker ID card. Activity is minimized initially to prevent electrode dislodgement, not forever."
  },
  {
    stem: "Which nursing intervention is appropriate immediately after a cardioversion procedure?",
    options: ["Continuous ECG monitoring", "Encourage the patient to eat a large meal", "Remove all oxygen", "Ambulate the patient immediately"],
    correct: 0,
    rationale: "After cardioversion, provide continuous ECG monitoring, oxygen, and pain management. The patient is kept nothing by mouth (NPO) prior to the procedure."
  },
  {
    stem: "A patient is found collapsed on the floor. After calling for help, what is the next priority action?",
    options: ["Check the carotid (neck) pulse", "Start chest compressions immediately", "Apply oxygen", "Obtain a 12-lead EKG"],
    correct: 0,
    rationale: "After calling for help, check the carotid pulse at the neck. If the patient is pulseless, begin cardiopulmonary resuscitation (CPR)."
  },
  {
    stem: "When placing precordial leads, where does lead V1 go?",
    options: ["4th intercostal space, right sternal border", "4th intercostal space, left sternal border", "5th intercostal space, midclavicular line", "Midaxillary line at the level of V4"],
    correct: 0,
    rationale: "V1 is placed at the 4th intercostal space, right sternal border. V2 is the same level on the left sternal border, and V4 sits at the 5th intercostal space, midclavicular line."
  },
  {
    stem: "Which finding indicates a patient is hemodynamically UNSTABLE and needs immediate treatment?",
    options: ["Hypotension (low BP) with altered level of consciousness", "A heart rate of 58 bpm in an asymptomatic patient with no complaints of dizziness or dyspnea", "A blood pressure of 118/76 mmHg with a normal level of consciousness and no chest pain", "Occasional premature ventricular contractions (PVCs) occurring once or twice daily without symptoms"],
    correct: 0,
    rationale: "Unstable means low BP (hypotension), altered level of consciousness (LOC), chest pain, or signs of poor perfusion — treat immediately. Low BP is the number one sign of instability."
  },
  {
    stem: "Before obtaining an EKG, which instruction should the nurse give the patient?",
    options: ["Stay still, do not talk, and do not tense the muscles", "Take deep rapid breaths during the recording", "Tense the arm muscles to improve the signal", "Apply lotion to the skin so leads adhere"],
    correct: 0,
    rationale: "The patient should stay still, not talk, and not tense muscles, since movement creates artifact. Skin must be dry with no lotion, and hairy areas should be shaved so leads adhere properly."
  },
{
    stem: "Why is supplemental oxygen given to a patient experiencing chest pain with a cardiac dysrhythmia?",
    options: ["To reduce myocardial workload and ensure oxygen delivery to the heart muscle", "To convert the dysrhythmia back to normal sinus rhythm by correcting hypoxic conduction disturbances", "To slow the heart rate directly by stimulating vagal tone through increased oxygen saturation", "To prevent clot formation in the atria by reducing the viscosity of blood during ischemia"],
    correct: 0,
    rationale: "Supplemental oxygen is given with chest pain because the heart muscle needs adequate oxygen supply. Any rhythm causing poor perfusion or hemodynamic instability also warrants oxygen. The goal is to reduce myocardial workload and prevent further ischemic damage."
  },
  {
    stem: "Torsades de Pointes is a life-threatening ventricular dysrhythmia. Which medication is the treatment of choice?",
    options: ["IV magnesium sulfate", "Atropine 0.5 mg IV push", "Adenosine IV push", "Oral beta blocker"],
    correct: 0,
    rationale: "Torsades de Pointes is treated with IV magnesium sulfate. It presents as a twisting QRS pattern at 150–300 bpm and is often triggered by prolonged QT interval or electrolyte imbalances. Atropine is for bradycardia, adenosine is for atrial flutter, and oral beta blockers are not appropriate for this emergency."
  },
  {
    stem: "Which statement correctly distinguishes 2nd degree Type 2 heart block from 2nd degree Type 1 (Wenckebach)?",
    options: ["Type 2 has a constant PR interval that suddenly drops a beat, and is considered more dangerous than Wenckebach", "Type 2 shows progressive PR lengthening before each dropped beat, similar to the Wenckebach pattern", "Type 2 is considered less dangerous than Wenckebach because the PR interval never changes predictably", "Type 2 and Wenckebach are clinically identical and treated the same way with vagal maneuvers"],
    correct: 0,
    rationale: "Second degree Type 2 has a constant PR interval that suddenly drops a beat without warning — making it more dangerous than Wenckebach (Type 1), which gives a predictable pattern of progressive PR lengthening before the dropped beat. Type 2 can progress unpredictably to complete heart block."
  },
  {
    stem: "Where are leads V2 and V4 placed on the chest?",
    options: ["V2 at the 4th intercostal space left sternal border; V4 at the 5th intercostal space midclavicular line", "V2 at the 5th intercostal space midclavicular line; V4 at the 4th intercostal space left sternal border", "V2 at the midaxillary line; V4 at the anterior axillary line", "V2 and V4 are both placed on the right side of the chest"],
    correct: 0,
    rationale: "V2 is at the 4th intercostal space, left sternal border (mirroring V1 on the right). V4 is at the 5th intercostal space, midclavicular line. V3 goes between V2 and V4; V5 is at the anterior axillary line and V6 at the midaxillary line, both at the same level as V4."
  },
  {
    stem: "Which medication is used for rate control in atrial fibrillation and atrial flutter by blocking calcium channels?",
    options: ["Verapamil (a calcium channel blocker)", "Atropine, which blocks vagal tone and increases the heart rate by accelerating sinus node firing", "Adenosine, which terminates reentrant supraventricular tachycardias by blocking the AV node transiently", "Epinephrine, which increases heart rate and myocardial contractility in cardiac arrest situations"],
    correct: 0,
    rationale: "Verapamil is a calcium channel blocker used for rate control in atrial fibrillation and atrial flutter. It slows conduction through the atrioventricular (AV) node. Other rate-control options include beta blockers like atenolol. Atropine is for bradycardia; epinephrine is for cardiac arrest."
  },
  {
    stem: "When a patient has a low heart rate or high heart rate due to anemia, why does the heart compensate by increasing its rate?",
    options: ["Low red blood cells reduce oxygen delivery, so the heart beats faster to circulate blood more quickly", "Anemia directly stimulates the sinoatrial (SA) node to fire faster through a chemical signaling cascade", "The heart slows down in anemia to conserve energy and reduce myocardial oxygen demand", "Anemia raises serum potassium levels, which triggers tachycardia through direct membrane effects"],
    correct: 0,
    rationale: "When red blood cell count is low (anemia), less oxygen is carried per unit of blood. The heart compensates by beating faster to circulate the available blood more quickly and maintain oxygen delivery to tissues. This compensatory tachycardia may require treatment of the underlying anemia, including blood transfusion."
  }
];
