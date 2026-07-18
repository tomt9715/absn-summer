/* Psych Exam 3 - Knowledge Check - Ch 11 Anger, Hostility, and Aggression
   KC convention: correct is always index 0 for single-select; engine shuffles.
   SATA uses correct as an array of indices. */
window.QUESTIONS = [
  {
    stem: "Anger is best understood as which kind of emotion?",
    options: ["A secondary emotion covering a more vulnerable underlying feeling", "A primary emotion with no deeper feeling beneath it", "A permanent personality trait that cannot be changed", "A purely physical response with no emotional component"],
    correct: 0,
    rationale: "Anger is a secondary emotion. Beneath it, the patient often feels discounted, embarrassed, guilty, humiliated, hurt, ignored, rejected, threatened, tired, or vulnerable. Addressing the underlying feeling is what de-escalates the anger."
  },
  {
    stem: "Which feelings commonly lie beneath a patient's anger?",
    options: ["Feeling discounted, humiliated, hurt, rejected, threatened, or vulnerable", "Feeling calm, secure, and content", "Feeling energetic, focused, and motivated", "Feeling indifferent and emotionally detached"],
    correct: 0,
    rationale: "Anger typically covers more vulnerable feelings such as being discounted, embarrassed, guilty, humiliated, hurt, ignored, rejected, threatened, tired, or vulnerable. Identifying and addressing that underlying feeling calms the anger."
  },
  {
    stem: "What are the five phases of the aggression cycle, in order?",
    options: ["Triggering, escalation, crisis, recovery, and post-crisis", "Tension-building, acute battering, honeymoon, recovery, and relapse", "Escalation, triggering, crisis, post-crisis, and recovery", "Denial, anger, bargaining, depression, and acceptance"],
    correct: 0,
    rationale: "The aggression cycle runs triggering, escalation, crisis, recovery, and post-crisis. Tension-building, acute battering, and honeymoon are the cycle of violence, a different framework, and the five stages of grief are unrelated."
  },
  {
    stem: "During which phase of the aggression cycle does a stressor activate the anger response, calling for the nurse to identify the trigger and approach calmly?",
    options: ["Triggering", "Escalation", "Crisis", "Recovery"],
    correct: 0,
    rationale: "In the triggering phase a stressor activates the anger response. The nurse identifies the trigger, addresses the unmet need, and approaches calmly before the behavior builds."
  },
  {
    stem: "A patient is pacing, raising his voice, clenching his fists, and making early verbal threats. Which phase of the aggression cycle is this, and what is the nursing response?",
    options: ["Escalation; de-escalate with a quiet space, a calm voice, and an offer of PRN medication", "Crisis; call for backup and clear the area immediately", "Triggering; identify the stressor and address the unmet need", "Recovery; maintain a calm, low-stimulation environment"],
    correct: 0,
    rationale: "Pacing, a rising voice, clenched fists, and early verbal threats mark the escalation phase. The nurse de-escalates with a quiet space, a calm voice, and an offer of PRN medication before the behavior reaches crisis."
  },
  {
    stem: "During the crisis phase of the aggression cycle, what is the nurse's priority?",
    options: ["Safety of everyone first, calling for backup and clearing the area", "Exploring the original trigger with the patient", "Processing the episode therapeutically", "Offering the patient a PRN medication to try"],
    correct: 0,
    rationale: "In the crisis phase the patient has lost control and peaked in aggression, so safety of everyone comes first: call for backup and clear the area, using seclusion or restraint only if necessary. Exploring triggers and processing come later."
  },
  {
    stem: "During the recovery phase of the aggression cycle, what is the appropriate nursing approach?",
    options: ["Maintain a calm, low-stimulation environment and let the patient re-regulate", "Confront the patient about the aggressive behavior", "Immediately apply restraints to prevent a relapse", "Move the patient to a loud, active area for observation"],
    correct: 0,
    rationale: "In the recovery phase the patient begins to calm. The nurse maintains a calm, low-stimulation environment and allows the patient to re-regulate rather than confronting or over-stimulating him."
  },
  {
    stem: "In the post-crisis phase, a patient feels shame, remorse, and exhaustion. What is the appropriate nursing response?",
    options: ["Process the episode therapeutically and problem-solve triggers, never punishing", "Punish the patient so the behavior is not repeated", "Ignore the episode entirely to avoid embarrassment", "Immediately discharge the patient from the unit"],
    correct: 0,
    rationale: "In the post-crisis (depression) phase the patient feels shame, remorse, and exhaustion. The nurse processes the episode therapeutically and problem-solves triggers, and never punishes the patient."
  },
  {
    stem: "When a patient suddenly becomes aggressive, what is the nurse's FIRST action?",
    options: ["Verbal de-escalation in a calm, non-threatening tone", "Application of physical restraints", "Administration of a PRN medication", "Placement of the patient in seclusion"],
    correct: 0,
    rationale: "Verbal de-escalation in a calm, non-threatening tone is always the first action, before restraints, PRN medication, or anything more restrictive. De-escalation beats restriction."
  },
  {
    stem: "Which technique is part of effective verbal de-escalation?",
    options: ["A calm tone and neutral body language with short, simple sentences", "A firm, authoritative voice to establish control", "Detailed explanations of the consequences of the behavior", "Constant, intense eye contact to hold the patient's attention"],
    correct: 0,
    rationale: "De-escalation uses a calm tone, neutral body language, and short, simple sentences, and it validates and invites (\"You seem really upset. Can you tell me what is happening for you right now?\"). An authoritative voice, lecturing, and intense eye contact all escalate the patient."
  },
  {
    stem: "Which nurse statement best reflects the validate-and-invite technique of de-escalation?",
    options: ["\"You seem really upset. Can you tell me what is happening for you right now?\"", "\"You need to calm down and stop yelling immediately.\"", "\"Why are you acting this way in front of everyone?\"", "\"If you do not settle down, I will have to call security.\""],
    correct: 0,
    rationale: "Validating the feeling and inviting the patient to talk de-escalates. Commands to calm down, why questions, and threats of security are all non-therapeutic responses that escalate anger."
  },
  {
    stem: "Which actions should the nurse AVOID when de-escalating an angry patient?",
    options: ["Arguing, lecturing, threatening, and answering challenging questions", "Using short, simple sentences", "Maintaining the patient's dignity", "Keeping a calm tone and neutral body language"],
    correct: 0,
    rationale: "During de-escalation the nurse does not argue, lecture, threaten, or answer challenging questions, and maintains the patient's dignity throughout. Short simple sentences, a calm tone, and neutral body language are the correct techniques."
  },
  {
    stem: "How much personal space should the nurse maintain with an escalating patient?",
    options: ["A large personal space, never crowding or moving close", "A distance of about 1 foot to show engagement", "Direct physical contact to provide reassurance", "As little space as possible to keep the patient's attention"],
    correct: 0,
    rationale: "The nurse keeps a large personal space and never crowds or moves close to an escalating patient. Invading personal space increases both the patient's agitation and the nurse's own risk."
  },
  {
    stem: "How should the nurse position herself when interacting with a potentially aggressive patient?",
    options: ["Stand at an angle, never directly in front, and never turn her back", "Stand directly in front to maintain full eye contact", "Stand behind the patient to remain out of view", "Sit close beside the patient to appear friendly"],
    correct: 0,
    rationale: "The nurse stands at an angle to the side, never directly in front (which is confrontational and blocks escape routes) and never with her back turned. She also knows where the exit is and keeps other staff nearby."
  },
  {
    stem: "Which environment is safest for de-escalating an agitated patient?",
    options: ["A private, low-stimulation area with staff nearby and a known exit", "A busy, crowded common area with many onlookers", "An isolated room with the nurse alone and the door closed", "The patient's choice of any location on the unit"],
    correct: 0,
    rationale: "The interaction is moved to a private, low-stimulation area, but with other staff nearby and a known exit. A crowded area over-stimulates, while being truly alone and isolated with the patient is unsafe for the nurse."
  },
  {
    stem: "Which of the following are non-therapeutic responses to an escalating patient?",
    options: ["Commands, why questions, threats, dismissiveness, and walking away", "Validating the feeling and inviting the patient to talk", "Using short, simple sentences in a calm voice", "Maintaining a large personal space"],
    correct: 0,
    rationale: "Commands (\"stop yelling,\" \"sit down\"), why questions, threats, dismissiveness, and walking away from an escalating patient are all non-therapeutic and escalate anger. Validating, inviting, and calm simple communication de-escalate."
  },
  {
    stem: "Which patients are MOST likely to become aggressive?",
    options: ["Patients with mania, mixed bipolar states, substance-induced psychosis, or command hallucinations", "Patients with depression, catatonia, or anxiety", "Patients who are sedated and resting quietly", "Patients with a stable mood and good insight"],
    correct: 0,
    rationale: "The highest aggression risk comes from impulsivity plus impaired reality testing: mania, mixed bipolar states, substance-induced psychosis, and command hallucinations. Depressed, catatonic, and anxious patients are the least likely to harm others."
  },
  {
    stem: "Which patients are LEAST likely to become aggressive toward others?",
    options: ["Patients who are depressed, catatonic, or anxious", "Patients in a manic or mixed bipolar state", "Patients with substance-induced psychosis", "Patients experiencing command hallucinations"],
    correct: 0,
    rationale: "Depressed, catatonic, and anxious patients are the least likely to harm others, though depression carries its own suicide-risk assessment. Mania, mixed states, substance-induced psychosis, and command hallucinations all raise the risk of aggression."
  },
  {
    stem: "What is the correct order of the least-restrictive intervention hierarchy?",
    options: ["Verbal de-escalation, then PRN medication, then seclusion, then physical restraint", "Physical restraint, then seclusion, then PRN medication, then verbal de-escalation", "Seclusion, then physical restraint, then verbal de-escalation, then PRN medication", "PRN medication, then physical restraint, then verbal de-escalation, then seclusion"],
    correct: 0,
    rationale: "The hierarchy is always verbal de-escalation, then PRN medication, then seclusion, then physical restraint. Restraint is a last resort used only for immediate danger to self or others."
  },
  {
    stem: "When is physical restraint appropriate?",
    options: ["Only as a last resort when there is immediate danger to self or others", "Whenever a patient makes a verbal threat", "For staff convenience when the unit is short-staffed", "As a punishment for disruptive behavior"],
    correct: 0,
    rationale: "Restraint is a last resort used only for immediate danger to self or others, never for convenience, punishment, or verbal threats alone. Even throwing furniture without injuring anyone still calls for de-escalation and a quiet space first."
  },
  {
    stem: "A provider orders restraints, but the nurse judges that the patient is responding to verbal de-escalation and is no longer an immediate danger. What is true about the nurse's role?",
    options: ["The provider's order does not override the nurse's independent assessment of whether restraint is truly indicated", "The nurse must apply restraints whenever a provider orders them", "The nurse has no authority to question a provider's restraint order", "The nurse may apply restraints only after obtaining a second order"],
    correct: 0,
    rationale: "A provider's order does not override the nurse's independent clinical judgment about whether restraint is truly indicated at that moment. If less restrictive measures are working and there is no immediate danger, restraint is not applied."
  },
  {
    stem: "Within what time frame must a provider's order be obtained after restraints are applied in an emergency?",
    options: ["Within 1 hour, with a face-to-face provider assessment in that hour", "Within 4 hours, with assessment by telephone", "Within 8 hours, with no assessment required", "Within 24 hours, at the next scheduled rounds"],
    correct: 0,
    rationale: "In an emergency application, a provider's order must be obtained within 1 hour, along with a face-to-face provider assessment within that hour."
  },
  {
    stem: "How often must a nurse monitor a patient in behavioral restraints?",
    options: ["Every 15 minutes", "Every 1 hour", "Every 2 hours", "Every 4 hours"],
    correct: 0,
    rationale: "A restrained patient is monitored every 15 minutes for circulation (capillary refill, warmth, color), skin integrity, hydration and toileting needs, and level of distress."
  },
  {
    stem: "Which parameters does the nurse check during the every-15-minute monitoring of a restrained patient?",
    options: ["Circulation, skin integrity, hydration and toileting needs, and level of distress", "Only the tightness of the restraint straps", "Only the patient's blood glucose level", "Only the patient's orientation to person and place"],
    correct: 0,
    rationale: "Every 15 minutes the nurse checks circulation (capillary refill, warmth, color), skin integrity, hydration and toileting needs, and level of distress to prevent injury and complications."
  },
  {
    stem: "How often must an adult in restraints be reassessed for readiness to discontinue them?",
    options: ["At least every 2 hours", "At least every 4 hours", "At least every 6 hours", "At least every 8 hours"],
    correct: 0,
    rationale: "Adults are reassessed for readiness to discontinue restraints at least every 2 hours. Waiting 4 hours between release checks violates the standard."
  },
  {
    stem: "How often are behavioral restraint orders renewed for an adult?",
    options: ["Every 4 hours", "Every 2 hours", "Every 8 hours", "Every 24 hours"],
    correct: 0,
    rationale: "Behavioral restraint orders are renewed every 4 hours for adults. Keep the two timelines straight: renew orders every 4 hours, but reassess for release every 2 hours."
  },
  {
    stem: "Which pair correctly states the two restraint timelines for an adult?",
    options: ["Renew the order every 4 hours; reassess for release every 2 hours", "Renew the order every 2 hours; reassess for release every 4 hours", "Renew the order every 8 hours; reassess for release every 4 hours", "Renew the order every 1 hour; reassess for release every 1 hour"],
    correct: 0,
    rationale: "The two timelines are distinct and commonly confused: the order is renewed every 4 hours, while readiness for release is reassessed every 2 hours."
  },
  {
    stem: "Is patient consent required to apply restraints?",
    options: ["No, consent is not required in a true emergency", "Yes, written consent is always required first", "Yes, verbal consent from the patient is always required", "Yes, family consent is required before application"],
    correct: 0,
    rationale: "Consent is not required in a true emergency. Otherwise, patients retain the right to refuse medication and treatment unless a court has ordered otherwise."
  },
  {
    stem: "Which element of restraint documentation provides the legal justification for the intervention?",
    options: ["The specific behavior that necessitated the restraint", "The patient's consent to the restraint", "The family's opinion about the restraint", "The nurse's personal feelings about the patient"],
    correct: 0,
    rationale: "The specific behavior that necessitated restraint is the documentation element that provides the legal justification. Also required are the type used, duration, patient response, and every monitoring check. Consent and family opinion are not required elements."
  },
  {
    stem: "Which items are legally required elements of restraint documentation? Select all that apply.",
    options: ["The behavior that necessitated the restraint", "The type of restraint used", "The duration of the restraint", "The patient's consent to the restraint", "The family's opinion of the restraint"],
    correct: [0, 1, 2],
    rationale: "Required documentation includes the behavior that justified restraint, the type used, the duration, the patient's response, and every monitoring check. Patient consent and family opinion are not required elements."
  },
  {
    stem: "How should the nurse regard a forced intramuscular medication given to control behavior?",
    options: ["As a chemical restraint that still requires the least-restrictive analysis", "As a gentler alternative that bypasses restraint rules", "As a routine medication with no restraint implications", "As always preferable to any other intervention"],
    correct: 0,
    rationale: "Chemical restraint, meaning forced IM medication to control behavior, is still a restraint. It is not a gentler substitute that skips the least-restrictive analysis and its associated monitoring and documentation requirements."
  },
  {
    stem: "A client threatens to harm a specific, identifiable person. What is the nurse's duty?",
    options: ["The potential victim must be warned, a duty that overrides confidentiality", "The threat must be kept confidential to protect the client's privacy", "The threat can be disclosed only with a court order", "The nurse should simply document the threat and take no further action"],
    correct: 0,
    rationale: "Under the duty to warn, when a client threatens a specific, identifiable person, the potential victim must be warned, and this duty overrides confidentiality. A court order is not required, and documentation alone does not fulfill the obligation to protect the victim."
  },
  {
    stem: "A client with a history of violence asks the nurse to keep confidential his desire to kill several classmates. Which response is appropriate?",
    options: ["\"I cannot promise that. I must share this with the team responsible for planning your care.\"", "\"I will keep this between us to protect our relationship.\"", "\"Because you are a minor, I will only tell your parents.\"", "\"You should share those feelings with your psychiatrist, not me.\""],
    correct: 0,
    rationale: "The nurse can never promise to keep threats of harm confidential. Honestly disclosing that the information must be shared with the treatment team maintains trust while meeting the duty to protect. The other responses misstate the duty, promise confidentiality that cannot be kept, or abandon the therapeutic relationship."
  },
  {
    stem: "After a 72-hour hold, on what basis can a client who attacked someone be kept in the hospital involuntarily?",
    options: ["The client remains a danger to self or others", "The client is unwilling to accept that treatment is needed", "The client states she does not like the person she attacked", "The client plans to move out of state immediately"],
    correct: 0,
    rationale: "Continued involuntary commitment beyond the initial 72-hour hold requires that the client remain a danger to self or others. Lack of insight, disliking someone, or planning to move are not legal grounds for continued involuntary hospitalization."
  },
  {
    stem: "Which staff safety measures apply when working with clients who have a history of aggression? Select all that apply.",
    options: ["Avoid wearing necklaces and other items that can be grabbed", "Know the layout of the facility and where the exits are", "Provide immediate verbal feedback for escalating behavior", "Stand directly in front of the client when talking", "Bring security along for every client interaction"],
    correct: [0, 1, 2],
    rationale: "Staff safety includes avoiding necklaces and grabbable items, knowing the facility layout and exits, and giving immediate verbal feedback as behavior begins to escalate. Standing directly in front is confrontational and blocks escape routes (stand at an angle), and bringing security to every interaction is unnecessary and undermines the therapeutic relationship."
  }
];
