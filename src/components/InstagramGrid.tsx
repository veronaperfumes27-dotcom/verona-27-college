import React from 'react';
import { Instagram, Heart, ExternalLink } from 'lucide-react';
import heroNoirImg from '../assets/images/hero_verona27_noir_1791317341488.jpg';
import eclatImg from '../assets/images/product_verona_eclat_1791317355358.jpg';
import oudImg from '../assets/images/product_verona_oud_1791317367216.jpg';
import veilImg from '../assets/images/product_verona_veil_1791317378284.jpg';
import craftImg from '../assets/images/editorial_verona_craft_1791317388961.jpg';

export const InstagramGrid: React.FC = () => {
  const posts = [
    {
      id: 1,
      image: heroNoirImg,
      caption: 'NOIR at twilight. Bergamot cracked over dark leather.',
      likes: '1,420',
      tag: '#VeronaNoir'
    },
    {
      id: 2,
      image: craftImg,
      caption: 'The Chennai atelier during morning maturation.',
      likes: '984',
      tag: '#TheArtOfPerfumery'
    },
    {
      id: 3,
      image: eclatImg,
      caption: 'Amalfi sun caught in golden heavy crystal.',
      likes: '1,215',
      tag: '#VeronaEclat'
    },
    {
      id: 4,
      image: oudImg,
      caption: 'Royal Cambodian Oud, aged for profound depth.',
      likes: '2,310',
      tag: '#Oud27'
    },
    {
      id: 5,
      image: veilImg,
      caption: 'Florentine iris and whispered cashmere intimacy.',
      likes: '840',
      tag: '#VeronaVeil'
    },
    {
      id: 6,
      image: heroNoirImg,
      caption: 'Designed with intention. Hand-finished in Tamil Nadu.',
      likes: '1,890',
      tag: '#LeaveYourSignature'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#09090b] border-t border-[#1a1a24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-[#c5a059] text-xs tracking-[0.25em] uppercase font-medium mb-1">
              <Instagram className="w-4 h-4" />
              <span>THE VISUAL CHRONICLE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium uppercase tracking-wide">
              @VERONA27
            </h2>
            <p className="text-xs sm:text-sm text-[#9e9a91] font-light mt-1">
              Your signature, your story.
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[#c5a059]/40 hover:border-[#c5a059] text-white hover:text-[#c5a059] text-xs tracking-[0.2em] uppercase font-medium flex items-center gap-2 transition-all cursor-pointer"
          >
            <span>FOLLOW US</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6-Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square bg-[#101014] border border-[#21212b] overflow-hidden cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-90"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#09090b]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs text-[#c5a059]">
                  <Heart className="w-3.5 h-3.5 fill-[#c5a059]" />
                  <span className="font-medium text-[11px] tabular-nums">{post.likes}</span>
                </div>

                <p className="text-[11px] text-[#ded9ce] line-clamp-3 font-light leading-snug">
                  {post.caption}
                </p>

                <span className="text-[10px] tracking-wider text-[#9e9a91] font-mono">
                  {post.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
