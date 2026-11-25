import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://zapatistasma.com/sitemap.xml",
    host: "https://zapatistasma.com",
  };
}
