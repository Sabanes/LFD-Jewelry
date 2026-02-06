"use client";

import { useLanguage } from "../i18n/languageContext";

const logos = [
  {
    name: "Terzihan",
    src: "/LogosLFD/TERZIHAN.avif",
    alt: "Terzihan logo",
  },
  {
    name: "Mirco Visconti",
    src: "/LogosLFD/mircovisconti.svg",
    alt: "Mirco Visconti logo",
  },
  {
    name: "Montegrappa",
    src: "/LogosLFD/Montegrappa.svg",
    alt: "Montegrappa logo",
  },
  {
    name: "Mimi",
    src: "/LogosLFD/MIMI.avif",
    alt: "Mimi logo",
  },
  {
    name: "D'Orica",
    src: "/LogosLFD/Dorica.jpg",
    alt: "D'Orica logo",
  },
  {
    name: "Borsari Gioielli",
    src: "/LogosLFD/Borsarilogo.png",
    alt: "Borsari Gioielli logo",
  },
  {
    name: "Favre Leuba",
    src: "/LogosLFD/favreleubalogo.jpg",
    alt: "Favre Leuba logo",
  },
  {
    name: "Eberhard",
    src: "/LogosLFD/eberhardlogoblue.png",
    alt: "Eberhard logo",
  },
  {
    name: "Daniel Wellington",
    src: "/LogosLFD/wellington.png",
    alt: "Daniel Wellington logo",
  },
];

export default function LogosSection() {
  const { dictionary } = useLanguage();

  return (
    <section className="logos-section">
      <div className="logos-container">
        <div className="logos-grid">
          {logos.map((logo, index) => (
            <div key={logo.name} className="logo-item">
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
