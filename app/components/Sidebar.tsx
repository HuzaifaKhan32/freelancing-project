// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Transition } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const sidebarVariants = {
    hidden: { x: '100%' },
    visible: { x: '0%', transition: { type: 'spring', stiffness: 300, damping: 30 } as Transition },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={sidebarVariants}
          className="fixed top-0 right-0 h-full w-64 bg-white/80 backdrop-blur-sm z-50 shadow-lg p-6 flex flex-col items-start space-y-4"
        >
          <button onClick={onClose} className="self-end text-2xl font-bold">X</button>
          <Link href="/" onClick={onClose} className="text-xl font-medium text-text-light hover:text-primary">Home</Link>
          <Link href="/shop" onClick={onClose} className="text-xl font-medium text-text-light hover:text-primary">Shop</Link>
          <Link href="/about" onClick={onClose} className="text-xl font-medium text-text-light hover:text-primary">About Us</Link>
          <Link href="/contact" onClick={onClose} className="text-xl font-medium text-text-light hover:text-primary">Contact Us</Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;