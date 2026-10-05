import useInView from '../hooks/useInView'

export default function Contact() {
  const [ref, visible] = useInView(0.1)

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <div className="container">
        <h2 className={`section-title reveal${visible ? ' visible' : ''}`}>
          Get In <span className="accent">Touch</span>
        </h2>
        <p className={`section-subtitle reveal${visible ? ' visible' : ''}`}>
          Feel free to reach out for opportunities or collaboration.
        </p>

        <div className={`contact-wrapper reveal-cascade${visible ? ' visible' : ''}`}>
          <div className="contact-info-card">
            <h3 className="contact-card-title">Contact Information</h3>
            <div className="contact-info-list">
              <div className="contact-row">
                <i className="fas fa-envelope contact-icon" aria-hidden="true" />
                <div>
                  <p className="contact-label">Email</p>
                  <a href="mailto:b.techchandancs@gmail.com" className="contact-val">
                    b.techchandancs@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-row">
                <i className="fab fa-linkedin-in contact-icon" aria-hidden="true" />
                <div>
                  <p className="contact-label">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/chandansharma07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-val"
                  >
                    linkedin.com/in/chandansharma07
                  </a>
                </div>
              </div>

              <div className="contact-row">
                <i className="fab fa-github contact-icon" aria-hidden="true" />
                <div>
                  <p className="contact-label">GitHub</p>
                  <a
                    href="https://github.com/chandansharma07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-val"
                  >
                    github.com/chandansharma07
                  </a>
                </div>
              </div>

              <div className="contact-row">
                <i className="fas fa-phone contact-icon" aria-hidden="true" />
                <div>
                  <p className="contact-label">Phone</p>
                  <a href="tel:+917079128817" className="contact-val">
                    +91-7079128817
                  </a>
                </div>
              </div>

              <div className="contact-row">
                <i className="fas fa-map-marker-alt contact-icon" aria-hidden="true" />
                <div>
                  <p className="contact-label">Location</p>
                  <p className="contact-val">Bhopal, India</p>
                </div>
              </div>
            </div>

            <div className="contact-actions">
              <a href="mailto:b.techchandancs@gmail.com" className="btn btn-primary">
                <i className="fas fa-paper-plane" /> Send an Email
              </a>
              <a
                href="https://linkedin.com/in/chandansharma07"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <i className="fab fa-linkedin-in" /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
