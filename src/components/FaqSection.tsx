import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';
import { FAQS_DATA } from '../data/faqsData';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([FAQS_DATA[0].id, FAQS_DATA[1].id]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-24 bg-[#080d17] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Essential Travel Intelligence</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 font-light max-w-xl mx-auto">
            Everything you need to know about booking private tours, northern Pakistan seasonality, visas, and customized itineraries.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#0d1424] border border-white/10 overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  aria-expanded={isOpen}
                >
                  <span className="font-cinzel text-base sm:text-lg font-bold text-white tracking-wide">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 text-amber-400 ${
                      isOpen ? 'rotate-180 bg-amber-400/20' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Assistance Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#10192e] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Have a specific or customized travel query?</h4>
            <p className="text-xs text-neutral-400 mt-0.5">
              Our Pakistan and international destination specialists are available 24/7.
            </p>
          </div>
          <a
            href="https://wa.me/923008356672?text=Hello%20VELMORA,%20I%20have%20a%20question%20regarding%20tour%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors whitespace-nowrap shadow-md"
          >
            Chat with Curator on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
