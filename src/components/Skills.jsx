import useInView from '../hooks/useInView'

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    icon: 'fas fa-code',
    items: [
      'React.js',
      'Redux Toolkit',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
    ],
  },
  {
    category: 'Backend & APIs',
    icon: 'fas fa-server',
    items: [
      'Node.js',
      'Express.js',
      'REST API Design',
      'JWT Authentication',
      'Rate Limiting',
    ],
  },
  {
    category: 'Databases',
    icon: 'fas fa-database',
    items: [
      'MySQL (Sequelize)',
      'MongoDB (Mongoose)',
      'Redis',
    ],
  },
  {
    category: 'Tools & Practices',
    icon: 'fas fa-tools',
    items: [
      'Git',
      'GitHub',
      'Docker',
      'Swagger/OpenAPI',
      'Winston',
      'Jest',
      'Supertest',
    ],
  },
]

export default function Skills() {
  const [ref, visible] = useInView(0.1)

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="container">
        <h2 className={`section-title reveal${visible ? ' visible' : ''}`}>
          Technical <span className="accent">Skills</span>
        </h2>
        <div className="skills-grid">
          {SKILL_GROUPS.map(({ category, icon, items }, idx) => (
            <div
              key={category}
              className={`skill-group-card reveal-cascade${visible ? ' visible' : ''}`}
              style={{ '--cascade-delay': `${idx * 0.1}s` }}
            >
              <div className="skill-group-header">
                <i className={`${icon} skill-group-icon`} />
                <h3 className="skill-group-title">{category}</h3>
              </div>
              <ul className="skill-tag-list">
                {items.map(skill => (
                  <li key={skill} className="skill-tag-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
