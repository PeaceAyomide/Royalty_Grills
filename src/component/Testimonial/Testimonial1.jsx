import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Testimonial1 = () => {
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
      image: "/testimonials/whatsapp1.png",
      date: "March 15, 2024",
      name: "Customer Review 1"
    },
    {
      image: "/testimonials/whatsapp2.png",
      date: "March 10, 2024",
      name: "Customer Review 2"
    },
    {
      image: "/testimonials/whatsapp3.png",
      date: "March 5, 2024",
      name: "Customer Review 3"
    },
    {
      image: "/testimonials/whatsapp4.png",
      date: "March 1, 2024",
      name: "Customer Review 4"
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
                <div className="relative h-[150px] sm:h-[180px] md:h-[200px] w-full overflow-hidden rounded-md">
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
                
                {/* Date and name */}
                <div className="mt-2 text-center">
                  <p className="text-gray-400 text-xs">{testimonial.date}</p>
                  <p className="text-white text-xs sm:text-sm font-medium mt-0.5">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial1