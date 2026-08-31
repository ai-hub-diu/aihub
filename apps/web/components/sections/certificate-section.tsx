import { CertificateVerification } from "@/components/certificate-verification";
import { ScrollReveal } from "@/components/scroll-reveal";

export function CertificateSection() {
  return (
    <section id="certificates" className="border-b border-border bg-muted/40 py-20 sm:py-28">
      <div className="container-hub">
        <ScrollReveal className="mx-auto max-w-md text-center">
          <span className="tag-mono text-primary">Verification</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Credentials you can verify.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-10">
          <CertificateVerification />
        </ScrollReveal>
      </div>
    </section>
  );
}
