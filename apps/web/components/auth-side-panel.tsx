import { ArrowRight, BookOpen, ShieldCheck, Briefcase, Hammer, TrendingUp } from "lucide-react";

const steps = [
  { n: "01", label: "Learn", icon: BookOpen },
  { n: "02", label: "Verify", icon: ShieldCheck },
  { n: "03", label: "Work", icon: Briefcase },
  { n: "04", label: "Build", icon: Hammer },
  { n: "05", label: "Grow", icon: TrendingUp },
];

const skills = ["Python", "ML", "React", "AWS"];

export function AuthSidePanel() {
  return (
    <div className="auth-glow relative flex flex-col overflow-hidden border-b border-border lg:border-b-0 lg:border-r">
      {/* ambient layers (decorative) */}
      <div aria-hidden className="absolute inset-0 dot-grid opacity-50" />
      <svg
        aria-hidden
        viewBox="0 0 520 420"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 hidden h-full w-full lg:block"
      >
        <g
          stroke="currentColor"
          strokeWidth={1}
          strokeLinecap="round"
          className="text-border-strong"
          opacity={0.55}
        >
          <line x1="60" y1="80" x2="200" y2="50" />
          <line x1="200" y1="50" x2="330" y2="120" />
          <line x1="330" y1="120" x2="460" y2="70" />
          <line x1="60" y1="80" x2="120" y2="200" />
          <line x1="120" y1="200" x2="270" y2="170" />
          <line x1="270" y1="170" x2="330" y2="120" />
          <line x1="270" y1="170" x2="410" y2="230" />
          <line x1="120" y1="200" x2="80" y2="310" />
          <line x1="80" y1="310" x2="230" y2="300" />
          <line x1="230" y1="300" x2="380" y2="330" />
          <line x1="380" y1="330" x2="410" y2="230" />
          <line x1="230" y1="300" x2="160" y2="380" />
          <line x1="160" y1="380" x2="80" y2="310" />
          <line x1="410" y1="230" x2="470" y2="360" />
          <line x1="470" y1="360" x2="380" y2="330" />
        </g>
        <g fill="currentColor" className="text-primary" opacity={0.2}>
          <circle cx="60" cy="80" r="3.5" />
          <circle cx="200" cy="50" r="3" />
          <circle cx="330" cy="120" r="3.5" />
          <circle cx="460" cy="70" r="3" />
          <circle cx="120" cy="200" r="3" />
          <circle cx="270" cy="170" r="3.5" />
          <circle cx="410" cy="230" r="3" />
          <circle cx="80" cy="310" r="3.5" />
          <circle cx="230" cy="300" r="3" />
          <circle cx="380" cy="330" r="3.5" />
          <circle cx="160" cy="380" r="3" />
          <circle cx="470" cy="360" r="3" />
        </g>
      </svg>

      {/* content */}
      <div className="relative z-10 flex flex-1 flex-col justify-center gap-8 p-8 sm:p-10 lg:p-12">
        {/* hero copy */}
        <div className="max-w-md">
          <span className="tag-mono inline-flex items-center gap-1.5 text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            One account
          </span>
          <h2 className="text-balance mt-5 text-3xl font-semibold leading-[1.08] tracking-tight sm:text-[2.25rem] sm:leading-[1.06] lg:text-[2.5rem]">
            Learning, work and proof — in one place.
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
            Whether you&apos;re a student or a supervisor guiding them, AIHUB keeps learning and
            real-world outcomes connected.
          </p>
        </div>

        {/* compact journey for mobile / tablet */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 lg:hidden">
          {steps.map((s, i) => (
            <span key={s.label} className="flex items-center gap-2">
              <span className="tag-mono text-foreground">{s.label}</span>
              {i < steps.length - 1 && (
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
              )}
            </span>
          ))}
        </div>

        {/* desktop visual: floating cards + journey */}
        <div className="relative hidden lg:block">
          <div className="grid grid-cols-2 gap-5">
            {/* Skill Passport */}
            <div className="auth-float rounded-2xl border border-border bg-card/80 p-5 shadow-float backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <span className="tag-mono text-muted-foreground">Skill Passport</span>
                <span className="tag-mono rounded-full border border-border px-2 py-0.5 text-primary">
                  Live
                </span>
              </div>
              <p className="mt-3 text-sm font-semibold">Huzayfa Talha</p>
              <p className="text-xs text-muted-foreground">AI Engineering Student</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="tag-mono rounded-full bg-muted px-2 py-0.5 text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Course Progress */}
            <div className="auth-float-slow rounded-2xl border border-border bg-card/80 p-5 shadow-float backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <span className="tag-mono text-muted-foreground">Course</span>
                <span className="text-xs font-medium text-muted-foreground">62%</span>
              </div>
              <p className="mt-2 text-sm font-semibold">AI Engineering with Python</p>
              <div className="mt-3.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[62%] rounded-full bg-primary" />
              </div>
              <p className="tag-mono mt-3 text-muted-foreground">08 Weeks · Intermediate</p>
            </div>
          </div>

          {/* journey */}
          <div className="relative mt-8">
            <div className="absolute inset-x-0 top-5 h-px -translate-y-1/2 bg-border" />
            <div className="relative grid grid-cols-5 gap-2">
              {steps.map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-2.5 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary">
                    <s.icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="tag-mono text-muted-foreground">{s.n}</span>
                    <p className="text-xs font-medium text-foreground">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="relative z-10 hidden px-8 pb-8 sm:px-10 lg:block lg:px-12 lg:pb-10">
        <p className="tag-mono text-muted-foreground">Demo platform · sample data</p>
      </div>
    </div>
  );
}
