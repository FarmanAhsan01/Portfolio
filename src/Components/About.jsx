import React from 'react'
import { motion } from 'framer-motion'
import profile from "../assets/profile.png"
import { aboutInfo } from "../assets/assets"

function About() {
  return (
    <div className='w-full sm:px-20'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        id="about"
        className="py-20 bg-dark-200 w-full"
      >

        {/* Heading */}
        <div className="container mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              About <span className="text-purple-500">Me</span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Get to know more about my background and passion
            </p>
          </div>


          {/* Image + My Journey */}
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <img
                className="w-64 sm:w-72 md:w-full h-full md:h-full object-cover mx-auto"
                src={profile}
                alt="Profile"
              />
            </motion.div>


            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full md:w-1/2 text-center md:text-left"
            >

              <h3 className="text-2xl font-semibold mb-4">
                My <span className="text-purple-500">Journey</span>
              </h3>

              <p className="text-gray-400 leading-relaxed mb-4">
                I'm a passionate full-stack developer with over 1 year of
                experience creating digital solutions for businesses around
                the world. My journey started with basic HTML/CSS websites
                and has evolved into building complex web applications with
                modern frameworks.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                When I'm not coding, you can find me exploring new
                technologies, contributing to open-source projects, or sharing
                my knowledge through tech blogs and tutorials. I believe in
                continuous learning and pushing the boundaries of what's
                possible on the web.
              </p>


              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-6
                    transition-transform duration-300
                    hover:-translate-y-2
                    cursor-pointer"
                  >

                    <div className="text-4xl text-purple-500 mb-4">
                      <data.icon />
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                      {data.title}
                    </h3>

                    <p className="text-gray-400">
                      {data.description}
                    </p>

                  </div>
                ))}

              </div>

            </motion.div>

          </div>

        </div>

      </motion.div>
    </div>
  )
}

export default About