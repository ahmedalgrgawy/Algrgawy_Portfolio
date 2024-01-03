import React from 'react';
import ahmed from '../Images/Ahmed.jpeg'
const About = () => {
    return (
        <div name='about' className='w-full h-screen text-white'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className=' pb-8 pl-4'>
                        <p className='title'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-left text-4xl font-bold flex justify-end items-center'>
                        <p  >Hi, I'm Ahmed Algrgawy, nice to meet you</p>
                        <img className='min-[880px]:w-[250px] w-[150px] rounded-r-full ' src={ahmed} alt='Ahmed Algrgawy'></img>
                    </div>
                    <div className='flex items-center justify-center'>
                        <p>I am a student at the Faculty of Computers and Information, Damanhour University, Department of Computer Science. I'm a hard worker and I'm always up for a challenge, whether it's building a complex web app or creating a simple yet elegant landing page.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;