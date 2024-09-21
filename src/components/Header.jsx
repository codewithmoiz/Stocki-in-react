import React from 'react'
import searchImg from '../assets/search-line.svg'

const Header = () => {
  return (
    <header className='h-96 flex flex-col items-center justify-center'>
        {/* <p className='text-white  text-center'>Limitless visuals for limitless ideas</p> */}
        <h1 className='text-white lg:text-5xl px-2 text-4xl font-bold text-center capitalize '>Unlock a World of Free Visuals</h1>
        <p className='text-white text-center mt-2 px-2 lg:text-lg text-md lg:w-[50%] w-[100%]'>Browse a vast collection of stunning, royalty-free images to fuel your creativity. Find the perfect shot for any project, all for free.</p>
        <div className="search-box mt-6 mb-2 w-full flex items-center justify-center">
            <div className="search lg:w-1/3 w-[90%] bg-blue-500 flex">
            <div className="icon-box lg:w-[10%] w-[15%] py-2 bg-gray-200 flex items-center justify-center">
                <img className='h-[20px] w-[20px] cursor-pointer' src={searchImg} alt="" />
            </div>
            <input className='border-none outline-none px-4 py-2 text-base w-[90%]' type="text" placeholder='Search' />
            </div>
        </div>
        <p className='text-white text-center text-base'>Limitless visuals for limitless ideas</p>
    </header>
  )
}

export default Header