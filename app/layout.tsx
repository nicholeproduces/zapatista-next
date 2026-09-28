import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Zapatista — Feature in Development",
  description:
    "Calling card for Zapatista, a prestige crime thriller set in San Miguel de Allende. Look book, screenwriter Frank Gaydos, and the city as a place to shoot.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0c0b0a] text-[#f4efe6]">{children}</body>
    </html>
  );
}
