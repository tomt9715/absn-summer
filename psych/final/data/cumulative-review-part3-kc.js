/* Psych Final - Cumulative Review Part 3 - curated from Exam 1-3 question banks,
   selecting only the questions that test what Unit 6 of the gameplan asks for.
   Continues from Part 1 (Comm, Defenses, MSE, Schizophrenia) and Part 2
   (Mood/Lithium/Suicide, Substance Use). Part 3 covers the "Rapid Refresher:
   Exam 3 territory" block: Anxiety, OCD, Trauma, Personality, Abuse, Anger.
   Do not rebuild -- append new sections at the bottom, each marked with its
   own comment header.
   Sources so far: exam3/data/anxiety-kc.js + anxiety-dd.js (Section 7).
   Verbatim except minor rationale wording tightened where noted.
   KC convention: correct is always index 0 for single-select; engine shuffles. */
window.QUESTIONS = [
  // ── Section 7: Anxiety & Anxiolytics (source: exam3 Anxiety) ──
  {
    stem: "A client reports 8 months of worry about her finances, her children's safety, her job performance, and her health, on most days, with muscle tension and poor sleep. She identifies no particular event that started it. Which condition do these findings support?",
    options: ["Generalized anxiety disorder", "Adjustment disorder", "Panic disorder", "Social anxiety disorder"],
    correct: 0,
    rationale: "Worry about many things, more days than not, for at least 6 months, with muscle tension and sleep disturbance and no identifiable trigger, is generalized anxiety disorder."
  },
  {
    stem: "Which feature defines panic disorder?",
    options: ["Recurrent unexpected panic attacks with persistent worry about having more", "Excessive worry about many things for at least 6 months", "Fear of embarrassment or being the center of attention", "Irrational fear of a specific object or situation"],
    correct: 0,
    rationale: "Panic disorder involves recurrent, unexpected panic attacks plus persistent worry about having more. The attacks peak within minutes and can mimic a myocardial infarction."
  },
  {
    stem: "A client states, \"I know it sounds ridiculous, but I have not been past my front steps in a year. If something happened out there I would never get back.\" Which condition do these findings support?",
    options: ["Agoraphobia", "Social anxiety disorder", "Specific phobia", "Schizoid personality disorder"],
    correct: 0,
    rationale: "Fear of open or public spaces from which escape might be difficult, progressing to housebound, with intact insight into the unreasonableness of the fear, is agoraphobia."
  },
  {
    stem: "A client declines a promotion because it requires leading weekly meetings. She reports that for days before any presentation she sweats, blushes, and shakes at the mere thought of people watching her. Which condition do these findings support?",
    options: ["Social anxiety disorder", "Agoraphobia", "Panic disorder", "Avoidant personality disorder"],
    correct: 0,
    rationale: "Fear of judgment and being the center of attention with anticipatory sweating, blushing, and shaking at the thought of the event is social anxiety disorder."
  },
  {
    stem: "A nurse is caring for a client experiencing an acute anxiety crisis. Which action is the priority?",
    options: ["Protecting the client from injury", "Establishing rapport with the client", "Identifying the precipitating cause", "Validating the client's feelings"],
    correct: 0,
    rationale: "Physical safety always outranks psychosocial goals. Protecting the client from injury is the priority during an acute anxiety crisis. Rapport, identifying the cause, and validation are all components of crisis intervention, but they follow physical protection."
  },
  {
    stem: "A client at severe anxiety is gripping the arms of her chair and cannot answer the nurse's questions. Which action should the nurse take?",
    options: ["Stay with the client and speak in short simple sentences", "Teach the client a paced breathing technique to use now", "Ask the client to identify what triggered the anxiety", "Move the client to the group room where staff can observe her"],
    correct: 0,
    rationale: "At severe anxiety, stay with the client, use short simple sentences, reduce stimulation, and wait. The perceptual field is too narrowed for learning, so teaching or asking her to analyze the trigger both require cognitive capacity she does not have right now."
  },
  {
    stem: "A client with generalized anxiety disorder is escalating in the hallway after an upsetting phone call and is walking faster with each pass. Which action should the nurse take?",
    options: ["Walk alongside the client, gradually slowing the pace", "Direct the client to stop pacing and sit down with the nurse", "Allow the client to continue pacing alone until she tires", "Have staff escort the client to her room to settle"],
    correct: 0,
    rationale: "For the pacing, escalating client: do not command them to stop, do not isolate them, and do not send them off alone. Walking with the client and gradually slowing the pace uses the nurse's calm presence to bring the anxiety down."
  },
  {
    stem: "At which anxiety levels can teaching be effective?",
    options: ["Mild to moderate", "Moderate to severe", "Severe to panic", "Any level if the nurse speaks slowly"],
    correct: 0,
    rationale: "Teaching happens when anxiety is mild to moderate. At severe and panic levels, the perceptual field is too narrowed for learning; the nurse stays with the patient, uses short simple sentences, reduces stimulation, and waits."
  },
  {
    stem: "A nurse is teaching a client who has a new prescription for propranolol for performance anxiety. Which statement by the client indicates a need for further teaching?",
    options: ["\"I will take it every morning so the level stays steady in my system.\"", "\"I will take it before the presentation rather than on a daily schedule.\"", "\"It should help with the racing heart and the shaking in my hands.\"", "\"It will not do much for the worrying I do in the days beforehand.\""],
    correct: 0,
    rationale: "Propranolol for performance anxiety is taken as needed before the anxiety-provoking event, not daily. It blunts the physical symptoms such as racing heart and trembling and does not address anticipatory worry."
  },
  {
    stem: "A client who has generalized anxiety disorder asks the nurse whether she can take her buspirone when she feels an attack coming on. Which response should the nurse make?",
    options: ["\"Buspirone works only when taken on schedule and takes several weeks to build its effect.\"", "\"Buspirone can be taken at the onset of an attack, but the effect will be gradual.\"", "\"Buspirone can be taken that way, though you will need a taper if you stop it later.\"", "\"Buspirone works that way only if you avoid aged cheese and smoked meats.\""],
    correct: 0,
    rationale: "Buspirone is not useful as needed for acute attacks; it requires scheduled dosing and takes several weeks for full effect. It causes no dependence and needs no taper, and the aged-cheese/smoked-meat dietary restriction belongs to MAOIs, not buspirone."
  },
  {
    stem: "A client taking alprazolam for panic disorder tells the nurse she has been using an over-the-counter sleep aid on nights when she cannot fall asleep. Which action should the nurse take?",
    options: ["Teach the client that the combination can cause respiratory depression", "Advise the client to take the sleep aid at least four hours after the alprazolam", "Instruct the client to reduce the alprazolam dose on nights she uses the sleep aid", "Reassure the client that over-the-counter products do not interact with alprazolam"],
    correct: 0,
    rationale: "Over-the-counter sleep aids contain CNS depressants such as diphenhydramine, and combining any CNS depressant with a benzodiazepine compounds sedation and can cause respiratory depression and overdose."
  },
  {
    stem: "A client who has agoraphobia tells the nurse, \"My daughter says I should just stay in where it is safe and let her do the shopping.\" Which response should the nurse make?",
    options: ["\"Staying in keeps the fear going. Let's talk about small steps outside.\"", "\"Your daughter is protecting you, and having that support matters right now.\"", "\"What is it that you believe would happen if you went to the store yourself?\"", "\"Would you feel able to go to the store if your daughter came along?\""],
    correct: 0,
    rationale: "Avoidance reinforces the phobia, so the nurse names that directly and orients toward graded exposure, which is the treatment. Endorsing the daughter's plan supports the avoidance instead of addressing it."
  },
  {
    stem: "A client lost his job 2 months ago and since then has been tearful, withdrawn, and unable to concentrate, well beyond what his family expected. He has no prior psychiatric history. Which condition do these findings support, and how does it differ from GAD?",
    options: ["Adjustment disorder, since it follows an identifiable stressor and resolves within 6 months, unlike GAD's chronic stressor-independent worry", "Generalized anxiety disorder, since job loss can be considered a form of chronic worry", "Posttraumatic stress disorder, since job loss can be catastrophic for some clients", "Major depressive disorder, unrelated to any anxiety spectrum condition"],
    correct: 0,
    rationale: "Emotional symptoms within 3 months of an identifiable non-catastrophic stressor, out of proportion to the stressor, is adjustment disorder, resolving within 6 months once the stressor ends. GAD worry is chronic and stressor-independent over at least 6 months."
  },
  {
    stem: "A nurse is planning care to promote relaxation for a client who has generalized anxiety disorder. Which intervention should the nurse include?",
    options: ["Practicing progressive muscle relaxation with the client", "Helping the client list her personal strengths and accomplishments", "Reviewing the client's problem-solving approach to her worries", "Encouraging the client to describe the origins of her worry"],
    correct: 0,
    rationale: "Meditation, guided imagery, deep breathing, and progressive muscle relaxation are the relaxation interventions for GAD. Identifying positive qualities targets self-esteem, not relaxation, and reviewing problem-solving or origins is cognitive work rather than relaxation."
  }
];
