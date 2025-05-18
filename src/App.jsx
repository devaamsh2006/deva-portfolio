import React from 'react'
import { Element } from 'react-scroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Sidebar from './components/Sidebar'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Community from './components/Community'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certificates from './components/Certificates'
import './App.css'

function App() {
  const sectionStyle = {
    minHeight: '100vh',
    backgroundColor: '#1a1a1a',
  };
  return (
    <div>
    <Navbar />
    <Element name="Hero" style={sectionStyle}><Hero /></Element>
    <Element name="About" style={sectionStyle}><About /></Element>
    <Sidebar />
    <Element name="TechStack" style={sectionStyle}><TechStack /></Element>
    <Element name="Projects" style={sectionStyle}><Projects /></Element>
    <Element name="Community" style={sectionStyle}><Community /></Element>
    <Element name="CodingProfiles" style={sectionStyle}><CodingProfiles /></Element>
    <Element name="Certificates" style={sectionStyle}><Certificates /></Element>
    <Element name="Contact" style={sectionStyle}><Contact /></Element>
    <Footer />
    </div>
  )
}

export default App