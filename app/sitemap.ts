import type { MetadataRoute } from "next";

const BASE = "https://zapatistasma.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-09");
  return [
    { url: BASE, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/san-miguel`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/gallery/streets`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/gallery/landscape`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/gallery/nights`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/gallery/food`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/gallery/signs`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/deck`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/resources`, lastModified, changeFrequency: "monthly", priority: 0.4 },
  ];
}
