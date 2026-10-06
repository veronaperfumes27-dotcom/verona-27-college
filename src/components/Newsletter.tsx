import React, { useState } from 'react';
import { Mail, Check, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useCart();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      showToast('Welcome to VÉRONA 27', 'Your private 10% welcome code: VERONA27SIGNATURE');
    }, 600);
  };

  return (
    <section className="py-24 sm:py-28 bg-[#09090b] border-t border-[#1a1a24] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a059] font-medium block mb-3">
          THE INNER CIRCLE
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white tracking-[0.05em] uppercase mb-4">
          ENTER THE WORLD OF VÉRONA 27
        </h2>

        <p className="text-sm sm:text-base text-[#bbb6ac] font-light max-w-lg mx-auto mb-10 leading-relaxed">
          Be the first to discover new fragrances, limited editions and private offers.
        </p>

        {isSubscribed ? (
          <div className="bg-[#121217] border border-[#c5a059]/40 p-6 sm:p-8 max-w-lg mx-auto animate-in fade-in duration-300">
            <div className="w-10 h-10 bg-[#c5a059]/20 text-[#c5a059] rounded-full flex items-center justify-center mx-auto mb-3">
              <Check className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl text-white font-medium mb-1">
              Welcome to VÉRONA 27
            </h3>
            <p className="text-xs text-[#a39e94] mb-4">
              Your signature journey begins. Use code below at checkout:
            </p>
            <div className="inline-block px-4 py-2 bg-[#09090c] border border-[#30303e] text-[#c5a059] font-mono text-sm tracking-wider">
              VERONA27SIGNATURE (10% OFF)
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-[#6e6b63] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full bg-[#121217] border border-[#262633] focus:border-[#c5a059] text-white text-xs sm:text-sm pl-11 pr-4 py-4 focus:outline-none transition-colors placeholder:text-[#6e6b63]"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-4 bg-[#c5a059] hover:bg-[#d8b56d] text-[#09090b] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shrink-0 active:scale-95 disabled:opacity-60"
              >
                <span>{isLoading ? 'ENROLLING...' : 'JOIN THE LIST'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] text-[#706c64] mt-4 font-light">
              By joining, you consent to our privacy policy. We respect your confidentiality.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
