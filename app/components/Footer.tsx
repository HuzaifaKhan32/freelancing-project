import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-content-light border-t border-text-light/10 mt-12">
      <div className="container mx-auto grid grid-cols-2 gap-8 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3">
            <Image src="/brandLogo.png" alt="Wovin Logo" width={32} height={32} />
            <h2 className="text-xl font-bold tracking-tighter">WOVIN</h2>
          </div>
          <p className="mt-4 text-text-secondary-light">Crafting threads of connection.</p>
        </div>
        <div>
          <p className="font-bold">Shop</p>
          <nav className="mt-4 flex flex-col gap-2">
            <Link className="text-text-secondary-light" href="#">New Arrivals</Link>
            <Link className="text-text-secondary-light" href="#">Men</Link>
            <Link className="text-text-secondary-light" href="#">Women</Link>
            <Link className="text-text-secondary-light" href="#">Collections</Link>
          </nav>
        </div>
        <div>
          <p className="font-bold">Company</p>
          <nav className="mt-4 flex flex-col gap-2">
            <Link className="text-text-secondary-light" href="/about">About Us</Link>
            <Link className="text-text-secondary-light" href="/contact">Contact</Link>
            <Link className="text-text-secondary-light" href="#">FAQ</Link>
            <Link className="text-text-secondary-light" href="#">Shipping &amp; Returns</Link>
          </nav>
        </div>
        <div>
          <p className="font-bold">Stay Connected</p>
          <p className="mt-4 text-text-secondary-light">Join our newsletter for exclusive deals.</p>
          <form className="mt-4 flex">
            <input className="form-input w-full rounded-l-lg border-r-0 border-text-light/20 bg-background-light focus:border-primary focus:ring-primary/50" placeholder="Enter your email" type="email" />
            <button className="flex shrink-0 items-center justify-center rounded-r-lg bg-primary px-4 text-white hover:bg-primary/90" type="submit">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-text-light/10 py-6">
        <p className="text-center text-sm text-text-secondary-light">© {currentYear} Wovin. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

