import React, { useEffect, useRef } from 'react';
import './ServicesWeOffer.css';

// Using existing high-quality assets as placeholders
import occasionImg from '../assets/vedano_evening_wear.png';
import weddingImg from '../assets/black_tuxedo_worn_1776977341305.png';
import formalImg from '../assets/navy_suit_worn_1776975889192.png';
import casualImg from '../assets/beige_suit_worn_1776975989678.png';

export const ServicesWeOffer: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-now');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    { title: 'Occasion Wear', image: occasionImg },
    { title: 'Wedding Wear', image: weddingImg },
    { title: 'Formal & Corporate Wear', image: formalImg },
    { title: 'Casual Wear', image: casualImg },
  ];

  return (
    <section className="services-offer-section" ref={sectionRef}>
      <div className="services-offer-container">
        <h2 className="services-offer-title fade-in-up">Services We Offer</h2>
        <div className="services-offer-grid">
          {services.map((service, index) => (
            <div 
              className="service-card fade-in-up" 
              key={index}
              style={{ animationDelay: `${0.4 + index * 0.3}s` }}
            >
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} className="service-image" />
              </div>
              <h3 className="service-title">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
