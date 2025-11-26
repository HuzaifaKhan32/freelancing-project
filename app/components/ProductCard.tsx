"use client";

import Link from 'next/link';
import type { Product } from '@/app/lib/data';
import { useCart } from '@/app/context/CartContext';
import WishlistButton from './WishlistButton';

interface ProductCardProps {
  product: Product;
  layout?: 'grid' | 'scroll';
}

export default function ProductCard({ product, layout = 'grid' }: ProductCardProps) {
  const { addToCart } = useCart();
  if (layout === 'scroll') {
    return (
      <Link href={`/product/${product.id}`} passHref>
        <div className="group flex h-full flex-1 flex-col gap-4 rounded-xl bg-content-light dark:bg-content-dark shadow-sm border border-text-light/10 dark:border-text-dark/10 min-w-64 transition-shadow hover:shadow-lg cursor-pointer">
          <div className="relative w-full overflow-hidden rounded-t-xl">
            <WishlistButton product={product} renderedPage="productCard" />
            <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-t-xl flex flex-col transition-transform duration-500 group-hover:scale-110" data-alt={product.images[0].alt} style={{ backgroundImage: `url("${product.images[0].src}")` }}></div>
          </div>
          <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
            <div>
              <p className="font-semibold leading-normal">{product.name}</p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">${product.price.toFixed(2)}</p>
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
              className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-background-light dark:bg-background-dark border border-text-light/20 dark:border-text-dark/20 text-sm font-bold hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              <span className="truncate">Add to Cart</span>
            </button>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/product/${product.id}`} passHref>
      <div className="group flex flex-col gap-4 rounded-xl bg-content-light dark:bg-content-dark shadow-sm border border-text-light/10 dark:border-text-dark/10 transition-shadow hover:shadow-xl cursor-pointer h-full">
        <div className="relative w-full overflow-hidden rounded-t-xl">
          <WishlistButton product={product} renderedPage="productCard" />
          <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover transition-transform duration-500 group-hover:scale-110" data-alt={product.images[0].alt} style={{ backgroundImage: `url("${product.images[0].src}")` }}></div>
        </div>
        <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
          <div>
            <h3 className="font-bold text-lg leading-snug">{product.name}</h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">Unisex</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-primary">${product.price.toFixed(2)}</p>
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
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors"
            >
              <span className="truncate">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}