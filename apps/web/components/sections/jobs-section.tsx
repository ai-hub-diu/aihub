import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JobGrid } from "@/components/job-grid";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

export function JobsSection() {
  return (
    <section id="jobs" className="border-b border-border bg-card/50 py-20">
      <div className="container-hub">
        <ScrollReveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Put Your Skills to Work</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Explore real-world opportunities from industry partners and build experience through
              meaningful work.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/jobs">
              View All Jobs <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </ScrollReveal>

        <div className="mt-10">
          <JobGrid limit={6} />
        </div>
      </div>
    </section>
  );
}
