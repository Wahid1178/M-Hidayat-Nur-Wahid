import { useState, useEffect } from 'react'

const NAV_ITEMS = ['Beranda', 'Tentang', 'Skill', 'Proyek', 'Sertifikat', 'Kontak']

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-logo font-display" onClick={() => scrollTo('beranda')}>
        </div>

        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className={`nav-btn ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              onClick={() => scrollTo(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <a className="nav-hire" href="mailto:mhidayatnw123@gmail.com">
          Hire Me ✦
        </a>
      </div>
    </nav>
  )
}
