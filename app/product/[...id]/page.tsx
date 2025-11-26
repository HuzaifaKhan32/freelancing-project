import { products } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default function ProductPage({ params }: { params: { id: string[] } }) {
  const id = params.id?.[0];
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap gap-2 py-4">
        <a className="text-text-secondary-light text-sm font-medium leading-normal hover:text-primary" href="/">Home</a>
        <span className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium leading-normal">/</span>
        <a className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium leading-normal hover:text-primary" href="#">T-Shirts</a>
        <span className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium leading-normal">/</span>
        <span className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-4">
        {/* Left Column: Image Gallery */}
        <div className="flex flex-col gap-4">
          <div 
            className="w-full bg-center bg-no-repeat bg-cover aspect-square rounded-lg" 
            data-alt={product.images[0].alt}
            style={{ backgroundImage: `url("${product.images[0].src}")` }}
          ></div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div 
                key={index}
                className={`w-full bg-center bg-no-repeat bg-cover aspect-square rounded-lg ${index === 0 ? 'border-2 border-primary' : ''}`}
                data-alt={image.alt}
                style={{ backgroundImage: `url("${image.src}")` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Right Column: Product Info */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-text-light dark:text-text-dark text-3xl md:text-4xl font-bold leading-tight">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex gap-0.5 text-yellow-400">
                {/* Simple rating display */}
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined !text-lg" style={{fontVariationSettings: `'FILL' ${i < product.rating ? 1 : 0}`}}>star</span>
                ))}
              </div>
              <a className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium leading-normal hover:text-primary" href="#reviews">
                ({product.reviews} reviews)
              </a>
            </div>
          </div>

          <p className="text-3xl font-bold text-text-light dark:text-text-dark">
            ${product.price.toFixed(2)}
            {product.originalPrice && (
              <span className="text-xl font-normal text-text-secondary-light dark:text-text-secondary-dark line-through ml-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </p>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-text-light dark:text-text-dark">Color: <span className="font-normal text-text-secondary-light dark:text-text-secondary-dark">{product.colors[0].name}</span></p>
            <div className="flex gap-3">
              {product.colors.map((color, index) => (
                <button key={color.name} className={`size-8 rounded-full ${color.class} ${index === 0 ? 'ring-2 ring-offset-2 ring-primary dark:ring-offset-background-dark' : 'border border-text-light/20'}`}></button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium text-text-light dark:text-text-dark">Size</p>
              <a className="text-sm font-medium text-primary hover:underline" href="#">Size Guide</a>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button key={size} className="px-4 py-2 border rounded-lg border-text-light/20 dark:border-text-dark/20 text-sm font-medium hover:bg-text-light/5 dark:hover:bg-text-dark/5">{size}</button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="flex items-center border rounded-lg border-text-light/20 dark:border-text-dark/20">
              <button className="px-4 py-3 text-text-secondary-light dark:text-text-secondary-dark"><span className="material-symbols-outlined !text-xl">remove</span></button>
              <input className="w-12 text-center bg-transparent border-0 focus:ring-0 text-text-light dark:text-text-dark" readOnly type="text" value="1"/>
              <button className="px-4 py-3 text-text-secondary-light dark:text-text-secondary-dark"><span className="material-symbols-outlined !text-xl">add</span></button>
            </div>
            <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold text-base leading-normal">
              <span className="material-symbols-outlined">add_shopping_cart</span>
              Add to Cart
            </button>
          </div>

          <div className="border-t border-text-light/20 dark:border-text-dark/20 pt-6">
            <div className="border-b border-text-light/20 dark:border-text-dark/20 py-4">
              <details className="group" open>
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-base font-semibold text-text-light dark:text-text-dark">Description</h3>
                  <span className="text-text-secondary-light dark:text-text-secondary-dark transition-transform duration-300 group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </summary>
                <div className="mt-4 text-sm text-text-secondary-light dark:text-text-secondary-dark space-y-2">
                  <p>{product.description}</p>
                </div>
              </details>
            </div>
            <div className="border-b border-text-light/20 dark:border-text-dark/20 py-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-base font-semibold text-text-light dark:text-text-dark">Specifications & Care</h3>
                  <span className="text-text-secondary-light dark:text-text-secondary-dark transition-transform duration-300 group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </summary>
                <ul className="mt-4 text-sm text-text-secondary-light dark:text-text-secondary-dark space-y-2 list-disc pl-5">
                  {product.details.map(detail => <li key={detail}>{detail}</li>)}
                </ul>
              </details>
            </div>
          </div>
        </div>
      </div>
      
      {/* Customer Reviews and You Might Also Like sections can be added here */}

    </main>
  );
}
