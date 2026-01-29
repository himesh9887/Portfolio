import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Server, Palette, Rocket, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Full-stack web applications built with modern technologies and best practices.',
    features: ['React/Next.js', 'Node.js/Express', 'TypeScript', 'REST APIs', 'GraphQL'],
    price: 'Starting at $2,500',
    color: 'blue',
  },
  {
    icon: Server,
    title: 'Backend APIs',
    description: 'Scalable backend services and APIs for web and mobile applications.',
    features: ['Microservices', 'Database Design', 'Authentication', 'Rate Limiting', 'Caching'],
    price: 'Starting at $1,500',
    color: 'purple',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that provide exceptional user experiences.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Responsive Design'],
    price: 'Starting at $1,000',
    color: 'pink',
  },
  {
    icon: Rocket,
    title: 'Deployment & DevOps',
    description: 'Cloud deployment, CI/CD pipelines, and infrastructure management.',
    features: ['AWS/GCP', 'Docker', 'CI/CD', 'Monitoring', 'Auto-scaling'],
    price: 'Starting at $1,000',
    color: 'green',
  },
]

function Services() {
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
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Professional services to help bring your ideas to life.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const colorClasses = {
              blue: 'from-blue-500/10 to-blue-600/10 text-blue-400',
              purple: 'from-purple-500/10 to-purple-600/10 text-purple-400',
              pink: 'from-pink-500/10 to-pink-600/10 text-pink-400',
              green: 'from-green-500/10 to-green-600/10 text-green-400',
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl bg-slate-800/30 border border-slate-700/50 p-8 hover:border-blue-500/30 transition-all"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[service.color]} opacity-50 group-hover:opacity-100 transition-opacity`} />
                
                {/* Content */}
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClasses[service.color]}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>

                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">{service.price}</span>
                    <button className="px-4 py-2 rounded-lg bg-slate-700 text-white text-sm font-medium hover:bg-slate-600 transition-colors">
                      Get Started
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">Have a project in mind?</p>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together. I offer free consultations for new projects.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Book Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Services