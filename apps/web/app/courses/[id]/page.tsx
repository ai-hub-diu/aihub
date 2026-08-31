import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Star, ShieldCheck, Users, ArrowLeft } from "lucide-react";
import { courses } from "@/data/courses";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return courses.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);
  return {
    title: course ? `${course.title} | AIHUB` : "Course | AIHUB",
  };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);
  if (!course) notFound();

  return (
    <section className="py-14">
      <div className="container-hub max-w-4xl">
        <Link href="/courses" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to Courses
        </Link>

        <div className={`mt-6 h-40 w-full rounded-2xl bg-gradient-to-br ${course.color}`} />

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Badge>{course.category}</Badge>
          <Badge variant="outline">{course.level}</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{course.title}</h1>
        <p className="mt-2 text-muted-foreground">By {course.instructor}</p>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" /> {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> {course.rating}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-4 w-4" /> {course.students} students
          </span>
          {course.certificate && (
            <span className="flex items-center gap-1.5 font-medium text-primary">
              <ShieldCheck className="h-4 w-4" /> Certificate Included
            </span>
          )}
        </div>

        <p className="mt-6 text-base leading-relaxed">{course.description}</p>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold">Learning Outcomes</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {course.outcomes.map((o) => (
                <li key={o} className="flex gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {o}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Modules</h2>
            <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
              {course.modules.map((m, i) => (
                <li key={m} className="flex gap-2">
                  <span className="font-semibold text-foreground">{i + 1}.</span> {m}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold">Projects</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {course.projects.map((p) => (
              <li key={p}>• {p}</li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-card p-6">
          <div className="flex-1">
            <p className="font-semibold">Ready to start learning?</p>
            <p className="text-sm text-muted-foreground">This is a demo enrollment — no payment required.</p>
          </div>
          <Button size="lg">Enroll Now</Button>
        </div>
      </div>
    </section>
  );
}
