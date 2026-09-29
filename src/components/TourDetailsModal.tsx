import React, { useState } from 'react';
import {
  X,
  MapPin,
  Clock,
  Users,
  Star,
  CheckCircle2,
  XCircle,
  Calendar,
  Building,
  Car,
  AlertCircle,
  Phone,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { TourPackage } from '../types/travel';

interface TourDetailsModalProps {
  tour: TourPackage | null;
  onClose: () => void;
  onBookNow: (tourTitle: string) => void;
}

export const TourDetailsModal: React.FC<TourDetailsModalProps> = ({
  tour,
  onClose,
  onBookNow,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'itinerary' | 'details' | 'reviews'>('itinerary');

  if (!tour) return null;

  const images = tour.galleryImages?.length > 0 ? tour.galleryImages : [tour.heroImage];

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello VELMORA, I would like to inquire about booking the "${tour.title}" (${tour.duration}) starting from ${tour.priceFormatted}.`
    );
    window.open(`https://wa.me/923008356672?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl bg-[#0a101d] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-6">
        {/* Header Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-11 h-11 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-colors border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label="Close tour details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Hero Media Showcase */}
        <div className="relative h-80 sm:h-96 lg:h-[420px] w-full overflow-hidden bg-slate-950">
          <img
            src={images[activeImageIndex] || tour.heroImage}
            alt={tour.title}
            className="w-full h-full object-cover transition-opacity duration-300"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a101d] via-[#0a101d]/40 to-black/30" />

          {/* Quick Details Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <MapPin className="w-4 h-4" />
              <span>{tour.location}</span>
              <span aria-hidden="true">·</span>
              <span>{tour.duration}</span>
              <span aria-hidden="true">·</span>
              <span>{tour.travelersCount}</span>
            </div>

            <h1 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide">
              {tour.title}
            </h1>
          </div>

          {/* Thumbnail Gallery Picker */}
          {images.length > 1 && (
            <div className="absolute top-4 left-6 hidden sm:flex items-center gap-2 z-20">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-14 h-10 rounded-md overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx
                      ? 'border-amber-400 scale-105'
                      : 'border-white/30 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Modal Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
          {/* Main Content (2 Columns) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <button
                onClick={() => setActiveTab('itinerary')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
                  activeTab === 'itinerary'
                    ? 'bg-amber-400/15 text-amber-400 border border-amber-400/30'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                Day-by-Day Itinerary ({tour.itinerary.length} Days)
              </button>
              <button
                onClick={() => setActiveTab('details')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
                  activeTab === 'details'
                    ? 'bg-amber-400/15 text-amber-400 border border-amber-400/30'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                Inclusions & Stays
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
                  activeTab === 'reviews'
                    ? 'bg-amber-400/15 text-amber-400 border border-amber-400/30'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                Reviews ({tour.reviews?.length || 0})
              </button>
            </div>

            {/* Overview & Highlights */}
            <div>
              <h2 className="font-cinzel text-xl font-bold text-white mb-3">Tour Overview</h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                {tour.fullOverview}
              </p>

              <div className="mt-5 p-5 rounded-xl bg-white/[0.03] border border-white/10">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                  Signature Expedition Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {tour.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tab 1: Interactive Day-by-Day Animated Itinerary */}
            {activeTab === 'itinerary' && (
              <div className="space-y-6">
                <h2 className="font-cinzel text-xl font-bold text-white">Daily Itinerary Timeline</h2>
                <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-amber-400 before:via-amber-500/40 before:to-transparent">
                  {tour.itinerary.map((dayItem, idx) => (
                    <div key={idx} className="relative group">
                      {/* Timeline Dot */}
                      <div className="absolute -left-6 sm:-left-8 top-1.5 w-6 h-6 rounded-full bg-[#0a101d] border-2 border-amber-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                      </div>

                      <div className="p-5 rounded-xl bg-[#0f172a]/70 border border-white/10 group-hover:border-amber-400/30 transition-colors">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-cinzel">
                            {dayItem.day}
                          </span>
                          <span className="text-[11px] text-neutral-400 font-medium bg-white/5 px-2.5 py-0.5 rounded">
                            🍽️ {dayItem.meals}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white mb-2">{dayItem.title}</h4>
                        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                          {dayItem.description}
                        </p>
                        <div className="mt-3 pt-2.5 border-t border-white/5 text-[11px] text-amber-300/90 flex items-center gap-1.5">
                          <Building className="w-3.5 h-3.5 text-amber-400" />
                          <span>Overnight: {dayItem.stay}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Inclusions, Logistics & Stays */}
            {activeTab === 'details' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Included */}
                  <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Included in Package</span>
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-neutral-200">
                      {tour.included.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-400 mt-0.5">✓</span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Not Included */}
                  <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-500/20">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-3 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4" />
                      <span>Not Included</span>
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                      {tour.notIncluded.map((ninc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-rose-400 mt-0.5">✕</span>
                          <span>{ninc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Stays & Transportation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                      <Building className="w-4 h-4" />
                      <span>Accommodation Standard</span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-200">{tour.accommodation}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                      <Car className="w-4 h-4" />
                      <span>Transportation Standard</span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-200">{tour.transportation}</p>
                  </div>
                </div>

                {/* Important Notes */}
                <div className="p-4 rounded-xl bg-amber-400/5 border border-amber-400/20 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                      Important Traveler Advice
                    </h4>
                    <ul className="space-y-1 text-xs text-neutral-300">
                      {tour.importantInfo.map((info, i) => (
                        <li key={i}>• {info}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Customer Reviews */}
            {activeTab === 'reviews' && (
              <div className="space-y-4">
                <h3 className="font-cinzel text-xl font-bold text-white mb-2">Verified Traveler Reviews</h3>
                {tour.reviews.map((rev, i) => (
                  <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="text-sm font-bold text-white">{rev.author}</h4>
                        <p className="text-[11px] text-neutral-400">{rev.location}</p>
                      </div>
                      <div className="flex items-center gap-1 text-amber-400 text-xs">
                        {[...Array(rev.rating)].map((_, rIdx) => (
                          <Star key={rIdx} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                        <span className="ml-1 text-[11px] text-neutral-400">{rev.date}</span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-300 italic font-light">"{rev.comment}"</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Sticky Booking Sidebar (1 Column) */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 bg-[#0f172a] rounded-2xl p-6 border border-white/15 shadow-2xl space-y-6">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-neutral-400">All-Inclusive Luxury</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-cinzel text-3xl font-bold text-amber-400">
                    {tour.priceFormatted}
                  </span>
                  <span className="text-xs text-neutral-400">/ traveler</span>
                </div>
                <div className="mt-2 flex items-center gap-1 text-xs text-amber-300">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold">{tour.rating}</span>
                  <span className="text-neutral-400">({tour.reviewCount} customer ratings)</span>
                </div>
              </div>

              {/* Quick Metadata List */}
              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-neutral-300">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> Duration:
                  </span>
                  <span className="font-semibold text-white">{tour.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-amber-400" /> Group Size:
                  </span>
                  <span className="font-semibold text-white">{tour.travelersCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" /> Country:
                  </span>
                  <span className="font-semibold text-white">{tour.country}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onBookNow(tour.title);
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Book This Tour</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppBooking}
                  className="w-full py-3.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book via WhatsApp</span>
                </button>
              </div>

              <div className="pt-2 text-center text-[11px] text-neutral-400">
                🔒 Guaranteed Best Luxury Rate & Zero Hidden Charges
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
