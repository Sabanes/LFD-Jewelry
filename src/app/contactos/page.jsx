"use client";
import "./contacts.css";
import { useLanguage } from '../i18n/languageContext';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const { dictionary } = useLanguage();
  const formRef = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        alert("Message sent!");
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="contact-page">
      {/* Hero Section with Background Image */}
      <section className="contact-hero">
        <div className="hero-image">
          <img 
            src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/zbfdqel498wdmcxx2wqm" 
            alt="LFD Group luxury jewelry workspace"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="contact-title">
            {dictionary.contact?.getInTouch || "Contactos"}
          </h1>

        </div>
      </section>

      {/* Main Content */}
      <section className="contact-content">
        <div className="contact-container">
          
          {/* Contact Information */}
          <div className="contact-info-section">
            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="info-content">
                <h3>{dictionary.contact?.location || "Localização"}</h3>
                <a 
                  href="https://maps.app.goo.gl/YjYXC9P7K6Yj17e76"
                  target="_blank"
                  rel="noreferrer"
                  className="info-link"
                >
                  Avenida da Liberdade 247A<br />
                  1250-143 Lisboa - Portugal
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="info-content">
                <h3>{dictionary.contact?.email || "Email"}</h3>
                <a href="mailto:info@lfdgroup.net" className="info-link">
                  info@lfdgroup.net
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="info-content">
                <h3>{dictionary.contact?.phone || "Telefone"}</h3>
                <a href="tel:+351211330703" className="info-link">
                  +351 211-330-703
                </a>
                <small className="disclaimer">
                  {dictionary.contact?.callDisclaimer || "*chamada para rede fixa nacional"}
                </small>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-header">
              <h2>{dictionary.contact?.formTitle || "Envie-nos uma mensagem"}</h2>
              <p>{dictionary.contact?.formDescription || "Teremos todo o prazer em responder às suas questões sobre as nossas marcas exclusivas."}</p>
            </div>
            
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="user_name"
                  placeholder={dictionary.contact?.name || "Nome"}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="user_email"
                  placeholder={dictionary.contact?.email || "Email"}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder={dictionary.contact?.message || "Mensagem"}
                  rows="5"
                  required
                  className="form-textarea"
                ></textarea>
              </div>
              
              <button type="submit" className="form-submit">
                <span>{dictionary.contact?.submit || "Enviar"}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
                </svg>
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}