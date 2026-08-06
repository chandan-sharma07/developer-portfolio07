import useInView from '../hooks/useInView'

export default function Experience() {
  const [ref, visible] = useInView(0.1)

  return (
    <section id="experience" className="section exp-section" ref={ref}>
      <div className="container">
        <h2 className={`section-title reveal${visible ? ' visible' : ''}`}>
          Work <span className="accent">Experience</span>
        </h2>
        <div className="exp-timeline">
          <div className={`exp-card reveal-left${visible ? ' visible' : ''}`}>
            <div className="exp-left-panel">
              <div className="exp-badge">Volunteer</div>
              <div className="exp-org">NSS</div>
            </div>
            <div className="exp-right-panel">
              <div className="exp-header">
                <div>
                  <h3 className="exp-title">NSS Volunteer</h3>
                  <p className="exp-org-full">National Service Scheme (NSS)</p>
                </div>
                <div className="exp-meta">
                  <span><i className="fas fa-map-marker-alt" /> Bhopal, India</span>
                  <span><i className="fas fa-calendar-alt" /> 2024 – Present</span>
                </div>
              </div>
              <div className="exp-responsibilities">
                <h4>Key Responsibilities</h4>
                <ul>
                  <li className="exp-bullet">Led community outreach and awareness initiatives across multiple campaigns</li>
                  <li className="exp-bullet">Coordinated with fellow volunteers to plan and execute events</li>
                  <li className="exp-bullet">Represented the college at NSS-organized public engagement drives</li>
                  <li className="exp-bullet">Balanced volunteer commitments alongside full-time engineering coursework</li>
                </ul>
              </div>
              <div className="exp-achievements">
                <h4>Key Achievements</h4>
                <ul>
                  <li className="exp-bullet">Strengthened leadership and public-communication skills through sustained,
                    ongoing community engagement</li>
                  <li className="exp-bullet">Contributed to outreach initiatives reaching the wider college community over 2+
                    years</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
