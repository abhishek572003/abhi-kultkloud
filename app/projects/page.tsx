import type { Metadata } from "next";
import Link from "next/link";
import { PROJECT_XP, projects } from "../_data/projects";
import { PageBanner } from "../_components/Kit";
import { TaskProgress } from "../_components/Quest";

export const metadata: Metadata = { title: "Portfolio projects that get interviews", description: "Six Cloud, DevOps and AI-infrastructure projects that prove the skills recruiters ask for, with step-by-step instructions and free resources." };

export default function ProjectsPage() {
  return <>
    <PageBanner title="Build proof, not just notes" sub={`Certifications open the door; projects get you through it. Each project below proves one skill recruiters ask for, step by step, with free resources. Each step is worth ${PROJECT_XP} XP; finish a project for the Builder badge.`} chips={["6 projects", "Beginner to advanced", "Put them on your CV"]} seed={31} />
    <div className="kk-page">
      <section className="kk-section">
        <ul className="kk-grid">
          {projects.map(p => <li key={p.slug}><Link className="kk-pane kk-card" href={`/projects/${p.slug}`}>
            <span className="kk-card-top"><span className={`kk-tag ${p.level === "Beginner" ? "kk-tag-mint" : p.level === "Intermediate" ? "kk-tag-sky" : "kk-tag-rose"}`}>{p.level}</span><span className="kk-chip">{p.time}</span></span>
            <h2 >{p.title}</h2>
            <p>{p.proves}</p>
            <span className="kk-meta">{p.stack.slice(0, 4).map(s => <span key={s} className="kk-chip">{s}</span>)}</span>
            <TaskProgress ids={p.steps.map(s => `project:${p.slug}:${s.id}`)} />
          </Link></li>)}
        </ul>
      </section>
    </div>
  </>;
}
