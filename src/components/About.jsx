import { useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import SectionHeader from './SectionHeader'
import { PROFILE } from '../data'

export default function About() {
  const avatarReveal = useReveal(0.1, 0)
  const textReveal = useReveal(0.1, 100)
  const [photo, setPhoto] = useState('/wahid.jpg')
  const inputRef = useRef(null)

  const handlePhoto = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => setPhoto(ev.target.result)
    reader.readAsDataURL(file)
  }

  return (
    <section id="tentang" className="section section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="Tentang Saya"
          title='Passionate learner, <em>problem solver.</em>'
        />

        <div className="about-grid">
          {/* Avatar */}
          <div
            ref={avatarReveal.ref}
            className={`avatar-container reveal from-left ${avatarReveal.visible ? 'visible' : ''}`}
          >
            <div className="avatar-outer">
              {/* Rotating dashed ring */}
              <svg className="avatar-ring-svg" viewBox="0 0 220 220" fill="none">
                <circle
                  cx="110" cy="110" r="104"
                  stroke="url(#ringGrad)"
                  strokeWidth="2"
                  strokeDasharray="10 7"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="ringGrad" x1="0" y1="0" x2="220" y2="220" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="50%" stopColor="#a78bfa" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Avatar circle */}
              <div
                className="avatar-img"
                style={{ cursor: 'pointer' }}
                onClick={() => inputRef.current?.click()}
                title="Klik untuk upload foto"
              >
                {photo ? (
                  <img src={photo} alt="Wahid" />
                ) : (
                  <span className="avatar-initials gradient-text">HW</span>
                )}
              </div>
            </div>

            {/* Open badge */}
            <div className="avatar-open-badge">
              <div className="open-dot" />
              <span className="open-text">Open to Work</span>
            </div>

            {/* Upload btn */}
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              style={{ display: 'none' }}
              onChange={handlePhoto}
            />
            <button
              onClick={() => inputRef.current?.click()}
              style={{
                background: 'rgba(99,102,241,0.08)',
                border: '1px dashed rgba(99,102,241,0.3)',
                color: '#6366f1',
                padding: '6px 16px', borderRadius: 8,
                cursor: 'pointer',
                fontSize: 12, fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600, transition: 'all 0.2s',
              }}
            >
              📷 Upload Foto
            </button>
          </div>

          {/* Text */}
          <div
            ref={textReveal.ref}
            className={`about-text reveal from-right ${textReveal.visible ? 'visible' : ''}`}
          >
            <h2>
              Karya nyata,<br />
              <em>solusi yang berbicara.</em>
            </h2>
            <p>{PROFILE.bio1}</p>
            <p>{PROFILE.bio2}</p>

            {/* Education & Location cards */}
            <div className="edu-exp-grid">
              {/* Kampus */}
              <div className="info-card">
                <div className="info-card-icon">
                  <img src="/kampus.png" alt="Telkom University" style={{ width: 48, height: 48, objectFit: 'contain', borderRadius: 8 }} />
                </div>
                <div className="info-card-title">Telkom University</div>
                <div className="info-card-sub">S.Tr.Kom — Sistem Informasi Kota Cerdas</div>
                <div className="info-card-year">2024 – Sekarang</div>
              </div>
              {/* SMA */}
              <div className="info-card">
                <div className="info-card-icon">
                  <img src="/SMA.jpeg" alt="SMA Negeri 1 Bayung Lencir" style={{ width: 48, height: 48, objectFit: 'contain', borderRadius: 8 }} />
                </div>
                <div className="info-card-title">SMA Negeri 1 Bayung Lencir</div>
                <div className="info-card-sub">Jurusan IPA</div>
                <div className="info-card-year">2021 – 2023</div>
              </div>
              {/* Lokasi */}
              <div className="info-card">
                <div className="info-card-icon">
                  <img src="/lokasi.jpeg" alt="Lokasi" style={{ width: 48, height: 48, objectFit: 'contain', borderRadius: 8 }} />
                </div>
                <div className="info-card-title">Lokasi</div>
                <div className="info-card-sub">Bandung, Jawa Barat</div>
                <div className="info-card-year">Indonesia</div>
              </div>
              {/* Status */}
              <div className="info-card">
                <div className="info-card-icon">
                  <img src="/open.png" alt="Open to Work" style={{ width: 48, height: 48, objectFit: 'contain', borderRadius: 8 }} />
                </div>
                <div className="info-card-title">Status</div>
                <div className="info-card-sub">Mencari Magang / Kolaborasi</div>
                <div className="info-card-year" style={{ color: '#10b981' }}>Open to Work</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
