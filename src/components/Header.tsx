import React from 'react';
import { BUSINESS_INFO, ASSETS } from '../data/portfolioData';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenu, onOpenBooking }) => {
  return (
    <header className="fixed top-0 w-full z-40 bg-surface/90 backdrop-blur-xl shadow-[0_1px_12px_rgba(109,67,90,0.06)] pt-safe transition-all duration-300 border-b border-outline-variant/20">
      <div className="h-20 px-4 sm:px-6 max-w-5xl mx-auto flex items-center justify-between">
        {/* Brand logo & tagline */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-none" aria-label="Khushi Makeup Arts Homepage">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-serif font-bold text-lg shadow-sm border border-tertiary-fixed/40">
            K
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-serif font-medium text-xl sm:text-2xl text-primary leading-tight tracking-tight">
              Khushi <span className="font-sans text-xs uppercase tracking-[0.2em] text-secondary font-bold block sm:inline sm:ml-1">Makeup Arts</span>
            </span>
            <span className="font-sans text-[10px] uppercase tracking-wider text-on-surface-variant font-medium">
              Siwan, Bihar • Home Service
            </span>
          </div>
        </a>

        {/* Action buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Direct Call Button */}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            aria-label="Call Khushi"
            className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-surface-container-low text-primary hover:bg-surface-container-high transition-all shadow-xs border border-outline-variant/20"
            title="Call 9162143273"
          >
            <span className="material-symbols-outlined text-[18px]">phone</span>
          </a>

          {/* Instagram DM Button */}
          <a
            href={BUSINESS_INFO.instagramDmUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message on Instagram"
            className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-secondary-fixed/50 text-primary hover:bg-secondary-fixed transition-all shadow-xs border border-secondary/20"
            title="Message on Instagram"
          >
            <span className="material-symbols-outlined text-[18px]">photo_camera</span>
          </a>

          {/* Menu Drawer Toggle */}
          <button
            onClick={onOpenMenu}
            aria-label="Open Navigation Menu"
            className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-surface-container text-primary hover:bg-surface-container-high transition-all shadow-xs"
          >
            <span className="material-symbols-outlined text-[20px]">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

