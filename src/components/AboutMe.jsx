import useInView from '../hooks/useInView'

export default function AboutMe() {
  const [ref, visible] = useInView(0.1)

  return (
    <section id="about" className="section about-section" ref={ref}>
      <div className="container">
        <div className={`about-single-wrap reveal${visible ? ' visible' : ''}`}>
          <h2 className="section-title">
            About <span className="accent">Me</span>
          </h2>
          <div className="about-single-card">
            <p className="about-lead-text">
              I focus on backend engineering and enjoy designing APIs, database schemas and authentication flows, and I build the React frontends for my projects too.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
