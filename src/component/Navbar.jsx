import React, { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const links = ["Home", "Services", "About", "Testimonials", "Contact"];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  
  // {/* Added useRef for direct header manipulation */}
  const headerRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // {/* Modified scroll event handler to set header fixed state */}
    const handleScroll = () => {
      setIsHeaderFixed(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // {/* Added custom function to generate dynamic header styles */}
  const getHeaderStyle = () => {
    // Only apply styles when header is fixed
    if (!isHeaderFixed) return {};

    return {
      position: 'fixed', // Make header stick to top
      top: 0,
      left: 0,
      right: 0,
      zIndex: 30, // Ensure header is above other elements
      animation: 'slideDown 0.5s ease-out', // Custom animation
      transformOrigin: 'top' // Animate from top
    };
  };

  // {/* Added useEffect to dynamically inject animation keyframes */}
  useEffect(() => {
    // Create style element
    const style = document.createElement('style');
    // {/* Added custom slideDown keyframe animation */}
    style.textContent = `
      @keyframes slideDown {
        0% {
          opacity: 0;
          transform: translateY(-100%);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    // Append style to document head
    document.head.appendChild(style);

    // Cleanup function to remove style when component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <nav className="relative">
       {/* Overlay Effect */}
       {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleSidebar}
        />
      )}
    <div className='fixed top-0 left-0 w-full flex flex-col justify-center items-center text-white bg-black h-screen max-w-[17rem] gap-24 [@media(max-width:1200px)]:hidden'>
      <h1 className='text-3xl font-bold text-white '>Royalty Grills</h1>
      <ul className='flex flex-col gap-4'>
      {links.map(link => (
            <li
              key={link}
              className={`cursor-pointer ${activeLink === link ? "text-[#ad3114]" : ""}`}
              onClick={() => setActiveLink(link)}
            >
              {link}
            </li>
          ))}
      </ul>
      <div className='socials flex gap-3 relative top-[6rem]'>
        <FaFacebook className='cursor-pointer text-xl'/>
        <FaXTwitter className='cursor-pointer text-xl'/>
        <FaInstagram className='cursor-pointer text-xl'/>
      </div>
    </div>
    <div ref={headerRef} className=' hidden [@media(max-width:1200px)]:flex justify-between items-center   bg-black text-white p-4' style={getHeaderStyle()}>
<h1 className='text-3xl font-bold text-white font-[PepperHands-Regular]'>Royalty Grills</h1>
      <div className='harmburger'>
      <FiMenu className='text-3xl cursor-pointer text-[#ad3114]' onClick={toggleSidebar} />
      </div>
      
    </div>
    {/* Mobile Sliding Sidebar */}
    <div 
        className={`
          fixed top-0 right-0 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
          z-50
        `}
      >
        <div className='flex justify-end items-center p-4'>
          
          <FiX 
            className='text-3xl cursor-pointer text-white' 
            onClick={toggleSidebar} 
          />
        </div>
        <ul className='flex flex-col gap-4 p-4'>
          {links.map(link => (
            <li
              key={link}
              className={`cursor-pointer ${activeLink === link ? "text-[#ad3114]" : ""}`}
              onClick={() => {
                setActiveLink(link);
                toggleSidebar();
              }}
            >
              {link}
            </li>
          ))}
        </ul>
        <div className='socials flex items-center justify-center gap-3 p-4'>
          <FaFacebook className='cursor-pointer text-xl'/>
          <FaXTwitter className='cursor-pointer text-xl'/>
          <FaInstagram className='cursor-pointer text-xl'/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar