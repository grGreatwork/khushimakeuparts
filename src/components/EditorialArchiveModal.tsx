import React from 'react';
import { ASSETS, BUSINESS_INFO } from '../data/portfolioData';

interface EditorialArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookAppointment: () => void;
}

export const EditorialArchiveModal: React.FC<EditorialArchiveModalProps> = ({
  isOpen,
  onClose,
  onBookAppointment
}) => {
  if (!isOpen) return null;

  const recognitions = [
    {
      title: "Trophy-Awarded Makeup Event",
      event: "Artistry Showcase • Regional Event",
      quote: "Recognized with trophies for exceptional technique, skin-friendly product application, and personalized aesthetics.",
      image: ASSETS.artistPortrait,
      tags: ["Trophy Recognition", "Professional Artistry", "Live Demo"]
    },
    {
      title: "Bridal Elegance Showcase",
      event: "Siwan Beauty Exhibition",
      quote: "Showcasing signature 16-hour sweat-proof HD bridal glam tailored to Indian weddings and climate.",
      image: ASSETS.heroBride,
      tags: ["Bridal Special", "HD Makeup", "Nykaa Pro"]
    },
    {
      title: "Traditional & Occasion Glam",
      event: "Festive & Ceremony Features",
      quote: "Creating harmonious looks for Haldi, Mehendi, Sangeet and Engagement that glow naturally in photos.",
      image: ASSETS.goldenLight,
      tags: ["Haldi & Mehendi", "Engagement", "Natural Radiance"]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/65 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-lg rounded-2xl bg-surface p-5 sm:p-6 shadow-2xl border border-secondary/30 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">
              Honours &amp; Journey
            </span>
            <h3 className="font-serif text-2xl text-primary leading-tight font-medium">
              Event Recognitions &amp; Trophies
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Recognitions List */}
        <div className="mt-4 space-y-3.5">
          {recognitions.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30 flex gap-3 group hover:border-secondary/40 transition-all"
            >
              <div className="w-20 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-container-high relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-between py-0.5">
                <div>
                  <span className="text-[10px] font-sans uppercase font-bold tracking-widest text-secondary block">
                    {item.event}
                  </span>
                  <h4 className="font-serif text-[16px] text-primary leading-tight mt-0.5 font-medium">
                    {item.title}
                  </h4>
                  <p className="font-sans text-[12px] text-on-surface-variant italic line-clamp-2 mt-1">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 mt-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-full bg-surface text-[9px] font-sans uppercase font-semibold text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTAs */}
        <div className="mt-5 pt-3 border-t border-outline-variant/30 flex items-center gap-2">
          <button
            onClick={() => {
              onClose();
              onBookAppointment();
            }}
            className="flex-1 h-11 rounded-full bg-primary text-on-primary font-sans text-[12px] uppercase font-bold tracking-wider flex items-center justify-center gap-1.5 shadow hover:bg-primary-container transition-all"
          >
            <span>Book Your Date</span>
            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
          </button>
        </div>
      </div>
    </div>
  );
};
