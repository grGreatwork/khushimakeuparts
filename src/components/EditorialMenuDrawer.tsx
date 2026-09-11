import React from 'react';
import { BUSINESS_INFO } from '../data/portfolioData';

interface EditorialMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenComparison: () => void;
}

export const EditorialMenuDrawer: React.FC<EditorialMenuDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenComparison
}) => {
  if (!isOpen) return null;

  const links = [
    { label: 'Services & Pricing', id: 'services', subtitle: 'Bridal, Engagement, Party, Haldi, Mehendi' },
    { label: 'Bridal Packages', id: 'packages', subtitle: 'Basic, Premium & Luxury Airbrush' },
    { label: 'Portfolio & Looks', id: 'portfolio', subtitle: 'Transformations & Real Brides' },
    { label: 'Why Choose Khushi', id: 'why', subtitle: 'Personalized, Nykaa Pro, Home-Service' },
    { label: 'Meet Khushi', id: 'about', subtitle: 'Artist Journey & Trophies' },
    { label: 'FAQ', id: 'faq', subtitle: 'Home-Service, Travel, Booking' },
    { label: 'Book an Appointment', id: 'book', subtitle: 'Online Enquiry & Instagram DM' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-primary/50 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-sm h-full bg-surface shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-outline-variant/30 animate-slideLeft">
        {/* Top bar */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-serif font-bold text-sm">
                K
              </div>
              <span className="font-serif text-lg font-medium text-primary">
                Khushi Makeup Arts
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="mt-5 space-y-1">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-secondary block mb-2">
              Menu Navigation
            </span>
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  onClose();
                }}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-surface-container-low transition-colors group flex items-center justify-between"
              >
                <div>
                  <h4 className="font-serif text-[17px] text-primary group-hover:text-secondary transition-colors font-medium">
                    {link.label}
                  </h4>
                  <p className="font-sans text-[11px] text-on-surface-variant">
                    {link.subtitle}
                  </p>
                </div>
                <span className="material-symbols-outlined text-[16px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                  arrow_forward
                </span>
              </button>
            ))}
          </div>

          {/* Before/After comparison tool */}
          <div className="mt-5 p-3.5 rounded-xl bg-surface-container-low border border-secondary/20">
            <span className="font-sans text-[10px] uppercase tracking-wider font-bold text-secondary block mb-1">
              Interactive Tool
            </span>
            <p className="font-sans text-[12px] text-on-surface-variant mb-2">
              Slide between bare prep &amp; finished HD bridal glow.
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenComparison();
              }}
              className="w-full py-2 rounded-full bg-surface border border-secondary/40 text-primary font-sans text-[11px] uppercase font-bold tracking-wider hover:bg-secondary-fixed/40 transition-colors flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[15px]">compare</span>
              Open Transformation Slider
            </button>
          </div>
        </div>

        {/* Contact info footer */}
        <div className="pt-5 border-t border-outline-variant/20 mt-6 space-y-2 text-[12px] text-on-surface-variant">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-widest text-primary font-bold block">
              Location &amp; Service
            </span>
            <p>Based in Siwan, Bihar</p>
            <p className="text-[11px] text-secondary">Home-service available across Siwan</p>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex-1 py-1.5 px-3 rounded-full bg-surface-container text-center font-sans text-[11px] font-semibold text-primary hover:bg-secondary-fixed transition-colors"
            >
              Call {BUSINESS_INFO.phoneDisplay}
            </a>
            <a
              href={BUSINESS_INFO.instagramDmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-1.5 px-3 rounded-full bg-secondary-fixed text-center font-sans text-[11px] font-semibold text-primary hover:bg-secondary-fixed-dim transition-colors"
            >
              Instagram DM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
