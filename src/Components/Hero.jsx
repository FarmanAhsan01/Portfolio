import React from 'react'
import { motion } from 'framer-motion'
import profile from "../assets/profile.png";
import resume from "../assets/Farman_Ahsan_Resume_.pdf";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>

        {/* Text side */}
        <div className='w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left flex flex-col items-center md:items-start'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            Hi, I'm <span className='text-purple-500'>Farman Ahsan</span>
          </h1>
          <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter mx-auto md:mx-0'>
            Full Stack Developer
          </h2>
          <p className='text-gray-300 max-w-lg leading-relaxed mb-8 mx-auto md:mx-0'>
            I create stunning web experiences with modern technologies and innovative design.
          </p>

          {/* Image - shown here on mobile, before buttons */}
          <div className='flex justify-center w-full mb-8 md:hidden'>
            <div className='relative w-64 h-64'>
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse-slow opacity-70'>
                <motion.img
                  className='relative rounded-full w-64 h-64 object-cover z-10 animate-float'
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                  src={profile}
                  alt="profile"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-start space-x-4">

              <a
                href={resume}
                     download
                      className="px-6 py-3 bg-purple-500 text-white rounded-lg
                     font-medium hover:bg-purple-400 transition"
                     >
                        Download Resume
              </a>


            <a
              href="#projects"
              className="px-6 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-[#7c3aed] transition-colors duration-300"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-purple-500 text-purple-500 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image side - shown here on md and up */}
        <div className='hidden md:flex md:w-1/2 justify-center'>
          <div className='relative w-80 h-80'>
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse-slow opacity-70'>
              <motion.img
                className='relative rounded-full w-80 h-80 object-cover z-10 animate-float'
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
                src={profile}
                alt="profile"
              />
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Hero
