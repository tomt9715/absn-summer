window.QUESTIONS = [
  {
    stem: "Which three physiologic responses are common to ALL types of shock, regardless of the initial cause?",
    options: ["Hypoperfusion of tissues, hypermetabolism, and activation of the inflammatory response", "Hypotension, bradycardia, and decreased urinary output across all shock states", "Vasoconstriction, increased cardiac output, and elevated serum lactate in every shock type", "Decreased SVR, fluid shifting into the interstitium, and compensatory tachycardia"],
    correct: 0,
    rationale: "Regardless of cause, all shock shares three universal physiologic responses: hypoperfusion of tissues, hypermetabolism, and activation of the inflammatory response. These occur even when the hemodynamic profiles differ between shock types."
  },
  {
    stem: "Which shock type is most commonly seen as the initiating cause of MODS?",
    options: ["Septic shock", "Hypovolemic shock", "Cardiogenic shock", "Neurogenic shock"],
    correct: 0,
    rationale: "MODS may complicate any form of shock, but it is most commonly seen in patients with septic shock and frequently occurs at the end of the septic shock continuum when tissue perfusion can no longer be effectively restored."
  },
  {
    stem: "A patient in the compensatory stage of shock will most likely have which acid-base finding, and why?",
    options: ["Respiratory alkalosis, because hyperventilation blows off CO2", "Metabolic acidosis, because lactic acid has already accumulated throughout all tissues", "Respiratory acidosis, because the patient is hypoventilating due to hypoxia", "Metabolic alkalosis, because the kidneys are retaining bicarbonate to compensate"],
    correct: 0,
    rationale: "In the compensatory stage, tachypnea causes CO2 to be blown off, lowering PaCO2 and producing respiratory alkalosis. Metabolic acidosis develops later in the progressive stage as lactic acid accumulates from anaerobic metabolism."
  },
  {
    stem: "Which finding distinguishes neurogenic shock from all other types of shock?",
    options: ["Bradycardia with warm, flushed skin below the level of injury", "Tachycardia with cold, clammy skin and narrowing pulse pressure", "Elevated SVR with high CVP and jugular venous distension", "Urticaria and bronchospasm triggered by an identifiable allergen exposure"],
    correct: 0,
    rationale: "Neurogenic shock is uniquely characterized by bradycardia (loss of sympathetic tone removes the normal tachycardic response) and warm, flushed skin below the injury. All other shock types present with tachycardia."
  },
  {
    stem: "In hypovolemic shock, which sequence correctly describes the pathophysiology from the initial insult to inadequate perfusion?",
    options: ["Decreased intravascular volume, decreased venous return, decreased ventricular filling, decreased stroke volume, decreased cardiac output, BP drops", "Decreased cardiac output, decreased ventricular filling, decreased stroke volume, decreased venous return, BP drops", "Increased SVR, decreased venous return, decreased preload, decreased cardiac output, BP drops", "Decreased BP, decreased venous return, decreased stroke volume, decreased intravascular volume, decreased cardiac output"],
    correct: 0,
    rationale: "Hypovolemic shock follows this sequence: decreased intravascular volume leads to decreased venous return, which causes decreased ventricular filling, then decreased stroke volume, then decreased cardiac output, and ultimately a drop in BP with inadequate tissue perfusion."
  },
  {
    stem: "Which hemodynamic finding is elevated in BOTH hypovolemic AND cardiogenic shock?",
    options: ["Systemic vascular resistance (SVR)", "Central venous pressure (CVP)", "Cardiac output", "Pulmonary capillary wedge pressure (PCWP)"],
    correct: 0,
    rationale: "Both hypovolemic and cardiogenic shock trigger compensatory vasoconstriction, raising SVR. They differ in CVP and PCWP: hypovolemic shock has LOW CVP/PCWP (no volume), while cardiogenic shock has HIGH CVP/PCWP (fluid backs up behind the failing pump)."
  },
  {
    stem: "A patient in early septic shock is most likely to present with which skin finding, and why?",
    options: ["Warm, flushed skin, because massive vasodilation reduces SVR and increases peripheral blood flow", "Cold, clammy skin, because compensatory vasoconstriction shunts blood away from the periphery", "Mottled skin with petechiae, because microvascular coagulopathy has already developed", "Jaundice, because hepatic failure from endotoxin has occurred within the first hours of sepsis"],
    correct: 0,
    rationale: "Early septic shock is warm and hyperdynamic: the dysregulated inflammatory response causes massive vasodilation and low SVR, which increases peripheral blood flow and produces warm, flushed skin. Cold, clammy skin develops in late septic shock when cardiac output finally falls."
  },
  {
    stem: "What is the minimum MAP required to sustain life, and what happens when it falls below this threshold?",
    options: ["65 mmHg; inadequate blood flow to vital organs causes syncope, shock, and organ failure", "55 mmHg; compensatory mechanisms fully maintain perfusion until MAP drops below this point", "80 mmHg; values below this level indicate hypertensive crisis requiring emergent intervention", "45 mmHg; values below this threshold trigger irreversible MODS within minutes"],
    correct: 0,
    rationale: "MAP must exceed 65 mmHg to sustain life. When it falls below this threshold, organs do not receive adequate perfusion pressure, leading to syncope, shock, and progressive organ failure. This is why vasopressor therapy targets MAP >= 65 mmHg."
  },
  {
    stem: "Which serum lactate level triggers a sepsis/shock protocol, and what does an elevated lactate indicate at the cellular level?",
    options: ["Lactate >= 2 mmol/L; cells are hypoxic and have shifted to anaerobic metabolism", "Lactate >= 4 mmol/L; cells have reached irreversible failure and MODS is inevitable", "Lactate >= 1 mmol/L; early compensatory mechanisms have been activated but perfusion is adequate", "Lactate >= 6 mmol/L; this threshold triggers the protocol because lower values are within normal limits"],
    correct: 0,
    rationale: "Lactate >= 2 mmol/L triggers the sepsis/shock protocol. Elevated lactate means cells are hypoxic and producing lactic acid through anaerobic metabolism instead of aerobic. Lactate >= 4 mmol/L specifically triggers aggressive fluid resuscitation (30 mL/kg bolus)."
  },
  {
    stem: "In the sepsis 3-hour bundle, why must blood cultures be drawn BEFORE antibiotics are administered?",
    options: ["Antibiotics alter culture results, making it impossible to identify the causative organism accurately", "Blood cultures must be incubated for 3 hours before antibiotics reach therapeutic levels", "Drawing cultures first ensures the antibiotic order is verified by pharmacy before administration", "Blood cultures drawn after antibiotics will always show false positives rather than false negatives"],
    correct: 0,
    rationale: "Blood cultures must be drawn before antibiotics because antibiotics can kill or suppress the causative organism, making it impossible to identify it accurately. However, this should not delay antibiotic administration by more than 45 minutes."
  },
  {
    stem: "Which fluid resuscitation threshold triggers a minimum 30 mL/kg crystalloid bolus in the sepsis 3-hour bundle?",
    options: ["Hypotension OR lactate >= 4 mmol/L", "Lactate >= 2 mmol/L alone, regardless of blood pressure", "Systolic BP below 70 mmHg with a lactate of any level", "MAP below 65 mmHg with evidence of MODS in two or more organ systems"],
    correct: 0,
    rationale: "The 30 mL/kg crystalloid bolus is initiated when the patient has hypotension OR a lactate >= 4 mmol/L. Lactate >= 2 triggers the protocol and monitoring, but the aggressive fluid bolus threshold is >= 4 or hypotension."
  },
  {
    stem: "Why are vasopressors required to be administered through a central venous line rather than a peripheral IV?",
    options: ["Vasopressors are caustic and highly concentrated; peripheral extravasation causes severe tissue necrosis", "Central lines provide faster drug delivery to the heart, which is required for the medication to work", "Peripheral IVs cannot handle the flow rate required for vasopressor infusions", "Central access is required only to monitor CVP, not specifically because of the drug properties"],
    correct: 0,
    rationale: "Vasopressors must go through a central line because they are highly concentrated and caustic drugs. If they extravasate from a peripheral vein into surrounding tissue, they cause severe, potentially irreversible tissue necrosis. This is a patient safety requirement, not just a preference."
  },
  {
    stem: "A nurse is titrating a norepinephrine drip. Which parameter is the primary target for titration?",
    options: ["Mean arterial pressure (MAP), targeting >= 65 mmHg", "Heart rate, targeting below 100 bpm", "Systolic blood pressure, targeting above 90 mmHg", "Central venous pressure (CVP), targeting 8 to 12 mmHg"],
    correct: 0,
    rationale: "Vasopressors are titrated to maintain MAP >= 65 mmHg, which is the minimum pressure required to sustain organ perfusion. The nurse adjusts the drip rate based on the prescribed target MAP and the patient's hemodynamic response."
  },
  {
    stem: "Which vasoactive medication carries a specific nursing concern for chest pain during administration?",
    options: ["Dobutamine, because it increases myocardial oxygen demand", "Dopamine, because it causes reflex bradycardia at high doses", "Norepinephrine, because it causes coronary vasospasm at any dose", "Vasopressin, because it directly depresses myocardial contractility"],
    correct: 0,
    rationale: "Dobutamine increases myocardial contractility and cardiac output, but this comes at the cost of increased myocardial oxygen demand. Nurses must monitor for chest pain, which indicates the heart is being stressed beyond its oxygen supply."
  },
  {
    stem: "In cardiogenic shock, which subtype carries the greatest risk, and which diagnostic finding is most specific to this subtype?",
    options: ["Coronary cardiogenic shock from anterior wall MI; troponin and BNP are the key labs", "Obstructive cardiogenic shock from tension pneumothorax; low CVP and tracheal deviation are the key findings", "Coronary cardiogenic shock from inferior wall MI; ST elevation in leads II, III, and aVF is most specific", "Obstructive cardiogenic shock from cardiac tamponade; Beck's triad is the key diagnostic finding"],
    correct: 0,
    rationale: "Anterior wall MI carries the greatest risk for coronary cardiogenic shock because it involves the largest myocardial territory (left anterior descending artery). Key diagnostic labs include troponin (myocardial injury) and BNP (ventricular stress), alongside lactic acid for perfusion."
  },
  {
    stem: "Which intervention is CONTRAINDICATED as first-line treatment in cardiogenic shock, and why?",
    options: ["Aggressive IV fluid bolus, because it worsens pulmonary edema in an already-congested patient", "Supplemental oxygen, because hyperoxia causes coronary vasoconstriction in this population", "Vasopressors, because they increase afterload and further reduce cardiac output acutely", "Inotropes, because they increase myocardial oxygen demand in an already-ischemic heart"],
    correct: 0,
    rationale: "Aggressive fluid resuscitation is contraindicated as first-line treatment in cardiogenic shock. These patients already have high CVP and PCWP from fluid backing up behind the failing pump; giving large fluid volumes worsens pulmonary edema. Oxygenation and correcting the underlying cause are the priorities."
  },
  {
    stem: "Which finding differentiates cardiogenic shock from hypovolemic shock on physical assessment?",
    options: ["Jugular venous distension and crackles in cardiogenic shock versus flat neck veins in hypovolemic shock", "Warm skin and bounding pulse in cardiogenic shock versus cold, clammy skin in hypovolemic shock", "Bradycardia and hypertension in cardiogenic shock versus tachycardia and hypotension in hypovolemic shock", "High urine output in cardiogenic shock versus oliguria in hypovolemic shock"],
    correct: 0,
    rationale: "Cardiogenic shock presents with jugular venous distension (high CVP from fluid backing up) and crackles (pulmonary edema). Hypovolemic shock has flat neck veins and no crackles because there is no volume overload; the problem is volume deficit."
  },
  {
    stem: "A patient with anaphylactic shock has received epinephrine IM and IV fluids. Which medication is given next specifically to prevent a biphasic allergic reaction?",
    options: ["Corticosteroids", "Diphenhydramine", "A bronchodilator", "A second dose of epinephrine"],
    correct: 0,
    rationale: "Corticosteroids are given after epinephrine to reduce the late-phase inflammatory response and prevent a biphasic reaction, which is a recurrence of anaphylaxis hours after the initial episode. Diphenhydramine addresses histamine-mediated symptoms but does not prevent biphasic reactions."
  },
  {
    stem: "Which positioning is appropriate for a patient in hypovolemic shock, and which position should be avoided?",
    options: ["Modified Trendelenburg (legs elevated); avoid full Trendelenburg due to aspiration risk and increased ICP", "Full Trendelenburg; avoid modified Trendelenburg because it reduces venous return", "Supine flat; avoid any elevation of the legs because it reduces preload", "High Fowler's; avoid any head-down position because it worsens hypotension"],
    correct: 0,
    rationale: "Modified Trendelenburg (legs elevated, head flat) is used to increase venous return in hypovolemic and distributive shock. Full Trendelenburg is avoided because it increases aspiration risk and can raise intracranial pressure. High Fowler's is appropriate for cardiogenic shock to reduce preload."
  },
  {
    stem: "What is the nutritional priority in all forms of shock, and within what timeframe should enteral nutrition be initiated in the ICU?",
    options: ["Enteral nutrition within 24 to 48 hours of ICU admission if hemodynamically stable; enteral route is preferred over parenteral", "Parenteral nutrition within 6 hours of ICU admission regardless of hemodynamic stability", "Enteral nutrition only after all vasopressors have been discontinued and the patient is fully stable", "No nutritional support until the shock state is fully resolved to prevent gut complications"],
    correct: 0,
    rationale: "Shock creates a hypermetabolic, hypercatabolic state requiring early nutritional support. Enteral nutrition should begin within 24 to 48 hours of ICU admission if hemodynamically stable. Enteral is always preferred over parenteral because it preserves gut integrity and reduces bacterial translocation."
  },
  {
    stem: "MODS is defined as altered function in how many organ systems, and which population carries the highest risk?",
    options: ["Two or more organ systems; older adults, due to immune compromise and lack of physiologic reserve", "Three or more organ systems; patients under 30, due to the hyperinflammatory response in younger patients", "Any single organ system failing; patients with septic shock exclusively", "Four or more organ systems; only patients who have already failed antibiotic therapy"],
    correct: 0,
    rationale: "MODS is defined as altered function in 2 or more organ systems. Older adults are at highest risk because they have reduced physiologic reserve and immune compromise, meaning they cannot mount an adequate compensatory response and deteriorate faster."
  },
  {
    stem: "In MODS, which organ system typically fails first, and what is driving the cascade of failure in subsequent organs?",
    options: ["Lungs (ARDS); ongoing systemic inflammation, cytokine storm, and microvascular coagulopathy damage distant organs", "Kidneys; decreased renal perfusion from the initial shock triggers retrograde failure in all other organs", "Heart; pump failure from myocardial depression drives hypoperfusion to all other organ systems", "GI tract; bacterial translocation is the first event and directly causes failure in all other organs"],
    correct: 0,
    rationale: "The lungs typically fail first in MODS, presenting as ARDS. The cascade is driven by the systemic inflammatory response (SIRS), cytokine storm (TNF-alpha, IL-1, IL-6), and endothelial damage leading to microvascular coagulopathy and ischemia in distant organs."
  },
  {
    stem: "Which statement correctly describes the nurse's role in titrating vasoactive medications?",
    options: ["The nurse adjusts the drip rate based on the prescribed target parameter and the patient's response", "The nurse must call the provider for each dose change, as titration requires a new order every time", "The nurse maintains a fixed infusion rate set by the provider and does not adjust independently", "The nurse may only titrate vasopressors down, never up, without a provider at the bedside"],
    correct: 0,
    rationale: "Nurses independently titrate vasoactive medications based on the prescribed target (such as MAP >= 65 mmHg) and the patient's hemodynamic response. This is a critical ICU nursing skill that does not require a new provider order for each adjustment within the titration protocol."
  },
  {
    stem: "A patient's serum lactate was 5.8 mmol/L on admission and is now 3.1 mmol/L after 4 hours of treatment. How should the nurse interpret this trend?",
    options: ["The patient is responding to treatment; falling lactate indicates improving tissue perfusion", "The patient is deteriorating; any lactate above 2 mmol/L indicates ongoing irreversible cell death", "The lactate trend is not clinically meaningful; only single-point values above 4 mmol/L matter", "The falling lactate indicates the patient no longer needs vasopressors and fluids should be stopped"],
    correct: 0,
    rationale: "Lactate trend is more important than a single value. A falling lactate indicates that tissue perfusion is improving and cells are returning to aerobic metabolism. Rising lactate despite treatment is a sign of worsening shock. A single lactate value is interpreted in the context of the trend."
  },
  {
    stem: "What are the four treatment goals when MODS prevention has failed?",
    options: ["Control the initiating event, promote adequate organ perfusion, provide nutritional support, and maximize patient comfort", "Aggressive fluid resuscitation, broad-spectrum antibiotics, vasopressor therapy, and renal replacement", "Intubation, central line placement, daily spontaneous breathing trials, and family notification", "Corticosteroid therapy, immunosuppression, dialysis initiation, and surgical source control"],
    correct: 0,
    rationale: "When MODS prevention fails, the four treatment goals are: (1) control the initiating event, (2) promote adequate organ perfusion, (3) provide nutritional support, and (4) maximize patient comfort. There is no specific cure for MODS; management is entirely supportive."
  },
  {
    stem: "Which crystalloid solution is preferred for burn resuscitation, and which is preferred for most other shock states?",
    options: ["Lactated Ringer's for burns (Parkland formula); normal saline as first-line for most other shock types", "Normal saline for burns because it prevents hyperkalemia; lactated Ringer's for septic shock only", "Dextrose 5% in water for burns to replace caloric losses; normal saline for hypovolemic shock", "Half-normal saline for burns because it is hypotonic; normal saline for all other shock types"],
    correct: 0,
    rationale: "Lactated Ringer's is the fluid of choice for burn resuscitation (used in the Parkland formula) because it is more physiologically balanced. Normal saline (0.9% NaCl) is isotonic and first-line for most other shock types. Both are crystalloids that expand intravascular volume but also distribute into interstitial spaces."
  },
  {
    stem: "A patient's urinary output drops to 0.3 mL/kg/hr despite ongoing fluid resuscitation. In the context of shock management, what does this finding represent?",
    options: ["Inadequate organ perfusion; the kidneys are receiving insufficient blood flow", "A normal finding during resuscitation that resolves once fluids are stopped", "Fluid overload causing renal tubular compression and decreased filtration", "Expected diuresis from the osmotic effect of IV crystalloid solutions"],
    correct: 0,
    rationale: "Urine output is the clinical proxy for organ perfusion in shock management. The target is >= 0.5 mL/kg/hr. Output of 0.3 mL/kg/hr indicates the kidneys are not receiving adequate perfusion pressure, signaling ongoing or worsening shock despite fluids."
  },
  {
    stem: "Which end-of-life responsibility is specifically identified as a critical nursing role in patients with MODS?",
    options: ["Providing information and support to family members and ensuring care aligns with the patient's wishes", "Making unilateral decisions about withdrawing care when lactate exceeds 8 mmol/L", "Deferring all family communication to the physician to avoid creating false expectations", "Initiating palliative sedation once two or more organ systems have failed"],
    correct: 0,
    rationale: "Providing information and support to family members is explicitly identified as a critical nursing role in MODS. The health care team must address end-of-life decisions to ensure that supportive therapies are congruent with the patient's wishes. Goals-of-care conversations should happen early and often."
  },
  {
    stem: "During the progressive stage of shock, which urinary output finding indicates critical organ hypoperfusion?",
    options: ["Less than 0.5 mL/kg/hr", "Greater than 1 mL/kg/hr", "Equal to 0.5 mL/kg/hr", "Between 0.5 and 1 mL/kg/hr"],
    correct: 0,
    rationale: "Less than 0.5 mL/kg/hr in the progressive stage of shock indicates the kidneys are not receiving adequate perfusion pressure. In the irreversible stage, the patient becomes anuric and requires dialysis. Urine output is the most accessible real-time indicator of visceral organ perfusion."
  },
  {
    stem: "Which statement correctly describes the difference between primary and secondary MODS?",
    options: ["Primary MODS is direct organ injury from the initial insult; secondary MODS develops days later from ongoing SIRS", "Primary MODS always involves the lungs first; secondary MODS always involves the kidneys first", "Primary MODS is reversible with aggressive treatment; secondary MODS is always fatal within 48 hours", "Primary MODS occurs only in sepsis; secondary MODS occurs only in trauma"],
    correct: 0,
    rationale: "Primary MODS is direct organ injury from the initial insult (e.g., kidneys damaged in crush injury). Secondary MODS develops days after the initial event as a consequence of ongoing SIRS, cytokine storm, and microvascular injury from the systemic inflammatory cascade."
  },
  {
    stem: "How does dopamine's effect on the body change as the dose is titrated upward?",
    options: ["Low doses improve renal perfusion; high doses cause vasoconstriction", "Low doses cause vasoconstriction; high doses shift to vasodilation and improved cardiac output", "All doses produce the same effect regardless of titration in the ICU setting", "Low doses improve contractility only; high doses cause bradycardia and decreased output"],
    correct: 0,
    rationale: "Dopamine is dose-dependent: at low doses it primarily improves renal and mesenteric perfusion; at moderate doses it increases contractility and cardiac output; at high doses it causes vasoconstriction. This dose-dependent profile is why it must be titrated carefully in the ICU."
  },
  {
    stem: "A patient in the irreversible stage of shock develops jaundice and anuria. Which organ systems are failing?",
    options: ["Liver and kidneys", "Lungs and heart", "Brain and GI tract", "Adrenal glands and spleen"],
    correct: 0,
    rationale: "Jaundice in the irreversible stage of shock reflects hepatic failure (the liver can no longer process bilirubin), and anuria indicates renal failure (no urine production, requiring dialysis). These are two hallmark signs of the irreversible stage of shock progressing into MODS."
  },
  {
    stem: "Which vital sign monitoring frequency is required for a patient receiving a vasoactive medication infusion?",
    options: ["At least every 15 minutes until stable, or more frequently if indicated", "Every hour during the first 4 hours, then every 4 hours once the drip is at target dose", "Every 30 minutes regardless of stability, per ICU protocol for all infusions", "Continuously via arterial line only; manual cuff readings are not required"],
    correct: 0,
    rationale: "Patients receiving vasoactive medications require vital signs at least every 15 minutes until stable, or more frequently if the clinical situation demands it. This frequent monitoring allows the nurse to detect hemodynamic changes and titrate the drip appropriately."
  },
  {
    stem: "Which finding in a patient with neurogenic shock should prompt the nurse to administer atropine?",
    options: ["Bradycardia, because loss of sympathetic tone removes the normal cardiac rate response", "Tachycardia, because atropine blocks the excessive sympathetic stimulation causing the elevated rate", "Hypotension, because atropine increases SVR by blocking parasympathetic vasodilation", "Warm skin, because atropine reduces cutaneous vasodilation in the zone below the injury"],
    correct: 0,
    rationale: "In neurogenic shock, the loss of sympathetic tone results in unopposed parasympathetic activity, causing bradycardia. Atropine blocks the parasympathetic (vagal) effect on the heart to treat the bradycardia. Vasopressors address the hypotension and low SVR."
  },
  {
    stem: "What does a rising serum lactate trend indicate in a patient being treated for shock?",
    options: ["Worsening tissue hypoperfusion despite treatment", "Successful compensation by the liver converting lactate to glucose", "Improving cellular oxygenation as aerobic metabolism resumes", "Normal fluctuation that is not clinically significant during aggressive resuscitation"],
    correct: 0,
    rationale: "A rising lactate during treatment indicates that tissue hypoperfusion is worsening despite interventions. Cells remain in anaerobic metabolism, producing more lactic acid. Falling lactate indicates response to treatment. Lactate trend is one of the most important real-time indicators of shock resuscitation effectiveness."
  },
  {
    stem: "Which statement best describes why the gut plays a critical role in the development of secondary MODS?",
    options: ["Mucosal breakdown allows bacterial translocation from the gut into systemic circulation, worsening the inflammatory cascade", "The gut requires the highest proportion of cardiac output; ischemia here causes immediate cardiac failure", "GI failure always presents first as stress ulcers, which cause hemorrhage that triggers hypovolemic shock", "The gut secretes IL-6 independently, which directly causes ARDS before any other organ failure develops"],
    correct: 0,
    rationale: "The gut is a critical driver in secondary MODS. Shock reduces mesenteric perfusion, causing mucosal breakdown. This allows gut bacteria and endotoxins to translocate into systemic circulation, worsening the SIRS response and amplifying the inflammatory cascade that drives distant organ failure."
  }
];
