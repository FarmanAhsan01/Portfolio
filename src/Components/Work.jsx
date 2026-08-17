import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

function Work() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }} 
      id="experience"
      className="py-20 bg-gray-100 dark:bg-[#1a1a1a]
        text-gray-900 dark:text-white
        transition-colors duration-300 "
    >
      <div className="container item-center mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Work <span className="text-purple-500">Experience</span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-400 text-center mb-16">
          My Professional Journey So Far
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {workData.map((work, index) => (
              <div
                key={index}
                className="relative pl-12 before:content-[''] before:absolute before:left-2 before:top-0 before:w-1 before:h-full before:bg-purple-500 cursor-pointer hover:-translate-y-2 transition-all duration-300"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-purple-500 border-4 border-black"></div>

                {/* Work Card */}
                <div className="bg-zinc-900 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-white">
                    {work.role}
                  </h3>

                  <h4 className="text-purple-500 font-medium mt-1">
                    {work.company}
                  </h4>

                  <p className="text-sm text-gray-400 mt-1">
                    {work.duration}
                  </p>

                  <p className="text-gray-300 mt-4">
                    {work.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work