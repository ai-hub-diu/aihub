import type { Metadata } from "next";
import { JobGrid } from "@/components/job-grid";
import { PageHero } from "@/components/page-hero";
import { jobs } from "@/data/jobs";

export const metadata: Metadata = {
  title: "Jobs | AIHUB",
  description: "Explore real-world AI and technology opportunities from industry partners.",
};

export default function JobsPage() {
  const companies = new Set(jobs.map((j) => j.company)).size;
  const remoteCount = jobs.filter((j) => j.location.toLowerCase().includes("remote")).length;

  return (
    <>
      <PageHero
        eyebrow="WORK → BUILD → GROW"
        title="Put Your Skills to Work"
        description="Explore real-world opportunities from industry partners and build experience through meaningful work."
        stats={[
          { value: `${jobs.length}+`, label: "Open Roles" },
          { value: `${companies}+`, label: "Partners" },
          { value: `${remoteCount}`, label: "Remote Friendly" },
        ]}
      />
      <section className="py-14">
        <div className="container-hub">
          <JobGrid />
        </div>
      </section>
    </>
  );
}
