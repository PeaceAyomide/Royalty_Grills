import React, { useEffect, useState } from 'react';

const WhatsAppIcon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // You can adjust this value to control when the icon appears
      const triggerHeight = window.innerHeight * 0.9; // Appears after scrolling 50% of the page height
      
      // Only show when scrolling down past the specified height
      if (currentScrollTop > lastScrollTop && currentScrollTop > triggerHeight) {
        setIsVisible(true);
      } 
      // Hide when scrolling back up
      else if (currentScrollTop <= triggerHeight) {
        setIsVisible(false);
      }

      setLastScrollTop(currentScrollTop);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const phoneNumber = '+1234567890'; // Replace with your restaurant's contact number
  const message = 'Hi! I would like to place an order or have a question about your menu.'; // Restaurant-specific message

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className="fixed bottom-6 right-6 
                 [@media(max-width:1200px)]:bottom-24 
                 [@media(max-width:1200px)]:right-4 
                 z-14 pointer-events-none"
      style={{
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transform: `translateY(${isVisible ? '0' : '20px'})`,
        transition: 'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s',
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      <button 
        onClick={handleWhatsAppClick}
        className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center 
                   shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 
                   transform active:scale-95 transition-all duration-200
                   pointer-events-auto"
        aria-label="Contact us on WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="34" 
          height="34" 
          viewBox="0 0 24 24" 
          fill="white"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.90-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.03-.967-.272-.1-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.297.297-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.041 1.016-1.041 2.479 1.067 2.876 1.215 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppIcon;