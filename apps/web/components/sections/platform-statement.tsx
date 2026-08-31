import { GraduationCap, Briefcase, Hammer } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const pillars = [
  { label: "Learn", sub: "Courses", icon: GraduationCap },
  { label: "Work", sub: "Jobs", icon: Briefcase },
  { label: "Build", sub: "Projects", icon: Hammer },
];

export function PlatformStatement() {
  return (
    <section className="border-b border-border py-16">
      <div className="container-hub">
        <ScrollReveal className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            One platform. Three ways to grow.
          </h2>
        </ScrollReveal>

        <ScrollReveal
          stagger="[data-pillar]"
          delay={0.1}
          className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-4 sm:gap-8"
        >
          {pillars.map((p, i) => (
            <div key={p.label} className="flex items-center gap-3 sm:gap-4" data-pillar>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary">
                <p.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold sm:text-base">{p.label}</p>
                <p className="tag-mono text-muted-foreground">{p.sub}</p>
              </div>
              {i < pillars.length - 1 && (
                <span className="hidden text-border-strong sm:ml-2 sm:block">/</span>
              )}
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
