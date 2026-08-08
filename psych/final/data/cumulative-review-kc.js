/* Psych Final - Cumulative Review - curated from Exam 1-3 question banks,
   selecting only the questions that test what Unit 6 of the gameplan asks for.
   Built section by section, matching Unit 6's own structure. Do not rebuild --
   append new sections at the bottom, each marked with its own comment header.
   Sources so far: exam1/data/comm-kc.js + comm-dd.js (Section 1),
   exam1/data/theories-kc.js + theories-dd.js (Section 2),
   exam1/data/mse-kc.js (Section 3),
   exam2/data/schizophrenia-kc.js + schizophrenia-dd.js (Section 4). Verbatim
   except minor rationale wording tightened where noted.
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
  },

  // ── Section 2: Defense Mechanisms (source: exam1 Theories) ──
  {
    stem: "A client just diagnosed with cancer says, 'The test results must be wrong, I feel perfectly fine.' Which defense mechanism is this?",
    options: ["Denial", "Projection", "Rationalization", "Displacement"],
    correct: 0,
    rationale: "Denial is refusing to acknowledge a distressing reality. The client rejects the diagnosis outright. Projection attributes one's feelings to others, and rationalization substitutes acceptable reasons for real ones."
  },
  {
    stem: "An angry client states, 'Everyone on this unit hates me.' Which defense mechanism is the client using?",
    options: ["Projection", "Denial", "Regression", "Sublimation"],
    correct: 0,
    rationale: "Projection is attributing one's own unacceptable feelings to others -- the client's own anger is projected onto everyone else. Denial rejects reality, regression reverts to earlier behavior, and sublimation channels impulses into acceptable acts."
  },
  {
    stem: "A client who lost their job says, 'It's the economy's fault -- my boss had no choice.' Which defense mechanism is this?",
    options: ["Rationalization", "Displacement", "Repression", "Splitting"],
    correct: 0,
    rationale: "Rationalization substitutes acceptable reasons for the real, unacceptable ones. Displacement shifts feelings to a safer target, repression blocks painful memories, and splitting sees things as all-good or all-bad."
  },
  {
    stem: "A client who is angry at their physician instead yells at the nurse. Which defense mechanism is this?",
    options: ["Displacement", "Projection", "Rationalization", "Regression"],
    correct: 0,
    rationale: "Displacement shifts feelings from an unacceptable or threatening target (the physician) to a safer one (the nurse). Projection would involve attributing the client's own feelings to others."
  },
  {
    stem: "A teenager who was just grounded slams the door and screams at a younger sibling who had nothing to do with it. Which defense mechanism should the nurse identify?",
    options: ["Displacement", "Sublimation", "Denial", "Repression"],
    correct: 0,
    rationale: "Displacement shifts feelings from the real source (the parent who grounded them) to a safer target (the sibling). Sublimation would channel the anger into something constructive."
  },
  {
    stem: "Under stress, an adult client becomes clingy and refuses to eat alone. Which defense mechanism is this?",
    options: ["Regression", "Sublimation", "Denial", "Splitting"],
    correct: 0,
    rationale: "Regression is reverting to earlier developmental behaviors under stress. Sublimation channels impulses into acceptable activities, denial rejects reality, and splitting is all-good/all-bad thinking."
  },
  {
    stem: "A client channels aggressive urges into becoming a competitive boxer. Which defense mechanism is this?",
    options: ["Sublimation", "Displacement", "Projection", "Repression"],
    correct: 0,
    rationale: "Sublimation redirects unacceptable impulses into socially acceptable activities -- a mature, healthy defense. Displacement just shifts the target without making it constructive."
  },
  {
    stem: "An abuse survivor has no conscious memory of the traumatic events. Which defense mechanism is this?",
    options: ["Repression", "Denial", "Rationalization", "Regression"],
    correct: 0,
    rationale: "Repression is unconsciously blocking painful memories from awareness. Denial is consciously refusing to accept a known reality, which is different from having no memory at all."
  },
  {
    stem: "A client adores a nurse one day and despises the same nurse the next, seeing people as all-good or all-bad. Which defense mechanism is this, and which disorder is it commonly associated with?",
    options: ["Splitting; borderline personality disorder", "Transference; the client is projecting past relationship experiences onto the nurse", "Projection; the client is attributing their own negative feelings to external people", "Reaction formation; the client is expressing the opposite of their true underlying feelings"],
    correct: 0,
    rationale: "Splitting is seeing things as all-good or all-bad, and it is common in borderline personality disorder (BPD). The nurse should expect rapid shifts and respond with consistent structure, not take it personally."
  },
  {
    stem: "A nurse caring for a client with borderline personality disorder is praised as 'the best nurse here' while another nurse is called 'terrible.' How should the nurse interpret and respond to this?",
    options: ["Recognize splitting and respond with consistent, team-coordinated limits", "Accept the praise and agree the other nurse is difficult", "Document that the client prefers this nurse and assign them exclusively", "Confront the client for being manipulative"],
    correct: 0,
    rationale: "Splitting (all-good/all-bad thinking) is common in borderline personality disorder (BPD). The team should recognize it, avoid being drawn into it, and maintain consistent, coordinated limits. Agreeing with the split or labeling the client 'manipulative' is non-therapeutic."
  },
  {
    stem: "Which group represents the healthy (mature) defense mechanisms remembered by the mnemonic SASH?",
    options: ["Sublimation, Altruism, Suppression, Humor", "Splitting, Anger, Sympathy, Hostility", "Suppression, Anxiety, Sadness, Hope", "Sublimation, Avoidance, Sympathy, Honesty"],
    correct: 0,
    rationale: "SASH stands for the mature defenses: Sublimation, Altruism, Suppression, and Humor. These are considered healthy ways of coping, unlike denial, projection, or splitting."
  },
  {
    stem: "Which client statement is the BEST example of a healthy (mature) defense mechanism?",
    options: ["'After my diagnosis, I started volunteering to help others with the same illness.'", "'My doctor must have the wrong chart -- I don't have any illness.'", "'Everyone in my family is the one with the real problem, not me.'", "'I don't remember anything about what happened that night.'"],
    correct: 0,
    rationale: "Turning a personal struggle into helping others is altruism/sublimation -- a mature SASH defense. The other options are denial, projection, and repression, which are less adaptive."
  },

  // ── Section 3: Assessment/Crisis/MSE Vocabulary (source: exam1 MSE) ──
  {
    stem: "A delusion (a fixed, false belief held despite evidence) represents a disturbance in which area of the mental status exam?",
    options: ["Thought content", "Perception", "Mood and affect", "Speech"],
    correct: 0,
    rationale: "A delusion is a disturbance in thought CONTENT -- what the person is thinking. This is a flagged exam distinction: delusion = thought content."
  },
  {
    stem: "A hallucination is a disturbance in which area of the mental status exam?",
    options: ["Perception", "Thought content", "Thought process", "Cognition"],
    correct: 0,
    rationale: "A hallucination is a false sensory perception -- a disturbance in PERCEPTION, not thought content. Delusion = thought content; hallucination = perception is a key exam distinction."
  },
  {
    stem: "What is the difference between a hallucination and a delusion?",
    options: ["A hallucination is a false sensory perception; a delusion is a fixed false belief", "A hallucination is a false belief held despite evidence; a delusion is a distorted sensory experience", "A hallucination occurs only in psychosis; a delusion can occur in any mood disorder", "A hallucination is always auditory; a delusion is always a grandiose or persecutory belief"],
    correct: 0,
    rationale: "A hallucination is a false sensory perception (hearing/seeing things that aren't there). A delusion is a fixed false belief held despite contrary evidence."
  },
  {
    stem: "A client shows no facial expression and speaks in a dull, monotone voice with no emotional change at all. How should the nurse document this affect?",
    options: ["Flat affect", "Blunted affect", "Labile affect", "Euphoric affect"],
    correct: 0,
    rationale: "Flat affect is the complete absence of emotional expression. Blunted affect is reduced but not absent. Labile is rapidly shifting, and euphoric is an exaggerated elevated mood."
  },
  {
    stem: "What distinguishes a blunted affect from a flat affect?",
    options: ["Blunted is reduced/slow emotional expression; flat is completely absent expression", "Blunted affect is appropriate to the situation but subdued; flat affect is exaggerated and inappropriate", "Blunted affect indicates psychosis; flat affect is a normal variant seen in introverted individuals", "Blunted is observed during mania with pressured speech; flat is specific to depressive disorders"],
    correct: 0,
    rationale: "Blunted affect shows reduced, slow-to-respond emotional expression -- some emotion is present but diminished. Flat affect shows no emotional expression at all."
  },
  {
    stem: "A client's speech jumps from one unrelated idea to another with no logical connection. What is this called?",
    options: ["Loose associations", "Circumstantial thinking", "Thought blocking", "Flight of ideas"],
    correct: 0,
    rationale: "Loose associations are disorganized thinking that jumps between ideas with no logical link, part of the schizophrenia cluster. Flight of ideas is rapid but the ideas are at least fragmentarily connected, and is tied to mania."
  },
  {
    stem: "A client stops abruptly in the middle of a sentence and cannot recall what they were saying. What is this called?",
    options: ["Thought blocking", "Flight of ideas", "Circumstantial thinking", "Echolalia"],
    correct: 0,
    rationale: "Thought blocking is stopping abruptly mid-sentence, associated with schizophrenia. Flight of ideas is rapid fragmented speech (mania); echolalia is repeating others' speech."
  },
  {
    stem: "What is the difference between circumstantial and tangential thinking?",
    options: ["Circumstantial eventually answers the question after a detour; tangential wanders off and never returns", "Circumstantial never reaches an answer; tangential always returns to the original topic eventually", "Circumstantial is seen in psychosis; tangential is a normal variant of anxious or pressured speech", "Circumstantial involves loose word associations; tangential involves complete absence of any connection"],
    correct: 0,
    rationale: "Circumstantial thinking gets to the answer eventually after unnecessary detail. Tangential thinking wanders off topic and never returns to the point. A useful memory hook: circumstantial 'gets there,' tangential 'never gets there.'"
  },

  // ── Section 4: Schizophrenia & Psychosis (source: exam2 Schizophrenia) ──
  {
    stem: "A client with schizophrenia tells the nurse, 'The voices are telling me to hurt my doctor when he comes in for rounds.' What is the nurse's priority action?",
    options: ["Implement one-to-one observation immediately, before notifying the provider", "Notify the provider first, then implement one-to-one observation once orders are received", "Document the statement and continue routine care without escalation", "Tell the client the voices are not real and encourage them to ignore them"],
    correct: 0,
    rationale: "When a client reports command hallucinations instructing harm to another person, safety takes priority over notification protocols. The nurse implements one-to-one observation immediately, then notifies the provider as soon as possible after safety measures are in place."
  },
  {
    stem: "Which type of hallucination is most common in schizophrenia, and what behavior might the nurse observe that suggests its presence?",
    options: ["Auditory hallucinations; the nurse may observe the client pause mid-sentence and appear to be listening to something unseen", "Visual hallucinations; the nurse may observe the client reaching out repeatedly to touch something not present", "Olfactory hallucinations; the nurse may observe the client wrinkling their nose and sniffing repeatedly at nothing", "Gustatory hallucinations; the nurse may observe the client consistently refusing all food and fluid intake"],
    correct: 0,
    rationale: "Auditory hallucinations are the most common type of hallucination in schizophrenia. A client experiencing them may pause mid-conversation, tilt their head, or appear to be listening intently to something not present, which should prompt the nurse to assess directly about the content of what the client is hearing."
  },
  {
    stem: "A nurse is assessing a client who reports, 'I can taste poison in my food, that's why I won't eat the hospital meals.' What type of disturbance does this represent, and what is the priority nursing consideration?",
    options: ["A gustatory hallucination linked to a paranoid delusion about poisoning; assess nutritional intake and safety while avoiding direct confrontation of the belief", "A somatic delusion exclusively, unrelated to any perceptual disturbance", "An auditory hallucination, since the client describes a sensory experience", "A normal taste preference requiring no further psychiatric assessment"],
    correct: 0,
    rationale: "This reflects a gustatory hallucination linked to an underlying paranoid belief about poisoning. The nurse should monitor nutritional intake closely, since the client may continue refusing food, while avoiding direct confrontation of the belief and instead working collaboratively on food choices the client trusts."
  },
  {
    stem: "Which therapeutic communication principles are appropriate when caring for a client with paranoid schizophrenia?",
    options: ["Use consistent staff assignments, speak in simple short sentences, avoid challenging delusions, and avoid touch", "Rotate staff assignments frequently to build trust with multiple caregivers", "Directly challenge the client's delusions to help reorient them to reality", "Use touch generously to convey warmth and build therapeutic rapport"],
    correct: 0,
    rationale: "Nursing care for paranoid schizophrenia includes using consistent staff assignments, since rotating staff increases paranoia, speaking in simple, short sentences, never directly challenging delusions, since this escalates paranoia and damages trust, and avoiding touch, which paranoid clients often perceive as threatening."
  },
  {
    stem: "Why does a nurse check a paranoid client's mouth after medication administration?",
    options: ["Paranoid clients frequently cheek (hide) medications rather than swallowing them, due to mistrust of the treatment team", "To assess for early signs of tardive dyskinesia after every single dose", "To check for signs of agranulocytosis after every medication administration", "To assess for dry mouth as a routine anticholinergic side effect check"],
    correct: 0,
    rationale: "Paranoid clients, due to their underlying mistrust, frequently cheek medications, hiding them in the mouth rather than swallowing them, in an attempt to avoid taking medication they may believe is harmful or part of a conspiracy. The nurse checks the mouth after administration to confirm the medication was actually swallowed."
  },
  {
    stem: "A client newly started on haloperidol develops sudden, severe neck spasms and the eyes rolling upward, and is also reporting difficulty breathing. What does the nurse recognize, and what is the priority action?",
    options: ["Acute dystonia with possible laryngospasm, an airway emergency; administer IM or IV benztropine or diphenhydramine immediately and notify the provider", "Tardive dyskinesia, a chronic condition requiring only outpatient follow-up", "An expected, benign side effect of haloperidol requiring no intervention", "Neuroleptic malignant syndrome requiring dantrolene as the priority intervention"],
    correct: 0,
    rationale: "Sudden neck spasms, oculogyric crisis (eyes rolling upward), and difficulty breathing indicate acute dystonia with possible laryngospasm, an airway emergency. The nurse administers IM or IV benztropine or diphenhydramine immediately and notifies the provider promptly."
  },
  {
    stem: "A client on antipsychotic therapy is observed constantly pacing the hallway, rocking back and forth, and stating, 'I just can't sit still, something feels wrong.' What does the nurse suspect, and how should this be distinguished from anxiety?",
    options: ["Akathisia, a medication-induced restlessness; unlike primary anxiety, this symptom developed in the context of recent antipsychotic initiation or dose change and should prompt medication review", "Tardive dyskinesia, requiring an immediate dose increase of the antipsychotic", "Pseudoparkinsonism, requiring an anticholinergic medication", "A normal anxiety response unrelated to the antipsychotic medication"],
    correct: 0,
    rationale: "Constant pacing, rocking, and an inability to sit still in a client on antipsychotic therapy suggest akathisia, a medication-induced movement disorder frequently mistaken for anxiety. The nurse should consider the temporal relationship to recent antipsychotic initiation or dose changes and report the finding."
  },
  {
    stem: "A client who has taken an antipsychotic for several years develops repetitive lip smacking, tongue thrusting, and facial grimacing. What does the nurse recognize, and what is the anticipated management approach?",
    options: ["Tardive dyskinesia; the provider will likely reduce the antipsychotic dose or switch to clozapine, since this condition is often irreversible", "Acute dystonia; the nurse should administer benztropine immediately", "Pseudoparkinsonism; the nurse should administer benztropine and expect full resolution within hours", "An expected and reversible finding requiring no specific intervention"],
    correct: 0,
    rationale: "Repetitive orofacial movements developing after long-term antipsychotic use indicate tardive dyskinesia, which is often irreversible. The nurse anticipates that the provider will reduce the antipsychotic dose or switch to clozapine. Benztropine is not effective for tardive dyskinesia, distinguishing it from acute dystonia or pseudoparkinsonism."
  },
  {
    stem: "What is benztropine used for, what does it NOT treat, and what is the antidote for anticholinergic toxicity?",
    options: ["An anticholinergic used for EPS like dystonia, but NOT tardive dyskinesia; physostigmine is the toxicity antidote", "A dopamine agonist medication used to treat tardive dyskinesia specifically and exclusively", "A medication specifically used to treat agranulocytosis resulting from clozapine therapy", "A benzodiazepine medication used primarily for acute agitation management on the unit"],
    correct: 0,
    rationale: "Benztropine (Cogentin) is an anticholinergic medication used to treat extrapyramidal symptoms (EPS) such as acute dystonia and pseudoparkinsonism. It does NOT treat tardive dyskinesia, which requires a different approach. The antidote for anticholinergic toxicity is physostigmine."
  },
  {
    stem: "A nurse is caring for a client newly started on clozapine. Three weeks into treatment, the client reports a sore throat, fatigue, and a fever of 38.7 degrees Celsius. What is the nurse's priority action?",
    options: ["Notify the provider immediately and obtain a CBC, since these symptoms may indicate agranulocytosis", "Administer an over-the-counter analgesic and instruct the client to follow up if symptoms persist beyond 48 hours", "Reassure the client that flu-like symptoms are an expected, benign effect of clozapine", "Increase the clozapine dose to compensate for the breakthrough symptoms"],
    correct: 0,
    rationale: "Flu-like symptoms in a client on clozapine are a critical warning sign for agranulocytosis, a potentially fatal black box warning. The nurse must notify the provider immediately and obtain a CBC without delay, since waiting even 24 hours can be dangerous."
  },
  {
    stem: "A client's most recent CBC while on clozapine shows a white blood cell count of 2,800 cells/mm3. What is the nurse's priority action?",
    options: ["Hold the clozapine and notify the provider immediately", "Administer the clozapine as scheduled and recheck the CBC in 1 week", "Increase the clozapine dose to boost the immune response", "Document the finding and continue routine weekly monitoring with no other action"],
    correct: 0,
    rationale: "A white blood cell count of 2,800 cells/mm3 is significantly low and concerning for agranulocytosis. The nurse holds the clozapine dose and notifies the provider immediately, since continuing the medication risks severe, potentially fatal infection."
  },
  {
    stem: "Besides agranulocytosis, which other black box warnings are associated with clozapine?",
    options: ["Myocarditis, cardiopulmonary suppression, increased dementia-related mortality, and seizures", "Hepatotoxicity, nephrotoxicity, and pancreatitis occurring as a direct result of therapy", "QT prolongation, Torsades de pointes, and sudden cardiac death occurring exclusively", "Tardive dyskinesia, akathisia, and pseudoparkinsonism occurring exclusively with long-term use"],
    correct: 0,
    rationale: "Clozapine carries five black box warnings total: agranulocytosis (the most frequently tested), myocarditis, cardiopulmonary suppression, increased mortality in patients with dementia-related psychosis, and seizures."
  },
  {
    stem: "What does the PINEs group of atypical antipsychotics include, and what side effect profile characterizes this group?",
    options: ["Quetiapine, olanzapine, and clozapine; high sedation, high weight gain, high hyperglycemia risk, and low EPS", "Risperidone, ziprasidone, and lurasidone; this group causes more EPS but noticeably less sedation overall", "Aripiprazole exclusively; this group is characterized by minimal weight gain and a low EPS risk", "Haloperidol and chlorpromazine; this group is characterized by high EPS risk and low sedation"],
    correct: 0,
    rationale: "The PINEs group includes quetiapine (Seroquel), olanzapine (Zyprexa), and clozapine (Clozaril). This group is characterized by high sedation, high weight gain, high hyperglycemia risk, significant anticholinergic effects, and orthostatic hypotension, but relatively low EPS."
  },
  {
    stem: "A client on haloperidol develops a fever of 40.1 degrees Celsius, severe muscle rigidity described as 'lead-pipe,' and a blood pressure of 168/112 over the past 2 days. What is the nurse's priority action?",
    options: ["Notify the provider immediately, anticipate stopping the haloperidol, and prepare for administration of dantrolene", "Administer an antipyretic and reassess in 4 hours before any further action", "Administer an additional dose of haloperidol to manage the agitation contributing to the fever", "Recognize this as an expected, benign reaction requiring only comfort measures"],
    correct: 0,
    rationale: "Fever, lead-pipe rigidity, and hypertension developing over days in a client on an antipsychotic indicate neuroleptic malignant syndrome (NMS), a life-threatening emergency. The nurse notifies the provider immediately, anticipates discontinuation of the haloperidol, and prepares for treatment with dantrolene and possibly bromocriptine."
  }
];
