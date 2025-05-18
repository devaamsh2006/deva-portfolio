import React from 'react'
import { motion } from 'framer-motion'
import { FaUsers, FaCode, FaHeart } from 'react-icons/fa'

const Community = () => {
  const involvements = [
    {
      id: 1,
      title: 'Krithomedh Student Club',
      role: 'Web Developer and Event Management Volunteer',
      description: 'Contributing to the tech community through web development initiatives at Krithomedh VNRVJIET.',
      icon: <FaUsers className="text-[#00ffff]" />,
      tags: ['Web Development', 'Community', 'Event Management']
    },
    {
      id: 2,
      title: 'Indian Society for Technical Education',
      role: 'Technical Volunteer  ',
      description: 'Actively contributing to the college\'s coding club, organizing events, and fostering a collaborative learning environment.',
      icon: <FaHeart className="text-[#00ffff]" />,
      tags: ['Club Activities', 'Event Organization', 'Teamwork']
    }
  ]

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-6xl font-bold mb-4">Community Involvement</h2>
            <p className="text-xl text-gray-300">My contributions to the tech community and leadership roles</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {involvements.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#2a2a2a]/50 backdrop-blur-sm rounded-lg p-6 hover:bg-[#2a2a2a] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-[#00ffff]">{item.role}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#1a1a1a] rounded-full text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community
