import React, { useState } from 'react';
import { Sparkles, ArrowRight, RotateCcw, ShoppingBag, Eye } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface QuizState {
  mood: string | null;
  occasion: string | null;
  family: string | null;
}

export const FragranceFinder: React.FC = () => {
  const { addToCart, setDetailProduct } = useCart();

  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<QuizState>({
    mood: null,
    occasion: null,
    family: null
  });
  const [recommended, setRecommended] = useState<Product | null>(null);

  const moods = [
    { label: 'Bold', desc: 'Commanding, confident and magnetic presence' },
    { label: 'Fresh', desc: 'Vibrant, luminous and effortlessly uplifting' },
    { label: 'Mysterious', desc: 'Soft, seductive, whispered intimacy' },
    { label: 'Elegant', desc: 'Opulent, regal, timelessly sophisticated' }
  ];

  const occasions = [
    { label: 'Everyday', desc: 'Your daily olfactory signature for all moments' },
    { label: 'Work', desc: 'Refined professionalism that leaves an impression' },
    { label: 'Date Night', desc: 'Sensual, intoxicating drydown for close encounters' },
    { label: 'Special Occasion', desc: 'Grand celebrations and monumental evenings' }
  ];

  const families = [
    { label: 'Woody', desc: 'Cedar, Tuscan leather, amber and smoky woods' },
    { label: 'Fresh', desc: 'Crisp bergamot, Amalfi lemon and bright accords' },
    { label: 'Floral', desc: 'Florentine iris, peony and velvety vanilla' },
    { label: 'Oriental', desc: 'Royal Cambodian oud, saffron and sandalwood' }
  ];

  const handleSelectMood = (mood: string) => {
    setAnswers((prev) => ({ ...prev, mood }));
    setStep(2);
  };

  const handleSelectOccasion = (occasion: string) => {
    setAnswers((prev) => ({ ...prev, occasion }));
    setStep(3);
  };

  const handleSelectFamily = (family: string) => {
    const finalAnswers = { ...answers, family };
    setAnswers(finalAnswers);

    // Calculate match
    let matchSlug = 'noir';
    if (finalAnswers.mood === 'Fresh' || finalAnswers.family === 'Fresh') {
      matchSlug = 'eclat';
    } else if (finalAnswers.mood === 'Mysterious' || finalAnswers.family === 'Floral') {
      matchSlug = 'veil';
    } else if (
      finalAnswers.mood === 'Elegant' ||
      finalAnswers.occasion === 'Special Occasion' ||
      finalAnswers.family === 'Oriental'
    ) {
      matchSlug = 'oud-27';
    } else {
      matchSlug = 'noir';
    }

    const matchedProduct = PRODUCTS.find((p) => p.slug === matchSlug) || PRODUCTS[0];
    setRecommended(matchedProduct);
    setStep(4);
  };

  const handleReset = () => {
    setAnswers({ mood: null, occasion: null, family: null });
    setRecommended(null);
    setStep(1);
  };

  return (
    <section id="fragrance-finder" className="py-24 sm:py-32 bg-[#09090b] border-t border-[#1a1a22]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-[#c5a059] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OLFACTORY DISCOVERY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white tracking-[0.06em] uppercase mb-3">
            FIND YOUR SIGNATURE
          </h2>
          <p className="text-sm sm:text-base text-[#bbb6ac] font-light">
            Not sure which fragrance is yours? Take our 30-second curation quiz.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-[#111115] border border-[#24242e] p-6 sm:p-10 shadow-2xl relative">
          {/* Step Indicator */}
          {step <= 3 && (
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#1e1e26] text-xs">
              <span className="text-[#c5a059] tracking-[0.16em] uppercase font-medium">
                Step 0{step} of 03
              </span>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      s === step ? 'w-8 bg-[#c5a059]' : s < step ? 'w-4 bg-[#c5a059]/40' : 'w-4 bg-[#23232c]'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Question 1: Mood */}
          {step === 1 && (
            <div className="animate-in fade-in duration-300">
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-2">
                1. What mood describes you?
              </h3>
              <p className="text-xs sm:text-sm text-[#9c978e] mb-8 font-light">
                Select the emotional aura you wish to evoke in those around you.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {moods.map((m) => (
                  <button
                    key={m.label}
                    onClick={() => handleSelectMood(m.label)}
                    className="group text-left p-5 bg-[#0b0b0e] border border-[#21212b] hover:border-[#c5a059] transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-xl text-white group-hover:text-[#c5a059] transition-colors">
                        {m.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#4a4740] group-hover:text-[#c5a059] group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-xs text-[#8c887f] font-light leading-relaxed">{m.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 2: When will you wear it? */}
          {step === 2 && (
            <div className="animate-in fade-in duration-300">
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-2">
                2. When will you wear it?
              </h3>
              <p className="text-xs sm:text-sm text-[#9c978e] mb-8 font-light">
                Choose the setting where this signature will accompany you most.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {occasions.map((o) => (
                  <button
                    key={o.label}
                    onClick={() => handleSelectOccasion(o.label)}
                    className="group text-left p-5 bg-[#0b0b0e] border border-[#21212b] hover:border-[#c5a059] transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-xl text-white group-hover:text-[#c5a059] transition-colors">
                        {o.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#4a4740] group-hover:text-[#c5a059] group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-xs text-[#8c887f] font-light leading-relaxed">{o.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 3: Which fragrance family attracts you? */}
          {step === 3 && (
            <div className="animate-in fade-in duration-300">
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-2">
                3. Which fragrance family attracts you?
              </h3>
              <p className="text-xs sm:text-sm text-[#9c978e] mb-8 font-light">
                Pick the primary olfactive chords that your senses naturally crave.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {families.map((f) => (
                  <button
                    key={f.label}
                    onClick={() => handleSelectFamily(f.label)}
                    className="group text-left p-5 bg-[#0b0b0e] border border-[#21212b] hover:border-[#c5a059] transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-xl text-white group-hover:text-[#c5a059] transition-colors">
                        {f.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#4a4740] group-hover:text-[#c5a059] group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-xs text-[#8c887f] font-light leading-relaxed">{f.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Result Card */}
          {step === 4 && recommended && (
            <div className="animate-in fade-in duration-500">
              <div className="text-center mb-8">
                <span className="text-[11px] tracking-[0.25em] uppercase text-[#c5a059] font-medium block mb-1">
                  YOUR IDEAL MATCH (98% COMPATIBILITY)
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                  Your Signature Has Been Discovered
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#09090c] border border-[#272733] p-6 sm:p-8">
                {/* Flacon Image */}
                <div className="md:col-span-5 relative aspect-square bg-[#050507] overflow-hidden border border-[#202028]">
                  <img
                    src={recommended.image}
                    alt={recommended.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Fragrance details */}
                <div className="md:col-span-7 flex flex-col justify-center">
                  <div className="text-xs text-[#c5a059] tracking-[0.18em] uppercase mb-1 font-medium">
                    {recommended.family} • {recommended.defaultSize}
                  </div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-2">
                    {recommended.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#b8b4aa] font-light leading-relaxed mb-4">
                    {recommended.description}
                  </p>

                  {/* Notes summary */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#1e1e26] mb-6 text-center text-xs">
                    <div>
                      <span className="text-[10px] uppercase text-[#73706a] block">Top</span>
                      <span className="text-white font-medium text-[11px]">{recommended.notes.top[0]}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-[#73706a] block">Heart</span>
                      <span className="text-white font-medium text-[11px]">{recommended.notes.heart[0]}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-[#73706a] block">Base</span>
                      <span className="text-white font-medium text-[11px]">{recommended.notes.base[0]}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => addToCart(recommended, recommended.defaultSize, 1)}
                      className="px-6 py-3 bg-[#c5a059] hover:bg-[#d8b56d] text-[#09090b] text-xs font-semibold tracking-[0.16em] uppercase flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag • ₹{recommended.price.toLocaleString('en-IN')}</span>
                    </button>
                    <button
                      onClick={() => setDetailProduct(recommended)}
                      className="px-5 py-3 border border-[#2e2e3a] hover:border-[#c5a059] text-white hover:text-[#c5a059] text-xs font-medium tracking-[0.16em] uppercase flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </button>
                    <button
                      onClick={handleReset}
                      className="text-xs text-[#8c887f] hover:text-white flex items-center gap-1.5 cursor-pointer ml-auto pt-2 sm:pt-0"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Retake Quiz</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
