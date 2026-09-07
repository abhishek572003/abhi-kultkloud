import type { Metadata } from "next";
import Link from "next/link";
import { platformItems } from "../_data/platform";

export const metadata: Metadata = { title: "Projects", description: "Cloud and DevOps projects documented with architecture, decisions, and lessons learned." };

export default function ProjectsPage() { const projects=platformItems.filter(item=>item.type==="Project"); return <div className="platform-page"><div className="page-kicker">PROJECTS / 02</div><h1 className="page-title">Systems you can explain.</h1><p className="page-lede">Projects are documented around the problem, architecture, decisions, tradeoffs, and lessons learned. New portfolio labs are labelled clearly.</p><div className="project-list">{projects.map(project=><article className="project-card" key={project.slug}><div className="project-card-top"><span className="type-badge">{project.type}</span><span>{project.level} · {project.time}</span></div><h2>{project.title}</h2><p>{project.description}</p><div className="tag-row">{project.topics.map(topic=><span key={topic}>{topic}</span>)}</div><Link className="card-link" href={project.href}>Read the project ↗</Link></article>)}</div><div className="callout"><span>Scope</span><p>Architecture descriptions are learning records and portfolio demonstrations. They do not claim production ownership of every component.</p></div></div>; }
