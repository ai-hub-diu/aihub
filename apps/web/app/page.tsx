import { Hero } from "@/components/sections/hero";
import { PlatformStatement } from "@/components/sections/platform-statement";
import { FeaturedCourses } from "@/components/sections/featured-courses";
import { FeaturedJobs } from "@/components/sections/featured-jobs";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SkillPassport } from "@/components/sections/skill-passport";
import { CertificateSection } from "@/components/sections/certificate-section";
import { IndustrySection } from "@/components/sections/industry-section";
import { ProductsSection } from "@/components/sections/products-section";
import { WorldsSection } from "@/components/sections/worlds-section";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <PlatformStatement />
      <FeaturedCourses />
      <FeaturedJobs />
      <HowItWorks />
      <SkillPassport />
      <CertificateSection />
      <IndustrySection />
      <ProductsSection />
      <WorldsSection />
      <FinalCta />
    </>
  );
}
