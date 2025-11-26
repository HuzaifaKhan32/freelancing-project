import { products } from '@/app/lib/data';
import Link from 'next/link';
import ProductCard from '@/app/components/ProductCard';

export default function Home() {
  return (
    <main className="flex-grow">
      <section className="w-full py-12 md:py-20 lg:py-24">
        <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl">Find Your Next Favorite Tee</h1>
          <p className="max-w-2xl text-text-secondary-light dark:text-text-secondary-dark md:text-xl">Discover unique, high-quality t-shirts designed by independent artists.</p>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-wide shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/30">
            Explore Collections
          </button>
        </div>
      </section>
      <section className="w-full pb-12 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} layout="grid" />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold leading-tight tracking-tight px-4 pb-6">New Arrivals</h2>
          <div className="flex overflow-x-auto pb-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-stretch p-1 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} layout="scroll" />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold leading-tight tracking-tight px-4 pb-6">Featured Collections</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <a className="group relative flex min-h-[320px] items-end justify-start overflow-hidden rounded-xl p-6 text-white no-underline" href="#">
              <div className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="A collage of various graphic t-shirts with bold and colorful designs" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCvwNrV0tJhnxcZkw3S6hsYvwJkaZimfW8Oj6aTHxcqxCA0lCN8hGNLjJKA91uv65QgGHUa-74grU-WrrvLEd0Q2NTukgp-tuVjh_kG3vU0ggbjpye84suaWfe_bqr1-79uwMyO3UbFzE97536RhjyvFDLleQxci-Co4XJagKWrp0lYNxDXFnouFT8pKT6gTwKjY6ESYqn6W7UxI2X215FInFCEmzwtVHj5mv2-l6zcPMZoZF5t6NH3MAWXB4Sxe6PP4QPboj2x8Dif')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <h3 className="relative z-10 text-2xl font-bold">Graphic Tees</h3>
            </a>
            <a className="group relative flex min-h-[320px] items-end justify-start overflow-hidden rounded-xl p-6 text-white no-underline" href="#">
              <div className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="A person on a beach wearing a light-colored t-shirt, evoking a summer vibe" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiHw-_wQSxM6ch8OjpNQQGyHSW2xqIh3ahy8e8Vh5mAaWyP6VmLlSBEfI1rxCRACKTzhcSofHqdLLYWNsc26l9HaL5b70IOr_7B1IiDrcckzSx74cNXm6ll-0YF-ydG70ATDBWFn-QYxmBnKPI0c6m1QL_oNzpl0oVV38JYUTe2tZWsF5SorIhmbssI2SBDyfBnxkVEiSAVw7WGqrmibHBmse-v5wre38aAD532Lbx6Dg0WFjlXeg1R-6ZNpEskw4u-uzhC_A2js_p')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <h3 className="relative z-10 text-2xl font-bold">Summer Vibe</h3>
            </a>
            <a className="group relative flex min-h-[320px] items-end justify-start overflow-hidden rounded-xl p-6 text-white no-underline" href="#">
              <div className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="A close-up of a plain t-shirt with a very small, subtle logo, representing minimalist design" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8QCn9fqAADeS3cj_ruCMN1Qjd03hGyD4tlOROmmRUvKbfFBuL7huPHIHMsQ7nKE3IlJhXnxa3iqPHyr5NTPUqefnDH2zhLbDIyR7UHrYhp1yjuRWu4H9el3dSMqwZCZgIKUxlBMbWtFIYW6ipYD2dcwU3awODmp2e7HzaDdIT2KW3dly9O0IgsCEPfuaNpg9Fdd6GJZKcosicWR8o0CKVaBsgZXiBPKcB3Yl3XQWK1XSujXI4290XEi8qakIVwbKsBXA9V3iaNafK')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <h3 className="relative z-10 text-2xl font-bold">Minimalist</h3>
            </a>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-primary/20 dark:bg-primary/10 p-8 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Free Shipping On All Orders!</h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark">Get your new favorite tees delivered to your door, on us. Limited time offer.</p>
            </div>
            <button className="flex w-full shrink-0 md:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-primary/90 transition-colors">
              Start Shopping
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}