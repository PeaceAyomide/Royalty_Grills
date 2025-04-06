import React from 'react'
import chefIsaac from '../../assets/aboutimg/Chef Isaac.jpeg'
import chefEmmanuel from '../../assets/aboutimg/Chef Emmanuel.jpeg'
import chefIsaacProfile from '../../assets/aboutimg/Chef Isaac Profile.jpeg'
import chefEmmanuelProfile from '../../assets/aboutimg/Chef Emmanuel Profile.jpeg'

const About1 = () => {
  const styles = `
    .content-card {
      backdrop-filter: blur(10px);
      background: rgba(26, 26, 26, 0.7);
    }
    .chef-image {
      aspect-ratio: 1;
      width: 100%;
      height: 100%;
    }
    .background-container {
      position: relative;
    }
    .background-overlay {
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 1;
    }
    .background-emmanuel {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 50%;
      background-image: url(${chefEmmanuel});
      background-size: cover;
      background-position: center 40%;
      z-index: 0;
    }
    .background-isaac {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50%;
      background-image: url(${chefIsaac});
      background-size: cover;
      background-position: center 60%;
      z-index: 0;
    }
    @media (min-width: 768px) {
      .background-emmanuel {
        width: 50%;
        height: 100%;
        left: 0;
        top: 0;
        background-position: center;
      }
      .background-isaac {
        width: 50%;
        height: 100%;
        right: 0;
        bottom: 0;
        left: auto;
        background-position: center;
      }
    }
  `

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center ml-0 [@media(min-width:1200px)]:ml-[17rem] background-container"
    >
      {/* Background images with separate positioning */}
      <div className="background-emmanuel"></div>
      <div className="background-isaac"></div>
      
      {/* Dark overlay */}
      <div className="background-overlay"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="content-card p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border border-[#FF7300]/20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              D'Royalty Kitchen
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8">
              A culinary destination where tradition meets innovation. Located in the heart of Akure, we serve exceptional meals that delight our customers' taste buds.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FF7300] rounded-full"></div>
                <span className="text-white text-sm md:text-base">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FF7300] rounded-full"></div>
                <span className="text-white text-sm md:text-base">Fresh Ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FF7300] rounded-full"></div>
                <span className="text-white text-sm md:text-base">Expert Chefs</span>
              </div>
            </div>
          </div>

          <div className="content-card p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border border-[#FF7300]/20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Our Leadership</h2>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={chefEmmanuelProfile} 
                    alt="Chef Emmanuel" 
                    className="chef-image object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">Chef Emmanuel</h3>
                  <p className="text-[#FF7300] text-sm md:text-base">Co-CEO</p>
                  <p className="text-gray-400 mt-2 text-sm md:text-base">
                    Together with Chef Isaac, leading D'Royalty Kitchen with passion and expertise.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={chefIsaacProfile} 
                    alt="Chef Isaac" 
                    className="chef-image object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">Chef Isaac</h3>
                  <p className="text-[#FF7300] text-sm md:text-base">Co-CEO</p>
                  <p className="text-gray-400 mt-2 text-sm md:text-base">
                    Together with Chef Emmanuel, leading D'Royalty Kitchen with passion and expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{styles}</style>
    </section>
  )
}

export default About1