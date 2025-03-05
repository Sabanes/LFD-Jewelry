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
const videoLinks = [
  "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/a69tzxqpxi1kjdgehuox",
  "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/jpeutus83ylybuo56icr",
  "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/mprbgyt9ihqrr1cg1res",
  "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/alxzoyzlh9ayseglffwq",
  "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/bgarhsmhncewvfvlu8ut",
  "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/vw0n05bcal8ynmp9d8gw",
];

const EventosSection = () => {
  return (
    <section className="eventos-section">
      <h2 style={{ paddingTop: "4rem" }}>Eventos</h2>
      <div className="eventos-grid">
        {videoLinks.map((video, index) => (
          <div className="evento" key={index}>
            <video
              src={video}
              muted
              loop
              autoPlay
              playsInline
              className="video-element"
            />
          </div>
        ))}
      </div>
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
        <h1 style={{ marginTop: "4rem" }}>Celebridades</h1>       
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
      </div>
    </ReactLenis>
  );
};

export default CelebritiesPage;