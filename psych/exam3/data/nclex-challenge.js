/* Psych Exam 3 - NCLEX Challenge Round - Mixed review across all six chapters
   (Ch 18 Personality, Ch 14 Anxiety, Ch 15 OCD, Ch 13 Trauma, Ch 12 Abuse, Ch 11 Anger)
   Bank of 116 questions, written only from facts in Tom's Exam 3 study guide.
   Rewritten in full to eliminate overlap with the KC, DD, and professor's question
   banks for all six chapters -- different vignettes, different characters, different
   question framing than any of those files use, even where the underlying fact is
   necessarily the same (the guide is finite).
   PTSD timeline items use the study guide's 1-month acute-stress/PTSD line as the
   tested answer, with the professor's alternate 3-month lecture framing noted in
   the rationale where relevant, matching how trauma-kc.js and trauma-dd.js handle
   the same discrepancy. Checked directly against NUR2010_Exam3_Study_Guide.docx.
   Formatting standard: for questions that ask "which term/diagnosis applies,"
   options are the bare term only -- no "Term, since [reason]" construction, since
   that spells out the correct logic inside the option itself. Reasoning lives in
   the rationale field.
   QUIZ_CONFIG.maxQuestions caps each attempt at 50, randomly drawn from this pool each time.
   Convention: correct is always index 0 for single-select; engine shuffles.
   SATA uses correct as an array of indices, authored first. */
window.QUESTIONS = [
  {
    "stem": "A client tells the nurse practitioner, \"You're the only provider who has ever truly understood me,\" then tells the social worker an hour later, \"That doctor doesn't care about me at all.\" Which defense mechanism does this represent?",
    "options": [
      "Splitting",
      "Projection",
      "Reaction formation",
      "Denial"
    ],
    "correct": 0,
    "rationale": "Splitting is all-good/all-bad thinking with no middle ground, the signature defense of borderline personality disorder. Idealizing one provider and devaluing another within the same hour is a classic splitting pattern. Projection attributes one's own feelings to someone else, reaction formation expresses the opposite of what is felt, and denial refuses to acknowledge a reality."
  },
  {
    "stem": "Which statement about the diagnosis of antisocial personality disorder is accurate?",
    "options": [
      "It is the only personality disorder that cannot be formally diagnosed before age 18",
      "It can be diagnosed as early as age 12 with parental consent",
      "It requires a documented episode of psychosis",
      "It is diagnosed using the identical criteria in children and adults"
    ],
    "correct": 0,
    "rationale": "Antisocial personality disorder is the only personality disorder with an age restriction -- it cannot be formally diagnosed before 18. The same pattern in a minor is called conduct disorder. It does not require psychosis, and the criteria are not applied identically across ages precisely because of this restriction."
  },
  {
    "stem": "A 34-year-old man lives alone, has never dated, declines every invitation from coworkers, and tells his sister he is perfectly satisfied with his life as it is. A 29-year-old woman tells her therapist she longs for a best friend but has not spoken to a coworker in months because she is certain they would find her boring. Which pairing is correct?",
    "options": [
      "The man: schizoid personality disorder; the woman: avoidant personality disorder",
      "The man: avoidant personality disorder; the woman: schizoid personality disorder",
      "The man: schizotypal personality disorder; the woman: dependent personality disorder",
      "The man: paranoid personality disorder; the woman: histrionic personality disorder"
    ],
    "correct": 0,
    "rationale": "The man is genuinely content alone and does not want relationships, matching schizoid personality disorder. The woman desperately wants connection but avoids it out of fear of rejection and judgment, matching avoidant personality disorder. The reverse pairing and the other disorders listed don't fit this contrast."
  },
  {
    "stem": "A client tells the nurse he sometimes knows what a caller wants before answering the phone and that certain numbers protect him from harm. He dresses in unusual layered clothing and has no close friends, but has never had a sustained hallucination. Which is most consistent, and how does it differ from schizophrenia?",
    "options": [
      "Schizotypal personality disorder; unlike schizophrenia, it does not involve sustained delusions or hallucinations",
      "Schizoid personality disorder; unlike schizophrenia, it involves restricted emotional range instead of magical beliefs",
      "Paranoid personality disorder; unlike schizophrenia, it involves grudges instead of odd beliefs",
      "Brief psychotic disorder; unlike schizophrenia, it lasts less than one month"
    ],
    "correct": 0,
    "rationale": "Magical thinking, odd dress, and social isolation without sustained delusions or hallucinations describes schizotypal personality disorder, which shares genetic overlap with schizophrenia but does not include the sustained psychosis that defines it."
  },
  {
    "stem": "Which client presentation reflects obsessive compulsive personality disorder rather than obsessive-compulsive disorder?",
    "options": [
      "A client who takes pride in a strict, orderly routine and sees nothing wrong with it",
      "A client distressed by repetitive counting rituals he cannot stop",
      "A client who recognizes his checking behavior is excessive",
      "A client whose family reports rituals intensify during exams"
    ],
    "correct": 0,
    "rationale": "OCPD traits like rigid orderliness are ego-syntonic -- the person is comfortable with them, and there are no true obsessions or compulsions. The other three options describe the ego-dystonic distress and insight that belong to OCD."
  },
  {
    "stem": "A client insists on being seated at the head of the table, expects the treatment team to rearrange the schedule around him, and dismisses a peer's feedback with visible disdain, showing no interest in how his remarks landed. Which personality disorder is most consistent with this presentation?",
    "options": [
      "Narcissistic personality disorder",
      "Histrionic personality disorder",
      "Antisocial personality disorder",
      "Borderline personality disorder"
    ],
    "correct": 0,
    "rationale": "Grandiosity, entitlement, a demand for special treatment, and contempt for others' feedback with no empathy for its impact describes narcissistic personality disorder. Histrionic centers on dramatic attention-seeking, antisocial on rights violations, and borderline on unstable mood and abandonment fear."
  },
  {
    "stem": "A staff member agrees to cover a colleague's shift, then repeatedly shows up late, leaves tasks unfinished, and complains under her breath about being overworked, without ever directly declining the request. Which behavior pattern is this?",
    "options": [
      "Passive-aggressive behavior",
      "Splitting",
      "Assertive communication",
      "Antisocial behavior"
    ],
    "correct": 0,
    "rationale": "Surface agreement paired with indirect resistance -- lateness, incomplete tasks, and covert negativity instead of a direct refusal -- is passive-aggressive behavior. This pattern shows up in colleagues and coworkers, not only in patients."
  },
  {
    "stem": "A client with dependent personality disorder has stayed in a relationship where her partner controls her finances and isolates her from friends, telling the nurse, \"I wouldn't survive on my own.\" What should the nurse monitor for in herself while working with this client?",
    "options": [
      "The urge to take over and make decisions for the client",
      "Her own fear of being abandoned by the client",
      "Whether she is idealizing the client without reason",
      "Whether she is applying rules inconsistently with coworkers"
    ],
    "correct": 0,
    "rationale": "A dependent client's helplessness pulls caregivers toward rescuing and deciding for her, which the nurse must recognize as countertransference and resist, instead reinforcing the client's own assertive choices. Fear of abandonment and splitting are borderline concepts, and inconsistent limits are the borderline/antisocial concern."
  },
  {
    "stem": "Which goal takes priority over every other treatment goal across the personality disorders as a chapter?",
    "options": [
      "Safety, whether the risk is self-injury or violence toward others",
      "Building insight into ego-syntonic traits",
      "Starting dialectical behavior therapy as soon as possible",
      "Correcting cognitive distortions through teaching"
    ],
    "correct": 0,
    "rationale": "Safety comes before every other goal across this chapter -- self-injury risk with borderline PD or violence risk with antisocial PD outranks insight-building, therapy initiation, or cognitive teaching, all of which matter but come second."
  },
  {
    "stem": "A client with borderline personality disorder tells one staff member she is the \"only decent person on the unit\" and tells another she is \"useless and doesn't belong in this field.\" Which nursing actions address this pattern? Select all that apply.",
    "options": [
      "Ensure every staff member enforces identical limits and communicates at handoff",
      "Monitor for self-mutilation as a safety priority",
      "Support DBT, CBT, or transference-focused psychotherapy",
      "Assign the client only to the staff she speaks well of",
      "Let each nurse set her own rules based on her relationship with the client"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "rationale": "Splitting is neutralized by absolute staff consistency and communication, alongside safety monitoring and evidence-based therapies. Rewarding the favored staff member or allowing individualized rules is exactly what lets splitting succeed."
  },
  {
    "stem": "A client refuses a routine blood draw, telling the nurse the lab tech \"has been talking about me behind my back\" with no evidence offered. Which communication approach should the nurse use?",
    "options": [
      "Clear, straightforward, matter-of-fact communication with reliable follow-through",
      "Warm reassurance with frequent physical contact to build trust",
      "Vague, noncommittal answers to avoid feeding the suspicion",
      "Direct confrontation about how irrational the belief is"
    ],
    "correct": 0,
    "rationale": "Paranoid clients respond best to straightforward, matter-of-fact communication with dependable follow-through. Touch and excessive warmth increase suspicion, vagueness undermines the trust that directness builds, and confronting the belief head-on invites defensiveness rather than trust."
  },
  {
    "stem": "A client who has schizoid personality disorder declines an invitation to join the unit's game night, stating he would rather read alone and does not feel he is missing anything. Which nursing approach is most appropriate?",
    "options": [
      "Respect his preference for solitude rather than pushing him to socialize",
      "Encourage daily group therapy to build his social skills",
      "Treat the withdrawal as a sign of untreated depression",
      "Assign a roommate so he is not isolated"
    ],
    "correct": 0,
    "rationale": "The schizoid client is genuinely content alone, unlike the avoidant client whose isolation is driven by fear. Pushing socialization, assuming depression, or forcing a roommate all misread a preference that isn't distressing to the client."
  },
  {
    "stem": "A client with antisocial personality disorder tells the nurse she is the only staff member who \"really gets him\" and asks for extra snack privileges outside the posted schedule. Which nursing response is appropriate?",
    "options": [
      "Restate the schedule matter-of-factly and apply it the same as for every client",
      "Grant the request once since he has behaved well this week",
      "Ask him to explain why the extra snack matters so much to him",
      "Tell him she will bring it up with the treatment team"
    ],
    "correct": 0,
    "rationale": "Flattery paired with a request for special treatment is manipulation, and the correct response is calm, consistent enforcement of the same limit that applies to everyone. Any exception, negotiation, or deferral teaches that manipulation works."
  },
  {
    "stem": "A client with histrionic personality disorder interrupts a group session, stands up, and describes her weekend in exaggerated detail with dramatic gestures. Which nursing actions are appropriate? Select all that apply.",
    "options": [
      "Maintain professional boundaries",
      "Redirect toward appropriate group behavior",
      "Offer assertiveness training",
      "Keep interactions matter-of-fact",
      "Give her extra one-on-one time to satisfy the need for attention"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "rationale": "Professional boundaries, redirection toward appropriate behavior, assertiveness training, and matter-of-fact interactions are the correct approach for histrionic personality disorder. Extra individual attention in response to the dramatic display reinforces the very behavior being addressed."
  },
  {
    "stem": "A client tells the nurse, \"The visiting hours don't really need to apply to me -- I'm not like the other patients here.\" This reflects the entitlement most characteristic of which personality disorder?",
    "options": [
      "Narcissistic personality disorder",
      "Antisocial personality disorder",
      "Histrionic personality disorder",
      "Borderline personality disorder"
    ],
    "correct": 0,
    "rationale": "A belief in personal exemption from ordinary rules reflects the grandiosity and entitlement of narcissistic personality disorder. Antisocial centers on rights violations rather than a belief in special status, histrionic on drama, and borderline on unstable mood and abandonment fear."
  },
  {
    "stem": "A client with avoidant personality disorder has attended three sessions without disclosing any personal information, stating only that she doesn't want the nurse to \"think less of her.\" What is the most likely explanation for this reluctance?",
    "options": [
      "Fear of a negative reaction or criticism, including from staff",
      "Genuine lack of interest in the therapeutic relationship",
      "A calculated attempt to manipulate the nurse",
      "Comfort with keeping her emotions tightly controlled"
    ],
    "correct": 0,
    "rationale": "Avoidant clients censor themselves out of fear of criticism or rejection from anyone, including staff, which is different from schizoid indifference, antisocial manipulation, or the ego-syntonic comfort with control seen in OCPD."
  },
  {
    "stem": "Which traits are characteristic of obsessive compulsive personality disorder? Select all that apply.",
    "options": [
      "Overwhelming punctuality",
      "Frugality with money",
      "Devotion to work over relationships",
      "Stiff, formal mannerisms",
      "Comfort with last-minute changes to plans"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "rationale": "OCPD features perfectionism, rigidity, punctuality, frugality, and devotion to work at the expense of relationships, with stiff formal mannerisms. Comfort with last-minute change runs directly counter to this rigid, controlled pattern."
  },
  {
    "stem": "A new graduate asks what separates a personality disorder from someone who is simply \"difficult\" or has an unusual personal style. Which explanation is accurate?",
    "options": [
      "A personality disorder is an enduring, inflexible pattern that deviates from cultural expectations and causes distress or impairment",
      "A personality disorder is any trait that family members find hard to tolerate",
      "A personality disorder is a temporary reaction to a stressful life event",
      "A personality disorder is any behavior that improves quickly with brief therapy"
    ],
    "correct": 0,
    "rationale": "A true personality disorder is an enduring, inflexible pattern of inner experience and behavior that deviates from cultural expectations, is stable over time, and causes distress or impairment -- distinct from a merely unusual trait or a temporary stress reaction, which would be adjustment disorder."
  },
  {
    "stem": "Which nursing approaches are correctly matched to the personality disorder they target? Select all that apply.",
    "options": [
      "Assertiveness training for dependent and histrionic clients",
      "Respecting the need for distance with schizoid and schizotypal clients",
      "Straightforward, honest communication with paranoid clients",
      "Professional boundaries with histrionic clients",
      "Frequent physical contact to build trust with paranoid clients"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "rationale": "Assertiveness training matches dependent and histrionic clients, respecting distance matches schizoid and schizotypal clients, straightforward honesty matches paranoid clients, and professional boundaries match histrionic clients. Physical contact is not part of this guidance and would likely increase a paranoid client's suspicion."
  },
  {
    "stem": "A unit is developing a staffing plan for two clients: one with borderline personality disorder who idealizes and devalues staff, and one with antisocial personality disorder who tests limits with different staff members. What core staffing intervention addresses both?",
    "options": [
      "Firm, identical limits enforced by every staff member",
      "Flexible rules tailored to each client's mood that day",
      "Minimal staff contact to reduce conflict",
      "Group therapy only, with no individual staff assignments"
    ],
    "correct": 0,
    "rationale": "Firm, consistent limits enforced by every staff member close the door on splitting for the borderline client and on manipulation for the antisocial client. Flexible rules, minimal contact, and group-only approaches all undermine the consistency both clients need."
  },
  {
    "stem": "A client on a medical unit is pacing the hallway, has trouble concentrating on the nurse's instructions, reports his vision feels \"tunnel-like,\" and has a rising heart rate and respiratory rate, but is still able to follow directions when the nurse stays close and coaches him. Which level of anxiety does this represent?",
    "options": [
      "Moderate anxiety",
      "Mild anxiety",
      "Severe anxiety",
      "Panic-level anxiety"
    ],
    "correct": 0,
    "rationale": "Pacing, difficulty concentrating, a narrowed (tunnel-like) perceptual field, and rising heart and respiratory rates, with the person still able to follow direction when supported, is moderate anxiety. Mild anxiety sharpens perception rather than narrowing it, severe anxiety means the person cannot follow directions at all, and panic adds terror and possible loss of contact with reality."
  },
  {
    "stem": "A client in the waiting room is hyperventilating, gripping the armrest with a pounding heart, and repeating that something terrible is about to happen. She cannot follow the receptionist's instruction to slow her breathing, but she answers to her name and knows she is at the clinic. Which level of anxiety is this?",
    "options": [
      "Severe anxiety",
      "Moderate anxiety",
      "Panic-level anxiety",
      "Mild anxiety"
    ],
    "correct": 0,
    "rationale": "Extreme distress with an inability to follow directions or problem-solve, paired with intact contact with reality, is severe anxiety. Panic adds fear of death, possible hallucinations, and loss of contact with reality, which this client does not show. Moderate anxiety still allows following direction with support, and mild is the sharpened, useful kind."
  },
  {
    "stem": "A 26-year-old with no cardiac history collapses onto a bench with sudden chest pain, palpitations, drenching sweat, and a conviction that he is dying, and is too terrified to answer the paramedics' questions. What is happening, and what must still be done?",
    "options": [
      "This is most consistent with a panic attack, but a cardiac event such as MI must still be medically ruled out",
      "This is most consistent with generalized anxiety disorder, and no medical workup is needed since the cause is psychological",
      "This is most consistent with adjustment disorder, and the symptoms will resolve within days without intervention",
      "This is most consistent with social anxiety disorder, and medication is contraindicated during the episode"
    ],
    "correct": 0,
    "rationale": "Panic attacks peak within minutes and can mimic a heart attack; sudden onset in someone with no cardiac history plus overwhelming terror points to panic, but a medical cause must still be ruled out. GAD is chronic, free-floating worry rather than a sudden attack, adjustment disorder follows an identifiable stressor, and social anxiety centers on fear of judgment rather than sudden unexplained chest pain."
  },
  {
    "stem": "A client tells the nurse, \"I know it doesn't make sense, but I haven't left my apartment in three months except when my brother walks me to appointments.\" Which disorder does this best describe, and what is known about the client's insight?",
    "options": [
      "Agoraphobia; insight is intact -- the client knows the fear is unreasonable but cannot change the behavior",
      "Social anxiety disorder; insight is absent -- the client believes the fear is fully justified",
      "Specific phobia; insight is intact, and the fear resolves quickly with reassurance alone",
      "Generalized anxiety disorder; insight is intact, and the worry is limited to leaving the house"
    ],
    "correct": 0,
    "rationale": "Fear of open or public spaces that leaves a person housebound, going out only with a trusted escort, while still recognizing the fear is unreasonable, describes agoraphobia with intact insight -- an ego-dystonic pattern. Social anxiety centers on fear of judgment rather than open spaces, specific phobia and GAD don't match this housebound, escort-dependent picture."
  },
  {
    "stem": "A client on the unit is pacing faster and faster, his voice rising, though he has not become aggressive. What is the nurse's best action in this moment?",
    "options": [
      "Walk with the client at a gradually slower pace rather than commanding him to stop or sending him off alone",
      "Firmly instruct the client to sit down and stop pacing immediately",
      "Direct the client to his room to pace alone until he calms down",
      "Begin teaching relaxation techniques immediately so he has a tool to use right now"
    ],
    "correct": 0,
    "rationale": "For a pacing, escalating client, the nurse should not command him to stop, isolate him, or send him off alone -- walking with him at a gradually slower pace works because the nurse's own calm is contagious. Teaching relaxation techniques happens later, once anxiety is back down to mild or moderate, not during the escalating moment itself."
  },
  {
    "stem": "A client newly prescribed fluoxetine asks the nurse what time of day to take it. Which response is correct?",
    "options": [
      "\"Take it in the morning -- fluoxetine is activating and can cause insomnia if taken later in the day.\"",
      "\"Take it at bedtime -- fluoxetine is sedating and will help you sleep.\"",
      "\"Only take it when your anxiety flares up, similar to an as-needed medication.\"",
      "\"Timing doesn't matter -- fluoxetine has no activating or sedating properties.\""
    ],
    "correct": 0,
    "rationale": "Fluoxetine is activating and should be taken in the morning to prevent insomnia. It is not sedating, is not appropriate for PRN use, and timing matters specifically because of its activating profile."
  },
  {
    "stem": "A prescriber is choosing an SSRI for an older adult who is also pregnant. Which SSRI should generally be avoided, given both the age and pregnancy concerns and its discontinuation risk?",
    "options": [
      "Paroxetine",
      "Fluoxetine",
      "Sertraline",
      "Escitalopram"
    ],
    "correct": 0,
    "rationale": "Paroxetine is the sedating, anticholinergic SSRI to avoid in older adults and in pregnancy, and it carries the highest risk of discontinuation syndrome if stopped abruptly. Fluoxetine is activating with the mildest discontinuation risk due to its long half-life, while sertraline and escitalopram are first-line SSRIs without these particular cautions."
  },
  {
    "stem": "A client arrives in the emergency department tremulous and diaphoretic, reporting he stopped drinking alcohol two days ago. He needs a benzodiazepine for withdrawal. Which is most appropriate?",
    "options": [
      "Lorazepam or diazepam",
      "Midazolam",
      "Alprazolam",
      "Only a non-benzodiazepine such as buspirone"
    ],
    "correct": 0,
    "rationale": "Lorazepam or diazepam are matched to alcohol withdrawal, with lorazepam specifically also used for seizures and catatonia, while alprazolam is matched to severe panic attacks and midazolam to procedural sedation. Buspirone has no role here -- it isn't useful for acute situations or withdrawal management."
  },
  {
    "stem": "A client newly started on buspirone for generalized anxiety disorder calls the clinic asking whether she can take an extra dose right now because she feels an attack starting. Which response reflects accurate teaching?",
    "options": [
      "\"Buspirone isn't effective taken as-needed -- it requires several weeks of consistent dosing for full effect, and it isn't habit-forming, so no taper is needed when stopping.\"",
      "\"Yes, taking an extra dose when you feel an attack starting is exactly how buspirone should be used.\"",
      "\"Buspirone works within minutes, so an extra dose now will help, but you'll need to taper carefully when you stop it.\"",
      "\"You should avoid aged cheese and smoked meats while taking buspirone to prevent a dangerous reaction.\""
    ],
    "correct": 0,
    "rationale": "Buspirone takes several weeks for full effect, is not useful PRN for acute attacks, has no dependence potential and needs no taper, and carries no dietary restriction -- the aged cheese and smoked meat warning belongs to MAOIs, not buspirone."
  },
  {
    "stem": "A nurse is teaching a community group about the physical toll of long-term, unmanaged stress. Which effects should be included? Select all that apply.",
    "options": [
      "Immune suppression leading to frequent infections",
      "Amenorrhea (reproductive shutdown)",
      "Elevated heart rate and blood pressure",
      "Poor attention span and sleep disturbance",
      "Slowed respiratory rate"
    ],
    "correct": [0, 1, 2, 3],
    "rationale": "Chronic, prolonged stress produces immune suppression from sustained cortisol exposure, amenorrhea, poor attention span, sleep disturbance, and elevated heart rate and blood pressure. Chronic stress does not slow the respiratory rate."
  },
  {
    "stem": "A firefighter tells the nurse he always feels a jolt of nervous energy right before entering a burning building, and that it actually helps him think faster and notice details he'd otherwise miss. This is most consistent with?",
    "options": [
      "Mild anxiety -- the useful kind, which sharpens perception",
      "Moderate anxiety",
      "Severe anxiety",
      "A maladaptive stress response requiring immediate intervention"
    ],
    "correct": 0,
    "rationale": "Mild anxiety produces restlessness, irritability, and mild tension, but perception is actually sharpened -- learning and problem-solving improve. This is explicitly the useful kind of anxiety, matching someone who performs better because of it."
  },
  {
    "stem": "A nurse is reviewing sympathetic (\"fight or flight\") signs of anxiety with a new graduate. Which findings belong on that list? Select all that apply.",
    "options": [
      "Tachycardia",
      "Hyperventilation",
      "Dry mouth",
      "Diarrhea",
      "Slowed respiratory rate"
    ],
    "correct": [0, 1, 2, 3],
    "rationale": "Sympathetic signs of anxiety include tachycardia, elevated blood pressure, hyperventilation, sweating, trembling, restlessness, dry mouth, and diarrhea. Anxiety does not slow respirations, lower blood pressure, or improve concentration -- except at the mild level."
  },
  {
    "stem": "A client takes the stairs every day rather than risk being trapped in an elevator, describing an immediate wave of panic the moment the doors close, though she has no trouble with crowded stores or open plazas. This is most consistent with?",
    "options": [
      "Specific phobia",
      "Agoraphobia",
      "Social anxiety disorder",
      "Generalized anxiety disorder"
    ],
    "correct": 0,
    "rationale": "An irrational, disproportionate fear of one specific object or situation, with an immediate anxiety response on exposure and consistent avoidance, describes specific phobia -- here confined to elevators. Agoraphobia involves open or public spaces broadly, social anxiety centers on fear of judgment, and GAD is diffuse worry not tied to a single trigger."
  },
  {
    "stem": "A college student begins sweating, flushing, and feeling dizzy for days leading up to a class presentation, well before she ever steps in front of the room. This anticipatory symptom pattern is most consistent with?",
    "options": [
      "Social anxiety disorder",
      "Panic disorder",
      "Specific phobia",
      "Generalized anxiety disorder"
    ],
    "correct": 0,
    "rationale": "Fear of embarrassment, judgment, or being the center of attention, with anticipatory symptoms like dizziness, sweating, and flushing at the mere thought of the event, describes social anxiety disorder. Panic disorder centers on unexpected attacks rather than anticipation of a known event, specific phobia ties to one object, and GAD is free-floating worry."
  },
  {
    "stem": "Which statement correctly distinguishes generalized anxiety disorder from adjustment disorder?",
    "options": [
      "GAD is chronic, free-floating worry independent of a single stressor; adjustment disorder follows an identifiable non-catastrophic stressor and resolves once it ends",
      "GAD follows an identifiable stressor and resolves within 6 months; adjustment disorder is chronic and stressor-independent",
      "Both disorders are chronic and stressor-independent, differing only in symptom severity",
      "Both disorders are tied to a single identifiable stressor and resolve within the same timeframe"
    ],
    "correct": 0,
    "rationale": "GAD is chronic, free-floating worry not tied to a single stressor, while adjustment disorder follows an identifiable non-catastrophic stressor -- job loss, divorce, a move -- and resolves within 6 months once that stressor ends."
  },
  {
    "stem": "A client taking sertraline starts a triptan for a migraine and soon develops agitation, visual disturbances, fever, a racing heart, sweating, tremor, and clumsy movements. What should the nurse suspect?",
    "options": [
      "Serotonin syndrome",
      "SSRI discontinuation syndrome",
      "Neuroleptic malignant syndrome",
      "A simple allergic reaction"
    ],
    "correct": 0,
    "rationale": "Agitation, hallucinations or visual disturbances, fever, tachycardia, sweating, tremor, and incoordination together point to serotonin syndrome, the emergency to teach patients to report especially when serotonergic drugs are combined, such as an SSRI with a triptan."
  },
  {
    "stem": "A client starting venlafaxine for anxiety asks what side effect to watch for. Which is correct?",
    "options": [
      "Increased diastolic blood pressure",
      "QT prolongation",
      "Hypoglycemia",
      "Photosensitivity"
    ],
    "correct": 0,
    "rationale": "Venlafaxine, an SNRI, can raise diastolic blood pressure. Duloxetine, another SNRI, treats neuropathic pain but carries a hepatotoxicity risk instead -- a distinct caution from venlafaxine's blood pressure effect."
  },
  {
    "stem": "A client with social anxiety disorder is prescribed propranolol specifically for an upcoming job interview. Which teaching is correct?",
    "options": [
      "\"Take it as needed shortly before the anxiety-provoking event, not daily, to blunt physical symptoms like a racing heart and trembling.\"",
      "\"Take it daily for cumulative benefit, similar to an SSRI.\"",
      "\"Expect significant weight gain as a common side effect.\"",
      "\"Expect increased photosensitivity requiring sun protection.\""
    ],
    "correct": 0,
    "rationale": "Propranolol blunts the physical symptoms of performance or social anxiety -- a racing heart, trembling -- taken as needed before the anxiety-provoking event rather than daily, and it does not cause weight gain or photosensitivity."
  },
  {
    "stem": "A client with cirrhosis needs a benzodiazepine for anxiety. Which agents are preferred because they bypass phase-I liver metabolism?",
    "options": [
      "Lorazepam, oxazepam, and temazepam",
      "Alprazolam, diazepam, and clonazepam",
      "Midazolam, triazolam, and flurazepam",
      "Buspirone, hydroxyzine, and propranolol"
    ],
    "correct": 0,
    "rationale": "Lorazepam, oxazepam, and temazepam bypass phase-I liver metabolism, making them preferred choices with liver impairment -- a distinct fact from situational benzodiazepine matching, such as alprazolam for panic or lorazepam or diazepam for withdrawal."
  },
  {
    "stem": "An 80-year-old is given a benzodiazepine for preprocedural anxiety and becomes more agitated and disinhibited instead of calmer. What explains this, and who else is at particular risk?",
    "options": [
      "Paradoxical agitation/disinhibition, which occurs more often in the elderly, the very young, and patients with brain injury",
      "An allergic reaction, which occurs more often in middle-aged adults with no other risk factors",
      "Expected therapeutic effect, since benzodiazepines commonly increase agitation in every age group",
      "Serotonin syndrome, which occurs more often in adolescents and young adults"
    ],
    "correct": 0,
    "rationale": "Paradoxical agitation and disinhibition occur more often in the elderly, the very young, and patients with brain injury -- the opposite of the expected calming benzodiazepine effect, and distinct from an allergic reaction or serotonin syndrome, which involves fever, hallucinations, and incoordination rather than simple agitation."
  },
  {
    "stem": "A client who has taken a benzodiazepine daily for eight months wants to stop. What is the correct approach?",
    "options": [
      "Taper the medication gradually, since abrupt benzodiazepine withdrawal can be life-threatening",
      "Stop the medication abruptly, since benzodiazepines carry no withdrawal risk",
      "Double the dose briefly before stopping to prevent rebound anxiety",
      "Switch directly to buspirone on the same day without any taper"
    ],
    "correct": 0,
    "rationale": "Benzodiazepines require a gradual taper because abrupt withdrawal can be life-threatening. Stopping abruptly, dose-doubling before stopping, and switching same-day without a taper all ignore that safety concern."
  },
  {
    "stem": "A client asks for something for anxiety that will help her sleep but that she won't become dependent on. Which anxiolytic fits, given that it's a sedating antihistamine rather than a controlled substance?",
    "options": [
      "Hydroxyzine",
      "Alprazolam",
      "Buspirone",
      "Venlafaxine"
    ],
    "correct": 0,
    "rationale": "Hydroxyzine is an antihistamine anxiolytic that is sedating and non-habit-forming, distinct from alprazolam, a benzodiazepine with dependence risk, buspirone, a non-benzodiazepine anxiolytic with delayed onset, and venlafaxine, an SNRI."
  },
  {
    "stem": "A client scrubs her hands under scalding water for nearly forty minutes each morning before she can leave the bathroom. What purpose does this behavior serve for her?",
    "options": [
      "It reduces the anxiety triggered by an obsession, which temporarily relieves distress and reinforces the cycle",
      "It seeks attention and reassurance from staff and family members",
      "It manages a side effect of a psychiatric medication she is taking",
      "It maintains vanity and physical appearance standards"
    ],
    "correct": 0,
    "rationale": "Compulsions like extended handwashing exist to reduce the anxiety caused by an obsession -- not for attention, vanity, or a medication side effect -- and that temporary relief is what reinforces the whole obsession-compulsion cycle."
  },
  {
    "stem": "A nurse is asked how to tell whether a client's rechecking behavior is clinically significant rather than an occasional habit. Which threshold is correct?",
    "options": [
      "The obsessions/compulsions consume at least one hour per day, or cause significant distress or functional impairment",
      "The obsessions must be present for at least six months before they can be considered clinically significant",
      "The compulsions must involve a visible physical ritual rather than any kind of mental act",
      "The client must have no insight at all into the excessive nature of the behavior"
    ],
    "correct": 0,
    "rationale": "The diagnostic threshold is that obsessions/compulsions consume at least one hour per day or cause significant distress or functional impairment -- not a six-month duration (that belongs to GAD), not a requirement that rituals be physical, and not a requirement of absent insight, since OCD is ego-dystonic and the client typically hates the behavior."
  },
  {
    "stem": "A new nurse asks how to tell OCD apart from obsessive-compulsive personality disorder when both clients seem rigid and preoccupied with order. What is the key distinction?",
    "options": [
      "OCD is ego-dystonic -- the thoughts feel foreign and distressing; OCPD is ego-syntonic -- the person is comfortable with the traits",
      "OCD is ego-syntonic and welcomed by the client; OCPD is ego-dystonic and causes the client significant distress",
      "Both OCD and OCPD are ego-syntonic, but only OCD involves true compulsions",
      "Both OCD and OCPD are ego-dystonic, but only OCPD responds to SSRIs and CBT"
    ],
    "correct": 0,
    "rationale": "Ego-dystonic versus ego-syntonic is the key axis here: OCD is ego-dystonic, meaning the thoughts feel distressing and foreign to the person's self-image, while OCPD, like most personality disorders, is ego-syntonic and consistent with how the person sees themselves. The other options reverse or misapply this axis."
  },
  {
    "stem": "A client is midway through a hand-checking ritual on the locks when a scheduled group activity begins. What is the nurse's correct early approach?",
    "options": [
      "Assess what situations precipitate the anxiety, allow time for rituals initially, then gradually help the client limit them as treatment progresses",
      "Abruptly stop the ritual to prevent it from becoming further reinforced",
      "Encourage the client to avoid situations that trigger the anxiety in the future",
      "Ignore the ritual entirely and proceed with the scheduled activity regardless of the client's distress"
    ],
    "correct": 0,
    "rationale": "Never abruptly block or forbid a compulsion, since interrupting it sends the client's anxiety through the roof, and never encourage avoidance either. The correct early nursing action is to assess what precipitates the anxiety, allow time for rituals initially, then gradually help the client limit them as treatment progresses."
  },
  {
    "stem": "A client with OCD confides that he keeps having a sudden, unwanted image of hurting his newborn, and he is terrified by the thought. What is the nurse's first priority?",
    "options": [
      "Assess intent and risk, maintain safety, and communicate that thoughts are not actions",
      "Restrict the client's contact with the infant immediately until the thoughts resolve",
      "Reassure the client the thoughts are meaningless and should be ignored without further assessment",
      "Notify the family that the client has expressed a wish to harm the baby"
    ],
    "correct": 0,
    "rationale": "For intrusive thoughts about harming others, the nurse should first assess intent and risk, maintain safety, and communicate that thoughts are not actions -- intrusive thoughts in OCD are ego-dystonic and rarely acted on, but assessment always comes first. Restricting contact or telling family the client has a 'wish to harm' skips the assessment step and mischaracterizes an ego-dystonic intrusive thought."
  },
  {
    "stem": "A father asks the nurse whether his son's OCD is a character flaw or \"something he could stop if he just tried harder.\" Which response is most accurate?",
    "options": [
      "\"OCD is a brain-based illness involving genetic vulnerability, serotonin dysregulation, and hyperactivity in specific brain circuits -- not a character flaw.\"",
      "\"OCD is primarily a learned habit that developed because the rituals were reinforced with attention in childhood.\"",
      "\"OCD is a personality trait that only becomes a disorder once it causes embarrassment in public.\"",
      "\"OCD is caused by a lack of willpower and typically resolves once the person becomes more disciplined.\""
    ],
    "correct": 0,
    "rationale": "OCD's etiology is multifactorial: genetic vulnerability, serotonin dysregulation, and hyperactivity in specific brain circuits (the orbitofrontal cortex-basal ganglia loop) -- it is a brain-based illness, not a character flaw. The other options mischaracterize OCD as a learned habit, a personality trait, or a willpower problem."
  },
  {
    "stem": "A sister asks what she should know about living with a sibling who has OCD. Which teaching point should the nurse include?",
    "options": [
      "\"The symptoms are involuntary and tend to worsen with stress, so try not to reinforce the rituals with immediate attention.\"",
      "\"The symptoms are voluntary, so consistent reminders to stop will help reduce them over time.\"",
      "\"Stress level has little effect on symptom severity, so family stress management isn't a priority.\"",
      "\"OCD is untreatable, so the family should focus on accommodating the rituals indefinitely.\""
    ],
    "correct": 0,
    "rationale": "Symptoms are involuntary and worsen with stress, families should avoid reinforcing rituals with immediate attention, and OCD is chronic but treatable with SSRIs plus CBT and exposure and response prevention -- it is not hopeless."
  },
  {
    "stem": "A client shows the nurse patchy bald spots along her hairline and admits she pulls strands out one at a time, more often when she's stressed at work. Which OCD-related disorder does this describe?",
    "options": [
      "Trichotillomania",
      "Excoriation disorder",
      "Onychophagia",
      "Oniomania"
    ],
    "correct": 0,
    "rationale": "Trichotillomania is hair pulling, excoriation is skin-picking disorder, onychophagia is nail biting, and oniomania is compulsive buying. This vignette -- pulling out hair, worse under stress -- matches trichotillomania specifically."
  },
  {
    "stem": "A client has maxed out three credit cards from repeated online shopping sprees that bring a brief rush followed by guilt and shame. Which term best fits?",
    "options": [
      "Oniomania",
      "Excoriation",
      "Onychophagia",
      "Hoarding"
    ],
    "correct": 0,
    "rationale": "Oniomania is compulsive buying, matching this vignette directly. Excoriation is skin picking and onychophagia is nail biting, neither of which fits a shopping pattern, and hoarding involves accumulating possessions and difficulty discarding them, a distinct pattern from compulsive buying."
  },
  {
    "stem": "A nursing instructor asks students to identify which conditions belong in the OCD-related disorder family per DSM-5. Which should the class select? Select all that apply.",
    "options": [
      "Trichotillomania",
      "Excoriation disorder",
      "Body dysmorphic disorder",
      "Hoarding disorder",
      "Obsessive-compulsive personality disorder"
    ],
    "correct": [0, 1, 2, 3],
    "rationale": "Trichotillomania, excoriation, onychophagia, oniomania, hoarding, and body dysmorphic disorder all sit in the OCD-related family per DSM-5. OCPD is a Cluster C personality disorder covered separately in the personality disorders chapter and is explicitly distinguished from OCD and its related family."
  },
  {
    "stem": "A client's forearms show fresh scabs and older scars from repeated picking, worse during finals week, and she says she can't stop even when she wants to. Which OCD-related disorder does this describe?",
    "options": [
      "Excoriation disorder",
      "Trichotillomania",
      "Onychophagia",
      "Oniomania"
    ],
    "correct": 0,
    "rationale": "Excoriation is skin-picking disorder, matching this vignette directly. Trichotillomania is hair pulling, onychophagia is nail biting, and oniomania is compulsive buying."
  },
  {
    "stem": "A client's cuticles are raw and bleeding from a habit he says intensifies whenever he's anxious about work deadlines. Which term describes this behavior?",
    "options": [
      "Onychophagia",
      "Excoriation",
      "Trichotillomania",
      "Hoarding"
    ],
    "correct": 0,
    "rationale": "Onychophagia is nail biting, matching this vignette. Excoriation is skin picking, trichotillomania is hair pulling, and hoarding involves accumulating possessions and difficulty discarding them."
  },
  {
    "stem": "A home health nurse cannot get through the front hallway because it's packed floor to ceiling with old mail and takeout containers, and the client becomes tearful at the suggestion of throwing any of it away. Which disorder does this describe?",
    "options": [
      "Hoarding disorder",
      "Oniomania",
      "Obsessive-compulsive personality disorder",
      "Body dysmorphic disorder"
    ],
    "correct": 0,
    "rationale": "Accumulation of possessions with significant distress at the thought of discarding them matches hoarding disorder specifically -- not compulsive buying (oniomania), the ego-syntonic rigidity of OCPD, or a preoccupation with a perceived appearance defect (BDD)."
  },
  {
    "stem": "A client newly diagnosed with OCD asks what treatment actually works. Which approach pairs medication with an evidence-based psychotherapy technique?",
    "options": [
      "SSRIs plus CBT/exposure and response prevention",
      "Benzodiazepines plus insight-oriented psychotherapy alone",
      "Antipsychotics plus supportive counseling only",
      "No medication is used; psychotherapy alone is considered curative"
    ],
    "correct": 0,
    "rationale": "OCD is chronic but treatable with SSRIs plus CBT and exposure and response prevention -- not benzodiazepines, not antipsychotics, and not psychotherapy alone with no medication."
  },
  {
    "stem": "A psychiatric resident asks which brain circuit is hyperactive in clients with OCD. What is the correct answer?",
    "options": [
      "The orbitofrontal cortex-basal ganglia loop",
      "The amygdala-hippocampal circuit",
      "The prefrontal-cerebellar loop",
      "The limbic-thalamic pathway"
    ],
    "correct": 0,
    "rationale": "OCD's etiology involves hyperactivity in the orbitofrontal cortex-basal ganglia loop, along with genetic vulnerability and serotonin dysregulation -- reinforcing that OCD is a brain-based illness, not a character flaw."
  },
  {
    "stem": "A husband tells the nurse his wife \"just likes checking the stove twelve times, it clearly feels good to her.\" Which correction best reflects why compulsions actually occur?",
    "options": [
      "The compulsion is performed to reduce the anxiety triggered by an obsession, not because it feels pleasurable -- that relief is what reinforces the cycle",
      "The client is choosing to perform the ritual for sensory enjoyment",
      "The client repeats the behavior mainly to gain attention from family",
      "The behavior is a side effect of medication and unrelated to anxiety"
    ],
    "correct": 0,
    "rationale": "Compulsions exist to reduce the anxiety caused by an obsession, not for pleasure, attention, or as a medication side effect -- and that temporary anxiety relief is what reinforces the whole obsession-compulsion cycle."
  },
  {
    "stem": "A researcher is explaining the causes of OCD to a group of nursing students. Which factors should be included as contributing to its multifactorial etiology? Select all that apply.",
    "options": [
      "Genetic vulnerability",
      "Serotonin dysregulation",
      "Hyperactivity in the orbitofrontal cortex-basal ganglia loop",
      "A single dominant gene inherited in a simple pattern",
      "A personal choice reflecting a lack of discipline"
    ],
    "correct": [0, 1, 2],
    "rationale": "OCD's etiology is multifactorial: genetic vulnerability, serotonin dysregulation, and hyperactivity in specific brain circuits (the orbitofrontal cortex-basal ganglia loop) -- not a single dominant gene, and specifically not a matter of willpower or discipline."
  },
  {
    "stem": "A client stands in front of the mirror for over an hour each morning, convinced her ears are \"grotesquely uneven,\" and has stopped attending class because of it. A clinician examines her and sees nothing unusual. Which OCD-related disorder does this describe?",
    "options": [
      "Body dysmorphic disorder",
      "Hoarding disorder",
      "Trichotillomania",
      "Onychophagia"
    ],
    "correct": 0,
    "rationale": "Body dysmorphic disorder involves a preoccupation with a perceived appearance flaw driving repetitive checking behavior and functional impairment, matching this vignette. Hoarding involves accumulating possessions, trichotillomania is hair pulling, and onychophagia is nail biting."
  },
  {
    "stem": "A client describes waking up most nights reliving the car crash in vivid detail and being ambushed during the day by sudden, unwanted memories of it. Which PTSD symptom cluster do these findings belong to?",
    "options": [
      "Intrusion",
      "Avoidance",
      "Negative alterations in cognition and mood",
      "Arousal and reactivity"
    ],
    "correct": 0,
    "rationale": "Intrusion is the first PTSD cluster: recurring nightmares of the event, flashbacks, intrusive memories, and dissociative re-experiencing, matching this vignette."
  },
  {
    "stem": "A client takes a longer route home every day to avoid passing the intersection where she was assaulted, and changes the subject whenever anyone brings it up. This belongs to which PTSD cluster?",
    "options": [
      "Avoidance",
      "Intrusion",
      "Negative alterations in cognition and mood",
      "Arousal and reactivity"
    ],
    "correct": 0,
    "rationale": "Avoidance is the second PTSD cluster -- of reminders, places, and conversations connected to the trauma, exactly as described here."
  },
  {
    "stem": "A client tells the nurse, \"Nothing feels good anymore, I don't think I'll ever be the same person again,\" and reports feeling cut off from everyone since the assault. This belongs to which PTSD cluster?",
    "options": [
      "Negative alterations in cognition and mood",
      "Intrusion",
      "Avoidance",
      "Arousal and reactivity"
    ],
    "correct": 0,
    "rationale": "Negative alterations in cognition and mood is the third PTSD cluster: detachment from others, negative self-image, inability to feel positive emotions, and distorted blame -- matching this vignette directly."
  },
  {
    "stem": "A client scans the exits the moment he enters any restaurant and jumps visibly when a tray is dropped nearby. This belongs to which PTSD cluster?",
    "options": [
      "Arousal and reactivity",
      "Avoidance",
      "Intrusion",
      "Negative alterations in cognition and mood"
    ],
    "correct": 0,
    "rationale": "Arousal and reactivity is the fourth PTSD cluster: hypervigilance, exaggerated startle, irritability and anger, poor concentration, and insomnia."
  },
  {
    "stem": "A client was in a serious car accident three weeks ago, and the same intrusive memories and avoidance symptoms have been present continuously since that day. Based on the study guide's timeline for these two diagnoses, what is the appropriate classification right now, and when would this change to PTSD?",
    "options": [
      "Acute stress disorder now, since it can last from 3 days to 1 month after the trauma; it becomes PTSD if symptoms persist beyond that 1-month mark",
      "PTSD now, since three weeks already exceeds the diagnostic threshold",
      "Adjustment disorder, since three weeks fits within a 3-month stressor window",
      "Brief psychotic disorder, since psychotic symptoms typically emerge by three weeks"
    ],
    "correct": 0,
    "rationale": "Acute stress disorder is the same symptom picture lasting 3 days to 1 month after the trauma, while PTSD is diagnosed once symptoms persist beyond that 1-month mark, with onset sometimes delayed. Three weeks falls within the acute stress disorder window. Some lecture material separately frames the PTSD cutoff as 3 months instead of 1 month -- if a question specifies the professor's framing, use that line instead; this question follows the study guide's timeline."
  },
  {
    "stem": "A client's symptoms of tearfulness, poor concentration, and trouble sleeping began about six weeks after she was laid off, with no traumatic event involved. Which diagnosis is most consistent, and what determines resolution?",
    "options": [
      "Adjustment disorder; symptoms are expected to resolve within 6 months once the stressor (job loss) ends",
      "PTSD; symptoms should resolve only with trauma-focused psychotherapy over years",
      "Acute stress disorder; symptoms should resolve spontaneously within days",
      "GAD; symptoms should persist chronically regardless of the stressor's resolution"
    ],
    "correct": 0,
    "rationale": "Adjustment disorder is a response to a non-catastrophic stressor -- job loss, divorce, a move -- within 3 months, out of proportion to the stressor but resolving within 6 months once the stressor ends, contrasted with GAD's chronic, stressor-independent worry."
  },
  {
    "stem": "A nurse is reviewing a client's chart for PTSD findings. Which documented finding would NOT be expected in PTSD?",
    "options": [
      "Increased appetite and improved sleep following the trauma",
      "Hypervigilance and an exaggerated startle response",
      "Recurring nightmares and intrusive memories of the event",
      "Avoidance of people, places, or conversations connected to the trauma"
    ],
    "correct": 0,
    "rationale": "PTSD does not typically present with an obsessive need to talk about the trauma, increased appetite, improved sleep, or grandiose retelling -- avoidance, hypervigilance, and intrusive memories are the expected findings instead."
  },
  {
    "stem": "A client with PTSD tells the nurse the SSRI has helped overall, but the nightmares of the assault are still severe most nights. Which medication is added specifically to target trauma-related nightmares?",
    "options": [
      "Prazosin",
      "Paroxetine",
      "Buspirone",
      "Propranolol"
    ],
    "correct": 0,
    "rationale": "SSRIs are first-line for PTSD overall, reducing intrusion, avoidance, and hyperarousal, while prazosin is sometimes added specifically for trauma nightmares. Paroxetine is an SSRI without this nightmare-specific role; buspirone and propranolol belong to GAD and performance/social anxiety management, not PTSD nightmares."
  },
  {
    "stem": "A client's coworkers describe her as sometimes seeming like \"a completely different person\" who doesn't remember conversations from earlier that day. Assessment reveals two or more distinct personality states with memory gaps for everyday events. What underlies this presentation, and what is the best treatment?",
    "options": [
      "Severe, unresolved childhood abuse; best treatment is long-term psychotherapy focused on safety, processing trauma, and integration",
      "A recent single-incident adult trauma; best treatment is a short course of SSRIs alone",
      "A genetic predisposition unrelated to life history; best treatment is antipsychotic medication alone",
      "Chronic, low-grade stress in adulthood; best treatment is brief crisis counseling"
    ],
    "correct": 0,
    "rationale": "Dissociative identity disorder is strongly rooted in severe, unresolved childhood abuse -- dissociation begins as a child's escape from trauma -- and the best treatment is long-term psychotherapy aimed at safety, processing trauma, and integration, not medication alone."
  },
  {
    "stem": "Two siblings raised in the same neglectful early environment now present very differently in foster care. The older sibling is withdrawn and rarely seeks or responds to comfort. The younger sibling climbs onto any adult's lap and will wander off with strangers without hesitation. Which pairing is correct?",
    "options": [
      "Older sibling: reactive attachment disorder; younger sibling: disinhibited social engagement disorder",
      "Older sibling: disinhibited social engagement disorder; younger sibling: reactive attachment disorder",
      "Older sibling: separation anxiety disorder; younger sibling: oppositional defiant disorder",
      "Older sibling: autism spectrum disorder; younger sibling: conduct disorder"
    ],
    "correct": 0,
    "rationale": "Reactive attachment disorder presents as withdrawn, inhibited, and rarely seeking or responding to comfort, while disinhibited social engagement disorder is the opposite -- indiscriminately overfamiliar, wandering off with strangers without checking back -- both stemming from grossly inadequate early caregiving."
  },
  {
    "stem": "A support group member with PTSD eagerly retells an elaborate, boastful version of his combat experience to anyone who will listen, showing no visible distress while doing so. Does this presentation support a PTSD diagnosis?",
    "options": [
      "No -- grandiose, boastful retelling is not a recognized PTSD symptom; PTSD more typically involves avoidance of trauma reminders",
      "Yes -- an obsessive need to retell the trauma is a hallmark PTSD symptom",
      "Yes -- heroic retelling reflects the intrusion symptom cluster",
      "Yes -- this reflects hypervigilance, part of the arousal cluster"
    ],
    "correct": 0,
    "rationale": "PTSD does not typically present as an obsessive need to talk about the trauma, increased appetite, improved sleep, or grandiose war stories -- avoidance is the more typical pattern. Eager, boastful, distress-free retelling does not fit the expected PTSD symptom picture."
  },
  {
    "stem": "Which statement about PTSD pharmacotherapy is accurate?",
    "options": [
      "SSRIs are first-line and reduce intrusion, avoidance, and hyperarousal symptoms broadly, while prazosin is used specifically for trauma-related nightmares",
      "Prazosin is first-line for all PTSD symptoms, replacing SSRIs",
      "Benzodiazepines are first-line for PTSD due to their rapid onset",
      "Antipsychotics are first-line for PTSD regardless of psychotic symptoms"
    ],
    "correct": 0,
    "rationale": "SSRIs are first-line for PTSD, reducing intrusion, avoidance, and hyperarousal symptoms across the board, while prazosin fills a narrower, adjunct role specifically for trauma nightmares rather than replacing SSRIs."
  },
  {
    "stem": "A family member asks how common dissociative identity disorder is and what it actually looks like. Which response is accurate?",
    "options": [
      "It is rare, and involves two or more distinct personality states with gaps in memory for everyday events",
      "It is common, and involves a single, stable alternate identity",
      "It is rare, and always involves psychotic symptoms such as hallucinations",
      "It is common, and typically resolves spontaneously without treatment"
    ],
    "correct": 0,
    "rationale": "DID is rare and involves two or more distinct personality states with gaps in memory for everyday events, strongly rooted in severe unresolved childhood abuse -- not a common condition, not a single stable identity, not defined by psychosis, and not something that resolves without long-term treatment."
  },
  {
    "stem": "A toddler recently placed in a new foster home rarely makes eye contact, does not reach for the foster parent when upset, and seems indifferent to comfort even when consistent, attentive caregiving is now being provided. This is most consistent with?",
    "options": [
      "Reactive attachment disorder",
      "Disinhibited social engagement disorder",
      "Autism spectrum disorder",
      "Separation anxiety disorder"
    ],
    "correct": 0,
    "rationale": "Reactive attachment disorder presents as withdrawn, inhibited, and rarely seeking or responding to comfort, stemming from grossly inadequate early caregiving. DSED is the opposite pattern (indiscriminately overfamiliar); autism spectrum disorder and separation anxiety disorder fall outside this attachment disorder content."
  },
  {
    "stem": "A caseworker reports that a child in a new placement hugged a stranger in the pediatrician's waiting room and tried to leave with them, showing no wariness at all. This is most consistent with?",
    "options": [
      "Disinhibited social engagement disorder",
      "Reactive attachment disorder",
      "Conduct disorder",
      "Oppositional defiant disorder"
    ],
    "correct": 0,
    "rationale": "Disinhibited social engagement disorder presents as indiscriminately overfamiliar, wandering off with strangers without checking back -- matching this vignette exactly. RAD is the opposite pattern (withdrawn, avoids comfort); conduct disorder and oppositional defiant disorder fall outside this attachment disorder content."
  },
  {
    "stem": "A client's coworkers didn't notice anything different in the weeks right after her accident, but four months later she is clearly struggling with nightmares, avoidance, and detachment that have persisted since. Which diagnosis applies?",
    "options": [
      "PTSD, since symptoms have persisted well beyond the 1-month acute stress disorder window, and onset is recognized to sometimes be delayed",
      "Acute stress disorder, since it can extend up to 6 months after the trauma",
      "Adjustment disorder, since delayed onset always indicates a non-catastrophic stressor response",
      "No diagnosis applies, since symptoms must begin immediately after the trauma"
    ],
    "correct": 0,
    "rationale": "PTSD is diagnosed once symptoms persist beyond the 1-month acute stress disorder window, and delayed onset is explicitly recognized rather than disqualifying. Acute stress disorder is capped at 1 month, not 6; adjustment disorder applies to non-catastrophic stressors, not a delayed trauma response."
  },
  {
    "stem": "A nurse is reviewing which findings belong in the negative alterations in cognition and mood cluster of PTSD before a case conference. Which should be included? Select all that apply.",
    "options": [
      "Detachment from others",
      "A persistently negative self-image",
      "Inability to feel positive emotions",
      "Distorted blame regarding the traumatic event",
      "An improved ability to experience joy"
    ],
    "correct": [0, 1, 2, 3],
    "rationale": "The negative alterations in cognition and mood cluster includes detachment from others, negative self-image, inability to feel positive emotions, and distorted blame. An improved ability to experience joy is the opposite of this cluster and is not a PTSD finding."
  },
  {
    "stem": "A client with PTSD tells the nurse she can never fully relax, even at home with the doors locked, because she's always scanning for anything that seems wrong. Which term describes this state?",
    "options": [
      "Hypervigilance",
      "Dysphoria",
      "Depersonalization",
      "Agoraphobia"
    ],
    "correct": 0,
    "rationale": "Hypervigilance is a state of heightened alertness and scanning for threat, part of the PTSD arousal cluster, matching this description directly. Dysphoria is a state of unease or dissatisfaction, depersonalization is a dissociative detachment from self, and agoraphobia is fear of open or public spaces."
  },
  {
    "stem": "A client shows the nurse a bouquet her partner brought her the morning after an argument turned physical, saying he cried and promised it would never happen again. Which phase of the cycle of violence does this represent, and why does this phase matter most for whether she stays?",
    "options": [
      "Honeymoon phase; it is what keeps victims from leaving because it renews hope that the abuser will change",
      "Tension-building phase; it is what keeps victims from leaving because they fear escalating the conflict",
      "Acute battering phase; it is what keeps victims from leaving because they are physically unable to leave",
      "There is a fourth \"resolution\" phase in this model that best fits this description"
    ],
    "correct": 0,
    "rationale": "The honeymoon phase involves apologies, kindness, gifts, and promises to change; the victim becomes hopeful and wants to believe the abuser, and this phase specifically is what keeps victims from leaving. The cycle of violence has only three phases -- tension-building, acute battering, and honeymoon -- not four."
  },
  {
    "stem": "A woman is severely beaten by her partner within an hour of telling him she had called a divorce attorney. Which phase of the cycle of violence does this episode belong to?",
    "options": [
      "Acute battering phase",
      "Tension-building phase",
      "Honeymoon phase",
      "Escalation phase (not part of this three-phase model)"
    ],
    "correct": 0,
    "rationale": "Acute battering is the explosion of built-up tension -- a brutal beating, often triggered by something such as the victim announcing she will leave. Tension-building is the buildup of minor incidents beforehand, and honeymoon is the reconciliation that follows."
  },
  {
    "stem": "A treatment team is assessing which client on the unit poses the greatest risk of future violent behavior. Which single factor is the strongest predictor?",
    "options": [
      "A history of previous violence",
      "A diagnosis of a mood disorder",
      "Low socioeconomic status",
      "A single episode of verbal conflict with no physical component"
    ],
    "correct": 0,
    "rationale": "The strongest predictor of future violence is a history of violence. Other recognized drivers include substance intoxication, impulsivity, command hallucinations, and manic or mixed states -- not socioeconomic status or diagnosis category alone."
  },
  {
    "stem": "A toddler is brought to the ED after a fall. Which bruising pattern found on exam should raise the nurse's suspicion for abuse rather than accidental injury?",
    "options": [
      "Bruising on the torso, back, buttocks, or upper arms",
      "Bruising on the knees and shins of a mobile toddler",
      "Rebound tenderness on abdominal exam",
      "Mismatched clothing for the weather"
    ],
    "correct": 0,
    "rationale": "Child abuse red flags include bruising in protected areas such as the torso, back, buttocks, and upper arms, versus normal play areas like the knees and shins. Rebound tenderness is a surgical emergency, not an abuse sign, and mismatched clothing means nothing on its own."
  },
  {
    "stem": "A pediatric nurse is reviewing intake data across the unit. Which single category accounts for the largest share of child maltreatment cases?",
    "options": [
      "Neglect",
      "Physical abuse",
      "Sexual abuse",
      "Emotional abuse"
    ],
    "correct": 0,
    "rationale": "The most common form of child maltreatment is neglect -- failure to provide basic physical, emotional, medical, or educational needs."
  },
  {
    "stem": "A father describes throwing a phone at his partner during an argument; it missed her and struck their five-year-old, who was standing nearby. The mother asks the nurse not to say anything since the child wasn't the intended target. What is the nurse's legal duty, and does needing \"proof\" change it?",
    "options": [
      "The nurse must report as a mandated reporter; reasonable suspicion is enough -- proof, parental permission, and fear of escalation do not remove the duty",
      "The nurse should report only if the child was the intended target of the violence",
      "The nurse should first obtain proof of the abuse before making a report",
      "The nurse should ask the mother's permission before reporting, since she is the child's legal guardian"
    ],
    "correct": 0,
    "rationale": "Nurses are mandated reporters of child abuse; a child exposed to or endangered by violence in the home -- even if not the direct target -- is reportable. The nurse reports reasonable suspicion, not proof or certainty, and neither parental permission nor fear of escalating the violence removes that duty."
  },
  {
    "stem": "A sexual assault survivor tells the nurse, \"I shouldn't have worn that outfit, I basically asked for it.\" Which nursing response is most therapeutic?",
    "options": [
      "\"You believe this wouldn't have happened if you'd dressed differently?\"",
      "\"Try not to focus on that -- let's focus on your recovery instead.\"",
      "\"Why did you choose to wear that outfit that night?\"",
      "\"That's not true at all, so you shouldn't think that way.\""
    ],
    "correct": 0,
    "rationale": "The therapeutic response reflects and explores the feeling rather than contradicting her, redirecting her away from the feeling, or asking a \"why\" question that can sound accusatory -- all of which fail to validate what she's expressing."
  },
  {
    "stem": "A client tells the nurse she accepted a drink from someone at a bar and later woke up with no memory of the last several hours, along with heavy sedation and muscle weakness that lingered into the morning. Which substance does this most closely match?",
    "options": [
      "Flunitrazepam (Rohypnol)",
      "GHB",
      "Ketamine",
      "Alcohol, with no other substance involved"
    ],
    "correct": 0,
    "rationale": "Flunitrazepam (Rohypnol) causes sedation, muscle relaxation, and amnesia, matching this presentation. GHB produces relaxation, euphoria, and disinhibition; ketamine produces a dream-like state and victim compliance; alcohol is the most commonly involved substance overall, but this specific sedation and amnesia cluster points to Rohypnol."
  },
  {
    "stem": "A client tells the nurse her husband hits her, but she isn't ready to leave him yet and doesn't want the nurse to push her. What is the nurse's role, and why shouldn't the nurse pressure her to leave immediately?",
    "options": [
      "Assess safety, help develop a safety plan, document injuries precisely, and provide resources while respecting her autonomy -- leaving is statistically the most dangerous time",
      "Insist she leave today and arrange transportation to a shelter regardless of her wishes",
      "Contact her partner directly to mediate the conflict before she leaves",
      "Withhold documentation of her injuries until she agrees to leave the relationship"
    ],
    "correct": 0,
    "rationale": "A competent adult victim makes her own decisions; the nurse's role is to assess safety, help develop a safety plan, document injuries precisely, and provide resources -- respecting autonomy rather than pressuring her to leave -- because leaving is statistically the most dangerous time."
  },
  {
    "stem": "A nurse is orienting a new hire to sexual assault exam protocol. Which actions should the new hire be taught as appropriate priority care? Select all that apply.",
    "options": [
      "Treat serious physical injury first",
      "Preserve evidence",
      "Never leave the patient alone",
      "Offer control and choices at every step",
      "Encourage the patient to shower before the exam so she feels more comfortable"
    ],
    "correct": [0, 1, 2, 3],
    "rationale": "Sexual assault care priorities are: treat serious physical injury first, preserve evidence, never leave the patient alone, and offer control and choices at every step. Encouraging a shower before the exam would compromise evidence preservation and contradicts that priority."
  },
  {
    "stem": "A client describes the days before an incident as a time when she monitored her partner's mood constantly, apologized for things that weren't her fault, and tried not to \"set him off.\" This best reflects which phase of the cycle of violence?",
    "options": [
      "Tension-building phase",
      "Acute battering phase",
      "Honeymoon phase",
      "A phase not included in this model"
    ],
    "correct": 0,
    "rationale": "The tension-building phase involves minor incidents -- pushing, verbal abuse, criticism -- where the victim walks on eggshells, tries to keep everything calm, and often accepts the blame, matching this vignette exactly."
  },
  {
    "stem": "A treatment team is discussing risk factors for violence beyond a documented history of violent behavior. Which additional factors should be included? Select all that apply.",
    "options": [
      "Substance intoxication",
      "Impulsivity",
      "Command hallucinations",
      "Manic and mixed states",
      "A structured daily routine"
    ],
    "correct": [0, 1, 2, 3],
    "rationale": "Substance intoxication, impulsivity, command hallucinations, and manic or mixed states are recognized drivers of violence risk alongside history of violence. A structured daily routine is a protective factor, not a risk driver."
  },
  {
    "stem": "A community educator is preparing a handout on the recognized categories of abuse. Which should be included? Select all that apply.",
    "options": [
      "Physical abuse",
      "Sexual abuse",
      "Emotional/psychological abuse",
      "Neglect",
      "Occupational abuse"
    ],
    "correct": [0, 1, 2, 3],
    "rationale": "The five recognized types of abuse are physical, sexual, emotional/psychological, neglect, and economic. \"Occupational abuse\" is not a recognized category."
  },
  {
    "stem": "A client reports feeling unusually relaxed, giddy, and uninhibited shortly after finishing a drink someone else had handed her at a club, with no memory of getting home. Which substance most closely matches this?",
    "options": [
      "GHB",
      "Flunitrazepam (Rohypnol)",
      "Ketamine",
      "Alcohol alone, with no other substance involved"
    ],
    "correct": 0,
    "rationale": "GHB produces relaxation, euphoria, and disinhibition. Flunitrazepam produces sedation, muscle relaxation, and amnesia; ketamine produces a dream-like state and victim compliance -- distinct symptom clusters from GHB's."
  },
  {
    "stem": "A client describes feeling detached, as if she were watching the assault happen to someone else, and later realized she had gone along with the assailant's instructions without resisting, even though her drink had tasted completely normal. Which substance most closely matches this?",
    "options": [
      "Ketamine",
      "GHB",
      "Flunitrazepam (Rohypnol)",
      "MDMA"
    ],
    "correct": 0,
    "rationale": "Ketamine produces a dream-like state and victim compliance, matching this presentation. GHB produces relaxation, euphoria, and disinhibition, flunitrazepam produces sedation and amnesia, and MDMA is not part of this content's date-rape drug coverage."
  },
  {
    "stem": "A nursing student asks why children who grow up witnessing domestic violence are statistically more likely to end up in violent relationships themselves as adults. What is the best explanation?",
    "options": [
      "It is learned behavior -- children who witness or experience violence learn it as a way to cope and resolve conflict, carrying it into their own families",
      "It is primarily a genetic predisposition unrelated to environment",
      "It results from a chemical imbalance passed down biologically",
      "There is no established mechanism connecting generations"
    ],
    "correct": 0,
    "rationale": "Intergenerational transmission of violence is attributed to learned behavior: children who witness or experience violence learn it as a way to cope and resolve conflict, and carry that pattern into their own families -- not a genetic or biochemical explanation."
  },
  {
    "stem": "A nurse educator asks which substance is most commonly involved in sexual assault facilitation overall, even though drugs like GHB and Rohypnol are also implicated. What is the correct answer?",
    "options": [
      "Alcohol",
      "Ketamine",
      "Flunitrazepam",
      "GHB"
    ],
    "correct": 0,
    "rationale": "While GHB, flunitrazepam, and ketamine are all recognized date-rape drugs with distinct effects, alcohol remains the most commonly involved substance overall in sexual assault facilitation."
  },
  {
    "stem": "A sexual assault survivor stiffens and pulls away when the examiner reaches for her gown without explanation. What is the most appropriate nursing action, consistent with offering control and choices at every step?",
    "options": [
      "Explain each step in advance and let her guide the pace of the exam as much as possible",
      "Proceed efficiently to complete the exam and minimize the duration of her distress",
      "Postpone the exam entirely until she volunteers to proceed on her own",
      "Have a support person perform the undressing for her without further discussion"
    ],
    "correct": 0,
    "rationale": "Offering control and choices at every step means explaining steps in advance and letting the survivor guide the pace -- not rushing through for efficiency, not indefinitely postponing necessary care, and not bypassing her own involvement in the process."
  },
  {
    "stem": "A client tells the nurse her partner reviews every receipt, requires her to justify each purchase, and has never let her have her own bank card in ten years of marriage. Which type of abuse does this describe?",
    "options": [
      "Economic abuse",
      "Physical abuse",
      "Neglect",
      "Sexual abuse"
    ],
    "correct": 0,
    "rationale": "Economic abuse is one of the five recognized types of abuse alongside physical, sexual, emotional/psychological, and neglect. Controlling finances and restricting access to money is the defining pattern of economic abuse specifically, not physical harm, neglectful failure to provide for needs, or sexual violation."
  },
  {
    "stem": "A client is striding back and forth in the day room, his voice getting louder, fists clenching and unclenching, and he's begun muttering threats under his breath. Which phase of the aggression cycle is this, and what is the nursing response?",
    "options": [
      "Escalation; de-escalate with a quiet space, calm voice, and offer of PRN medication",
      "Triggering; identify the trigger and address the unmet need",
      "Crisis; ensure safety of everyone first and call for backup",
      "Recovery; maintain a calm, low-stimulation environment"
    ],
    "correct": 0,
    "rationale": "Escalation is pacing, rising voice, clenched fists, and early verbal threats, with de-escalation via a quiet space, calm voice, and offering PRN medication. Triggering is the initial stressor stage, crisis is peak aggression where control is lost, and recovery follows crisis as the patient calms."
  },
  {
    "stem": "A patient on the med-surg floor suddenly shoves a tray table and raises his fists at the nurse. What is the nurse's first action, before anything else?",
    "options": [
      "Verbal de-escalation in a calm, non-threatening tone",
      "Administering the ordered PRN medication",
      "Applying physical restraints per the standing order",
      "Calling for security to remove the patient from the unit"
    ],
    "correct": 0,
    "rationale": "When a patient suddenly becomes aggressive, the first action is verbal de-escalation in a calm, non-threatening tone -- before restraints, before PRN medication, before anything more restrictive."
  },
  {
    "stem": "A nurse walks into a room to check on an agitated client. Which positioning is correct as she approaches to begin de-escalation?",
    "options": [
      "Stand at an angle rather than directly in front of the client, keep a large personal space, and know where the exit is",
      "Stand directly in front of the client to project confidence and control",
      "Move as close as possible to convey calm reassurance",
      "Turn slightly away from the client to reduce the appearance of confrontation"
    ],
    "correct": 0,
    "rationale": "The nurse should keep a large personal space, never crowd or move close, stand at an angle and never directly in front (and never turn a back to the client), know where the exit is, have other staff nearby, and move to a private, low-stimulation area."
  },
  {
    "stem": "A charge nurse is coaching a new hire on how to talk with an escalating client. Which of the new hire's planned responses is non-therapeutic?",
    "options": [
      "\"Why are you acting like this?\"",
      "\"You seem really upset. Can you tell me what's happening for you right now?\"",
      "Using a calm tone and neutral body language",
      "Moving the interaction to a private, low-stimulation area"
    ],
    "correct": 0,
    "rationale": "Non-therapeutic responses include commands (\"stop yelling,\" \"sit down\"), \"why\" questions, threats, dismissiveness, or walking away from an escalating patient. The validate-and-invite phrasing (\"You seem really upset...\") is a correct de-escalation technique, not a non-therapeutic one."
  },
  {
    "stem": "A charge nurse is assigning staff for a shift with four clients. Which client presentation should be flagged as carrying the highest risk for aggression toward others?",
    "options": [
      "A client in a manic or mixed bipolar state with command hallucinations",
      "A client with severe depression and psychomotor retardation",
      "A client in a catatonic state",
      "A client with generalized anxiety disorder who is pacing and worried"
    ],
    "correct": 0,
    "rationale": "The combination of impulsivity plus impaired reality testing -- mania, mixed bipolar states, substance-induced psychosis, and command hallucinations -- carries the highest risk of aggression toward others. Depressed, catatonic, and anxious patients are the least likely to harm others, though suicide risk is its own separate assessment."
  },
  {
    "stem": "A new nurse asks what order interventions should follow when a patient is becoming aggressive. What is the correct least-restrictive-first hierarchy?",
    "options": [
      "Verbal de-escalation -> PRN medication -> seclusion -> physical restraint",
      "PRN medication -> verbal de-escalation -> physical restraint -> seclusion",
      "Physical restraint -> seclusion -> PRN medication -> verbal de-escalation",
      "Seclusion -> physical restraint -> verbal de-escalation -> PRN medication"
    ],
    "correct": 0,
    "rationale": "The hierarchy is always verbal de-escalation, then PRN medication, then seclusion, then physical restraint, with restraint reserved as a last resort for immediate danger to self or others."
  },
  {
    "stem": "A manic patient throws a magazine rack across the day room but strikes no one. A four-point restraint order is already on the chart from an earlier assessment. What should the nurse do first, and does the order require immediate compliance?",
    "options": [
      "Attempt de-escalation and move to a quiet space first; a provider's order does not override the nurse's independent assessment of whether restraint is truly indicated at this moment",
      "Apply the restraints immediately since a provider order has already been written",
      "Substitute IM medication automatically instead of restraints, since medication is always a gentler option",
      "Restrain the patient and skip de-escalation, since throwing furniture already justifies restraint regardless of injury"
    ],
    "correct": 0,
    "rationale": "Throwing furniture without injuring anyone still calls for de-escalation and a quiet space before restraints, even with an order in hand, since a provider's order does not override the nurse's independent assessment of whether restraint is truly indicated. Chemical restraint (forced IM medication) is still a restraint -- not a gentler automatic substitute that skips the least-restrictive analysis."
  },
  {
    "stem": "Emergency restraints were just applied to a patient who attempted to strike staff. Within what timeframe must a provider order and face-to-face assessment be obtained?",
    "options": [
      "Within 1 hour",
      "Within 4 hours",
      "Within 2 hours",
      "Within 24 hours"
    ],
    "correct": 0,
    "rationale": "The provider order must be obtained within 1 hour of emergency application, with a face-to-face provider assessment within that same hour."
  },
  {
    "stem": "A nurse manager is auditing restraint charting for an adult patient. Which set of monitoring numbers meets the required standard?",
    "options": [
      "Monitoring every 15 minutes; release reassessment at least every 2 hours; order renewal every 4 hours",
      "Monitoring every 30 minutes; release reassessment every 1 hour; order renewal every 2 hours",
      "Monitoring every 1 hour; release reassessment every 4 hours; order renewal every 8 hours",
      "Monitoring every 15 minutes; release reassessment every 4 hours; order renewal every 4 hours"
    ],
    "correct": 0,
    "rationale": "Restraint monitoring for adults requires checks every 15 minutes (circulation, skin integrity, hydration/toileting, distress), release reassessment at least every 2 hours -- waiting 4 hours between release checks violates the standard -- and order renewal every 4 hours."
  },
  {
    "stem": "A nurse is completing restraint documentation after an episode. Which elements are legally required? Select all that apply.",
    "options": [
      "The specific behavior that necessitated the restraint",
      "The type of restraint used and its duration",
      "The patient's response and every monitoring check",
      "The patient's written consent to be restrained",
      "The family's opinion about the restraint decision"
    ],
    "correct": [0, 1, 2],
    "rationale": "Legally required documentation includes the specific behavior that necessitated restraint (the clinical justification), the type used, duration, patient response, and every monitoring check. Patient consent and family opinion are not required elements, since consent is not required in a true emergency."
  },
  {
    "stem": "A nursing instructor asks students what emotion typically sits underneath a client's outburst of anger. What is the correct answer, and what nursing approach follows from it?",
    "options": [
      "Anger is a secondary emotion; addressing the underlying feeling (such as feeling discounted, humiliated, or vulnerable) helps the anger de-escalate",
      "Anger is a primary, unmodifiable emotion; the nurse should simply wait it out",
      "Anger is a purely physiological response; the nurse should focus only on vital signs",
      "Anger is a learned behavior that should be met with immediate consequences"
    ],
    "correct": 0,
    "rationale": "Anger is a secondary emotion -- beneath it, patients often feel discounted, embarrassed, guilty, humiliated, hurt, ignored, rejected, threatened, tired, or vulnerable -- and addressing that underlying feeling helps the anger de-escalate."
  },
  {
    "stem": "A client's face tightens and his jaw sets the moment a roommate change is announced, though he hasn't said or done anything yet. Which phase of the aggression cycle is this, and what is the nursing response?",
    "options": [
      "Triggering; identify the trigger, address the unmet need, and approach calmly",
      "Escalation; offer PRN medication immediately",
      "Crisis; call for backup",
      "Recovery; maintain a low-stimulation environment"
    ],
    "correct": 0,
    "rationale": "Triggering is the phase where a stressor activates the anger response, before any behavioral escalation -- the nursing response is to identify the trigger, address the unmet need, and approach calmly, not jump ahead to escalation- or crisis-level interventions."
  },
  {
    "stem": "A client has completely lost control, is throwing punches at two staff members, and nothing verbal is reaching him. What is the nursing priority in this phase?",
    "options": [
      "Safety of everyone first -- call for backup, clear the area, and use seclusion/restraint only if necessary",
      "Attempt verbal de-escalation exclusively before taking any other action",
      "Allow the episode to run its course without any intervention",
      "Administer oral PRN medication only"
    ],
    "correct": 0,
    "rationale": "Crisis is peak aggression where the patient has lost control; the priority is safety of everyone first -- call for backup, clear the area, and use seclusion/restraint only if necessary. This differs from the escalation phase, where verbal de-escalation and PRN medication are the primary tools."
  },
  {
    "stem": "Ten minutes after an outburst, a client has stopped struggling, is sitting quietly, and his breathing is slowing. What is the appropriate nursing approach during this phase?",
    "options": [
      "Maintain a calm, low-stimulation environment and allow the client to re-regulate",
      "Immediately resume the client's full activity schedule to normalize behavior",
      "Debrief the incident in full detail right now while it's fresh",
      "Discontinue all monitoring since the crisis has passed"
    ],
    "correct": 0,
    "rationale": "Recovery calls for a calm, low-stimulation environment while the patient re-regulates -- not a full activity schedule, an immediate detailed debrief (which belongs to the post-crisis phase), or dropping monitoring."
  },
  {
    "stem": "An hour after being physically aggressive, a client sits with his head in his hands, apologizing repeatedly and saying he doesn't know what came over him. What is the appropriate nursing approach?",
    "options": [
      "Process the episode therapeutically and problem-solve triggers; never punish",
      "Withhold discussion of the incident entirely to avoid further shame",
      "Assign a consequence to reinforce accountability",
      "Minimize the incident to help the client move on quickly"
    ],
    "correct": 0,
    "rationale": "Post-crisis involves shame, remorse, and exhaustion; the nursing response is to process the episode therapeutically and problem-solve triggers, and to never punish -- not to avoid the topic entirely, assign consequences, or minimize what happened."
  },
  {
    "stem": "A client refuses his scheduled oral medication and there is no emergency. When, if ever, can the nurse give it without his consent?",
    "options": [
      "Consent is not required in a true emergency; otherwise patients retain the right to refuse medication and treatment unless court-ordered",
      "Consent is always required regardless of emergency status",
      "Consent is never required once a provider order exists",
      "Consent is only required for restraint, not for medication"
    ],
    "correct": 0,
    "rationale": "Consent is not required in a true emergency; otherwise, patients retain the right to refuse medication and treatment unless court-ordered. A provider order alone does not remove the consent requirement outside of a true emergency."
  },
  {
    "stem": "A provider orders forced IM medication for a client who is loudly argumentative but not in immediate danger to himself or staff. How should the nurse classify this order?",
    "options": [
      "As a restraint -- chemical restraint is still a restraint and is not a gentler substitute that skips the least-restrictive analysis",
      "As routine medication administration, since no physical restraint device is used",
      "As a seclusion order, since IM medication functions like seclusion",
      "As an emergency exception that doesn't require the same least-restrictive reasoning"
    ],
    "correct": 0,
    "rationale": "Chemical restraint (forced IM medication) is still a restraint -- it is not a gentler substitute that skips the least-restrictive analysis. Since this patient is not in immediate danger, forcing IM medication does not meet the standard for restraint use."
  },
  {
    "stem": "A preceptor asks a nursing student to identify non-therapeutic responses to an escalating patient from a list of options the student is considering using. Which are non-therapeutic? Select all that apply.",
    "options": [
      "Giving direct commands like \"stop yelling\" or \"sit down\"",
      "Asking \"why\" questions",
      "Making threats",
      "Being dismissive of the patient's concerns",
      "Validating the patient's feelings and inviting them to explain what's happening"
    ],
    "correct": [0, 1, 2, 3],
    "rationale": "Non-therapeutic responses include commands (\"stop yelling,\" \"sit down\"), \"why\" questions, threats, dismissiveness, and walking away. Validating feelings and inviting explanation (\"You seem really upset. Can you tell me what's happening for you right now?\") is a therapeutic response, not a non-therapeutic one."
  },
  {
    "stem": "A client with severe depression lies still in bed, rarely speaking, and is assessed as low risk for aggression toward others, consistent with the fact that depressed, catatonic, and anxious patients are the least likely to harm others. Does this low aggression risk mean the client is not a safety concern?",
    "options": [
      "No -- though least likely to harm others, suicide risk is its own separate assessment that must still be completed",
      "Yes -- low risk for aggression toward others means the client requires no further safety assessment",
      "Yes -- depressed clients are defined as safe from all forms of self-harm as well",
      "No -- depressed clients are actually at the highest risk for aggression toward others"
    ],
    "correct": 0,
    "rationale": "Depressed, catatonic, and anxious patients are the least likely to harm others, but suicide risk is its own separate assessment -- low risk for violence toward others does not mean the client needs no further safety evaluation, and it does not mean the client is at highest risk for aggression toward others (that group is mania, mixed states, substance-induced psychosis, and command hallucinations)."
  }
];
