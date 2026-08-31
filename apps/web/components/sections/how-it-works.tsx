import { BookOpen, ShieldCheck, Briefcase, Hammer, TrendingUp } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Learn",
    icon: BookOpen,
    description: "Choose practical courses and build in-demand skills.",
  },
  {
    n: "02",
    title: "Verify",
    icon: ShieldCheck,
    description: "Complete assessments and build evidence of your capabilities.",
  },
  {
    n: "03",
    title: "Work",
    icon: Briefcase,
    description: "Apply your skills to real industry opportunities.",
  },
  {
    n: "04",
    title: "Build",
    icon: Hammer,
    description: "Contribute to meaningful projects and AI products.",
  },
  {
    n: "05",
    title: "Grow",
    icon: TrendingUp,
    description: "Earn credentials, build your portfolio and unlock new opportunities.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-border py-20">
      <div className="container-hub">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            LEARN → VERIFY → WORK → BUILD → GROW
          </h2>
          <p className="mt-3 text-muted-foreground">
            One connected journey from your first course to real-world career outcomes.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div key={step.n} className="relative rounded-2xl border border-border bg-card p-6">
              <span className="text-xs font-semibold text-muted-foreground">{step.n}</span>
              <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{step.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
