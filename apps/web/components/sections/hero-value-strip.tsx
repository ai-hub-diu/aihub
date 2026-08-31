import { GraduationCap, Hammer, ShieldCheck, Briefcase, TrendingUp } from "lucide-react";

const items = [
  { label: "One Account", desc: "Learn courses", icon: GraduationCap },
  { label: "Build", desc: "Real projects", icon: Hammer },
  { label: "Verify", desc: "Skill passport", icon: ShieldCheck },
  { label: "Work", desc: "Job opportunities", icon: Briefcase },
  { label: "Grow", desc: "Industry connections", icon: TrendingUp },
];

export function HeroValueStrip() {
  return (
    <section className="border-b border-border bg-muted/20">
      <div className="container-hub py-8 lg:py-10">
        <div className="grid grid-cols-2 gap-y-7 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-border">
          {items.map((it) => (
            <div
              key={it.label}
              className="flex flex-col items-center gap-2.5 px-4 text-center lg:flex-row lg:items-start lg:gap-3 lg:px-6 lg:text-left lg:first:pl-0"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary">
                <it.icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <div>
                <p className="tag-mono text-foreground">{it.label}</p>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
