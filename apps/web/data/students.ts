export type StudentProfile = {
  name: string;
  title: string;
  skills: string[];
  certificates: number;
  projects: number;
  contributions: number;
};

export const students: StudentProfile[] = [
  {
    name: "Alex Rahman",
    title: "AI Engineering Student",
    skills: ["Python", "Machine Learning", "React", "AWS"],
    certificates: 4,
    projects: 3,
    contributions: 2,
  },
  {
    name: "Priya Sultana",
    title: "Data Science Student",
    skills: ["Python", "SQL", "Power BI", "Statistics"],
    certificates: 3,
    projects: 2,
    contributions: 1,
  },
  {
    name: "Rahim Uddin",
    title: "Full-Stack AI Student",
    skills: ["TypeScript", "Next.js", "LangChain", "FastAPI"],
    certificates: 5,
    projects: 4,
    contributions: 3,
  },
];
