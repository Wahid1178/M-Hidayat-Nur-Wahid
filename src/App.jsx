import { useEffect, useRef, useState } from 'react'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

const SECTIONS = ['beranda', 'tentang', 'skill', 'proyek', 'sertifikat', 'kontak']

export default function App() {
  const [activeSection, setActiveSection] = useState('beranda')
  const projRef = useRef(null)

  // Active section tracker
  useEffect(() => {
    const observers = SECTIONS.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.4 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  const scrollToProjects = () => {
    document.getElementById('proyek')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <CustomCursor />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero onScrollToProjects={scrollToProjects} />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <footer className="footer">
        &nbsp;·&nbsp; M Hidayat Nur Wahid &nbsp;·&nbsp; 2026 &nbsp;·&nbsp; Telkom University
      </footer>
    </>
  )
}
