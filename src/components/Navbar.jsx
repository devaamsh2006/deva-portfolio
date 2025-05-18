import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('Hero')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSetActive = (to) => {
    setActiveSection(to)
  }

  return (
    <nav role="navigation" aria-label="main navigation" className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#1a1a1a]/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link
            to="Hero"
            smooth={true}
            duration={500}
            className="text-2xl font-bold text-[#00ffff] cursor-pointer"
          >
            DEVAAMSH
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {[
              { to: 'Hero', label: 'Home' },
              { to: 'About', label: 'About' },
              { to: 'TechStack', label: 'Tech Stack' },
              { to: 'Projects', label: 'Projects' },
              { to: 'Community', label: 'Community' },
              { to: 'CodingProfiles', label: 'Profiles' },
              { to: 'Certificates', label: 'Certificates' },
              { to: 'Contact', label: 'Contact' }
            ].map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                spy={true}
                smooth={true} 
                duration={500}
                offset={-100}
                onSetActive={handleSetActive}
                className={`cursor-pointer transition-colors text-base font-medium ${activeSection === item.to ? 'text-[#00ffff]' : 'text-white hover:text-[#00ffff]'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden fixed inset-0 bg-[#1a1a1a] z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col items-center pt-24 space-y-8">
              {[
                { to: 'Hero', label: 'Home' },
                { to: 'About', label: 'About' },
                { to: 'TechStack', label: 'Tech Stack' },
                { to: 'Projects', label: 'Projects' },
                { to: 'Community', label: 'Community' },
                { to: 'CodingProfiles', label: 'Profiles' },
                { to: 'Certificates', label: 'Certificates' },
                { to: 'Contact', label: 'Contact' }
              ].map((item) => (
                <Link 
                  key={item.to}
                  to={item.to} 
                  spy={true}
                  smooth={true} 
                  duration={500}
                  offset={-100}
                  onSetActive={handleSetActive}
                  onClick={() => setIsMenuOpen(false)}
                  className={`cursor-pointer transition-colors text-xl font-medium ${activeSection === item.to ? 'text-[#00ffff]' : 'text-white hover:text-[#00ffff]'}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar