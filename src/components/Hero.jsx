import assetUrl from '../assetUrl'

const TECH_STACK = [
  'React.js', 'Node.js', 'Express.js', 'MongoDB',
  'MySQL', 'Redis', 'Docker', 'Git', 'Tailwind CSS',
]

export default function Hero() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero" id="home">
      <span id="landing" style={{ position: 'absolute', top: 0, pointerEvents: 'none' }} />
      <div className="hero-inner">
        {/* ── Left column: text ── */}
        <div className="hero-text">
          <p className="hero-label hero-fade" style={{ '--i': 0 }}>
            Hello, I'm
          </p>

          <h1 className="hero-name hero-fade" style={{ '--i': 1 }}>
            <span className="hero-name-accent">Chandan</span> Kumar Sharma
          </h1>

          <p className="hero-role hero-fade" style={{ '--i': 2 }}>
            B.Tech CSE (2026) | Backend / Full Stack Developer
          </p>

          <p className="hero-intro hero-fade" style={{ '--i': 3 }}>
            I build full-stack web applications using React.js, Node.js, Express.js,
            MongoDB, MySQL and Redis. My projects include Face Detection Music
            System, Apex Gurukul School Website, and CommerceCore API (backend).
          </p>

          <div className="hero-status hero-fade" style={{ '--i': 5 }}>
            <span className="hero-status-dot" aria-hidden="true" />
            Open to Opportunities
          </div>

          <div className="hero-socials hero-fade" style={{ '--i': 6 }}>
            <a
              href="https://github.com/chandansharma07"
              target="_blank"
              rel="noopener"
              className="hero-social-icon"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://linkedin.com/in/chandansharma07"
              target="_blank"
              rel="noopener"
              className="hero-social-icon"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="mailto:b.techchandancs@gmail.com"
              className="hero-social-icon"
              aria-label="Email"
            >
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>

        {/* ── Right column: photo ── */}
        <div className="hero-photo-col hero-fade" style={{ '--i': 2 }}>
          <div className="hero-photo-wrapper">
            <div className="hero-photo-offset" aria-hidden="true" />
            <img
              src={assetUrl('/images/profilePicture/1750410526290 (1).jpg')}
              alt="Chandan Kumar Sharma — Full Stack Developer"
              className="hero-photo"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* ── Tech stack strip ── */}
      <div className="hero-tech-strip hero-fade" style={{ '--i': 7 }}>
        {TECH_STACK.map(t => (
          <span key={t} className="hero-tech-label">{t}</span>
        ))}
      </div>
    </section>
  )
}
