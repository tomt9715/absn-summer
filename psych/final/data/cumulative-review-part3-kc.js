/* Psych Final - Cumulative Review Part 3 - curated from Exam 1-3 question banks,
   selecting only the questions that test what Unit 6 of the gameplan asks for.
   Continues from Part 1 (Comm, Defenses, MSE, Schizophrenia) and Part 2
   (Mood/Lithium/Suicide, Substance Use). Part 3 covers the "Rapid Refresher:
   Exam 3 territory" block: Anxiety, OCD, Trauma, Personality, Abuse, Anger.
   Do not rebuild -- append new sections at the bottom, each marked with its
   own comment header.
   Sources so far: exam3/data/anxiety-kc.js + anxiety-dd.js (Section 7),
   exam3/data/ocd-kc.js + ocd-dd.js (Section 8),
   exam3/data/trauma-kc.js + trauma-dd.js (Section 9),
   exam3/data/pd-kc.js + pd-dd.js (Section 10),
   exam3/data/abuse-kc.js + abuse-dd.js (Section 11).
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
  },

  // ── Section 10: Personality Disorders (source: exam3 Personality) ──
  {
    stem: "Which personality disorders belong to Cluster A? Select all that apply.",
    options: ["Paranoid", "Schizoid", "Schizotypal", "Borderline", "Avoidant"],
    correct: [0, 1, 2],
    rationale: "Cluster A, the odd and eccentric cluster related to schizophrenia, contains paranoid, schizoid, and schizotypal personality disorders. Borderline belongs to Cluster B and avoidant belongs to Cluster C."
  },
  {
    stem: "Which personality disorders belong to Cluster B? Select all that apply.",
    options: ["Antisocial", "Borderline", "Histrionic", "Narcissistic", "Dependent", "Paranoid"],
    correct: [0, 1, 2, 3],
    rationale: "Cluster B, the dramatic, emotional, and erratic cluster, contains antisocial, borderline, histrionic, and narcissistic personality disorders. Dependent belongs to Cluster C and paranoid belongs to Cluster A."
  },
  {
    stem: "Which personality disorders belong to Cluster C? Select all that apply.",
    options: ["Avoidant", "Dependent", "Obsessive compulsive personality disorder (OCPD)", "Schizotypal", "Histrionic"],
    correct: [0, 1, 2],
    rationale: "Cluster C, the anxious and insecure cluster, contains avoidant, dependent, and obsessive compulsive personality disorders. Schizotypal belongs to Cluster A and histrionic belongs to Cluster B."
  },
  {
    stem: "A client who has borderline personality disorder tells the day nurse, \"The evening nurse is the only one here who understands me. You are the meanest nurse on this unit.\" Which action should the nurse take?",
    options: ["Discuss the client's statement with the team and confirm that all staff are enforcing the same limits", "Ask the evening nurse to review her interactions with the client for boundary concerns", "Assign the evening nurse as the client's consistent primary nurse", "Meet with the client to repair the relationship before the next scheduled interaction"],
    correct: 0,
    rationale: "The statement is splitting, the signature defense of borderline personality disorder. The intervention that neutralizes splitting is team consistency: every staff member communicating and enforcing identical limits."
  },
  {
    stem: "A nurse finds a client who has borderline personality disorder in her room with several fresh superficial cuts on her forearm shortly after learning her therapist is going on leave. Which action should the nurse take first?",
    options: ["Assess the injuries and the client's current risk for further self-harm", "Encourage the client to describe her feelings about the therapist's leave", "Review the coping skills the client has learned in dialectical behavior therapy", "Ask the client to agree to a no-self-harm contract for the rest of the shift"],
    correct: 0,
    rationale: "Safety assessment comes first. The nurse must evaluate the injuries and determine current risk for further self-harm before any psychosocial intervention. The trigger, a perceived abandonment, is classic for borderline personality disorder."
  },
  {
    stem: "A nurse is teaching a newly licensed nurse about caring for a client who has borderline personality disorder. Which statement by the newly licensed nurse indicates a need for further teaching?",
    options: ["\"I will adjust the unit rules for her when she is having an emotionally difficult day.\"", "\"I will communicate her behavior patterns to the oncoming shift at handoff.\"", "\"I will check on her at regular intervals rather than only when she requests it.\"", "\"I will tell her directly when her behavior toward staff is not acceptable.\""],
    correct: 0,
    rationale: "Adjusting rules based on the client's emotional state is inconsistency, and inconsistency is exactly what allows splitting and limit testing to take hold. Consistency across staff and across days is the foundation of borderline care."
  },
  {
    stem: "A nurse is assessing a client who has borderline personality disorder. Which findings should the nurse expect? Select all that apply.",
    options: ["Frantic efforts to avoid being left by others", "Impulsive spending and unsafe sexual activity", "Chronic feelings of emptiness", "Indifference to praise or criticism from others", "A stable, consistent sense of identity"],
    correct: [0, 1, 2],
    rationale: "Borderline personality disorder features intense fear of abandonment, impulsivity in areas such as spending and sex, and chronic emptiness, along with unstable relationships and identity disturbance. Indifference to praise belongs to schizoid personality disorder, and identity is disturbed rather than stable."
  },
  {
    stem: "Which fear is central to borderline personality disorder?",
    options: ["Abandonment", "Contamination", "Public embarrassment", "Loss of control over orderliness"],
    correct: 0,
    rationale: "An intense fear of abandonment drives the unstable relationships, frantic efforts to avoid being left, and mood shifts of borderline personality disorder."
  },
  {
    stem: "Which therapy is the evidence based treatment most associated with borderline personality disorder?",
    options: ["Dialectical behavior therapy", "Electroconvulsive therapy", "Aversion therapy", "Light therapy"],
    correct: 0,
    rationale: "Dialectical behavior therapy (DBT) is the evidence based treatment for borderline personality disorder, teaching emotion regulation, distress tolerance, and interpersonal effectiveness."
  },
  {
    stem: "Which finding is the hallmark of antisocial personality disorder?",
    options: ["Disregard for and violation of the rights of others without remorse", "Pervasive suspicion that others intend harm", "Chronic feelings of emptiness with fear of abandonment", "Preoccupation with orderliness, rules, and control"],
    correct: 0,
    rationale: "Antisocial personality disorder is defined by disregard for and violation of others' rights: deceit, manipulation, repeated unlawful actions, aggression, impulsivity, and lack of remorse."
  },
  {
    stem: "A client who has antisocial personality disorder tells the nurse, \"You are the only one on this unit who actually gets it. Just let me make my phone call ten minutes past phone hours tonight.\" Which response should the nurse make?",
    options: ["\"Phone hours end at nine. That applies to everyone on the unit, including you.\"", "\"I will allow it this one time since you have followed the rules all week.\"", "\"Tell me more about why this phone call matters so much to you.\"", "\"I will bring your request to the treatment team and see what they decide.\""],
    correct: 0,
    rationale: "Flattery followed by a request for an exception is manipulation, and the response is matter-of-fact restatement and enforcement of the limit. A single exception teaches that manipulation works."
  },
  {
    stem: "A client who has antisocial personality disorder has twice taken snacks from a peer's bedside table. Which statement by the nurse demonstrates appropriate limit setting?",
    options: ["\"Taking other clients' belongings is not acceptable. If it happens again, you will lose dayroom time.\"", "\"You need to think carefully about how your choices are affecting the people around you.\"", "\"If you keep this up, I will have no choice but to involve security next time.\"", "\"Taking things from peers makes it hard for staff to trust anything you say.\""],
    correct: 0,
    rationale: "Effective limit setting names the specific unacceptable behavior and states the concrete consequence in a matter-of-fact tone. Vague appeals to reflection set no limit, and invoking security is a threat rather than a consequence tied to the behavior."
  },
  {
    stem: "Which personality disorder cannot be formally diagnosed before age 18?",
    options: ["Antisocial", "Borderline", "Histrionic", "Paranoid"],
    correct: 0,
    rationale: "Antisocial personality disorder is the only personality disorder that cannot be formally diagnosed before age 18. The equivalent pattern in a minor is diagnosed as conduct disorder."
  },
  {
    stem: "A nurse receives handoff report on four clients on a personality disorders unit. Which client should the nurse assess first?",
    options: ["The client who has antisocial personality disorder standing over a peer and blocking the dayroom exit", "The client who has borderline personality disorder requesting an as needed anxiety medication", "The client who has paranoid personality disorder refusing to attend the morning group", "The client who has avoidant personality disorder who skipped breakfast in the dining room"],
    correct: 0,
    rationale: "Physically blocking and looming over a peer is an active escalation toward violence, an immediate safety threat to another person, and safety is the priority across this chapter."
  },

  // ── Section 11: Abuse & Violence (source: exam3 Abuse) ──
  {
    stem: "What are the three phases of the cycle of violence, in order?",
    options: ["Tension-building, acute battering, and honeymoon", "Honeymoon, tension-building, and acute battering", "Acute battering, honeymoon, and tension-building", "Triggering, escalation, and crisis"],
    correct: 0,
    rationale: "The cycle of violence runs tension-building, then acute battering, then honeymoon, and then repeats, typically escalating each time. Triggering, escalation, and crisis are phases of the aggression cycle, a different framework."
  },
  {
    stem: "A client describes that her partner has grown increasingly critical, snaps over small things, and she spends her days trying to keep him calm so he does not explode. Which phase of the cycle of violence does this describe?",
    options: ["Tension-building", "Acute battering", "Honeymoon", "Reconciliation"],
    correct: 0,
    rationale: "Minor incidents, criticism, and the victim walking on eggshells to keep everything calm describe the tension-building phase. Acute battering is the violent explosion, and the honeymoon phase follows it with apologies and gifts."
  },
  {
    stem: "The acute battering phase is often triggered by which event?",
    options: ["The victim announcing that she intends to leave", "The abuser receiving a promotion at work", "The victim cooking the abuser's favorite meal", "The couple attending a social gathering together"],
    correct: 0,
    rationale: "The explosion of the acute battering phase is often triggered by something such as the victim announcing she will leave, which is one reason leaving is statistically the most dangerous time for a victim."
  },
  {
    stem: "A woman in a shelter tells the nurse her partner has been bringing her flowers, apologizing, and swearing it will never happen again, and she is thinking about going home. Which phase of the cycle of violence does this represent, and what is the concern?",
    options: ["The honeymoon phase, which is the phase most likely to draw her back into the cycle", "The tension-building phase, which signals that a beating is imminent", "The acute battering phase, which is the most physically dangerous phase", "A genuine change, since the apologies indicate the abuse has ended"],
    correct: 0,
    rationale: "Apologies, gifts, and promises to change are the honeymoon phase, which gives the victim hope and is precisely what keeps her from leaving before the cycle repeats and escalates."
  },
  {
    stem: "What is the nurse's legal duty regarding suspected child abuse?",
    options: ["The nurse is a mandated reporter and must report reasonable suspicion", "The nurse may report only after obtaining proof of the abuse", "The nurse must obtain parental permission before reporting", "The nurse reports only if the child directly discloses the abuse"],
    correct: 0,
    rationale: "Nurses are mandated reporters of child abuse. The duty is triggered by reasonable suspicion; proof, parental permission, and a direct disclosure are not required, and investigators, not the nurse, establish proof."
  },
  {
    stem: "A mother tells the emergency department nurse that during an argument her partner threw a lamp that struck their 4-year-old, who now has a facial bruise, and she begs the nurse not to report it. Which action should the nurse take?",
    options: ["Report the suspected abuse, since a child harmed by home violence is reportable regardless of intent or the mother's wishes", "Honor the mother's request, since the child was not the intended target", "Report only if the mother consents after further discussion", "Document the injury and plan to reassess the child at a follow-up visit"],
    correct: 0,
    rationale: "A child exposed to or endangered by violence in the home is reportable even when not the direct target, and the nurse is a mandated reporter. Neither the mother's wishes nor the lack of intent removes the duty to report reasonable suspicion."
  },
  {
    stem: "A nurse suspects a child is being abused, but the parent promises it will not happen again and there is no definitive proof. Which action should the nurse take?",
    options: ["Report the reasonable suspicion, since proof and the parent's promise do not change the duty", "Delay the report until proof of the abuse can be gathered", "Accept the parent's assurance and forgo the report this time", "Refer the family to counseling services in place of reporting"],
    correct: 0,
    rationale: "Mandated reporting is triggered by reasonable suspicion; proof is the investigators' job, not the nurse's. A promise from the potential abuser does not remove the duty, and delaying for proof endangers the child."
  },
  {
    stem: "A nurse hesitates to report suspected abuse out of fear the report will escalate the violence. How does this fear affect the duty to report?",
    options: ["It does not remove the duty; the nurse must still report the suspicion", "It justifies delaying the report until the situation is safer", "It transfers the duty to report to the client's family", "It removes the duty as long as the nurse documents the fear"],
    correct: 0,
    rationale: "Fear that reporting will escalate the violence does not remove the mandated reporter's duty. The nurse must still report reasonable suspicion; safety planning is addressed separately."
  },
  {
    stem: "A competent adult client discloses intimate partner violence but tells the nurse she plans to return home to her partner. Which response by the nurse is most appropriate?",
    options: ["Work with her on a safety plan and provide resources while respecting her decision", "Explain that she must not return home given the danger she is in", "Report the abuse to the authorities on her behalf", "Withhold community resources until she agrees to stay elsewhere"],
    correct: 0,
    rationale: "A competent adult victim makes her own decisions, so the nurse assesses safety, helps build a safety plan, provides resources, and respects her autonomy. Leaving is statistically the most dangerous time, making the timing her decision."
  },
  {
    stem: "A nurse educator reviews the characteristics of people who abuse their partners. Which statement by a staff nurse requires correction?",
    options: ["\"Abusers usually have high self-esteem and see themselves as important.\"", "\"Abusers often try to isolate their partners from friends and family.\"", "\"Abusers use intimidation as a way to gain power and control.\"", "\"Abuse occurs across every socioeconomic level.\""],
    correct: 0,
    rationale: "Abusers typically have low self-esteem and use power, control, and intimidation to compensate, so the statement about high self-esteem needs correction. Isolating the partner and using intimidation for power are both accurate."
  },
  {
    stem: "A nurse assesses a 2-year-old brought in after a reported fall. Which finding is most concerning for abuse?",
    options: ["Bruises on the buttocks and lower back in several stages of healing", "A scraped knee with a matching scab from the reported tumble", "A bruise on the shin the parent attributes to climbing stairs", "A shirt on backward and two mismatched socks"],
    correct: 0,
    rationale: "Bruising on protected areas such as the buttocks and back, especially in several stages of healing, is a strong abuse red flag pointing to repeated trauma. Play-area injuries such as a scraped knee or shin bruise are expected."
  },
  {
    stem: "Parents report that their 3-month-old rolled off a couch, producing a spiral fracture of the femur. Which nursing conclusion is appropriate?",
    options: ["The injury is inconsistent with the infant's developmental stage and the history, so abuse is suspected and a report is warranted", "The explanation is plausible, since infants can roll off furniture on their own", "The fracture is a common accidental injury that requires no report", "The report should wait until the parents revise their explanation"],
    correct: 0,
    rationale: "A 3-month-old cannot roll independently, and a spiral femur fracture requires a twisting force inconsistent with a simple fall, a classic abuse red flag requiring a report."
  },
  {
    stem: "A home health nurse finds a 5-year-old who is not enrolled in school, is often left without adult supervision, and has untreated dental decay. Which type of maltreatment do these findings most reflect?",
    options: ["Neglect", "Physical abuse", "Emotional abuse", "Economic abuse"],
    correct: 0,
    rationale: "Failure to meet a child's educational, supervisory, and medical needs is neglect, the most common form of child maltreatment. Physical and emotional abuse involve inflicted harm."
  }
];
