import React from 'react';
import { BUSINESS_INFO, ASSETS } from '../data/portfolioData';

interface HeroSectionProps {
  onExplore: () => void;
  onReserve: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore, onReserve }) => {
  return (
    <section className="relative px-5 pt-4 pb-8 overflow-hidden max-w-lg mx-auto w-full" id="home">
      {/* Atmospheric Ambient Glows */}
      <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-16 w-72 h-72 rounded-full bg-tertiary-fixed/30 blur-3xl pointer-events-none"></div>

      {/* Location Badge */}
      <div className="flex items-center justify-center mb-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low shadow-sm border border-outline-variant/30">
          <span className="material-symbols-outlined text-[15px] text-secondary">
            location_on
          </span>
          <span className="font-sans text-[11px] uppercase text-primary font-semibold tracking-widest">
            {BUSINESS_INFO.areaServed}
          </span>
        </div>
      </div>

      {/* Hero Master Frame */}
      <div className="relative w-full aspect-[4/5] rounded-t-[6.5rem] rounded-b-2xl overflow-hidden shadow-xl bg-surface-container-high group border border-outline-variant/20">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          alt="Khushi Gupta bridal makeup in Siwan"
          src={ASSETS.heroBride}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/25 to-black/15"></div>

        {/* Top Decorative Foil Watermark */}
        <div className="absolute top-5 left-6 right-6 flex justify-between items-center text-white/90">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-medium drop-shadow-sm">
            Siwan • Bihar
          </span>
          <span className="material-symbols-outlined text-[18px] text-tertiary-fixed drop-shadow">
            verified
          </span>
        </div>

        {/* Hero Bottom Content Card Overlay */}
        <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-xl bg-surface/92 backdrop-blur-md shadow-lg border border-white/40">
          <div className="flex items-center gap-1.5 text-on-surface-variant mb-1">
            <span className="material-symbols-outlined text-[16px] text-tertiary-container">
              auto_awesome
            </span>
            <span className="font-sans text-[11px] uppercase tracking-widest text-primary font-semibold">
              {BUSINESS_INFO.name}
            </span>
          </div>
          <h1 className="font-serif text-[28px] sm:text-[32px] text-primary leading-tight font-medium">
            Beauty, Enhanced. Confidence, Unforgettable.
          </h1>
          <p className="font-sans text-[13px] text-secondary font-medium mt-1">
            {BUSINESS_INFO.subhead}
          </p>
          <p className="font-sans text-[11px] text-on-surface-variant mt-1 tracking-wide">
            {BUSINESS_INFO.tags}
          </p>
        </div>
      </div>

      {/* Primary CTAs */}
      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={onReserve}
          className="flex-1 h-12 rounded-full bg-primary text-on-primary font-sans text-[14px] font-medium tracking-wide flex items-center justify-center gap-2 shadow-md hover:bg-primary-container active:scale-[0.98] transition-all"
        >
          <span>Book an Appointment</span>
          <span className="material-symbols-outlined text-[18px]">calendar_month</span>
        </button>
        <button
          onClick={onExplore}
          className="flex-1 h-12 rounded-full bg-surface-container-high text-primary font-sans text-[14px] font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-secondary-fixed active:scale-[0.98] transition-all border border-outline-variant/30"
        >
          <span>View My Work</span>
          <span className="material-symbols-outlined text-[18px]">photo_library</span>
        </button>
      </div>

      {/* Instant Contact Ribbon */}
      <div className="grid grid-cols-2 gap-2 mt-3">
        <a
          href={BUSINESS_INFO.instagramDmUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 rounded-xl bg-secondary-fixed/50 text-primary font-sans text-[12px] font-semibold flex items-center justify-center gap-1.5 hover:bg-secondary-fixed transition-colors border border-secondary/20 shadow-2xs"
        >
          <span className="material-symbols-outlined text-[16px]">chat</span>
          <span>Message on Instagram</span>
        </a>
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="h-10 rounded-xl bg-surface-container-low text-primary font-sans text-[12px] font-semibold flex items-center justify-center gap-1.5 hover:bg-surface-container-high transition-colors border border-outline-variant/30 shadow-2xs"
        >
          <span className="material-symbols-outlined text-[16px]">call</span>
          <span>Call 9162143273</span>
        </a>
      </div>

      {/* Editorial Stats Ribbon */}
      <div className="mt-4 p-3 rounded-xl bg-surface-container-low flex items-center justify-between shadow-sm border border-outline-variant/20">
        <div className="flex flex-col items-center flex-1 px-1">
          <span className="font-serif text-[22px] font-semibold text-primary leading-none">2+</span>
          <span className="font-sans text-[10px] text-on-surface-variant mt-1 text-center tracking-wider uppercase font-semibold">
            Years Exp.
          </span>
        </div>
        <div className="h-7 w-px bg-surface-container-highest"></div>
        <div className="flex flex-col items-center flex-1 px-1">
          <span className="font-serif text-[22px] font-semibold text-primary leading-none">Siwan</span>
          <span className="font-sans text-[10px] text-on-surface-variant mt-1 text-center tracking-wider uppercase font-semibold">
            Home-Service
          </span>
        </div>
        <div className="h-7 w-px bg-surface-container-highest"></div>
        <div className="flex flex-col items-center flex-1 px-1">
          <div className="flex items-center text-tertiary">
            <span className="font-serif text-[22px] font-semibold text-primary leading-none">1:1</span>
            <span className="material-symbols-outlined text-[14px] text-tertiary ml-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
          </div>
          <span className="font-sans text-[10px] text-on-surface-variant mt-1 text-center tracking-wider uppercase font-semibold">
            Custom Looks
          </span>
        </div>
      </div>

      {/* Intro Narrative Banner */}
      <div className="mt-5 p-5 rounded-2xl bg-surface shadow-sm border border-outline-variant/25 text-center">
        <div className="w-8 h-8 rounded-full bg-secondary-fixed/50 text-secondary mx-auto flex items-center justify-center mb-2">
          <span className="material-symbols-outlined text-[18px]">spa</span>
        </div>
        <h2 className="font-serif text-[20px] sm:text-[22px] text-primary leading-snug font-medium">
          You are already beautiful. Makeup simply brings your beauty forward.
        </h2>
        <p className="font-sans text-[13px] text-on-surface-variant leading-relaxed mt-2">
          Khushi believes makeup should enhance the beauty you already have, not hide who you are. Every look is built around your face, your features and your occasion &mdash; so what people notice, first and always, is you.
        </p>
      </div>
    </section>
  );
};

