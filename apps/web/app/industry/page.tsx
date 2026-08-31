import type { Metadata } from "next";
import { IndustrySection } from "@/components/sections/industry-section";
import { ProductsSection } from "@/components/sections/products-section";
import { WorldsSection } from "@/components/sections/worlds-section";

export const metadata: Metadata = {
  title: "For Industry | AIHUB",
  description: "Bring a problem. Build a solution — with emerging AI talent from AIHUB.",
};

export default function IndustryPage() {
  return (
    <>
      <section className="gradient-hero dot-grid border-b border-border py-20 sm:py-28">
        <div className="container-hub text-center">
          <span className="tag-mono text-secondary-accent">For industry</span>
          <h1 className="mx-auto mt-4 max-w-xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Bring a problem.
            <br />
            Build a solution.
          </h1>
        </div>
      </section>
      <IndustrySection />
      <ProductsSection />
      <WorldsSection />
    </>
  );
}
