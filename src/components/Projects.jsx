import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import SectionHeader from './SectionHeader'
import { PROJECTS } from '../data'

const FILTERS = ['Semua', 'ML', 'Web']

function ProjectCard({ project, index }) {
  const { ref, visible } = useReveal(0.1, index * 100)

  return (
    <div
      ref={ref}
      className={`proj-card reveal ${visible ? 'visible' : ''}`}
      style={{
        transitionDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = project.color + '55'
        e.currentTarget.style.boxShadow = `0 24px 60px ${project.color}18`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Top banner */}
      <div className="proj-card-top" style={{ background: project.bg }}>
        <div
          style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(circle at center, ${project.color}22, transparent 70%)`,
          }}
        />
        <span className="proj-card-emoji">{project.emoji}</span>
      </div>

      {/* Body */}
      <div className="proj-card-body">
        <span
          className="proj-card-tag"
          style={{
            background: project.color + '18',
            color: project.color,
            border: `1px solid ${project.color}33`,
          }}
        >
          {project.tag}
        </span>

        <div className="proj-card-name">{project.name}</div>
        <div className="proj-card-desc">{project.desc}</div>

        <div className="proj-bullets">
          {project.bullets.map((b) => (
            <div key={b} className="proj-bullet">
              <div className="proj-bullet-dot" style={{ background: project.color }} />
              <span>{b}</span>
            </div>
          ))}
        </div>

        <div className="proj-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-chip">{t}</span>
          ))}
        </div>

        <div className="proj-footer">
          <a className="proj-link" href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub ⎇ <span>→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('Semua')

  const filtered = filter === 'Semua'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter)

  return (
    <section id="proyek" className="section section-alt">
      <div className="container" style={{ textAlign: 'center' }}>
        <SectionHeader eyebrow="Proyek" title='Karya yang saya <em>banggakan.</em>' />

        {/* Filter tabs */}
        <div className="proj-filter">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
