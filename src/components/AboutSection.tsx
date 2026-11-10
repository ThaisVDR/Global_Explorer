import React from 'react';
import { TranslationDictionary } from '../i18n/translations';
import { Compass, ShieldCheck, HeartHandshake, Award } from 'lucide-react';

interface AboutSectionProps {
  onExplorePackages: () => void;
  t: TranslationDictionary;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExplorePackages, t }) => {
  const pillarIcons = [Compass, ShieldCheck, HeartHandshake, Award];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 bg-[#F7F0E5] border-b border-[#102B50]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Elegant Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl bg-[#102B50] aspect-[4/3] group">
              <img
                src="/src/assets/images/about_ireland_traveler_1794338909215.jpg"
                alt="Traveler admiring historic medieval Irish stone castle and misty mountain lake in Ireland"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102B50]/70 via-transparent to-transparent" />

              {/* Inset Badge */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/50 text-[#102B50] shadow-lg">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#254B75]">
                  {t.about.badgeTitle}
                </p>
                <p className="font-serif text-sm sm:text-base font-bold">
                  {t.about.badgeSubtitle}
                </p>
              </div>
            </div>

            <div className="hidden sm:block absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-[#102B50]/20 rounded-tl-2xl pointer-events-none" />
          </div>

          {/* Right Column: Mission and Agency Description */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="space-y-2">
              <p className="text-[11px] sm:text-xs uppercase font-semibold tracking-[0.2em] text-[#254B75]">
                {t.about.kicker}
              </p>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#102B50] tracking-tight">
                {t.about.title}
              </h2>
            </div>

            {/* Exact Required Prompt Text */}
            <div className="space-y-3 sm:space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base md:text-lg">
              <p className="font-serif text-base sm:text-xl text-[#102B50] font-normal italic border-l-2 border-[#102B50] pl-3.5 sm:pl-4">
                {t.about.quote}
              </p>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                {t.about.body}
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-[#102B50]/15">
              {t.about.pillars.map((pillar, idx) => {
                const IconComponent = pillarIcons[idx % pillarIcons.length];
                return (
                  <div key={idx} className="flex items-start gap-3 p-2 rounded-lg">
                    <div className="w-8 h-8 rounded-lg bg-[#102B50] text-[#F7F0E5] flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#102B50]">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action */}
            <div className="pt-2">
              <button
                onClick={onExplorePackages}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#102B50] text-[#F7F0E5] text-xs font-semibold uppercase tracking-wider hover:bg-[#254B75] transition-colors cursor-pointer min-h-[44px]"
              >
                <span>{t.about.viewPackagesBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
