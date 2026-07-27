// MedSurg II Exam 3 -- Neurodegenerative Disorders -- Knowledge Check
// Covers: Parkinson's disease, Huntington's disease, and ALS. Not on the professor's official
// review list, but requested to be built out for personal mastery: S/S, patient education,
// and nursing interventions for each.
// correct: 0 always -- engine shuffles option order at runtime.
window.QUESTIONS = [
  {
    stem: "Parkinson's disease results from degeneration of which structure and neurotransmitter?",
    options: ["Dopamine-producing neurons in the substantia nigra", "Acetylcholine-producing neurons at the myoneural junction", "Myelin in the central nervous system", "Motor neurons in the anterior horn of the spinal cord"],
    correct: 0,
    rationale: "Parkinson's disease results from progressive degeneration of dopamine-producing neurons in the substantia nigra. Dopamine is needed to regulate smooth, coordinated movement, so its loss produces the classic motor symptoms of the disease."
  },
  {
    stem: "At what age do symptoms of Parkinson's disease typically first appear?",
    options: ["The fifth decade of life, though cases have been diagnosed as early as age 30", "The first decade of life, resolving completely by adulthood", "Exclusively after age 80", "Only in the neonatal period"],
    correct: 0,
    rationale: "Parkinson's disease symptoms usually first appear in the fifth decade of life (the 40s), though cases have been diagnosed as early as age 30. This mid-life onset is important to know since it distinguishes typical presentation from early-onset cases."
  },
  {
    stem: "What are the four cardinal (classic) motor features of Parkinson's disease?",
    options: ["Tremor, rigidity, bradykinesia, and postural instability", "Ascending weakness, hyporeflexia, and paresthesias", "Chorea, dystonia, and dysarthria", "Nuchal rigidity, photophobia, and fever"],
    correct: 0,
    rationale: "The cardinal features of Parkinson's disease are tremor, rigidity, bradykinesia (slowness of movement), and postural instability -- often remembered with the acronym TRAP. These four features form the basis of clinical diagnosis."
  },
  {
    stem: "How is the classic tremor of Parkinson's disease best described?",
    options: ["A resting 'pill-rolling' tremor that decreases with purposeful movement", "An intention tremor that worsens as the hand approaches a target", "A tremor present only during sleep", "A tremor that affects only the voice, sparing the limbs"],
    correct: 0,
    rationale: "The Parkinson's tremor is classically a resting tremor described as 'pill-rolling,' most prominent when the limb is at rest and decreasing with purposeful movement. This distinguishes it from an intention tremor (such as in cerebellar disease), which worsens as the patient reaches for a target."
  },
  {
    stem: "What term describes the type of rigidity seen in Parkinson's disease, felt as ratchet-like resistance during passive range of motion?",
    options: ["Cogwheel rigidity", "Flaccidity", "Spasticity", "Clonus"],
    correct: 0,
    rationale: "Cogwheel rigidity is the ratchet-like resistance felt during passive range of motion in Parkinson's disease, caused by the combination of tremor and rigidity. It is a distinctive finding on physical exam that helps confirm the diagnosis."
  },
  {
    stem: "Which findings reflect bradykinesia and postural instability in Parkinson's disease?",
    options: ["A masked, expressionless face, a shuffling festinating gait, and a stooped posture", "Ascending symmetric weakness beginning in the feet", "A butterfly rash and joint pain", "Sudden severe headache with a stiff neck"],
    correct: 0,
    rationale: "Bradykinesia and postural instability produce a masked, expressionless face (hypomimia), a shuffling festinating gait (small, quickening steps as if chasing the center of gravity), and a stooped, forward-flexed posture. These findings significantly increase fall risk."
  },
  {
    stem: "Besides the classic motor triad, which non-motor symptoms commonly occur in Parkinson's disease?",
    options: ["Depression, cognitive changes, constipation, orthostatic hypotension, and sleep disturbances", "Ascending paralysis and respiratory failure", "Nuchal rigidity and photophobia", "Chorea and psychosis beginning in young adulthood"],
    correct: 0,
    rationale: "Parkinson's disease also produces non-motor symptoms including depression, cognitive changes (which can progress to dementia in later stages), autonomic dysfunction such as constipation and orthostatic hypotension, and sleep disturbances. These non-motor symptoms significantly affect quality of life."
  },
  {
    stem: "How is Parkinson's disease primarily diagnosed?",
    options: ["Clinically, based on history and physical exam findings, often supported by a positive response to levodopa", "Exclusively through a CSF analysis showing elevated protein", "Exclusively through genetic testing for a single causative gene", "Exclusively through an EEG showing characteristic spike-wave activity"],
    correct: 0,
    rationale: "Parkinson's disease is primarily a clinical diagnosis based on history and physical exam findings (the cardinal motor features), often supported by the patient's positive response to levodopa therapy. There is no single definitive lab or imaging test that confirms the diagnosis."
  },
  {
    stem: "How does carbidopa improve the effectiveness of levodopa in carbidopa-levodopa (Sinemet)?",
    options: ["Carbidopa prevents the peripheral breakdown of levodopa, allowing more of the drug to reach the brain", "Carbidopa directly replaces the dopamine lost in Parkinson's disease", "Carbidopa blocks acetylcholine receptors in the CNS", "Carbidopa dissolves the plaques responsible for Parkinson's disease"],
    correct: 0,
    rationale: "Carbidopa inhibits the peripheral breakdown of levodopa before it crosses the blood-brain barrier, allowing more levodopa to reach the brain and be converted to dopamine there. This combination reduces the dose of levodopa needed and limits peripheral side effects such as nausea."
  },
  {
    stem: "What dietary teaching is important for a patient taking levodopa?",
    options: ["High-protein meals can compete with levodopa absorption, so protein intake should be spaced apart from doses", "Levodopa should always be taken with a high-protein meal to enhance absorption", "No dietary considerations are needed with levodopa therapy", "Levodopa should be taken with dairy products to increase effectiveness"],
    correct: 0,
    rationale: "Dietary amino acids from high-protein meals compete with levodopa for absorption and transport across the blood-brain barrier, which can reduce the drug's effectiveness. Patients are often taught to take levodopa on an empty stomach or space protein intake away from dosing times."
  },
  {
    stem: "What is a known long-term complication of levodopa therapy in Parkinson's disease?",
    options: ["Dyskinesias (involuntary movements) and 'on-off' fluctuations in symptom control", "Permanent cure of the underlying dopamine deficiency", "Complete resolution of all non-motor symptoms", "Immediate and permanent loss of effectiveness after the first dose"],
    correct: 0,
    rationale: "With long-term use, levodopa therapy can lead to dyskinesias (involuntary, often writhing movements) and 'on-off' fluctuations, where the patient cycles between periods of good symptom control and periods where symptoms return. These complications often require adjusting the medication regimen over time."
  },
  {
    stem: "Why is a patient with Parkinson's disease at increased risk for skin breakdown?",
    options: ["Bradykinesia, rigidity, and postural changes reduce spontaneous movement and repositioning, increasing pressure on the skin", "Parkinson's disease directly causes a rash on the trunk and extremities", "Levodopa therapy causes a universal skin allergy", "Skin breakdown is unrelated to Parkinson's disease and reflects poor hygiene only"],
    correct: 0,
    rationale: "Patients with Parkinson's disease are at risk for skin breakdown because bradykinesia, rigidity, and postural changes reduce spontaneous movement and self-repositioning, allowing sustained pressure over bony prominences. Regular repositioning and skin assessment are important nursing interventions to prevent this complication."
  },
  {
    stem: "Which nursing interventions are priorities for a patient with Parkinson's disease?",
    options: ["Fall prevention, swallowing evaluation, promoting independence, and encouraging physical and occupational therapy", "Strict bedrest to prevent all movement-related injury", "Withholding physical therapy since exercise worsens tremor", "Restricting all oral intake due to swallowing risk"],
    correct: 0,
    rationale: "Nursing priorities for Parkinson's disease include fall prevention given the postural instability and shuffling gait, swallowing evaluation given the risk of dysphagia and aspiration from bradykinesia, promoting independence in ADLs for as long as possible, and encouraging physical and occupational therapy to maintain mobility and function."
  },
  {
    stem: "Why are small, frequent meals often recommended for a patient with Parkinson's disease?",
    options: ["Bradykinesia and dysphagia can make eating slow and tiring, so smaller more frequent meals reduce fatigue and aspiration risk", "Small meals cure the underlying dopamine deficiency", "Large meals are required to overcome medication side effects", "Meal size has no relationship to Parkinson's symptoms"],
    correct: 0,
    rationale: "Bradykinesia and dysphagia make eating a slow, effortful process for patients with Parkinson's disease, so small, frequent meals reduce fatigue during eating and help lower the risk of aspiration compared to large meals that take longer to finish."
  },
  {
    stem: "How is Huntington's disease inherited, and what is the risk to offspring of an affected parent?",
    options: ["Autosomal dominant, with a 50% risk of inheriting the gene for each child of an affected parent", "Autosomal recessive, requiring both parents to carry the gene", "X-linked recessive, primarily affecting male offspring", "Not genetic; it results entirely from environmental exposure"],
    correct: 0,
    rationale: "Huntington's disease is inherited in an autosomal dominant pattern, meaning each child of an affected parent has a 50% risk of inheriting the gene and eventually developing the disease. Genetic counseling and testing are important considerations for at-risk family members."
  },
  {
    stem: "Huntington's disease involves progressive degeneration of which brain structure, and at what typical age does onset occur?",
    options: ["The basal ganglia (caudate nucleus), with onset typically between ages 30 and 50", "The cerebellum, with onset typically in early childhood", "The spinal cord anterior horn, with onset typically after age 70", "The peripheral nerves, with onset typically in adolescence"],
    correct: 0,
    rationale: "Huntington's disease involves progressive degeneration of the basal ganglia, particularly the caudate nucleus, and typically has an onset between ages 30 and 50. This mid-life onset means many patients have already had children before symptoms appear, which is part of why genetic counseling is emphasized."
  },
  {
    stem: "What is the hallmark motor finding of Huntington's disease?",
    options: ["Chorea, involuntary, irregular, jerky, and dance-like movements", "A resting pill-rolling tremor", "Ascending symmetric weakness", "Cogwheel rigidity with a shuffling gait"],
    correct: 0,
    rationale: "Chorea, involuntary, irregular, jerky, dance-like movements, is the hallmark motor finding of Huntington's disease. Unlike the resting tremor and rigidity of Parkinson's disease, chorea involves constant, unpredictable movement of the limbs, trunk, and face."
  },
  {
    stem: "Besides chorea, which other symptom categories are affected in Huntington's disease?",
    options: ["Progressive cognitive decline (dementia) and psychiatric symptoms such as depression, irritability, and psychosis", "Only motor symptoms, with cognition and mood fully preserved", "Only sensory loss, with motor function fully preserved", "Only autonomic symptoms such as bladder and bowel dysfunction"],
    correct: 0,
    rationale: "Huntington's disease affects three domains: motor (chorea), cognitive (progressive dementia), and psychiatric (depression, irritability, and psychosis, with an increased risk of suicide). This combination makes Huntington's disease a particularly challenging condition for patients and families."
  },
  {
    stem: "Why is nutrition a significant nursing concern for a patient with Huntington's disease?",
    options: ["Constant chorea increases caloric expenditure while also increasing dysphagia and aspiration risk", "Huntington's disease has no effect on nutritional needs", "Patients with Huntington's disease require calorie restriction", "Chorea only affects the lower extremities, sparing swallowing"],
    correct: 0,
    rationale: "The constant involuntary movement of chorea significantly increases caloric expenditure, so patients often need increased caloric intake to maintain weight. At the same time, chorea affecting the muscles of swallowing increases dysphagia and aspiration risk, making nutrition management a significant nursing challenge."
  },
  {
    stem: "Which nursing interventions are priorities for a patient with Huntington's disease?",
    options: ["Injury and fall prevention related to chorea, nutritional support, psychiatric symptom monitoring, and genetic counseling referral for family members", "Strict immobilization to prevent all movement", "Withholding information from family members to reduce distress", "Encouraging high-protein meals timed with medication doses"],
    correct: 0,
    rationale: "Nursing priorities include injury and fall prevention related to the involuntary chorea movements, nutritional support given increased caloric needs and dysphagia risk, monitoring for psychiatric symptoms including suicide risk, and referring at-risk family members for genetic counseling given the autosomal dominant inheritance pattern."
  },
  {
    stem: "What is the disease course and prognosis of Huntington's disease?",
    options: ["Progressive and ultimately fatal, typically over 15 to 20 years after symptom onset", "Self-limiting, with full recovery expected within a few years", "Relapsing and remitting, with long periods of complete remission", "Stable and non-progressive once symptoms first appear"],
    correct: 0,
    rationale: "Huntington's disease follows a progressive, ultimately fatal course, typically over 15 to 20 years after symptom onset. There is currently no cure, so management focuses on symptom control, safety, and supporting quality of life for the patient and family throughout the disease course."
  },
  {
    stem: "ALS (amyotrophic lateral sclerosis) involves progressive degeneration of which type of neuron?",
    options: ["Upper and lower motor neurons", "Sensory neurons of the dorsal root ganglia", "Dopamine-producing neurons of the substantia nigra", "Autonomic neurons of the sympathetic chain"],
    correct: 0,
    rationale: "ALS involves progressive degeneration of both upper and lower motor neurons. This leads to progressive muscle weakness, atrophy, and eventually paralysis, while other neuron types (sensory and typically cognitive) are largely spared."
  },
  {
    stem: "Which findings are characteristic of the progressive muscle involvement in ALS?",
    options: ["Progressive muscle weakness, atrophy, and fasciculations (muscle twitching)", "A resting pill-rolling tremor with rigidity", "Chorea and dance-like involuntary movements", "Nuchal rigidity with photophobia"],
    correct: 0,
    rationale: "ALS produces progressive muscle weakness, atrophy (wasting from denervation), and fasciculations (visible muscle twitching) as motor neurons degenerate. These findings progressively spread to involve more muscle groups over the course of the disease."
  },
  {
    stem: "What are bulbar symptoms in ALS, and what causes them?",
    options: ["Dysarthria and dysphagia, caused by degeneration of motor neurons controlling the muscles of speech and swallowing", "Visual disturbances, caused by optic nerve demyelination", "Chorea of the face, caused by basal ganglia degeneration", "Hearing loss, caused by cranial nerve VIII compression"],
    correct: 0,
    rationale: "Bulbar symptoms in ALS -- dysarthria (difficulty speaking) and dysphagia (difficulty swallowing) -- result from degeneration of the motor neurons controlling the muscles of the mouth, throat, and larynx. These symptoms significantly increase aspiration risk and often require communication and nutrition support."
  },
  {
    stem: "What is typically preserved in ALS despite the progressive motor decline?",
    options: ["Sensation and cognition are typically preserved", "Sensation and cognition are typically lost early in the disease", "Only sensation is preserved, while cognition declines rapidly", "Only cognition is preserved, while sensation is lost early"],
    correct: 0,
    rationale: "ALS typically spares sensory function and cognition, meaning patients remain fully aware and can feel normally even as they lose motor control of their muscles. This preserved awareness of a progressively failing body is one of the most psychologically difficult aspects of the disease for patients and families."
  },
  {
    stem: "What is the most common cause of death in ALS?",
    options: ["Respiratory muscle failure", "Cardiac arrhythmia", "Aspiration pneumonia occurring independently of respiratory decline", "Gastrointestinal hemorrhage"],
    correct: 0,
    rationale: "Respiratory muscle failure is the most common cause of death in ALS, as the degeneration of motor neurons eventually affects the diaphragm and other muscles of respiration. Monitoring respiratory function, such as vital capacity, is therefore a critical ongoing nursing assessment."
  },
  {
    stem: "Which finding helps distinguish ALS from other progressive neurologic conditions that affect elimination?",
    options: ["Anal and bladder sphincter function usually remains intact in ALS", "ALS always causes early loss of bowel and bladder control", "Bowel and bladder function is affected before any motor symptoms appear in ALS", "ALS causes permanent urinary retention from the earliest stage of disease"],
    correct: 0,
    rationale: "A key distinguishing feature of ALS is that anal and bladder sphincter function usually remains intact, even as the disease causes progressive weakness, atrophy, and eventually respiratory failure elsewhere. This is an important teaching point, since it is not something to assume is affected in every progressive neurologic disease."
  },
  {
    stem: "Which medication is used to modestly slow disease progression in ALS?",
    options: ["Riluzole (Rilutek)", "Levodopa-carbidopa", "Dexamethasone", "Ceftriaxone"],
    correct: 0,
    rationale: "Riluzole (Rilutek) is used in ALS to modestly slow disease progression, though it does not halt or reverse the disease. There is currently no cure for ALS, so care focuses on symptom management, functional support, and quality of life."
  },
  {
    stem: "Which nursing interventions are priorities for a patient with ALS as the disease progresses?",
    options: ["Monitoring respiratory status, providing communication aids as speech declines, supporting nutrition (including possible feeding tube placement), and psychosocial support", "Encouraging vigorous resistance exercise to rebuild motor neurons", "Withholding communication aids to encourage the patient to keep speaking", "Restricting all discussion of prognosis with the patient and family"],
    correct: 0,
    rationale: "As ALS progresses, nursing priorities include monitoring respiratory status closely, providing communication aids (such as picture boards or speech-generating devices) as speech declines, supporting nutrition which may eventually require a feeding tube as swallowing worsens, and providing psychosocial support given the patient's preserved awareness of their progressive decline."
  },
  {
    stem: "Why is advance care planning particularly important to address early with a patient newly diagnosed with ALS?",
    options: ["Because ALS is a progressive, ultimately fatal disease and the patient retains full cognitive capacity to participate in decisions about future care, including ventilatory support", "Because ALS patients lose the capacity for decision-making almost immediately after diagnosis", "Because advance care planning is not relevant since ALS has a cure", "Because family members must make all decisions without patient input from the time of diagnosis"],
    correct: 0,
    rationale: "Because ALS is progressive and ultimately fatal, and because patients retain full cognitive function throughout the disease course, addressing advance care planning early, while the patient can fully participate, allows the patient to make informed decisions about future care, including choices about non-invasive ventilation, tracheostomy, and end-of-life preferences."
  }
];
