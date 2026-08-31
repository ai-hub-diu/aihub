"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { jobCategories, jobTypes } from "@/data/jobs";

type Props = {
  query: string;
  onQueryChange: (v: string) => void;
  category: string;
  onCategoryChange: (v: string) => void;
  type: string;
  onTypeChange: (v: string) => void;
};

export function SearchBar({ query, onQueryChange, category, onCategoryChange, type, onTypeChange }: Props) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search jobs, skills or technologies"
            className="pl-10"
            aria-label="Search jobs, skills or technologies"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 lg:flex">
          <Select value={category} onValueChange={onCategoryChange}>
            <SelectTrigger className="lg:w-44">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              {jobCategories.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={type} onValueChange={onTypeChange}>
            <SelectTrigger className="lg:w-40">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Types</SelectItem>
              {jobTypes.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button size="lg" className="lg:w-auto">
          Search
        </Button>
      </div>
    </div>
  );
}
