/* Psych Exam 3 - Deep Drill - Ch 11 Anger, Hostility, and Aggression
   DD convention: correct is always index 0 for single-select; engine shuffles.
   SATA uses correct as an array of indices.
   Difficulty mix: 90 percent hard, 10 percent medium, no easy.
   Answer choices are plain clinical actions or bare terms, parallel in form
   and length, with plausible distractors and no tells. */
window.QUESTIONS = [
  {
    stem: "A nurse notices a client pacing the hallway with clenched fists and a rising voice, muttering threats under his breath. Which action should the nurse take?",
    options: ["Move him to a quiet space, use a calm voice, and offer a PRN medication", "Call for backup and clear the surrounding area of other clients", "Explore in detail the original stressor that set off his anger", "Give him space alone to re-regulate in a low-stimulation environment"],
    correct: 0,
    rationale: "Pacing, clenched fists, a rising voice, and early threats mark the escalation phase, managed with a quiet space, a calm voice, and an offer of PRN medication. Calling for backup and clearing the area belongs to the crisis phase, detailed exploration is not done mid-escalation, and letting him re-regulate belongs to the recovery phase after the peak has passed."
  },
  {
    stem: "A client in the dayroom has lost control, is swinging at anyone who comes near, and can no longer be reached verbally. Which action is the priority?",
    options: ["Ensure everyone's safety by calling for backup and clearing the area", "Continue attempting verbal de-escalation until he responds", "Explore what triggered the outburst once he makes eye contact", "Offer a PRN medication and wait for it to take effect"],
    correct: 0,
    rationale: "This is the crisis phase: the client has lost control and poses immediate danger, so safety of everyone comes first through backup and clearing the area, with seclusion or restraint only if necessary. Verbal de-escalation has already failed, and exploring triggers or waiting on a PRN does not address the active danger."
  },
  {
    stem: "During a busy lunch, a client suddenly throws a chair across the dining room but has not struck anyone. Which action should the nurse take first?",
    options: ["Attempt to talk the client down while ensuring the others are safe", "Place the client in a monitored seclusion room until he is calm", "Administer a PRN antianxiety medication", "Apply restraints to prevent injury to himself or others"],
    correct: 0,
    rationale: "De-escalation beats restriction and the least restrictive intervention comes first, so talking the client down is the first action since no one has been harmed. Throwing furniture without injuring anyone still calls for de-escalation and a quiet space before seclusion, medication, or restraints."
  },
  {
    stem: "A manic client who threw a chair but injured no one refuses PRN medication, and the provider has ordered four-point restraints. What is the nurse's best action?",
    options: ["Attempt verbal de-escalation and offer a quiet space before applying restraints", "Apply the four-point restraints immediately as ordered", "Request an IM medication instead as the less restrictive option", "Apply the restraints and reassess for release every 4 hours"],
    correct: 0,
    rationale: "With no one harmed, the least restrictive analysis requires attempting verbal de-escalation and a quiet space before restraints, even with an order in hand, because the nurse's judgment governs whether restraint is truly indicated. A forced IM medication is still a chemical restraint rather than a gentler substitute, and adults are reassessed for release every 2 hours, not every 4."
  },
  {
    stem: "A nurse considers requesting a forced intramuscular sedative for an agitated client, believing it is a gentler option than physical restraint. Which understanding should guide the nurse?",
    options: ["A forced IM medication is a chemical restraint and still requires the least-restrictive analysis first", "A forced IM medication bypasses restraint rules because it is a medication", "A forced IM medication is always preferable to verbal de-escalation", "A forced IM medication requires no monitoring once it is given"],
    correct: 0,
    rationale: "Forced IM medication given to control behavior is a chemical restraint, so it still requires attempting less restrictive measures first and carries the same monitoring and documentation requirements. It does not bypass restraint rules and is never a substitute for a trial of verbal de-escalation when there is no immediate danger."
  },
  {
    stem: "A charge nurse observes a newly licensed nurse caring for a restrained adult client. Which action indicates a need for further teaching?",
    options: ["Reassessing readiness for release every 4 hours", "Monitoring circulation and skin integrity every 15 minutes", "Confirming the provider's order was obtained within 1 hour", "Attempting less restrictive measures before applying restraints"],
    correct: 0,
    rationale: "Adults must be reassessed for readiness to discontinue restraints at least every 2 hours, so a 4-hour interval violates the standard and needs correction. Monitoring every 15 minutes, obtaining the provider order within 1 hour, and trying less restrictive measures first are all correct."
  },
  {
    stem: "A provider orders restraints for an agitated client, but by the time the nurse reaches him he is calm, cooperative, and responding to conversation. What should the nurse do?",
    options: ["Withhold the restraints, since the order does not override her assessment that they are not indicated", "Apply the restraints because the provider ordered them", "Apply the restraints but release them right away", "Obtain a second provider order before deciding"],
    correct: 0,
    rationale: "A provider's order does not override the nurse's independent judgment about whether restraint is truly indicated at that moment. Restraint is reserved for immediate danger to self or others, and this client no longer meets that threshold, so restraints are not applied."
  },
  {
    stem: "A client tells the nurse he intends to kill a specific coworker and names the person. Which action is the nurse's priority?",
    options: ["Ensure the identified coworker is warned, since the duty to warn overrides confidentiality", "Keep the statement confidential to preserve the therapeutic relationship", "Wait for a court order before disclosing the threat", "Document the threat and continue with routine care"],
    correct: 0,
    rationale: "When a client threatens a specific, identifiable person, the duty to warn requires that the potential victim be warned, and this duty overrides confidentiality. A court order is not required, and documentation alone does not fulfill the obligation to protect the victim."
  },
  {
    stem: "An adolescent with a history of violence asks the nurse to promise to keep secret his plan to hurt classmates. Which response should the nurse make?",
    options: ["\"I can't promise that. I have to share this with the team responsible for your care.\"", "\"I will keep this between us so that you can keep trusting me.\"", "\"Since you are a minor, I will only share this with your parents.\"", "\"You should tell your psychiatrist about this instead of me.\""],
    correct: 0,
    rationale: "The nurse can never promise to keep threats of harm confidential. Honestly stating that the information must be shared with the treatment team maintains trust while meeting the duty to protect. Promising confidentiality violates that duty, framing it as parental notification misstates the reason, and redirecting to the psychiatrist abandons the relationship."
  },
  {
    stem: "A nurse enters a room and a client immediately begins shouting insults at her. Which response should the nurse make?",
    options: ["Speak slowly in a low, calm voice while maintaining a safe distance", "Inform the client of the consequences of his behavior", "Firmly forbid the client from speaking in an abusive manner", "Move closer to the client to show she is not intimidated"],
    correct: 0,
    rationale: "A slow, low, calm voice with a safe distance is the core de-escalation approach, since the nurse's calm is contagious. Threatening consequences and forbidding speech are commands that escalate anger, and moving closer invades personal space and increases both agitation and the nurse's own risk."
  },
  {
    stem: "A client is becoming increasingly angry and aggressive. Which nursing action best de-escalates the situation?",
    options: ["Use clarification, asking the client what he is feeling right now", "Move the client to a private, isolated area away from staff", "Speak to the client in a firm, authoritative voice", "Maintain steady, direct eye contact throughout the exchange"],
    correct: 0,
    rationale: "Clarification that validates and invites, such as asking what the client is feeling, de-escalates. Moving an escalating client to an isolated area away from staff is unsafe for the nurse, an authoritative voice reads as a threat, and steady intense eye contact is itself a predictor of violence and is perceived as aggressive."
  },
  {
    stem: "A nurse manager observes a staff nurse interacting with an escalating client. Which action requires correction?",
    options: ["Standing squarely in front of the client to hold direct eye contact", "Keeping a large space between herself and the client", "Positioning herself at an angle with a clear path to the exit", "Keeping other staff members nearby during the interaction"],
    correct: 0,
    rationale: "Standing squarely in front with fixed eye contact is confrontational and blocks the escape routes of both people, so it needs correction; the nurse should stand at an angle. A large personal space, an angled stance with a clear exit, and nearby staff are all correct safety measures."
  },
  {
    stem: "A nurse reviews the unit census. Which client is most likely to become aggressive?",
    options: ["A client experiencing substance-induced psychosis", "A client with catatonia who is mute and immobile", "A client with major depressive disorder and low energy", "A client with generalized anxiety disorder"],
    correct: 0,
    rationale: "Substance-induced psychosis combines impaired reality testing with intoxication-driven disinhibition, the classic highest-risk presentation for aggression. Catatonic, depressed, and anxious clients are among the least likely to harm others, though the depressed client still warrants a separate suicide-risk assessment."
  },
  {
    stem: "A nurse is assigning acuity for aggression risk. Which client is least likely to harm others?",
    options: ["A client with catatonia who is mute and immobile", "A client in a mixed bipolar state", "A client experiencing command hallucinations", "A client in an acute manic episode"],
    correct: 0,
    rationale: "Catatonia involves immobility, mutism, and psychomotor retardation, making outward aggression the least likely; the risk with catatonia is medical, such as dehydration and immobility complications. Mixed states, command hallucinations, and mania all elevate aggression risk."
  },
  {
    stem: "A client angrily snaps at the nurse right after learning a family visit was canceled. Which approach best addresses the anger?",
    options: ["Explore the disappointment or hurt beneath the anger and address that feeling", "Set a firm limit on the client's tone before continuing the conversation", "Explain that being angry will not change the visitation schedule", "Give the client space alone until the anger passes on its own"],
    correct: 0,
    rationale: "Anger is a secondary emotion covering feelings such as disappointment, hurt, or rejection, so addressing the underlying feeling de-escalates it. Setting a limit on tone, explaining that anger changes nothing, and simply withdrawing all miss the vulnerable feeling driving the reaction."
  },
  {
    stem: "A client who attacked a friend is newly admitted to the psychiatric unit. Which action should the nurse take first?",
    options: ["Work to establish a therapeutic relationship with the client", "Explain to the client that the behavior was unacceptable", "Set firm behavioral limits before doing anything else", "Explore whether the client's account of the events is accurate"],
    correct: 0,
    rationale: "Establishing a therapeutic relationship comes first because trust is the foundation for every later intervention, including limit setting. Lecturing about the behavior, imposing limits before rapport exists, or fact-checking the client's story all escalate defensiveness rather than build the alliance."
  },
  {
    stem: "A client admitted after attacking a neighbor reaches the end of a 72-hour hold. On what basis can she be kept in the hospital involuntarily?",
    options: ["She remains a danger to herself or others", "She refuses to acknowledge that she needs treatment", "She states that she still dislikes the neighbor", "She plans to leave the state right away"],
    correct: 0,
    rationale: "Continued involuntary commitment beyond the 72-hour hold requires that the client remain a danger to herself or others. Lack of insight, disliking someone, or planning to move are not legal grounds for continued involuntary hospitalization."
  },
  {
    stem: "After being restrained during a violent outburst, a client is now calm, tearful, and expressing shame. Which nursing action is appropriate?",
    options: ["Process the episode with the client and problem-solve the triggers together", "Remind the client that the behavior will not be tolerated again", "Avoid discussing the episode at all to spare the client embarrassment", "Restrict the client's privileges as a consequence of the outburst"],
    correct: 0,
    rationale: "In the post-crisis phase the client feels shame, remorse, and exhaustion, and the nurse processes the episode therapeutically and problem-solves triggers, never punishing. Reminding, restricting privileges, and refusing to discuss the event are punitive or missed opportunities rather than therapeutic responses."
  },
  {
    stem: "A nurse is de-escalating an angry client. Which techniques are appropriate? Select all that apply.",
    options: ["Use a calm tone and neutral body language", "Keep sentences short and simple", "Maintain a large personal space", "Answer the client's challenging questions in detail", "Stand directly in front of the client"],
    correct: [0, 1, 2],
    rationale: "Effective de-escalation uses a calm tone with neutral body language, short simple sentences, and a large personal space. The nurse does not get drawn into answering challenging questions, and stands at an angle rather than directly in front, which is confrontational and blocks escape routes."
  }
];
