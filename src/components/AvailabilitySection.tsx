import React from 'react';
import { BUSINESS_INFO } from '../data/portfolioData';

export const AvailabilitySection: React.FC = () => {
  const coverageAreas = [
    { area: 'Siwan Town & Suburbs', status: 'Primary Service Area', note: 'Home-service available' },
    { area: 'Maharajganj & Mairwa', status: 'Available on Booking', note: 'Home-service available' },
    { area: 'Gopalganj & Saran', status: 'Nearby Districts', note: 'Travel by arrangement' },
    { area: 'Patna & Bihar Venues', status: 'Destination Weddings', note: 'Custom arrangement' }
  ];

  return (
    <section className="px-5 py-8 max-w-lg mx-auto w-full" id="coverage">
      <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-secondary">
        Home-Service Coverage
      </span>
      <h2 className="font-serif text-[28px] sm:text-[32px] font-medium text-primary leading-tight mb-3">
        Service Area &amp; Travel
      </h2>

      {/* Main Card */}
      <div className="p-5 rounded-2xl bg-surface-container-high shadow-xs border border-outline-variant/30">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-widest text-secondary font-semibold">
              Artist Base
            </span>
            <h3 className="font-serif text-[20px] text-primary font-medium">
              Siwan, Bihar
            </h3>
            <p className="font-sans text-[13px] text-on-surface-variant">
              Available for doorstep home-service at your residence or venue
            </p>
          </div>
          <span className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary shadow-xs border border-outline-variant/20">
            <span className="material-symbols-outlined text-[20px]">home_pin</span>
          </span>
        </div>

        {/* Coverage Highlights */}
        <div className="space-y-2.5">
          {coverageAreas.map((item, i) => (
            <div key={i} className="p-3 rounded-xl bg-surface flex items-center justify-between border border-outline-variant/20 shadow-2xs">
              <div>
                <h4 className="font-sans text-[13px] font-semibold text-primary">
                  {item.area}
                </h4>
                <span className="font-sans text-[11px] text-on-surface-variant">
                  {item.note}
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary text-[10px] uppercase font-bold tracking-wider">
                {item.status}
              </span>
            </div>
          ))}
        </div>

        {/* Travel Policy note */}
        <div className="mt-4 p-3 rounded-xl bg-secondary-fixed/50 text-on-secondary-fixed flex items-start gap-2.5 border border-secondary/20 text-[12px] leading-relaxed">
          <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
            local_taxi
          </span>
          <div>
            <strong className="font-semibold">Travel Policy:</strong> Home-service makeup is available across Siwan. Travel outside Siwan can also be arranged with advance notice. Travel charges are not included in base service rates.
          </div>
        </div>
      </div>
    </section>
  );
};
