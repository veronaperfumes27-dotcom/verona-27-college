import React from 'react';
import { useCart } from '../context/CartContext';
import { Check } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-[#14141a] border border-[#c5a059]/40 text-white px-5 py-3.5 shadow-2xl flex items-center gap-3 backdrop-blur-md">
        <div className="w-5 h-5 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center shrink-0">
          <Check className="w-3.5 h-3.5" />
        </div>
        <div>
          <span className="text-xs font-medium text-white tracking-wide block">
            {toast.message}
          </span>
          {toast.sub && (
            <span className="text-[11px] text-[#a8a397] font-light block">
              {toast.sub}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
