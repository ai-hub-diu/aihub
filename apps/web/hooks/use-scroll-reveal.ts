"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Options = {
  /** CSS selector for children to stagger, relative to the container. If omitted, animates the container itself. */
  stagger?: string;
  y?: number;
  duration?: number;
  delay?: number;
};

export function useScrollReveal<T extends HTMLElement>({
  stagger,
  y = 24,
  duration = 0.7,
  delay = 0,
}: Options = {}) {
  const ref = useRef<T | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current || reduced) return;
    const { gsap, ScrollTrigger } = getGsap();
    const el = ref.current;
    const targets = stagger ? el.querySelectorAll(stagger) : el;

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        stagger: stagger ? 0.08 : 0,
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          once: true,
        },
      });
    }, el);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [stagger, y, duration, delay, reduced]);

  return ref;
}
