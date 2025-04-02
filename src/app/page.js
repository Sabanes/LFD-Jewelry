"use client";

import Head from "next/head";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { carouselItems } from "./marcas/carouselItems";

import "./home.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef();


  // handles carousel slide transitions with clip-path animations
  useGSAP(
    () => {
      if (typeof window === "undefined") return;

      const projects = gsap.utils.toArray(".project");

      ScrollTrigger.create({
        trigger: ".carousel",
        start: "top top",
        end: `+=${window.innerHeight * (projects.length - 1)}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress * (projects.length - 1);
          const currentSlide = Math.floor(progress);
          const slideProgress = progress - currentSlide;

          if (currentSlide < projects.length - 1) {
            gsap.set(projects[currentSlide], {
              clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            });

            const nextSlideProgress = gsap.utils.interpolate(
              "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              slideProgress
            );

            gsap.set(projects[currentSlide + 1], {
              clipPath: nextSlideProgress,
            });
          }

          projects.forEach((project, index) => {
            if (index < currentSlide) {
              gsap.set(project, {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              });
            } else if (index > currentSlide + 1) {
              gsap.set(project, {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              });
            }
          });
        },
      });

      gsap.set(projects[0], {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container }
  );

  return (
    <>
      <Head>
        <title>LFD Group - Luxury Fancy Design</title>
        <meta
          name="description"
          content="LFD Group - Luxury Fancy Design, Lda. is a premier jewelry brand connecting the rich cultural heritage of Lisbon and Istanbul through exquisite craftsmanship."
        />
        <meta
          name="keywords"
          content="LFD, Group, Luxury Jewelry, Lisbon, Istanbul, Terzihan, Dorica, Orchid, Joalharia"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwcebsite.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="LFD Group - Luxury Fancy Design" />
        <meta
          property="og:description"
          content="Explore our exquisite collection that celebrates the fusion of cultures between Lisbon and Istanbul."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/zbfdqel498wdmcxx2wqm"
        />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LFD Group - Luxury Fancy Design" />
        <meta
          name="twitter:description"
          content="Discover exquisite luxury jewelry bridging Lisbon and Istanbul with timeless elegance."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/zbfdqel498wdmcxx2wqm"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "LFD Group",
            "url": "https://yourwebsite.com/",
            "logo": "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/kfsfmnmbbkniunopzrdk",
            "description":
              "LFD Group - Luxury Fancy Design, Lda. is a premier jewelry brand connecting the rich cultural heritage of Lisbon and Istanbul.",
          })}
        </script>
      </Head>
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
        <div className="app" ref={container}>
          <section className="hero" id="Início">
            <div className="hero-img">
              <img
                src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/zbfdqel498wdmcxx2wqm"
                alt="Hero background image showcasing LFD Group craftsmanship"
              />
            </div>
            <div className="hero-img-overlay"></div>
            <div className="hero-img-gradient"></div>

            {/* Moved the hero-icon outside of the container for better positioning */}
            <div className="hero-icon">
              <img
                src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/ue5era1m9rnyqtd3vfql"
                alt="LFD Group logo"
              />

            </div>

          </section>
        </div>
      </ReactLenis>
    </>
  );
}