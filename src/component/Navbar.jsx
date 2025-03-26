import React, { useState } from 'react';
import { FaFacebook, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const links = ["Home", "Services", "About", "Testimonials", "Contact"];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav>
       {/* Overlay Effect */}
       {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleSidebar}
        />
      )}
    <div className='flex flex-col justify-center items-center text-white bg-black h-screen max-w-[20rem] gap-24 [@media(max-width:1200px)]:hidden'>
      <h1 className='text-3xl font-bold text-red-500'>Royalty Grills</h1>
      <ul className='flex flex-col gap-4'>
      {links.map(link => (
            <li
              key={link}
              className={`cursor-pointer ${activeLink === link ? "text-red-500" : ""}`}
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
    <div className='hidden [@media(max-width:1200px)]:flex justify-between items-center   bg-black text-white p-4' >
<h1 className='text-3xl font-bold text-red-500'>Royalty Grills</h1>
      <div className='harmburger'>
      <FiMenu className='text-3xl cursor-pointer text-red-500' onClick={toggleSidebar} />
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
            className='text-3xl cursor-pointer text-red-500' 
            onClick={toggleSidebar} 
          />
        </div>
        <ul className='flex flex-col gap-4 p-4'>
          {links.map(link => (
            <li
              key={link}
              className={`cursor-pointer ${activeLink === link ? "text-red-500" : ""}`}
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