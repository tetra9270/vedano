import React, { useState, useRef, useEffect } from 'react';
import './FabricSuits.css';
import { TryOnModal } from './TryOnModal';

import navyJacket from '../assets/navy_suit_jacket_1776975858086.png';
import navyPants from '../assets/navy_suit_pants_1776975873597.png';
import navyWorn from '../assets/navy_suit_worn_1776975889192.png';
import charcoalJacket from '../assets/charcoal_suit_jacket_1776975907612.png';
import charcoalPants from '../assets/charcoal_suit_pants_1776975923713.png';
import charcoalWorn from '../assets/charcoal_suit_worn_1776975938920.png';
import beigeJacket from '../assets/beige_suit_jacket_1776975959948.png';
import beigePants from '../assets/beige_suit_pants_1776975974168.png';
import beigeWorn from '../assets/beige_suit_worn_1776975989678.png';

import oliveJacket from '../assets/olive_suit_jacket_1776977257359.png';
import olivePants from '../assets/olive_suit_pants_1776977271915.png';
import oliveWorn from '../assets/olive_suit_worn_1776977289275.png';

import blackJacket from '../assets/black_tuxedo_jacket_1776977310522.png';
import blackPants from '../assets/black_tuxedo_pants_1776977326356.png';
import blackWorn from '../assets/black_tuxedo_worn_1776977341305.png';

import greyJacket from '../assets/grey_checkered_jacket_1776977362527.png';
import greyPants from '../assets/grey_checkered_pants_1776977376919.png';
import greyWorn from '../assets/charcoal_suit_worn_1776975938920.png'; // Reusing image due to rate limit

interface Product {
  id: number;
  name: string;
  frontImage: string;
  backImage: string;
  tryOnImage: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Navy Blue Classic',
    frontImage: navyJacket,
    backImage: navyPants,
    tryOnImage: navyWorn,
    description: 'A premium navy blue suit jacket and matching pants. Perfect for any formal occasion.'
  },
  {
    id: 2,
    name: 'Charcoal Grey Bespoke',
    frontImage: charcoalJacket,
    backImage: charcoalPants,
    tryOnImage: charcoalWorn,
    description: 'Our bespoke charcoal grey suit. Impeccable tailoring and luxurious fabric for the modern gentleman.'
  },
  {
    id: 3,
    name: 'Beige Linen Summer',
    frontImage: beigeJacket,
    backImage: beigePants,
    tryOnImage: beigeWorn,
    description: 'A light and breathable beige linen suit, perfect for summer events and destination weddings.'
  },
  {
    id: 4,
    name: 'Olive Green Wool',
    frontImage: oliveJacket,
    backImage: olivePants,
    tryOnImage: oliveWorn,
    description: 'A striking olive green Italian wool suit. Stand out with a unique, earthy tone and flawless tailoring.'
  },
  {
    id: 5,
    name: 'Classic Black Tuxedo',
    frontImage: blackJacket,
    backImage: blackPants,
    tryOnImage: blackWorn,
    description: 'The epitome of formal elegance. A perfectly cut black tuxedo for your most important black-tie events.'
  },
  {
    id: 6,
    name: 'Grey Checkered',
    frontImage: greyJacket,
    backImage: greyPants,
    tryOnImage: greyWorn,
    description: 'A modern light grey checkered suit. Versatile, sharp, and perfect for both business and leisure.'
  }
];

export const FabricSuits: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-now');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTryItClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 400); // Wait for animation to finish
  };

  return (
    <section className="fabric-suits-section" ref={sectionRef}>
      <div className="fabric-suits-container">
        <div className="fabric-suits-header">
          <h2 className="fade-in-up">Masterpiece Collection</h2>
          <p className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover our exclusive fabric suits. Hover to explore the craftsmanship and virtually try them on.
          </p>
        </div>

        <div className="suits-grid">
          {products.map((product, index) => (
            <div 
              className="suit-card-wrapper" 
              key={product.id}
            >
              <div className="suit-card">
                <div className="suit-card-inner">
                  <div className="suit-card-front">
                    <img src={product.frontImage} alt={product.name} />
                    <div className="suit-card-title-overlay">
                      <h3>{product.name}</h3>
                    </div>
                  </div>
                  <div className="suit-card-back">
                    <img src={product.backImage} alt={`${product.name} details`} />
                    <div className="suit-card-back-content">
                      <p>{product.description}</p>
                      <button 
                        className="try-it-btn"
                        onClick={() => handleTryItClick(product)}
                      >
                        Try It
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TryOnModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        product={selectedProduct} 
      />
    </section>
  );
};
