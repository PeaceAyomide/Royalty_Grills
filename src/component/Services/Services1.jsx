import React from 'react'
import { FaUtensils, FaTruck, FaBowlRice } from "react-icons/fa6";
import { GiSandwich } from "react-icons/gi";

const Services1 = () => {
  return (
    <section className="relative bg-[#0F0F0F] ml-0 [@media(min-width:1200px)]:ml-[17rem] overflow-hidden pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-10"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl [@media(max-width:700px)]:text-[2.5rem] font-bold text-white mb-4 leading-tight">
            Our Signature Services
          </h1>
          <div className="w-24 h-1 bg-[#FF7300] mx-auto mb-4"></div>
          <p className="text-xl [@media(max-width:700px)]:text-[1.1rem] text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From delicious shawarma to mouthwatering small chops, we bring flavor to your doorstep
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Shawarma Card */}
          <div className="group relative bg-[#1a1a1a] p-6  rounded-xl hover:bg-[#FF7300] transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#FF7300] group-hover:bg-white transition-colors duration-500"></div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#0F0F0F] p-3 rounded-full mb-4 group-hover:bg-white transition-colors duration-500">
                <GiSandwich className="text-[#FF7300] text-3xl group-hover:text-[#0F0F0F] transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Shawarma</h3>
              <p className="text-gray-400 group-hover:text-white transition-colors duration-500 text-sm">
                Perfectly seasoned and wrapped shawarma made to your taste
              </p>
            </div>
          </div>

          {/* Small Chops Card */}
          <div className="group relative bg-[#1a1a1a] p-6 rounded-xl hover:bg-[#FF7300] transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#FF7300] group-hover:bg-white transition-colors duration-500"></div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#0F0F0F] p-3 rounded-full mb-4 group-hover:bg-white transition-colors duration-500">
                <FaUtensils className="text-[#FF7300] text-3xl group-hover:text-[#0F0F0F] transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Small Chops</h3>
              <p className="text-gray-400 group-hover:text-white transition-colors duration-500 text-sm">
                Delicious bite-sized treats perfect for any occasion
              </p>
            </div>
          </div>

          {/* Fried Rice Card */}
          <div className="group relative bg-[#1a1a1a] p-6 rounded-xl hover:bg-[#FF7300] transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#FF7300] group-hover:bg-white transition-colors duration-500"></div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#0F0F0F] p-3 rounded-full mb-4 group-hover:bg-white transition-colors duration-500">
                <FaBowlRice className="text-[#FF7300] text-3xl group-hover:text-[#0F0F0F] transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Fried Rice</h3>
              <p className="text-gray-400 group-hover:text-white transition-colors duration-500 text-sm">
                Flavorful fried rice with the perfect blend of ingredients
              </p>
            </div>
          </div>

          {/* Outdoor Service Card */}
          <div className="group relative bg-[#1a1a1a] p-6 rounded-xl hover:bg-[#FF7300] transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#FF7300] group-hover:bg-white transition-colors duration-500"></div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#0F0F0F] p-3 rounded-full mb-4 group-hover:bg-white transition-colors duration-500">
                <FaTruck className="text-[#FF7300] text-3xl group-hover:text-[#0F0F0F] transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Outdoor Service</h3>
              <p className="text-gray-400 group-hover:text-white transition-colors duration-500 text-sm">
                We bring our delicious meals to your events and celebrations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services1