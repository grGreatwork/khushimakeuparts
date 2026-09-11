import React from 'react';
import { BUSINESS_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="px-5 py-8 text-center bg-surface-container-high/40 max-w-lg mx-auto w-full border-t border-outline-variant/20">
      <div className="flex items-center justify-center gap-2.5 mb-2">
        <span className="h-0.5 w-6 bg-surface-container-highest"></span>
        <span className="font-serif text-[22px] text-primary font-medium">
          Khushi Makeup Arts
        </span>
        <span className="h-0.5 w-6 bg-surface-container-highest"></span>
      </div>

      <p className="font-sans text-[12px] text-on-surface-variant max-w-xs mx-auto leading-relaxed mb-4">
        Professional Makeup Artist in Siwan, Bihar. Home-service makeup available across Siwan, with travel outside Siwan by arrangement.
      </p>

      <div className="flex flex-wrap justify-center gap-3 font-sans text-[11px] text-primary font-semibold uppercase tracking-wider mb-4">
        <a href="#services" className="hover:text-secondary">Services</a>
        <span>•</span>
        <a href="#packages" className="hover:text-secondary">Packages</a>
        <span>•</span>
        <a href="#portfolio" className="hover:text-secondary">Portfolio</a>
        <span>•</span>
        <a href="#about" className="hover:text-secondary">About</a>
        <span>•</span>
        <a href="#why" className="hover:text-secondary">Why Khushi</a>
        <span>•</span>
        <a href="#faq" className="hover:text-secondary">FAQ</a>
        <span>•</span>
        <a href="#book" className="hover:text-secondary">Book</a>
      </div>

      <div className="flex items-center justify-center gap-3 mb-4">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="px-3.5 py-1.5 rounded-full bg-surface-container text-primary font-sans text-[11px] font-semibold flex items-center gap-1 hover:bg-secondary-fixed transition-colors border border-outline-variant/20"
        >
          <span className="material-symbols-outlined text-[14px]">call</span>
          <span>9162143273</span>
        </a>
        <a
          href={BUSINESS_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3.5 py-1.5 rounded-full bg-surface-container text-primary font-sans text-[11px] font-semibold flex items-center gap-1 hover:bg-secondary-fixed transition-colors border border-outline-variant/20"
        >
          <span className="material-symbols-outlined text-[14px]">photo_camera</span>
          <span>@khushimakeuparts</span>
        </a>
      </div>

      <p className="font-sans text-[11px] text-on-surface-variant/70">
        &copy; 2026 Khushi Makeup Arts. All rights reserved.
      </p>
    </footer>
  );
};
