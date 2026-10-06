import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import heroNoirImg from '../assets/images/hero_verona27_noir_1791317341488.jpg';
import { useCart } from '../context/CartContext';

export const Hero: React.FC = () => {
  const { setIsStoryOpen } = useCart();

  const handleShopScroll = () => {
    const el = document.getElementById('shop');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#09090b]">
      {/* Background image with calibrated editorial contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroNoirImg}
          alt="VÉRONA 27 NOIR Signature Flacon with Chiaroscuro Studio Lighting"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-[0.72] contrast-[1.08] scale-[1.02] transition-transform duration-1000 ease-out"
        />
        {/* Gradients to blend smoothly with dark background and ensure AA legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-[#09090b]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/80 via-transparent to-[#09090b]/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center">
        {/* Heritage Pill / Label */}
        <div className="flex items-center gap-2 mb-6 text-xs sm:text-sm tracking-[0.3em] uppercase text-[#c5a059] font-medium animate-in fade-in duration-700">
          <Sparkles className="w-3.5 h-3.5" />
          <span>EST. 2023 • CHENNAI</span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] font-medium tracking-[0.06em] text-white uppercase leading-[1.04] mb-6 max-w-4xl text-balance">
          LEAVE <br className="hidden sm:inline" />
          YOUR SIGNATURE.
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-xl text-[#ded9cf] font-light max-w-xl mx-auto mb-10 tracking-[0.04em] leading-relaxed">
          Fragrances crafted for moments that deserve to be remembered.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={handleShopScroll}
            className="w-full sm:w-auto px-8 py-4 bg-[#c5a059] hover:bg-[#d8b56d] text-[#09090b] text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-lg shadow-black/40 hover:shadow-[#c5a059]/20 hover:-translate-y-0.5 cursor-pointer"
          >
            SHOP FRAGRANCES
          </button>
          <button
            onClick={() => setIsStoryOpen(true)}
            className="w-full sm:w-auto px-8 py-4 border border-[#c5a059]/40 hover:border-[#c5a059] text-white hover:text-[#c5a059] text-xs sm:text-[13px] font-medium tracking-[0.2em] uppercase backdrop-blur-sm transition-all duration-300 cursor-pointer"
          >
            DISCOVER VÉRONA 27
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={handleShopScroll}
          className="mt-16 sm:mt-20 text-[#a39e93] hover:text-[#c5a059] flex flex-col items-center gap-2 transition-colors duration-300 cursor-pointer group"
          aria-label="Scroll to collection"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-light">Explore 27</span>
          <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-[#c5a059]" />
        </button>
      </div>
    </section>
  );
};
