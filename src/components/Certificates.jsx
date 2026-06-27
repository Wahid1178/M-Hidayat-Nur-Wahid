import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import SectionHeader from './SectionHeader'
import { CERTIFICATES } from '../data'

function CertCard({ cert, index }) {
  const [open, setOpen] = useState(false)
  const { ref, visible } = useReveal(0.1, index * 80)

  return (
    <div
      ref={ref}
      className={`cert-card reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = cert.color + '50'
        e.currentTarget.style.boxShadow = `0 14px 40px ${cert.color}18`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.boxShadow = ''
      }}
    >
      <div className="cert-card-top">
        <div
          className="cert-icon"
          style={{
            background: cert.color + '18',
            border: `1px solid ${cert.color}28`,
          }}
        >
          {cert.icon}
        </div>
        <div>
          <div className="cert-meta-type" style={{ color: cert.color }}>
            {cert.type} · {cert.hours}
          </div>
          <div className="cert-meta-year">{cert.year}</div>
        </div>
      </div>

      <div className="cert-title-text">{cert.title}</div>
      <div className="cert-org">{cert.org}</div>

      <div className={`cert-topics ${open ? 'open' : ''}`}>
        <div style={{
          color: '#475569', fontSize: 10, fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          fontFamily: "'Space Grotesk', sans-serif", marginBottom: 10,
        }}>
          Materi Pelatihan
        </div>
        {cert.topics.map((t) => (
          <div key={t} className="cert-topic-item">
            <div className="cert-topic-dot" style={{ background: cert.color }} />
            <span className="cert-topic-text">{t}</span>
          </div>
        ))}
      </div>

      <button className="cert-toggle-btn" onClick={() => setOpen(!open)}>
        <span>{open ? '▲' : '▼'}</span>
        <span>{open ? 'Tutup detail' : 'Lihat materi'}</span>
      </button>
    </div>
  )
}

export default function Certificates() {
  return (
    <section id="sertifikat" className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <SectionHeader
          eyebrow="Sertifikat"
          title='Komitmen pada <em>pembelajaran.</em>'
        />
        <div className="cert-grid">
          {CERTIFICATES.map((c, i) => (
            <CertCard key={c.id} cert={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
