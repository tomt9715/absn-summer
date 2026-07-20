/* Psych Exam 3 - NCLEX Challenge Round - Mixed review across all six chapters
   (Ch 18 Personality, Ch 14 Anxiety, Ch 15 OCD, Ch 13 Trauma, Ch 12 Abuse, Ch 11 Anger)
   Bank of 117 questions, written only from facts in Tom's Exam 3 study guide.
   This is at or near the ceiling of what the guide supports without recycling the same
   facts under new wording -- see SESSION_HANDOFF.md if picking this back up later.
   QUIZ_CONFIG.maxQuestions caps each attempt at 50, randomly drawn from this pool each time,
   so repeat attempts don't serve the same 50 questions.
   Convention: correct is always index 0 for single-select; engine shuffles.
   SATA uses correct as an array of indices, authored first. */
window.QUESTIONS = [
  {
    "stem": "A client tells the day nurse, \"You're an angel, you actually care,\" and tells the evening nurse, \"You're cruel and incompetent.\" This is the signature defense mechanism of which personality disorder?",
    "options": [
      "Borderline personality disorder",
      "Antisocial personality disorder",
      "Histrionic personality disorder",
      "Paranoid personality disorder"
    ],
    "correct": 0,
    "rationale": "The study guide names splitting — all-good/all-bad thinking with no middle ground — as the signature defense of borderline PD, illustrated by exactly this 'evening nurse is wonderful, you are the meanest' pattern. ASPD centers on disregard for others' rights and lack of remorse rather than idealize/devalue splitting; histrionic centers on drama and seduction; paranoid centers on pervasive suspicion, not alternating idealization of the same person."
  },
  {
    "stem": "Which personality disorder cannot be formally diagnosed until age 18, and what is the same behavior pattern called when it appears in a 15-year-old?",
    "options": [
      "Antisocial personality disorder; called conduct disorder before age 18",
      "Borderline personality disorder; called oppositional defiant disorder before age 18",
      "Narcissistic personality disorder; called adjustment disorder before age 18",
      "Paranoid personality disorder; called intermittent explosive disorder before age 18"
    ],
    "correct": 0,
    "rationale": "The guide states antisocial PD is the only personality disorder that cannot be formally diagnosed until 18; the same pattern before 18 is called conduct disorder. None of the other three disorders carry this age restriction or renaming rule in the guide."
  },
  {
    "stem": "Client A is alone most of the time and states he is content and genuinely does not want close relationships. Client B states she desperately wants close friendships but avoids people out of fear of rejection and criticism. Which pairing is correct?",
    "options": [
      "Client A: schizoid personality disorder; Client B: avoidant personality disorder",
      "Client A: avoidant personality disorder; Client B: schizoid personality disorder",
      "Client A: schizotypal personality disorder; Client B: dependent personality disorder",
      "Client A: paranoid personality disorder; Client B: histrionic personality disorder"
    ],
    "correct": 0,
    "rationale": "The guide draws exactly this contrast: schizoid is a reclusive loner who genuinely does not want relationships and is happy without them, while avoidant desperately wants relationships but avoids them out of fear of rejection, criticism, and embarrassment. The other pairings don't match the core picture the guide gives each disorder."
  },
  {
    "stem": "A client believes he can \"read people's minds,\" dresses and speaks oddly, and has very few relationships, but has never had a sustained delusion or hallucination. Which is most consistent, and how does it differ from schizophrenia?",
    "options": [
      "Schizotypal personality disorder; unlike schizophrenia, it does not involve sustained delusions or hallucinations",
      "Schizoid personality disorder; unlike schizophrenia, it involves restricted emotional range instead of magical thinking",
      "Paranoid personality disorder; unlike schizophrenia, it involves persistent grudges instead of odd beliefs",
      "Brief psychotic disorder; unlike schizophrenia, symptoms last less than one month"
    ],
    "correct": 0,
    "rationale": "The guide describes schizotypal PD as odd, eccentric, and withdrawn with magical thinking (telepathy) and perceptual distortions, sharing genetic overlap with schizophrenia and possibly becoming psychotic in the future, but it does NOT include sustained delusions or hallucinations — that threshold belongs to schizophrenia. The other options don't match this magical-thinking picture."
  },
  {
    "stem": "Which client presentation reflects OCPD rather than OCD, per the distinction the study guide draws between the two?",
    "options": [
      "A client who is comfortable with a rigid devotion to rules, order, and perfectionism and sees no problem with these traits",
      "A client who feels tormented by intrusive thoughts and performs rituals to neutralize the resulting anxiety",
      "A client who recognizes their checking behavior is excessive and wishes they could stop",
      "A client whose family reports the rituals worsen noticeably during stressful weeks"
    ],
    "correct": 0,
    "rationale": "The guide's distinguishing axis is ego-syntonic versus ego-dystonic: OCPD traits (perfectionism, rigidity, control) are ego-syntonic — the person is comfortable with them, and there are no true obsessions or compulsions. The other three options describe the ego-dystonic distress, insight, and stress-worsening pattern that belong to OCD, not OCPD."
  },
  {
    "stem": "A client demands \"everyone should admire me,\" reacts to a peer's mild critique with contempt and rage, and shows little interest in how the critique affected the peer. This is most consistent with which personality disorder?",
    "options": [
      "Narcissistic personality disorder",
      "Histrionic personality disorder",
      "Antisocial personality disorder",
      "Borderline personality disorder"
    ],
    "correct": 0,
    "rationale": "The guide describes narcissistic PD as grandiosity, entitlement, a need for constant admiration, lack of empathy, and rage or contempt when challenged or criticized — matching this vignette exactly. Histrionic PD centers on dramatic, seductive attention-seeking rather than entitlement and contempt; ASPD centers on rights violations and deceit; BPD centers on unstable mood/relationships and fear of abandonment."
  },
  {
    "stem": "A nursing student agrees to help a classmate with a group project, then repeatedly arrives late, completes assigned parts poorly, and is visibly negative about the task without ever directly refusing. This behavior pattern is best described as?",
    "options": [
      "Passive-aggressive behavior",
      "Splitting",
      "Assertive communication",
      "Antisocial behavior"
    ],
    "correct": 0,
    "rationale": "The guide defines passive-aggressive behavior as surface cooperation with indirect resistance — agreeing to tasks, then arriving late, doing them poorly or not at all, and displaying negativity — and specifically notes to recognize it in a colleague or student scenario, not only in patients. Splitting is idealize/devalue thinking; assertive communication is direct; antisocial behavior involves rights violations, not covert task sabotage."
  },
  {
    "stem": "A client with dependent personality disorder has remained in a relationship she describes as emotionally abusive, stating, \"I can't take care of myself without him.\" As the nurse works with this client, what should the nurse specifically assess in themselves, per the study guide?",
    "options": [
      "Countertransference — the urge to rescue the client",
      "Their own fear of abandonment triggered by the client",
      "Whether they are unconsciously idealizing the client",
      "Whether they are enforcing limits inconsistently with other staff"
    ],
    "correct": 0,
    "rationale": "The guide's nursing point for dependent PD specifically instructs the nurse to assess their own countertransference — the urge to rescue — alongside assertiveness training and positive feedback when the client is assertive. Fear of abandonment and idealization/splitting are borderline PD concepts; inconsistent limit-setting is the borderline/antisocial concern, not the dependent PD one."
  },
  {
    "stem": "Which nursing priority applies across the personality disorders chapter as a whole, according to the study guide, before any other treatment goal?",
    "options": [
      "Safety — risk of self-injury (as with borderline PD) or violence toward others (as with antisocial PD)",
      "Establishing insight into the ego-syntonic nature of the client's traits",
      "Beginning dialectical behavior therapy (DBT) as early as possible",
      "Correcting cognitive distortions through structured teaching sessions"
    ],
    "correct": 0,
    "rationale": "The guide states plainly that safety is the priority across the chapter — risk of self-injury (borderline) or violence toward others (antisocial) comes before all other goals. Building insight, starting DBT, and cognitive teaching are all appropriate treatment elements, but none take priority over safety."
  },
  {
    "stem": "According to the study guide, which nursing actions correctly address a client with borderline personality disorder who is engaging in splitting on the unit? Select all that apply.",
    "options": [
      "Ensure absolute consistency across all staff so the splitting cannot take hold",
      "Monitor closely for self-mutilation as a safety priority",
      "Support treatment approaches such as DBT, CBT, or transference-focused psychotherapy",
      "Allow each staff member to set individualized rules based on their own judgment",
      "Avoid setting firm limits so the therapeutic relationship is not damaged"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "rationale": "The guide's nursing priorities for borderline PD are safety first (monitor for self-mutilation), absolute consistency across all staff so splitting cannot take hold, and treatments including DBT, CBT, and transference-focused psychotherapy. Individualized staff-by-staff rules are exactly what allows splitting to succeed, and firm, consistent limit-setting — not avoidance of limits — is what the guide recommends."
  },
  {
    "stem": "A client is pacing, has difficulty concentrating, a narrowed perceptual field, and an increased heart rate and respiratory rate, but can still follow directions with support. Which level of anxiety does this represent?",
    "options": [
      "Moderate anxiety",
      "Mild anxiety",
      "Severe anxiety",
      "Panic-level anxiety"
    ],
    "correct": 0,
    "rationale": "The study guide describes moderate anxiety exactly this way: pacing, difficulty concentrating, narrowed perceptual field, increased heart rate and respiratory rate, but the person can still follow direction with support. Mild anxiety sharpens perception rather than narrowing it; severe anxiety means the person CANNOT follow directions; panic adds terror, possible hallucinations, and loss of contact with reality."
  },
  {
    "stem": "A client has hyperventilation, a pounding heart, and a sense of impending doom, cannot follow directions or problem-solve, but remains oriented and in contact with reality. This is best classified as?",
    "options": [
      "Severe anxiety",
      "Moderate anxiety",
      "Panic-level anxiety",
      "Mild anxiety"
    ],
    "correct": 0,
    "rationale": "Per the guide's severe-versus-panic line, severe anxiety is extreme distress with intact contact with reality and an inability to follow directions or problem-solve; panic adds fear of death, possible hallucinations, and loss of contact with reality. Because this client remains in contact with reality, severe is correct. Moderate anxiety allows following direction with support; mild is the useful, sharpened kind."
  },
  {
    "stem": "A patient with no cardiac history reports sudden chest pain, palpitations, sweating, and a fear of dying, and cannot communicate with staff. Per the study guide, what is happening and what must still be addressed?",
    "options": [
      "This is most consistent with panic disorder, but a cardiac event (such as MI) must still be medically ruled out",
      "This is most consistent with generalized anxiety disorder, and no medical workup is needed since the cause is psychological",
      "This is most consistent with adjustment disorder, and the symptoms will resolve within days without intervention",
      "This is most consistent with social anxiety disorder, and medication is contraindicated during the episode"
    ],
    "correct": 0,
    "rationale": "The guide specifically notes that panic disorder attacks peak within minutes and can mimic MI — sudden onset in a person with no cardiac history plus psychological terror points to panic, but a medical cause still must be ruled out. GAD is chronic, free-floating worry rather than a sudden attack; adjustment disorder follows an identifiable stressor; social anxiety centers on fear of judgment, not sudden unexplained chest pain."
  },
  {
    "stem": "A client says, \"It seems ridiculous, but I can't make myself go out the front door,\" and has become essentially housebound, only leaving when accompanied by a trusted person. Which disorder does this best describe, and what does the guide say about the client's insight?",
    "options": [
      "Agoraphobia; insight is intact — the client knows the fear is unreasonable but cannot change the behavior",
      "Social anxiety disorder; insight is absent — the client believes the fear is fully justified",
      "Specific phobia; insight is intact, and the fear resolves quickly with reassurance alone",
      "Generalized anxiety disorder; insight is intact, and the worry is limited to leaving the house"
    ],
    "correct": 0,
    "rationale": "The guide describes agoraphobia as fear of open or public spaces that may leave the person housebound, going out only with a trusted person, with insight intact — the person knows the fear is unreasonable ('it seems ridiculous, but I can't go out the door') yet cannot change the behavior — and notes it is ego-dystonic. Social anxiety centers on fear of judgment rather than open spaces; specific phobia and GAD don't match this housebound, escort-dependent pattern."
  },
  {
    "stem": "A client is pacing rapidly and escalating on the unit. Per the study guide, what is the nurse's best action?",
    "options": [
      "Walk with the client at a gradually slower pace rather than commanding them to stop or sending them off alone",
      "Firmly instruct the client to sit down and stop pacing immediately",
      "Direct the client to their room to pace alone until they calm down",
      "Begin teaching relaxation techniques immediately so the client has a tool to use right now"
    ],
    "correct": 0,
    "rationale": "The guide specifically states: for the pacing, escalating patient, do not command them to stop, do not isolate them, and do not send them off alone — walk WITH the patient at a gradually slower pace, since the nurse's calm is contagious. It also notes teaching happens later, when anxiety is mild to moderate, not during the escalating moment."
  },
  {
    "stem": "A client taking fluoxetine asks the nurse when to take the dose. Which teaching is correct per the study guide?",
    "options": [
      "Take it in the morning, since fluoxetine is activating and can cause insomnia if taken later in the day",
      "Take it at bedtime, since fluoxetine is sedating and will help with sleep",
      "Take it only when symptoms of anxiety flare up, similar to an as-needed medication",
      "Timing does not matter, since fluoxetine has no activating or sedating properties"
    ],
    "correct": 0,
    "rationale": "The guide states fluoxetine is ACTIVATING and should be given in the morning to prevent insomnia. It is not sedating, is not appropriate for PRN use, and timing does matter specifically because of its activating profile."
  },
  {
    "stem": "Which SSRI should generally be avoided in elderly clients and during pregnancy, and carries the highest risk of discontinuation syndrome if stopped abruptly?",
    "options": [
      "Paroxetine",
      "Fluoxetine",
      "Sertraline",
      "Escitalopram"
    ],
    "correct": 0,
    "rationale": "The study guide singles out paroxetine as the sedating, anticholinergic SSRI to avoid in the elderly and in pregnancy, with the highest risk of discontinuation syndrome. Fluoxetine is described as activating with the mildest discontinuation risk due to its longer half-life; sertraline and escitalopram are listed as first-line SSRIs without these specific cautions."
  },
  {
    "stem": "A client in acute alcohol withdrawal needs a benzodiazepine. Per the benzodiazepine-to-situation matching in the study guide, which is most appropriate?",
    "options": [
      "Lorazepam or diazepam",
      "Midazolam",
      "Alprazolam",
      "Only a non-benzodiazepine such as buspirone"
    ],
    "correct": 0,
    "rationale": "The guide matches lorazepam or diazepam to alcohol withdrawal (and lorazepam specifically to seizures/catatonia), while alprazolam is matched to severe panic attacks and midazolam to procedural sedation. Buspirone is not appropriate here — it is not useful for acute situations and has no role in withdrawal management per the guide."
  },
  {
    "stem": "A client newly started on buspirone for GAD asks if she can take an extra dose when she feels an attack coming on. Which response reflects accurate teaching from the study guide?",
    "options": [
      "\"Buspirone isn't effective taken as-needed — it requires several weeks of consistent dosing for full effect, and it isn't habit-forming so no taper is needed when stopping.\"",
      "\"Yes, taking an extra dose when you feel an attack starting is exactly how buspirone should be used.\"",
      "\"Buspirone works within minutes, so an extra dose now will help, but you'll need to taper carefully when you stop it.\"",
      "\"You should avoid aged cheese and smoked meats while taking buspirone to prevent a dangerous reaction.\""
    ],
    "correct": 0,
    "rationale": "The guide's buspirone teaching cluster states it takes SEVERAL WEEKS for full effect, is NOT useful PRN for acute attacks, has no dependence and needs no taper, and has no dietary restrictions (the aged cheese/smoked meat restriction belongs to MAOIs, not buspirone). The other options each misstate one of these specific teaching points."
  },
  {
    "stem": "According to the study guide, which effects are part of chronic or prolonged stress? Select all that apply.",
    "options": [
      "Immune suppression leading to frequent infections",
      "Amenorrhea (reproductive shutdown)",
      "Elevated heart rate and blood pressure",
      "Poor attention span and sleep disturbance",
      "Slowed respiratory rate"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "rationale": "The guide lists chronic/prolonged stress effects as immune suppression (frequent infections from cortisol), amenorrhea, poor attention span, sleep disturbance, and elevated heart rate and blood pressure — explicitly noting that chronic stress does NOT slow the respiratory rate."
  },
  {
    "stem": "A client washes her hands for thirty minutes at a time. Per the study guide, what purpose does this behavior serve for the client?",
    "options": [
      "It reduces the anxiety triggered by an obsession, which temporarily relieves distress and reinforces the cycle",
      "It seeks attention and reassurance from staff and family members",
      "It manages a side effect of a psychiatric medication she is taking",
      "It maintains vanity and physical appearance standards"
    ],
    "correct": 0,
    "rationale": "The guide is explicit: compulsions like extended handwashing exist to REDUCE ANXIETY caused by an obsession — not for attention, not vanity, not medication side effects — and that temporary relief reinforces the whole obsession-compulsion cycle."
  },
  {
    "stem": "Per the diagnostic threshold in the study guide, what distinguishes clinically significant obsessive-compulsive symptoms from occasional worry or habit?",
    "options": [
      "The obsessions/compulsions consume at least one hour per day, or cause significant distress or functional impairment",
      "The obsessions must be present for at least six months before they can be considered clinically significant",
      "The compulsions must involve a visible physical ritual rather than any kind of mental act",
      "The client must have no insight at all into the excessive nature of the behavior"
    ],
    "correct": 0,
    "rationale": "The guide's diagnostic threshold is that obsessions/compulsions consume at least ONE HOUR per day or cause significant distress or functional impairment — not a six-month duration requirement (that belongs to GAD), not a requirement that rituals be physical, and not a requirement of absent insight; OCD is ego-dystonic, meaning the client typically does have insight and hates the behavior."
  },
  {
    "stem": "How does the study guide distinguish OCD from OCPD along the ego-dystonic/ego-syntonic axis?",
    "options": [
      "OCD is ego-dystonic — the thoughts feel foreign and distressing; OCPD is ego-syntonic — the person is comfortable with the traits",
      "OCD is ego-syntonic and welcomed by the client; OCPD is ego-dystonic and causes the client significant distress",
      "Both OCD and OCPD are ego-syntonic, but only OCD involves true compulsions",
      "Both OCD and OCPD are ego-dystonic, but only OCPD responds to SSRIs and CBT"
    ],
    "correct": 0,
    "rationale": "The guide calls ego-dystonic vs. ego-syntonic the single most useful axis in this exam's content: OCD is ego-dystonic (distressing and foreign to the person's self-image), while OCPD and most personality disorders are ego-syntonic (consistent and acceptable to the person's self-image). The other options reverse or misapply this axis."
  },
  {
    "stem": "A client is midway through a checking ritual when a scheduled unit activity begins. Per the study guide, what is the nurse's correct early approach?",
    "options": [
      "Assess what situations precipitate the anxiety, allow time for rituals initially, then gradually help the client limit them as treatment progresses",
      "Abruptly stop the ritual to prevent it from becoming further reinforced",
      "Encourage the client to avoid situations that trigger the anxiety in the future",
      "Ignore the ritual entirely and proceed with the scheduled activity regardless of the client's distress"
    ],
    "correct": 0,
    "rationale": "The guide states: never abruptly prevent or forbid the ritual — blocking a compulsion sends anxiety through the roof. Never encourage avoidance either. The correct early nursing action is to assess what situations precipitate the anxiety, allow time for rituals initially, then gradually help the client limit them as treatment progresses."
  },
  {
    "stem": "A client with OCD reports intrusive thoughts about harming a family member and is frightened by these thoughts. Per the study guide, what is the nurse's first priority?",
    "options": [
      "Assess intent and risk, maintain safety, and communicate that thoughts are not actions",
      "Restrict the client's contact with family immediately until the thoughts resolve",
      "Reassure the client the thoughts are meaningless and should be ignored without further assessment",
      "Notify family members that the client has expressed a wish to harm them"
    ],
    "correct": 0,
    "rationale": "The guide states that for intrusive thoughts about harming others, the nurse should first assess intent and risk, maintain safety, and communicate that thoughts are not actions — intrusive thoughts in OCD are ego-dystonic and rarely acted on, but assessment always comes first. Restricting contact or notifying family of a 'wish to harm' skips this assessment step and mischaracterizes an ego-dystonic intrusive thought."
  },
  {
    "stem": "A family asks the nurse whether OCD is a personality flaw or \"something he could stop if he tried harder.\" Per the study guide, which response is most accurate?",
    "options": [
      "\"OCD is a brain-based illness involving genetic vulnerability, serotonin dysregulation, and hyperactivity in specific brain circuits — not a character flaw.\"",
      "\"OCD is primarily a learned habit that developed because the rituals were reinforced with attention in childhood.\"",
      "\"OCD is a personality trait that only becomes a disorder once it causes embarrassment in public.\"",
      "\"OCD is caused by a lack of willpower and typically resolves once the person becomes more disciplined.\""
    ],
    "correct": 0,
    "rationale": "The guide states etiology is multifactorial: genetic vulnerability, serotonin dysregulation, and hyperactivity in specific brain circuits (the orbitofrontal cortex–basal ganglia loop) — it is a brain-based illness, not a character flaw. The other options mischaracterize OCD as a learned habit, a personality trait, or a willpower problem."
  },
  {
    "stem": "Which teaching point should the nurse include when educating a family about a relative's OCD symptoms, per the study guide?",
    "options": [
      "\"The symptoms are involuntary and tend to worsen with stress, so try not to reinforce the rituals with immediate attention.\"",
      "\"The symptoms are voluntary, so consistent reminders to stop will help reduce them over time.\"",
      "\"Stress level has little effect on symptom severity, so family stress management isn't a priority.\"",
      "\"OCD is untreatable, so the family should focus on accommodating the rituals indefinitely.\""
    ],
    "correct": 0,
    "rationale": "The guide states symptoms are involuntary and WORSEN WITH STRESS, that family should not reinforce rituals with immediate attention, and that OCD is chronic but treatable (SSRIs plus CBT/exposure and response prevention) — it is not hopeless."
  },
  {
    "stem": "A client repeatedly pulls out strands of hair from her scalp, resulting in noticeable bald patches, and reports it happens more when she is anxious. Which OCD-related disorder from the study guide's key terms does this describe?",
    "options": [
      "Trichotillomania",
      "Excoriation disorder",
      "Onychophagia",
      "Oniomania"
    ],
    "correct": 0,
    "rationale": "The guide's key terms checklist defines trichotillomania as hair pulling, excoriation as skin-picking disorder, onychophagia as nail biting, and oniomania as compulsive buying. This vignette matches trichotillomania specifically."
  },
  {
    "stem": "A client has accumulated significant credit card debt from repeated, hard-to-control shopping episodes that bring brief relief followed by guilt. Which term from the study guide's OCD-related family best fits?",
    "options": [
      "Oniomania",
      "Excoriation",
      "Onychophagia",
      "Hoarding"
    ],
    "correct": 0,
    "rationale": "The guide's key terms checklist defines oniomania as compulsive buying, which matches this vignette directly. Excoriation is skin picking and onychophagia is nail biting, neither of which fits a shopping-related pattern; hoarding involves accumulating possessions and difficulty discarding them, which is a distinct pattern from compulsive buying itself."
  },
  {
    "stem": "Which of the following are part of the OCD-related disorder family, per the study guide? Select all that apply.",
    "options": [
      "Trichotillomania",
      "Excoriation disorder",
      "Body dysmorphic disorder",
      "Hoarding disorder",
      "Obsessive-compulsive personality disorder"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "rationale": "The guide states trichotillomania, excoriation, onychophagia, oniomania, hoarding, and body dysmorphic disorder all sit in the OCD-related family per DSM-5. OCPD is a Cluster C personality disorder covered in Chapter 18 and is explicitly distinguished from OCD and its related family, not grouped with it."
  },
  {
    "stem": "Recurring nightmares of the traumatic event and intrusive memories belong to which PTSD symptom cluster, per the study guide?",
    "options": [
      "Intrusion",
      "Avoidance",
      "Negative alterations in cognition and mood",
      "Arousal and reactivity"
    ],
    "correct": 0,
    "rationale": "The guide's four PTSD clusters list intrusion first: recurring nightmares of the event, flashbacks, intrusive memories, and dissociative re-experiencing."
  },
  {
    "stem": "A client refuses to drive past the location of a car accident and avoids any conversation referencing it. Per the study guide, this belongs to which PTSD cluster?",
    "options": [
      "Avoidance",
      "Intrusion",
      "Negative alterations in cognition and mood",
      "Arousal and reactivity"
    ],
    "correct": 0,
    "rationale": "The guide's second PTSD cluster is avoidance — of reminders, places, and conversations connected to the trauma, exactly as described here."
  },
  {
    "stem": "A client repeatedly states \"I'm permanently broken\" and reports an inability to feel positive emotions since the trauma. Per the study guide, this belongs to which PTSD cluster?",
    "options": [
      "Negative alterations in cognition and mood",
      "Intrusion",
      "Avoidance",
      "Arousal and reactivity"
    ],
    "correct": 0,
    "rationale": "The guide's third PTSD cluster is negative alterations in cognition and mood: detachment from others, negative self-image, inability to feel positive emotions, and distorted blame — matching this vignette directly."
  },
  {
    "stem": "A client checks every room immediately upon entering a building and has an exaggerated startle response. Per the study guide, this belongs to which PTSD cluster?",
    "options": [
      "Arousal and reactivity",
      "Avoidance",
      "Intrusion",
      "Negative alterations in cognition and mood"
    ],
    "correct": 0,
    "rationale": "The guide's fourth PTSD cluster is arousal/reactivity: hypervigilance ('I check every room I enter'), exaggerated startle, irritability and anger, poor concentration, and insomnia."
  },
  {
    "stem": "A client's trauma occurred three weeks ago and symptoms have been present since. Based on the study guide's timeline criteria, what is the appropriate classification now, and when would this change to PTSD?",
    "options": [
      "Acute stress disorder now (symptoms 3 days to 1 month); it would become PTSD if symptoms persist beyond 1 month",
      "PTSD now, since three weeks already exceeds the diagnostic threshold",
      "Adjustment disorder, since three weeks fits within a 3-month stressor window",
      "Brief psychotic disorder, since psychotic symptoms typically emerge by three weeks"
    ],
    "correct": 0,
    "rationale": "The guide's timeline is the differentiator: acute stress disorder is the same symptom picture lasting 3 days to 1 month after the trauma; PTSD is diagnosed beyond 1 month (onset may be delayed). Three weeks falls within the ASD window, not yet PTSD."
  },
  {
    "stem": "A client develops emotional and behavioral symptoms out of proportion to a recent job loss, with no catastrophic traumatic event involved. Symptoms began two months ago. Which diagnosis is most consistent, and what determines resolution, per the study guide?",
    "options": [
      "Adjustment disorder; symptoms are expected to resolve within 6 months once the stressor (job loss) ends",
      "PTSD; symptoms should resolve only with trauma-focused psychotherapy over years",
      "Acute stress disorder; symptoms should resolve spontaneously within days",
      "GAD; symptoms should persist chronically regardless of the stressor's resolution"
    ],
    "correct": 0,
    "rationale": "The guide defines adjustment disorder as a response to a NON-catastrophic stressor (job loss, divorce, move) within 3 months, out of proportion to the stressor but resolving within 6 months once the stressor ends — contrasted with GAD's chronic, stressor-independent worry."
  },
  {
    "stem": "Which of the following would NOT be an expected finding in PTSD, per the study guide?",
    "options": [
      "Increased appetite and improved sleep following the trauma",
      "Hypervigilance and an exaggerated startle response",
      "Recurring nightmares and intrusive memories of the event",
      "Avoidance of people, places, or conversations connected to the trauma"
    ],
    "correct": 0,
    "rationale": "The guide specifically lists what PTSD is NOT: an obsessive need to talk about the trauma (avoidance is typical instead), increased appetite, improved sleep, or grandiose war stories. The other three options are core PTSD cluster findings the guide does describe."
  },
  {
    "stem": "A client with PTSD specifically struggles with recurrent trauma-related nightmares. Per the study guide, which medication is used specifically to target this symptom, in addition to an SSRI?",
    "options": [
      "Prazosin",
      "Paroxetine",
      "Buspirone",
      "Propranolol"
    ],
    "correct": 0,
    "rationale": "The guide states SSRIs are first-line for PTSD overall (reducing intrusion, avoidance, and hyperarousal), and prazosin is sometimes used specifically for trauma nightmares. Paroxetine is an SSRI without this nightmare-specific use noted; buspirone and propranolol are discussed in the guide under GAD and performance/social anxiety, not PTSD nightmares."
  },
  {
    "stem": "A client has two or more distinct personality states with memory gaps for everyday events. Per the study guide, what underlies this presentation and what is the best treatment?",
    "options": [
      "Severe, unresolved childhood abuse; best treatment is long-term psychotherapy focused on safety, processing trauma, and integration",
      "A recent single-incident adult trauma; best treatment is a short course of SSRIs alone",
      "A genetic predisposition unrelated to life history; best treatment is antipsychotic medication alone",
      "Chronic, low-grade stress in adulthood; best treatment is brief crisis counseling"
    ],
    "correct": 0,
    "rationale": "The guide states dissociative identity disorder is strongly rooted in severe, UNRESOLVED CHILDHOOD ABUSE — dissociation begins as a child's escape from trauma — and that the best treatment is long-term psychotherapy aimed at safety, processing trauma, and integration, not medication alone."
  },
  {
    "stem": "Two children both experienced grossly inadequate early caregiving. Child A is withdrawn and rarely seeks or responds to comfort. Child B is indiscriminately overfamiliar with strangers and will wander off with them without checking back. Per the study guide, which pairing is correct?",
    "options": [
      "Child A: reactive attachment disorder; Child B: disinhibited social engagement disorder",
      "Child A: disinhibited social engagement disorder; Child B: reactive attachment disorder",
      "Child A: separation anxiety disorder; Child B: oppositional defiant disorder",
      "Child A: autism spectrum disorder; Child B: conduct disorder"
    ],
    "correct": 0,
    "rationale": "The guide describes reactive attachment disorder (RAD) as withdrawn, inhibited, and rarely seeking or responding to comfort, and disinhibited social engagement disorder (DSED) as the opposite — indiscriminately overfamiliar, wandering off with strangers without checking back — both stemming from grossly inadequate early caregiving."
  },
  {
    "stem": "A client describes her partner as apologetic, bringing gifts and flowers, and promising to change, two days after an incident. Per the study guide, which phase of the cycle of violence does this represent, and why does this phase matter most for whether she stays?",
    "options": [
      "Honeymoon phase; it is what keeps victims from leaving because it renews hope that the abuser will change",
      "Tension-building phase; it is what keeps victims from leaving because they fear escalating the conflict",
      "Acute battering phase; it is what keeps victims from leaving because they are physically unable to leave",
      "There is a fourth \"resolution\" phase in this model that best fits this description"
    ],
    "correct": 0,
    "rationale": "The guide describes the honeymoon phase as apologies, kindness, gifts, flowers, and promises to change; the victim becomes hopeful and wants to believe the abuser, and this phase is specifically what keeps victims from leaving. The cycle of violence has only three phases per the guide — tension-building, acute battering, and honeymoon — not four."
  },
  {
    "stem": "A beating is triggered specifically by the victim announcing she plans to leave the relationship. Per the study guide, which phase of the cycle of violence does this episode belong to?",
    "options": [
      "Acute battering phase",
      "Tension-building phase",
      "Honeymoon phase",
      "Escalation phase (not part of this three-phase model)"
    ],
    "correct": 0,
    "rationale": "The guide describes acute battering as the explosion of built-up tension — a brutal beating, often 'triggered' by something such as the victim announcing she will leave. Tension-building is the buildup of minor incidents beforehand, and honeymoon is the reconciliation that follows."
  },
  {
    "stem": "Per the study guide, what is the single strongest predictor of a person's future violence?",
    "options": [
      "A history of previous violence",
      "A diagnosis of a mood disorder",
      "Low socioeconomic status",
      "A single episode of verbal conflict with no physical component"
    ],
    "correct": 0,
    "rationale": "The guide states directly that the strongest predictor of future violence is a HISTORY of violence; other drivers it names are substance intoxication, impulsivity, command hallucinations, and manic/mixed states — not socioeconomic status or diagnosis category alone."
  },
  {
    "stem": "Which bruising pattern should raise the nurse's suspicion for child abuse, per the study guide?",
    "options": [
      "Bruising on the torso, back, buttocks, or upper arms",
      "Bruising on the knees and shins of a mobile toddler",
      "Rebound tenderness on abdominal exam",
      "Mismatched clothing for the weather"
    ],
    "correct": 0,
    "rationale": "The guide's child abuse red flags include bruising in protected areas (torso, back, buttocks, upper arms) versus normal play areas (knees, shins); it specifically states rebound tenderness is a surgical emergency, NOT an abuse sign, and that mismatched clothing means nothing."
  },
  {
    "stem": "According to the study guide, what is the most common form of child maltreatment?",
    "options": [
      "Neglect",
      "Physical abuse",
      "Sexual abuse",
      "Emotional abuse"
    ],
    "correct": 0,
    "rationale": "The guide states directly: the most common form of child maltreatment is NEGLECT — failure to provide basic physical, emotional, medical, or educational needs."
  },
  {
    "stem": "A mother describes her partner's violence occurring in front of her toddler; on one occasion, an object thrown at her struck the child. Per the study guide, what is the nurse's legal duty, and does needing \"proof\" change it?",
    "options": [
      "The nurse must report as a mandated reporter; reasonable suspicion is enough — proof, parental permission, and fear of escalation do not remove the duty",
      "The nurse should report only if the child was the intended target of the violence",
      "The nurse should first obtain proof of the abuse before making a report",
      "The nurse should ask the mother's permission before reporting, since she is the child's legal guardian"
    ],
    "correct": 0,
    "rationale": "The guide states nurses are MANDATED REPORTERS of child abuse; a child exposed to or endangered by violence in the home — even if not the direct target — is reportable. You report reasonable suspicion; you do not need proof, parental permission, or certainty, and fear of escalating the violence does not remove the duty."
  },
  {
    "stem": "A sexual assault survivor says, \"I never should have been out alone.\" Per the study guide, which nursing response is most therapeutic?",
    "options": [
      "\"You believe this wouldn't have happened if you hadn't been out alone?\"",
      "\"Try not to focus on that — let's focus on your recovery instead.\"",
      "\"Why were you out alone that night?\"",
      "\"That's not true at all, so you shouldn't think that way.\""
    ],
    "correct": 0,
    "rationale": "The guide gives this exact example: the therapeutic response REFLECTS and explores the feeling ('You believe this wouldn't have happened if you hadn't been out alone?') rather than contradicting her, lecturing her to focus on recovery, or asking 'why' questions — all of which the guide identifies as responses that fail."
  },
  {
    "stem": "A client reports being given a drink at a party, after which she experienced sedation, muscle relaxation, and near-total amnesia for the following hours. Which substance does this most closely match, per the study guide?",
    "options": [
      "Flunitrazepam (Rohypnol)",
      "GHB",
      "Ketamine",
      "Alcohol, with no other substance involved"
    ],
    "correct": 0,
    "rationale": "The guide describes flunitrazepam (Rohypnol) as causing sedation, muscle relaxation, and amnesia — matching this presentation. GHB produces relaxation, euphoria, and disinhibition; ketamine produces a dream-like state and victim compliance; alcohol is noted as the most commonly involved substance overall, but this specific sedation/muscle relaxation/amnesia cluster matches Rohypnol."
  },
  {
    "stem": "A competent adult client discloses ongoing intimate partner violence but is not ready to leave the relationship. Per the study guide, what is the nurse's role, and why shouldn't the nurse pressure her to leave immediately?",
    "options": [
      "Assess safety, help develop a safety plan, document injuries precisely, and provide resources while respecting her autonomy — leaving is statistically the most dangerous time",
      "Insist she leave today and arrange transportation to a shelter regardless of her wishes",
      "Contact her partner directly to mediate the conflict before she leaves",
      "Withhold documentation of her injuries until she agrees to leave the relationship"
    ],
    "correct": 0,
    "rationale": "The guide states a competent adult victim makes her own decisions; the nurse's role is to assess safety, help develop a safety plan, document injuries precisely, and provide resources — respecting autonomy rather than pressuring her to leave — because leaving is statistically the most dangerous time."
  },
  {
    "stem": "Which nursing actions reflect appropriate priority sexual assault care, per the study guide? Select all that apply.",
    "options": [
      "Treat serious physical injury first",
      "Preserve evidence",
      "Never leave the patient alone",
      "Offer control and choices at every step",
      "Encourage the patient to shower before the exam so she feels more comfortable"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "rationale": "The guide's sexual assault care priorities are: treat serious physical injury first; preserve evidence; never leave the patient alone; and offer control and choices at every step. Encouraging a shower before the exam is not part of this guidance and would compromise evidence preservation, contradicting the priority to preserve evidence."
  },
  {
    "stem": "A client is pacing, has a rising voice, clenched fists, and early verbal threats. Per the study guide, which phase of the aggression cycle is this, and what is the nursing response?",
    "options": [
      "Escalation; de-escalate with a quiet space, calm voice, and offer of PRN medication",
      "Triggering; identify the trigger and address the unmet need",
      "Crisis; ensure safety of everyone first and call for backup",
      "Recovery; maintain a calm, low-stimulation environment"
    ],
    "correct": 0,
    "rationale": "The guide's second phase, escalation, is described as pacing, rising voice, clenched fists, and early verbal threats, with de-escalation via a quiet space, calm voice, and offering PRN medication. Triggering is the initial stressor stage; crisis is peak aggression where control is lost; recovery follows crisis as the patient calms."
  },
  {
    "stem": "A patient suddenly becomes aggressive on the unit. Per the study guide, what is the nurse's first action, before anything else?",
    "options": [
      "Verbal de-escalation in a calm, non-threatening tone",
      "Administering the ordered PRN medication",
      "Applying physical restraints per the standing order",
      "Calling for security to remove the patient from the unit"
    ],
    "correct": 0,
    "rationale": "The guide states that when a patient suddenly becomes aggressive, the FIRST action is verbal de-escalation in a calm, non-threatening tone — before restraints, before PRN medication, before anything more restrictive."
  },
  {
    "stem": "Which positioning is correct when the nurse approaches an agitated client to de-escalate, per the study guide?",
    "options": [
      "Stand at an angle rather than directly in front of the client, keep a large personal space, and know where the exit is",
      "Stand directly in front of the client to project confidence and control",
      "Move as close as possible to convey calm reassurance",
      "Turn slightly away from the client to reduce the appearance of confrontation"
    ],
    "correct": 0,
    "rationale": "The guide instructs the nurse to keep a LARGE personal space, never crowd or move close, stand at an angle and never directly in front (and never turn your back), know where the exit is, have other staff nearby, and move to a private, low-stimulation area."
  },
  {
    "stem": "Which of the following is a non-therapeutic response to an escalating client, per the study guide?",
    "options": [
      "\"Why are you acting like this?\"",
      "\"You seem really upset. Can you tell me what's happening for you right now?\"",
      "Using a calm tone and neutral body language",
      "Moving the interaction to a private, low-stimulation area"
    ],
    "correct": 0,
    "rationale": "The guide lists non-therapeutic responses as commands ('stop yelling,' 'sit down'), 'why' questions, threats, dismissiveness, or walking away from an escalating patient. The validate-and-invite phrasing ('You seem really upset...') is the guide's own example of a correct de-escalation technique, not a non-therapeutic one."
  },
  {
    "stem": "Per the study guide, which client presentation carries the highest risk for aggression toward others?",
    "options": [
      "A client in a manic or mixed bipolar state with command hallucinations",
      "A client with severe depression and psychomotor retardation",
      "A client in a catatonic state",
      "A client with generalized anxiety disorder who is pacing and worried"
    ],
    "correct": 0,
    "rationale": "The guide states who is most likely to become aggressive by thinking impulsivity plus impaired reality testing: mania, mixed bipolar states, substance-induced psychosis, and command hallucinations. It specifically notes depressed, catatonic, and anxious patients are the LEAST likely to harm others, though suicide risk is its own separate assessment."
  },
  {
    "stem": "Per the study guide, what is the correct order of the least-restrictive-first hierarchy for managing an aggressive patient?",
    "options": [
      "Verbal de-escalation → PRN medication → seclusion → physical restraint",
      "PRN medication → verbal de-escalation → physical restraint → seclusion",
      "Physical restraint → seclusion → PRN medication → verbal de-escalation",
      "Seclusion → physical restraint → verbal de-escalation → PRN medication"
    ],
    "correct": 0,
    "rationale": "The guide states the hierarchy is always: verbal de-escalation → PRN medication → seclusion → physical restraint, with restraint reserved as a last resort for immediate danger to self or others."
  },
  {
    "stem": "An agitated manic patient throws a chair but hurts no one. The provider has ordered four-point restraints. Per the study guide, what should the nurse do first, and does the order require immediate compliance?",
    "options": [
      "Attempt de-escalation and move to a quiet space first; a provider's order does not override the nurse's independent assessment of whether restraint is truly indicated at this moment",
      "Apply the restraints immediately since a provider order has already been written",
      "Substitute IM medication automatically instead of restraints, since medication is always a gentler option",
      "Restrain the patient and skip de-escalation, since throwing furniture already justifies restraint regardless of injury"
    ],
    "correct": 0,
    "rationale": "The guide states that throwing furniture without injuring anyone still calls for de-escalation and a quiet space before restraints, even with an order in hand, and that a provider's order does not override the nurse's independent assessment of whether restraint is truly indicated. It also specifically notes chemical restraint (forced IM medication) is still a restraint — not a gentler automatic substitute that skips the least-restrictive analysis."
  },
  {
    "stem": "Per the study guide, within what timeframe must a provider order and face-to-face assessment be obtained after emergency restraint application?",
    "options": [
      "Within 1 hour",
      "Within 4 hours",
      "Within 2 hours",
      "Within 24 hours"
    ],
    "correct": 0,
    "rationale": "The guide states the provider order must be obtained within 1 HOUR of emergency application, with a face-to-face provider assessment within that hour."
  },
  {
    "stem": "Per the study guide, which set of restraint monitoring numbers is correct for an adult patient?",
    "options": [
      "Monitoring every 15 minutes; release reassessment at least every 2 hours; order renewal every 4 hours",
      "Monitoring every 30 minutes; release reassessment every 1 hour; order renewal every 2 hours",
      "Monitoring every 1 hour; release reassessment every 4 hours; order renewal every 8 hours",
      "Monitoring every 15 minutes; release reassessment every 4 hours; order renewal every 4 hours"
    ],
    "correct": 0,
    "rationale": "The guide's restraint numbers are: monitoring every 15 MINUTES (circulation, skin integrity, hydration/toileting, distress); release reassessment at least every 2 HOURS for adults (it explicitly states waiting 4 hours between release checks violates the standard); and order renewal every 4 HOURS for adults."
  },
  {
    "stem": "Which elements are legally required in restraint documentation, per the study guide? Select all that apply.",
    "options": [
      "The specific behavior that necessitated the restraint",
      "The type of restraint used and its duration",
      "The patient's response and every monitoring check",
      "The patient's written consent to be restrained",
      "The family's opinion about the restraint decision"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "rationale": "The guide states legally required documentation includes the specific BEHAVIOR that necessitated restraint (the clinical justification), the type used, duration, patient response, and every monitoring check — and specifically notes patient consent and family opinion are NOT required elements, since consent is not required in a true emergency."
  },
  {
    "stem": "Which communication approach is most appropriate for a client with paranoid personality disorder?",
    "options": [
      "Clear, straightforward, matter-of-fact communication with reliable follow-through on every commitment made",
      "Warm reassurance paired with frequent physical touch to build trust quickly",
      "Vague or indirect answers to avoid triggering the client's suspicion",
      "Direct confrontation about the irrationality of the client's suspicions"
    ],
    "correct": 0,
    "rationale": "The study guide specifically instructs using clear, straightforward, matter-of-fact communication and following through on commitments with paranoid PD clients. Physical touch can increase suspicion, vagueness undermines the trust that straightforwardness builds, and direct confrontation about the suspicions themselves is not the guide's recommended approach."
  },
  {
    "stem": "A client with schizoid personality disorder is reclusive, prefers to be alone, and appears genuinely content with minimal social contact. What is the most appropriate nursing approach?",
    "options": [
      "Respect the client's need to isolate rather than pushing socialization",
      "Encourage frequent group therapy participation to build social skills",
      "Interpret the isolation as a sign of underlying depression requiring intervention",
      "Assign a roommate to reduce the client's loneliness"
    ],
    "correct": 0,
    "rationale": "The guide's nursing point for schizoid PD is to respect the need to isolate — this client is content without relationships, unlike avoidant PD where the isolation is driven by fear. Pushing socialization, assuming depression, or assigning a roommate all misread a schizoid client's genuine preference for solitude."
  },
  {
    "stem": "Which nursing approach is correct for a client with antisocial personality disorder, per the study guide?",
    "options": [
      "Firm, consistent limit-setting while watching for manipulation of staff and peers",
      "Flexible, negotiable rules to build rapport and trust",
      "Unlimited privileges to reduce power struggles on the unit",
      "Avoiding limit-setting entirely to prevent triggering aggression"
    ],
    "correct": 0,
    "rationale": "The guide's nursing point for antisocial PD is firm, consistent limit-setting, with vigilance for manipulation of staff and peers. Negotiable rules, unlimited privileges, and avoiding limits altogether all invite the manipulation the guide specifically warns about."
  },
  {
    "stem": "A client with histrionic personality disorder is dramatic and seductive, and cries loudly when a request is denied. Which nursing approaches are appropriate, per the study guide? Select all that apply.",
    "options": [
      "Maintain professional boundaries",
      "Promote appropriate behavior in group settings",
      "Offer assertiveness training",
      "Keep interactions matter-of-fact",
      "Reciprocate friendly physical contact to build rapport"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "rationale": "The guide's nursing approach for histrionic PD is to maintain professional boundaries, promote appropriate behavior in group settings, offer assertiveness training, and keep interactions matter-of-fact. Reciprocating physical contact blurs the professional boundary the other four approaches are meant to protect."
  },
  {
    "stem": "A client states, \"The rules don't really apply to someone like me — the staff should make exceptions.\" This statement reflects the sense of entitlement most characteristic of which personality disorder?",
    "options": [
      "Narcissistic personality disorder",
      "Antisocial personality disorder",
      "Histrionic personality disorder",
      "Borderline personality disorder"
    ],
    "correct": 0,
    "rationale": "The guide describes narcissistic PD as involving grandiosity and a sense of entitlement ('everyone should admire me'). ASPD centers on rights violations and deceit rather than a belief in personal exemption from rules; histrionic centers on drama and attention; borderline centers on unstable mood and fear of abandonment."
  },
  {
    "stem": "A client with avoidant personality disorder is reluctant to share feelings with the nurse. What is the most likely reason for this reluctance, per the study guide?",
    "options": [
      "Fear of a negative reaction or criticism, including from staff",
      "Genuine indifference toward the therapeutic relationship",
      "A calculated wish to manipulate the nurse",
      "Comfort with rigid self-control over emotional expression"
    ],
    "correct": 0,
    "rationale": "The guide states that avoidant PD clients censor thoughts and feelings for fear of a negative reaction and fear criticism from everyone, including staff. Indifference describes schizoid PD, manipulation describes antisocial PD, and comfort with rigid control describes OCPD's ego-syntonic traits — none of which fit avoidant PD's fear-driven reluctance."
  },
  {
    "stem": "Which behaviors are characteristic of obsessive-compulsive personality disorder (OCPD), per the study guide? Select all that apply.",
    "options": [
      "Overwhelming punctuality",
      "Frugality with money",
      "Devotion to work at the expense of relationships",
      "Stiff, formal mannerisms",
      "A flexible approach to rules and deadlines"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "rationale": "The guide describes OCPD as perfectionism, rigidity, preoccupation with order/rules/control, devotion to work at the expense of relationships, stiff formal mannerisms, overwhelming punctuality, and frugality with money. A flexible approach to rules is the opposite of this rigid, controlled pattern."
  },
  {
    "stem": "A student reports feeling \"a little on edge\" before an exam but says it's actually helping her focus and recall material faster than usual. This is most consistent with?",
    "options": [
      "Mild anxiety — the useful kind, which sharpens perception",
      "Moderate anxiety",
      "Severe anxiety",
      "A maladaptive stress response requiring immediate intervention"
    ],
    "correct": 0,
    "rationale": "The study guide describes mild anxiety as restlessness, irritability, and mild tension, with perception actually SHARPENED — learning and problem-solving improve. This is explicitly called the useful kind of anxiety, matching a student who is on edge but performing better because of it."
  },
  {
    "stem": "Which are expected sympathetic (\"fight or flight\") physiologic signs of anxiety, per the study guide? Select all that apply.",
    "options": [
      "Tachycardia",
      "Hyperventilation",
      "Dry mouth",
      "Diarrhea",
      "Slowed respiratory rate"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "rationale": "The guide lists sympathetic signs of anxiety as tachycardia, elevated blood pressure, hyperventilation, sweating, trembling, restlessness, dry mouth, and diarrhea. It specifically states anxiety does NOT slow respirations, lower blood pressure, or improve concentration (except at the mild level)."
  },
  {
    "stem": "A client has an intense, immediate fear reaction specifically to elevators and avoids them entirely, but has no difficulty with other public or open spaces. This is most consistent with?",
    "options": [
      "Specific phobia",
      "Agoraphobia",
      "Social anxiety disorder",
      "Generalized anxiety disorder"
    ],
    "correct": 0,
    "rationale": "The guide defines specific phobia as an irrational, disproportionate fear of a specific object or situation with an immediate anxiety response on exposure and avoidance — matching a fear confined to elevators. Agoraphobia involves open/public spaces broadly, social anxiety centers on fear of judgment, and GAD is diffuse worry not tied to one trigger."
  },
  {
    "stem": "A client reports dizziness, sweating, and blushing at just the thought of an upcoming presentation, days before it occurs. This anticipatory symptom pattern is most consistent with?",
    "options": [
      "Social anxiety disorder",
      "Panic disorder",
      "Specific phobia",
      "Generalized anxiety disorder"
    ],
    "correct": 0,
    "rationale": "The guide describes social anxiety disorder as fear of embarrassment, judgment, or being the center of attention, with anticipatory symptoms — dizziness, sweating, blushing, shaking — at the mere thought of the event. Panic disorder centers on unexpected attacks rather than anticipation of a known event; specific phobia ties to one object; GAD is free-floating worry."
  },
  {
    "stem": "Which statement correctly distinguishes generalized anxiety disorder from adjustment disorder, per the study guide?",
    "options": [
      "GAD is chronic, free-floating worry independent of a single stressor; adjustment disorder follows an identifiable non-catastrophic stressor and resolves once it ends",
      "GAD follows an identifiable stressor and resolves within 6 months; adjustment disorder is chronic and stressor-independent",
      "Both disorders are chronic and stressor-independent, differing only in symptom severity",
      "Both disorders are tied to a single identifiable stressor and resolve within the same timeframe"
    ],
    "correct": 0,
    "rationale": "The guide contrasts GAD's chronic, free-floating worry — not tied to a single stressor — with adjustment disorder, which follows an identifiable non-catastrophic stressor (job loss, divorce, move) and resolves within 6 months once that stressor ends."
  },
  {
    "stem": "A client on sertraline is also started on a triptan for migraines and develops agitation, hallucinations, fever, tachycardia, sweating, tremor, and incoordination. What should the nurse suspect?",
    "options": [
      "Serotonin syndrome",
      "SSRI discontinuation syndrome",
      "Neuroleptic malignant syndrome",
      "A simple allergic reaction"
    ],
    "correct": 0,
    "rationale": "The guide identifies serotonin syndrome — agitation, hallucinations, fever, tachycardia, sweating, tremor, and incoordination — as the emergency to teach patients to report, especially when serotonergic drugs are combined (such as an SSRI with a triptan)."
  },
  {
    "stem": "A client on venlafaxine for anxiety should be monitored for which effect specifically noted in the study guide?",
    "options": [
      "Increased diastolic blood pressure",
      "QT prolongation",
      "Hypoglycemia",
      "Photosensitivity"
    ],
    "correct": 0,
    "rationale": "The guide notes that venlafaxine, an SNRI, can raise diastolic blood pressure. It separately notes duloxetine (also an SNRI) treats neuropathic pain but carries a hepatotoxicity risk — a distinct caution from venlafaxine's blood pressure effect."
  },
  {
    "stem": "A client with social anxiety disorder is prescribed propranolol specifically for an upcoming public speaking event. Which teaching is correct, per the study guide?",
    "options": [
      "Take it as needed shortly before the anxiety-provoking event, not daily, to blunt physical symptoms like racing heart and trembling",
      "Take it daily for cumulative benefit, similar to an SSRI",
      "Expect significant weight gain as a common side effect",
      "Expect increased photosensitivity requiring sun protection"
    ],
    "correct": 0,
    "rationale": "The guide describes propranolol as blunting the PHYSICAL symptoms of performance/social anxiety (racing heart, trembling), taken as needed before the anxiety-provoking event rather than daily, and specifically notes it does not cause weight gain or photosensitivity."
  },
  {
    "stem": "A client repeatedly picks at their skin until it bleeds, particularly during stressful periods, and reports difficulty stopping despite trying. Which OCD-related disorder does this describe, per the study guide's key terms?",
    "options": [
      "Excoriation disorder",
      "Trichotillomania",
      "Onychophagia",
      "Oniomania"
    ],
    "correct": 0,
    "rationale": "The guide's key terms checklist defines excoriation as skin-picking disorder, matching this vignette directly. Trichotillomania is hair pulling, onychophagia is nail biting, and oniomania is compulsive buying."
  },
  {
    "stem": "A client bites their nails to the point of bleeding and cuticle damage, especially when anxious. Which term from the study guide's key terms describes this behavior?",
    "options": [
      "Onychophagia",
      "Excoriation",
      "Trichotillomania",
      "Hoarding"
    ],
    "correct": 0,
    "rationale": "The guide's key terms checklist defines onychophagia as nail biting, matching this vignette. Excoriation is skin picking, trichotillomania is hair pulling, and hoarding involves accumulating possessions and difficulty discarding them."
  },
  {
    "stem": "A client has accumulated such extensive amounts of newspapers and other items that hallways in the home are impassable, and experiences significant distress at the thought of discarding any of it. Which disorder does this describe?",
    "options": [
      "Hoarding disorder",
      "Oniomania",
      "Obsessive-compulsive personality disorder",
      "Body dysmorphic disorder"
    ],
    "correct": 0,
    "rationale": "The guide lists hoarding as part of the OCD-related family. This vignette — accumulation of possessions with distress at discarding them — matches hoarding specifically, not compulsive buying (oniomania), the ego-syntonic rigidity of OCPD, or a preoccupation with a perceived appearance defect (BDD)."
  },
  {
    "stem": "Which treatment approach for OCD, per the study guide, pairs medication with an evidence-based psychotherapy technique?",
    "options": [
      "SSRIs plus CBT/exposure and response prevention",
      "Benzodiazepines plus insight-oriented psychotherapy alone",
      "Antipsychotics plus supportive counseling only",
      "No medication is used; psychotherapy alone is considered curative"
    ],
    "correct": 0,
    "rationale": "The guide states OCD is chronic but treatable with SSRIs plus CBT/exposure and response prevention — not benzodiazepines, not antipsychotics, and not psychotherapy alone with no medication."
  },
  {
    "stem": "Which brain circuit does the study guide identify as hyperactive in OCD?",
    "options": [
      "The orbitofrontal cortex–basal ganglia loop",
      "The amygdala-hippocampal circuit",
      "The prefrontal-cerebellar loop",
      "The limbic-thalamic pathway"
    ],
    "correct": 0,
    "rationale": "The guide states OCD's etiology involves hyperactivity in the orbitofrontal cortex–basal ganglia loop, along with genetic vulnerability and serotonin dysregulation — reinforcing that OCD is a brain-based illness, not a character flaw."
  },
  {
    "stem": "Which pairings of term to definition are correct, per the study guide's key terms checklist? Select all that apply.",
    "options": [
      "Excoriation — skin-picking disorder",
      "Trichotillomania — hair pulling",
      "Onychophagia — nail biting",
      "Oniomania — compulsive buying",
      "Hoarding — fear of open spaces"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "rationale": "The guide's key terms checklist defines excoriation as skin picking, trichotillomania as hair pulling, onychophagia as nail biting, and oniomania as compulsive buying. Fear of open spaces is agoraphobia, not hoarding."
  },
  {
    "stem": "A family member states the client \"chooses to keep washing her hands over and over because it feels good.\" Which correction best reflects the study guide's explanation of why compulsions occur?",
    "options": [
      "The compulsion is performed to reduce the anxiety triggered by an obsession, not because it feels pleasurable — that relief is what reinforces the cycle",
      "The client is choosing to perform the ritual for sensory enjoyment",
      "The client repeats the behavior mainly to gain attention from family",
      "The behavior is a side effect of medication and unrelated to anxiety"
    ],
    "correct": 0,
    "rationale": "The guide is explicit: compulsions exist to REDUCE ANXIETY caused by an obsession, not for pleasure, attention, or as a medication side effect — and that temporary anxiety relief is what reinforces the whole obsession-compulsion cycle."
  },
  {
    "stem": "A veteran with PTSD frequently and eagerly volunteers vivid, boastful retellings of combat heroics to anyone who will listen, with no apparent distress. Does this presentation support a PTSD diagnosis, per the study guide?",
    "options": [
      "No — grandiose, boastful retelling is not a recognized PTSD symptom; PTSD more typically involves avoidance of trauma reminders",
      "Yes — an obsessive need to retell the trauma is a hallmark PTSD symptom",
      "Yes — heroic retelling reflects the intrusion symptom cluster",
      "Yes — this reflects hypervigilance, part of the arousal cluster"
    ],
    "correct": 0,
    "rationale": "The guide explicitly states what PTSD is NOT: an obsessive need to talk about the trauma (avoidance is typical instead), increased appetite, improved sleep, or grandiose war stories. Eager, boastful, distress-free retelling does not fit the PTSD symptom pattern described in the guide."
  },
  {
    "stem": "Which statement about PTSD pharmacotherapy is accurate, per the study guide?",
    "options": [
      "SSRIs are first-line and reduce intrusion, avoidance, and hyperarousal symptoms broadly, while prazosin is used specifically for trauma-related nightmares",
      "Prazosin is first-line for all PTSD symptoms, replacing SSRIs",
      "Benzodiazepines are first-line for PTSD due to their rapid onset",
      "Antipsychotics are first-line for PTSD regardless of psychotic symptoms"
    ],
    "correct": 0,
    "rationale": "The guide states SSRIs are first-line for PTSD, reducing intrusion, avoidance, and hyperarousal symptoms across the board, while prazosin is sometimes used specifically for trauma nightmares — a narrower, adjunct role, not a first-line replacement for SSRIs."
  },
  {
    "stem": "Per the study guide, how common is dissociative identity disorder, and what best characterizes its presentation?",
    "options": [
      "It is rare, and involves two or more distinct personality states with gaps in memory for everyday events",
      "It is common, and involves a single, stable alternate identity",
      "It is rare, and always involves psychotic symptoms such as hallucinations",
      "It is common, and typically resolves spontaneously without treatment"
    ],
    "correct": 0,
    "rationale": "The guide describes DID as rare, involving two or more distinct personality states with gaps in memory for everyday events, strongly rooted in severe unresolved childhood abuse — not a common condition, not a single stable alternate identity, not defined by psychosis, and not something that resolves without long-term treatment."
  },
  {
    "stem": "An infant in foster care rarely seeks or responds to comfort from caregivers and appears withdrawn and inhibited, despite consistent caregiving now being provided. This is most consistent with?",
    "options": [
      "Reactive attachment disorder",
      "Disinhibited social engagement disorder",
      "Autism spectrum disorder",
      "Separation anxiety disorder"
    ],
    "correct": 0,
    "rationale": "The guide describes reactive attachment disorder as withdrawn, inhibited, and rarely seeking or responding to comfort, stemming from grossly inadequate early caregiving — matching this vignette. DSED is the opposite pattern (indiscriminately overfamiliar); autism spectrum disorder and separation anxiety disorder are not discussed in this guide's attachment disorder section."
  },
  {
    "stem": "A child in a new foster placement immediately climbs into the lap of an unfamiliar adult at the grocery store and would willingly leave with them without hesitation. This is most consistent with?",
    "options": [
      "Disinhibited social engagement disorder",
      "Reactive attachment disorder",
      "Conduct disorder",
      "Oppositional defiant disorder"
    ],
    "correct": 0,
    "rationale": "The guide describes disinhibited social engagement disorder as indiscriminately overfamiliar, wandering off with strangers without checking back — matching this vignette exactly. RAD is the opposite pattern (withdrawn, avoids comfort); conduct disorder and oppositional defiant disorder are not part of this guide's attachment disorder content."
  },
  {
    "stem": "A client's PTSD symptoms did not become clearly apparent until four months after the traumatic event, though the guide notes onset \"may be delayed.\" Assuming the symptoms are now present and persistent, which diagnosis applies?",
    "options": [
      "PTSD, since it is diagnosed once symptoms are present beyond the 1-month mark regardless of when onset began",
      "Acute stress disorder, since it can extend up to 6 months after the trauma",
      "Adjustment disorder, since delayed onset always indicates a non-catastrophic stressor response",
      "No diagnosis applies, since symptoms must begin immediately after the trauma"
    ],
    "correct": 0,
    "rationale": "The guide notes PTSD is diagnosed once symptoms persist beyond 1 month, and specifically states onset may be delayed — so a four-month delay in clear symptom emergence does not rule out PTSD. Acute stress disorder is capped at 1 month, not 6; adjustment disorder applies to non-catastrophic stressors, not a delayed response to trauma; and delayed onset is explicitly anticipated by the guide, not disqualifying."
  },
  {
    "stem": "Which findings reflect the negative alterations in cognition and mood cluster of PTSD, per the study guide? Select all that apply.",
    "options": [
      "Detachment from others",
      "A persistently negative self-image",
      "Inability to feel positive emotions",
      "Distorted blame regarding the traumatic event",
      "An improved ability to experience joy"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "rationale": "The guide's third PTSD cluster — negative alterations in cognition and mood — includes detachment from others, negative self-image, inability to feel positive emotions, and distorted blame. An improved ability to experience joy is the opposite of this cluster and is not a PTSD finding."
  },
  {
    "stem": "A partner describes \"walking on eggshells,\" trying to keep everything calm, and often accepting blame for minor conflicts in the days before an incident. This best reflects which phase of the cycle of violence?",
    "options": [
      "Tension-building phase",
      "Acute battering phase",
      "Honeymoon phase",
      "A phase not included in this model"
    ],
    "correct": 0,
    "rationale": "The guide describes the tension-building phase as minor incidents — pushing, verbal abuse, criticism — where the victim walks on eggshells, tries to keep everything calm, and often accepts the blame, matching this vignette exactly."
  },
  {
    "stem": "Besides a history of violence, which factors does the study guide identify as drivers of violence risk? Select all that apply.",
    "options": [
      "Substance intoxication",
      "Impulsivity",
      "Command hallucinations",
      "Manic and mixed states",
      "A structured daily routine"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "rationale": "The guide lists substance intoxication, impulsivity, command hallucinations, and manic/mixed states as drivers of violence risk alongside history of violence. A structured daily routine is a protective factor, not a risk driver."
  },
  {
    "stem": "Which are recognized types of abuse, per the study guide? Select all that apply.",
    "options": [
      "Physical abuse",
      "Sexual abuse",
      "Emotional/psychological abuse",
      "Neglect",
      "Occupational abuse"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "rationale": "The guide names five recognized types of abuse: physical, sexual, emotional/psychological, neglect, and economic. \"Occupational abuse\" is not a category the guide identifies."
  },
  {
    "stem": "A client reports feelings of relaxation, euphoria, and disinhibition after an unknowingly altered drink at a party. Which substance most closely matches this, per the study guide?",
    "options": [
      "GHB",
      "Flunitrazepam (Rohypnol)",
      "Ketamine",
      "Alcohol alone, with no other substance involved"
    ],
    "correct": 0,
    "rationale": "The guide describes GHB as producing relaxation, euphoria, and disinhibition. Flunitrazepam produces sedation, muscle relaxation, and amnesia; ketamine produces a dream-like state and victim compliance — distinct symptom clusters from GHB's."
  },
  {
    "stem": "A client describes a dream-like state during an assault and later realizes she was unusually compliant with requests, with the drink tasting normal beforehand. Which substance most closely matches this, per the study guide?",
    "options": [
      "Ketamine",
      "GHB",
      "Flunitrazepam (Rohypnol)",
      "MDMA"
    ],
    "correct": 0,
    "rationale": "The guide describes ketamine as producing a dream-like state and victim compliance, matching this presentation. GHB produces relaxation/euphoria/disinhibition, flunitrazepam produces sedation/amnesia, and MDMA is not discussed in the guide's date-rape drug section."
  },
  {
    "stem": "Why does family violence often run through generations, per the study guide?",
    "options": [
      "It is learned behavior — children who witness or experience violence learn it as a way to cope and resolve conflict, carrying it into their own families",
      "It is primarily a genetic predisposition unrelated to environment",
      "It results from a chemical imbalance passed down biologically",
      "There is no established mechanism connecting generations, per the guide"
    ],
    "correct": 0,
    "rationale": "The guide attributes intergenerational transmission of violence to learned behavior: children who witness or experience violence learn it as a way to cope and resolve conflict, and carry it into their own families — not a genetic or biochemical explanation."
  },
  {
    "stem": "Which substance is most commonly involved in sexual assault facilitation overall, per the study guide, even though drugs like GHB and Rohypnol are also implicated?",
    "options": [
      "Alcohol",
      "Ketamine",
      "Flunitrazepam",
      "GHB"
    ],
    "correct": 0,
    "rationale": "The guide states that while GHB, flunitrazepam, and ketamine are all recognized date-rape drugs with distinct effects, alcohol remains the most commonly involved substance overall in sexual assault facilitation."
  },
  {
    "stem": "A sexual assault survivor becomes visibly anxious when asked to remove her clothing for the forensic exam without warning. What is the most appropriate nursing action, per the study guide's emphasis on offering control and choices?",
    "options": [
      "Explain each step in advance and let her guide the pace of the exam as much as possible",
      "Proceed efficiently to complete the exam and minimize the duration of her distress",
      "Postpone the exam entirely until she volunteers to proceed on her own",
      "Have a support person perform the undressing for her without further discussion"
    ],
    "correct": 0,
    "rationale": "The guide's sexual assault care priorities include offering control and choices at every step, which means explaining steps in advance and letting the survivor guide the pace — not rushing through for efficiency, not indefinitely postponing necessary care, and not bypassing her own involvement in the process."
  },
  {
    "stem": "Per the study guide, anger is best understood as what kind of emotion, and what nursing approach follows from this?",
    "options": [
      "A secondary emotion; addressing the underlying feeling (such as feeling discounted, humiliated, or vulnerable) helps the anger de-escalate",
      "A primary, unmodifiable emotion; the nurse should simply wait it out",
      "A purely physiological response; the nurse should focus only on vital signs",
      "A learned behavior that should be met with immediate consequences"
    ],
    "correct": 0,
    "rationale": "The guide states anger is a SECONDARY emotion — beneath it, patients feel discounted, embarrassed, guilty, humiliated, hurt, ignored, rejected, threatened, tired, or vulnerable — and that addressing the underlying feeling helps the anger de-escalate."
  },
  {
    "stem": "A client becomes tense immediately after being told visiting hours are over and a family member must leave. No behavioral escalation has occurred yet. Which phase of the aggression cycle is this, and what is the nursing response?",
    "options": [
      "Triggering; identify the trigger, address the unmet need, and approach calmly",
      "Escalation; offer PRN medication immediately",
      "Crisis; call for backup",
      "Recovery; maintain a low-stimulation environment"
    ],
    "correct": 0,
    "rationale": "The guide's first phase, triggering, is where a stressor activates the anger response, before behavioral escalation — the nursing response is to identify the trigger, address the unmet need, and approach calmly, not jump ahead to escalation- or crisis-level interventions."
  },
  {
    "stem": "A client has lost control, is swinging at staff, and is at peak aggression. Per the study guide, what is the nursing priority in this phase?",
    "options": [
      "Safety of everyone first — call for backup, clear the area, and use seclusion/restraint only if necessary",
      "Attempt verbal de-escalation exclusively before taking any other action",
      "Allow the episode to run its course without any intervention",
      "Administer oral PRN medication only"
    ],
    "correct": 0,
    "rationale": "The guide's third phase, crisis, is peak aggression where the patient has lost control; the priority is safety of everyone first — call for backup, clear the area, and use seclusion/restraint only if necessary. This differs from the escalation phase, where verbal de-escalation and PRN medication are the primary tools."
  },
  {
    "stem": "A client who was recently aggressive has stopped struggling and appears to be calming down. What is the appropriate nursing approach during this phase, per the study guide?",
    "options": [
      "Maintain a calm, low-stimulation environment and allow the client to re-regulate",
      "Immediately resume the client's full activity schedule to normalize behavior",
      "Debrief the incident in full detail right now while it's fresh",
      "Discontinue all monitoring since the crisis has passed"
    ],
    "correct": 0,
    "rationale": "The guide's fourth phase, recovery, calls for a calm, low-stimulation environment while the patient re-regulates — not a full activity schedule, an immediate detailed debrief (which belongs to the post-crisis phase), or dropping monitoring."
  },
  {
    "stem": "A client who was aggressive earlier now appears ashamed, remorseful, and exhausted. What is the appropriate nursing approach, per the study guide?",
    "options": [
      "Process the episode therapeutically and problem-solve triggers; never punish",
      "Withhold discussion of the incident entirely to avoid further shame",
      "Assign a consequence to reinforce accountability",
      "Minimize the incident to help the client move on quickly"
    ],
    "correct": 0,
    "rationale": "The guide's fifth phase, post-crisis (depression), involves shame, remorse, and exhaustion; the nursing response is to process the episode therapeutically and problem-solve triggers, and to never punish — not to avoid the topic entirely, assign consequences, or minimize what happened."
  },
  {
    "stem": "Per the study guide, when is consent required before applying medication or treatment to a patient?",
    "options": [
      "Consent is not required in a true emergency; otherwise patients retain the right to refuse medication and treatment unless court-ordered",
      "Consent is always required regardless of emergency status",
      "Consent is never required once a provider order exists",
      "Consent is only required for restraint, not for medication"
    ],
    "correct": 0,
    "rationale": "The guide states consent is NOT required in a true emergency; otherwise, patients retain the right to refuse medication and treatment unless court-ordered — a provider order alone does not remove the consent requirement outside of a true emergency."
  },
  {
    "stem": "A provider orders forced IM medication for an agitated patient who is not in immediate danger to self or others. How should the nurse classify this order, per the study guide?",
    "options": [
      "As a restraint — chemical restraint is still a restraint and is not a gentler substitute that skips the least-restrictive analysis",
      "As routine medication administration, since no physical restraint device is used",
      "As a seclusion order, since IM medication functions like seclusion",
      "As an emergency exception that doesn't require the same least-restrictive reasoning"
    ],
    "correct": 0,
    "rationale": "The guide explicitly states chemical restraint (forced IM medication) is still a restraint — it is not a gentler substitute that skips the least-restrictive analysis. Since this patient is not in immediate danger, forcing IM medication does not meet the standard for restraint use."
  },
  {
    "stem": "Which of the following are examples of non-therapeutic responses to an escalating patient, per the study guide? Select all that apply.",
    "options": [
      "Giving direct commands like \"stop yelling\" or \"sit down\"",
      "Asking \"why\" questions",
      "Making threats",
      "Being dismissive of the patient's concerns",
      "Validating the patient's feelings and inviting them to explain what's happening"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "rationale": "The guide lists non-therapeutic responses as commands ('stop yelling,' 'sit down'), 'why' questions, threats, dismissiveness, and walking away. Validating feelings and inviting explanation ('You seem really upset. Can you tell me what's happening for you right now?') is the guide's own example of a therapeutic response, not a non-therapeutic one."
  },
  {
    "stem": "Per the study guide's opening definition, what makes a pattern of behavior a personality disorder rather than just an unusual personal style?",
    "options": [
      "It is an enduring, inflexible pattern of inner experience and behavior that deviates from cultural expectations, is stable over time, and causes distress or impairment",
      "It is any personality trait that a client's family or friends find frustrating or hard to tolerate",
      "It is a temporary reaction to a stressful life event that resolves once the stressor passes",
      "It is any behavior pattern that responds well to a brief course of psychotherapy"
    ],
    "correct": 0,
    "rationale": "The guide opens Chapter 18 with this exact definition: an enduring, inflexible pattern of inner experience and behavior that deviates from cultural expectations, is stable over time, and causes distress or impairment. This is what distinguishes a true personality disorder from a merely unusual or frustrating trait, and from a temporary stress reaction (which would be adjustment disorder, not a personality disorder)."
  },
  {
    "stem": "Per the study guide, which intervention pairings correctly match a nursing approach to the cluster or disorder it targets? Select all that apply.",
    "options": [
      "Assertiveness training for dependent and histrionic clients",
      "Respecting the need for distance with schizoid and schizotypal clients",
      "Straightforward, honest communication with paranoid clients",
      "Professional boundaries with histrionic clients",
      "Frequent physical touch to build trust with paranoid clients"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "rationale": "The guide's 'Working With These Patients' section explicitly matches assertiveness training to dependent and histrionic clients, respecting distance to schizoid and schizotypal clients, straightforward honesty to paranoid clients, and professional boundaries to histrionic clients. Physical touch is not part of this guidance and would likely increase suspicion in a paranoid client rather than build trust."
  },
  {
    "stem": "Both borderline and antisocial personality disorder require the same core staffing intervention, per the study guide. What is it, and why does it matter equally for both?",
    "options": [
      "Firm, consistent limits enforced by every staff member — for borderline to prevent splitting from taking hold, and for antisocial to prevent manipulation from succeeding",
      "Flexible, case-by-case rules — for borderline to preserve the therapeutic alliance, and for antisocial to reduce power struggles",
      "Minimal staff contact — for borderline to reduce dependency, and for antisocial to reduce manipulation opportunities",
      "Group therapy exclusively — for borderline to build peer support, and for antisocial to build accountability"
    ],
    "correct": 0,
    "rationale": "The guide states a firm, supportive, CONSISTENT approach builds the therapeutic relationship, and specifically calls out setting limits with borderline and antisocial patients with every staff member enforcing the same limits — for borderline this closes the door on splitting, and for antisocial it closes the door on manipulation. Flexible rules, minimal contact, and group-only approaches all run counter to this consistency requirement."
  },
  {
    "stem": "A client with liver impairment needs a benzodiazepine. Which agents does the study guide identify as preferred because they bypass phase-I liver metabolism?",
    "options": [
      "Lorazepam, oxazepam, and temazepam",
      "Alprazolam, diazepam, and clonazepam",
      "Midazolam, triazolam, and flurazepam",
      "Buspirone, hydroxyzine, and propranolol"
    ],
    "correct": 0,
    "rationale": "The guide states lorazepam, oxazepam, and temazepam bypass phase-I liver metabolism, making them preferred choices with liver impairment — a distinct fact from the situational benzo-matching guidance (alprazolam for panic, lorazepam for seizures/catatonia, lorazepam or diazepam for withdrawal, midazolam for procedural sedation)."
  },
  {
    "stem": "An elderly client is given a benzodiazepine for anxiety and becomes more agitated and disinhibited rather than calmer. What does the study guide identify as the explanation, and which populations are at particular risk?",
    "options": [
      "Paradoxical agitation/disinhibition, which occurs more often in the elderly, the very young, and patients with brain injury",
      "An allergic reaction, which occurs more often in middle-aged adults with no other risk factors",
      "Expected therapeutic effect, since benzodiazepines commonly increase agitation in every age group",
      "Serotonin syndrome, which occurs more often in adolescents and young adults"
    ],
    "correct": 0,
    "rationale": "The guide specifically warns to watch for paradoxical agitation/disinhibition in the elderly, the very young, and patients with brain injury — the opposite of the expected calming benzodiazepine effect, and not an allergic reaction or serotonin syndrome (which involves fever, hallucinations, and incoordination, not simply agitation)."
  },
  {
    "stem": "A client has been taking a benzodiazepine daily for several months and wants to stop. Per the study guide, what is the correct approach?",
    "options": [
      "Taper the medication gradually, since abrupt benzodiazepine withdrawal can be life-threatening",
      "Stop the medication abruptly, since benzodiazepines carry no withdrawal risk",
      "Double the dose briefly before stopping to prevent rebound anxiety",
      "Switch directly to buspirone on the same day without any taper"
    ],
    "correct": 0,
    "rationale": "The guide states benzodiazepines require a taper — abrupt benzodiazepine withdrawal can be life-threatening. Stopping abruptly, dose-doubling before stopping, and same-day switching without a taper all ignore this specific safety warning."
  },
  {
    "stem": "Which anxiolytic does the study guide describe as a sedating antihistamine that is non-habit-forming?",
    "options": [
      "Hydroxyzine",
      "Alprazolam",
      "Buspirone",
      "Venlafaxine"
    ],
    "correct": 0,
    "rationale": "The guide lists hydroxyzine among the anxiolytic adjuncts as an antihistamine that is sedating and non-habit-forming — distinct from alprazolam (a benzodiazepine with dependence risk), buspirone (a non-benzodiazepine anxiolytic with a delayed onset), and venlafaxine (an SNRI)."
  },
  {
    "stem": "Per the study guide, which factors contribute to the multifactorial etiology of OCD? Select all that apply.",
    "options": [
      "Genetic vulnerability",
      "Serotonin dysregulation",
      "Hyperactivity in the orbitofrontal cortex–basal ganglia loop",
      "A single dominant gene inherited in a simple pattern",
      "A personal choice reflecting a lack of discipline"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "rationale": "The guide states OCD's etiology is multifactorial: genetic vulnerability, serotonin dysregulation, and hyperactivity in specific brain circuits (the orbitofrontal cortex–basal ganglia loop) — not a single dominant gene, and specifically not a matter of willpower or discipline."
  },
  {
    "stem": "A client repeatedly checks a mirror throughout the day, convinced that a barely visible mark on their chin is \"hideous and impossible to ignore,\" and has begun avoiding social events because of it. Which OCD-related disorder does this describe?",
    "options": [
      "Body dysmorphic disorder",
      "Hoarding disorder",
      "Trichotillomania",
      "Onychophagia"
    ],
    "correct": 0,
    "rationale": "The guide lists body dysmorphic disorder among the OCD-related family — a preoccupation with a perceived appearance flaw driving repetitive checking behavior and functional impairment, matching this vignette. Hoarding involves accumulating possessions, trichotillomania is hair pulling, and onychophagia is nail biting."
  },
  {
    "stem": "A client with PTSD reports constantly scanning the environment for danger and feeling unable to relax even in safe settings. Which key term from the study guide's checklist describes this state?",
    "options": [
      "Hypervigilance",
      "Dysphoria",
      "Depersonalization",
      "Agoraphobia"
    ],
    "correct": 0,
    "rationale": "The guide's key terms checklist defines hypervigilance as a state of heightened alertness and scanning for threat, part of the PTSD arousal cluster — matching this description directly. Dysphoria is a state of unease or dissatisfaction, depersonalization is a dissociative detachment from self, and agoraphobia is fear of open or public spaces."
  },
  {
    "stem": "A client reports that her partner controls all household finances, requires her to ask permission before making any purchase, and keeps her without access to their joint bank account. Which type of abuse does this describe, per the study guide?",
    "options": [
      "Economic abuse",
      "Physical abuse",
      "Neglect",
      "Sexual abuse"
    ],
    "correct": 0,
    "rationale": "The guide names economic abuse as one of the five recognized types of abuse alongside physical, sexual, emotional/psychological, and neglect. Controlling finances and restricting access to money is the defining pattern of economic abuse specifically, not physical harm, neglectful failure to provide for needs, or sexual violation."
  },
  {
    "stem": "A depressed, withdrawn client is assessed as low risk for aggression toward others, consistent with the study guide's note that depressed, catatonic, and anxious patients are the least likely to harm others. Does this low aggression risk mean the client is not a safety concern?",
    "options": [
      "No — though least likely to harm others, suicide risk is its own separate assessment that must still be completed",
      "Yes — low risk for aggression toward others means the client requires no further safety assessment",
      "Yes — depressed clients are guide-defined as safe from all forms of self-harm as well",
      "No — depressed clients are actually at the highest risk for aggression toward others, per the guide"
    ],
    "correct": 0,
    "rationale": "The guide notes depressed, catatonic, and anxious patients are the LEAST likely to harm others, but explicitly adds that suicide risk is its own separate assessment — low risk for violence toward others does not mean the client needs no further safety evaluation, and it does not mean the client is the highest risk for aggression toward others (that group is mania, mixed states, substance-induced psychosis, and command hallucinations)."
  }
];
