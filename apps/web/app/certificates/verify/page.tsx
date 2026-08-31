import type { Metadata } from "next";
import { CertificateVerification } from "@/components/certificate-verification";

export const metadata: Metadata = {
  title: "Verify a Certificate | AIHUB",
  description: "Verify an AIHUB certificate by ID.",
};

export default function VerifyCertificatePage() {
  return (
    <section className="py-16">
      <div className="container-hub">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Certificates You Can Verify
          </h1>
          <p className="mt-3 text-muted-foreground">
            Every credential can be verified through AIHUB. Try
            <span className="font-medium text-foreground"> DAI-2026-AI-000123</span> for a sample result.
          </p>
        </div>
        <div className="mt-10">
          <CertificateVerification />
        </div>
      </div>
    </section>
  );
}
