export type Product = {
  id: string;
  name: string;
  tags: string[];
  description: string;
  color: string;
};

export const products: Product[] = [
  {
    id: "ai-support-assistant",
    name: "AI Support Assistant",
    tags: ["Customer Support", "AI Agent", "B2B"],
    description: "An AI agent built by student teams to triage and resolve customer support tickets.",
    color: "from-emerald-100 to-teal-50",
  },
  {
    id: "document-intelligence",
    name: "Document Intelligence",
    tags: ["Document AI", "Automation", "B2B"],
    description: "Extracts and structures data from unstructured business documents automatically.",
    color: "from-indigo-100 to-blue-50",
  },
  {
    id: "learning-copilot",
    name: "Learning Copilot",
    tags: ["Education", "Generative AI"],
    description: "A generative AI tutor that helps students work through course material interactively.",
    color: "from-amber-100 to-orange-50",
  },
];
