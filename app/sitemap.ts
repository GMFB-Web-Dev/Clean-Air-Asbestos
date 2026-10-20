import type { MetadataRoute } from "next";
import { services } from "./_data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://clearair.co.nz";
  const paths = ["", "/about-us", "/services", ...Object.keys(services).map((slug) => `/${slug}`), "/contact-us", "/privacy-policy"];

  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : path === "/services" ? 0.9 : 0.8,
  }));
}
