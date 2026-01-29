const Certification = require("../models/Certification")

exports.getCertifications = async(req,res)=>{
 const data = await Certification.find()
 res.json(data)
}
