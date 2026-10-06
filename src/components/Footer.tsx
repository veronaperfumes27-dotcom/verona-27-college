import React from 'react';
import { useCart } from '../context/CartContext';

export const Footer: React.FC = () => {
  const { setIsStoryOpen, setIsGuideOpen, setIsCartOpen, showToast } = useCart();

  const handleLinkClick = (e: React.MouseEvent, type: string) => {
    e.preventDefault();
    if (type === 'story') {
      setIsStoryOpen(true);
    } else if (type === 'guide') {
      setIsGuideOpen(true);
    } else if (type === 'shop') {
      const el = document.getElementById('shop');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'cart') {
      setIsCartOpen(true);
    } else {
      showToast('Client Services', `${type} inquiries are handled via care@verona27.com`);
    }
  };

  return (
    <footer id="contact" className="bg-[#070709] border-t border-[#1a1a24] text-[#a6a196] text-xs">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-2xl tracking-[0.16em] font-semibold text-white">
                VÉRONA
              </span>
              <span className="font-serif text-2xl tracking-[0.1em] text-[#c5a059]">
                27
              </span>
            </div>

            <p className="font-serif text-lg text-white/90 italic tracking-wide">
              “Leave Your Signature.”
            </p>

            <p className="text-xs text-[#858076] font-light leading-relaxed max-w-sm">
              Contemporary Indian haute parfumerie crafting sophisticated, long-lasting fragrances
              with 27-day cold maturation and 25%+ pure extrait concentration.
            </p>

            <div className="text-[11px] text-[#736e65] pt-2">
              <p>Chennai Atelier • Tamil Nadu, India</p>
              <p>Client Concierge: concierge@verona27.com</p>
            </div>
          </div>

          {/* SHOP Column */}
          <div>
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-white font-semibold mb-4">
              SHOP
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#shop"
                  onClick={(e) => handleLinkClick(e, 'shop')}
                  className="hover:text-[#c5a059] transition-colors"
                >
                  All Fragrances
                </a>
              </li>
              <li>
                <a
                  href="#collections"
                  onClick={(e) => handleLinkClick(e, 'shop')}
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Bestsellers
                </a>
              </li>
              <li>
                <a
                  href="#shop"
                  onClick={(e) => handleLinkClick(e, 'shop')}
                  className="hover:text-[#c5a059] transition-colors"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#shop"
                  onClick={(e) => handleLinkClick(e, 'Discovery Gift Sets')}
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Gift Sets
                </a>
              </li>
            </ul>
          </div>

          {/* ABOUT Column */}
          <div>
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-white font-semibold mb-4">
              ABOUT
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#story"
                  onClick={(e) => handleLinkClick(e, 'story')}
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#guide"
                  onClick={(e) => handleLinkClick(e, 'guide')}
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Fragrance Guide
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, 'Bespoke Consultations')}
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  onClick={(e) => handleLinkClick(e, 'Careers')}
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* HELP Column */}
          <div>
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-white font-semibold mb-4">
              HELP
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#shipping"
                  onClick={(e) => handleLinkClick(e, 'Shipping Policy')}
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Shipping
                </a>
              </li>
              <li>
                <a
                  href="#returns"
                  onClick={(e) => handleLinkClick(e, 'Returns & Replacements')}
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  onClick={(e) => handleLinkClick(e, 'Frequently Asked Questions')}
                  className="hover:text-[#c5a059] transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#track"
                  onClick={(e) => handleLinkClick(e, 'Live Parcel Tracking')}
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* FOLLOW Column */}
          <div>
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-white font-semibold mb-4">
              FOLLOW
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c5a059] transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#181822] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#706c64]">
          <p>© 2026 VÉRONA 27. All Rights Reserved.</p>
          <p className="text-[#a6a196] font-medium tracking-wide">
            Made with intention in Chennai, India.
          </p>
          <div className="flex items-center gap-4 text-[#706c64]">
            <span className="hover:text-[#c5a059] cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-[#c5a059] cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-[#c5a059] cursor-pointer">Batch Authentication</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
