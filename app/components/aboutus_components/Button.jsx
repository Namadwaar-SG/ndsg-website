import React from 'react'
import Image from 'next/image'

const Button = ({label, type, index}) => {
  return (
    // the && means - if icon exists 
    <button className= {`min-w-28 font-palanquin px-4 py-2 text-base bg-primary-orange rounded-md text-white hover:bg-primary-orange/80 max-sm:text-sm`}>
        {label}
    </button>
  )
}

export default Button

