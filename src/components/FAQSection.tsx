import React, { useState } from 'react';
import { FAQ_LIST, BUSINESS_INFO } from '../data/portfolioData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-5 py-8 max-w-lg mx-auto w-full" id="faq">
      <div className="text-center mb-6">
        <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-secondary">
          Client Inquiries
        </span>
        <h2 className="font-serif text-[28px] sm:text-[32px] font-medium text-primary leading-tight mt-1">
          Frequently Asked Questions
        </h2>
        <p className="font-sans text-[13px] text-on-surface-variant max-w-xs mx-auto mt-1">
          Everything you need to know about booking, services, and home visits.
        </p>
      </div>

      <div className="space-y-3">
        {FAQ_LIST.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'bg-surface shadow-sm border-secondary/40'
                  : 'bg-surface-container-low border-outline-variant/25'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 text-left flex items-center justify-between gap-3 focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-[16px] sm:text-[17px] font-medium text-primary leading-snug">
                  {faq.question}
                </span>
                <span
                  className={`material-symbols-outlined text-[20px] text-secondary transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-on-surface-variant font-sans text-[13px] leading-relaxed border-t border-outline-variant/15">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Direct assistance link */}
      <div className="mt-6 p-4 rounded-2xl bg-secondary-fixed/30 border border-secondary/20 text-center">
        <p className="font-sans text-[13px] text-primary">
          Have an unanswered question? Message Khushi directly on Instagram.
        </p>
        <a
          href={BUSINESS_INFO.instagramDmUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1.5 font-sans text-[12px] uppercase tracking-wider font-bold text-secondary hover:text-primary transition-colors"
        >
          <span>Chat with @khushimakeuparts</span>
          <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
        </a>
      </div>
    </section>
  );
};
