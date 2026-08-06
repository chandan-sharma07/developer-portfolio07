import { useState } from 'react'
import useInView from '../hooks/useInView'
import assetUrl from '../assetUrl'

export default function AboutMe() {
  const [ref, visible] = useInView(0.1)
  const [missionFlipped, setMissionFlipped] = useState(false)
  const [visionFlipped, setVisionFlipped] = useState(false)

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const QUICK_LINKS = [
    { href: '#experience', label: 'Work Experience' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#certifications', label: 'Certifications' },
  ]

  return (
    <section id="about" className="section about-section" ref={ref}>
      <div className="container">
        <h2 className={`section-title reveal${visible ? ' visible' : ''}`}>
          About <span className="accent">Me</span>
        </h2>
        <div className="about-grid">
          {/* Profile Photo */}
          <div className={`about-photo-col reveal-left${visible ? ' visible' : ''}`}>
            <div className="photo-wrapper">
              <img
                src={assetUrl('/images/profilePicture/MePic.webp')}
                alt="Chandan Kumar Sharma"
                className="profile-photo"
                onError={e => {
                  e.target.style.display = 'none'
                  e.target.nextElementSibling.style.display = 'flex'
                }}
              />
              <div className="photo-placeholder" style={{ display: 'none' }}>
                <i className="fas fa-user" />
                <span>Profile Photo</span>
              </div>
            </div>
            <div className="about-cta-btns">
              {QUICK_LINKS.map(({ href, label }, i) => (
                <a
                  key={href}
                  href={href}
                  className={`btn btn-sm btn-outline reveal-btn${visible ? ' visible' : ''}`}
                  style={{ '--btn-delay': `${i * 0.1}s` }}
                  onClick={e => handleNavClick(e, href)}
                >
                  {label} <i className="fas fa-arrow-right" />
                </a>
              ))}
            </div>
          </div>

          {/* About Content */}
          <div className={`about-content-col reveal-right${visible ? ' visible' : ''}`}>
            <p className="about-bio">
              I&apos;m a Full Stack Developer specializing in the MERN stack — React.js and Redux Toolkit on the front end,
              Node.js, Express.js, and MongoDB on the back end. Over the course of my academic and project work, I&apos;ve
              owned projects end-to-end: designing REST APIs, structuring MongoDB schemas, implementing JWT
              authentication, and deploying finished products to Netlify and Vercel. I&apos;m comfortable across the stack, but
              I particularly enjoy building interfaces that feel fast and responsive while the backend handles real,
              scalable data underneath. My toolkit includes JavaScript (ES6+), Tailwind CSS, Bootstrap, Framer Motion, and
              Git/GitHub for collaborative version control. I&apos;m currently completing my B.Tech in Computer Science
              Engineering at Prestige Institute of Management &amp; Research (RGPV), Bhopal, with a strong grounding in
              Data Structures &amp; Algorithms and problem solving. What sets me apart is that I don&apos;t just follow
              tutorials — I independently design and ship complete products, from database schema to deployed URL. I&apos;m
              looking to bring that ownership mindset to a team building real-world software.
            </p>
            <div className="mission-vision-grid">
              {/* Mission Card */}
              <div className="mv-card flip-card" onClick={() => setMissionFlipped(f => !f)}>
                <div
                  className="flip-inner"
                  style={{ transform: missionFlipped ? 'rotateY(180deg)' : '' }}
                >
                  <div className="flip-front">
                    <i className="fas fa-crosshairs mv-icon" />
                    <h3>Mission</h3>
                  </div>
                  <div className="flip-back">
                    <i className="fas fa-crosshairs mv-icon-sm" />
                    <h3>Mission</h3>
                    <p>To build reliable, scalable, and user-first software by combining strong engineering fundamentals
                      with thoughtful design.</p>
                  </div>
                </div>
              </div>
              {/* Vision Card */}
              <div className="mv-card flip-card flip-delay" onClick={() => setVisionFlipped(f => !f)}>
                <div
                  className="flip-inner"
                  style={{ transform: visionFlipped ? 'rotateY(180deg)' : '' }}
                >
                  <div className="flip-front">
                    <i className="fas fa-eye mv-icon" />
                    <h3>Vision</h3>
                  </div>
                  <div className="flip-back">
                    <i className="fas fa-eye mv-icon-sm" />
                    <h3>Vision</h3>
                    <p>To grow into a full-stack engineer who ships products that solve real problems — writing code
                      that&apos;s not just functional, but maintainable and built to last.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
