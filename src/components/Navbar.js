import React, { useState } from 'react';
import { MenuIcon } from '@heroicons/react/solid'
import {FaLinkedin} from 'react-icons/fa'
import {XIcon} from '@heroicons/react/solid'


function Navbar () {
    const [nav, setNav] = useState(false)

    const handleClick = () =>{
        setNav(!nav)
    }

    return (
        <div className='pt-4 w-screen h-[100px] z-10 fixed bg-white'>

            <div className='px-2 flex justify-between items-center h-full'>
                <div className='flex items-center md:mx-auto md:min-w-[1368px]'>
                    <h1 className='text-3xl p-2 mr-2 font-bold flex'>MUKTAR<span className='text-sm flex flex-col justify-end'>'s blog</span></h1>

                    { !nav ?
                        <div className='flex items-center ml-7'>
                            <span className="border-solid border-r-[#5A47AB] border-r-[10px] border-y-transparent border-y-[13px] -mr-[2.5px]" ></span>
                            
                            <p className='flex items-center p-1 pr-3 text-xl md:text-xs text-white border bg-[#5A47AB] border-[#5A47AB] rounded-md'> <FaLinkedin className='mr-2 ml-2'/>Hire Me</p>
                        </div>
                        :
                        <div className='flex items-center ml-7'>
                            <p className='flex items-center p-1 pr-3 text-md md:text-xs text-white border bg-[#5A47AB] border-[#5A47AB] rounded-md'> <FaLinkedin className='mr-2 ml-2'/>Close the door</p>
                            <span className="border-solid border-l-[#5A47AB] border-l-8 border-y-transparent border-y-8 border-r-0"></span>
                        </div>
                        }
                    <ul className='hidden md:flex md:items-center text-sm mx-auto '>
                        <li className='hover:text-[#5A47AB]'>HOME</li>
                        <li className='hover:text-[#5A47AB]'>PORTFOLIO</li>
                        <li className='hover:text-[#5A47AB]'>SERVICES</li>
                        <li className='hover:text-[#5A47AB]'>ABOUT ME</li>
                    </ul>
                    <div className='hidden md:flex'>
                        <button className='p-1 text-[13px]'>Contact Me</button>
                    </div>
                    
                </div>

                
                <div className='md:hidden mr-4' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-10' /> : <XIcon className='w-10' />}
                    
                </div>
                
            </div>

            <div className={!nav ? 'hidden' : 'md:hidden absolute bg-zinc-200 w-full px-8 h-screen' }>
                <ul className='md:items-center text-[25px] mx-auto'>
                    <li className='hover:text-[#5A47AB] my-10'>HOME</li>
                    <li className='hover:text-[#5A47AB] my-10'>PORTFOLIO</li>
                    <li className='hover:text-[#5A47AB] my-10'>SERVICES</li>
                    <li className='hover:text-[#5A47AB] my-10'>ABOUT ME</li>

                    <div className=''>
                    <button className='p-2 text-md w-full'>Contact Me</button>
                </div>
                </ul>
                

            </div>
        </div>
        
    );
}


export default Navbar;