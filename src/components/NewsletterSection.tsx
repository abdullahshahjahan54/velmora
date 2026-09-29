import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, Send } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <section className="py-20 bg-[#070b13] relative overflow-hidden border-t border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Dispatches</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>

        <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Get Travel Inspiration in Your Inbox
        </h2>

        <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
          Receive seasonal Northern Pakistan bloom alerts, secret high-altitude itineraries, and early invitations for limited VIP departures.
        </p>

        {subscribed ? (
          <div className="mt-8 p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 max-w-md mx-auto flex items-center justify-center gap-2 text-emerald-300 text-xs sm:text-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Thank you for subscribing to VELMORA Travel Dispatches.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <div className="relative w-full">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your personal email address..."
                className="w-full bg-[#0d1424] border border-white/20 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-amber-500/25 whitespace-nowrap flex items-center justify-center gap-2"
            >
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="mt-3 text-[11px] text-neutral-500">
          Zero spam. Unsubscribe at any time with a single click.
        </p>
      </div>
    </section>
  );
};
