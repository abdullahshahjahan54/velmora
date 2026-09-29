import React, { useEffect, useState, useRef } from 'react';
import { Users, Globe2, Compass, ShieldCheck } from 'lucide-react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ElementType;
}

const STATS: StatItem[] = [
  {
    value: 500,
    suffix: '+',
    label: 'Happy Travelers',
    description: 'Families, honeymooners & global adventurers served',
    icon: Users,
  },
  {
    value: 50,
    suffix: '+',
    label: 'Curated Destinations',
    description: 'Across Pakistan’s high peaks & international hotspots',
    icon: Globe2,
  },
  {
    value: 100,
    suffix: '+',
    label: 'Tour Packages',
    description: 'Bespoke itineraries, luxury chalets & private convoys',
    icon: Compass,
  },
  {
    value: 10,
    suffix: '+',
    label: 'Years of Experience',
    description: 'Unrivaled Karakoram & international travel mastery',
    icon: ShieldCheck,
  },
];

export const StatsSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1800; // ms
    const startTime = performance.now();

    const animateCounts = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo curve
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts(STATS.map((stat) => Math.floor(stat.value * ease)));

      if (progress < 1) {
        requestAnimationFrame(animateCounts);
      } else {
        setCounts(STATS.map((stat) => stat.value));
      }
    };

    const animId = requestAnimationFrame(animateCounts);
    return () => cancelAnimationFrame(animId);
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Travel statistics"
    >
      <div className="bg-[#0e1626]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/80">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                  idx !== 0 ? 'lg:pl-8' : ''
                } ${idx > 1 ? 'pt-6 sm:pt-0' : ''}`}
              >
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight tabular-nums">
                    {counts[idx]}
                  </span>
                  <span className="font-cinzel text-2xl sm:text-3xl font-bold text-amber-400">
                    {stat.suffix}
                  </span>
                </div>
                <h3 className="mt-1 text-sm sm:text-base font-semibold text-neutral-100 tracking-wide">
                  {stat.label}
                </h3>
                <p className="mt-1 text-xs text-neutral-400 max-w-[200px] leading-relaxed hidden sm:block">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
