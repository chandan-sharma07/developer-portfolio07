import { useState, useEffect } from 'react'
import assetUrl from '../assetUrl'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      if (current) setActiveLink('#' + current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <a
          href="#home"
          className="logo"
          aria-label="CS Logo"
          onClick={e => handleNavClick(e, '#home')}
        >
          CS
        </a>

        <div className="nav-right">
          <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="nav-links">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={activeLink === href ? 'active' : ''}
                  onClick={e => handleNavClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="nav-resume-item">
              <a
                href={assetUrl('/downloads/Resume_FullStackDeveloper.pdf')}
                target="_blank"
                rel="noopener noreferrer"
                download="Chandan_Resume.pdf"
                className="btn btn-primary btn-sm nav-resume-btn"
              >
                Resume
              </a>
            </li>
          </ul>

          <a
            href={assetUrl('/downloads/Resume_FullStackDeveloper.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            download="Chandan_Resume.pdf"
            className="btn btn-outline btn-sm nav-desktop-resume"
          >
            Resume
          </a>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            id="hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
