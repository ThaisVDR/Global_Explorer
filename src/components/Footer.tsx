import React from 'react';
import { BrandLogo } from './BrandLogo';
import { TranslationDictionary } from '../i18n/translations';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectPackage: (packageId: 'irish-cities' | 'irish-nature') => void;
  t: TranslationDictionary;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectPackage, t }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#102B50] text-[#F7F0E5] border-t border-[#254B75]">
      {/* Upper Footer: Brand, Navigation, Packages, and Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {/* Col 1 & 2: Brand Lockup & Ethos */}
          <div className="sm:col-span-2 space-y-4 sm:space-y-5">
            <BrandLogo variant="light" size="lg" showSlogan={true} />
            <p className="text-xs sm:text-sm text-[#F7F0E5]/80 leading-relaxed max-w-sm">
              {t.footer.about}
            </p>

            <div className="pt-2">
              <p className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-3">
                {t.footer.connectWithUs}
              </p>
              {/* Social Media Editable Placeholders */}
              <div className="flex items-center gap-3">
                <a
                  href="#social-instagram"
                  onClick={(e) => e.preventDefault()}
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-[#102B50] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Global Explorers on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#social-facebook"
                  onClick={(e) => e.preventDefault()}
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-[#102B50] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Global Explorers on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#social-linkedin"
                  onClick={(e) => e.preventDefault()}
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-[#102B50] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Global Explorers on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#social-twitter"
                  onClick={(e) => e.preventDefault()}
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-[#102B50] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Global Explorers on X / Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white border-b border-white/10 pb-2">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F7F0E5]/80">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left py-1 min-h-[36px] flex items-center"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('packages')}
                  className="hover:text-white transition-colors cursor-pointer text-left py-1 min-h-[36px] flex items-center"
                >
                  {t.nav.packages}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations')}
                  className="hover:text-white transition-colors cursor-pointer text-left py-1 min-h-[36px] flex items-center"
                >
                  {t.nav.destinations}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left py-1 min-h-[36px] flex items-center"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left py-1 min-h-[36px] flex items-center"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Our Two Packages with Prices */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white border-b border-white/10 pb-2">
              {t.footer.packagesTitle}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#F7F0E5]/80">
              <li>
                <button
                  onClick={() => onSelectPackage('irish-cities')}
                  className="text-left group cursor-pointer block py-1"
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[11px] uppercase text-[#D4AF37] font-semibold">
                      {t.packages.cities.number}
                    </span>
                    <span className="text-xs font-bold text-white">
                      {t.packages.cities.price}
                    </span>
                  </div>
                  <span className="font-medium text-white group-hover:text-[#F7F0E5] transition-colors block">
                    {t.packages.cities.title}
                  </span>
                  <span className="text-[11px] text-[#F7F0E5]/60 block mt-0.5">
                    Dublin · Galway · Cork · Kilkenny
                  </span>
                </button>
              </li>

              <li className="pt-1">
                <button
                  onClick={() => onSelectPackage('irish-nature')}
                  className="text-left group cursor-pointer block py-1"
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[11px] uppercase text-[#D4AF37] font-semibold">
                      {t.packages.nature.number}
                    </span>
                    <span className="text-xs font-bold text-white">
                      {t.packages.nature.price}
                    </span>
                  </div>
                  <span className="font-medium text-white group-hover:text-[#F7F0E5] transition-colors block">
                    {t.packages.nature.title}
                  </span>
                  <span className="text-[11px] text-[#F7F0E5]/60 block mt-0.5">
                    Cliffs of Moher · Connemara · Killarney · Dingle
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Information Placeholders */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white border-b border-white/10 pb-2">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-2.5 text-xs text-[#F7F0E5]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{t.footer.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="break-all">{t.footer.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{t.footer.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Back to Top */}
      <div className="border-t border-[#254B75] bg-[#0C1F38] py-5 sm:py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-[#F7F0E5]/70">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4 text-center sm:text-left">
            <p>{t.footer.copyright}</p>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <p>Travel · Discover · Experience</p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#F7F0E5]/80 hover:text-white transition-colors cursor-pointer py-1.5 px-3 rounded bg-white/5 hover:bg-white/10 min-h-[36px]"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
