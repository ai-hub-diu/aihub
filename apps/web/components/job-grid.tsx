"use client";

import { useMemo, useState } from "react";
import { jobs } from "@/data/jobs";
import { JobCard } from "@/components/job-card";
import { SearchBar } from "@/components/search-bar";
import { ScrollReveal } from "@/components/scroll-reveal";

export function JobGrid({ limit }: { limit?: number }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      const matchesQuery =
        query.trim() === "" ||
        j.title.toLowerCase().includes(query.toLowerCase()) ||
        j.skills.some((s) => s.toLowerCase().includes(query.toLowerCase()));
      const matchesCategory = category === "All" || j.category === category;
      const matchesType = type === "All" || j.type === type;
      return matchesQuery && matchesCategory && matchesType;
    });
  }, [query, category, type]);

  const visible = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      <ScrollReveal delay={0.05}>
        <SearchBar
          query={query}
          onQueryChange={setQuery}
          category={category}
          onCategoryChange={setCategory}
          type={type}
          onTypeChange={setType}
        />
      </ScrollReveal>

      <ScrollReveal
        stagger=".job-card-item"
        y={20}
        delay={0.15}
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visible.map((job) => (
          <div key={job.id} className="job-card-item">
            <JobCard job={job} />
          </div>
        ))}
      </ScrollReveal>

      {visible.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          No opportunities match your search yet.
        </p>
      )}
    </div>
  );
}
