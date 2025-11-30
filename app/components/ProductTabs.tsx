"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, Product } from '@/app/lib/data';
import ProductCard from './ProductCard';

const tabs = ['New Arrivals', 'Featured', 'Top Rated'];

const ProductTabs = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const getProductsForTab = (tab: string): Product[] => {
    switch (tab) {
      case 'New Arrivals':
        return products.slice(0, 4);
      case 'Featured':
        return products.slice(4, 8);
      case 'Top Rated':
        return products.slice(8, 12);
      default:
        return [];
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-center border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-lg font-medium ${
              selectedTab === tab ? 'text-primary border-b-2 border-primary' : 'text-text-secondary-light'
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-8"
        >
          {getProductsForTab(selectedTab).map((product) => (
            <ProductCard key={product.id} product={product} layout="grid" />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProductTabs;