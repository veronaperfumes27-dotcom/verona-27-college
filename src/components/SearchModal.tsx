import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, setDetailProduct } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setSearchTerm('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const results = PRODUCTS.filter((p) => {
    if (!searchTerm.trim()) return false;
    const q = searchTerm.toLowerCase();
    const matchName = p.name.toLowerCase().includes(q);
    const matchFamily = p.family.toLowerCase().includes(q);
    const matchPos = p.positioning.toLowerCase().includes(q);
    const matchTop = p.notes.top.some((n) => n.toLowerCase().includes(q));
    const matchHeart = p.notes.heart.some((n) => n.toLowerCase().includes(q));
    const matchBase = p.notes.base.some((n) => n.toLowerCase().includes(q));
    const matchOcc = p.occasions.some((o) => o.toLowerCase().includes(q));
    return matchName || matchFamily || matchPos || matchTop || matchHeart || matchBase || matchOcc;
  });

  const popularSearches = ['Noir', 'Oud', 'Bergamot', 'Leather', 'Rose', 'Vanilla', 'Sandalwood'];

  const handleSelectProduct = (product: Product) => {
    setIsSearchOpen(false);
    setDetailProduct(product);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="relative w-full max-w-2xl bg-[#111116] border border-[#2b2b3a] text-white shadow-2xl z-10 overflow-hidden animate-in fade-in slide-in-from-top-6 duration-200">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-[#21212c] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#c5a059] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by scent name, notes (e.g. Oud, Iris, Leather), or mood..."
            className="w-full bg-transparent text-sm sm:text-base text-white focus:outline-none placeholder:text-[#6d6961]"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-[#6d6961] hover:text-white p-1 text-xs uppercase"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 text-[#8e8a81] hover:text-white transition-colors cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="px-6 py-3 bg-[#0d0d11] border-b border-[#1c1c24] flex items-center gap-2 flex-wrap text-xs text-[#8e8a81]">
          <span className="text-[10px] uppercase tracking-wider text-[#736f67]">Popular Notes:</span>
          {popularSearches.map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              className="px-2 py-0.5 bg-[#171720] hover:bg-[#c5a059] hover:text-black transition-colors text-[11px] cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {!searchTerm.trim() ? (
            <div>
              <span className="text-[10px] tracking-widest uppercase text-[#736f66] block mb-4">
                The 27 Signatures
              </span>
              <div className="space-y-3">
                {PRODUCTS.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleSelectProduct(p)}
                    className="p-3 bg-[#0c0c10] border border-[#1f1f28] hover:border-[#c5a059] transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-black shrink-0 overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div>
                        <h4 className="font-serif text-base text-white group-hover:text-[#c5a059] transition-colors">
                          {p.name}
                        </h4>
                        <p className="text-xs text-[#8e8a81]">
                          {p.family} • {p.positioning}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-serif text-white tabular-nums">
                      ₹{p.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-3">
              <span className="text-[10px] tracking-widest uppercase text-[#c5a059] block mb-2">
                Matching Fragrances ({results.length})
              </span>
              {results.map((p) => (
                <div
                  key={p.id}
                  onClick={() => handleSelectProduct(p)}
                  className="p-4 bg-[#0c0c10] border border-[#232330] hover:border-[#c5a059] transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-black shrink-0 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-white group-hover:text-[#c5a059] transition-colors">
                        {p.name}
                      </h4>
                      <p className="text-xs text-[#b8b3a7] mb-1">{p.positioning}</p>
                      <div className="text-[11px] text-[#78746c]">
                        Notes: {p.notes.top.concat(p.notes.heart).slice(0, 4).join(', ')}...
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-base text-white tabular-nums">
                      ₹{p.price.toLocaleString('en-IN')}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#78746c] group-hover:text-[#c5a059] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-[#8e8a81]">
              <Sparkles className="w-8 h-8 mx-auto mb-2 text-[#444452]" />
              <p className="font-serif text-xl text-white mb-1">No matching signatures found</p>
              <p className="text-xs max-w-xs mx-auto">
                Try searching for general notes such as &ldquo;Oud&rdquo;, &ldquo;Leather&rdquo;, &ldquo;Rose&rdquo;, or &ldquo;Citrus&rdquo;.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
