import { useLanguage } from '../context/LanguageContext';
import './WorldOfVedano.css';
import suitImg from '../assets/vedano_suit_precision.png';
import eveningImg from '../assets/vedano_evening_wear.png'; 
import detailImg from '../assets/vedano_bespoke_detail.png';

export const WorldOfVedano = () => {
  const { t } = useLanguage();

  const STORIES = [
    {
      id: 1,
      image: suitImg,
      subtitle: t('world.items.1.subtitle'),
      title: t('world.items.1.title'),
      description: t('world.items.1.desc'),
      linkText: t('world.items.1.link'),
      linkUrl: '/book'
    },
    {
      id: 2,
      image: eveningImg,
      subtitle: t('world.items.2.subtitle'),
      title: t('world.items.2.title'),
      description: t('world.items.2.desc'),
      linkText: t('world.items.2.link'),
      linkUrl: '/gift-card',
      isGiftCard: true
    },
    {
      id: 3,
      image: detailImg,
      subtitle: t('world.items.3.subtitle'),
      title: t('world.items.3.title'),
      description: t('world.items.3.desc'),
      linkText: t('world.items.3.link'),
      linkUrl: '/shop'
    }
  ];

  return (
    <section className="world-aman-section">
      <h2 className="world-aman-main-title">{t('world.mainTitle')}</h2>
      
      <div className="world-aman-grid">
        {STORIES.map(story => (
          <div key={story.id} className="world-aman-item">
            <div className="world-aman-img-wrap">
              <img src={story.image} alt={story.title} />
              {story.isGiftCard && (
                <div className="gift-card-overlay">
                  <span className="gift-card-brand">VEDANO</span>
                  <span className="gift-card-text">{t('world.giftCardText')}</span>
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
