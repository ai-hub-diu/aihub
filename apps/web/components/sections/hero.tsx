"use client";

import Link from "next/link";
import { ArrowRight, Star, MapPin, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { HeroEcosystem } from "@/components/hero-ecosystem";
import { useHeroEntrance } from "@/lib/animations/hero";
import { useHeroScrollOut } from "@/lib/animations/hero-scroll";

const headlineLines = ["Learn AI.", "Work on Real Problems.", "Build Your Future."];

export function Hero() {
  const ref = useHeroEntrance<HTMLElement>();
  useHeroScrollOut(ref);

  return (
    <section ref={ref} className="gradient-hero relative overflow-hidden border-b border-border">
      <div className="container-hub grid gap-14 py-16 lg:grid-cols-2 lg:gap-10 lg:py-24">
        <div data-hero-copy className="flex flex-col justify-center">
          <span
            data-hero-eyebrow
            className="inline-flex w-fit items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold tracking-wide text-primary"
          >
            AI SKILLS → REAL OPPORTUNITIES
          </span>

          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            {headlineLines.map((line) => (
              <span key={line} className="block overflow-hidden">
                <span data-hero-line className="block">
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p data-hero-desc className="mt-5 max-w-xl text-lg text-muted-foreground">
            Learn practical AI skills, take on industry opportunities, build real project experience,
            and earn verified credentials — all in one place.
          </p>

          <div data-hero-cta className="mt-8 flex flex-wrap gap-3">
            <Magnetic>
              <Button size="lg" className="group" asChild>
                <Link href="/courses">
                  Explore Courses{" "}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button size="lg" variant="outline" asChild>
                <Link href="/jobs">Explore Jobs</Link>
              </Button>
            </Magnetic>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Built for students. Connected to industry. Focused on real outcomes.
          </p>

          <div
            data-hero-flow
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
          >
            {["Course", "Verified Skill", "Industry Job", "Project", "Certificate"].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-3">
                <span className="rounded-full bg-card border border-border px-3 py-1">{step}</span>
                {i < arr.length - 1 && <ArrowRight className="h-3.5 w-3.5" />}
              </span>
            ))}
          </div>
        </div>

        <div data-hero-visual className="relative flex items-center justify-center">
          <HeroEcosystem />
          <div className="relative w-full max-w-md space-y-4">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Course</p>
              <p className="mt-1 font-semibold">AI Engineering with Python</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                <span>Beginner → Intermediate</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> 8 Weeks
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> 4.9
                </span>
              </div>
              <p className="mt-3 flex items-center gap-1 text-xs font-medium text-emerald-700">
                <ShieldCheck className="h-3.5 w-3.5" /> Certificate Included
              </p>
            </div>

            <div className="ml-8 rounded-2xl border border-border bg-card p-5 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Job</p>
              <p className="mt-1 font-semibold">AI Research Assistant</p>
              <p className="mt-2 text-xs text-muted-foreground">Python • LLM • RAG</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> Remote
                </span>
                <span>•</span>
                <span>Part-time</span>
              </div>
              <p className="mt-3 text-sm font-semibold">৳15,000 – ৳25,000</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">Skill</p>
              <ul className="mt-2 space-y-1 text-sm">
                {["Python", "Machine Learning", "LLM Applications"].map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-primary" /> {s}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs font-medium text-muted-foreground">Verified Skills</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
