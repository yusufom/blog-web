import React from 'react'


const Blog = (props) => {
  return (
    <div className="p-5 sm:p-2">

        <div>
            <img className='rounded-t-[20px]' src={props.img} alt="" />
        </div>
        <div>
            <h3 className='font-bold'>Nov 23, 2022</h3>
            <p  className='text-xl font-serif font-bold'>This way is wrong about design</p>
            <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit excepturi sapiente pariatur a. Nisi provident quidem, voluptas laboriosam delectus alias blanditiis repellat? Natus sed atque, molestias assumenda porro nihil?</p>
            
        </div>

        <div className='flex justify-between'>
            <p className='underline underline-offset-2 text-2xl font-serif font-bold'>Read More ...</p>
            <p className='flex justify-end'>234 Views</p>
        </div>
    </div>
  )
}

export default Blog