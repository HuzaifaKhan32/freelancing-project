"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import toast from 'react-hot-toast';
import type { Product } from '@/app/lib/data';

export interface CartItem {
  product: Product;
  quantity: number;
  color: string;
  size: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existingItem = prev.find(
        (i) =>
          i.product.id === item.product.id &&
          i.size === item.size &&
          i.color === item.color
      );
      if (existingItem) {
        return prev.map((i) =>
          i.product.id === item.product.id &&
          i.size === item.size &&
          i.color === item.color
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
    toast.success('Added to cart!');
  };

  const removeFromCart = (productId: string, size: string, color: string) => {
    setCart((prev) =>
      prev.filter(
        (i) =>
          !(
            i.product.id === productId &&
            i.size === size &&
            i.color === color
          )
      )
    );
    toast.success('Removed from cart!');
  };

  const updateQuantity = (productId: string, size: string, color: string, quantity: number) => {
    setCart((prev) =>
      prev.map((i) =>
        i.product.id === productId &&
        i.size === size &&
        i.color === color
          ? { ...i, quantity }
          : i
      )
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
}