import React from 'react';
import { BRIDAL_PACKAGES, BUSINESS_INFO } from '../data/portfolioData';

interface BridalPackagesSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const BridalPackagesSection: React.FC<BridalPackagesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section className="px-5 py-8 bg-surface-container-low max-w-lg mx-auto w-full rounded-3xl border border-outline-variant/30 my-4" id="packages">
      <div className="text-center mb-6">
        <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-secondary">
          Bespoke Curation
        </span>
        <h2 className="font-serif text-[28px] sm:text-[32px] font-medium text-primary leading-tight mt-1">
          Bridal Packages
        </h2>
        <p className="font-sans text-[13px] text-on-surface-variant max-w-xs mx-auto mt-1 leading-relaxed">
          Three ways to be ready for your big day, from essentials to the full luxury experience.
        </p>
      </div>

      <div className="space-y-4">
        {BRIDAL_PACKAGES.map((pkg) => {
          const isFeatured = pkg.featured;
          return (
            <div
              key={pkg.id}
              className={`p-5 rounded-2xl transition-all duration-300 relative border ${
                isFeatured
                  ? 'bg-primary text-on-primary border-primary shadow-lg ring-2 ring-tertiary-fixed/30'
                  : 'bg-surface text-on-surface border-outline-variant/30 shadow-xs'
              }`}
            >
              {isFeatured && (
                <span className="absolute -top-3 right-5 px-3 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-sans font-bold uppercase tracking-wider shadow-sm">
                  Most Popular
                </span>
              )}

              {/* Package header with dots */}
              <div className="flex items-center justify-between mb-2">
                <h3 className={`font-serif text-[22px] font-medium ${isFeatured ? 'text-white' : 'text-primary'}`}>
                  {pkg.name}
                </h3>
                <div className="flex gap-1">
                  {[...Array(pkg.tierDots)].map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        isFeatured ? 'bg-tertiary-fixed' : 'bg-secondary'
                      }`}
                    ></span>
                  ))}
                </div>
              </div>

              {/* Inclusions list */}
              <ul className="space-y-2 my-4">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2.5 font-sans text-[13px]">
                    <span
                      className={`material-symbols-outlined text-[16px] shrink-0 ${
                        isFeatured ? 'text-tertiary-fixed' : 'text-secondary'
                      }`}
                    >
                      check_circle
                    </span>
                    <span className={isFeatured ? 'text-white/90 font-medium' : 'text-on-surface-variant'}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Package CTAs */}
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`flex-1 h-11 rounded-full font-sans text-[12px] uppercase font-bold tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 ${
                    isFeatured
                      ? 'bg-white text-primary hover:bg-surface-container-lowest'
                      : 'bg-primary text-on-primary hover:bg-primary-container'
                  }`}
                >
                  <span>Select &amp; Inquire</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>

                <a
                  href={`${BUSINESS_INFO.instagramDmUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors border ${
                    isFeatured
                      ? 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                      : 'bg-surface-container text-primary border-outline-variant/30 hover:bg-secondary-fixed'
                  }`}
                  title="Ask about this package on Instagram"
                >
                  <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
