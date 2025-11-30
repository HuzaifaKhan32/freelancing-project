"use client";

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Product } from '@/app/lib/data';
import { useCart } from '@/app/context/CartContext';
import WishlistButton from './WishlistButton';

interface ProductCardProps {
  product: Product;
  layout?: 'grid' | 'scroll';
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ProductCard({ product, layout = 'grid' }: ProductCardProps) {
  const { cart, addToCart, removeFromCart } = useCart();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInCart = cart.some(
    (item) =>
      item.product.id === product.id &&
      item.size === product.sizes[0] &&
      item.color === product.colors[0].name
  );

  const handleCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isInCart) {
      removeFromCart(product.id, product.sizes[0], product.colors[0].name);
    } else {
      addToCart({
        product,
        quantity: 1,
        color: product.colors[0].name,
        size: product.sizes[0],
      });
    }
  };

  if (layout === 'scroll') {
    return (
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="h-full"
      >
        <Link href={`/product/${product.id}`} passHref>
          <div className="group flex h-full flex-1 flex-col gap-4 rounded-xl bg-content-light shadow-md border border-gray-200 min-w-64 transition-shadow hover:shadow-lg cursor-pointer">
            <div className="relative w-full overflow-hidden rounded-t-xl">
              <WishlistButton product={product} renderedPage="productCard" />
              <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-t-xl flex flex-col" data-alt={product.images[0].alt} style={{ backgroundImage: `url("${product.images[0].src}")` }}></div>
            </div>
            <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
              <div className='h-20 overflow-hidden'>
                <p className="font-semibold leading-normal">{product.name}</p>
                <p className="text-text-secondary-light text-sm font-normal leading-normal mb-2">${product.price.toFixed(2)}</p>
              </div>
              <button
                onClick={handleCartClick}
                className={`flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-sm font-bold transition-colors ${
                  isInCart
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-background-light border border-text-light/20 hover:bg-primary hover:text-white hover:border-primary'
                }`}
              >
                <span className="truncate">{isInCart ? 'Remove' : 'Add to Cart'}</span>
              </button>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="h-full"
    >
      <Link href={`/product/${product.id}`} passHref>
        <div className="group flex flex-col gap-4 rounded-xl bg-content-light shadow-md border border-gray-200 transition-shadow hover:shadow-xl cursor-pointer h-full">
          <div className="relative w-full overflow-hidden rounded-t-xl">
            <WishlistButton product={product} renderedPage="productCard" />
            <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover" data-alt={product.images[0].alt} style={{ backgroundImage: `url("${product.images[0].src}")` }}></div>
          </div>
          <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
            <div className='h-20 overflow-hidden'>
              <h3 className="font-bold text-lg leading-snug">{product.name}</h3>
              <p className="text-text-secondary-light text-sm font-normal leading-normal">Unisex</p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <p className="text-lg font-bold text-primary">${product.price.toFixed(2)}</p>
              <button
                onClick={handleCartClick}
                className={`flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-sm font-bold transition-colors ${
                  isInCart
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                <span className="truncate">{isInCart ? 'Remove' : 'Add to Cart'}</span>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
