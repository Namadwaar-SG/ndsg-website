import React from "react";
import "@styles/globals.css";
import Header from "@app/components/common_components/Header";
import Script from "next/script";
import { initGA } from "./analytics";

// common for all pages within app
export const metadata = {
  title: "Namadwaar",
  description: "Official Namadwaar Singapore Website",
};

const RootLayout = ({ children }) => {
  initGA();
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_TAG}`}
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS_TAG}');
          `}
        </Script>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
