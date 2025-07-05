'use client'
import React from 'react'
import { chevronLeft } from '@public/assets/icons'
import { ChevronLeft } from 'react-feather'
import { ChevronRight } from 'react-feather'
import {useState, useEffect} from 'react'



const Carousel = ({
    children: carouselpics, 
    autoSlide=true, 
    autoSlideInterval=3000
}) => {
  const [curr, setCurr] = useState(0)  

  const prev = () => setCurr((curr) => curr === 0? carouselpics.length -1 : curr-1)
  const next = () => setCurr((curr) => curr === carouselpics.length-1 ? 0: curr+1)

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  })
  return (
    <div className='overflow-hidden relative rounded-md shadow-md'>
        <div className='flex transition-transform ease-out duration-500 h-[500px]' style={{transform: `translateX(-${curr*100}%)`}}>
            {carouselpics.map(child => (
                <div className="w-full h-full flex-shrink-0 relative">
                    {child}
                </div>
            ))}
        </div>
        <div className='absolute inset-0 flex justify-between items-center p-4'>
            <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                <ChevronLeft size={30} />
            </button>
            <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                <ChevronRight size={30} />
            </button>
        </div> 

        <div className='absolute bottom-4 right-0 left-0'>
            <div className='flex items-center justify-center gap-2'>
                {carouselpics.map((_,i) => (
                    <div className={`
                        transition-all w-6 h-2 bg-white rounded-full 
                        ${curr === i ? "p-[4px]": "bg-opacity-50"}
                    `} />
                ))}
            </div>

        </div>
    </div>
  )
}

export default Carousel