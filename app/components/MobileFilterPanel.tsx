// components/MobileFilterPanel.tsx
import React from 'react';
import { motion, AnimatePresence, Transition } from 'framer-motion';
import { FiFilter } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

interface MobileFilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  // You might want to pass filter state and setters here
}

const MobileFilterPanel: React.FC<MobileFilterPanelProps> = ({ isOpen, onClose }) => {
  const panelVariants = {
    hidden: { x: '100%' },
    visible: { x: '0%', transition: { type: 'spring', stiffness: 300, damping: 30 } as Transition },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={panelVariants}
            className="fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg p-6 flex flex-col space-y-6"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the panel
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-text-light">Product Filters</h2>
              <button onClick={onClose} className="text-2xl font-bold">
                <AiOutlineClose />
              </button>
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileFilterPanel;