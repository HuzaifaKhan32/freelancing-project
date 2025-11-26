import type { Product } from '@/app/lib/data';
import ShopProductCard from '@/app/components/ShopProductCard';

interface ProductGridProps {
  products: Product[];
  productLength?: number; // Optional prop to limit the number of products displayed
}

export default function ProductGrid({ products, productLength }: ProductGridProps) {
  const productsToDisplay = productLength ? products.slice(0, productLength) : products;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 pt-8">
      {productsToDisplay.map((product) => (
        <ShopProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
