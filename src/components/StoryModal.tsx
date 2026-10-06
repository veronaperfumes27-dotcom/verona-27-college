import React from 'react';
import { X, Sparkles, Award } from 'lucide-react';
import { useCart } from '../context/CartContext';
import craftImg from '../assets/images/editorial_verona_craft_1791317388961.jpg';

export const StoryModal: React.FC = () => {
  const { isStoryOpen, setIsStoryOpen } = useCart();

  if (!isStoryOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={() => setIsStoryOpen(false)}
      />

      <div className="relative w-full max-w-4xl bg-[#0e0e13] border border-[#282836] text-white shadow-2xl z-10 my-auto max-h-[92vh] overflow-y-auto animate-in fade-in duration-300">
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0e0e13]/95 backdrop-blur-md border-b border-[#21212b]">
          <span className="text-xs tracking-[0.25em] uppercase text-[#c5a059] font-medium">
            THE CHRONICLE OF VÉRONA 27
          </span>
          <button
            onClick={() => setIsStoryOpen(false)}
            className="p-1.5 text-[#8e8a81] hover:text-white transition-colors cursor-pointer"
            aria-label="Close story"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-12">
          {/* Hero Banner */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden border border-[#232330] mb-10">
            <img
              src={craftImg}
              alt="Artisanal perfume formulation"
              className="w-full h-full object-cover object-center brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#c5a059] block mb-1">
                ESTABLISHED 2023 • CHENNAI
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium">
                The Art of Being Remembered
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs sm:text-sm text-[#cbc6bc] font-light leading-relaxed">
            <div className="md:col-span-7 space-y-5">
              <p className="font-serif text-xl sm:text-2xl text-white leading-normal italic font-normal">
                “We never wanted to create transient pleasant smells. We set out to engineer personal signatures.”
              </p>
              <p>
                Founded in Chennai in 2023, VÉRONA 27 was born out of frustration with mass-market
                perfumes that vanish into thin air thirty minutes after leaving your door.
              </p>
              <p>
                Southern India has been the global epicenter of rare botanicals for millennia — from
                sweet Mysore sandalwood to aromatic cardamom from the Western Ghats and deep amber
                resins. We united this sacred olfactive heritage with contemporary French perfume
                formulation architecture.
              </p>
              <p>
                The number <strong>27</strong> embodies our unbending commitment: every batch of
                VÉRONA 27 macerates in darkness for exactly twenty-seven days, allowing volatile top
                chords and heavy base resins to fuse at the molecular level into pure, 25%+ extrait
                potency.
              </p>
            </div>

            <div className="md:col-span-5 space-y-4">
              <div className="p-5 bg-[#14141c] border border-[#262636]">
                <div className="flex items-center gap-2 text-[#c5a059] mb-2 font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">The 27 Standard</span>
                </div>
                <p className="text-xs text-[#a39e94]">
                  No synthetic fillers, no water dilution. Only pure ethanol and sustainably sourced
                  essential oils calibrated to harmonize with human skin temperature.
                </p>
              </div>

              <div className="p-5 bg-[#14141c] border border-[#262636]">
                <div className="flex items-center gap-2 text-[#c5a059] mb-2 font-medium">
                  <Award className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">Accessible Modern Luxury</span>
                </div>
                <p className="text-xs text-[#a39e94]">
                  By formulating, bottling, and distributing directly from our Chennai studio, we eliminate
                  middlemen markups, delivering ₹10,000+ luxury perfume quality at an honest ₹2,499 price point.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#21212b] text-center">
            <button
              onClick={() => setIsStoryOpen(false)}
              className="px-8 py-3.5 bg-[#c5a059] hover:bg-[#d8b56d] text-[#09090b] text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer"
            >
              EXPLORE OUR PERFUMES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
