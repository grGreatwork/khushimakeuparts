import React from 'react';
import { WHY_KHUSHI_FEATURES } from '../data/portfolioData';

export const WhyKhushiSection: React.FC = () => {
  return (
    <section className="px-5 py-8 max-w-lg mx-auto w-full" id="why">
      <div className="text-center mb-6">
        <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-secondary">
          Artistry Assurance
        </span>
        <h2 className="font-serif text-[28px] sm:text-[32px] font-medium text-primary leading-tight mt-1">
          Why Choose Khushi Makeup Arts?
        </h2>
      </div>

      <div className="space-y-3.5">
        {WHY_KHUSHI_FEATURES.map((item, index) => (
          <div
            key={item.id}
            className="p-4 rounded-2xl bg-surface border border-outline-variant/30 shadow-xs flex items-start gap-3.5 hover:border-secondary/40 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-surface-container-low text-primary flex items-center justify-center shrink-0 border border-outline-variant/20 shadow-2xs">
              <span className="material-symbols-outlined text-[20px] text-secondary">
                {item.iconName}
              </span>
            </div>
            <div>
              <h3 className="font-serif text-[17px] font-medium text-primary leading-snug">
                {item.title}
              </h3>
              <p className="font-sans text-[13px] text-on-surface-variant mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
