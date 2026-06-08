// Exam 1 Simulator bank — all-new questions, distinct from cluster banks.
// Weighted to the professor's blueprint. Engine draws a random 50 each attempt.
window.QUESTIONS = [

  // ===== THERAPEUTIC COMMUNICATION (~11) =====
  {
    stem: "A client says, 'I don't think anyone would even notice if I were gone.' What is the nurse's best response?",
    options: ["'Are you having thoughts of ending your life?'", "'Of course people would notice — don't say that.'", "'You have so much to live for.'", "'Why would you feel that way?'"],
    correct: 0,
    rationale: "A statement hinting at hopelessness requires the nurse to ask directly about suicidal thoughts — direct questioning does not increase risk and is the only way to assess it. The other responses minimize, reassure falsely, or put the client on the defensive."
  },
  {
    stem: "A client receiving difficult news goes quiet and looks down. The nurse sits nearby without speaking. Which technique is this?",
    options: ["Therapeutic silence", "False reassurance", "Giving advice", "Deflection"],
    correct: 0,
    rationale: "Sitting with a client in silence is therapeutic — it offers presence and space to process feelings without pressure. The nurse should not force conversation."
  },
  {
    stem: "Which nurse statement is an example of sympathy rather than empathy?",
    options: ["'I feel terrible about what's happening to you.'", "'This must be very difficult for you.'", "'It sounds like you're feeling overwhelmed.'", "'Tell me more about how you're coping.'"],
    correct: 0,
    rationale: "Expressing the nurse's own feelings ('I feel terrible') is sympathy, which projects the nurse's emotions. Empathy validates the client's experience ('This must be difficult for you') without centering the nurse."
  },
  {
    stem: "A client says, 'My family doesn't understand me at all.' Which response uses reflection?",
    options: ["'You feel that your family doesn't understand you?'", "'I'm sure they're doing their best.'", "'You should sit down and talk to them.'", "'Why don't they understand you?'"],
    correct: 0,
    rationale: "Reflection mirrors the client's feeling back to invite elaboration. The other options are false reassurance, advice, and a defensive 'why' question."
  },
  {
    stem: "Which response is the most therapeutic when a client is angry and shouting?",
    options: ["'I can see you're really upset. I'm here to listen.'", "'You need to calm down right now.'", "'There's no reason to be this angry.'", "'If you keep yelling, I'll have to leave.'"],
    correct: 0,
    rationale: "Acknowledging the emotion and offering presence de-escalates and validates the client. Commands, dismissal, and threats escalate the situation and are non-therapeutic."
  },
  {
    stem: "A nurse responds to a worried client with, 'Don't worry, I'm sure everything will work out fine.' Why is this non-therapeutic?",
    options: ["It is false reassurance that dismisses the client's real concern", "It is too open-ended", "It reflects the client's feelings too directly", "It asks a closed question"],
    correct: 0,
    rationale: "Promising things will be fine is false reassurance — it shuts down the client's concern and makes a claim the nurse cannot guarantee."
  },
  {
    stem: "Which is an open-ended question that encourages a client to elaborate?",
    options: ["'What has this experience been like for you?'", "'Are you feeling sad today?'", "'Did you take your medication?'", "'You're feeling better, right?'"],
    correct: 0,
    rationale: "'What has this been like for you?' is open-ended and invites the client to expand. The others are closed (yes/no) or leading questions."
  },
  {
    stem: "A nurse tells a distressed client, 'You just need to stay positive and stop dwelling on it.' This is an example of which non-therapeutic technique?",
    options: ["Giving advice / minimizing feelings", "Therapeutic silence", "Reflection", "Clarification"],
    correct: 0,
    rationale: "Telling the client what they 'need' to do is giving unsolicited advice and minimizes their feelings — both non-therapeutic. It removes the client's autonomy and dismisses their distress."
  },
  {
    stem: "A client states, 'I'm scared about my surgery tomorrow.' Which response best demonstrates empathy?",
    options: ["'Feeling scared before surgery is completely understandable. What worries you most?'", "'There's nothing to be scared of, the surgeons are excellent.'", "'I know exactly how you feel.'", "'You shouldn't think about it so much.'"],
    correct: 0,
    rationale: "Validating the fear and inviting the client to share is empathy. False reassurance, the non-therapeutic 'I know how you feel,' and dismissing the worry are all unhelpful."
  },
  {
    stem: "A client suddenly says to the nurse, 'You remind me of my daughter who never visits.' The nurse recognizes transference. What is the best response?",
    options: ["'It sounds like not seeing your daughter has been painful. Tell me about that.'", "'I'm not your daughter, so let's stay focused.'", "'I'm sure she'll visit soon.'", "'Why doesn't your daughter visit you?'"],
    correct: 0,
    rationale: "The nurse explores the feelings the client is transferring rather than taking it personally or deflecting. This turns the transference into therapeutic material."
  },
  {
    stem: "Which nurse action reflects maintaining professional boundaries in a therapeutic relationship?",
    options: ["Keeping the focus on the client's needs and goals rather than sharing personal problems", "Becoming social-media friends with the client after discharge", "Sharing personal struggles to seem relatable", "Promising to always be available to the client"],
    correct: 0,
    rationale: "A therapeutic relationship is goal-directed and centered on the client, not the nurse. Sharing personal problems, social friendships, or promises of constant availability all blur professional boundaries."
  },

  // ===== MENTAL STATUS EXAM (~10) =====
  {
    stem: "A nurse documents that a client's stated feeling is 'angry and on edge.' Which mental status exam (MSE) component does the client's self-reported emotion belong to?",
    options: ["Mood", "Affect", "Thought process", "Perception"],
    correct: 0,
    rationale: "Mood is the client's subjective, self-reported emotional state. Affect is the nurse's objective observation of emotional expression."
  },
  {
    stem: "A client laughs while describing a sad event, and the nurse notes the emotional expression does not match the content. How is this incongruent emotional expression documented?",
    options: ["As a finding under affect", "As a finding under mood", "As a perceptual disturbance", "As a cognition deficit"],
    correct: 0,
    rationale: "Affect is the observed emotional expression; an expression incongruent with the situation (laughing at sad content) is documented under affect, which the nurse observes objectively."
  },
  {
    stem: "A client states they see spiders crawling on the wall that no one else can see. This is an example of what, under which mental status exam (MSE) domain?",
    options: ["A hallucination, under perception", "A delusion, under thought content", "Loose associations, under thought process", "Anhedonia, under mood"],
    correct: 0,
    rationale: "Seeing things that are not there is a visual hallucination — a false sensory perception, documented under perception. A delusion is a fixed false belief (thought content)."
  },
  {
    stem: "A client firmly believes their food is being poisoned by the staff despite no evidence. How is this classified?",
    options: ["A delusion (thought content disturbance)", "A hallucination (perceptual disturbance)", "Flight of ideas (thought process)", "Circumstantiality (thought process)"],
    correct: 0,
    rationale: "A fixed, false belief held despite evidence is a delusion — a thought content disturbance. Hallucinations are sensory; flight of ideas and circumstantiality are thought-process patterns."
  },
  {
    stem: "During the interview a client gives long-winded, overly detailed answers but does eventually answer the question. How is this documented?",
    options: ["Circumstantial thinking", "Tangential thinking", "Thought blocking", "Neologisms"],
    correct: 0,
    rationale: "Circumstantial thinking includes excessive detail but eventually reaches the point. Tangential thinking never returns to the point."
  },
  {
    stem: "A client speaks so rapidly and shifts topics so quickly that the nurse cannot keep up. This thought-process pattern is most associated with which state?",
    options: ["Mania (flight of ideas)", "Depression (psychomotor retardation)", "Alzheimer's disease", "Intoxication"],
    correct: 0,
    rationale: "Rapid speech with quickly shifting, fragmented ideas is flight of ideas, classically seen in mania. Depression presents with slowed speech and movement instead."
  },
  {
    stem: "A nurse asks a client what 'a stitch in time saves nine' means, and the client explains the general principle of preventing bigger problems. Which cognitive ability does this assess and demonstrate?",
    options: ["Intact abstract thinking", "Impaired recent memory", "Disorientation", "A perceptual disturbance"],
    correct: 0,
    rationale: "Interpreting a proverb meaningfully demonstrates intact abstract thinking. A literal, concrete answer would suggest impaired abstraction in an adult."
  },
  {
    stem: "A client can state the date, the hospital name, and who they are. How should the nurse document this?",
    options: ["Oriented to person, place, and time (oriented x3)", "Intact remote memory", "Good insight and judgment", "Normal affect"],
    correct: 0,
    rationale: "Knowing person, place, and time is orientation x3, part of the cognition assessment. It is separate from memory, insight, judgment, and affect."
  },
  {
    stem: "A client recognizes they have a mental illness but chooses to stop treatment against advice. The nurse documents adequate insight but poor what?",
    options: ["Judgment", "Orientation", "Memory", "Affect"],
    correct: 0,
    rationale: "Insight (awareness of illness) can be present while judgment (the ability to make safe decisions) is impaired. Stopping treatment against advice reflects poor judgment despite intact insight."
  },
  {
    stem: "A client sits motionless, makes little eye contact, and moves very slowly. Under which mental status exam (MSE) domain is this psychomotor retardation documented, and what does it suggest?",
    options: ["Appearance and behavior; suggestive of depression", "Perception; suggestive of psychosis", "Thought content; suggestive of delusions", "Cognition; suggestive of dementia"],
    correct: 0,
    rationale: "Slowed movement (psychomotor retardation) is documented under appearance and behavior and is associated with depression. Agitation/pacing would suggest the opposite."
  },

  // ===== THEORIES & DEFENSE MECHANISMS (~8) =====
  {
    stem: "A client who is furious with their boss comes home and snaps at their spouse over something trivial. Which defense mechanism is this?",
    options: ["Displacement", "Projection", "Sublimation", "Denial"],
    correct: 0,
    rationale: "Redirecting feelings from the unsafe target (the boss) to a safer one (the spouse) is displacement. Projection would attribute the client's own feelings to others."
  },
  {
    stem: "A recovering client channels their past struggles into becoming a peer support volunteer. Which defense mechanism, considered healthy, is this?",
    options: ["Sublimation", "Regression", "Repression", "Splitting"],
    correct: 0,
    rationale: "Channeling difficult impulses or experiences into socially valuable activity is sublimation, one of the mature (SASH) defenses. The others are less adaptive."
  },
  {
    stem: "A hospitalized adult begins using baby talk and wanting a parent present at all times. Which defense mechanism is this?",
    options: ["Regression", "Displacement", "Rationalization", "Projection"],
    correct: 0,
    rationale: "Reverting to earlier developmental behaviors under stress is regression. It is common during illness or hospitalization."
  },
  {
    stem: "According to Erikson, a 35-year-old focused on building a committed partnership is working through which stage?",
    options: ["Intimacy vs. Isolation", "Identity vs. Role Confusion", "Generativity vs. Stagnation", "Industry vs. Inferiority"],
    correct: 0,
    rationale: "Young adulthood (~18–40) is Intimacy vs. Isolation, centered on forming close relationships. Generativity vs. Stagnation comes next in middle adulthood."
  },
  {
    stem: "According to Erikson, a 70-year-old reflecting on whether their life had meaning is in which stage?",
    options: ["Integrity vs. Despair", "Generativity vs. Stagnation", "Intimacy vs. Isolation", "Trust vs. Mistrust"],
    correct: 0,
    rationale: "Late adulthood (65+) is Integrity vs. Despair — reflecting on life with fulfillment or regret. It is the final Erikson stage."
  },
  {
    stem: "A nurse explains that a client's feelings toward the nurse stem from the client's relationship with a parent. This phenomenon, central to Freud's theory, is called what?",
    options: ["Transference", "Countertransference", "Sublimation", "Cognitive distortion"],
    correct: 0,
    rationale: "Transference is the client redirecting feelings from past relationships onto the nurse. Countertransference is the nurse's feelings toward the client; cognitive distortion is a Beck/cognitive behavioral therapy (CBT) concept."
  },
  {
    stem: "Which therapy is most appropriate for a client with borderline personality disorder (BPD)?",
    options: ["Dialectical behavior therapy (DBT)", "Electroconvulsive therapy (ECT)", "Motivational interviewing (MI)", "Cognitive behavioral therapy (CBT)"],
    correct: 0,
    rationale: "Dialectical behavior therapy (DBT) is the evidence-based therapy for borderline personality disorder (BPD). Electroconvulsive therapy (ECT) treats severe depression, motivational interviewing (MI) builds motivation, and cognitive behavioral therapy (CBT) treats depression/anxiety/PTSD/substance use."
  },
  {
    stem: "A 10-year-old interprets proverbs literally and reasons about concrete objects rather than abstract ideas. According to Piaget, how should this be viewed?",
    options: ["Developmentally normal, since abstract thinking emerges around age 11", "A sign of intellectual disability requiring referral", "Evidence of a thought disorder", "Abnormal regression under stress"],
    correct: 0,
    rationale: "Per Piaget, concrete thinking is normal before about age 11–12, when formal operational (abstract) thinking begins. Literal reasoning in a 10-year-old is expected."
  },

  // ===== LEGAL & ETHICAL (~6) =====
  {
    stem: "A nurse confines a non-dangerous client to a seclusion room solely because the unit is short-staffed. Which tort is this?",
    options: ["False imprisonment", "Assault", "Battery", "Defamation"],
    correct: 0,
    rationale: "Seclusion without medical justification (e.g., for staffing) is false imprisonment, an intentional tort. Assault is a threat, and battery is unwanted contact."
  },
  {
    stem: "A nurse raises a fist and threatens to strike a client, but never makes contact. Which tort has occurred?",
    options: ["Assault", "Battery", "False imprisonment", "Negligence"],
    correct: 0,
    rationale: "A threat that places someone in fear of imminent harmful contact is assault, even without contact. Battery requires actual unwanted physical contact."
  },
  {
    stem: "Which client most clearly meets criteria for an involuntary psychiatric hold?",
    options: ["A client with a specific suicide plan and access to a firearm", "A client who is tearful but denies any self-harm thoughts", "A client who refuses to attend group therapy", "A client requesting discharge who is not dangerous"],
    correct: 0,
    rationale: "A specific plan plus access to lethal means makes a client an imminent danger to self, meeting involuntary hold criteria. The other situations do not meet that threshold."
  },
  {
    stem: "A competent client who voluntarily admitted themselves wishes to refuse electroconvulsive therapy (ECT). What is the nurse's role?",
    options: ["Advocate for the client's right to refuse and ensure informed understanding", "Insist the client proceed since it was ordered", "Administer the treatment over the client's objection", "Threaten discharge if the client refuses"],
    correct: 0,
    rationale: "A competent voluntary client can refuse any treatment, including electroconvulsive therapy (ECT). The nurse advocates for autonomy and ensures the client understands risks and benefits."
  },
  {
    stem: "A client with psychosis refuses oral medication, and there is no court order. What is the appropriate nursing action?",
    options: ["Document the refusal and notify the provider", "Crush the medication into applesauce without telling the client", "Physically force the client to swallow it", "Withhold meals until the client agrees"],
    correct: 0,
    rationale: "Without a court order, the client may refuse. The nurse documents the refusal and notifies the provider; covertly medicating, forcing, or coercing the client all violate their rights."
  },
  {
    stem: "A nurse promises a client they will return at a specific time and reliably does so, building the client's trust. Which ethical principle does this reflect?",
    options: ["Fidelity", "Justice", "Autonomy", "Nonmaleficence"],
    correct: 0,
    rationale: "Keeping commitments so the client can trust the nurse is fidelity. Justice is fairness, autonomy is self-determination, and nonmaleficence is avoiding harm."
  },

  // ===== TREATMENT SETTINGS (~4) =====
  {
    stem: "A client experiencing acute psychosis with command hallucinations to harm others requires which level of care?",
    options: ["Inpatient hospitalization", "Outpatient therapy", "Intensive outpatient (IOP)", "Partial hospitalization (PHP)"],
    correct: 0,
    rationale: "Command hallucinations to harm others plus acute psychosis pose an immediate danger requiring inpatient hospitalization, the most supervised setting."
  },
  {
    stem: "A client with severe schizophrenia who repeatedly stops medication and cycles through the emergency department would benefit most from which program?",
    options: ["Assertive Community Treatment (ACT)", "A weekly outpatient visit", "Partial hospitalization (PHP) for one day", "No structured follow-up"],
    correct: 0,
    rationale: "Assertive Community Treatment (ACT) offers intensive 24/7 community support for clients with severe illness, non-adherence, and frequent emergency department use."
  },
  {
    stem: "A client being discharged from inpatient care still needs a full-day structured program but can sleep at home. Which setting fits?",
    options: ["Partial hospitalization (PHP)", "Inpatient hospitalization", "Outpatient/clubhouse", "Assertive Community Treatment (ACT)"],
    correct: 0,
    rationale: "Partial hospitalization (PHP) is a structured day program that steps a client down from inpatient care, with the client returning home at night."
  },
  {
    stem: "Which setting is the least restrictive and where most mental health care occurs under the current model?",
    options: ["Outpatient/clubhouse", "Inpatient hospitalization", "Partial hospitalization (PHP)", "Assertive Community Treatment (ACT)"],
    correct: 0,
    rationale: "Outpatient/clubhouse care is the least restrictive setting and where most mental health care happens in the current community-based model."
  },

  // ===== FOUNDATIONS / MASLOW (~3) =====
  {
    stem: "Using Maslow's hierarchy, which client need takes the highest priority?",
    options: ["A client who is not eating or drinking", "A client who feels they don't belong on the unit", "A client with low self-esteem", "A client wanting to achieve personal goals"],
    correct: 0,
    rationale: "Not eating or drinking is a physiological need — always the top priority on Maslow's hierarchy. Belonging, esteem, and self-actualization rank lower."
  },
  {
    stem: "After a client's physiological needs are met, which Maslow level becomes the next priority, including suicide risk assessment?",
    options: ["Safety", "Love and belonging", "Esteem", "Self-actualization"],
    correct: 0,
    rationale: "Safety is the second level of Maslow's hierarchy. Once physiological needs are addressed, ensuring safety — including risk assessment — is the next priority."
  },
  {
    stem: "Which scenario reflects a client working at the love and belonging level of Maslow's hierarchy?",
    options: ["A stable client wanting to reconnect with family and join a support group", "A client who has not slept or eaten in days", "A client in immediate danger of self-harm", "A client pursuing a long-term life ambition"],
    correct: 0,
    rationale: "Seeking social connection and group participation reflects love and belonging. Sleep/food is physiological, danger is safety, and pursuing ambition is self-actualization."
  },

  // ===== PSYCHOPHARM (~3) =====
  {
    stem: "A client with anxiety is prescribed lorazepam (Ativan). Which neurotransmitter does this benzodiazepine enhance?",
    options: ["Gamma-aminobutyric acid (GABA)", "Dopamine", "Acetylcholine (ACh)", "Glutamate"],
    correct: 0,
    rationale: "Benzodiazepines like lorazepam (Ativan) enhance gamma-aminobutyric acid (GABA), the inhibitory neurotransmitter, to reduce anxiety and promote calm."
  },
  {
    stem: "A client is started on escitalopram (Lexapro) for depression. Which teaching point is essential?",
    options: ["It may take 2–4 weeks to feel the full effect, so do not stop early", "It works within a few hours of the first dose", "It should be taken only when feeling sad", "It cures depression after a single dose"],
    correct: 0,
    rationale: "Selective serotonin reuptake inhibitors (SSRIs) like escitalopram (Lexapro) take 2–4 weeks for full effect, so clients must be taught not to stop early when relief is not immediate."
  },
  {
    stem: "An antipsychotic that blocks dopamine is most appropriate for a client experiencing which condition?",
    options: ["Psychosis", "Parkinson's disease", "An anxiety disorder", "Alzheimer's disease"],
    correct: 0,
    rationale: "Psychosis is associated with elevated dopamine, so a dopamine-blocking antipsychotic helps. Parkinson's involves low dopamine, anxiety relates to gamma-aminobutyric acid (GABA), and Alzheimer's involves acetylcholine (ACh)."
  }

];
