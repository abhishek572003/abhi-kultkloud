import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { certs, certsCheckedOn } from "../../_data/certs";
import { careers } from "../../_data/careers";
import { Arrow, PageBanner } from "../../_components/Kit";
import { QuestList } from "../../_components/Quest";
import LiveFeed from "../../_components/LiveFeed";
import { getFeed } from "../../_lib/feeds";

export const revalidate = 21600;
const STEP_XP = 25;

export function generateStaticParams() { return certs.map(c => ({ slug: c.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cert = certs.find(c => c.slug === slug);
  return cert ? { title: `${cert.name} (${cert.code}) roadmap`, description: `Free step-by-step roadmap for ${cert.name}: ${cert.summary}` } : {};
}

export default async function CertPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cert = certs.find(c => c.slug === slug);
  if (!cert) notFound();
  const feed = await getFeed();
  const related = feed.items.filter(i => i.topics.includes(cert.feedTopic)).slice(0, 4);
  const next = cert.next ? certs.find(c => c.slug === cert.next) : undefined;
  const roles = careers.filter(r => r.certs.includes(cert.slug));

  return <>
    <PageBanner title={cert.name} sub={cert.summary} crumbs={[{ href: "/certifications", label: "Certification quests" }, { label: cert.code }]} chips={[cert.provider, cert.stage, cert.level, cert.weeks]} seed={cert.slug.length * 2} />
    <div className="kk-page">
      <div className="kk-detail">
        <div>
          <section className="kk-block">
            <h2>The roadmap</h2>
            <p className="kk-lead"><b>Good for:</b> {cert.forWho}</p>
            <QuestList prefix={`cert:${cert.slug}`} kind="cert" xp={STEP_XP} labelPrefix={cert.code}
              items={cert.steps.map(s => ({ id: s.id, title: s.title, text: s.why, resources: s.resources }))} />
          </section>
          {related.length > 0 && <section className="kk-block">
            <h2>Fresh on this topic</h2>
            <p className="kk-lead">Pulled in automatically from official blogs and trusted channels, refreshed every day.</p>
            <div className="kk-pane kk-feed-wrap"><LiveFeed items={related} /></div>
          </section>}
          {next && <p className="kk-pane kk-next-cert">Next quest after this one: <Link href={`/certifications/${next.slug}`}>{next.name} ({next.code})</Link></p>}
        </div>
        <aside className="kk-side">
          <div className="kk-pane">
            <h2>Exam facts</h2>
            <dl className="kk-facts">{cert.facts.map(f => <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}</dl>
            <p className="kk-facts-src"><a href={cert.official} target="_blank" rel="noreferrer">Official exam page</a> · checked {certsCheckedOn}. Prices and versions change; confirm before booking.</p>
          </div>
          {roles.length > 0 && <div className="kk-pane">
            <h2>Jobs that ask for it</h2>
            <ul>{roles.map(r => <li key={r.slug}><Link href={`/careers/${r.slug}`}>{r.title}<Arrow /></Link></li>)}</ul>
          </div>}
        </aside>
      </div>
    </div>
  </>;
}
