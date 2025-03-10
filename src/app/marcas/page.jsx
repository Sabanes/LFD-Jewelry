"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { carouselItems } from "./carouselItems";

import "../home.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function marcas() {
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

                <div className="project-header">
                  <div className="project-id">
                    <a href={item.url}><span className="project-id-conf">{item.id}</span></a>
                  </div>
                  <div className="project-whitespace"></div>
                </div>
               
              </div>
            ))}
          </section>

        </div>
      </ReactLenis>
    </>
  );
}