export type Course = {
  id: string;
  title: string;
  category: "AI & ML" | "Generative AI" | "Data Science" | "Software Engineering" | "Cloud" | "DevOps" | "Product" | "Business";
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  rating: number;
  students: number;
  instructor: string;
  description: string;
  certificate: boolean;
  color: string;
  outcomes: string[];
  modules: string[];
  projects: string[];
};

export const courses: Course[] = [
  {
    id: "generative-ai-fundamentals",
    title: "Generative AI Fundamentals",
    category: "AI & ML",
    level: "Beginner",
    duration: "6 Weeks",
    rating: 4.9,
    students: 1240,
    instructor: "Dr. Nusrat Jahan",
    description:
      "Understand how modern generative AI systems work and build your first AI-powered mini projects from scratch.",
    certificate: true,
    color: "from-emerald-100 to-teal-50",
    outcomes: [
      "Explain how LLMs generate text and reason",
      "Write effective prompts for real tasks",
      "Build a simple generative AI mini-app",
    ],
    modules: ["Foundations of Generative AI", "Prompting Techniques", "APIs & Tooling", "Capstone Mini-Project"],
    projects: ["AI writing assistant prototype"],
  },
  {
    id: "building-ai-agents-python",
    title: "Building AI Agents with Python",
    category: "Generative AI",
    level: "Intermediate",
    duration: "8 Weeks",
    rating: 4.8,
    students: 890,
    instructor: "Tanvir Ahmed",
    description:
      "Design and build autonomous AI agents in Python that plan, use tools, and complete multi-step tasks.",
    certificate: true,
    color: "from-indigo-100 to-blue-50",
    outcomes: [
      "Design agent architectures with tool use",
      "Implement memory and planning loops",
      "Ship an agent that solves a real workflow",
    ],
    modules: ["Agent Fundamentals", "Tool Calling & Memory", "Multi-Agent Systems", "Deployment"],
    projects: ["Research assistant agent", "Task-automation agent"],
  },
  {
    id: "machine-learning-engineering",
    title: "Machine Learning Engineering",
    category: "AI & ML",
    level: "Intermediate",
    duration: "10 Weeks",
    rating: 4.9,
    students: 1510,
    instructor: "Farzana Karim",
    description:
      "Go from notebooks to production: build, evaluate, and deploy machine learning models the right way.",
    certificate: true,
    color: "from-amber-100 to-orange-50",
    outcomes: [
      "Build reliable ML training pipelines",
      "Evaluate and tune models rigorously",
      "Deploy models behind an API",
    ],
    modules: ["ML Fundamentals", "Feature Engineering", "Model Deployment", "Monitoring & Iteration"],
    projects: ["Churn prediction pipeline", "Deployed prediction API"],
  },
  {
    id: "fullstack-ai-application-development",
    title: "Full-Stack AI Application Development",
    category: "Software Engineering",
    level: "Intermediate",
    duration: "8 Weeks",
    rating: 4.8,
    students: 760,
    instructor: "Shakil Hasan",
    description:
      "Build complete AI-powered products end to end with Next.js, TypeScript, and modern LLM APIs.",
    certificate: true,
    color: "from-rose-100 to-pink-50",
    outcomes: [
      "Architect a full-stack AI product",
      "Integrate LLM APIs into real UIs",
      "Ship a deployed AI application",
    ],
    modules: ["Frontend Architecture", "API Integration", "Auth & Data", "Deployment & Scaling"],
    projects: ["AI-powered SaaS demo product"],
  },
  {
    id: "aws-for-ai-engineers",
    title: "AWS for AI Engineers",
    category: "Cloud",
    level: "Intermediate",
    duration: "6 Weeks",
    rating: 4.7,
    students: 540,
    instructor: "Imran Chowdhury",
    description:
      "Learn to deploy, scale, and secure AI workloads on AWS with hands-on infrastructure projects.",
    certificate: true,
    color: "from-sky-100 to-cyan-50",
    outcomes: [
      "Deploy AI workloads on AWS",
      "Manage storage, compute and networking for AI",
      "Apply security best practices in the cloud",
    ],
    modules: ["AWS Fundamentals", "Compute for AI", "Storage & Data", "Security & Cost"],
    projects: ["Deployed inference endpoint on AWS"],
  },
  {
    id: "data-analytics-with-python",
    title: "Data Analytics with Python",
    category: "Data Science",
    level: "Beginner",
    duration: "5 Weeks",
    rating: 4.8,
    students: 1120,
    instructor: "Rafiul Islam",
    description:
      "Learn to clean, analyze, and visualize real-world data using Python's core analytics stack.",
    certificate: true,
    color: "from-lime-100 to-green-50",
    outcomes: [
      "Clean and transform real datasets",
      "Perform exploratory data analysis",
      "Build clear data visualizations",
    ],
    modules: ["Python for Data", "Pandas & NumPy", "Visualization", "Analytics Capstone"],
    projects: ["End-to-end analytics report"],
  },
  {
    id: "cloud-devops-for-ai-teams",
    title: "Cloud DevOps for AI Teams",
    category: "DevOps",
    level: "Advanced",
    duration: "7 Weeks",
    rating: 4.7,
    students: 410,
    instructor: "Mahmudul Hasan",
    description:
      "Set up CI/CD, containers, and monitoring pipelines that keep AI products reliable in production.",
    certificate: true,
    color: "from-violet-100 to-purple-50",
    outcomes: [
      "Build CI/CD pipelines for AI apps",
      "Containerize and orchestrate services",
      "Monitor production AI systems",
    ],
    modules: ["CI/CD Foundations", "Containers & Orchestration", "Observability", "Incident Response"],
    projects: ["Automated deployment pipeline"],
  },
  {
    id: "ai-product-management",
    title: "AI Product Management",
    category: "Product",
    level: "Beginner",
    duration: "5 Weeks",
    rating: 4.6,
    students: 380,
    instructor: "Sadia Islam",
    description:
      "Learn how to scope, prioritize, and ship AI features that solve real user and business problems.",
    certificate: true,
    color: "from-fuchsia-100 to-rose-50",
    outcomes: [
      "Scope AI product opportunities",
      "Write clear AI feature specs",
      "Measure AI feature impact",
    ],
    modules: ["AI Product Fundamentals", "Discovery & Scoping", "Working with AI Teams", "Measuring Impact"],
    projects: ["AI feature product spec"],
  },
];

export const courseCategories = [
  "All",
  "AI & ML",
  "Generative AI",
  "Data Science",
  "Software Engineering",
  "Cloud",
  "DevOps",
  "Product",
  "Business",
] as const;
