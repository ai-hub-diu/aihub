import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ProductsSection() {
  return (
    <section id="products" className="border-b border-border bg-muted/40 py-20 sm:py-28">
      <div className="container-hub">
        <ScrollReveal className="max-w-lg">
          <span className="tag-mono text-primary">Demo products</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            From student work to real products.
          </h2>
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
