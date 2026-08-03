// MedSurg II FINAL EXAM REVIEW -- Biliary Disorders (Ch 44) -- Deep Drill
// 14 questions, 90% hard / 10% medium, no easy. NEW scenarios distinct from exam2/data/biliary-dd.js (16 Q)
// and from the final simulator's Ch44 questions. Fills gaps: enterohepatic circulation, bilirubin/urobilinogen
// mechanism, gallstone composition, estrogen risk factor, ERCP glucagon/intra-procedure monitoring, post-op priority
// list, post-episode diet, acute vs chronic pancreatitis patho, diffuse pain, palpable mass, WBC elevation.
// correct: 0 always -- engine shuffles option order at runtime.
window.QUESTIONS = [
  {
    stem: "A nursing student asks the nurse to explain the enterohepatic circulation. What is the nurse's best explanation?",
    options: ["Bile salts travel from the hepatocytes to the bile, into the intestine, and are then reabsorbed into the portal blood to return to the liver", "Bile is produced exclusively by the gallbladder and is never reabsorbed once it enters the intestine", "Bilirubin is filtered by the kidneys and excreted entirely in the urine without any intestinal involvement", "Bile salts are destroyed after a single use and must be entirely resynthesized by the liver for each meal"],
    correct: 0,
    rationale: "The enterohepatic circulation describes the pathway of bile salts from the hepatocytes into the bile, through the intestine, and back into the portal blood for return to the liver, where they are once again excreted into the bile. Bile is produced by hepatocytes, not the gallbladder, and bile salts are recycled rather than destroyed or excreted entirely in urine."
  },
  {
    stem: "A patient with a gallstone obstructing the common bile duct develops tea-colored urine and clay-colored stools. What is the underlying mechanism the nurse understands is causing these findings?",
    options: ["Impaired bile flow prevents bilirubin from entering the intestine, increasing renal excretion of urobilinogen while decreasing stool excretion", "Increased bile flow into the intestine is overwhelming the kidneys, causing excess urobilinogen excretion", "The gallstone is directly causing hemolysis of red blood cells, elevating unconjugated bilirubin", "Increased dietary fat intake is directly causing these color changes independent of bile flow"],
    correct: 0,
    rationale: "When bile flow is impeded by a gallstone, bilirubin cannot enter the intestine as it normally would, so blood bilirubin levels rise; this causes increased renal excretion of urobilinogen (producing tea-colored urine) and decreased urobilinogen excretion in the stool (producing clay-colored stool). This is not related to hemolysis or dietary fat intake directly."
  },
  {
    stem: "A patient asks the nurse what most gallstones are made of. What is the nurse's best response?",
    options: ["Most gallstones are cholesterol stones, forming when cholesterol levels in bile become too high", "Most gallstones are composed primarily of calcium oxalate crystals", "Most gallstones are composed of uric acid crystals similar to kidney stones", "Most gallstones form from excess bilirubin alone with no cholesterol involvement"],
    correct: 0,
    rationale: "Cholesterol stones account for the majority of gallstone cases, forming when cholesterol, a normal but water-insoluble constituent of bile, becomes present in excessive concentrations relative to other bile components. Calcium oxalate and uric acid are associated with kidney stones, not the majority of gallstones."
  },
  {
    stem: "A patient taking high-dose estrogen therapy for prostate cancer treatment develops new right upper quadrant discomfort. What risk factor does the nurse recognize as relevant to this presentation?",
    options: ["High-dose estrogen therapy is a known risk factor for the development of gallstones", "Estrogen therapy has no known association with biliary disease in any patient population", "Estrogen therapy only increases gallstone risk in female patients, not male patients", "This presentation is unrelated to the estrogen therapy and warrants no further investigation of the biliary system"],
    correct: 0,
    rationale: "High-dose estrogen therapy, such as that sometimes used in prostate cancer treatment, is a recognized risk factor for gallstone development regardless of the patient's sex, alongside low-dose estrogen therapy, obesity, and rapid weight loss. This presentation should prompt consideration of biliary disease given this risk factor."
  },
  {
    stem: "A patient is undergoing an ERCP and the provider administers IV glucagon during the procedure. What is the primary purpose of this medication in this context?",
    options: ["To decrease duodenal peristalsis and make cannulation of the bile duct easier", "To reverse the sedation used during the procedure", "To treat hypoglycemia that commonly occurs during ERCP", "To prevent post-procedure nausea and vomiting"],
    correct: 0,
    rationale: "Glucagon is administered during ERCP to decrease duodenal peristalsis, which makes cannulation of the biliary tree easier for the provider performing the procedure. It is not used to reverse sedation, treat hypoglycemia, or prevent postoperative nausea in this context."
  },
  {
    stem: "A nurse is monitoring a patient during an ERCP procedure under moderate sedation. Which findings should the nurse watch for as potential complications during the procedure itself?",
    options: ["Respiratory depression, hypotension, and vomiting", "Hyperglycemia, bradycardia, and hypertension", "Elevated temperature, tachypnea, and diaphoresis", "Hyperactive bowel sounds, diarrhea, and abdominal distention"],
    correct: 0,
    rationale: "During ERCP with moderate sedation, the nurse closely monitors for respiratory depression, hypotension, and vomiting, since these are known risks associated with the sedation and the procedure itself. Hyperglycemia, elevated temperature, and hyperactive bowel sounds are not the primary intra-procedural concerns being monitored."
  },
  {
    stem: "A nurse is planning postoperative care for a patient following a cholecystectomy. Which of the following reflects the correct set of nursing priorities for this patient?",
    options: ["Relieving pain, improving respiratory status, maintaining skin integrity, promoting biliary drainage, improving nutritional status, and monitoring for complications", "Restricting all mobility, withholding oral intake indefinitely, and limiting pain medication to prevent oversedation", "Focusing exclusively on wound care while deferring respiratory and nutritional assessment to the following day", "Prioritizing early discharge above all other nursing considerations in the immediate postoperative period"],
    correct: 0,
    rationale: "The established nursing priorities following cholecystectomy include relieving pain, improving respiratory status, maintaining skin integrity, promoting biliary drainage, improving nutritional status, and monitoring for potential complications. Restricting mobility indefinitely, withholding oral intake without cause, or prioritizing discharge over these clinical priorities would not reflect appropriate postoperative care."
  },
  {
    stem: "A patient is recovering from an acute episode of cholecystitis and is being advanced from NPO status. What diet does the nurse anticipate will be ordered immediately following the acute episode?",
    options: ["Low-fat liquids", "A regular diet with no restrictions", "High-fat, high-protein solid foods to promote healing", "Clear liquids only, with no fat restriction specified"],
    correct: 0,
    rationale: "Immediately following an acute episode of cholecystitis, the diet typically ordered is low-fat liquids, since fat intake stimulates gallbladder contraction and can trigger recurrent symptoms. A regular diet or high-fat foods would be inappropriate this soon after an acute episode, and simply specifying clear liquids without fat restriction misses the key dietary consideration."
  },
  {
    stem: "A nursing student asks how acute pancreatitis differs from chronic pancreatitis in terms of underlying pathophysiology. What is the nurse's best explanation?",
    options: ["Acute pancreatitis involves duct obstruction with enzyme backup causing autodigestion, while chronic pancreatitis involves progressive fibrous replacement of pancreatic cells", "Acute and chronic pancreatitis share an identical underlying pathophysiologic process that differs only in symptom duration", "Chronic pancreatitis is simply a mild, ongoing version of the autodigestion process seen in acute pancreatitis", "Acute pancreatitis involves fibrous tissue replacement, while chronic pancreatitis involves an isolated single episode of enzyme backup"],
    correct: 0,
    rationale: "Acute pancreatitis occurs when the pancreatic duct becomes obstructed and enzymes back up, causing autodigestion and inflammation, while chronic pancreatitis is a progressive inflammatory disorder in which pancreatic cells are replaced by fibrous tissue over time. These are distinct pathophysiologic processes, not the same process differing only in duration."
  },
  {
    stem: "A patient with long-standing chronic pancreatitis develops worsening jaundice and increased abdominal pain. What mechanism does the nurse understand may be contributing to this presentation?",
    options: ["Increased pressure within the fibrotic pancreas obstructing both the pancreatic duct and the common bile duct", "An acute, isolated episode of gallstone formation unrelated to the chronic pancreatitis", "Resolution of the chronic pancreatitis with a new, unrelated hepatic process causing jaundice", "Decreased pressure within the pancreas allowing bile to flow more freely, paradoxically increasing bilirubin levels"],
    correct: 0,
    rationale: "As chronic pancreatitis progresses, increasing pressure within the pancreas from fibrous tissue replacement can obstruct both the pancreatic duct and the adjacent common bile duct, contributing to jaundice in addition to abdominal pain. This is a direct consequence of the chronic disease process, not an unrelated or resolving process."
  },
  {
    stem: "A patient with acute pancreatitis describes the abdominal pain as spreading throughout the abdomen without a clear point of maximal intensity. How does the nurse interpret this description?",
    options: ["This diffuse, difficult-to-localize quality is a classic characteristic of pancreatitis pain", "This description suggests the pain is not related to the pancreatitis and warrants a separate workup", "Diffuse pain indicates the pancreatitis has resolved and localized inflammation has ended", "This pain pattern is inconsistent with pancreatitis and suggests a diagnostic error"],
    correct: 0,
    rationale: "Pancreatitis pain is frequently diffuse and difficult to localize, which is a classic characteristic of this condition, distinguishing it from more sharply localized abdominal pain seen in other conditions. This description is consistent with, not inconsistent with, a pancreatitis diagnosis and does not indicate resolution."
  },
  {
    stem: "A patient with acute pancreatitis is found on physical exam to have abdominal distention and a poorly defined, palpable mass in the epigastric region. What does the nurse recognize about this finding?",
    options: ["This is a recognized physical exam finding associated with acute pancreatitis", "This finding is inconsistent with pancreatitis and suggests an alternative diagnosis such as appendicitis", "This finding indicates the patient requires immediate surgical exploration regardless of other symptoms", "This finding is unrelated to the gastrointestinal system and suggests a musculoskeletal cause"],
    correct: 0,
    rationale: "Abdominal distention accompanied by a poorly defined, palpable abdominal mass is a recognized finding that can accompany acute pancreatitis, along with decreased peristalsis and vomiting that fails to relieve symptoms. This is consistent with, not inconsistent with, the diagnosis and does not by itself mandate immediate surgery."
  },
  {
    stem: "A patient with suspected acute pancreatitis has laboratory results pending. In addition to elevated amylase and lipase, which additional laboratory finding does the nurse anticipate?",
    options: ["Elevated white blood cell count", "Decreased white blood cell count", "Elevated serum potassium exclusively, with no other abnormalities", "A normal complete blood count with no expected abnormalities"],
    correct: 0,
    rationale: "In addition to elevated amylase and lipase levels, patients with acute pancreatitis typically have an elevated white blood cell count reflecting the inflammatory process, along with hypocalcemia that correlates with disease severity. A decreased WBC count or an entirely normal CBC would not be the expected finding in this inflammatory condition."
  }
];
