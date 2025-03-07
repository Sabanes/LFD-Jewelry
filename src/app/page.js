"use client";

import Head from "next/head";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Footer from "@/components/Footer/Footer";
import ShuffleText from "@/components/ShuffleText/ShuffleText";
import { carouselItems } from "./carouselItems";

import "./home.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef();

  // initialize Lenis smooth scrolling instance on window
  const lenis = useLenis();
  useEffect(() => {
    if (lenis) {
      window.lenis = lenis;
    }
    return () => {
      window.lenis = null;
    };
  }, [lenis]);

  // controls geometric background animation on scroll
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".intro",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const yMove = -750 * progress;
          const rotation = 360 * progress;

          gsap.to(".geo-bg", {
            y: yMove,
            rotation: rotation,
            duration: 0.1,
            ease: "none",
            overwrite: true,
          });
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container }
  );

  // handles case studies image pinning and scale animations on scroll
  useGSAP(
    () => {
      const images = gsap.utils.toArray(".case-studies-img");

      images.forEach((img, i) => {
        const imgElement = img.querySelector("img");

        ScrollTrigger.create({
          trigger: img,
          start: "top bottom",
          end: "top top",
          onUpdate: (self) => {
            gsap.to(imgElement, {
              scale: 2 - self.progress,
              duration: 0.1,
              ease: "none",
            });
          },
        });

        ScrollTrigger.create({
          trigger: img,
          start: "top top",
          end: () =>
            `+=${
              document.querySelector(".case-studies-item").offsetHeight *
              (images.length - i - 1)
            }`,
          pin: true,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container }
  );

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
      src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/xta7hte4bjpkn7fajt3f"
      alt="LFD Group logo"
    />
  </div>

</section>






          <section className="about" id="Sobre-nos">
            <div className="about-overlay">
              <div className="about-content">
                <ShuffleText triggerOnScroll="true" text={"[ SOBRE NÓS ]"} className="about-primary" />
                <p className="about-text">
                Somos uma empresa que se destaca tanto na produção de joalharia como na distribuição de marcas internacionais. A Joalharia é uma verdadeira arte, capaz de criar laços entre pessoas, culturas e paises.</p>
              </div>
            </div>
            <img
              className="about-image"
              src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/igpm0fgjemyoihwpb9bf"
              alt="Example image showcasing our work"
            />
          </section>
















          <section className="carousel" id="Marcas">
            {carouselItems.map((item) => (
              <div
                key={item.id}
                id={`project-${item.id}`}
                className="project"
                style={{
                  clipPath:
                    item.id === "01"
                      ? "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
                      : "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                }}
              >
                <div className="project-bg">
                  <img src={item.bg} alt="" />
                  <div className="hero-img-overlay"></div>
                  <div className="hero-img-gradient"></div>
                </div>
                <div className="project-main">
                  <img src={item.main} alt="" />
                </div>
                <div className="project-header">
                  <div className="project-id">
                    <a href={item.url}><span className="project-id-conf">{item.id}</span></a>
                  </div>
                  <div className="project-whitespace"></div>
                </div>
               
              </div>
            ))}
          </section>

          <Footer />
        </div>
      </ReactLenis>
    </>
  );
}