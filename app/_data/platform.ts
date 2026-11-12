// Search index built from the site's own data.
import { careers } from "./careers";
import { paths } from "./paths";
import { certs } from "./certs";
import { projects } from "./projects";

export type ContentItem = { slug: string; type: string; title: string; description: string; topics: string[]; href: string };

export const platformItems: ContentItem[] = [
  ...careers.map(c => ({ slug: `career-${c.slug}`, type: "Career", title: c.title, description: c.tagline, topics: c.skills, href: `/careers/${c.slug}` })),
  ...paths.map(p => ({ slug: `path-${p.slug}`, type: "Learning path", title: p.name, description: p.tagline, topics: p.modules.flatMap(m => [m.title, ...m.resources.map(r => r.title)]), href: `/learning-paths/${p.slug}` })),
  ...certs.map(c => ({ slug: `cert-${c.slug}`, type: "Certification", title: `${c.name} (${c.code})`, description: c.summary, topics: [c.provider, c.code], href: `/certifications/${c.slug}` })),
  ...projects.map(p => ({ slug: `project-${p.slug}`, type: "Project", title: p.title, description: p.proves, topics: p.stack, href: `/projects/${p.slug}` })),
  { slug: "tool-subnet", type: "Tool", title: "Subnet calculator", description: "Plan VPC and subnet ranges with AWS limits.", topics: ["CIDR", "VPC", "networking"], href: "/tools#subnet" },
  { slug: "tool-cron", type: "Tool", title: "Cron explainer", description: "Read a cron schedule in plain English.", topics: ["cron", "schedule"], href: "/tools#cron" },
  { slug: "tool-chmod", type: "Tool", title: "chmod calculator", description: "Linux permissions as ticks and octal.", topics: ["linux", "permissions"], href: "/tools#chmod" },
  { slug: "tool-cloud", type: "Tool", title: "Cloud service translator", description: "AWS, Azure and Google Cloud equivalents.", topics: ["aws", "azure", "gcp"], href: "/tools#cloud-map" },
  { slug: "cheatsheets", type: "Cheat sheet", title: "Cheat sheets", description: "Linux, Git, Docker, kubectl and Terraform commands.", topics: ["linux", "git", "docker", "kubectl", "terraform"], href: "/cheatsheets" },
];
