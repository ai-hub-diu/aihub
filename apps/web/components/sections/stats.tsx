import { CountUp } from "@/components/count-up";
import { ScrollReveal } from "@/components/scroll-reveal";

const stats = [
  { value: 50, suffix: "+", label: "Courses" },
  { value: 25, suffix: "+", label: "Partners" },
  { value: 100, suffix: "+", label: "Projects" },
  { value: 15, suffix: "+", label: "AI Products" },
];

export function Stats() {
  return (
    <section className="border-b border-border bg-card">
      <div className="container-hub py-10">
        <ScrollReveal stagger="[data-stat]" className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} data-stat className="text-center">
              <p className="text-3xl font-bold sm:text-4xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </ScrollReveal>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Demo platform — sample data
        </p>
      </div>
    </section>
  );
}
