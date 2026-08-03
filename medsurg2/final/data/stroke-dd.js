// MedSurg II FINAL EXAM REVIEW -- Cerebrovascular Disorders / Stroke (Ch 62) -- Deep Drill
// 12 questions, 90% hard / 10% medium, no easy. NEW scenarios distinct from exam3/data/stroke-dd.js (16 Q, very
// comprehensive) and from the final simulator's Ch62 questions. Fills gaps: ischemic/hemorrhagic epidemiology,
// ischemic subtypes (cardioembolic, cryptogenic, small-vessel), hemorrhagic subtypes (AVM, aneurysm), the 18-month
// hemorrhagic recovery plateau, nonmodifiable risk factors, perceptual disturbances, deficit categories, CT timing,
// bleeding as most common tPA side effect (distinct framing from the ICH-complication question already in the bank).
// correct: 0 always -- engine shuffles option order at runtime.
window.QUESTIONS = [
  {
    stem: "A nursing student asks what percentage of strokes are ischemic versus hemorrhagic. What is the nurse's most accurate response?",
    options: ["Approximately 87% of strokes are ischemic and 13% are hemorrhagic", "Approximately 50% of strokes are ischemic and 50% are hemorrhagic", "Approximately 13% of strokes are ischemic and 87% are hemorrhagic", "Ischemic and hemorrhagic strokes occur with equal rarity, each under 25% of cases"],
    correct: 0,
    rationale: "Ischemic strokes account for approximately 87% of all strokes, caused by a clot or blockage, while hemorrhagic strokes, caused by bleeding, account for approximately 13%. This distribution reflects why ischemic stroke protocols and tPA eligibility are such a major focus of stroke care."
  },
  {
    stem: "A patient with a history of atrial fibrillation is diagnosed with an acute ischemic stroke. What underlying mechanism does the nurse recognize as the likely cause of this stroke?",
    options: ["Cardioembolic stroke, from a clot forming in the fibrillating atria that traveled to the brain", "Large artery thrombosis from atherosclerotic plaque rupture in the carotid artery", "Small penetrating artery thrombosis affecting a deep, single perforating vessel", "Cryptogenic stroke, since no clear cause can be identified in this patient"],
    correct: 0,
    rationale: "In a patient with atrial fibrillation, an ischemic stroke is most likely cardioembolic in origin, resulting from a clot that formed in the poorly contracting, fibrillating atria and traveled to occlude a cerebral vessel. This is distinct from large artery thrombosis, small vessel disease, or a cryptogenic stroke with no identifiable cause, since the A-fib provides a clear embolic source."
  },
  {
    stem: "A patient presents with a sudden, severe headache and is found to have a ruptured berry aneurysm on cerebral angiography. What type of stroke does this represent?",
    options: ["Hemorrhagic stroke", "Ischemic stroke from large artery thrombosis", "Ischemic stroke from small penetrating artery disease", "Cryptogenic ischemic stroke"],
    correct: 0,
    rationale: "A ruptured cerebral aneurysm causes bleeding into the surrounding brain tissue or subarachnoid space, making this a hemorrhagic stroke, one of the recognized causes of this stroke type along with intracerebral hemorrhage, subarachnoid hemorrhage, and arteriovenous malformation. This is distinct from any ischemic stroke subtype, which involves a blockage rather than bleeding."
  },
  {
    stem: "A patient sustains a hemorrhagic stroke from a ruptured arteriovenous malformation (AVM). The family asks how this differs structurally from a cerebral aneurysm. What is the nurse's best explanation?",
    options: ["An AVM is an abnormal tangle of blood vessels connecting arteries and veins directly, while an aneurysm is a weakened, bulging area in a single vessel wall", "An AVM and a cerebral aneurysm are structurally identical and differ only in their location within the brain", "An AVM occurs only in the venous system, while an aneurysm occurs only in the arterial system", "An AVM is always congenital and an aneurysm is always caused by trauma, with no overlap in causes"],
    correct: 0,
    rationale: "An AVM is an abnormal tangle of blood vessels that directly connects arteries and veins without a normal capillary bed between them, while a cerebral aneurysm is a weakened, bulging area in the wall of a single vessel. Both are recognized causes of hemorrhagic stroke but are structurally distinct entities, not identical or defined solely by venous versus arterial location or a strict congenital-versus-traumatic origin."
  },
  {
    stem: "A family member asks the nurse how recovery timelines differ between ischemic and hemorrhagic stroke. What is the nurse's most accurate response?",
    options: ["Ischemic stroke recovery generally plateaus around 6 months, while hemorrhagic stroke recovery is slower, typically plateauing around 18 months", "Both ischemic and hemorrhagic stroke recovery plateau at the same 6-month mark", "Hemorrhagic stroke recovery plateaus faster, around 3 months, compared to ischemic stroke", "Recovery timelines cannot be estimated for either stroke type and vary with no general pattern"],
    correct: 0,
    rationale: "Functional recovery after ischemic stroke usually plateaus around 6 months, while hemorrhagic stroke recovery is typically slower, plateauing around 18 months, reflecting the more extensive tissue disruption often seen with bleeding into brain tissue. These are distinct timelines, not identical, and hemorrhagic recovery is slower, not faster, than ischemic recovery."
  },
  {
    stem: "A bystander uses the FAST mnemonic to assess a person who suddenly cannot lift one arm as high as the other when asked. Which component of the FAST assessment does this finding represent?",
    options: ["Arm weakness", "Face drooping", "Speech difficulty", "Time to call 911"],
    correct: 0,
    rationale: "Asking a person to lift both arms and observing that one arm drifts down or cannot be lifted as high assesses the 'A' in FAST, arm weakness. Face drooping is assessed by asking the person to smile, speech difficulty by their ability to speak clearly, and 'time' refers to noting when symptoms started and calling 911 promptly, not a physical exam finding."
  },
  {
    stem: "A nurse is reviewing a patient's stroke risk factors. Which of the following is considered a nonmodifiable risk factor for stroke?",
    options: ["Being male and older than 55 years of age", "A history of uncontrolled hypertension", "Current smoking and heavy alcohol use", "Elevated LDL cholesterol"],
    correct: 0,
    rationale: "Male gender and age older than 55 are nonmodifiable risk factors for stroke, meaning they cannot be changed through intervention. Hypertension, smoking and alcohol use, and elevated cholesterol are all modifiable risk factors that can be addressed through lifestyle changes or medical management."
  },
  {
    stem: "A patient recovering from an ischemic stroke reports difficulty accurately judging distances and spatial relationships when reaching for objects. What category of stroke-related symptom does the nurse recognize this represents?",
    options: ["A perceptual disturbance", "A verbal deficit", "An emotional deficit", "A cardiovascular complication"],
    correct: 0,
    rationale: "Difficulty judging distances and spatial relationships is a perceptual disturbance, one of the recognized manifestations of ischemic stroke depending on the location and size of the affected brain area. This is distinct from verbal deficits (speech and language), emotional deficits (mood and affect changes), and is not a cardiovascular complication."
  },
  {
    stem: "A patient post-stroke is unable to recognize familiar faces despite intact vision. Which broad category of post-stroke neurologic deficit does the nurse document this finding under?",
    options: ["Cognitive deficit", "Motor deficit", "Sensory deficit", "Visual field deficit"],
    correct: 0,
    rationale: "Inability to recognize familiar faces despite intact vision reflects a cognitive processing deficit rather than a primary visual field problem, motor impairment, or basic sensory loss. Post-stroke neurologic deficits are commonly categorized as visual field, motor, sensory, verbal, cognitive, and emotional, and this finding falls under the cognitive category."
  },
  {
    stem: "A patient with acute stroke symptoms arrives in the emergency department. What is the target timeframe for completing the initial noncontrast CT scan?",
    options: ["Within 25 minutes or less", "Within 60 minutes, matching the tPA administration goal", "Within 3 hours, matching the tPA treatment window", "Within 24 hours of symptom onset"],
    correct: 0,
    rationale: "The initial noncontrast CT scan should be completed within 25 minutes or less of a suspected stroke patient's arrival, since this scan determines whether the stroke is ischemic or hemorrhagic and directly drives the treatment decision. This is distinct from the 60-minute door-to-needle tPA administration goal and the 3-hour treatment window for tPA eligibility."
  },
  {
    stem: "A patient is diagnosed with an ischemic stroke, and despite an extensive diagnostic workup, no clear source such as atrial fibrillation, large artery disease, or small vessel disease can be identified. How does the nurse document this stroke classification?",
    options: ["Cryptogenic stroke", "Cardioembolic stroke", "Large artery thrombosis", "Hemorrhagic stroke"],
    correct: 0,
    rationale: "A cryptogenic stroke is an ischemic stroke for which no clear cause can be identified despite thorough workup, distinct from cardioembolic stroke (a clear cardiac source like A-fib), large artery thrombosis (identifiable atherosclerotic disease), or hemorrhagic stroke (which involves bleeding rather than a blockage of unclear origin)."
  },
  {
    stem: "A patient is educated about the most common side effect associated with IV tPA administration for ischemic stroke. What does the nurse identify as this most common side effect?",
    options: ["Bleeding", "Nausea and vomiting", "Hypotension", "Allergic reaction"],
    correct: 0,
    rationale: "Bleeding is the most common side effect of IV tPA, since the medication works by dissolving clots, which inherently increases bleeding risk throughout the body, including the risk of intracranial hemorrhage. While nausea, hypotension, and allergic reactions can occur with various medications, bleeding is the hallmark risk specifically associated with thrombolytic therapy."
  }
];
