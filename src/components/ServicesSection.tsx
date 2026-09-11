import React, { useState } from 'react';
import { SERVICES, BUSINESS_INFO } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards');

  return (
    <section className="px-5 py-8 max-w-lg mx-auto w-full" id="services">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-secondary">
            Occasion Artistry
          </span>
          <h2 className="font-serif text-[28px] sm:text-[32px] font-medium text-primary leading-tight">
            Makeup for Every Occasion
          </h2>
        </div>

        {/* View toggle */}
        <div className="flex items-center p-1 rounded-full bg-surface-container border border-outline-variant/30">
          <button
            onClick={() => setViewMode('cards')}
            className={`p-1.5 rounded-full transition-colors ${
              viewMode === 'cards' ? 'bg-surface shadow-xs text-primary' : 'text-on-surface-variant'
            }`}
            title="Card View"
            aria-label="Card View"
          >
            <span className="material-symbols-outlined text-[18px]">grid_view</span>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-1.5 rounded-full transition-colors ${
              viewMode === 'list' ? 'bg-surface shadow-xs text-primary' : 'text-on-surface-variant'
            }`}
            title="Price List View"
            aria-label="Price List View"
          >
            <span className="material-symbols-outlined text-[18px]">format_list_bulleted</span>
          </button>
        </div>
      </div>

      <p className="font-sans text-[13px] text-on-surface-variant mb-5 leading-relaxed">
        Every look is designed around your skin type, face shape, personal preference, outfit and the occasion itself &mdash; so the final result feels like you, only more radiant.
      </p>

      {/* Services Display: Cards View */}
      {viewMode === 'cards' ? (
        <div className="space-y-3.5">
          {SERVICES.map((item) => (
            <div
              key={item.id}
              className={`p-5 rounded-2xl bg-surface border transition-all duration-300 relative ${
                item.popular
                  ? 'border-secondary shadow-md ring-1 ring-secondary/20'
                  : 'border-outline-variant/30 shadow-xs hover:border-secondary/40'
              }`}
            >
              {item.badge && (
                <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[10px] font-sans font-bold uppercase tracking-wider">
                  {item.badge}
                </span>
              )}

              <div className="pr-16">
                <h3 className="font-serif text-[20px] font-medium text-primary">
                  {item.name}
                </h3>
                <div className="font-serif text-[24px] font-bold text-secondary mt-0.5">
                  {item.price}
                </div>
              </div>

              <p className="font-sans text-[13px] text-on-surface-variant mt-2 leading-relaxed">
                {item.description}
              </p>

              {item.features && (
                <ul className="mt-3 space-y-1.5 pt-3 border-t border-outline-variant/20">
                  {item.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 font-sans text-[12px] text-on-surface-variant">
                      <span className="material-symbols-outlined text-[14px] text-secondary">
                        check
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-4 pt-2 flex items-center gap-2">
                <button
                  onClick={() => onSelectService(item.name)}
                  className="flex-1 h-10 rounded-full bg-primary text-on-primary font-sans text-[12px] uppercase font-bold tracking-wider hover:bg-primary-container active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>Book {item.name}</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
                <a
                  href={`${BUSINESS_INFO.instagramDmUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-secondary-fixed transition-colors border border-outline-variant/30"
                  title="Inquire on Instagram"
                >
                  <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Services Display: Editorial Price List View */
        <div className="p-5 rounded-2xl bg-surface border border-outline-variant/30 shadow-sm">
          <h3 className="font-serif text-[18px] text-primary mb-3">Service Menu &amp; Rates</h3>
          <div className="divide-y divide-outline-variant/20">
            {SERVICES.map((item) => (
              <div key={item.id} className="py-3 flex items-center justify-between gap-2">
                <div>
                  <h4 className="font-serif text-[16px] font-medium text-primary">
                    {item.name}
                  </h4>
                  <p className="font-sans text-[11px] text-on-surface-variant line-clamp-1">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-serif text-[17px] font-bold text-secondary">
                    {item.price}
                  </span>
                  <button
                    onClick={() => onSelectService(item.name)}
                    className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container"
                    aria-label={`Select ${item.name}`}
                  >
                    <span className="material-symbols-outlined text-[16px]">add</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pricing Note */}
      <div className="mt-4 p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/20 flex items-center justify-between text-[12px] text-on-surface-variant font-sans">
        <span className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px] text-secondary">info</span>
          <span>Travel charges are not included.</span>
        </span>
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="font-bold text-primary uppercase text-[10px] tracking-wider hover:underline"
        >
          Call 9162143273
        </a>
      </div>
    </section>
  );
};
