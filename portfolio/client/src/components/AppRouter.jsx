import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FloatingDock from './FloatingDock'
import Home from '../pages/Home'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import Services from '../pages/Services'
import Certifications from '../pages/Certifications'
import Resume from '../pages/Resume'
import Contact from '../pages/Contact'

function AppRouter({ darkMode, setDarkMode }) {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="flex">
        {/* Sidebar/Navigation - Fixed position */}
        <FloatingDock darkMode={darkMode} setDarkMode={setDarkMode} />
        
        {/* Main Content - Properly spaced */}
        <main className="flex-1 lg:ml-20 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter