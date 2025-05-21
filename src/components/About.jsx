import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#00ffff] rounded-lg transform rotate-6 opacity-20"></div>
              <img
                src="/dev.png"
                alt="About Me"
                className="relative z-10 w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-6xl font-bold mb-12">About Me</h2>
            
            <div className="space-y-8 text-xl text-gray-300">
              <p>
                Hi, I'm <span className="text-white font-semibold">GANGISHETTI DEVAAMSH</span>, 
                an enthusiastic frontend developer from Hyderabad. I'm currently in my second year studying 
                Computer Science ( Artificial Intelligence and Machine Learning ) at <span className="text-white font-semibold">VNR VJIET</span>.
              </p>
              
              <p>
                Over the past 2 years, I've immersed myself in web development, 
                gaining solid proficiency in <span className="text-[#00ffff]">HTML, CSS, JavaScript, and React.js</span>.
              </p>
              
              <p>
                I've worked on numerous personal projects and have a keen interest in designing 
                aesthetically pleasing and user-centric websites. I'm committed to continuous 
                learning and development, and I'm excited to apply my skills to new opportunities 
                in the future.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 bg-transparent border-2 border-[#00ffff] text-[#00ffff] 
                       px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#00ffff] hover:text-[#1a1a1a] 
                       transition-all duration-300"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              CONTACT
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About;