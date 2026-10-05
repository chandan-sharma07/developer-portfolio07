import useInView from '../hooks/useInView'
import assetUrl from '../assetUrl'

const CERTS = [
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate (2025)',
    provider: 'Oracle',
    providerIcon: 'fas fa-cloud',
    img: '/images/certificates/oracle-ai_page-0001.jpg',
    alt: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    delay: '0s',
  },
  {
    name: 'Cisco Cybersecurity Essentials (Cisco Networking Academy)',
    provider: 'Cisco Networking Academy',
    providerIcon: 'fas fa-shield-alt',
    img: '/images/certificates/cisco_page-0001.jpg',
    alt: 'Cisco Cybersecurity Essentials Certificate',
    delay: '0.1s',
  },
  {
    name: 'TCS iON Career Edge, Young Professional (2025)',
    provider: 'TCS iON',
    providerIcon: 'fas fa-briefcase',
    img: '/images/certificates/tcs-ion_page-0001.jpg',
    alt: 'TCS iON Career Edge Certificate',
    delay: '0.2s',
  },
]

const BADGES = [
  {
    label: 'OCI AI Foundations Associate',
    href: '/images/badges/oracle-Ai_Badge.jpeg',
    delay: '0.1s',
  },
  {
    label: 'DevOps',
    href: '/images/badges/devOps_Badge.jpg',
    delay: '0.2s',
  },
  {
    label: 'Cisco Cybersecurity Essentials',
    href: '/images/badges/cisco_Badge_page-0001.jpg',
    delay: '0.3s',
  },
]

export default function Certifications() {
  const [ref, visible] = useInView(0.1)

  return (
    <section id="certifications" className="section certs-section" ref={ref}>
      <div className="container">
        <h2 className={`section-title reveal${visible ? ' visible' : ''}`}>
          My <span className="accent">Certifications</span>
        </h2>
        <div className="certs-grid">
          {CERTS.map(cert => (
            <div
              key={cert.name}
              className={`cert-card reveal-cascade${visible ? ' visible' : ''}`}
              style={{ '--cascade-delay': cert.delay }}
            >
              <div className="cert-img-wrap">
                <img
                  src={assetUrl(cert.img)}
                  alt={cert.alt}
                  loading="lazy"
                  onError={e => {
                    e.target.style.display = 'none'
                    if (e.target.nextElementSibling) {
                      e.target.nextElementSibling.style.display = 'flex'
                    }
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
            </div>
          ))}
        </div>

        {/* Badges & Digital Credentials */}
        <h3 className={`badges-subtitle reveal${visible ? ' visible' : ''}`}>
          <i className="fas fa-award" aria-hidden="true" /> Badges &amp; Digital Credentials
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
                rel="noopener noreferrer"
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
