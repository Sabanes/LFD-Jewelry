import { Suspense } from "react";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Navbar from "@/components/Navbar/Navbar";

import "./globals.css";

export const metadata = {
  title: "LFD Jóias - Luxury Fancy Design",
  description:
    "Uma das maiores empresas de jóias em Portugal, oferecendo produtos de luxo e design excepcional.",
  keywords: "LFD, Jóias, Joalharia, Portugal, Luxury, Design",
  openGraph: {
    title: "LFD Jóias - Luxury Fancy Design",
    description: "Uma das maiores empresas de jóias em Portugal",
    url: "https://lfdjoias.com",
    siteName: "LFD Jóias",
    images: [
      {
        url: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/zbfdqel498wdmcxx2wqm",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LFD Jóias - Luxury Fancy Design",
    description: "Uma das maiores empresas de jóias em Portugal",
    images: [
      "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/zbfdqel498wdmcxx2wqm",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=zodiak@100,300,400,700&f[]=plus-jakarta-sans@300,400,500,600&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://yourwebsite.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "LFD Jóias",
              url: "https://yourwebsite.com/",
              logo:
                "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/kfsfmnmbbkniunopzrdk",
              description:
                "Uma das maiores empresas de jóias em Portugal, oferecendo produtos de luxo e design excepcional.",
            }),
          }}
        />
      </head>
      <body>
        <Suspense>
          <ProgressBar />
        </Suspense>
        <Navbar />
        {children}
      </body>
    </html>
  );
}