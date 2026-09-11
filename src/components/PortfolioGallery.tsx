import React, { useState } from 'react';
import { PORTFOLIO_LOOKS, BUSINESS_INFO } from '../data/portfolioData';
import { LookCategory, PortfolioLook } from '../types';

interface PortfolioGalleryProps {
  onSelectLook: (look: PortfolioLook) => void;
  onOpenComparison: () => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  onSelectLook,
  onOpenComparison
}) => {
  const [activeFilter, setActiveFilter] = useState<LookCategory>('all');

  const filterTabs: { key: LookCategory; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'bridal', label: 'Bridal' },
    { key: 'party', label: 'Party' },
    { key: 'video', label: 'Video' }
  ];

  const filteredLooks = activeFilter === 'all'
    ? PORTFOLIO_LOOKS
    : PORTFOLIO_LOOKS.filter(look => look.category === activeFilter);

  return (
    <section className="px-5 py-6 max-w-lg mx-auto w-full" id="portfolio">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-3">
        <div>
          <span className="font-sans text-[11px] text-secondary font-semibold uppercase tracking-[0.2em]">
            Real Work &amp; Transformations
          </span>
          <h2 className="font-serif text-[28px] sm:text-[32px] font-medium text-primary leading-tight">
            A Look at My Work
          </h2>
        </div>
        <button
          onClick={onOpenComparison}
          className="px-3 py-1.5 rounded-full bg-secondary-fixed text-primary text-[11px] font-sans uppercase font-bold tracking-wider hover:bg-secondary-fixed-dim transition-colors flex items-center gap-1 shadow-2xs"
          title="Compare Before & After transformation"
        >
          <span className="material-symbols-outlined text-[15px]">compare</span>
          <span>Before/After</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {filterTabs.map(tab => {
          const isActive = activeFilter === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-4 py-2 rounded-full font-sans text-[12px] font-semibold whitespace-nowrap transition-all duration-200 shadow-2xs ${
                isActive
                  ? 'bg-primary text-on-primary scale-[1.02]'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Gallery Cards Grid */}
      <div className="mt-4 space-y-4">
        {filteredLooks.map((look) => (
          <article
            key={look.id}
            className="group relative p-3 rounded-2xl bg-surface border border-outline-variant/30 cursor-pointer transition-all hover:shadow-md hover:border-secondary/40"
            onClick={() => onSelectLook(look)}
          >
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-highest shadow-inner">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt={look.title}
                src={look.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent"></div>

              {/* Badge */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-md flex items-center gap-1 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span className="font-sans text-[10px] uppercase font-bold text-primary tracking-wider">
                  {look.badge || look.categoryLabel}
                </span>
              </div>

              {look.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary/80 backdrop-blur-md text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[28px] ml-0.5">play_arrow</span>
                  </div>
                </div>
              )}

              {/* Card Footer Details */}
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-secondary-fixed font-semibold">
                    {look.categoryLabel}
                  </span>
                  <h3 className="font-serif text-[20px] text-white leading-tight mt-0.5">
                    {look.title}
                  </h3>
                </div>
                <span className="w-9 h-9 rounded-full bg-surface/90 text-primary flex items-center justify-center shadow-md shrink-0">
                  <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                </span>
              </div>
            </div>

            <div className="mt-2.5 px-1 flex items-center justify-between text-[12px] text-on-surface-variant">
              <span className="line-clamp-1">{look.subtitle}</span>
              <span className="font-sans font-semibold text-secondary shrink-0 ml-2">
                {look.skinFinish}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Video Transformation Section Callout */}
      <div className="mt-6 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 text-center">
        <h3 className="font-serif text-[18px] text-primary">
          See More Transformations on Instagram
        </h3>
        <p className="font-sans text-[12px] text-on-surface-variant mt-1 mb-3">
          Watch client reveal videos, reel transformations, and behind-the-scenes artistry.
        </p>
        <a
          href={BUSINESS_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-on-primary font-sans text-[11px] uppercase font-bold tracking-wider hover:bg-primary-container transition-colors shadow-xs"
        >
          <span className="material-symbols-outlined text-[15px]">photo_camera</span>
          <span>Follow @khushimakeuparts</span>
        </a>
      </div>
    </section>
  );
};
