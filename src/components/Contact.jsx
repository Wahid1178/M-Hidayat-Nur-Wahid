import { useReveal } from '../hooks/useReveal'
import SectionHeader from './SectionHeader'
import { CONTACT_LINKS } from '../data'

export default function Contact() {
  const { ref, visible } = useReveal(0.15)

  return (
    <section id="kontak" className="section section-alt">
      <div className="container">
        <SectionHeader eyebrow="Kontak" title='Mari <em>berkolaborasi!</em>' />

        <div className="contact-wrapper">
          <div
            ref={ref}
            className={`contact-cta-text reveal ${visible ? 'visible' : ''}`}
          >
            <h3>Punya ide? Saya siap! 🚀</h3>
            <p>
              Tertarik bekerja sama, magang, atau sekadar berdiskusi soal teknologi?
              Jangan ragu untuk menghubungi saya — saya selalu terbuka untuk
              kesempatan baru dan tantangan menarik.
            </p>
          </div>

          <div className="contact-cards">
            {CONTACT_LINKS.map((c, i) => {
              const { ref: cr, visible: cv } = useReveal(0.1, i * 80)
              return (
                <a
                  key={c.label}
                  ref={cr}
                  href={c.href}
                  target={c.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={`contact-card reveal ${cv ? 'visible' : ''}`}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = c.color + '50'
                    e.currentTarget.style.boxShadow = `0 12px 36px ${c.color}18`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <div
                    className="contact-card-icon"
                    style={{
                      background: c.color + '18',
                      border: `1px solid ${c.color}28`,
                    }}
                  >
                    <img
                      src={c.icon}
                      alt={c.label}
                      style={{ width: 28, height: 28, objectFit: 'contain', borderRadius: 4 }}
                    />
                  </div>
                  <div>
                    <div className="contact-card-label" style={{ color: c.color }}>
                      {c.label}
                    </div>
                    <div className="contact-card-val">{c.val}</div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
