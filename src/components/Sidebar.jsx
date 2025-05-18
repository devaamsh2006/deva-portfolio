import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { motion } from 'framer-motion'

const Sidebar = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/devaamsh-gangishetti-2441b6295/' },
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/devaamsh2006' },
    { name: 'Email', icon: <MdEmail />, url: 'mailto:devamsh2006@gmail.com' },
  ]

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 bg-[#2a2a2a] py-4 rounded-r-lg shadow-lg backdrop-blur-sm"
    >
      <div className="flex flex-col gap-8">
        {socialLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl px-4 text-gray-300 hover:text-[#00ffff] transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}

export default Sidebar