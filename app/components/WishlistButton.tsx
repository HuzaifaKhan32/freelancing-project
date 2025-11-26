"use client";

import { useWishlist } from '@/app/context/WishlistContext';
import type { Product } from '@/app/lib/data';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

interface WishlistButtonProps {
  product: Product;
  renderedPage: 'productCard' | 'productPage';
}

export default function WishlistButton({ product, renderedPage }: WishlistButtonProps) {
  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist();
  const isProductWishlisted = isWishlisted(product.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isProductWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const buttonClasses = {
    productCard: 'absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow-md transition-transform hover:scale-110 cursor-pointer',
    productPage: 'p-3 border rounded-lg border-text-light/20 transition-transform hover:scale-110 cursor-pointer',
  };

  return (
    <button
      onClick={handleWishlistClick}
      className={buttonClasses[renderedPage]}
    >
      {isProductWishlisted ? (
        <FaHeart className="text-red-500 text-xl" />
      ) : (
        <FaRegHeart className="text-gray-500 text-xl" />
      )}
    </button>
  );
}
