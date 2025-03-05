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
              LFD Group © 2025 — All
                rights reserved.
              </h3>
            </div>
            <div className="footer-col">
              <div className="footer-sub-col"></div>
              <div className="footer-sub-col footer-links">
                <p className="footer-col-header">[ Contactos ]</p>
                <a href="mailto:Info@lfdgroup.net" style={{ textAlign: "right", display: "block" }}>
  <p style={{ margin: 0 }}>Info@lfdgroup.net</p>
                  </a>
                    <a href="tel:+351211330703" style={{ textAlign: "right", display: "block" }}>
                      <p style={{ margin: 0 }}>+351211330703</p>
                    </a>
                    <a href="https://www.google.com/maps/search/?api=1&query=Avenida+da+Liberdade+247A+1250-143+Lisboa+Portugal" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ textAlign: "right", display: "block",}}>
                      <p style={{ margin: 0, }}>
                        Avenida da Liberdade 247A <br />
                        1250-143 Lisboa - Portugal
                      </p>
                  </a>
              </div>
            </div>
          </div>
          <div className="footer-row footer-pattern">
            <p>+</p>
            <p>+</p>
            <p>+</p>
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
