import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Project from './models/Project.js'
import Certification from './models/Certification.js'
import connectDB from './config/db.js'

dotenv.config()

const projects = [
  {
    title: 'E-Commerce Dashboard',
    category: 'fullstack',
    description: 'A comprehensive admin dashboard for managing products, orders, and analytics with real-time data visualization.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    liveUrl: '#',
    repoUrl: '#',
    features: ['Real-time analytics', 'Order management', 'Inventory tracking', 'User roles'],
    challenges: 'Implementing real-time updates using WebSockets while maintaining performance with large datasets.',
    order: 1
  },
  {
    title: 'Task Management App',
    category: 'frontend',
    description: 'A productivity application featuring drag-and-drop kanban boards, dark mode, and local storage persistence.',
    tech: ['Next.js', 'TypeScript', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
    liveUrl: '#',
    repoUrl: '#',
    features: ['Drag & drop', 'Dark mode', 'Local storage', 'Responsive design'],
    challenges: 'Creating smooth drag-and-drop interactions that work seamlessly across all devices.',
    order: 2
  }
]

const certifications = [
  {
    title: 'AWS Certified Developer',
    organization: 'Amazon Web Services',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=600',
    credentialId: 'AWS-DEV-2023-1234',
    url: '#',
    order: 1
  },
  {
    title: 'React Developer Certification',
    organization: 'Meta',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600',
    credentialId: 'META-REACT-2023-5678',
    url: '#',
    order: 2
  }
]

const seedDatabase = async () => {
  try {
    await connectDB()
    console.log('Connected to MongoDB')

    // Clear existing data
    await Project.deleteMany({})
    await Certification.deleteMany({})
    console.log('Cleared existing data')

    // Insert new data
    await Project.insertMany(projects)
    console.log('Projects seeded')

    await Certification.insertMany(certifications)
    console.log('Certifications seeded')

    console.log('Database seeded successfully!')
    process.exit(0)
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  }
}

seedDatabase()