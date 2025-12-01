import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Transition } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai'; // Import the close icon
import { useWishlist } from '@/app/context/WishlistContext';
import { useCart } from '@/app/context/CartContext';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { products, Product } from '@/app/lib/data';


interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  const cartCount = cart.length;

  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);


  const sidebarVariants = {
    hidden: { x: '100%' },
    visible: { x: '0%', transition: { type: 'spring', stiffness: 300, damping: 30 } as Transition },
  };

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


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={sidebarVariants}
          className="fixed top-0 right-0 h-full w-1/2 bg-white backdrop-blur-sm z-50 shadow-lg p-6 flex flex-col items-start space-y-4 border border-white/20"
        >
          <div className="flex justify-between items-center w-full">
            <h1 className="text-xl font-bold text-primary">Wovin</h1>
            <button onClick={onClose} className="text-2xl font-bold"><AiOutlineClose /></button>
          </div>
          
          {/* Search bar */}
          <div className="relative flex flex-col min-w-40 w-full" ref={searchContainerRef}>
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
          
          {/* Profile Button */}
          <Link href="/profile" onClick={onClose} className="text-xl font-medium text-primary hover:text-black w-full text-center py-2 rounded-lg">Profile</Link>

          <div className="flex flex-col items-start space-y-4 w-full"> {/* Centered links */}
            <Link href="/" onClick={onClose} className="text-xl font-medium text-primary hover:text-black w-full text-center py-2 rounded-lg">Home</Link>
            <Link href="/shop" onClick={onClose} className="text-xl font-medium text-primary hover:text-black w-full text-center py-2 rounded-lg">Shop</Link>
            <Link href="/about" onClick={onClose} className="text-xl font-medium text-primary hover:text-black w-full text-center py-2 rounded-lg">About Us</Link>
            <Link href="/contact" onClick={onClose} className="text-xl font-medium text-primary hover:text-black w-full text-center py-2 rounded-lg">Contact Us</Link>
          </div>

          {/* Wishlist and Cart Buttons at the bottom */}
          <div className="mt-auto flex flex-col items-start space-y-4 w-full">
            {/* Wishlist Button */}
            <Link href="/wishlist" onClick={onClose} className="relative flex items-center justify-center overflow-hidden rounded-lg h-10 w-full border border-text-light/20 bg-content-light text-primary hover:text-black hover:bg-text-light/5">
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">{wishlist.length}</span>
              )}
              <span className="material-symbols-outlined !text-2xl">favorite</span>
              <span className="ml-2">Wishlist</span>
            </Link>

            {/* Cart Button */}
            <Link href="/cart" onClick={onClose} className="relative flex items-center justify-center overflow-hidden rounded-lg h-10 w-full border border-text-light/20 bg-content-light text-primary hover:text-black hover:bg-text-light/5">
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">{cartCount}</span>
              )}
              <span className="material-symbols-outlined !text-2xl">shopping_bag</span>
              <span className="ml-2">Cart</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;