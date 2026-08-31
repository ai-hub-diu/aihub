import { ArrowRight, ShieldCheck } from "lucide-react";

const steps = ["Learn", "Verify", "Work", "Build", "Grow"];

export function AuthSidePanel() {
  return (
    <div className="gradient-hero hidden flex-col justify-between border-r border-border p-10 lg:flex">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <ShieldCheck className="h-4.5 w-4.5" />
        </span>
        AIHUB
      </div>

      <div>
        <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight">
          One account. Learning, work and proof — all in one place.
        </h2>
        <p className="mt-4 max-w-sm text-muted-foreground">
          Whether you&apos;re a student building skills or a supervisor guiding them, AIHUB keeps
          learning and real-world outcomes connected.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {steps.map((s, i) => (
            <span key={s} className="flex items-center gap-2">
              <span className="rounded-full border border-border bg-card px-3 py-1">{s}</span>
              {i < steps.length - 1 && <ArrowRight className="h-3.5 w-3.5" />}
            </span>
          ))}
        </div>
      </div>

      <p className="text-xs text-muted-foreground">Demo platform — sample data</p>
    </div>
  );
}
