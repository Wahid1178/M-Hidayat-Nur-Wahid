import { useState, useEffect } from 'react'
import { PROFILE, STATS } from '../data'

const WORDS = ['Machine Learning', 'Web Development', 'Network Admin', 'Enterprise Arch']

export default function Hero({ onScrollToProjects }) {
  const [typed, setTyped] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [heroOpacity, setHeroOpacity] = useState(1)
  const [heroY, setHeroY] = useState(0)

  // Typewriter
  useEffect(() => {
    const word = WORDS[wordIdx]
    const speed = deleting ? 45 : 85

    const t = setTimeout(() => {
      if (!deleting) {
        setTyped(word.slice(0, charIdx + 1))
        if (charIdx + 1 === word.length) {
          setTimeout(() => setDeleting(true), 1800)
        } else {
          setCharIdx((c) => c + 1)
        }
      } else {
        setTyped(word.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setWordIdx((i) => (i + 1) % WORDS.length)
          setCharIdx(0)
        } else {
          setCharIdx((c) => c - 1)
        }
      }
    }, speed)

    return () => clearTimeout(t)
  }, [charIdx, deleting, wordIdx])

  // Parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const vh = window.innerHeight
      if (y < vh) {
        setHeroOpacity(Math.max(0, 1 - (y / vh) * 1.8))
        setHeroY(y * 0.28)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="beranda" className="hero">
      {/* BG */}
      <div className="hero-bg-grid" />
      <div className="hero-orb orb-1" />
      <div className="hero-orb orb-2" />
      <div className="hero-orb orb-3" />

      {/* Content */}
      <div
        className="hero-content"
        style={{
          opacity: heroOpacity,
          transform: `translateY(${heroY}px)`,
          transition: 'opacity 0.1s, transform 0.1s',
        }}
      >
        {/* Badge */}
        <div className="hero-badge">
          <div className="hero-badge-dot" />
          Mahasiswa Sistem Informasi Kota Cerdas · Telkom University 2024
        </div>

        {/* Name */}
        <h1 className="hero-name">
          M Hidayat<br />
          <span className="gradient-text">Nur Wahid</span>
        </h1>

        {/* Typewriter */}
        <div className="hero-typed-row">
          <span>Berfokus pada</span>
          <span className="hero-typed">{typed}</span>
          <span className="cursor-blink" />
        </div>

        {/* Bio */}
        <p className="hero-bio">{PROFILE.bio1}</p>

        {/* CTA */}
        <div className="hero-cta">
          <button className="btn-primary" onClick={onScrollToProjects}>
            Lihat Proyek <span>→</span>
          </button>
          <a className="btn-outline" href={`mailto:${PROFILE.email}`}>
            Hubungi Saya
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {STATS.map((s) => (
            <div className="stat-pill" key={s.label}>
              <span className="stat-num" style={{ color: s.color }}>{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: 'absolute', bottom: 28, left: '50%',
          transform: 'translateX(-50%)',
          animation: 'orbPulse 2s ease-in-out infinite',
          opacity: heroOpacity,
        }}
      >
        <div style={{
          width: 24, height: 40,
          border: '2px solid rgba(99,102,241,0.3)',
          borderRadius: 12,
          display: 'flex', justifyContent: 'center', paddingTop: 8,
        }}>
          <div style={{
            width: 4, height: 8,
            background: '#6366f1', borderRadius: 2,
            animation: 'blink 2s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  )
}
