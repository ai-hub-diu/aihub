import { ArrowRight } from "lucide-react";

const stages = ["Course", "Skill", "Work", "Project", "Product", "Career"];

export function VisionSection() {
  return (
    <section className="border-b border-border py-20">
      <div className="container-hub text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          More Than Courses. More Than Jobs.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          The Hub connects learning and real-world production so students can move from acquiring
          skills to applying them on meaningful AI projects.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {stages.map((s, i) => (
            <span key={s} className="flex items-center gap-3">
              <span className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold">
                {s}
              </span>
              {i < stages.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground" />}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
