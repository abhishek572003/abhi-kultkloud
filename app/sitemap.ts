import type { MetadataRoute } from "next";
import { careers } from "./_data/careers";
import { paths } from "./_data/paths";
import { certs } from "./_data/certs";
import { projects } from "./_data/projects";

const base = "https://abhi-kultkloud.vercel.app";
const fixed = ["/", "/start-here", "/careers", "/learning-paths", "/certifications", "/projects", "/tools", "/cheatsheets", "/updates", "/quest", "/resources", "/about", "/search"];

export default function sitemap(): MetadataRoute.Sitemap {
  const all = [...fixed, ...careers.map(c => `/careers/${c.slug}`), ...paths.map(p => `/learning-paths/${p.slug}`), ...certs.map(c => `/certifications/${c.slug}`), ...projects.map(p => `/projects/${p.slug}`)];
  return all.map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "/" || path === "/updates" ? "daily" : "weekly", priority: path === "/" ? 1 : 0.7 }));
}
