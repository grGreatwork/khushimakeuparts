import React from 'react';
import { ASSETS, BUSINESS_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section className="px-5 py-8 mt-4 bg-surface-container-low max-w-lg mx-auto w-full rounded-3xl border border-outline-variant/25" id="about">
      {/* Eyebrow */}
      <div className="flex items-center gap-2 mb-2">
        <span className="h-px w-6 bg-secondary"></span>
        <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-secondary">
          The Artist
        </span>
      </div>

      <h2 className="font-serif text-[28px] sm:text-[32px] font-medium text-primary leading-tight mb-4">
        Meet Khushi
      </h2>

      {/* Arched Artist Portrait */}
      <div className="relative w-full aspect-[4/5] rounded-t-[5.5rem] rounded-b-2xl overflow-hidden shadow-lg mb-5 border border-outline-variant/30 group">
        <img
          alt="Khushi Gupta, Founder & Makeup Artist, Khushi Makeup Arts Siwan"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={ASSETS.artistPortrait}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <span className="font-sans text-[11px] uppercase tracking-widest text-secondary-fixed font-semibold">
            Founder &amp; Makeup Artist
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
            Khushi Gupta
          </h3>
          <p className="font-sans text-[12px] text-white/80">
            Khushi Makeup Arts • Siwan, Bihar
          </p>
        </div>
      </div>

      {/* Story with Drop Cap */}
      <div className="space-y-3.5 text-on-surface-variant font-sans text-[14px] leading-relaxed">
        <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-2.5 first-letter:leading-none">
          Khushi had an interest and a natural ability for makeup even before she formally learned the craft. Whenever she did makeup for people at occasional events, the appreciation she received became her biggest motivation.
        </p>
        <p>
          She realized that if people already appreciated her work before she had learned professional techniques, she could take her skills much further by properly studying makeup artistry, methods and different styles.
        </p>
        <p>
          She began developing her skills professionally, and has now been working as a makeup artist for around two years &mdash; continuing to learn and refine her craft with every client and every occasion. Along the way, she has attended makeup-related events where her work was recognized with trophies.
        </p>
      </div>

      {/* Stats Callouts */}
      <div className="mt-5 grid grid-cols-3 gap-2">
        <div className="p-3 rounded-2xl bg-surface border border-outline-variant/20 text-center shadow-2xs">
          <span className="font-serif text-[22px] font-bold text-primary block">2+</span>
          <span className="font-sans text-[10px] text-on-surface-variant uppercase font-semibold tracking-wider">Years Experience</span>
        </div>
        <div className="p-3 rounded-2xl bg-surface border border-outline-variant/20 text-center shadow-2xs">
          <span className="font-serif text-[22px] font-bold text-secondary block">Siwan</span>
          <span className="font-sans text-[10px] text-on-surface-variant uppercase font-semibold tracking-wider">Home-Service</span>
        </div>
        <div className="p-3 rounded-2xl bg-surface border border-outline-variant/20 text-center shadow-2xs">
          <span className="font-serif text-[22px] font-bold text-primary block">1:1</span>
          <span className="font-sans text-[10px] text-on-surface-variant uppercase font-semibold tracking-wider">Personalized</span>
        </div>
      </div>

      {/* Recognition Badges */}
      <div className="mt-4 flex flex-wrap gap-2">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface shadow-2xs border border-outline-variant/30">
          <span className="material-symbols-outlined text-[16px] text-tertiary">
            emoji_events
          </span>
          <span className="font-sans text-[11px] uppercase tracking-wider font-semibold text-primary">
            Trophy-Awarded Makeup Events
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface shadow-2xs border border-outline-variant/30">
          <span className="material-symbols-outlined text-[16px] text-secondary">
            verified
          </span>
          <span className="font-sans text-[11px] uppercase tracking-wider font-semibold text-primary">
            Nykaa Professional Products
          </span>
        </div>
      </div>

      {/* Philosophy Quote Box */}
      <div className="mt-5 p-4 rounded-2xl bg-surface shadow-sm border border-secondary/20 relative">
        <span className="font-serif italic text-[17px] sm:text-[18px] text-primary leading-snug block">
          &ldquo;You are already beautiful. Makeup is simply a way to enhance that beauty.&rdquo;
        </span>
        <p className="font-sans text-[12px] text-on-surface-variant mt-2 leading-relaxed">
          Khushi believes people are already beautiful as they are. Makeup should complement that beauty, highlight your best features, and help you feel confident on your special occasions.
        </p>
        <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-secondary mt-2 block">
          — Khushi Gupta
        </span>
      </div>
    </section>
  );
};
