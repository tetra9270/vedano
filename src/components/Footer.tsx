import './Footer.css';

const FOOTER_LINKS = {
  moreInfo: [
    { label: 'Vedano Group', links: ['- Vedano', '- Vedano Essentials', '- Vedano Interiors', '- Vedano Bespoke'] },
    { label: 'Gift Card', links: [] },
    { label: 'Forthcoming Services', links: [] },
    { label: 'Careers', links: [] },
    { label: 'Leadership', links: [] },
    { label: 'Sustainability', links: [] },
    { label: 'Privacy Notice', links: [] },
    { label: 'Cookie Policy', links: [] }
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

export const Footer = () => {
  return (
    <footer className="aman-footer">
      <div className="footer-signup">
        <div className="signup-left">
          <h2 className="signup-title">Get inspired</h2>
        </div>
        <div className="signup-center">
          <p className="signup-desc">
            To receive updates about exclusive garment releases, atelier events, and more, please register your interest.
          </p>
        </div>
        <div className="signup-right">
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>

      <div className="footer-nav">
        <div className="nav-column">
          <h3 className="nav-title">More information</h3>
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
            <button className="contact-btn">Contact Us</button>
          </div>
        </div>

        <div className="nav-destinations">
          <h3 className="nav-title">Vedano World</h3>
          <div className="destination-columns">
            {FOOTER_LINKS.destinations.map((region, i) => (
              <div key={i} className="destination-col">
                <h4 className="region-title">{region.region}:</h4>
                <ul className="destination-list">
                  {region.items.map((item, j) => (
                    <li key={j} className="destination-item"><a href={`#${item}`}>{item}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">VEDANO</div>
        
        <div className="footer-social-section">
          <span className="social-label">Follow us on:</span>
          {/* ... existing social icons ... */}
          <div className="social-icons">
            <a href="#fb" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#x" aria-label="X"><i className="fab fa-x-twitter"></i></a>
            <a href="#ig" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#yt" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            <a href="#pi" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a>
            <a href="#we" aria-label="Weibo"><i className="fab fa-weibo"></i></a>
            <a href="#li" aria-label="Line"><i className="fab fa-line"></i></a>
            <a href="#wechat" aria-label="WeChat"><i className="fab fa-weixin"></i></a>
            <a href="#red" aria-label="Little Red Book"><i className="fas fa-book-open"></i></a>
            <a href="#wa" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>

        <div className="footer-copyright">
          <span>Copyright 2026, Vedano Group S.a.r.l.</span>
        </div>
      </div>
    </footer>
  );
};
