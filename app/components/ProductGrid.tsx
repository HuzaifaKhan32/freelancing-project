"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Product } from '@/app/lib/data';
import ProductCard from '@/app/components/ProductCard';

interface ProductGridProps {
  products: Product[];
  productLength?: number;
}

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

export default function ProductGrid({ products, productLength }: ProductGridProps) {
  const productsToDisplay = productLength ? products.slice(0, productLength) : products;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 pt-8"
      variants={gridVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {productsToDisplay.map((product) => (
        <motion.div key={product.id} variants={cardVariants}>
          <ProductCard product={product} layout="grid" />
        </motion.div>
      ))}
    </motion.div>
  );
}
