import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { GalleryItem } from '../types/travel';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  items,
  onClose,
  onNavigate,
}) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        onNavigate(items[prevIndex]);
      }
      if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % items.length;
        onNavigate(items[nextIndex]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items, onNavigate, onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200 select-none"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Control */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 z-40 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Next Control */}
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 z-40 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        aria-label="Next image"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Center Image Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
      >
        <div className="relative overflow-hidden rounded-xl shadow-2xl border border-white/15 max-h-[72vh] flex items-center justify-center bg-black">
          <img
            src={item.image}
            alt={item.title}
            className="max-w-full max-h-[72vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-xl px-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{item.location}</span>
            <span aria-hidden="true">·</span>
            <span>{item.category}</span>
          </div>
          <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">{item.title}</h3>
          <p className="mt-1 text-xs text-neutral-300 font-light">{item.description}</p>
        </div>
      </div>
    </div>
  );
};
