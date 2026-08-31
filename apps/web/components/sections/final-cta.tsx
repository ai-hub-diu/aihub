import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { ScrollReveal } from "@/components/scroll-reveal";

export function FinalCta() {
  return (
    <section className="gradient-hero py-20">
      <ScrollReveal className="container-hub text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to Build Your Future With AI?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Learn new skills. Work on real opportunities. Build verified experience.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Magnetic>
            <Button size="lg" asChild>
              <Link href="/courses">Explore Courses</Link>
            </Button>
          </Magnetic>
          <Button size="lg" variant="outline" asChild>
            <Link href="/jobs">Explore Jobs</Link>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
}
