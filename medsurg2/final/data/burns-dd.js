// MedSurg II FINAL EXAM REVIEW -- Burns (Ch 57) -- Deep Drill
// 12 questions, 90% hard / 10% medium, no easy. NEW scenarios distinct from exam2/data/burns-dd.js (24 Q, very
// comprehensive) and from the final simulator's Ch57 questions. Fills gaps: Parkland formula calculation, Curreri
// formula, 4th degree burns, NG tube rationale, central access rationale, immunosuppression window, thermoregulation,
// wound culture technique, inhalation injury supra/subglottic distinction, prophylactic antibiotic avoidance.
// correct: 0 always -- engine shuffles option order at runtime.
window.QUESTIONS = [
  {
    stem: "A 70 kg patient sustains burns to 40% total body surface area. Using the Parkland formula, how much total intravenous fluid should the nurse anticipate administering in the first 24 hours?",
    options: ["11,200 mL", "2,800 mL", "5,600 mL", "16,800 mL"],
    correct: 0,
    rationale: "The Parkland formula is 4 mL x weight in kg x %TBSA burned. For this patient: 4 x 70 x 40 = 11,200 mL total over the first 24 hours, with half given in the first 8 hours and the remaining half over the next 16 hours."
  },
  {
    stem: "A patient's burn occurred at 2:00 PM but the patient did not arrive at the emergency department until 4:00 PM. Using the Parkland formula, when should the first half of the calculated fluid volume be completed?",
    options: ["By 10:00 PM, since the 8-hour window is calculated from the time of the burn, not the time of arrival", "By midnight, since the 8-hour window is calculated from the time of arrival at the emergency department", "By 6:00 PM, since only the time spent in the emergency department counts toward the 8-hour window", "The timing does not matter as long as the total 24-hour volume is administered by the following day"],
    correct: 0,
    rationale: "The Parkland formula's 8-hour window for the first half of fluid resuscitation is calculated from the time of the burn injury itself, not the time of arrival at the hospital. Since the burn occurred at 2:00 PM, the first half must be completed by 10:00 PM, meaning the nurse has less than the full 8 hours to administer it given the delay in arrival."
  },
  {
    stem: "A 70 kg patient with 30% total body surface area burns is being started on enteral nutrition. Using the Curreri formula, what is this patient's approximate daily caloric requirement?",
    options: ["2,950 kcal/day", "1,750 kcal/day", "1,200 kcal/day", "4,700 kcal/day"],
    correct: 0,
    rationale: "The Curreri formula is 25 kcal/kg/day plus 40 kcal per percent TBSA burned. For this patient: (25 x 70) + (40 x 30) = 1,750 + 1,200 = 2,950 kcal/day, reflecting the significantly elevated metabolic demand of major burn injury."
  },
  {
    stem: "A patient sustains a burn injury involving charring of the skin with visible exposed muscle and tendon. The area is completely painless to touch. What burn depth classification does the nurse recognize, and what is the anticipated management?",
    options: ["Fourth degree burn; amputation or major reconstruction may be required", "Full thickness (third degree) burn; skin grafting alone will be sufficient", "Deep partial thickness burn; conservative dressing changes are appropriate", "Superficial partial thickness burn; healing is expected within 21 days"],
    correct: 0,
    rationale: "Charring with exposed muscle, bone, or tendon involvement defines a fourth degree burn, which extends beyond the dermis into deeper structures and is painless due to complete nerve destruction. This depth often requires amputation or major reconstructive surgery, unlike full thickness burns, which may be managed with grafting alone."
  },
  {
    stem: "A patient with burns covering 28% of total body surface area is being admitted from the emergency department. The nurse anticipates insertion of a nasogastric tube. What is the primary rationale for this intervention?",
    options: ["Burns exceeding 20 to 25% TBSA place the patient at risk for paralytic ileus, and the NG tube allows for decompression", "The NG tube is required in all burn patients regardless of TBSA to administer early enteral nutrition", "The NG tube is inserted specifically to monitor for gastrointestinal bleeding from Curling's ulcer", "The NG tube prevents aspiration during the initial fluid resuscitation phase only"],
    correct: 0,
    rationale: "Patients with burns exceeding 20 to 25% TBSA are at risk for paralytic ileus due to the systemic stress response, so an NG tube is placed to suction for gastric decompression. While enteral nutrition is started early in major burns, the primary rationale for placement in the emergent phase is decompression, not immediate feeding or bleeding monitoring alone."
  },
  {
    stem: "A patient with 45% total body surface area burns requires IV access for fluid resuscitation. The provider recommends central venous access rather than peripheral IV access. What is the primary rationale for this recommendation?",
    options: ["Large burns require a substantial volume of fluid that is more reliably delivered through central access", "Peripheral IV access carries an unacceptably high infection risk in all burn patients", "Central venous access is required specifically to monitor for myoglobinuria in this patient", "Peripheral veins are physically inaccessible in any patient with burns exceeding 40% TBSA"],
    correct: 0,
    rationale: "In larger burns requiring the substantial fluid volumes calculated by the Parkland formula, central venous access is recommended because it allows more reliable delivery of large fluid volumes compared to peripheral IV access, which may be inadequate or difficult to maintain. This is a volume and reliability consideration, not primarily an infection-risk or monitoring rationale."
  },
  {
    stem: "A patient is 4 days post major burn injury and previously showed no signs of infection. The nurse understands this patient is now entering a particularly high-risk window for which complication?",
    options: ["Immunosuppression, since burn patients experience a period of increased susceptibility to infection around 3 to 5 days post-burn", "Complete resolution of infection risk, since the acute inflammatory phase has passed", "Hypervolemia, since fluid resuscitation is typically complete by this point", "Contracture formation, since this is the peak window for scar tissue development"],
    correct: 0,
    rationale: "Burn patients experience a period of immunosuppression approximately 3 to 5 days post-injury, making this a particularly high-risk window for infection despite the absence of earlier signs. This is not a period of resolved infection risk, and while fluid status and rehabilitation concerns exist, immunosuppression is the specific concern tied to this timeframe."
  },
  {
    stem: "A nurse is caring for a patient with extensive burns and notices the patient's core body temperature is trending downward. What environmental intervention should the nurse prioritize?",
    options: ["Maintain the room temperature between 28 and 32 degrees Celsius and use warming blankets and warmed IV fluids", "Keep the room temperature at standard hospital levels since burn patients do not have altered thermoregulation", "Apply ice packs to unaffected areas to redirect blood flow to the burned regions", "Reduce IV fluid warming to prevent overheating, since burn patients are prone to hyperthermia rather than hypothermia"],
    correct: 0,
    rationale: "Burn patients lose significant heat through open wounds and are at high risk for hypothermia, so the room should be kept warm between 28 and 32 degrees Celsius, with warming blankets and warmed IV fluids used to maintain normothermia. Standard room temperature is inadequate, and burn patients are at risk for hypothermia, not hyperthermia, in this context."
  },
  {
    stem: "A provider orders a wound culture for a burn patient with suspected infection. The nursing student prepares to obtain the sample by swabbing the wound surface. What correction should the nurse provide?",
    options: ["Burn wound cultures should be obtained by biopsy technique, not surface swab, for accurate results", "Surface swab technique is correct and no correction is needed", "The culture should be deferred until the wound is fully healed to avoid contamination", "Blood cultures should be obtained instead of a wound culture in burn patients"],
    correct: 0,
    rationale: "Burn wound cultures are obtained by biopsy technique rather than surface swab, since surface swabs can be contaminated by colonizing organisms and do not accurately reflect the bacterial burden within the wound tissue itself. A biopsy provides a more reliable sample for guiding antimicrobial therapy."
  },
  {
    stem: "A patient with 25% total body surface area burns has no current signs of wound infection. The nursing student asks why the patient is not receiving prophylactic systemic antibiotics. What is the nurse's best explanation?",
    options: ["Prophylactic systemic antibiotics are avoided in burn patients because they promote the development of resistant organisms", "Systemic antibiotics are ineffective in burn patients due to impaired absorption through burned skin", "Antibiotics are withheld until the patient reaches the rehabilitation phase of burn care", "Burn patients have a naturally lower infection risk than other surgical patients, making prophylaxis unnecessary"],
    correct: 0,
    rationale: "Prophylactic systemic antibiotics are specifically avoided in burn care because their routine use promotes the development of antibiotic-resistant organisms; antimicrobial therapy is instead reserved for culture-confirmed infection. Burn patients actually have an elevated infection risk due to loss of the skin barrier, not a lower one, which makes judicious antibiotic use even more important."
  },
  {
    stem: "A patient is brought in after a house fire with facial burns, singed nasal hairs, and carbonaceous sputum. The nurse understands these findings suggest which type of injury?",
    options: ["Inhalation injury, requiring close monitoring for airway compromise", "Superficial burn injury limited to the epidermis with no airway involvement", "An isolated dermatologic finding unrelated to respiratory status", "Full thickness burn injury requiring immediate skin grafting of the face"],
    correct: 0,
    rationale: "Singed nasal hairs, carbonaceous sputum, and facial burns are classic signs suggesting inhalation injury, which requires close monitoring for progressive airway compromise even if the patient is not currently in respiratory distress. These findings are respiratory red flags, not isolated dermatologic or grafting concerns."
  },
  {
    stem: "A nurse is explaining the difference between supraglottic and subglottic inhalation injury to a nursing student. What is the most accurate distinction?",
    options: ["Supraglottic injury results from heat exposure, while subglottic injury results from chemical irritants in smoke", "Supraglottic injury only occurs in electrical burns, while subglottic injury only occurs in flame burns", "Supraglottic and subglottic injury are two names for the exact same pathophysiologic process", "Supraglottic injury affects the lower airways, while subglottic injury affects only the upper airway"],
    correct: 0,
    rationale: "Supraglottic inhalation injury results from direct heat exposure to the upper airway, while subglottic injury results from chemical irritants contained in inhaled smoke affecting the lower airway structures. These are distinct mechanisms with different anatomic involvement, not the same process or reversed in their heat/chemical association."
  }
];
