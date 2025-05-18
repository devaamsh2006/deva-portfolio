import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Bus Booking App',
      description: ' A comprehensive platform enabling users to search for bus routes, select seats in real-time, and make secure online payments, streamlining the ticket booking process.',
      image: '/busbooking.png',
      githubLink: 'https://github.com/devaamsh2006/bus-booking-app',
    },
    {
      id: 2,
      title: 'Canteen Management App',
      description: 'An integrated system designed to manage canteen operations, including order processing, inventory tracking, enhancing efficiency and reducing manual workload..',
      image: '/canteen.png',
      githubLink: 'https://github.com/devaamsh2006/dt-project'
    },
    {
      id: 3,
      title: 'Mall Management',
      description: 'An interactive web application showcasing a virtual mall environment, developed using HTML, CSS, JavaScript, and GSAP, providing users with an immersive shopping experience.',
      image: '/mall.jpg',
      githubLink: 'https://github.com/devaamsh2006/mallwebsite',
    },
    {
      id: 4,
      title: 'Blog App',
      description: 'A user-friendly blogging platform allowing users to create, edit, and manage posts, with features like categorization, commenting, and responsive design for optimal readability.',
      image: '/blog.png',
      githubLink: 'https://github.com/devaamsh2006/blog'
    },
    {
      id: 5,
      title: 'Event Management App',
      description: 'A versatile tool for planning and managing events, offering functionalities such as attendee registration, schedule management, and real-time updates to ensure seamless event execution.',
      image: '/event.jpeg',
      githubLink: 'https://github.com/devaamsh2006/Webathon'
    },
    {
      id: 6,
      title: 'Resume Analyser',
      description: 'An AI-powered application that evaluates resumes, providing insights on strengths and areas for improvement, assisting users in enhancing their professional profiles.',
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