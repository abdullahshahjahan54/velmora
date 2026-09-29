import React, { useState } from 'react';
import {
  X,
  Send,
  MessageCircle,
  CheckCircle2,
  Calendar,
  Users,
  MapPin,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinationsData';
import { TOUR_PACKAGES } from '../data/toursData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillPackage?: string;
  prefillDestination?: string;
  prefillTravelers?: number;
  prefillDate?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefillPackage = '',
  prefillDestination = '',
  prefillTravelers = 2,
  prefillDate = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    whatsapp: '',
    destination: prefillDestination,
    tourPackage: prefillPackage,
    travelDate: prefillDate,
    adults: prefillTravelers || 2,
    children: 0,
    budget: '$1,500 - $3,000 / person',
    specialRequirements: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello VELMORA Concierge, I would like to book a trip!\n` +
      `• Name: ${formData.fullName || 'Guest'}\n` +
      `• Destination: ${formData.destination || 'Open to recommendations'}\n` +
      `• Tour: ${formData.tourPackage || 'Custom itinerary'}\n` +
      `• Travel Date: ${formData.travelDate || 'Flexible'}\n` +
      `• Guests: ${formData.adults} Adults, ${formData.children} Children\n` +
      `• Budget: ${formData.budget}\n` +
      (formData.specialRequirements ? `• Notes: ${formData.specialRequirements}` : '')
    );
    window.open(`https://wa.me/923008356672?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0b111e] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-6">
        {/* Header Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Elegant Submission Success State */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                Inquiry Received With Thanks
              </h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto font-light leading-relaxed">
                Dear <strong className="text-white">{formData.fullName}</strong>, our senior travel curator has received your request for{' '}
                <strong className="text-amber-400">{formData.destination || formData.tourPackage || 'your bespoke journey'}</strong>.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto text-left text-xs space-y-2 text-neutral-300">
              <p className="flex justify-between">
                <span className="text-neutral-400">Confirmation Reference:</span>
                <span className="font-bold text-amber-300">VEL-{Math.floor(100000 + Math.random() * 900000)}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-neutral-400">Response Window:</span>
                <span className="text-white">Within 3 Business Hours</span>
              </p>
              <p className="flex justify-between">
                <span className="text-neutral-400">Primary Contact:</span>
                <span className="text-white">{formData.phone || formData.email}</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleWhatsAppBooking}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Fast-Track on WhatsApp</span>
              </button>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 text-xs font-semibold text-white tracking-wider uppercase transition-colors"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <div className="p-6 sm:p-8 md:p-10 max-h-[85vh] overflow-y-auto">
            {/* Modal Heading */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bespoke Travel Consultation</span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-wide">
                Plan Your Journey With VELMORA
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-light mt-1">
                Fill in your preferences below and our concierge will curate a personalized itinerary with transparent pricing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Full Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Dr. Salman Qazi"
                    className={`w-full bg-[#080d17] border rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none transition-colors ${
                      errors.fullName ? 'border-rose-500' : 'border-white/15 focus:border-amber-400'
                    }`}
                  />
                  {errors.fullName && <p className="text-[10px] text-rose-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Email Address <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. salman@example.com"
                    className={`w-full bg-[#080d17] border rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-white/15 focus:border-amber-400'
                    }`}
                  />
                  {errors.email && <p className="text-[10px] text-rose-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Row 2: Phone & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Phone Number <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+92 300 1234567"
                    className={`w-full bg-[#080d17] border rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none transition-colors ${
                      errors.phone ? 'border-rose-500' : 'border-white/15 focus:border-amber-400'
                    }`}
                  />
                  {errors.phone && <p className="text-[10px] text-rose-400 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    WhatsApp Number (if different)
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="+92 300 1234567"
                    className="w-full bg-[#080d17] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Destination & Tour Package */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Target Destination
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full bg-[#080d17] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="">Select Destination (or All)</option>
                    <optgroup label="Pakistan Valleys & Peaks">
                      {DESTINATIONS.filter((d) => d.isPakistan).map((dest) => (
                        <option key={dest.id} value={dest.name}>
                          {dest.name} ({dest.region})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="International Escapes">
                      {DESTINATIONS.filter((d) => !d.isPakistan).map((dest) => (
                        <option key={dest.id} value={dest.name}>
                          {dest.name} ({dest.country})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Tour Package
                  </label>
                  <select
                    value={formData.tourPackage}
                    onChange={(e) => setFormData({ ...formData, tourPackage: e.target.value })}
                    className="w-full bg-[#080d17] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="">Customized Bespoke Itinerary</option>
                    {TOUR_PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.title}>
                        {pkg.title} ({pkg.duration})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Travel Date, Adults & Children */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Tentative Travel Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full bg-[#080d17] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Adults (12+ yrs)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={formData.adults}
                    onChange={(e) => setFormData({ ...formData, adults: parseInt(e.target.value, 10) || 1 })}
                    className="w-full bg-[#080d17] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Children (Under 12)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="20"
                    value={formData.children}
                    onChange={(e) => setFormData({ ...formData, children: parseInt(e.target.value, 10) || 0 })}
                    className="w-full bg-[#080d17] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              {/* Row 5: Budget Range & Special Requirements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Estimated Budget (Per Person)
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#080d17] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="$800 - $1,500 / person">Comfort Standard ($800 - $1,500 / person)</option>
                    <option value="$1,500 - $3,000 / person">Luxury Signature ($1,500 - $3,000 / person)</option>
                    <option value="$3,000+ / person">Ultra VIP / Bespoke Suites ($3,000+ / person)</option>
                    <option value="Flexible">Flexible / Quote Best Available</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Special Requirements (e.g. Honeymoon, Elderly, Halal)
                  </label>
                  <input
                    type="text"
                    value={formData.specialRequirements}
                    onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                    placeholder="e.g. Honeymoon decor, wheelchair accessibility, baby cot"
                    className="w-full bg-[#080d17] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Additional Details or Questions
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any preferred dates, specific hotels, or activities you'd like included..."
                  className="w-full bg-[#080d17] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              {/* Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Travel Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book via WhatsApp</span>
                </button>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-neutral-400">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Your private contact information is held with strict confidentiality.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
