const mongoose = require("mongoose")

module.exports = mongoose.model(
  "Certification",
  new mongoose.Schema({
    title: String,
    issuer: String,
    year: String
  })
)
