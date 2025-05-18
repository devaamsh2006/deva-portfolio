import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Bus Booking App',
      description: 'A user-friendly app that simplifies bus ticket booking with real-time schedules, seat selection, and secure payments.',
      image: '/busbooking.png',
      githubLink: 'https://github.com/devaamsh2006/bus-booking-app',
    },
    {
      id: 2,
      title: 'Canteen Management App',
      description: 'A personalized company website showcasing services and company information.',
      image: '/canteen.png',
      githubLink: 'https://github.com/devaamsh2006/dt-project'
    },
    {
      id: 3,
      title: 'Mall Management',
      description: 'A playstation controller shopping website made using HTML, CSS, JS & GSAP',
      image: '/mall.jpg',
      githubLink: 'https://github.com/devaamsh2006/mallwebsite',
    },
    {
      id: 4,
      title: 'Blog App',
      description: 'An Employee Timesheet Management Website featuring weekly timesheet submission and a dashboard.',
      image: '/blog.png',
      githubLink: 'https://github.com/devaamsh2006/blog'
    },
    {
      id: 5,
      title: 'Event Management App',
      description: 'A personalized company website showcasing services and company information.',
      image: '/event.jpeg',
      githubLink: 'https://github.com/devaamsh2006/Webathon'
    },
    {
      id: 6,
      title: 'Resume Analyser',
      description: 'A playstation controller shopping website made using HTML, CSS, JS & GSAP',
      image: '/resume-analyser.png',
      githubLink: 'https://github.com/devaamsh2006/ai-resume-analyser'
    }
    // Add more projects here in the same format
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
            <h2 className="text-6xl font-bold mb-4">My Projects</h2>
            <p className="text-xl text-gray-300">Things I've built so far</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#2a2a2a] rounded-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex justify-end items-center">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-white hover:text-[#00ffff] transition-colors duration-300"
                    >
                      <FaGithub />
                    </a>
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

export default Projects