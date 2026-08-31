"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const TARGETS =
  "[data-hero-eyebrow], [data-hero-line], [data-hero-desc], [data-hero-cta], [data-hero-visual]";

export function useHeroEntrance<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { gsap } = getGsap();

    if (reduced) {
      gsap.set(el.querySelectorAll(TARGETS), { opacity: 1, y: 0, clearProps: "transform" });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.set("[data-hero-line]", { yPercent: 110 })
        .set(["[data-hero-eyebrow]", "[data-hero-desc]", "[data-hero-cta]", "[data-hero-visual]"], {
          opacity: 0,
          y: 16,
        })
        .to("[data-hero-eyebrow]", { opacity: 1, y: 0, duration: 0.5 })
        .to("[data-hero-line]", { yPercent: 0, duration: 0.75, stagger: 0.1 }, "-=0.2")
        .to("[data-hero-desc]", { opacity: 1, y: 0, duration: 0.5 }, "-=0.4")
        .to("[data-hero-cta]", { opacity: 1, y: 0, duration: 0.45 }, "-=0.3")
        .to("[data-hero-visual]", { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");
    }, el);

    return () => ctx.revert();
  }, [reduced]);

  return ref;
}
