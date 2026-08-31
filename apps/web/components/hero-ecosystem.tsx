import Image from "next/image";
import {
  BookOpen,
  Hammer,
  ShieldCheck,
  BadgeCheck,
  Briefcase,
  Building2,
  Star,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Sat = { label: string; icon: typeof BookOpen; x: number; y: number; anim: string };

// orbit positions in % (square container, center 50/50, radius ~30)
const satellites: Sat[] = [
  { label: "Courses", icon: BookOpen, x: 50, y: 20, anim: "anim-node" },
  { label: "Skill Passport", icon: ShieldCheck, x: 76, y: 35, anim: "anim-node-2" },
  { label: "Verified Skills", icon: BadgeCheck, x: 76, y: 65, anim: "anim-node-3" },
  { label: "Jobs", icon: Briefcase, x: 50, y: 80, anim: "anim-node" },
  { label: "Industry", icon: Building2, x: 24, y: 65, anim: "anim-node-2" },
  { label: "Projects", icon: Hammer, x: 24, y: 35, anim: "anim-node-3" },
];

function CourseCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-4 shadow-float transition-transform duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <BookOpen className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
          <span className="tag-mono">Course</span>
        </span>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="h-3 w-3 fill-primary text-primary" /> 4.9
        </span>
      </div>
      <p className="mt-2 text-sm font-semibold leading-snug">AI Engineering with Python</p>
      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-muted">
        <div className="h-full w-2/3 rounded-full bg-primary" />
      </div>
      <p className="tag-mono mt-2 text-muted-foreground">08 Weeks · Intermediate</p>
    </div>
  );
}

function SkillPassportCard({ className }: { className?: string }) {
  const skills = ["Python", "ML", "React"];
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-4 shadow-float transition-transform duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
          <span className="tag-mono">Skill Passport</span>
        </span>
      </div>
      <p className="mt-2 text-sm font-semibold">12 Verified Skills</p>
      <div className="mt-2.5 flex flex-wrap gap-1">
        {skills.map((s) => (
          <span
            key={s}
            className="tag-mono rounded-full bg-muted px-1.5 py-0.5 text-[9px] text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function JobCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-4 shadow-float transition-transform duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <Briefcase className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
          <span className="tag-mono">Job</span>
        </span>
        <span className="tag-mono text-secondary-accent">Remote</span>
      </div>
      <p className="mt-2 text-sm font-semibold leading-snug">AI/ML Intern</p>
      <p className="tag-mono mt-2 text-muted-foreground">Python · LLM · AWS</p>
    </div>
  );
}

function VerificationBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-xl border border-primary/20 bg-accent/40 px-3 py-2.5 shadow-float transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_-4px_rgba(29,79,216,0.45)]",
        className
      )}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <CheckCircle2 className="h-4 w-4" strokeWidth={2} />
      </span>
      <div>
        <p className="tag-mono text-primary">Skill Verified</p>
        <p className="text-xs font-medium">Python</p>
      </div>
    </div>
  );
}

export function HeroEcosystem() {
  return (
    <>
      {/* desktop + tablet: full orbit ecosystem */}
      <div className="relative mx-auto hidden aspect-[1/1] w-full max-w-[520px] md:block">
        <div aria-hidden className="ecosystem-glow absolute inset-0" />
        <div aria-hidden className="dot-grid absolute inset-0 opacity-40" />

        {/* network: orbit ring + hub-to-node connectors */}
        <svg
          aria-hidden
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 h-full w-full"
        >
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.35"
            strokeDasharray="1 3"
            className="text-border-strong"
            opacity="0.7"
          />
          {satellites.map((s) => (
            <line
              key={s.label}
              x1="50"
              y1="50"
              x2={s.x}
              y2={s.y}
              stroke="currentColor"
              strokeWidth="0.3"
              className="anim-line text-border-strong"
              opacity="0.6"
            />
          ))}
        </svg>

        {/* central hub */}
        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <div className="anim-hub flex h-24 w-24 items-center justify-center rounded-full border border-primary/20 bg-card">
            <Image src="/logo-mark.png" alt="" width={30} height={30} priority />
          </div>
          <span className="tag-mono absolute left-1/2 top-full mt-3 -translate-x-1/2 text-foreground">
            AIHUB
          </span>
        </div>

        {/* satellites */}
        {satellites.map((s) => (
          <div
            key={s.label}
            className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
          >
            <div
              className={cn(
                s.anim,
                "flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-primary shadow-float"
              )}
            >
              <s.icon className="h-4 w-4" strokeWidth={1.75} />
            </div>
            <span className="tag-mono whitespace-nowrap text-[9px] text-muted-foreground">
              {s.label}
            </span>
          </div>
        ))}

        {/* floating product cards */}
        <div className="absolute z-30 -translate-x-1/2 -translate-y-1/2" style={{ left: "17%", top: "15%" }}>
          <CourseCard className="w-44" />
        </div>
        <div className="absolute z-30 -translate-x-1/2 -translate-y-1/2" style={{ left: "83%", top: "15%" }}>
          <SkillPassportCard className="w-44" />
        </div>
        <div className="absolute z-30 -translate-x-1/2 -translate-y-1/2" style={{ left: "17%", top: "85%" }}>
          <VerificationBadge />
        </div>
        <div className="absolute z-30 -translate-x-1/2 -translate-y-1/2" style={{ left: "83%", top: "85%" }}>
          <JobCard className="w-44" />
        </div>
      </div>

      {/* mobile: compact ecosystem */}
      <div className="flex flex-col items-center gap-7 md:hidden">
        <div className="anim-hub flex h-20 w-20 items-center justify-center rounded-full border border-primary/20 bg-card">
          <Image src="/logo-mark.png" alt="" width={26} height={26} priority />
        </div>
        <div className="grid w-full max-w-sm grid-cols-1 gap-3">
          <CourseCard className="w-full" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <VerificationBadge className="w-full justify-center" />
            <JobCard className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
