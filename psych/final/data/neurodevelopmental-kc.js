/* Psych Final - Knowledge Check - Ch 22 Neurodevelopmental Disorders (ADHD, ASD, Other Childhood Disorders)
   KC convention: correct is always index 0 for single-select; engine shuffles.
   SATA uses correct as an array of indices. */
window.QUESTIONS = [
  {
    stem: "In how many settings must ADHD symptoms be present for diagnosis?",
    options: ["Two or more settings", "One setting only", "Three or more settings", "Any single setting is sufficient"],
    correct: 0,
    rationale: "ADHD requires persistent inattention and/or hyperactivity-impulsivity interfering with functioning in two or more settings, such as home and school, not just one."
  },
  {
    stem: "By what age must ADHD symptoms be present for diagnosis?",
    options: ["Before age 12", "Before age 6", "Before age 18", "Before age 3"],
    correct: 0,
    rationale: "ADHD symptoms must be present before age 12, even if the diagnosis itself is made later."
  },
  {
    stem: "Which neurotransmitters are decreased in the proposed neurobiology of ADHD?",
    options: ["Dopamine and norepinephrine", "Serotonin and GABA", "Acetylcholine and glutamate", "Histamine and dopamine"],
    correct: 0,
    rationale: "ADHD is associated with decreased dopamine and norepinephrine activity, which is why stimulant medications, which raise these neurotransmitters, are the first-line treatment."
  },
  {
    stem: "From which sources should standardized ADHD rating scales be obtained?",
    options: ["Both parents and teachers", "Parents only", "Teachers only", "The child's self-report only"],
    correct: 0,
    rationale: "ADHD assessment requires standardized rating scales from both parents and teachers, since symptoms must be documented across two or more settings."
  },
  {
    stem: "Which standardized rating scales are used to assess ADHD?",
    options: ["NICHQ Vanderbilt and Conners scales", "Beck Depression Inventory and PHQ-9", "M-CHAT-R and CARS", "PANSS and BPRS"],
    correct: 0,
    rationale: "The NICHQ Vanderbilt and Conners scales are the standardized rating scales used to assess ADHD symptoms across settings."
  },
  {
    stem: "What is the priority nursing diagnosis for an untreated adolescent with ADHD?",
    options: ["Risk for injury related to impulsivity", "Risk for self-harm", "Risk for social isolation", "Risk for altered nutrition"],
    correct: 0,
    rationale: "The priority nursing diagnosis for an untreated adolescent with ADHD is risk for injury from impulsivity, not intentional self-harm, which is a different clinical concern."
  },
  {
    stem: "Which symptoms overlap between ADHD and pediatric bipolar disorder, requiring careful differential assessment?",
    options: ["Distractibility, hyperactivity, impulsivity, and irritability", "Psychomotor retardation and flat affect", "Auditory hallucinations and paranoia", "Selective mutism and social withdrawal"],
    correct: 0,
    rationale: "ADHD and pediatric bipolar disorder overlap in distractibility, hyperactivity, impulsivity, and irritability, which is why a careful differential assessment is needed before assuming either diagnosis."
  },
  {
    stem: "Which interventions are appropriate for a child with ADHD? Select all that apply.",
    options: ["Structure and consistent routine", "Minimal distractions", "Calm, non-confrontational approach", "Clear limits", "Ignoring the behavior entirely", "Unrestricted, unstructured play"],
    correct: [0, 1, 2, 3],
    rationale: "Appropriate ADHD interventions include structure, consistent routine, minimal distractions, a calm non-confrontational approach, clear limits, and safe outlets for energy. Ignoring the behavior and unrestricted play are not appropriate interventions."
  },
  {
    stem: "Which approach is NOT appropriate when managing a child with ADHD?",
    options: ["Ignoring the behavior or allowing unrestricted play", "Providing a consistent daily routine", "Setting clear, consistent limits", "Minimizing environmental distractions"],
    correct: 0,
    rationale: "Ignoring the behavior or allowing unrestricted play is not an appropriate approach. Structure, clear limits, consistent routine, and minimized distractions are the correct interventions."
  },
  {
    stem: "How is the effect of stimulant medications on a child with ADHD best described?",
    options: ["Paradoxical: the medication calms the child and increases attention", "Sedating: the medication produces drowsiness", "Euphoric: the medication produces a high", "Stimulating: the medication increases hyperactivity"],
    correct: 0,
    rationale: "Stimulant medications produce a paradoxical effect in ADHD, calming the child, increasing attention, and decreasing hyperactivity, rather than causing further stimulation."
  },
  {
    stem: "Which medications are classified as stimulants used to treat ADHD?",
    options: ["Methylphenidate, amphetamine salts, and lisdexamfetamine", "Atomoxetine, guanfacine, and clonidine", "Risperidone and aripiprazole", "Sertraline and fluoxetine"],
    correct: 0,
    rationale: "Methylphenidate (Ritalin), amphetamine salts, and lisdexamfetamine are the stimulant medications used to treat ADHD. Atomoxetine, guanfacine, and clonidine are non-stimulant options."
  },
  {
    stem: "Which adverse effects are associated with stimulant medications for ADHD? Select all that apply.",
    options: ["Decreased appetite and weight loss", "Insomnia", "Increased heart rate and blood pressure", "Growth suppression", "Sedation and weight gain"],
    correct: [0, 1, 2, 3],
    rationale: "Stimulant adverse effects include decreased appetite and weight loss, insomnia, headache, abdominal pain, increased heart rate and blood pressure, growth suppression, and possible tics. Sedation and weight gain are not expected stimulant effects."
  },
  {
    stem: "What should be monitored over time in a child taking a stimulant medication for ADHD, given the risk of growth suppression?",
    options: ["Growth curves", "Serum electrolytes", "Liver function tests", "Thyroid function"],
    correct: 0,
    rationale: "Growth suppression is a known stimulant adverse effect, so growth curves should be tracked over time to detect it."
  },
  {
    stem: "What is the correct timing principle for dosing a stimulant medication in a child with ADHD?",
    options: ["Morning dose with or after breakfast, with the last dose in the early-to-mid afternoon", "A single dose given at bedtime", "Dosing spaced evenly every 4 hours around the clock", "The last dose given in the evening before dinner"],
    correct: 0,
    rationale: "Stimulants are dosed in the morning with or after breakfast, with the last dose given in the early-to-mid afternoon, well before bedtime, to avoid insomnia. Evening dosing is the timing error to watch for."
  },
  {
    stem: "A child's stimulant medication is scheduled for administration at 7 pm. What is the concern with this timing?",
    options: ["Evening dosing risks insomnia", "Evening dosing risks a hypertensive crisis", "Evening dosing risks liver injury", "Evening dosing risks rebound hypertension"],
    correct: 0,
    rationale: "Stimulants should not be dosed in the evening because of the risk of insomnia. The last dose should be given in the early-to-mid afternoon, well before bedtime."
  },
  {
    stem: "Which non-stimulant medication for ADHD works as a norepinephrine reuptake inhibitor?",
    options: ["Atomoxetine (Strattera)", "Guanfacine", "Clonidine", "Methylphenidate"],
    correct: 0,
    rationale: "Atomoxetine (Strattera) is a norepinephrine reuptake inhibitor used as a non-stimulant option for ADHD."
  },
  {
    stem: "How long does atomoxetine typically take to reach full effect?",
    options: ["Several weeks", "Within 30 to 60 minutes", "24 to 48 hours", "Immediately after the first dose"],
    correct: 0,
    rationale: "Unlike stimulants, which act quickly, atomoxetine takes several weeks to reach full effect."
  },
  {
    stem: "Which adverse effects are associated with atomoxetine? Select all that apply.",
    options: ["GI upset and decreased appetite", "Fatigue and dizziness", "Rare liver injury with jaundice and dark urine", "Growth suppression", "Insomnia as the primary adverse effect"],
    correct: [0, 1, 2],
    rationale: "Atomoxetine can cause GI upset, decreased appetite, fatigue, dizziness, and rare liver injury presenting with jaundice and dark urine. Growth suppression and insomnia are stimulant-associated effects, not the primary atomoxetine profile."
  },
  {
    stem: "Which black box warning is specifically associated with atomoxetine?",
    options: ["Suicidal ideation", "Agranulocytosis", "Neuroleptic malignant syndrome", "QT prolongation"],
    correct: 0,
    rationale: "Atomoxetine carries a black box warning for suicidal ideation, a critical teaching point for families starting this medication."
  },
  {
    stem: "Which class of medications includes guanfacine and clonidine when used for ADHD?",
    options: ["Alpha-2 agonists", "Norepinephrine reuptake inhibitors", "Stimulants", "Atypical antipsychotics"],
    correct: 0,
    rationale: "Guanfacine and clonidine are alpha-2 agonists used as ADHD adjuncts, particularly helpful for co-occurring tics or sleep difficulty."
  },
  {
    stem: "What should the nurse monitor for in a child taking an alpha-2 agonist such as clonidine for ADHD?",
    options: ["Sedation, hypotension, and rebound hypertension if stopped abruptly", "Agranulocytosis and neutropenia", "Weight gain and hyperprolactinemia", "Photosensitivity and hepatotoxicity"],
    correct: 0,
    rationale: "Alpha-2 agonists like clonidine can cause sedation and hypotension, and abrupt discontinuation risks rebound hypertension, so these medications must be tapered."
  },
  {
    stem: "What are the two required DSM-5 diagnostic domains for autism spectrum disorder?",
    options: ["Persistent deficits in social communication/interaction, plus restricted/repetitive behaviors, interests, or activities", "Delayed speech and intellectual disability", "Hyperactivity and impulsivity across two settings", "Auditory hallucinations and disorganized behavior"],
    correct: 0,
    rationale: "Autism spectrum disorder requires persistent deficits in social communication and interaction across settings, plus restricted or repetitive behaviors, interests, or activities."
  },
  {
    stem: "Which findings are part of the typical assessment picture for autism spectrum disorder? Select all that apply.",
    options: ["Delayed speech", "Absent or poor eye contact", "Echolalia", "Ritualistic behavior and insistence on sameness", "Sensory sensitivities", "Sustained attention to social stimuli"],
    correct: [0, 1, 2, 3, 4],
    rationale: "The ASD assessment picture includes delayed speech, absent or poor eye contact, absent joint attention, echolalia, repetitive movements, ritualistic behavior and insistence on sameness, sensory sensitivities, and short (not sustained) attention to social stimuli."
  },
  {
    stem: "Which term describes the repetition of another person's words or phrases, sometimes seen in autism spectrum disorder?",
    options: ["Echolalia", "Palilalia", "Confabulation", "Aphasia"],
    correct: 0,
    rationale: "Echolalia is the repetition of another person's words or phrases, a communication finding seen in autism spectrum disorder."
  },
  {
    stem: "What is the strongest known risk factor for autism spectrum disorder?",
    options: ["Having a sibling with autism", "Receiving childhood vaccinations", "Advanced maternal education", "Being an only child"],
    correct: 0,
    rationale: "Having a sibling with autism is the strongest known risk factor. Vaccines do not cause autism spectrum disorder, a point that requires direct, clear correction when raised by families."
  },
  {
    stem: "A parent asks the nurse whether childhood vaccines caused their child's autism spectrum disorder. What is the nurse's best response?",
    options: ["Vaccines do not cause autism spectrum disorder", "Vaccines may contribute in genetically susceptible children", "The evidence on vaccines and autism remains inconclusive", "Only certain vaccines carry this risk"],
    correct: 0,
    rationale: "Vaccines do not cause autism spectrum disorder. This is a firmly established finding, and the nurse should correct the misconception directly and plainly."
  },
  {
    stem: "Which screening tool is used for autism spectrum disorder, and at what ages is it administered?",
    options: ["M-CHAT-R, at 18 and 24 months", "M-CHAT-R, at 6 and 12 months", "CAM, at 12 and 18 months", "Vanderbilt scale, at 24 and 36 months"],
    correct: 0,
    rationale: "The M-CHAT-R is the autism spectrum disorder screening tool, administered at 18 and 24 months of age."
  },
  {
    stem: "What is the priority nursing intervention for a hospitalized child with autism spectrum disorder?",
    options: ["A structured routine with minimal environmental change", "Immediate initiation of social skills training", "Encouraging new peer interactions on the unit", "Introducing a variety of new sensory stimuli"],
    correct: 0,
    rationale: "The priority intervention for a hospitalized child with autism spectrum disorder is a structured routine with minimal environmental change, which comes before social or communication goals."
  },
  {
    stem: "What is the purpose of risperidone and aripiprazole when prescribed for a child with autism spectrum disorder?",
    options: ["To treat irritability and aggression, not the core disorder", "To treat the core social communication deficits", "To treat the restricted and repetitive behaviors directly", "To cure the underlying neurodevelopmental disorder"],
    correct: 0,
    rationale: "Risperidone and aripiprazole treat symptoms such as irritability and aggression; they do not treat the core disorder itself."
  },
  {
    stem: "What should the nurse monitor in a child taking risperidone or aripiprazole for autism-related irritability?",
    options: ["Weight gain and sedation", "Agranulocytosis and fever", "Photosensitivity and hepatotoxicity", "QT prolongation and priapism only"],
    correct: 0,
    rationale: "Weight gain and sedation are the key monitoring parameters for risperidone and aripiprazole when used for irritability and aggression in autism spectrum disorder."
  },
  {
    stem: "At what minimum age can a diagnosis of enuresis be made?",
    options: ["Age 5", "Age 2", "Age 8", "Age 12"],
    correct: 0,
    rationale: "Enuresis, involuntary urination, requires a minimum age of 5 for diagnosis."
  },
  {
    stem: "At what minimum age can a diagnosis of encopresis be made?",
    options: ["Age 4", "Age 2", "Age 6", "Age 10"],
    correct: 0,
    rationale: "Encopresis, involuntary passage of feces, requires a minimum age of 4 for diagnosis."
  },
  {
    stem: "What should be ruled out first when a child presents with enuresis or encopresis?",
    options: ["Medical causes", "Autism spectrum disorder", "ADHD", "A tic disorder"],
    correct: 0,
    rationale: "Medical causes must be ruled out first for both enuresis and encopresis before treating them as primarily behavioral or psychiatric."
  },
  {
    stem: "What is pica?",
    options: ["Persistent eating of non-food substances", "Excessive fear of gaining weight", "Binge eating followed by purging", "Refusal to eat due to sensory sensitivities"],
    correct: 0,
    rationale: "Pica is the persistent eating of non-food substances, such as dirt, paint chips, or paper."
  },
  {
    stem: "Which laboratory workup should the nurse anticipate for a child diagnosed with pica?",
    options: ["Lead level and complete blood count for anemia", "Thyroid function tests", "Liver function tests", "Fasting glucose and lipid panel"],
    correct: 0,
    rationale: "A child with pica should be evaluated for lead toxicity and anemia, since ingested non-food substances can cause both."
  },
  {
    stem: "What effect can stimulant medications have on a child with an underlying tic disorder or Tourette's syndrome?",
    options: ["Stimulants may unmask or worsen tics", "Stimulants have no effect on tic disorders", "Stimulants reliably suppress existing tics", "Stimulants cure the underlying tic disorder"],
    correct: 0,
    rationale: "Stimulant medications may unmask or worsen tics in a child with an underlying tic disorder or Tourette's syndrome, an important consideration before starting therapy."
  }
];
