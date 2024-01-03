import React, { useState } from 'react'
import logo from '../Images/letter-a.png';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
const Navbar = () => {


    const [nav, setNav] = useState(false);
    return (
        <div className='nav fixed w-full h-[80px] flex justify-between items-center px-4  text-white'>
            <div className=''>
                <img style={{ width: '50px' }} src={logo} alt='Ahmed'></img>
            </div>

            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        about
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        skills
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500}>
                        projects
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        contact
                    </Link>
                </li>
            </ul>

            <div onClick={() => setNav(!nav)} className='mobileBtn md:hidden z-10 cursor-pointer'>
                {!nav ? <i class="fa-solid fa-bars text-3xl"></i> : <i class="fa-solid fa-x"></i>}
            </div>

            <ul className={!nav ? 'mobileNav hidden ' : 'mobileNav absolute top-0 left-0 h-screen w-full bg-primary flex flex-col justify-center items-center '}>
                <li>
                    <Link onClick={() => setNav(!nav)} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link onClick={() => setNav(!nav)} to="about" smooth={true} duration={500}>
                        about
                    </Link>
                </li>
                <li>
                    <Link onClick={() => setNav(!nav)} to="skills" smooth={true} duration={500}>
                        skills
                    </Link>
                </li>
                <li>
                    <Link onClick={() => setNav(!nav)} to="projects" smooth={true} duration={500}>
                        projects
                    </Link>
                </li>
                <li>
                    <Link onClick={() => setNav(!nav)} to="contact" smooth={true} duration={500}>
                        contact
                    </Link>
                </li>
            </ul>

            <div className='hidden social lg:flex fixed flex-col top-[35%] left-0 '>
                <ul>
                    <li className=' bg-[#1877f2]'>
                        <a target='_blank' href='https://www.facebook.com/ahmedalgrgawy10'>Facebook <FaFacebook size={30} /></a>
                    </li>
                    <li className=' bg-[#0a66c2]'>
                        <a target='_blank' className='' href='https://www.linkedin.com/in/ahmed-algrgawy/'>LinkedIn <FaLinkedin size={30} /> </a>
                    </li>
                    <li className=' bg-[#e1306c]'>
                        <a target='_blank' href='https://www.instagram.com/ahmed_algrgawy'>Instgram <FaInstagram size={30} /></a>
                    </li>
                    <li className=' bg-[#333]'>
                        <a target='_blank' href='https://github.com/ahmedalgrgawy'>GitHub <FaGithub size={30} /></a>
                    </li>
                    <li className=' bg-secondary'>
                        <a target='_blank' href='mailto:ahmedalgrgawy77@gmail.com'>Gmail <HiOutlineMail size={30} /></a>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Navbar