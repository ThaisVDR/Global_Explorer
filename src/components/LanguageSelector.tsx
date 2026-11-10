import React, { useState, useRef, useEffect } from 'react';
import { Language, translations } from '../i18n/translations';
import { Globe, Check, ChevronDown } from 'lucide-react';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  variant?: 'light' | 'dark';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
  variant = 'dark',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  const current = languages.find((l) => l.code === currentLanguage) || languages[0];
  const isDark = variant === 'dark';

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-colors cursor-pointer border min-h-[36px] ${
          isDark
            ? 'bg-white/10 hover:bg-white/20 text-white border-white/20'
            : 'bg-slate-100 hover:bg-slate-200 text-[#102B50] border-slate-300'
        }`}
        aria-label="Translate website language"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5 shrink-0" />
        <span className="text-sm shrink-0">{current.flag}</span>
        <span className="uppercase text-[11px] font-bold">{current.code}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-40 rounded-lg bg-white shadow-xl border border-slate-200 py-1 z-50 animate-fade-in">
          <div className="px-3 py-1.5 border-b border-slate-100 text-[10px] uppercase font-bold text-slate-400">
            Language / Idioma
          </div>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium transition-colors cursor-pointer text-left hover:bg-slate-100 ${
                currentLanguage === lang.code
                  ? 'text-[#102B50] font-bold bg-[#F7F0E5]/60'
                  : 'text-slate-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">{lang.flag}</span>
                <span>{lang.label}</span>
              </div>
              {currentLanguage === lang.code && (
                <Check className="w-3.5 h-3.5 text-[#102B50]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
