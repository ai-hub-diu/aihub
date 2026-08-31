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
    <section className="gradient-hero dot-grid border-b border-border">
      <div className="container-hub py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="tag-mono text-primary">{eyebrow}</span>
          <h1 className="text-balance mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>

        {stats && (
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-4 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-semibold sm:text-3xl">{s.value}</p>
                <p className="tag-mono mt-1 text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
