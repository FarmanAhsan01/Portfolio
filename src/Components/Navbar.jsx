import { div, nav } from 'framer-motion/client'

import { FaBars, FaXmark, FaMoon, FaSun } from 'react-icons/fa6'
import resume from '../assets/Farman_Ahsan_Resume_.pdf'
import React, { useState, useEffect } from 'react'

function Navbar() {
    const [showMenu, setShowMenu]=useState(false);
    const [darkMode, setDarkMode] = useState(true)

  // Load saved theme
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')

        if (savedTheme === 'light') {
        setDarkMode(false)
          document.documentElement.classList.remove('dark')
        } else {
        setDarkMode(true)
        document.documentElement.classList.add('dark')
        }
    }, [])

  // Toggle theme
    const toggleTheme = () => {
        if (darkMode) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        setDarkMode(false)
        } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        setDarkMode(true)
        }
    }

  return (
    <nav className='fixed w-full z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
            <div>
                <a href="#" className='text-3xl font-bold text-gray-900 dark:text-white'>
                    Farman
                    <span className='px-2 text-purple-500'>Ahsan</span>
                    <div className='w-4 h-4 bg-purple-500 rounded-full'></div>
                </a>
             </div>

             <div className='hidden md:flex space-x-7 ml-135 '>
                <a href="#home" className='relative text-gray-700 dark:text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Home</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 -transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#about" className='relative text-gray-700 dark:text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>About</span> 
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#skills" className='relative text-gray-700 dark:text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Skills</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#projects" className='relative text-gray-700 dark:text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Projects</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#experience" className='relative text-gray-700 dark:text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Experience</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#contact" className='relative text-gray-700 dark:text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Contact</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <div className='ml-10'>
                    <button
                    onClick={toggleTheme}
                    className="w-10 h-10 flex items-center justify-center border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition duration-300"
                    aria-label="Toggle theme"
                >
                    {darkMode ? <FaMoon /> : <FaSun />}
                </button>
                </div>

             </div>
                           <a
                     href={resume}
                     download="Farman_Ahsan_Resume.pdf"
                     className="px-2 py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition duration-300"
                    >
                     Resume
                </a>
             {/* Mobile button */}
             <div className='md:hidden'>
                {
                    showMenu ? (
                        <FaXmark
                        onClick={() => setShowMenu(false)}
                        className="text-2xl cursor-pointer text-gray-900 dark:text-white "
                        />
                    ) : (
                        <FaBars
                        onClick={() => setShowMenu(true)}
                        className="text-2xl cursor-pointer text-gray-900 dark:text-white "
                        />
                    )
                }
             </div>
        </div>
        {
            showMenu &&(
                <div className='md:hidden mt-4 bg-gray-100 dark:bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
                     <a href="#home"  onClick={() => setShowMenu(false)} className='relative text-gray-700 dark:text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Home</span>
    
                </a>
                <a href="#about"   onClick={() => setShowMenu(false)} className='relative text-gray-700 dark:text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>About</span> 
                    
                </a>
                <a href="#skills"   onClick={() => setShowMenu(false)} className='relative text-gray-700 dark:text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Skills</span>
                   
                </a>
                <a href="#projects"  onClick={() => setShowMenu(false)} className='relative text-gray-700 dark:text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Projects</span>
                    
                </a>
                <a href="#experience"  onClick={() => setShowMenu(false)} className='relative text-gray-700 dark:text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Experience</span>
                   
                </a>
                <a href="#contact"  onClick={() => setShowMenu(false)} className='relative text-gray-700 dark:text-white/80 transition duration-300 hover:text-purple-500 group'>
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
 