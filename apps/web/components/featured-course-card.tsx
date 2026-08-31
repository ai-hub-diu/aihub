import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Course } from "@/data/courses";

export function FeaturedCourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.id}`} className="group block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:border-border-strong">
        <div className={`relative h-40 w-full overflow-hidden bg-gradient-to-br ${course.color}`}>
          <div className="dot-grid absolute inset-0 opacity-40 transition-transform duration-500 ease-out group-hover:scale-105" />
          <span className="tag-mono absolute left-4 top-4 text-foreground/70">{course.category}</span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-semibold leading-snug">{course.title}</h3>
          <p className="tag-mono mt-3 text-muted-foreground">
            {course.level} · {course.duration}
          </p>
          <p className="mt-4 line-clamp-1 text-sm text-muted-foreground">
            {course.outcomes[0]}
          </p>

          <div className="mt-auto flex items-center justify-between pt-6">
            <span className="text-sm font-medium">Explore</span>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </div>
        </div>
      </div>
    </Link>
  );
}
