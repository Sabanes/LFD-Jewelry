"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../i18n/languageContext";

const logos = [
  {
    name: "LFD Group",
    src: "/LogosLFD/logoblack.png",
    alt: "LFD Group main logo"
  },
  {
    name: "Terzihan",
    src: "/LogosLFD/TERZIHAN.avif",
    alt: "Terzihan logo"
  },
  {
    name: "Montegrappa",
    src: "/LogosLFD/Montegrappa.svg",
    alt: "Montegrappa logo"
  },
  {
    name: "Mimi",
    src: "/LogosLFD/MIMI.avif",
    alt: "Mimi logo"
  },
  {
    name: "D'Orica",
    src: "/LogosLFD/Dorica.jpg",
    alt: "D'Orica logo"
  },
  {
    name: "Borsari Gioielli",
    src: "/LogosLFD/Borsarilogo.png",
    alt: "Borsari Gioielli logo"
  },
  {
    name: "Orchid",
    src: "/LogosLFD/Orchid.avif",
    alt: "Orchid logo"
  },
  {
    name: "Favre Leuba",
    src: "/LogosLFD/favreleubalogo.jpg",
    alt: "Favre Leuba logo"
  },
  {
    name: "Eberhard",
    src: "/LogosLFD/eberhardlogoblue.png",
    alt: "Eberhard logo"
  },
  {
    name: "Daniel Wellington",
    src: "/LogosLFD/wellington.png",
    alt: "Daniel Wellington logo"
  }
];

export default function LogosSection() {
  const containerRef = useRef();
  const { dictionary } = useLanguage();

  useGSAP(
    () => {
      const logoElements = gsap.utils.toArray(".logo-item");

      // Logo elements animation
      gsap.fromTo(logoElements,
        {
          opacity: 0,
          y: 30,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".logos-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section className="logos-section" ref={containerRef}>
      <div className="logos-container">
        <div className="logos-grid">
          {logos.map((logo, index) => (
            <div key={logo.name} className="logo-item">
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}