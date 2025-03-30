import React, { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

const Contact2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="bg-[#0F0F0F] py-12 md:py-16 lg:py-20 ml-0 [@media(min-width:1200px)]:ml-[17rem]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Get in Touch</h2>
          <div className="w-20 md:w-24 h-1 bg-[#FF7300] mx-auto mb-3 md:mb-4"></div>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl md:max-w-3xl mx-auto">
            Have questions? We'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-xl border border-[#FF7300]/20">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FF7300] rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhoneAlt className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                  <p className="text-gray-400">+234 803 153 7271</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FF7300] rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Address</h4>
                  <p className="text-gray-400">Oke Odu, Akure<br />Ondo State, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FF7300] rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Hours</h4>
                  <p className="text-gray-400">Monday - Saturday<br />2:00 PM - 12:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-xl border border-[#FF7300]/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0F0F0F] border border-[#FF7300]/20 rounded-lg text-white focus:outline-none focus:border-[#FF7300]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0F0F0F] border border-[#FF7300]/20 rounded-lg text-white focus:outline-none focus:border-[#FF7300]"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0F0F0F] border border-[#FF7300]/20 rounded-lg text-white focus:outline-none focus:border-[#FF7300]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 bg-[#0F0F0F] border border-[#FF7300]/20 rounded-lg text-white focus:outline-none focus:border-[#FF7300]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF7300] hover:bg-[#CC5500] text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact2