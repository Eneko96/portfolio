import { handleDownloadResumee } from '../../../utils/downloadCV'
import './styles.css'

export const Footer = () => {
  return (
    <footer className="footer-container">
      <nav className="footer-nav">
        <a
          href="https://www.linkedin.com/in/i%C3%B1igo-moreno-ramos-175928167/"
          target="_blank"
          className="footer-nav-anchor"
          role="link"
          rel="noreferrer"
        >
          <small>Linkedin</small>
        </a>
        <a
          className="footer-nav-anchor"
          onClick={handleDownloadResumee}
          href="#"
        >
          <small style={{ cursor: 'pointer' }}>Download CV</small>
        </a>
        <a
          href="https://github.com/Eneko96"
          target="_blank"
          className="footer-nav-anchor"
          role="link"
          rel="noreferrer"
        >
          <small>Github</small>
        </a>
        <a className="footer-nav-anchor" href="tel:0852049402">
          <small>085 204 9402</small>
        </a>
      </nav>
      <div className="footer-name">
        <small>Iñigo Moreno 2022</small>
      </div>
    </footer>
  )
}
