import React from 'react'

const Contact1 = () => {
  return (
    <section className="bg-[#0F0F0F] py-12 md:py-16 lg:py-20 ml-0 [@media(min-width:1200px)]:ml-[17rem]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Find Us</h2>
          <div className="w-20 md:w-24 h-1 bg-[#FF7300] mx-auto mb-3 md:mb-4"></div>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl md:max-w-3xl mx-auto">
            Visit us at our location in Akure
          </p>
        </div>

        <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.788510572047!2d5.2053!3d7.2526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10408f9c0b0c86b1%3A0xea1bb3d85979bccc!2sOke%20Odu%2C%20Akure%2C%20Ondo%20State%2C%20Nigeria!5e0!3m2!1sen!2s!4v1647856789012!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact1