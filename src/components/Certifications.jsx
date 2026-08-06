import { useRef } from 'react'
import useInView from '../hooks/useInView'
import assetUrl from '../assetUrl'

const CERTS = [
  {
    img: '/images/certificates/cisco_page-0001.jpg',
    alt: 'Cisco Cybersecurity Essentials',
    providerIcon: 'fas fa-shield-alt',
    provider: 'Cisco Networking Academy',
    name: 'Cisco Cybersecurity Essentials',
    delay: '0s',
  },
  {
    img: '/images/certificates/oracle-ai_page-0001.jpg',
    alt: 'Oracle AI Certification',
    providerIcon: 'fas fa-cloud',
    provider: 'Oracle',
    name: 'OCI Oracle AI Certification',
    delay: '0.15s',
  },
  {
    img: '/images/certificates/tcs-ion_page-0001.jpg',
    alt: 'TCS iON Certification',
    providerIcon: 'fas fa-briefcase',
    provider: 'TCS iON',
    name: 'TCS iON Certification',
    delay: '0.3s',
  },
  {
    img: '/images/certificates/devOps_page-0001.jpg',
    alt: 'DevOps Certification',
    providerIcon: 'fas fa-code-branch',
    provider: 'DevOps',
    name: 'DevOps Certification',
    delay: '0.45s',
  },
]

const BADGES = [
  {
    label: 'OCI AI Foundations Associate',
    href: '/images/badges/oracle-Ai_Badge.jpeg',
    delay: '0s',
  },
  {
    label: 'DevOps',
    href: '/images/badges/devOps_Badge.jpg',
    delay: '0.1s',
  },
  {
    label: 'Cisco Cybersecurity Essentials',
    href: '/images/badges/cisco_Badge_page-0001.jpg',
    delay: '0.2s',
  },
]

function TiltCard({ children, className, style }) {
  const cardRef = useRef(null)

  const handleMouseMove = e => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotX = ((y - cy) / cy) * -4
    const rotY = ((x - cx) / cx) * 4
    card.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = ''
  }

  return (
    <div
      ref={cardRef}
      className={className}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

export default function Certifications() {
  const [ref, visible] = useInView(0.1)

  return (
    <section id="certifications" className="section certs-section" ref={ref}>
      <div className="container">
        <h2 className={`section-title reveal${visible ? ' visible' : ''}`}>
          My <span className="accent">Certifications</span>
        </h2>

        {/* Certificates Grid */}
        <div className="certs-grid">
          {CERTS.map(cert => (
            <TiltCard
              key={cert.name}
              className={`cert-card tilt-card reveal-cascade${visible ? ' visible' : ''}`}
              style={{ '--cascade-delay': cert.delay }}
            >
              <div className="cert-img-wrap">
                <img
                  src={assetUrl(cert.img)}
                  alt={cert.alt}
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                />
                <div className="cert-img-placeholder" style={{ display: 'none' }}>
                  <i className="fas fa-certificate" />
                </div>
              </div>
              <div className="cert-body">
                <span className="cert-provider-badge">
                  <i className={cert.providerIcon} /> {cert.provider}
                </span>
                <h3 className="cert-name">{cert.name}</h3>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Badges */}
        <h3 className={`badges-subtitle reveal${visible ? ' visible' : ''}`}>
          <i className="fas fa-award" /> Badges &amp; Digital Credentials
        </h3>
        <div className="badges-grid">
          {BADGES.map(badge => (
            <div
              key={badge.label}
              className={`badge-card reveal-cascade${visible ? ' visible' : ''}`}
              style={{ '--cascade-delay': badge.delay }}
            >
              <p className="badge-label">{badge.label}</p>
              <a
                href={assetUrl(badge.href)}
                target="_blank"
                rel="noopener"
                className="btn btn-sm btn-outline badge-view-btn"
              >
                <i className="fas fa-external-link-alt" /> View Badge
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
