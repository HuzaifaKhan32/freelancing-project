"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useWishlist } from '@/app/context/WishlistContext';
import { useCart } from '@/app/context/CartContext';
import { products, Product } from '@/app/lib/data';
import Sidebar from './Sidebar'; // Import the new Sidebar component

export default function Header() {
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  const cartCount = cart.length;

  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchQuery) {
        const filteredProducts = products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setResults(filteredProducts);
        setIsDropdownVisible(true);
      } else {
        setResults([]);
        setIsDropdownVisible(false);
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center border-b border-solid border-text-light/10 bg-background-light/80 backdrop-blur-sm">
      <div className="flex w-full max-w-7xl items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8 py-3">
        {/* Left side: Logo and Name */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/brandLogo.png" alt="Wovin Logo" width={60} height={60} />
            <h1 className="text-xl font-bold tracking-tighter tracking-wider">WOVIN</h1>
          </Link>
          <nav className="hidden items-center gap-9 md:flex">
            <Link className="text-sm font-medium hover:text-primary" href="/">Home</Link>
            <Link className="text-sm font-medium hover:text-primary" href="/about">About Us</Link>
            <Link className="text-sm font-medium hover:text-primary" href="/contact">Contact Us</Link>
            <Link className="text-sm font-medium hover:text-primary" href="/shop">Shop</Link>
          </nav>
        </div>

        {/* Right side: Search, Wishlist, Cart, Menu Icon */}
        <div className="flex flex-1 justify-end gap-2 sm:gap-4">
          {/* Search bar (hidden on mobile, visible from sm breakpoint up) */}
          <div className="relative hidden sm:flex flex-col min-w-40 max-w-64" ref={searchContainerRef}>
            <label className="!h-10 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-text-secondary-light flex bg-gray-100 items-center justify-center pl-3 rounded-l-lg border border-transparent">
                  <span className="material-symbols-outlined !text-2xl">search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-none border border-transparent bg-gray-100 h-full placeholder:text-text-secondary-light px-2 rounded-l-none pl-2 text-base font-normal leading-normal"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsDropdownVisible(true)}
                />
              </div>
            </label>
            {isDropdownVisible && results.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto hide-scrollbar">
                <ul>
                  {results.map((product) => (
                    <li key={product.id}>
                      <Link
                        href={`/product/${product.id}`}
                        className="flex items-center gap-4 p-3 hover:bg-gray-100"
                        onClick={() => {
                          setIsDropdownVisible(false);
                          setSearchQuery('');
                        }}
                      >
                      <Image src={product.images[0].src} alt={product.images[0].alt} className="w-12 h-12 rounded-md object-cover" width={48} height={48}/>
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Wishlist Button (Visible on all screens) */}
          <Link href="/wishlist" className="relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 border border-text-light/20 bg-content-light text-text-light hover:bg-text-light/5">
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">{wishlist.length}</span>
            )}
            <span className="material-symbols-outlined !text-2xl">favorite</span>
          </Link>

          {/* Cart Button (Visible on all screens) */}
          <Link href="/cart" className="relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 border border-text-light/20 bg-content-light text-text-light hover:bg-text-light/5">
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">{cartCount}</span>
            )}
            <span className="material-symbols-outlined !text-2xl">shopping_bag</span>
          </Link>

          {/* Hamburger Menu Icon for Mobile */}
          <button
            className="md:hidden text-text-light"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <span className="material-symbols-outlined !text-2xl">menu</span>
          </button>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}

