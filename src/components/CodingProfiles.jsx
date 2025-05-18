import React from 'react'
import { motion } from 'framer-motion'
import { FaTrophy, FaStar, FaChartLine } from 'react-icons/fa'

const CodingProfiles = () => {
  const profiles = [
    {
      id: 1,
      platform: 'LeetCode',
      icon: <FaTrophy className="text-yellow-500" />,
      rating: '1400+',
      stats: [
        { label: 'solved', value: '70+' }
      ],
      progressColor: 'from-purple-500 to-pink-500',
      progressWidth: '85%'
    },
    {
      id: 2,
      platform: 'CodeChef',
      icon: <FaStar className="text-yellow-400" />,
      rating: '1400+',
      badge: '2★',
      stats: [
        { label: 'solved', value: '200+' }
      ],
      progressColor: 'from-blue-500 to-cyan-500',
      progressWidth: '75%'
    },
    {
      id: 3,
      platform: 'Codeforces',
      icon: <FaChartLine className="text-cyan-400" />,
      rating: '1000+',
      stats: [
        { label: 'solved', value: '50+' }
      ],
      progressColor: 'from-indigo-500 to-purple-500',
      progressWidth: '60%'
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
            <h2 className="text-6xl font-bold mb-4">Coding Profiles</h2>
            <p className="text-xl text-gray-300">My competitive programming journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#2a2a2a]/50 backdrop-blur-sm rounded-lg p-6 hover:bg-[#2a2a2a] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl">{profile.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{profile.platform}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-[#00ffff]">
                        {profile.rating}
                      </span>
                      {profile.badge && (
                        <span className="text-yellow-400 font-medium">
                          {profile.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: profile.progressWidth }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className={`h-full rounded-full bg-gradient-to-r ${profile.progressColor}`}
                    />
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 mt-4">
                    {profile.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center gap-2">
                        <span className="text-[#00ffff]">{stat.value}</span>
                        <span className="text-gray-400">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodingProfiles
