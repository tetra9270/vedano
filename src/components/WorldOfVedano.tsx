import './WorldOfVedano.css';
import suitImg from '../assets/vedano_suit_precision.png';
import eveningImg from '../assets/vedano_evening_wear.png'; 
import detailImg from '../assets/vedano_bespoke_detail.png';

const STORIES = [
  {
    id: 1,
    image: suitImg,
    subtitle: 'THE FIRST FITTING',
    title: 'The Journey to Perfection',
    description: 'Your transformation begins with a single measure. Secure your entry into the world of Bespoke Vedano today.',
    linkText: 'Secure Your Fitting',
    linkUrl: '/book'
  },
  {
    id: 2,
    image: eveningImg,
    subtitle: 'THE ULTIMATE GIFT',
    title: 'Passports to Style',
    description: 'Give the gift of perfection. A Bespoke Vedano invitation is a passport to a lifetime of uncompromising style.',
    linkText: 'Extend an Invitation',
    linkUrl: '/gift-card',
    isGiftCard: true
  },
  {
    id: 3,
    image: detailImg,
    subtitle: 'THE CURATED EDIT',
    title: 'Finishing Touches',
    description: 'Complete the look with artisan-made essentials. Each piece is a masterclass in finishing and refined detail.',
    linkText: 'Explore the Edit',
    linkUrl: '/shop'
  }
];

export const WorldOfVedano = () => {
  return (
    <section className="world-aman-section">
      <h2 className="world-aman-main-title">Inside the World of Vedano</h2>
      
      <div className="world-aman-grid">
        {STORIES.map(story => (
          <div key={story.id} className="world-aman-item">
            <div className="world-aman-img-wrap">
              <img src={story.image} alt={story.title} />
              {story.isGiftCard && (
                <div className="gift-card-overlay">
                  <span className="gift-card-brand">VEDANO</span>
                  <span className="gift-card-text">GIFT CARD</span>
                </div>
              )}
            </div>
            <div className="world-aman-item-content">
              <span className="world-aman-item-subtitle">{story.subtitle}</span>
              <h3 className="world-aman-item-title">{story.title}</h3>
              <p className="world-aman-item-desc">{story.description}</p>
              <a href={story.linkUrl} className="world-aman-item-link">{story.linkText}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
