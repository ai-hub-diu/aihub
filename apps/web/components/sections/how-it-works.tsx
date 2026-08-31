"use client";

import { useEffect, useRef } from "react";
import { BookOpen, ShieldCheck, Briefcase, Hammer, TrendingUp } from "lucide-react";
import { getGsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

const steps = [
  {
    n: "01",
    title: "Learn",
    icon: BookOpen,
    description: "Choose practical courses and build in-demand skills.",
  },
  {
    n: "02",
    title: "Verify",
    icon: ShieldCheck,
    description: "Complete assessments and build evidence of your capabilities.",
  },
  {
    n: "03",
    title: "Work",
    icon: Briefcase,
    description: "Apply your skills to real industry opportunities.",
  },
  {
    n: "04",
    title: "Build",
    icon: Hammer,
    description: "Contribute to meaningful projects and AI products.",
  },
  {
    n: "05",
    title: "Grow",
    icon: TrendingUp,
    description: "Earn credentials, build your portfolio and unlock new opportunities.",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reduced = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reduced) return;
    const { gsap, ScrollTrigger } = getGsap();

    const ctx = gsap.context(() => {
      gsap.set(cardRefs.current, { opacity: 0, y: 20 });
      gsap.to(cardRefs.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 78%", once: true },
      });

      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: section,
              start: "top 60%",
              end: "bottom 60%",
              scrub: 0.4,
              onUpdate: (self) => {
                const active = Math.min(
                  steps.length - 1,
                  Math.floor(self.progress * steps.length)
                );
                cardRefs.current.forEach((card, i) => {
                  card?.classList.toggle("is-active", i <= active);
                });
              },
            },
          }
        );
      }
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill();
      });
    };
  }, [reduced]);

  return (
    <section id="how-it-works" ref={sectionRef} className="border-b border-border py-20">
      <div className="container-hub">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            LEARN → VERIFY → WORK → BUILD → GROW
          </h2>
          <p className="mt-3 text-muted-foreground">
            One connected journey from your first course to real-world career outcomes.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-[3.35rem] hidden h-px bg-border lg:block" />
          <div
            ref={lineRef}
            className="absolute left-0 right-0 top-[3.35rem] hidden h-px scale-x-0 bg-primary lg:block"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => (
              <div
                key={step.n}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={cn(
                  "group relative rounded-2xl border border-border bg-card p-6 transition-colors duration-300",
                  "[&.is-active]:border-primary/40 [&.is-active]:bg-accent/40"
                )}
              >
                <span className="text-xs font-semibold text-muted-foreground">{step.n}</span>
                <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors duration-300 group-[.is-active]:bg-primary group-[.is-active]:text-primary-foreground">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
