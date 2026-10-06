import React from 'react';
import { X, Sparkles, Droplets, Sun, Wind, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const GuideModal: React.FC = () => {
  const { isGuideOpen, setIsGuideOpen } = useCart();

  if (!isGuideOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={() => setIsGuideOpen(false)}
      />

      <div className="relative w-full max-w-4xl bg-[#0e0e13] border border-[#282836] text-white shadow-2xl z-10 my-auto max-h-[92vh] overflow-y-auto animate-in fade-in duration-300">
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0e0e13]/95 backdrop-blur-md border-b border-[#21212b]">
          <span className="text-xs tracking-[0.25em] uppercase text-[#c5a059] font-medium">
            HAUTE PERFUMERY APPLICATION GUIDE
          </span>
          <button
            onClick={() => setIsGuideOpen(false)}
            className="p-1.5 text-[#8e8a81] hover:text-white transition-colors cursor-pointer"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c5a059] font-medium block mb-2">
              MASTERING YOUR SILLAGE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium mb-3">
              How To Wear VÉRONA 27
            </h2>
            <p className="text-xs sm:text-sm text-[#9e9a91] font-light">
              Fine extrait perfumes behave differently from commercial eau de toilette. Here is how
              to maximize longevity and projection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 bg-[#14141c] border border-[#232330]">
              <div className="flex items-center gap-2 text-[#c5a059] mb-3">
                <Droplets className="w-4 h-4" />
                <h4 className="font-serif text-lg text-white">Target Warm Pulse Points</h4>
              </div>
              <p className="text-[#a8a397] font-light leading-relaxed">
                Apply to the sides of the neck, collarbones, and inner wrists. The blood flow near
                these arterial regions radiates warmth, naturally diffusing the fragrance notes
                throughout the day.
              </p>
            </div>

            <div className="p-6 bg-[#14141c] border border-[#232330]">
              <div className="flex items-center gap-2 text-[#c5a059] mb-3">
                <Wind className="w-4 h-4" />
                <h4 className="font-serif text-lg text-white">Never Rub Your Wrists</h4>
              </div>
              <p className="text-[#a8a397] font-light leading-relaxed">
                Friction generates excess heat that crushes delicate top-note citrus and spice
                molecules like bergamot and pink pepper, destroying the intended olfactory pyramid
                transition.
              </p>
            </div>

            <div className="p-6 bg-[#14141c] border border-[#232330]">
              <div className="flex items-center gap-2 text-[#c5a059] mb-3">
                <Sun className="w-4 h-4" />
                <h4 className="font-serif text-lg text-white">Hydrated Skin Anchors Oils</h4>
              </div>
              <p className="text-[#a8a397] font-light leading-relaxed">
                Fragrance molecules evaporate significantly faster on dry skin. Apply unscented
                moisturizer or oil after bathing before misting VÉRONA 27 to double your scent
                retention.
              </p>
            </div>

            <div className="p-6 bg-[#14141c] border border-[#232330]">
              <div className="flex items-center gap-2 text-[#c5a059] mb-3">
                <Clock className="w-4 h-4" />
                <h4 className="font-serif text-lg text-white">Misting Garments & Scarves</h4>
              </div>
              <p className="text-[#a8a397] font-light leading-relaxed">
                Natural fibers like wool, silk, and heavy cotton hold perfume base notes like amber
                and oud for days. Spray from 8 inches away for an ethereal ambient trail.
              </p>
            </div>
          </div>

          <div className="mt-10 p-6 bg-[#0a0a0d] border border-[#242430] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h5 className="font-serif text-white text-base">Unsure which flacon matches your skin?</h5>
              <p className="text-xs text-[#8e8a81]">
                Use our interactive Fragrance Finder quiz on the homepage for personalized advice.
              </p>
            </div>
            <button
              onClick={() => {
                setIsGuideOpen(false);
                const el = document.getElementById('fragrance-finder');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2.5 bg-[#c5a059] text-black text-xs font-semibold uppercase tracking-wider cursor-pointer shrink-0"
            >
              TAKE THE QUIZ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
