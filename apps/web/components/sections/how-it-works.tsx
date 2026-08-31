"use client";

import { useEffect, useRef } from "react";
import { BookOpen, ShieldCheck, Briefcase, Hammer, TrendingUp } from "lucide-react";
import { getGsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

const steps = [
  { n: "01", title: "Learn", icon: BookOpen },
  { n: "02", title: "Verify", icon: ShieldCheck },
  { n: "03", title: "Work", icon: Briefcase },
  { n: "04", title: "Build", icon: Hammer },
  { n: "05", title: "Grow", icon: TrendingUp },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reduced = useReducedMotion();

  // Measure the first and last icon's center so the connecting line runs
  // exactly Learn-center -> Grow-center, never past either end.
  useEffect(() => {
    const row = rowRef.current;
    const track = trackRef.current;
    const firstIcon = iconRefs.current[0];
    const lastIcon = iconRefs.current[steps.length - 1];
    if (!row || !track || !firstIcon || !lastIcon) return;

    function measure() {
      if (!row || !track || !firstIcon || !lastIcon) return;
      const rowRect = row.getBoundingClientRect();
      const firstRect = firstIcon.getBoundingClientRect();
      const lastRect = lastIcon.getBoundingClientRect();

      const left = firstRect.left + firstRect.width / 2 - rowRect.left;
      const right = lastRect.left + lastRect.width / 2 - rowRect.left;
      const centerY = firstRect.top + firstRect.height / 2 - rowRect.top;

      track.style.left = `${left}px`;
      track.style.width = `${right - left}px`;
      track.style.top = `${centerY}px`;
    }

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(row);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reduced) return;
    const { gsap, ScrollTrigger } = getGsap();

    const ctx = gsap.context(() => {
      gsap.set(cardRefs.current, { opacity: 0, y: 16 });
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
    <section id="loop" ref={sectionRef} className="border-b border-border py-20 sm:py-28">
      <div className="container-hub flex flex-col items-center">
        <div className="text-center">
          <span className="tag-mono text-primary">The loop</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Learn → Verify → Work → Build → Grow
          </h2>
        </div>

        <div ref={rowRef} className="relative mt-16 w-full">
          <div ref={trackRef} className="absolute hidden h-px -translate-y-1/2 bg-border lg:block">
            <div ref={lineRef} className="h-px w-full origin-left scale-x-0 bg-primary" />
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.n}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={cn("group flex flex-col items-start gap-3")}
              >
                <div
                  ref={(el) => {
                    iconRefs.current[i] = el;
                  }}
                  className={cn(
                    "relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors duration-300",
                    "group-[.is-active]:border-primary group-[.is-active]:bg-primary group-[.is-active]:text-primary-foreground"
                  )}
                >
                  <step.icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="tag-mono text-muted-foreground">{step.n}</span>
                  <h3 className="mt-1 font-semibold">{step.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
