const Certification = require("../models/CertificationModels")

exports.getCertifications = async(req,res)=>{
 const data = await Certification.find()
 res.json(data)
}
