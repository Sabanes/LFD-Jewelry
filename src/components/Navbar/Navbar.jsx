"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import dynamic from "next/dynamic";

import "./Navbar.css";

const MusicToggle = dynamic(() => import("../MusicToggle/MusicToggle"), {
  ssr: false,
});

const Navbar = () => {
  const [time, setTime] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";



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
    <div className="navbar">
      <div className="navbar-col">
        <div className="navbar-sub-col logo">
          <Link href="/">
            <h3>LFD JÓIAS</h3>
          </Link>
        </div>

      </div>
      <div className="navbar-col">
        <div className="navbar-sub-col nav-items">
          <a href="#intro" onClick={(e) => handleNavigation(e, "intro")}>
            <p>Sobre nos</p>
          </a>
          <a
            href="#case-studies"
            onClick={(e) => handleNavigation(e, "case-studies")}
          >
            <p>Marcas</p>
          </a>
          <a href="#works" onClick={(e) => handleNavigation(e, "works")}>
            <p>Valores</p>
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
