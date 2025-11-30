"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';

export default function CheckoutPage() {
  const { cart, getCartTotal } = useCart();
  const shippingMethod = 'standard';
  const shippingCost = 5;
  const taxes = getCartTotal() * 0.08; // 8% tax
  const total = getCartTotal() + shippingCost + taxes;

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Checkout Steps */}
        <div className="lg:col-span-7">
          <div className="flex flex-col gap-8">
            {/* Breadcrumbs / Stepper */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-2 text-primary text-base font-semibold leading-normal">
                <span className="flex items-center justify-center size-6 bg-primary text-white rounded-full text-xs">1</span>
                Shipping
              </span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-500 text-base font-medium leading-normal">Payment</span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-500 text-base font-medium leading-normal">Review</span>
            </div>
            {/* Shipping Details Section */}
            <div className="flex flex-col gap-6">
              <p className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">Shipping Details</p>
              <p className="text-slate-600 text-base font-normal leading-normal">Have an account? <Link className="font-medium text-primary hover:underline" href="/login">Log in</Link> for a faster checkout.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* First Name */}
                <label className="flex flex-col">
                  <p className="text-[#111418] text-base font-medium leading-normal pb-2">First Name</p>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-white h-12 placeholder:text-slate-400 p-[15px] text-base font-normal leading-normal" placeholder="John" />
                </label>
                {/* Last Name */}
                <label className="flex flex-col">
                  <p className="text-[#111418] text-base font-medium leading-normal pb-2">Last Name</p>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-white h-12 placeholder:text-slate-400 p-[15px] text-base font-normal leading-normal" placeholder="Doe" />
                </label>
              </div>
              {/* Email */}
              <label className="flex flex-col">
                <p className="text-[#111418] text-base font-medium leading-normal pb-2">Email Address</p>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-white h-12 placeholder:text-slate-400 p-[15px] text-base font-normal leading-normal" placeholder="example@email.com" type="email" />
              </label>
              {/* Address */}
              <label className="flex flex-col">
                <p className="text-[#111418] text-base font-medium leading-normal pb-2">Address</p>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-white h-12 placeholder:text-slate-400 p-[15px] text-base font-normal leading-normal" placeholder="123 Main Street" />
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* City */}
                <label className="flex flex-col">
                  <p className="text-[#111418] text-base font-medium leading-normal pb-2">City</p>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-white h-12 placeholder:text-slate-400 p-[15px] text-base font-normal leading-normal" placeholder="New York" />
                </label>
                {/* State */}
                <label className="flex flex-col">
                  <p className="text-[#111418] text-base font-medium leading-normal pb-2">State</p>
                  <select className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-white h-12 px-3 text-base font-normal leading-normal">
                    <option>NY</option>
                    <option>CA</option>
                    <option>TX</option>
                  </select>
                </label>
                {/* Zip Code */}
                <label className="flex flex-col">
                  <p className="text-[#111418] text-base font-medium leading-normal pb-2">Zip Code</p>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-white h-12 placeholder:text-slate-400 p-[15px] text-base font-normal leading-normal" placeholder="10001" />
                </label>
              </div>
              {/* Payment Method */}
              <div className="flex flex-col gap-4 pt-4">
                <p className="text-[#111418] text-xl font-bold">Payment Method</p>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-4 border border-primary rounded-lg cursor-pointer bg-primary/5">
                    <div className="flex items-center gap-3">
                      <input defaultChecked className="form-radio text-primary focus:ring-primary" name="payment" type="radio" />
                      <span className="font-medium">Cash on Delivery</span>
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <Link href="/order-confirmed" className="flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-primary/90 transition-colors">
                  <span>Place Order</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column: Order Summary */}
        <aside className="lg:col-span-5">
          <div className="sticky top-24">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.product.id} className="flex items-start gap-4">
                    <div className="relative">
                      <Image className="size-20 rounded-lg object-cover" alt={item.product.images[0].alt} src={item.product.images[0].src} width={80} height={80}/>
                      <span className="absolute -top-2 -right-2 flex items-center justify-center size-6 bg-primary text-white text-xs font-bold rounded-full">{item.quantity}</span>
                    </div>
                    <div className="flex-grow">
                      <p className="font-semibold">{item.product.name}</p>
                      <p className="text-sm text-slate-500">Size: {item.size}</p>
                    </div>
                    <p className="font-semibold">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="h-px bg-slate-200 my-6"></div>
              <div className="flex items-center gap-4">
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white h-12 placeholder:text-slate-400 dark:placeholder-slate-500 p-[15px] text-base font-normal leading-normal" placeholder="Promo code" />
                <button className="flex items-center justify-center rounded-lg h-12 px-5 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">Apply</button>
              </div>
              <div className="h-px bg-slate-200 my-6"></div>
              <div className="space-y-3 text-base">
                <div className="flex justify-between">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="font-medium text-black">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Shipping</span>
                  <span className="font-medium text-black">${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Taxes</span>
                  <span className="font-medium text-black">${taxes.toFixed(2)}</span>
                </div>
              </div>
              <div className="h-px bg-slate-200 my-6"></div>
              <div className="flex justify-between font-bold text-xl">
                <span>Total</span>
                <span className="text-black">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}