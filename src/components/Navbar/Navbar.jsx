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
  const prevScrollPos = useRef(
    typeof window !== "undefined" ? window.pageYOffset : 0
  );
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // If previous scroll position is greater than current, user is scrolling up.
      if (prevScrollPos.current > currentScrollPos) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (event, sectionId) => {
    event.preventDefault();

    if (isHomePage) {
      const lenis = window.lenis;
      if (lenis) {
        const element = document.getElementById(sectionId);
        if (element) {
          lenis.scrollTo(element, {
            offset: 0,
            immediate: false,
            duration: 1.5,
          });
        }
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <div className={`navbar ${isVisible ? "navbar--visible" : "navbar--hidden"}`}>
      <div className="navbar-col">
        <div className="navbar-sub-col logo">
          <Link href="/">
            <h3>
              LFD <br /> <span>- JÓIAS -</span>
            </h3>
          </Link>
        </div>
      </div>
      <div className="navbar-col">
        <div className="navbar-sub-col nav-items">
          <a href="#Start" onClick={(e) => handleNavigation(e, "Start")}>
            <p>Início</p>
          </a>
          <a href="#intro" onClick={(e) => handleNavigation(e, "intro")}>
            <p>Casa</p>
          </a>
          <a
            href="#case-studies"
            onClick={(e) => handleNavigation(e, "case-studies")}
          >
            <p>Marcas</p>
          </a>
          <a href="/Celebridades">
            <p>
              Eventos &<br /> Celebridades
            </p>
          </a>
        </div>
        <div className="navbar-sub-col music-toggle-wrapper">
          <MusicToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;