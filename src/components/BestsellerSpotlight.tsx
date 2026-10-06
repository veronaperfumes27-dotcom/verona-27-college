import React, { useState } from 'react';
import { ShoppingBag, Eye, Heart, Star, ShieldCheck, Zap } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

export const BestsellerSpotlight: React.FC = () => {
  const { addToCart, setDetailProduct, toggleWishlist, isWishlisted } = useCart();
  const noirProduct = PRODUCTS.find((p) => p.slug === 'noir') || PRODUCTS[0];
  const [selectedSize, setSelectedSize] = useState<string>('100 ml');

  const currentPrice =
    noirProduct.availableSizes.find((s) => s.size === selectedSize)?.price || noirProduct.price;

  const wishlisted = isWishlisted(noirProduct.id);

  return (
    <section className="py-24 sm:py-32 bg-[#09090b] border-t border-[#1a1a24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a059] font-medium block mb-2">
            THE ICONIC FLACON
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white tracking-[0.05em] uppercase">
            MOST WANTED
          </h2>
        </div>

        {/* Spotlight Showcase Container */}
        <div className="bg-[#101014] border border-[#23232e] grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-2xl">
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[520px] bg-[#070709] overflow-hidden group">
            <img
              src={noirProduct.image}
              alt={noirProduct.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090c]/90 via-transparent to-transparent lg:hidden" />

            {/* Badge */}
            <div className="absolute top-6 left-6 bg-[#c5a059] text-[#09090b] text-xs tracking-[0.2em] uppercase font-bold px-3 py-1.5 shadow-lg">
              #01 BESTSELLER
            </div>

            {/* Wishlist button */}
            <button
              onClick={() => toggleWishlist(noirProduct.id)}
              className="absolute top-6 right-6 p-3 bg-[#09090b]/80 hover:bg-[#09090b] text-white hover:text-[#c5a059] backdrop-blur-md transition-colors cursor-pointer"
              aria-label="Wishlist NOIR"
            >
              <Heart
                className={`w-5 h-5 ${wishlisted ? 'fill-[#c5a059] text-[#c5a059]' : ''}`}
                strokeWidth={1.5}
              />
            </button>
          </div>

          {/* Product Specifications & Purchasing (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-[#111116]">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-[#c5a059]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c5a059]" />
                  ))}
                </div>
                <span className="text-xs text-[#ded9ce] font-medium tracking-wider">
                  4.8 / 5.0
                </span>
                <span className="text-xs text-[#736f67]">
                  ({noirProduct.reviewCount} Verified Reviews)
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-wide mb-2">
                {noirProduct.name}
              </h3>

              <div className="text-xs text-[#c5a059] tracking-[0.2em] uppercase font-medium mb-4">
                {noirProduct.type} • {selectedSize}
              </div>

              <p className="text-xs sm:text-sm text-[#b8b3a7] font-light leading-relaxed mb-6">
                {noirProduct.description}
              </p>

              {/* Olfactory pyramid breakdown */}
              <div className="space-y-2 py-4 border-y border-[#202029] mb-6 text-xs text-[#d1ccc1]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-wider uppercase text-[#7a766e]">Top Notes</span>
                  <span className="font-medium text-white">{noirProduct.notes.top.join(', ')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-wider uppercase text-[#7a766e]">Heart Notes</span>
                  <span className="font-medium text-white">{noirProduct.notes.heart.join(', ')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-wider uppercase text-[#7a766e]">Base Notes</span>
                  <span className="font-medium text-white">{noirProduct.notes.base.join(', ')}</span>
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <label className="text-[11px] tracking-[0.16em] uppercase text-[#7a766e] block mb-2 font-medium">
                  Select Flacon Size:
                </label>
                <div className="flex items-center gap-3">
                  {noirProduct.availableSizes.map((sz) => (
                    <button
                      key={sz.size}
                      onClick={() => setSelectedSize(sz.size)}
                      className={`flex-1 py-2.5 text-xs font-medium tracking-wider cursor-pointer transition-all border ${
                        selectedSize === sz.size
                          ? 'border-[#c5a059] bg-[#c5a059]/10 text-[#c5a059]'
                          : 'border-[#292936] text-[#8e8a81] hover:text-white'
                      }`}
                    >
                      {sz.size} (₹{sz.price.toLocaleString('en-IN')})
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Action Buttons */}
            <div>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-serif text-3xl sm:text-4xl text-white tracking-tight tabular-nums">
                  ₹{currentPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-[#8c887f] tracking-wide">
                  Inclusive of all taxes & complimentary delivery
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => addToCart(noirProduct, selectedSize, 1)}
                  className="w-full sm:flex-1 py-4 bg-[#c5a059] hover:bg-[#d8b56d] text-[#09090b] text-xs font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-black/40 hover:-translate-y-0.5 active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD TO BAG</span>
                </button>
                <button
                  onClick={() => setDetailProduct(noirProduct)}
                  className="w-full sm:w-auto px-6 py-4 border border-[#2b2b38] hover:border-[#c5a059] text-white hover:text-[#c5a059] text-xs font-medium tracking-[0.18em] uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>VIEW DETAILS</span>
                </button>
              </div>

              {/* Guarantees */}
              <div className="mt-6 pt-4 border-t border-[#1d1d26] flex items-center justify-between text-[11px] text-[#7a766e]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                  Tamper-Evident Flacon Seal
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#c5a059]" />
                  Dispatches in 24h
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
