import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, Eye, Heart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    buyNow,
    toggleWishlist,
    isWishlisted,
    setDetailProduct
  } = useCart();

  const [selectedSize, setSelectedSize] = useState('100 ml');

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedSize(quickViewProduct.defaultSize);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const currentPrice =
    quickViewProduct.availableSizes.find((s) => s.size === selectedSize)?.price ||
    quickViewProduct.price;

  const wishlisted = isWishlisted(quickViewProduct.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      <div className="relative w-full max-w-3xl bg-[#111116] border border-[#292936] text-white shadow-2xl z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 bg-[#09090b]/80 hover:bg-[#09090b] text-[#9e9a91] hover:text-white transition-colors cursor-pointer"
          aria-label="Close Quick View"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto bg-[#0a0a0d] overflow-hidden">
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between bg-[#111116]">
            <div>
              <div className="flex items-center justify-between text-xs text-[#c5a059] tracking-widest uppercase mb-1 font-medium">
                <span>{quickViewProduct.family}</span>
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-[#c5a059]" />
                  {quickViewProduct.rating} ({quickViewProduct.reviewCount})
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-1">
                {quickViewProduct.name}
              </h3>
              <p className="text-xs text-[#a6a298] tracking-wider mb-4 font-light">
                {quickViewProduct.type} • {quickViewProduct.positioning}
              </p>

              <p className="text-xs text-[#b8b3a7] font-light leading-relaxed mb-4">
                {quickViewProduct.description}
              </p>

              {/* Notes */}
              <div className="space-y-1 py-3 border-y border-[#20202a] text-xs text-[#c5c0b5] mb-5">
                <div>
                  <span className="text-[10px] uppercase text-[#736f66] mr-2">Top:</span>
                  <span>{quickViewProduct.notes.top.join(', ')}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#736f66] mr-2">Heart:</span>
                  <span>{quickViewProduct.notes.heart.join(', ')}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#736f66] mr-2">Base:</span>
                  <span>{quickViewProduct.notes.base.join(', ')}</span>
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <label className="text-[10px] tracking-widest uppercase text-[#7a766e] block mb-2 font-medium">
                  Select Size:
                </label>
                <div className="flex gap-2">
                  {quickViewProduct.availableSizes.map((sz) => (
                    <button
                      key={sz.size}
                      onClick={() => setSelectedSize(sz.size)}
                      className={`px-3 py-1.5 text-xs font-medium tracking-wider cursor-pointer border ${
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

            {/* Price & Actions */}
            <div>
              <div className="text-2xl font-serif text-white mb-4 tabular-nums">
                ₹{currentPrice.toLocaleString('en-IN')}
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      addToCart(quickViewProduct, selectedSize, 1);
                      setQuickViewProduct(null);
                    }}
                    className="flex-1 py-3 bg-[#c5a059] hover:bg-[#d8b56d] text-[#09090b] text-xs font-semibold tracking-[0.18em] uppercase flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </button>

                  <button
                    onClick={() => toggleWishlist(quickViewProduct.id)}
                    className="p-3 border border-[#2b2b38] hover:border-[#c5a059] text-white hover:text-[#c5a059] cursor-pointer"
                    aria-label="Wishlist"
                  >
                    <Heart
                      className={`w-4 h-4 ${wishlisted ? 'fill-[#c5a059] text-[#c5a059]' : ''}`}
                    />
                  </button>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => buyNow(quickViewProduct, selectedSize)}
                    className="flex-1 py-2.5 border border-[#c5a059]/40 hover:border-[#c5a059] text-[#ded9ce] hover:text-white text-xs font-medium tracking-wider uppercase cursor-pointer transition-colors"
                  >
                    Instant Checkout
                  </button>
                  <button
                    onClick={() => {
                      const p = quickViewProduct;
                      setQuickViewProduct(null);
                      setDetailProduct(p);
                    }}
                    className="px-3 py-2.5 border border-[#262632] hover:border-white text-xs text-[#8e8a81] hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Full Specs</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
