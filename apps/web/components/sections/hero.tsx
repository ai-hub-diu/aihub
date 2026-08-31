"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { HeroEcosystem } from "@/components/hero-ecosystem";
import { useHeroEntrance } from "@/lib/animations/hero";
import { useHeroScrollOut } from "@/lib/animations/hero-scroll";

export function Hero() {
  const ref = useHeroEntrance<HTMLElement>();
  useHeroScrollOut(ref);

  return (
    <section
      ref={ref}
      className="gradient-hero dot-grid relative overflow-hidden border-b border-border"
    >
      <div className="container-hub grid min-h-[calc(100vh-4rem)] gap-12 py-16 lg:grid-cols-[1.08fr_1fr] lg:items-center lg:gap-8 lg:py-20">
        {/* left: message + CTA */}
        <div data-hero-copy className="flex flex-col justify-center">
          <span
            data-hero-eyebrow
            className="tag-mono inline-flex w-fit items-center gap-1.5 text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Daffodil AI Production Hub
          </span>

          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.025em] sm:text-[3.5rem] lg:text-[4.75rem]">
            <span className="block overflow-hidden">
              <span data-hero-line className="block">
                Learn <span className="text-primary">AI</span>.
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero-line className="block">
                Build What
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero-line className="block">
                Matters.
              </span>
            </span>
          </h1>

          <p
            data-hero-desc
            className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground lg:text-xl"
          >
            Practical learning connected to real-world work.
          </p>

          <div data-hero-cta className="mt-9 flex flex-wrap items-center gap-5">
            <Magnetic>
              <Button size="lg" className="group rounded-full" asChild>
                <Link href="/courses">
                  Explore the Hub
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
            </Magnetic>
            <Link
              href="/industry"
              className="group inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              For Industry
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* right: AIHUB ecosystem */}
        <div data-hero-visual className="relative w-full">
          <HeroEcosystem />
        </div>
      </div>
    </section>
  );
}
