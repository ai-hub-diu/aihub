"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Search, Star } from "lucide-react";
import { courses } from "@/data/courses";
import { jobs } from "@/data/jobs";
import { ModeToggle } from "@/components/mode-toggle";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Input } from "@/components/ui/input";
import { getGsap } from "@/lib/animations/gsap";
import { Flip } from "gsap/Flip";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type Mode = "courses" | "jobs";

const courseFilters = ["All", "AI & ML", "Generative AI", "Data Science", "Software Engineering"];
const jobFilters = ["All", "AI/ML", "Software Development", "Data", "Research"];

const copy: Record<Mode, { eyebrow: string; sub: string; searchPlaceholder: string; cta: string; ctaHref: string }> = {
  courses: {
    eyebrow: "Learn",
    sub: "Learn skills that ship.",
    searchPlaceholder: "Search courses...",
    cta: "Explore All Courses",
    ctaHref: "/courses",
  },
  jobs: {
    eyebrow: "Work",
    sub: "Put your skills to work.",
    searchPlaceholder: "Search opportunities...",
    cta: "Explore All Opportunities",
    ctaHref: "/jobs",
  },
};

export function ChooseYourMove() {
  const [mode, setMode] = useState<Mode>("courses");
  const [courseFilter, setCourseFilter] = useState("All");
  const [jobFilter, setJobFilter] = useState("All");
  const [query, setQuery] = useState("");

  const gridRef = useRef<HTMLDivElement | null>(null);
  const subRef = useRef<HTMLParagraphElement | null>(null);
  const flipState = useRef<Flip.FlipState | null>(null);
  const reduced = useReducedMotion();

  const filteredCourses = courses
    .filter((c) => courseFilter === "All" || c.category === courseFilter)
    .filter((c) => query.trim() === "" || c.title.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 3);

  const filteredJobs = jobs
    .filter((j) => jobFilter === "All" || j.category === jobFilter)
    .filter((j) => query.trim() === "" || j.title.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 3);

  const visibleCount = mode === "courses" ? filteredCourses.length : filteredJobs.length;

  function captureFlip() {
    if (reduced || !gridRef.current) return;
    const { gsap } = getGsap();
    gsap.registerPlugin(Flip);
    flipState.current = Flip.getState(gridRef.current.children);
  }

  function handleModeChange(next: Mode) {
    captureFlip();
    setMode(next);
    setQuery("");

    if (!reduced && subRef.current) {
      const { gsap } = getGsap();
      gsap.fromTo(subRef.current, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" });
    }
  }

  function handleFilterChange(next: string) {
    captureFlip();
    if (mode === "courses") setCourseFilter(next);
    else setJobFilter(next);
  }

  useLayoutEffect(() => {
    if (flipState.current) {
      Flip.from(flipState.current, {
        duration: 0.45,
        ease: "power2.inOut",
        stagger: 0.03,
        absolute: true,
        fade: true,
      });
      flipState.current = null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, visibleCount]);

  const activeFilters = mode === "courses" ? courseFilters : jobFilters;
  const activeFilterValue = mode === "courses" ? courseFilter : jobFilter;

  return (
    <section className="border-b border-border py-20 sm:py-28">
      <div className="container-hub">
        <ScrollReveal
          stagger="[data-cym-block]"
          y={20}
          className="flex flex-col items-center text-center"
        >
          <div data-cym-block>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Choose Your Next Move.</h2>
            <p className="mt-3 text-muted-foreground">Learn a skill or put it to work.</p>
          </div>

          <div data-cym-block className="mt-8">
            <ModeToggle
              value={mode}
              onChange={handleModeChange}
              options={[
                { value: "courses", label: "Courses" },
                { value: "jobs", label: "Jobs" },
              ]}
            />
          </div>

          <p ref={subRef} data-cym-block className="tag-mono mt-5 text-primary">
            {copy[mode].sub}
          </p>

          <div data-cym-block className="mt-8 flex w-full max-w-sm flex-col items-center gap-4">
            <div className="relative w-full">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={copy[mode].searchPlaceholder}
                className="pl-10"
                aria-label={copy[mode].searchPlaceholder}
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {activeFilters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => handleFilterChange(f)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors duration-200",
                    activeFilterValue === f
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div ref={gridRef} className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {mode === "courses"
            ? filteredCourses.map((c, i) => (
                <div key={c.id} className={i === 0 ? "lg:col-span-2" : undefined}>
                  <CourseEditorialCard course={c} featured={i === 0} />
                </div>
              ))
            : filteredJobs.map((j, i) => (
                <div key={j.id} className={i === 0 ? "lg:col-span-2" : undefined}>
                  <JobEditorialCard job={j} featured={i === 0} />
                </div>
              ))}
        </div>

        {visibleCount === 0 && (
          <p className="mt-14 text-center text-sm text-muted-foreground">
            Nothing matches yet — try another filter.
          </p>
        )}

        <div className="mt-12 flex justify-center">
          <Link
            href={copy[mode].ctaHref}
            className="group flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            {copy[mode].cta}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CourseEditorialCard({
  course,
  featured,
}: {
  course: (typeof courses)[number];
  featured?: boolean;
}) {
  return (
    <Link href={`/courses/${course.id}`} className="group block h-full">
      <div
        className={cn(
          "flex h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:border-border-strong",
          featured ? "flex-col sm:flex-row" : "flex-col"
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden bg-gradient-to-br",
            course.color,
            featured ? "h-40 sm:h-auto sm:w-2/5" : "h-32 w-full"
          )}
        >
          <div className="dot-grid absolute inset-0 opacity-40 transition-transform duration-500 ease-out group-hover:scale-105" />
          {featured && (
            <span className="tag-mono absolute left-4 top-4 rounded-full bg-background/80 px-2.5 py-1 text-foreground/70">
              Featured
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <span className="tag-mono text-muted-foreground">{course.category}</span>
          <h3 className={cn("mt-2 font-semibold leading-snug", featured ? "text-xl" : "text-lg")}>
            {course.title}
          </h3>
          {featured && (
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{course.description}</p>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="tag-mono text-muted-foreground">{course.level}</span>
            <span className="tag-mono text-muted-foreground">{course.duration}</span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="h-3 w-3 fill-primary text-primary" /> {course.rating}
            </span>
          </div>

          <div className="mt-auto flex items-center justify-between pt-6">
            <span className="text-sm font-medium">Explore</span>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </div>
        </div>
      </div>
    </Link>
  );
}

function JobEditorialCard({ job, featured }: { job: (typeof jobs)[number]; featured?: boolean }) {
  return (
    <Link href={`/jobs/${job.id}`} className="group block h-full">
      <div
        className={cn(
          "flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:border-border-strong",
          featured && "sm:flex-row sm:items-center sm:gap-8"
        )}
      >
        <div className={cn("flex items-center gap-3", featured && "sm:w-1/3 sm:shrink-0")}>
          <span
            className={cn(
              "flex shrink-0 items-center justify-center rounded-lg text-xs font-semibold text-white transition-transform duration-200 group-hover:scale-105",
              job.companyColor,
              featured ? "h-11 w-11 text-sm" : "h-9 w-9"
            )}
          >
            {job.companyInitial}
          </span>
          <div>
            {featured && (
              <span className="tag-mono block text-muted-foreground">Featured</span>
            )}
            <p className="tag-mono text-muted-foreground">{job.company}</p>
          </div>
        </div>

        <div className="mt-4 flex-1 sm:mt-0">
          <h3 className={cn("font-semibold leading-snug", featured ? "text-xl" : "text-lg")}>
            {job.title}
          </h3>
          <p className="tag-mono mt-2 text-muted-foreground">
            {job.location} · {job.type}
          </p>
          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
            {job.skills.slice(0, featured ? 4 : 3).map((s) => (
              <span
                key={s}
                className="tag-mono text-muted-foreground transition-colors duration-200 group-hover:text-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between sm:mt-0 sm:w-auto sm:flex-col sm:items-end sm:gap-2">
          <span className="text-sm font-medium">View Opportunity</span>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>
      </div>
    </Link>
  );
}
