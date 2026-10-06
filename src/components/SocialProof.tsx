import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const testimonials = [
    {
      quote: 'NOIR has become my everyday signature. The longevity is genuinely impressive.',
      author: 'ARJUN M.',
      city: 'Chennai',
      fragrance: 'VÉRONA 27 — NOIR',
      date: 'Verified Patron'
    },
    {
      quote: 'ÉCLAT feels incredibly elegant without being overpowering. Perfect for everyday wear.',
      author: 'PRIYA R.',
      city: 'Bengaluru',
      fragrance: 'VÉRONA 27 — ÉCLAT',
      date: 'Verified Patron'
    },
    {
      quote: 'OUD 27 smells far more expensive than its price point.',
      author: 'RAHUL K.',
      city: 'Mumbai',
      fragrance: 'VÉRONA 27 — OUD 27',
      date: 'Verified Patron'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0c0c0f] border-t border-[#1b1b22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a059] font-medium block mb-2">
            CLIENT DISPATCHES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white tracking-[0.05em] uppercase mb-3">
            WORN. REMEMBERED.
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex text-[#c5a059]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#c5a059]" />
              ))}
            </div>
            <span className="text-xs text-[#a9a49b] tracking-wider">
              4.85 / 5.0 Global Rating Across 430+ Flacons
            </span>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#121217] border border-[#23232c] hover:border-[#c5a059]/40 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center gap-1 text-[#c5a059] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#c5a059]" />
                  ))}
                </div>

                <blockquote className="font-serif text-lg sm:text-xl text-[#ded9cf] font-light leading-relaxed mb-6 italic">
                  “{t.quote}”
                </blockquote>
              </div>

              <div className="pt-6 border-t border-[#1f1f28]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs tracking-[0.18em] uppercase text-white font-medium">
                    {t.author}
                  </span>
                  <span className="text-[10px] tracking-wider uppercase text-[#c5a059] flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {t.date}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#736f68]">
                  <span>{t.city}</span>
                  <span className="font-light italic text-[#8f8b82]">{t.fragrance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
