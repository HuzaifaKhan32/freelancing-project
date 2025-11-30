// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Transition } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai'; // Import the close icon

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
          className="fixed top-0 right-0 h-full w-full sm:w-64 backdrop-blur-sm z-50 shadow-lg p-6 flex flex-col items-start space-y-4 border border-white/20"
          style={{ background: 'rgba(255, 255, 255, 0.1)' }}
        >
          <button onClick={onClose} className="self-end text-2xl font-bold"><AiOutlineClose /></button>
          <Link href="/" onClick={onClose} className="text-xl font-medium text-text-light hover:text-primary">Home</Link>
          <Link href="/profile" onClick={onClose} className="text-xl font-medium text-text-light hover:text-primary">Profile</Link>
          <Link href="/wishlist" onClick={onClose} className="text-xl font-medium text-text-light hover:text-primary">Wishlist</Link>
          <Link href="/cart" onClick={onClose} className="text-xl font-medium text-text-light hover:text-primary">Cart</Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;