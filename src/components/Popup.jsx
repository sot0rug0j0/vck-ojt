import React, { useEffect, useRef } from "react";
import "./Popup.css";

const Popup = ({ title, message, onClose, children, autoClose = false, duration = 3000 }) => {
  const popupRef = useRef();

  // Auto-close after duration (optional)
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, duration, onClose]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Close when clicking outside the popup
  const handleOverlayClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-box popup-fade-in" ref={popupRef}>
        <button className="close-btn" onClick={onClose}>×</button>
        {title && <h2>{title}</h2>}
        {message && <p>{message}</p>}
        {children}
      </div>
    </div>
  );
};

export default Popup;
