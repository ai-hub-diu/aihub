import { testimonials } from "@/data/testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TestimonialsSection() {
  return (
    <section className="border-b border-border py-20">
      <div className="container-hub">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What the Community Is Saying
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Demo testimonials — fictional profiles for illustration purposes only.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <CardContent className="pt-6">
                <Badge variant="outline">{t.audience}</Badge>
                <p className="mt-4 text-sm leading-relaxed text-foreground">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
