import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import { FaSearchPlus, FaSearchMinus } from "react-icons/fa";
import './ImageViewer.css';

/**
 * A professional image viewer component with zoom functionality
 * @param {Object} props Component props
 * @param {string} props.imageSrc URL to the image
 * @param {Function} props.onClose Function to call when closing the viewer
 * @param {string} props.title Title of the image
 * @param {string} props.imageClassName Additional class name for the image
 */
const ImageViewer = ({ imageSrc, onClose, title = "Image", imageClassName = "" }) => {
  const [scale, setScale] = useState(1);

  // Prevent scrolling of the background when the viewer is open
  useEffect(() => {
    // Save the current overflow style
    const originalStyle = window.getComputedStyle(document.body).overflow;

    // Prevent scrolling
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Zoom in function
  const zoomIn = () => {
    if (scale < 3) {
      setScale(prevScale => prevScale + 0.25);
    }
  };

  // Zoom out function
  const zoomOut = () => {
    if (scale > 0.5) {
      setScale(prevScale => prevScale - 0.25);
    }
  };

  return (
    <div className="image-viewer-overlay">
      <div className="image-viewer-header">
        <div className="image-viewer-title">{title}</div>

        <div className="image-viewer-controls">
          <div className="zoom-controls">
            <button
              className="zoom-button"
              onClick={zoomOut}
              disabled={scale <= 0.5}
              aria-label="Zoom out"
            >
              <FaSearchMinus size={16} />
            </button>
            <span className="zoom-level">{Math.round(scale * 100)}%</span>
            <button
              className="zoom-button"
              onClick={zoomIn}
              disabled={scale >= 3}
              aria-label="Zoom in"
            >
              <FaSearchPlus size={16} />
            </button>
          </div>

          <button
            className="image-viewer-close-button"
            onClick={onClose}
            aria-label="Close"
          >
            <IoClose size={24} />
          </button>
        </div>
      </div>

      <div className="image-viewer-content">
        <div
          className="image-container"
          style={{
            transform: `scale(${scale})`,
            transition: 'transform 0.3s ease'
          }}
        >
          <img
            src={imageSrc}
            alt={title}
            className={`viewed-image ${imageClassName}`}
          />
        </div>
      </div>

      <div className="image-viewer-footer">
        <p className="image-viewer-caption">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ImageViewer;
