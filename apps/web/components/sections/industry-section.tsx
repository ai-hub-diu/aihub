import Link from "next/link";
import { Target, Users, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cards = [
  {
    icon: Target,
    title: "Post Opportunities",
    description: "Define the problem, skills and expected outcomes.",
  },
  {
    icon: Users,
    title: "Find Talent",
    description: "Discover students based on verified skills and project evidence.",
  },
  {
    icon: Hammer,
    title: "Build Together",
    description: "Turn successful student contributions into real solutions.",
  },
];

export function IndustrySection() {
  return (
    <section id="industry" className="border-b border-border bg-card/50 py-20">
      <div className="container-hub">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Have an AI Problem? Find the Talent to Solve It.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Connect with skilled students, define real-world work opportunities, and discover
            emerging AI talent.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cards.map((c) => (
            <Card key={c.title}>
              <CardHeader>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <CardTitle className="pt-2">{c.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{c.description}</CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button size="lg" asChild>
            <Link href="/industry">Post an Opportunity</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/industry">Partner With Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
