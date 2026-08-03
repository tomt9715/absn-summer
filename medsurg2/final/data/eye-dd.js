// MedSurg II FINAL EXAM REVIEW -- Eye and Vision Disorders (Ch 58) -- Deep Drill
// 10 questions, 90% hard / 10% medium, no easy. NEW scenarios distinct from exam1/data/vision-hearing-dd.js (which
// covers both vision and hearing very comprehensively) and from the final simulator's Ch58 questions. Fills gaps:
// conjunctivitis (no dedicated question existed anywhere), brunescence, pre-op dilating drops, written+verbal
// instruction requirement, acute angle-closure presentation, specific IOP-raising activities, semi-Fowler's
// positioning, contact lens removal, retinal detachment cause.
// correct: 0 always -- engine shuffles option order at runtime.
window.QUESTIONS = [
  {
    stem: "A patient is diagnosed with acute conjunctivitis (pink eye) in one eye. What is the single most important teaching point to prevent transmission?",
    options: ["Frequent, thorough hand hygiene", "Wearing sunglasses at all times, including indoors", "Applying a warm compress to the affected eye every hour", "Avoiding all screen time until symptoms resolve"],
    correct: 0,
    rationale: "Conjunctivitis is highly contagious, and frequent, thorough hand hygiene is the primary nursing intervention to prevent its spread to the other eye or to other people. Sunglasses, compresses, and screen time restrictions do not address the primary transmission risk, which is direct or indirect hand-to-eye contact."
  },
  {
    stem: "A patient with cataracts reports that colors, especially blues and purples, appear duller and more yellow than they used to. What is the nurse's best explanation for this finding?",
    options: ["This reflects brunescence, a yellow-brown discoloration of the lens that is common in cataract development", "This finding suggests the patient is developing glaucoma rather than cataracts", "This finding is unrelated to the cataract diagnosis and warrants a separate neurologic workup", "This finding indicates the cataract has fully resolved on its own"],
    correct: 0,
    rationale: "Brunescence refers to a yellow-brown discoloration that develops in the lens as cataracts progress, which alters color perception and makes colors, especially blues and purples, appear duller or more yellow-tinted. This is a recognized and expected feature of cataract progression, not a sign of glaucoma, an unrelated neurologic issue, or resolution of the cataract."
  },
  {
    stem: "A patient is scheduled for cataract surgery in one week. What is an important pre-operative nursing action?",
    options: ["Ensure the patient understands how to administer prescribed dilating eye drops before the procedure and knows to pick up post-op drops from the pharmacy ahead of time", "Instruct the patient to discontinue all eye drops immediately upon scheduling the surgery", "Apply an eye shield to the operative eye starting one week before the procedure", "Restrict the patient to a clear liquid diet for 24 hours prior to the surgery"],
    correct: 0,
    rationale: "Pre-operative teaching for cataract surgery includes administering prescribed dilating eye drops as ordered before the procedure and ensuring the patient has picked up their post-operative eye drops from the pharmacy ahead of time, so they are ready to start therapy immediately after surgery. Discontinuing all drops, applying an eye shield a week early, and a clear liquid diet are not standard pre-operative instructions for this surgery."
  },
  {
    stem: "A nurse is discharging a patient following cataract surgery. What format should the discharge instructions be provided in?",
    options: ["Both written and verbal instructions", "Verbal instructions only, since written materials are not necessary for eye surgery patients", "Written instructions only, since the patient's vision may be too blurry to focus on verbal teaching", "A single instruction sheet mailed to the patient's home after discharge"],
    correct: 0,
    rationale: "Providing both written and verbal instructions is standard practice for all surgical patients, including those undergoing cataract surgery, to reinforce understanding and retention of important post-operative care information. Relying on only one format, or delaying instructions until after discharge, does not meet this standard of care."
  },
  {
    stem: "A patient arrives at the emergency department with sudden severe eye pain, blurred vision, nausea and vomiting, and a fixed, mid-dilated pupil. What condition does the nurse suspect, and what is the priority action?",
    options: ["Acute angle-closure glaucoma; notify the provider immediately, as this is a surgical emergency", "Chronic open-angle glaucoma; schedule a routine follow-up with ophthalmology", "Cataracts; reassure the patient that these symptoms are expected with lens clouding", "Conjunctivitis; initiate hand hygiene precautions and reassess in 24 hours"],
    correct: 0,
    rationale: "Sudden severe eye pain, blurred vision, nausea and vomiting, and a fixed, mid-dilated pupil are the classic acute presentation of angle-closure glaucoma, a surgical emergency requiring immediate provider notification, unlike the often asymptomatic, gradual presentation of chronic open-angle glaucoma. This presentation does not fit cataracts or conjunctivitis."
  },
  {
    stem: "A nurse is teaching a patient with glaucoma about activities to avoid in order to prevent spikes in intraocular pressure. Which activity should the nurse specifically instruct the patient to avoid?",
    options: ["Bending at the waist and wearing tight collars", "Reading for extended periods in dim lighting", "Walking briskly for exercise", "Drinking small amounts of water throughout the day"],
    correct: 0,
    rationale: "Patients with glaucoma are taught to avoid activities that raise intraocular pressure, such as bending at the waist, wearing tight collars, straining, and performing Valsalva maneuvers. Reading in dim light, brisk walking, and drinking water throughout the day are not activities specifically associated with raising intraocular pressure."
  },
  {
    stem: "A nurse is preparing to administer eye drops to a patient. What position should the nurse place the patient in before administration?",
    options: ["Semi-Fowler's position", "Flat supine position with the head turned fully to one side", "Prone position with the face turned toward the mattress", "Trendelenburg position"],
    correct: 0,
    rationale: "The patient should be positioned in semi-Fowler's position before eye drop administration, which allows the head to be tilted back appropriately while maintaining a comfortable and safe position for the procedure. Flat supine with the head turned, prone, and Trendelenburg positioning are not appropriate for this procedure."
  },
  {
    stem: "A patient wearing contact lenses is prescribed a new eye drop medication. What is an important step the nurse must take before administering the drop?",
    options: ["Remove the patient's contact lenses before instilling the eye drop", "Instruct the patient to blink rapidly immediately after the drop is instilled", "Apply the eye drop directly on top of the contact lens without removing it", "Wait exactly 30 minutes after the patient inserted the contacts before giving the drop"],
    correct: 0,
    rationale: "Contact lenses should be removed before administering eye drops, since medication can be absorbed into or trapped behind the lens, altering the effectiveness of the drop and potentially irritating the eye. Instilling the drop directly on top of the lens or timing administration around lens insertion does not address this concern appropriately."
  },
  {
    stem: "A patient presents to the emergency department after being struck in the eye with a baseball and reports a curtain-like shadow over part of their vision. What is the most likely underlying cause of this presentation?",
    options: ["Trauma causing retinal detachment", "Age-related progressive lens clouding", "A chronic, slowly progressive rise in intraocular pressure", "Normal age-related macular changes"],
    correct: 0,
    rationale: "Retinal detachment is commonly caused by trauma, such as being struck in the eye, and the curtain-like shadow over part of the visual field is the classic presenting symptom. This is distinct from the gradual, non-traumatic processes involved in cataract formation, chronic glaucoma, or normal age-related macular changes."
  },
  {
    stem: "A patient with early-stage glaucoma has no visual symptoms and asks why treatment is necessary if they feel fine. What is the nurse's best explanation, referencing the common description of this disease?",
    options: ["Glaucoma is often called the 'silent thief of sight' because significant optic nerve damage can occur before the patient notices any vision changes", "Glaucoma always causes noticeable symptoms early on, so the absence of symptoms means the diagnosis should be reconsidered", "Treatment is optional in early glaucoma and can be safely delayed until symptoms develop", "Glaucoma only requires treatment once peripheral vision loss becomes severe enough to affect daily activities"],
    correct: 0,
    rationale: "Glaucoma is frequently called the 'silent thief of sight' because it is often asymptomatic in its early stages, with significant, irreversible optic nerve damage occurring before the patient notices symptoms such as peripheral vision loss. This is exactly why early treatment, even without symptoms, is critical, not something that can be safely delayed."
  }
];
