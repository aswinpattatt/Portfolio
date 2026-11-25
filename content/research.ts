export type ResearchEntry = {
  type: "thesis" | "publication";
  title: string;
  context: string;
  details: string[];
  pdf?: string;
  pdflabel?: string;
};

export const research: ResearchEntry[] = [
  {
    type: "thesis",
    title: "Explainable AI for Business Predictive Models",
    context: "Master's Thesis",
    details: [
      "Developed predictive machine learning models (Logistic Regression, Decision Trees, Random Forest, Gradient Boosting) for business-focused financial prediction and analytics",
      "Applied SHAP and LIME explainability frameworks to identify key business drivers and improve interpretability of predictive insights",
      "Evaluated models using Accuracy, Precision, Recall, and F1-score to support data-driven decision-making",
    ],
    pdf: "/pdfs/explainable-ai-business-predictive-models.pdf",
    pdflabel: "View Thesis",
  },
  {
  type: "publication",
  title: "Customer Perception of Mobile Payment Applications",
  context: "Chapter 38 · Co-authored Publication",
  details: [
    "Co-authored a research study examining customer perceptions, preferences, and challenges associated with mobile payment applications in Ernakulam District",
    "Conducted survey-based research and analyzed customer usage patterns, preferences, satisfaction, and factors influencing mobile payment adoption",
    "Published as Chapter 38 in Intelligent Horizons: Empowering Business & Education through AI Integration (ISBN: 978-81-962550-5-3)"
  ],
  pdf: "/research/customer-perception-mobile-payment-applications.pdf",
  pdflabel: "View Publication",
}
];