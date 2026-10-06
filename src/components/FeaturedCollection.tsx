import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal } from 'lucide-react';

export const FeaturedCollection: React.FC = () => {
  const [selectedFamily, setSelectedFamily] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');

  const families = ['All', 'Woody Leather', 'Floral Citrus', 'Oriental Oud', 'Powdery Floral'];

  const filteredProducts = PRODUCTS.filter((product) => {
    if (selectedFamily === 'All') return true;
    return product.family.toLowerCase().includes(selectedFamily.toLowerCase());
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // default featured order
  });

  return (
    <section id="collections" className="py-24 sm:py-32 bg-[#09090b] border-t border-[#1b1b22]">
      <div id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a059] font-medium block mb-3">
            HAUTE PARFUMERIE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white tracking-[0.06em] uppercase mb-4">
            THE 27 COLLECTION
          </h2>
          <p className="text-sm sm:text-base text-[#bbb6ac] font-light tracking-wide">
            Four fragrances. Four identities. One signature.
          </p>
        </div>

        {/* Filter and Sort Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#21212b]">
          {/* Family Filter Pills/Tabs */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center md:justify-start">
            {families.map((fam) => (
              <button
                key={fam}
                onClick={() => setSelectedFamily(fam)}
                className={`px-3.5 py-1.5 text-xs tracking-[0.14em] uppercase transition-colors cursor-pointer ${
                  selectedFamily === fam
                    ? 'bg-[#c5a059] text-[#09090b] font-semibold'
                    : 'text-[#9c978e] hover:text-white hover:bg-[#16161c]'
                }`}
              >
                {fam}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 self-end md:self-auto text-xs tracking-wider text-[#9c978e]">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>SORT:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#14141a] text-white border border-[#2a2a36] px-3 py-1.5 text-xs focus:outline-none focus:border-[#c5a059] cursor-pointer"
            >
              <option value="featured">Featured Signature</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Discovery Assurance */}
        <div className="mt-16 pt-8 border-t border-[#1b1b24] grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-xs tracking-wide text-[#9c978e]">
          <div className="p-4 bg-[#0d0d12] border border-[#1b1b24]">
            <span className="font-serif text-white text-base block mb-1">100% Extrait Concentration</span>
            <span>Unmatched 25%+ fragrance oil formulation ensuring all-day sillage.</span>
          </div>
          <div className="p-4 bg-[#0d0d12] border border-[#1b1b24]">
            <span className="font-serif text-white text-base block mb-1">Complimentary Discovery Sample</span>
            <span>Receive a 2ml trial vial with every full-size bottle order.</span>
          </div>
          <div className="p-4 bg-[#0d0d12] border border-[#1b1b24]">
            <span className="font-serif text-white text-base block mb-1">Chennai Atelier Dispatch</span>
            <span>Safely packed in signature dark embossed hard boxes within 24 hours.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
