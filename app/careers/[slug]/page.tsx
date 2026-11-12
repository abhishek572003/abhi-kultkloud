import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { careers } from "../../_data/careers";
import { paths } from "../../_data/paths";
import { certs } from "../../_data/certs";
import { projects } from "../../_data/projects";
import { Arrow, PageBanner } from "../../_components/Kit";
import { GoalButton, TaskProgress } from "../../_components/Quest";

export function generateStaticParams() { return careers.map(c => ({ slug: c.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = careers.find(x => x.slug === slug);
  return c ? { title: `How to become a ${c.title}`, description: `${c.tagline} Time from zero: ${c.months}. Typical starting pay in India: ${c.entryPay}.` } : {};
}

export default async function CareerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = careers.find(x => x.slug === slug);
  if (!c) notFound();
  const myPaths = c.paths.map(s => paths.find(p => p.slug === s)!).filter(Boolean);
  const myCerts = c.certs.map(s => certs.find(x => x.slug === s)!).filter(Boolean);
  const myProjects = c.projects.map(s => projects.find(x => x.slug === s)!).filter(Boolean);

  return <>
    <PageBanner title={c.title} sub={c.tagline} crumbs={[{ href: "/careers", label: "Career paths" }, { label: c.title }]} chips={[`Level ${c.tier}`, c.months, `Starts at ${c.entryPay}`]} seed={c.tier * 5}>
      <div className="kk-actions"><GoalButton slug={c.slug} title={c.title} /></div>
    </PageBanner>
    <div className="kk-page">
      <div className="kk-detail">
        <div>
          <section className="kk-block">
            <h2>Your quest, in order</h2>
            <p className="kk-lead">Do these learning paths in this order. Each one is free, with the best videos, docs and labs we could find.</p>
            <ol className="kk-grid kk-grid-2">
              {myPaths.map((p, i) => <li key={p.slug}><Link className="kk-pane kk-card" href={`/learning-paths/${p.slug}`}>
                <span className="kk-card-top"><span className="kk-tag kk-tag-lilac">Step {i + 1}</span><span className="kk-chip">{p.weeks}</span></span>
                <h3>{p.name}</h3><p>{p.tagline}</p>
                <TaskProgress ids={p.modules.map(m => `path:${p.slug}:${m.id}`)} />
              </Link></li>)}
            </ol>
          </section>
          <section className="kk-block">
            <h2>Certifications employers ask for</h2>
            <ul className="kk-grid kk-grid-2">
              {myCerts.map(x => <li key={x.slug}><Link className={`kk-pane kk-card kk-cert-card kk-cert-${x.provider.toLowerCase()}`} href={`/certifications/${x.slug}`}>
                <span className="kk-cert-code">{x.provider} · {x.code}</span><h3>{x.name}</h3>
                <span className="kk-meta"><span className="kk-chip">{x.weeks}</span><span className="kk-chip">{x.steps.length} steps</span></span>
              </Link></li>)}
            </ul>
          </section>
          <section className="kk-block">
            <h2>Build these to get noticed</h2>
            <ul className="kk-grid kk-grid-2">
              {myProjects.map(p => <li key={p.slug}><Link className="kk-pane kk-card" href={`/projects/${p.slug}`}>
                <span className="kk-card-top"><span className="kk-tag kk-tag-mint">{p.level}</span><span className="kk-chip">{p.time}</span></span>
                <h3>{p.title}</h3><p>{p.proves}</p>
              </Link></li>)}
            </ul>
          </section>
        </div>
        <aside className="kk-side">
          <div className="kk-pane">
            <h2>The reward</h2>
            <dl className="kk-facts">
              <div><dt>Time from zero</dt><dd>{c.months}</dd></div>
              <div><dt>Starting pay (India)</dt><dd>{c.entryPay}</dd></div>
              {c.growthPay && <div><dt>With experience</dt><dd>{c.growthPay}</dd></div>}
            </dl>
            <p className="kk-facts-src">Sources: {c.sources.map((s, i) => <span key={s.href}>{i > 0 && ", "}<a href={s.href} target="_blank" rel="noreferrer">{s.label}</a></span>)}. Ranges vary by city and company.</p>
          </div>
          <div className="kk-pane">
            <h2>What you do all day</h2>
            <ul className="kk-bullets">{c.day.map(d => <li key={d}>{d}</li>)}</ul>
          </div>
          <div className="kk-pane">
            <h2>Skills to show</h2>
            <div className="kk-chips">{c.skills.map(s => <span key={s} className="kk-chip">{s}</span>)}</div>
          </div>
          <div className="kk-pane kk-tip"><b>Hiring tip</b><p>{c.tip}</p></div>
          <Link className="kk-text-link" href="/careers">All career paths <Arrow /></Link>
        </aside>
      </div>
    </div>
  </>;
}
