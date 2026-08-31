"use client";

import Link from "next/link";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { HeroEcosystem } from "@/components/hero-ecosystem";
import { useHeroEntrance } from "@/lib/animations/hero";
import { useHeroScrollOut } from "@/lib/animations/hero-scroll";

const headlineLines = ["Learn AI.", "Build What Matters."];

export function Hero() {
  const ref = useHeroEntrance<HTMLElement>();
  useHeroScrollOut(ref);

  return (
    <section ref={ref} className="gradient-hero dot-grid relative overflow-hidden border-b border-border">
      <div className="container-hub grid gap-16 py-20 lg:grid-cols-2 lg:gap-8 lg:py-28">
        <div data-hero-copy className="flex flex-col justify-center">
          <span
            data-hero-eyebrow
            className="tag-mono inline-flex w-fit items-center gap-1.5 text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Daffodil AI Production Hub
          </span>

          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            {headlineLines.map((line) => (
              <span key={line} className="block overflow-hidden">
                <span data-hero-line className="block">
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p data-hero-desc className="mt-6 max-w-md text-lg text-muted-foreground">
            Practical learning connected to real-world work.
          </p>

          <div data-hero-cta className="mt-9 flex flex-wrap items-center gap-5">
            <Magnetic>
              <Button size="lg" className="group" asChild>
                <Link href="/courses">
                  Explore the Hub
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
            </Magnetic>
            <Link
              href="/industry"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              For Industry →
            </Link>
          </div>
        </div>

        <div data-hero-visual className="relative flex items-center justify-center">
          <HeroEcosystem />

          <div className="relative w-full max-w-sm">
            <div className="rounded-xl border border-border bg-card/95 p-4 shadow-[0_1px_0_rgba(0,0,0,0.02)] backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <span className="tag-mono text-muted-foreground">Course</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3 w-3 fill-primary text-primary" /> 4.9
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold">AI Engineering with Python</p>
              <p className="tag-mono mt-2 text-muted-foreground">08 Weeks · Intermediate</p>
            </div>

            <div className="ml-10 mt-4 rounded-xl border border-border bg-card/95 p-4 shadow-[0_1px_0_rgba(0,0,0,0.02)] backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <span className="tag-mono text-muted-foreground">Job</span>
                <span className="tag-mono text-secondary-accent">Remote</span>
              </div>
              <p className="mt-2 text-sm font-semibold">AI/ML Intern</p>
              <p className="tag-mono mt-2 text-muted-foreground">Python · LLM · AWS</p>
            </div>

            <div className="mt-4 flex w-fit items-center gap-2 rounded-xl border border-border bg-card/95 px-4 py-3 shadow-[0_1px_0_rgba(0,0,0,0.02)] backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Skill Verified</span>
              <span className="tag-mono text-muted-foreground">Python</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
