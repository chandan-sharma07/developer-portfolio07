import { useState, useEffect } from 'react'
import assetUrl from '../assetUrl'

const DESIGNATIONS = [
  'Full Stack Developer',
  'MERN Stack Developer',
  'React.js Enthusiast',
  'API Builder',
]

export default function Hero() {
  const [text, setText] = useState('')
  const [di, setDi] = useState(0)
  const [ci, setCi] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = DESIGNATIONS[di]
    let timeout

    if (!deleting) {
      const next = ci + 1
      setText(word.slice(0, next))
      if (next === word.length) {
        timeout = setTimeout(() => setDeleting(true), 1800)
      } else {
        timeout = setTimeout(() => setCi(next), 90)
      }
    } else {
      const next = ci - 1
      setText(word.slice(0, next))
      if (next === 0) {
        setDeleting(false)
        setDi(prev => (prev + 1) % DESIGNATIONS.length)
        timeout = setTimeout(() => setCi(0), 55)
      } else {
        timeout = setTimeout(() => setCi(next), 55)
      }
    }

    return () => clearTimeout(timeout)
  }, [ci, di, deleting])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="landing" className="section landing-section">
      <div className="landing-bg-grid" />
      <div className="landing-content">
        <div className="logo-badge animate-fade-up" style={{ '--delay': '0s' }}>CS</div>
        <h1 className="landing-name animate-fade-up" style={{ '--delay': '0.2s' }}>
          Chandan Kumar Sharma
        </h1>
        <div className="landing-designation animate-fade-up" style={{ '--delay': '0.4s' }}>
          <span className="type-text">{text}</span>
          <span className="cursor-blink">|</span>
        </div>
        <p className="landing-intro animate-fade-up" style={{ '--delay': '0.6s' }}>
          Full Stack Developer with hands-on, end-to-end experience across the MERN stack, building responsive,
          high-performance web applications from the ground up. I&apos;ve independently designed, integrated, and deployed 10+
          RESTful APIs across 5+ production and academic projects, improving page load speed by up to 30% and enabling
          real-time, scalable data handling. My foundation spans React.js, Redux Toolkit, Node.js, Express.js, and
          MongoDB, backed by strong fundamentals in data structures, algorithms, and database schema design. I care about
          writing clean, maintainable code and shipping products that actually work for the people using them. Currently
          completing my B.Tech in Computer Science Engineering, I&apos;m looking to bring this full-stack skill set to a team
          building reliable, scalable software.
        </p>
        <div className="landing-cta animate-fade-up" style={{ '--delay': '0.8s' }}>
          <a href="#about" className="btn btn-primary" onClick={e => handleNavClick(e, '#about')}>
            Learn More About Me
          </a>
          <a href="#contact" className="btn btn-outline" onClick={e => handleNavClick(e, '#contact')}>
            Get In Touch
          </a>
          <a
            href={assetUrl('/downloads/Resume_FullStackDeveloper.pdf')}
            target="_blank"
            download="Chandan_Resume.pdf"
            className="btn btn-outline"
          >
            <i className="fas fa-download" /> Download Resume
          </a>
        </div>
        <div className="landing-socials">
          <a
            href="https://github.com/Jai-ksprogrammer"
            target="_blank"
            rel="noopener"
            className="social-icon animate-pop"
            style={{ '--delay': '1s' }}
            aria-label="GitHub"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://linkedin.com/in/chandansharma07"
            target="_blank"
            rel="noopener"
            className="social-icon animate-pop"
            style={{ '--delay': '1.1s' }}
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            href="mailto:b.techchandancs@gmail.com"
            className="social-icon animate-pop"
            style={{ '--delay': '1.2s' }}
            aria-label="Email"
          >
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span />
      </div>
    </section>
  )
}
