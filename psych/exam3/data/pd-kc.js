/* Psych Exam 3 - Knowledge Check - Ch 18 Personality Disorders
   KC convention: correct is always index 0 for single-select; engine shuffles.
   SATA uses correct as an array of indices. */
window.QUESTIONS = [
  {
    stem: "Which statement best defines a personality disorder?",
    options: ["An enduring, inflexible pattern of inner experience and behavior that deviates from cultural expectations and causes distress or impairment", "A temporary disturbance in mood and behavior triggered by an identifiable stressor", "A psychotic illness marked by sustained delusions and hallucinations", "A cyclical disturbance of mood alternating between elevated and depressed states"],
    correct: 0,
    rationale: "A personality disorder is an enduring, inflexible pattern of inner experience and behavior that deviates from cultural expectations, is stable over time, and causes distress or impairment. It is not temporary, not psychotic by definition, and not a mood cycle."
  },
  {
    stem: "Personality disorders are described as largely ego-syntonic. What does this mean for the patient?",
    options: ["The patterns feel normal and acceptable to the patient, so insight is limited", "The patterns feel foreign and distressing, so the patient seeks change", "The patient experiences the traits only during periods of acute stress", "The patient is unaware of the behaviors because they occur outside consciousness"],
    correct: 0,
    rationale: "Ego-syntonic means the traits feel consistent with and acceptable to the person's self-image. Because the patterns feel normal to the patient, insight is limited and change is slow. Ego-dystonic describes distressing, foreign symptoms, which is the OCD experience, not the personality disorder experience."
  },
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
    stem: "Which description characterizes Cluster A personality disorders as a group?",
    options: ["Odd and eccentric", "Dramatic, emotional, and erratic", "Anxious and insecure", "Impulsive and remorseless"],
    correct: 0,
    rationale: "Cluster A disorders are described as odd and eccentric and are conceptually related to schizophrenia. Cluster B is dramatic, emotional, and erratic. Cluster C is anxious and insecure."
  },
  {
    stem: "Which description characterizes Cluster B personality disorders as a group?",
    options: ["Dramatic, emotional, and erratic", "Odd and eccentric", "Anxious and insecure", "Suspicious and withdrawn"],
    correct: 0,
    rationale: "Cluster B disorders, antisocial, borderline, histrionic, and narcissistic, are described as dramatic, emotional, and erratic. The lecture linked this cluster to emotions."
  },
  {
    stem: "Which description characterizes Cluster C personality disorders as a group?",
    options: ["Anxious and insecure", "Odd and eccentric", "Dramatic, emotional, and erratic", "Grandiose and entitled"],
    correct: 0,
    rationale: "Cluster C disorders, avoidant, dependent, and OCPD, are described as anxious and insecure. The lecture linked this cluster to anxiety."
  },
  {
    stem: "Which finding is the hallmark of paranoid personality disorder?",
    options: ["Pervasive suspicion and distrust of others", "Sustained auditory hallucinations", "Magical thinking and belief in special powers", "Restricted emotional range with indifference to others"],
    correct: 0,
    rationale: "Paranoid personality disorder is defined by pervasive suspicion and distrust, holding grudges, and finding hidden demeaning meanings in benign remarks. The person is not psychotic and knows what is real. Magical thinking belongs to schizotypal and restricted emotional range belongs to schizoid."
  },
  {
    stem: "Which communication approach should the nurse use with a client who has paranoid personality disorder?",
    options: ["Clear, straightforward, matter-of-fact communication", "Warm, affectionate communication with frequent reassurance", "Indirect suggestions that let the client draw conclusions", "Lighthearted humor to reduce the client's guardedness"],
    correct: 0,
    rationale: "Clear, straightforward, matter-of-fact communication with consistent follow through builds what trust is possible with paranoid clients. Excessive warmth, indirectness, and humor all feed suspicion because the client searches for hidden meanings."
  },
  {
    stem: "Which finding is characteristic of schizoid personality disorder?",
    options: ["Genuine preference for solitude with indifference to praise or criticism", "Intense desire for relationships blocked by fear of rejection", "Dramatic emotional displays that draw attention", "Excessive clinginess and reliance on others for decisions"],
    correct: 0,
    rationale: "The schizoid client is a reclusive loner who genuinely does not want relationships, is happy without them, and is indifferent to praise or criticism. Wanting relationships but fearing rejection is avoidant, dramatic displays are histrionic, and clinginess is dependent."
  },
  {
    stem: "A client states, \"I can read people's minds and sense things before they happen.\" This magical thinking is characteristic of which personality disorder?",
    options: ["Schizotypal", "Schizoid", "Paranoid", "Narcissistic"],
    correct: 0,
    rationale: "Magical thinking, belief in special powers such as telepathy, odd eccentric behavior, and perceptual distortions characterize schizotypal personality disorder. Schizoid involves solitude without odd beliefs, paranoid involves suspicion, and narcissistic involves grandiosity about worth rather than supernatural powers."
  },
  {
    stem: "Which feature distinguishes schizotypal personality disorder from schizophrenia?",
    options: ["Schizotypal lacks sustained delusions and hallucinations", "Schizotypal involves a complete break from reality", "Schizophrenia has no genetic relationship to schizotypal personality disorder", "Schizotypal symptoms respond only to antipsychotic medications"],
    correct: 0,
    rationale: "Sustained delusions and hallucinations belong to schizophrenia. Schizotypal clients have magical thinking and perceptual distortions but not sustained psychosis, though genetic overlap exists and some may become psychotic in the future."
  },
  {
    stem: "Schizotypal personality disorder most often co-occurs with which condition?",
    options: ["Mood disorders", "Substance use disorders", "Eating disorders", "Neurocognitive disorders"],
    correct: 0,
    rationale: "Schizotypal personality disorder often co-occurs with mood disorders, a point the professor emphasized when distinguishing it from schizophrenia."
  },
  {
    stem: "Which finding is the hallmark of antisocial personality disorder?",
    options: ["Disregard for and violation of the rights of others without remorse", "Pervasive suspicion that others intend harm", "Chronic feelings of emptiness with fear of abandonment", "Preoccupation with orderliness, rules, and control"],
    correct: 0,
    rationale: "Antisocial personality disorder is defined by disregard for and violation of others' rights: deceit, manipulation, repeated unlawful actions, aggression, impulsivity, and lack of remorse. Suspicion is paranoid, emptiness with abandonment fear is borderline, and preoccupation with rules is OCPD."
  },
  {
    stem: "The pattern of antisocial personality disorder occurring before age 18 is called what?",
    options: ["Conduct disorder", "Oppositional defiant disorder", "Disruptive mood dysregulation disorder", "Intermittent explosive disorder"],
    correct: 0,
    rationale: "The same pattern of rights violation before age 18 is called conduct disorder. Antisocial personality disorder is the only personality disorder that cannot be formally diagnosed until age 18."
  },
  {
    stem: "Which personality disorder cannot be formally diagnosed before age 18?",
    options: ["Antisocial", "Borderline", "Histrionic", "Paranoid"],
    correct: 0,
    rationale: "Antisocial personality disorder is the only personality disorder that cannot be formally diagnosed before age 18. The equivalent pattern in a minor is diagnosed as conduct disorder."
  },
  {
    stem: "Which nursing approach is most important when caring for a client who has antisocial personality disorder?",
    options: ["Firm, consistent limit setting enforced by all staff", "Frequent one-to-one time to build emotional intimacy", "Flexible rules adjusted to the client's daily mood", "Confrontation of the client in front of peers when rules are broken"],
    correct: 0,
    rationale: "Firm, consistent limit setting with every staff member enforcing the same limits is the core approach, along with watching for manipulation of staff and peers. Emotional intimacy invites manipulation, flexible rules reward testing, and public confrontation is punitive."
  },
  {
    stem: "Which defense mechanism is the signature of borderline personality disorder?",
    options: ["Splitting", "Projection", "Reaction formation", "Intellectualization"],
    correct: 0,
    rationale: "Splitting, viewing people as all good or all bad with no middle ground, is the signature defense of borderline personality disorder. The classic vignette: one nurse is an angel and another is cruel and incompetent."
  },
  {
    stem: "Which statement correctly defines splitting?",
    options: ["Viewing people as all good or all bad with no middle ground", "Attributing one's own unacceptable feelings to another person", "Expressing the opposite of what one actually feels", "Separating emotional meaning from a distressing event"],
    correct: 0,
    rationale: "Splitting is all-good or all-bad thinking with no middle ground. Attributing feelings to others is projection, expressing the opposite feeling is reaction formation, and separating emotion from an event describes isolation of affect or intellectualization."
  },
  {
    stem: "Which staffing strategy neutralizes splitting on an inpatient unit?",
    options: ["Absolute consistency, with all staff enforcing identical limits", "Assigning the client only to the staff members she prefers", "Rotating a different nurse to the client each shift to prevent attachment", "Limiting communication between shifts about the client's behavior"],
    correct: 0,
    rationale: "Splitting cannot take hold when every staff member communicates and enforces the same limits consistently. Honoring staff preferences rewards the splitting, and poor communication between staff is exactly what splitting exploits."
  },
  {
    stem: "Which is the priority nursing concern for a client who has borderline personality disorder?",
    options: ["Safety, including monitoring for self-mutilation and suicidal behavior", "Improving the client's work performance", "Reducing the client's dramatic clothing choices", "Correcting the client's magical thinking"],
    correct: 0,
    rationale: "Safety comes first across the personality disorders chapter, and for borderline personality disorder that means monitoring for self-injury and suicidal behavior. Self-mutilation and suicide risk are core features of the disorder."
  },
  {
    stem: "Which therapy is the evidence based treatment most associated with borderline personality disorder?",
    options: ["Dialectical behavior therapy", "Electroconvulsive therapy", "Aversion therapy", "Light therapy"],
    correct: 0,
    rationale: "Dialectical behavior therapy (DBT) is the evidence based treatment for borderline personality disorder, teaching emotion regulation, distress tolerance, and interpersonal effectiveness. Cognitive behavioral therapy and transference focused psychotherapy are also used."
  },
  {
    stem: "Which fear is central to borderline personality disorder?",
    options: ["Abandonment", "Contamination", "Public embarrassment", "Loss of control over orderliness"],
    correct: 0,
    rationale: "An intense fear of abandonment drives the unstable relationships, frantic efforts to avoid being left, and mood shifts of borderline personality disorder. Contamination fear points to OCD, embarrassment to social anxiety, and orderliness to OCPD."
  },
  {
    stem: "Which behavior pattern characterizes histrionic personality disorder?",
    options: ["Dramatic attention seeking with seductive behavior and rapidly shifting shallow emotions", "Grandiosity with a constant need for admiration", "Social withdrawal with restricted emotional expression", "Rigid perfectionism with preoccupation with rules"],
    correct: 0,
    rationale: "Histrionic personality disorder features dramatic attention seeking, seductive and flirtatious behavior, use of appearance to draw attention, and shallow rapidly shifting emotions, such as crying loudly when a request is denied. Grandiosity with admiration needs is narcissistic."
  },
  {
    stem: "Which nursing approach is appropriate for a client who has histrionic personality disorder?",
    options: ["Maintain professional boundaries and keep interactions matter-of-fact", "Provide extra individual attention when the client behaves dramatically", "Compliment the client's appearance to build self-esteem", "Allow flirtatious remarks to pass without comment to avoid embarrassment"],
    correct: 0,
    rationale: "Professional boundaries, matter-of-fact interactions, promoting appropriate behavior in groups, and assertiveness training are the approach for histrionic clients. Extra attention for dramatic behavior reinforces it, and appearance compliments and ignored boundary violations feed the pattern."
  },
  {
    stem: "Which findings characterize narcissistic personality disorder?",
    options: ["Grandiosity, entitlement, need for admiration, and lack of empathy", "Suspiciousness, grudge holding, and hidden meanings in benign remarks", "Clinginess, indecisiveness, and fear of self-care", "Perfectionism, frugality, and devotion to work"],
    correct: 0,
    rationale: "Narcissistic personality disorder features grandiosity, a sense of entitlement, need for constant admiration, lack of empathy, arrogance, and rage or contempt when challenged or criticized."
  },
  {
    stem: "How does a client who has narcissistic personality disorder typically respond to criticism?",
    options: ["With rage or contempt", "With indifference", "With tearful apology", "With increased compliance"],
    correct: 0,
    rationale: "Criticism threatens the grandiose self-image, so the narcissistic client responds with rage or contempt. Indifference to criticism is characteristic of schizoid personality disorder."
  },
  {
    stem: "Which finding is characteristic of avoidant personality disorder?",
    options: ["Desire for relationships blocked by fear of rejection and criticism", "Contentment with solitude and no desire for relationships", "Exploitation of relationships for personal gain", "Formation of intense, unstable relationships that shift rapidly"],
    correct: 0,
    rationale: "The avoidant client desperately wants relationships but avoids them out of fear of rejection, criticism, and embarrassment, and feels inferior to others. Contentment with solitude is schizoid, exploitation is antisocial, and intense unstable relationships are borderline."
  },
  {
    stem: "Which single question best distinguishes schizoid from avoidant personality disorder?",
    options: ["Does the person want relationships?", "Does the person hold grudges?", "Does the person have magical thinking?", "Does the person show remorse after conflict?"],
    correct: 0,
    rationale: "Both disorders look socially isolated from the outside. The schizoid person does not want relationships and is content alone; the avoidant person wants them desperately but fears rejection. Desire for relationships is the differentiating axis."
  },
  {
    stem: "Which behavior pattern characterizes dependent personality disorder?",
    options: ["Reliance on others for decisions, emotional support, and validation", "Preference for working alone without input from others", "Manipulation of others through charm and deceit", "Suspicion that others are exploiting or deceiving them"],
    correct: 0,
    rationale: "Dependent personality disorder features reliance on others for decisions and validation, clinginess, fear of being left to care for oneself, and sometimes tolerance of abusive relationships to avoid being alone."
  },
  {
    stem: "The nurse caring for a client who has dependent personality disorder should self-assess for which countertransference reaction?",
    options: ["The urge to rescue the client and make decisions for her", "The urge to avoid the client because of hostility", "The urge to compete with the client for attention", "The urge to discharge the client early out of frustration"],
    correct: 0,
    rationale: "The dependent client's helplessness pulls caregivers toward rescuing and deciding for her, which reinforces the dependence. The nurse must recognize this urge and instead support the client's own decision making with positive feedback for assertiveness."
  },
  {
    stem: "Which findings characterize obsessive compulsive personality disorder (OCPD)?",
    options: ["Perfectionism, rigidity, and preoccupation with order, rules, and control", "Intrusive unwanted thoughts neutralized by repetitive rituals", "Dramatic emotionality with attention seeking behavior", "Detachment from relationships with flat emotional expression"],
    correct: 0,
    rationale: "OCPD features perfectionism, rigidity, preoccupation with order, rules, and control, devotion to work at the expense of relationships, stiff formal mannerisms, overwhelming punctuality, and frugality. There are no true obsessions or compulsions in OCPD; those define OCD."
  },
  {
    stem: "Which feature separates obsessive compulsive personality disorder (OCPD) from obsessive-compulsive disorder (OCD)?",
    options: ["OCPD traits are ego-syntonic while OCD symptoms are ego-dystonic", "OCPD involves rituals that consume more than one hour per day", "OCD traits feel comfortable and acceptable to the person", "OCPD responds primarily to selective serotonin reuptake inhibitors"],
    correct: 0,
    rationale: "The person with OCPD is comfortable with the perfectionism and rigidity; the traits are ego-syntonic. The person with OCD is tormented by intrusive thoughts and rituals that feel foreign and distressing; the symptoms are ego-dystonic. This axis is the single most useful differentiator on the exam."
  },
  {
    stem: "Which behavior pattern defines passive-aggressive behavior?",
    options: ["Surface cooperation with indirect resistance to demands", "Open refusal to complete assigned responsibilities", "Direct verbal hostility followed by apology", "Complete withdrawal from all social interaction"],
    correct: 0,
    rationale: "Passive-aggressive behavior is indirect resistance behind surface cooperation: agreeing to tasks, then arriving late, doing them poorly or not at all, and displaying negativity. Recognize it in colleague and student scenarios, not just patients."
  },
  {
    stem: "Assertiveness training is the matched intervention for which two personality disorders?",
    options: ["Dependent and histrionic", "Paranoid and schizoid", "Antisocial and narcissistic", "Schizotypal and avoidant"],
    correct: 0,
    rationale: "Assertiveness training is matched to dependent and histrionic personality disorders, teaching direct expression of needs instead of clinginess or dramatics. Schizoid and schizotypal clients need their distance respected, and paranoid clients need straightforward honesty."
  },
  {
    stem: "Which term describes symptoms that feel distressing and foreign to a person's self-image?",
    options: ["Ego-dystonic", "Ego-syntonic", "Dysphoric", "Dissociative"],
    correct: 0,
    rationale: "Ego-dystonic symptoms feel foreign, distressing, and opposite to one's values and self-image, like the intrusive thoughts of OCD. Ego-syntonic traits feel consistent and acceptable, like most personality disorder patterns. Dysphoric is a state of unease, and dissociative refers to disruption of identity or memory."
  }
];
