import React from 'react';
import { PortfolioLook } from '../types';

interface LookDetailModalProps {
  look: PortfolioLook | null;
  onClose: () => void;
  onBookLook: (lookTitle: string) => void;
}

export const LookDetailModal: React.FC<LookDetailModalProps> = ({ look, onClose, onBookLook }) => {
  if (!look) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/65 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-lg rounded-2xl bg-surface p-5 shadow-2xl border border-tertiary-fixed/30 max-h-[92vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-primary hover:bg-surface shadow-sm transition-all"
          aria-label="Close look details"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Master Media Arched Header (Video or Image) */}
        <div className="relative w-full aspect-[4/5] rounded-t-[4.5rem] rounded-b-xl overflow-hidden shadow-md bg-surface-container-high">
          {look.isVideo && look.videoUrl ? (
            <video
              src={look.videoUrl}
              poster={look.image}
              controls
              autoPlay
              playsInline
              loop
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={look.image}
              alt={look.title}
              className="w-full h-full object-cover"
            />
          )}
          {!look.isVideo && (
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-black/10 pointer-events-none"></div>
          )}

          <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none drop-shadow-md">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-tertiary-fixed font-semibold">
              {look.categoryLabel}
            </span>
            <h2 className="font-serif italic text-2xl sm:text-3xl text-white leading-tight mt-0.5">
              {look.title}
            </h2>
            <p className="font-sans text-[12px] text-white/90 line-clamp-1 mt-1">
              {look.subtitle}
            </p>
          </div>
        </div>

        {/* Look Breakdown & Narrative */}
        <div className="mt-4 space-y-4">
          <div>
            <h4 className="font-sans text-[11px] uppercase tracking-widest text-secondary font-semibold mb-1">
              Artistry Narrative
            </h4>
            <p className="font-sans text-[13px] text-on-surface-variant leading-relaxed">
              {look.description}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2.5">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-wider text-primary font-bold block mb-0.5">
                Technical Execution
              </span>
              <p className="font-sans text-[12px] text-on-surface-variant leading-relaxed">
                {look.technique}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-outline-variant/20">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-secondary font-semibold block">Skin Finish</span>
                <span className="text-[12px] font-medium text-primary">{look.skinFinish}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-secondary font-semibold block">Durability</span>
                <span className="text-[12px] font-medium text-primary">{look.wearTime}</span>
              </div>
            </div>
          </div>

          {/* Products Used */}
          <div>
            <h4 className="font-sans text-[11px] uppercase tracking-widest text-primary font-semibold mb-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-tertiary">palette</span>
              Key Formulations &amp; Tools
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {look.productsUsed.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-full bg-surface-container text-[11px] text-on-surface font-medium border border-outline-variant/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onBookLook(look.title);
              }}
              className="flex-1 h-12 rounded-full bg-primary text-on-primary font-sans text-[12px] font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow hover:bg-primary-container transition-all"
            >
              <span>Book This Look</span>
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
