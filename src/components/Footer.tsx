import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export const Footer = () => {
  const { t } = useLanguage();

  const FOOTER_LINKS = {
    moreInfo: [
      { label: 'Vedano Group', links: ['- Vedano'] },
      { label: 'Gift Card', links: [] },
      { label: 'Forthcoming Services', links: [] }
    ],
    destinations: [
      {
        region: 'Atelier Location',
        items: [
          'Vedano Dubai'
        ]
      },
      {
        region: 'Services',
        items: [
          'Bespoke Tailoring',
          'Made-to-Measure',
          'Personal Styling',
          'Wardrobe Consultation',
          'Wedding Atelier',
          'Corporate Bespoke'
        ]
      }
    ]
  };

  return (
    <footer className="aman-footer">
      <div className="footer-signup">
        <div className="signup-left">
          <h2 className="signup-title">{t('footer.signupTitle')}</h2>
        </div>
        <div className="signup-center">
          <p className="signup-desc">
            {t('footer.signupDesc')}
          </p>
        </div>
        <div className="signup-right">
          <button className="signup-btn">{t('footer.signUpBtn')}</button>
        </div>
      </div>

      <div className="footer-nav">
        <div className="nav-column">
          <h3 className="nav-title">{t('footer.moreInfoTitle')}</h3>
          <ul className="nav-list">
            {FOOTER_LINKS.moreInfo.map((item, i) => (
              <li key={i} className="nav-item">
                <a href={`#${item.label}`}>{item.label}</a>
                {item.links.length > 0 && (
                  <ul className="sub-nav-list">
                    {item.links.map((sub, j) => (
                      <li key={j} className="sub-nav-item"><a href={`#${sub}`}>{sub}</a></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="footer-contact">
            <button className="contact-btn">{t('footer.contactUs')}</button>
          </div>
        </div>

        <div className="nav-destinations">
          <h3 className="nav-title">{t('footer.vedanoWorldTitle')}</h3>
          <div className="destination-columns">
            {FOOTER_LINKS.destinations.map((region, i) => (
              <div key={i} className="destination-col">
                <h4 className="region-title">{region.region}:</h4>
                <ul className="destination-list">
                  {region.items.map((item, j) => (
                    <li key={j} className="destination-item"><a href={`#${item}`}>{item}</a></li>
                  ))}
                </ul>
                {region.region === 'Atelier Location' && (
                  <div className="footer-map-container" style={{ marginTop: '20px', borderRadius: '4px', overflow: 'hidden', height: '150px', width: '100%' }}>
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592731265!2d55.1453939!3d25.0750095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1713898192345!5m2!1sen!2sus" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Vedano Dubai Location"
                    ></iframe>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">VEDANO</div>
        
        <div className="footer-social-section">
          <span className="social-label">{t('footer.followUs')}</span>
          {/* ... existing social icons ... */}
          <div className="social-icons">
            <a href="#ig" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#x" aria-label="X"><i className="fab fa-x-twitter"></i></a>
            <a href="#yt" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            <a href="#fb" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#wa" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            <a href="#tiktok" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>

        <div className="footer-copyright">
          <span>{t('footer.copyright')}</span>
        </div>
      </div>
    </footer>
  );
};
