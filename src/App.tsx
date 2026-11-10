/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PackagesSection } from './components/PackagesSection';
import { PackageDetailModal } from './components/PackageDetailModal';
import { DestinationsSection } from './components/DestinationsSection';
import { DestinationModal } from './components/DestinationModal';
import { BookingModal } from './components/BookingModal';
import { AboutSection } from './components/AboutSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { PACKAGES, TravelPackage, Destination } from './data/travelData';
import { Language, translations } from './i18n/translations';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [bookingPackage, setBookingPackage] = useState<TravelPackage | null>(null);
  const [bookingExperience, setBookingExperience] = useState<string>('Irish Cities Experience');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [inquiryPackage, setInquiryPackage] = useState<string>('Irish Cities Experience');

  const t = translations[currentLanguage];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPackageDetail = (pkg: TravelPackage) => {
    setSelectedPackage(pkg);
  };

  const handleOpenPackageById = (packageId: 'irish-cities' | 'irish-nature') => {
    const pkg = PACKAGES.find((p) => p.id === packageId);
    if (pkg) {
      setSelectedPackage(pkg);
    }
  };

  const handleBookPackage = (pkg: TravelPackage) => {
    setBookingPackage(pkg);
    setBookingExperience(pkg.title);
    setIsBookingModalOpen(true);
  };

  const handleBookDestination = (dest: Destination) => {
    const parentPkg = PACKAGES.find((p) => p.id === dest.packageId) || null;
    setBookingPackage(parentPkg);
    setBookingExperience(`${dest.name} Experience`);
    setIsBookingModalOpen(true);
  };

  const handleRequestInformation = (packageTitle: string) => {
    setInquiryPackage(packageTitle);
    scrollToSection('contact');
  };

  const handleOpenDestinationSpotlight = (dest: Destination) => {
    setSelectedDestination(dest);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F0E5] font-sans text-slate-800 antialiased">
      {/* Top Navigation with Language Switcher */}
      <Navbar
        onNavigate={scrollToSection}
        activeSection={activeSection}
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        t={t}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExplorePackages={() => scrollToSection('packages')}
          onDiscoverIreland={() => scrollToSection('destinations')}
          t={t}
        />

        {/* 2. Travel Packages Section (Exactly Two Packages with Prices) */}
        <PackagesSection
          onSelectPackage={handleOpenPackageDetail}
          onBookPackage={handleBookPackage}
          onSelectDestination={handleOpenDestinationSpotlight}
          t={t}
        />

        {/* 3. Featured Destinations Section (Exactly Eight Destinations) */}
        <DestinationsSection
          onSelectDestination={handleOpenDestinationSpotlight}
          onRequestCustomCombo={() => {
            const pkg = PACKAGES[0];
            handleBookPackage(pkg);
          }}
          t={t}
        />

        {/* 4. About Us Section */}
        <AboutSection
          onExplorePackages={() => scrollToSection('packages')}
          t={t}
        />

        {/* 5. Booking & Inquiry Form */}
        <ContactForm
          initialPackage={inquiryPackage}
          onPackageChange={setInquiryPackage}
          t={t}
        />
      </main>

      {/* 6. Footer */}
      <Footer
        onNavigate={scrollToSection}
        onSelectPackage={handleOpenPackageById}
        t={t}
      />

      {/* Dedicated Booking Modal (Opens when clicking "Book This Package" or "Book Destination") */}
      <BookingModal
        isOpen={isBookingModalOpen}
        packageData={bookingPackage}
        initialExperience={bookingExperience}
        t={t}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* Dedicated Package Details View / Modal */}
      {selectedPackage && (
        <PackageDetailModal
          packageData={selectedPackage}
          onClose={() => setSelectedPackage(null)}
          onRequestInquiry={handleRequestInformation}
          onBookPackage={handleBookPackage}
          onSelectDestination={handleOpenDestinationSpotlight}
          onSwitchPackage={(newPkg) => setSelectedPackage(newPkg)}
          t={t}
        />
      )}

      {/* Destination Spotlight Modal */}
      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
          onViewPackage={handleOpenPackageById}
          onBookPackage={handleBookPackage}
          onBookDestination={handleBookDestination}
          t={t}
        />
      )}
    </div>
  );
}
