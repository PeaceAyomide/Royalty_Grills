import React, { useEffect } from 'react';

/**
 * Toast notification component
 * @param {Object} props - Component props
 * @param {string} props.type - Toast type ('success' or 'error')
 * @param {string} props.message - Toast message
 * @param {boolean} props.show - Whether to show the toast
 * @param {Function} props.onClose - Function to call when toast is closed
 * @param {number} props.duration - Duration in ms before auto-closing
 */
const Toast = ({ type = 'success', message, show, onClose, duration = 5000 }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, onClose, duration]);

  if (!show) return null;

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  const icon = type === 'success' ? (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <div className="fixed top-4 right-4 z-50" style={{
      animation: 'slideInDown 0.5s ease-out forwards',
      transform: 'translateY(-20px)',
      opacity: 0
    }}>
      <div className={`${bgColor} text-white px-4 py-3 rounded-lg shadow-lg flex items-center max-w-md`} style={{
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
      }}>
        <div className="mr-3">
          {icon}
        </div>
        <div className="flex-1">
          {message}
        </div>
        <button
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-200 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
