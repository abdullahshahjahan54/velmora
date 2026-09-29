import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/blogData';
import { BlogArticle } from '../types/travel';
import { BlogReaderModal } from './BlogReaderModal';

interface BlogSectionProps {
  onPlanTrip: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onPlanTrip }) => {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <section id="blog" className="py-24 bg-[#090f1a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Expert Mountain & Global Guides</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Pakistan Travel Guide & Blog
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-2xl font-light">
              In-depth destination insights, seasonal tips, road trip routes, and cultural advice written by VELMORA's senior expedition curators.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>{BLOG_ARTICLES.length} Comprehensive Articles</span>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_ARTICLES.slice(0, visibleCount).map((article) => (
            <article
              key={article.id}
              className="group bg-[#0e1626] rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1626] via-transparent to-transparent" />

                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-amber-400">
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-neutral-300 line-clamp-3 leading-relaxed font-light">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400 font-medium">By {article.author.split('·')[0]}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedArticle(article);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 group-hover:text-amber-300 hover:underline"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button if applicable */}
        {visibleCount < BLOG_ARTICLES.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount(BLOG_ARTICLES.length)}
              className="px-6 py-3 rounded-xl border border-white/20 hover:border-amber-400/50 text-xs font-semibold uppercase tracking-wider text-white hover:text-amber-300 transition-colors"
            >
              View All {BLOG_ARTICLES.length} Travel Guides
            </button>
          </div>
        )}
      </div>

      {/* Reader Modal */}
      <BlogReaderModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onBookRelated={onPlanTrip}
      />
    </section>
  );
};
