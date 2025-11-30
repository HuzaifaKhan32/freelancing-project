"use client";

import { useSearchParams } from 'next/navigation';
import { products } from '@/app/lib/data';
import ProductGrid from '@/app/components/ProductGrid';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  const filteredProducts = query
    ? products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-text-light mb-8">
        Search results for: <span className="text-primary">{query}</span>
      </h1>

      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-text-secondary-light">No products found matching your search.</p>
        </div>
      )}
    </main>
  );
}
