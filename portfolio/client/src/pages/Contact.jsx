import React, { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Phone, CheckCircle } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      const response = await axios.post('/api/contact', formData)
      if (response.data.success) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? Let's connect.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400">Thank you for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                {error && (
                  <div className="text-red-400 text-sm">{error}</div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Send Message <Send className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/30 transition-all card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Email Me</h3>
                  <p className="text-slate-400">himeshrajput619@gmail.com</p>
                  <p className="text-slate-500 text-sm mt-1">I usually respond within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-purple-500/30 transition-all card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Call Me</h3>
                  <p className="text-slate-400">+91 9887442586 </p>
                  <p className="text-slate-500 text-sm mt-1">Available Mon-Fri, 9AM-6PM IST</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-green-500/30 transition-all card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-green-500/10 text-green-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Location</h3>
                  <p className="text-slate-400">Alwar Rajasthan, India</p>
                  <p className="text-slate-500 text-sm mt-1">Available for remote work worldwide</p>
                </div>
              </div>
            </div>

            {/* Social Card */}
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
              <h3 className="text-white font-semibold text-lg mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-4 rounded-xl bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all hover:scale-110"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium">Available for Work</span>
              </div>
              <p className="text-slate-400 text-sm">
                I'm currently open to freelance projects and full-time opportunities. Let's build something amazing together!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact