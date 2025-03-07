"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import "./Navbar.css";

const MusicToggle = dynamic(() => import("../MusicToggle/MusicToggle"), {
  ssr: false,
});

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lenisReady, setLenisReady] = useState(false);
  const prevScrollPos = useRef(
    typeof window !== "undefined" ? window.pageYOffset : 0
  );
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos.current > currentScrollPos) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      prevScrollPos.current = currentScrollPos;
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Check if Lenis is available and set state when it's ready
    const checkLenis = () => {
      if (window.lenis) {
        setLenisReady(true);
      } else {
        setTimeout(checkLenis, 100);
      }
    };
    
    checkLenis();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // When navigating from another page to homepage, handle hash navigation
  useEffect(() => {
    if (isHomePage && lenisReady) {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element && window.lenis) {
            window.lenis.scrollTo(element, {
              offset: 0,
              immediate: false,
              duration: 1.5,
            });
          }
        }, 300); // Small delay to ensure everything is loaded
      }
    }
  }, [isHomePage, lenisReady]);

  const handleNavigation = (event, sectionId) => {
    event.preventDefault();
    
    if (isHomePage) {
      if (window.lenis) {
        const element = document.getElementById(sectionId);
        if (element) {
          window.lenis.scrollTo(element, {
            offset: 0,
            immediate: false,
            duration: 1.5,
          });
        }
      }
    } else {
      router.push(`/#${sectionId}`);
    }
    
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar ${isVisible ? "navbar--visible" : "navbar--hidden"}`}>
      <div className="navbar-content">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`hamburger-icon ${menuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`nav-container ${menuOpen ? "open" : ""}`}>
          <div className="nav-links">
            <a href="#Início" onClick={(e) => handleNavigation(e, "Início")}>
              <p>Início</p>
            </a>
            <a href="#Sobre-nos" onClick={(e) => handleNavigation(e, "Sobre-nos")}>
              <p>Sobre nos</p>
            </a>
            <a href="#Marcas" onClick={(e) => handleNavigation(e, "Marcas")}>
              <p>Marcas</p>
            </a>
            <a href="/Celebridades">
              <p>Celebridades</p>
            </a>
            <a href="/Eventos">
              <p>Eventos</p>
            </a>
          </div>
          <div className="music-toggle-wrapper">
            <MusicToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;