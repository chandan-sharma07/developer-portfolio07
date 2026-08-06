import useInView from '../hooks/useInView'

export default function Education() {
  const [ref, visible] = useInView(0.1)

  return (
    <section id="education" className="section edu-section" ref={ref}>
      <div className="container">
        <h2 className={`section-title reveal${visible ? ' visible' : ''}`}>
          My <span className="accent">Education</span>
        </h2>
        <div className="edu-grid">
          <div
            className={`edu-card reveal-down${visible ? ' visible' : ''}`}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 0 2px #00b4ff, 0 20px 50px rgba(0,180,255,0.15)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '' }}
          >
            <div className="edu-icon-wrap">
              <i className="fas fa-graduation-cap edu-cap" />
            </div>
            <div className="edu-body">
              <h3 className="edu-degree">B.Tech in Computer Science Engineering (CSE)</h3>
              <p className="edu-inst">
                <i className="fas fa-university" /> Prestige Institute of Management &amp; Research, Bhopal (RGPV)
              </p>
              <div className="edu-meta">
                <span><i className="fas fa-calendar-alt" /> 2022 – 2026</span>
                <span><i className="fas fa-clock" /> Full-time</span>
              </div>
              <div className="edu-highlights">
                <h4>Key Highlights</h4>
                <ul>
                  <li className="edu-bullet">Core focus on Data Structures &amp; Algorithms and problem solving</li>
                  <li className="edu-bullet">Practical, project-based learning across full-stack web development (MERN)</li>
                  <li className="edu-bullet">Built and deployed multiple end-to-end applications alongside coursework</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
