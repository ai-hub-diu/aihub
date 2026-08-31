import { CertificateVerification } from "@/components/certificate-verification";

export function CertificateSection() {
  return (
    <section id="certificates" className="border-b border-border py-20">
      <div className="container-hub">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Certificates You Can Verify
          </h2>
          <p className="mt-3 text-muted-foreground">
            Every credential can be verified through AIHUB.
          </p>
        </div>

        <div className="mt-10">
          <CertificateVerification />
        </div>
      </div>
    </section>
  );
}
