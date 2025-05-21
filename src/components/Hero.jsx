import React from 'react'
import { Link } from 'react-scroll'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center relative">
      {/* Social Links
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-6">
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" 
           className="text-2xl hover:text-[#00ffff] transition-colors">
          <FaLinkedin />
        </a>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer"
           className="text-2xl hover:text-[#00ffff] transition-colors">
          <FaGithub />
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer"
           className="text-2xl hover:text-[#00ffff] transition-colors">
          <FaTwitter />
        </a>
      </div> */}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-around gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-center lg:text-left">
            <h2 className="text-xl md:text-2xl mb-2">Hi,</h2>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">My name is</h1>
            <h1 className="text-4xl md:text-6xl font-bold text-[#00ffff] mb-4">GANGISHETTI DEVAAMSH</h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8">A FULLSTACK WEB DEVELOPER!</p>
            <div className="flex gap-4">
              <Link 
                to="Contact"
                smooth={true}
                duration={500}
                className="inline-block bg-[#00ffff] text-[#1a1a1a] px-6 md:px-8 py-3 rounded-full font-semibold
                         hover:bg-[#00cccc] transition-colors cursor-pointer">
                CONTACT ME
              </Link>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block border-2 border-[#00ffff] text-[#00ffff] px-6 md:px-8 py-3 rounded-full font-semibold
                         hover:bg-[#00ffff] hover:text-[#1a1a1a] transition-colors">
                RESUME
              </a>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 max-w-md lg:max-w-lg px-4 lg:px-0">
            <img 
              src="/devolper.png" 
              alt="Developer Illustration"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero