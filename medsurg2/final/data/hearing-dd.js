// MedSurg II FINAL EXAM REVIEW -- Hearing and Balance Disorders (Ch 59) -- Deep Drill
// 10 questions, 90% hard / 10% medium, no easy. NEW scenarios distinct from exam1/data/vision-hearing-dd.js (which
// covers both vision and hearing comprehensively) and from the final simulator's Ch59 questions (Meniere's triad/diet,
// communication strategies). Fills gaps: cerumen impaction, chronic otitis media, nystagmus, Dix-Hallpike vs Epley
// distinction, cisplatin/salicylate ototoxicity, high-frequency hearing loss pattern, call light/alert safety,
// written/interpreter communication option.
// correct: 0 always -- engine shuffles option order at runtime.
window.QUESTIONS = [
  {
    stem: "An older adult patient reports gradual hearing loss and a feeling of fullness in one ear. On otoscopic exam, the nurse observes a large buildup of dark, hardened material occluding the ear canal. What does the nurse anticipate as the treatment for this finding?",
    options: ["Irrigation to remove the cerumen impaction", "Emergency surgical removal under general anesthesia", "A course of oral antibiotics to treat the underlying infection", "Placement of a hearing aid to compensate for the permanent hearing loss"],
    correct: 0,
    rationale: "Gradual hearing loss and a feeling of fullness with a visible buildup of hardened material on otoscopic exam describes cerumen (ear wax) impaction, which is treated with irrigation to remove the blockage. This is not an infection requiring antibiotics, does not require emergency surgery, and the hearing loss is typically reversible once the impaction is cleared, not permanent."
  },
  {
    stem: "A patient has a history of multiple episodes of acute otitis media over the past several years and now presents with persistent hearing loss and chronic ear drainage. What condition does the nurse recognize this represents?",
    options: ["Chronic otitis media", "Cerumen impaction", "Ménière's disease", "Benign paroxysmal positional vertigo"],
    correct: 0,
    rationale: "Chronic otitis media results from recurrent episodes of acute otitis media over time, presenting with persistent hearing loss and chronic drainage. This is distinct from cerumen impaction (a wax blockage), Ménière's disease (an inner ear fluid disorder with vertigo/tinnitus), and BPPV (a positional vertigo disorder), none of which are caused by recurrent middle ear infections."
  },
  {
    stem: "A nurse observes a patient's eyes making involuntary, rhythmic back-and-forth movements during a neurologic assessment. How should the nurse document this finding?",
    options: ["Nystagmus", "Vertigo", "Tinnitus", "Dizziness"],
    correct: 0,
    rationale: "Involuntary, rhythmic eye movement is documented as nystagmus, a distinct finding from vertigo (the illusion of motion or spinning), tinnitus (ringing in the ear), and dizziness (a general altered sense of orientation in space). Nystagmus is an observable eye movement, while the others are subjective sensations reported by the patient or auditory symptoms."
  },
  {
    stem: "A patient with suspected benign paroxysmal positional vertigo (BPPV) undergoes a Dix-Hallpike maneuver, which reproduces the patient's vertigo symptoms. The provider then performs the Epley maneuver. What is the difference in purpose between these two maneuvers?",
    options: ["The Dix-Hallpike maneuver is diagnostic, reproducing symptoms to confirm BPPV, while the Epley maneuver is therapeutic, repositioning displaced inner ear crystals", "Both maneuvers serve the same diagnostic purpose and are performed together only for confirmation", "The Dix-Hallpike maneuver treats BPPV, while the Epley maneuver is used only to diagnose it", "Both maneuvers are therapeutic and neither has any diagnostic value"],
    correct: 0,
    rationale: "The Dix-Hallpike maneuver is a diagnostic test that repositions the head to reproduce vertigo symptoms and confirm a diagnosis of BPPV, while the Epley maneuver is a therapeutic technique that repositions displaced otoconia (crystals) in the inner ear to relieve BPPV symptoms. These are distinct diagnostic and treatment tools, not interchangeable or serving the same single purpose."
  },
  {
    stem: "A patient receiving cisplatin chemotherapy reports new ringing in the ears and difficulty hearing high-pitched sounds. What is the nurse's priority action?",
    options: ["Report the findings to the provider immediately, as cisplatin is a known ototoxic agent", "Reassure the patient that these symptoms are an unrelated, benign finding during chemotherapy", "Document the findings and reassess in one week at the next scheduled visit", "Encourage the patient to increase fluid intake to flush the medication and resolve symptoms"],
    correct: 0,
    rationale: "Cisplatin is a chemotherapy agent known to be ototoxic, and new tinnitus with high-frequency hearing difficulty are early warning signs that should be reported to the provider immediately, since ototoxic damage can become permanent if the causative agent is not addressed promptly. This should not be dismissed as benign or deferred to a future visit."
  },
  {
    stem: "A patient taking high-dose aspirin for chronic pain management reports new ringing in the ears. What does the nurse recognize about this finding?",
    options: ["High-dose aspirin (a salicylate) is a known ototoxic medication, and this finding should be reported", "Aspirin has no known association with hearing changes at any dose", "This finding indicates the patient needs a higher dose of aspirin for adequate pain control", "This finding is expected and requires no further monitoring or provider notification"],
    correct: 0,
    rationale: "High-dose aspirin, a salicylate, is a recognized ototoxic medication, and new tinnitus in a patient taking this medication should be reported to the provider, since it may indicate early ototoxicity. This finding should not be dismissed as expected or unrelated, and it does not indicate a need for a higher dose."
  },
  {
    stem: "A patient receiving an ototoxic medication undergoes serial audiometry testing. Which pattern of hearing loss would the nurse expect to see first if ototoxicity is developing?",
    options: ["High-frequency hearing loss", "Low-frequency hearing loss", "Complete hearing loss across all frequencies simultaneously", "Hearing loss limited exclusively to the unaffected ear"],
    correct: 0,
    rationale: "Ototoxicity typically affects high-frequency hearing first, which is why serial audiometry monitoring is important in patients receiving ototoxic medications, to catch early changes before they progress to affect a broader range of frequencies or become permanent. Low-frequency loss, simultaneous total loss, or loss isolated to one specific ear are not the expected initial pattern."
  },
  {
    stem: "A nurse is setting up the room for a patient with significant hearing loss who is being admitted to the unit. In addition to communication strategies, what environmental safety measure should the nurse ensure is in place?",
    options: ["Visual or vibrating alerting systems, such as for the call light or alarms, and ensuring the call light is within reach", "A television playing at a low volume continuously to provide background awareness", "Dimmed lighting throughout the room to reduce visual distraction during rest", "Placement of the patient's bed as far from the nursing station as possible to reduce noise"],
    correct: 0,
    rationale: "For a patient with significant hearing loss, the nurse should ensure visual or vibrating alerting systems are available, such as for alarms or the call light, and that the call light itself is within reach, since the patient may not hear standard auditory alerts. Background television, dimmed lighting, and distance from the nursing station do not address this specific safety need and could actually reduce the patient's ability to call for help or be reached quickly."
  },
  {
    stem: "A nurse is caring for a patient with profound hearing loss who does not read lips and has not responded well to written notes due to a literacy barrier. What is the most appropriate next step to ensure effective communication?",
    options: ["Arrange for a sign language interpreter", "Continue using written notes exclusively despite the identified barrier", "Speak more loudly and slowly, assuming this will resolve the communication difficulty", "Rely on family members to interpret all communication for the remainder of the admission"],
    correct: 0,
    rationale: "When written communication is not effective due to a literacy barrier and the patient does not read lips, arranging for a sign language interpreter is the appropriate next step to ensure effective, direct communication with the patient. Continuing an ineffective method, simply speaking louder, or relying solely on family members to interpret does not adequately address the identified communication barrier or ensure accurate patient understanding."
  },
  {
    stem: "A patient reports a sensation of the room spinning around them, distinct from a general feeling of unsteadiness. How should the nurse document this specific complaint?",
    options: ["Vertigo", "Dizziness", "Tinnitus", "Nystagmus"],
    correct: 0,
    rationale: "A specific sensation of the room spinning is vertigo, an illusion of motion, distinct from the more general term dizziness, which refers to any altered sense of orientation in space without necessarily involving a spinning sensation. Tinnitus refers to ringing in the ear, and nystagmus refers to an observable involuntary eye movement, neither of which describes this subjective spinning complaint."
  }
];
