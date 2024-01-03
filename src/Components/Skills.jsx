import React from 'react'
import html from '../Images/html.png'
import css from '../Images/css.png'
import js from '../Images/javascript.png'
import sass from '../Images/sass.png'
import bootstrap from '../Images/bootstrap.png'
import tailwind from '../Images/tailwind.png'
import reactImg from '../Images/react.png'
import firebase from '../Images/firebase.png'
import pug from '../Images/pug.svg'

const Skills = () => {
    return (
        <div name='skills' className='my-32' >
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='title'>Skills</p>
                    <p className='py-4'>Technologies i have worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-4'>
                    <div className='img-container'>
                        <img className='w-20 mx-auto' src={html} alt='Html'></img>
                        <p className='py-4 font-bold'>Html</p>
                    </div>
                    <div className='img-container'>
                        <img className='w-20 mx-auto' src={pug} alt='pug'></img>
                        <p className='py-4 font-bold'>pug</p>
                    </div>
                    <div className='img-container'>
                        <img className='w-20 mx-auto' src={css} alt='css'></img>
                        <p className='py-4 font-bold'>css</p>
                    </div>
                    <div className='img-container'>
                        <img className='w-20 mx-auto' src={bootstrap} alt='bootstrap'></img>
                        <p className='py-4 font-bold'>bootstrap</p>
                    </div>
                    <div className='img-container'>
                        <img className='w-20 mx-auto' src={sass} alt='sass'></img>
                        <p className='py-4 font-bold'>sass</p>
                    </div>
                    <div className='img-container'>
                        <img className='w-20 mx-auto' src={tailwind} alt='tailwind'></img>
                        <p className='py-4 font-bold'>tailwind</p>
                    </div>
                    <div className='img-container'>
                        <img className='w-20 mx-auto' src={js} alt='js'></img>
                        <p className='py-4 font-bold'>javascript</p>
                    </div>
                    <div className='img-container'>
                        <img className='w-20 mx-auto' src={reactImg} alt='reactImg'></img>
                        <p className='py-4 font-bold'>React</p>
                    </div>
                    <div className='img-container'>
                        <img className='w-20 mx-auto' src={firebase} alt='firebase'></img>
                        <p className='py-4 font-bold'>firebase</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills