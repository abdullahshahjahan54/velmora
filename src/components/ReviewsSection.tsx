import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Sparkles, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 bg-[#080d17] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Voices of Discovery</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Memories Made With VELMORA
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 font-light">
            Read firsthand accounts from families, honeymoon couples, and international travelers who entrusted us with their journeys.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-[#0d1525] rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl shadow-black/80">
            {/* Ambient Quote Symbol */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-white/5" />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
              {/* Avatar with Ring */}
              <div className="relative shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-amber-400 shadow-xl shadow-amber-500/20">
                  <img
                    src={current.avatar}
                    alt={current.customerName}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center border-2 border-[#0d1525]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              {/* Review Text */}
              <div className="flex-1 text-center md:text-left">
                {/* Star Rating */}
                <div className="flex items-center justify-center md:justify-start gap-1 mb-3 text-amber-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs text-neutral-400 font-medium ml-2">
                    Verified Expedition Review
                  </span>
                </div>

                <p className="text-base sm:text-lg lg:text-xl text-neutral-200 font-light italic leading-relaxed">
                  "{current.review}"
                </p>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-white tracking-wide">
                      {current.customerName}
                    </h3>
                    <p className="text-xs text-neutral-400">
                      {current.role} · <span className="text-amber-400">{current.destination}</span>
                    </p>
                  </div>
                  <div className="text-xs text-neutral-400">
                    <span className="text-neutral-300 font-medium">{current.tourName}</span> · {current.date}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? 'w-6 bg-amber-400' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
