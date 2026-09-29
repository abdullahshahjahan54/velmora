import React, { useState } from 'react';
import { MapPin, ArrowRight, Star, Sparkles, Compass } from 'lucide-react';
import { DESTINATIONS } from '../data/destinationsData';
import { Destination } from '../types/travel';
import { DestinationDetailsModal } from './DestinationDetailsModal';

interface DestinationsSectionProps {
  onViewToursForDestination: (destId: string) => void;
  onBookDestination: (destName: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onViewToursForDestination,
  onBookDestination,
}) => {
  const [filter, setFilter] = useState<'all' | 'pakistan' | 'international'>('all');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const filteredDestinations = DESTINATIONS.filter((d) => {
    if (filter === 'pakistan') return d.isPakistan;
    if (filter === 'international') return !d.isPakistan;
    return true;
  });

  return (
    <section id="destinations" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Unrivaled Geographic Portfolios</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Explore Popular Destinations
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-2xl font-light">
              From the soaring jagged Karakoram peaks of Northern Pakistan to futuristic Middle Eastern skylines and private Indian Ocean overwater atolls.
            </p>
          </div>

          {/* Interactive Filter Control */}
          <div className="flex items-center gap-1.5 p-1 bg-[#101726] border border-white/10 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              All ({DESTINATIONS.length})
            </button>
            <button
              onClick={() => setFilter('pakistan')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'pakistan'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Pakistan Tours ({DESTINATIONS.filter((d) => d.isPakistan).length})
            </button>
            <button
              onClick={() => setFilter('international')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'international'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              International ({DESTINATIONS.filter((d) => !d.isPakistan).length})
            </button>
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="group relative bg-[#0e1626] rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col cursor-pointer"
              onClick={() => setSelectedDestination(dest)}
            >
              {/* Card Image Area with Zoom */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <img
                  src={dest.heroImage}
                  alt={`${dest.name} - ${dest.region} tour package with VELMORA`}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1626] via-[#0e1626]/20 to-transparent" />

                {/* Country / Region Tag in unboxed format */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-white">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{dest.region}</span>
                </div>

                {/* Rating */}
                <div className="absolute top-3.5 right-3.5 flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-medium text-amber-300">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{dest.rating}</span>
                </div>

                {/* Price Sticker */}
                <div className="absolute bottom-3 left-4">
                  <p className="text-[10px] uppercase tracking-wider text-neutral-300 font-medium">Starting from</p>
                  <p className="text-xl font-bold text-white font-cinzel tracking-wide">
                    {dest.priceFormatted}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-amber-400 transition-colors tracking-wide">
                    {dest.name}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-300 line-clamp-2 leading-relaxed font-light">
                    {dest.shortDescription}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-neutral-400 font-medium">{dest.duration}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDestination(dest);
                    }}
                    className="inline-flex items-center gap-1 font-semibold text-amber-400 group-hover:text-amber-300 transition-colors hover:underline"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Destination Details Modal */}
      <DestinationDetailsModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onViewTours={(destId) => {
          setSelectedDestination(null);
          onViewToursForDestination(destId);
        }}
        onBookDirect={(destName) => {
          setSelectedDestination(null);
          onBookDestination(destName);
        }}
      />
    </section>
  );
};
