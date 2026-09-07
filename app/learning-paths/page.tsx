import type { Metadata } from "next";
import Link from "next/link";
import { learningPaths } from "../_data/platform";

export const metadata: Metadata = { title: "Learning paths", description: "Structured learning paths for systems, cloud, containers, and infrastructure delivery." };

export default function LearningPathsPage() { return <div className="platform-page"><div className="page-kicker">LEARNING PATHS / 01</div><h1 className="page-title">Follow the sequence.</h1><p className="page-lede">Each path has a recommended order, an outcome, and a reason for the next step. Use it as a guide, not a checklist.</p><div className="path-list">{learningPaths.map((path,index)=><Link className="path-row" href={path.href} key={path.title}><span className="card-index">{String(index+1).padStart(2,"0")}</span><div><h2>{path.title}</h2><p>{path.description}</p><div className="tag-row">{path.topics.map(topic=><span key={topic}>{topic}</span>)}</div></div><div className="path-meta"><span>{path.duration}</span><b>↗</b></div></Link>)}</div><div className="callout"><span>Note</span><p>These paths are written from the perspective of a learner building working understanding. They point to guides, labs, and projects as those pieces become available.</p></div></div>; }
