import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { ScrollReveal } from "@/components/scroll-reveal";

export function FinalCta() {
  return (
    <section className="gradient-hero dot-grid py-24 sm:py-32">
      <ScrollReveal className="container-hub text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Learn AI. Build what matters.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Magnetic>
            <Button size="lg" className="group" asChild>
              <Link href="/courses">
                Explore the Hub
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
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
