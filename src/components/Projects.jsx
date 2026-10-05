import useInView from '../hooks/useInView'

const PROJECTS = [
  {
    num: '01',
    type: 'Frontend Project',
    title: 'Apex Gurukul School Website',
    desc: 'A fully responsive 7-page school website built with React.js, with client-side routing and a reusable component-based UI.',
    outcomes: [
      'Delivered a 7-page website with client-side routing using React Router DOM',
      'Built a reusable, component-based UI system with React-Bootstrap, consistent across all breakpoints',
      'Deployed on Vercel',
    ],
    tech: ['React.js', 'React Router DOM', 'React-Bootstrap'],
    revealClass: 'reveal-left',
    links: {
      live: 'https://ninecodedot.vercel.app',
      github: 'https://github.com/chandansharma07/apex-gurukul',
    },
  },
  {
    num: '02',
    type: 'Frontend + API Project',
    title: 'Face Detection Music System',
    desc: 'A responsive React.js application that recommends music based on facial-expression input, with REST API endpoints for matching tracks and JWT-based user authentication.',
    outcomes: [
      'Designed REST API endpoints to process real-time facial-expression data and return matched tracks',
      'Implemented JWT-based authentication covering login and signup flows for personalized, session-based access',
      'Built a responsive React.js interface with Framer Motion animations',
    ],
    tech: ['React.js', 'REST APIs', 'JWT', 'Framer Motion'],
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
    desc: 'A production-style backend-only REST API for a mini e-commerce system, built with a layered routes-services-repositories architecture across two databases: MySQL for transactional data (orders, payments) and MongoDB for a flexible product catalog, with Redis caching, JWT auth, and integration tests.',
    outcomes: [
      'Designed a dual-database architecture: MySQL for relational order/payment integrity, MongoDB for a flexible product catalog with pagination, filtering, and text search',
      'Implemented order placement as an ACID-safe MySQL transaction, validating stock and rolling back atomically on failure to prevent partial or inconsistent orders',
      'Added idempotency-key handling on the order endpoint to prevent duplicate orders from retried or duplicate requests',
      'Built JWT authentication with short-lived access tokens, rotating refresh tokens, and role-based access control for admin and customer routes',
      'Added a review and rating system with automatic average-rating recalculation on every review add, update, or delete',
      'Added Redis caching on product listings with query-based cache keys and automatic invalidation on product updates',
      'Hardened the API with centralized error handling, Zod request validation, rate limiting, and structured Winston logging with per-request tracing',
      'Wrote integration tests with Jest and Supertest covering auth flows, transaction rollback, idempotency, and concurrent order placement; documented all endpoints with Swagger and containerized the full stack with Docker Compose',
    ],
    tech: ['Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Redis', 'JWT', 'Docker', 'Jest'],
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
                <div className="project-outcomes-wrap">
                  <h4 className="project-outcomes-heading">Key Implementation &amp; Outcomes</h4>
                  <ul className="project-outcomes">
                    {outcomes.map((o, i) => (
                      <li key={i} className="outcome-item">
                        <span className="outcome-bullet" aria-hidden="true" />
                        <span className="outcome-text">{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tech-tags">
                  {tech.map(t => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {links?.live && (
                    <a
                      href={links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      <i className="fas fa-external-link-alt" /> Live Demo
                    </a>
                  )}
                  {links?.github && (
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                    >
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
