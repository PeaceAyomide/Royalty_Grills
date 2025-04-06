import React from 'react'
import bgimg from '../../assets/bgimg.png'

const Home1 = () => {
  const styles = `
  .menu-button:hover {
    background-color: #8a2710;
  }
`


  return (
    <section 
    className="relative flex items-center justify-center h-screen bg-cover bg-center ml-0 [@media(min-width:1200px)]:ml-[17rem]"
   
    style={{ backgroundImage: `url(${bgimg})` }} // Replace with your actual image path
  >
     <style>{styles}</style>
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
    
    {/* Content */}
    <div className="relative z-10 text-center text-white px-4 max-w-4xl">
    <h1 className="text-5xl [@media(max-width:700px)]:text-[2.5rem] font-bold mb-4 ">Welcome To D'Royalty Kitchen</h1>
      
     <p className="text-xl [@media(max-width:700px)]:text-[1.1rem] mb-8">Experience premium exquisite meals with exceptional service</p>
      <button className="menu-button bg-[#ad3114] hover:bg-[#8a2710] px-8 py-3 rounded-lg font-medium transition-colors cursor-pointer">
      Explore Menu
      </button>
    </div>
  </section>
  )
}

export default Home1