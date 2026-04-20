import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './BookingModal.css';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('http://localhost:3000/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: '', email: '', message: '' });
          onClose();
        }, 3000);
      } else {
        setErrorMsg(data.error || 'Failed to submit form.');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Network error. Is the backend server running?');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="booking-modal-overlay">
      <div className="booking-modal-container">
        <button className="booking-modal-close" onClick={onClose} aria-label="Close">✕</button>
        
        {isSuccess ? (
          <div className="booking-modal-success">
            <h2>{t('about.alert')}</h2>
          </div>
        ) : (
          <>
            <div className="booking-modal-header">
              <h2 className="journey-h2">{t('about.bookTitle')}</h2>
              <p>{t('about.bookDesc')}</p>
            </div>
            
            <form className="appointment-form modal-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder={t('about.formName')}
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  disabled={isSubmitting}
                />
                <span className="input-focus-line"></span>
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder={t('about.formEmail')}
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled={isSubmitting}
                />
                <span className="input-focus-line"></span>
              </div>
              <div className="form-group">
                <textarea 
                  placeholder={t('about.formMessage')}
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  disabled={isSubmitting}
                ></textarea>
                <span className="input-focus-line"></span>
              </div>
              
              {errorMsg && <div className="modal-error">{errorMsg}</div>}

              <button type="submit" className="submit-btn-luxury" disabled={isSubmitting}>
                <span>{isSubmitting ? '...' : t('about.formSubmit')}</span>
                <div className="btn-bg"></div>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
