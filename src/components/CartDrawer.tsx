import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    freeShippingThreshold,
    isFreeShipping,
    freeShippingRemaining,
    setIsCheckoutOpen
  } = useCart();

  if (!isCartOpen) return null;

  const progressPercentage = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0e0e12] border-l border-[#24242f] text-white flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#21212c] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#c5a059]" />
              <h2 className="font-serif text-2xl tracking-wide uppercase font-medium">
                Shopping Bag
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#8e8a81] hover:text-white transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary Shipping Progress Bar */}
          <div className="p-4 bg-[#14141a] border-b border-[#21212c] text-xs">
            {isFreeShipping ? (
              <div className="flex items-center gap-2 text-[#c5a059] font-medium">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>You qualify for Complimentary Express Delivery!</span>
              </div>
            ) : (
              <div>
                <p className="text-[#cbc6bb] mb-1.5">
                  Add{' '}
                  <span className="font-medium text-[#c5a059] tabular-nums">
                    ₹{freeShippingRemaining.toLocaleString('en-IN')}
                  </span>{' '}
                  more for Complimentary Shipping
                </p>
                <div className="w-full h-1.5 bg-[#252530] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#c5a059] transition-all duration-500 rounded-full"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <ShoppingBag className="w-12 h-12 text-[#32323e] mb-4" strokeWidth={1} />
                <h3 className="font-serif text-2xl text-white font-medium mb-2">
                  Your bag is empty
                </h3>
                <p className="text-xs text-[#8c887f] max-w-xs mb-6">
                  Select your signature fragrance from the VÉRONA 27 Collection.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 bg-[#c5a059] text-[#09090b] text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer"
                >
                  DISCOVER SCENTS
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-4 pb-6 border-b border-[#1c1c26] last:border-b-0"
                >
                  {/* Flacon Thumbnail */}
                  <div className="w-20 h-20 bg-[#08080a] border border-[#242430] shrink-0 overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-base text-white font-medium leading-tight line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.size)}
                          className="text-[#6d6961] hover:text-[#d9534f] transition-colors p-1 cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#8e8a81] tracking-wider mt-0.5">
                        {item.size} • {item.product.type}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#272734] bg-[#0c0c10]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="p-1.5 text-[#9e9a91] hover:text-white transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-medium tabular-nums text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="p-1.5 text-[#9e9a91] hover:text-white transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="font-serif text-base text-white tabular-nums font-medium">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer with Subtotal & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 bg-[#0a0a0d] border-t border-[#21212c]">
              <div className="space-y-2 mb-4 text-xs">
                <div className="flex justify-between text-[#9e9a91]">
                  <span>Subtotal</span>
                  <span className="text-white font-serif text-base tabular-nums">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between text-[#9e9a91]">
                  <span>Delivery</span>
                  <span>{isFreeShipping ? 'FREE' : '₹150'}</span>
                </div>
                <div className="flex justify-between text-[#9e9a91]">
                  <span>Packaging</span>
                  <span>Signature Embossed Hardbox</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#1e1e28] flex justify-between items-baseline mb-6">
                <span className="text-xs uppercase tracking-widest text-[#cbc6bc] font-medium">
                  Total
                </span>
                <span className="font-serif text-2xl text-white font-medium tabular-nums">
                  ₹{(subtotal + (isFreeShipping ? 0 : 150)).toLocaleString('en-IN')}
                </span>
              </div>

              <button
                onClick={handleProceedToCheckout}
                className="w-full py-4 bg-[#c5a059] hover:bg-[#d8b56d] text-[#09090b] text-xs font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg active:scale-[0.98]"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-[#736f66] mt-3 tracking-wider">
                100% Secure Checkout • Crafted & Shipped from Chennai
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
