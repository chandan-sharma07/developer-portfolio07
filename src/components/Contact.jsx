import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import useInView from '../hooks/useInView'

// ── Paste your EmailJS credentials here ──────────────────────────────────────
const SERVICE_ID = 'service_gr4exsa'
const TEMPLATE_ID = 'template_xxjtzdv'
const PUBLIC_KEY = '3vHwwwvJiwYnok-Ks'
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [ref, visible] = useInView(0.1)
  const formRef = useRef(null)

  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('') // '' | 'sending' | 'success' | 'error'

  const handleChange = e => setFields(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success')
        setFields({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus(''), 4000)
      })
      .catch(() => setStatus('error'))
  }

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <div className="container">
        <h2 className={`section-title reveal${visible ? ' visible' : ''}`}>
          Let&apos;s Build Something <span className="accent">Together</span>
        </h2>

        <div className="contact-grid">
          {/* LEFT: Contact Form */}
          <div className={`contact-form-card slide-bl${visible ? ' visible' : ''}`}>
            <h3 className="contact-card-title">Send Me a Message</h3>
            <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
              {[
                { id: 'name', type: 'text', label: 'Full Name', name: 'name' },
                { id: 'email', type: 'email', label: 'Email Address', name: 'email' },
                { id: 'subject', type: 'text', label: 'Subject', name: 'subject' },
              ].map(({ id, type, label, name }) => (
                <div className="form-field" key={id}>
                  <input
                    type={type}
                    id={id}
                    name={name}
                    autoComplete="off"
                    required
                    value={fields[name]}
                    onChange={handleChange}
                  />
                  <label htmlFor={id}>{label}</label>
                  <div className="field-underline" />
                </div>
              ))}
              <div className="form-field">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={fields.message}
                  onChange={handleChange}
                />
                <label htmlFor="message">Message</label>
                <div className="field-underline" />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-shimmer"
                id="send-btn"
                disabled={status === 'sending'}
              >
                <i className="fas fa-paper-plane" />{' '}
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p style={{ color: '#00b4ff', marginTop: '1rem', fontWeight: 600 }}>
                  ✓ Message sent successfully!
                </p>
              )}
              {status === 'error' && (
                <p style={{ color: '#ff4d4d', marginTop: '1rem' }}>
                  ✗ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* RIGHT: Contact Info */}
          <div className={`contact-info-card slide-br${visible ? ' visible' : ''}`}>
            <h3 className="contact-card-title">Contact Information</h3>
            <div className="contact-info-list">
              <div className="contact-row">
                <i className="fas fa-envelope contact-icon" />
                <div>
                  <p className="contact-label">Email</p>
                  <a href="mailto:b.techchandancs@gmail.com" className="contact-val">
                    b.techchandancs@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-row">
                <i className="fas fa-phone contact-icon" />
                <div>
                  <p className="contact-label">Phone</p>
                  <a href="tel:+917079128817" className="contact-val">+91-7079128817</a>
                </div>
              </div>
              <div className="contact-row">
                <i className="fas fa-map-marker-alt contact-icon" />
                <div>
                  <p className="contact-label">Location</p>
                  <p className="contact-val">Bhopal, India</p>
                </div>
              </div>
            </div>
            <div className="contact-socials">
              <a
                href="https://linkedin.com/in/chandansharma07"
                target="_blank"
                rel="noopener"
                className="contact-social-btn"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                href="https://github.com/Jai-ksprogrammer"
                target="_blank"
                rel="noopener"
                className="contact-social-btn"
                aria-label="GitHub"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="mailto:b.techchandancs@gmail.com"
                className="contact-social-btn"
                aria-label="Email"
              >
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
