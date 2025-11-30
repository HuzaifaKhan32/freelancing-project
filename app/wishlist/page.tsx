"use client";

import { useWishlist } from '@/app/context/WishlistContext';
import ProductGrid from '@/app/components/ProductGrid';
import { FaHeartBroken } from 'react-icons/fa';

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-4xl font-bold mb-8">Your Wishlist</h1>
      {wishlist.length > 0 ? (
        <ProductGrid products={wishlist} />
      ) : (
        <div className="flex min-h-[50vh] flex-col items-center justify-center p-24">
          <div className="flex flex-col items-center gap-4">
            <FaHeartBroken className="text-9xl text-gray-400" />
            <h1 className="text-2xl sm:text-4xl font-bold">Your Wishlist is Empty</h1>
            <p className="text-gray-500">You haven&apos;t added any products to your wishlist yet.</p>
          </div>
        </div>
      )}
    </main>
  );
}