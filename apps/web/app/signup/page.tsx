import type { Metadata } from "next";
import { AuthForm } from "@/components/auth-form";
import { AuthSidePanel } from "@/components/auth-side-panel";

export const metadata: Metadata = {
  title: "Join AIHUB | Sign Up",
  description: "Create your AIHUB account as a User or Supervisor.",
};

export default function SignupPage() {
  return (
    <section className="grid min-h-[calc(100vh-4rem)] lg:grid-cols-2">
      <AuthSidePanel />
      <div className="flex items-center justify-center px-4 py-16">
        <AuthForm mode="signup" />
      </div>
    </section>
  );
}
