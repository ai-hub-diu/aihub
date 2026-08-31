import Link from "next/link";
import { Star, Clock, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { Course } from "@/data/courses";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.id}`} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1.5 group-hover:border-foreground/20 group-hover:shadow-lg">
        <div
          className={`relative h-32 w-full bg-gradient-to-br ${course.color} transition-transform duration-300 group-hover:scale-[1.03]`}
        >
          <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
            {course.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-semibold leading-snug">{course.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{course.description}</p>
          <p className="mt-3 text-xs text-muted-foreground">By {course.instructor}</p>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <Badge variant="outline">{course.level}</Badge>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {course.rating}
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" /> {course.students}
            </span>
          </div>

          <div className="mt-auto flex items-center justify-between pt-5">
            {course.certificate ? (
              <span className="flex items-center gap-1 text-xs font-medium text-emerald-700">
                <ShieldCheck className="h-3.5 w-3.5" /> Certificate Included
              </span>
            ) : (
              <span />
            )}
            <span className="flex items-center gap-1 text-sm font-semibold text-primary">
              View Course
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
