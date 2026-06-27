import React, { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import {
  ArrowRight, ArrowUp, Award, Briefcase, Calendar, Check, ChevronLeft, ChevronRight,
  Code2, Database, Download, ExternalLink, FileText, Github, Globe2, GraduationCap,
  Layers3, Linkedin, Mail, MapPin, Menu, Moon, Phone, Search, Send, Server,
  Sparkles, Star, Sun, UserRound, Workflow, X, Zap
} from 'lucide-react'
import heroProfile from '../assets/hero-profile.jpg'

const contact = {
  name: 'Himesh Rajput',
  email: 'himeshkumar988744@gmail.com',
  phone: '+91 9887442586',
  whatsapp: 'https://wa.me/919887442586',
  github: 'https://github.com/himesh9887',
  linkedin: 'https://www.linkedin.com/in/himesh-kumar-525640330?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  resume: '/resume.pdf',
}

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Services', 'Experience', 'Contact']
const roles = ['MERN Stack Developer', 'React Developer', 'Frontend Engineer', 'Full Stack Developer']
const stats = [['15+', 'Projects'], ['25+', 'Technologies'], ['8+', 'Clients'], ['1.5+', 'Years']]

const techOrbit = ['React', 'Node', 'MongoDB', 'JS', 'Tailwind', 'Motion']

const aboutCards = [
  ['Who I Am', UserRound, 'A full stack developer who blends product thinking, clean UI, and practical engineering.'],
  ['What I Build', Layers3, 'Premium websites, booking systems, dashboards, portfolio brands, and MERN applications.'],
  ['How I Work', Workflow, 'I focus on clarity, responsive execution, fast delivery, and details that make products feel trusted.'],
  ['Why Clients Choose Me', Star, 'Strong visual taste, reliable communication, and websites that look ready for real customers.'],
]

const skills = [
  ['Frontend', Code2, [['React', '1.5 yrs', '12 projects'], ['JavaScript', '2 yrs', '18 projects'], ['Tailwind CSS', '1.5 yrs', '15 projects'], ['Framer Motion', '1 yr', '8 projects']]],
  ['Backend', Server, [['Node.js', '1 yr', '8 projects'], ['Express.js', '1 yr', '8 projects'], ['REST APIs', '1 yr', '10 projects'], ['Auth', '1 yr', '6 projects']]],
  ['Database', Database, [['MongoDB', '1 yr', '8 projects'], ['Mongoose', '1 yr', '7 projects'], ['MySQL', 'Basics', '3 projects'], ['Data Modeling', 'Basics', '5 projects']]],
  ['Tools & Cloud', Workflow, [['GitHub', '2 yrs', '20 projects'], ['Vercel', '1.5 yrs', '12 deploys'], ['Postman', '1 yr', '10 APIs'], ['Figma', 'Basics', '6 UIs']]],
]

const projects = [
  {
    title: 'Relax Luxury Salon',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=85&w=1400',
    problem: 'Salon brands need immediate trust, elegant service discovery, and a clear path to inquiry.',
    solution: 'A polished luxury salon website with premium visuals, service hierarchy, and booking-ready CTAs.',
    stack: ['React', 'Vite', 'Tailwind', 'Responsive UI'],
    features: ['Premium service sections', 'Mobile-first layout', 'Fast Vercel deployment'],
    duration: '7 days',
    liveUrl: 'https://relax-luxury-salon-three.vercel.app/',
  },
  {
    title: 'BrewCafe Ordering Platform',
    category: 'Fullstack',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=85&w=1400',
    problem: 'Cafe customers need to browse menu items quickly and reach booking/order actions without friction.',
    solution: 'A conversion-focused cafe experience with menu browsing, booking flow, and admin-ready architecture.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    features: ['Menu browsing', 'Booking workflow', 'Lead-focused pages'],
    duration: '12 days',
    liveUrl: 'https://brewcafe-website-ytzm.vercel.app/',
  },
  {
    title: 'Zestora Frontend Website',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=85&w=1400',
    problem: 'Modern digital brands need a site that feels crisp, credible, and easy to scan.',
    solution: 'A clean responsive frontend with strong section hierarchy, brand presentation, and deployment polish.',
    stack: ['React', 'Tailwind', 'Vite', 'UI Design'],
    features: ['Modern landing flow', 'Responsive sections', 'Clean visual hierarchy'],
    duration: '6 days',
    liveUrl: 'https://zestora-frontend-website.vercel.app/',
  },
]

const services = [
  ['Premium Websites', Globe2, 'Business websites with sharp hierarchy, responsive layouts, and elegant visual systems.'],
  ['Frontend Engineering', Code2, 'React interfaces with polished interactions, component discipline, and fast performance.'],
  ['MERN Applications', Server, 'APIs, authentication, dashboards, databases, and deployable full stack flows.'],
  ['UI Repair & Redesign', Sparkles, 'Improve weak pages, fix layout issues, upgrade visual quality, and polish responsiveness.'],
]

const timeline = [
  ['2026', 'Freelance Developer', Briefcase, 'Building client-ready web apps, booking systems, and premium portfolio experiences.'],
  ['2025', 'MERN Stack Projects', Code2, 'Shipped production-style React, Node, MongoDB, authentication, and API workflows.'],
  ['2024', 'BCA Journey', GraduationCap, 'Strengthened computer fundamentals and practical software development habits.'],
  ['2023', 'Frontend Foundation', Layers3, 'Started with HTML, CSS, JavaScript, React, and modern UI systems.'],
]

const certificates = [
  ['React Developer', 'Advanced UI patterns, reusable components, hooks, and state-driven interfaces.'],
  ['MERN Stack', 'Full stack app architecture with Node, Express, MongoDB, and React.'],
  ['Responsive Web Design', 'Accessible, mobile-first layouts with strong visual hierarchy.'],
]

const testimonials = [
  ['Aarav Sharma', 'Founder, Local Brand', 'Himesh turned a rough idea into a clean, premium website that felt ready for real customers.'],
  ['Priya Mehta', 'Product Lead', 'The UI quality, speed, and communication were excellent. The site looked far more expensive than the budget.'],
  ['Rohan Verma', 'Startup Client', 'Fast delivery, sharp design taste, and reliable frontend execution from the first preview.'],
]

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.62, ease: 'easeOut' } },
}

function WhatsAppIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.03 3.2A12.73 12.73 0 0 0 5.13 22.5L3.55 28.8l6.42-1.5A12.74 12.74 0 1 0 16.03 3.2Zm0 2.43a10.3 10.3 0 0 1 8.74 15.76 10.28 10.28 0 0 1-13.9 3.55l-.44-.25-3.66.87.91-3.56-.27-.45A10.31 10.31 0 0 1 16.03 5.63Zm-4.05 5.37c-.25 0-.65.1-.98.47-.34.38-1.29 1.26-1.29 3.08s1.33 3.59 1.51 3.84c.19.25 2.56 4.07 6.33 5.55 3.14 1.23 3.78.98 4.47.92.68-.06 2.21-.9 2.52-1.77.32-.88.32-1.62.22-1.78-.09-.15-.34-.25-.71-.43-.37-.19-2.2-1.09-2.55-1.22-.34-.12-.59-.18-.84.19-.25.37-.97 1.21-1.19 1.46-.22.25-.44.28-.81.1-.38-.19-1.57-.58-3-1.86-1.11-.99-1.86-2.22-2.08-2.59-.22-.38-.02-.58.16-.77.17-.16.38-.43.56-.65.19-.22.25-.37.38-.62.12-.25.06-.47-.03-.65-.1-.19-.84-2.03-1.15-2.77-.3-.72-.6-.62-.83-.63l-.67-.02Z" />
    </svg>
  )
}

function SectionHeader({ eyebrow, title, copy }) {
  return (
    <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.26em] text-[#14B8A6]">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--muted)]">{copy}</p>
    </motion.div>
  )
}

function Button({ href, children, variant = 'primary', icon: Icon }) {
  const classes = variant === 'primary'
    ? 'bg-[var(--button-bg)] text-[var(--button-text)] shadow-[0_18px_45px_rgba(59,130,246,0.18)] hover:opacity-90'
    : 'border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)]'

  return (
    <motion.a href={href} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition ${classes}`}>
      {children}
      {Icon && <Icon className="h-4 w-4" />}
    </motion.a>
  )
}

export default function PremiumPortfolio({ darkMode, setDarkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [testimonial, setTestimonial] = useState(0)
  const [projectFilter, setProjectFilter] = useState('All')
  const [query, setQuery] = useState('')
  const [activeSection, setActiveSection] = useState('Home')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const timer = setInterval(() => setRoleIndex((current) => (current + 1) % roles.length), 2200)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setTestimonial((current) => (current + 1) % testimonials.length), 4400)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const current = navItems.findLast((item) => {
        const section = document.getElementById(item.toLowerCase())
        return section ? window.scrollY >= section.offsetTop - 180 : false
      })
      if (current) setActiveSection(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const filteredProjects = useMemo(() => projects.filter((project) => {
    const matchesFilter = projectFilter === 'All' || project.category === projectFilter
    const matchesSearch = `${project.title} ${project.solution} ${project.stack.join(' ')}`.toLowerCase().includes(query.toLowerCase())
    return matchesFilter && matchesSearch
  }), [projectFilter, query])

  const scrollTo = (label) => {
    document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }

  const contactHref = `mailto:${contact.email}?subject=Project%20Inquiry&body=Hi%20Himesh,%0A%0AI%20want%20to%20discuss%20a%20project.`
  const themeVars = darkMode
    ? {
        '--bg': '#070B17',
        '--section': '#0F172A',
        '--card': '#131C31',
        '--card-hover': '#1C2743',
        '--text': '#F8FAFC',
        '--soft': '#CBD5E1',
        '--muted': '#94A3B8',
        '--border': 'rgba(255,255,255,.08)',
        '--border-strong': 'rgba(255,255,255,.12)',
        '--surface': 'rgba(255,255,255,.04)',
        '--surface-strong': 'rgba(255,255,255,.08)',
        '--nav-bg': 'rgba(7,11,23,.78)',
        '--overlay': 'rgba(7,11,23,.92)',
        '--overlay-card': 'rgba(7,11,23,.82)',
        '--grid-line': 'rgba(255,255,255,.08)',
        '--button-bg': '#F8FAFC',
        '--button-text': '#070B17',
      }
    : {
        '--bg': '#F8FAFC',
        '--section': '#EEF4FB',
        '--card': '#FFFFFF',
        '--card-hover': '#F1F5F9',
        '--text': '#0F172A',
        '--soft': '#334155',
        '--muted': '#64748B',
        '--border': 'rgba(15,23,42,.10)',
        '--border-strong': 'rgba(15,23,42,.14)',
        '--surface': 'rgba(15,23,42,.035)',
        '--surface-strong': 'rgba(15,23,42,.065)',
        '--nav-bg': 'rgba(255,255,255,.84)',
        '--overlay': 'rgba(248,250,252,.94)',
        '--overlay-card': 'rgba(255,255,255,.90)',
        '--grid-line': 'rgba(15,23,42,.08)',
        '--button-bg': '#0F172A',
        '--button-text': '#F8FAFC',
      }

  return (
    <div style={themeVars} className="min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
      <motion.div className="fixed left-0 right-0 top-0 z-[80] h-1 origin-left bg-gradient-to-r from-[#3B82F6] via-[#14B8A6] to-[#8B5CF6]" style={{ scaleX: progress }} />

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 premium-noise opacity-[0.05]" />
        <div className="premium-grid absolute inset-0 opacity-[0.08]" />
        <motion.div animate={{ x: [0, 80, 0], y: [0, 40, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-[-10rem] top-24 hidden h-80 w-80 rounded-full bg-[#3B82F6]/20 blur-3xl md:block" />
        <motion.div animate={{ x: [0, -60, 0], y: [0, 60, 0] }} transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-[-8rem] top-[28rem] hidden h-96 w-96 rounded-full bg-[#14B8A6]/14 blur-3xl md:block" />
      </div>

      <nav className="fixed inset-x-0 top-4 z-[70] px-4">
        <div className="mx-auto flex w-[min(1180px,100%)] items-center justify-between rounded-full border border-[var(--border)] bg-[var(--nav-bg)] px-3 py-2 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <button onClick={() => scrollTo('Home')} className="flex items-center gap-3 rounded-full pr-3 text-left transition hover:bg-[var(--surface-strong)]" aria-label="Go to home">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--button-bg)] text-sm font-black text-[var(--button-text)]">HR</span>
            <span className="hidden sm:block">
              <span className="block text-sm font-extrabold">{contact.name}</span>
              <span className="block text-xs text-[var(--muted)]">Full Stack Developer</span>
            </span>
          </button>

          <div className="hidden items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)] p-1 lg:flex">
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className={`relative rounded-full px-3 py-2 text-sm font-bold transition ${activeSection === item ? 'bg-[var(--button-bg)] text-[var(--button-text)]' : 'text-[var(--muted)] hover:text-[var(--text)]'}`}>
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href={contact.resume} className="hidden min-h-10 items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-4 text-sm font-bold text-white shadow-lg shadow-[#3B82F6]/20 transition hover:bg-[#2563EB] sm:inline-flex">Resume <Download className="h-4 w-4" /></a>
            <button onClick={() => setDarkMode(!darkMode)} className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition hover:bg-[var(--surface-strong)]" aria-label="Toggle theme">{darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button>
            <button onClick={() => setMobileOpen(true)} className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] lg:hidden" aria-label="Open menu"><Menu className="h-5 w-5" /></button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] bg-[var(--overlay)] p-4 backdrop-blur-xl lg:hidden">
            <motion.div initial={{ y: -16 }} animate={{ y: 0 }} exit={{ y: -16 }} className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-2xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-bold">Navigation</span>
                <button onClick={() => setMobileOpen(false)} className="grid h-10 w-10 place-items-center rounded-full bg-[var(--surface-strong)]" aria-label="Close menu"><X className="h-5 w-5" /></button>
              </div>
              <div className="grid gap-2">{navItems.map((item) => <button key={item} onClick={() => scrollTo(item)} className="rounded-2xl px-4 py-3 text-left text-sm font-bold text-[var(--soft)] hover:bg-[var(--surface-strong)]">{item}</button>)}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        <section id="home" className="relative px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:min-h-screen lg:px-8 lg:pb-24 lg:pt-36">
          <div className="mx-auto grid w-[min(1180px,100%)] items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="text-center lg:text-left">
              <motion.div variants={fade} className="mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-bold text-[var(--soft)] sm:text-sm">
                <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-75" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22C55E]" /></span>
                Available for freelance work and developer roles
              </motion.div>
              <motion.h1 variants={fade} className="mx-auto max-w-4xl text-4xl font-black tracking-[-0.035em] text-[var(--text)] sm:text-5xl lg:mx-0 lg:text-7xl">Hello, I&apos;m <span className="premium-text">Himesh Rajput</span></motion.h1>
              <motion.div variants={fade} className="mt-5 flex min-h-12 items-center justify-center text-xl font-extrabold text-[var(--soft)] sm:text-3xl lg:justify-start">
                <AnimatePresence mode="wait"><motion.span key={roles[roleIndex]} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.32 }}>{roles[roleIndex]}</motion.span></AnimatePresence>
                <span className="ml-3 h-8 w-[2px] animate-pulse bg-[#14B8A6]" />
              </motion.div>
              <motion.p variants={fade} className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8 lg:mx-0">I design and build premium web products with React, MERN architecture, clean visual systems, and conversion-focused user experiences for clients and teams.</motion.p>
              <motion.div variants={fade} className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"><Button href="#contact" icon={ArrowRight}>Hire Me</Button><Button href={contact.resume} variant="ghost" icon={Download}>Download Resume</Button><Button href="#projects" variant="ghost" icon={ExternalLink}>View Projects</Button></motion.div>
              <motion.div variants={fade} className="mt-7 flex items-center justify-center gap-3 lg:justify-start">{[[Github, 'GitHub', contact.github], [Linkedin, 'LinkedIn', contact.linkedin], [Mail, 'Email', `mailto:${contact.email}`], [WhatsAppIcon, 'WhatsApp', contact.whatsapp]].map(([Icon, label, href]) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--soft)] transition hover:-translate-y-1 hover:bg-[var(--surface-strong)] hover:text-[var(--text)]"><Icon className="h-5 w-5" /></a>)}</motion.div>
              <motion.div variants={fade} className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">{stats.map(([value, label]) => <div key={label} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4"><p className="text-2xl font-black">{value}</p><p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">{label}</p></div>)}</motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.12 }} className="relative mx-auto w-full max-w-[330px] sm:max-w-[420px] lg:max-w-[460px]">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute -inset-5 hidden rounded-[2.2rem] border border-dashed border-[#3B82F6]/35 sm:block" />
              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-[#3B82F6]/16 via-[#14B8A6]/8 to-[#8B5CF6]/14 blur-2xl sm:-inset-8 sm:blur-3xl" />
              <motion.div whileHover={{ y: -8, rotateX: 3, rotateY: -3 }} className="relative overflow-hidden rounded-[1.6rem] border border-[var(--border-strong)] bg-[var(--card)] p-3 shadow-xl shadow-black/20 sm:rounded-[2rem] sm:p-4 sm:shadow-2xl">
                <div className="overflow-hidden rounded-[1.5rem] bg-[var(--section)]">
                  <img src={heroProfile} alt="Himesh Rajput portrait" className="aspect-[4/5] w-full object-cover object-center" fetchPriority="high" />
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-[var(--border-strong)] bg-[var(--overlay-card)] p-3 backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-7 sm:rounded-3xl sm:p-4">
                  <p className="text-sm text-[var(--muted)]">Building premium digital products</p>
                  <div className="mt-2 flex items-center justify-between"><span className="text-base font-black sm:text-xl">MERN + Product UI</span><Sparkles className="h-5 w-5 text-[#14B8A6]" /></div>
                </div>
              </motion.div>
              {techOrbit.map((tech, index) => <motion.span key={tech} animate={{ y: [0, -10, 0] }} transition={{ duration: 3 + index * 0.2, repeat: Infinity, ease: 'easeInOut' }} className={`absolute hidden rounded-full border border-[var(--border-strong)] bg-[var(--card)] px-3 py-1 text-xs font-black text-[var(--soft)] shadow-xl sm:block ${['-left-5 top-14', 'right-1 top-8', '-right-7 top-44', 'left-0 bottom-28', 'right-8 bottom-10', 'left-20 -bottom-5'][index]}`}>{tech}</motion.span>)}
            </motion.div>
          </div>
        </section>

        <section id="about" className="section-shell bg-[var(--section)]">
          <SectionHeader eyebrow="About" title="Story, craft, and execution in one place." copy="Not just code. I build interfaces that explain clearly, earn trust, and move users toward action." />
          <div className="mx-auto grid w-[min(1180px,100%)] gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#14B8A6]">My Journey</p>
              <h3 className="mt-4 text-3xl font-black">From frontend foundations to complete client-ready products.</h3>
              <p className="mt-5 leading-8 text-[var(--muted)]">I started with the fundamentals, then moved into React, backend APIs, database flows, and UI systems. Today I focus on websites that feel polished, fast, and credible on every screen.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">{stats.map(([value, label]) => <div key={label} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4"><p className="text-2xl font-black">{value}</p><p className="text-sm text-[var(--muted)]">{label}</p></div>)}</div>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2">{aboutCards.map(([title, Icon, copy]) => <motion.article key={title} variants={fade} initial="hidden" whileInView="show" whileHover={{ y: -6 }} viewport={{ once: true }} className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:bg-[var(--card-hover)]"><div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#3B82F6]/14 text-[#60A5FA]"><Icon className="h-6 w-6" /></div><h3 className="text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{copy}</p></motion.article>)}</div>
          </div>
        </section>

        <section id="skills" className="section-shell">
          <SectionHeader eyebrow="Skills" title="Premium stack, shown like a product capability map." copy="Progress bars are gone. These cards show what each technology is used for in real project work." />
          <div className="mx-auto grid w-[min(1180px,100%)] gap-5 lg:grid-cols-2">{skills.map(([title, Icon, items]) => <motion.article key={title} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6"><div className="mb-6 flex items-center gap-4"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#14B8A6]/14 text-[#5EEAD4]"><Icon className="h-6 w-6" /></div><h3 className="text-2xl font-black">{title}</h3></div><div className="grid gap-3 sm:grid-cols-2">{items.map(([name, years, built]) => <motion.div key={name} whileHover={{ y: -4, scale: 1.01 }} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 transition hover:bg-[var(--card-hover)]"><p className="font-black">{name}</p><div className="mt-3 flex items-center justify-between text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]"><span>{years}</span><span>{built}</span></div></motion.div>)}</div></motion.article>)}</div>
        </section>

        <section id="projects" className="section-shell bg-[var(--section)]">
          <SectionHeader eyebrow="Projects" title="Case studies, not generic cards." copy="Each project is positioned like a product build: problem, solution, stack, and measurable delivery confidence." />
          <div className="mx-auto mb-8 flex w-[min(1180px,100%)] flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">{['All', 'Frontend', 'Fullstack'].map((filter) => <button key={filter} onClick={() => setProjectFilter(filter)} className={`rounded-full px-4 py-2 text-sm font-black transition ${projectFilter === filter ? 'bg-[var(--button-bg)] text-[var(--button-text)]' : 'border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--text)]'}`}>{filter}</button>)}</div>
            <label className="flex min-h-12 items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 md:w-80"><Search className="h-4 w-4 text-[var(--muted)]" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects" className="w-full bg-transparent text-sm outline-none placeholder:text-[#64748B]" /></label>
          </div>
          <div className="mx-auto grid w-[min(1180px,100%)] gap-8">{filteredProjects.map((project, index) => <motion.article key={project.title} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] shadow-2xl shadow-black/20 lg:grid lg:grid-cols-[1.05fr_0.95fr]"><div className={`relative min-h-80 overflow-hidden bg-[var(--bg)] p-5 ${index % 2 ? 'lg:order-2' : ''}`}><div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--section)] p-3 shadow-2xl"><img src={project.image} alt={project.title} loading="lazy" className="aspect-[16/10] w-full rounded-[1rem] object-cover transition duration-700 hover:scale-[1.03]" /></div><div className="absolute bottom-8 right-8 hidden w-28 rounded-[1.3rem] border border-[var(--border-strong)] bg-[var(--bg)] p-2 shadow-xl sm:block"><img src={project.image} alt="" loading="lazy" className="aspect-[9/16] rounded-[1rem] object-cover" /></div></div><div className="p-6 lg:p-8"><div className="mb-5 flex flex-wrap items-center gap-3"><span className="rounded-full bg-[#3B82F6]/14 px-3 py-1 text-xs font-black text-[#93C5FD]">{project.category}</span><span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]"><Calendar className="h-4 w-4" /> {project.duration}</span></div><h3 className="text-3xl font-black">{project.title}</h3><div className="mt-6 grid gap-4"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-[#14B8A6]">Problem</p><p className="mt-2 leading-7 text-[var(--muted)]">{project.problem}</p></div><div><p className="text-xs font-black uppercase tracking-[0.2em] text-[#14B8A6]">Solution</p><p className="mt-2 leading-7 text-[var(--soft)]">{project.solution}</p></div></div><div className="mt-6 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-bold text-[var(--soft)]">{item}</span>)}</div><div className="mt-6 grid gap-2">{project.features.map((feature) => <span key={feature} className="flex items-center gap-2 text-sm text-[var(--soft)]"><Check className="h-4 w-4 text-[#22C55E]" />{feature}</span>)}</div><div className="mt-7 flex flex-wrap gap-3"><Button href={project.liveUrl} icon={ExternalLink}>Live Demo</Button><Button href="#contact" variant="ghost" icon={ArrowRight}>Case Study</Button></div></div></motion.article>)}</div>
        </section>

        <section id="services" className="section-shell">
          <SectionHeader eyebrow="Services" title="Services designed around premium delivery." copy="Focused offers for businesses, founders, and recruiters who care about detail and execution." />
          <div className="mx-auto grid w-[min(1180px,100%)] gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map(([title, Icon, copy]) => <motion.article key={title} variants={fade} initial="hidden" whileInView="show" whileHover={{ y: -8 }} viewport={{ once: true }} className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5 transition hover:bg-[var(--card-hover)]"><div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#8B5CF6]/14 text-[#C4B5FD]"><Icon className="h-6 w-6" /></div><h3 className="text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{copy}</p><a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#14B8A6]">Start a project <ArrowRight className="h-4 w-4" /></a></motion.article>)}</div>
        </section>

        <section id="experience" className="section-shell bg-[var(--section)]">
          <SectionHeader eyebrow="Experience" title="A timeline of learning, building, and shipping." copy="The path is simple: learn the fundamentals, build real projects, improve quality, and ship better work each time." />
          <div className="mx-auto max-w-4xl">{timeline.map(([year, title, Icon, copy], index) => <motion.article key={title} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative border-l border-[var(--border-strong)] pb-8 pl-8 last:pb-0"><span className="absolute -left-5 top-0 grid h-10 w-10 place-items-center rounded-full border border-[var(--border-strong)] bg-[var(--card)] text-[#14B8A6]"><Icon className="h-5 w-5" /></span><div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5"><p className="text-sm font-black text-[#14B8A6]">{year}</p><h3 className="mt-1 text-xl font-black">{title}</h3><p className="mt-2 leading-7 text-[var(--muted)]">{copy}</p></div></motion.article>)}</div>
        </section>

        <section id="certificates" className="section-shell">
          <SectionHeader eyebrow="Certificates" title="Proof points with a premium gallery feel." copy="Compact previews with clear certificate context and download-ready actions." />
          <div className="mx-auto grid w-[min(1180px,100%)] gap-5 md:grid-cols-3">{certificates.map(([title, copy]) => <motion.article key={title} variants={fade} initial="hidden" whileInView="show" whileHover={{ y: -6 }} viewport={{ once: true }} className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5"><div className="mb-5 grid aspect-[4/3] place-items-center rounded-[1.5rem] border border-dashed border-[var(--border-strong)] bg-[var(--surface)]"><Award className="h-14 w-14 text-[#3B82F6]" /></div><h3 className="text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{copy}</p><a href="#" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--button-bg)] px-4 py-2 text-sm font-black text-[var(--button-text)]">Download <Download className="h-4 w-4" /></a></motion.article>)}</div>
        </section>

        <section id="testimonials" className="section-shell bg-[var(--section)]">
          <SectionHeader eyebrow="Testimonials" title="Client-friendly work with clear communication." copy="Polished delivery, fast iteration, and interfaces that feel more expensive than the budget." />
          <div className="mx-auto max-w-3xl"><AnimatePresence mode="wait"><motion.div key={testimonial} initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -26 }} className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-8 text-center"><div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-[#3B82F6] to-[#14B8A6] text-xl font-black">{testimonials[testimonial][0].split(' ').map((part) => part[0]).join('')}</div><div className="mb-5 flex justify-center gap-1 text-amber-300">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-5 w-5 fill-current" />)}</div><p className="text-xl leading-8 text-[var(--soft)]">&quot;{testimonials[testimonial][2]}&quot;</p><p className="mt-6 font-black">{testimonials[testimonial][0]}</p><p className="text-sm text-[var(--muted)]">{testimonials[testimonial][1]}</p></motion.div></AnimatePresence><div className="mt-5 flex justify-center gap-3"><button onClick={() => setTestimonial((testimonial + testimonials.length - 1) % testimonials.length)} className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)]" aria-label="Previous testimonial"><ChevronLeft className="h-5 w-5" /></button><button onClick={() => setTestimonial((testimonial + 1) % testimonials.length)} className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)]" aria-label="Next testimonial"><ChevronRight className="h-5 w-5" /></button></div></div>
        </section>

        <section id="contact" className="section-shell px-3 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <SectionHeader eyebrow="Contact" title="Let&apos;s build something recruiters and clients remember." copy="Use email or WhatsApp for project details, job opportunities, collaborations, or fast freelance work." />
          <div className="mx-auto grid w-[min(1180px,100%)] gap-4 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-4 sm:rounded-[2rem] sm:p-6">
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#22C55E]/20 bg-[#22C55E]/10 px-3 py-2 text-xs font-black text-[#16A34A] dark:text-[#86EFAC] sm:px-4 sm:text-sm"><span className="h-2 w-2 rounded-full bg-[#22C55E]" />Available now</div>
              <h3 className="text-2xl font-black sm:text-3xl">Have a project or role?</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:mt-4 sm:text-base sm:leading-7">Send the details and I will respond with a clear next step. WhatsApp is best for fast conversations.</p>
              <div className="mt-5 grid gap-2.5 sm:mt-7 sm:gap-3">{[[Mail, 'Email', contact.email, `mailto:${contact.email}`], [Phone, 'Phone', contact.phone, `tel:${contact.phone.replace(/\s/g, '')}`], [WhatsAppIcon, 'WhatsApp', 'Open direct chat', contact.whatsapp], [MapPin, 'Location', 'India', null]].map(([Icon, label, value, href]) => {
                const content = <><div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[var(--surface-strong)] text-[#14B8A6] sm:h-12 sm:w-12"><Icon className="h-5 w-5" /></div><div className="min-w-0"><p className="text-xs text-[var(--muted)] sm:text-sm">{label}</p><p className="break-words text-sm font-black leading-5 sm:text-base">{value}</p></div></>
                return href ? <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex min-w-0 items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 transition hover:bg-[var(--card-hover)] sm:gap-4 sm:rounded-3xl sm:p-4">{content}</a> : <div key={label} className="flex min-w-0 items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 sm:gap-4 sm:rounded-3xl sm:p-4">{content}</div>
              })}</div>
            </div>
            <form className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-4 shadow-xl shadow-black/10 sm:rounded-[2rem] sm:p-6 sm:shadow-2xl sm:shadow-black/20">
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4"><input className="premium-input" placeholder="Your name" aria-label="Your name" /><input className="premium-input" type="email" placeholder="Email address" aria-label="Email address" /></div>
              <input className="premium-input mt-3 sm:mt-4" placeholder="Project or role subject" aria-label="Subject" />
              <textarea className="premium-input mt-3 min-h-32 resize-y sm:mt-4 sm:min-h-40" placeholder="Tell me about your idea, timeline, budget, or role." aria-label="Message" />
              <div className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2"><motion.a href={contactHref} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--button-bg)] px-5 text-sm font-black text-[var(--button-text)]">Send Email <Send className="h-4 w-4" /></motion.a><motion.a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-black text-white">WhatsApp <WhatsAppIcon className="h-4 w-4" /></motion.a></div>
            </form>
          </div>
        </section>
      </main>

      <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp chat" className="fixed bottom-4 right-4 z-[65] grid h-[52px] w-[52px] place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 ring-4 ring-[var(--bg)] transition hover:-translate-y-1 hover:bg-[#1ebe5d] sm:bottom-5 sm:right-5 sm:h-16 sm:w-16">
        <WhatsAppIcon className="h-7 w-7 sm:h-9 sm:w-9" />
      </a>

      <footer className="relative z-10 border-t border-[var(--border)] bg-[var(--bg)] px-4 py-12">
        <div className="mx-auto grid w-[min(1180px,100%)] gap-8 md:grid-cols-[1.1fr_0.8fr_0.9fr]">
          <div><button onClick={() => scrollTo('Home')} className="flex items-center gap-3 text-left"><span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--button-bg)] text-sm font-black text-[var(--button-text)]">HR</span><span><span className="block text-xl font-black">{contact.name}</span><span className="block text-sm text-[var(--muted)]">Full Stack Developer</span></span></button><p className="mt-5 max-w-md text-sm leading-6 text-[var(--muted)]">Premium websites, MERN applications, dashboards, and client-ready interfaces with clean delivery.</p><div className="mt-5 flex flex-wrap gap-3"><a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)]"><Github className="h-4 w-4" /></a><a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)]"><Linkedin className="h-4 w-4" /></a><a href={`mailto:${contact.email}`} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)]"><Mail className="h-4 w-4" /></a><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white"><WhatsAppIcon className="h-5 w-5" /></a><a href={contact.resume} aria-label="Resume" className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)]"><Download className="h-4 w-4" /></a></div></div>
          <div><h3 className="text-sm font-black uppercase tracking-[0.2em] text-[var(--muted)]">Quick Links</h3><div className="mt-5 grid grid-cols-2 gap-3">{navItems.map((nav) => <button key={nav} onClick={() => scrollTo(nav)} className="text-left text-sm font-bold text-[var(--soft)] transition hover:text-[var(--text)]">{nav}</button>)}</div></div>
          <div><h3 className="text-sm font-black uppercase tracking-[0.2em] text-[var(--muted)]">Contact</h3><div className="mt-5 grid gap-3 text-sm"><a href={`mailto:${contact.email}`} className="break-words text-[var(--soft)] transition hover:text-[var(--text)]">{contact.email}</a><a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-[var(--soft)] transition hover:text-[var(--text)]">{contact.phone}</a><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 font-black text-white">WhatsApp <WhatsAppIcon className="h-4 w-4" /></a></div></div>
        </div>
        <div className="mx-auto mt-10 grid w-[min(1180px,100%)] gap-3 border-t border-[var(--border)] pt-6 text-center text-sm text-[var(--muted)] sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <span className="hidden sm:block" />
          <p className="sm:col-start-2">Copyright 2026 Himesh Rajput. All rights reserved.</p>
          <button onClick={() => scrollTo('Home')} className="inline-flex items-center justify-center gap-2 font-black text-[var(--soft)] transition hover:text-[var(--text)] sm:justify-self-end">Back to top <ArrowUp className="h-4 w-4" /></button>
        </div>
      </footer>
    </div>
  )
}


