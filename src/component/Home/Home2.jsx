import React from 'react'
import chefcap from '../../assets/chefcap.png'

const Home2 = () => {
  return (
    <section className='
    bg-[#0F0F0F]
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
            '>Elite Chef Owners</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-5xl w-full pt-[3rem]">
        <div class="bg-gray-500  h-[22rem] w-[18rem] flex items-center justify-center text-lg font-semibold"></div>
        <div class="bg-gray-500  h-[22rem] w-[18rem] flex items-center justify-center text-lg font-semibold"></div>
        <div class="bg-gray-500 h-[22rem] w-[18rem] flex items-center justify-center text-lg font-semibold"></div>
    </div>

    <p className='text-white'>
    Come savor the flavors of the finest dish kitchen in the city
    </p>
        </div>

    </section>
  )
}

export default Home2