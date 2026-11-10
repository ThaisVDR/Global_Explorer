import React, { useState, useEffect } from 'react';
import { TranslationDictionary } from '../i18n/translations';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Users,
  Mail,
  Phone,
  User,
  Compass,
  MapPin,
  Clock,
  Calendar,
} from 'lucide-react';

interface ContactFormProps {
  initialPackage?: string;
  onPackageChange?: (pkg: string) => void;
  t: TranslationDictionary;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  preferredPackage: string;
  travelers: string;
  travelDate: string;
  message: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialPackage = 'Irish Cities Experience',
  t,
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    preferredPackage: initialPackage,
    travelers: '2 Travelers',
    travelDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({
        ...prev,
        preferredPackage: initialPackage.includes('Nature')
          ? 'Irish Nature & Landscapes'
          : 'Irish Cities Experience',
      }));
    }
  }, [initialPackage]);

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
      preferredPackage: 'Irish Cities Experience',
      travelers: '2 Travelers',
      travelDate: '',
      message: '',
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

  const currentPrice = getSelectedPrice(formData.preferredPackage);

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Contact Details */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <p className="text-[11px] sm:text-xs uppercase font-semibold tracking-[0.2em] text-[#254B75]">
                Plan Your Journey
              </p>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#102B50] tracking-tight">
                {t.bookingModal.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.bookingModal.subtitle}
              </p>
            </div>

            {/* Value markers */}
            <div className="space-y-3 sm:space-y-4 pt-1">
              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#F7F0E5]/70 border border-[#102B50]/10">
                <MapPin className="w-5 h-5 text-[#102B50] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#102B50]">
                    {t.footer.headquarters}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {t.footer.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#F7F0E5]/70 border border-[#102B50]/10">
                <Mail className="w-5 h-5 text-[#102B50] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#102B50]">
                    {t.footer.contactTitle}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {t.footer.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#F7F0E5]/70 border border-[#102B50]/10">
                <Clock className="w-5 h-5 text-[#102B50] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#102B50]">
                    Concierge Hours
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {t.footer.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Demonstration Price Notice */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#102B50] text-[#F7F0E5] text-xs space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-white uppercase tracking-wider">
                  Transparent Pricing
                </p>
                <span className="text-[10px] text-[#D4AF37] font-semibold uppercase tracking-wider">
                  USD per Person
                </span>
              </div>
              <p className="text-[#F7F0E5]/80 leading-relaxed">
                {t.bookingModal.priceNote} {t.packagesSection.priceDisclaimer}.
              </p>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#F7F0E5] rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 border border-[#102B50]/15 shadow-sm">
              {submitted ? (
                /* Success State (Confirmation message) */
                <div className="py-8 sm:py-10 text-center space-y-5 sm:space-y-6 animate-fade-in">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>

                  <div className="space-y-3 max-w-lg mx-auto px-2">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#102B50]">
                      {t.bookingModal.confTitle}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed font-medium">
                      {t.bookingModal.confMessage}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#102B50]/10 text-left max-w-md mx-auto text-xs text-slate-600 space-y-1">
                    <p className="font-semibold text-[#102B50]">{t.bookingModal.summaryTitle}</p>
                    <p>• {t.bookingModal.fullNameLabel}: {formData.fullName}</p>
                    <p>• {t.bookingModal.emailLabel}: {formData.email}</p>
                    <p>• {t.bookingModal.phoneLabel}: {formData.phone}</p>
                    <p>• {t.bookingModal.packageLabel}: {formData.preferredPackage}</p>
                    <p>• {t.bookingModal.travelersLabel}: {formData.travelers}</p>
                    <p>• {t.bookingModal.dateLabel}: {formData.travelDate}</p>
                    <p>• Package Rate: {currentPrice} {t.packagesSection.perPerson}</p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#102B50] text-[#F7F0E5] text-xs font-semibold uppercase tracking-wider hover:bg-[#254B75] transition-colors cursor-pointer min-h-[44px]"
                    >
                      <span>{t.bookingModal.anotherBtn}</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                  <div className="border-b border-[#102B50]/15 pb-4 mb-2">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#102B50]">
                        {t.bookingModal.title}
                      </h3>
                      <span className="text-xs font-bold text-[#102B50] bg-white px-3 py-1 rounded-md border border-[#102B50]/15">
                        {currentPrice} {t.packagesSection.perPerson}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">
                      {t.bookingModal.subtitle}
                    </p>
                  </div>

                  {/* Field: Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
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
                        className={`w-full pl-10 pr-4 py-3 rounded-lg bg-white border text-base sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#102B50] transition-colors min-h-[44px] ${
                          errors.fullName ? 'border-rose-500' : 'border-slate-300'
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Field: Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
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
                          className={`w-full pl-10 pr-4 py-3 rounded-lg bg-white border text-base sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#102B50] transition-colors min-h-[44px] ${
                            errors.email ? 'border-rose-500' : 'border-slate-300'
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

                    {/* Field: Phone */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
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
                          className={`w-full pl-10 pr-4 py-3 rounded-lg bg-white border text-base sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#102B50] transition-colors min-h-[44px] ${
                            errors.phone ? 'border-rose-500' : 'border-slate-300'
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

                  {/* Two columns: Selected Package and Number of Travelers */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Field: Selected Package */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        {t.bookingModal.packageLabel} <span className="text-rose-600">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Compass className="w-4 h-4" />
                        </div>
                        <select
                          value={formData.preferredPackage}
                          onChange={(e) => setFormData({ ...formData, preferredPackage: e.target.value })}
                          className="w-full pl-10 pr-8 py-3 rounded-lg bg-white border border-slate-300 text-base sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#102B50] appearance-none min-h-[44px]"
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

                    {/* Field: Number of Travelers */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        {t.bookingModal.travelersLabel} <span className="text-rose-600">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Users className="w-4 h-4" />
                        </div>
                        <select
                          value={formData.travelers}
                          onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                          className="w-full pl-10 pr-8 py-3 rounded-lg bg-white border border-slate-300 text-base sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#102B50] appearance-none min-h-[44px]"
                        >
                          <option value="1 Solo Traveler">1 Solo Traveler</option>
                          <option value="2 Travelers">2 Travelers (Double / Pair)</option>
                          <option value="3 Travelers">3 Travelers</option>
                          <option value="4 Travelers">4 Travelers (Small Group / Family)</option>
                          <option value="5-8 Travelers">5 – 8 Travelers</option>
                          <option value="9+ Group">9+ Private Group</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Field: Travel Date */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
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
                        className={`w-full pl-10 pr-4 py-3 rounded-lg bg-white border text-base sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#102B50] transition-colors min-h-[44px] ${
                          errors.travelDate ? 'border-rose-500' : 'border-slate-300'
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

                  {/* Submit Button: "Submit Booking Request" */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-[#102B50] text-[#F7F0E5] text-xs font-bold uppercase tracking-widest hover:bg-[#254B75] transition-all duration-200 cursor-pointer shadow-md disabled:opacity-50 min-h-[48px]"
                    >
                      {isSubmitting ? (
                        <span>{t.bookingModal.submitting}</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 shrink-0" />
                          <span>{t.bookingModal.submitBtn}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-500 pt-1">
                    {t.bookingModal.priceNote}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
