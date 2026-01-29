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

import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import AppRouter from './components/AppRouter'
import CursorGlow from './components/CursorGlow'
// Remove this line: import ErrorBoundary from "./components/ErrorBoundary";

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
      <div className="fixed inset-0 bg-dark-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Himesh Rajput
        </motion.div>
      </div>
    )
  }

  return (
    // Remove ErrorBoundary wrapper:
    <div className={`min-h-screen ${darkMode ? 'dark' : 'light'}`}>
      <CursorGlow />
      <AppRouter darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default App