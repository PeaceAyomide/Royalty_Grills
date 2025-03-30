import React from 'react'
import { FaUtensils, FaClock, FaUsers, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"

const About2 = () => {
  const styles = `
    .feature-card {
      transition: all 0.3s ease;
    }
    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(255, 115, 0, 0.1);
    }
  `

  return (
    <section className="bg-[#0F0F0F] py-12 md:py-16 lg:py-20 ml-0 [@media(min-width:1200px)]:ml-[17rem]">
      <style>{styles}</style>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Visit Us</h2>
          <div className="w-20 md:w-24 h-1 bg-[#FF7300] mx-auto mb-3 md:mb-4"></div>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl md:max-w-3xl mx-auto">
            Experience the perfect blend of traditional flavors and modern culinary techniques
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl md:max-w-6xl mx-auto">
          <div className="feature-card bg-[#1a1a1a] p-4 md:p-6 rounded-xl border border-[#FF7300]/20">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF7300] rounded-full flex items-center justify-center mb-3 md:mb-4">
              <FaMapMarkerAlt className="text-white text-lg md:text-xl" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Oke Odu, Akure<br />
              Ondo State, Nigeria
            </p>
          </div>

          <div className="feature-card bg-[#1a1a1a] p-4 md:p-6 rounded-xl border border-[#FF7300]/20">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF7300] rounded-full flex items-center justify-center mb-3 md:mb-4">
              <FaClock className="text-white text-lg md:text-xl" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Hours</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Monday - Saturday<br />
              2:00 PM - 12:00 AM
            </p>
          </div>

          <div className="feature-card bg-[#1a1a1a] p-4 md:p-6 rounded-xl border border-[#FF7300]/20">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF7300] rounded-full flex items-center justify-center mb-3 md:mb-4">
              <FaPhoneAlt className="text-white text-lg md:text-xl" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Contact</h3>
            <p className="text-gray-400 text-sm md:text-base">
              +234 803 153 7271<br />
              Order anytime
            </p>
          </div>

          <div className="feature-card bg-[#1a1a1a] p-4 md:p-6 rounded-xl border border-[#FF7300]/20">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF7300] rounded-full flex items-center justify-center mb-3 md:mb-4">
              <FaUtensils className="text-white text-lg md:text-xl" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Our Offerings</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Fresh & Quality Food<br />
              Daily Specials<br />
              Event Catering<br />
              Outdoor Service
            </p>
          </div>
        </div>

       
      </div>
    </section>
  )
}

export default About2