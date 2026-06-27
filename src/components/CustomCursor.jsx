import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const ringPos = useRef({ x: 0, y: 0 })
  const mousePos = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'

      const target = e.target
      const isHoverable = target.closest('a,button,.proj-card,.cert-card,.skill-tag,.stat-pill')
      dot.classList.toggle('hover', !!isHoverable)
      ring.classList.toggle('hover', !!isHoverable)
    }

    const animate = () => {
      const { x: mx, y: my } = mousePos.current
      const { x: rx, y: ry } = ringPos.current
      const nx = rx + (mx - rx) * 0.12
      const ny = ry + (my - ry) * 0.12
      ringPos.current = { x: nx, y: ny }
      ring.style.left = nx + 'px'
      ring.style.top = ny + 'px'
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
