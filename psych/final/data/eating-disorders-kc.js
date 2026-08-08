/* Psych Final - Knowledge Check - Ch 20 Eating Disorders
   Anorexia Nervosa, Bulimia Nervosa, Binge Eating Disorder (BED),
   Avoidant/Restrictive Food Intake Disorder (ARFID)
   KC convention: correct is always index 0 for single-select; engine shuffles.
   SATA uses correct as an array of indices.
   One matching-format question (pairs/decoys) included, per shared engine.js support. */
window.QUESTIONS = [
  {
    stem: "Which three features define anorexia nervosa?",
    options: ["Significantly low body weight, intense fear of gaining weight, and disturbed body image with denial of severity", "Recurrent binge eating with loss of control and compensatory purging", "Recurrent binge eating with distress but no purging", "Restriction of food intake unrelated to body weight or shape concerns"],
    correct: 0,
    rationale: "Anorexia nervosa is defined by significantly low body weight, an intense fear of gaining weight, and disturbed body image with denial of the illness's severity."
  },
  {
    stem: "What are the two recognized subtypes of anorexia nervosa?",
    options: ["Restricting type and binge/purge type", "Purging type and non-purging type only", "Nocturnal type and daytime type", "Mild type and severe type"],
    correct: 0,
    rationale: "Anorexia nervosa has two subtypes: restricting type and binge/purge type."
  },
  {
    stem: "Which personality trait is most strongly associated with anorexia nervosa?",
    options: ["Perfectionism", "Impulsivity", "Extroversion", "Novelty-seeking"],
    correct: 0,
    rationale: "Perfectionism is the personality trait most associated with anorexia nervosa, alongside rigidity and a strong need for control."
  },
  {
    stem: "Besides perfectionism, which other personality features are commonly seen in anorexia nervosa? Select all that apply.",
    options: ["Rigidity", "A strong need for control", "Extroversion", "Impulsivity"],
    correct: [0, 1],
    rationale: "Rigidity and a strong need for control accompany perfectionism as the personality profile typical of anorexia nervosa. Extroversion and impulsivity are more characteristic of bulimia nervosa."
  },
  {
    stem: "Which physical findings are associated with anorexia nervosa? Select all that apply.",
    options: ["Bradycardia and hypotension", "Hypothermia and amenorrhea", "Lanugo", "Dry, yellowish skin and brittle hair or nails", "Parotid gland swelling"],
    correct: [0, 1, 2, 3],
    rationale: "Anorexia nervosa presents with bradycardia, hypotension, hypothermia, amenorrhea, lanugo, dry yellowish skin, and brittle hair or nails, along with electrolyte derangement and dysrhythmias. Parotid gland swelling is associated with bulimia nervosa instead."
  },
  {
    stem: "What is lanugo, as seen in anorexia nervosa?",
    options: ["Fine, soft body hair that grows as the body attempts to conserve heat", "Calluses on the knuckles from repeated self-induced vomiting", "Erosion of the dental enamel from stomach acid exposure", "Swelling of the salivary glands"],
    correct: 0,
    rationale: "Lanugo is fine, soft body hair that grows in response to malnutrition and low body fat, as the body attempts to conserve heat."
  },
  {
    stem: "Which psychiatric illness carries the highest mortality rate, and what are its two leading causes of death?",
    options: ["Anorexia nervosa, from cardiac failure and suicide", "Bulimia nervosa, from esophageal rupture and suicide", "Binge eating disorder, from cardiac failure and diabetes", "Major depressive disorder, from suicide alone"],
    correct: 0,
    rationale: "Anorexia nervosa has the highest mortality rate of any psychiatric illness, primarily from cardiac failure and suicide."
  },
  {
    stem: "What is the primary nursing objective for a hospitalized patient with anorexia nervosa?",
    options: ["Restore nutritional status and physiologic safety before starting psychotherapy or body-image work", "Begin intensive body-image therapy immediately on admission", "Focus first on family therapy before addressing nutrition", "Prioritize discharge planning over nutritional stabilization"],
    correct: 0,
    rationale: "The priority for anorexia nervosa is restoring nutritional status and physiologic safety before psychotherapy or body-image work begins; a malnourished, physiologically unstable patient cannot safely engage in that work yet."
  },
  {
    stem: "Which three electrolyte disturbances characterize refeeding syndrome?",
    options: ["Hypophosphatemia, hypokalemia, and hypomagnesemia", "Hyperphosphatemia, hyperkalemia, and hypermagnesemia", "Hyponatremia, hypocalcemia, and hypochloremia", "Hypernatremia, hypercalcemia, and hyperchloremia"],
    correct: 0,
    rationale: "Refeeding syndrome involves hypophosphatemia, hypokalemia, and hypomagnesemia, which can lead to dysrhythmias and heart failure."
  },
  {
    stem: "Which complications can result from refeeding syndrome?",
    options: ["Dysrhythmias and heart failure", "Hepatic failure and jaundice", "Acute kidney injury and oliguria", "Seizures and status epilepticus"],
    correct: 0,
    rationale: "The electrolyte shifts of refeeding syndrome can precipitate dysrhythmias and heart failure, which is why cardiovascular monitoring is the priority during refeeding."
  },
  {
    stem: "Which body system should be the priority monitoring focus during refeeding of a patient with anorexia nervosa?",
    options: ["Cardiovascular", "Renal", "Hepatic", "Neurologic"],
    correct: 0,
    rationale: "The cardiovascular system is the priority monitoring focus during refeeding, since the electrolyte shifts of refeeding syndrome can precipitate dysrhythmias and heart failure."
  },
  {
    stem: "Which elements are part of the recommended inpatient structure for a patient with anorexia nervosa? Select all that apply.",
    options: ["Supervised meals", "Staying with the patient during and after eating", "Consistent, matter-of-fact daily weights", "Monitored activity and firm limits", "Allowing the patient to weigh themselves privately whenever they choose"],
    correct: [0, 1, 2, 3],
    rationale: "Inpatient structure for anorexia nervosa includes supervised meals, staying with the patient during and after eating, consistent matter-of-fact daily weights, monitored activity, firm limits, and avoiding power struggles. Allowing private, patient-initiated weighing undermines that structure."
  },
  {
    stem: "What is the core diagnostic picture of bulimia nervosa?",
    options: ["Recurrent binge eating with a loss of control, followed by compensatory purging", "Significantly low body weight with an intense fear of gaining weight", "Recurrent binge eating with distress but no compensatory behavior", "Chronic restriction of food intake without binge eating"],
    correct: 0,
    rationale: "Bulimia nervosa is defined by recurrent binge eating with a loss of control, followed by compensatory purging behavior."
  },
  {
    stem: "What is the typical body weight of a patient with bulimia nervosa?",
    options: ["Usually normal", "Significantly below normal", "Significantly above normal, meeting obesity criteria", "Weight cannot be assessed as part of this diagnosis"],
    correct: 0,
    rationale: "Patients with bulimia nervosa are usually of normal weight, unlike anorexia nervosa, where weight is significantly low."
  },
  {
    stem: "What personality style is typically associated with bulimia nervosa?",
    options: ["Outgoing and extroverted", "Rigid and perfectionistic", "Withdrawn and introverted", "Highly controlled and restrictive"],
    correct: 0,
    rationale: "Patients with bulimia nervosa are often outgoing and extroverted, in contrast to the rigid, perfectionistic, controlled presentation typical of anorexia nervosa."
  },
  {
    stem: "A normal-weight, outgoing teenager is being evaluated for a possible eating disorder. Which diagnosis do these findings point toward?",
    options: ["Bulimia nervosa rather than anorexia nervosa", "Anorexia nervosa rather than bulimia nervosa", "Binge eating disorder rather than either anorexia or bulimia", "Avoidant/restrictive food intake disorder"],
    correct: 0,
    rationale: "A normal-weight, extroverted teenager with eating disorder symptoms points toward bulimia nervosa rather than anorexia nervosa, which instead presents with significantly low weight and a more rigid, controlled personality style."
  },
  {
    stem: "Which lab finding is most expected in bulimia nervosa, and is also its most life-threatening complication?",
    options: ["Hypokalemia", "Hyperkalemia", "Hyponatremia", "Hypercalcemia"],
    correct: 0,
    rationale: "Hypokalemia is the lab finding to expect in bulimia nervosa and is also its most life-threatening complication, given the risk of cardiac dysrhythmias."
  },
  {
    stem: "Which acid-base disturbance is expected in bulimia nervosa due to repeated vomiting?",
    options: ["Metabolic alkalosis", "Metabolic acidosis", "Respiratory alkalosis", "Respiratory acidosis"],
    correct: 0,
    rationale: "Repeated vomiting causes loss of hydrochloric acid, producing metabolic alkalosis in bulimia nervosa."
  },
  {
    stem: "Which physical findings are associated with bulimia nervosa? Select all that apply.",
    options: ["Dental enamel erosion", "Russell's sign", "Parotid gland swelling", "Esophageal tears", "Lanugo"],
    correct: [0, 1, 2, 3],
    rationale: "Bulimia nervosa presents with dental enamel erosion, Russell's sign, parotid gland swelling, and esophageal tears from repeated vomiting. Lanugo is associated with anorexia nervosa, not bulimia."
  },
  {
    stem: "What is Russell's sign, seen in bulimia nervosa?",
    options: ["Calluses or abrasions on the knuckles from repeated self-induced vomiting", "Fine, soft body hair that grows to conserve heat", "Erosion of the dental enamel from stomach acid exposure", "Swelling of the parotid glands"],
    correct: 0,
    rationale: "Russell's sign refers to calluses or abrasions on the knuckles caused by repeated contact with the teeth during self-induced vomiting."
  },
  {
    stem: "Which findings do NOT fit the expected picture of bulimia nervosa, and instead belong to anorexia nervosa?",
    options: ["Lanugo, amenorrhea, and abnormally low body weight", "Hypokalemia, metabolic alkalosis, and Russell's sign", "Dental enamel erosion and parotid swelling", "Esophageal tears from repeated vomiting"],
    correct: 0,
    rationale: "Lanugo, amenorrhea, and abnormally low body weight belong to anorexia nervosa, not bulimia nervosa, where weight is usually normal and these specific findings are not expected."
  },
  {
    stem: "What is the highest-priority nursing intervention for a patient with bulimia nervosa?",
    options: ["Helping the patient identify triggers to binge, usually anxiety-producing situations", "Enforcing supervised weighing multiple times daily", "Restricting all unsupervised bathroom access", "Initiating cardiac monitoring for refeeding syndrome"],
    correct: 0,
    rationale: "The highest-priority intervention for bulimia nervosa is helping the patient identify triggers to binge, which are usually anxiety-producing situations. Refeeding syndrome monitoring is the anorexia nervosa priority, not the bulimia priority."
  },
  {
    stem: "Which medication is FDA-approved for the treatment of bulimia nervosa?",
    options: ["Fluoxetine", "Bupropion", "Orlistat", "Lisdexamfetamine"],
    correct: 0,
    rationale: "Fluoxetine is the FDA-approved medication for bulimia nervosa."
  },
  {
    stem: "When taking fluoxetine for bulimia nervosa, what teaching points should the nurse provide? Select all that apply.",
    options: ["It takes weeks to reach full effect", "Take it consistently in the morning since it is activating", "Do not stop it abruptly", "Report any worsening mood", "Take it at bedtime to promote sleep"],
    correct: [0, 1, 2, 3],
    rationale: "Fluoxetine for bulimia nervosa takes weeks to reach effect, should be taken consistently in the morning since it is activating, should not be stopped abruptly, and any worsening mood should be reported. Taking it at bedtime is incorrect, since its activating effect can worsen sleep."
  },
  {
    stem: "Why is bupropion contraindicated in patients with bulimia nervosa?",
    options: ["It carries an increased seizure risk in the setting of electrolyte disturbance", "It commonly causes significant weight gain in this population", "It is not effective for any eating disorder", "It requires slow-release cardiac monitoring during titration"],
    correct: 0,
    rationale: "Bupropion is contraindicated in bulimia nervosa because it carries an increased seizure risk, which is compounded by the electrolyte disturbances common in this population."
  },
  {
    stem: "What is the core diagnostic picture of binge eating disorder (BED)?",
    options: ["Recurrent binge eating with distress, without compensatory purging, often occurring at night", "Recurrent binge eating followed by compensatory purging", "Restriction of food intake with an intense fear of weight gain", "Avoidance of food based on sensory characteristics rather than body image concerns"],
    correct: 0,
    rationale: "Binge eating disorder involves recurrent binge eating with distress, without any compensatory purging behavior, and binges often occur at night."
  },
  {
    stem: "What should the therapeutic assessment focus on for a patient with binge eating disorder?",
    options: ["What the patient does when stressed or upset", "The patient's exact caloric intake at each binge episode", "Whether the patient has a family history of obesity", "The patient's exercise routine before and after binges"],
    correct: 0,
    rationale: "Therapeutic assessment for binge eating disorder explores what the patient does when stressed or upset, since binges are often triggered by emotional distress."
  },
  {
    stem: "Which medication is approved specifically for moderate-severe binge eating disorder?",
    options: ["Lisdexamfetamine", "Fluoxetine", "Bupropion", "Orlistat"],
    correct: 0,
    rationale: "Lisdexamfetamine (Vyvanse) is approved specifically for moderate-severe binge eating disorder."
  },
  {
    stem: "How should orlistat be taken, and what teaching point follows if a meal is not low in fat?",
    options: ["Taken with fat-containing meals; GI effects such as oily stools occur if dietary fat is not reduced", "Taken on an empty stomach; nausea occurs if taken with any food", "Taken only at bedtime; drowsiness is the primary adverse effect", "Taken with high-protein meals; constipation is the primary adverse effect"],
    correct: 0,
    rationale: "Orlistat is taken with fat-containing meals, and GI effects such as oily stools occur if dietary fat intake is not reduced."
  },
  {
    stem: "What additional teaching is needed for a patient taking orlistat?",
    options: ["Supplement fat-soluble vitamins", "Supplement water-soluble vitamins", "Avoid all forms of dietary fat entirely", "No additional supplementation is needed"],
    correct: 0,
    rationale: "Because orlistat reduces fat absorption, patients need to supplement fat-soluble vitamins (A, D, E, and K), which depend on fat for absorption."
  },
  {
    stem: "Which teaching points apply to GLP-1 medications such as semaglutide (Ozempic) used for weight management? Select all that apply.",
    options: ["GI effects are common", "Muscle loss can occur", "Weight regain is common after stopping the medication", "They are FDA-approved specifically for anorexia nervosa", "They eliminate the need for any dietary changes"],
    correct: [0, 1, 2],
    rationale: "GLP-1 medications like semaglutide carry GI effects, a risk of muscle loss, and weight regain after discontinuation as key teaching points. They are not used for anorexia nervosa, and dietary changes remain part of overall management."
  },
  {
    stem: "What is pica?",
    options: ["Persistent eating of non-food substances", "Recurrent binge eating followed by purging", "Avoidance of food based on sensory characteristics", "Intense fear of gaining weight with food restriction"],
    correct: 0,
    rationale: "Pica is the persistent eating of non-food substances, such as dirt, paint chips, or paper."
  },
  {
    stem: "What is avoidant/restrictive food intake disorder (ARFID)?",
    options: ["Restrictive eating driven by factors such as sensory sensitivity or lack of interest in food, without a disturbance in body image", "Restrictive eating driven by an intense fear of gaining weight", "Binge eating followed by compensatory purging behavior", "Persistent eating of non-food substances"],
    correct: 0,
    rationale: "ARFID involves restrictive eating driven by factors such as sensory sensitivity, fear of an aversive consequence (like choking), or general lack of interest in food or eating, without the body-image disturbance and fear of weight gain seen in anorexia nervosa."
  },
  {
    stem: "Comparing anorexia nervosa to bulimia nervosa, how does body weight typically differ?",
    options: ["Anorexia nervosa presents with significantly low weight; bulimia nervosa is usually normal weight", "Anorexia nervosa is usually normal weight; bulimia nervosa presents with significantly low weight", "Both disorders present with significantly low weight", "Both disorders present with normal weight"],
    correct: 0,
    rationale: "Anorexia nervosa presents with significantly low body weight, while bulimia nervosa is usually normal weight, one of the clearest distinguishing features between the two."
  },
  {
    stem: "Comparing anorexia nervosa to bulimia nervosa, how does personality style typically differ?",
    options: ["Anorexia nervosa is associated with perfectionism and rigidity; bulimia nervosa is associated with an outgoing, extroverted style", "Anorexia nervosa is associated with an outgoing, extroverted style; bulimia nervosa is associated with perfectionism and rigidity", "Both disorders are associated with the same personality style", "Personality style does not differ meaningfully between the two disorders"],
    correct: 0,
    rationale: "Anorexia nervosa is associated with perfectionism, rigidity, and a need for control, while bulimia nervosa is associated with a more outgoing, extroverted personality style."
  },
  {
    stem: "Comparing anorexia nervosa to bulimia nervosa, which key lab or physical finding distinguishes the two?",
    options: ["Lanugo and bradycardia point to anorexia nervosa; hypokalemia and Russell's sign point to bulimia nervosa", "Lanugo and bradycardia point to bulimia nervosa; hypokalemia and Russell's sign point to anorexia nervosa", "Hypokalemia is expected in both disorders equally", "Lanugo is expected in both disorders equally"],
    correct: 0,
    rationale: "Lanugo and bradycardia are key anorexia nervosa findings, while hypokalemia and Russell's sign are key bulimia nervosa findings, useful markers for telling the two apart."
  },
  {
    stem: "Comparing anorexia nervosa to bulimia nervosa, which is the most dangerous complication associated with each?",
    options: ["Refeeding syndrome (cardiovascular collapse) for anorexia nervosa; hypokalemia (cardiac dysrhythmia) for bulimia nervosa", "Hypokalemia for anorexia nervosa; refeeding syndrome for bulimia nervosa", "Esophageal tears are the most dangerous complication for both disorders", "Dental enamel erosion is the most dangerous complication for both disorders"],
    correct: 0,
    rationale: "Refeeding syndrome, with its risk of cardiovascular collapse, is the most dangerous complication in anorexia nervosa, while hypokalemia, with its risk of cardiac dysrhythmia, is the most dangerous complication in bulimia nervosa."
  },
  {
    stem: "Comparing anorexia nervosa to bulimia nervosa, how does the priority nursing intervention differ?",
    options: ["Restore nutrition and physiologic safety first for anorexia nervosa; help identify binge triggers for bulimia nervosa", "Help identify binge triggers for anorexia nervosa; restore nutrition and physiologic safety first for bulimia nervosa", "The priority nursing intervention is identical for both disorders", "Neither disorder has an established priority nursing intervention"],
    correct: 0,
    rationale: "For anorexia nervosa, the priority is restoring nutrition and physiologic safety before therapy begins. For bulimia nervosa, the priority is helping the patient identify triggers to binge."
  },
  {
    stem: "Comparing anorexia nervosa to bulimia nervosa, which medication is used for each, and which medication is contraindicated?",
    options: ["No specific first-line medication for anorexia nervosa; fluoxetine for bulimia nervosa; bupropion is contraindicated in bulimia nervosa", "Fluoxetine for anorexia nervosa; no specific first-line medication for bulimia nervosa; bupropion is contraindicated in anorexia nervosa", "Bupropion for both disorders, with fluoxetine contraindicated in both", "Lisdexamfetamine for both disorders, with orlistat contraindicated in both"],
    correct: 0,
    rationale: "There is no specific first-line medication for anorexia nervosa, since nutritional restoration comes first. Fluoxetine is FDA-approved for bulimia nervosa, and bupropion is contraindicated in bulimia nervosa due to seizure risk."
  },
  {
    stem: "Match each finding to its correct description.",
    pairs: [
      { left: "Lanugo", right: "Fine, soft body hair that grows as the body attempts to conserve heat" },
      { left: "Russell's sign", right: "Calluses or abrasions on the knuckles from repeated self-induced vomiting" },
      { left: "Refeeding syndrome", right: "Electrolyte shifts (phosphate, potassium, magnesium) from reintroducing nutrition too quickly" },
      { left: "Parotid gland swelling", right: "Enlargement of the salivary glands from repeated vomiting" }
    ],
    decoys: ["Absence of menstruation for three or more consecutive months"],
    rationale: "Lanugo is heat-conserving body hair seen in anorexia nervosa. Russell's sign is knuckle calluses from self-induced vomiting. Refeeding syndrome is the electrolyte shift from reintroducing nutrition too quickly. Parotid gland swelling comes from repeated vomiting in bulimia nervosa. Amenorrhea, the decoy, is a related but separate anorexia finding not matched here."
  },
  {
    stem: "A hospitalized patient with anorexia nervosa asks to weigh herself privately each morning instead of during scheduled staff-supervised weights. What is the nurse's best response?",
    options: ["Explain that daily weights are done consistently and matter-of-factly by staff as part of the treatment structure", "Agree, since patient autonomy over weighing should be respected", "Allow it only if the patient's weight has been stable for a week", "Suggest weighing twice daily instead, once privately and once with staff"],
    correct: 0,
    rationale: "Supervised, consistent, matter-of-fact daily weighing is part of the structured inpatient approach to anorexia nervosa, since unsupervised or private weighing can reinforce disordered behaviors around weight."
  },
  {
    stem: "A patient with bulimia nervosa asks why she can't be prescribed bupropion like a friend with depression. What should the nurse explain?",
    options: ["Bupropion carries an increased seizure risk in bulimia nervosa, especially with electrolyte disturbances", "Bupropion is not effective for treating any mood-related symptoms", "Bupropion is reserved only for patients with anorexia nervosa", "Bupropion cannot be prescribed to anyone with any psychiatric diagnosis"],
    correct: 0,
    rationale: "Bupropion is contraindicated in bulimia nervosa due to an increased seizure risk, which is heightened by the electrolyte disturbances common in this population."
  }
];
