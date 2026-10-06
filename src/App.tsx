/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCollection } from './components/FeaturedCollection';
import { BrandStory } from './components/BrandStory';
import { FragranceFinder } from './components/FragranceFinder';
import { FragranceNotesGuide } from './components/FragranceNotesGuide';
import { BestsellerSpotlight } from './components/BestsellerSpotlight';
import { SocialProof } from './components/SocialProof';
import { InstagramGrid } from './components/InstagramGrid';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SearchModal } from './components/SearchModal';
import { CheckoutModal } from './components/CheckoutModal';
import { StoryModal } from './components/StoryModal';
import { GuideModal } from './components/GuideModal';
import { AccountModal } from './components/AccountModal';
import { Toast } from './components/Toast';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#09090b] text-[#eae7e1] flex flex-col selection:bg-[#c5a059]/30 selection:text-white">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Featured Collection */}
          <FeaturedCollection />

          {/* 3. Brand Story Editorial */}
          <BrandStory />

          {/* 4. Interactive Fragrance Finder */}
          <FragranceFinder />

          {/* 5. Olfactive Notes Architecture */}
          <FragranceNotesGuide />

          {/* 6. Bestseller Spotlight */}
          <BestsellerSpotlight />

          {/* 7. Social Proof Testimonials */}
          <SocialProof />

          {/* 8. Instagram Editorial Grid */}
          <InstagramGrid />

          {/* 9. Newsletter Membership */}
          <Newsletter />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Drawers & Overlays */}
        <CartDrawer />
        <WishlistDrawer />
        <QuickViewModal />
        <ProductDetailModal />
        <SearchModal />
        <CheckoutModal />
        <StoryModal />
        <GuideModal />
        <AccountModal />
        <Toast />
      </div>
    </CartProvider>
  );
}
