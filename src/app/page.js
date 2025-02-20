"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { MdArrowOutward } from "react-icons/md";
import Marquee from "@/components/Marquee/Marquee";
import Footer from "@/components/Footer/Footer";
import ShuffleText from "@/components/ShuffleText/ShuffleText";
import GeometricBackground from "@/components/GeometricBackground/GeometricBackground";
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
        <section className="hero" id="Start">
          <div className="hero-img">
            <img src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/zbfdqel498wdmcxx2wqm" alt="" />
          </div>
          <div className="hero-img-overlay"></div>
          <div className="hero-img-gradient"></div>
          <div className="container">
            <div className="hero-copy">

              <div className="hero-copy-col">
                <div className="hero-icon">
                  <img src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/kfsfmnmbbkniunopzrdk" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="intro" id="intro">
          <div className="geo-bg">
            <GeometricBackground />
          </div>
          <Marquee />
          <div className="intro-container">
            <div className="container">
              <div className="col">
                <p className="primary">[ SOBRE NOS ]</p>
              </div>
              <div className="col">
                <div className="intro-copy">
                  <p>
                  LFD Jóias - Luxury Fancy Design, Lda. <br />

                  A joalharia é uma verdadeira arte do encontro, capaz de criar laços entre culturas e paises– uma empresa que se destaca tanto na produção de joalharia como na distribuição de marcas internacionais. 
                <br />
                  As jóias criadas pela LFD refletem a conexão geográfica e cultural entre Lisboa e Istambul – duas cidades que, através das suas histórias, representam um encontro civilizacional ímpar. Cada peça produzida é um tributo a essa fusão, celebrando a riqueza das culturas que se encontram e se complementam.
                  </p>
                </div>
                <div className="prompt-example">
                  <div className="prompt-example-results">
                    <div className="prompt-example-result-item">
                      <div className="prompt-example-result-item-img">
                        <img className="max" src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/otdorijgnn5ov1jnrzcj" alt="" />
                      <div className="hero-img-overlay"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-studies" id="case-studies">
          <div className="case-studies-header">
            <div className="container">
              <ShuffleText
                as="h2"
                text="Nossas Marcas"
                triggerOnScroll={true}
              />
            </div>
          </div>
{/*           <div className="case-studies-content">
            <div className="container">
              <div className="col">
                <p className="primary">[ Marcas que representamos ]</p>
              </div>
              <div className="col">
                <div className="case-studies-copy">
                  <h2>A excelência em qualidade e estilo é o que nos define.</h2>
                  <p>
                  Junto às nossas marcas, estamos sempre em busca de alcançar a excelência, oferecendo um atendimento ao cliente impecável e produtos da mais alta qualidade. Nosso compromisso é garantir a satisfação total dos nossos clientes, superando suas expectativas a cada experiência.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </section>

        <section className="case-studies-items">
  <div className="case-studies-items-content col">
    {/* First Item - THERZIAN */}
    <div className="case-studies-item case-studies-item-1">
      <div className="container">
        <h3>Coleção Classica</h3>
        <div className="case-studies-item-inner-img">
          <img
            src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/qfxwox1in9yltezowiwv"
            alt=""
          />
        </div>

      </div>
    </div>

    {/* Second Item - THERZIAN (Duplicate) */}
    <div className="case-studies-item case-studies-item-2">
      <div className="container">
        <h3>THERZIAN</h3>
        <a href="https://terzihan.com/pt-pt" target="_blank">
          <p className="primary">[ terzihan.com ]</p>
        </a>
        <div className="case-studies-item-inner-img">
          <img
            src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/pqbyscwzuwzwhvvvhbj8"
            alt="AI-driven fashion design showcase"
          />
        </div>
        <p>
          Terzihan é uma joalheria de luxo com mais de 300 anos de história, originada em Mardin e agora presente em Istambul, Lisboa, Flórida e cinco continentes. A marca mantém suas raízes familiares, com os irmãos Can e Cem ao lado do pai na direção criativa. Nossas joias refletem a fusão de culturas mesopotâmicas e mediterrâneas, inspiradas pelo mar e pela riqueza de nossas origens.
        </p>
        <div className="case-studies-item-inner-link">
          <Link href="https://www.instagram.com/terzihan/">Instagram</Link>
          <div className="link-icon">
            <MdArrowOutward size={24} />
          </div>
        </div>
      </div>
    </div>

    {/* Third Item - Dorica - Italy */}
    <div className="case-studies-item case-studies-item-3">
      <div className="container">
        <h3>Dorica - Italy</h3>
        <a href="https://dorica.com" target="_blank">
          <p className="primary">[ Dorica.com ]</p>
        </a>
        <div className="case-studies-item-inner-img">
          <img
            src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/gnkqz2aksx0p5m3bm8lk"
            alt="AI-curated artwork showcase"
          />
        </div>
        <p>
          Desde 1989, a D’orica transforma ouro em peças únicas, combinando tradição artesanal com inovação. Especializada em joias sob medida, a marca reflete a excelência do design italiano, sempre com um compromisso sustentável. Como uma empresa certificada B Corp, a D’orica coloca o planeta e as pessoas em primeiro lugar, criando joias que são verdadeiras obras de arte.
        </p>
        <div className="case-studies-item-inner-link">
          <Link href="https://www.instagram.com/dorica_official?igsh=MTg1c3J6c2ZuMDVhbA%3D%3D">Instagram</Link>
          <div className="link-icon">
            <MdArrowOutward size={24} />
          </div>
        </div>
      </div>
    </div>

    {/* Fourth Item - Orchid London */}
    <div className="case-studies-item case-studies-item-4">
      <div className="container">
        <h3>Orchid London</h3>
        <a href="https://theorchidjewelry.com/" target="_blank">
          <p className="primary">[ theorchidjewelry.com ]</p>
        </a>
        <div className="case-studies-item-inner-img">
          <img
            src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/loa8r97tgpeuhyhnnhs0"
            alt="Futuristic AI-generated art"
          />
        </div>
        <p>
          A coleção de joias Orchid é inspirada na elegância da flor de orquídea, um símbolo de graça, confiança e sofisticação. Com peças meticulosamente trabalhadas em ouro 18K, combina design contemporâneo com herança cultural, resultando em uma coleção dinâmica e vibrante. Cada joia é uma expressão intemporal de beleza e requinte.
        </p>
        <div className="case-studies-item-inner-link">
          <Link
            href="https://www.instagram.com/orchidjewelrylondon?igsh=MTh0emw0bDRla2JiNQ%3D%3D"
            target="_blank"
          >
            Instagram
          </Link>
          <div className="link-icon">
            <MdArrowOutward size={24} />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="case-studies-items-images col">
    {/* First Image - THERZIAN */}
    <div className="case-studies-img case-studies-img-1">
      <img
        src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/qfxwox1in9yltezowiwv"
        alt="AI-driven fashion design showcase"
      />
      <div className="hero-img-overlay"></div>
      <div className="case-studies-img-link"></div>
    </div>

    {/* Second Image - THERZIAN Duplicate */}
    <div className="case-studies-img case-studies-img-2">
      <img
        src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/pqbyscwzuwzwhvvvhbj8"
        alt="AI-driven fashion design showcase"
      />
      <div className="hero-img-overlay"></div>
      <div className="case-studies-img-link"></div>
    </div>

    {/* Third Image - Dorica */}
    <div className="case-studies-img case-studies-img-3">
      <img
        src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/gnkqz2aksx0p5m3bm8lk"
        alt="AI-curated artwork showcase"
      />
      <div className="hero-img-overlay"></div>
      <div className="case-studies-img-link"></div>
    </div>

    {/* Fourth Image - Orchid */}
    <div className="case-studies-img case-studies-img-4">
      <img
        src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/loa8r97tgpeuhyhnnhs0"
        alt="Futuristic AI-generated art"
      />
      <div className="hero-img-overlay"></div>
      <div className="case-studies-img-link"></div>
    </div>
  </div>
</section>

        <section className="abstract-bg">
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
        </section>

        <section className="works" id="works">
          <div className="works-header">
            <div className="container">

            </div>
          </div>

          <div className="works-content">
            <div className="container">
  

            </div>
          </div>
        </section>

        <section className="carousel">
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
                  <h2> {item.id}</h2>
                </div>
                <div className="project-whitespace"></div>

              </div>

              <Link
                href={item.url}
                className="project-overlay-link"
                aria-label={`View ${item.title} project`}
              />
            </div>
          ))}
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
}
