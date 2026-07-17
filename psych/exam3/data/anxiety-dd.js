/* Psych Exam 3 - Deep Drill - Ch 14 Anxiety and Anxiety Disorders
   DD convention: correct is always index 0 for single-select; engine shuffles.
   Difficulty mix: 90 percent hard, 10 percent medium, no easy.
   Answer choices are plain clinical actions or bare terms, parallel in form
   and length, with plausible distractors and no tells. */
window.QUESTIONS = [
  {
    stem: "A client in the emergency department is hyperventilating, has a pounding heart, and states repeatedly, \"Something terrible is about to happen.\" She cannot follow the nurse's instruction to breathe with her but responds to her own name and knows where she is. Which level of anxiety do these findings indicate?",
    options: ["Severe", "Panic", "Moderate", "Mild"],
    correct: 0,
    rationale: "Hyperventilation, pounding heart, a sense of impending doom, and inability to follow directions place this at severe anxiety. She remains oriented and responsive to her name, so contact with reality is intact, which is the line that separates severe from panic."
  },
  {
    stem: "A client is brought to the emergency department with chest pain, trembling, and numbness in his hands. He does not respond to his name, stares past the nurse, and states there are shapes moving along the wall. Which level of anxiety do these findings indicate?",
    options: ["Panic", "Severe", "Moderate", "Mild"],
    correct: 0,
    rationale: "Perceptual disturbances, unresponsiveness to his name, and detachment from the environment indicate panic level anxiety. Severe anxiety produces the same intense physical symptoms and doom, but the client stays in contact with reality and can still register the nurse."
  },
  {
    stem: "A student describes feeling keyed up before an examination, notices she is reviewing material faster than usual, and reports she is catching errors she missed earlier. Which level of anxiety do these findings indicate?",
    options: ["Mild", "Moderate", "Severe", "Panic"],
    correct: 0,
    rationale: "Sharpened perception with improved learning and problem solving is mild anxiety, the useful kind. Every level above mild narrows the perceptual field and degrades performance rather than improving it."
  },
  {
    stem: "A client is pacing the corridor, tapping her fingers, and asks the nurse to repeat instructions twice before following them. Her heart rate is 104 per minute. Which level of anxiety do these findings indicate?",
    options: ["Moderate", "Mild", "Severe", "Panic"],
    correct: 0,
    rationale: "Pacing, difficulty concentrating, and an elevated heart rate with the ability to follow direction when given support is moderate anxiety. A client at severe anxiety could not follow the instructions at all, even repeated."
  },
  {
    stem: "A 34-year-old with no cardiac history arrives at the emergency department reporting crushing chest pain, palpitations, sweating, and a conviction that he is dying. Symptoms peaked within minutes. Which action should the nurse take first?",
    options: ["Obtain an electrocardiogram and cardiac markers", "Stay with the client and use short simple sentences", "Reduce the environmental stimulation around the client", "Administer the prescribed as-needed benzodiazepine"],
    correct: 0,
    rationale: "The presentation points to a panic attack, but panic mimics myocardial infarction and the cardiac cause must be ruled out medically before the anxiety diagnosis is accepted. Physiological safety outranks the psychosocial interventions, all of which are appropriate once a cardiac event is excluded."
  },
  {
    stem: "A client who has generalized anxiety disorder asks the nurse whether she can take her buspirone when she feels an attack coming on. Which response should the nurse make?",
    options: ["\"Buspirone works only when taken on schedule and takes several weeks to build its effect.\"", "\"Buspirone can be taken at the onset of an attack, but the effect will be gradual.\"", "\"Buspirone can be taken that way, though you will need a taper if you stop it later.\"", "\"Buspirone works that way only if you avoid aged cheese and smoked meats.\""],
    correct: 0,
    rationale: "Buspirone is not useful as needed for acute attacks; it requires scheduled dosing and takes several weeks for full effect. It causes no dependence and needs no taper, and dietary restrictions on aged cheese and smoked meats belong to monoamine oxidase inhibitors, not buspirone."
  },
  {
    stem: "A client taking alprazolam for panic disorder tells the nurse she has been using an over-the-counter sleep aid on nights when she cannot fall asleep. Which action should the nurse take?",
    options: ["Teach the client that the combination can cause respiratory depression", "Advise the client to take the sleep aid at least four hours after the alprazolam", "Instruct the client to reduce the alprazolam dose on nights she uses the sleep aid", "Reassure the client that over-the-counter products do not interact with alprazolam"],
    correct: 0,
    rationale: "Over-the-counter sleep aids contain central nervous system depressants such as diphenhydramine, and combining any CNS depressant with a benzodiazepine compounds sedation and can cause respiratory depression and overdose. Spacing the doses or adjusting the benzodiazepine independently does not eliminate the risk, and the nurse never adjusts a prescribed dose on her own."
  },
  {
    stem: "A client taking paroxetine for panic disorder tells the nurse she stopped the medication four days ago because she felt better. She now reports flu-like aching, nausea, insomnia, and electric shock sensations in her arms. Which explanation accounts for these findings?",
    options: ["Discontinuation syndrome from abruptly stopping a short half-life agent", "Serotonin syndrome from residual drug accumulation", "Return of the underlying panic disorder symptoms", "Anticholinergic rebound from receptor upregulation"],
    correct: 0,
    rationale: "Flu-like symptoms, insomnia, nausea, imbalance, sensory disturbances, and hyperarousal are the FINISH picture of SSRI discontinuation syndrome, which is worst with short half-life agents like paroxetine. Serotonin syndrome adds fever, agitation, and tachycardia and comes from too much serotonin rather than withdrawal. The symptom pattern is too specific to be a simple relapse."
  },
  {
    stem: "A client taking sertraline began taking St. John's wort two weeks ago. She now presents with agitation, a temperature of 38.9 C (102 F), heart rate 122 per minute, tremor, and an unsteady gait. Which condition do these findings indicate?",
    options: ["Serotonin syndrome", "Discontinuation syndrome", "Neuroleptic malignant syndrome", "Anticholinergic toxicity"],
    correct: 0,
    rationale: "Agitation, fever, tachycardia, tremor, and incoordination after adding a serotonergic agent to an SSRI is serotonin syndrome. St. John's wort increases serotonin accumulation. Discontinuation syndrome follows stopping a drug rather than adding one, and neuroleptic malignant syndrome follows antipsychotics with rigidity as its hallmark."
  },
  {
    stem: "A nurse is teaching a client who has a new prescription for fluoxetine. Which statement by the client indicates a need for further teaching?",
    options: ["\"I will take it at bedtime so the side effects happen while I am asleep.\"", "\"I will check with my provider before taking anything with aspirin in it.\"", "\"I will keep taking it even if the nausea and headache show up early on.\"", "\"I will call the office rather than stopping it on my own if I want to quit.\""],
    correct: 0,
    rationale: "Fluoxetine is activating and is given in the morning; bedtime dosing causes insomnia. The other statements are correct: aspirin and anticoagulants raise bleeding risk with fluoxetine, early nausea and headache are transient and adherence should continue, and SSRIs are never stopped abruptly."
  },
  {
    stem: "A nurse is teaching a client who has a new prescription for propranolol for performance anxiety. Which statement by the client indicates a need for further teaching?",
    options: ["\"I will take it every morning so the level stays steady in my system.\"", "\"I will take it before the presentation rather than on a daily schedule.\"", "\"It should help with the racing heart and the shaking in my hands.\"", "\"It will not do much for the worrying I do in the days beforehand.\""],
    correct: 0,
    rationale: "Propranolol for performance anxiety is taken as needed before the anxiety-provoking event, not daily. It blunts the physical symptoms such as racing heart and trembling and does not address anticipatory worry, so the other three statements are accurate."
  },
  {
    stem: "An 82-year-old client received lorazepam for agitation two hours ago and is now more restless, shouting, and attempting to climb out of bed. Which explanation accounts for these findings?",
    options: ["Paradoxical agitation from the benzodiazepine", "Withdrawal from the benzodiazepine", "Serotonin syndrome from the benzodiazepine", "Insufficient dosing requiring a second administration"],
    correct: 0,
    rationale: "Paradoxical agitation and disinhibition from benzodiazepines occur in the elderly, the very young, and clients with brain injury. Withdrawal does not occur two hours after a dose, benzodiazepines are not serotonergic, and giving a second dose would worsen a paradoxical reaction rather than resolve it."
  },
  {
    stem: "A client with cirrhosis requires a benzodiazepine for alcohol withdrawal. Which agent should the nurse anticipate the provider prescribing?",
    options: ["Lorazepam", "Diazepam", "Alprazolam", "Chlordiazepoxide"],
    correct: 0,
    rationale: "Lorazepam, oxazepam, and temazepam bypass phase-I liver metabolism and are preferred with liver impairment. Diazepam and chlordiazepoxide are standard alcohol withdrawal agents in patients with intact liver function but accumulate in cirrhosis, and alprazolam is not the alcohol withdrawal agent."
  },
  {
    stem: "A client reports 8 months of worry about her finances, her children's safety, her job performance, and her health, on most days, with muscle tension and poor sleep. She identifies no particular event that started it. Which condition do these findings support?",
    options: ["Generalized anxiety disorder", "Adjustment disorder", "Panic disorder", "Social anxiety disorder"],
    correct: 0,
    rationale: "Worry about many things, more days than not, for at least 6 months, with muscle tension and sleep disturbance and no identifiable trigger, is generalized anxiety disorder. Adjustment disorder requires an identifiable stressor and appears within 3 months of it. Panic disorder requires discrete unexpected attacks, and social anxiety centers on judgment by others."
  },
  {
    stem: "A client lost his job 2 months ago and since then has been tearful, withdrawn, and unable to concentrate, well beyond what his family expected. He has no prior psychiatric history. Which condition do these findings support?",
    options: ["Adjustment disorder", "Generalized anxiety disorder", "Posttraumatic stress disorder", "Major depressive disorder"],
    correct: 0,
    rationale: "Emotional symptoms within 3 months of an identifiable non-catastrophic stressor, out of proportion to the stressor, is adjustment disorder; it resolves within 6 months once the stressor ends. GAD worry is chronic and stressor-independent over at least 6 months, and PTSD requires a catastrophic traumatic event rather than a job loss."
  },
  {
    stem: "A client states, \"I know it sounds ridiculous, but I have not been past my front steps in a year. If something happened out there I would never get back.\" Which condition do these findings support?",
    options: ["Agoraphobia", "Social anxiety disorder", "Specific phobia", "Schizoid personality disorder"],
    correct: 0,
    rationale: "Fear of open or public spaces from which escape might be difficult, progressing to housebound, with intact insight into the unreasonableness of the fear, is agoraphobia. Social anxiety centers on judgment and embarrassment rather than escape, specific phobia targets a discrete object or situation, and the schizoid client stays home by preference without fear."
  },
  {
    stem: "A client declines a promotion because it requires leading weekly meetings. She reports that for days before any presentation she sweats, blushes, and shakes at the mere thought of people watching her. Which condition do these findings support?",
    options: ["Social anxiety disorder", "Agoraphobia", "Panic disorder", "Avoidant personality disorder"],
    correct: 0,
    rationale: "Fear of judgment and being the center of attention with anticipatory sweating, blushing, and shaking at the thought of the event is social anxiety disorder. Agoraphobia centers on escape from public spaces rather than scrutiny, panic disorder requires unexpected attacks rather than predictable situational fear, and avoidant personality disorder is a pervasive lifelong pattern of felt inferiority across all relationships."
  },
  {
    stem: "A client at severe anxiety is gripping the arms of her chair and cannot answer the nurse's questions. Which action should the nurse take?",
    options: ["Stay with the client and speak in short simple sentences", "Teach the client a paced breathing technique to use now", "Ask the client to identify what triggered the anxiety", "Move the client to the group room where staff can observe her"],
    correct: 0,
    rationale: "At severe anxiety, stay with the client, use short simple sentences, reduce stimulation, and wait. The perceptual field is too narrowed for learning, so teaching breathing techniques and asking her to analyze the trigger both require cognitive capacity she does not have right now. Moving her to a busier room increases stimulation."
  },
  {
    stem: "A client with generalized anxiety disorder is escalating in the hallway after an upsetting phone call and is walking faster with each pass. Which action should the nurse take?",
    options: ["Walk alongside the client, gradually slowing the pace", "Direct the client to stop pacing and sit down with the nurse", "Allow the client to continue pacing alone until she tires", "Have staff escort the client to her room to settle"],
    correct: 0,
    rationale: "For the pacing, escalating client: do not command them to stop, do not isolate them, and do not send them off alone. Walking with the client and gradually slowing the pace uses the nurse's calm presence to bring the anxiety down. Your calm is contagious."
  },
  {
    stem: "A nurse is planning care to promote relaxation for a client who has generalized anxiety disorder. Which intervention should the nurse include?",
    options: ["Practicing progressive muscle relaxation with the client", "Helping the client list her personal strengths and accomplishments", "Reviewing the client's problem-solving approach to her worries", "Encouraging the client to describe the origins of her worry"],
    correct: 0,
    rationale: "Meditation, guided imagery, deep breathing, and progressive muscle relaxation are the relaxation interventions for GAD. Identifying positive qualities and accomplishments targets self-esteem, not relaxation, and problem-solving review and exploring origins are cognitive work rather than relaxation. Read what the question is actually asking for."
  },
  {
    stem: "A nurse is caring for a client admitted at panic level anxiety who is now able to sit quietly and answer simple questions. Which action should the nurse take next?",
    options: ["Begin teaching the client to recognize her early anxiety cues", "Continue to remain with the client without conversation", "Refer the client to the afternoon psychoeducation group", "Administer an additional as-needed antianxiety medication"],
    correct: 0,
    rationale: "Teaching happens when anxiety has come down to mild or moderate, and answering simple questions signals the client is now at that level. Continuing silent presence misses the teachable window, group participation is a larger step than a first individual teaching contact, and additional medication is not indicated for a client who is settling."
  },
  {
    stem: "A client reports frequent colds over the past year, absent menstrual periods, difficulty concentrating at work, and poor sleep since taking on caregiving for her mother. Her blood pressure is 148/92 mm Hg. Which explanation accounts for these findings?",
    options: ["Chronic stress with sustained cortisol elevation", "Acute stress response with sympathetic activation", "Adjustment disorder with anxious mood", "Generalized anxiety disorder with somatic features"],
    correct: 0,
    rationale: "Immune suppression with frequent infections, amenorrhea, poor attention span, sleep disturbance, and elevated blood pressure make up the chronic stress picture driven by sustained cortisol. An acute stress response is short-lived, and the question asks for the physiologic explanation of this symptom cluster rather than a psychiatric diagnosis."
  },
  {
    stem: "A nurse is caring for a client experiencing an acute anxiety crisis. Which action is the priority?",
    options: ["Protecting the client from injury", "Establishing rapport with the client", "Identifying the precipitating cause", "Validating the client's feelings"],
    correct: 0,
    rationale: "Physical safety always outranks psychosocial goals. Protecting the client from injury is the priority during an acute anxiety crisis. Rapport, identifying the cause, and validation are all components of crisis intervention, but they follow physical protection."
  },
  {
    stem: "A client who has agoraphobia tells the nurse, \"My daughter says I should just stay in where it is safe and let her do the shopping.\" Which response should the nurse make?",
    options: ["\"Staying in keeps the fear going. Let's talk about small steps outside.\"", "\"Your daughter is protecting you, and having that support matters right now.\"", "\"What is it that you believe would happen if you went to the store yourself?\"", "\"Would you feel able to go to the store if your daughter came along?\""],
    correct: 0,
    rationale: "Avoidance reinforces the phobia, so the nurse names that directly and orients toward graded exposure, which is the treatment. Endorsing the daughter's plan supports the avoidance, exploring the feared outcome is assessment when the accommodation in front of the nurse needs addressing, and going only when accompanied is the pattern of agoraphobia rather than a step out of it."
  }
];
