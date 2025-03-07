"use client";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer-area"></section>
      <footer>
        <div className="container">
          <div className="footer-row footer-content">
            <div className="footer-col">
              <span className="sizes">
                LFD Group © 2025 <br />
                — All rights reserved.
              </span>
            </div>
            <div className="footer-col">
             
              <div className="footer-sub-col footer-links rights">
                <p className="footer-col-header">[ Contactos ]</p>
                <a href="mailto:Info@lfdgroup.net">
                  <p style={{ margin: 0 }}>Info@lfdgroup.net</p>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Avenida+da+Liberdade+247A+1250-143+Lisboa+Portugal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    Avenida da Liberdade 247A <br className="none" />
                    1250-143 Lisboa
                  </p>
                </a>
                <a className="wraper" href="tel:+351211330703">
                  <p style={{ margin: 0 }}>
                    +351211330703<span className="textSmall">*</span> <br />{" "}
                    <span className="textSmaller">
                      *Chamada para rede fixa nacional
                    </span>
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
        </div>
      </footer>
    </>
  );
};

export default Footer;