"use client";

import { useRef, useState } from "react";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { findCertificate } from "@/data/certificates";
import { getGsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Status = "idle" | "checking" | "found" | "not-found";

export function CertificateVerification() {
  const [id, setId] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const resultRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    setStatus("checking");
    window.setTimeout(() => {
      const cert = findCertificate(id);
      setStatus(cert ? "found" : "not-found");
      requestAnimationFrame(() => {
        if (resultRef.current && !reduced) {
          const { gsap } = getGsap();
          gsap.fromTo(
            resultRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
          );
        }
      });
    }, 550);
  }

  const cert = findCertificate(id);

  return (
    <div className="mx-auto max-w-sm rounded-2xl border border-border bg-card p-6">
      <form onSubmit={handleVerify} className="flex flex-col gap-3">
        <label htmlFor="cert-id" className="tag-mono text-muted-foreground">
          Certificate ID
        </label>
        <Input
          id="cert-id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="DAI-2026-AI-000123"
          className="font-mono text-sm"
        />
        <Button type="submit" disabled={status === "checking"}>
          {status === "checking" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Verifying...
            </>
          ) : (
            "Verify"
          )}
        </Button>
      </form>

      {status === "found" && cert && (
        <div ref={resultRef} className="mt-5 rounded-xl border border-primary/25 bg-accent p-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-primary">
            <CheckCircle2 className="h-4 w-4" /> Verified
          </p>
          <p className="mt-2 font-semibold">{cert.courseTitle}</p>
          <p className="tag-mono mt-2 text-muted-foreground">
            {cert.issuedTo} · {cert.issuedDate}
          </p>
        </div>
      )}

      {status === "not-found" && (
        <div ref={resultRef} className="mt-5 rounded-xl border border-border bg-muted p-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <XCircle className="h-4 w-4" /> No matching certificate
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try DAI-2026-AI-000123 for a sample result.
          </p>
        </div>
      )}
    </div>
  );
}
