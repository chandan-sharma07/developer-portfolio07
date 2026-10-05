import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import useInView from '../hooks/useInView'

// ── EmailJS credentials ──────────────────────────────────────────────────────
const SERVICE_ID = 'service_gr4exsa'
const TEMPLATE_ID = 'template_xxjtzdv'
const PUBLIC_KEY = '3vHwwwvJiwYnok-Ks'
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [ref, visible] = useInView(0.1)
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('') // '' | 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const templateParams = {
      name: formData.name,
      from_name: formData.name,
      user_name: formData.name,
      email: formData.email,
      from_email: formData.email,
      user_email: formData.email,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Chandan Kumar Sharma',
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(''), 6000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setErrorMsg(err?.text || 'Failed to send message via EmailJS. Please try again.')
    }
  }

  const getFallbackMailto = () => {
    const subj = formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim() || 'Visitor'}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    return `mailto:b.techchandancs@gmail.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <div className="container">
        <h2 className={`section-title reveal${visible ? ' visible' : ''}`}>
          Get In <span className="accent">Touch</span>
        </h2>
        <p className={`section-subtitle reveal${visible ? ' visible' : ''}`}>
          Feel free to reach out for opportunities or collaboration.
        </p>

        <div className={`contact-grid reveal-cascade${visible ? ' visible' : ''}`}>
          {/* LEFT: Contact Form */}
          <div className="contact-form-card">
            <h3 className="contact-card-title">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  placeholder="e.g. Alex Smith"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  SUBJECT
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  placeholder="e.g. Backend Developer Role"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary contact-submit-btn"
                disabled={status === 'sending'}
              >
                <i
                  className={`fas ${status === 'sending' ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}
                  aria-hidden="true"
                />{' '}
                {status === 'sending' ? 'Sending Message…' : 'Send via Email'}
              </button>

              {status === 'success' && (
                <p className="contact-status-msg contact-status-success">
                  ✓ Message sent successfully! I will get back to you soon.
                </p>
              )}

              {status === 'error' && (
                <div className="contact-status-error-wrap">
                  <p className="contact-status-msg contact-status-error">
                    ✗ {errorMsg}
                  </p>
                  <a href={getFallbackMailto()} className="contact-mailto-fallback">
                    Click here to send directly via your email app &rarr;
                  </a>
                </div>
              )}
            </form>
          </div>

          {/* RIGHT: Contact Information */}
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
              <a
                href="mailto:b.techchandancs@gmail.com"
                className="btn btn-outline"
                aria-label="Send email directly"
              >
                <i className="fas fa-envelope" aria-hidden="true" /> Direct Email
              </a>
              <a
                href="https://linkedin.com/in/chandansharma07"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                aria-label="Connect on LinkedIn"
              >
                <i className="fab fa-linkedin-in" aria-hidden="true" /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
