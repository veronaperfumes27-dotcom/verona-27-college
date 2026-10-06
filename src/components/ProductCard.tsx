import React, { useState } from 'react';
import { Eye, Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isWishlisted, setQuickViewProduct, setDetailProduct } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.defaultSize);
  const wishlisted = isWishlisted(product.id);

  const currentPrice =
    product.availableSizes.find((s) => s.size === selectedSize)?.price || product.price;

  return (
    <div className="group relative flex flex-col bg-[#111115] border border-[#23232c] hover:border-[#c5a059]/40 transition-all duration-300 rounded-none overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60">
      {/* Badge */}
      {product.isBestseller && (
        <div className="absolute top-3 left-3 z-20 bg-[#c5a059] text-[#09090b] text-[10px] tracking-[0.2em] uppercase font-bold px-2.5 py-1">
          #01 BESTSELLER
        </div>
      )}

      {/* Wishlist Button */}
      <button
        onClick={() => toggleWishlist(product.id)}
        className="absolute top-3 right-3 z-20 p-2.5 bg-[#09090b]/70 hover:bg-[#09090b] text-white/80 hover:text-[#c5a059] backdrop-blur-md transition-colors cursor-pointer"
        aria-label={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
      >
        <Heart
          className={`w-4 h-4 ${wishlisted ? 'fill-[#c5a059] text-[#c5a059]' : ''}`}
          strokeWidth={1.5}
        />
      </button>

      {/* Product Image Area */}
      <div
        onClick={() => setDetailProduct(product)}
        className="relative aspect-[4/3] sm:aspect-[1/1] w-full overflow-hidden bg-[#0d0d10] cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Quick View Overlay Button on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#09090b]/90 text-white hover:text-[#c5a059] text-xs tracking-[0.16em] uppercase font-medium backdrop-blur-sm border border-[#30303c] hover:border-[#c5a059] transition-all cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-[#111115]">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-[11px] text-[#9c978e] tracking-[0.16em] uppercase mb-1.5">
            <span>{product.family}</span>
            <span className="text-[#c5a059] flex items-center gap-1 font-medium">
              ★ {product.rating}
              <span className="text-[#6d6a62]">({product.reviewCount})</span>
            </span>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => setDetailProduct(product)}
            className="font-serif text-xl sm:text-2xl text-white font-medium tracking-[0.06em] group-hover:text-[#c5a059] transition-colors cursor-pointer mb-1 line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Concentration & Size */}
          <p className="text-xs text-[#a9a49b] tracking-[0.1em] font-light mb-3">
            {product.type} • {selectedSize}
          </p>

          {/* Fragrance Notes Capsule Pills / Text */}
          <div className="mb-4 pt-3 border-t border-[#1e1e26] text-xs text-[#c5c1b8]">
            <div className="flex items-baseline gap-1.5 mb-1 line-clamp-1">
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#7a766f] shrink-0 font-medium">Top:</span>
              <span className="text-[11px] text-[#d6d2c8] truncate">{product.notes.top.join(', ')}</span>
            </div>
            <div className="flex items-baseline gap-1.5 mb-1 line-clamp-1">
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#7a766f] shrink-0 font-medium">Heart:</span>
              <span className="text-[11px] text-[#d6d2c8] truncate">{product.notes.heart.join(', ')}</span>
            </div>
            <div className="flex items-baseline gap-1.5 line-clamp-1">
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#7a766f] shrink-0 font-medium">Base:</span>
              <span className="text-[11px] text-[#d6d2c8] truncate">{product.notes.base.join(', ')}</span>
            </div>
          </div>
        </div>

        {/* Size Selection & Price & Add to Bag */}
        <div>
          {/* Size Selector */}
          <div className="flex items-center gap-2 mb-4">
            {product.availableSizes.map((sz) => (
              <button
                key={sz.size}
                onClick={() => setSelectedSize(sz.size)}
                className={`px-2.5 py-1 text-[11px] font-medium tracking-wider cursor-pointer transition-colors border ${
                  selectedSize === sz.size
                    ? 'border-[#c5a059] text-[#c5a059] bg-[#c5a059]/10'
                    : 'border-[#262632] text-[#8e8a82] hover:text-white hover:border-[#404050]'
                }`}
              >
                {sz.size}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-[#1e1e26]">
            <div>
              <span className="text-lg font-serif text-white tracking-wide tabular-nums">
                ₹{currentPrice.toLocaleString('en-IN')}
              </span>
            </div>

            <button
              onClick={() => addToCart(product, selectedSize, 1)}
              className="px-4 py-2.5 bg-[#c5a059] hover:bg-[#d8b56d] text-[#09090b] text-xs font-semibold tracking-[0.15em] uppercase flex items-center gap-1.5 transition-colors cursor-pointer active:scale-95"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add to Bag</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
