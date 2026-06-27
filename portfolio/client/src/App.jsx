// import React, { useState, useEffect } from 'react'
// import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { motion, AnimatePresence } from 'framer-motion'
// import CursorGlow from './components/CursorGlow'
// import FloatingDock from './components/FloatingDock'
// import Home from './pages/Home'
// import About from './pages/About'
// import Skills from './pages/Skills'
// import Projects from './pages/Projects'
// import Services from './pages/Services'
// import Certifications from './pages/Certifications'
// import Resume from './pages/Resume'
// import Contact from './pages/Contact'

// function App() {
//   const [isLoading, setIsLoading] = useState(true)
//   const [darkMode, setDarkMode] = useState(true)

//   useEffect(() => {
//     setTimeout(() => setIsLoading(false), 1000)

//     const savedTheme = localStorage.getItem('darkMode')
//     if (savedTheme !== null) {
//       setDarkMode(JSON.parse(savedTheme))
//     }
//   }, [])

//   useEffect(() => {
//     localStorage.setItem('darkMode', JSON.stringify(darkMode))
//     if (darkMode) {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//   }, [darkMode])

//   // Create router with future flags
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home />,
//     },
//     {
//       path: "/about",
//       element: <About />,
//     },
//     {
//       path: "/skills",
//       element: <Skills />,
//     },
//     {
//       path: "/projects",
//       element: <Projects />,
//     },
//     {
//       path: "/services",
//       element: <Services />,
//     },
//     {
//       path: "/certifications",
//       element: <Certifications />,
//     },
//     {
//       path: "/resume",
//       element: <Resume />,
//     },
//     {
//       path: "/contact",
//       element: <Contact />,
//     },
//   ], {
//     future: {
//       v7_startTransition: true,
//       v7_relativeSplatPath: true,
//     }
//   })

//   if (isLoading) {
//     return (
//       <div className="fixed inset-0 bg-dark-900 flex items-center justify-center">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
//         >
//           HR
//         </motion.div>
//       </div>
//     )
//   }

//   return (
//     <div className={`min-h-screen ${darkMode ? 'dark' : 'light'}`}>
//       <CursorGlow />
//       <FloatingDock darkMode={darkMode} setDarkMode={setDarkMode} />

//       <main className="lg:pl-24 min-h-screen">
//         <RouterProvider router={router} />
//       </main>
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import AppRouter from './components/AppRouter'
import CursorGlow from './components/CursorGlow'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
    
    const savedTheme = localStorage.getItem('darkMode')
    if (savedTheme !== null) {
      setDarkMode(JSON.parse(savedTheme))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f172a]">
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="rounded-full border border-white/10 bg-white/8 px-8 py-4 text-2xl font-bold text-white shadow-2xl shadow-cyan-500/20 backdrop-blur"
        >
          Himesh Rajput
        </motion.div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <CursorGlow />
      <AppRouter darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default App
