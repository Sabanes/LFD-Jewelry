"use client";
import React from "react";
import Image from "next/image";
import { ReactLenis } from "@studio-freight/react-lenis";

const celebrities = [
  { name: "MADONNA", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/cniv4w0qhjssd3aayuf9" },
  { name: "JENNIFER LOPEZ", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/uwzmyksebtqawfb54d7g" },
  { name: "MARIAH CAREY", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/yhqhgtryutcxs2pbjmir" },
  { name: "RIHANNA", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/ee3pje8ia5exc2rgavjb" },
  { name: "ESRA BİLGİÇ", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/sce72vcvpr4wxtnmy2t2" },
  { name: "BİRCE AKALAY", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/k0oynadiczxtmm0jok3p" },
  { name: "MERVE DİZDAR", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/zwwwqnqalen8youi3li2" },
  { name: "BURÇİN TERZİOĞLU", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/ynop3qvqqi5xeleow0fv" },
  { name: "HANDE ERÇEL", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/bomtkffq2jmkyvgckjm3" },
  { name: "PINAR DENİZ", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/zpdn9od280qab2qiveoj" },
  { name: "NESLİHAN ATAGÜL", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/uzwaneiengrp21zntbab" },
  { name: "ELLIE THUMANN", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/lyik8lvhbdu0bgwpqmxr" },
  { name: "KERRY WASHINGTON", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/vnmhijguykhtcxri6enc" },
  { name: "LANA CONDOR", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/hlnehuerocs3qntnuy0o" },
  { name: "LUCY LIU", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/iesp8lzqcb8gatcqzmok" },
  { name: "RAYA ABIRACHED", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/oogqgfhctwhuicmsmtdt" },
  { name: "NİLPERİ ŞAHİNKAYA", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/demabl3gnl4zpwqukypi" },
  { name: "BEGÜM KÜTÜK", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/r5dt0lcwp0rv4qow7hpf" },
  { name: "SEDEF AVCI", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/osutwxahzgksrocfzufa" },
  { name: "GÜLCAN ARSLAN", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/z862uibmfm5gruph8xy5" },
  { name: "IVA LAMARAO", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/cr3xqhaih23uii6acsn0" },
  { name: "CLAUDIA BORGES", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/johl25blgwszwl7whp5i" },
  { name: "HANNAH VAN DER WESTHUYSEN", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/zp6tmowwsu5631qw9cjb" },
  { name: "ANOK YAI", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/kwjhpj3mv95akqnempg1" },
  { name: "AMANDA HOLDEN", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/ez32fft25vdz8dvyricb" },
  { name: "MS BANKS", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/nprotrk8et6grosams3w" },
  { name: "ANA RITA CLARA", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/vau9otnn6dil0vzv9ely" },
  { name: "WINNIE HARLOW", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/jtptyt3s7vavfvqhzkch" },
  { name: "OPRAH", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/cqg9oj6xytneycexvqy9" },
  { name: "TRACE ELLIS ROSS", image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/k5jhuoc3c6dhhahrschc" },
];

const EventosSection = () => {
  return (
    <section className="eventos-section">
      <h2>Eventos</h2>
      <div className="eventos-container">
        {/* First event: text on left (desktop), video on right */}
        <div className="evento">
          <div className="text-container left">
            <p>
              Perdeste a apresentação da nova coleção das joias Terzihan, que contou com a presença de várias figuras públicas? Se não tiveste a oportunidade de estar presente, não te preocupes, preparámos algo especial apenas para ti! Assiste ao vídeo exclusivo que captura cada detalhe desta experiência!
            </p>
          </div>
          <div className="video-container">
            <video
              src="https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/d28adjbn6wt0uyil93ii"
              controls
              muted
              loop
              autoPlay
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
        {/* Second event: video on left (desktop), text on right */}
        <div className="evento">
          <div className="video-container">
            <video
              src="https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/vh3gpn5usysswr9rul1k"
              controls
              muted
              loop
              autoPlay
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="text-container right">
            <p>
              15 de setembro de 2022: A TERZIHAN apresenta a sua nova coleção no misterioso e neoclássico Teatro Thalia, em Lisboa. Construído em 1825, o Teatro Thalia tem uma história complexa que se estende por quase 200 anos.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .eventos-section {
          padding: 0.3rem;
          background-color: var(--background);
          color: var(--foreground);
          margin-top: 3rem;
        }
        .eventos-section h2 {
          text-align: center;
          margin-bottom: 2rem;
        }
        .eventos-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .evento {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .video-container {
          flex: 1 1 300px;
          position: relative;
          width: 100%;
          max-width: 400px;
          aspect-ratio: 9 / 16;
        }
        .text-container {
          flex: 1 1 300px;
          padding: 1rem;
        }
        /* Desktop ordering */
        .text-container.left {
          order: -1;
        }
        .text-container.right {
          order: 1;
        }
        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .evento {
            flex-direction: column;
            align-items: center;
          }
          .video-container {
            order: 1;
          }
          .text-container {
            order: 2;
            max-width: 600px;
            width: 100%;
            margin: 1rem auto 0 auto;
            text-align: center;
          }
          .text-container.left {
            order: 2;
          }
          .text-container.right {
            order: 2;
          }
        }
      `}</style>
    </section>
  );
};

const CelebritiesPage = () => {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
      }}
    >
      <div className="container celebrities-page">
        <header className="header">
          <h1>Celebridades</h1>
        </header>
        <div className="grid">
          {celebrities.map((celeb, index) => (
            <div key={index} className="card">
              <div className="img-container">
                <Image
                  src={celeb.image}
                  alt={celeb.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="overlay">
                <h2 className="overlay-title">{celeb.name}</h2>
              </div>
            </div>
          ))}
        </div>
        {/* Eventos Section */}
        <EventosSection />
        <style jsx>{`
          .celebrities-page {
            background: var(--background);
            min-height: 100vh;
            padding: 2rem 0;
          }
          .header {
            text-align: center;
            margin-bottom: 3rem;
          }
          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
          }
          .card {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: transform 0.3s ease;
          }
          .card:hover {
            transform: scale(1.03);
          }
          .img-container {
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 100%;
          }
          .overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.6);
            color: #fff;
            padding: 1rem;
            text-align: center;
            transition: opacity 0.3s ease;
          }
          .overlay-title {
            margin: 0;
            font-size: 1.2rem;
            letter-spacing: 0.1rem;
          }
          /* On mobile devices, set card width to 80% */
          @media (max-width: 768px) {
            .card {
              width: 80%;
              margin: 0 auto;
            }
          }
        `}</style>
      </div>
    </ReactLenis>
  );
};

export default CelebritiesPage;