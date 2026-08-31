export type Job = {
  id: string;
  title: string;
  company: string;
  companyInitial: string;
  companyColor: string;
  category: "AI/ML" | "Software Development" | "Data" | "UI/UX" | "Cloud" | "Research" | "Marketing" | "Product";
  type: "Part-time" | "Internship" | "Project" | "Freelance" | "Remote";
  location: string;
  duration: string;
  compensation: string;
  skills: string[];
  experience: string;
  postedAgo: string;
  description: string;
  responsibilities: string[];
  deadline: string;
};

export const jobs: Job[] = [
  {
    id: "ai-ml-intern-daffodil-digital",
    title: "AI/ML Intern",
    company: "Daffodil Digital",
    companyInitial: "DD",
    companyColor: "bg-emerald-600",
    category: "AI/ML",
    type: "Part-time",
    location: "Remote",
    duration: "3 Months",
    compensation: "৳20,000 – ৳30,000 / month",
    skills: ["Python", "Machine Learning", "Pandas", "SQL"],
    experience: "Entry level",
    postedAgo: "2 days ago",
    description:
      "Support the ML team in building and evaluating models for internal analytics products, working directly with engineers on real datasets.",
    responsibilities: [
      "Clean and prepare datasets for model training",
      "Assist in building and evaluating ML models",
      "Document experiments and results",
    ],
    deadline: "September 20, 2026",
  },
  {
    id: "llm-application-developer",
    title: "LLM Application Developer",
    company: "AI Startup Partner",
    companyInitial: "AS",
    companyColor: "bg-indigo-600",
    category: "AI/ML",
    type: "Project",
    location: "Remote",
    duration: "8 Weeks",
    compensation: "৳40,000 project fee",
    skills: ["Python", "LangChain", "RAG", "FastAPI"],
    experience: "Intermediate",
    postedAgo: "5 days ago",
    description:
      "Build a retrieval-augmented generation feature for a customer-facing product, from API design through deployment.",
    responsibilities: [
      "Design and implement a RAG pipeline",
      "Build FastAPI endpoints for the feature",
      "Collaborate with the product team on evaluation",
    ],
    deadline: "September 15, 2026",
  },
  {
    id: "computer-vision-research-assistant",
    title: "Computer Vision Research Assistant",
    company: "VisionLab Research",
    companyInitial: "VL",
    companyColor: "bg-orange-600",
    category: "Research",
    type: "Part-time",
    location: "Remote",
    duration: "4 Months",
    compensation: "৳18,000 – ৳25,000 / month",
    skills: ["Python", "OpenCV", "PyTorch", "Computer Vision"],
    experience: "Intermediate",
    postedAgo: "1 week ago",
    description:
      "Assist a research team building computer vision models for defect detection, including data labeling and experimentation.",
    responsibilities: [
      "Implement and train CV models in PyTorch",
      "Run experiments and track results",
      "Support literature review for the research team",
    ],
    deadline: "September 25, 2026",
  },
  {
    id: "frontend-developer-ai-product",
    title: "Frontend Developer — AI Product",
    company: "NovaWorks",
    companyInitial: "NW",
    companyColor: "bg-blue-600",
    category: "Software Development",
    type: "Project",
    location: "Remote",
    duration: "6 Weeks",
    compensation: "৳25,000 project fee",
    skills: ["React", "Next.js", "TypeScript", "Tailwind"],
    experience: "Intermediate",
    postedAgo: "3 days ago",
    description:
      "Build the frontend for an AI product dashboard, translating designs into a fast, accessible interface.",
    responsibilities: [
      "Implement responsive UI from Figma designs",
      "Integrate with backend APIs",
      "Write clean, typed, reusable components",
    ],
    deadline: "September 18, 2026",
  },
  {
    id: "data-analytics-intern",
    title: "Data Analytics Intern",
    company: "Meridian Analytics",
    companyInitial: "MA",
    companyColor: "bg-lime-600",
    category: "Data",
    type: "Part-time",
    location: "Remote",
    duration: "3 Months",
    compensation: "৳15,000 – ৳22,000 / month",
    skills: ["Python", "SQL", "Power BI", "Excel"],
    experience: "Entry level",
    postedAgo: "6 days ago",
    description:
      "Help the analytics team build dashboards and reports that inform product and business decisions.",
    responsibilities: [
      "Build and maintain Power BI dashboards",
      "Write SQL queries for recurring reports",
      "Present findings to the analytics team",
    ],
    deadline: "September 22, 2026",
  },
  {
    id: "ai-product-qa-tester",
    title: "AI Product QA Tester",
    company: "Daffodil Digital",
    companyInitial: "DD",
    companyColor: "bg-emerald-600",
    category: "Product",
    type: "Project",
    location: "Remote",
    duration: "4 Weeks",
    compensation: "৳12,000 project fee",
    skills: ["Testing", "API", "Python", "AI Evaluation"],
    experience: "Entry level",
    postedAgo: "4 days ago",
    description:
      "Evaluate AI model outputs and product flows for quality, writing clear reports on issues found.",
    responsibilities: [
      "Design and run test cases for AI features",
      "Evaluate model outputs against quality criteria",
      "Report bugs and edge cases to the product team",
    ],
    deadline: "September 12, 2026",
  },
];

export const jobCategories = [
  "AI/ML",
  "Software Development",
  "Data",
  "UI/UX",
  "Cloud",
  "Research",
  "Marketing",
  "Product",
] as const;

export const jobTypes = ["Part-time", "Internship", "Project", "Freelance", "Remote"] as const;
