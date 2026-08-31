import type { Metadata } from "next";
import { AuthForm } from "@/components/auth-form";
import { AuthSidePanel } from "@/components/auth-side-panel";

export const metadata: Metadata = {
  title: "Sign In | AIHUB",
  description: "Sign in to AIHUB as a User or Supervisor.",
};

export default function LoginPage() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col lg:grid lg:grid-cols-[1.08fr_1fr]">
      <AuthSidePanel />
      <div className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
        <AuthForm mode="login" />
      </div>
    </section>
  );
}
