import React, { useState } from 'react';

export const FragranceNotesGuide: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);

  const stages = [
    {
      id: 1,
      num: '01',
      title: 'TOP NOTES',
      tagline: 'The First Impression.',
      duration: '0 – 30 Minutes',
      role: 'The immediate sensory greeting upon first misting.',
      botanicals: 'Calabrian Bergamot, Amalfi Lemon, Pink Pepper, Kashmiri Saffron',
      description:
        'Volatile, sparkling molecules that evaporate quickly yet captivate instantaneously. Top notes set the scene, awaken the senses, and draw you into the narrative of the flacon.',
      alchemy: 'High volatility • Citrus, Aromatics, Spices'
    },
    {
      id: 2,
      num: '02',
      title: 'HEART NOTES',
      tagline: 'The Character of the Fragrance.',
      duration: '30 Minutes – 4 Hours',
      role: 'The emotional core and authentic signature of the scent.',
      botanicals: 'Grasse Rose, Tuscan Leather, Atlas Cedarwood, Florentine Iris',
      description:
        'Also known as the middle notes, the heart emerges just as the top notes mellow. It provides body, elegance, and balance, establishing the true character people associate with you.',
      alchemy: 'Medium volatility • Florals, Woods, Resins'
    },
    {
      id: 3,
      num: '03',
      title: 'BASE NOTES',
      tagline: 'The Memory That Remains.',
      duration: '4 – 14+ Hours',
      role: 'The enduring legacy that lingers on skin and textiles.',
      botanicals: 'Aged Amber, Haitian Vetiver, Royal Cambodian Oud, Mysore Sandalwood',
      description:
        'Dense, opulent molecules that anchor the entire olfactory pyramid. Base notes meld with your skin’s unique pH chemistry to form an indelible personal sillage.',
      alchemy: 'Slow evaporation • Warm Ambers, Ouds, Musks'
    }
  ];

  return (
    <section id="guide" className="py-24 sm:py-32 bg-[#0d0d10] border-t border-[#1b1b24] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a059] font-medium block mb-3">
            THE OLFACTIVE ARCHITECTURE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white tracking-[0.05em] uppercase mb-4">
            EVERY SCENT HAS A STORY
          </h2>
          <p className="text-sm sm:text-base text-[#bbb6ac] font-light">
            Understanding the three movements of fine perfumery.
          </p>
        </div>

        {/* Interactive 3-Stage Stage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {stages.map((stage) => {
            const isSelected = activeStage === stage.id;
            return (
              <div
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`p-8 bg-[#121217] border transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 ${
                  isSelected
                    ? 'border-[#c5a059] bg-[#16161f] shadow-xl shadow-black/50'
                    : 'border-[#22222c] hover:border-[#383848]'
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-[#21212b]">
                    <span className="font-serif text-3xl sm:text-4xl text-[#c5a059] font-light">
                      {stage.num}
                    </span>
                    <span className="text-[11px] tracking-[0.16em] uppercase text-[#7a766f]">
                      {stage.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-white font-medium tracking-[0.06em] mb-2 uppercase">
                    {stage.title}
                  </h3>
                  <h4 className="text-xs text-[#c5a059] tracking-widest uppercase mb-4 font-normal">
                    {stage.tagline}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#b8b3a8] font-light leading-relaxed mb-6">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1f1f28] text-xs">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#736f68] block mb-1">
                    Signature Accords:
                  </span>
                  <span className="text-[#ded9ce] font-light leading-snug block">
                    {stage.botanicals}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Olfactive Pyramid Infographic Container */}
        <div className="p-8 sm:p-10 bg-[#09090c] border border-[#242430] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#c5a059] font-medium block mb-2">
              THE 27-DAY MACERATION RULE
            </span>
            <h4 className="font-serif text-2xl text-white font-medium mb-3">
              Why VÉRONA 27 Lasts Beyond The Midnight Hour
            </h4>
            <p className="text-xs sm:text-sm text-[#9e9a91] font-light leading-relaxed">
              Standard commercial perfumes rush production within 48 hours. At VÉRONA 27, our
              fragrance oils undergo a sacred 27-day cold-aging maturation process in dark stainless
              vats in Chennai. This bonds the base resins to the alcohol carrier, preventing premature
              evaporation.
            </p>
          </div>

          <div className="flex items-center gap-6 text-center border-t md:border-t-0 md:border-l border-[#242430] pt-6 md:pt-0 md:pl-10">
            <div>
              <span className="font-serif text-4xl text-[#c5a059] block">12h+</span>
              <span className="text-[10px] tracking-[0.16em] uppercase text-[#858076]">Average Longevity</span>
            </div>
            <div className="h-10 w-[1px] bg-[#22222b]" />
            <div>
              <span className="font-serif text-4xl text-[#c5a059] block">25%</span>
              <span className="text-[10px] tracking-[0.16em] uppercase text-[#858076]">Oil Concentration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
