import { useLanguage } from '../context/LanguageContext';
import './SeasonalExperiences.css';
import suitImg from '../assets/vedano_suit_precision.png';
import fabricImg from '../assets/vedano_fabric_selection.png';
import eveningImg from '../assets/vedano_evening_wear.png';
import craftImg from '../assets/vedano_artisanal_craft.png';
import heritageImg from '../assets/vedano_heritage.png';
import fittingImg from '../assets/vedano_fitting.png';

export const SeasonalExperiences = () => {
  const { t } = useLanguage();
  
  const EXPERIENCES = [
    {
      id: 1,
      image: suitImg,
      subtitle: t('seasonal.items.1.subtitle'),
      title: t('seasonal.items.1.title'),
      description: t('seasonal.items.1.desc'),
      link: '/suiting'
    },
    {
      id: 2,
      image: fabricImg,
      subtitle: t('seasonal.items.2.subtitle'),
      title: t('seasonal.items.2.title'),
      description: t('seasonal.items.2.desc'),
      link: '/fabrics'
    },
    {
      id: 3,
      image: eveningImg,
      subtitle: t('seasonal.items.3.subtitle'),
      title: t('seasonal.items.3.title'),
      description: t('seasonal.items.3.desc'),
      link: '/evening-wear'
    },
    {
      id: 4,
      image: craftImg,
      subtitle: t('seasonal.items.4.subtitle'),
      title: t('seasonal.items.4.title'),
      description: t('seasonal.items.4.desc'),
      link: '/craftsmanship'
    },
    {
      id: 5,
      image: heritageImg,
      subtitle: t('seasonal.items.5.subtitle'),
      title: t('seasonal.items.5.title'),
      description: t('seasonal.items.5.desc'),
      link: '/heritage'
    },
    {
      id: 6,
      image: fittingImg,
      subtitle: t('seasonal.items.6.subtitle'),
      title: t('seasonal.items.6.title'),
      description: t('seasonal.items.6.desc'),
      link: '/consultation'
    }
  ];

  return (
    <section className="seasonal-section">
      <div className="seasonal-scroll-container">
        <div className="seasonal-scroll-inner">
          <div className="seasonal-header-item">
            <h2 className="seasonal-title">{t('seasonal.mainTitle')}</h2>
            <p className="seasonal-intro">
              {t('seasonal.intro')}
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
                <a href={exp.link} className="seasonal-item-link">{t('seasonal.exploreArt')}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
