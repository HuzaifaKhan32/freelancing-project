"use client";

import { useCart } from '@/app/context/CartContext';
import { BsCartX } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex items-start gap-4 border-b pb-4">
                  <Link href={`/product/${item.product.id}`}>
                    <Image src={item.product.images[0].src} alt={item.product.images[0].alt} className="w-24 h-32 object-cover rounded-lg" width={96} height={128}/>
                  </Link>
                  <div className="flex-1">
                    <h2 className="font-bold">{item.product.name}</h2>
                    <p className="text-sm text-gray-500">Color: {item.color}</p>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                    <p className="font-bold mt-2">${item.product.price.toFixed(2)}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center border rounded-lg">
                      <button onClick={() => updateQuantity(item.product.id, item.size, item.color, Math.max(1, item.quantity - 1))} className="px-3 py-1">-</button>
                      <span className="px-4">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)} className="px-3 py-1">+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.product.id, item.size, item.color)} className="text-red-500 text-sm hover:underline">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="border-t my-4"></div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <Link href="/checkout" className="w-full mt-6 bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-primary/90 text-center flex items-center justify-center">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex min-h-[50vh] flex-col items-center justify-center p-24">
          <div className="flex flex-col items-center gap-4">
            <BsCartX className="text-9xl text-gray-400" />
            <h1 className="text-4xl font-bold">Your Cart is Empty</h1>
            <p className="text-gray-500">You haven&apos;t added any products to your cart yet.</p>
          </div>
        </div>
      )}
    </main>
  );
}