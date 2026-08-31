import Image from "next/image";
import { ArrowRight } from "lucide-react";

const steps = ["Learn", "Verify", "Work", "Build", "Grow"];

export function AuthSidePanel() {
  return (
    <div className="gradient-hero dot-grid hidden flex-col justify-between border-r border-border p-10 lg:flex">
      <div className="flex items-center gap-2">
        <Image src="/logo-mark.png" alt="" width={22} height={22} />
        <span className="text-[13px] font-semibold tracking-tight">DAFFODIL AI HUB</span>
      </div>

      <div>
        <span className="tag-mono text-primary">One account</span>
        <h2 className="text-balance mt-3 text-3xl font-semibold leading-tight tracking-tight">
          Learning, work and proof — in one place.
        </h2>
        <p className="mt-4 max-w-sm text-muted-foreground">
          Whether you&apos;re a student or a supervisor guiding them, AIHUB keeps learning and
          real-world outcomes connected.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2">
          {steps.map((s, i) => (
            <span key={s} className="flex items-center gap-2">
              <span className="tag-mono text-foreground">{s}</span>
              {i < steps.length - 1 && <ArrowRight className="h-3 w-3 text-muted-foreground" />}
            </span>
          ))}
        </div>
      </div>

      <p className="tag-mono text-muted-foreground">Demo platform · sample data</p>
    </div>
  );
}
