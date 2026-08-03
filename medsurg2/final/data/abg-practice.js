// MedSurg II FINAL EXAM REVIEW -- ABG Practice -- simple multiple choice (no ROME/Tic-Tac-Toe tool)
// 16 questions, all NEW patient scenarios and values distinct from medsurg2/exam1/abg-interpreter.html's 20 scenarios.
// Covers all 4 primary disturbances across uncompensated / partially compensated / fully compensated, plus one normal.
// correct: 0 always -- engine shuffles option order at runtime.
window.QUESTIONS = [
  {
    stem: "A patient with a flail chest from a motor vehicle collision is breathing shallowly and rapidly. ABG: pH 7.28, PaCO2 55 mmHg, HCO3- 24 mEq/L. How does the nurse interpret this result?",
    options: ["Uncompensated respiratory acidosis", "Uncompensated metabolic acidosis", "Partially compensated respiratory acidosis", "Fully compensated respiratory acidosis"],
    correct: 0,
    rationale: "pH 7.28 is acidotic and PaCO2 55 is elevated, placing both in the acid category, while HCO3- 24 is still normal, meaning the kidneys have not yet compensated. This is uncompensated respiratory acidosis, consistent with hypoventilation from chest wall instability."
  },
  {
    stem: "A patient with a long-standing COPD exacerbation now appears more confused. ABG: pH 7.33, PaCO2 62 mmHg, HCO3- 30 mEq/L. How does the nurse interpret this result?",
    options: ["Partially compensated respiratory acidosis", "Uncompensated respiratory acidosis", "Fully compensated respiratory acidosis", "Partially compensated metabolic alkalosis"],
    correct: 0,
    rationale: "pH 7.33 is acidotic, PaCO2 62 is elevated (acid), and HCO3- 30 is also elevated (base) as the kidneys attempt to compensate. Since the pH has not returned to normal despite both values being abnormal, this is partially compensated respiratory acidosis, consistent with an acute-on-chronic COPD picture."
  },
  {
    stem: "A patient with obesity hypoventilation syndrome is seen in clinic at their functional baseline with no acute complaints. ABG: pH 7.35, PaCO2 55 mmHg, HCO3- 30 mEq/L. How does the nurse interpret this result?",
    options: ["Fully compensated respiratory acidosis", "Uncompensated respiratory acidosis", "Fully compensated metabolic alkalosis", "Normal ABG"],
    correct: 0,
    rationale: "pH 7.35 is at the low-normal edge, leaning toward acid. PaCO2 55 is elevated and HCO3- 30 is elevated, meaning both values are abnormal but the pH has returned to normal range. Since the pH leans toward acid, the primary disturbance is respiratory acidosis, and since it has normalized, this is fully compensated respiratory acidosis, the expected chronic baseline in this condition."
  },
  {
    stem: "A patient climbing at high altitude develops rapid breathing and lightheadedness. ABG: pH 7.49, PaCO2 29 mmHg, HCO3- 23 mEq/L. How does the nurse interpret this result?",
    options: ["Uncompensated respiratory alkalosis", "Uncompensated metabolic alkalosis", "Partially compensated respiratory alkalosis", "Fully compensated respiratory alkalosis"],
    correct: 0,
    rationale: "pH 7.49 is alkalotic and PaCO2 29 is low, both in the base category, while HCO3- 23 is still normal. This is uncompensated respiratory alkalosis, caused by hyperventilation in response to the lower oxygen tension at high altitude."
  },
  {
    stem: "A young child with severe rotavirus-related diarrhea for 4 days is brought to the emergency department lethargic. ABG: pH 7.28, PaCO2 36 mmHg, HCO3- 15 mEq/L. How does the nurse interpret this result?",
    options: ["Uncompensated metabolic acidosis", "Uncompensated respiratory acidosis", "Partially compensated metabolic acidosis", "Fully compensated metabolic acidosis"],
    correct: 0,
    rationale: "pH 7.28 is acidotic and HCO3- 15 is low, both in the acid category, while PaCO2 36 remains within normal limits, meaning the lungs have not yet compensated. This is uncompensated metabolic acidosis, consistent with significant bicarbonate loss from severe diarrhea."
  },
  {
    stem: "A patient in septic shock has a lactate of 6.8 mmol/L and labored breathing. ABG: pH 7.25, PaCO2 25 mmHg, HCO3- 12 mEq/L. How does the nurse interpret this result?",
    options: ["Partially compensated metabolic acidosis", "Uncompensated metabolic acidosis", "Partially compensated respiratory acidosis", "Fully compensated metabolic acidosis"],
    correct: 0,
    rationale: "pH 7.25 is acidotic and HCO3- 12 is low (acid), while PaCO2 25 is also low (base) as the lungs hyperventilate to compensate for the metabolic acidosis. Since the pH remains abnormal despite this respiratory compensation, this is partially compensated metabolic acidosis, consistent with lactic acidosis from septic shock."
  },
  {
    stem: "A patient with stable chronic kidney disease is seen for a scheduled nephrology follow-up with no new complaints. ABG: pH 7.35, PaCO2 30 mmHg, HCO3- 18 mEq/L. How does the nurse interpret this result?",
    options: ["Fully compensated metabolic acidosis", "Uncompensated metabolic acidosis", "Fully compensated respiratory acidosis", "Partially compensated metabolic acidosis"],
    correct: 0,
    rationale: "pH 7.35 is at the low-normal edge, leaning toward acid. HCO3- 18 is low and PaCO2 30 is low, meaning both values are abnormal, but the pH has returned to normal. Since the pH leans acidic and HCO3- is the primary abnormal metabolic value, this is fully compensated metabolic acidosis, the expected stable picture in chronic kidney disease."
  },
  {
    stem: "A patient recovering from bowel surgery has had continuous nasogastric suction for 3 days and now reports muscle twitching. ABG: pH 7.49, PaCO2 42 mmHg, HCO3- 32 mEq/L. How does the nurse interpret this result?",
    options: ["Uncompensated metabolic alkalosis", "Uncompensated respiratory alkalosis", "Partially compensated metabolic alkalosis", "Fully compensated metabolic alkalosis"],
    correct: 0,
    rationale: "pH 7.49 is alkalotic and HCO3- 32 is elevated, both in the base category, while PaCO2 42 remains within normal limits, meaning no respiratory compensation has occurred yet. This is uncompensated metabolic alkalosis, consistent with hydrochloric acid loss from prolonged NG suctioning."
  },
  {
    stem: "A patient taking a loop diuretic for heart failure develops progressive weakness over several days. ABG: pH 7.47, PaCO2 48 mmHg, HCO3- 34 mEq/L. How does the nurse interpret this result?",
    options: ["Partially compensated metabolic alkalosis", "Uncompensated metabolic alkalosis", "Fully compensated metabolic alkalosis", "Partially compensated respiratory alkalosis"],
    correct: 0,
    rationale: "pH 7.47 is alkalotic and HCO3- 34 is elevated (base), while PaCO2 48 is also elevated (acid) as the lungs mildly hypoventilate to compensate for the metabolic alkalosis. Since the pH remains abnormal despite this respiratory response, this is partially compensated metabolic alkalosis, consistent with diuretic-induced hydrogen and chloride loss."
  },
  {
    stem: "A patient is being cleared for elective surgery with a routine pre-operative ABG. Results: pH 7.40, PaCO2 40 mmHg, HCO3- 24 mEq/L. How does the nurse interpret this result?",
    options: ["Normal ABG, no acid-base disturbance", "Fully compensated respiratory acidosis", "Fully compensated metabolic alkalosis", "Uncompensated respiratory alkalosis"],
    correct: 0,
    rationale: "All three values, pH 7.40, PaCO2 40, and HCO3- 24, fall squarely within normal limits. This is a normal ABG with no acid-base disturbance present."
  },
  {
    stem: "A patient found unresponsive at home is brought to the emergency department with pinpoint pupils and a respiratory rate of 4 breaths per minute. ABG: pH 7.24, PaCO2 65 mmHg, HCO3- 25 mEq/L. How does the nurse interpret this result?",
    options: ["Uncompensated respiratory acidosis", "Uncompensated metabolic acidosis", "Partially compensated respiratory acidosis", "Fully compensated respiratory acidosis"],
    correct: 0,
    rationale: "pH 7.24 is acidotic and PaCO2 65 is significantly elevated, both in the acid category, while HCO3- 25 remains normal, meaning the kidneys have not had time to compensate. This is uncompensated respiratory acidosis, consistent with acute hypoventilation from an opioid overdose."
  },
  {
    stem: "A patient with a long history of generalized anxiety disorder and chronic hyperventilation is seen for a routine visit at baseline. ABG: pH 7.44, PaCO2 32 mmHg, HCO3- 20 mEq/L. How does the nurse interpret this result?",
    options: ["Fully compensated respiratory alkalosis", "Uncompensated respiratory alkalosis", "Fully compensated metabolic acidosis", "Partially compensated respiratory alkalosis"],
    correct: 0,
    rationale: "pH 7.44 is at the high-normal edge, leaning toward base. PaCO2 32 is low and HCO3- 20 is low, meaning both values are abnormal, but the pH has returned to normal range. Since the pH leans basic and PaCO2 is the primary abnormal respiratory value, this is fully compensated respiratory alkalosis, consistent with chronic hyperventilation."
  },
  {
    stem: "A patient several hours after a large aspirin overdose now shows a shift toward metabolic acidosis as the salicylate's direct metabolic effects take over from the earlier hyperventilation phase. ABG: pH 7.30, PaCO2 34 mmHg, HCO3- 16 mEq/L. How does the nurse interpret this result?",
    options: ["Uncompensated metabolic acidosis", "Uncompensated respiratory alkalosis", "Partially compensated metabolic acidosis", "Fully compensated metabolic acidosis"],
    correct: 0,
    rationale: "pH 7.30 is acidotic and HCO3- 16 is low, both in the acid category, while PaCO2 34 remains within the low-normal range without meeting the threshold for meaningful respiratory compensation in this context. This reflects uncompensated metabolic acidosis, the later phase of salicylate toxicity as the direct metabolic acid load builds."
  },
  {
    stem: "A patient with severe pneumonia has been breathing rapidly for hours and now appears to be tiring, with breaths becoming slower and shallower. ABG: pH 7.31, PaCO2 58 mmHg, HCO3- 28 mEq/L. How does the nurse interpret this result?",
    options: ["Partially compensated respiratory acidosis", "Uncompensated respiratory acidosis", "Fully compensated respiratory acidosis", "Partially compensated metabolic acidosis"],
    correct: 0,
    rationale: "pH 7.31 is acidotic and PaCO2 58 is elevated (acid), while HCO3- 28 is also elevated (base) as the kidneys begin retaining bicarbonate to compensate. Since the pH remains abnormal despite this compensation, this is partially compensated respiratory acidosis, consistent with a patient developing respiratory fatigue and early CO2 retention."
  },
  {
    stem: "A patient on a mechanical ventilator has the respiratory rate set too high by mistake. ABG: pH 7.48, PaCO2 28 mmHg, HCO3- 23 mEq/L. How does the nurse interpret this result?",
    options: ["Uncompensated respiratory alkalosis", "Uncompensated metabolic alkalosis", "Partially compensated respiratory alkalosis", "Fully compensated respiratory alkalosis"],
    correct: 0,
    rationale: "pH 7.48 is alkalotic and PaCO2 28 is low, both in the base category, while HCO3- 23 remains normal, meaning no metabolic compensation has occurred. This is uncompensated respiratory alkalosis, consistent with iatrogenic overventilation on the ventilator."
  },
  {
    stem: "A patient with hyperemesis gravidarum has had persistent vomiting for over a week. ABG: pH 7.46, PaCO2 46 mmHg, HCO3- 30 mEq/L. How does the nurse interpret this result?",
    options: ["Partially compensated metabolic alkalosis", "Uncompensated metabolic alkalosis", "Fully compensated metabolic alkalosis", "Partially compensated respiratory acidosis"],
    correct: 0,
    rationale: "pH 7.46 is alkalotic and HCO3- 30 is elevated (base), while PaCO2 46 is also elevated (acid) as the lungs mildly hypoventilate to compensate for the metabolic alkalosis from prolonged vomiting. Since the pH remains abnormal despite this response, this is partially compensated metabolic alkalosis."
  }
];
