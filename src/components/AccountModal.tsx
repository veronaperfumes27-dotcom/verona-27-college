import React, { useState } from 'react';
import { X, User, ShieldCheck, Package, Heart, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const AccountModal: React.FC = () => {
  const { isAccountOpen, setIsAccountOpen, wishlist, setIsWishlistOpen, showToast } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [email, setEmail] = useState('aditya.sharma@example.com');
  const [name, setName] = useState('Aditya Sharma');

  if (!isAccountOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={() => setIsAccountOpen(false)}
      />

      <div className="relative w-full max-w-lg bg-[#111116] border border-[#2b2b3a] text-white shadow-2xl z-10 overflow-hidden animate-in fade-in duration-200">
        <div className="p-6 border-b border-[#21212c] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-[#c5a059]" />
            <h3 className="font-serif text-2xl tracking-wide uppercase font-medium">
              VÉRONA 27 Privilege Member
            </h3>
          </div>
          <button
            onClick={() => setIsAccountOpen(false)}
            className="p-1.5 text-[#8e8a81] hover:text-white transition-colors cursor-pointer"
            aria-label="Close account"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {isLoggedIn ? (
            <div>
              <div className="flex items-center gap-4 pb-6 border-b border-[#21212b]">
                <div className="w-14 h-14 bg-[#c5a059]/10 border border-[#c5a059]/40 rounded-full flex items-center justify-center font-serif text-2xl text-[#c5a059]">
                  {name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif text-xl text-white font-medium">{name}</h4>
                  <p className="text-xs text-[#8e8a81]">{email}</p>
                  <span className="inline-block mt-1 text-[10px] tracking-wider uppercase text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5">
                    Signature Tier Member
                  </span>
                </div>
              </div>

              {/* Account Quick Links */}
              <div className="py-4 space-y-3 text-xs">
                <button
                  onClick={() => {
                    setIsAccountOpen(false);
                    setIsWishlistOpen(true);
                  }}
                  className="w-full flex items-center justify-between p-3.5 bg-[#15151c] border border-[#242430] hover:border-[#c5a059] cursor-pointer text-left transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Heart className="w-4 h-4 text-[#c5a059]" />
                    <span className="text-white">Wishlist & Saved Fragrances</span>
                  </div>
                  <span className="text-[#8e8a81] font-mono tabular-nums">{wishlist.length}</span>
                </button>

                <div className="w-full flex items-center justify-between p-3.5 bg-[#15151c] border border-[#242430] text-left">
                  <div className="flex items-center gap-2.5">
                    <Package className="w-4 h-4 text-[#c5a059]" />
                    <span className="text-white">Order History</span>
                  </div>
                  <span className="text-[11px] text-[#c5a059]">1 Dispatched (#V27-89104)</span>
                </div>

                <div className="w-full flex items-center justify-between p-3.5 bg-[#15151c] border border-[#242430] text-left">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                    <span className="text-white">Chennai Atelier Concierge</span>
                  </div>
                  <span className="text-[11px] text-[#8e8a81]">Dedicated Advisor Active</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#21212b] flex items-center justify-between">
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    showToast('Logged out of VÉRONA 27');
                  }}
                  className="text-xs text-[#8e8a81] hover:text-[#d9534f] flex items-center gap-1.5 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
                <button
                  onClick={() => setIsAccountOpen(false)}
                  className="px-5 py-2 bg-[#c5a059] text-black text-xs font-semibold uppercase tracking-wider cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-[#8e8a81] mb-1">Email</label>
                <input
                  type="email"
                  defaultValue="aditya.sharma@example.com"
                  className="w-full bg-[#15151c] border border-[#292938] p-3 text-white focus:outline-none focus:border-[#c5a059]"
                />
              </div>
              <button
                onClick={() => {
                  setIsLoggedIn(true);
                  showToast('Welcome back to VÉRONA 27');
                }}
                className="w-full py-3.5 bg-[#c5a059] text-black text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Sign In to Inner Circle
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
