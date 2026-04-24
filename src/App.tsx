import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroVideo } from './components/HeroVideo';
import { BrandStatement } from './components/BrandStatement';
import { HideawaySection } from './components/HideawaySection';
import { SeasonalExperiences } from './components/SeasonalExperiences';
import { AboutUs } from './components/AboutUs';
import { Blogs } from './components/Blogs';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FabricSuits } from './components/FabricSuits';
import { ServicesWeOffer } from './components/ServicesWeOffer';
import { OurProcess } from './components/OurProcess';
import './App.css';

function App() {
  const path = window.location.pathname;
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBookingOpen(true);
    }, 5000); // Opens after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <Header onOpenBooking={() => setIsBookingOpen(true)} />
      <main className="main-content">
        {path === '/about' ? (
          <AboutUs onOpenBooking={() => setIsBookingOpen(true)} />
        ) : path === '/blogs' ? (
          <Blogs />
        ) : path === '/process' ? (
          <OurProcess />
        ) : (
          <>
            <HeroVideo />
            <FabricSuits />
            <ServicesWeOffer />
            <BrandStatement />
            <HideawaySection />
            <SeasonalExperiences />
            <Blogs />
          </>
        )}
      </main>
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

export default App;
