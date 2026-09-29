import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Send,
  Sparkles,
  Compass,
  MessageCircle,
  Bot,
  User,
  ArrowRight,
  RefreshCw,
  Phone,
  CheckCircle2,
  Calendar,
  MapPin
} from 'lucide-react';
import { TOUR_PACKAGES } from '../data/toursData';
import { DESTINATIONS } from '../data/destinationsData';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  suggestedTourId?: string;
  timestamp: string;
}

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookTour: (tourTitle: string) => void;
  onSelectDestination: (destId: string) => void;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({
  isOpen,
  onClose,
  onBookTour,
  onSelectDestination,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Assalam-o-Alaikum & Welcome to VELMORA! 🏔️✨ I am your dedicated AI Travel Curator. Tell me about your dream vacation—whether you are planning a luxury honeymoon in Hunza, a family holiday in Swat, an expedition to Skardu & Deosai, or an international escape to Dubai, Turkey, or Maldives. How may I assist your journey today?',
      timestamp: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    'Recommend a 7-day luxury tour to Hunza & Skardu',
    'Best honeymoon package: Maldives or Turkey?',
    'Family vacation with kids: Swat or Naran Kaghan?',
    'What is the best month to visit Deosai Plains?',
    'Can I customize a private 4x4 Land Cruiser expedition?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  if (!isOpen) return null;

  // Intelligent Travel Recommendation Engine
  const generateAssistantResponse = (userQuery: string): { reply: string; suggestedTourId?: string } => {
    const q = userQuery.toLowerCase();

    // Hunza queries
    if (q.includes('hunza') || q.includes('attabad') || q.includes('passu') || q.includes('karimabad')) {
      return {
        reply: `Hunza Valley is the crown jewel of Pakistan's Karakoram! For luxury travelers, we recommend our **Hunza Explorer Luxury Expedition (8 Days / 7 Nights)** starting from **$1,250/person**.\n\n✨ **Highlights:**\n• Private motorboat safari on turquoise Attabad Lake\n• Stays at Luxus Grand Attabad & Serena Baltit Inn Karimabad\n• Spectacular sunset tea at Eagle's Nest overlooking Rakaposhi\n• VIP excursion to Khunjerab Pass (4,693m) China Border\n• Chauffeured Toyota Land Cruiser Prado throughout.\n\n**Best Seasons:** April (Cherry/Apricot blossoms) or October (Golden Autumn). Would you like to view this package or book directly?`,
        suggestedTourId: 'hunza-explorer',
      };
    }

    // Skardu queries
    if (q.includes('skardu') || q.includes('deosai') || q.includes('kachura') || q.includes('katpana') || q.includes('shangrila')) {
      return {
        reply: `Skardu is an ethereal mountain paradise! Our **Skardu Shangri-La & Cold Desert Tour (7 Days / 6 Nights)** is priced at **$1,400/person**.\n\n🏔️ **What makes it unforgettable:**\n• Serene chalet stays at Shangrila Resort overlooking Lower Kachura Lake\n• 400-year-old royal living in Serena Shigar Fort\n• Private 4x4 safari across Deosai National Park (4,000m) & Sheosar Lake\n• Sunset bonfire in the surreal Katpana Cold Desert Dunes\n\n**Best Time:** May to October (Deosai is carpeted in wild alpine flowers from July to August).`,
        suggestedTourId: 'skardu-adventure',
      };
    }

    // Kashmir / Neelum queries
    if (q.includes('kashmir') || q.includes('neelum') || q.includes('arang kel') || q.includes('sharda')) {
      return {
        reply: `Neelum Valley in Azad Kashmir is often celebrated as Paradise on Earth! Our **Kashmir & Neelum Valley Escape (6 Days / 5 Nights)** starts at **$890/person**.\n\n🌲 **Highlights:**\n• Cable car & gentle pine forest trek to the fairytale village of Arang Kel\n• Historical exploration of the 6th-century Sharda Peeth University ruins\n• Riverside trout barbecues & private bonfires along the rushing Neelum River\n• Stays in PC Muzaffarabad and boutique pine chalets.`,
        suggestedTourId: 'kashmir-escape',
      };
    }

    // Swat / Malam Jabba queries
    if (q.includes('swat') || q.includes('malam jabba') || q.includes('kalam') || q.includes('mahodand')) {
      return {
        reply: `Swat Valley is rightfully known as the "Switzerland of the East"! Our **Swat Emerald Valley & Malam Jabba Retreat (5 Days / 4 Nights)** is available from **$850/person**.\n\n⛷️ **Tour Highlights:**\n• 5-star mountain luxury at Pearl Continental Malam Jabba with scenic chairlifts & ziplining\n• Walking through the towering deodar pines of Ushu Forest in Kalam\n• Rugged 4x4 jeep adventure to turquoise Mahodand Lake with trout fishing\n• Fast, smooth travel via the modern Swat Motorway from Islamabad in just 3.5 hours.`,
        suggestedTourId: 'swat-malam-jabba-retreat',
      };
    }

    // Naran / Kaghan / Saif ul Malook queries
    if (q.includes('naran') || q.includes('kaghan') || q.includes('saif') || q.includes('babusar')) {
      return {
        reply: `Naran Kaghan is famous for the legendary Lake Saif-ul-Malook and the high Babusar Pass (4,173m)! We offer comfortable 4 to 6 day family and couple retreats.\n\n🌊 Highlights include jeep rides to the fairy lake, Kunhar river rafting, fresh trout feasts, and crossing into Gilgit via Babusar Top. Best visited between June and October when all passes are open.`,
        suggestedTourId: 'northern-pakistan-family-tour',
      };
    }

    // Fairy Meadows queries
    if (q.includes('fairy meadows') || q.includes('nanga parbat') || q.includes('trek')) {
      return {
        reply: `The **Fairy Meadows & Nanga Parbat Base Camp Trek (6 Days / 5 Nights)** starting from **$990/person** is our premier adventure expedition!\n\n🥾 Highlights:\n• Exhilarating mountain jeep ride from Raikot Bridge\n• Cozy private log cabins with wood-burning stoves at Raikot Sarai\n• Unobstructed front-row views of Nanga Parbat (8,126m Killer Mountain)\n• Day hike to Beyal Camp and the base camp reflection lake under starry skies.`,
        suggestedTourId: 'fairy-meadows-nanga-parbat',
      };
    }

    // Maldives queries
    if (q.includes('maldives') || q.includes('overwater')) {
      return {
        reply: `The Maldives is the world's most romantic escape! Our **Maldives Overwater Paradise Honeymoon (5 Days / 4 Nights)** is **$2,800/person**.\n\n🏝️ **Included Luxuries:**\n• Private overwater villa with plunge pool and glass floor ocean view\n• Scenic seaplane transfers directly from Male\n• Candlelight 5-course romantic dinner on a private desert sandbank\n• Floating villa breakfast & guided coral reef snorkeling\n• Visa on arrival is complimentary for all nationalities.`,
        suggestedTourId: 'maldives-honeymoon-escape',
      };
    }

    // Turkey queries
    if (q.includes('turkey') || q.includes('cappadocia') || q.includes('istanbul')) {
      return {
        reply: `Turkey is where ancient empires meet dreamlike romance! Our **Turkey Discovery & Cappadocia Sunrise Flight (7 Days / 6 Nights)** is **$2,100/person**.\n\n🎈 **Highlights:**\n• Guaranteed sunrise hot air balloon flight over Cappadocia's fairy chimneys\n• Staying in an authentic luxury cave suite at Museum Hotel\n• Private sunset motor yacht cruise along the Bosphorus strait in Istanbul\n• Skip-the-line VIP historian tours of Hagia Sophia, Blue Mosque & Topkapi Palace.`,
        suggestedTourId: 'turkey-discovery-tour',
      };
    }

    // Dubai queries
    if (q.includes('dubai') || q.includes('burj') || q.includes('safari')) {
      return {
        reply: `Our **Dubai Royal Skyline & Desert Safari (5 Days / 4 Nights)** starting at **$1,850/person** offers the pinnacle of Gulf luxury!\n\n🌆 **Highlights:**\n• VIP Skip-the-line tickets to Burj Khalifa Level 148 Sky Lounge\n• 2-Hour private luxury yacht charter around Palm Jumeirah & Atlantis\n• Private VIP red dune desert safari in Land Cruiser with Bedouin feast\n• 5-star beachfront stays at Atlantis The Royal or Jumeirah Beach Hotel.`,
        suggestedTourId: 'dubai-luxury-escape',
      };
    }

    // Honeymoon queries
    if (q.includes('honeymoon') || q.includes('couple') || q.includes('anniversary') || q.includes('romantic')) {
      return {
        reply: `Congratulations on celebrating love! 💍 For honeymoons, VELMORA recommends:\n\n1. **In Pakistan:** Hunza Valley (Overwater suites at Luxus Attabad Lake + Eagle's Nest) or Serena Shigar Fort Skardu (400-year-old royal palace).\n2. **International:** Maldives Overwater Pool Villa ($2,800/person) or Cappadocia Cave Suite in Turkey with hot air ballooning ($2,100/person).\n\nAll our honeymoon packages include romantic room decor, candlelight dinners, and complimentary photography sessions!`,
        suggestedTourId: 'maldives-honeymoon-escape',
      };
    }

    // Family queries
    if (q.includes('family') || q.includes('kids') || q.includes('children') || q.includes('parents') || q.includes('elderly')) {
      return {
        reply: `For families, comfort and gentle pacing are essential. Our **Northern Pakistan Grand Family Tour (10 Days / 9 Nights)** ($1,650/person) is engineered specifically with:\n\n👨‍👩‍👧‍👦 **Family Comforts:**\n• Executive high-roof Toyota HiAce or luxury Coaster with reclining seats\n• 5-star heated rooms at Serena Hotels and Luxus Grand\n• Safe, child-friendly excursions (Attabad Lake boating, Saif-ul-Malook pony rides)\n• Tailored meals for kids & 24/7 dedicated on-trip family care assistant.`,
        suggestedTourId: 'northern-pakistan-family-tour',
      };
    }

    // Customization / Booking / Prices
    if (q.includes('custom') || q.includes('private') || q.includes('price') || q.includes('cost') || q.includes('how to book')) {
      return {
        reply: `All VELMORA journeys can be customized 100% to your schedule and preferences! We offer:\n\n• Private 4x4 Toyota Land Cruiser Prados & certified drivers\n• Choice of 4-star, 5-star, or heritage palace accommodations\n• Transparent pricing with zero hidden taxes or fuel surcharges\n• Instant reservation confirmation with 24/7 concierge support.\n\nYou can click "Book a Trip" on the site, or chat directly with our senior curator on WhatsApp at **+92 300 8356672**!`,
      };
    }

    // Default friendly response
    return {
      reply: `Thank you for sharing! VELMORA specializes in premier vacations across Pakistan (Hunza, Skardu, Swat, Kashmir, Fairy Meadows, Naran) and global escapes (Dubai, Turkey, Maldives, Malaysia, Thailand, Azerbaijan).\n\nWould you like me to recommend a tailored itinerary based on your preferred travel dates, traveler count, or budget?`,
    };
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input.trim();
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAssistantResponse(userText);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: response.reply,
        suggestedTourId: response.suggestedTourId,
        timestamp: 'Just now',
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleQuickPromptClick = (prompt: string) => {
    setInput(prompt);
  };

  const getSuggestedTour = (tourId?: string) => {
    if (!tourId) return null;
    return TOUR_PACKAGES.find((t) => t.id === tourId);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-md flex items-end sm:items-center justify-center sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full sm:max-w-2xl bg-[#0a101d] border border-white/15 rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[90vh] sm:h-[680px]">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-[#0d1627] via-[#101b33] to-[#0d1627] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-500/20">
                <Bot className="w-5 h-5 text-slate-950" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#0a101d]" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-white tracking-wide">
                  VELMORA AI Assistant
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  AI Curator
                </span>
              </div>
              <p className="text-[11px] text-neutral-400">
                Smart Itinerary & Destination Specialist · 24/7 Instant Answers
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/923008356672?text=Hello%20VELMORA,%20I%20am%20chatting%20with%20your%20AI%20and%20would%20like%20to%20speak%20with%20a%20human%20curator."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] text-xs font-semibold transition-colors"
              title="Chat on WhatsApp"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Human Curator</span>
            </a>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Close AI Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((msg) => {
            const isAi = msg.sender === 'ai';
            const suggestedTour = getSuggestedTour(msg.suggestedTourId);

            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isAi ? 'justify-start' : 'justify-end'}`}
              >
                {isAi && (
                  <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-1">
                    <Sparkles className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[85%] space-y-2`}>
                  <div
                    className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                      isAi
                        ? 'bg-[#111a2e] text-neutral-200 border border-white/10 rounded-tl-sm'
                        : 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-medium rounded-tr-sm shadow-md'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* If this AI response suggests a specific Tour Package Card */}
                  {isAi && suggestedTour && (
                    <div className="p-3.5 rounded-xl bg-black/40 border border-amber-400/30 flex items-center justify-between gap-3 shadow-lg">
                      <div className="flex items-center gap-3">
                        <img
                          src={suggestedTour.heroImage}
                          alt={suggestedTour.title}
                          className="w-14 h-14 rounded-lg object-cover border border-white/20 shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h4 className="font-cinzel text-xs font-bold text-white line-clamp-1">
                            {suggestedTour.title}
                          </h4>
                          <p className="text-[11px] text-amber-300 font-semibold mt-0.5">
                            {suggestedTour.priceFormatted} · {suggestedTour.duration}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          onClose();
                          onBookTour(suggestedTour.title);
                        }}
                        className="px-3.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-sm"
                      >
                        Book
                      </button>
                    </div>
                  )}

                  <div
                    className={`text-[10px] text-neutral-500 px-1 ${
                      isAi ? 'text-left' : 'text-right'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>

                {!isAi && (
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="p-3.5 rounded-2xl bg-[#111a2e] border border-white/10 flex items-center gap-1.5 text-xs text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse delay-150" />
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse delay-300" />
                <span className="ml-1 text-[11px]">VELMORA AI is preparing recommendations...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-4 py-2 bg-[#090e18] border-t border-white/5 overflow-x-auto scrollbar-none flex items-center gap-2">
          <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider shrink-0 flex items-center gap-1">
            <Compass className="w-3 h-3 text-amber-400" /> Suggestions:
          </span>
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleQuickPromptClick(prompt)}
              className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] text-neutral-300 hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-[#0a101d] border-t border-white/10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about destinations, packages, best seasons or pricing..."
              className="flex-1 bg-[#111a2e] border border-white/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
            />

            <button
              type="submit"
              disabled={!input.trim()}
              className="w-11 h-11 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 disabled:opacity-40 text-slate-950 flex items-center justify-center font-bold shadow-lg shadow-amber-500/20 transition-all shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <p className="mt-2 text-[10px] text-center text-neutral-500">
            VELMORA AI provides real-time guidance grounded in our licensed tour packages & seasonal schedules.
          </p>
        </div>
      </div>
    </div>
  );
};
