import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { students } from "@/data/students";
import { ScrollReveal } from "@/components/scroll-reveal";

export function SkillPassport() {
  const student = students[0];

  return (
    <section id="skill-passport" className="border-b border-border bg-card/50 py-20">
      <div className="container-hub grid gap-12 lg:grid-cols-2 lg:items-center">
        <ScrollReveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Your Skills. Your Proof. Your Future.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Build a verified profile combining your courses, skills, projects, contributions and
            credentials in one place.
          </p>
        </ScrollReveal>

        <ScrollReveal
          stagger="[data-passport-block]"
          y={16}
          className="mx-auto w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-lg"
        >
          <div data-passport-block>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Student Skill Passport
            </p>
            <p className="mt-3 text-lg font-semibold">{student.name}</p>
            <p className="text-sm text-muted-foreground">{student.title}</p>
          </div>

          <div data-passport-block>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Verified Skills
            </p>
            <ul className="mt-2 space-y-1.5 text-sm">
              {student.skills.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" /> {s}
                </li>
              ))}
            </ul>
          </div>

          <div
            data-passport-block
            className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-5 text-center"
          >
            <div>
              <p className="text-lg font-bold">{student.certificates}</p>
              <p className="text-xs text-muted-foreground">Certificates</p>
            </div>
            <div>
              <p className="text-lg font-bold">{student.projects}</p>
              <p className="text-xs text-muted-foreground">Projects</p>
            </div>
            <div>
              <p className="text-lg font-bold">{student.contributions}</p>
              <p className="text-xs text-muted-foreground">Contributions</p>
            </div>
          </div>

          <div data-passport-block>
            <Button className="mt-6 w-full" variant="dark">
              View Public Profile
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
