"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { findCertificate } from "@/data/certificates";

export function CertificateVerification() {
  const [id, setId] = useState("");
  const [result, setResult] = useState<"idle" | "found" | "not-found">("idle");

  function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    const cert = findCertificate(id);
    setResult(cert ? "found" : "not-found");
  }

  const cert = findCertificate(id);

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-6 shadow-sm">
      <form onSubmit={handleVerify} className="flex flex-col gap-3">
        <Label htmlFor="cert-id">Certificate ID</Label>
        <Input
          id="cert-id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="DAI-2026-AI-000123"
        />
        <Button type="submit">Verify Certificate</Button>
      </form>

      {result === "found" && cert && (
        <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
            <CheckCircle2 className="h-4 w-4" /> VERIFIED
          </p>
          <p className="mt-2 font-semibold">{cert.courseTitle}</p>
          <p className="mt-2 text-sm text-muted-foreground">Issued to: {cert.issuedTo}</p>
          <p className="text-sm text-muted-foreground">Issued: {cert.issuedDate}</p>
          <p className="text-sm text-muted-foreground">Issued by: {cert.issuer}</p>
        </div>
      )}

      {result === "not-found" && (
        <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-red-700">
            <XCircle className="h-4 w-4" /> No matching certificate found
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try DAI-2026-AI-000123 to see a sample verified certificate.
          </p>
        </div>
      )}
    </div>
  );
}
