import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, Github, X } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    category: 'fullstack',
    description: 'A comprehensive admin dashboard for managing products, orders, and analytics with real-time data visualization.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    liveUrl: '#',
    repoUrl: '#',
    features: ['Real-time analytics', 'Order management', 'Inventory tracking', 'User roles'],
    challenges: 'Implementing real-time updates using WebSockets while maintaining performance with large datasets.',
  },
  {
    id: 2,
    title: 'Task Management App',
    category: 'frontend',
    description: 'A productivity application featuring drag-and-drop kanban boards, dark mode, and local storage persistence.',
    tech: ['Next.js', 'TypeScript', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
    liveUrl: '#',
    repoUrl: '#',
    features: ['Drag & drop', 'Dark mode', 'Local storage', 'Responsive design'],
    challenges: 'Creating smooth drag-and-drop interactions that work seamlessly across all devices.',
  },
  {
    id: 3,
    title: 'API Gateway Service',
    category: 'backend',
    description: 'A scalable microservices gateway handling authentication, rate limiting, and request routing.',
    tech: ['Go', 'Redis', 'Docker', 'gRPC'],
    image: 'https://images.unsplash.com/photo-1558494949-ef526b004297?auto=format&fit=crop&q=80&w=800',
    repoUrl: '#',
    features: ['Rate limiting', 'JWT auth', 'Load balancing', 'Metrics'],
    challenges: 'Designing a distributed rate limiter that works across multiple instances.',
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    category: 'fullstack',
    description: 'Platform to track engagement metrics across multiple social channels using AI sentiment analysis.',
    tech: ['Python', 'React', 'TensorFlow', 'AWS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    liveUrl: '#',
    repoUrl: '#',
    features: ['AI sentiment analysis', 'Multi-platform', 'Scheduled reports', 'Data export'],
    challenges: 'Training a custom NLP model to accurately analyze sentiment in multiple languages.',
  },
]

const filters = ['all', 'frontend', 'backend', 'fullstack']

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen section-padding"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Real-world projects built with modern technologies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all capitalize ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur text-xs font-medium text-white border border-slate-700 capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="text-xl font-bold text-white mb-2 cursor-pointer group-hover:text-blue-400 transition-colors"
                  >
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-slate-700/50 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 rounded-lg bg-blue-600/10 text-blue-400 text-sm font-medium hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2"
                      >
                        Live Demo <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 rounded-lg bg-slate-700/50 text-slate-300 text-sm font-medium hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
                      >
                        Code <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">Want to see more of my work?</p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Contact Me
            </Link>
            <a href="#" className="btn-outline">
              View GitHub
            </a>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-800 border border-slate-700 p-6 lg:p-8"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Overview</h4>
                  <p className="text-slate-400">{selectedProject.description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Challenges</h4>
                  <p className="text-slate-400">{selectedProject.challenges}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="px-4 py-2 rounded-lg bg-slate-700 text-slate-300 text-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {selectedProject.liveUrl && (
                    <a href={selectedProject.liveUrl} className="btn-primary flex-1 text-center">
                      View Live
                    </a>
                  )}
                  <a href={selectedProject.repoUrl} className="btn-outline flex-1 text-center">
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Projects