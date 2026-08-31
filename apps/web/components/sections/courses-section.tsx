import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CourseGrid } from "@/components/course-grid";
import { Button } from "@/components/ui/button";

export function CoursesSection() {
  return (
    <section id="courses" className="border-b border-border py-20">
      <div className="container-hub">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Build Skills That Matter</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Learn practical, project-focused courses designed to help you build skills that can be
              applied to real-world work.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/courses">
              View All Courses <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10">
          <CourseGrid limit={6} />
        </div>
      </div>
    </section>
  );
}
