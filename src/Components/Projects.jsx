import React from 'react'
import food from '../Images/Projects/food.png'
import commerce from '../Images/Projects/e-commerce.png'
import dashboard from '../Images/Projects/dashboard.png'
import portfolio from '../Images/Projects/portfolio.png'
import realestate from '../Images/Projects/real-state.png'
import cruds from '../Images/Projects/cruds.png'
import social from '../Images/Projects/social.png'
import coffee from '../Images/Projects/coffe-website.png'
import quiz from '../Images/Projects/quiz.png'
const Projects = () => {
    return (
        <div name='projects' className=' w-full my-80 md:h-screen'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='title'>Projects</p>
                    <p className='py-4'>have a look on my work</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
                    <div style={{ backgroundImage: `url(${food})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content '>
                        <div className='opacity-0 group-hover:opacity-100 text-center duration-500'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Food Website
                            </span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" href='https://ahmedalgrgawy.github.io/Food_Website/'>
                                    <button className='project-btn'>Live</button>
                                </a>
                                <a target="_blank" href='https://github.com/ahmedalgrgawy/Food_Website'>
                                    <button className='project-btn'>Repo</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${commerce})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content '>
                        <div className='opacity-0 group-hover:opacity-100 text-center duration-500 '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                E-Commerce Website
                            </span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" href='https://ahmedalgrgawy.github.io/E-Commerce_Website/index.html'>
                                    <button className='project-btn'>Live</button>
                                </a>
                                <a target="_blank" href='https://github.com/ahmedalgrgawy/E-Commerce_Website'>
                                    <button className='project-btn'>Repo</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${dashboard})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content '>
                        <div className='opacity-0 group-hover:opacity-100 text-center duration-500'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                dashboard
                            </span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" href='https://ahmedalgrgawy.github.io/Html_Css_Project_Four/'>
                                    <button className='project-btn'>Live</button>
                                </a>
                                <a target="_blank" href='https://github.com/ahmedalgrgawy/Html_Css_Project_Four'>
                                    <button className='project-btn'>Repo</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${portfolio})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content '>
                        <div className='opacity-0 group-hover:opacity-100 text-center duration-500'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Portfolio Template
                            </span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" href='https://ahmedalgrgawy.github.io/React-Portfolio/'>
                                    <button className='project-btn'>Live</button>
                                </a>
                                <a target="_blank" href='https://github.com/ahmedalgrgawy/React-Portfolio'>
                                    <button className='project-btn'>Repo</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${realestate})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content '>
                        <div className='opacity-0 group-hover:opacity-100 text-center duration-500'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                real estate
                            </span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" href='https://ahmedalgrgawy.github.io/Real_State_Website/'>
                                    <button className='project-btn'>Live</button>
                                </a>
                                <a target="_blank" href='https://github.com/ahmedalgrgawy/Real_State_Website'>
                                    <button className='project-btn'>Repo</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${social})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content '>
                        <div className='opacity-0 group-hover:opacity-100 text-center duration-500'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Social App
                            </span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" href='https://social-media-cf31c.web.app/'>
                                    <button className='project-btn'>Live</button>
                                </a>
                                <a target="_blank" href='https://github.com/ahmedalgrgawy/Firebase_Social_Media_App'>
                                    <button className='project-btn'>Repo</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${cruds})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content '>
                        <div className='opacity-0 group-hover:opacity-100 text-center duration-500'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                CRUDS
                            </span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" href='https://ahmedalgrgawy.github.io/CRUDS/'>
                                    <button className='project-btn'>Live</button>
                                </a>
                                <a target="_blank" href='https://github.com/ahmedalgrgawy/CRUDS'>
                                    <button className='project-btn'>Repo</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${coffee})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content '>
                        <div className='opacity-0 group-hover:opacity-100 text-center duration-500'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                coffee shop
                            </span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" href='https://ahmedalgrgawy.github.io/Coffee_Shop_Website/'>
                                    <button className='project-btn'>Live</button>
                                </a>
                                <a target="_blank" href='https://github.com/ahmedalgrgawy/Coffee_Shop_Website'>
                                    <button className='project-btn'>Repo</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${quiz})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content '>
                        <div className='opacity-0 group-hover:opacity-100 text-center duration-500'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Quiz app
                            </span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" href='https://ahmedalgrgawy.github.io/Quiz_App/'>
                                    <button className='project-btn'>Live</button>
                                </a>
                                <a target="_blank" href='https://github.com/ahmedalgrgawy/Quiz_App?tab=readme-ov-file'>
                                    <button className='project-btn'>Repo</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='pt-8 flex justify-center items-center'>
                    <button className='font-bold text-white border-2 hover:bg-secondary hover:border-secondary px-4 py-3 my-8 mx-auto flex items-center duration-500'>
                        <a target='_blank' href='https://github.com/ahmedalgrgawy?tab=repositories'>
                            More Projects
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Projects