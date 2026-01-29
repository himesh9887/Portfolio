import Home from '../models/HomeModels.js'

// Get home page data
export const getHomeData = async (req, res) => {
  try {
    const homeData = await Home.findOne({ isActive: true }).sort({ updatedAt: -1 })
    
    if (!homeData) {
      return res.status(404).json({
        success: false,
        message: 'Home data not found'
      })
    }

    res.json({
      success: true,
      data: homeData
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching home data',
      error: error.message
    })
  }
}

// Update home data (admin)
export const updateHomeData = async (req, res) => {
  try {
    const {
      title,
      subtitle,
      description,
      socialLinks,
      isActive
    } = req.body

    const updatedData = await Home.findOneAndUpdate(
      { isActive: true },
      {
        title,
        subtitle,
        description,
        socialLinks,
        isActive
      },
      { new: true, upsert: true, runValidators: true }
    )

    res.json({
      success: true,
      message: 'Home data updated successfully',
      data: updatedData
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating home data',
      error: error.message
    })
  }
}

// Create home data (admin)
export const createHomeData = async (req, res) => {
  try {
    const homeData = new Home(req.body)
    await homeData.save()

    res.status(201).json({
      success: true,
      message: 'Home data created successfully',
      data: homeData
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating home data',
      error: error.message
    })
  }
}

// Delete home data (admin)
export const deleteHomeData = async (req, res) => {
  try {
    const homeData = await Home.findByIdAndDelete(req.params.id)
    
    if (!homeData) {
      return res.status(404).json({
        success: false,
        message: 'Home data not found'
      })
    }

    res.json({
      success: true,
      message: 'Home data deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting home data',
      error: error.message
    })
  }
}