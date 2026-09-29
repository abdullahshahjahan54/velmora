import React, { useState } from 'react';
import {
  Compass,
  Calendar,
  Users,
  Search,
  Sparkles,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import hunzaHero from '../assets/images/velmora_hero_hunza_1790689476526.jpg';
import { DESTINATIONS } from '../data/destinationsData';

interface HeroSectionProps {
  onExploreDestinations: () => void;
  onPlanTrip: (prefillData?: {
    destination?: string;
    tourType?: string;
    travelers?: number;
    travelDate?: string;
  }) => void;
  onSelectDestination: (destId: string) => void;
  onFilterTourType: (tourType: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreDestinations,
  onPlanTrip,
  onSelectDestination,
  onFilterTourType,
}) => {
  const [selectedDest, setSelectedDest] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [travelers, setTravelers] = useState('2');
  const [tourType, setTourType] = useState('all');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDest) {
      onSelectDestination(selectedDest);
    } else if (tourType !== 'all') {
      onFilterTourType(tourType);
    } else {
      onPlanTrip({
        destination: selectedDest,
        tourType: tourType,
        travelers: parseInt(travelers, 10) || 2,
        travelDate: travelDate,
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden">
      {/* Cinematic Background Layer with Ken Burns Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={hunzaHero}
          alt="Hunza Valley Passu Cones Karakoram Mountains Pakistan - VELMORA Luxury Travel"
          className="w-full h-full object-cover object-center animate-kenburns scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Measured Multi-Stop Scrim for WCAG contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/55 to-[#080c14]/80" />
        <div className="absolute inset-0 bg-radial-[at_center_top] from-transparent via-[#080c14]/40 to-[#080c14]/90" />
      </div>

      {/* Floating Ambient Badges / Travel Elements */}
      <div className="hidden xl:flex absolute top-36 left-12 z-10 glass-panel px-4 py-2.5 rounded-xl border border-white/10 items-center gap-3 shadow-2xl animate-pulse">
        <div className="w-8 h-8 rounded-lg bg-amber-400/20 flex items-center justify-center text-amber-400">
          <Award className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-white tracking-wide">Premier Pakistan Agency</p>
          <p className="text-[10px] text-amber-300">5-Star Luxury Mountain Expeditions</p>
        </div>
      </div>

      <div className="hidden xl:flex absolute top-48 right-12 z-10 glass-panel px-4 py-2.5 rounded-xl border border-white/10 items-center gap-3 shadow-2xl">
        <div className="w-8 h-8 rounded-lg bg-emerald-400/20 flex items-center justify-center text-emerald-400">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-white tracking-wide">100% Tailor-Made & Safe</p>
          <p className="text-[10px] text-neutral-300">Dedicated 24/7 Concierge & 4x4 Fleet</p>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Unboxed editorial kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Pakistan & International Expeditions</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>

        {/* Primary H1 Display Headline */}
        <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] max-w-4xl [text-wrap:balance]">
          Your Journey Begins Here.
        </h1>

        {/* Supporting Narrative */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed [text-wrap:balance]">
          Discover breathtaking destinations, unforgettable experiences and perfectly planned journeys with{' '}
          <span className="font-semibold text-amber-300">VELMORA</span>.
        </p>

        {/* Primary CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onExploreDestinations}
            className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all duration-200 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <span>Explore Destinations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onPlanTrip()}
            className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/35 transition-all duration-200 backdrop-blur-md shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Plan Your Trip</span>
            <Compass className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* Interactive Travel Search Panel */}
        <div className="mt-12 w-full max-w-4xl">
          <form
            onSubmit={handleSearchSubmit}
            className="glass-panel-elevated p-4 sm:p-5 rounded-2xl shadow-2xl shadow-black/80 border border-white/15 text-left transition-all duration-300"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {/* Field 1: Destination */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Destination</span>
                </label>
                <select
                  value={selectedDest}
                  onChange={(e) => setSelectedDest(e.target.value)}
                  className="w-full bg-[#080c14]/80 border border-white/15 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                >
                  <option value="">All Destinations</option>
                  <optgroup label="Pakistan Valleys & Peaks">
                    {DESTINATIONS.filter((d) => d.isPakistan).map((dest) => (
                      <option key={dest.id} value={dest.id}>
                        {dest.name} ({dest.region})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="International Escapes">
                    {DESTINATIONS.filter((d) => !d.isPakistan).map((dest) => (
                      <option key={dest.id} value={dest.id}>
                        {dest.name} ({dest.country})
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Field 2: Travel Date */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Travel Date</span>
                </label>
                <input
                  type="date"
                  value={travelDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-[#080c14]/80 border border-white/15 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                />
              </div>

              {/* Field 3: Number of Travelers */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>Travelers</span>
                </label>
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="w-full bg-[#080c14]/80 border border-white/15 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                >
                  <option value="1">Solo Traveler (1 Guest)</option>
                  <option value="2">Couple (2 Guests)</option>
                  <option value="4">Family (3 - 5 Guests)</option>
                  <option value="8">Group / Expedition (6+ Guests)</option>
                </select>
              </div>

              {/* Field 4: Tour Type */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  <span>Tour Type</span>
                </label>
                <select
                  value={tourType}
                  onChange={(e) => setTourType(e.target.value)}
                  className="w-full bg-[#080c14]/80 border border-white/15 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                >
                  <option value="all">All Experiences</option>
                  <option value="pakistan">Pakistan Tours</option>
                  <option value="international">International Tours</option>
                  <option value="luxury">Luxury Holidays</option>
                  <option value="honeymoon">Honeymoon Packages</option>
                  <option value="family">Family Tours</option>
                  <option value="adventure">Adventure Treks</option>
                  <option value="budget">Budget Tours</option>
                </select>
              </div>
            </div>

            {/* Bottom Row with Search Button and Quick Trust Markers */}
            <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-xs text-neutral-400">
                <span className="text-amber-400 font-medium">Popular:</span>
                <button
                  type="button"
                  onClick={() => onSelectDestination('hunza')}
                  className="hover:text-white transition-colors underline decoration-dotted"
                >
                  Hunza
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => onSelectDestination('skardu')}
                  className="hover:text-white transition-colors underline decoration-dotted"
                >
                  Skardu
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => onSelectDestination('maldives')}
                  className="hover:text-white transition-colors underline decoration-dotted"
                >
                  Maldives
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => onSelectDestination('turkey')}
                  className="hover:text-white transition-colors underline decoration-dotted"
                >
                  Turkey
                </button>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-amber-500/25 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search Journeys</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
