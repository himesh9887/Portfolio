const Contact = require("../models/Contact")

exports.sendContact = async(req,res)=>{
 await Contact.create(req.body)
 res.json({success:true})
}
