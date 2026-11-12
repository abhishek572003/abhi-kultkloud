import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECT_XP, projects } from "../../_data/projects";
import { careers } from "../../_data/careers";
import { Arrow, PageBanner } from "../../_components/Kit";
import { QuestList } from "../../_components/Quest";

export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find(x => x.slug === slug);
  return p ? { title: `Project: ${p.title}`, description: p.proves } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find(x => x.slug === slug);
  if (!p) notFound();
  const roles = p.forCareers.map(s => careers.find(c => c.slug === s)!).filter(Boolean);
  return <>
    <PageBanner title={p.title} sub={p.proves} crumbs={[{ href: "/projects", label: "Projects" }, { label: p.title }]} chips={[p.level, p.time, `${PROJECT_XP} XP per step`]} seed={p.slug.length * 3} />
    <div className="kk-page">
      <div className="kk-detail">
        <section className="kk-block">
          <h2>Steps</h2>
          <QuestList prefix={`project:${p.slug}`} kind="project" xp={PROJECT_XP} labelPrefix={p.title}
            items={p.steps.map(s => ({ id: s.id, title: s.title, text: s.detail, resources: s.links?.map(l => ({ title: l.title, href: l.href, kind: l.href.includes("youtube.com") ? "Video" : l.href.startsWith("/") ? "Hands-on" : "Docs" })) }))} />
        </section>
        <aside className="kk-side">
          <div className="kk-pane"><h2>Stack</h2><div className="kk-chips">{p.stack.map(s => <span key={s} className="kk-chip">{s}</span>)}</div></div>
          <div className="kk-pane"><h2>Helps you get hired as</h2><ul>{roles.map(r => <li key={r.slug}><Link href={`/careers/${r.slug}`}>{r.title}<Arrow /></Link></li>)}</ul></div>
          <div className="kk-pane kk-tip"><b>Make it count</b><p>Public GitHub repo, a clear README with an architecture diagram, and a short write-up of one thing that broke. That is what interviewers ask about.</p></div>
        </aside>
      </div>
    </div>
  </>;
}
