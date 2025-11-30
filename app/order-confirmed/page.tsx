"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function OrderConfirmedPage() {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  } as any);

  return (
    <main className="flex-1 bg-background-light">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          {/* PageHeading */}
          <div className="flex flex-col items-center text-center p-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-green-600" style={{ fontSize: 36 }}>check_circle</span>
            </div>
            <p className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">Thank you for your order!</p>
            <p className="text-[#617589] text-base font-normal leading-normal mt-3 max-w-lg">We&apos;ve received your order and are getting it ready. A confirmation email has been sent to you at designer@example.com.</p>
            <button onClick={handlePrint} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] mt-6 gap-2">
              <span className="material-symbols-outlined text-base">print</span>
              <span className="truncate">Print Receipt</span>
            </button>
          </div>
          <div className="printable-area" ref={componentRef}>
            <div className="space-y-8">
              {/* Order Details Section */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Order Details</h2>
                <div className="grid grid-cols-[auto_1fr] gap-x-6">
                  <div className="col-span-2 grid grid-cols-subgrid border-t border-t-gray-200 py-4">
                    <p className="text-[#617589] text-sm font-normal leading-normal">Order Number</p>
                    <p className="text-[#111418] text-sm font-medium leading-normal text-right">#17345</p>
                  </div>
                  <div className="col-span-2 grid grid-cols-subgrid border-t border-t-gray-200 py-4">
                    <p className="text-[#617589] text-sm font-normal leading-normal">Order Date</p>
                    <p className="text-[#111418] text-sm font-medium leading-normal text-right">October 24, 2024</p>
                  </div>
                  <div className="col-span-2 grid grid-cols-subgrid border-t border-t-gray-200 py-4">
                    <p className="text-[#617589] text-sm font-normal leading-normal">Payment Method</p>
                    <p className="text-[#111418] text-sm font-medium leading-normal text-right">Cash on Delivery</p>
                  </div>
                </div>
              </div>
              {/* Items Ordered Section */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Items Ordered</h2>
                <ul className="divide-y divide-gray-200">
                  <li className="py-4 flex items-start space-x-4">
                    <Image className="w-20 h-24 rounded-lg object-cover" alt="A plain white t-shirt on a hanger" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3i2lrrgbPgTXInapcT3oHJ_5u96o7M_23DJcQFSGFMVIS20GATtaWnzcJbY1OSEDUUy7hMMQLSPQsGl8YbbAju7bxQyG5ccdx8dkvcgQ97ZKhMY5XybxzT3w0WB5ucVxiAEcaJ0KI2jKDYgBC2rj2AtcpwunI3RRnnVDpnzTFFt4s7pXsTaMpAhujcvDcRYi6b6Va1UwSRTdqVNn-1s4IclhI3v5R33Fk7Vvr_CxEhd15P64VN3wCKT0le5F1ZBf2D1psJ7R0j3U_" width={80} height={96}/>
                                      <div className="flex-1">
                                        <h3 className="font-bold text-[#111418]">Classic Crew Tee</h3>
                                        <p className="text-sm text-[#617589]">Size: Large, Color: White</p>
                                        <p className="text-sm text-[#617589]">Qty: 1</p>
                                      </div>
                                      <p className="font-semibold text-[#111418]">$25.00</p>                  </li>
                  <li className="py-4 flex items-start space-x-4">
                    <Image className="w-20 h-24 rounded-lg object-cover" alt="A black graphic t-shirt with a mountain design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOWaAWDHRhUspBBKun5H1iUrrngjYjT0IZYscBBdrbjv6pAleSJi00xBS_M3-Oe5vS5eBLhw4u-Y8r5oYr0Pn6Ts1o7tBDzFhK7apjWSj4dXpy10dRcW9Zt5jXY49UY5PdVMHup_Ni99dmdlDAOM6O75lj8d3P-6f0mj1I8XGENlWK0_EsR3YZq8eZC1JAr1dvdD3Qh_veTqiOUbvkJX8UHAIktFuQG4i-CpWninqnanOh_C-VKN1b8Vs4MTpF373kIsnQLyYwx5Ij" width={80} height={96}/>
                                      <div className="flex-1">
                                        <h3 className="font-bold text-[#111418]">Mountain Graphic Tee</h3>
                                        <p className="text-sm text-[#617589]">Size: Medium, Color: Black</p>
                                        <p className="text-sm text-[#617589]">Qty: 2</p>
                                      </div>
                                      <p className="font-semibold text-[#111418]">$60.00</p>                  </li>
                </ul>
                              {/* Pricing Summary */}
                              <div className="border-t border-gray-200 mt-4 pt-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span className="text-[#617589]">Subtotal</span>
                                  <span className="text-[#111418]">$85.00</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-[#617589]">Shipping</span>
                                  <span className="text-[#111418]">$5.00</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-[#617589]">Taxes</span>
                                  <span className="text-[#111418]">$7.20</span>
                                </div>
                                <div className="flex justify-between font-bold text-base pt-2 border-t border-gray-200 mt-2">
                                  <span className="text-[#111418]">Total</span>
                                  <span className="text-[#111418]">$97.20</span>
                                </div>
                              </div>              </div>
              {/* Shipping & Billing Information */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Delivery Information</h2>
                <div className="grid md:grid-cols-2 gap-6 pt-2">
                                  <div>
                                    <h3 className="font-semibold text-base text-[#111418] mb-1">Shipping Address</h3>
                                    <address className="text-sm text-[#617589] not-italic leading-relaxed">
                                      Jane Doe<br />
                                      123 Design Street<br />
                                      Creativity City, CA 90210<br />
                                      United States
                                    </address>
                                  </div>
                                  <div>
                                    <h3 className="font-semibold text-base text-[#111418] mb-1">Billing Address</h3>
                                    <address className="text-sm text-[#617589] not-italic leading-relaxed">
                                      Same as shipping address
                                    </address>
                                  </div>                </div>
              </div>
            </div>
          </div>
          {/* Call to Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/orders" className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">View Order History</span>
            </Link>
            <Link href="/" className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gray-200 text-[#111418] text-base font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Continue Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
