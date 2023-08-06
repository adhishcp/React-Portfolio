import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#29c486] '>Hi, my name is</p>
            <h1 className=' text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>ADHISH</h1>
            <h2 className=' text-4xl sm:text-5xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Highly skilled Full Stack Web Developer with expertise in front-end and back-end technologies.
            Committed to delivering user-friendly and scalable web applications. Eager to contribute my talents to innovative projects and dynamic teams.
            </p>
            <div>
              <button className='text-white group border-2 py-6 px-3 my-2 flex items-center hover:bg-[#29c486] hover:border-[#29c486] hover:text-[black]'>
                View Work  
                <span className=' group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
            </div>

        </div>

    </div>
  )
}

export default Home