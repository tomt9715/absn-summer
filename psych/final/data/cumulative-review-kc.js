/* Psych Final - Cumulative Review - curated from Exam 1-3 question banks,
   selecting only the questions that test what Unit 6 of the gameplan asks for.
   Built section by section, matching Unit 6's own structure.
   Source: exam1/data/comm-kc.js, exam1/data/comm-dd.js (verbatim, minor
   rationale wording tightened where noted).
   KC convention: correct is always index 0 for single-select; engine shuffles. */
window.QUESTIONS = [
  // ── Section 1: Therapeutic Communication (source: exam1 Comm) ──
  {
    stem: "Which response is an example of the therapeutic technique of reflection?",
    options: ["'You feel like you're a burden to your family?'", "'Everything is going to be just fine.'", "'You should talk to your family about it.'", "'Why are you feeling this way?'"],
    correct: 0,
    rationale: "Reflection mirrors the client's feelings back to them, encouraging them to explore those feelings. The other options are false reassurance, giving advice, and a 'why' question -- all non-therapeutic."
  },
  {
    stem: "Which of the following is an open-ended statement that encourages a client to share more?",
    options: ["'Tell me more about that.'", "'Did you sleep well last night?'", "'You'll feel better soon.'", "'Why are you so upset?'"],
    correct: 0,
    rationale: "'Tell me more about that' is open-ended and invites elaboration. A yes/no question is closed, and the others are false reassurance and a 'why' question."
  },
  {
    stem: "Which response is an example of false reassurance (non-therapeutic)?",
    options: ["'Everything will be fine. Just relax.'", "'It sounds like you're feeling overwhelmed.'", "'Tell me more about what's worrying you.'", "'I'll sit here with you for a while.'"],
    correct: 0,
    rationale: "'Everything will be fine' is false reassurance -- it dismisses the client's concern and makes a promise the nurse cannot keep. The other options are therapeutic (reflection, open-ended, presence)."
  },
  {
    stem: "Why are 'why' questions (e.g., 'Why are you feeling so down?') generally non-therapeutic?",
    options: ["They put the client on the defensive", "They are too open-ended", "They show too much empathy", "They are a form of active listening"],
    correct: 0,
    rationale: "'Why' questions tend to put the client on the defensive, as if they must justify their feelings. Open-ended statements like 'Tell me more' are more therapeutic."
  },
  {
    stem: "Which nurse response is an example of giving advice directly (non-therapeutic)?",
    options: ["'You should just talk to your family about it.'", "'What options have you considered?'", "'It sounds like a difficult decision.'", "'Tell me more about your relationship with them.'"],
    correct: 0,
    rationale: "Telling a client what they 'should' do is giving direct advice, which is non-therapeutic because it removes the client's autonomy. The other responses explore the client's own thinking."
  },
  {
    stem: "Which of the following is a non-therapeutic communication technique to avoid?",
    options: ["Deflection or dismissal, such as 'You're upsetting the group. Leave now.'", "Restating the client's words using slightly different phrasing to show active listening", "Sitting in silence with the client to demonstrate presence and therapeutic use of self", "Asking open-ended questions that invite elaboration on the client's emotional experience"],
    correct: 0,
    rationale: "Deflection/dismissal ('You're upsetting the group, leave now') is non-therapeutic and rejecting. Reflection, open-ended statements, and supportive silence are all therapeutic techniques."
  },
  {
    stem: "Which nurse statement is an example of acknowledgment (therapeutic)?",
    options: ["'I can see you're feeling anxious. Let's walk together.'", "'I'm sure everything will be fine -- most people feel this way before a procedure.'", "'You shouldn't be anxious. The staff here are very experienced and skilled.'", "'Let me explain the procedure step by step so you have less reason to feel anxious.'"],
    correct: 0,
    rationale: "Acknowledgment names what the nurse observes and offers support ('I can see you're anxious. Let's walk together'). The other responses dismiss or challenge the client's feelings."
  },
  {
    stem: "Which response is an example of clarification used to directly assess for safety?",
    options: ["'Are you thinking about hurting yourself?'", "'I'm sure those thoughts will pass.'", "'You shouldn't think like that.'", "'Why would you feel that way?'"],
    correct: 0,
    rationale: "Asking directly, 'Are you thinking about hurting yourself?' is clarification and the correct approach -- the nurse always asks about self-harm directly. Asking directly does not increase risk; avoiding it misses it."
  },
  {
    stem: "A client says, 'I just found out my husband has cancer. I don't know how I'll cope.' Which is the MOST therapeutic response?",
    options: ["'This must be a frightening time for you. Tell me what you're feeling.'", "'I understand exactly how you feel -- I went through something similar with my own family.'", "'Try not to worry too much. Many people with cancer go on to live full and healthy lives.'", "'Let me get you some pamphlets about cancer support groups and caregiver resources.'"],
    correct: 0,
    rationale: "Validating the client's fear and inviting them to share is empathy plus an open-ended statement. Sharing the nurse's own experience is self-disclosure/non-therapeutic, 'don't worry' is false reassurance, and jumping to pamphlets deflects from her emotional need in the moment."
  },
  {
    stem: "A client says, 'I feel like such a burden to everyone.' Which reflection best encourages further exploration?",
    options: ["'You feel like you're a burden to the people around you?'", "'Don't be silly, you're not a burden at all.'", "'Everyone feels that way sometimes.'", "'Why would you think something like that?'"],
    correct: 0,
    rationale: "Reflecting the client's exact feeling back invites them to elaborate. Denying the feeling, minimizing it as universal, or asking 'why' all shut down exploration and are non-therapeutic."
  },
  {
    stem: "A nurse wants to use empathy, not sympathy, with a client whose pet just died. Which statement fits?",
    options: ["'Losing a pet you loved can be really hard. What was your pet like?'", "'Oh, that's so sad, I feel terrible for you.'", "'I know exactly how you feel, I cried for weeks when mine died.'", "'It was just a pet -- you'll feel better soon.'"],
    correct: 0,
    rationale: "Validating the difficulty and inviting the client to share is empathy. Expressing how bad the nurse feels is sympathy, sharing the nurse's own grief projects, and minimizing the loss is dismissive."
  }
];
