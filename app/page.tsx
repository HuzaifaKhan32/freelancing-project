"use client";

import { motion } from 'framer-motion';
import HeroSlider from '@/app/components/HeroSlider';
import ProductGrid from '@/app/components/ProductGrid';
import { products } from '@/app/lib/data';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-grow"
    >
      <HeroSlider />
      <section className="w-full py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">New Arrivals</h2>
            <p className="mt-2 text-base text-text-secondary-light">Explore our freshest designs.</p>
          </div>
          <ProductGrid products={products} productLength={4} />
        </div>
      </section>
      <section className="w-full py-12 md:py-20 lg:py-24 bg-content-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Tees</h2>
            <p className="mt-2 text-lg text-text-secondary-light">Handpicked for the bold and the creative.</p>
          </div>
          <ProductGrid products={products} />
        </div>
      </section>
      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-primary/20 p-8 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Free Shipping On All Orders!</h3>
              <p className="text-text-secondary-light">Get your new favorite tees delivered to your door, on us. Limited time offer.</p>
            </div>
            <button className="flex w-full shrink-0 md:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-primary/90 transition-colors">
              Start Shopping
            </button>
          </div>
        </div>
      </section>
    </motion.main>
  );
}

