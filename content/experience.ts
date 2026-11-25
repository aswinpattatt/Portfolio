export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  status: "current" | "previous" | "earlier";
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
  role: "Research Analyst Intern",
  company: "Analytix",
  period: "Jul 2026 – Present",
  status: "current",
  highlights: [
    "Conducted competitive benchmarking of AI accounting and ERP platforms (Digits, Nominal, AI Accountant, Trullion, Vic.ai, Dext, Oracle Fusion Cloud ERP) alongside Odoo and Zoho workflows to support product strategy for Analytix 360",
    "Researched AI agent and LLM approaches — including RAG and token optimization — for automating accounting workflows such as document detection, data extraction, verification, approval, and journal-entry preparation",
    "Led competitor research across 6+ GCC service providers, producing structured comparison frameworks for internal evaluation",
    "Evaluated SEO and digital-marketing tooling (GA4, Search Console, Frase, Jasper, Surfer SEO, Clearscope) and CRM/Marketing OS platforms to support cross-functional research needs",
    "Prepared Excel-based comparison tables, Word research documents, and internal presentations synthesizing findings for finance and product stakeholders",
    "Collaborated with finance and product/management teams to translate real accounting workflows and business requirements into research scope for AI-powered automation",
  ],
},
  {
    role: "Software Implementation Associate",
    company: "Rubrix Analytics (InsightsE)",
    period: "Jun 2025 – Aug 2025",
    status: "previous",
    highlights: [
      "Managed and validated operational datasets for 25,000+ students using structured data processing and reporting workflows, reducing data errors by 20% and improving reporting accuracy",
      "Generated reports, marksheets, and operational insights using Excel-based analytics and validation techniques to support process efficiency and decision-making",
      "Collaborated with cross-functional teams to resolve data inconsistencies and streamline implementation workflows across high-volume operational processes",
      "Applied analytical problem-solving and data quality management practices to support reporting accuracy and operational optimization",
      "Supported implementation activities through documentation management, stakeholder coordination, and workflow analysis",
    ],
  },
  {
    role: "Intern,  Advanced Knowledge Services",
    company: "Technovalley Software Consultancy Ltd",
    period: "Dec 2023 – Jan 2024",
    status: "earlier",
    highlights: [
      "Collaborated with project teams to support business operations and client outreach initiatives, contributing to a 15% increase in outreach conversion rates through structured tracking and engagement analysis",
      "Assisted in data collection, workflow reporting, and operational coordination to improve project execution efficiency",
      "Analyzed communication and engagement patterns to identify opportunities for improving outreach effectiveness and client interaction outcomes",
      "Maintained organized project documentation and reporting records to support timely delivery of operational tasks and business insights",
    ],
  },
];