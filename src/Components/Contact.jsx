import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaDribbble,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter
} from 'react-icons/fa'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://127.0.0.1:8000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      console.log(data)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-gray-100 dark:bg-zinc-900
        text-gray-900 dark:text-white
        transition-colors duration-300"
    >

      <div className="container mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple-500">Touch</span>
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-purple-500 transition duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-purple-500 transition duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-purple-500 transition duration-300 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple-500 rounded-lg font-medium text-white hover:bg-purple-700 transition duration-300"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">

            <div className="flex items-start">
              <div className="text-purple-500 text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Location
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  New Delhi, Chandni Chowk
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple-500 text-2xl mr-4">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Email
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  farmanahsan77@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple-500 text-2xl mr-4">
                <FaPhone />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phone
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  +91 9953906280
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">
                Follow Me
              </h3>

              <div className="flex space-x-4">

                <a
                  href="#"
                  aria-label="GitHub"
                  className="w-12 h-12 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-700 flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-700 flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-12 h-12 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-700 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300"
                >
                  <FaTwitter />
                </a>

                <a
                  href="#"
                  aria-label="Dribbble"
                  className="w-12 h-12 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-700 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300"
                >
                  <FaDribbble />
                </a>

              </div>
            </div>

          </div>

        </div>

      </div>

    </motion.div>
  )
}

export default Contact