import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from '../Components/ProjectCard'
import { FaArrowRight } from 'react-icons/fa'

function Projects() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        id="projects"
        className="py-20 bg-white text-gray-900 dark:bg-[#1a1a1a] dark:text-white transition-colors duration-300"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center max-w-2xl mx-auto mb-8">
            My <span className="text-purple-500">Projects</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-10 text-lg">
            A selection of my recent work
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
              />
            ))}
          </div>
          <div className='text-center mt-12'>
              <a href="#" className='inline-flex items-center px-6 py-3 border
              border-purple-500 rounded-lg font-medium text-gray-900 dark:text-white hover:bg-purple-500/20 transition duration-300'>
                <span>View More Projects</span>
                <FaArrowRight className='ml-2'/>
              </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Projects