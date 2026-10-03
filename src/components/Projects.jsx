import useInView from '../hooks/useInView'

const PROJECTS = [
  {
    num: '01',
    type: 'Full-Stack Web App',
    title: 'Apex Gurukul School Website',
    desc: 'A full-stack e-commerce/e-learning platform listing 100+ products, built end-to-end with a custom REST API backend and MongoDB schema design for real-time data handling.',
    outcomes: [
      'Independently designed and built backend REST APIs with Node.js and Express.js',
      'Designed MongoDB schemas to support real-time data handling at scale',
      'Implemented Redux Toolkit for centralized state management, cutting prop-drilling',
      'Delivered a 100% mobile-optimized, cross-device interface for consistent UX',
    ],
    tech: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
    revealClass: 'reveal-left',
    links: {
      live: 'https://ninecodedot.vercel.app',
      github: 'https://github.com/chandansharma07/apex-gurukul',
    },
  },
  {
    num: '02',
    type: 'Full-Stack Web App',
    title: 'Face Detection Music System',
    desc: 'A responsive React.js application that recommends music in real time based on facial-recognition input, integrating multiple REST APIs for fast, interactive recommendations.',
    outcomes: [
      'Engineered a fully responsive React.js interface, boosting UI/UX quality and page load speed by 30%',
      'Integrated 5 REST APIs to power real-time facial-recognition-based music recommendations',
      'Cut data-retrieval latency, increasing overall page interactivity',
      'Built a reusable component architecture to simplify future feature additions',
    ],
    tech: ['React.js', 'JavaScript (ES6+)', 'REST APIs', 'CSS3', 'Framer Motion'],
    revealClass: 'reveal-right',
    links: {
      live: 'https://mood-melodies-pi.vercel.app',
      github: 'https://github.com/chandansharma07/mood-melodies',
    },
  },
  {
    num: '03',
    type: 'Backend Project',
    title: 'CommerceCore API',
    desc: 'A backend-only REST API for an e-commerce system, using MySQL for transactional data (orders, payments) and MongoDB for a flexible product catalog, following a layered routes-services-repositories architecture.',
    outcomes: [
      'Implemented order placement as an ACID-safe MySQL transaction, validating stock and rolling back atomically on failure to prevent inconsistent orders',
      'Added idempotency-key handling to prevent duplicate orders from retried requests',
      'Built JWT authentication with short-lived access tokens and rotating refresh tokens, plus role-based access control',
      'Added Redis caching on product listings with automatic cache invalidation on product updates',
    ],
    tech: ['Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'Jest'],
    revealClass: 'reveal-left',
    links: {
      github: 'https://github.com/chandansharma07/commercecore-api',
    },
  },
]

export default function Projects() {
  const [ref, visible] = useInView(0.1)

  return (
    <section id="projects" className="section projects-section" ref={ref}>
      <div className="container">
        <h2 className={`section-title reveal${visible ? ' visible' : ''}`}>
          Featured <span className="accent">Projects</span>
        </h2>
        <div className="projects-grid">
          {PROJECTS.map(({ num, type, title, desc, outcomes, tech, revealClass, links }) => (
            <div key={num} className={`project-card ${revealClass}${visible ? ' visible' : ''}`}>
              <div className="project-left-panel">
                <div className="project-num">{num}</div>
                <div className="project-type">{type}</div>
              </div>
              <div className="project-right-panel">
                <h3 className="project-title">{title}</h3>
                <p className="project-desc">{desc}</p>
                <div className="project-outcomes">
                  {outcomes.map((o, i) => (
                    <div key={i} className="outcome-item">
                      <span className="outcome-num">{i + 1}</span>
                      <p>{o}</p>
                    </div>
                  ))}
                </div>
                <div className="tech-tags">
                  {tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                </div>
                <div className="project-links" style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {links?.live && (
                    <a href={links.live} target="_blank" rel="noopener" className="btn btn-outline btn-sm">
                      <i className="fas fa-external-link-alt" /> Live Demo
                    </a>
                  )}
                  {links?.github && (
                    <a href={links.github} target="_blank" rel="noopener" className="btn btn-outline btn-sm">
                      <i className="fab fa-github" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
