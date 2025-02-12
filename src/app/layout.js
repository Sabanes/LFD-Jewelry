import { Suspense } from "react";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Navbar from "@/components/Navbar/Navbar";

import "./globals.css";

export const metadata = {
  title: "LFD Jóias",
  description: "Uma das maiores empresas de jóias em Portugal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=zodiak@100,300,400,700&f[]=plus-jakarta-sans@300,400,500,600&display=swap"
          rel="stylesheet"
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
