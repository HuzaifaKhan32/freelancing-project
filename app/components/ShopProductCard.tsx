"use client";

import Link from 'next/link';
import type { Product } from '@/app/lib/data';
import { useCart } from '@/app/context/CartContext';
import WishlistButton from './WishlistButton';

export default function ShopProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <Link href={`/product/${product.id}`} className="group flex flex-col gap-3 pb-3">
      <div className="relative w-full overflow-hidden rounded-xl">
        <WishlistButton product={product} renderedPage="productCard" />
        <div
          className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover transition-transform duration-300 group-hover:scale-105"
          data-alt={product.images[0].alt}
          style={{ backgroundImage: `url("${product.images[0].src}")` }}>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart({
              product,
              quantity: 1,
              color: product.colors[0].name,
              size: product.sizes[0],
            });
          }}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] bg-white/80 dark:bg-black/70 backdrop-blur-sm text-text-light dark:text-text-dark font-bold text-sm py-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Quick Add
        </button>
      </div>
      <div>
        <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">{product.name}</p>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}