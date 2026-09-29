import React, { useState } from 'react';
import { Sparkles, MessageCircle, Bot, X } from 'lucide-react';

interface FloatingActionsProps {
  onOpenAiAssistant: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenAiAssistant }) => {
  const [showAiTooltip, setShowAiTooltip] = useState(false);
  const [showWaTooltip, setShowWaTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      'Hello VELMORA! I would like to inquire about luxury Pakistan and international tour packages.'
    );
    window.open(`https://wa.me/923008356672?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
      {/* 1. AI Assistant Button (Positioned Directly ABOVE WhatsApp) */}
      <div className="relative flex items-center gap-2 group">
        {/* Tooltip / Label */}
        <div
          className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e172a] border border-amber-400/40 text-amber-300 text-xs font-semibold shadow-xl shadow-black/60 transition-all duration-200 ${
            showAiTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>VELMORA AI Assistant</span>
        </div>

        <button
          onClick={onOpenAiAssistant}
          onMouseEnter={() => setShowAiTooltip(true)}
          onMouseLeave={() => setShowAiTooltip(false)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-300 hover:from-amber-400 hover:to-amber-200 text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-500/40 hover:shadow-amber-500/60 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label="Open AI Travel Assistant"
        >
          {/* Subtle Outer Glow Ring */}
          <span className="absolute -inset-1 rounded-full bg-amber-400/30 blur-sm animate-pulse" />

          {/* Icon */}
          <div className="relative flex items-center justify-center">
            <Bot className="w-6 h-6 text-slate-950" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>

          {/* Mini 'AI' badge */}
          <span className="absolute -bottom-1 px-1.5 py-0.2 rounded-full bg-slate-950 text-[9px] font-black text-amber-400 border border-amber-400/40 uppercase tracking-tighter shadow">
            AI
          </span>
        </button>
      </div>

      {/* 2. WhatsApp Button (Positioned on the Right Side at Bottom) */}
      <div className="relative flex items-center gap-2 group">
        {/* Tooltip / Label */}
        <div
          className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e172a] border border-emerald-500/40 text-emerald-400 text-xs font-semibold shadow-xl shadow-black/60 transition-all duration-200 ${
            showWaTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0'
          }`}
        >
          <span>Chat on WhatsApp</span>
        </div>

        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowWaTooltip(true)}
          onMouseLeave={() => setShowWaTooltip(false)}
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          aria-label="Chat with VELMORA on WhatsApp"
        >
          {/* Subtle Outer Pulsing Ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 blur-sm animate-pulse" />

          {/* Official WhatsApp SVG Vector Icon */}
          <svg
            className="w-7 h-7 fill-current relative"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.476-.15-.677.15-.201.3-.777.98-.953 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.5-1.786-1.676-2.087-.175-.3-.019-.462.132-.612.136-.135.301-.351.452-.526.15-.176.201-.3.301-.501.101-.2.05-.376-.025-.526-.076-.15-.677-1.63-.928-2.235-.244-.589-.493-.509-.677-.518-.175-.009-.376-.01-.577-.01-.201 0-.527.075-.802.375-.276.3-1.054 1.03-1.054 2.511s1.079 2.912 1.23 3.113c.15.2 2.124 3.243 5.145 4.549.718.31 1.279.496 1.716.634.722.23 1.378.197 1.898.12.579-.087 1.78-.727 2.031-1.429.251-.702.251-1.303.176-1.429-.076-.125-.276-.2-.577-.35zM12.04 2C6.516 2 2.03 6.486 2.03 12.01c0 1.98.577 3.827 1.576 5.385L2 22l4.75-1.547c1.503.923 3.268 1.458 5.29 1.458 5.524 0 10.01-4.486 10.01-10.01C22.05 6.486 17.564 2 12.04 2zm0 18.272c-1.77 0-3.415-.494-4.821-1.354l-.346-.211-3.238 1.055 1.075-3.155-.231-.368A8.257 8.257 0 0 1 3.78 12.01c0-4.557 3.704-8.261 8.26-8.261 4.556 0 8.261 3.704 8.261 8.261 0 4.557-3.705 8.262-8.261 8.262z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
