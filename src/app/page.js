"use client";

import Head from "next/head";
import { ReactLenis } from "@studio-freight/react-lenis";
import LogosSection from "./components/LogosSection";

import "./home.css";
import "./components/LogosSection.css";

export default function Home() {

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
          content="LFD, Group, Luxury Jewelry, Lisbon, Istanbul, Terzihan, Dorica, Joalharia"
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
        <div className="app">
          <LogosSection />
        </div>
      </ReactLenis>
    </>
  );
}