import React from 'react';
import { X, MapPin, Calendar, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Destination } from '../types/travel';

interface DestinationDetailsModalProps {
  destination: Destination | null;
  onClose: () => void;
  onViewTours: (destinationId: string) => void;
  onBookDirect: (destinationName: string) => void;
}

export const DestinationDetailsModal: React.FC<DestinationDetailsModalProps> = ({
  destination,
  onClose,
  onViewTours,
  onBookDirect,
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0b111e] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label="Close destination details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Header Image */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          <img
            src={destination.heroImage}
            alt={`${destination.name} - ${destination.region}, ${destination.country}`}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b111e] via-[#0b111e]/40 to-black/30" />

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <MapPin className="w-4 h-4" />
              <span>
                {destination.region}, {destination.country}
              </span>
              {destination.elevation && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{destination.elevation}</span>
                </>
              )}
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide">
              {destination.name}
            </h2>
            <p className="mt-1 text-sm sm:text-base text-neutral-300 font-light italic">
              "{destination.tagline}"
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-neutral-400">Starting Price</p>
              <p className="text-lg font-bold text-amber-400 font-cinzel">
                {destination.priceFormatted}
                <span className="text-xs text-neutral-400 font-normal"> / person</span>
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-neutral-400">Ideal Duration</p>
              <p className="text-sm font-semibold text-white mt-1">{destination.duration}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-neutral-400">Guest Rating</p>
              <p className="text-sm font-semibold text-white mt-1">
                ⭐ {destination.rating} ({destination.reviewsCount} reviews)
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-neutral-400">Best Season</p>
              <p className="text-xs font-semibold text-amber-300 mt-1 line-clamp-2">
                {destination.bestTimeToVisit}
              </p>
            </div>
          </div>

          {/* Long Description */}
          <div>
            <h3 className="font-cinzel text-xl font-bold text-white mb-3">Overview & Atmosphere</h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              {destination.longDescription}
            </p>
          </div>

          {/* Key Highlights & Top Activities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3.5 flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Signature Highlights</span>
              </h4>
              <ul className="space-y-2.5">
                {destination.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3.5 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Curated Experiences</span>
              </h4>
              <ul className="space-y-2.5">
                {destination.topActivities.map((act, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ideal For */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              Recommended For Travelers:
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-neutral-300">
              {destination.idealFor.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-white/5 border border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-[#080d17] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            Ready to plan your luxury trip to <strong className="text-white">{destination.name}</strong>?
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onViewTours(destination.id);
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg border border-white/20 hover:border-white/40 text-xs font-semibold text-white tracking-wider uppercase transition-colors"
            >
              View Tour Packages
            </button>
            <button
              onClick={() => {
                onClose();
                onBookDirect(destination.name);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-1.5"
            >
              <span>Book This Trip</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
