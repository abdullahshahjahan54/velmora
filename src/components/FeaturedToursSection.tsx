import React, { useState } from 'react';
import {
  Sparkles,
  Star,
  Clock,
  Users,
  Check,
  ArrowRight,
  Eye,
  Compass
} from 'lucide-react';
import { TOUR_PACKAGES } from '../data/toursData';
import { TourCategory, TourPackage } from '../types/travel';
import { TourDetailsModal } from './TourDetailsModal';

interface FeaturedToursSectionProps {
  onBookTour: (tourTitle: string) => void;
  activeFilter?: TourCategory;
  onFilterChange?: (cat: TourCategory) => void;
}

export const FeaturedToursSection: React.FC<FeaturedToursSectionProps> = ({
  onBookTour,
  activeFilter = 'all',
  onFilterChange,
}) => {
  const [internalFilter, setInternalFilter] = useState<TourCategory>(activeFilter);
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);

  const currentFilter = onFilterChange ? activeFilter : internalFilter;

  const handleFilterClick = (cat: TourCategory) => {
    if (onFilterChange) {
      onFilterChange(cat);
    } else {
      setInternalFilter(cat);
    }
  };

  const categories: { label: string; value: TourCategory }[] = [
    { label: 'All Tours', value: 'all' },
    { label: 'Pakistan Tours', value: 'pakistan' },
    { label: 'International Tours', value: 'international' },
    { label: 'Family Tours', value: 'family' },
    { label: 'Honeymoon Tours', value: 'honeymoon' },
    { label: 'Adventure Tours', value: 'adventure' },
    { label: 'Luxury Tours', value: 'luxury' },
    { label: 'Budget Tours', value: 'budget' },
  ];

  const filteredTours = TOUR_PACKAGES.filter((pkg) => {
    if (currentFilter === 'all') return true;
    return pkg.categories.includes(currentFilter);
  });

  return (
    <section id="tours" className="py-24 bg-[#090e18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mastercrafted Itineraries</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Find Your Perfect Journey
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 font-light">
            Each VELMORA expedition is tailored with premier 5-star properties, private 4x4 convoys, and personalized concierge care.
          </p>
        </div>

        {/* Interactive Filtering Tabs (Clean Segmented Design, zero pills) */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-10 gap-1.5 scrollbar-none">
          <div className="flex items-center gap-1.5 p-1.5 bg-[#0f172a] border border-white/10 rounded-xl">
            {categories.map((cat) => {
              const count = TOUR_PACKAGES.filter((t) =>
                cat.value === 'all' ? true : t.categories.includes(cat.value)
              ).length;
              const isActive = currentFilter === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => handleFilterClick(cat.value)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/20'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="group bg-[#0e1626] rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
            >
              {/* Card Media Header */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                <img
                  src={tour.heroImage}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1626] via-[#0e1626]/20 to-transparent" />

                {/* Duration & Location Unboxed Badges */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-white">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>{tour.duration}</span>
                </div>

                <div className="absolute top-3.5 right-3.5 flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-medium text-amber-300">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{tour.rating}</span>
                  <span className="text-neutral-400 text-[10px]">({tour.reviewCount})</span>
                </div>

                {/* Price Display */}
                <div className="absolute bottom-3 left-4">
                  <p className="text-[10px] uppercase tracking-wider text-neutral-300 font-medium">Starting from</p>
                  <p className="text-2xl font-bold text-white font-cinzel tracking-wide">
                    {tour.priceFormatted}
                    <span className="text-xs text-neutral-300 font-normal"> / person</span>
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-2">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>{tour.travelersCount}</span>
                    <span aria-hidden="true">·</span>
                    <span>{tour.location}</span>
                  </div>

                  <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {tour.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-neutral-300 line-clamp-2 leading-relaxed font-light">
                    {tour.shortDescription}
                  </p>

                  {/* Included Services Snippet */}
                  <div className="mt-4 pt-3.5 border-t border-white/10 space-y-1.5">
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400">
                      Key Highlights:
                    </p>
                    {tour.highlights.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedTour(tour)}
                    className="py-2.5 px-3 rounded-lg border border-white/20 hover:border-amber-400/50 text-xs font-semibold text-neutral-200 hover:text-white transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => onBookTour(tour.title)}
                    className="py-2.5 px-3 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-amber-500/20 flex items-center justify-center gap-1 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tour Details Modal */}
      <TourDetailsModal
        tour={selectedTour}
        onClose={() => setSelectedTour(null)}
        onBookNow={(tourTitle) => {
          setSelectedTour(null);
          onBookTour(tourTitle);
        }}
      />
    </section>
  );
};
