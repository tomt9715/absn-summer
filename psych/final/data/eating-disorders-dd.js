/* Psych Final - Deep Drill - Ch 20 Eating Disorders
   Anorexia Nervosa, Bulimia Nervosa, Binge Eating Disorder (BED),
   Avoidant/Restrictive Food Intake Disorder (ARFID)
   DD convention: correct is always index 0 for single-select; engine shuffles.
   Difficulty mix: 90 percent hard, 10 percent medium, no easy.
   Answer choices are plain clinical actions or bare terms, parallel in form
   and length, with plausible distractors and no tells. */
window.QUESTIONS = [
  {
    stem: "A newly admitted patient with anorexia nervosa has a heart rate of 42 beats per minute, blood pressure of 82/50 mm Hg, and a temperature of 96.1 F (35.6 C). What is the nursing priority?",
    options: ["Physiologic stabilization and safety", "Beginning structured body-image therapy", "Initiating a discussion about long-term weight goals", "Encouraging the patient to journal about food-related fears"],
    correct: 0,
    rationale: "Bradycardia, hypotension, and hypothermia reflect physiologic instability, so restoring nutritional status and physiologic safety takes priority over psychotherapy or body-image work, which cannot proceed safely until the patient is medically stable."
  },
  {
    stem: "A patient with anorexia nervosa begins a supervised refeeding plan. On day 3, the nurse notes new palpitations and an irregular pulse. Which lab value should the nurse check first?",
    options: ["Serum phosphate", "Serum sodium", "Serum calcium", "Serum chloride"],
    correct: 0,
    rationale: "Refeeding syndrome is driven by hypophosphatemia, hypokalemia, and hypomagnesemia, and phosphate is the electrolyte most closely tied to the resulting dysrhythmias, making it the priority to check first when cardiac symptoms appear during refeeding."
  },
  {
    stem: "A patient with anorexia nervosa is beginning nutritional rehabilitation. Which monitoring parameter is the nursing priority during this period?",
    options: ["Cardiac rhythm and vital signs", "Daily bowel movement frequency", "Skin turgor and hydration status alone", "Sleep quality and duration"],
    correct: 0,
    rationale: "Cardiovascular monitoring is the priority during refeeding, since the electrolyte shifts of refeeding syndrome can precipitate dysrhythmias and heart failure."
  },
  {
    stem: "A normal-weight, outgoing 16-year-old is evaluated for dental enamel erosion and calluses on the knuckles of her dominant hand. Which diagnosis do these findings support?",
    options: ["Bulimia nervosa", "Anorexia nervosa", "Binge eating disorder", "Avoidant/restrictive food intake disorder"],
    correct: 0,
    rationale: "Dental enamel erosion and knuckle calluses (Russell's sign) in a normal-weight, outgoing patient point to bulimia nervosa rather than anorexia nervosa, which instead presents with significantly low weight and different physical findings."
  },
  {
    stem: "A patient with bulimia nervosa reports generalized weakness and muscle cramps. Which nursing action is the priority?",
    options: ["Anticipate cardiac monitoring and electrolyte evaluation", "Encourage increased dietary potassium intake without further workup", "Reassure the patient that this is an expected finding requiring no action", "Schedule a follow-up appointment in one week"],
    correct: 0,
    rationale: "Weakness and muscle cramps in bulimia nervosa suggest hypokalemia, the most life-threatening complication of this disorder, so cardiac monitoring and electrolyte evaluation are the priority rather than waiting or self-treating with diet alone."
  },
  {
    stem: "A nurse is teaching a patient with bulimia nervosa about newly prescribed fluoxetine. Which patient statement indicates a need for further teaching?",
    options: ["\"I'll take it at night before bed.\"", "\"It may take a few weeks before I notice the full effect.\"", "\"I won't stop taking it suddenly without talking to my provider.\"", "\"I'll let my provider know if my mood feels worse.\""],
    correct: 0,
    rationale: "Fluoxetine is activating and should be taken consistently in the morning, not at bedtime, since nighttime dosing can worsen sleep. The other statements reflect accurate teaching about timeline, tapering, and mood monitoring."
  },
  {
    stem: "A provider considers prescribing bupropion for a patient with bulimia nervosa who also has symptoms of depression. What is the nurse's priority action?",
    options: ["Question the order given the increased seizure risk in this population", "Administer the medication as ordered without further action", "Request the dose be doubled for faster effect", "Suggest switching the patient to lisdexamfetamine instead"],
    correct: 0,
    rationale: "Bupropion is contraindicated in bulimia nervosa due to an increased seizure risk, compounded by the electrolyte disturbances common in this population, so the nurse should question the order before it is administered."
  },
  {
    stem: "A patient with binge eating disorder tells the nurse her binges almost always happen late at night after a stressful day at work. What should the nurse prioritize in the therapeutic assessment?",
    options: ["Exploring what the patient does to cope when stressed or upset", "Calculating the exact caloric content of her typical binge", "Reviewing her exercise log for the past month", "Assessing for a family history of type 2 diabetes"],
    correct: 0,
    rationale: "Therapeutic assessment for binge eating disorder centers on what the patient does when stressed or upset, since binges are frequently triggered by emotional distress rather than hunger."
  },
  {
    stem: "A patient with moderate-severe binge eating disorder is started on lisdexamfetamine. What should the nurse understand about this medication's role?",
    options: ["It is approved specifically to treat moderate-severe binge eating disorder", "It is intended to treat co-occurring ADHD rather than the eating disorder itself", "It is used to reverse hypokalemia associated with purging behavior", "It is a first-line medication for anorexia nervosa"],
    correct: 0,
    rationale: "Lisdexamfetamine is approved specifically for moderate-severe binge eating disorder, not as an incidental ADHD treatment, an electrolyte therapy, or an anorexia nervosa medication."
  },
  {
    stem: "A patient taking orlistat for weight management reports oily, loose stools after eating a fast-food meal. What should the nurse explain?",
    options: ["This occurs when dietary fat intake is not reduced along with the medication", "This indicates the medication is not working and should be discontinued", "This is unrelated to the medication and warrants a GI workup", "This indicates an allergic reaction requiring immediate discontinuation"],
    correct: 0,
    rationale: "Orlistat causes GI effects such as oily stools when a meal is not low in fat, since the medication blocks fat absorption; the finding reflects the meal's fat content rather than a medication failure or allergy."
  },
  {
    stem: "A patient newly started on orlistat asks the nurse what additional supplementation she will need. What is the nurse's best response?",
    options: ["Fat-soluble vitamins, since fat absorption is reduced", "Water-soluble B vitamins, since absorption is unaffected by this medication", "Calcium and vitamin D only, unrelated to the medication's mechanism", "No supplementation is needed with this medication"],
    correct: 0,
    rationale: "Because orlistat reduces fat absorption, fat-soluble vitamins (A, D, E, and K) require supplementation, since their absorption depends on dietary fat."
  },
  {
    stem: "A patient on semaglutide for weight management expresses concern about losing muscle mass and asks what happens if she stops the medication. What should the nurse include in her response?",
    options: ["Muscle loss can occur during treatment, and weight regain is common after stopping", "Muscle loss is not a known effect of this medication class", "Stopping the medication guarantees the weight loss will be maintained", "GI side effects only occur if the medication is stopped abruptly"],
    correct: 0,
    rationale: "GLP-1 medications like semaglutide carry a risk of muscle loss during treatment, and weight regain is common after the medication is discontinued, both important teaching points for patients considering this therapy."
  },
  {
    stem: "A patient with anorexia nervosa asks why a staff member must remain with her for a period of time after each meal. What is the nurse's best explanation?",
    options: ["Staying with her helps prevent purging and supports treatment structure", "It is required only if the patient requests supervision", "It is done solely to monitor for choking risk", "It is unrelated to the treatment plan and is a general hospital policy"],
    correct: 0,
    rationale: "Staying with the patient during and after eating is part of the structured inpatient approach to anorexia nervosa, intended to prevent purging behavior and reinforce consistent expectations around meals."
  },
  {
    stem: "A malnourished patient with anorexia nervosa is admitted and her treatment team is sequencing her plan of care. Which approach reflects the correct priority order?",
    options: ["Stabilize nutrition and physiologic safety, then introduce body-image and psychotherapy work", "Begin body-image therapy immediately, then address nutrition once rapport is established", "Address nutrition and psychotherapy simultaneously with equal priority from admission", "Defer both nutrition and therapy until the patient requests treatment"],
    correct: 0,
    rationale: "Nutritional and physiologic stabilization must come first in anorexia nervosa, since a malnourished, physiologically unstable patient cannot safely or effectively engage in body-image work or psychotherapy."
  },
  {
    stem: "Which findings in a hospitalized patient would the nurse expect to be consistent with anorexia nervosa rather than bulimia nervosa? Select all that apply.",
    options: ["Lanugo", "Amenorrhea", "Significantly low body weight", "Russell's sign", "Metabolic alkalosis"],
    correct: [0, 1, 2],
    rationale: "Lanugo, amenorrhea, and significantly low body weight are expected in anorexia nervosa. Russell's sign and metabolic alkalosis instead point toward bulimia nervosa, from repeated self-induced vomiting."
  },
  {
    stem: "A patient in refeeding for anorexia nervosa develops a new dysrhythmia on telemetry. What is the nursing priority?",
    options: ["Notify the provider and anticipate electrolyte correction", "Document the finding and reassess at the next scheduled vitals", "Increase the rate of nutritional replacement to compensate", "Discontinue telemetry monitoring since the patient is already hospitalized"],
    correct: 0,
    rationale: "A new dysrhythmia during refeeding is a sign of refeeding syndrome and requires prompt provider notification and anticipated electrolyte correction, not documentation alone or an increase in feeding rate."
  },
  {
    stem: "A 9-year-old refuses to eat foods with certain textures, has no concerns about body weight or shape, and is not attempting to lose weight. Which diagnosis best fits this presentation?",
    options: ["Avoidant/restrictive food intake disorder", "Anorexia nervosa, despite the absence of body-image disturbance", "Bulimia nervosa, despite the absence of purging behavior", "Binge eating disorder, despite the absence of binge episodes"],
    correct: 0,
    rationale: "Restrictive eating driven by sensory sensitivity, without a disturbance in body image or fear of weight gain, is consistent with avoidant/restrictive food intake disorder rather than anorexia nervosa, which requires that body-image disturbance."
  },
  {
    stem: "A patient with bulimia nervosa reports sudden severe chest pain immediately after a vomiting episode. What should the nurse anticipate?",
    options: ["Assessment for esophageal injury", "Routine reassurance that this is an expected finding", "Discharge teaching on managing future binge episodes", "A scheduled dental referral for enamel erosion"],
    correct: 0,
    rationale: "Sudden severe chest pain after vomiting raises concern for esophageal tear or perforation, a recognized complication of repeated forceful vomiting in bulimia nervosa, and requires prompt assessment rather than reassurance or routine follow-up."
  },
  {
    stem: "An emergency department nurse is triaging two patients: one with anorexia nervosa and a heart rate of 38 beats per minute, and one with bulimia nervosa reporting recent binge-purge episodes and generalized weakness. What should guide the nurse's prioritization?",
    options: ["Both patients need urgent cardiac and electrolyte evaluation, since both presentations carry dysrhythmia risk", "Only the anorexia nervosa patient requires urgent evaluation, since bulimia nervosa carries no cardiac risk", "Only the bulimia nervosa patient requires urgent evaluation, since bradycardia in anorexia nervosa is expected and benign", "Neither patient requires urgent evaluation without further psychiatric assessment first"],
    correct: 0,
    rationale: "Severe bradycardia in anorexia nervosa and hypokalemia-associated weakness in bulimia nervosa both carry a real risk of life-threatening dysrhythmia, so both patients warrant urgent cardiac and electrolyte evaluation rather than triaging one as a lower priority."
  },
  {
    stem: "A patient with anorexia nervosa insists on weighing herself in the bathroom before scheduled staff weights each morning. What is the most appropriate nursing response?",
    options: ["Explain that staff perform weights consistently, and redirect from self-weighing", "Allow it, since knowing her own weight may reduce her anxiety", "Permit it only on days she requests it", "Increase the frequency of supervised weights to twice daily instead of addressing the request"],
    correct: 0,
    rationale: "Consistent, staff-supervised weighing is part of the structured treatment approach to anorexia nervosa, and self-weighing outside that structure can reinforce disordered behaviors around the number on the scale, so the nurse should redirect rather than permit it."
  }
];
