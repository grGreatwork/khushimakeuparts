import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PhysicalDivider } from './components/PhysicalDivider';
import { ServicesSection } from './components/ServicesSection';
import { BridalPackagesSection } from './components/BridalPackagesSection';
import { WhyKhushiSection } from './components/WhyKhushiSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AvailabilitySection } from './components/AvailabilitySection';
import { FAQSection } from './components/FAQSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { LookbookComparisonDrawer } from './components/LookbookComparisonDrawer';
import { LookDetailModal } from './components/LookDetailModal';
import { EditorialMenuDrawer } from './components/EditorialMenuDrawer';
import { EditorialArchiveModal } from './components/EditorialArchiveModal';
import { PortfolioLook } from './types';

export default function App() {
  const [selectedLook, setSelectedLook] = useState<PortfolioLook | null>(null);
  const [isComparisonOpen, setIsComparisonOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isArchiveOpen, setIsArchiveOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setPreselectedService(serviceName);
    scrollToSection('book');
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Fixed Header */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenBooking={() => scrollToSection('book')}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20 pb-28 bg-surface flex flex-col items-center">
        {/* Hero Section */}
        <HeroSection
          onExplore={() => scrollToSection('portfolio')}
          onReserve={() => scrollToSection('book')}
        />

        {/* Physical Object Divider */}
        <PhysicalDivider />

        {/* Section 1: Services & Rates */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Section 2: Bridal Packages */}
        <BridalPackagesSection onSelectPackage={handleSelectService} />

        {/* Section 3: Why Choose Khushi */}
        <WhyKhushiSection onBookClick={() => scrollToSection('book')} />

        {/* Section 4: Real Work & Portfolio */}
        <PortfolioGallery
          onSelectLook={(look) => setSelectedLook(look)}
          onOpenComparison={() => setIsComparisonOpen(true)}
        />

        {/* Section 5: Meet Khushi */}
        <AboutSection />

        {/* Section 6: Testimonials */}
        <TestimonialsSection />

        {/* Section 7: Service Coverage in Siwan */}
        <AvailabilitySection />

        {/* Section 8: Frequently Asked Questions */}
        <FAQSection />

        {/* Section 9: Booking & Appointment */}
        <BookingSection selectedService={preselectedService} />

        {/* Section 10: Footer */}
        <Footer />
      </main>

      {/* Fixed Bottom Navigation Bar */}
      <BottomNav
        onOpenBooking={() => scrollToSection('book')}
        onNavigate={(sectionId) => scrollToSection(sectionId)}
      />

      {/* Lookbook Comparison Drawer (Before/After Skin Transformation) */}
      <LookbookComparisonDrawer
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
      />

      {/* Look Inspection Modal */}
      <LookDetailModal
        look={selectedLook}
        onClose={() => setSelectedLook(null)}
        onBookLook={(lookTitle) => {
          setPreselectedService(`Style inspired by ${lookTitle}`);
          scrollToSection('book');
        }}
      />

      {/* Slide-in Menu Drawer */}
      <EditorialMenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={(sectionId) => scrollToSection(sectionId)}
        onOpenComparison={() => setIsComparisonOpen(true)}
      />

      {/* Awards & Recognition Archive Modal */}
      <EditorialArchiveModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
        onBookAppointment={() => {
          setIsArchiveOpen(false);
          scrollToSection('book');
        }}
      />
    </div>
  );
}
