import React, { useState } from 'react';
import { Sparkles, Eye, MapPin } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { GalleryItem } from '../types/travel';
import { GalleryLightbox } from './GalleryLightbox';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Mountains',
    'Beaches',
    'Adventure',
    'Hotels',
    'Culture',
    'Food',
    'Cities',
    'Experiences',
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-24 bg-[#090e19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Chronicles</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Cinematic Travel Gallery
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 font-light">
            A window into the raw alpine grandeur, luxury retreats, and vibrant cultures captured on VELMORA journeys.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-10 gap-1.5 scrollbar-none">
          <div className="flex items-center gap-1.5 p-1 bg-[#101726] border border-white/10 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 ${
                  activeCategory === cat
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#0e1626] border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 ${
                idx % 5 === 0 ? 'sm:col-span-2 sm:row-span-2 h-96' : 'h-64'
              }`}
            >
              <img
                src={item.image}
                alt={`${item.title} - ${item.location}`}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Center View Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              {/* Bottom Caption & Location */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-300 mb-1">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onNavigate={(newItem) => setSelectedItem(newItem)}
      />
    </section>
  );
};
