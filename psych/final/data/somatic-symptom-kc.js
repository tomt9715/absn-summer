/* Psych Final - Knowledge Check - Ch 21 Somatic Symptom and Related Disorders
   Somatic Symptom Disorder (SSD), Illness Anxiety Disorder, Conversion Disorder,
   Factitious Disorder, Malingering
   KC convention: correct is always index 0 for single-select; engine shuffles.
   SATA uses correct as an array of indices. */
window.QUESTIONS = [
  {
    stem: "Which disorders in this group are unconscious processes, meaning the patient is not deliberately producing symptoms? Select all that apply.",
    options: ["Somatic symptom disorder (SSD)", "Illness anxiety disorder", "Conversion disorder", "Factitious disorder", "Malingering"],
    correct: [0, 1, 2],
    rationale: "Somatic symptom disorder, illness anxiety disorder, and conversion disorder are all unconscious processes. Factitious disorder and malingering are both conscious, deliberate behaviors."
  },
  {
    stem: "Which disorders in this group involve conscious, deliberate production of symptoms? Select all that apply.",
    options: ["Factitious disorder", "Malingering", "Somatic symptom disorder (SSD)", "Illness anxiety disorder", "Conversion disorder"],
    correct: [0, 1],
    rationale: "Factitious disorder and malingering both involve conscious, deliberate symptom production. Somatic symptom disorder, illness anxiety disorder, and conversion disorder are all unconscious processes."
  },
  {
    stem: "What is the core diagnostic picture of somatic symptom disorder (SSD)?",
    options: ["Real, distressing physical symptoms accompanied by disproportionate thoughts, anxiety, and time devoted to them", "Preoccupation with having a serious illness despite minimal or no physical symptoms", "A neurological deficit without an identifiable organic cause", "Deliberately feigned illness for the purpose of assuming the sick role"],
    correct: 0,
    rationale: "Somatic symptom disorder involves real, distressing physical symptoms accompanied by disproportionate thoughts, anxiety, and time devoted to those symptoms."
  },
  {
    stem: "Which factors are recognized risk factors for somatic symptom disorder (SSD)? Select all that apply.",
    options: ["Anxiety disorder or depression", "Female sex", "Childhood adversity", "Fewer years of education", "Higher education and older age"],
    correct: [0, 1, 2, 3],
    rationale: "Risk factors for SSD include anxiety disorder, depression, female sex, childhood adversity, and fewer years of education. Higher education, obesity, and older age are not recognized risk factors."
  },
  {
    stem: "Which of the following is NOT a recognized risk factor for somatic symptom disorder (SSD)?",
    options: ["Obesity", "Female sex", "Childhood adversity", "Comorbid depression"],
    correct: 0,
    rationale: "Obesity is not a recognized risk factor for SSD. Female sex, childhood adversity, and comorbid depression are all recognized risk factors, along with anxiety disorder and fewer years of education."
  },
  {
    stem: "What is the core diagnostic picture of illness anxiety disorder (hypochondriasis)?",
    options: ["Preoccupation with having or acquiring a serious illness, with minimal physical symptoms", "Real, distressing physical symptoms with disproportionate anxiety about them", "A neurological deficit without an identifiable organic cause", "Feigned symptoms for the purpose of financial or legal gain"],
    correct: 0,
    rationale: "Illness anxiety disorder, also called hypochondriasis, is defined by preoccupation with having or acquiring a serious illness, despite minimal physical symptoms."
  },
  {
    stem: "What term describes the pattern of fueling illness-related preoccupation through online research?",
    options: ["Cyberchondria", "Somatization", "Malingering", "La belle indifference"],
    correct: 0,
    rationale: "Cyberchondria describes the pattern of fueling illness anxiety through repeated online symptom research."
  },
  {
    stem: "What is the primary treatment goal for illness anxiety disorder?",
    options: ["Reduce health anxiety and improve functioning, not eliminate the beliefs entirely", "Eliminate all illness-related beliefs completely before discharge", "Confront the patient directly about the irrationality of their fears", "Restrict all internet and media access related to health topics"],
    correct: 0,
    rationale: "The primary treatment goal for illness anxiety disorder is reducing health anxiety and improving functioning, not necessarily eliminating the underlying beliefs entirely."
  },
  {
    stem: "What is the core diagnostic picture of conversion disorder?",
    options: ["A neurological deficit, such as blindness, paralysis, or seizures, without an identifiable organic cause", "Real, distressing physical symptoms with disproportionate anxiety about them", "Preoccupation with having a serious illness despite minimal symptoms", "Deliberately feigned symptoms for external gain"],
    correct: 0,
    rationale: "Conversion disorder involves a neurological deficit, such as blindness, paralysis, or seizures, without an identifiable organic cause."
  },
  {
    stem: "What is la belle indifference, as seen in conversion disorder?",
    options: ["A striking lack of concern about a significant neurological symptom", "Excessive, disproportionate distress about a minor physical symptom", "Deliberate exaggeration of symptoms for sympathy", "A calm, matter-of-fact acceptance of a terminal diagnosis"],
    correct: 0,
    rationale: "La belle indifference is a striking lack of concern about what would typically be a significant neurological deficit, a classic finding in conversion disorder."
  },
  {
    stem: "What is the priority nursing approach for a patient with conversion disorder?",
    options: ["Supportive and nonjudgmental, without confronting the patient about a psychological cause or rushing to psychiatric referral", "Immediately confront the patient with evidence that no organic cause exists", "Refer directly to psychiatry before any supportive care is offered", "Minimize contact with the patient until symptoms resolve on their own"],
    correct: 0,
    rationale: "The priority approach for conversion disorder is supportive and nonjudgmental care, without confronting the patient about a psychological cause or rushing them into psychiatric referral before they are ready."
  },
  {
    stem: "What is the core diagnostic picture of factitious disorder?",
    options: ["Deliberately feigning illness for the purpose of assuming the sick role", "Deliberately feigning illness for external gain such as money or legal advantage", "Real physical symptoms with disproportionate anxiety about them", "A neurological deficit without an identifiable organic cause"],
    correct: 0,
    rationale: "Factitious disorder involves deliberately feigning illness specifically for the purpose of assuming the sick role, distinguishing it from malingering, which is motivated by external gain."
  },
  {
    stem: "What is factitious disorder imposed on another, and what is the nurse's legal obligation when it is suspected?",
    options: ["A caregiver deliberately produces or feigns illness in another person, most often a child, and it must be reported as child abuse", "A caregiver exaggerates a family member's symptoms to obtain sympathy, and it does not require reporting", "A parent seeks a second medical opinion for a child, and it must be reported as a HIPAA violation", "A patient exaggerates a family member's illness for insurance purposes, and it must be reported as fraud"],
    correct: 0,
    rationale: "Factitious disorder imposed on another involves a caregiver deliberately producing or feigning illness in someone else, most often a child, and it constitutes child abuse that must be reported."
  },
  {
    stem: "What is the core diagnostic picture of malingering?",
    options: ["Deliberately feigning symptoms for external gain, such as money, work avoidance, or legal advantage", "Deliberately feigning illness for the purpose of assuming the sick role", "Real physical symptoms with disproportionate anxiety about them", "Preoccupation with having a serious illness despite minimal symptoms"],
    correct: 0,
    rationale: "Malingering involves deliberately feigning symptoms for external gain, such as financial compensation, avoiding work or legal obligations, or other tangible benefits."
  },
  {
    stem: "How is malingering classified?",
    options: ["It is not classified as a mental disorder", "It is classified as a somatic symptom and related disorder", "It is classified as a personality disorder", "It is classified as a factitious disorder subtype"],
    correct: 0,
    rationale: "Malingering is not classified as a mental disorder, unlike the other conditions in this group, since it represents a deliberate, goal-directed behavior rather than a psychiatric condition."
  },
  {
    stem: "What is the key distinction between factitious disorder and malingering?",
    options: ["Factitious disorder is motivated by assuming the sick role; malingering is motivated by external gain", "Factitious disorder is unconscious; malingering is a conscious process", "Factitious disorder involves no real symptoms; malingering always involves real symptoms", "Factitious disorder is not a mental disorder; malingering is a mental disorder"],
    correct: 0,
    rationale: "Both factitious disorder and malingering are conscious, but they differ in motive: factitious disorder is driven by the desire to assume the sick role, while malingering is driven by external, tangible gain."
  },
  {
    stem: "What is the recommended first step when responding to a patient with somatic symptom disorder (SSD) who reports pain?",
    options: ["Validate the patient's experience before redirecting to coping strategies", "Reassure the patient that nothing is medically wrong", "Immediately attribute the pain to a psychological cause", "Order additional diagnostic testing at every visit to rule out new causes"],
    correct: 0,
    rationale: "The recommended approach validates the patient's experience first, then redirects toward coping and functional strategies, rather than dismissing the symptom, attributing it prematurely to psychological causes, or offering pure reassurance, all of which damage trust."
  },
  {
    stem: "Which nursing approaches damage trust when caring for a patient with somatic symptom disorder (SSD)? Select all that apply.",
    options: ["Dismissing the patient's symptoms", "Prematurely attributing symptoms to a psychological cause", "Offering pure reassurance without addressing the concern", "Validating the patient's experience before redirecting to coping", "Identifying stressors that worsen the symptom"],
    correct: [0, 1, 2],
    rationale: "Dismissing symptoms, prematurely attributing them to a psychological cause, and offering pure reassurance without addressing the concern all damage trust with a patient who has SSD. Validating the experience and identifying stressors are both appropriate, trust-building approaches."
  },
  {
    stem: "What should the nurse avoid doing when managing a patient with somatic symptom disorder (SSD), since it reinforces the somatic focus?",
    options: ["Performing extra pain assessments, vital signs, or tests at every visit", "Encouraging the patient to identify stressors that worsen symptoms", "Coordinating care through one consistent primary provider", "Validating the patient's experience before redirecting to coping"],
    correct: 0,
    rationale: "Performing extra pain assessments, vital signs, or tests at every visit reinforces the somatic focus and should be avoided. Identifying stressors, coordinating care through one provider, and validating the patient's experience are all appropriate strategies."
  },
  {
    stem: "What self-observation strategy should be promoted for a patient with somatic symptom disorder (SSD)?",
    options: ["Identifying stressors that increase the symptom", "Tracking the exact pain score at every hour of the day", "Avoiding all discussion of the symptom entirely", "Comparing symptoms with other patients who have similar complaints"],
    correct: 0,
    rationale: "Promoting self-observation to identify stressors that increase the symptom helps the patient recognize patterns and build coping strategies, rather than focusing purely on symptom tracking or avoidance."
  },
  {
    stem: "What is the recommended care coordination approach for a patient with somatic symptom disorder (SSD)?",
    options: ["One consistent primary provider, rather than a roster of specialists", "Referral to as many specialists as the patient requests", "A new provider at each visit to obtain a fresh assessment", "Care coordination is not a relevant consideration for SSD"],
    correct: 0,
    rationale: "Care coordination for SSD works best through one consistent primary provider, rather than a rotating roster of specialists, which can fragment care and reinforce symptom-seeking behavior."
  },
  {
    stem: "What medication-related risk requires priority nursing attention in a patient with somatic symptom disorder (SSD)?",
    options: ["Risk for medication dependency from analgesic overuse", "Risk for hypertensive crisis from over-the-counter cold medications", "Risk for serotonin syndrome from herbal supplements", "Risk for anticoagulant interactions from NSAID use"],
    correct: 0,
    rationale: "Analgesic overuse creates a risk for medication dependency in patients with SSD, making this a priority nursing concern given the ongoing symptom-focused care-seeking pattern."
  },
  {
    stem: "Which comorbid conditions commonly accompany somatic symptom disorder (SSD), and what medication class is typically used?",
    options: ["Anxiety and depression are common comorbidities, and SSRIs are typically used", "Bipolar disorder is the most common comorbidity, and mood stabilizers are typically used", "Psychotic disorders are the most common comorbidity, and antipsychotics are typically used", "Substance use disorder is the most common comorbidity, and no medication is typically used"],
    correct: 0,
    rationale: "Anxiety and depression are common comorbidities in SSD, and SSRIs are typically used as part of treatment."
  },
  {
    stem: "A young adult with somatic symptom disorder (SSD) is started on sertraline. What is the priority monitoring concern?",
    options: ["Suicidal thoughts and behavior", "Gastrointestinal upset", "Insomnia", "Weight gain"],
    correct: 0,
    rationale: "In a young adult starting sertraline, the priority monitoring concern is suicidal thoughts and behavior, given the black box warning for this age group, which takes precedence over expected side effects like GI upset or insomnia."
  },
  {
    stem: "Which disorder is associated with the phrase la belle indifference?",
    options: ["Conversion disorder", "Somatic symptom disorder (SSD)", "Illness anxiety disorder", "Factitious disorder"],
    correct: 0,
    rationale: "La belle indifference, a striking lack of concern about a significant neurological deficit, is specifically associated with conversion disorder."
  },
  {
    stem: "Which disorder involves preoccupation with illness fueled by repeated online symptom research (cyberchondria)?",
    options: ["Illness anxiety disorder", "Somatic symptom disorder (SSD)", "Conversion disorder", "Malingering"],
    correct: 0,
    rationale: "Cyberchondria, illness anxiety fueled by online research, is specifically associated with illness anxiety disorder."
  },
  {
    stem: "Which disorder involves feigned illness specifically to assume the sick role, rather than for tangible external benefit?",
    options: ["Factitious disorder", "Malingering", "Somatic symptom disorder (SSD)", "Illness anxiety disorder"],
    correct: 0,
    rationale: "Factitious disorder involves feigned illness specifically to assume the sick role, distinguishing it from malingering, which is motivated by tangible external gain."
  },
  {
    stem: "Which disorder involves feigned symptoms motivated by external gain such as financial compensation or avoiding legal obligations?",
    options: ["Malingering", "Factitious disorder", "Somatic symptom disorder (SSD)", "Conversion disorder"],
    correct: 0,
    rationale: "Malingering is motivated by external, tangible gain, such as financial compensation, avoiding work, or avoiding legal obligations."
  },
  {
    stem: "A patient presents with sudden-onset blindness following a stressful event, with no organic cause identified on exam, and appears strikingly unconcerned about the vision loss. Which disorder does this presentation suggest?",
    options: ["Conversion disorder", "Somatic symptom disorder (SSD)", "Illness anxiety disorder", "Factitious disorder"],
    correct: 0,
    rationale: "Sudden neurological deficit without an organic cause, paired with striking unconcern (la belle indifference), is the classic presentation of conversion disorder."
  },
  {
    stem: "A patient repeatedly researches symptoms online and remains preoccupied with the possibility of having a serious illness, despite minimal physical symptoms and repeated normal workups. Which disorder does this presentation suggest?",
    options: ["Illness anxiety disorder", "Somatic symptom disorder (SSD)", "Conversion disorder", "Malingering"],
    correct: 0,
    rationale: "Preoccupation with having a serious illness despite minimal symptoms, worsened by online research (cyberchondria), suggests illness anxiety disorder."
  },
  {
    stem: "A patient reports real, distressing chronic pain and spends significant time each day worrying about it and researching possible causes, well beyond what the pain itself would suggest. Which disorder does this presentation suggest?",
    options: ["Somatic symptom disorder (SSD)", "Illness anxiety disorder", "Conversion disorder", "Malingering"],
    correct: 0,
    rationale: "Real, distressing physical symptoms accompanied by disproportionate thoughts, anxiety, and time devoted to them describes somatic symptom disorder, distinct from illness anxiety disorder, where physical symptoms are minimal or absent."
  },
  {
    stem: "A patient is found to have secretly injected a substance to produce lab abnormalities and seeks repeated hospital admissions and testing, with no clear external benefit beyond medical attention. Which disorder does this presentation suggest?",
    options: ["Factitious disorder", "Malingering", "Somatic symptom disorder (SSD)", "Conversion disorder"],
    correct: 0,
    rationale: "Deliberately producing illness for the purpose of gaining medical attention and assuming the sick role, without a tangible external benefit, is the hallmark of factitious disorder."
  },
  {
    stem: "A patient involved in a workplace injury lawsuit exaggerates the severity of his symptoms during an independent medical evaluation. Which condition does this presentation suggest?",
    options: ["Malingering", "Factitious disorder", "Somatic symptom disorder (SSD)", "Conversion disorder"],
    correct: 0,
    rationale: "Exaggerating symptoms in the context of a lawsuit, where there is a clear external and tangible benefit, is characteristic of malingering."
  },
  {
    stem: "A nurse caring for a patient with somatic symptom disorder (SSD) says, \"There's nothing physically wrong with you, so there's nothing more I can do.\" What is the concern with this statement?",
    options: ["It dismisses the patient's experience and damages trust", "It appropriately redirects the patient toward coping strategies", "It is an example of effective validation", "It is an appropriate response since SSD symptoms are not real"],
    correct: 0,
    rationale: "This statement dismisses the patient's experience rather than validating it, which damages trust. SSD symptoms are real and distressing to the patient even without an identifiable organic cause."
  },
  {
    stem: "A nurse caring for a patient with somatic symptom disorder (SSD) says, \"I understand that you are feeling pain. Let's discuss strategies to manage it.\" What does this statement demonstrate?",
    options: ["Validating the patient's experience before redirecting to coping strategies", "Prematurely attributing the symptom to a psychological cause", "Reinforcing the somatic focus through reassurance alone", "Dismissing the significance of the patient's pain"],
    correct: 0,
    rationale: "This statement validates the patient's experience first and then redirects toward coping and functional strategies, the recommended approach for SSD management."
  },
  {
    stem: "A mother repeatedly reports fabricated symptoms in her child and requests unnecessary invasive testing, resulting in real harm to the child. What is the nurse's legal obligation?",
    options: ["Report the situation as suspected child abuse", "Document the finding without further action, since it is a medical decision", "Refer the mother to outpatient therapy without reporting", "Take no action unless the child directly discloses the behavior"],
    correct: 0,
    rationale: "Factitious disorder imposed on another constitutes child abuse and must be reported, regardless of whether the child is able to disclose it directly."
  }
];
