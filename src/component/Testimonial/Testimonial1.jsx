import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { IoClose } from "react-icons/io5";
import T1 from '../../assets/testimony_img/T1.jpeg'
import T2 from '../../assets/testimony_img/T2.jpeg'
import T3 from '../../assets/testimony_img/T3.jpeg'
import T4 from '../../assets/testimony_img/T4.jpeg'
import T5 from '../../assets/testimony_img/T5.jpeg'
import T6 from '../../assets/testimony_img/T6.jpeg'

const Testimonial1 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const styles = `
    .testimonial-card:hover .testimonial-image {
      transform: scale(1.05);
    }
    .testimonial-card:hover .testimonial-overlay {
      opacity: 1;
    }
    .testimonial-card:hover {
      border-color: #FF7300;
    }
  `

  const testimonials = [
    {
      image: T1,
      name: "Customer Review 1"
    },
    {
      image: T2,
      name: "Customer Review 2"
    },
    {
      image: T3,
      name: "Customer Review 3"
    },
    {
      image: T4,
      name: "Customer Review 4"
    },
    {
      image: T5,
      name: "Customer Review 5"
    },
    {
      image: T6,
      name: "Customer Review 6"
    }
  ]

  return (
    <section className="bg-[#0F0F0F] pt-30 pb-8 md:pb-12 ml-0 [@media(min-width:1200px)]:ml-[17rem]">
      <style>{styles}</style>
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 md:mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3">
            Customer Reviews
          </h1>
          <div className="w-16 md:w-20 h-1 bg-[#FF7300] mx-auto mb-2 md:mb-3"></div>
          <p className="text-base md:text-lg text-gray-300">
            See what our customers are saying about us
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="testimonial-card bg-[#1a1a1a] p-2 rounded-lg border border-[#FF7300]/20 transition-all duration-300 relative overflow-hidden">
                {/* WhatsApp message screenshot */}
                <div 
                  className="relative h-[150px] sm:h-[180px] md:h-[200px] w-full overflow-hidden rounded-md cursor-pointer"
                  onClick={() => setSelectedImage(testimonial.image)}
                >
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="testimonial-image w-full h-full object-contain transition-transform duration-300"
                  />
                  {/* Hover overlay with WhatsApp icon */}
                  <div className="testimonial-overlay absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity duration-300">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FF7300] rounded-full flex items-center justify-center">
                      <FaWhatsapp className="text-white text-lg sm:text-xl" />
                    </div>
                  </div>
                </div>
                
                {/* Name only */}
                <div className="mt-2 text-center">
                  <p className="text-white text-xs sm:text-sm font-medium">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[#FF7300] transition-colors"
            >
              <IoClose size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Full size testimonial" 
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Testimonial1