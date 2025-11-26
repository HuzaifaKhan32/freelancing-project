"use client";

import Link from 'next/link';
import { useWishlist } from '@/app/context/WishlistContext';
import { useCart } from '@/app/context/CartContext';

export default function Header() {
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  const cartCount = cart.length;

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center border-b border-solid border-text-light/10 dark:border-text-dark/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="flex w-full max-w-7xl items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="size-8 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold tracking-tighter">TeeShop</h2>
          </Link>
          <nav className="hidden items-center gap-9 md:flex">
            <Link className="text-sm font-medium hover:text-primary" href="/">Home</Link>
            <Link className="text-sm font-medium hover:text-primary" href="/about">About Us</Link>
            <Link className="text-sm font-medium hover:text-primary" href="/contact">Contact Us</Link>
            <Link className="text-sm font-medium hover:text-primary" href="/shop">Shop</Link>
          </nav>
        </div>
        <div className="flex flex-1 justify-end gap-2 sm:gap-4">
          <label className="hidden sm:flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-text-secondary-light dark:text-text-secondary-dark flex bg-content-light dark:bg-content-dark items-center justify-center pl-3 rounded-l-lg border border-r-0 border-text-light/20 dark:border-text-dark/20">
                <span className="material-symbols-outlined !text-2xl">search</span>
              </div>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-l-0 border-text-light/20 dark:border-text-dark/20 bg-content-light dark:bg-content-dark h-full placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-2 rounded-l-none pl-2 text-base font-normal leading-normal" placeholder="Search" defaultValue="" />
            </div>
          </label>
          <div className="flex gap-2">
            <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 border border-text-light/20 dark:border-text-dark/20 bg-content-light dark:bg-content-dark text-text-light dark:text-text-dark hover:bg-text-light/5 dark:hover:bg-text-dark/5">
              <span className="material-symbols-outlined !text-2xl">person</span>
            </button>
            <Link href="/wishlist" className="relative flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 border border-text-light/20 dark:border-text-dark/20 bg-content-light dark:bg-content-dark text-text-light dark:text-text-dark hover:bg-text-light/5 dark:hover:bg-text-dark/5">
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">{wishlist.length}</span>
              )}
              <span className="material-symbols-outlined !text-2xl">favorite</span>
            </Link>
            <Link href="/cart" className="relative flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 border border-text-light/20 dark:border-text-dark/20 bg-content-light dark:bg-content-dark text-text-light dark:text-text-dark hover:bg-text-light/5 dark:hover:bg-text-dark/5">
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">{cartCount}</span>
              )}
              <span className="material-symbols-outlined !text-2xl">shopping_bag</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
