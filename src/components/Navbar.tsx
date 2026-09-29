import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Compass, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (packageTitle?: string) => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onNavigate,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Destinations', id: 'destinations' },
    { label: 'Tours', id: 'tours' },
    { label: 'Experiences', id: 'experiences' },
    { label: 'About', id: 'about' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/40'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Single clean element) */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.2em] text-white">
                VELMORA
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Clean text links) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-sm font-medium transition-colors tracking-wide relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 ${
                  activeSection === link.id
                    ? 'text-amber-400 font-semibold'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/923008356672?text=Hello%20VELMORA,%20I%20would%20like%20to%20inquire%20about%20a%20luxury%20tour."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white px-3 py-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+92 300 8356672</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all duration-200 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <span>Book a Trip</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3.5 py-1.5 rounded-md text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors sm:hidden"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1d]/98 border-b border-white/15 px-5 pt-4 pb-6 mt-3 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-amber-500/15 text-amber-400 font-semibold border-l-2 border-amber-400'
                    : 'text-neutral-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="https://wa.me/923008356672?text=Hello%20VELMORA,%20I%20would%20like%20to%20inquire%20about%20a%20luxury%20tour."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-semibold"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Concierge: +92 300 8356672</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-lg text-center font-semibold text-xs tracking-wider uppercase bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors shadow-md shadow-amber-500/20"
            >
              Plan Your Journey Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
