/* Psych Final - Cumulative Review Part 3 - curated from Exam 1-3 question banks,
   selecting only the questions that test what Unit 6 of the gameplan asks for.
   Continues from Part 1 (Comm, Defenses, MSE, Schizophrenia) and Part 2
   (Mood/Lithium/Suicide, Substance Use). Part 3 covers the "Rapid Refresher:
   Exam 3 territory" block: Anxiety, OCD, Trauma, Personality, Abuse, Anger.
   Do not rebuild -- append new sections at the bottom, each marked with its
   own comment header.
   Sources so far: exam3/data/anxiety-kc.js + anxiety-dd.js (Section 7),
   exam3/data/ocd-kc.js + ocd-dd.js (Section 8),
   exam3/data/trauma-kc.js + trauma-dd.js (Section 9).
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
  },

  // ── Section 8: OCD (source: exam3 OCD) ──
  {
    stem: "A nurse newly assigned to a client who has obsessive-compulsive disorder finds him in the middle of a lengthy handwashing ritual and notices his anxiety rise as she approaches. Which action should the nurse take?",
    options: ["Allow him to finish the ritual and note what happened just before it began", "Calmly ask him to stop washing and walk with her to a scheduled activity", "Guide him through slow breathing to use in place of the handwashing", "Point out that his hands are already clean so he can end the ritual"],
    correct: 0,
    rationale: "Early in treatment the nurse allows the ritual, because abruptly interrupting a compulsion sends anxiety sharply higher, and observing what precipitated it provides assessment data for the care plan."
  },
  {
    stem: "A client who has obsessive-compulsive disorder has washed his hands so frequently that the skin is cracked and bleeding. Which action should the nurse take?",
    options: ["Provide skin care and work with the client to reduce the frequency gradually", "Remove the soap from the room to stop the washing and protect the skin", "Apply gloves to the client's hands to create a barrier during washing", "Explain that continued washing will lead to a serious skin infection"],
    correct: 0,
    rationale: "The skin damage must be addressed, but the frequency is reduced gradually and collaboratively, never by abruptly blocking the ritual, which spikes anxiety. Warning about infection confronts a client who already knows the behavior is excessive and only adds shame."
  },
  {
    stem: "A client who has obsessive-compulsive disorder tearfully tells the nurse he keeps having intrusive images of stabbing his wife and is terrified he might act on them. Which action should the nurse take first?",
    options: ["Assess the client's intent and any risk of acting on the thoughts", "Reassure him that intrusive thoughts do not mean he will act on them", "Explain that the thoughts are a treatable symptom of his disorder", "Teach him a thought-stopping technique to interrupt the images"],
    correct: 0,
    rationale: "Assessment precedes intervention: the nurse first evaluates intent and risk. Intrusive harm thoughts in OCD are ego-dystonic and rarely acted on, which is why assessment, not alarm, guides the response."
  },
  {
    stem: "A nurse is teaching the family of a client who has obsessive-compulsive disorder. Which statement by a family member indicates a need for further teaching?",
    options: ["\"When he starts checking the locks, I will check them with him so it goes faster.\"", "\"His symptoms will probably get worse during stressful times.\"", "\"This is a real brain-based illness, not him being difficult on purpose.\"", "\"I should not give him a lot of attention each time he performs a ritual.\""],
    correct: 0,
    rationale: "Participating in the ritual reinforces the cycle just as surely as praising it or providing attention does. The family should not reinforce rituals, and should understand that OCD is involuntary, brain-based, and worsens with stress."
  },
  {
    stem: "A client who has obsessive-compulsive disorder is starting fluoxetine. Which statement by the client indicates a need for further teaching?",
    options: ["\"Once my symptoms get better, I can stop taking the medication.\"", "\"It may be several weeks before I notice a real difference.\"", "\"I will take it every day rather than only when the thoughts hit.\"", "\"I will check with my provider before I stop taking it.\""],
    correct: 0,
    rationale: "Stopping the SSRI once symptoms improve is the misconception that needs correction; continuous, regular use is required and the drug is not stopped abruptly."
  },
  {
    stem: "A newly licensed nurse watches a client arrange and rearrange the dayroom chairs into precise rows and asks why he does it. Which explanation by the nurse is accurate?",
    options: ["The behavior temporarily relieves the anxiety generated by his obsession", "The behavior is his way of exerting control over the other clients", "The behavior is a bid for the staff's attention and reassurance", "The behavior gives him something to do during unstructured time"],
    correct: 0,
    rationale: "Compulsions temporarily relieve the anxiety produced by the obsession, and that relief reinforces the cycle. Anchoring every OCD behavior to anxiety reduction is the key."
  },
  {
    stem: "Several days into treatment, a client who has obsessive-compulsive disorder is ready to begin reducing a 45-minute checking ritual. Which approach should the nurse take?",
    options: ["Collaboratively set gradually decreasing time limits on the ritual", "Establish a firm cutoff that ends the ritual at a set time today", "Leave the timing entirely to the client without adding structure", "Eliminate the ritual now that the client has agreed to work on it"],
    correct: 0,
    rationale: "Rituals are reduced gradually and collaboratively as treatment progresses. An abrupt cutoff or immediate elimination spikes anxiety, and providing no structure abandons the client to a task he cannot yet manage alone."
  },
  {
    stem: "A nurse is planning care for a client newly admitted with obsessive-compulsive disorder. Which actions should the nurse include? Select all that apply.",
    options: ["Allow time in the daily schedule for the client's rituals", "Identify the situations that precipitate the client's anxiety", "Reduce the rituals gradually as treatment progresses", "Abruptly prevent the client from performing the rituals", "Encourage the client to avoid anxiety-producing situations"],
    correct: [0, 1, 2],
    rationale: "Appropriate early actions include allowing time for rituals, identifying precipitating factors, and reducing rituals gradually. Abruptly blocking a compulsion sends anxiety sharply higher, and encouraging avoidance reinforces the disorder rather than treating it."
  },
  {
    stem: "A charge nurse overhears a newly licensed nurse describing care she gave to a client who has obsessive-compulsive disorder. Which statement indicates a need for further teaching?",
    options: ["\"I told him the ritual makes no sense and that he should just stop doing it.\"", "\"I let him finish his ritual and then we talked about what set it off.\"", "\"I kept our interactions calm because stress makes his symptoms worse.\"", "\"I avoided giving him extra attention while he completed the ritual.\""],
    correct: 0,
    rationale: "Confronting the client about the senseless nature of the ritual adds shame to someone who already knows the behavior is excessive, since OCD is ego-dystonic."
  },
  {
    stem: "A family member of a client who has obsessive-compulsive disorder asks how to help at home. Which statement by the nurse is accurate?",
    options: ["\"His symptoms are involuntary and tend to intensify when he is under stress.\"", "\"He can stop the rituals whenever he decides they have gone too far.\"", "\"Keeping him busy with tasks will prevent the obsessions from occurring.\"", "\"The rituals will fade as long as everyone ignores them completely.\""],
    correct: 0,
    rationale: "OCD symptoms are involuntary and worsen with stress, which is the anchor for family teaching. The client cannot simply choose to stop, and keeping busy does not prevent obsessions."
  },
  {
    stem: "A client asks what the therapy paired with his medication for obsessive-compulsive disorder will involve. Which description by the nurse is accurate?",
    options: ["Gradually facing feared situations while not performing the usual ritual", "Replaying the traumatic memory until it loses its emotional charge", "Challenging all-or-nothing thinking about relationships with others", "Building distress tolerance and emotion regulation skills in a group"],
    correct: 0,
    rationale: "Exposure and response prevention, the cognitive behavioral therapy paired with SSRIs for OCD, has the client gradually face feared situations while refraining from the ritual."
  },
  {
    stem: "A client who has obsessive-compulsive disorder repeatedly asks the nurse to confirm that his hands are clean enough. Which response by the nurse is most therapeutic?",
    options: ["Acknowledge his anxiety and gently limit repeated reassurance rather than confirming each time", "Reassure him each time he asks so that his anxiety does not escalate further", "Tell him firmly to stop asking because his hands are obviously clean", "Ignore the questions so that the reassurance-seeking behavior is not reinforced"],
    correct: 0,
    rationale: "Repeatedly providing reassurance functions like a compulsion and reinforces the cycle, so the nurse acknowledges the anxiety while gently limiting the reassurance."
  },
  {
    stem: "Which medication class is first-line for obsessive-compulsive disorder?",
    options: ["Selective serotonin reuptake inhibitors", "Benzodiazepines", "Beta blockers", "Mood stabilizers"],
    correct: 0,
    rationale: "SSRIs are first-line for OCD, as they are for generalized anxiety disorder, panic disorder, social anxiety, and posttraumatic stress disorder. Full effect takes several weeks."
  },

  // ── Section 9: Trauma & PTSD (source: exam3 Trauma) ──
  {
    stem: "How many symptom clusters define posttraumatic stress disorder, and what are they?",
    options: ["Four: intrusion, avoidance, negative alterations in cognition and mood, and arousal and reactivity", "Three: intrusion, avoidance, and depression", "Five: intrusion, avoidance, mania, arousal, and dissociation", "Two: re-experiencing and hypervigilance"],
    correct: 0,
    rationale: "PTSD is defined by four symptom clusters: intrusion, avoidance, negative alterations in cognition and mood, and arousal and reactivity. Being able to file every symptom into its cluster is a core skill the exam tests."
  },
  {
    stem: "A client with posttraumatic stress disorder has recurring nightmares of the event. Which symptom cluster does this represent?",
    options: ["Intrusion", "Avoidance", "Negative cognition and mood", "Arousal and reactivity"],
    correct: 0,
    rationale: "Recurring nightmares of the event are an intrusion symptom, along with flashbacks, intrusive memories, and dissociative re-experiencing."
  },
  {
    stem: "A client with posttraumatic stress disorder refuses to drive past the intersection where the crash occurred. Which symptom cluster does this represent?",
    options: ["Avoidance", "Intrusion", "Arousal and reactivity", "Negative cognition and mood"],
    correct: 0,
    rationale: "Refusing to drive past the crash site is an avoidance symptom, the cluster defined by steering clear of reminders, places, and conversations connected to the trauma."
  },
  {
    stem: "A client with posttraumatic stress disorder states, \"I am permanently broken and it was all my fault.\" Which symptom cluster does this represent?",
    options: ["Negative alterations in cognition and mood", "Intrusion", "Avoidance", "Arousal and reactivity"],
    correct: 0,
    rationale: "A negative self-image and distorted, self-directed blame fall in the negative alterations in cognition and mood cluster."
  },
  {
    stem: "A client with posttraumatic stress disorder checks every room upon entering it. Which symptom cluster does this represent?",
    options: ["Arousal and reactivity", "Avoidance", "Intrusion", "Negative cognition and mood"],
    correct: 0,
    rationale: "Checking every room on entering is hypervigilance, part of the arousal and reactivity cluster along with exaggerated startle, irritability, poor concentration, and insomnia."
  },
  {
    stem: "Which medication is used specifically for the trauma nightmares of posttraumatic stress disorder?",
    options: ["Prazosin", "Buspirone", "Lithium", "Haloperidol"],
    correct: 0,
    rationale: "Prazosin is sometimes used specifically to reduce trauma nightmares in PTSD. Buspirone is an anxiolytic for generalized anxiety, lithium is a mood stabilizer, and haloperidol is an antipsychotic."
  },
  {
    stem: "A veteran who has posttraumatic stress disorder is startled when a meal tray crashes to the floor, drops into a crouch, and rapidly scans the dayroom. Which action should the nurse take?",
    options: ["Approach calmly, speak in a low steady voice, and help orient him to the present surroundings", "Place a reassuring hand on his shoulder and tell him there is nothing to be afraid of", "Step back and leave him alone in the dayroom until he recovers on his own", "Ask him to describe what the noise reminded him of while the reaction is happening"],
    correct: 0,
    rationale: "A hyperarousal or flashback reaction is managed by approaching calmly, using a low steady voice, and grounding the client in the present. Unexpected touch can escalate a startled, hypervigilant client, and telling him there is nothing to fear dismisses the reaction."
  },
  {
    stem: "A client who has posttraumatic stress disorder refuses to attend a group that meets in a room resembling where her assault occurred. Which response should the nurse make?",
    options: ["Acknowledge her distress and reintroduce the setting gradually rather than requiring immediate attendance", "Require her to attend the group so she learns the room is safe", "Excuse her from all group therapy for the remainder of the admission", "Tell her that avoiding the room will keep her from ever recovering"],
    correct: 0,
    rationale: "Avoidance is a core PTSD symptom, and it is addressed through gradual, client-paced exposure with support, not by forcing immediate attendance, which can retraumatize."
  },
  {
    stem: "A client with posttraumatic stress disorder tells the nurse he has not slept more than two hours a night for weeks because of nightmares and lies awake scanning for danger. Which response by the nurse is most therapeutic?",
    options: ["Acknowledge the exhaustion and explore sleep-supporting strategies, noting prazosin may be ordered for nightmares", "Reassure him that the nightmares will stop on their own within a few days", "Advise him to avoid sleeping until he feels genuinely tired at night", "Tell him that dwelling on the dreams is what keeps him from sleeping"],
    correct: 0,
    rationale: "Validating the exhaustion and exploring sleep strategies, including the possibility that prazosin may be ordered for trauma nightmares, addresses a real hyperarousal symptom therapeutically rather than offering false reassurance or dismissing the fear."
  },
  {
    stem: "Which nursing interventions are appropriate for a client who has posttraumatic stress disorder? Select all that apply.",
    options: ["Provide a safe, low-stimulation environment", "Let the client control the pace of discussing the trauma", "Teach grounding techniques for flashbacks", "Require the client to describe the trauma in detail to desensitize her", "Encourage the client to avoid all reminders of the event"],
    correct: [0, 1, 2],
    rationale: "Appropriate PTSD care includes a safe, low-stimulation environment, letting the client control the pace of trauma discussion, and teaching grounding techniques. Forcing detailed recounting can retraumatize, and encouraging avoidance of all reminders reinforces a core symptom rather than treating it."
  },
  {
    stem: "A client who has posttraumatic stress disorder suddenly appears to be reliving the traumatic event, staring past the nurse and unresponsive to normal conversation. Which action should the nurse take first?",
    options: ["Speak calmly, state the client's name and location, and help ground her in the present", "Administer the ordered PRN benzodiazepine before attempting to communicate", "Gently hold the client's arms to keep her from moving during the episode", "Leave the room quietly and allow the flashback to run its course"],
    correct: 0,
    rationale: "During a flashback the priority is grounding: a calm voice, the client's name, and orientation to time and place reconnect her to the present and ensure safety. Reaching for medication first skips the least invasive effective step."
  },
  {
    stem: "A nurse is caring for four clients on a trauma unit. Which client should the nurse assess first?",
    options: ["The client with PTSD who states she sees no point in going on and has stopped answering questions", "The client with PTSD requesting a room change to avoid a triggering view", "The client with acute stress disorder asking how long the symptoms will last", "The client with an adjustment disorder tearful about a recent job loss"],
    correct: 0,
    rationale: "Hopeless statements with withdrawal raise concern for suicide risk, a safety priority requiring immediate assessment, ahead of the room-change request, the prognosis question, and situational tearfulness."
  },
  {
    stem: "Which statement by a combat veteran is LEAST consistent with posttraumatic stress disorder?",
    options: ["\"I single-handedly took out an enemy squad and saved my entire unit that day.\"", "\"In my dreams the wounded keep reaching out and trying to grab me.\"", "\"I scan every room I walk into because I can't stop watching for danger.\"", "\"I can't drive past the base entrance without turning the other way.\""],
    correct: 0,
    rationale: "Grandiose boasting is not a PTSD symptom. Recurrent distressing dreams are intrusion, scanning every room is hypervigilance in the arousal cluster, and avoiding a reminder is avoidance."
  }
];
