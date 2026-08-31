"use client";

import { useState } from "react";
import { courses, courseCategories } from "@/data/courses";
import { CourseCard } from "@/components/course-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CourseGrid({ limit }: { limit?: number }) {
  const [category, setCategory] = useState<string>("All");

  const filtered = courses.filter((c) => category === "All" || c.category === category);
  const visible = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      <Tabs value={category} onValueChange={setCategory}>
        <TabsList>
          {courseCategories.map((c) => (
            <TabsTrigger key={c} value={c}>
              {c}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          No courses in this category yet.
        </p>
      )}
    </div>
  );
}
