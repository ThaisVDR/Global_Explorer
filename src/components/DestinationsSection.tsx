import React, { useState } from 'react';
import { DESTINATIONS, Destination } from '../data/travelData';
import { TranslationDictionary } from '../i18n/translations';
import { Compass, ArrowRight, Building2, Trees, Hotel } from 'lucide-react';

interface DestinationsSectionProps {
  onSelectDestination: (dest: Destination) => void;
  onRequestCustomCombo: () => void;
  t: TranslationDictionary;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onSelectDestination,
  onRequestCustomCombo,
  t,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'city' | 'nature'>('all');

  const filteredDestinations = DESTINATIONS.filter((d) => {
    if (activeFilter === 'all') return true;
    return d.category === activeFilter;
  });

  return (
    <section id="destinations" className="py-16 sm:py-20 md:py-28 bg-white border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14 space-y-3 sm:space-y-4">
          <p className="text-[11px] sm:text-xs uppercase font-semibold tracking-[0.2em] text-[#254B75]">
            {t.destinationsSection.kicker}
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#102B50] tracking-tight">
            {t.destinationsSection.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed text-balance px-2">
            {t.destinationsSection.subtitle}
          </p>

          {/* Responsive Segmented Filter Controls */}
          <div className="inline-flex max-w-full overflow-x-auto p-1 bg-[#F7F0E5] rounded-lg border border-[#102B50]/10 mt-3 sm:mt-4 scrollbar-none">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 sm:px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap min-h-[38px] ${
                activeFilter === 'all'
                  ? 'bg-[#102B50] text-[#F7F0E5] shadow-xs'
                  : 'text-slate-600 hover:text-[#102B50]'
              }`}
            >
              {t.destinationsSection.allFilter}
            </button>
            <button
              onClick={() => setActiveFilter('city')}
              className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap min-h-[38px] ${
                activeFilter === 'city'
                  ? 'bg-[#102B50] text-[#F7F0E5] shadow-xs'
                  : 'text-slate-600 hover:text-[#102B50]'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{t.destinationsSection.citiesFilter}</span>
            </button>
            <button
              onClick={() => setActiveFilter('nature')}
              className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap min-h-[38px] ${
                activeFilter === 'nature'
                  ? 'bg-[#102B50] text-[#F7F0E5] shadow-xs'
                  : 'text-slate-600 hover:text-[#102B50]'
              }`}
            >
              <Trees className="w-3.5 h-3.5" />
              <span>{t.destinationsSection.natureFilter}</span>
            </button>
          </div>
        </div>

        {/* 8 Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredDestinations.map((dest) => {
            const destLoc = t.destinations[dest.id] || dest;
            return (
              <div
                key={dest.id}
                className="group bg-[#F7F0E5]/40 rounded-xl overflow-hidden border border-slate-200/90 hover:border-[#102B50]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image & Scrim */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <img
                    src={dest.image}
                    alt={dest.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Category & Price Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-semibold text-white/90">
                    <span className="px-2.5 py-0.5 rounded bg-[#102B50]/80 backdrop-blur-md">
                      {destLoc.categoryLabel}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-white/95 text-[#102B50] font-bold shadow-sm">
                      {dest.price}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[11px] text-[#F7F0E5]/80 font-medium">
                      {destLoc.region}
                    </p>
                    <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight">
                      {destLoc.name}
                    </h3>
                  </div>
                </div>

                {/* Destination Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {destLoc.shortDesc}
                    </p>

                    {/* Featured Hotel Stay */}
                    <div className="flex items-center gap-1.5 p-2 rounded-lg bg-[#F7F0E5] border border-[#102B50]/10 text-[11px] font-semibold text-[#102B50]">
                      <Hotel className="w-3.5 h-3.5 text-[#254B75] shrink-0" />
                      <span className="truncate flex-1">{dest.hotel.name}</span>
                      <span className="text-amber-500 text-[10px] shrink-0 font-bold">
                        {'★'.repeat(dest.hotel.stars)}
                      </span>
                    </div>

                    {/* Main Attractions */}
                    <div className="pt-2 border-t border-slate-200">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#254B75] mb-1.5">
                        {destLoc.mainAttractionsTitle}
                      </p>
                      <ul className="space-y-1">
                        {destLoc.mainAttractions.slice(0, 3).map((attr, idx) => (
                          <li
                            key={idx}
                            className="text-[11px] text-slate-600 flex items-start gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#254B75] mt-1 shrink-0" />
                            <span className="line-clamp-1">{attr}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Footer with Price and Spotlight */}
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#102B50] block leading-none">
                        {dest.price}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">
                        {t.packagesSection.perPerson}
                      </span>
                    </div>
                    <button
                      onClick={() => onSelectDestination(dest)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-[#102B50]/5 hover:bg-[#102B50] text-[#102B50] hover:text-[#F7F0E5] text-xs font-bold transition-all shrink-0 cursor-pointer min-h-[34px]"
                    >
                      <span>{t.destinationsSection.spotlightBtn}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Combination Callout */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-[#102B50] text-[#F7F0E5] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Seamless Irish Routing
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              {t.destinationsSection.customComboTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F0E5]/80 max-w-2xl">
              {t.destinationsSection.customComboDesc}
            </p>
          </div>

          <button
            onClick={onRequestCustomCombo}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#F7F0E5] text-[#102B50] text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer shadow-sm min-h-[44px]"
          >
            <Compass className="w-4 h-4 shrink-0" />
            <span>{t.destinationsSection.customComboBtn}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
