import React from 'react'

const Carousel = () => {
  return (
    <div className='flex flex-col max-w-[1240px] m-auto -mt-80'>
        <div className='flex md:hidden text-4xl font-bold'> 
            <h1>Blog Posts</h1>
        </div>
        <ul className='flex mt-2 font-bold md:text-xl text-l overflow-x-scroll'>
            <li className='underline underline-offset-4' >All</li>
            <li>UI/UX</li>
            <li>Python</li>
            <li>Javascript</li>
            <li >Product Design</li>
            <li>Cloud Dev</li>
            <li>GoLang</li>
        </ul>
        
    </div>
  )
}

export default Carousel