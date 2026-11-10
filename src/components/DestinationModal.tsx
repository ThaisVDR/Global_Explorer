import React, { useEffect } from 'react';
import { Destination, PACKAGES, TravelPackage } from '../data/travelData';
import { TranslationDictionary } from '../i18n/translations';
import { X, MapPin, Sparkles, CheckCircle2, ArrowRight, CalendarCheck, Hotel } from 'lucide-react';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onViewPackage: (packageId: 'irish-cities' | 'irish-nature') => void;
  onBookPackage: (pkg: TravelPackage) => void;
  onBookDestination?: (dest: Destination) => void;
  t: TranslationDictionary;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onViewPackage,
  onBookPackage,
  onBookDestination,
  t,
}) => {
  useEffect(() => {
    if (destination) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [destination]);

  if (!destination) return null;

  const pkg = PACKAGES.find((p) => p.id === destination.packageId);
  const destLoc = t.destinations[destination.id] || destination;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[94vh]">
        {/* Modal Header Bar */}
        <div className="bg-[#102B50] text-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-[#254B75]">
          <div className="flex items-center gap-2 min-w-0 pr-2">
            <MapPin className="w-4 h-4 text-[#F7F0E5] shrink-0" />
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#F7F0E5]/80 font-medium truncate">
              Destination Spotlight · {destLoc.region}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close destination spotlight"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 overscroll-contain">
          {/* Main Visual */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-900">
            <img
              src={destination.image}
              alt={destination.imageAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102B50] via-[#102B50]/35 to-transparent" />

            {/* Price Badge on Destination Banner */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-[#102B50] px-3.5 py-1.5 rounded-lg shadow-lg border border-white/50">
              <span className="font-serif text-base sm:text-lg font-bold block leading-none">
                {destination.price}
              </span>
              <span className="text-[10px] text-slate-600 font-semibold block text-right mt-0.5">
                {t.packagesSection.perPerson}
              </span>
            </div>

            <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6 text-white">
              <span className="inline-block px-2.5 py-0.5 rounded bg-[#F7F0E5] text-[#102B50] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">
                {destLoc.categoryLabel}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                {destLoc.name}
              </h2>
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
            {/* Core Descriptions */}
            <div className="space-y-2.5">
              <p className="text-sm sm:text-base md:text-lg font-medium text-[#102B50] leading-snug">
                {destLoc.shortDesc}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {destLoc.fullDesc}
              </p>
            </div>

            {/* Featured Hotel Accommodation */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#F7F0E5] border border-[#102B50]/15 space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#102B50]/10 pb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#102B50] text-[#F7F0E5] flex items-center justify-center shrink-0">
                    <Hotel className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#254B75] block">
                      {t.packagesSection.hotelStayLabel || 'Featured Accommodation'}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#102B50] leading-tight">
                      {destination.hotel.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-amber-500 font-bold text-sm tracking-tighter">
                    {'★'.repeat(destination.hotel.stars)}
                  </span>
                  {destination.hotel.isTopChoice && (
                    <span className="text-[10px] uppercase tracking-wider font-bold bg-[#102B50] text-[#F7F0E5] px-2 py-0.5 rounded shadow-2xs">
                      {t.packagesSection.topChoiceBadge || 'Top Choice'}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {destination.hotel.description}
              </p>

              <div className="pt-0.5 flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#254B75] shrink-0" />
                <span>{destination.hotel.location}</span>
              </div>
            </div>

            {/* Attractions and Experiences */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pt-2 border-t border-slate-200">
              {/* Main Attractions */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#254B75]">
                  <MapPin className="w-4 h-4" />
                  <span>{destLoc.mainAttractionsTitle}</span>
                </div>
                <ul className="space-y-2">
                  {destLoc.mainAttractions.map((attr, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#254B75] mt-0.5 shrink-0" />
                      <span>{attr}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suggested Experiences */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#254B75]">
                  <Sparkles className="w-4 h-4" />
                  <span>{destLoc.suggestedExpTitle}</span>
                </div>
                <ul className="space-y-2">
                  {destLoc.suggestedExp.map((exp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Package Inclusion Callout */}
            <div className="p-4 rounded-xl bg-[#F7F0E5] border border-[#102B50]/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <p className="text-xs font-bold text-[#102B50] uppercase tracking-wider">
                  Featured In {destination.packageName}
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  {destLoc.name} ({destination.price}) is one of four destinations included in the {pkg?.price} package.
                </p>
              </div>

              {pkg && (
                <button
                  onClick={() => {
                    onClose();
                    onViewPackage(destination.packageId);
                  }}
                  className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md bg-[#102B50] text-[#F7F0E5] text-xs font-semibold uppercase tracking-wider hover:bg-[#254B75] transition-colors cursor-pointer min-h-[40px]"
                >
                  <span>Explore Full Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar with Destination Price */}
        <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-4">
          <div className="text-center sm:text-left">
            <div className="flex items-baseline gap-1.5 justify-center sm:justify-start">
              <span className="text-xs font-semibold text-slate-500">Destination Price:</span>
              <span className="font-serif text-sm sm:text-base font-bold text-[#102B50]">
                {destination.price}
              </span>
              <span className="text-[11px] text-slate-500">{t.packagesSection.perPerson}</span>
            </div>
            <span className="text-[10px] text-slate-400 block">
              Full {pkg?.title} rate: {pkg?.price} · Demonstration Price
            </span>
          </div>
          {destination && (
            <button
              onClick={() => {
                onClose();
                if (onBookDestination) {
                  onBookDestination(destination);
                } else if (pkg) {
                  onBookPackage(pkg);
                }
              }}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-md bg-[#102B50] text-[#F7F0E5] text-xs font-bold uppercase tracking-wider hover:bg-[#254B75] transition-colors cursor-pointer min-h-[42px] shadow-sm"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Book {destination.name} ({destination.price})</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
