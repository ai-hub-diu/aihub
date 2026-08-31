export type Certificate = {
  id: string;
  courseTitle: string;
  issuedTo: string;
  issuedDate: string;
  issuer: string;
};

export const certificates: Certificate[] = [
  {
    id: "DAI-2026-AI-000123",
    courseTitle: "Generative AI Fundamentals",
    issuedTo: "Alex Rahman",
    issuedDate: "August 2026",
    issuer: "AIHUB",
  },
  {
    id: "DAI-2026-AI-000456",
    courseTitle: "Building AI Agents with Python",
    issuedTo: "Priya Sultana",
    issuedDate: "July 2026",
    issuer: "AIHUB",
  },
];

export function findCertificate(id: string) {
  return certificates.find((c) => c.id.toLowerCase() === id.trim().toLowerCase());
}
