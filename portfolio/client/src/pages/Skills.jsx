import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Server, Database, Wrench, Star } from 'lucide-react'

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 98 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
  {
    icon: Server,
    title: 'Backend',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Python / Django', level: 80 },
      { name: 'Go', level: 75 },
      { name: 'GraphQL', level: 85 },
    ],
  },
  {
    icon: Database,
    title: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 80 },
      { name: 'Prisma ORM', level: 90 },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Docker', level: 85 },
      { name: 'AWS / Vercel', level: 80 },
      { name: 'Figma', level: 75 },
    ],
  },
]

function ProgressBar({ level, label, delay }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-slate-300 flex items-center gap-2">
          {label}
          {level >= 90 && <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />}
        </span>
        <span className="text-sm font-medium text-slate-400">{level}%</span>
      </div>
      <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: delay * 0.1 }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </motion.div>
      </div>
    </div>
  )
}

function Skills() {
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Technologies I've been working with recently.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 lg:p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <ProgressBar
                      key={skillIndex}
                      label={skill.name}
                      level={skill.level}
                      delay={skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Currently Exploring</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Next.js 14', 'Cloud Architecture', 'System Design', 'Machine Learning', 'Web3', 'Rust'].map((topic, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-3 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:border-blue-500 hover:text-white transition-all cursor-default font-medium"
              >
                {topic}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Skills