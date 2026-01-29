import mongoose from 'mongoose'

const homeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  subtitle: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  socialLinks: {
    github: {
      type: String,
      required: true
    },
    linkedin: {
      type: String,
      required: true
    },
    twitter: {
      type: String,
      required: true
    }
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

export default mongoose.model('Home', homeSchema)