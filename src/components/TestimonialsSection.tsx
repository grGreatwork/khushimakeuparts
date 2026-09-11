import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="px-5 py-8 bg-surface-container-low max-w-lg mx-auto w-full rounded-3xl border border-outline-variant/25 overflow-hidden my-4" id="testimonials">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-secondary">
            Client Reviews
          </span>
          <h2 className="font-serif text-[28px] sm:text-[32px] font-medium text-primary leading-tight">
            Loved by Brides in Siwan
          </h2>
        </div>

        <div className="flex items-center text-tertiary">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="material-symbols-outlined text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3.5">
        {TESTIMONIALS.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-2xl bg-surface shadow-xs border border-outline-variant/30 relative"
          >
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-11 h-11 rounded-full overflow-hidden bg-surface-container-high shrink-0 shadow-inner border border-secondary-fixed">
                <img
                  className="w-full h-full object-cover"
                  alt={item.author}
                  src={item.image}
                />
              </div>
              <div>
                <h4 className="font-serif text-[17px] text-primary leading-tight font-medium">
                  {item.author}
                </h4>
                <span className="font-sans text-[10px] uppercase font-semibold text-secondary tracking-wider">
                  {item.role}
                </span>
              </div>
            </div>
            <p className="font-sans text-[13px] text-on-surface-variant italic leading-relaxed">
              &ldquo;{item.quote}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
