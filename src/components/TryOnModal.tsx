import React, { useEffect, useState, useRef } from 'react';
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
  const [userFace, setUserFace] = useState<string | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
      handleReset(); // Reset when closing
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const handleReset = () => {
    stopCamera();
    if (userFace && userFace.startsWith('blob:')) {
      URL.revokeObjectURL(userFace);
    }
    setUserFace(null);
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (userFace && userFace.startsWith('blob:')) {
        URL.revokeObjectURL(userFace); // Clean up previous
      }
      const imageUrl = URL.createObjectURL(file);
      setUserFace(imageUrl);
      stopCamera();
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setIsCameraActive(true);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Unable to access camera. Please check your permissions.");
    }
  };

  const stopCamera = () => {
    setIsCameraActive(false);
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const imageUrl = canvasRef.current.toDataURL('image/png');
        setUserFace(imageUrl);
        stopCamera();
      }
    }
  };

  if (!isOpen && !isVisible) return null;
  if (!product) return null;

  return (
    <div className={`try-on-modal-overlay ${isOpen ? 'open' : ''}`} onClick={handleClose}>
      <div className="try-on-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="try-on-close-button" onClick={handleClose}>
          &times;
        </button>
        <div className="try-on-modal-body">
          <div className="try-on-image-container">
            {!isCameraActive && <div className="scanner-line"></div>}
            
            {isCameraActive ? (
              <div className="camera-container">
                <video ref={videoRef} autoPlay playsInline className="camera-video"></video>
                <button className="capture-btn" onClick={capturePhoto}>Capture Photo</button>
              </div>
            ) : (
              <div className="try-on-image-wrapper">
                <img src={product.tryOnImage} alt={product.name} className="try-on-main-image" />
                {userFace && (
                  <img src={userFace} alt="User Face" className="user-face-overlay" />
                )}
              </div>
            )}
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
          </div>
          <div className="try-on-info">
            <h2>{product.name}</h2>
            <p className="try-on-status">
              {isCameraActive ? 'Position Your Face' : 'Virtual Fitting Session Active'}
            </p>
            <p className="try-on-description">{product.description}</p>
            
            <div className="personalize-controls">
              <h3>Personalize Try-On</h3>
              <div className="control-buttons">
                <button className="action-btn" onClick={triggerFileInput}>
                  Upload Photo
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileUpload} 
                  accept="image/*" 
                  style={{ display: 'none' }} 
                />
                {!isCameraActive ? (
                  <button className="action-btn" onClick={startCamera}>
                    Use Camera
                  </button>
                ) : (
                  <button className="action-btn cancel-btn" onClick={stopCamera}>
                    Cancel Camera
                  </button>
                )}
              </div>
              {userFace && (
                <button className="action-btn reset-btn" onClick={handleReset} style={{ marginTop: '10px' }}>
                  Reset Face
                </button>
              )}
            </div>

            <div className="try-on-details" style={{ marginTop: '30px' }}>
              <div className="detail-item">
                <span className="detail-label">Fit</span>
                <span className="detail-value">Tailored</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Fabric</span>
                <span className="detail-value">Premium Blend</span>
              </div>
            </div>
            
            <button className="try-on-action-button" onClick={handleClose}>
              Complete Fitting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
