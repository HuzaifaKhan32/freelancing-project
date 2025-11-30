"use client";

import { useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import { products as initialProducts, Product } from '@/app/lib/data'; // Renamed products to initialProducts to avoid conflict
import ProductGrid from '@/app/components/ProductGrid';
import MobileFilterPanel from '@/app/components/MobileFilterPanel';

export default function ShopPage() {
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [sortOption, setSortOption] = useState('Newest Arrivals');

  const sortProducts = (productsToSort: Product[]): Product[] => {
    switch (sortOption) {
      case 'Price: Low to High':
        return [...productsToSort].sort((a, b) => a.price - b.price);
      case 'Price: High to Low':
        return [...productsToSort].sort((a, b) => b.price - a.price);
      case 'Newest Arrivals':
        // Assuming products are already ordered by newest or add a date field to Product type
        return [...productsToSort]; // For now, no change as this is default
      case 'Best Sellers':
        // Assuming Product has a 'soldCount' or similar for best sellers
        return [...productsToSort].sort((a, b) => (b.reviews || 0) - (a.reviews || 0)); // Using reviews as a proxy for best sellers
      case 'Customer Rating':
        return [...productsToSort].sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case 'Most Popular':
        // Similar to best sellers, or add a 'views'/'popularity' field
        return [...productsToSort].sort((a, b) => (b.reviews || 0) - (a.reviews || 0)); // Using reviews as a proxy
      case 'Name: A-Z':
        return [...productsToSort].sort((a, b) => a.name.localeCompare(b.name));
      case 'Name: Z-A':
        return [...productsToSort].sort((a, b) => b.name.localeCompare(a.name));
      default:
        return productsToSort;
    }
  };

  const sortedProducts = sortProducts(initialProducts);

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar (Desktop) */}
        <aside className="hidden lg:block w-full lg:w-64 xl:w-72 flex-shrink-0">
          <div className="sticky top-24 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-text-light">Filters</h3>
              <button className="text-sm text-primary hover:underline">Clear all</button>
            </div>
            {/* Size Filter */}
            <div className="space-y-3 border-t border-text-light/10 pt-4">
              <h4 className="font-semibold text-text-light">Size</h4>
              <div className="flex flex-wrap gap-2">
                <button className="h-10 w-10 rounded-lg border border-text-light/20 text-sm font-medium hover:border-primary hover:text-primary">S</button>
                <button className="h-10 w-10 rounded-lg border border-text-light/20 text-sm font-medium hover:border-primary hover:text-primary">M</button>
                <button className="h-10 w-10 rounded-lg border border-text-light/20 text-sm font-medium hover:border-primary hover:text-primary">L</button>
                <button className="h-10 w-10 rounded-lg border border-text-light/20 text-sm font-medium hover:border-primary hover:text-primary">XL</button>
                <button className="h-10 w-10 rounded-lg border border-text-light/20 text-sm font-medium hover:border-primary hover:text-primary">XXL</button>
              </div>
            </div>
            {/* Color Filter */}
            <div className="space-y-3 border-t border-text-light/10 pt-4">
              <h4 className="font-semibold text-text-light">Color</h4>
              <div className="flex flex-wrap gap-3">
                <button className="size-8 rounded-full bg-white border-2 border-primary" data-alt="White swatch, selected"></button>
                <button className="size-8 rounded-full bg-black border-2 border-transparent hover:border-primary" data-alt="Black swatch"></button>
                <button className="size-8 rounded-full bg-gray-400 border-2 border-transparent hover:border-primary" data-alt="Gray swatch"></button>
                <button className="size-8 rounded-full bg-red-500 border-2 border-transparent hover:border-primary" data-alt="Red swatch"></button>
                <button className="size-8 rounded-full bg-blue-500 border-2 border-transparent hover:border-primary" data-alt="Blue swatch"></button>
                <button className="size-8 rounded-full bg-green-500 border-2 border-transparent hover:border-primary" data-alt="Green swatch"></button>
              </div>
            </div>
            {/* Style Filter */}
            <div className="space-y-3 border-t border-text-light/10 pt-4">
              <h4 className="font-semibold text-text-light">Style</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm">
                  <input className="form-checkbox rounded text-primary focus:ring-primary/50" type="checkbox"/> Men
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input className="form-checkbox rounded text-primary focus:ring-primary/50" type="checkbox" /> Women
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input className="form-checkbox rounded text-primary focus:ring-primary/50" type="checkbox"/> Unisex
                </label>
              </div>
            </div>
            <button className="w-full flex h-11 items-center justify-center gap-x-2 rounded-lg bg-primary px-6 text-white text-sm font-bold">Apply Filters</button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex flex-wrap justify-between items-center gap-4 pb-6 border-b border-text-light/10">
            <div className="flex flex-col gap-1">
              <h1 className="text-text-light text-4xl font-black tracking-[-0.033em]">All T-Shirts</h1>
              <p className="text-text-secondary-light text-base font-normal">Shop Our Collection of Premium T-Shirts</p>
            </div>
            {/* Mobile Filter Button */}
            <button
              className="lg:hidden flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-content-light border border-text-light/10 text-text-light text-sm font-bold"
              onClick={() => setIsFilterPanelOpen(true)}
            >
              <FiFilter />
              <span>Filter</span>
            </button>

            <div className="flex gap-3">
              <select
                className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-content-light border border-text-light/10 pl-4 pr-3"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option>Newest Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Sellers</option>
                <option>Customer Rating</option>
                <option>Most Popular</option>
                <option>Name: A-Z</option>
                <option>Name: Z-A</option>
              </select>
            </div>
          </div>
          <ProductGrid products={sortedProducts} />
          {/* Pagination can be added here if needed */}
        </div>
      </div>
      <MobileFilterPanel isOpen={isFilterPanelOpen} onClose={() => setIsFilterPanelOpen(false)} />
    </main>
  );
}
