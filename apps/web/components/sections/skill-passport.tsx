import { ArrowRight, ShieldCheck } from "lucide-react";
import { students } from "@/data/students";
import { ScrollReveal } from "@/components/scroll-reveal";

export function SkillPassport() {
  const student = students[0];

  return (
    <section id="skill-passport" className="border-b border-border py-20 sm:py-28">
      <div className="container-hub grid gap-12 lg:grid-cols-2 lg:items-center">
        <ScrollReveal>
          <span className="tag-mono text-primary">Proof of work</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Your proof of work.
          </h2>
          <p className="mt-4 max-w-sm text-muted-foreground">
            One verified profile — courses, skills, projects and certificates.
          </p>
        </ScrollReveal>

        <ScrollReveal
          stagger="[data-passport-block]"
          y={16}
          className="mx-auto w-full max-w-sm rounded-2xl border border-border bg-card p-7"
        >
          <div data-passport-block className="flex items-center justify-between">
            <div>
              <p className="font-semibold">{student.name}</p>
              <p className="text-sm text-muted-foreground">{student.title}</p>
            </div>
            <span className="tag-mono rounded-full border border-border px-2.5 py-1 text-primary">
              Live
            </span>
          </div>

          <div data-passport-block className="mt-6 border-t border-border pt-6">
            <p className="tag-mono text-muted-foreground">Verified Skills</p>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {student.skills.map((s) => (
                <li key={s} className="flex items-center gap-1.5 text-sm">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-primary" /> {s}
                </li>
              ))}
            </ul>
          </div>

          <div
            data-passport-block
            className="mt-6 flex items-center justify-between border-t border-border pt-6"
          >
            <div>
              <p className="text-lg font-semibold">{student.projects}</p>
              <p className="tag-mono text-muted-foreground">Projects</p>
            </div>
            <div>
              <p className="text-lg font-semibold">{student.certificates}</p>
              <p className="tag-mono text-muted-foreground">Certificates</p>
            </div>
            <div className="group flex cursor-pointer items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary">
              View Profile
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
