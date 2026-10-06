import React from 'react';
import { ArrowRight } from 'lucide-react';
import craftImg from '../assets/images/editorial_verona_craft_1791317388961.jpg';
import { useCart } from '../context/CartContext';

export const BrandStory: React.FC = () => {
  const { setIsStoryOpen } = useCart();

  return (
    <section className="py-24 sm:py-32 bg-[#0c0c0f] border-t border-[#1e1e26] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Editorial Image Side */}
          <div className="relative group">
            <div className="relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden border border-[#2b2b36] shadow-2xl shadow-black/80">
              <img
                src={craftImg}
                alt="Artisanal perfume formulation at VÉRONA 27 atelier"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent" />
            </div>

            {/* Subtle floating editorial label */}
            <div className="absolute -bottom-4 -right-4 bg-[#14141a] border border-[#2a2a38] p-4 hidden sm:block shadow-xl max-w-xs">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#c5a059] block font-medium mb-1">
                Atelier Note
              </span>
              <p className="text-xs text-[#b8b3a8] font-light italic leading-relaxed">
                “Every formulation macerates for 27 days before flacon bottling.”
              </p>
            </div>
          </div>

          {/* Editorial Prose Side */}
          <div className="lg:pl-8 flex flex-col justify-center">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a059] font-medium block mb-4">
              OUR PHILOSOPHY
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white tracking-[0.04em] uppercase leading-tight mb-8">
              THE ART OF BEING REMEMBERED
            </h2>

            <div className="space-y-6 text-[#cbc6bc] text-base sm:text-lg font-light leading-relaxed">
              <p>
                VÉRONA 27 was created around a simple idea — fragrance should become part of your
                identity.
              </p>
              <p>
                Every scent is designed to create a lasting impression, from the first spray to the
                final note.
              </p>
              <p>
                We believe luxury isn&apos;t about excess. It&apos;s about intention, craftsmanship and the
                details people remember.
              </p>
            </div>

            {/* Pillar badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 my-8 border-t border-b border-[#21212b] text-center">
              <div>
                <span className="font-serif text-2xl text-[#c5a059] block mb-0.5 font-normal">27</span>
                <span className="text-[10px] tracking-[0.16em] uppercase text-[#969186]">Days Macerated</span>
              </div>
              <div>
                <span className="font-serif text-2xl text-[#c5a059] block mb-0.5 font-normal">25%</span>
                <span className="text-[10px] tracking-[0.16em] uppercase text-[#969186]">Pure Extrait Oils</span>
              </div>
              <div>
                <span className="font-serif text-2xl text-[#c5a059] block mb-0.5 font-normal">0%</span>
                <span className="text-[10px] tracking-[0.16em] uppercase text-[#969186]">Compromise</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsStoryOpen(true)}
                className="group inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase font-semibold text-white hover:text-[#c5a059] transition-colors cursor-pointer"
              >
                <span>OUR STORY</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#c5a059]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
