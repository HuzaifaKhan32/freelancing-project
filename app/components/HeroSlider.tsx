import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const images = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBDyRN02H-f3kQORr7CQJAG5AUD7E4sCFwhXrMG2wZGVJtMUNSilSMYH7_iq2njEHzdsg2S3rhG_VKBFqTtZdsNr4eW_rnvyy1X4OHVJJ1XniSymBgXjkYecd91hLfsDEZeMeBgKeBjboggbW1ObPZSjg9isyOxk-hkdp4b9zGsIinIUcXX-pHM22bUfCQs0CET8diyS8cacWv7ZwAiPePvMDafJn2SXZQptnl7lSmN-dG8TPAVQjboU5BEaUER0JZY9Wqxh_KzpKgW',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDb-ZNI7OxGiURrENkh2wjUr8zIPQVVmUfQQ0cwU8-9l1IABtqZ_P3K4E2WjI6xOdcxpP_ERbdtjvSIJY-5lt2TcKUSkw_JIATfaIkKCPPGWIEqt1VV3cfsRw0BZChyY53KEJhrcsVjHTWsLJCmcyT_iylh6XxyEr4tJpMzsrc-WlFzgj6R30urjkjQSGzYRZ7HU7JDLXzERm3j-2tDcWi1DMzUU1hH1r7uINkJHDWtUlkgxF16E1O4-OyCtj4yhNRT7Q27tRPr7Chh',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCDvFgRDpcajnPYFpb5xhnxkXSwiI8Di-Ij924eDWUT3cQXq8GRT3ZKEuenZCjbI1txsBz9PKFuHyUOqR51qEG_Xef8Z0gFb6MWdH78IE3y9SCdyGSllTNc1T3AX5yJs3mJ3VFvIDbwkBteUHIzsxYfpoNwdoHCKuCG7n1JvMYb1FsmA0VQpYdOYWP4n_TOFC4pfSpi13xUdNniGaEzuQ2lighaLwOCuT-QKT1Vh72Z-KXqoNI_QNyIjv4A2ntCznuovUOflYnHJJaW',
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[60vh] min-h-[400px] md:h-[80vh] bg-cover bg-center text-white flex items-center">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${images[currentIndex]}')` }}
        >
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto flex flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">Wear Your Vibe</h1>
        <p className="max-w-2xl text-lg md:text-xl text-white/90">Exclusive designs, premium quality. Find the tee that speaks to you.</p>
        <Link href="/shop" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-wide shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/30">
          Shop The Collection
        </Link>
      </div>
    </section>
  );
};

export default HeroSlider;