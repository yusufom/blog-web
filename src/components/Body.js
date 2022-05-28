import React from 'react'
import Blog from './Blog'
import blog1 from '../assets/blogpic1.jpg'
import blog2 from '../assets/blogpic2.jpg'

const Body = () => {
  return (
    <div className='flex flex-col max-w-[1240px] m-auto'>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">

            <Blog img={blog1}/>
            <Blog img={blog2}/>
            <Blog img={blog1}/>
            <Blog img={blog1}/>
            <Blog img={blog2}/>
            <Blog img={blog1}/>
            <Blog img={blog2}/>
            <Blog img={blog1}/>
            <Blog img={blog2}/>

        </div>
        
    </div>
  )
}


export  default Body