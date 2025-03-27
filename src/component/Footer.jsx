import React from 'react'
import smoke from '../assets/smoke.png'

const Footer = () => {
  return (
    <section className='relative bg-[#0F0F0F] flex justify-center items-center h-[100vh] ml-0 [@media(min-width:1200px)]:ml-[17rem] '>
      <img
        src={smoke}
        alt="Smoke effect"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[28rem] object-cover opacity-3 pointer-events-none z-0"
      />
      <div className="relative z-10 text-center">
        <div className='address flex gap-[5rem] [@media(max-width:700px)]:flex-col'>
      
        <div className='flex flex-col gap-2'>
            <h1 className='text-white text-2xl [@media(max-width:700px)]:text-xl'>OUR ADDRESS</h1>
            <p className='text-[#808080] text-[1.2rem] [@media(max-width:700px)]:text-base'>Oke Odu, Akure</p>
            <p className='text-[#808080] text-[1.2rem] [@media(max-width:700px)]:text-base'>Ondo State, Nigeria</p>
        </div>
        <div className='flex flex-col gap-2'>
            <h1 className='text-white text-2xl [@media(max-width:700px)]:text-xl'>Dine With Us</h1>
            <p className='text-[#808080] text-[1.2rem] [@media(max-width:700px)]:text-base'>Delicious meals, served all week long</p>
            <p className='text-[#a3a3a3] text-[1.7rem] hover:text-[#ad3114] transition ease-in-out cursor-pointer [@media(max-width:700px)]:text-base'>+234 803 153 7271</p>
        </div>
        <div className='flex flex-col gap-2'>
            <h1 className='text-white text-2xl [@media(max-width:700px)]:text-xl'>OPENING HOURS</h1>
            <p className='text-[#808080] text-[1.2rem] [@media(max-width:700px)]:text-base'>Monday - Saturday</p>
            <p className='text-[#808080] text-[1.2rem] [@media(max-width:700px)]:text-base'>02:00 PM - 12:00 AM</p>
        </div>
      
        </div>
        <div className='flex justify-center relative top-46 [@media(max-width:700px)]:top-16'>
            <p className='text-[#808080] text-[1.2rem] mt-10 [@media(max-width:700px)]:text-base [@media(max-width:700px)]:pb-6 '>© 2025 D'Royalty Kitchen. All rights reserved.</p>
        </div>
        </div>
    </section>
  )
}

export default Footer