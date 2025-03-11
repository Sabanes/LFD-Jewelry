"use client";
import "./abous.css";
import { useLanguage } from '../i18n/languageContext';

const AboutUs = () => {
  const { dictionary } = useLanguage();

  return (
    <section className="about" id="Sobre-nos">
      <div className="about-overlay">
        <div className="about-content">
          <p className="about-text">{dictionary.about.text}</p>
        </div>
      </div>
      <img
        className="about-image"
        src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/igpm0fgjemyoihwpb9bf"
        alt="Example image showcasing our work"
      />
    </section>
  );
};

export default AboutUs;