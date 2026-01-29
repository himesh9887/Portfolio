import express from 'express'
import {
  getHomeData,
  updateHomeData,
  createHomeData,
  deleteHomeData
} from '../controllers/HomeController.js'

const router = express.Router()

// Public routes
router.get('/', getHomeData)

// Admin routes
router.post('/', createHomeData)
router.put('/', updateHomeData)
router.delete('/:id', deleteHomeData)

export default router