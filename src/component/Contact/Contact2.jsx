import React, { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { generateEmailTemplate, generateAutoResponseTemplate } from './emailTemplate'
import Toast from '../Toast/Toast'

const Contact2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    error: null
  })

  const [toast, setToast] = useState({
    show: false,
    type: 'success',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ ...status, submitting: true })

    try {
      // Using FormSubmit.co service - a free email forwarding service
      const response = await fetch('https://formsubmit.co/ajax/royaltyfg25@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
          _subject: `New Contact Message from D'Royalty Kitchen`,
          _template: 'box',
          _captcha: 'false',
          _title: `D'Royalty Kitchen - New Contact Message`,
          _format: 'html',
          _replyto: formData.email,
          _autoresponse_subject: `Thank you for contacting D'Royalty Kitchen`,
          _html: generateEmailTemplate(formData),
          _autoresponse: generateAutoResponseTemplate(formData)
        })
      })

      if (response.ok) {
        setStatus({
          submitting: false,
          submitted: true,
          success: true,
          error: null
        })
        // Show success toast
        setToast({
          show: true,
          type: 'success',
          message: 'Message sent successfully! We\'ll get back to you soon.'
        })
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        let errorMessage = 'Something went wrong';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
          // If response is not JSON
          console.error('Error parsing response:', e);
        }
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        error: error.message || 'Failed to send message. Please try again.'
      })
      // Show error toast
      setToast({
        show: true,
        type: 'error',
        message: error.message || 'Failed to send message. Please try again.'
      })
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Reset status when user starts typing again after submission
    if (status.submitted) {
      setStatus({
        submitting: false,
        submitted: false,
        success: false,
        error: null
      })
    }
  }

  // Handle toast close
  const handleCloseToast = () => {
    setToast({ ...toast, show: false })
  }

  return (
    <section className="bg-[#0F0F0F] py-12 md:py-16 lg:py-20 ml-0 [@media(min-width:1200px)]:ml-[17rem]">
      <Toast
        show={toast.show}
        type={toast.type}
        message={toast.message}
        onClose={handleCloseToast}
      />
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
              {/* Honeypot field to prevent spam */}
              <input type="text" name="_honey" style={{ display: 'none' }} />

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

              {status.error && (
                <div className="bg-red-800/20 border border-red-500/50 rounded-lg p-3 mb-4">
                  <p className="text-red-400 text-sm">{status.error}</p>
                </div>
              )}
              <button
                type="submit"
                disabled={status.submitting}
                className={`w-full bg-[#FF7300] hover:bg-[#CC5500] text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center ${status.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status.submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact2