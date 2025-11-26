"use client";

import Link from 'next/link';
import { useWishlist } from '@/app/context/WishlistContext';
import { useCart } from '@/app/context/CartContext';

export default function Header() {
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  const cartCount = cart.length;

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center border-b border-solid border-text-light/10 bg-background-light/80 backdrop-blur-sm">
      <div className="flex w-full max-w-7xl items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3">
                        <img src="/brandLogo.png" alt="Wovin Logo" width={60} height={60} />
                        <h2 className="text-xl font-bold tracking-tighter tracking-wider">WOVIN</h2>          </Link>
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
              <div className="text-text-secondary-light flex bg-content-light items-center justify-center pl-3 rounded-l-lg border border-r-0 border-text-light/20">
                <span className="material-symbols-outlined !text-2xl">search</span>
              </div>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-l-0 border-text-light/20 bg-content-light h-full placeholder:text-text-secondary-light px-2 rounded-l-none pl-2 text-base font-normal leading-normal" placeholder="Search" defaultValue="" />
            </div>
          </label>
          <div className="flex gap-2">
            <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 border border-text-light/20 bg-content-light text-text-light hover:bg-text-light/5">
              <span className="material-symbols-outlined !text-2xl">person</span>
            </button>
            <Link href="/wishlist" className="relative flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 border border-text-light/20 bg-content-light text-text-light hover:bg-text-light/5">
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">{wishlist.length}</span>
              )}
              <span className="material-symbols-outlined !text-2xl">favorite</span>
            </Link>
            <Link href="/cart" className="relative flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 border border-text-light/20 bg-content-light text-text-light hover:bg-text-light/5">
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

