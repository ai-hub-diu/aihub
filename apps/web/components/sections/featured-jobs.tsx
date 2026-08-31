import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { jobs } from "@/data/jobs";
import { FeaturedJobCard } from "@/components/featured-job-card";
import { ScrollReveal } from "@/components/scroll-reveal";

export function FeaturedJobs() {
  const featured = [jobs[0], jobs[1], jobs[3]];

  return (
    <section id="jobs" className="border-b border-border bg-muted/40 py-20 sm:py-28">
      <div className="container-hub">
        <ScrollReveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="tag-mono text-secondary-accent">Work</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Your next project is here.
            </h2>
          </div>
          <Link
            href="/jobs"
            className="group flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Explore all opportunities
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>

        <ScrollReveal
          stagger="[data-job]"
          delay={0.1}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {featured.map((job) => (
            <div key={job.id} data-job>
              <FeaturedJobCard job={job} />
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
