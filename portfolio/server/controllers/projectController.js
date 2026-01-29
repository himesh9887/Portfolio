const Project = require("../models/Project")

exports.getProjects = async (req,res)=>{
 const data = await Project.find()
 res.json(data)
}
