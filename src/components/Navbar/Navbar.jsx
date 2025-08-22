"use client";
import { useState, useEffect } from 'react';
import './Navbar.css';
import { useLanguage } from '../../app/i18n/languageContext';
import { usePageTransition } from '../../hooks/usePageTransition';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Use a try-catch to handle potential errors
  let languageContext = { dictionary: {nav: {}}, locale: 'pt', changeLanguage: () => {} };
  try {
    languageContext = useLanguage();
  } catch (error) {
    console.error("Error using language context:", error);
  }
  
  const { dictionary, locale, changeLanguage } = languageContext;
  const { navigateWithTransition } = usePageTransition();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      if (currentScrollPos > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleNavigation = (href, e) => {
    e.preventDefault();
    closeMenu();
    navigateWithTransition(href);
  };

  // Make sure dictionary.nav exists before trying to access properties
  const nav = dictionary?.nav || {
    home: "Início",
    about: "Sobre Nós",
    brands: "Marcas",
    celebrities: "Celebridades",
    events: "Eventos",
    contacts: "Contactos"
  };

  return (
    <nav className={`navbar ${visible ? 'visible' : 'hidden'} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo" onClick={(e) => handleNavigation('/', e)}>
        </a>
        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={(e) => handleNavigation('/', e)}>
              {nav.home}
            </a>
          </li>
          <li className="nav-item">
            <a href="/sobre-nos" className="nav-link" onClick={(e) => handleNavigation('/sobre-nos', e)}>
              {nav.about}
            </a>
          </li>
          <li className="nav-item">
            <a href="/joias" className="nav-link" onClick={(e) => handleNavigation('/joias', e)}>
              {nav.jewelry}
            </a>
          </li>
          <li className="nav-item">
            <a href="/relogios" className="nav-link" onClick={(e) => handleNavigation('/relogios', e)}>
              {nav.watches}
            </a>
          </li>
          <li className="nav-item">
            <a href="/celebridade" className="nav-link" onClick={(e) => handleNavigation('/celebridade', e)}>
              {nav.celebrities}
            </a>
          </li>
          <li className="nav-item">
            <a href="/evento" className="nav-link" onClick={(e) => handleNavigation('/evento', e)}>
              {nav.events}
            </a>
          </li>
          <li className="nav-item">
            <a href="/contactos" className="nav-link" onClick={(e) => handleNavigation('/contactos', e)}>
              {nav.contacts}
            </a>
          </li>
          <li className="nav-item language-switcher">
            <button 
              onClick={() => changeLanguage('pt')} 
              className={locale === 'pt' ? 'active' : ''}
            >
              PT
            </button>
            <button 
              onClick={() => changeLanguage('en')} 
              className={locale === 'en' ? 'active' : ''}
            >
              EN
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;