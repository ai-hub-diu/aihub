import { Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden">
      <div className={`h-24 w-full bg-gradient-to-br ${product.color}`} />
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.tags.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
