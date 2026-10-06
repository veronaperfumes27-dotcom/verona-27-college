import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const WishlistDrawer: React.FC = () => {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, toggleWishlist, addToCart, setDetailProduct } =
    useCart();

  if (!isWishlistOpen) return null;

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0e0e12] border-l border-[#24242f] text-white flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 border-b border-[#21212c] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#c5a059] fill-[#c5a059]" />
              <h2 className="font-serif text-2xl tracking-wide uppercase font-medium">
                Saved Signatures ({wishlist.length})
              </h2>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-2 text-[#8e8a81] hover:text-white transition-colors cursor-pointer"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {wishlistedProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <Heart className="w-12 h-12 text-[#2c2c36] mb-4" strokeWidth={1} />
                <h3 className="font-serif text-2xl text-white font-medium mb-2">
                  No saved fragrances
                </h3>
                <p className="text-xs text-[#8c887f] max-w-xs mb-6">
                  Tap the heart icon on any flacon to save your favorites for later.
                </p>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="px-6 py-3 bg-[#c5a059] text-[#09090b] text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer"
                >
                  DISCOVER COLLECTION
                </button>
              </div>
            ) : (
              wishlistedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 pb-6 border-b border-[#1c1c26] last:border-b-0"
                >
                  <div
                    onClick={() => {
                      setIsWishlistOpen(false);
                      setDetailProduct(product);
                    }}
                    className="w-20 h-20 bg-[#08080a] border border-[#242430] shrink-0 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4
                          onClick={() => {
                            setIsWishlistOpen(false);
                            setDetailProduct(product);
                          }}
                          className="font-serif text-base text-white font-medium leading-tight cursor-pointer hover:text-[#c5a059]"
                        >
                          {product.name}
                        </h4>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="text-[#6d6961] hover:text-[#d9534f] transition-colors p-1 cursor-pointer"
                          aria-label="Remove from wishlist"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#8e8a81] tracking-wider mt-0.5">
                        {product.family} • ₹{product.price.toLocaleString('en-IN')}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => {
                          addToCart(product, product.defaultSize, 1);
                        }}
                        className="px-3.5 py-1.5 bg-[#c5a059] hover:bg-[#d8b56d] text-[#09090b] text-[11px] font-semibold tracking-wider uppercase flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
