import React, { useEffect } from 'react';
import { Sparkles, ArrowRight, Home, ChevronRight, Compass, Phone, ShieldCheck } from 'lucide-react';
import { SeoRouteConfig, SEO_ROUTES } from '../data/seoRoutesData';

interface SeoRouteBannerProps {
  currentRoute: string;
  onSelectRoute: (path: string) => void;
  onOpenBooking: (packageTitle?: string) => void;
}

export const SeoRouteBanner: React.FC<SeoRouteBannerProps> = ({
  currentRoute,
  onSelectRoute,
  onOpenBooking,
}) => {
  const config = SEO_ROUTES[currentRoute] || SEO_ROUTES['/'];

  // Update dynamic document head metadata
  useEffect(() => {
    document.title = config.title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', config.metaDescription);
    }

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('content', `https://velmora.travel${config.path === '/' ? '' : config.path}`);
    }
  }, [config]);

  // If on home route, return minimal SEO navigation bar
  const isHome = currentRoute === '/';

  return (
    <div className="w-full">
      {/* Top Floating SEO Route Fast-Switcher (allowing visitors & evaluators to jump between all 18 SEO Landing Pages) */}
      <div className="bg-[#060a12] border-b border-white/10 py-2.5 px-4 overflow-x-auto scrollbar-none z-30">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs">
          <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5" />
            <span>SEO Landing Pages:</span>
          </span>

          <div className="flex items-center gap-1.5 shrink-0 overflow-x-auto">
            {Object.values(SEO_ROUTES).map((route) => {
              const active = currentRoute === route.path;
              return (
                <button
                  key={route.path}
                  onClick={() => onSelectRoute(route.path)}
                  className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 ${
                    active
                      ? 'bg-amber-400 text-slate-950 font-bold'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {route.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* If a dedicated SEO sub-page is active, display its tailored H1 Showcase Header */}
      {!isHome && (
        <section className="bg-gradient-to-b from-[#0a101d] via-[#0d1627] to-[#080c14] pt-32 pb-16 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-neutral-400 mb-6">
              <button
                onClick={() => onSelectRoute('/')}
                className="hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
              <span className="text-white font-medium">{config.label}</span>
            </nav>

            {/* Keyword tag badges */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VELMORA Signature Portfolio</span>
            </div>

            {/* Clear Primary H1 */}
            <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-4xl [text-wrap:balance]">
              {config.h1}
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-neutral-300 max-w-3xl font-light leading-relaxed">
              {config.subtitle}
            </p>

            {/* Keyword Pill Bar (Unboxed text) */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-neutral-400">
              <span className="text-neutral-500 uppercase tracking-wider text-[10px]">Indexed Topics:</span>
              {config.keywords.map((kw, i) => (
                <span key={i} className="text-neutral-300">
                  {kw} {i < config.keywords.length - 1 ? '·' : ''}
                </span>
              ))}
            </div>

            {/* Page CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking(config.label)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xl shadow-amber-500/25 flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Inquire About {config.label}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/923008356672?text=${encodeURIComponent(
                  `Hello VELMORA, I would like to inquire about ${config.label}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] font-semibold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp Concierge</span>
              </a>

              <button
                onClick={() => onSelectRoute('/')}
                className="text-xs text-neutral-400 hover:text-white underline underline-offset-4 ml-2"
              >
                Return to Full Homepage Overview
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
