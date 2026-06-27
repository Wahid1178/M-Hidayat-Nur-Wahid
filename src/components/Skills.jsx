import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import SectionHeader from './SectionHeader'
import { SKILLS, PROFICIENCY } from '../data'

function ProfBar({ name, pct, color, animate }) {
  return (
    <div className="prof-item">
      <div className="prof-row">
        <span className="prof-name">{name}</span>
        <span className="prof-pct" style={{ color }}>{pct}%</span>
      </div>
      <div className="prof-bar-bg">
        <div
          className="prof-bar-fill"
          style={{
            width: animate ? `${pct}%` : '0%',
            background: `linear-gradient(to right, ${color}, ${color}aa)`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref: profRef, visible: profVisible } = useReveal(0.2)

  return (
    <section id="skill" className="section">
      <div className="container">
        <SectionHeader eyebrow="Skill" title='Teknologi yang saya <em>kuasai.</em>' />

        <div className="skills-meta">
          {/* Skill tag categories */}
          <div className="skill-cats">
            {SKILLS.map((cat, i) => {
              const { ref, visible } = useReveal(0.1, i * 80)
              return (
                <div
                  key={cat.id}
                  ref={ref}
                  className={`skill-cat-card reveal ${visible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="skill-cat-header">
                    <div className="skill-cat-bar" style={{ background: cat.color }} />
                    <span className="skill-cat-name">{cat.name}</span>
                  </div>
                  <div className="skill-tags">
                    {cat.tags.map((t) => (
                      <span
                        key={t}
                        className="skill-tag"
                        style={{
                          borderColor: cat.color + '33',
                          background: cat.color + '0d',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Proficiency bars */}
          <div
            ref={profRef}
            className={`reveal ${profVisible ? 'visible' : ''}`}
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 20, padding: '28px 32px',
            }}
          >
            <p className="proficiency-title">Tingkat Kemahiran</p>
            <div className="prof-grid">
              {PROFICIENCY.map((p) => (
                <ProfBar key={p.name} {...p} animate={profVisible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
