"use client";

import { useRef, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { jobCategories, jobTypes } from "@/data/jobs";
import { cn } from "@/lib/utils";

type Props = {
  query: string;
  onQueryChange: (v: string) => void;
  category: string;
  onCategoryChange: (v: string) => void;
  type: string;
  onTypeChange: (v: string) => void;
};

const suggestions = ["AI Engineer", "Machine Learning", "Python", "LLM", "React", "Data Analyst"];

export function SearchBar({ query, onQueryChange, category, onCategoryChange, type, onTypeChange }: Props) {
  const [focused, setFocused] = useState(false);
  const blurTimeout = useRef<number | null>(null);

  function handleFocus() {
    if (blurTimeout.current) window.clearTimeout(blurTimeout.current);
    setFocused(true);
  }

  function handleBlur() {
    blurTimeout.current = window.setTimeout(() => setFocused(false), 120);
  }

  const showSuggestions = focused && query.trim().length === 0;

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-shadow duration-200 sm:p-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <Search
            className={cn(
              "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-transform duration-200",
              focused && "scale-110 text-primary"
            )}
          />
          <Input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search jobs, skills or technologies"
            className={cn(
              "pl-10 transition-shadow duration-200",
              focused && "shadow-[0_0_0_3px_rgba(22,163,74,0.12)]"
            )}
            aria-label="Search jobs, skills or technologies"
          />

          {showSuggestions && (
            <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 animate-in fade-in-0 slide-in-from-top-1 rounded-xl border border-border bg-card p-2 shadow-lg duration-150">
              <p className="px-2 pb-1.5 text-xs font-medium text-muted-foreground">Popular searches</p>
              <div className="flex flex-wrap gap-1.5 p-1">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      onQueryChange(s);
                      setFocused(false);
                    }}
                    className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-accent"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
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
