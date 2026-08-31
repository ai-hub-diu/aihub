import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Clock, ArrowLeft, CalendarClock } from "lucide-react";
import { jobs } from "@/data/jobs";
import { Badge } from "@/components/ui/badge";
import { ApplyDialog } from "@/components/apply-dialog";

export function generateStaticParams() {
  return jobs.map((j) => ({ id: j.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);
  return {
    title: job ? `${job.title} | AIHUB` : "Job | AIHUB",
  };
}

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);
  if (!job) notFound();

  return (
    <section className="py-14">
      <div className="container-hub max-w-4xl">
        <Link href="/jobs" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to Jobs
        </Link>

        <div className="mt-6 flex items-start gap-4">
          <span
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-semibold text-white ${job.companyColor}`}
          >
            {job.companyInitial}
          </span>
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{job.title}</h1>
            <p className="mt-1 text-muted-foreground">{job.company}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" /> {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" /> {job.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarClock className="h-4 w-4" /> Apply by {job.deadline}
          </span>
          <Badge>{job.type}</Badge>
        </div>

        <p className="mt-6 text-base leading-relaxed">{job.description}</p>

        <div className="mt-8 grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold">Responsibilities</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {job.responsibilities.map((r) => (
                <li key={r}>• {r}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Required Skills</h2>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {job.skills.map((s) => (
                <Badge key={s} variant="outline">
                  {s}
                </Badge>
              ))}
            </div>
            <h2 className="mt-6 text-lg font-semibold">Experience Level</h2>
            <p className="mt-2 text-sm text-muted-foreground">{job.experience}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-card p-6">
          <div className="flex-1">
            <p className="font-semibold">{job.compensation}</p>
            <p className="text-sm text-muted-foreground">
              Application deadline: {job.deadline}
            </p>
          </div>
          <ApplyDialog jobTitle={job.title} />
        </div>
      </div>
    </section>
  );
}
