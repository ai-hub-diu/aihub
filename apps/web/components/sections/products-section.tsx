import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ProductsSection() {
  return (
    <section id="products" className="border-b border-border bg-card/50 py-20">
      <div className="container-hub">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Demo Products
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Featured AI Products</h2>
          <p className="mt-3 text-muted-foreground">
            Real AI products built through student-industry collaboration on the Hub.
          </p>
        </ScrollReveal>

        <ScrollReveal
          stagger="[data-product]"
          delay={0.1}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {products.map((p) => (
            <div key={p.id} data-product>
              <ProductCard product={p} />
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
