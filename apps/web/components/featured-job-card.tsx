import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Job } from "@/data/jobs";

export function FeaturedJobCard({ job }: { job: Job }) {
  return (
    <Link href={`/jobs/${job.id}`} className="group block h-full">
      <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:border-border-strong">
        <div className="flex items-center justify-between">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-lg text-xs font-semibold text-white ${job.companyColor}`}
          >
            {job.companyInitial}
          </span>
          <span className="tag-mono text-muted-foreground">{job.type}</span>
        </div>

        <h3 className="mt-4 text-lg font-semibold leading-snug">{job.title}</h3>
        <p className="tag-mono mt-2 text-muted-foreground">
          {job.company} · {job.location}
        </p>

        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
          {job.skills.slice(0, 4).map((s) => (
            <span key={s} className="tag-mono text-muted-foreground">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="text-sm font-medium">Apply</span>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>
      </div>
    </Link>
  );
}
