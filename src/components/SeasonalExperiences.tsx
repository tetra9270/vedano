import './SeasonalExperiences.css';
import suitImg from '../assets/vedano_suit_precision.png';
import fabricImg from '../assets/vedano_fabric_selection.png';
import eveningImg from '../assets/vedano_evening_wear.png';
import craftImg from '../assets/vedano_artisanal_craft.png';
import heritageImg from '../assets/vedano_heritage.png';
import fittingImg from '../assets/vedano_fitting.png';

const EXPERIENCES = [
  {
    id: 1,
    image: suitImg,
    subtitle: 'THE SIGNATURE SUIT',
    title: 'Precision & Character',
    description: 'The cornerstone of a power wardrobe. A symphony of structure and softness, tailored uniquely to your silhouette.',
    link: '/suiting'
  },
  {
    id: 2,
    image: fabricImg,
    subtitle: 'THE FABRIC ODYSSEY',
    title: 'Curated Rarity',
    description: "Embark on a sensory journey through the world's most precious fibers—from ultra-fine Vicuña to the rarest hand-spun silks.",
    link: '/fabrics'
  },
  {
    id: 3,
    image: eveningImg,
    subtitle: 'GALA & GRANDEUR',
    title: 'Timeless Evening Wear',
    description: "Rule the night in Vedano. Tuxedos that don't just attend the event—they define it with uncompromising elegance.",
    link: '/evening-wear'
  },
  {
    id: 4,
    image: craftImg,
    subtitle: 'THE HAND-STITCHED SOUL',
    title: 'Artisanal Craft',
    description: 'Witness the invisible details. Over 50 hours of hand-craftsmanship go into every single Bespoke Vedano creation.',
    link: '/craftsmanship'
  },
  {
    id: 5,
    image: heritageImg,
    subtitle: 'MODERN HERITAGE',
    title: 'Ancestral Vision',
    description: 'Where ancestral techniques meet contemporary vision. Reviving the golden age of style for the modern visionary.',
    link: '/heritage'
  },
  {
    id: 6,
    image: fittingImg,
    subtitle: 'THE PRIVATE SALON',
    title: 'Refined Experience',
    description: 'An exclusive domain for the discerning few. Enjoy a curated styling journey in the absolute privacy of our luxury lounge.',
    link: '/consultation'
  }
];

export const SeasonalExperiences = () => {
  return (
    <section className="seasonal-section">
      <div className="seasonal-scroll-container">
        <div className="seasonal-scroll-inner">
          <div className="seasonal-header-item">
            <h2 className="seasonal-title">The Vedano Bespoke Collections</h2>
            <p className="seasonal-intro">
              Elevate your existence with garments that command respect and radiate sophistication. Explore the artistry of master tailoring.
            </p>
          </div>
          
          {EXPERIENCES.map(exp => (
            <div key={exp.id} className="seasonal-item">
              <div className="seasonal-img-wrap">
                <img src={exp.image} alt={exp.title} />
              </div>
              <div className="seasonal-item-content">
                <span className="seasonal-item-subtitle">{exp.subtitle}</span>
                <h3 className="seasonal-item-title">{exp.title}</h3>
                <p className="seasonal-item-desc">{exp.description}</p>
                <a href={exp.link} className="seasonal-item-link">Explore the Art</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
