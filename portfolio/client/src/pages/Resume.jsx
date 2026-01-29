import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  Download,
  Eye,
  FileText,
  Award,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Github,
  User,
  Code2
} from "lucide-react"

function Resume() {
  const [viewMode, setViewMode] = useState("preview")

  const resumeData = {
    personalInfo: {
      name: "Himesh Rajput",
      title: "Full Stack Developer",
      email: "himesh.rajput@example.com",
      phone: "+91 98765 43210",
      location: "India",
      github: "github.com/himeshrajput"
    },
    summary:
      "Passionate Full Stack Developer focused on React, Node.js and MongoDB. I enjoy building scalable apps and clean user interfaces.",
    skills: {
      frontend: ["React", "JavaScript", "Tailwind"],
      backend: ["Node", "Express"],
      database: ["MongoDB"],
      tools: ["Git", "VS Code"]
    },
    experience: [
      {
        title: "Full Stack Developer",
        company: "Personal Projects",
        period: "2024 - Present",
        description: "Building portfolio and MERN projects.",
        achievements: ["Auth system", "CRUD apps"]
      }
    ],
    education: [
      {
        degree: "BCA",
        institution: "Manipal University",
        period: "Currently Studying",
        description: "Bachelor of Computer Applications"
      }
    ],
    certifications: ["React Basics", "Node Fundamentals"]
  }

  return (
    <motion.div className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <h2 className="text-4xl font-bold text-center mb-10">
          My <span className="gradient-text">Resume</span>
        </h2>

        {/* TOGGLE */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-slate-800 rounded-xl p-1">
            <button
              onClick={() => setViewMode("preview")}
              className={`px-6 py-2 rounded-lg ${
                viewMode === "preview" && "bg-blue-600"
              }`}
            >
              Preview
            </button>

            <button
              onClick={() => setViewMode("download")}
              className={`px-6 py-2 rounded-lg ${
                viewMode === "download" && "bg-blue-600"
              }`}
            >
              Download
            </button>
          </div>
        </div>

        {viewMode === "preview" ? (
          <div className="bg-white rounded-2xl p-8 text-black">

            <h1 className="text-2xl font-bold">
              {resumeData.personalInfo.name}
            </h1>
            <p>{resumeData.personalInfo.title}</p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <div className="flex gap-2"><Mail size={16}/> {resumeData.personalInfo.email}</div>
              <div className="flex gap-2"><Phone size={16}/> {resumeData.personalInfo.phone}</div>
              <div className="flex gap-2"><MapPin size={16}/> {resumeData.personalInfo.location}</div>
            </div>

            {/* SUMMARY */}
            <h3 className="font-bold flex gap-2 mt-6"><User size={18}/> Summary</h3>
            <p>{resumeData.summary}</p>

            {/* SKILLS */}
            <h3 className="font-bold flex gap-2 mt-6"><Code2 size={18}/> Skills</h3>

            {Object.entries(resumeData.skills).map(([k,v])=>(
              <p key={k}><b>{k}:</b> {v.join(", ")}</p>
            ))}

            {/* EXPERIENCE */}
            <h3 className="font-bold flex gap-2 mt-6"><Briefcase size={18}/> Experience</h3>

            {resumeData.experience.map((e,i)=>(
              <div key={i}>
                <b>{e.title}</b> – {e.company}
                <p>{e.description}</p>
              </div>
            ))}

            {/* EDUCATION */}
            <h3 className="font-bold flex gap-2 mt-6"><GraduationCap size={18}/> Education</h3>

            {resumeData.education.map((e,i)=>(
              <p key={i}>{e.degree} – {e.institution}</p>
            ))}

            {/* CERT */}
            <h3 className="font-bold flex gap-2 mt-6"><Award size={18}/> Certifications</h3>

            {resumeData.certifications.map((c,i)=>(
              <span key={i} className="mr-2">{c}</span>
            ))}

          </div>
        ) : (
          <div className="text-center">
            <button className="btn-primary flex gap-2 mx-auto">
              <Download/> Download PDF
            </button>
          </div>
        )}

      </div>
    </motion.div>
  )
}

export default Resume
