export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  audience: "Student" | "Teacher" | "Industry";
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I didn't just complete another course. I was able to use what I learned on a real project.",
    name: "Alex Rahman",
    role: "AI Engineering Student",
    audience: "Student",
  },
  {
    quote:
      "The platform gives us a better way to connect learning outcomes with actual student work.",
    name: "Dr. Nusrat Jahan",
    role: "Faculty, AI & ML",
    audience: "Teacher",
  },
  {
    quote: "We can discover emerging talent while solving real problems.",
    name: "Imran Chowdhury",
    role: "Engineering Lead, AI Startup Partner",
    audience: "Industry",
  },
];
