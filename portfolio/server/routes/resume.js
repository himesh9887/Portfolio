const router=require("express").Router()
const {downloadResume}=require("../controllers/resumeController")

router.get("/",downloadResume)

module.exports=router
