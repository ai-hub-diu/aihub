"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Target, Users, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Magnetic } from "@/components/magnetic";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { getGsap } from "@/lib/animations/gsap";

const cards = [
  {
    icon: Target,
    title: "Post Opportunities",
    description: "Define the problem, skills and expected outcomes.",
  },
  {
    icon: Users,
    title: "Find Talent",
    description: "Discover students based on verified skills and project evidence.",
  },
  {
    icon: Hammer,
    title: "Build Together",
    description: "Turn successful student contributions into real solutions.",
  },
];

export function IndustrySection() {
  const gridRef = useScrollReveal<HTMLDivElement>({ stagger: "[data-industry-card]", y: 24, duration: 0.6 });
  const lineRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = gridRef.current;
    const line = lineRef.current;
    if (!el || !line || reduced) return;
    const { gsap, ScrollTrigger } = getGsap();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 78%", once: true },
        }
      );
    }, el);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [gridRef, reduced]);

  return (
    <section id="industry" className="border-b border-border bg-card/50 py-20">
      <div className="container-hub">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Have an AI Problem? Find the Talent to Solve It.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Connect with skilled students, define real-world work opportunities, and discover
            emerging AI talent.
          </p>
        </div>

        <div className="relative mt-12">
          <div
            ref={lineRef}
            className="absolute left-0 right-0 top-[2.75rem] hidden h-px scale-x-0 bg-primary/40 sm:block"
          />
          <div ref={gridRef} className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {cards.map((c) => (
              <div key={c.title} data-industry-card>
                <Card>
                  <CardHeader>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="pt-2">{c.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">{c.description}</CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Magnetic>
            <Button size="lg" asChild>
              <Link href="/industry">Post an Opportunity</Link>
            </Button>
          </Magnetic>
          <Button size="lg" variant="outline" asChild>
            <Link href="/industry">Partner With Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
