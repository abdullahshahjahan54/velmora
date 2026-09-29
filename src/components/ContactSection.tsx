import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Sparkles,
  Send,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#080d17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Concierge Access</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Plan Your Journey With VELMORA
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            Our luxury travel curators in Islamabad are at your service to craft bespoke itineraries, private flights, and multi-generational family holidays.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Office Contact Details & Map (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0e1626] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
              <h3 className="font-cinzel text-xl font-bold text-white tracking-wide">
                Headquarters & Concierge
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">Office Address</p>
                    <p className="text-white font-medium mt-0.5">
                      Level 4, Beverly Centre, Blue Area
                    </p>
                    <p className="text-neutral-400">Islamabad, 44000, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">Phone & WhatsApp</p>
                    <a
                      href="tel:+923008356672"
                      className="text-white font-medium hover:text-amber-400 transition-colors block mt-0.5"
                    >
                      +92 300 8356672
                    </a>
                    <a
                      href="https://wa.me/923008356672"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 text-xs hover:underline"
                    >
                      Instant WhatsApp Concierge
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-400/10 border border-blue-400/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">Email Correspondence</p>
                    <a
                      href="mailto:concierge@velmora.travel"
                      className="text-white font-medium hover:text-amber-400 transition-colors block mt-0.5"
                    >
                      concierge@velmora.travel
                    </a>
                    <a
                      href="mailto:bookings@velmora.travel"
                      className="text-neutral-400 text-xs hover:text-white transition-colors"
                    >
                      bookings@velmora.travel
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-purple-400/10 border border-purple-400/20 text-purple-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">Consultation Hours</p>
                    <p className="text-white font-medium mt-0.5">Monday – Saturday: 9:00 AM – 8:00 PM</p>
                    <p className="text-amber-300 text-[11px]">24/7 Priority Emergency Support on active tours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual Preview */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 h-52 bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                alt="Islamabad Blue Area Beverly Centre Map Location"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#080d17]/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl mb-2">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-white">Beverly Centre, Blue Area, Islamabad</p>
                <a
                  href="https://maps.google.com/?q=Beverly+Centre+Blue+Area+Islamabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-[11px] text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#0e1626] rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-xl">
              <h3 className="font-cinzel text-xl font-bold text-white mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light mb-6">
                Tell us about your upcoming journey. A specialized travel curator will respond within a few hours.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Message Dispatched Successfully</h4>
                  <p className="text-xs text-neutral-300 max-w-sm mx-auto">
                    Thank you, {formState.name}. We have routed your inquiry to our lead tour planner and will reach out shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="mt-2 text-xs font-semibold text-amber-400 hover:underline"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#080d17] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-[#080d17] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+92 300 0000000"
                      className="w-full bg-[#080d17] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                      Your Message or Travel Questions *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Please let us know which destinations or packages you are interested in..."
                      className="w-full bg-[#080d17] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Travel Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
