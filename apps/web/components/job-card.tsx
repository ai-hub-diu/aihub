import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { Job } from "@/data/jobs";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function JobCard({ job }: { job: Job }) {
  return (
    <Link href={`/jobs/${job.id}`} className="group block h-full">
      <Card className="flex h-full flex-col p-5 transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-semibold text-white ${job.companyColor}`}
            >
              {job.companyInitial}
            </span>
            <div>
              <h3 className="font-semibold leading-snug">{job.title}</h3>
              <p className="text-sm text-muted-foreground">{job.company}</p>
            </div>
          </div>
          <span className="whitespace-nowrap text-xs text-muted-foreground">{job.postedAgo}</span>
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{job.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {job.skills.map((s) => (
            <Badge key={s} variant="outline">
              {s}
            </Badge>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" /> {job.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {job.duration}
          </span>
          <Badge>{job.type}</Badge>
        </div>

        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="text-sm font-semibold">{job.compensation}</span>
          <span className="text-sm font-semibold text-primary underline-offset-4 group-hover:underline">
            View Details
          </span>
        </div>
      </Card>
    </Link>
  );
}
