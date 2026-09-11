import React, { useState, useRef, useCallback } from 'react';
import { ASSETS } from '../data/portfolioData';

interface LookbookComparisonProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LookbookComparisonDrawer: React.FC<LookbookComparisonProps> = ({ isOpen, onClose }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = Math.round((x / rect.width) * 100);
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-md transition-all animate-fadeIn">
      <div className="relative w-full max-w-md rounded-2xl bg-surface p-5 shadow-2xl border border-secondary/30 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold">
              Transformation View
            </span>
            <h3 className="font-serif text-2xl text-primary leading-tight font-medium">
              Bare Canvas vs. Bridal Glow
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors"
            aria-label="Close comparison view"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* The Comparison Canvas */}
        <div className="mt-4">
          <p className="text-[12px] text-on-surface-variant mb-2">
            Drag the handle horizontally to inspect skin before and after Khushi&apos;s HD bridal artistry.
          </p>

          <div
            ref={containerRef}
            className="relative w-full aspect-[4/5] rounded-t-[4.5rem] rounded-b-xl overflow-hidden shadow-inner cursor-ew-resize select-none bg-surface-container-highest"
            onMouseDown={() => { isDragging.current = true; }}
            onMouseUp={() => { isDragging.current = false; }}
            onMouseLeave={() => { isDragging.current = false; }}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Full Background) */}
            <img
              src={ASSETS.heroBride}
              alt="After: Finished Bridal Glow"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-surface/85 backdrop-blur-sm text-[10px] uppercase font-semibold text-primary shadow-sm pointer-events-none">
              Bridal Glow
            </div>

            {/* Before Image (Clipped Left Layer) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={ASSETS.naturalDewy}
                alt="Before: Skin Preparation"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current?.clientWidth || '100%', height: '100%' }}
              />
              <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-surface/85 backdrop-blur-sm text-[10px] uppercase font-semibold text-secondary shadow-sm">
                Skin Prep
              </div>
            </div>

            {/* Divider Bar & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-secondary shadow-[0_0_8px_rgba(132,79,88,0.8)] pointer-events-none"
              style={{ left: `calc(${sliderPosition}% - 2px)` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -left-3.5 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg border-2 border-secondary pointer-events-auto cursor-grab active:cursor-grabbing">
                <span className="material-symbols-outlined text-[16px]">compare_arrows</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-4 p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2 text-[12px]">
          <div className="flex justify-between items-center text-on-surface-variant">
            <span className="font-semibold text-primary">Hydration Protocol:</span>
            <span>Deep Moisture Prep &amp; Pore Primer</span>
          </div>
          <div className="flex justify-between items-center text-on-surface-variant">
            <span className="font-semibold text-primary">Product Line:</span>
            <span>Nykaa Professional HD Range</span>
          </div>
          <div className="flex justify-between items-center text-on-surface-variant">
            <span className="font-semibold text-primary">Durability:</span>
            <span>16+ Hours Ceremony &amp; Sweat-Proof</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 h-11 rounded-full bg-primary text-on-primary font-sans text-[12px] font-bold tracking-wider uppercase flex items-center justify-center hover:bg-primary-container transition-all"
        >
          Return to Portfolio
        </button>
      </div>
    </div>
  );
};
