import React from 'react';
import {
  Compass,
  CheckCircle,
  Car,
  Headphones,
  Sliders,
  DollarSign,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Expert Travel Planning',
      description: 'Professionally planned itineraries designed around your journey. Every route, scenic stop, and acclimatization day is engineered by veteran mountain and international curators.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'Handpicked Experiences',
      description: 'Carefully selected destinations, hotels and activities. We vet each luxury mountain lodge, heritage palace, and private yacht charter personally to ensure pristine comfort.',
      icon: CheckCircle,
    },
    {
      num: '03',
      title: 'Comfortable Travel',
      description: 'Reliable transportation and carefully planned travel arrangements. Our private fleet consists of modern Toyota Land Cruiser Prados, Fortuners, and executive HiAce Grand Cabins.',
      icon: Car,
    },
    {
      num: '04',
      title: '24/7 Dedicated Support',
      description: 'Travel assistance whenever customers need it. From the second you touch down until you return home, your dedicated VELMORA concierge manager is just a phone call away.',
      icon: Headphones,
    },
    {
      num: '05',
      title: 'Customized Packages',
      description: 'Travel experiences designed around individual preferences. Whether celebrating an anniversary, a family milestone, or a high-altitude trek, every detail adapts to you.',
      icon: Sliders,
    },
    {
      num: '06',
      title: 'Transparent Pricing',
      description: 'Clear and easy-to-understand package pricing. No unexpected surcharges, fuel levies, or hidden entrance ticket fees. What we quote is the exact rate you pay.',
      icon: DollarSign,
    },
  ];

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-[#080d17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The VELMORA Standard</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Travel With Confidence
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            We hold ourselves to uncompromising hospitality benchmarks so you can discover the world's most dramatic landscapes in complete peace of mind.
          </p>
        </div>

        {/* 6 Pillars Bento/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="group relative p-8 rounded-2xl bg-[#0d1424] border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-cinzel text-lg font-bold text-neutral-500 group-hover:text-amber-400/60 transition-colors">
                      {pillar.num}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-amber-400/80">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>VELMORA Certified Promise</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
