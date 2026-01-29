import React from 'react'
import { motion } from 'framer-motion'
import { Award, Download, ExternalLink } from 'lucide-react'

const certifications = [
  {
    id: 1,
    title: 'AWS Certified Developer - Associate',
    organization: 'Amazon Web Services',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=600',
    credentialId: 'AWS-DEV-2023-1234',
    url: '#',
  },
  {
    id: 2,
    title: 'React Developer Certification',
    organization: 'Meta',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600',
    credentialId: 'META-REACT-2023-5678',
    url: '#',
  },
  {
    id: 3,
    title: 'MongoDB Certified Developer',
    organization: 'MongoDB University',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    credentialId: 'MDB-2022-9012',
    url: '#',
  },
  {
    id: 4,
    title: 'Node.js Certification',
    organization: 'OpenJS Foundation',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=600',
    credentialId: 'NODE-2022-3456',
    url: '#',
  },
  {
    id: 5,
    title: 'Google Cloud Professional',
    organization: 'Google Cloud',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=600',
    credentialId: 'GCP-2021-7890',
    url: '#',
  },
  {
    id: 6,
    title: 'Python for Data Science',
    organization: 'IBM',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600',
    credentialId: 'IBM-PY-2021-2345',
    url: '#',
  },
]

function Certifications() {
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
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Industry-recognized certifications validating my expertise.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-slate-800/30 border border-slate-700/50"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                
                {/* Award Icon */}
                <div className="absolute top-4 right-4">
                  <div className="p-2 rounded-full bg-yellow-500/20 backdrop-blur-sm">
                    <Award className="w-5 h-5 text-yellow-400" />
                  </div>
                </div>

                {/* Organization */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{cert.organization}</p>
                  <p className="text-slate-300 text-xs">{cert.year}</p>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6">
                <h3 className="text-white font-semibold mb-2">{cert.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Credential ID:</span>
                    <span className="text-slate-300 font-mono text-xs">{cert.credentialId}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href={cert.url}
                    className="flex-1 px-3 py-2 rounded-lg bg-blue-600/10 text-blue-400 text-sm font-medium hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-1"
                  >
                    <ExternalLink className="w-4 h-4" /> Verify
                  </a>
                  <button className="flex-1 px-3 py-2 rounded-lg bg-slate-700/50 text-slate-300 text-sm font-medium hover:bg-slate-700 transition-all flex items-center justify-center gap-1">
                    <Download className="w-4 h-4" /> PDF
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '6+', label: 'Certifications' },
            { number: '50+', label: 'Projects Completed' },
            { number: '5+', label: 'Years Experience' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50"
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">
            All certifications are verified and can be shared upon request.
          </p>
          <button className="btn-primary flex items-center gap-2 mx-auto">
            <Download className="w-5 h-5" /> Download All Certificates
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Certifications