import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Heart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const {
    cartCount,
    setIsCartOpen,
    wishlist,
    setIsWishlistOpen,
    setIsSearchOpen,
    setIsAccountOpen,
    setIsStoryOpen,
    setIsGuideOpen
  } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (sectionId === 'story') {
      setIsStoryOpen(true);
      return;
    }
    if (sectionId === 'guide') {
      setIsGuideOpen(true);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Announcement Bar */}
      <div className="bg-[#09090b] border-b border-[#24242d] text-[#c5a059] text-[11px] sm:text-xs tracking-[0.2em] uppercase py-2 px-4 text-center font-medium">
        <span>COMPLIMENTARY SHIPPING ON ORDERS ABOVE ₹2,000</span>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-colors duration-300 border-b ${
          isScrolled
            ? 'bg-[#0d0d10]/95 backdrop-blur-md border-[#26262e] shadow-lg shadow-black/40'
            : 'bg-[#0d0d10]/80 backdrop-blur-sm border-[#1f1f26]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Brand Wordmark (Zone 1) */}
          <a
            href="#"
            className="flex items-center gap-1.5 group focus:outline-none"
            aria-label="VÉRONA 27 Home"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.18em] font-semibold text-white group-hover:text-[#c5a059] transition-colors">
              VÉRONA
            </span>
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.1em] text-[#c5a059] font-normal">
              27
            </span>
          </a>

          {/* Desktop Navigation Links (Zone 2) */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.16em] uppercase font-medium text-[#c8c5be]">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#c5a059] hover:after:w-full after:transition-all"
            >
              Home
            </a>
            <button
              onClick={() => handleNavClick('shop')}
              className="cursor-pointer hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#c5a059] hover:after:w-full after:transition-all"
            >
              Shop
            </button>
            <button
              onClick={() => handleNavClick('collections')}
              className="cursor-pointer hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#c5a059] hover:after:w-full after:transition-all"
            >
              Collections
            </button>
            <button
              onClick={() => handleNavClick('story')}
              className="cursor-pointer hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#c5a059] hover:after:w-full after:transition-all"
            >
              Our Story
            </button>
            <button
              onClick={() => handleNavClick('guide')}
              className="cursor-pointer hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#c5a059] hover:after:w-full after:transition-all"
            >
              Fragrance Guide
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="cursor-pointer hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#c5a059] hover:after:w-full after:transition-all"
            >
              Contact
            </button>
          </nav>

          {/* Action Icons (Zone 3) */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 text-[#c8c5be] hover:text-[#c5a059] transition-colors focus:outline-none"
              aria-label="Search Fragrances"
              title="Search"
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>

            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-1.5 text-[#c8c5be] hover:text-[#c5a059] transition-colors focus:outline-none"
              aria-label="Wishlist"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" strokeWidth={1.5} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c5a059] text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsAccountOpen(true)}
              className="p-1.5 text-[#c8c5be] hover:text-[#c5a059] transition-colors focus:outline-none"
              aria-label="Member Account"
              title="Account"
            >
              <User className="w-5 h-5" strokeWidth={1.5} />
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-1.5 text-[#c8c5be] hover:text-[#c5a059] transition-colors focus:outline-none"
              aria-label="Shopping Bag"
              title="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1.5 min-w-4.5 h-4.5 px-1 bg-[#c5a059] text-[#0d0d10] text-[10px] font-bold rounded-full flex items-center justify-center tabular-nums">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-[#c8c5be] hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[89px] bg-[#0d0d10] border-b border-[#26262e] px-6 py-6 shadow-2xl flex flex-col gap-4 text-sm tracking-[0.18em] uppercase text-[#ded9ce] animate-in fade-in slide-in-from-top-4 duration-200">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-left py-2 hover:text-[#c5a059] transition-colors border-b border-[#1c1c24]"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('shop')}
            className="text-left py-2 hover:text-[#c5a059] transition-colors border-b border-[#1c1c24]"
          >
            Shop Fragrances
          </button>
          <button
            onClick={() => handleNavClick('collections')}
            className="text-left py-2 hover:text-[#c5a059] transition-colors border-b border-[#1c1c24]"
          >
            The 27 Collection
          </button>
          <button
            onClick={() => handleNavClick('story')}
            className="text-left py-2 hover:text-[#c5a059] transition-colors border-b border-[#1c1c24]"
          >
            Our Story
          </button>
          <button
            onClick={() => handleNavClick('guide')}
            className="text-left py-2 hover:text-[#c5a059] transition-colors border-b border-[#1c1c24]"
          >
            Fragrance Guide & Finder
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="text-left py-2 hover:text-[#c5a059] transition-colors"
          >
            Client Services & Contact
          </button>
        </div>
      )}
    </header>
  );
};
