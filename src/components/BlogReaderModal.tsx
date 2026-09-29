import React from 'react';
import { X, Calendar, Clock, User, ArrowRight, Share2, Sparkles, BookOpen } from 'lucide-react';
import { BlogArticle } from '../types/travel';

interface BlogReaderModalProps {
  article: BlogArticle | null;
  onClose: () => void;
  onBookRelated: () => void;
}

export const BlogReaderModal: React.FC<BlogReaderModalProps> = ({
  article,
  onClose,
  onBookRelated,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0b111e] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md transition-colors border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Featured Hero Header */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b111e] via-[#0b111e]/40 to-black/30" />

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-3 text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2">
              <span>{article.category}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
            </div>
            <h1 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Article Meta Bar */}
        <div className="px-6 sm:px-8 py-3 bg-white/5 border-b border-white/10 flex flex-wrap items-center justify-between text-xs text-neutral-400 gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <User className="w-3.5 h-3.5 text-amber-400" />
              <span>{article.author}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-neutral-400" />
              <span>{article.date}</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-neutral-400">SEO Travel Guide</span>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Excerpt Lead */}
          <p className="text-base sm:text-lg text-amber-100/90 font-light italic leading-relaxed border-l-2 border-amber-400 pl-4">
            "{article.excerpt}"
          </p>

          {/* Structured Sections */}
          {article.sections.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white tracking-wide">
                {sec.heading}
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                {sec.content.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {sec.tips && sec.tips.length > 0 && (
                <div className="mt-4 p-4 rounded-xl bg-amber-400/10 border border-amber-400/25">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>VELMORA Insider Curator Tip</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-neutral-200">
                    {sec.tips.map((tip, tIdx) => (
                      <li key={tIdx}>• {tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* Related Tags */}
          <div className="pt-6 border-t border-white/10">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              Related Search Queries:
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-neutral-300">
              {article.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Bottom Bar */}
        <div className="p-6 bg-[#080d17] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            Want VELMORA to plan this exact journey for you with private 5-star arrangements?
          </p>

          <button
            onClick={() => {
              onClose();
              onBookRelated();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2"
          >
            <span>Plan This Itinerary</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
