import { GraduationCap, Presentation, Building2 } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const worlds = [
  { icon: GraduationCap, title: "Students", desc: "Learn + Build" },
  { icon: Presentation, title: "Instructors", desc: "Teach + Guide" },
  { icon: Building2, title: "Industry", desc: "Solve + Hire" },
];

export function WorldsSection() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <div className="container-hub">
        <ScrollReveal className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Built for three worlds.
          </h2>
        </ScrollReveal>

        <ScrollReveal
          stagger="[data-world]"
          delay={0.1}
          className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-10 sm:grid-cols-3"
        >
          {worlds.map((w) => (
            <div key={w.title} data-world className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-primary">
                <w.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 font-semibold">{w.title}</p>
              <p className="tag-mono mt-1 text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
