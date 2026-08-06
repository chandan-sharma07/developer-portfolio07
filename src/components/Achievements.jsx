import { useState, useEffect } from 'react'
import useInView from '../hooks/useInView'

const STATS = [
  { target: 4, label: 'Industry Certifications', plus: true },
  { target: 15, label: 'GitHub Repositories', plus: true },
  { target: 2, label: 'Featured Projects', plus: false },
  { target: 1, label: 'Awards / Recognitions', plus: false },
]

function StatItem({ target, label, plus, triggered }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!triggered) return
    let current = 0
    const step = Math.ceil(target / 30)
    const timer = setInterval(() => {
      current = Math.min(current + step, target)
      setCount(current)
      if (current >= target) clearInterval(timer)
    }, 40)
    return () => clearInterval(timer)
  }, [triggered, target])

  return (
    <div className="stat-item">
      <span className="stat-num">{count}</span>
      {plus && <span className="stat-plus">+</span>}
      <p>{label}</p>
    </div>
  )
}

export default function Achievements() {
  const [ref, visible] = useInView(0.1)

  return (
    <section id="achievements" className="section ach-section" ref={ref}>
      <div className="container">
        <h2 className={`section-title reveal${visible ? ' visible' : ''}`}>
          🏆Achievements &amp; <span className="accent">Recognition</span>
        </h2>
        <p className={`section-subtitle reveal${visible ? ' visible' : ''}`}>
          A track record of building, learning, and giving back — one project and one initiative at a time.
        </p>

        <div className={`stat-counters reveal${visible ? ' visible' : ''}`}>
          {STATS.map(s => (
            <StatItem key={s.label} {...s} triggered={visible} />
          ))}
        </div>

        <div className="ach-cards">
          <div className={`ach-card reveal-zoom${visible ? ' visible' : ''}`}>
            <div className="ach-img-wrap">
              <div className="ach-img-placeholder" style={{ display: 'flex' }}>
                <i className="fas fa-award" />
              </div>
            </div>
            <div className="ach-body">
              <span className="ach-badge">Academic</span>
              <p className="ach-year">2024 – Present</p>
              <h3 className="ach-title">NSS Volunteer — Community Outreach Leadership</h3>
              <p className="ach-inst">
                <i className="fas fa-university" /> National Service Scheme, Prestige Institute of Management &amp; Research
              </p>
              <p className="ach-desc">
                Led community outreach and awareness initiatives, strengthening leadership, teamwork,
                and public-communication skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
