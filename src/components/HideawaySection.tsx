import './HideawaySection.css';
import atelierImg from '../assets/vedano_atelier.png';
import detailImg from '../assets/vedano_bespoke_detail.png';

export const HideawaySection = () => {
  return (
    <section className="hideaway-section">
      <div className="hideaway-grid">
        <div className="hideaway-item">
          <div className="hideaway-img-wrap">
            <img src={atelierImg} alt="Vedano Atelier" />
          </div>
          <div className="hideaway-item-content">
            <span className="hideaway-subtitle">THE SANCTUARY OF STYLE</span>
            <h3 className="hideaway-title">Where Your Legacy Is Crafted</h3>
            <p className="hideaway-desc">Step into a world where time slows down and perfection takes shape. The Vedano Atelier is the birthplace of your most confident self.</p>
            <a href="/atelier" className="hideaway-link">Explore the Atelier</a>
          </div>
        </div>
        <div className="hideaway-item wide">
          <div className="hideaway-img-wrap">
            <img src={detailImg} alt="Bespoke Elegance" />
          </div>
          <div className="hideaway-item-content">
            <span className="hideaway-subtitle">MASTERPIECE IN MOTION</span>
            <h3 className="hideaway-title">The Gold Standard of Personal Elegance</h3>
            <p className="hideaway-desc">More than a suit; a second skin. Measured to the millimetre and hand-finished with a passion that transcends mere fashion.</p>
            <a href="/bespoke" className="hideaway-link">Start Your Journey</a>
          </div>
        </div>
      </div>
    </section>
  );
};
