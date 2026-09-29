import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { DestinationsSection } from './components/DestinationsSection';
import { FeaturedToursSection } from './components/FeaturedToursSection';
import { ExperienceSection } from './components/ExperienceSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { SeoRouteBanner } from './components/SeoRouteBanner';
import { FloatingActions } from './components/FloatingActions';
import { AiAssistantModal } from './components/AiAssistantModal';
import { TourCategory } from './types/travel';
import { SEO_ROUTES } from './data/seoRoutesData';

export default function App() {
  const [currentSeoRoute, setCurrentSeoRoute] = useState<string>('/');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [aiAssistantOpen, setAiAssistantOpen] = useState<boolean>(false);
  const [activeTourFilter, setActiveTourFilter] = useState<TourCategory>('all');
  const [bookingPrefill, setBookingPrefill] = useState<{
    packageTitle?: string;
    destination?: string;
    travelers?: number;
    travelDate?: string;
  }>({});

  // Sync route changes with filters and scroll
  const handleSelectSeoRoute = (path: string) => {
    setCurrentSeoRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const routeConfig = SEO_ROUTES[path];
    if (routeConfig?.tourFilter) {
      setActiveTourFilter(routeConfig.tourFilter as TourCategory);
    }
  };

  const handleOpenBooking = (packageTitle?: string) => {
    setBookingPrefill({
      packageTitle: packageTitle || '',
      destination: '',
      travelers: 2,
      travelDate: '',
    });
    setBookingModalOpen(true);
  };

  const handlePlanTripPrefill = (prefillData?: {
    destination?: string;
    tourType?: string;
    travelers?: number;
    travelDate?: string;
  }) => {
    if (prefillData?.tourType && prefillData.tourType !== 'all') {
      setActiveTourFilter(prefillData.tourType as TourCategory);
      const toursEl = document.getElementById('tours');
      if (toursEl) {
        toursEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    setBookingPrefill({
      destination: prefillData?.destination || '',
      travelers: prefillData?.travelers || 2,
      travelDate: prefillData?.travelDate || '',
      packageTitle: '',
    });
    setBookingModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    if (currentSeoRoute !== '/') {
      setCurrentSeoRoute('/');
    }
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDestination = (destId: string) => {
    // If there is an SEO route for this destination, switch or scroll
    const destRoute = `/${destId}`;
    if (SEO_ROUTES[destRoute]) {
      handleSelectSeoRoute(destRoute);
      return;
    }
    const destEl = document.getElementById('destinations');
    if (destEl) {
      destEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterTourType = (type: string) => {
    setActiveTourFilter(type as TourCategory);
    if (currentSeoRoute !== '/') {
      setCurrentSeoRoute('/');
    }
    const toursEl = document.getElementById('tours');
    if (toursEl) {
      toursEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll spy to update active nav state
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'destinations', 'tours', 'experiences', 'why-us', 'gallery', 'blog', 'faq', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080c14] text-neutral-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Sticky Luxury Navbar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* SEO Fast-Route Switcher Bar & Page-specific H1 Hero */}
        <SeoRouteBanner
          currentRoute={currentSeoRoute}
          onSelectRoute={handleSelectSeoRoute}
          onOpenBooking={(pkg) => handleOpenBooking(pkg)}
        />

        {/* If on Root Route ('/'), show the Full Cinematic Homepage */}
        {currentSeoRoute === '/' && (
          <div id="home">
            <HeroSection
              onExploreDestinations={() => handleNavigate('destinations')}
              onPlanTrip={handlePlanTripPrefill}
              onSelectDestination={handleSelectDestination}
              onFilterTourType={handleFilterTourType}
            />

            <StatsSection />
          </div>
        )}

        {/* Destinations Showcase */}
        {(currentSeoRoute === '/' ||
          currentSeoRoute === '/destinations' ||
          currentSeoRoute === '/pakistan-tours' ||
          currentSeoRoute === '/international-tours' ||
          currentSeoRoute.startsWith('/hunza') ||
          currentSeoRoute.startsWith('/skardu') ||
          currentSeoRoute.startsWith('/kashmir') ||
          currentSeoRoute.startsWith('/swat') ||
          currentSeoRoute.startsWith('/naran') ||
          currentSeoRoute.startsWith('/dubai') ||
          currentSeoRoute.startsWith('/turkey') ||
          currentSeoRoute.startsWith('/maldives')) && (
          <DestinationsSection
            onViewToursForDestination={handleSelectDestination}
            onBookDestination={(name) => handleOpenBooking(name)}
          />
        )}

        {/* Tour Packages Grid with Interactive Filtering */}
        <FeaturedToursSection
          activeFilter={activeTourFilter}
          onFilterChange={(cat) => setActiveTourFilter(cat)}
          onBookTour={(title) => handleOpenBooking(title)}
        />

        {/* Experience Section */}
        {currentSeoRoute === '/' && (
          <ExperienceSection onStartJourney={() => handleOpenBooking('Custom Bespoke Expedition')} />
        )}

        {/* Why Choose VELMORA Pillars */}
        {(currentSeoRoute === '/' || currentSeoRoute === '/custom-tours') && (
          <WhyChooseSection />
        )}

        {/* Travel Gallery & Lightbox */}
        {(currentSeoRoute === '/' || currentSeoRoute === '/destinations') && (
          <GallerySection />
        )}

        {/* Customer Reviews Carousel */}
        <ReviewsSection />

        {/* SEO Travel Blog & Guide Section */}
        {(currentSeoRoute === '/' || currentSeoRoute === '/blog') && (
          <BlogSection onPlanTrip={() => handleOpenBooking()} />
        )}

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Direct Contact & Office Section */}
        <ContactSection />

        {/* Newsletter Subscription */}
        <NewsletterSection />
      </main>

      {/* Luxury Footer */}
      <Footer
        onNavigate={handleNavigate}
        onFilterTourType={handleFilterTourType}
        onSelectDestination={handleSelectDestination}
      />

      {/* Interactive Booking & Travel Inquiry Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefillPackage={bookingPrefill.packageTitle}
        prefillDestination={bookingPrefill.destination}
        prefillTravelers={bookingPrefill.travelers}
        prefillDate={bookingPrefill.travelDate}
      />

      {/* Floating Action Buttons: WhatsApp on bottom-right, AI Assistant directly above it */}
      <FloatingActions onOpenAiAssistant={() => setAiAssistantOpen(true)} />

      {/* AI Travel Assistant Modal */}
      <AiAssistantModal
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
        onBookTour={(tourTitle) => handleOpenBooking(tourTitle)}
        onSelectDestination={(destId) => handleSelectDestination(destId)}
      />
    </div>
  );
}
