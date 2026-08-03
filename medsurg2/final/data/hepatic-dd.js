// MedSurg II FINAL EXAM REVIEW -- Hepatic Disorders (Ch 43) -- Deep Drill
// 14 questions, 90% hard / 10% medium, no easy. NEW scenarios distinct from exam2/data/hepatic-dd.js (17 Q)
// and from the final simulator's Ch43 questions. Fills gaps: ammonia/AST-ALT lab interpretation, physical assessment
// findings, portal HTN mechanism, cirrhosis staging, constructional apraxia/AAOx3, meds (neomycin/TIPS/albumin/vitamins),
// acute hepatic failure definition.
// correct: 0 always -- engine shuffles option order at runtime.
window.QUESTIONS = [
  {
    stem: "A patient with suspected liver dysfunction has a serum ammonia level of 45 mcg/dL. How should the nurse interpret this result?",
    options: ["This falls within the normal range of 10 to 80 mcg/dL and does not indicate hepatic dysfunction on its own", "This is significantly elevated and indicates the patient is in hepatic coma", "This is critically low and indicates the patient's liver is regenerating normally", "This result cannot be interpreted without a corresponding bilirubin level"],
    correct: 0,
    rationale: "The normal range for serum ammonia is 10 to 80 mcg/dL, so a level of 45 mcg/dL falls within normal limits and does not by itself indicate hepatic dysfunction or encephalopathy. This value would not suggest hepatic coma or liver regeneration, and ammonia can be interpreted on its own as a marker of the liver's ability to clear protein byproducts."
  },
  {
    stem: "A patient's laboratory results show significantly elevated AST and ALT levels. What does the nurse understand these findings indicate?",
    options: ["Damage to liver cells, since these enzymes are released when hepatocytes are injured", "Impaired kidney function, since these enzymes are primarily cleared by the kidneys", "Active gastrointestinal bleeding requiring immediate transfusion", "A normal finding in patients recovering from viral hepatitis"],
    correct: 0,
    rationale: "AST and ALT are liver enzymes that are released into the bloodstream when hepatocytes (liver cells) are damaged, so elevated levels indicate ongoing liver cell injury. These enzymes do not primarily reflect kidney function or active GI bleeding, and elevated levels are not simply an expected, insignificant finding during hepatitis recovery."
  },
  {
    stem: "A nurse performing a skin assessment on a patient with cirrhosis notes small, spider-like clusters of blood vessels on the chest and reddened palms. What are these findings called, and what do they reflect?",
    options: ["Spider angiomas and palmar erythema, both associated with chronic liver disease", "Petechiae and ecchymosis, both indicating an acute coagulation disorder", "Telangiectasia and cyanosis, both indicating peripheral vascular disease", "Urticaria and pallor, both indicating an allergic drug reaction"],
    correct: 0,
    rationale: "Spider angiomas (small, spider-like vascular lesions) and palmar erythema (reddened palms) are classic skin findings associated with chronic liver disease, thought to result from altered hormone metabolism. These are not the same as petechiae/ecchymosis from coagulopathy or findings associated with vascular disease or allergic reactions."
  },
  {
    stem: "A male patient with advanced cirrhosis is being assessed by the nurse. Which additional finding related to hormonal changes should the nurse specifically assess for in this population?",
    options: ["Gynecomastia and testicular atrophy", "Precocious puberty and increased libido", "Hirsutism and deepening of the voice", "Increased muscle mass and enhanced fertility"],
    correct: 0,
    rationale: "Male patients with cirrhosis are assessed for gynecomastia (breast tissue enlargement) and testicular atrophy due to altered hormone metabolism from impaired liver function, since the diseased liver cannot adequately metabolize estrogen. Increased libido, hirsutism, and increased muscle mass are not expected findings in this context."
  },
  {
    stem: "A patient with cirrhosis and portal hypertension develops both ascites and esophageal varices. What does the nurse understand about the shared underlying mechanism connecting these two complications?",
    options: ["Obstructed blood flow through the liver increases pressure throughout the portal venous system, contributing to both complications", "Ascites causes esophageal varices directly through increased abdominal pressure pushing blood upward", "Esophageal varices cause ascites directly through blood leaking into the peritoneal cavity", "The two complications are unrelated and occur through completely separate pathophysiologic processes"],
    correct: 0,
    rationale: "Portal hypertension, caused by obstructed blood flow through the scarred liver, increases pressure throughout the portal venous system, which contributes to both ascites (through fluid shifts and altered venous pressure) and esophageal varices (through blood rerouting into fragile vessels not designed for that volume). These two complications share this common underlying mechanism rather than causing each other directly."
  },
  {
    stem: "A patient with cirrhosis reports clay-colored stools and tea-colored urine. What does the nurse recognize as the underlying cause of these findings?",
    options: ["Disruption of normal bile flow related to liver dysfunction", "Dehydration from inadequate fluid intake", "A dietary change unrelated to liver function", "An expected finding from lactulose therapy"],
    correct: 0,
    rationale: "Clay-colored stools and tea-colored urine result from disrupted bile flow related to liver dysfunction, since bile pigments that would normally color the stool are instead excreted through the urine when bile flow is impaired. This is not related to dehydration, unrelated dietary changes, or a lactulose side effect."
  },
  {
    stem: "A nurse asks a patient with hepatic encephalopathy to draw a simple five-pointed star. The patient is unable to reproduce the figure accurately. What does the nurse recognize this finding as, and how is it used clinically?",
    options: ["Constructional apraxia; daily handwriting or drawing samples are used to track progression or reversal of encephalopathy", "A normal finding unrelated to hepatic encephalopathy that requires no documentation", "A sign of an acute stroke requiring immediate neurologic imaging", "Evidence of a vision problem requiring an ophthalmology consultation"],
    correct: 0,
    rationale: "Inability to reproduce a simple two- or three-dimensional figure is called constructional apraxia, and a daily handwriting or drawing sample can provide graphic evidence of the progression or reversal of hepatic encephalopathy over time. This is a recognized clinical tool, not an unrelated finding, stroke indicator, or vision problem."
  },
  {
    stem: "A nurse is assessing a patient with hepatic encephalopathy for orientation status. Which components should the nurse specifically evaluate as part of this assessment?",
    options: ["Person, place, and time", "Pain level, appetite, and mobility", "Pupil response, reflexes, and grip strength", "Heart rate, respiratory rate, and temperature"],
    correct: 0,
    rationale: "Orientation to person, place, and time (AAOx3) is a core component of assessing mental status changes in hepatic encephalopathy, since disorientation is one of the earliest and most trackable signs of worsening encephalopathy. Pain, appetite, reflexes, and vital signs are assessed separately and are not the specific components of an orientation assessment."
  },
  {
    stem: "A patient with hepatic encephalopathy is prescribed neomycin in addition to lactulose. What is the purpose of adding this medication?",
    options: ["To reduce intestinal bacteria that contribute to ammonia production", "To directly bind and remove ammonia already present in the bloodstream", "To treat a suspected concurrent urinary tract infection", "To replace the need for lactulose entirely once therapeutic levels are reached"],
    correct: 0,
    rationale: "Neomycin (or metronidazole) is used in hepatic encephalopathy to reduce the population of intestinal bacteria that break down protein and contribute to ammonia production, working alongside lactulose rather than replacing it. It does not directly bind ammonia in the bloodstream or treat a urinary tract infection."
  },
  {
    stem: "A patient with cirrhosis and refractory ascites, despite maximal diuretic therapy and sodium restriction, is being evaluated for further intervention. What procedure does the nurse anticipate the provider may recommend?",
    options: ["Transjugular intrahepatic portosystemic shunt (TIPS)", "Emergent liver transplantation as the only remaining option", "Discontinuation of all ascites-related treatment", "A permanent indwelling peritoneal catheter with no other management"],
    correct: 0,
    rationale: "A transjugular intrahepatic portosystemic shunt (TIPS) may be recommended for patients with ascites that is refractory to diuretics and sodium restriction, since it creates a channel to reduce portal pressure and decrease fluid accumulation. This is a less drastic option than emergent transplantation and is not simply discontinuing treatment."
  },
  {
    stem: "A patient undergoing a large-volume paracentesis for ascites is prescribed IV salt-poor albumin following the procedure. What is the primary rationale for this medication?",
    options: ["To help prevent post-paracentesis circulatory dysfunction by supporting intravascular oncotic pressure", "To directly treat the patient's underlying liver disease", "To lower the patient's serum ammonia level after the procedure", "To replace red blood cells lost during the paracentesis procedure"],
    correct: 0,
    rationale: "Salt-poor albumin is administered after large-volume paracentesis to help maintain intravascular oncotic pressure and prevent post-paracentesis circulatory dysfunction, which can occur when large volumes of ascitic fluid are removed. It does not treat the underlying liver disease directly, lower ammonia, or replace red blood cells."
  },
  {
    stem: "A patient develops sudden severe jaundice, and liver function rapidly declines within 6 weeks of the first symptoms, with no prior history of chronic liver disease. What term does the nurse recognize describes this presentation?",
    options: ["Acute hepatic failure", "Chronic hepatic cirrhosis", "Compensated cirrhosis", "Nonalcoholic steatohepatitis (NASH)"],
    correct: 0,
    rationale: "Acute hepatic failure refers to sudden, severe onset of liver failure occurring within 8 weeks of the first symptoms of jaundice in a patient without prior chronic liver disease, formerly called fulminant hepatic failure. This is distinct from chronic cirrhosis, compensated cirrhosis (which develops over years), and NASH, which is a slower progressive condition."
  },
  {
    stem: "A patient with cirrhosis is prescribed a vitamin supplementation regimen including vitamins B, A, C, K, and folic acid. What is the primary rationale for this comprehensive supplementation?",
    options: ["The diseased liver has impaired ability to store and metabolize these vitamins, and deficiencies are common in chronic liver disease", "These vitamins directly reverse the fibrotic changes seen in cirrhosis", "This supplementation regimen replaces the need for dietary protein restriction", "These vitamins are given solely to treat the hyperbilirubinemia associated with cirrhosis"],
    correct: 0,
    rationale: "The liver plays a central role in storing and metabolizing many vitamins, and patients with cirrhosis commonly develop deficiencies due to impaired liver function, poor intake, and malabsorption, making comprehensive supplementation an important part of nutritional support. These vitamins do not reverse fibrosis, replace protein restriction, or specifically treat hyperbilirubinemia."
  },
  {
    stem: "A patient with cirrhosis is being taught about limiting fluid and sodium intake as part of ascites management. The patient asks why both restrictions are necessary rather than just one. What is the nurse's best explanation?",
    options: ["Sodium retention drives water retention, so limiting both together is more effective at reducing fluid accumulation than restricting either alone", "Fluid restriction alone is always sufficient and sodium restriction provides no additional benefit", "Sodium restriction alone is always sufficient and fluid restriction provides no additional benefit", "The two restrictions work through completely unrelated mechanisms and address different complications"],
    correct: 0,
    rationale: "Sodium retention drives water retention in the body, so combining sodium restriction with fluid restriction addresses the underlying pathophysiology of ascites more effectively than restricting only one, since the two are physiologically linked rather than independent or unrelated interventions."
  }
];
