import { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  stats?: { label: string; value: string }[];
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, stats, children }: Props) {
  return (
    <section className="gradient-hero border-b border-border">
      <div className="container-hub py-14 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold tracking-wide text-primary">
            {eyebrow}
          </span>
          <h1 className="text-balance mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>

        {stats && (
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-4 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
