"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, GraduationCap, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type Role = "User" | "Supervisor";
type Mode = "login" | "signup";

const roleCopy: Record<Role, { icon: typeof GraduationCap; blurb: string }> = {
  User: {
    icon: GraduationCap,
    blurb: "Learn courses, apply to jobs and build your skill passport.",
  },
  Supervisor: {
    icon: ShieldCheck,
    blurb: "Guide students, manage courses and review industry opportunities.",
  },
};

export function AuthForm({ mode }: { mode: Mode }) {
  const [role, setRole] = useState<Role>("User");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isLogin = mode === "login";
  const RoleIcon = roleCopy[role].icon;

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
        <CheckCircle2 className="h-12 w-12 text-primary" />
        <p className="mt-4 text-lg font-semibold">
          {isLogin ? "Signed in" : "Account created"} as {role}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          This is a demo — no data was sent anywhere.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9">
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight">
          {isLogin ? "Welcome back" : "Create your account"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {isLogin
            ? "Sign in to continue learning, working and building."
            : "Join AIHUB to start your Learn → Verify → Work → Build → Grow journey."}
        </p>
      </div>

      <Tabs value={role} onValueChange={(v) => setRole(v as Role)} className="mt-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="User">User</TabsTrigger>
          <TabsTrigger value="Supervisor">Supervisor</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-accent px-3.5 py-3 text-accent-foreground">
        <RoleIcon className="mt-0.5 h-4 w-4 shrink-0" />
        <p className="text-xs leading-relaxed">{roleCopy[role].blurb}</p>
      </div>

      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        {!isLogin && (
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" required placeholder="Your full name" />
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required placeholder="you@example.com" />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            {isLogin && (
              <Link href="#" className="text-xs font-medium text-primary hover:underline">
                Forgot password?
              </Link>
            )}
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              minLength={8}
              placeholder="••••••••"
              className="pr-11"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {!isLogin && (
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" type={showPassword ? "text" : "password"} required minLength={8} placeholder="••••••••" />
          </div>
        )}

        <Button type="submit" size="lg" className="mt-2">
          {isLogin ? `Sign In as ${role}` : `Create ${role} Account`}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {isLogin ? (
          <>
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-medium text-primary hover:underline">
              Sign up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
