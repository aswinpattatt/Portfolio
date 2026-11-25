export type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  details: string[];
  logo: string
};

export const education: EducationEntry[] = [
  {
    degree: "Master of Business Administration",
    institution: "MBA-ESG-INDIA - Dual Degree with Ajeenkya D Y Patil University",
    period: "Sep 2024 – May 2026",
    details: [
      "CGPA: 9.35",
      "Specialization in Data Science & AI",
      'Thesis: "Explainable AI for Business Predictive Models"',
    ],
    logo: "/logos/mba-esg.png",
  },
  {
    degree: "Bachelor of Commerce",
    institution: "Bharata Mata College (Mahatma Gandhi University)",
    period: "Aug 2021 – May 2024",
    details: ["CGPA: 6.26", "Specialization in Computer Applications"],
    logo: "/logos/mgu.jpg",
  },
  {
    degree: "Secondary & Higher Secondary Education",
    institution: "Kendriya Vidyalaya, IIT Powai",
    period: "Completed 2021",
    details: ["Score: 76%", "Commerce stream"],
    logo: "/logos/kv.jpeg",
  },
];