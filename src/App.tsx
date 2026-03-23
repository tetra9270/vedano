import { Header } from './components/Header';
import { HeroVideo } from './components/HeroVideo';
import { BrandStatement } from './components/BrandStatement';
import { HideawaySection } from './components/HideawaySection';
import { SeasonalExperiences } from './components/SeasonalExperiences';
import { WorldOfVedano } from './components/WorldOfVedano';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <HeroVideo />
        <BrandStatement />
        <HideawaySection />
        <SeasonalExperiences />
        <WorldOfVedano />
      </main>
      <Footer />
    </div>
  );
}

export default App;
