import React from 'react'
import chefcap from '../../assets/chefcap.png'
import jellof_rice from '../../assets/homeimg/jellof_rice.jpeg'
import takeaway_rice from '../../assets/homeimg/takeaway_rice.jpeg'
import donuts from '../../assets/homeimg/donuts.jpeg'
import { FaBowlFood } from "react-icons/fa6";
import { GiMeal } from "react-icons/gi";
import { GiHotMeal } from "react-icons/gi";
import { GiCook } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const Home2 = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <section className='
    bg-[#0F0F0F] pb-[3.59rem] 
    flex
    justify-center
    h-full
     ml-0 [@media(min-width:1200px)]:ml-[17rem]'>
        <div className='pt-[7rem] text-center items-center gap-2 flex flex-col'>
            <img src={chefcap} alt="" className='h-[4rem]'/>
            <h1 className='
            text-[3rem] [@media(max-width:700px)]:text-[1.6rem]
            text-white
            font-bold uppercase 
            '>Elite Chef Feast</h1>
            <div class=" items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-5xl  pt-[3rem]">
        <div class="bg-gray-500 h-[22rem] w-[18rem] flex items-center justify-center">
            <img src={jellof_rice} alt="Jellof Rice" className="w-full h-full object-cover" />
        </div>
        <div class="bg-gray-500 h-[22rem] w-[18rem] flex items-center justify-center">
            <img src={takeaway_rice} alt="Takeaway Rice" className="w-full h-full object-cover" />
        </div>
        <div class="bg-gray-500 h-[22rem] w-[18rem] flex items-center justify-center">
            <img src={donuts} alt="Donuts" className="w-full h-full object-cover" />
        </div>
    </div>
<div className='pt-3 pb-[7rem]'>
<p className='text-white pb-9 [@media(max-width:700px)]:text-[1rem]'>
    Come savor the flavors of the finest dish kitchen in the city
    </p>
    <button 
      onClick={handleAboutClick}
      className="bg-[#FF7300] hover:bg-[#CC5500] px-6 md:px-8 py-2 md:py-3 rounded-full font-medium text-lg md:text-xl transition-colors cursor-pointer">
      About Us
    </button>

</div>
    <div className='flex justify-center gap-[3rem] [@media(max-width:700px)]:flex-col'>
        <div className='one gap-3 flex flex-col '>
            <div className=' flex justify-center'>
               
               <GiMeal className='text-[#FF7300] text-[3rem]'/>
            </div>
            <h1 className='text-white'>
            BEST
            QUALITY
            </h1>
            <p className='text-[#4d4d4d]'>We pride ourselves in quality</p>
        </div>
        <div className='two gap-3 flex flex-col '>
            <div className=' flex justify-center'>
                <FaBowlFood className='text-[#FF7300] text-[3rem]'/>
            </div>
            <h1 className='text-white'>
            Tasty Hut
            </h1>
            <p className='text-[#4d4d4d]'>Home to the Best Meals</p>
        </div>
        <div className='three gap-3 flex flex-col'>
            <div className=' flex justify-center'>
               <GiHotMeal className='text-[#FF7300] text-[3rem]'/>
            </div>
            <h1 className='text-white'>
            Timely Feast
            </h1>
            <p className='text-[#4d4d4d]'>Always Hot, Always Ready</p>
        </div>
        <div className='four gap-3 flex flex-col'>
            <div className=' flex justify-center'>
              <GiCook className='text-[#FF7300] text-[3rem]'/>
            </div>
            <h1 className='text-white'>
            Live Cook
            </h1>
            <p className='text-[#4d4d4d]'>A Feast Made Before You</p>
        </div>
    </div>
        </div>

    </section>
  )
}

export default Home2