import React from 'react';
import { Compass, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onFilterTourType: (type: string) => void;
  onSelectDestination: (destId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onFilterTourType,
  onSelectDestination,
}) => {
  return (
    <footer className="bg-[#05080f] text-neutral-300 pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Col 1 & 2: Brand Lockup & Editorial Statement */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-500/20">
                <Compass className="w-5 h-5 text-slate-950" />
              </div>
              <span className="font-cinzel text-2xl font-bold tracking-[0.2em] text-white">
                VELMORA
              </span>
            </div>

            <p className="font-editorial text-amber-300/90 text-sm italic">
              "Discover More. Travel Further. Live the Journey."
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              VELMORA is Pakistan's premier luxury travel and tours agency. We design mastercrafted journeys across Hunza, Skardu, Kashmir, and worldwide luxury destinations with 5-star hospitality and private 4x4 convoys.
            </p>

            {/* Social Media Channels (Facebook, Instagram, TikTok, YouTube, WhatsApp) */}
            <div className="pt-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 mb-2.5">
                Connect With Us
              </p>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="https://facebook.com/velmoratravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#1877F2]/20 border border-white/10 hover:border-[#1877F2]/50 text-neutral-300 hover:text-[#1877F2] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                  aria-label="Follow VELMORA on Facebook"
                  title="Facebook: @velmoratravel"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/velmoratravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#E4405F]/20 border border-white/10 hover:border-[#E4405F]/50 text-neutral-300 hover:text-[#E4405F] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                  aria-label="Follow VELMORA on Instagram"
                  title="Instagram: @velmoratravel"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com/@velmoratravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#00f2fe]/20 border border-white/10 hover:border-[#00f2fe]/50 text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                  aria-label="Follow VELMORA on TikTok"
                  title="TikTok: @velmoratravel"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@velmoratravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#FF0000]/20 border border-white/10 hover:border-[#FF0000]/50 text-neutral-300 hover:text-[#FF0000] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                  aria-label="Subscribe to VELMORA on YouTube"
                  title="YouTube: @velmoratravel"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/923008356672?text=Hello%20VELMORA,%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20tour%20packages."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/50 text-neutral-300 hover:text-[#25D366] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                  aria-label="Chat with VELMORA on WhatsApp"
                  title="WhatsApp: +92 300 8356672"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.476-.15-.677.15-.201.3-.777.98-.953 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.5-1.786-1.676-2.087-.175-.3-.019-.462.132-.612.136-.135.301-.351.452-.526.15-.176.201-.3.301-.501.101-.2.05-.376-.025-.526-.076-.15-.677-1.63-.928-2.235-.244-.589-.493-.509-.677-.518-.175-.009-.376-.01-.577-.01-.201 0-.527.075-.802.375-.276.3-1.054 1.03-1.054 2.511s1.079 2.912 1.23 3.113c.15.2 2.124 3.243 5.145 4.549.718.31 1.279.496 1.716.634.722.23 1.378.197 1.898.12.579-.087 1.78-.727 2.031-1.429.251-.702.251-1.303.176-1.429-.076-.125-.276-.2-.577-.35zM12.04 2C6.516 2 2.03 6.486 2.03 12.01c0 1.98.577 3.827 1.576 5.385L2 22l4.75-1.547c1.503.923 3.268 1.458 5.29 1.458 5.524 0 10.01-4.486 10.01-10.01C22.05 6.486 17.564 2 12.04 2zm0 18.272c-1.77 0-3.415-.494-4.821-1.354l-.346-.211-3.238 1.055 1.075-3.155-.231-.368A8.257 8.257 0 0 1 3.78 12.01c0-4.557 3.704-8.261 8.26-8.261 4.556 0 8.261 3.704 8.261 8.261 0 4.557-3.705 8.262-8.261 8.262z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-neutral-400">
              <span className="text-white font-medium">Licensed Tour Operator</span>
              <span>·</span>
              <span>Govt. of Pakistan Reg. #PK-TRV-8842</span>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              {['home', 'destinations', 'tours', 'experiences', 'why-us', 'gallery', 'blog', 'faq', 'contact'].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => onNavigate(item)}
                      className="hover:text-amber-400 transition-colors capitalize text-left"
                    >
                      {item.replace('-', ' ')}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Col 4: Popular Destinations */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Popular Destinations
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              {[
                { name: 'Hunza Valley Tours', id: 'hunza' },
                { name: 'Skardu & Deosai Tours', id: 'skardu' },
                { name: 'Kashmir & Neelum', id: 'kashmir' },
                { name: 'Swat Valley & Malam Jabba', id: 'swat' },
                { name: 'Naran Kaghan & Babusar', id: 'naran-kaghan' },
                { name: 'Dubai Luxury Escapes', id: 'dubai' },
                { name: 'Turkey & Cappadocia', id: 'turkey' },
                { name: 'Maldives Honeymoon', id: 'maldives' },
              ].map((dest) => (
                <li key={dest.id}>
                  <button
                    onClick={() => onSelectDestination(dest.id)}
                    className="hover:text-amber-400 transition-colors text-left"
                  >
                    {dest.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Tour Categories & Direct Contact */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Tour Categories
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              {[
                { name: 'Pakistan Tour Packages', type: 'pakistan' },
                { name: 'International Tours', type: 'international' },
                { name: 'Family Tour Packages', type: 'family' },
                { name: 'Honeymoon Packages', type: 'honeymoon' },
                { name: 'Adventure Treks Pakistan', type: 'adventure' },
                { name: 'Luxury Holidays', type: 'luxury' },
              ].map((cat) => (
                <li key={cat.type}>
                  <button
                    onClick={() => onFilterTourType(cat.type)}
                    className="hover:text-amber-400 transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-white/10 space-y-1.5 text-xs text-neutral-400">
              <p className="flex items-center gap-1.5 text-white">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>+92 300 8356672</span>
              </p>
              <p className="flex items-center gap-1.5 text-neutral-300">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>concierge@velmora.travel</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} VELMORA Travel & Tours Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-neutral-300 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-neutral-300 cursor-pointer transition-colors">Travel Insurance</span>
            <span className="hover:text-neutral-300 cursor-pointer transition-colors">Safety Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
