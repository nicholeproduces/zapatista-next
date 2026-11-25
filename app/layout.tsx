import type { Metadata } from "next";
import Script from "next/script";
import "./global.css";

const GA_ID = "G-DQCZNW3E8J";

export const metadata: Metadata = {
  metadataBase: new URL("https://zapatistasma.com"),
  title: {
    default: "Zapatista — Feature in Development",
    template: "%s — Zapatista",
  },
  description:
    "Calling card for Zapatista, a prestige crime thriller set in San Miguel de Allende. Look book, screenwriter Frank Gaydos, and the city as a place to shoot.",
  verification: {
    google: "kY4dbtOzKJa3tz_bc74dc_E0efANP71ekFwZB8p23gM",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0c0b0a] text-[#f4efe6]">
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga-zapatista" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
