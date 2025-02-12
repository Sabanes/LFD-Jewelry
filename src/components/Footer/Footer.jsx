"use client";
import Link from "next/link";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer-area"></section>

      <footer>
        <div className="container">
          <div className="footer-row footer-content">
            <div className="footer-col">
              <h3>
              Uma breve viagem para onde a Arte Encontra a Joalharia LFD Jóias © 2025 — All
                rights reserved.
              </h3>
            </div>
            <div className="footer-col">
              <div className="footer-sub-col"></div>
              <div className="footer-sub-col footer-links">
                <p className="footer-col-header">[ * Contactos ]</p>
                <Link href="/" target="_blank">
                  <p>Email</p>
                </Link>
                <Link href="/">
                  <p>tlmv</p>
                </Link>
                <Link href="/">
                  <p>Localização</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-row footer-pattern">
            <p>+</p>
            <p>+</p>
            <p>+</p>
          </div>
          <div className="footer-row">
            <h1>LFD</h1>
          </div>
          <div className="footer-row footer-pattern">
            <p>+</p>
            <p>+</p>
            <p>+</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
