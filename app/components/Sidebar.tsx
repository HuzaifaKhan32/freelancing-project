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
          className="fixed top-0 right-0 z-[999] h-screen w-[60%] bg-white shadow-[-10px_0px_10px_rgba(0,0,0,0.1)] p-[2vh_2vw] flex flex-col items-start justify-start"
        >
          <div className="flex justify-between items-center w-full">
            <p className="text-xl font-bold text-primary">Menu</p>
            <button onClick={onClose} className="text-2xl font-bold cursor-pointer text-primary"><AiOutlineClose /></button>
          </div>
          
          {/* Search bar */}
          <div className="relative flex flex-col min-w-40 w-full mt-5" ref={searchContainerRef}>
            <label className="!h-10 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-primary flex bg-transparent items-center justify-center pl-3 rounded-l-lg border border-primary">
                  <span className="material-symbols-outlined !text-2xl">search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-none border border-primary bg-transparent h-full placeholder:text-primary px-2 rounded-l-none pl-2 text-base font-normal leading-normal text-primary"
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
                          <p className="font-medium text-primary">{product.name}</p>
                          <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex flex-col items-start space-y-4 w-full mt-5">
            <Link href="/" onClick={onClose} className="mt-5 w-full text-xl font-semibold text-primary">Home</Link>
            <Link href="/shop" onClick={onClose} className="mt-5 w-full text-xl font-semibold text-primary">Shop</Link>
            <Link href="/about" onClick={onClose} className="mt-5 w-full text-xl font-semibold text-primary">About Us</Link>
            <Link href="/contact" onClick={onClose} className="mt-5 w-full text-xl font-semibold text-primary">Contact Us</Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;