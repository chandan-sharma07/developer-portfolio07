import { useState, useEffect, useRef } from 'react'
import useInView from '../hooks/useInView'

const SKILL_CATS = [
  {
    icon: 'fas fa-laptop-code',
    title: 'Frontend Development',
    delay: '0s',
    bars: [
      { label: 'React.js', pct: 90 },
      { label: 'Redux Toolkit', pct: 85 },
      { label: 'JavaScript (ES6+)', pct: 88 },
      { label: 'HTML5', pct: 92 },
      { label: 'CSS3', pct: 90 },
      { label: 'Tailwind CSS', pct: 85 },
      { label: 'Bootstrap', pct: 85 },
    ],
  },
  {
    icon: 'fas fa-server',
    title: 'Backend & APIs',
    delay: '0.1s',
    bars: [
      { label: 'Node.js', pct: 75 },
      { label: 'Express.js', pct: 80 },
      { label: 'REST API Design', pct: 88 },
      { label: 'JWT Authentication', pct: 80 },
    ],
  },
  {
    icon: 'fas fa-database',
    title: 'Database',
    delay: '0.2s',
    bars: [{ label: 'MongoDB (CRUD & Schema)', pct: 82 }],
  },
  {
    icon: 'fas fa-paint-brush',
    title: 'UI/UX & Animation',
    delay: '0.15s',
    bars: [
      { label: 'Responsive Web Design', pct: 90 },
      { label: 'Framer Motion', pct: 80 },
      { label: 'AOS / Animate On Scroll', pct: 78 },
    ],
  },
  {
    icon: 'fas fa-code-branch',
    title: 'Testing & Version Control',
    delay: '0.25s',
    bars: [
      { label: 'Git & GitHub', pct: 85 },
      { label: 'Manual/Functional Testing', pct: 75 },
    ],
  },
  {
    icon: 'fas fa-cloud-upload-alt',
    title: 'Deployment & Tools',
    delay: '0.3s',
    bars: [
      { label: 'Netlify', pct: 80 },
      { label: 'Vercel', pct: 80 },
      { label: 'MS Office', pct: 85 },
      { label: 'Google Workspace', pct: 85 },
    ],
  },
  {
    icon: 'fas fa-brain',
    title: 'Core CS & Problem Solving',
    delay: '0.35s',
    bars: [{ label: 'Data Structures & Algorithms', pct: 85 }],
  },
]

function SkillCat({ icon, title, delay, bars, triggered }) {
  const [widths, setWidths] = useState(bars.map(() => 0))

  useEffect(() => {
    if (!triggered) return
    const timer = setTimeout(() => {
      setWidths(bars.map(b => b.pct))
    }, parseFloat(delay) * 1000)
    return () => clearTimeout(timer)
  }, [triggered, bars, delay])

  return (
    <div
      className={`skill-cat reveal-scale${triggered ? ' visible' : ''}`}
      style={{ '--cat-delay': delay }}
    >
      <div className="skill-cat-header">
        <i className={icon} />
        <h3>{title}</h3>
      </div>
      <div className="skill-bars">
        {bars.map((b, i) => (
          <div key={b.label} className="skill-bar-item">
            <span>{b.label}</span>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{
                  width: `${widths[i]}%`,
                  transition: 'width 0.9s ease',
                }}
              />
            </div>
            <span className="pct-num">{b.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, visible] = useInView(0.1)

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="container">
        <h2 className={`section-title reveal${visible ? ' visible' : ''}`}>
          Technical <span className="accent">Skills</span>
        </h2>
        <div className="skills-grid">
          {SKILL_CATS.map(cat => (
            <SkillCat key={cat.title} {...cat} triggered={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
