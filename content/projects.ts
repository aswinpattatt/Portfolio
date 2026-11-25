export type Project = {
  slug: string;
  title: string;
  category: "AI / GenAI" | "Machine Learning" | "NLP" | "Data Visualization";
  tags: string[];
  summary: string;
  highlights: string[];
  featured: boolean;
  problem: string;
  approach: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "explainable-ai-business-predictive-models",
    title: "Explainable AI for Business Predictive Models",
    category: "Machine Learning",
    tags: ["Python", "Logistic Regression", "Random Forest", "Gradient Boosting", "SHAP", "LIME"],
    summary:
      "Master's thesis project applying explainable AI techniques to business-focused predictive models, balancing predictive accuracy with interpretability for decision-makers.",
    highlights: [
      "Developed predictive machine learning models using Logistic Regression, Decision Trees, Random Forest, and Gradient Boosting for business-focused financial prediction and analytics",
      "Executed exploratory data analysis, feature engineering, and statistical evaluation to improve model performance and predictive accuracy",
      "Utilised SHAP and LIME explainability frameworks to identify key business drivers and improve interpretability of predictive insights",
      "Evaluated models using Accuracy, Precision, Recall, and F1-score to support data-driven decision-making and segmentation analysis",
    ],
    featured: true,
    problem:
      "Business-focused predictive models are often accurate but opaque — decision-makers need to understand why a model makes a prediction, not just what it predicts, to trust and act on it.",
    approach: [
      "Built multiple predictive models — Logistic Regression, Decision Trees, Random Forest, and Gradient Boosting — for business-focused financial prediction",
      "Ran exploratory data analysis, feature engineering, and statistical evaluation to improve model performance and predictive accuracy",
      "Applied SHAP and LIME explainability frameworks to surface which features most influenced each model's predictions",
      "Evaluated all models on Accuracy, Precision, Recall, and F1-score to compare performance and interpretability trade-offs",
    ],
    outcome:
      "Delivered a comparative framework showing how explainability techniques can be layered onto standard predictive models to support data-driven, business-facing decision-making and segmentation analysis.",
  },
  {
    slug: "streaming-platform-churn-prediction",
    title: "Streaming Platform Churn Prediction",
    category: "Machine Learning",
    tags: ["Python", "Predictive Analytics", "Feature Engineering"],
    summary:
      "Predictive analytics model to identify churn risk and retention opportunities for a subscription streaming platform.",
    highlights: [
      "Built predictive analytics models using customer engagement and behavioral datasets to identify churn risk patterns and retention opportunities",
      "Performed data preprocessing, feature engineering, and exploratory analysis to improve prediction quality and analytical insights",
      "Generated business recommendations focused on customer retention and user engagement improvement strategies",
    ],
    featured: true,
    problem:
      "Subscription platforms lose revenue when at-risk customers churn without warning — the goal was to flag churn risk early enough for retention efforts to act on it.",
    approach: [
      "Built predictive analytics models on customer engagement and behavioral data to identify churn risk patterns",
      "Performed data preprocessing, feature engineering, and exploratory analysis to improve prediction quality",
      "Translated model outputs into business recommendations focused on retention and engagement strategy",
    ],
    outcome:
      "Produced a churn-risk model paired with concrete retention and engagement recommendations, connecting the analytics directly to actionable business strategy.",
  },
  {
    slug: "product-review-sentiment-analysis",
    title: "Product Review Sentiment Analysis",
    category: "NLP",
    tags: ["Python", "NLP", "Sentiment Analysis", "Text Preprocessing"],
    summary:
      "NLP-based sentiment classification model analyzing customer product reviews to surface consumer sentiment trends.",
    highlights: [
      "Improved an NLP-based sentiment classification model to analyze customer product reviews and identify consumer sentiment trends",
      "Applied text preprocessing and machine learning techniques to improve sentiment classification performance",
      "Created analytical visualizations to support product improvement and customer experience insights",
    ],
    featured: false,
    problem:
      "Raw product reviews contain valuable customer sentiment, but at volume it's impractical to read manually — the work needed to turn unstructured text into structured sentiment signal.",
    approach: [
      "Improved an existing NLP-based sentiment classification model for customer product reviews",
      "Applied text preprocessing and machine learning techniques to boost classification performance",
      "Built analytical visualizations to make sentiment trends usable for product and customer-experience teams",
    ],
    outcome:
      "Delivered clearer visibility into consumer sentiment trends from review text, supporting product improvement and customer experience decisions.",
  },
  {
    slug: "real-time-satellite-tracking-system",
    title: "Real-Time Satellite Tracking System",
    category: "Data Visualization",
    tags: ["Python", "Skyfield", "Matplotlib", "Basemap", "Geospatial"],
    summary:
      "Python-based system tracking real-time satellite positions using TLE datasets, with dynamic geospatial visualization.",
    highlights: [
      "Expanded a Python-based satellite tracking system using Skyfield and TLE datasets to monitor real-time satellite positions",
      "Implemented geospatial data visualization using Matplotlib and Basemap for dynamic tracking and monitoring",
      "Processed real-time positional datasets to support analytical visualization workflows",
    ],
    featured: true,
    problem:
      "Tracking satellite positions in real time requires processing continuously updating orbital data and rendering it in a way that's actually interpretable geospatially, not just as raw coordinates.",
    approach: [
      "Expanded a Python-based satellite tracking system built on Skyfield and TLE (Two-Line Element) datasets",
      "Implemented geospatial data visualization with Matplotlib and Basemap for dynamic tracking and monitoring",
      "Processed real-time positional datasets to feed the analytical visualization workflow",
    ],
    outcome:
      "Built a working system that turns live orbital data into an interpretable, continuously updating geospatial view of satellite positions.",
  },
];