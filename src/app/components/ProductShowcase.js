"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { carouselItems } from "../marcas/carouselItems";

const brandData = [
  {
    id: "Terzihan",
    logo: "/LogosLFD/TERZIHAN.avif",
    bg: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/rjn8tnbskuxruzskdshh",
    description: "Luxo atemporal com herança cultural. Terzihan representa a fusão perfeita entre tradição turca e design contemporâneo, criando peças únicas que contam histórias através de cada detalhe meticuloso.",
    url: "https://terzihan.com/",
  },
  {
    id: "Montegrappa",
    logo: "/LogosLFD/Montegrappa.svg",
    bg: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/ijle4ilduhdog0kjjjil",
    description: "Elegância e sofisticação intemporais. A marca italiana Montegrappa é sinônimo de excelência artesanal, combinando tradição centenária com inovação tecnológica em cada caneta de luxo.",
    url: "https://www.montegrappa.com/",
  },
  {
    id: "Mimi",
    logo: "/LogosLFD/MIMI.avif",
    bg: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/yyd7lgm2ke2ldz4fdzzm",
    description: "Design italiano contemporâneo que celebra a feminilidade. Mimi Milano cria joias que expressam personalidade única através de linhas suaves e materiais preciosos cuidadosamente selecionados.",
    url: "https://www.mimimilano.com",
  },
  {
    id: "D'Orica",
    logo: "/LogosLFD/Dorica.jpg",
    bg: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/rzvratu5hwkx5oa2uvzl",
    description: "Tradição e inovação em joias. D'Orica representa o equilíbrio perfeito entre o conhecimento ancestral da joalharia e as técnicas mais avançadas, resultando em peças de beleza extraordinária.",
    url: "https://dorica.com/",
  },
  {
    id: "Borsari Gioielli",
    logo: "/LogosLFD/Borsarilogo.png",
    bg: "https://res.cloudinary.com/dcraqvlmb/image/upload/c_crop,g_south_west,h_0.95/LFD/inv32sa06ra0yoqs3v0p",
    description: "Artesanato italiano de excelência. Borsari Gioielli combina tradições familiares com design inovador, criando coleções que refletem a paixão pela perfeição e atenção aos detalhes.",
    url: "https://www.borsarigioielli.com/en/",
  },
  {
    id: "Orchid",
    logo: "/LogosLFD/Orchid.avif",
    bg: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/bjoo1kg7xqx5mrmur2ww",
    description: "Elegância e sofisticação intemporais. Orchid representa a fusão perfeita entre design contemporâneo e artesanato tradicional, criando joias que celebram a beleza natural através de formas orgânicas.",
    url: "https://theorchidjewelry.com/",
  },
  {
    id: "Daniel Wellington",
    logo: "/LogosLFD/wellington.png",
    bg: "https://res.cloudinary.com/dcraqvlmb/image/upload/v1755895320/Screenshot_2025-08-23_at_00-38-58_Daniel_Wellington_danielwellington_Instagram_photos_and_videos_c3ohpc.png",
    description: "Minimalismo escandinavo redefinido. Daniel Wellington revolucionou a relojoaria com designs clean e elegantes, criando timepieces que combinam simplicidade sofisticada com qualidade premium.",
    url: "https://www.danielwellington.com/",
  },
  {
    id: "Favre Leuba",
    logo: "/LogosLFD/favreleubalogo.jpg",
    bg: "https://res.cloudinary.com/dcraqvlmb/image/upload/v1755895320/Screenshot_2025-08-23_at_00-40-33_Instagram_dka3yr.png",
    description: "Tradição e inovação em relojoaria suíça. Favre Leuba, uma das mais antigas manufacturas de relógios do mundo, combina precisão técnica excepcional com design inovador há mais de 280 anos.",
    url: "https://www.favreleuba.com/",
  },
  {
    id: "Eberhard",
    logo: "/LogosLFD/eberhardlogoblue.png",
    bg: "https://res.cloudinary.com/dcraqvlmb/image/upload/v1755895961/Screenshot_2025-08-23_at_00-50-13_Watch_this_story_by_Eberhard_Co._-_Official_Page_on_Instagram_before_it_disappears_1_qyq9vb.jpg",
    description: "Luxo atemporal com herança italiana. Eberhard & Co. representa a excelência da relojoaria italiana desde 1887, criando timepieces que combinam tradição artesanal com inovação tecnológica.",
    url: "https://www.eberhard-co-watches.ch/en/",
  }
];

export default function ProductShowcase() {
  const containerRef = useRef();

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".showcase-item");

      items.forEach((item, index) => {
        gsap.fromTo(item,
          {
            opacity: 0,
            y: 80,
            x: index % 2 === 0 ? -50 : 50
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="product-showcase" ref={containerRef}>
      <div className="showcase-container">
        {brandData.map((brand, index) => (
          <div
            key={brand.id}
            className={`showcase-item ${index % 2 === 0 ? 'left-align' : 'right-align'}`}
          >
            <div className="showcase-image">
              <img
                src={brand.bg}
                alt={`${brand.id} products`}
                loading="lazy"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="showcase-content">
              <div className="brand-logo">
                <img
                  src={brand.logo}
                  alt={`${brand.id} logo`}
                  loading="lazy"
                />
              </div>
              <p className="brand-description">{brand.description}</p>
              <a
                href="/contactos"
                className="brand-link"
              >
                Saber mais
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}