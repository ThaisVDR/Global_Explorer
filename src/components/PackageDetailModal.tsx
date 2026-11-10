import React, { useState, useEffect } from 'react';
import { TravelPackage, Destination, PACKAGES } from '../data/travelData';
import { TranslationDictionary } from '../i18n/translations';
import {
  X,
  ArrowLeft,
  MapPin,
  Compass,
  Bus,
  Hotel,
  CheckCircle,
  HelpCircle,
  Sparkles,
  CalendarCheck,
  PhoneCall,
} from 'lucide-react';

interface PackageDetailModalProps {
  packageData: TravelPackage | null;
  onClose: () => void;
  onRequestInquiry: (packageTitle: string) => void;
  onBookPackage: (pkg: TravelPackage) => void;
  onSelectDestination: (dest: Destination) => void;
  onSwitchPackage: (pkg: TravelPackage) => void;
  t: TranslationDictionary;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  packageData,
  onClose,
  onRequestInquiry,
  onBookPackage,
  onSelectDestination,
  onSwitchPackage,
  t,
}) => {
  if (!packageData) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'destinations' | 'itinerary' | 'details'>('overview');
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string>(packageData.heroImage);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Sync selectedGalleryImage when package changes
  useEffect(() => {
    if (packageData) {
      setSelectedGalleryImage(packageData.heroImage);
    }
  }, [packageData]);

  // Keep other package handy for quick switching
  const otherPackage = PACKAGES.find((p) => p.id !== packageData.id);
  const isNature = packageData.id === 'irish-nature';
  const localized = isNature ? t.packages.nature : t.packages.cities;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex justify-center p-0 sm:p-4 md:p-6 animate-fade-in">
      <div className="relative w-full max-w-5xl bg-white sm:rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col min-h-screen sm:min-h-0 sm:max-h-[92vh]">
        {/* Sticky Header with Back & Close */}
        <div className="sticky top-0 z-30 bg-[#102B50] text-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-[#254B75]">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#F7F0E5]/80 hover:text-white transition-colors cursor-pointer min-h-[44px] py-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Overview</span>
            </button>
            <span className="text-white/30 hidden xs:inline">|</span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#D4AF37] hidden xs:inline">
              {localized.number}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {otherPackage && (
              <button
                onClick={() => {
                  onSwitchPackage(otherPackage);
                  setSelectedGalleryImage(otherPackage.heroImage);
                }}
                className="hidden md:inline-flex items-center gap-1 text-xs text-[#F7F0E5]/80 hover:text-white px-3 py-1.5 rounded border border-white/20 hover:border-white transition-colors cursor-pointer min-h-[36px]"
              >
                <span>Switch to {otherPackage.title}</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
              aria-label="Close package view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 overscroll-contain">
          {/* Main Hero Banner with Title, Photograph, & Price */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-slate-900">
            <img
              src={selectedGalleryImage}
              alt={localized.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102B50] via-[#102B50]/50 to-transparent" />

            {/* Price Badge on Banner */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-[#102B50] px-4 py-2 rounded-xl shadow-lg border border-white/50">
              <span className="font-serif text-lg sm:text-xl font-bold block leading-none">
                {localized.price}
              </span>
              <span className="text-[10px] text-slate-600 font-semibold block text-right mt-0.5">
                {t.packagesSection.perPerson}
              </span>
            </div>

            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded bg-[#F7F0E5] text-[#102B50] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  {localized.number}
                </span>
                <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium tracking-wide">
                  {localized.price} {t.packagesSection.perPerson}
                </span>
              </div>
              <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-1 sm:mb-2 leading-tight">
                {localized.title}
              </h1>
              <p className="text-xs sm:text-base md:text-lg text-[#F7F0E5]/90 font-medium">
                {localized.subtitle}
              </p>
            </div>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="bg-[#F7F0E5] px-4 sm:px-6 border-b border-[#102B50]/10 flex items-center gap-2 sm:gap-6 overflow-x-auto text-[11px] sm:text-xs font-semibold uppercase tracking-wider scrollbar-none">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-3 sm:py-3.5 border-b-2 whitespace-nowrap cursor-pointer transition-colors min-h-[44px] ${
                activeTab === 'overview'
                  ? 'border-[#102B50] text-[#102B50]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('destinations')}
              className={`py-3 sm:py-3.5 border-b-2 whitespace-nowrap cursor-pointer transition-colors min-h-[44px] ${
                activeTab === 'destinations'
                  ? 'border-[#102B50] text-[#102B50]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              All 4 Destinations
            </button>
            <button
              onClick={() => setActiveTab('itinerary')}
              className={`py-3 sm:py-3.5 border-b-2 whitespace-nowrap cursor-pointer transition-colors min-h-[44px] ${
                activeTab === 'itinerary'
                  ? 'border-[#102B50] text-[#102B50]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Suggested Itinerary
            </button>
            <button
              onClick={() => setActiveTab('details')}
              className={`py-3 sm:py-3.5 border-b-2 whitespace-nowrap cursor-pointer transition-colors min-h-[44px] ${
                activeTab === 'details'
                  ? 'border-[#102B50] text-[#102B50]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Travel & Lodging
            </button>
          </div>

          <div className="p-4 sm:p-6 md:p-8 space-y-8 sm:space-y-10">
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="space-y-6 sm:space-y-8 animate-fade-in">
                {/* Introduction & Full Description */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                  <div className="lg:col-span-2 space-y-4">
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#102B50]">
                      About This Experience
                    </h2>
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                      {localized.intro}
                    </p>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {localized.fullDesc}
                    </p>

                    {/* Suggested Activities */}
                    <div className="pt-3 sm:pt-4">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#102B50] mb-3">
                        Suggested Activities & Highlights
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {packageData.suggestedActivities.map((act, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F7F0E5]/60 border border-[#102B50]/10 text-xs text-slate-700"
                          >
                            <Sparkles className="w-4 h-4 text-[#254B75] shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Booking Card */}
                  <div className="space-y-4">
                    <div className="p-5 sm:p-6 rounded-xl bg-[#102B50] text-[#F7F0E5] space-y-4">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block">
                          Demonstration Package Rate
                        </span>
                        <div className="flex items-baseline gap-2 mt-1">
                          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-none">
                            {localized.price}
                          </h3>
                          <span className="text-xs text-[#F7F0E5]/80">
                            {t.packagesSection.perPerson}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-[#F7F0E5]/80 leading-relaxed">
                        {t.packagesSection.priceDisclaimer}.
                      </p>

                      <div className="space-y-2 pt-2 border-t border-[#254B75]">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37]">
                          <CheckCircle className="w-4 h-4 shrink-0" />
                          <span>4 Destinations Included</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#F7F0E5]">
                          <CheckCircle className="w-4 h-4 shrink-0" />
                          <span>Heritage Hotels & Private Transport</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#F7F0E5]">
                          <CheckCircle className="w-4 h-4 shrink-0" />
                          <span>Guided Historic Excursions</span>
                        </div>
                      </div>

                      {/* Primary "Book This Package" button */}
                      <button
                        onClick={() => {
                          onClose();
                          onBookPackage(packageData);
                        }}
                        className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-[#F7F0E5] text-[#102B50] text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer min-h-[44px] shadow-sm"
                      >
                        <CalendarCheck className="w-4 h-4" />
                        <span>{t.packagesSection.bookBtn}</span>
                      </button>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-600 space-y-1">
                      <p className="font-semibold text-slate-800">Booking Transparency</p>
                      <p>
                        We treat all pricing with full transparency. Submit your dates and group count, and our Ireland travel concierge will finalize exact seasonal rates.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Trip Inclusions Summary & Stop Price Breakdown */}
                <div className="pt-6 border-t border-slate-200 space-y-5">
                  <h3 className="font-serif text-lg font-bold text-[#102B50]">
                    What's Included in This Package
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-3.5 rounded-lg bg-[#F7F0E5]/60 border border-[#102B50]/10">
                      <p className="font-bold text-[#102B50]">4 Destinations</p>
                      <p className="text-slate-600 text-[11px] mt-0.5">Fully guided stops</p>
                    </div>
                    <div className="p-3.5 rounded-lg bg-[#F7F0E5]/60 border border-[#102B50]/10">
                      <p className="font-bold text-[#102B50]">Heritage Stays</p>
                      <p className="text-slate-600 text-[11px] mt-0.5">Handpicked hotels</p>
                    </div>
                    <div className="p-3.5 rounded-lg bg-[#F7F0E5]/60 border border-[#102B50]/10">
                      <p className="font-bold text-[#102B50]">Transport</p>
                      <p className="text-slate-600 text-[11px] mt-0.5">Executive private vehicle</p>
                    </div>
                    <div className="p-3.5 rounded-lg bg-[#F7F0E5]/60 border border-[#102B50]/10">
                      <p className="font-bold text-[#102B50]">Local Guide</p>
                      <p className="text-slate-600 text-[11px] mt-0.5">Accredited historian</p>
                    </div>
                  </div>

                  {/* Destination Pricing Breakdown */}
                  <div className="p-4 rounded-xl bg-[#F7F0E5] border border-[#102B50]/15 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-[#102B50]/10 pb-2">
                      <h4 className="font-serif text-sm sm:text-base font-bold text-[#102B50]">
                        Individual Destination Rates in {localized.title}
                      </h4>
                      <span className="text-xs font-semibold text-[#254B75]">
                        Combined 4-Stop Package: {localized.price}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                      {packageData.destinations.map((dest) => (
                        <div
                          key={dest.id}
                          onClick={() => {
                            onClose();
                            onSelectDestination(dest);
                          }}
                          className="p-3 rounded-lg bg-white border border-[#102B50]/10 hover:border-[#102B50]/30 transition-all cursor-pointer group shadow-2xs"
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="font-serif font-bold text-xs sm:text-sm text-[#102B50] group-hover:text-[#254B75] truncate">
                              {dest.name}
                            </span>
                            <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#102B50] text-[#F7F0E5] shrink-0">
                              {dest.price}
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-500 truncate mt-0.5">{dest.region}</p>
                          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#102B50] mt-1 pt-1 border-t border-slate-100">
                            <Hotel className="w-3 h-3 text-[#254B75] shrink-0" />
                            <span className="truncate">{dest.hotel.name}</span>
                            <span className="text-amber-500 text-[10px]">{'★'.repeat(dest.hotel.stars)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* DESTINATIONS TAB */}
            {activeTab === 'destinations' && (
              <div className="space-y-6 sm:space-y-8 animate-fade-in">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#102B50] mb-1 sm:mb-2">
                    Included Destinations in {localized.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Each stop features handpicked 4-star and 5-star hotel accommodations with distinct pricing, or can be enjoyed together in the complete {localized.price} package bundle.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  {packageData.destinations.map((dest) => {
                    const destLoc = t.destinations[dest.id] || dest;
                    return (
                      <div
                        key={dest.id}
                        className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-xs hover:shadow-md transition-shadow flex flex-col"
                      >
                        {/* Header Badge with Destination Name and Individual Price */}
                        <div className="bg-[#102B50] text-white p-4 flex items-center justify-between gap-3">
                          <div className="min-w-0">
                            <p className="text-[10px] uppercase tracking-wider text-[#F7F0E5]/80 font-medium">
                              {destLoc.region}
                            </p>
                            <h3 className="font-serif text-lg sm:text-xl font-bold truncate">
                              {destLoc.name}
                            </h3>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="px-2.5 py-1 rounded bg-[#F7F0E5] text-[#102B50] text-xs font-bold block shadow-xs">
                              {dest.price}
                            </span>
                            <span className="text-[9px] uppercase tracking-wider text-[#F7F0E5]/80 font-semibold block mt-0.5">
                              {t.packagesSection.perPerson}
                            </span>
                          </div>
                        </div>

                        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                          <div className="space-y-3.5">
                            <p className="text-xs font-semibold text-[#254B75]">
                              {destLoc.shortDesc}
                            </p>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {destLoc.fullDesc}
                            </p>

                            {/* Featured Hotel Accommodation Card */}
                            <div className="p-3.5 rounded-lg bg-[#F7F0E5]/80 border border-[#102B50]/15 space-y-1.5">
                              <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-1.5 text-xs font-bold text-[#102B50] min-w-0">
                                  <Hotel className="w-3.5 h-3.5 text-[#254B75] shrink-0" />
                                  <span className="truncate">{dest.hotel.name}</span>
                                </div>
                                <div className="flex items-center gap-1 shrink-0">
                                  <span className="text-amber-500 text-xs font-bold tracking-tighter">
                                    {'★'.repeat(dest.hotel.stars)}
                                  </span>
                                  {dest.hotel.isTopChoice && (
                                    <span className="text-[9px] uppercase tracking-wider font-bold bg-[#102B50] text-[#F7F0E5] px-1.5 py-0.5 rounded shadow-2xs">
                                      {t.packagesSection.topChoiceBadge || 'Top Choice'}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                                {dest.hotel.description}
                              </p>
                              <p className="text-[11px] text-slate-500 font-semibold flex items-center gap-1 pt-0.5">
                                <MapPin className="w-3 h-3 text-[#254B75] shrink-0" />
                                <span>{dest.hotel.location}</span>
                              </p>
                            </div>

                            <div>
                              <p className="text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-1.5">
                                {destLoc.mainAttractionsTitle}
                              </p>
                              <ul className="space-y-1">
                                {destLoc.mainAttractions.map((att, i) => (
                                  <li
                                    key={i}
                                    className="text-xs text-slate-700 flex items-start gap-1.5"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#254B75] mt-1.5 shrink-0" />
                                    <span>{att}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                            <button
                              onClick={() => {
                                onClose();
                                onSelectDestination(dest);
                              }}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-[#102B50] hover:text-[#254B75] cursor-pointer min-h-[36px]"
                            >
                              <span>View Full Spotlight</span>
                              <Compass className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-bold text-[#102B50] bg-[#F7F0E5] px-2.5 py-1 rounded border border-[#102B50]/10">
                              {dest.price} / person
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* SUGGESTED ITINERARY TAB */}
            {activeTab === 'itinerary' && (
              <div className="space-y-6 animate-fade-in max-w-3xl">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#102B50] mb-1 sm:mb-2">
                    Suggested Journey Itinerary
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    A balanced 7-day flow designed to maximize discovery while leaving time for relaxed personal moments.
                  </p>
                </div>

                <div className="relative pl-5 sm:pl-6 border-l-2 border-[#102B50]/20 space-y-6 sm:space-y-8">
                  {packageData.suggestedItinerary.map((step, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[27px] sm:-left-[31px] top-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#102B50] border-2 border-white ring-2 ring-[#102B50]/20" />

                      <div className="p-4 sm:p-5 rounded-xl bg-[#F7F0E5]/50 border border-[#102B50]/10 hover:bg-[#F7F0E5] transition-colors">
                        <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1.5">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#254B75]">
                            {step.day}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                            <MapPin className="w-3.5 h-3.5 text-[#102B50]" />
                            {step.location}
                          </span>
                        </div>
                        <h3 className="font-serif text-base sm:text-lg font-bold text-[#102B50] mb-1.5">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 sm:p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#254B75] shrink-0 mt-0.5" />
                  <span>
                    Note: All itineraries can be customized according to your preferred travel dates, pace, and specific interests. Contact us for custom arrangements.
                  </span>
                </div>
              </div>
            )}

            {/* DETAILS TAB (Transportation & Accommodation) */}
            {activeTab === 'details' && (
              <div className="space-y-6 sm:space-y-8 animate-fade-in max-w-3xl">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#102B50] mb-1 sm:mb-2">
                    Transportation & Accommodation
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Transparent details regarding transport logistics and boutique hospitality standards.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  {/* Transportation */}
                  <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3 sm:space-y-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#102B50]/10 flex items-center justify-center text-[#102B50]">
                      <Bus className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#102B50]">
                      Transportation Services
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {packageData.transportationInfo}
                    </p>
                    <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Professional licensed Irish driver-guides</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Air-conditioned executive vehicles</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Seamless baggage coordination</span>
                      </li>
                    </ul>
                  </div>

                  {/* Accommodation */}
                  <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3 sm:space-y-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#102B50]/10 flex items-center justify-center text-[#102B50]">
                      <Hotel className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#102B50]">
                      Accommodation Standards
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {packageData.accommodationInfo}
                    </p>
                    <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>4-Star & 5-Star handpicked character stays</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Daily artisan Irish breakfast included</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Curated central or scenic lakeside views</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-4 sm:p-5 bg-[#F7F0E5] border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          <div className="text-left hidden sm:block">
            <p className="text-xs font-semibold text-[#102B50]">
              Ready to explore {localized.title}?
            </p>
            <p className="text-[11px] text-slate-500">
              {localized.price} {t.packagesSection.perPerson} · Demonstration Price
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-md border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-white transition-colors cursor-pointer min-h-[44px]"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookPackage(packageData);
              }}
              className="flex-2 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#102B50] text-[#F7F0E5] text-xs font-bold uppercase tracking-wider hover:bg-[#254B75] transition-colors cursor-pointer shadow-sm min-h-[44px]"
            >
              <CalendarCheck className="w-3.5 h-3.5 shrink-0" />
              <span>{t.packagesSection.bookBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
