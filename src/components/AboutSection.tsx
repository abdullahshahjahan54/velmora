import React from 'react';
import { Compass, Sparkles, ShieldCheck, Award, Heart, Users, MapPin, CheckCircle2 } from 'lucide-react';
import hunzaHero from '../assets/images/velmora_hero_hunza_1790689476526.jpg';

interface AboutSectionProps {
  onPlanTrip: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onPlanTrip }) => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#080d17] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The VELMORA Story</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Crafting Extraordinary Journeys
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            Born from an unyielding passion for the high Karakoram and world-class luxury hospitality, VELMORA redefines high-end travel for discerning explorers.
          </p>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Column (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
              <img
                src={hunzaHero}
                alt="VELMORA Karakoram Expeditions & Luxury Travel Team"
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d17] via-transparent to-black/30" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel-elevated border border-white/15">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-wide">
                      A Decade of High-Mountain Mastery
                    </h4>
                    <p className="text-[11px] text-amber-300/90 mt-0.5">
                      Over 500+ successful private convoys across Pakistan & abroad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Narrative Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              <p>
                At <strong className="text-white font-semibold">VELMORA</strong>, we believe travel is not merely about visiting landmarks—it is about entering the living poetry of the earth. We bridge the raw, untamed majesty of Northern Pakistan with the refined comfort of five-star bespoke hospitality.
              </p>
              <p>
                Whether you are ascending the ancient Silk Road beneath the cathedral needles of the Passu Cones in Hunza, watching stars blanket the cold dunes of Skardu, or stepping directly into crystal-clear turquoise lagoons from your private overwater villa in the Maldives, our itineraries are thoughtfully engineered with precision, luxury, and cultural authenticity.
              </p>
            </div>

            {/* 4 Pillars of Excellence */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <Compass className="w-4 h-4" />
                  <span>Curated by Mountain Veterans</span>
                </div>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  Every route, road stop, and acclimatization window is designed by certified local mountain curators.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Impeccable Safety & Fleet</span>
                </div>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  Dedicated modern Toyota Land Cruiser Prados, professional chauffeurs, and 24/7 medical concierge support.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
                  <Heart className="w-4 h-4" />
                  <span>5-Star Heritage Stays</span>
                </div>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  Exclusive partnerships with Serena Hotels, Luxus Grand, Shangrila, and premier international resort brands.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400">
                  <Users className="w-4 h-4" />
                  <span>Tailor-Made Exclusivity</span>
                </div>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  100% private departures with personalized pacing tailored to couples, families, and high-altitude adventurers.
                </p>
              </div>
            </div>

            {/* Direct Consultation Action */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onPlanTrip}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-amber-500/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                Plan Your Journey With Us
              </button>
              <div className="text-xs text-neutral-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Govt. Licensed Tour Operator (#PK-TRV-8842)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
