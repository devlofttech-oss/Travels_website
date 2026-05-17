import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon.jsx';
import Button from '../ui/Button.jsx';
import { HeaderSkeleton } from '../ui/Skeleton.jsx';
import { contactInfo, navLinks } from '../../data/siteData.js';

function Header({ activePage = 'Home', loading = false }) {
  const [isOpen, setIsOpen] = useState(false);

  if (loading) {
    return (
      <header className="site-header">
        <div className="container">
          <HeaderSkeleton />
        </div>
      </header>
    );
  }

  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Primary navigation">
        <NavLink className="nav__brand" to="/" aria-label="Sri Sai Tours & Travels home">
          Sri Sai Tours & Travels
        </NavLink>

        <div className="nav__links" id="primary-navigation">
          {navLinks.map((link) => (
            <NavLink
              className={({ isActive }) =>
                `nav__link ${isActive || link.label === activePage ? 'is-active' : ''}`
              }
              end={link.href === '/'}
              key={link.label}
              to={link.href}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="nav__actions">
          <a className="icon-button nav__whatsapp" href={contactInfo.whatsappHref} aria-label="Chat with us">
            <Icon name="MessageCircle" size={20} />
          </a>
          <Button href={contactInfo.whatsappHref} className="nav__cta">
            WhatsApp
          </Button>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="icon-button nav__menu"
            onClick={() => setIsOpen((value) => !value)}
            type="button"
          >
            <Icon name={isOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </nav>

      <div className={`mobile-nav ${isOpen ? 'is-open' : ''}`} id="mobile-navigation">
        {navLinks.map((link) => (
          <NavLink
            className={({ isActive }) =>
              isActive || link.label === activePage ? 'is-active' : ''
            }
            end={link.href === '/'}
            key={link.label}
            onClick={() => setIsOpen(false)}
            to={link.href}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}

export default Header;
