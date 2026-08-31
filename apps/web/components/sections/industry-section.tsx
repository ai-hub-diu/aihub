"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { getGsap } from "@/lib/animations/gsap";

const flow = ["Industry", "Problem", "Student Talent", "Project", "Product"];

export function IndustrySection() {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const row = rowRef.current;
    const line = lineRef.current;
    if (!row || !line || reduced) return;
    const { gsap, ScrollTrigger } = getGsap();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: row, start: "top 78%", once: true },
        }
      );
    }, row);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === row) st.kill();
      });
    };
  }, [reduced]);

  return (
    <section id="industry" className="border-b border-border py-20 sm:py-28">
      <div className="container-hub">
        <ScrollReveal className="max-w-lg">
          <span className="tag-mono text-secondary-accent">For industry</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Bring a problem. Build a solution.
          </h2>
        </ScrollReveal>

        <div ref={rowRef} className="relative mt-16">
          <div className="absolute left-0 right-0 top-1.5 hidden h-px bg-border sm:block" />
          <div
            ref={lineRef}
            className="absolute left-0 right-0 top-1.5 hidden h-px scale-x-0 bg-secondary-accent sm:block"
          />
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            {flow.map((step, i) => (
              <div key={step} className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-3">
                <span className="h-3 w-3 shrink-0 rounded-full border-2 border-secondary-accent bg-background" />
                <span className="tag-mono text-foreground">
                  {String(i + 1).padStart(2, "0")} · {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <Magnetic>
            <Button size="lg" asChild>
              <Link href="/industry" className="group">
                Work with us
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
