import React from 'react'
import { FaPhoneAlt, FaShippingFast, FaHandshake, FaHeart, FaUtensils, FaStar } from "react-icons/fa";

const Services2 = () => {
  const styles = `
    .service-box:hover {
      border-color: #FF7300;
    }
  `

  return (
    <section className="bg-[#0F0F0F] pt-8 pb-2 ml-0 [@media(min-width:1200px)]:ml-[17rem]">
      <style>{styles}</style>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-5xl [@media(max-width:700px)]:text-[2.5rem] font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-[#FF7300] mx-auto mb-4"></div>
          <p className="text-xl [@media(max-width:700px)]:text-[1.1rem] text-gray-300">
            Fast, fresh, and always delicious - your satisfaction is our priority
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="service-box bg-[#1a1a1a] p-6 rounded-xl border border-[#FF7300]/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#FF7300] rounded-full flex items-center justify-center mr-3">
                <FaPhoneAlt className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-semibold text-white">Easy Ordering</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Quick and simple ordering process - just a phone call away
            </p>
          </div>

          <div className="service-box bg-[#1a1a1a] p-6 rounded-xl border border-[#FF7300]/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#FF7300] rounded-full flex items-center justify-center mr-3">
                <FaShippingFast className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-semibold text-white">Fast Delivery</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Prompt delivery to ensure your food arrives hot and fresh
            </p>
          </div>

          <div className="service-box bg-[#1a1a1a] p-6 rounded-xl border border-[#FF7300]/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#FF7300] rounded-full flex items-center justify-center mr-3">
                <FaHandshake className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-semibold text-white">Event Catering</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Professional outdoor catering services for all your events
            </p>
          </div>

          <div className="service-box bg-[#1a1a1a] p-6 rounded-xl border border-[#FF7300]/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#FF7300] rounded-full flex items-center justify-center mr-3">
                <FaHeart className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-semibold text-white">Made Fresh</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Every dish is prepared fresh upon order, never pre-made
            </p>
          </div>

          <div className="service-box bg-[#1a1a1a] p-6 rounded-xl border border-[#FF7300]/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#FF7300] rounded-full flex items-center justify-center mr-3">
                <FaUtensils className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-semibold text-white">Custom Orders</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Customize your orders to match your taste preferences
            </p>
          </div>

          <div className="service-box bg-[#1a1a1a] p-6 rounded-xl border border-[#FF7300]/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#FF7300] rounded-full flex items-center justify-center mr-3">
                <FaStar className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-semibold text-white">Quality Service</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Consistently high-quality food and reliable service
            </p>
          </div>
        </div>

       
      </div>
    </section>
  )
}

export default Services2