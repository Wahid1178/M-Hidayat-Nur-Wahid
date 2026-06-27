import { useReveal } from '../hooks/useReveal'

export default function SectionHeader({ eyebrow, title }) {
  const { ref, visible } = useReveal()

  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
      <div className="section-eyebrow">
        <div className="eyebrow-line eyebrow-line-l" />
        <span className="eyebrow-text">{eyebrow}</span>
        <div className="eyebrow-line eyebrow-line-r" />
      </div>
      <h2
        className="section-title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  )
}
