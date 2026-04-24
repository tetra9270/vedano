import React, { useEffect, useState } from 'react';
import './TryOnModal.css';

interface Product {
  id: number;
  name: string;
  frontImage: string;
  backImage: string;
  tryOnImage: string;
  description: string;
}

interface TryOnModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export const TryOnModal: React.FC<TryOnModalProps> = ({ isOpen, onClose, product }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;
  if (!product) return null;

  return (
    <div className={`try-on-modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="try-on-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="try-on-close-button" onClick={onClose}>
          &times;
        </button>
        <div className="try-on-modal-body">
          <div className="try-on-image-container">
            <div className="scanner-line"></div>
            <img src={product.tryOnImage} alt={product.name} className="try-on-main-image" />
          </div>
          <div className="try-on-info">
            <h2>{product.name}</h2>
            <p className="try-on-status">Virtual Fitting Session Active</p>
            <p className="try-on-description">{product.description}</p>
            
            <div className="try-on-details">
              <div className="detail-item">
                <span className="detail-label">Fit</span>
                <span className="detail-value">Tailored</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Fabric</span>
                <span className="detail-value">Premium Blend</span>
              </div>
            </div>
            
            <button className="try-on-action-button" onClick={onClose}>
              Complete Fitting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
