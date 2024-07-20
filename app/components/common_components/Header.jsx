'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { navLinks} from '@constants/fixed';
/* flex-1 lets the ul to shrink/grow 
    flex makes the child elements to be flex items. ul becomes flex container
    justify and items - centers the child elements to be centered
    gap-16 - space between these child elements
*/
/* we use parantheses, so its an immediate return  */
const Header = () => {

  const [toggleActivDropdown, setActivDropdown] = useState(false)
  const [toggleClassDropdown, setClassDropdown] = useState(false)
  const [toggleNavMenu, setNavMenu] = useState(false)

  const handleNavMenu = () => {
    setNavMenu(!toggleNavMenu)
  }

  const mobileActivDropdown = ()  => {
    setActivDropdown(!toggleActivDropdown)
  }

  const mobileClassDropdown = ()  => {
    setClassDropdown(!toggleClassDropdown)
  }

  const handleMouseEnter = () => {
    setActivDropdown(true)
  };

  const handleMouseLeave = () => {
    setActivDropdown(false)
  };

  const handleMouseEnter2 = () => {
    setClassDropdown(true)
  };

  const handleMouseLeave2 = () => {
    setClassDropdown(false)
  };

  return (
    // padding-x py-8 z-10 w-full bg-beige shadow-lg

    <nav className=" bg-beige padding-x py-8 z-10 w-full relative">
        <div className='flex justify-center items-center gap-10 font-caudex leading-normal text-base max-lg:justify-between text-primary-maroon'>
            <Link href="/" className='shrink-0 max-lg:shrink'>
                <Image
                    src="/assets/images/namadwaarlogo.png"
                    alt="Logo"
                    width={300}
                    height={100}
                />
            </Link>
            <ul className="flex-1 flex justify-end items-center gap-12 max-lg:hidden">
                    {/* {navLinks.map((item) => (
                        <li key={item.label}>
                            <Link href={item.href} className="font-caudex leading-normal text-lg text-gray">
                                {item.label}
                            </Link>
                        </li> 
                    ))} */}
                        <li className='underline-section'>
                            <Link href='/'>
                                Home
                            </Link>
                        </li> 
                        
                        <li className='underline-section'>
                            <Link href='/aboutus'>
                                About Us
                            </Link>
                        </li> 

                        <li className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className={`p-2 flex justify-between items-center gap-1 ${toggleActivDropdown? 'bg-primary-maroon text-beige stroke-beige': ''}`}>
                                <button href=''>
                                    Activities  
                                </button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-4 h-4 ${toggleActivDropdown? "bg-primary-maroon stroke-beige":""}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                           
                            {/* dropdown */}
                            {toggleActivDropdown && (
                            <div className='absolute bg-primary-maroon text-beige top-10 left-0 w-[210px]'>
                                <ul className='shadow-md shadow-beige'>
                                    <li className='p-2 hover:bg-primary-orange'>
                                        <Link href='/weeklysatsangh'>Weekly Satsangh</Link>
                                    </li>
                                    <li className='p-2  hover:bg-primary-orange'>
                                        <Link href='/housesatsangh'>House Satsangh</Link>
                                    </li>
                                    <li className='p-2 hover:bg-primary-orange'>
                                        <Link href='/storytime'>Kadhai Kelu Kadhai Kelu</Link>
                                    </li>
                                    <li className='p-2 hover:bg-primary-orange'>
                                        <Link href='/akhandanama'>Akhanda Nama</Link>
                                    </li>
                                </ul>
                            </div>)}
                        </li> 

                        <li className='underline-section'>
                            <Link href='/events'>
                                Events
                            </Link>
                        </li> 

                        <li className='relative' onMouseEnter={handleMouseEnter2}  onMouseLeave={handleMouseLeave2}>
                            <div className={`p-2 flex justify-between items-center gap-1 ${toggleClassDropdown? 'bg-primary-maroon text-beige stroke-beige': ''}`}>
                                <Link href='/classes'>
                                    Classes  
                                </Link>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-4 h-4 ${toggleClassDropdown? "bg-primary-maroon stroke-beige":""}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                           
                            {/* dropdown */}
                            {toggleClassDropdown && (
                            <div className='absolute bg-primary-maroon text-beige top-10 left-0 w-[200px]'>
                                <ul className='shadow-md shadow-beige'>
                                    <li className='p-2 hover:bg-primary-orange'>
                                        <Link href='/gopakuteeram'>Gopa Kuteeram</Link>
                                    </li>
                                    <li className='p-2  hover:bg-primary-orange'>
                                        <Link href='/yuvagk'>Yuva Gopakuteeram</Link>
                                    </li>
                                    <li className='p-2 hover:bg-primary-orange'>
                                        <Link href='/classes'>Itihasa & Purana Class</Link>
                                    </li>
                                </ul>
                            </div>)}
                        </li>  

                        <li className='underline-section'>
                            <Link href='/gallery'>
                                Gallery
                            </Link>
                        </li>
                        
                        <li className='underline-section'>
                            <Link href='/contactus'>
                                Contact Us
                            </Link>
                        </li>
            </ul>

            {/* Mobile Navigation */}
            <div className="hidden max-lg:block max-lg:flex-shrink-0" onClick={handleNavMenu}>
                <Image
                    src="/assets/icons/hamburger.svg"
                    alt="Logo"
                    width={25}
                    height={25}
                />
            </div>
            { toggleNavMenu && (<ul onClick={handleNavMenu} className=' lg:hidden bg-beige absolute w-full top-[105px] left-0 text-primary-maroon font-caudex text-base'>
                <li className='px-10 py-5 border-b border-primary-maroon/20'>
                    <Link href='/' className="">
                        Home
                    </Link>
                </li> 
                
                <li className='px-10 py-5 border-b border-primary-maroon/20'>
                    <Link href='/aboutus' className="">
                        About Us
                    </Link>
                </li> 

                <li className='px-10 py-5 border-b border-primary-maroon/20'>
                    <div className={`flex justify-start items-center gap-1`}>
                        <button onClick={(e) => {
                                e.stopPropagation(); // Prevent event propagation to the parent
                                mobileActivDropdown();
                            }}>
                            Activities  
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-4 h-4`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    {toggleActivDropdown && (
                        <ul onClick={() => {handleNavMenu(); setActivDropdown();}}>
                            <li className='px-12 py-3'><Link href='/weeklysatsangh'>Weekly Satsangh</Link></li>
                            <li className='px-12 py-3'><Link href='/housesatsangh'>House Satsangh</Link></li>
                            <li className='px-12 py-3'><Link href='/storytime'>Kadhai Kelu Kadhai Kelu</Link></li>
                            <li className='px-12 pt-3'><Link href='/akhandanama'>Akhanda Nama</Link></li>
                        </ul>
                    )}
                    
                </li> 

                <li className='px-10 py-5 hover:bg-white border-b border-primary-maroon/20'>
                    <Link href='/events'>
                        Events
                    </Link>
                </li> 

                <li className='px-10 py-5 border-b border-primary-maroon/20'>
                    <div className={`flex justify-start items-center gap-1`}>
                        <Link href='/classes'>
                            Classes  
                        </Link>
                        <button onClick={(e) => {
                                e.stopPropagation(); // Prevent event propagation to the parent
                                mobileClassDropdown();
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-4 h-4`}>
                                <path strokeLinecap="round" stroke-Linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        
                    </div>
                    {toggleClassDropdown && (
                        <ul onClick={() => {handleNavMenu(); setClassDropdown();}}>
                            <li className='px-12 py-3'><Link href='/yuvagk'>Yuva Gopakuteeram</Link></li>
                            <li className='px-12 py-3'><Link href='/gopakuteeram'>Gopakuteeram</Link></li>
                            <li className='px-12 py-3'><Link href='/classes'>Sanskrit Class</Link></li>
                        </ul>
                    )}
                    
                </li> 
                <li className='px-10 py-5 hover:bg-white border-b border-primary-maroon/20'>
                    <Link href='/gallery'>
                        Gallery
                    </Link>
                </li> 

                <li className='px-10 py-5 hover:bg-white border-b border-primary-maroon/20'>
                    <Link href='/contactus'>
                        Contact Us
                    </Link>
                </li> 

                
            </ul>)}
    
            
        </div>
    </nav>
  )
}

export default Header