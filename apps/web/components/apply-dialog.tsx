"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ApplyDialog({ jobTitle }: { jobTitle: string }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Dialog onOpenChange={(open) => !open && setSubmitted(false)}>
      <DialogTrigger asChild>
        <Button size="lg">Apply Now</Button>
      </DialogTrigger>
      <DialogContent>
        {submitted ? (
          <div className="flex flex-col items-center py-8 text-center">
            <CheckCircle2 className="h-10 w-10 text-primary" />
            <p className="mt-4 text-lg font-semibold">Application submitted</p>
            <p className="mt-1 text-sm text-muted-foreground">
              This is a demo application — no data was sent anywhere.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Apply for {jobTitle}</DialogTitle>
              <DialogDescription>
                Demo application form — submissions are not sent anywhere.
              </DialogDescription>
            </DialogHeader>
            <form
              className="mt-4 flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required placeholder="Your full name" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required placeholder="you@example.com" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="student-id">Student ID</Label>
                  <Input id="student-id" placeholder="e.g. 221-15-4321" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="skills">Skills</Label>
                  <Input id="skills" placeholder="Python, React, SQL" />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <Label htmlFor="portfolio">Portfolio URL</Label>
                  <Input id="portfolio" placeholder="https://" />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <Label htmlFor="cv">CV Upload</Label>
                  <Input id="cv" type="file" />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <Label htmlFor="message">Cover Message</Label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us why you're a great fit..."
                    className="rounded-xl border border-border bg-card px-4 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
              </div>
              <Button type="submit" size="lg" className="mt-2">
                Apply
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
