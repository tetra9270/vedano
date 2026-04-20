import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './AboutUs.css';
import brandImg from '../assets/about_brand.png';
import craftsmanshipImg from '../assets/about_craftsmanship.png';
import fabricImg from '../assets/vedano_fabric_selection.png';
import precisionImg from '../assets/vedano_suit_precision.png';
import detailImg from '../assets/vedano_bespoke_detail.png';

export const AboutUs = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  const { t } = useLanguage();
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bespoke-journey">
      {/* SECTION 1: HERO & THE IDEA */}
      <section 
        className="journey-section hero-about reveal-on-scroll" 
        ref={(el) => { sectionRefs.current[0] = el; }}
      >
        <div className="journey-container">
          <div className="hero-about-header reveal-item delay-1">
            <span className="section-subtitle">{t('about.subtitle')}</span>
            <h1 className="section-main-title">{t('about.mainTitle')}</h1>
          </div>
          <div className="journey-grid">
            <div className="journey-text reveal-item delay-2">
              <h2 className="journey-h2">{t('about.ideaTitle')}</h2>
              <p>{t('about.ideaP1')}</p>
              <p>{t('about.ideaP2')}</p>
            </div>
            <div className="journey-image reveal-item delay-3 parallax-wrap">
              <img src={brandImg} alt="The Idea of Vedano" className="parallax-img" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE HANDS BEHIND VEDANO */}
      <section 
        className="journey-section hands-intro reveal-on-scroll"
        ref={(el) => { sectionRefs.current[1] = el; }}
      >
        <div className="journey-container">
          <div className="journey-grid">
            <div className="journey-text reveal-item delay-1">
              <h2 className="journey-h2">{t('about.handsTitle')}</h2>
              <p>{t('about.handsP1')}</p>
              <p>{t('about.handsP2')}</p>
            </div>
            <div className="journey-image reveal-item delay-2">
              <img src={craftsmanshipImg} alt="Tailoring Craftsmanship" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 & 7: GENERATIONS & VOLUME */}
      <section 
        className="journey-section alt-bg reveal-on-scroll"
        ref={(el) => { sectionRefs.current[2] = el; }}
      >
        <div className="journey-container">
          <div className="dual-grid reveal-item delay-1">
            <div className="dual-item">
              <h3 className="section-h3">{t('about.generationsTitle')}</h3>
              <p>{t('about.generationsP1')}</p>
              <ul className="journey-list">
                <li>{t('about.generationsL1')}</li>
                <li>{t('about.generationsL2')}</li>
                <li>{t('about.generationsL3')}</li>
                <li>{t('about.generationsL4')}</li>
              </ul>
              <p>{t('about.generationsP2')}</p>
              <p>{t('about.generationsP3')}</p>
            </div>
            <div className="dual-item">
              <h3 className="section-h3">{t('about.volumeTitle')}</h3>
              <p>{t('about.volumeP1')}</p>
              <p>{t('about.volumeP2')}</p>
              <p>{t('about.volumeP3')}</p>
              <p>{t('about.volumeP4')}</p>
              <p>{t('about.volumeP5')}</p>
            </div>
          </div>
          <div className="full-width-image-wrap reveal-item delay-2">
            <img src={precisionImg} alt="Precision Tailoring" />
          </div>
        </div>
      </section>

      {/* SECTION 8 & 9: WHY IT MATTERS & THE RESULT */}
      <section 
        className="journey-section result-focus reveal-on-scroll"
        ref={(el) => { sectionRefs.current[3] = el; }}
      >
        <div className="journey-container">
          <div className="journey-grid">
            <div className="journey-image reveal-item delay-1">
              <img src={detailImg} alt="Bespoke Suit Detail" />
            </div>
            <div className="journey-text reveal-item delay-2">
              <h2 className="journey-h2">{t('about.whyMattersTitle')}</h2>
              <p>{t('about.whyMattersP1')}</p>
              <p>{t('about.whyMattersP2')}</p>
              <p>{t('about.whyMattersP3')}</p>

              <h2 className="journey-h2 mt-60">{t('about.resultTitle')}</h2>
              <p className="result-text">
                {t('about.resultText1')}<br />
                {t('about.resultText2')}<br />
                {t('about.resultText3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE DO DIFFERENTLY */}
      <section 
        className="journey-section alt-bg reveal-on-scroll"
        ref={(el) => { sectionRefs.current[4] = el; }}
      >
        <div className="journey-container">
          <div className="journey-grid reverse">
            <div className="journey-text reveal-item delay-1">
              <h2 className="journey-h2">{t('about.doDiffTitle')}</h2>
              <p className="lead-text">{t('about.doDiffLead')}</p>
              <ul className="journey-list">
                <li>{t('about.doDiffL1')}</li>
                <li>{t('about.doDiffL2')}</li>
                <li>{t('about.doDiffL3')}</li>
              </ul>
              <p className="highlight-text">
                {t('about.doDiffHigh1')}<br />
                {t('about.doDiffHigh2')}
              </p>
            </div>
            <div className="journey-image reveal-item delay-2">
              <div className="image-frame-luxury">
                <img src={fabricImg} alt="Italian Fabrics" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DUBAI REALITY */}
      <section 
        className="journey-section dubai-context reveal-on-scroll"
        ref={(el) => { sectionRefs.current[5] = el; }}
      >
        <div className="journey-container">
          <div className="center-content-box reveal-item delay-1">
            <h2 className="journey-h2">{t('about.dubaiTitle')}</h2>
            <div className="dubai-text-flow">
              <p>
                {t('about.dubaiP1')}
              </p>
              <p className="philosophy-bridge">
                {t('about.dubaiP2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PHILOSOPHY */}
      <section 
        className="journey-section philosophy-accent reveal-on-scroll"
        ref={(el) => { sectionRefs.current[6] = el; }}
      >
        <div className="journey-container">
          <div className="philosophy-grid">
            <div className="phil-card reveal-item delay-1">
              <span className="phil-heading">{t('about.phil1')}</span>
            </div>
            <div className="phil-card reveal-item delay-2">
              <span className="phil-heading">{t('about.phil2')}</span>
            </div>
            <div className="phil-card reveal-item delay-3">
              <span className="phil-heading">{t('about.phil3')}</span>
            </div>
          </div>
          <p className="phil-summary reveal-item delay-4">
            {t('about.philSummary')}
          </p>
        </div>
      </section>

      {/* BOOK AN APPOINTMENT */}
      <section 
        className="journey-section appointment-section reveal-on-scroll"
        ref={(el) => { sectionRefs.current[7] = el; }}
        id="book-appointment"
      >
        <div className="journey-container">
          <div className="appointment-wrap">
            <div className="appointment-info reveal-item delay-1">
              <h2 className="journey-h2">{t('about.bookTitle')}</h2>
              <p>{t('about.bookDesc')}</p>
            </div>
            <div className="appointment-form-container reveal-item delay-2">
              <div className="appointment-form-placeholder">
                <button className="submit-btn-luxury" onClick={onOpenBooking}>
                  <span>{t('about.formSubmit')}</span>
                  <div className="btn-bg"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
