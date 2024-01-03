import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div name='home' className='w-full h-screen  flex items-center justify-center'>
            <div className='mx-w-[1000px] px-8 flex flex-col justify-center items-start h-full '>
                <p className='text-[#ccd6f6] py-2'>Hello, My Name Is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-secondary py-2 '>Ahmed Algrgawy</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] py-2'>I Am a Front-End Developer</h2>
                <p className='text-[#8892b0] py-2 max-w-[700px]' >The very least you can do in your life is figure out what you hope for. And the most you can do is live inside that hope. Not admire it from a distance but live right in it, under its roof.</p>
                <div>
                    <Link to="projects" smooth={true} duration={500}>
                        <button className='group font-bold text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-secondary hover:border-secondary duration-500'>View Projects
                            <span className='group-hover:rotate-90 duration-500'><HiArrowNarrowRight className='ml-2' /></span>
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Hero;