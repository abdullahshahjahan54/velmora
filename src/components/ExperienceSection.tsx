import React from 'react';
import { Compass, Sparkles, ArrowRight, ShieldCheck, MapPin, Star } from 'lucide-react';
import skarduExperience from '../assets/images/velmora_experience_skardu_1790689492734.jpg';

interface ExperienceSectionProps {
  onStartJourney: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onStartJourney }) => {
  return (
    <section id="experiences" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background Image with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={skarduExperience}
          alt="Cinematic Skardu Alpine Desert Karakoram Exploration VELMORA"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080c14] via-[#080c14]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-[#080c14]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Unboxed Kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Immersive High-End Travel</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] [text-wrap:balance]">
            Don't Just Visit Places. Experience Them.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed [text-wrap:balance]">
            VELMORA transforms ordinary vacations into deeply personal narratives. Picture private mountain flights over the K2 massif, starlit barbecues in cold high-altitude sand dunes, and tranquil tea ceremonies in 400-year-old Rajas palaces.
          </p>

          {/* Floating Pill/Card Feature Highlights */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-panel p-4 rounded-xl border border-white/10 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Private 4x4 Convoys</h4>
                <p className="text-xs text-neutral-300 font-light mt-0.5">
                  Exclusive Toyota Land Cruisers with veteran alpine chauffeurs.
                </p>
              </div>
            </div>

            <div className="glass-panel p-4 rounded-xl border border-white/10 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-400/20 text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Handpicked Luxury Stays</h4>
                <p className="text-xs text-neutral-300 font-light mt-0.5">
                  Serena Forts, overwater chalets & private boutique lodges.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <button
              onClick={onStartJourney}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 flex items-center gap-2.5 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
