import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { LanguageSelector } from './LanguageSelector';
import { Language, TranslationDictionary } from '../i18n/translations';
import { Menu, X, Compass, PhoneCall, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  t: TranslationDictionary;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  activeSection,
  currentLanguage,
  onLanguageChange,
  t,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'packages', label: t.nav.packages },
    { id: 'destinations', label: t.nav.destinations },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#102B50]/10 py-2.5 sm:py-3'
            : 'bg-[#102B50]/95 backdrop-blur-sm text-white py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 lg:gap-6">
            {/* Zone 1: Brand Logo & Wordmark */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#102B50] rounded-sm cursor-pointer shrink-0"
              aria-label="Global Explorers Home"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div
                  className={`relative flex items-center justify-center shrink-0 rounded-full transition-transform duration-300 w-9 h-9 sm:w-10 sm:h-10 ${
                    isScrolled
                      ? 'bg-[#102B50] text-[#F7F0E5] shadow-xs'
                      : 'bg-[#F7F0E5] text-[#102B50] shadow-xs'
                  }`}
                >
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
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
                    <polygon
                      points="24,7 27,24 24,21 21,24"
                      fill={isScrolled ? '#D4AF37' : '#102B50'}
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
                      fill={isScrolled ? '#254B75' : '#D4AF37'}
                    />
                    <circle cx="24" cy="24" r="2.5" fill="currentColor" />
                  </svg>
                </div>

                <div className="flex flex-col text-left">
                  <span
                    className={`font-serif tracking-tight leading-none text-base sm:text-lg md:text-xl font-bold ${
                      isScrolled ? 'text-[#102B50]' : 'text-white'
                    }`}
                  >
                    Global Explorers
                  </span>
                  <span
                    className={`hidden xs:inline-block text-[9px] sm:text-[10px] tracking-[0.14em] uppercase font-sans font-medium mt-1 leading-none ${
                      isScrolled ? 'text-[#254B75]' : 'text-[#F7F0E5]/80'
                    }`}
                  >
                    Travel · Discover · Experience
                  </span>
                </div>
              </div>
            </button>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative py-1.5 transition-colors whitespace-nowrap cursor-pointer text-sm tracking-wide ${
                      isScrolled
                        ? isActive
                          ? 'text-[#102B50] font-bold'
                          : 'text-slate-600 hover:text-[#102B50]'
                        : isActive
                        ? 'text-white font-bold'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                          isScrolled ? 'bg-[#102B50]' : 'bg-[#F7F0E5]'
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Language Selector & Primary CTA */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* Language Switcher Button (Translate between English, Portuguese, Spanish) */}
              <LanguageSelector
                currentLanguage={currentLanguage}
                onLanguageChange={onLanguageChange}
                variant={isScrolled ? 'light' : 'dark'}
              />

              <button
                onClick={() => handleNavClick('packages')}
                className={`hidden sm:inline-flex items-center gap-2 px-3.5 lg:px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-200 cursor-pointer shadow-sm min-h-[38px] whitespace-nowrap ${
                  isScrolled
                    ? 'bg-[#102B50] text-[#F7F0E5] hover:bg-[#254B75]'
                    : 'bg-[#F7F0E5] text-[#102B50] hover:bg-white'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>{t.nav.explorePackages}</span>
              </button>

              {/* Mobile Drawer Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-md focus:outline-none focus-visible:ring-2 cursor-pointer transition-colors ${
                  isScrolled
                    ? 'text-[#102B50] hover:bg-slate-100'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile & Tablet Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full sm:w-80 max-w-[85vw] bg-[#102B50] text-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-bold text-white">Menu</span>
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
              · Global Explorers
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Language Switcher inside Mobile Drawer */}
        <div className="px-4 py-3 bg-[#0C1F38] border-b border-white/10 flex items-center justify-between">
          <span className="text-xs text-white/70">Language / Idioma:</span>
          <LanguageSelector
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
            variant="dark"
          />
        </div>

        {/* Drawer Nav Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between p-3.5 rounded-lg text-left text-base font-medium transition-colors cursor-pointer min-h-[44px] ${
                  isActive
                    ? 'bg-white/15 text-[#F7F0E5] font-semibold'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </button>
            );
          })}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-white/10 space-y-2.5 bg-[#0C1F38]">
          <button
            onClick={() => handleNavClick('packages')}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-md bg-[#F7F0E5] text-[#102B50] hover:bg-white transition-colors cursor-pointer min-h-[44px]"
          >
            <Compass className="w-4 h-4" />
            <span>{t.nav.explorePackages}</span>
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-md border border-[#F7F0E5]/40 text-[#F7F0E5] hover:bg-white/10 transition-colors cursor-pointer min-h-[44px]"
          >
            <PhoneCall className="w-4 h-4" />
            <span>{t.nav.contact}</span>
          </button>
        </div>
      </div>
    </>
  );
};
