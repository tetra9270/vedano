import { useState, useEffect, useRef } from 'react';
import './AboutUs.css';
import brandImg from '../assets/about_brand.png';
import craftsmanshipImg from '../assets/about_craftsmanship.png';
import fabricImg from '../assets/vedano_fabric_selection.png';
import precisionImg from '../assets/vedano_suit_precision.png';
import detailImg from '../assets/vedano_bespoke_detail.png';

export const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest. We will contact you shortly.');
  };

  return (
    <div className="bespoke-journey">
      {/* SECTION 1: HERO & THE IDEA */}
      <section 
        className="journey-section hero-about reveal-on-scroll" 
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <div className="journey-container">
          <div className="hero-about-header reveal-item delay-1">
            <span className="section-subtitle">ABOUT VEDANO</span>
            <h1 className="section-main-title">Bespoke, Made Accessible</h1>
          </div>
          <div className="journey-grid">
            <div className="journey-text reveal-item delay-2">
              <h2 className="journey-h2">The Idea</h2>
              <p>
                Bespoke tailoring has always carried a certain distance. Not because of quality, 
                but because of how it’s been built—slow, layered, and often priced in a way that places it out of reach.
              </p>
              <p>
                At Vedano, we chose to question that structure. What if the experience remained personal, 
                the fit remained precise, and the materials remained exceptional, but the system behind it became smarter?
              </p>
            </div>
            <div className="journey-image reveal-item delay-3 parallax-wrap">
              <img src={brandImg} alt="The Idea of Vedano" className="parallax-img" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE DO DIFFERENTLY */}
      <section 
        className="journey-section alt-bg reveal-on-scroll"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <div className="journey-container">
          <div className="journey-grid reverse">
            <div className="journey-text reveal-item delay-1">
              <h2 className="journey-h2">What We Do Differently</h2>
              <p className="lead-text">We don’t dilute craftsmanship. We refine the way it’s delivered.</p>
              <ul className="journey-list">
                <li>We work with a variety of elegant fabrics, including Italian fabrics known for their structure, breathability, and longevity</li>
                <li>We focus on precision where it actually impacts fit, movement, and presence</li>
                <li>We remove unnecessary layers that traditionally inflate cost without improving the outcome</li>
              </ul>
              <p className="highlight-text">
                The result is simple.<br />
                You experience bespoke as it should be, considered, personal, and exact, without it becoming excessive.
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
        ref={(el) => (sectionRefs.current[2] = el)}
      >
        <div className="journey-container">
          <div className="center-content-box reveal-item delay-1">
            <h2 className="journey-h2">Why It Matters in Dubai</h2>
            <div className="dubai-text-flow">
              <p>
                In a city where people move fast, attend often, and are constantly seen, what you wear isn’t occasional; 
                it’s daily language. But traditional bespoke hasn’t adapted to that rhythm. It remains slow, expensive, 
                and often inaccessible.
              </p>
              <p className="philosophy-bridge">
                Vedano is built for this reality. Clothing that keeps up with your life, holds its structure in the climate, 
                and feels natural across long days and late evenings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PHILOSOPHY */}
      <section 
        className="journey-section philosophy-accent reveal-on-scroll"
        ref={(el) => (sectionRefs.current[3] = el)}
      >
        <div className="journey-container">
          <div className="philosophy-grid">
            <div className="phil-card reveal-item delay-1">
              <span className="phil-heading">Precision is non-negotiable.</span>
            </div>
            <div className="phil-card reveal-item delay-2">
              <span className="phil-heading">Quality is non-negotiable.</span>
            </div>
            <div className="phil-card reveal-item delay-3">
              <span className="phil-heading">Price doesn’t have to be.</span>
            </div>
          </div>
          <p className="phil-summary reveal-item delay-4">
            We believe more people should experience what it feels like to wear something built for them, not adjusted to them.
          </p>
        </div>
      </section>

      {/* SECTION 5: THE HANDS BEHIND VEDANO */}
      <section 
        className="journey-section hands-intro reveal-on-scroll"
        ref={(el) => (sectionRefs.current[4] = el)}
      >
        <div className="journey-container">
          <div className="journey-grid">
            <div className="journey-text reveal-item delay-1">
              <h2 className="journey-h2">THE HANDS BEHIND VEDANO</h2>
              <p>
                Behind every garment at Vedano is a level of experience that doesn’t come from training; 
                it comes from years of repetition, correction, and refinement.
              </p>
              <p>
                Our craftsmen have spent decades in the discipline of tailoring. Not just producing garments, 
                but understanding bodies, posture, movement, and the small adjustments most people never notice, but always feel.
              </p>
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
        ref={(el) => (sectionRefs.current[5] = el)}
      >
        <div className="journey-container">
          <div className="dual-grid reveal-item delay-1">
            <div className="dual-item">
              <h3 className="section-h3">Built Across Generations of Style</h3>
              <p>Their work isn’t limited to one school of tailoring. They’ve worked across:</p>
              <ul className="journey-list">
                <li>Traditional constructions</li>
                <li>Modern silhouettes</li>
                <li>Contemporary fits</li>
                <li>Classic proportions</li>
              </ul>
              <p>And more importantly, they understand how to bring these together, depending on the person wearing it.</p>
              <p>Because no single style works for everyone.</p>
            </div>
            <div className="dual-item">
              <h3 className="section-h3">Precision That Comes From Volume</h3>
              <p>When someone has worked on thousands of garments, their judgment changes.</p>
              <p>They don’t rely on templates.</p>
              <p>They don’t guess.</p>
              <p>They see what needs to be done almost immediately, where to adjust, where to hold structure, and where to let the fabric move.</p>
              <p>That level of instinct is what shapes the final result.</p>
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
        ref={(el) => (sectionRefs.current[6] = el)}
      >
        <div className="journey-container">
          <div className="journey-grid">
            <div className="journey-image reveal-item delay-1">
              <img src={detailImg} alt="Bespoke Suit Detail" />
            </div>
            <div className="journey-text reveal-item delay-2">
              <h2 className="journey-h2">Why This Matters</h2>
              <p>Accessible pricing means nothing without consistency.</p>
              <p>What makes Vedano work is not just the system, but the people behind it.</p>
              <p>The same hands that have delivered high-level tailoring for years are the ones shaping every piece here.</p>

              <h2 className="journey-h2 mt-60">The Result</h2>
              <p className="result-text">
                Garments that feel considered from the first fitting.<br />
                Balanced. Natural. Precise.<br />
                Not because they were rushed, but because they were made by people who have done this long enough to get it right without excess.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOOK AN APPOINTMENT */}
      <section 
        className="journey-section appointment-section reveal-on-scroll"
        ref={(el) => (sectionRefs.current[7] = el)}
        id="book-appointment"
      >
        <div className="journey-container">
          <div className="appointment-wrap">
            <div className="appointment-info reveal-item delay-1">
              <h2 className="journey-h2">Book an Appointment Now</h2>
              <p>Experience the art of accessible bespoke tailoring in Dubai.</p>
            </div>
            <div className="appointment-form-container reveal-item delay-2">
              <form className="appointment-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="NAME" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <span className="input-focus-line"></span>
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="EMAIL" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <span className="input-focus-line"></span>
                </div>
                <div className="form-group">
                  <textarea 
                    placeholder="MESSAGE BOX" 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                  <span className="input-focus-line"></span>
                </div>
                <button type="submit" className="submit-btn-luxury">
                  <span>SCHEDULE CONSULTATION</span>
                  <div className="btn-bg"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

