import React from 'react';

export const PhysicalDivider: React.FC = () => {
  return (
    <div className="relative w-full px-5 max-w-lg mx-auto my-6 flex items-center justify-center">
      <div className="w-full flex items-center gap-2">
        <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-surface-container-highest to-tertiary-fixed"></div>
        
        {/* Stylized Makeup Brush Silhouette SVG */}
        <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-surface-container-low shadow-sm border border-outline-variant/30">
          <svg className="text-tertiary-container" fill="none" height="20" viewBox="0 0 24 24" width="20">
            <path d="M19.5 4.5C18.1 3.1 15.8 3.1 14.4 4.5L13.1 5.8L17.7 10.4L19 9.1C20.4 7.7 20.4 5.9 19.5 4.5Z" fill="currentColor"></path>
            <path d="M12.4 6.5L3.5 15.4C3.2 15.7 3 16.1 3 16.6V20.5C3 20.8 3.2 21 3.5 21H7.4C7.9 21 8.3 20.8 8.6 20.5L17.5 11.6L12.4 6.5Z" fill="#BFA07A"></path>
            <circle cx="16.5" cy="7.5" fill="#FAF7F2" r="1.5"></circle>
          </svg>
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-primary">
            Professional Artistry
          </span>
        </div>

        <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent via-surface-container-highest to-tertiary-fixed"></div>
      </div>
    </div>
  );
};
