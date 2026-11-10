import React from 'react';
import { TranslationDictionary } from '../i18n/translations';
import { ArrowRight, Compass, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onExplorePackages: () => void;
  onDiscoverIreland: () => void;
  t: TranslationDictionary;
}

export const Hero: React.FC<HeroProps> = ({
  onExplorePackages,
  onDiscoverIreland,
  t,
}) => {
  return (
    <section id="home" className="relative pt-16 sm:pt-20">
      {/* Hero Visual Container */}
      <div className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_ireland_landscape_1794338906036.jpg"
            alt="Scenic Irish coastline with dramatic green cliffs and rolling hills overlooking the Atlantic ocean"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform scale-105 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102B50] via-[#102B50]/70 to-[#102B50]/40" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#102B50]/30 to-[#102B50]/80" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center text-white">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F7F0E5] text-[11px] sm:text-xs md:text-sm font-medium tracking-widest uppercase">
            <span>{t.hero.tagline}</span>
          </div>

          {/* Main Title (Exact prompt title) */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.12] text-balance max-w-4xl mx-auto drop-shadow-sm">
            {t.hero.title}
          </h1>

          {/* Subtitle (Exact prompt subtitle) */}
          <p className="font-sans text-base sm:text-xl md:text-2xl text-[#F7F0E5]/90 font-light max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed text-balance">
            {t.hero.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <button
              onClick={onExplorePackages}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-md bg-[#F7F0E5] text-[#102B50] font-semibold text-xs sm:text-sm tracking-wide uppercase hover:bg-white hover:shadow-lg transition-all duration-200 cursor-pointer min-h-[48px] group"
            >
              <span>{t.hero.exploreBtn}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
            </button>

            <button
              onClick={onDiscoverIreland}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-md border border-white/40 text-white font-medium text-xs sm:text-sm tracking-wide uppercase backdrop-blur-sm hover:bg-white/15 hover:border-white transition-all duration-200 cursor-pointer min-h-[48px]"
            >
              <Compass className="w-4 h-4 shrink-0" />
              <span>{t.hero.discoverBtn}</span>
            </button>
          </div>

          {/* Key Highlight Markers */}
          <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto text-left">
            <div className="flex items-center gap-2.5 sm:gap-3 p-2 rounded-lg bg-white/5 backdrop-blur-xs sm:bg-transparent">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F7F0E5]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70 truncate">{t.hero.destinationsLabel}</p>
                <p className="text-xs sm:text-sm font-semibold text-white truncate">{t.hero.destinationsCount}</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 p-2 rounded-lg bg-white/5 backdrop-blur-xs sm:bg-transparent">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F7F0E5]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70 truncate">{t.hero.packagesLabel}</p>
                <p className="text-xs sm:text-sm font-semibold text-white truncate">{t.hero.packagesCount}</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 p-2 rounded-lg bg-white/5 backdrop-blur-xs sm:bg-transparent">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F7F0E5]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70 truncate">{t.hero.standardLabel}</p>
                <p className="text-xs sm:text-sm font-semibold text-white truncate">{t.hero.standardValue}</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 p-2 rounded-lg bg-white/5 backdrop-blur-xs sm:bg-transparent">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <span className="text-[10px] sm:text-xs font-bold text-[#F7F0E5]">IE</span>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70 truncate">{t.hero.specializationLabel}</p>
                <p className="text-xs sm:text-sm font-semibold text-white truncate">{t.hero.specializationValue}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agency Introduction Strip */}
      <div className="bg-[#102B50] text-[#F7F0E5] py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-[#254B75]">
        <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-4">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            {t.intro.slogan}
          </p>
          <p className="font-serif text-lg sm:text-2xl md:text-3xl text-white font-medium leading-relaxed text-balance">
            "{t.intro.text}"
          </p>
        </div>
      </div>
    </section>
  );
};
