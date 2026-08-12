import { div, nav } from 'framer-motion/client'
import React, { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6';
import resume from '../assets/Farman_Ahsan_Resume_.pdf'

function Navbar() {
    const [showMenu, setShowMenu]=useState(false);
  return (
    <nav className='fixed w-full z-50 bg-black/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
            <div>
                <a href="#" className='text-3xl font-bold text-white'>
                    Farman
                    <span className='px-2 text-purple-500'>Ahsan</span>
                    <div className='w-4 h-4 bg-purple-500 rounded-full'></div>
                </a>
             </div>

             <div className='hidden md:flex space-x-10 ml-135'>
                <a href="#home" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Home</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 -transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#about" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>About</span> 
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#skills" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Skills</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#projects" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Projects</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#experience" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Experience</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#contact" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Contact</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
             </div>
                           <a
                     href={resume}
                     download="Farman_Ahsan_Resume.pdf"
                     className="px-4 py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition duration-300"
                    >
                     Resume
                </a>
             {/* Mobile button */}
             <div className='md:hidden'>
                {
                    showMenu ? (
                        <FaXmark
                        onClick={() => setShowMenu(false)}
                        className="text-2xl cursor-pointer text-white"
                        />
                    ) : (
                        <FaBars
                        onClick={() => setShowMenu(true)}
                        className="text-2xl cursor-pointer text-white"
                        />
                    )
                }
             </div>
        </div>
        {
            showMenu &&(
                <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
                     <a href="#home"  onClick={() => setShowMenu(false)} className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Home</span>
    
                </a>
                <a href="#about"   onClick={() => setShowMenu(false)} className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>About</span> 
                    
                </a>
                <a href="#skills"   onClick={() => setShowMenu(false)} className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Skills</span>
                   
                </a>
                <a href="#projects"  onClick={() => setShowMenu(false)} className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Projects</span>
                    
                </a>
                <a href="#experience"  onClick={() => setShowMenu(false)} className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Experience</span>
                   
                </a>
                <a href="#contact"  onClick={() => setShowMenu(false)} className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Contact</span>
                    
                </a>
                <a
                    href={resume}
                    download="Farman_Ahsan_Resume.pdf"
                    onClick={() => setShowMenu(false)}
                    className="mx-auto px-6 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-400 transition duration-300"
                >
                    Download Resume
                </a>
                </div>
            )
        }
    </nav>
  )
}

export default Navbar
 