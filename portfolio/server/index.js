require("dotenv").config()
const express=require("express")
const cors=require("cors")
const connectDB=require("./config/db")

connectDB()

const app=express()
app.use(cors())
app.use(express.json())

app.use("/api/projects",require("./routes/projects"))
app.use("/api/certifications",require("./routes/certifications"))
app.use("/api/contact",require("./routes/contact"))
app.use("/api/resume",require("./routes/resume"))

app.listen(5000,()=>console.log("Server running 5000"))
