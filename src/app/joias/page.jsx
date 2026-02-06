"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import { carouselItems } from "./carouselItems"; // Update path as needed

import "../home.css"; // Make sure the path is correct

gsap.registerPlugin(ScrollTrigger);

export default function Marcas() {
  const container = useRef(null);
  const lenis = useLenis(); // If you're actually using ReactLenis

  // Auto reload page once when visited
  useEffect(() => {
    const hasReloaded = sessionStorage.getItem('jewelry-page-reloaded');
    if (!hasReloaded) {
      sessionStorage.setItem('jewelry-page-reloaded', 'true');
      window.location.reload();
    }
  }, []);

  // (Optional) Connect Lenis + ScrollTrigger so pinned sections track Lenis's smooth scroll.
  useEffect(() => {
    if (!lenis) return;

    // Tell ScrollTrigger to use Lenis's scroll instead of window scroll
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length
          ? lenis.scrollTo(value, { immediate: true })
          : lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    // Whenever Lenis scrolls, tell ScrollTrigger to update
    const handleScroll = () => ScrollTrigger.update();
    lenis.on("scroll", handleScroll);

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenis]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Kill any existing triggers (important if this page is unmounted/remounted)
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const initCarousel = () => {
      const projects = gsap.utils.toArray(".project");
      if (projects.length === 0) {
        // If projects not found, retry after a short delay
        setTimeout(initCarousel, 100);
        return null;
      }

      // Create the pinned ScrollTrigger
      const trigger = ScrollTrigger.create({
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

          // Ensure previous slides are fully revealed; future slides are fully hidden
          projects.forEach((project, index) => {
            if (index < currentSlide) {
              gsap.set(project, {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              });
            } else if (index > currentSlide + 1) {
              gsap.set(project, {
                clipPath:
                  "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              });
            }
          });
        },
      });

      // Ensure the first slide is visible immediately
      gsap.set(projects[0], {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      });

      // Force a refresh once everything is in place
      ScrollTrigger.refresh();

      return trigger;
    };

    // Add delay to ensure content is visible after loader
    const timer = setTimeout(() => {
      const trigger = initCarousel();
      
      // Store cleanup function
      return () => {
        if (trigger) trigger.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }, 100);

    // Cleanup on unmount
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

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
      <div className="app" ref={container}>
        <section className="carousel" id="Marcas">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              id={`project-${item.id}`}
              className="project"
              // Default clipPath so only the first one is "fully shown"
              style={{
                clipPath:
                  index === 0
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
                  <a href={item.url}>
                    <span className="project-id-conf">{item.id}</span>
                  </a>
                </div>
                <div className="project-whitespace"></div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </ReactLenis>
  );
}