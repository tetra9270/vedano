import { useState } from 'react';
import { Header } from './components/Header';
import { HeroVideo } from './components/HeroVideo';
import { BrandStatement } from './components/BrandStatement';
import { HideawaySection } from './components/HideawaySection';
import { SeasonalExperiences } from './components/SeasonalExperiences';
import { WorldOfVedano } from './components/WorldOfVedano';
import { AboutUs } from './components/AboutUs';
import { Blogs } from './components/Blogs';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import './App.css';

function App() {
  const path = window.location.pathname;
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="app-container">
      <Header onOpenBooking={() => setIsBookingOpen(true)} />
      <main className="main-content">
        {path === '/about' ? (
          <AboutUs onOpenBooking={() => setIsBookingOpen(true)} />
        ) : path === '/blogs' ? (
          <Blogs />
        ) : (
          <>
            <HeroVideo />
            <BrandStatement />
            <HideawaySection />
            <SeasonalExperiences />
            <WorldOfVedano />
          </>
        )}
      </main>
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

export default App;
