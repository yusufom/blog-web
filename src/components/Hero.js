import React from 'react';
import {FaLinkedin} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaMedium} from 'react-icons/fa'
import blogImg from '../assets/blog.png'

function Hero () {
    return (
        <div name='home' className='w-full h-screen  flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'> 
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-5xl'>Blog Post</p>
                <h1 className='py-3 text-xl md:text-2xl font-bold '>This way is wrong about UI Design</h1>
                <p className='text-l'>Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at the end of the product, the design will be considered unsuccessful in my opinion.</p>
                <div className='flex justify-between w-full'>
                    <a href='/' className='flex items-center py-3 px-6 sm:w-[60%] my-4 mx-1 bg-blue-500 text-white'><FaTwitter className='mr-2 ml-2'/>Twitter</a>
                    <a href='/' className='flex items-center py-3 px-6 sm:w-[60%] my-4 mx-1 bg-blue-800 text-white'><FaLinkedin className='mr-2 ml-2'/>LinkedIn</a>
                    <a href='/' className='flex items-center py-3 px-6 sm:w-[60%] my-4 mx-1 bg-black text-white'><FaMedium className='mr-2 ml-2'/>Medium</a>
                </div>
            </div>

        <div className='hidden md:flex'>
            <img className='w-full' src={blogImg} alt="/" />
        </div>

        
        </div>

    </div>

    );
}


export default Hero;