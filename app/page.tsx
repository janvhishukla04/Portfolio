'use client'

import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaPhone, FaGraduationCap, FaBriefcase, FaAward, FaCode, FaPython, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaJava } from 'react-icons/fa'
import { SiJavascript, SiMysql, SiCplusplus, SiKotlin, SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiHtml5, SiCss3, SiPostgresql, SiFastapi, SiSqlalchemy } from 'react-icons/si'
import { useEffect, useState } from 'react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [typewriterText, setTypewriterText] = useState('')
  const fullText = "Janvhi Shukla"
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Typewriter effect
  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 150)
    return () => clearInterval(typingInterval)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">
              <span className="text-white">{'<'}</span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">JS</span>
              <span className="text-white">{' />'}</span>
            </h1>
            <div className="hidden md:flex gap-8 text-sm">
              <a href="#projects" className="text-gray-400 hover:text-white transition">Projects</a>
              <a href="#skills" className="text-gray-400 hover:text-white transition">Skills</a>
              <a href="#experience" className="text-gray-400 hover:text-white transition">Experience</a>
              <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Photo Left, Content Right */}
      <section className="pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-center">
            
            {/* Left: Photo */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
              <img 
                src="/janvhi.jpg" 
                alt="Janvhi Shukla" 
                className="relative w-full aspect-square rounded-2xl object-cover border-4 border-gray-800 shadow-2xl"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-gray-400 text-sm uppercase tracking-widest">Hello, I'm</p>
                <h1 className="text-5xl md:text-6xl font-bold">
                  {typewriterText}
                  <span className="animate-pulse text-purple-500">|</span>
                </h1>
                <div className="flex items-center gap-3 text-xl text-gray-400">
                  <span className="text-purple-400">Software Developer</span>
                  <span>•</span>
                  <span className="text-pink-400">Full-Stack Enthusiast</span>
                </div>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                Final-year Electrical Engineering student who loves building web applications that solve real problems. 
                From Python desktop apps to full-stack web development—I'm all about turning ideas into working products.
              </p>

          {/* CTA Buttons */}
<div className="flex flex-wrap gap-4 pt-2">
  <a 
    href="#contact"
    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
  >
    Get In Touch
  </a>
  <a 
    href="#projects"
    className="px-8 py-3 border-2 border-gray-700 rounded-lg font-semibold hover:bg-gray-800 transition-all"
  >
    View Work ↓
  </a>
  <a 
    href="/Janvhi_Shukla_Resume.pdf"
    download="Janvhi_Shukla_Resume.pdf"
    className="px-8 py-3 border-2 border-gray-700 rounded-lg font-semibold hover:bg-gray-800 transition-all flex items-center gap-2"
  >
    📄 Download Resume
  </a>
</div> 
              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/janvhishukla04" target="_blank" className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-lg hover:border-purple-500 hover:text-purple-400 transition">
                  <FaGithub size={18} />
                </a>
                <a href="https://linkedin.com/in/janvhishukla" target="_blank" className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-lg hover:border-purple-500 hover:text-purple-400 transition">
                  <FaLinkedin size={18} />
                </a>
                <a href="mailto:janvhishukla0410@gmail.com" className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-lg hover:border-purple-500 hover:text-purple-400 transition">
                  <FaEnvelope size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">3</div>
              <div className="text-gray-500 text-sm mt-2">Deployed Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">3</div>
              <div className="text-gray-500 text-sm mt-2">Internships</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">7+</div>
              <div className="text-gray-500 text-sm mt-2">Certifications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">Building solutions that solve real-world problems</p>
          
          <div className="space-y-8">
            
            {/* Expense Tracker - LIVE */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition group">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <FaDatabase className="text-purple-400" size={24} />
                    <div>
                      <h3 className="text-2xl font-bold">Expense Tracker</h3>
                      <span className="inline-block mt-1 px-3 py-1 bg-green-900/30 border border-green-700 text-green-400 rounded-full text-xs">
                        ✓ LIVE
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a href="https://github.com/janvhishukla04" target="_blank" className="text-gray-400 hover:text-purple-400 transition">
                      <FaGithub size={20} />
                    </a>
                    <a href="https://expense-tracker-six-sable-21.vercel.app/" target="_blank" className="text-gray-400 hover:text-purple-400 transition">
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>
                <div className="space-y-3 text-gray-400 mb-4">
                  <p>Full-stack personal finance tracker for managing expenses with category-based organization</p>
                  <ul className="space-y-1 ml-4 text-sm">
                    <li>• Built RESTful API with Python FastAPI and PostgreSQL for data persistence</li>
                    <li>• Designed clean React frontend with Tailwind CSS for adding, viewing, and deleting expenses</li>
                    <li>• Deployed frontend on Vercel and backend on Render with PostgreSQL database</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-900/30 border border-cyan-800 text-cyan-400 rounded text-sm flex items-center gap-1">
                    <FaReact size={14} /> React
                  </span>
                  <span className="px-3 py-1 bg-green-900/30 border border-green-800 text-green-400 rounded text-sm flex items-center gap-1">
                    <FaPython size={14} /> FastAPI
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 border border-blue-800 text-blue-400 rounded text-sm flex items-center gap-1">
                    <SiPostgresql size={14} /> PostgreSQL
                  </span>
                  <span className="px-3 py-1 bg-cyan-900/30 border border-cyan-800 text-cyan-400 rounded text-sm">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>

            {/* JobFlow - ONGOING */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-pink-500/50 transition group">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <FaBriefcase className="text-pink-400" size={24} />
                    <div>
                      <h3 className="text-2xl font-bold">JobFlow</h3>
                      <span className="inline-block mt-1 px-3 py-1 bg-yellow-900/30 border border-yellow-700 text-yellow-400 rounded-full text-xs">
                        🚧 IN PROGRESS
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a href="https://github.com/janvhishukla04" target="_blank" className="text-gray-400 hover:text-pink-400 transition">
                      <FaGithub size={20} />
                    </a>
                    <a href="https://jobflow-frontend-omega.vercel.app" target="_blank" className="text-gray-400 hover:text-pink-400 transition">
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>
                <div className="space-y-3 text-gray-400 mb-4">
                  <p>Job application tracking platform to help job seekers organize applications and manage their job search efficiently</p>
                  <ul className="space-y-1 ml-4 text-sm">
                    <li>• Currently developing: Track applications, update status (Applied, Interview, Offer, Rejected)</li>
                    <li>• Frontend deployed with responsive UI for managing company details and interview notes</li>
                    <li>• Planning backend integration with Node.js/Express and MongoDB for data persistence</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-900/30 border border-orange-800 text-orange-400 rounded text-sm">
                    HTML5
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 border border-blue-800 text-blue-400 rounded text-sm">
                    CSS3
                  </span>
                  <span className="px-3 py-1 bg-yellow-900/30 border border-yellow-800 text-yellow-400 rounded text-sm">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-400 rounded text-sm text-xs">
                    Planned: React, Node.js, MongoDB
                  </span>
                </div>
              </div>
            </div>

            {/* Portfolio Website */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition group">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <FaCode className="text-blue-400" size={24} />
                    <div>
                      <h3 className="text-2xl font-bold">Portfolio Website</h3>
                      <span className="inline-block mt-1 px-3 py-1 bg-purple-900/30 border border-purple-700 text-purple-400 rounded-full text-xs">
                        ✓ YOU'RE HERE!
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a href="https://github.com/janvhishukla04/portfolio" target="_blank" className="text-gray-400 hover:text-blue-400 transition">
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
                <div className="space-y-3 text-gray-400 mb-4">
                  <p>Modern, responsive portfolio website showcasing my projects, skills, and experience</p>
                  <ul className="space-y-1 ml-4 text-sm">
                    <li>• Built with Next.js and Tailwind CSS for optimal performance and design</li>
                    <li>• Implemented typewriter effect, smooth scrolling, and responsive layouts</li>
                    <li>• Deployed on Vercel with automated CI/CD from GitHub</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-900/30 border border-cyan-800 text-cyan-400 rounded text-sm">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 bg-yellow-900/30 border border-yellow-800 text-yellow-400 rounded text-sm">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>

            {/* Other Projects - Compact */}
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Eco-Mart */}
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-purple-500/30 transition">
                <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <FaBriefcase className="text-purple-400" size={18} />
                  Eco-Mart E-commerce Platform
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  Desktop e-commerce application with user authentication, product catalog, shopping cart, and admin dashboard
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 bg-purple-900/30 text-purple-400 rounded text-xs">Python</span>
                  <span className="px-2 py-1 bg-purple-900/30 text-purple-400 rounded text-xs">Tkinter</span>
                  <span className="px-2 py-1 bg-blue-900/30 text-blue-400 rounded text-xs">MySQL</span>
                </div>
                <a href="https://github.com/janvhishukla04" target="_blank" className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1">
                  <FaGithub size={14} /> View Code
                </a>
              </div>

              {/* Student Management */}
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-pink-500/30 transition">
                <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <FaDatabase className="text-pink-400" size={18} />
                  Student Management System
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  Desktop application with CRUD functionality for managing student records, grades, and attendance with MySQL database
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 bg-pink-900/30 text-pink-400 rounded text-xs">Python</span>
                  <span className="px-2 py-1 bg-pink-900/30 text-pink-400 rounded text-xs">Tkinter</span>
                  <span className="px-2 py-1 bg-blue-900/30 text-blue-400 rounded text-xs">MySQL</span>
                </div>
                <a href="https://github.com/janvhishukla04" target="_blank" className="text-pink-400 hover:text-pink-300 text-sm flex items-center gap-1">
                  <FaGithub size={14} /> View Code
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Tech <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">Technologies I work with</p>
          
          <div className="space-y-10">
            
            {/* Languages */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-400 uppercase tracking-wide text-sm">Languages & Core</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-purple-500 transition group">
                  <FaPython className="text-4xl mb-2 text-purple-400 group-hover:scale-110 transition" />
                  <span className="text-xs text-gray-400">Python</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-yellow-500 transition group">
                  <SiJavascript className="text-4xl mb-2 text-yellow-400 group-hover:scale-110 transition" />
                  <span className="text-xs text-gray-400">JavaScript</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500 transition group">
                  <SiCplusplus className="text-4xl mb-2 text-blue-400 group-hover:scale-110 transition" />
                  <span className="text-xs text-gray-400">C++</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-orange-500 transition group">
                  <FaJava className="text-4xl mb-2 text-orange-400 group-hover:scale-110 transition" />
                  <span className="text-xs text-gray-400">Java</span>
                  <span className="text-xs text-gray-600 mt-0.5">basics</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-orange-500 transition group">
                  <SiHtml5 className="text-4xl mb-2 text-orange-500 group-hover:scale-110 transition" />
                  <span className="text-xs text-gray-400">HTML5</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500 transition group">
                  <SiCss3 className="text-4xl mb-2 text-blue-500 group-hover:scale-110 transition" />
                  <span className="text-xs text-gray-400">CSS3</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500 transition group">
                  <SiMysql className="text-4xl mb-2 text-blue-400 group-hover:scale-110 transition" />
                  <span className="text-xs text-gray-400">SQL</span>
                </div>
              </div>
            </div>

            {/* Frontend */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-400 uppercase tracking-wide text-sm">Frontend Development</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-cyan-500 transition group">
                  <FaReact className="text-4xl mb-2 text-cyan-400 group-hover:scale-110 transition" />
                  <span className="text-xs text-gray-400">React</span>
                  <span className="text-xs text-yellow-500 mt-0.5">⚡ learning</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-cyan-500 transition group">
                  <SiTailwindcss className="text-4xl mb-2 text-cyan-400 group-hover:scale-110 transition" />
                  <span className="text-xs text-gray-400">Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* Backend & Database */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-400 uppercase tracking-wide text-sm">Backend & Database</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-green-500 transition group">
                  <FaNodeJs className="text-4xl mb-2 text-green-500 group-hover:scale-110 transition" />
                  <span className="text-xs text-gray-400">Node.js</span>
                  <span className="text-xs text-yellow-500 mt-0.5">⚡ learning</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-500 transition group">
                  <SiExpress className="text-4xl mb-2 text-gray-400 group-hover:scale-110 transition" />
                  <span className="text-xs text-gray-400">Express</span>
                  <span className="text-xs text-yellow-500 mt-0.5">⚡ learning</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-green-500 transition group">
                  <SiFastapi className="text-4xl mb-2 text-green-500 group-hover:scale-110 transition" />
                  <span className="text-xs text-gray-400">FastAPI</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500 transition group">
                  <SiPostgresql className="text-4xl mb-2 text-blue-400 group-hover:scale-110 transition" />
                  <span className="text-xs text-gray-400">PostgreSQL</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-green-500 transition group">
                  <SiMongodb className="text-4xl mb-2 text-green-500 group-hover:scale-110 transition" />
                  <span className="text-xs text-gray-400">MongoDB</span>
                  <span className="text-xs text-yellow-500 mt-0.5">⚡ learning</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500 transition group">
                  <SiMysql className="text-4xl mb-2 text-blue-400 group-hover:scale-110 transition" />
                  <span className="text-xs text-gray-400">MySQL</span>
                </div>
              </div>
            </div>

            {/* Tools & Practices */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-400 uppercase tracking-wide text-sm">Tools & Practices</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-orange-500 transition group">
                  <FaGitAlt className="text-4xl mb-2 text-orange-500 group-hover:scale-110 transition" />
                  <span className="text-xs text-gray-400">Git</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-white transition group">
                  <FaGithub className="text-4xl mb-2 text-white group-hover:scale-110 transition" />
                  <span className="text-xs text-gray-400">GitHub</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-purple-500 transition group">
                  <FaCode className="text-4xl mb-2 text-purple-400 group-hover:scale-110 transition" />
                  <span className="text-xs text-gray-400">VS Code</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-pink-500 transition group">
                  <FaDatabase className="text-4xl mb-2 text-pink-400 group-hover:scale-110 transition" />
                  <span className="text-xs text-gray-400">REST APIs</span>
                </div>
              </div>
            </div>

            {/* Currently Learning */}
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-purple-400 flex items-center gap-2">
                <span className="animate-pulse">⚡</span> Currently Learning
              </h3>
              <p className="text-gray-300 mb-3">AWS Cloud Services (EC2, S3, Lambda) • Docker • Microservices Architecture</p>
              <p className="text-sm text-gray-400">Always expanding my toolkit and staying current with industry trends</p>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">Professional learning through virtual internships</p>
          
          <div className="space-y-8">
            
            {/* Timeline line */}
            <div className="relative border-l-2 border-gray-800 pl-8 space-y-10">
              
              {/* Google */}
              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-purple-500 rounded-full border-4 border-black"></div>
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">Android Developer Virtual Intern</h3>
                      <p className="text-purple-400">Google for Developers (EduSkills)</p>
                    </div>
                    <span className="text-gray-500 text-sm">Jan - Mar 2024</span>
                  </div>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Completed intensive 10-week mobile development program building Android applications</li>
                    <li>• Learned Kotlin and Jetpack Compose through hands-on projects and guided tutorials</li>
                    <li>• Implemented API integration and SQL database connectivity following best practices</li>
                    <li>• Applied Git version control throughout the development process</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-purple-900/30 border border-purple-800 text-purple-400 rounded text-xs">Kotlin</span>
                    <span className="px-3 py-1 bg-purple-900/30 border border-purple-800 text-purple-400 rounded text-xs">Jetpack Compose</span>
                    <span className="px-3 py-1 bg-purple-900/30 border border-purple-800 text-purple-400 rounded text-xs">SQL</span>
                    <span className="px-3 py-1 bg-purple-900/30 border border-purple-800 text-purple-400 rounded text-xs">Git</span>
                  </div>
                </div>
              </div>

              {/* EA */}
              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-pink-500 rounded-full border-4 border-black"></div>
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-pink-500/50 transition">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">Software Engineering Virtual Intern</h3>
                      <p className="text-pink-400">Electronic Arts (via Forage)</p>
                    </div>
                    <span className="text-gray-500 text-sm">Sep - Oct 2025</span>
                  </div>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Completed virtual simulation designing feature proposals with technical specifications</li>
                    <li>• Developed object-oriented C++ code following software engineering best practices</li>
                    <li>• Learned about design patterns and algorithm optimization in game development</li>
                    <li>• Presented technical documentation and implementation plans</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-pink-900/30 border border-pink-800 text-pink-400 rounded text-xs">C++</span>
                    <span className="px-3 py-1 bg-pink-900/30 border border-pink-800 text-pink-400 rounded text-xs">OOP</span>
                    <span className="px-3 py-1 bg-pink-900/30 border border-pink-800 text-pink-400 rounded text-xs">Design Patterns</span>
                  </div>
                </div>
              </div>

              {/* Deloitte */}
              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-blue-500 rounded-full border-4 border-black"></div>
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">Cyber Security Virtual Intern</h3>
                      <p className="text-blue-400">Deloitte Australia (via Forage)</p>
                    </div>
                    <span className="text-gray-500 text-sm">Oct - Nov 2025</span>
                  </div>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Completed virtual program analyzing security infrastructure and identifying vulnerabilities</li>
                    <li>• Learned security frameworks and risk assessment methodologies</li>
                    <li>• Developed risk assessment reports with mitigation strategies</li>
                    <li>• Gained understanding of enterprise cybersecurity practices</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-blue-900/30 border border-blue-800 text-blue-400 rounded text-xs">Security Analysis</span>
                    <span className="px-3 py-1 bg-blue-900/30 border border-blue-800 text-blue-400 rounded text-xs">Risk Assessment</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">The story behind the code</p>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I'm a software developer who loves turning ideas into working products. My journey started with Python desktop applications, where I discovered the satisfaction of building tools that make people's lives easier. This led me to Android development through Google's intensive program, and now I'm focused on full-stack web development—building scalable applications that solve real-world problems.
            </p>
            <p>
              What excites me most is the entire product lifecycle: understanding user pain points, architecting clean solutions, writing maintainable code, and measuring real-world impact.
            </p>
            <p>
              Coming from an <span className="text-purple-400 font-semibold">Electrical Engineering</span> background gives me a unique perspective on problem-solving—I approach software development with strong analytical thinking and systems-level understanding. It's taught me to think in circuits and flows, which translates beautifully to building robust software architectures.
            </p>
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-3">
              <p className="text-white font-semibold">Currently:</p>
              <p>Mastering the MERN stack, diving deep into cloud deployment, and building projects that push my boundaries</p>
              
              <p className="text-white font-semibold mt-4">Next Goals:</p>
              <p>Contributing to open-source projects and learning microservices architecture</p>
              
              <p className="text-purple-400 font-semibold mt-4">🎯 Actively seeking:</p>
              <p>Software Engineering opportunities where I can build impactful products, collaborate with talented engineers, and grow continuously</p>
            </div>

            <p className="pt-4 border-t border-gray-800">
              When I'm not debugging code or optimizing APIs, you'll find me <span className="text-pink-400">lost in a good book</span>, <span className="text-pink-400">dancing to random playlists</span>, <span className="text-pink-400">painting abstract art</span>, exploring nature trails with my sketchbook, or discovering new music that fuels my creativity. I believe the best developers are curious about everything—not just code.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">Academic background</p>
          
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <div className="flex items-start gap-4">
              <FaGraduationCap className="text-purple-400 text-3xl flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Bachelor of Technology - Electrical Engineering</h3>
                <p className="text-purple-400 font-semibold mb-3">Priyadarshini College of Engineering, Nagpur</p>
                <div className="flex flex-wrap gap-4 text-gray-400 mb-6">
                  <span>Expected Graduation: May 2026</span>
                  <span>•</span>
                  <span>CGPA: 6.5/10</span>
                </div>
                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-gray-800">
                  <div>
                    <h4 className="font-semibold text-white mb-1">Higher Secondary Certificate (XII)</h4>
                    <p className="text-gray-400 text-sm">Yashoda High School & Jr. College</p>
                    <p className="text-purple-400 font-semibold">81.50% | 2022</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Secondary School Certificate (X)</h4>
                    <p className="text-gray-400 text-sm">Saraswati Vidyalaya, Nagpur</p>
                    <p className="text-purple-400 font-semibold">89.80% | 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">Continuous learning and skill development</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Android Development', org: 'Google for Developers', duration: '10-week intensive', color: 'purple' },
              { name: 'Software Engineering', org: 'Electronic Arts (Forage)', duration: 'Virtual Program', color: 'pink' },
              { name: 'Cyber Security', org: 'Deloitte Australia (Forage)', duration: 'Virtual Program', color: 'blue' },
              { name: 'SQL Advanced', org: 'HackerRank', duration: 'Certification', color: 'green' },
              { name: 'Core Python Programming', org: 'Binary Brains', duration: '3-month program', color: 'purple' },
              { name: 'UI/UX Design', org: 'CodSoft', duration: 'Certification', color: 'pink' },
              { name: 'Web Development', org: 'Systemtron', duration: 'Certification', color: 'blue' },
            ].map((cert, i) => (
              <div key={i} className={`flex items-start gap-3 p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-${cert.color}-500/50 transition`}>
                <FaAward className={`text-${cert.color}-400 flex-shrink-0 mt-1`} size={20} />
                <div>
                  <h4 className="font-semibold text-white text-sm">{cert.name}</h4>
                  <p className="text-gray-400 text-xs">{cert.org}</p>
                  <p className="text-gray-500 text-xs mt-1">{cert.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            I'm actively seeking Software Engineering opportunities to contribute to impactful projects and grow as a developer
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <a 
              href="mailto:janvhishukla0410@gmail.com"
              className="p-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl hover:shadow-lg hover:shadow-purple-500/50 transition group"
            >
              <FaEnvelope className="text-4xl mb-3 mx-auto" />
              <div className="font-semibold text-lg">Email Me</div>
              <div className="text-sm opacity-90 mt-2">janvhishukla0410@gmail.com</div>
            </a>
            
            <a 
              href="https://linkedin.com/in/janvhishukla"
              target="_blank"
              className="p-8 bg-gray-900 border-2 border-gray-800 rounded-2xl hover:border-purple-500 transition group"
            >
              <FaLinkedin className="text-4xl mb-3 mx-auto" />
              <div className="font-semibold text-lg">Connect on LinkedIn</div>
              <div className="text-sm text-gray-400 mt-2">@janvhishukla</div>
            </a>
          </div>

          <div className="flex flex-col items-center gap-3 text-gray-500">
            <div className="flex items-center gap-2">
            
            </div>
            <div className="flex items-center gap-2">
              <FaGithub />
              <a href="https://github.com/janvhishukla04" target="_blank" className="hover:text-purple-400 transition">
                github.com/janvhishukla04
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500">Available for full-time opportunities • Open to relocation</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            Built with ❤️ by Janvhi Shukla • Designed & Developed with Next.js and Tailwind CSS
          </p>
          <p className="text-gray-600 text-xs mt-2">Last updated: February 2026</p>
        </div>
      </footer>

    </main>
  )
}