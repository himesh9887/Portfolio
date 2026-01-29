const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  tech: [String],
  image: String,
  github: String,
  live: String
})

module.exports = mongoose.model("Project", ProjectSchema)
