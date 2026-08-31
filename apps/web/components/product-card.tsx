import { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border-strong">
      <div className={`relative h-56 w-full overflow-hidden bg-gradient-to-br ${product.color}`}>
        <div className="dot-grid absolute inset-0 opacity-40 transition-transform duration-500 ease-out group-hover:scale-105" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="rounded-lg border border-foreground/10 bg-background/70 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            Product preview
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{product.description}</p>
        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
          {product.tags.map((t) => (
            <span key={t} className="tag-mono text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
