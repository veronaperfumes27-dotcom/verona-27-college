import React, { useState, useEffect } from 'react';
import {
  X,
  ShoppingBag,
  Heart,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Plus,
  Minus,
  CheckCircle2
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const ProductDetailModal: React.FC = () => {
  const {
    detailProduct,
    setDetailProduct,
    addToCart,
    buyNow,
    toggleWishlist,
    isWishlisted
  } = useCart();

  const [selectedSize, setSelectedSize] = useState('100 ml');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'olfactory' | 'reviews' | 'shipping'>('olfactory');

  useEffect(() => {
    if (detailProduct) {
      setSelectedSize(detailProduct.defaultSize);
      setQuantity(1);
      setActiveTab('olfactory');
    }
  }, [detailProduct]);

  if (!detailProduct) return null;

  const currentPrice =
    detailProduct.availableSizes.find((s) => s.size === selectedSize)?.price || detailProduct.price;

  const wishlisted = isWishlisted(detailProduct.id);

  const relatedProducts = PRODUCTS.filter((p) => p.id !== detailProduct.id).slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={() => setDetailProduct(null)}
      />

      <div className="relative w-full max-w-5xl bg-[#0e0e12] border border-[#262633] text-white shadow-2xl z-10 my-auto max-h-[94vh] overflow-y-auto animate-in fade-in duration-300">
        {/* Sticky Header with Close */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#0e0e12]/95 backdrop-blur-md border-b border-[#21212b]">
          <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#c5a059] font-medium">
            <span>VÉRONA 27 ATELIER SPECIFICATION</span>
          </div>
          <button
            onClick={() => setDetailProduct(null)}
            className="p-2 text-[#8e8a81] hover:text-white transition-colors cursor-pointer"
            aria-label="Close product view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            {/* Visual Flacon Gallery (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative aspect-[4/5] bg-[#070709] border border-[#23232e] overflow-hidden group">
                <img
                  src={detailProduct.image}
                  alt={detailProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {detailProduct.isBestseller && (
                  <span className="absolute top-4 left-4 bg-[#c5a059] text-[#09090b] text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1">
                    #01 BESTSELLER
                  </span>
                )}
              </div>

              {/* Guarantees Box */}
              <div className="p-4 bg-[#121217] border border-[#21212b] space-y-2 text-xs text-[#9e9a91]">
                <div className="flex items-center gap-2 text-[#ded9ce]">
                  <Truck className="w-4 h-4 text-[#c5a059]" />
                  <span>Complimentary Pan-India Express Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-[#ded9ce]">
                  <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                  <span>27-Day Cold Maceration • 100% Extrait Concentration</span>
                </div>
                <div className="flex items-center gap-2 text-[#ded9ce]">
                  <Sparkles className="w-4 h-4 text-[#c5a059]" />
                  <span>Includes 2ml discovery travel vial</span>
                </div>
              </div>
            </div>

            {/* Contiguous Purchase Module (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Family & Rating */}
                <div className="flex items-center justify-between text-xs tracking-wider uppercase mb-2">
                  <span className="text-[#c5a059] font-medium">{detailProduct.family}</span>
                  <div className="flex items-center gap-1.5 text-[#ded9ce]">
                    <div className="flex text-[#c5a059]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#c5a059]" />
                      ))}
                    </div>
                    <span>{detailProduct.rating}</span>
                    <span className="text-[#6d6961]">({detailProduct.reviewCount} Reviews)</span>
                  </div>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl text-white font-medium mb-1">
                  {detailProduct.name}
                </h1>
                <p className="text-xs text-[#a6a297] tracking-[0.16em] uppercase mb-4">
                  {detailProduct.type} • {detailProduct.positioning}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6 pb-4 border-b border-[#21212c]">
                  <span className="font-serif text-3xl text-white tracking-wide tabular-nums font-medium">
                    ₹{currentPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-[#8a857b]">
                    MRP inclusive of all taxes. Free shipping on orders &gt; ₹2,000.
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#cac5ba] font-light leading-relaxed mb-6">
                  {detailProduct.description}
                </p>

                {/* Performance Meters (Longevity & Sillage) */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-[#14141a] border border-[#242430] mb-6 text-xs">
                  <div>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-[#8e8a81] uppercase tracking-wider text-[10px]">
                        Longevity
                      </span>
                      <span className="text-white font-medium">{detailProduct.longevity}</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#252530] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#c5a059] rounded-full"
                        style={{ width: `${(detailProduct.longevityScore / 10) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-[#8e8a81] uppercase tracking-wider text-[10px]">
                        Sillage
                      </span>
                      <span className="text-white font-medium truncate max-w-[120px]">
                        {detailProduct.sillage}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-[#252530] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#c5a059] rounded-full"
                        style={{ width: `${(detailProduct.sillageScore / 10) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Size Selector */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs tracking-wider uppercase text-[#8e8a81]">
                      Flacon Size
                    </span>
                    <span className="text-xs text-[#c5a059]">Heavy French crystal bottle</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {detailProduct.availableSizes.map((sz) => (
                      <button
                        key={sz.size}
                        onClick={() => setSelectedSize(sz.size)}
                        className={`p-3 text-xs font-medium cursor-pointer transition-all border flex items-center justify-between ${
                          selectedSize === sz.size
                            ? 'border-[#c5a059] bg-[#c5a059]/10 text-white'
                            : 'border-[#262633] text-[#8e8a81] hover:text-white'
                        }`}
                      >
                        <span className="font-semibold">{sz.size}</span>
                        <span className="tabular-nums">₹{sz.price.toLocaleString('en-IN')}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity & CTAs */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    {/* Stepper */}
                    <div className="flex items-center border border-[#2b2b38] bg-[#0c0c10] px-2 py-1">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 text-[#8e8a81] hover:text-white cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-sm font-medium tabular-nums text-white">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2 text-[#8e8a81] hover:text-white cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Add to Bag */}
                    <button
                      onClick={() => {
                        addToCart(detailProduct, selectedSize, quantity);
                      }}
                      className="flex-1 py-4 bg-[#c5a059] hover:bg-[#d8b56d] text-[#09090b] text-xs font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>ADD TO BAG • ₹{(currentPrice * quantity).toLocaleString('en-IN')}</span>
                    </button>

                    {/* Wishlist */}
                    <button
                      onClick={() => toggleWishlist(detailProduct.id)}
                      className="p-4 border border-[#2b2b38] hover:border-[#c5a059] text-white hover:text-[#c5a059] cursor-pointer"
                      aria-label="Wishlist"
                    >
                      <Heart
                        className={`w-5 h-5 ${wishlisted ? 'fill-[#c5a059] text-[#c5a059]' : ''}`}
                      />
                    </button>
                  </div>

                  {/* Buy Now Instant Checkout */}
                  <button
                    onClick={() => buyNow(detailProduct, selectedSize)}
                    className="w-full py-3.5 border border-[#c5a059]/40 hover:border-[#c5a059] text-[#ded9ce] hover:text-white text-xs font-semibold tracking-[0.2em] uppercase cursor-pointer transition-colors"
                  >
                    BUY NOW (EXPRESS CHECKOUT)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Tabs Section: Olfactory Pyramid, Reviews, Shipping */}
          <div className="border-t border-[#21212b] pt-8">
            <div className="flex items-center gap-8 border-b border-[#21212b] pb-4 mb-6 text-xs tracking-[0.16em] uppercase font-medium">
              <button
                onClick={() => setActiveTab('olfactory')}
                className={`cursor-pointer transition-colors relative py-1 ${
                  activeTab === 'olfactory' ? 'text-[#c5a059]' : 'text-[#8e8a81] hover:text-white'
                }`}
              >
                Olfactory Pyramid & Occasions
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`cursor-pointer transition-colors relative py-1 ${
                  activeTab === 'reviews' ? 'text-[#c5a059]' : 'text-[#8e8a81] hover:text-white'
                }`}
              >
                Client Reviews ({detailProduct.reviews.length})
              </button>
              <button
                onClick={() => setActiveTab('shipping')}
                className={`cursor-pointer transition-colors relative py-1 ${
                  activeTab === 'shipping' ? 'text-[#c5a059]' : 'text-[#8e8a81] hover:text-white'
                }`}
              >
                Shipping & Atelier Assurance
              </button>
            </div>

            {/* Tab 1: Olfactory Pyramid */}
            {activeTab === 'olfactory' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
                <div className="p-5 bg-[#121217] border border-[#21212b]">
                  <span className="text-[10px] tracking-widest uppercase text-[#c5a059] block mb-1">
                    01 • Top Notes
                  </span>
                  <h4 className="font-serif text-lg text-white mb-2">Initial Radiance</h4>
                  <p className="text-xs text-[#b8b3a7] font-light mb-3">
                    First 15–30 minutes upon skin misting.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {detailProduct.notes.top.map((note) => (
                      <span key={note} className="text-xs text-white bg-[#1c1c24] px-2.5 py-1">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 bg-[#121217] border border-[#21212b]">
                  <span className="text-[10px] tracking-widest uppercase text-[#c5a059] block mb-1">
                    02 • Heart Notes
                  </span>
                  <h4 className="font-serif text-lg text-white mb-2">The True Character</h4>
                  <p className="text-xs text-[#b8b3a7] font-light mb-3">
                    Unfurls over 30 minutes to 4 hours.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {detailProduct.notes.heart.map((note) => (
                      <span key={note} className="text-xs text-white bg-[#1c1c24] px-2.5 py-1">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 bg-[#121217] border border-[#21212b]">
                  <span className="text-[10px] tracking-widest uppercase text-[#c5a059] block mb-1">
                    03 • Base Notes
                  </span>
                  <h4 className="font-serif text-lg text-white mb-2">The Indelible Memory</h4>
                  <p className="text-xs text-[#b8b3a7] font-light mb-3">
                    Deep drydown lingering 10–14+ hours.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {detailProduct.notes.base.map((note) => (
                      <span key={note} className="text-xs text-white bg-[#1c1c24] px-2.5 py-1">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recommended Occasions */}
                <div className="md:col-span-3 p-5 bg-[#101015] border border-[#21212b] mt-2">
                  <span className="text-[10px] tracking-widest uppercase text-[#c5a059] block mb-2">
                    Curated Occasions & Seasons
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {detailProduct.occasions.map((occ) => (
                      <span
                        key={occ}
                        className="text-xs text-[#ded9ce] border border-[#292938] px-3 py-1 bg-[#14141c]"
                      >
                        {occ}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Reviews */}
            {activeTab === 'reviews' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                {detailProduct.reviews.map((rev) => (
                  <div key={rev.id} className="p-5 bg-[#121217] border border-[#21212b]">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white text-xs tracking-wider">
                          {rev.author}
                        </span>
                        <span className="text-[10px] text-[#736f66]">({rev.location})</span>
                        {rev.verified && (
                          <span className="text-[10px] text-[#c5a059] flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Verified Patron
                          </span>
                        )}
                      </div>
                      <div className="flex text-[#c5a059]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-[#c5a059]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#cbc6bc] font-light leading-relaxed italic">
                      “{rev.comment}”
                    </p>
                    <span className="text-[10px] text-[#6d6961] block mt-2">{rev.date}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Shipping */}
            {activeTab === 'shipping' && (
              <div className="p-6 bg-[#121217] border border-[#21212b] space-y-4 text-xs text-[#b8b3a7] leading-relaxed animate-in fade-in duration-200">
                <div>
                  <h4 className="font-serif text-white text-base mb-1">Chennai Atelier Dispatch</h4>
                  <p>
                    Every bottle is filled, capped, and inspected at our Chennai laboratory. Orders
                    are dispatched via air express courier within 24 hours of confirmation. Delivery
                    takes 2–3 business days across metros.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-white text-base mb-1">Luxury Gift Presentation</h4>
                  <p>
                    Each flacon arrives securely cocooned inside our custom matte-black embossed hard
                    presentation box with gold foil lettering, accompanied by an atomizer care card
                    and complimentary 2ml sample.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-white text-base mb-1">Risk-Free Discovery</h4>
                  <p>
                    Use the enclosed 2ml sample vial first. If the scent does not suit your skin
                    chemistry, you may return the unopened full-size bottle within 7 days for a full
                    refund or exchange.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Recommended Fragrances Cross-Sell */}
          <div className="border-t border-[#21212b] pt-10 mt-12">
            <h3 className="font-serif text-xl sm:text-2xl text-white mb-6 uppercase">
              You May Also Appreciate
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setDetailProduct(p)}
                  className="p-4 bg-[#111116] border border-[#22222d] hover:border-[#c5a059] cursor-pointer transition-all flex items-center gap-3 group"
                >
                  <div className="w-16 h-16 bg-[#09090c] shrink-0 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="truncate">
                    <h4 className="font-serif text-sm text-white font-medium group-hover:text-[#c5a059] truncate">
                      {p.name}
                    </h4>
                    <span className="text-[11px] text-[#7a766f] block">{p.family}</span>
                    <span className="text-xs text-white tabular-nums">
                      ₹{p.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
