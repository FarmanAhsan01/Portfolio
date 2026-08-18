import React from 'react'
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

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple-500">Touch</span>
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>


        {/* Contact Form + Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* ================= CONTACT FORM ================= */}
          <div>
            <form className="space-y-6">

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
                  className="w-full  bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-purple-500 transition duration-300"
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
                  className="w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-purple-500 transition duration-300 resize-none"
                ></textarea>
              </div>


              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple-500 rounded-lg font-medium text-white hover:bg-purple-700 transition duration-300"
              >
                Send Message
              </button>

            </form>
          </div>


          {/* ================= CONTACT INFORMATION ================= */}
          <div className="space-y-8">

            {/* Location */}
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


            {/* Email */}
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


            {/* Phone */}
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

                {/* GitHub */}
                <a
                  href="#"
                  aria-label="GitHub"
                  className="w-12 h-12 rounded-full  bg-white dark:bg-black border border-gray-200 dark:border-gray-700 flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300"
                >
                  <FaGithub />
                </a>


                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-700 flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </a>


                {/* Twitter */}
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-12 h-12 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-700 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300"
                >
                  <FaTwitter />
                </a>


                {/* Dribbble */}
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