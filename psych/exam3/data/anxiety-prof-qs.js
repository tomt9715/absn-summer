/* Psych Exam 3 - Professor's Practice Questions - Ch 14 Anxiety and Anxiety Disorders
   Questions reproduced as asked in lecture. Original option order and answer
   positions preserved (correct is NOT always 0 in prof bank files). */
window.QUESTIONS = [
  {
    stem: "A nurse is assessing a patient who is experiencing anxiety. The patient is displaying increased heart rate, rapid breathing, and sweating, but is still able to concentrate and follow directions. Which stage of anxiety is this patient most likely experiencing?",
    options: ["Mild anxiety", "Moderate anxiety", "Severe anxiety", "Panic anxiety"],
    correct: 1,
    rationale: "In moderate anxiety, the perceptual field narrows and the patient may experience increased heart rate, rapid breathing, and sweating, but is still able to concentrate and follow directions. In mild anxiety, symptoms are less intense and can enhance alertness and focus. Severe anxiety involves a significant reduction in the perceptual field and difficulty concentrating. Panic includes a complete inability to focus, severe physical symptoms, and often a sense of impending doom."
  },
  {
    stem: "A patient with generalized anxiety disorder (GAD) is prescribed buspirone (Buspar). Which information should the nurse include in the patient teaching?",
    options: ["\"You can take this medication as needed for acute anxiety attacks.\"", "\"This medication may cause dependency and should be tapered off slowly.\"", "\"It may take several weeks before you notice the full therapeutic effects.\"", "\"Avoid eating aged cheese and smoked meats while taking this medication.\""],
    correct: 2,
    rationale: "Buspirone does not work immediately and may take several weeks to achieve its full therapeutic effects. It is not effective for acute anxiety attacks, does not cause dependency, and does not require tapering. Avoiding aged cheese and smoked meats applies to monoamine oxidase inhibitors (MAOIs), not buspirone. This teaching cluster is a classic test target."
  },
  {
    stem: "A patient with social anxiety disorder is prescribed propranolol. What should the nurse include in the teaching plan about this medication?",
    options: ["\"Take this medication daily in the morning.\"", "\"This medication will help reduce physical symptoms of anxiety.\"", "\"Propranolol can cause weight gain and increased appetite.\"", "\"Avoid exposure to sunlight while taking this medication.\""],
    correct: 1,
    rationale: "Propranolol, a beta blocker, is used to manage the physical symptoms of anxiety such as rapid heart rate and trembling, especially in performance or social anxiety. It is usually taken on an as needed basis before anxiety inducing situations, not daily. Weight gain and increased appetite are not common side effects, and sun avoidance is not necessary with propranolol."
  },
  {
    stem: "Match each clinical situation to the benzodiazepine the class identified for it.",
    pairs: [
      { left: "Severe panic attack", right: "Alprazolam (Xanax)" },
      { left: "Seizure or catatonia", right: "Lorazepam (Ativan)" },
      { left: "Alcohol withdrawal", right: "Diazepam (Valium)" },
      { left: "Sedation during a procedure", right: "Midazolam (Versed)" }
    ],
    rationale: "From lecture: alprazolam (Xanax) for a severe panic attack, lorazepam (Ativan) for seizures and catatonia, diazepam (Valium) or lorazepam (Ativan) for alcohol withdrawal, and midazolam (Versed) for procedural sedation. Note that lorazepam, oxazepam, and temazepam bypass phase one liver metabolism, making them preferred with liver impairment."
  },
  {
    stem: "What should the nurse include in the patient teaching about fluoxetine (Prozac)? Select all that apply.",
    options: ["Establish suicide precautions for severely depressed patients", "Avoid drinking alcohol or using illegal drugs", "Administer the drug in the morning", "Administer the drug in the evening", "It may raise the patient's chance of bleeding, especially if the patient is also taking aspirin or blood thinners", "It may lead to agranulocytosis or neutropenia"],
    correct: [0, 1, 2, 4],
    rationale: "Fluoxetine teaching includes suicide precautions for severely depressed patients (energy returns before mood lifts), avoiding alcohol and illegal drugs, morning administration because fluoxetine is activating and evening dosing would cause poor sleep, and increased bleeding risk with aspirin or anticoagulants. Agranulocytosis and neutropenia are associated with clozapine, not fluoxetine."
  },
  {
    stem: "What should the nurse include in the patient teaching about fluoxetine (Prozac) regarding serious symptoms to report? Select all that apply.",
    options: ["It may cause dizziness or a very bad headache", "It may cause agitation, hallucinations, fever, and a fast heartbeat", "It may lead to myocarditis causing irregular heart rhythms or heart failure", "It may cause flushing, seizures, shakiness, and sweating a lot", "It may lead to change in balance or change in thinking clearly with logic", "It may cause upset stomach and throwing up, or very bad loose stools"],
    correct: [0, 1, 3, 4, 5],
    rationale: "Dizziness with severe headache, agitation with hallucinations, fever, and tachycardia, flushing with seizures, tremor, and diaphoresis, incoordination or altered thinking, and severe gastrointestinal symptoms are all signs of a rare but serious problem called serotonin syndrome, which the patient must be taught to report. Myocarditis causing irregular rhythms or heart failure is a clozapine warning, not a fluoxetine warning."
  },
  {
    stem: "A client says to the nurse, \"I just can't talk in front of the group. I'm trembling and I feel like I'm going to pass out.\" The nurse assesses the client's anxiety to be at which level?",
    options: ["Mild", "Moderate", "Severe", "Panic"],
    correct: 2,
    rationale: "Physiologic responses to severe anxiety include headache, nausea, vomiting, diarrhea, trembling, rigid stance, vertigo, pallor, tachycardia, and chest pain. Vertigo can cause a sensation of passing out. A client who is panicking would not be able to articulate his or her state, which is the giveaway that this is severe rather than panic."
  },
  {
    stem: "A client asks how the client's prescribed alprazolam helps the client's anxiety disorder. The nurse explains that antianxiety medications such as alprazolam affect the function of which neurotransmitter that is believed to be dysfunctional in anxiety disorders?",
    options: ["Serotonin", "Norepinephrine", "Gamma-aminobutyric acid (GABA)", "Dopamine"],
    correct: 2,
    rationale: "Gamma-aminobutyric acid (GABA) is the amino acid neurotransmitter believed to be dysfunctional in anxiety disorders. GABA reduces anxiety and norepinephrine increases it; researchers believe a problem with the regulation of these neurotransmitters occurs in anxiety disorders. Serotonin is usually implicated in psychosis and mood disorders, and dopamine is implicated in psychosis."
  },
  {
    stem: "What common herbal supplement interacts adversely with paroxetine (Paxil)?",
    options: ["Black cohosh", "Coenzyme Q10", "St. John's wort", "Echinacea"],
    correct: 2,
    rationale: "Taking St. John's wort with antidepressants can increase the accumulation of high levels of serotonin in the body, which can cause serotonin syndrome. This is a standard teaching point for any selective serotonin reuptake inhibitor (SSRI)."
  },
  {
    stem: "A nurse on a mental health unit is caring for a client who has generalized anxiety disorder. The client received a telephone call that was upsetting, and now the client is pacing up and down the corridors of the unit. Which of the following actions should the nurse take?",
    options: ["Instruct the client to sit down and stop pacing.", "Allow the client to pace alone until physically tired.", "Have a staff member escort the client to her room.", "Walk with the client at a gradually slower pace."],
    correct: 3,
    rationale: "For the pacing, escalating client the nurse should not command them to stop, isolate them, or send them off alone. Walking with the client at a gradually slower pace uses the nurse's calm presence to bring the anxiety down. Your calm is contagious."
  },
  {
    stem: "A nurse in a hospital is caring for a client who has agoraphobia. Which of the following statements by the client indicates understanding of the goals of treatment?",
    options: ["\"I plan to sit on a park bench for a few minutes each day.\"", "\"I can try participating in group therapy every week.\"", "\"I will join a book club in my neighborhood.\"", "\"I should avoid entering elevators and other closed spaces.\""],
    correct: 0,
    rationale: "Sitting on a park bench for a few minutes each day reflects gradual, systematic exposure to the feared situation of being outdoors, which is the core of agoraphobia treatment. Group therapy and book clubs do not directly target the feared situation in graded steps, and avoiding feared spaces reinforces the phobia rather than treating it."
  },
  {
    stem: "A nurse at a walk-in mental health clinic is assessing a client experiencing severe anxiety. The nurse should recognize the client might exhibit which of the following manifestations?",
    options: ["Attention-seeking conduct", "Mild difficulty problem solving", "Mild fidgeting", "Threatening behavior"],
    correct: 3,
    rationale: "In severe anxiety the perceptual field is greatly reduced, distress is extreme, and behavior can escalate to threatening conduct. Mild fidgeting reflects mild anxiety and mild difficulty problem solving reflects moderate anxiety. Attention seeking conduct is a personality driven behavior, not a defining manifestation of an anxiety level."
  },
  {
    stem: "A nurse on the psychiatric unit is assessing a client who has moderate anxiety disorder. Which of the following findings should the nurse expect?",
    options: ["Rapid speech", "Chills", "Distorted perceptual field", "Urinary frequency"],
    correct: 0,
    rationale: "Moderate anxiety produces a narrowed perceptual field with findings such as rapid speech, voice tremors, shakiness, pacing, and increased heart and respiratory rates. A distorted perceptual field belongs to panic level anxiety. Chills and urinary frequency are not characteristic findings of moderate anxiety."
  },
  {
    stem: "A nurse is caring for a client who is experiencing a crisis related to anxiety. Which of the following actions should the nurse take? Select all that apply.",
    options: ["Avoid eye contact to prevent escalation of anxiety.", "Establish rapport with the client.", "Identify the cause of the anxiety.", "Validate the client's feelings.", "Develop a flexible crisis intervention plan."],
    correct: [1, 2, 3, 4],
    rationale: "Crisis intervention for anxiety includes establishing rapport, identifying the precipitating cause, validating the client's feelings, and developing a flexible plan that can adapt as the situation changes. Avoiding eye contact is non-therapeutic during an anxiety crisis; appropriate eye contact communicates presence and attention."
  },
  {
    stem: "A nurse in the emergency department is caring for a client who reports chest pain, headache, and shortness of breath. He continues to state, \"I don't know why my wife left me.\" The client receives a diagnosis of anxiety. The nurse realizes the client's findings support which level of anxiety?",
    options: ["Mild", "Moderate", "Severe", "Panic"],
    correct: 2,
    rationale: "Severe anxiety produces intense physical symptoms such as chest pain, headache, and shortness of breath along with a greatly narrowed perceptual field, shown here by the client's fixation on a single distressing thought. The client can still articulate his state, which rules out panic, where communication and contact with reality break down."
  },
  {
    stem: "A nurse notices that a client who has moderate anxiety is pacing the hall and mumbling. As the nurse approaches the client, he states, \"I am at the end of my rope. I don't think I can take any more bad news.\" Which of the following responses should the nurse make?",
    options: ["\"Most clients with anxiety issues benefit from lying down.\"", "\"Come with me to an area where we can talk without interruption.\"", "\"Providers usually recommend relaxation exercises for clients who are as upset as you are.\"", "\"An antianxiety pill works best for situations like this.\""],
    correct: 1,
    rationale: "Moving with the client to a quieter area reduces stimulation and opens the door to talking through the anxiety, which is the therapeutic response. Generalizations about other clients, unsolicited advice about relaxation, and reaching for medication first all dismiss the client's immediate emotional need."
  },
  {
    stem: "A nurse on an inpatient mental health unit is admitting a client who has panic-level anxiety. After showing the client to his room, which of the following nursing actions is most therapeutic at this time?",
    options: ["Suggest that the client rest in bed.", "Remain with the client for a while.", "Medicate the client with a sedative.", "Have the client join a therapy group."],
    correct: 1,
    rationale: "During panic level anxiety the priority therapeutic action is to stay with the client, use short simple sentences, and reduce stimulation. Leaving the client alone to rest increases fear, medication is not the first line therapeutic presence, and group participation is impossible at panic level. Teaching and groups come later, when anxiety is mild to moderate."
  },
  {
    stem: "A nurse in a mental health clinic is assessing a client who was brought in by her adult daughter stating that her mother has not been able to leave her home for weeks because she is afraid to be outdoors alone. The nurse should anticipate planning care for managing which of the following phobias?",
    options: ["Xenophobia", "Acrophobia", "Mysophobia", "Agoraphobia"],
    correct: 3,
    rationale: "Agoraphobia is the fear of being outside or in open or public spaces from which escape might be difficult, and it can progress to the client being unable to leave home. Xenophobia is fear of strangers, acrophobia is fear of heights, and mysophobia is fear of germs or dirt."
  },
  {
    stem: "A nurse is caring for a client who requires a crisis intervention for acute anxiety. Which of the following actions is the highest priority?",
    options: ["Protecting the client from injury", "Determining the cause of the client's anxiety", "Ensuring that the client feels safe", "Identifying the client's coping skills"],
    correct: 0,
    rationale: "Physical safety always outranks psychosocial goals. During an acute anxiety crisis the highest priority is protecting the client from injury. Feeling safe, identifying the cause, and assessing coping skills are all part of crisis intervention, but they follow physical protection."
  },
  {
    stem: "A nurse is caring for a client who reports acute, moderate anxiety. Which of the following is the priority nursing action?",
    options: ["Remain with the client.", "Provide a diverting activity.", "Encourage verbalization of feelings.", "Instruct the client to remember past coping mechanisms."],
    correct: 0,
    rationale: "Remaining with the client is the priority because the nurse's calm presence provides safety and prevents escalation. Diversion, verbalization, and recalling coping strategies are all useful interventions, but presence comes first."
  },
  {
    stem: "A nurse is preparing a client who has chronic anxiety for discharge from the psychiatric unit. Which of the following instructions should the nurse include in the client's discharge plan?",
    options: ["Contact the crisis counselor once a week.", "Identify anxiety-producing situations.", "Try to repress feelings of anxiety.", "Eliminate stress and anxiety from daily life."],
    correct: 1,
    rationale: "Identifying anxiety producing situations gives the client awareness and the chance to apply coping strategies before anxiety escalates. Repressing feelings is a maladaptive defense, eliminating all stress from life is impossible, and scheduled weekly crisis counselor contact is not a standard discharge instruction; crisis services are used as needed."
  },
  {
    stem: "A nurse is assessing a client who is experiencing chronic stress. Which of the following findings should the nurse expect?",
    options: ["Hypotension", "Viral infection", "Increased energy", "Increased cognitive awareness"],
    correct: 1,
    rationale: "Chronic, prolonged stress suppresses the immune system through sustained cortisol elevation, leading to frequent infections. Chronic stress also causes elevated heart rate and blood pressure, poor attention span, sleep disturbance, and amenorrhea. It does not cause hypotension, increased energy, or sharper cognition."
  }
];
