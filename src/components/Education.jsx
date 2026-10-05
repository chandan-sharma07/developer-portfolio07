import useInView from '../hooks/useInView'

export default function Education() {
  const [ref, visible] = useInView(0.1)

  return (
    <section id="education" className="section edu-section" ref={ref}>
      <div className="container">
        <h2 className={`section-title reveal${visible ? ' visible' : ''}`}>
          Education &amp; <span className="accent">Activities</span>
        </h2>
        <div className="edu-grid">
          {/* Education Card */}
          <div className={`edu-card reveal-left${visible ? ' visible' : ''}`}>
            <div className="edu-icon-wrap">
              <i className="fas fa-graduation-cap edu-cap" />
            </div>
            <div className="edu-body">
              <h3 className="edu-degree">B.Tech, Computer Science Engineering</h3>
              <p className="edu-inst">
                Prestige Institute of Management &amp; Research, Bhopal (RGPV)
              </p>
              <div className="edu-meta-tags">
                <span className="about-tag">Completed 2026</span>
                <span className="about-tag">CGPA 7.42</span>
              </div>
            </div>
          </div>

          {/* Activities Block */}
          <div className={`edu-card edu-activity-card reveal-right${visible ? ' visible' : ''}`}>
            <div className="edu-icon-wrap">
              <i className="fas fa-hands-helping edu-cap" />
            </div>
            <div className="edu-body">
              <h3 className="edu-degree">NSS Volunteer (2024-2026)</h3>
              <p className="edu-activity-desc">
                Coordinated community outreach programs for 100+ participants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
