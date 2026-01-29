import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Code2, Server, Palette, BookOpen, GraduationCap, Rocket } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive, interactive UIs with React, Vue, and modern CSS frameworks.',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Creating robust APIs and server-side applications with Node.js, Python, and Go.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Designing intuitive user experiences with Figma and user-centered principles.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Always exploring new technologies and best practices to stay ahead.',
  },
]

function About() {
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Passionate about building digital experiences that make a difference.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-slate-300 leading-relaxed text-lg">
              Hello! I'm Himesh, a dedicated Full Stack Developer based in India. My journey in web development started when I built my first website at 16. Since then, I've been obsessed with creating seamless digital experiences.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg">
              I specialize in the JavaScript ecosystem, primarily working with React, Next.js, and Node.js. I love the challenge of taking a complex problem and turning it into a simple, beautiful interface.
            </p>
            
            {/* Education */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                Education
              </h3>
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <Rocket className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Bachelor of Computer Applications</h4>
                    <p className="text-slate-400">Manipal University</p>
                    <p className="text-blue-400 text-sm mt-1">Currently Pursuing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Journey */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-white mb-4">My Journey</h3>
              <p className="text-slate-400 leading-relaxed">
                From tinkering with HTML in high school to building production-grade applications for clients worldwide, every step has been a learning adventure. I believe in writing clean, maintainable code and creating products that users love.
              </p>
            </div>
          </motion.div>

          {/* Right - Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-slate-700/50 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/contact" className="btn-primary">
            Let's Work Together
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About