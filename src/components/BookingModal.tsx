import React, { useState, useEffect } from 'react';
import { TravelPackage } from '../data/travelData';
import { TranslationDictionary } from '../i18n/translations';
import {
  X,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Users,
  Mail,
  Phone,
  User,
  Compass,
  DollarSign,
  Send,
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  packageData: TravelPackage | null;
  initialExperience?: string;
  t: TranslationDictionary;
  onClose: () => void;
  onBookSuccess?: () => void;
}

interface BookingFormState {
  fullName: string;
  email: string;
  phone: string;
  selectedPackage: string;
  travelers: string;
  travelDate: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  packageData,
  initialExperience,
  t,
  onClose,
}) => {
  const [formData, setFormData] = useState<BookingFormState>({
    fullName: '',
    email: '',
    phone: '',
    selectedPackage: initialExperience || packageData?.title || 'Irish Cities Experience',
    travelers: '2 Travelers',
    travelDate: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialExperience) {
      setFormData((prev) => ({
        ...prev,
        selectedPackage: initialExperience,
      }));
    } else if (packageData) {
      setFormData((prev) => ({
        ...prev,
        selectedPackage: packageData.title,
      }));
    }
  }, [packageData, initialExperience]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = t.errors.fullNameRequired;
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = t.errors.fullNameMin;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = t.errors.emailRequired;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = t.errors.emailInvalid;
    }

    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = t.errors.phoneRequired;
    } else if (!phoneRegex.test(formData.phone.trim().replace(/\s+/g, ''))) {
      newErrors.phone = t.errors.phoneInvalid;
    }

    if (!formData.travelDate.trim()) {
      newErrors.travelDate = t.errors.dateRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      selectedPackage: packageData?.title || 'Irish Cities Experience',
      travelers: '2 Travelers',
      travelDate: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  const getSelectedPrice = (packageName: string): string => {
    if (packageName.includes('Dublin')) return 'US$ 820';
    if (packageName.includes('Galway')) return 'US$ 640';
    if (packageName.includes('Cork')) return 'US$ 590';
    if (packageName.includes('Kilkenny')) return 'US$ 440';
    if (packageName.includes('Cliffs of Moher')) return 'US$ 580';
    if (packageName.includes('Connemara')) return 'US$ 690';
    if (packageName.includes('Killarney')) return 'US$ 620';
    if (packageName.includes('Dingle')) return 'US$ 460';
    if (packageName.includes('Nature')) return t.packages.nature.price;
    return t.packages.cities.price;
  };

  const currentPrice = getSelectedPrice(formData.selectedPackage);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[95vh]">
        {/* Modal Header */}
        <div className="bg-[#102B50] text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-[#254B75]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#F7F0E5] text-[#102B50] flex items-center justify-center font-bold text-xs">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block">
                {t.bookingModal.badge}
              </span>
              <h2 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                {t.bookingModal.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1">
          {submitted ? (
            /* Confirmation Message */
            <div className="py-6 text-center space-y-5 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-[#102B50]">
                  {t.bookingModal.confTitle}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {t.bookingModal.confMessage}
                </p>
              </div>

              {/* Summary */}
              <div className="p-4 rounded-xl bg-[#F7F0E5] border border-[#102B50]/15 text-left text-xs text-slate-700 space-y-1.5 max-w-md mx-auto">
                <p className="font-bold text-[#102B50] border-b border-[#102B50]/10 pb-1">
                  {t.bookingModal.summaryTitle}
                </p>
                <p><span className="font-semibold">{t.bookingModal.fullNameLabel}:</span> {formData.fullName}</p>
                <p><span className="font-semibold">{t.bookingModal.emailLabel}:</span> {formData.email}</p>
                <p><span className="font-semibold">{t.bookingModal.phoneLabel}:</span> {formData.phone}</p>
                <p><span className="font-semibold">{t.bookingModal.packageLabel}:</span> {formData.selectedPackage}</p>
                <p><span className="font-semibold">{t.bookingModal.travelersLabel}:</span> {formData.travelers}</p>
                <p><span className="font-semibold">{t.bookingModal.dateLabel}:</span> {formData.travelDate}</p>
                <p><span className="font-semibold">Package Price:</span> {currentPrice} {t.packagesSection.perPerson}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-md border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer min-h-[44px]"
                >
                  {t.bookingModal.anotherBtn}
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-md bg-[#102B50] text-[#F7F0E5] text-xs font-bold uppercase tracking-wider hover:bg-[#254B75] transition-colors cursor-pointer min-h-[44px]"
                >
                  {t.bookingModal.closeBtn}
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Selected Package Banner with Demonstration Price */}
              <div className="p-3.5 rounded-xl bg-[#F7F0E5] border border-[#102B50]/15 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                    {t.bookingModal.packageLabel}
                  </span>
                  <p className="font-serif text-sm sm:text-base font-bold text-[#102B50] truncate">
                    {formData.selectedPackage}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-serif text-base sm:text-lg font-bold text-[#102B50] block leading-none">
                    {currentPrice}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {t.packagesSection.perPerson}
                  </span>
                </div>
              </div>

              {/* Field 1: Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  {t.bookingModal.fullNameLabel} <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder={t.bookingModal.fullNamePlaceholder}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-50 border text-base sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#102B50] transition-colors min-h-[44px] ${
                      errors.fullName ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Two columns: Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Field 2: Email */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    {t.bookingModal.emailLabel} <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder={t.bookingModal.emailPlaceholder}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-50 border text-base sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#102B50] transition-colors min-h-[44px] ${
                        errors.email ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Field 3: Phone */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    {t.bookingModal.phoneLabel} <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder={t.bookingModal.phonePlaceholder}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-50 border text-base sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#102B50] transition-colors min-h-[44px] ${
                        errors.phone ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Field 4: Selected Package dropdown */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  {t.bookingModal.packageLabel} <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Compass className="w-4 h-4" />
                  </div>
                  <select
                    value={formData.selectedPackage}
                    onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                    className="w-full pl-10 pr-8 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-base sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#102B50] min-h-[44px] appearance-none"
                  >
                    <optgroup label="Complete 4-Stop Packages + Hotel Stays">
                      <option value="Irish Cities Experience">
                        Irish Cities Experience ({t.packages.cities.price} {t.packagesSection.perPerson})
                      </option>
                      <option value="Irish Nature & Landscapes">
                        Irish Nature & Landscapes ({t.packages.nature.price} {t.packagesSection.perPerson})
                      </option>
                    </optgroup>
                    <optgroup label="Package 1 — Individual Cities (with Hotel)">
                      <option value="Dublin Experience">Dublin — US$ 820 (The Merrion Hotel Dublin 5★)</option>
                      <option value="Galway Experience">Galway — US$ 640 (The Galmont Hotel & Spa 4★)</option>
                      <option value="Cork Experience">Cork — US$ 590 (Hayfield Manor Hotel 5★)</option>
                      <option value="Kilkenny Experience">Kilkenny — US$ 440 (Pembroke Hotel Kilkenny 4★)</option>
                    </optgroup>
                    <optgroup label="Package 2 — Individual Landscapes (with Hotel)">
                      <option value="Cliffs of Moher Experience">Cliffs of Moher — US$ 580 (Doolin Inn 4★)</option>
                      <option value="Connemara National Park Experience">Connemara National Park — US$ 690 (Ballynahinch Castle 5★)</option>
                      <option value="Killarney National Park Experience">Killarney National Park — US$ 620 (Muckross Park Hotel & Spa 5★)</option>
                      <option value="Dingle Peninsula Experience">Dingle Peninsula — US$ 460 (Dingle Skellig Hotel 4★)</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Two columns: Number of Travelers & Travel Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Field 5: Number of Travelers */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    {t.bookingModal.travelersLabel} <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Users className="w-4 h-4" />
                    </div>
                    <select
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full pl-10 pr-8 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-base sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#102B50] min-h-[44px] appearance-none"
                    >
                      <option value="1 Solo Traveler">1 Solo Traveler</option>
                      <option value="2 Travelers">2 Travelers (Double / Pair)</option>
                      <option value="3 Travelers">3 Travelers</option>
                      <option value="4 Travelers">4 Travelers (Family / Group)</option>
                      <option value="5-8 Travelers">5 – 8 Travelers</option>
                      <option value="9+ Group">9+ Private Group</option>
                    </select>
                  </div>
                </div>

                {/* Field 6: Travel Date */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    {t.bookingModal.dateLabel} <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      value={formData.travelDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => {
                        setFormData({ ...formData, travelDate: e.target.value });
                        if (errors.travelDate) setErrors({ ...errors, travelDate: '' });
                      }}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-50 border text-base sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#102B50] transition-colors min-h-[44px] ${
                        errors.travelDate ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.travelDate && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.travelDate}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Price Note / Disclaimer */}
              <p className="text-[11px] text-slate-500 leading-normal pt-1">
                {t.bookingModal.priceNote} {t.packagesSection.priceDisclaimer}.
              </p>

              {/* Submit Button (Strict naming: "Submit Booking Request") */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-md bg-[#102B50] text-[#F7F0E5] text-xs font-bold uppercase tracking-wider hover:bg-[#254B75] transition-all duration-200 cursor-pointer shadow-md min-h-[48px] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{t.bookingModal.submitting}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.bookingModal.submitBtn}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
