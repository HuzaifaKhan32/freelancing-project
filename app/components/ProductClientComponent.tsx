"use client";

import { useState } from 'react';
import { Product, products } from '@/app/lib/data';
import { useCart } from '@/app/context/CartContext';
import WishlistButton from '@/app/components/WishlistButton';
import ProductGrid from '@/app/components/ProductGrid';
import Image from 'next/image';

import Link from 'next/link';

export default function ProductClientComponent({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const { cart, addToCart, removeFromCart } = useCart();

  const relatedProducts = products.filter((p) => p.id !== product.id);

  const isInCart = cart.some(
    (item) =>
      item.product.id === product.id &&
      item.size === selectedSize &&
      item.color === selectedColor
  );

  const handleCartClick = () => {
    if (isInCart) {
      removeFromCart(product.id, selectedSize, selectedColor);
    } else {
      addToCart({
        product,
        quantity,
        color: selectedColor,
        size: selectedSize,
      });
    }
  };

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap gap-2 py-4">
        <Link className="text-text-secondary-light text-sm font-medium leading-normal hover:text-primary" href="/">Home</Link>
        <span className="text-text-secondary-light text-sm font-medium leading-normal">/</span>
        <a className="text-text-secondary-light text-sm font-medium leading-normal hover:text-primary" href="#">T-Shirts</a>
        <span className="text-text-secondary-light text-sm font-medium leading-normal">/</span>
        <span className="text-text-light text-sm font-medium leading-normal">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-4">
        {/* Left Column: Image Gallery */}
        <div className="flex flex-col gap-4">
          <Image
            className="w-full aspect-square rounded-lg object-cover"
            alt={product.images[0].alt}
            src={product.images[0].src}
            width={600}
            height={600}
            priority
          />
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <Image
                key={index}
                className={`w-full aspect-square rounded-lg object-cover ${index === 0 ? 'border-2 border-primary' : ''}`}
                alt={image.alt}
                src={image.src}
                width={150}
                height={150}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Product Info */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-text-light text-3xl md:text-4xl font-bold leading-tight">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex gap-0.5 text-yellow-400">
                {/* Simple rating display */}
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined !text-lg" style={{fontVariationSettings: `'FILL' ${i < product.rating ? 1 : 0}`}}>star</span>
                ))}
              </div>
              <a className="text-text-secondary-light text-sm font-medium leading-normal hover:text-primary" href="#reviews">
                ({product.reviews} reviews)
              </a>
            </div>
          </div>

          <p className="text-3xl font-bold text-text-light">
            ${product.price.toFixed(2)}
            {product.originalPrice && (
              <span className="text-xl font-normal text-text-secondary-light line-through ml-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </p>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-text-light">Color: <span className="font-normal text-text-secondary-light">{selectedColor}</span></p>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  className={`size-8 rounded-full ${color.class} ${selectedColor === color.name ? 'ring-2 ring-offset-2 ring-primary' : 'border border-text-light/20'}`}
                  onClick={() => setSelectedColor(color.name)}
                ></button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium text-text-light">Size</p>
              <a className="text-sm font-medium text-primary hover:underline" href="#">Size Guide</a>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded-lg ${selectedSize === size ? 'bg-primary text-white border-primary' : 'border-text-light/20 hover:bg-text-light/5'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="flex items-center border rounded-lg border-text-light/20">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 py-3 text-text-secondary-light"><span className="material-symbols-outlined !text-xl">remove</span></button>
              <input className="w-12 text-center bg-transparent border-0 focus:ring-0 text-text-light" readOnly type="text" value={quantity}/>
              <button onClick={() => setQuantity(q => q + 1)} className="px-4 py-3 text-text-secondary-light"><span className="material-symbols-outlined !text-xl">add</span></button>
            </div>
            <WishlistButton product={product} renderedPage="productPage" />
            <button
              onClick={handleCartClick}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-base leading-normal transition-colors cursor-pointer ${
                isInCart
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-primary hover:bg-primary/90'
              }`}
            >
              <span className="material-symbols-outlined">{isInCart ? 'remove_shopping_cart' : 'add_shopping_cart'}</span>
              {isInCart ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>

          <div className="border-t border-text-light/20 pt-6">
            <div className="border-b border-text-light/20 py-4">
              <details className="group" open>
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h2 className="text-base font-semibold text-text-light">Product Details</h2>
                  <span className="text-text-secondary-light transition-transform duration-300 group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </summary>
                <div className="mt-4 text-sm text-text-secondary-light space-y-2">
                  <p>{product.description}</p>
                </div>
              </details>
            </div>
            <div className="border-b border-text-light/20 py-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-base font-semibold text-text-light">Specifications & Care</h3>
                  <span className="text-text-secondary-light transition-transform duration-300 group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </summary>
                <ul className="mt-4 text-sm text-text-secondary-light space-y-2 list-disc pl-5">
                  {product.details.map(detail => <li key={detail}>{detail}</li>)}
                </ul>
              </details>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-text-light mb-8">Related Products</h2>
        <ProductGrid products={relatedProducts} productLength={4} />
      </section>
    </main>
  );
}
