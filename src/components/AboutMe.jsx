import useInView from '../hooks/useInView'

export default function AboutMe() {
  const [ref, visible] = useInView(0.1)

  return (
    <section id="about" className="section about-section" ref={ref}>
      <div className="container">
        <h2 className={`section-title reveal${visible ? ' visible' : ''}`}>
          About <span className="accent">Me</span>
        </h2>
        <div className="about-grid">
          {/* Left Column: How I work & Activities */}
          <div className={`about-col-left reveal-left${visible ? ' visible' : ''}`}>
            <div className="about-card">
              <h3 className="about-card-title">How I Work</h3>
              <p className="about-text">
                I focus on backend engineering and enjoy designing APIs, database schemas and authentication flows, and I build the React frontends for my projects too.
              </p>
            </div>

            <div className="about-card">
              <h3 className="about-card-title">Activities</h3>
              <div className="activity-item">
                <div className="activity-header">
                  <span className="activity-role">NSS Volunteer</span>
                  <span className="activity-year">2024–2026</span>
                </div>
                <p className="activity-desc">
                  Coordinated community outreach programs for 100+ participants.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className={`about-col-right reveal-right${visible ? ' visible' : ''}`}>
            <div className="about-card">
              <h3 className="about-card-title">Education</h3>
              <div className="edu-entry">
                <h4 className="edu-title">B.Tech, Computer Science Engineering</h4>
                <p className="edu-school">
                  Prestige Institute of Management &amp; Research, Bhopal (RGPV)
                </p>
                <div className="edu-meta-tags">
                  <span className="about-tag">Completed 2026</span>
                  <span className="about-tag">CGPA 7.42</span>
                </div>
              </div>
            </div>

            <div className="about-card">
              <h3 className="about-card-title">Certifications</h3>
              <ul className="cert-list">
                <li className="cert-item">
                  <span className="cert-bullet" />
                  <div className="cert-info">
                    <span className="cert-name">Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate</span>
                    <span className="cert-meta">(2025)</span>
                  </div>
                </li>
                <li className="cert-item">
                  <span className="cert-bullet" />
                  <div className="cert-info">
                    <span className="cert-name">Cisco Cybersecurity Essentials</span>
                    <span className="cert-meta">(Cisco Networking Academy)</span>
                  </div>
                </li>
                <li className="cert-item">
                  <span className="cert-bullet" />
                  <div className="cert-info">
                    <span className="cert-name">TCS iON Career Edge, Young Professional</span>
                    <span className="cert-meta">(2025)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
