import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaAward, FaStar, FaCrown, FaGem } from 'react-icons/fa';

const Certificates = () => {
  const achievements = [
    {
      id: 1,
      title: "Top 5% of NPTEL EXAM",
      organization: "Course on C++",
      year: "2025",
      icon: <FaCrown className="text-yellow-400" />
    },
    {
      id: 2,
      title: "Webathon 3.0",
      organization: "OverNight Hackathon",
      year: "2025",
      icon: <FaTrophy className="text-purple-500" />
    },
    {
      id: 3,
      title: "Arani 1.0",
      organization: "OverNight Hackathon",
      year: "2025",
      icon: <FaMedal className="text-amber-500" />
    },
    {
      id: 4,
      title: "Internal Smart India Hackathon 2025",
      organization: "OverNight Hackathon",
      year: "2025",
      icon: <FaAward className="text-blue-400" />
    },
    {
      id: 5,
      title: "AI HACKDAY 2025",
      organization: "12-hour Hackathon",
      year: "2025",
      icon: <FaStar className="text-yellow-500" />
    },
    {
      id: 6,
      title: "GOOGLE SOLUTION CHALLENGE 2025",
      organization: "24-hour Hackathon",
      year: "2025",
      icon: <FaGem className="text-cyan-400" />
    },
    {
      id: 7,
      title: "AI IMMERSION 2025",
      organization: "12-hour Hackathon",
      year: "2025",
      icon: <FaTrophy className="text-rose-500" />
    },
    {
      id: 8,
      title: "Krithoathon 1.0",
      organization: "OverNight Hackathon",
      year: "2024",
      icon: <FaMedal className="text-orange-500" />
    },
    {
      id: 9,
      title: "GOOGLE SOLUTION CHALLENGE 2024",
      organization: "24-hour Hackathon",
      year: "2024",
      icon: <FaGem className="text-emerald-400" />
    },
    {
      id: 10,
      title: "TABLEAU CETIFICATION",
      organization: "InternShala",
      year: "2024",
      icon: <FaCertificate className="text-blue-500" />
    },
    {
      id: 11,
      title: "FULL STACK WEB DEVELOPMENT",
      organization: "Angela Yu",
      year: "2024",
      icon: <FaCertificate className="text-green-400" />
    }
  ];

  return (
    <section className="w-full min-h-screen p-8 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-4 text-white">Certifications & Achievements</h2>
          <p className="text-xl text-gray-300">Professional qualifications and recognitions in the field</p>
        </motion.div>

        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8"
            >
              <div className="absolute left-0 top-0 h-full w-[2px] bg-blue-500/20"></div>
              <div className="absolute left-[-8px] top-2 w-[18px] h-[18px] rounded-full bg-[#1a1a1a] border-2 border-blue-500"></div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#2a2a2a] p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{achievement.icon}</span>
                    <h3 className="text-xl font-medium text-white">{achievement.title}</h3>
                  </div>
                  <span className="text-blue-400 text-sm">{achievement.year}</span>
                </div>
                <p className="text-gray-400 ml-9">{achievement.organization}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
