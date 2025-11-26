import React, { use } from 'react'
import { useState, useEffect } from 'react'
import Image1 from '../assets/image1.jpg'
import Image4 from '../assets/image4.avif'

const Images = [
  Image1,
  Image4,
]
const Home = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 5000);
    return () => clearInterval(interval);
  })
  return (
    <div >
      <div className="w-full h-[600px] overflow-hidden rounded-xl relative ">
        <img
          src={Images[index]}
          className="object-cover w-full h-full transition-all duration-700"
          alt="slider"
        />
        {/* use absolute and inset-0 to make text or button in image bg */}
        <div className='absolute inset-0 flex flex-col px-4 ml-32 text-white mt-44'>
          <h1 className='text-3xl font-semibold'>The Best University Of The State</h1>
          <div>
            <h1 className='my-5 text-7xl font-Libre '>Kingster University</h1>
          </div>
          <div><button className="px-6 py-4 my-5 text-lg font-semibold text-black bg-white hover:text-blue-700">
            Get Started
          </button></div>
        </div>
      </div>
      <div className='flex items-center justify-center mt-40 h-96'>
        <h1 className='text-5xl font-bold text-center'>Welcome to KUTheme University</h1>
      </div>
      <h1 className='mt-52'>Home</h1>
    </div>
  )
}

export default Home