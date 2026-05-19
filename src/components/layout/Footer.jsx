import { Link } from 'react-router-dom';
import Icon from '../Icon.jsx';
import { contactInfo, footerGroups } from '../../data/siteData.js';

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link className="footer-logo" to="/">
            Sri Sai Tours & Travels
          </Link>
          <p>
            Your trusted partner for exploring the cultural and natural heritage of South India
            in comfort and style.
          </p>
          <div className="footer-social" aria-label="Social links">
            <a href={contactInfo.whatsappHref} aria-label="Share Sri Sai Tours">
              <Icon name="Share2" size={19} />
            </a>
            <a href={contactInfo.emailHref} aria-label="Email Sri Sai Tours">
              <Icon name="Mail" size={19} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="footer-bottom__meta">
          <p>© 2024 Sri Sai Tours & Travels. All rights reserved.</p>
          <p className="footer-credit">
            <span>Designed & Developed by</span>{' '}
            <a href="https://www.devlofttech.com/" target="_blank" rel="noreferrer">
              <strong>Devloft Technologies</strong>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
