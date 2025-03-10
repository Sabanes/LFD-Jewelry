"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import './Navbar.css';
import { useLanguage } from '../../app/i18n/languageContext';

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
        <Link href="/" className="navbar-logo">
        </Link>
        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link href="/" className="nav-link" onClick={closeMenu}>
              {nav.home}
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/sobre-nos" className="nav-link" onClick={closeMenu}>
              {nav.about}
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/marcas" className="nav-link" onClick={closeMenu}>
              {nav.brands}
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/celebridades" className="nav-link" onClick={closeMenu}>
              {nav.celebrities}
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/eventos" className="nav-link" onClick={closeMenu}>
              {nav.events}
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contactos" className="nav-link" onClick={closeMenu}>
              {nav.contacts}
            </Link>
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