import { useLanguage } from '../context/LanguageContext';
import './BrandStatement.css';

export const BrandStatement = () => {
  const { t } = useLanguage();
  return (
    <section className="brand-statement-section">
      <div className="brand-statement-content">
        <span className="brand-subtitle">{t('brandStatement.subtitle')}</span>
        <h1 className="brand-main-heading">{t('brandStatement.mainHeading')}</h1>
        <p className="brand-description">
          {t('brandStatement.description')}
        </p>
      </div>
    </section>
  );
};
