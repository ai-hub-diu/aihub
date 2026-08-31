import { Hero } from "@/components/sections/hero";
import { PlatformStatement } from "@/components/sections/platform-statement";
import { ChooseYourMove } from "@/components/sections/choose-your-move";
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
      <ChooseYourMove />
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
