import React from 'react';
import { BUSINESS_INFO } from '../data/portfolioData';

interface BottomNavProps {
  onOpenBooking: () => void;
  onNavigate: (sectionId: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  onOpenBooking,
  onNavigate
}) => {
  return (
    <nav className="fixed bottom-0 w-full z-40 pb-safe bg-surface/92 backdrop-blur-xl shadow-[0_-4px_24px_rgba(109,67,90,0.08)] border-t border-outline-variant/25">
      <div className="flex items-center justify-between h-20 px-4 sm:px-5 gap-2 max-w-lg mx-auto">
        {/* Navigation Quick Links */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Services */}
          <button
            onClick={() => onNavigate('services')}
            aria-label="Services"
            className="flex flex-col items-center justify-center w-12 h-12 rounded-full text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">spa</span>
            <span className="font-sans text-[10px] tracking-wider uppercase mt-0.5 font-semibold">
              Services
            </span>
          </button>

          {/* Portfolio */}
          <button
            onClick={() => onNavigate('portfolio')}
            aria-label="Portfolio"
            className="flex flex-col items-center justify-center w-12 h-12 rounded-full text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">photo_library</span>
            <span className="font-sans text-[10px] tracking-wider uppercase mt-0.5 font-semibold">
              Work
            </span>
          </button>

          {/* Call direct */}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            aria-label="Call Khushi"
            className="flex flex-col items-center justify-center w-12 h-12 rounded-full text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
            <span className="font-sans text-[10px] tracking-wider uppercase mt-0.5 font-semibold">
              Call
            </span>
          </a>
        </div>

        {/* Right CTA cluster */}
        <div className="flex items-center gap-2">
          {/* Direct Instagram DM */}
          <a
            href={BUSINESS_INFO.instagramDmUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message on Instagram"
            className="w-11 h-11 rounded-full flex items-center justify-center bg-secondary-fixed text-primary hover:bg-secondary-fixed-dim transition-colors border border-secondary/20 shadow-xs"
            title="Message on Instagram"
          >
            <span className="material-symbols-outlined text-[20px]">photo_camera</span>
          </a>

          {/* Book Appointment CTA Pill */}
          <button
            onClick={onOpenBooking}
            aria-label="Book Appointment"
            className="h-12 px-4 sm:px-5 rounded-full bg-primary text-on-primary font-sans text-[12px] uppercase font-bold tracking-widest flex items-center gap-1.5 shadow-md hover:bg-primary-container active:scale-95 transition-all"
          >
            <span>Book Now</span>
            <span className="material-symbols-outlined text-[16px]">calendar_month</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
