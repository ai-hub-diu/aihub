import type { Metadata } from "next";
import { CourseGrid } from "@/components/course-grid";
import { PageHero } from "@/components/page-hero";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Courses | AIHUB",
  description: "Browse practical, project-focused AI and technology courses.",
};

export default function CoursesPage() {
  const avgRating = (
    courses.reduce((sum, c) => sum + c.rating, 0) / courses.length
  ).toFixed(1);
  const totalStudents = courses.reduce((sum, c) => sum + c.students, 0);

  return (
    <>
      <PageHero
        eyebrow="LEARN → VERIFY → WORK"
        title="Build Skills That Matter"
        description="Learn practical, project-focused courses designed to help you build skills that can be applied to real-world work."
        stats={[
          { value: `${courses.length}+`, label: "Courses" },
          { value: `${avgRating}★`, label: "Avg. Rating" },
          { value: `${totalStudents.toLocaleString()}+`, label: "Students" },
        ]}
      />
      <section className="py-14">
        <div className="container-hub">
          <CourseGrid />
        </div>
      </section>
    </>
  );
}
