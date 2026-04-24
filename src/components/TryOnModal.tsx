import React, { useEffect, useState, useRef } from 'react';
import * as faceapi from '@vladmandic/face-api';
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
  const [croppedUserFace, setCroppedUserFace] = useState<string | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isModelsLoaded, setIsModelsLoaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState({});
  const [modelFaceBox, setModelFaceBox] = useState<faceapi.Box | null>(null);
  const [modelImgSize, setModelImgSize] = useState({ width: 0, height: 0 });
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const modelImgRef = useRef<HTMLImageElement>(null);

  // Load face-api models
  useEffect(() => {
    const loadModels = async () => {
      try {
        await faceapi.nets.tinyFaceDetector.loadFromUri('https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/');
        setIsModelsLoaded(true);
      } catch (err) {
        console.error("Failed to load face-api models", err);
      }
    };
    loadModels();
  }, []);

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

  // Attach stream to video element when camera becomes active
  useEffect(() => {
    if (isCameraActive && videoRef.current && streamRef.current) {
      videoRef.current.srcObject = streamRef.current;
    }
  }, [isCameraActive]);

  const handleReset = () => {
    stopCamera();
    if (userFace && userFace.startsWith('blob:')) {
      URL.revokeObjectURL(userFace);
    }
    setUserFace(null);
    setCroppedUserFace(null);
    setOverlayStyle({});
  };

  // Detect model face when product changes
  useEffect(() => {
    if (product && isModelsLoaded && modelImgRef.current) {
      const img = modelImgRef.current;
      if (img.complete) {
        detectModelFace(img);
      } else {
        img.onload = () => detectModelFace(img);
      }
    }
  }, [product, isModelsLoaded]);

  const detectModelFace = async (img: HTMLImageElement) => {
    const detection = await faceapi.detectSingleFace(img, new faceapi.TinyFaceDetectorOptions());
    if (detection) {
      setModelFaceBox(detection.box);
      setModelImgSize({ width: img.naturalWidth, height: img.naturalHeight });
    }
  };

  const processUserFace = async (imageUrl: string) => {
    setIsProcessing(true);
    const img = new Image();
    img.src = imageUrl;
    await new Promise(r => img.onload = r);

    const detection = await faceapi.detectSingleFace(img, new faceapi.TinyFaceDetectorOptions());
    if (!detection) {
      alert("Could not clearly detect a face. Please try another photo.");
      setIsProcessing(false);
      return;
    }

    const box = detection.box;
    // Padding to capture full head
    const padX = box.width * 0.3;
    const padYTop = box.height * 0.5;
    const padYBot = box.height * 0.2;

    const cropX = Math.max(0, box.x - padX);
    const cropY = Math.max(0, box.y - padYTop);
    const cropW = Math.min(img.width - cropX, box.width + padX * 2);
    const cropH = Math.min(img.height - cropY, box.height + padYTop + padYBot);

    const canvas = document.createElement('canvas');
    canvas.width = cropW;
    canvas.height = cropH;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Create oval mask for seamless blending
      ctx.beginPath();
      ctx.ellipse(cropW/2, cropH/2, cropW/2, cropH/2, 0, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(img, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);
      
      setCroppedUserFace(canvas.toDataURL('image/png'));
      
      if (modelFaceBox && modelImgSize.width > 0) {
        const scale = modelFaceBox.width / box.width;
        const overlayW = cropW * scale;
        const overlayH = cropH * scale;
        
        const overlayX = modelFaceBox.x - (box.x - cropX) * scale;
        const overlayY = modelFaceBox.y - (box.y - cropY) * scale;
        
        setOverlayStyle({
          position: 'absolute',
          left: `${(overlayX / modelImgSize.width) * 100}%`,
          top: `${(overlayY / modelImgSize.height) * 100}%`,
          width: `${(overlayW / modelImgSize.width) * 100}%`,
          height: `${(overlayH / modelImgSize.height) * 100}%`,
          objectFit: 'cover',
          zIndex: 5,
          borderRadius: '50%',
          boxShadow: '0 0 15px rgba(0,0,0,0.5)',
          animation: 'fade-in 0.5s ease-out'
        });
      }
    }
    setUserFace(imageUrl);
    setIsProcessing(false);
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (userFace && userFace.startsWith('blob:')) {
        URL.revokeObjectURL(userFace);
      }
      const imageUrl = URL.createObjectURL(file);
      stopCamera();
      processUserFace(imageUrl);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      setIsCameraActive(true);
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Unable to access camera. Please check your permissions.");
    }
  };

  const stopCamera = () => {
    setIsCameraActive(false);
    if (streamRef.current) {
      const tracks = streamRef.current.getTracks();
      tracks.forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        // Mirror the image back before capturing if needed, but standard is fine
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const imageUrl = canvasRef.current.toDataURL('image/png');
        stopCamera();
        processUserFace(imageUrl);
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
                <img 
                  ref={modelImgRef}
                  src={product.tryOnImage} 
                  alt={product.name} 
                  className="try-on-main-image" 
                  crossOrigin="anonymous"
                />
                {isProcessing && (
                  <div className="ai-processing-overlay">
                    <div className="ai-spinner"></div>
                    <p>AI Face Mapping...</p>
                  </div>
                )}
                {croppedUserFace && (
                  <img 
                    src={croppedUserFace} 
                    alt="User Face" 
                    style={overlayStyle}
                  />
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
              {!isModelsLoaded ? (
                <p style={{ color: '#c9a96e', fontSize: '0.9rem' }}>Loading AI Models...</p>
              ) : (
                <>
                  <div className="control-buttons">
                    <button className="action-btn" onClick={triggerFileInput} disabled={isProcessing}>
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
                      <button className="action-btn" onClick={startCamera} disabled={isProcessing}>
                        Use Camera
                      </button>
                    ) : (
                      <button className="action-btn cancel-btn" onClick={stopCamera}>
                        Cancel Camera
                      </button>
                    )}
                  </div>
                  {userFace && !isProcessing && (
                    <button className="action-btn reset-btn" onClick={handleReset} style={{ marginTop: '15px' }}>
                      Reset Face
                    </button>
                  )}
                </>
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
