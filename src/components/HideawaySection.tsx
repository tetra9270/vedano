import { useLanguage } from '../context/LanguageContext';
import './HideawaySection.css';
import atelierImg from '../assets/vedano_atelier.png';
import detailImg from '../assets/vedano_bespoke_detail.png';

export const HideawaySection = () => {
  const { t } = useLanguage();
  return (
    <section className="hideaway-section">
      <div className="hideaway-grid">
        <div className="hideaway-item">
          <div className="hideaway-img-wrap">
            <img src={atelierImg} alt="Vedano Atelier" />
          </div>
          <div className="hideaway-item-content">
            <span className="hideaway-subtitle">{t('hideaway.sanctuarySubtitle')}</span>
            <h3 className="hideaway-title">{t('hideaway.sanctuaryTitle')}</h3>
            <p className="hideaway-desc">{t('hideaway.sanctuaryDesc')}</p>
            <a href="/atelier" className="hideaway-link">{t('hideaway.exploreAtelier')}</a>
          </div>
        </div>
        <div className="hideaway-item wide">
          <div className="hideaway-img-wrap">
            <img src={detailImg} alt="Bespoke Elegance" />
          </div>
          <div className="hideaway-item-content">
            <span className="hideaway-subtitle">{t('hideaway.masterpieceSubtitle')}</span>
            <h3 className="hideaway-title">{t('hideaway.masterpieceTitle')}</h3>
            <p className="hideaway-desc">{t('hideaway.masterpieceDesc')}</p>
            <a href="/bespoke" className="hideaway-link">{t('hideaway.startJourney')}</a>
          </div>
        </div>
      </div>
    </section>
  );
};
