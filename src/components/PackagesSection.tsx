import React from 'react';
import { PACKAGES, TravelPackage, Destination } from '../data/travelData';
import { TranslationDictionary } from '../i18n/translations';
import { ArrowRight, Compass, CheckCircle2, ChevronRight, Info, CalendarCheck, Hotel } from 'lucide-react';

interface PackagesSectionProps {
  onSelectPackage: (pkg: TravelPackage) => void;
  onBookPackage: (pkg: TravelPackage) => void;
  onSelectDestination: (dest: Destination) => void;
  t: TranslationDictionary;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  onSelectPackage,
  onBookPackage,
  onSelectDestination,
  t,
}) => {
  return (
    <section id="packages" className="py-16 sm:py-20 md:py-28 bg-[#F7F0E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <p className="text-[11px] sm:text-xs uppercase font-semibold tracking-[0.2em] text-[#254B75]">
            {t.packagesSection.kicker}
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#102B50] tracking-tight">
            {t.packagesSection.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed text-balance px-2">
            {t.packagesSection.subtitle}
          </p>
        </div>

        {/* The Two Packages Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {PACKAGES.map((pkg) => {
            const isNature = pkg.id === 'irish-nature';
            const localized = isNature ? t.packages.nature : t.packages.cities;

            return (
              <div
                key={pkg.id}
                className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col"
              >
                {/* Cover Image Container */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-slate-900">
                  <img
                    src={pkg.heroImage}
                    alt={localized.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102B50]/95 via-[#102B50]/40 to-transparent" />

                  {/* Number Badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold tracking-wider uppercase bg-[#102B50]/90 text-[#F7F0E5] rounded backdrop-blur-md border border-white/10">
                      {localized.number}
                    </span>
                  </div>

                  {/* Prominent Price Tag in Overlay */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/95 backdrop-blur-md text-[#102B50] px-3 py-1.5 rounded-lg shadow-md border border-white/40">
                    <span className="font-serif text-base sm:text-lg font-bold block leading-none text-[#102B50]">
                      {localized.price}
                    </span>
                    <span className="text-[10px] text-slate-600 font-semibold block text-right mt-0.5">
                      {t.packagesSection.perPerson}
                    </span>
                  </div>

                  {/* Title and Subtitle Overlay */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 text-white">
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-0.5 sm:mb-1">
                      {localized.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#F7F0E5]/90 line-clamp-1">
                      {localized.subtitle}
                    </p>
                  </div>
                </div>

                {/* Package Body */}
                <div className="p-5 sm:p-7 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Short Description (Exact per prompt) */}
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                      {localized.shortDesc}
                    </p>

                    {/* 4 Destinations Preview with Distinct Prices for Each City/Landscape */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#254B75]">
                        <span>{t.packagesSection.includedDestinations}</span>
                        <span className="text-slate-500 text-[11px] font-medium hidden xs:inline">
                          Individual Destination Rates
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-2.5">
                        {pkg.destinations.map((dest) => {
                          const destLoc = t.destinations[dest.id] || dest;
                          return (
                            <button
                              key={dest.id}
                              onClick={() => onSelectDestination(dest)}
                              className="flex items-center justify-between gap-3 p-3 rounded-lg bg-[#F7F0E5]/60 hover:bg-[#F7F0E5] border border-[#102B50]/15 text-left transition-all duration-200 cursor-pointer group/item hover:border-[#102B50]/40 shadow-xs"
                            >
                              <div className="flex items-center gap-3 min-w-0 flex-1">
                                <div className="w-8 h-8 rounded-md bg-[#102B50]/10 text-[#102B50] group-hover/item:bg-[#102B50] group-hover/item:text-[#F7F0E5] flex items-center justify-center shrink-0 transition-colors">
                                  <span className="text-xs font-bold">
                                    {destLoc.name.charAt(0)}
                                  </span>
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center gap-2">
                                    <p className="text-xs sm:text-sm font-bold text-[#102B50] group-hover/item:text-[#254B75] truncate">
                                      {destLoc.name}
                                    </p>
                                    <span className="text-[10px] text-slate-500 hidden sm:inline truncate">
                                      · {destLoc.region}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-slate-600 truncate mt-0.5">
                                    {destLoc.shortDesc}
                                  </p>
                                  {/* Featured Hotel Stay */}
                                  <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-[#102B50] bg-white px-2 py-0.5 rounded border border-[#102B50]/15 shadow-2xs">
                                      <Hotel className="w-3 h-3 text-[#254B75] shrink-0" />
                                      <span className="truncate max-w-[130px] sm:max-w-[180px]">{dest.hotel.name}</span>
                                      <span className="text-amber-500 font-bold tracking-tighter">
                                        {'★'.repeat(dest.hotel.stars)}
                                      </span>
                                    </span>
                                    {dest.hotel.isTopChoice && (
                                      <span className="text-[9px] uppercase tracking-wider font-bold bg-[#102B50] text-[#F7F0E5] px-1.5 py-0.5 rounded shadow-2xs">
                                        {t.packagesSection.topChoiceBadge || 'Top Choice'}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>

                              {/* Prominent Destination Price Badge */}
                              <div className="flex items-center gap-2 shrink-0">
                                <div className="text-right">
                                  <span className="inline-block px-2.5 py-1 rounded bg-[#102B50] text-[#F7F0E5] text-xs font-bold tracking-tight shadow-xs group-hover/item:bg-[#254B75] transition-colors">
                                    {dest.price}
                                  </span>
                                  <span className="text-[10px] text-slate-500 block text-right mt-0.5 font-medium">
                                    {t.packagesSection.perPerson}
                                  </span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-slate-400 group-hover/item:text-[#102B50] group-hover/item:translate-x-0.5 transition-all shrink-0" />
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Highlights Bullet List */}
                    <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                      <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                        {t.packagesSection.highlightsTitle}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                        {localized.highlights.map((badge, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#254B75] shrink-0" />
                            <span className="truncate">{badge}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price Banner & Demonstration Disclaimer */}
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <div className="p-3.5 rounded-xl bg-[#F7F0E5] border border-[#102B50]/15 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                          Full 4-Stop Package + Hotel Stays
                        </span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-serif text-xl sm:text-2xl font-bold text-[#102B50]">
                            {localized.price}
                          </span>
                          <span className="text-xs text-slate-600 font-medium">
                            {t.packagesSection.perPerson}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-500 max-w-[200px] text-right font-medium leading-tight">
                        {isNature
                          ? 'Includes all 4 landscapes & castle/spa stays (or individual stops from US$ 460)'
                          : 'Includes all 4 cities & 4/5-star stays (or individual stops from US$ 440)'}
                      </span>
                    </div>
                  </div>

                  {/* Primary Button: "Book This Package" (Strict prompt naming) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <button
                      onClick={() => onBookPackage(pkg)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md bg-[#102B50] text-[#F7F0E5] text-xs font-bold uppercase tracking-wider hover:bg-[#254B75] transition-colors cursor-pointer shadow-md min-h-[44px] group"
                    >
                      <CalendarCheck className="w-4 h-4 shrink-0" />
                      <span>{t.packagesSection.bookBtn}</span>
                    </button>

                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-md border border-[#102B50]/30 text-[#102B50] text-xs font-semibold uppercase tracking-wider hover:bg-[#102B50]/5 hover:border-[#102B50] transition-colors cursor-pointer min-h-[44px]"
                    >
                      <span>{t.packagesSection.detailsBtn}</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
