import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { courses } from "@/data/courses";
import { FeaturedCourseCard } from "@/components/featured-course-card";
import { ScrollReveal } from "@/components/scroll-reveal";

export function FeaturedCourses() {
  const featured = [courses[1], courses[2], courses[3]];

  return (
    <section id="courses" className="border-b border-border py-20 sm:py-28">
      <div className="container-hub">
        <ScrollReveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="tag-mono text-primary">Learn</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Learn skills that ship.
            </h2>
          </div>
          <Link
            href="/courses"
            className="group flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            View all courses
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>

        <ScrollReveal
          stagger="[data-course]"
          delay={0.1}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {featured.map((course) => (
            <div key={course.id} data-course>
              <FeaturedCourseCard course={course} />
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
