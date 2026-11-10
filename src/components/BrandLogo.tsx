import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSlogan?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSlogan = true,
}) => {
  const isLight = variant === 'light';

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Brand Emblem */}
      <div
        className={`relative flex items-center justify-center shrink-0 rounded-full transition-transform duration-300 hover:rotate-45 ${
          size === 'sm' ? 'w-9 h-9' : size === 'lg' ? 'w-14 h-14' : 'w-11 h-11'
        } ${
          isLight
            ? 'bg-[#F7F0E5] text-[#102B50] shadow-sm'
            : 'bg-[#102B50] text-[#F7F0E5] shadow-sm'
        }`}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={size === 'sm' ? 'w-5 h-5' : size === 'lg' ? 'w-8 h-8' : 'w-6 h-6'}
        >
          {/* Outer compass ring */}
          <circle
            cx="24"
            cy="24"
            r="21"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="2 2"
            opacity="0.6"
          />
          <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="1.5" />
          {/* Compass cardinal points */}
          <polygon
            points="24,7 27,24 24,21 21,24"
            fill={isLight ? '#102B50' : '#F7F0E5'}
          />
          <polygon
            points="24,41 27,24 24,27 21,24"
            fill="currentColor"
            opacity="0.4"
          />
          <polygon
            points="7,24 24,27 21,24 24,21"
            fill="currentColor"
            opacity="0.5"
          />
          <polygon
            points="41,24 24,27 27,24 24,21"
            fill={isLight ? '#254B75' : '#D4AF37'}
          />
          {/* Center coordinate point */}
          <circle cx="24" cy="24" r="2.5" fill="currentColor" />
        </svg>
      </div>

      {/* Brand Name & Slogan */}
      <div className="flex flex-col text-left">
        <span
          className={`font-serif tracking-tight leading-none ${
            size === 'sm'
              ? 'text-lg font-semibold'
              : size === 'lg'
              ? 'text-2xl font-bold'
              : 'text-xl font-bold'
          } ${isLight ? 'text-white' : 'text-[#102B50]'}`}
        >
          Global Explorers
        </span>
        {showSlogan && (
          <span
            className={`text-[10px] tracking-[0.16em] uppercase font-sans font-medium mt-1 leading-none ${
              isLight ? 'text-[#F7F0E5]/80' : 'text-[#254B75]'
            }`}
          >
            Travel · Discover · Experience
          </span>
        )}
      </div>
    </div>
  );
};
