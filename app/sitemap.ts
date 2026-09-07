import type { MetadataRoute } from "next";

const routes = ["/", "/start-here", "/learning-paths", "/projects", "/labs", "/resources", "/certifications", "/about", "/search", "/guides/linux-foundations", "/guides/cloud-architecture", "/guides/git-delivery", "/learning-paths/systems", "/learning-paths/cloud-foundations", "/learning-paths/containers-kubernetes", "/learning-paths/infrastructure-delivery", "/projects/serverless-flow", "/labs/terraform-networking"];
export default function sitemap(): MetadataRoute.Sitemap { return routes.map(path => ({ url: `https://abhi-kultkloud.vercel.app${path}`, lastModified: new Date("2026-09-08"), changeFrequency: "monthly", priority: path === "/" ? 1 : 0.7 })); }
