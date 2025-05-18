import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

const TechStack = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [key, setKey] = useState(0)

  const technologies = {
    frontend: [
      { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" />, type: 'frontend' },
      { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" />, type: 'frontend' },
      { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, type: 'frontend' },
      { name: 'React', icon: <FaReact className="text-[#61DAFB]" />, type: 'frontend' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, type: 'frontend' },
    ],
    backend: [
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" />, type: 'backend' },
      { name: 'Express.js', icon: <SiExpress className="text-white" />, type: 'backend' },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, type: 'backend' },
    ],
    tools: [
      { name: 'VS Code', icon: <VscCode className="text-[#007ACC]" />, type: 'tools' },
      { name: 'GitHub', icon: <FaGithub className="text-white" />, type: 'tools' },
    ],
  }

  const filteredTech = activeFilter === 'all' 
    ? [...technologies.frontend, ...technologies.backend, ...technologies.tools]
    : technologies[activeFilter] || []

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-6xl font-bold mb-6 text-center">My Tech Stack</h2>
              <p className="text-xl text-gray-300 mb-12 text-center">Technologies I've been working with currently</p>

              {/* Filter Navbar */}
              <div className="flex gap-8 justify-center mb-12">
                {['all', 'frontend', 'backend', 'tools'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => {
                      setActiveFilter(filter)
                      setKey(prev => prev + 1)
                    }}
                    className={`text-lg font-medium capitalize px-4 py-2 rounded-full transition-all duration-300
                      ${activeFilter === filter 
                        ? 'bg-[#00ffff] text-[#1a1a1a]' 
                        : 'text-gray-300 hover:text-[#00ffff]'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Tech Icons Grid */}
              <motion.div 
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-4 gap-12 w-full"
              >
                {filteredTech.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                    className="flex flex-col items-center gap-4 p-6 rounded-lg
                             hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="text-6xl">{tech.icon}</div>
                    <span className="text-gray-300">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TechStack