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
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,  // pulled from .env.local
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // pulled from .env.local
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY   // pulled from .env.local
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
    <div className="container">
      <div className="contact-section">
        <div className="contact-details col">
          <p className="hide">{dictionary.contact.intro}</p>
          <div className="contact-info">
            <div className="email item">
              <h3>{dictionary.contact.getInTouch}</h3>
              <a className="white" href="emailto:info@lfdgroup.net">Info@lfdgroup.net</a>
              <br />
              <a className="white" href="tel:+351211330703">+351 211-330-703 *</a>
              <small className="sub-disclaimer">
                {dictionary.contact.callDisclaimer}
              </small>
            </div>
            <div className="address item">
              <h3>{dictionary.contact.location}</h3>
              <a
                className="white"
                href="https://maps.app.goo.gl/YjYXC9P7K6Yj17e76"
                target="_blank"
                rel="noreferrer"
              >
                Avenida da Liberdade 247A 1250-143 Lisboa - Portugal
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form col">
          <form ref={formRef} onSubmit={sendEmail} className="wrapper">
            <div className="row">
              <input
                type="text"
                name="user_name"
                placeholder={dictionary.contact.name}
                required
              />
            </div>
            <div className="row">
              <input
                type="email"
                name="user_email"
                placeholder={dictionary.contact.email}
                required
              />
            </div>
            <div className="row">
              <textarea
                name="message"
                placeholder={dictionary.contact.message}
                rows="5"
                id="message"
                required
              ></textarea>
            </div>
            <div className="row submit">
              <button className="btnsend" type="submit">
                {dictionary.contact.submit}
              </button>
              <div className="send-icon">
                <ion-icon name="arrow-forward-sharp"></ion-icon>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}