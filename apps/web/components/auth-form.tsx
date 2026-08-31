"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff, GraduationCap, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const triggerClass =
  "relative z-10 rounded-full bg-transparent py-2.5 text-sm font-medium text-muted-foreground shadow-none transition-colors hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none";

export function AuthForm({ mode }: { mode: Mode }) {
  const [role, setRole] = useState<Role>("User");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isLogin = mode === "login";
  const RoleIcon = roleCopy[role].icon;

  if (submitted) {
    return (
      <div className="auth-enter flex w-full max-w-md flex-col items-center rounded-[20px] border border-border bg-card p-10 text-center shadow-premium">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
          <CheckCircle2 className="h-6 w-6 text-primary" strokeWidth={1.75} />
        </div>
        <p className="mt-5 text-lg font-semibold tracking-tight">
          {isLogin ? "Signed in" : "Account created"} as {role}
        </p>
        <p className="tag-mono mt-2 text-muted-foreground">Demo · no data was sent anywhere</p>
      </div>
    );
  }

  return (
    <div className="auth-enter w-full max-w-md rounded-[20px] border border-border bg-card p-8 shadow-premium sm:p-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          {isLogin ? "Welcome back" : "Create your account"}
        </h1>
        <p className="mt-1.5 text-sm text-muted-foreground">
          {isLogin ? "Sign in to continue." : "Join AIHUB in a minute."}
        </p>
      </div>

      {/* role segmented control with sliding pill */}
      <Tabs value={role} onValueChange={(v) => setRole(v as Role)} className="mt-7 w-full">
        <TabsList className="relative grid w-full grid-cols-2 rounded-full border border-border bg-muted/60 p-1">
          <span
            aria-hidden
            className="absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-card shadow-[0_1px_2px_rgba(15,23,42,0.10)] transition-transform duration-300 ease-out"
            style={{ transform: role === "Supervisor" ? "translateX(100%)" : "translateX(0%)" }}
          />
          <TabsTrigger value="User" className={triggerClass}>
            User
          </TabsTrigger>
          <TabsTrigger value="Supervisor" className={triggerClass}>
            Supervisor
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* contextual role info */}
      <div className="mt-4 flex items-start gap-3 rounded-xl border border-border bg-muted/40 px-4 py-3.5">
        <RoleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
        <p className="text-[13px] leading-relaxed text-muted-foreground">
          {roleCopy[role].blurb}
        </p>
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
            <label htmlFor="name" className="tag-mono text-muted-foreground">
              Full Name
            </label>
            <Input
              id="name"
              required
              placeholder="Your full name"
              autoComplete="name"
              className="h-12 transition-[color,border-color,box-shadow] hover:border-border-strong focus-visible:border-primary focus-visible:ring-primary/20"
            />
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="tag-mono text-muted-foreground">
            Email
          </label>
          <Input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            autoComplete="email"
            className="h-12 transition-[color,border-color,box-shadow] hover:border-border-strong focus-visible:border-primary focus-visible:ring-primary/20"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="tag-mono text-muted-foreground">
              Password
            </label>
            {isLogin && (
              <Link
                href="#"
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
              >
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
              autoComplete={isLogin ? "current-password" : "new-password"}
              className="h-12 pr-12 transition-[color,border-color,box-shadow] hover:border-border-strong focus-visible:border-primary focus-visible:ring-primary/20"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {!isLogin && (
          <div className="flex flex-col gap-1.5">
            <label htmlFor="confirm-password" className="tag-mono text-muted-foreground">
              Confirm Password
            </label>
            <Input
              id="confirm-password"
              type={showPassword ? "text" : "password"}
              required
              minLength={8}
              placeholder="••••••••"
              autoComplete="new-password"
              className="h-12 transition-[color,border-color,box-shadow] hover:border-border-strong focus-visible:border-primary focus-visible:ring-primary/20"
            />
          </div>
        )}

        <Button
          type="submit"
          size="lg"
          className="group mt-3 h-12 rounded-xl text-[15px] font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-8px_rgba(29,79,216,0.50)] active:translate-y-0"
        >
          {isLogin ? `Sign In as ${role}` : `Create ${role} Account`}
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Button>
      </form>

      <p className="mt-7 text-center text-sm text-muted-foreground">
        {isLogin ? (
          <>
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              Sign up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              Sign in
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
