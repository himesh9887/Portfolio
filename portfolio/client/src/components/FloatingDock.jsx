// import React, { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import { Link, useLocation } from 'react-router-dom'
// import { 
//   Home, 
//   User, 
//   Code2, 
//   FolderGit2, 
//   Briefcase, 
//   Award, 
//   FileText, 
//   Mail,
//   Moon,
//   Sun,
//   Github,
//   Linkedin,
//   Twitter
// } from 'lucide-react'

// const dockItems = [
//   { id: 'home', label: 'Home', icon: Home, path: '/' },
//   { id: 'about', label: 'About', icon: User, path: '/about' },
//   { id: 'skills', label: 'Skills', icon: Code2, path: '/skills' },
//   { id: 'projects', label: 'Projects', icon: FolderGit2, path: '/projects' },
//   { id: 'services', label: 'Services', icon: Briefcase, path: '/services' },
//   { id: 'certifications', label: 'Certs', icon: Award, path: '/certifications' },
//   { id: 'resume', label: 'Resume', icon: FileText, path: '/resume' },
//   { id: 'contact', label: 'Contact', icon: Mail, path: '/contact' },
// ]

// function FloatingDock({ darkMode, setDarkMode }) {
//   const [hoveredItem, setHoveredItem] = useState(null)
//   const [isMobile, setIsMobile] = useState(false)
//   const location = useLocation()

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1024)
//     }
    
//     checkMobile()
//     window.addEventListener('resize', checkMobile)
//     return () => window.removeEventListener('resize', checkMobile)
//   }, [])

//   const isActive = (path) => location.pathname === path

//   return (
//     <>
//       {/* Desktop Dock - Fixed position with proper spacing */}
//       <motion.div
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         className="hidden lg:flex fixed left-6 top-3.5 -translate-y-1/2 z-50"
//       >
//         <div className="dock flex flex-col gap-5 p-4 rounded-2xl">
//           {dockItems.map((item) => {
//             const Icon = item.icon
//             const active = isActive(item.path)
            
//             return (
//               <motion.div
//                 key={item.id}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="relative"
//               >
//                 <Link
//                   to={item.path}
//                   onMouseEnter={() => setHoveredItem(item.id)}
//                   onMouseLeave={() => setHoveredItem(null)}
//                   className={`flex items-center justify-center w-14 h-14 rounded-xl transition-all relative ${
//                     active
//                       ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
//                       : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'
//                   }`}
//                 >
//                   <Icon className="w-6 h-6" />
                  
//                   {/* Glow effect */}
//                   {hoveredItem === item.id && (
//                     <motion.div
//                       layoutId="dock-glow"
//                       className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl -z-10"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                     />
//                   )}
                  
//                   {/* Tooltip */}
//                   {hoveredItem === item.id && (
//                     <motion.div
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       className="absolute left-full ml-3 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap"
//                     >
//                       {item.label}
//                     </motion.div>
//                   )}
//                 </Link>
//               </motion.div>
//             )
//           })}
          
//           {/* Dark Mode Toggle */}
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setDarkMode(!darkMode)}
//             className="w-14 h-14 rounded-xl bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 flex items-center justify-center transition-all"
//           >
//             {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Mobile Bottom Dock - Improved positioning */}
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
//       >
//         <div className="dock flex gap-2 p-3 rounded-2xl">
//           {dockItems.slice(0, 5).map((item) => {
//             const Icon = item.icon
//             const active = isActive(item.path)
            
//             return (
//               <Link
//                 key={item.id}
//                 to={item.path}
//                 className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
//                   active
//                     ? 'text-blue-400'
//                     : 'text-slate-400'
//                 }`}
//               >
//                 <Icon className="w-5 h-5" />
//                 <span className="text-[10px] font-medium">{item.label}</span>
//               </Link>
//             )
//           })}
          
//           {/* More Menu - Dark Mode Toggle */}
//           <div className="flex flex-col items-center gap-1 p-2 rounded-lg text-slate-400">
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="p-1"
//             >
//               {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//             </button>
//             <span className="text-[10px] font-medium">Theme</span>
//           </div>
//         </div>
//       </motion.div>

//       {/* Social Links - Desktop Only - Repositioned */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         className="hidden lg:flex fixed bottom-6 left-6 z-40"
//       >
//         {/* <div className="flex flex-col gap-3">
//           {[Github, Linkedin, Twitter].map((Icon, i) => (
//             <a
//               key={i}
//               href="#"
//               className="p-3 rounded-xl bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all hover:scale-110"
//             >
//               <Icon className="w-5 h-5" />
//             </a>
//           ))}
//         </div> */}
//       </motion.div>
//     </>
//   )
// }

// export default FloatingDock













// import React from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { Home, User, Code2, FolderGit2, Mail, Moon, Sun } from 'lucide-react'

// const dockItems = [
//   { id: 'home', label: 'Home', icon: Home, path: '/' },
//   { id: 'about', label: 'About', icon: User, path: '/about' },
//   { id: 'skills', label: 'Skills', icon: Code2, path: '/skills' },
//   { id: 'projects', label: 'Projects', icon: FolderGit2, path: '/projects' },
//   { id: 'contact', label: 'Contact', icon: Mail, path: '/contact' },
// ]

// function FloatingDock({ darkMode, setDarkMode }) {
//   const location = useLocation()
//   const isActive = (path) => location.pathname === path

//   return (
//     <>
//       {/* Desktop Dock */}
//       <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50">
//         <div className="flex flex-col gap-3 p-4 rounded-2xl bg-slate-800/50 backdrop-blur border border-slate-700/50">
//           {dockItems.map((item) => {
//             const Icon = item.icon
//             const active = isActive(item.path)
            
//             return (
//               <Link
//                 key={item.id}
//                 to={item.path}
//                 className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all ${
//                   active
//                     ? 'bg-blue-500 text-white'
//                     : 'text-slate-400 hover:text-white hover:bg-slate-700'
//                 }`}
//               >
//                 <Icon className="w-6 h-6" />
//               </Link>
//             )
//           })}
          
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="w-12 h-12 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700 transition-all flex items-center justify-center"
//           >
//             {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Bottom Nav */}
//       <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
//         <div className="flex justify-center gap-2 p-3 rounded-2xl bg-slate-800/50 backdrop-blur border border-slate-700/50 max-w-xs mx-auto">
//           {dockItems.map((item) => {
//             const Icon = item.icon
//             const active = isActive(item.path)
            
//             return (
//               <Link
//                 key={item.id}
//                 to={item.path}
//                 className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all flex-1 ${
//                   active
//                     ? 'text-blue-400'
//                     : 'text-slate-400'
//                 }`}
//               >
//                 <Icon className="w-5 h-5" />
//                 <span className="text-[10px] font-medium">{item.label}</span>
//               </Link>
//             )
//           })}
          
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="flex flex-col items-center gap-1 p-2 rounded-lg text-slate-400"
//           >
//             {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//             <span className="text-[10px] font-medium">Theme</span>
//           </button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default FloatingDock





// import React, { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Link, useLocation } from 'react-router-dom'
// import { 
//   Home, 
//   User, 
//   Code2, 
//   FolderGit2, 
//   Briefcase, 
//   Award, 
//   FileText, 
//   Mail,
//   Moon,
//   Sun,
//   Github,
//   Linkedin,
//   Twitter,
//   MoreHorizontal
// } from 'lucide-react'

// const dockItems = [
//   { id: 'home', label: 'Home', icon: Home, path: '/' },
//   { id: 'about', label: 'About', icon: User, path: '/about' },
//   { id: 'skills', label: 'Skills', icon: Code2, path: '/skills' },
//   { id: 'projects', label: 'Projects', icon: FolderGit2, path: '/projects' },
//   { id: 'services', label: 'Services', icon: Briefcase, path: '/services' },
//   { id: 'certifications', label: 'Certs', icon: Award, path: '/certifications' },
//   { id: 'resume', label: 'Resume', icon: FileText, path: '/resume' },
//   { id: 'contact', label: 'Contact', icon: Mail, path: '/contact' },
// ]

// function FloatingDock({ darkMode, setDarkMode }) {
//   const [hoveredItem, setHoveredItem] = useState(null)
//   const [isMobile, setIsMobile] = useState(false)
//   const [showMoreMenu, setShowMoreMenu] = useState(false)
//   const [hasError, setHasError] = useState(false)
//   const location = useLocation()

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1024)
//     }
    
//     checkMobile()
//     window.addEventListener('resize', checkMobile)
//     return () => window.removeEventListener('resize', checkMobile)
//   }, [])

//   // Error boundary
//   useEffect(() => {
//     const handleError = (event) => {
//       console.error('FloatingDock error:', event.error)
//       setHasError(true)
//     }

//     window.addEventListener('error', handleError)
//     return () => window.removeEventListener('error', handleError)
//   }, [])

//   if (hasError) {
//     return (
//       <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50">
//         <p>Navigation error occurred</p>
//         <button 
//           onClick={() => setHasError(false)}
//           className="mt-2 px-3 py-1 bg-red-600 rounded"
//         >
//           Retry
//         </button>
//       </div>
//     )
//   }

//   const isActive = (path) => {
//     try {
//       return location.pathname === path
//     } catch (error) {
//       console.error('Error checking active path:', error)
//       return false
//     }
//   }

//   // Mobile menu items (first 4 + more button)
//   const mobileItems = dockItems.slice(0, 4)
//   const moreItems = dockItems.slice(4)

//   return (
//     <>
//       {/* Desktop Dock */}
//       <motion.div
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         className="hidden lg:flex fixed left-6 top-3.5 -translate-y-1/2 z-50"
//       >
//         <div className="dock flex flex-col gap-5 p-4 rounded-2xl">
//           {dockItems.map((item) => {
//             const Icon = item.icon
//             const active = isActive(item.path)
            
//             return (
//               <motion.div
//                 key={item.id}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="relative"
//               >
//                 <Link
//                   to={item.path}
//                   onMouseEnter={() => setHoveredItem(item.id)}
//                   onMouseLeave={() => setHoveredItem(null)}
//                   className={`flex items-center justify-center w-14 h-14 rounded-xl transition-all relative ${
//                     active
//                       ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
//                       : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'
//                   }`}
//                 >
//                   <Icon className="w-6 h-6" />
                  
//                   {/* Glow effect */}
//                   {hoveredItem === item.id && (
//                     <motion.div
//                       layoutId="dock-glow"
//                       className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl -z-10"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                     />
//                   )}
                  
//                   {/* Tooltip */}
//                   {hoveredItem === item.id && (
//                     <motion.div
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       className="absolute left-full ml-3 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap"
//                     >
//                       {item.label}
//                     </motion.div>
//                   )}
//                 </Link>
//               </motion.div>
//             )
//           })}
          
//           {/* Dark Mode Toggle */}
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setDarkMode(!darkMode)}
//             className="w-14 h-14 rounded-xl bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 flex items-center justify-center transition-all"
//           >
//             {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Mobile Bottom Dock - Simplified */}
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="lg:hidden fixed bottom-4 left-4 right-4 z-50"
//       >
//         <div className="dock flex items-center justify-between p-3 rounded-2xl mx-auto max-w-sm">
//           {/* Main Navigation Items */}
//           <div className="flex gap-2 flex-1">
//             {mobileItems.map((item) => {
//               const Icon = item.icon
//               const active = isActive(item.path)
              
//               return (
//                 <Link
//                   key={item.id}
//                   to={item.path}
//                   className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all flex-1 ${
//                     active
//                       ? 'text-blue-400'
//                       : 'text-slate-400'
//                   }`}
//                 >
//                   <Icon className="w-5 h-5" />
//                   <span className="text-[10px] font-medium">{item.label}</span>
//                 </Link>
//               )
//             })}
//           </div>

//           {/* More Menu & Theme Toggle */}
//           <div className="flex gap-2">
//             {/* More Menu */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowMoreMenu(!showMoreMenu)}
//                 className="flex flex-col items-center gap-1 p-2 rounded-lg text-slate-400 hover:text-white transition-all"
//               >
//                 <MoreHorizontal className="w-5 h-5" />
//                 <span className="text-[10px] font-medium">More</span>
//               </button>

//               <AnimatePresence>
//                 {showMoreMenu && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 rounded-xl bg-slate-800/90 backdrop-blur border border-slate-700 shadow-xl"
//                   >
//                     <div className="flex flex-col gap-1">
//                       {moreItems.map((item) => {
//                         const Icon = item.icon
//                         const active = isActive(item.path)
                        
//                         return (
//                           <Link
//                             key={item.id}
//                             to={item.path}
//                             onClick={() => setShowMoreMenu(false)}
//                             className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
//                               active
//                                 ? 'bg-blue-500/20 text-blue-400'
//                                 : 'text-slate-400 hover:bg-slate-700/50 hover:text-white'
//                             }`}
//                           >
//                             <Icon className="w-4 h-4" />
//                             <span className="text-sm">{item.label}</span>
//                           </Link>
//                         )
//                       })}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Theme Toggle */}
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="flex flex-col items-center gap-1 p-2 rounded-lg text-slate-400 hover:text-white transition-all"
//             >
//               {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//               <span className="text-[10px] font-medium">Theme</span>
//             </button>
//           </div>
//         </div>
//       </motion.div>

//       {/* Social Links - Desktop Only */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         className="hidden lg:flex fixed bottom-6 left-6 z-40"
//       >
//         {/* <div className="flex flex-col gap-3">
//           {[Github, Linkedin, Twitter].map((Icon, i) => (
//             <a
//               key={i}
//               href="#"
//               className="p-3 rounded-xl bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all hover:scale-110"
//             >
//               <Icon className="w-5 h-5" />
//             </a>
//           ))}
//         </div> */}
//       </motion.div>
//     </>
//   )
// }

// export default FloatingDock



import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  User, 
  Code2, 
  FolderGit2, 
  Briefcase, 
  Award, 
  FileText, 
  Mail,
  Moon,
  Sun,
  Github,
  Linkedin,
  Twitter,
  MoreHorizontal
} from 'lucide-react'

/* DESKTOP ITEMS */
const dockItems = [
  { id: "home", label: "Home", icon: Home, path: "/" },
  { id: "about", label: "About", icon: User, path: "/about" },
  { id: "skills", label: "Skills", icon: Code2, path: "/skills" },
  { id: "projects", label: "Projects", icon: FolderGit2, path: "/projects" },
  { id: "services", label: "Services", icon: Briefcase, path: "/services" },
  { id: "certifications", label: "Certs", icon: Award, path: "/certifications" },
  { id: "resume", label: "Resume", icon: FileText, path: "/resume" },
  { id: "contact", label: "Contact", icon: Mail, path: "/contact" },
]

/* MOBILE MAIN - Reordered: Home → About → Projects → Skills → Contact */
const mobileMain = [
  { id: "home", label: "Home", icon: Home, path: "/" },
  { id: "about", label: "About", icon: User, path: "/about" },
  { id: "projects", label: "Projects", icon: FolderGit2, path: "/projects" },
  { id: "skills", label: "Skills", icon: Code2, path: "/skills" },
  { id: "contact", label: "Contact", icon: Mail, path: "/contact" },
]

/* MOBILE MORE - Services, Certs, Resume, Theme */
const mobileMore = [
  { id: "services", label: "Services", icon: Briefcase, path: "/services" },
  { id: "certifications", label: "Certs", icon: Award, path: "/certifications" },
  { id: "resume", label: "Resume", icon: FileText, path: "/resume" },
]

export default function FloatingDock({ darkMode, setDarkMode }) {
  const location = useLocation()
  const [isMobile, setIsMobile] = useState(false)
  const [showMoreMenu, setShowMoreMenu] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const isActive = (p) => location.pathname === p

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:flex fixed left-6 top-4 -translate-y-1/2 z-50"
      >
        <div className="dock flex flex-col gap-5 p-4 rounded-2xl bg-slate-900/70 backdrop-blur border border-slate-700">
          {dockItems.map((i) => {
            const Icon = i.icon
            return (
              <motion.div
                key={i.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link
                  to={i.path}
                  onMouseEnter={() => setHoveredItem(i.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`w-14 h-14 flex items-center justify-center rounded-xl transition-all relative ${
                    isActive(i.path)
                      ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                      : "bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-700/60"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  
                  {/* Glow effect on hover */}
                  {hoveredItem === i.id && (
                    <motion.div
                      layoutId="dock-glow"
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                  
                  {/* Tooltip */}
                  {hoveredItem === i.id && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute left-full ml-3 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap"
                    >
                      {i.label}
                    </motion.div>
                  )}
                </Link>
              </motion.div>
            )
          })}

          {/* Dark Mode Toggle with hover effect */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDarkMode(!darkMode)}
            className="w-14 h-14 rounded-xl bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-700/60 transition-all flex items-center justify-center"
          >
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Social Links - Desktop Only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col gap-3 mt-4"
        >
      
        </motion.div>
      </motion.div>

      {/* ================= MOBILE ================= */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:hidden fixed bottom-4 left-4 right-4 z-50"
      >
        <div className="flex items-center justify-between bg-slate-900/90 backdrop-blur border border-slate-700 rounded-xl p-3 mx-auto max-w-sm">
          {/* Main Items: Home, About, Projects, Skills, Contact */}
          <div className="flex gap-2 flex-1">
            {mobileMain.map((i) => {
              const Icon = i.icon
              return (
                <Link
                  key={i.id}
                  to={i.path}
                  className={`flex flex-col items-center flex-1 ${
                    isActive(i.path) ? "text-blue-400" : "text-slate-400"
                  }`}
                >
                  <Icon className="w-5 h-5 mb-1" />
                  <span className="text-xs font-medium">
                    {i.label}
                  </span>
                </Link>
              )
            })}
          </div>

          {/* MORE */}
          <div className="relative ml-2">
            <button
              onClick={() => setShowMoreMenu(!showMoreMenu)}
              className="flex flex-col items-center text-slate-400 hover:text-white transition-colors"
            >
              <MoreHorizontal className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">More</span>
            </button>

            <AnimatePresence>
              {showMoreMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-full right-0 mb-2 bg-slate-800 border border-slate-700 rounded-xl p-2 min-w-[140px] shadow-xl"
                >
                  {mobileMore.map((m) => {
                    const Icon = m.icon
                    return (
                      <Link
                        key={m.id}
                        to={m.path}
                        onClick={() => setShowMoreMenu(false)}
                        className="flex items-center gap-2 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{m.label}</span>
                      </Link>
                    )
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </>
  )
}