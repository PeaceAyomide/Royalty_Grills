import React from 'react'
import { FaPlay } from 'react-icons/fa'

const Testimonial2 = () => {
  const styles = `
    .video-card:hover .video-thumbnail {
      transform: scale(1.05);
    }
    .video-card:hover .video-overlay {
      opacity: 1;
    }
  `

  const videoTestimonials = [
    {
      thumbnail: "https://placehold.co/600x400/1a1a1a/FF7300?text=Video+1",
      title: "Customer Experience",
      description: "Watch what our customers have to say about our delicious meals"
    },
    {
      thumbnail: "https://placehold.co/600x400/1a1a1a/FF7300?text=Video+2",
      title: "Event Catering",
      description: "See how we cater to large events and celebrations"
    },
    {
      thumbnail: "https://placehold.co/600x400/1a1a1a/FF7300?text=Video+3",
      title: "Food Quality",
      description: "Get a closer look at our premium quality ingredients"
    }
  ]

  return (
    <section className="bg-[#0F0F0F] py-20 pb-4 ml-0 [@media(min-width:1200px)]:ml-[17rem]">
      <style>{styles}</style>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl [@media(max-width:700px)]:text-[2.5rem] font-bold text-white mb-4">
            Video Testimonials
          </h1>
          <div className="w-24 h-1 bg-[#FF7300] mx-auto mb-4"></div>
          <p className="text-xl [@media(max-width:700px)]:text-[1.1rem] text-gray-300">
            Watch our customers share their experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoTestimonials.map((video, index) => (
            <div key={index} className="relative">
              <div className="video-card relative overflow-hidden rounded-xl">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="video-thumbnail w-full h-[300px] object-cover transition-transform duration-300"
                />
                <div className="video-overlay absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-[#FF7300] rounded-full flex items-center justify-center">
                    <FaPlay className="text-white text-2xl" />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-white mb-2">{video.title}</h3>
                <p className="text-gray-400">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial2