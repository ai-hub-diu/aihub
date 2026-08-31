import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { CoursesSection } from "@/components/sections/courses-section";
import { JobsSection } from "@/components/sections/jobs-section";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SkillPassport } from "@/components/sections/skill-passport";
import { CertificateSection } from "@/components/sections/certificate-section";
import { IndustrySection } from "@/components/sections/industry-section";
import { VisionSection } from "@/components/sections/vision-section";
import { ProductsSection } from "@/components/sections/products-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <CoursesSection />
      <JobsSection />
      <HowItWorks />
      <SkillPassport />
      <CertificateSection />
      <IndustrySection />
      <VisionSection />
      <ProductsSection />
      <TestimonialsSection />
      <FinalCta />
    </>
  );
}
