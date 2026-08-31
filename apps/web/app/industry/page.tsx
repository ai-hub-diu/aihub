import type { Metadata } from "next";
import { IndustrySection } from "@/components/sections/industry-section";
import { VisionSection } from "@/components/sections/vision-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ProductsSection } from "@/components/sections/products-section";

export const metadata: Metadata = {
  title: "For Industry | AIHUB",
  description: "Post AI opportunities and discover emerging talent through AIHUB.",
};

export default function IndustryPage() {
  return (
    <>
      <section className="gradient-hero border-b border-border py-16">
        <div className="container-hub text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold tracking-wide text-primary">
            FOR INDUSTRY PARTNERS
          </span>
          <h1 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Have an AI Problem? Find the Talent to Solve It.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Connect with skilled students, define real-world work opportunities, and discover
            emerging AI talent.
          </p>
        </div>
      </section>
      <IndustrySection />
      <VisionSection />
      <ProductsSection />
      <TestimonialsSection />
    </>
  );
}
