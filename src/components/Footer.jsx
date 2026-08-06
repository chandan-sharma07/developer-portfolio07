export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-name">Chandan Kumar Sharma</p>
        <p className="footer-tagline">Building full-stack products, one deploy at a time.</p>
        <div className="footer-socials">
          <a href="https://github.com/Jai-ksprogrammer" target="_blank" rel="noopener" aria-label="GitHub">
            <i className="fab fa-github" />
          </a>
          <a href="https://linkedin.com/in/chandansharma07" target="_blank" rel="noopener" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="mailto:b.techchandancs@gmail.com" aria-label="Email">
            <i className="fas fa-envelope" />
          </a>
        </div>
        <p className="footer-copy">
          &copy; {year} Chandan Kumar Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
