export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Programming & Analytics",
    items: ["Python", "SQL", "Excel", "Tableau"],
  },
  {
    category: "Machine Learning & AI",
    items: [
      "Predictive Modeling",
      "Logistic Regression",
      "Decision Trees",
      "Random Forest",
      "Gradient Boosting",
      "NLP",
      "Sentiment Analysis",
    ],
  },
  {
    category: "Libraries & Frameworks",
    items: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
  },
  {
    category: "Explainable AI",
    items: ["SHAP", "LIME"],
  },
  {
    category: "Analytics Competencies",
    items: [
      "EDA",
      "Statistical Analysis",
      "Feature Engineering",
      "Data Visualization",
      "Data Cleaning",
      "Model Evaluation",
      "Predictive Analytics",
    ],
  },
  {
    category: "Business Skills",
    items: [
      "Data-Driven Decision Making",
      "Reporting & Insights",
      "Cross-Functional Collaboration",
      "Process Optimization",
    ],
  },
];