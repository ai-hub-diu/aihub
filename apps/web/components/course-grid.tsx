"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { courses, courseCategories } from "@/data/courses";
import { CourseCard } from "@/components/course-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollReveal } from "@/components/scroll-reveal";
import { getGsap } from "@/lib/animations/gsap";
import { Flip } from "gsap/Flip";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function CourseGrid({ limit }: { limit?: number }) {
  const [category, setCategory] = useState<string>("All");
  const gridRef = useRef<HTMLDivElement | null>(null);
  const flipState = useRef<Flip.FlipState | null>(null);
  const reduced = useReducedMotion();

  const filtered = courses.filter((c) => category === "All" || c.category === category);
  const visible = limit ? filtered.slice(0, limit) : filtered;

  function handleCategoryChange(value: string) {
    if (!reduced && gridRef.current) {
      const { gsap } = getGsap();
      gsap.registerPlugin(Flip);
      flipState.current = Flip.getState(gridRef.current.children);
    }
    setCategory(value);
  }

  useLayoutEffect(() => {
    if (flipState.current) {
      Flip.from(flipState.current, {
        duration: 0.5,
        ease: "power2.inOut",
        stagger: 0.03,
        absolute: true,
        fade: true,
      });
      flipState.current = null;
    }
  }, [visible]);

  return (
    <div>
      <Tabs value={category} onValueChange={handleCategoryChange}>
        <TabsList>
          {courseCategories.map((c) => (
            <TabsTrigger key={c} value={c}>
              {c}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <ScrollReveal stagger=".course-card-item" y={20}>
        <div ref={gridRef} className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((course) => (
            <div key={course.id} className="course-card-item">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </ScrollReveal>

      {visible.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          No courses in this category yet.
        </p>
      )}
    </div>
  );
}
