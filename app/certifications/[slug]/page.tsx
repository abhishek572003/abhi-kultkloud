import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { certs, certsCheckedOn } from "../../_data/certs";
import CertRoadmap from "../CertRoadmap";
import LiveFeed from "../../_components/LiveFeed";
import { getFeed } from "../../_lib/feeds";

export const revalidate = 21600; // 6 hours, same as FEED_REFRESH_SECONDS

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

  return <main className="kk-page">
    <nav className="kk-crumbs" aria-label="Breadcrumb"><Link href="/certifications">Certification quests</Link> / <span>{cert.code}</span></nav>
    <header className="kk-cert-head">
      <div>
        <span className="kk-cert-code">{cert.provider} · {cert.level} · {cert.weeks}</span>
        <h1>{cert.name}</h1>
        <p>{cert.summary}</p>
        <p className="kk-cert-for"><b>Good for:</b> {cert.forWho}</p>
      </div>
      <dl className="kk-facts">
        {cert.facts.map(f => <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}
        <div className="kk-facts-src"><dd><a href={cert.official} target="_blank" rel="noreferrer">Official exam page</a> · checked {certsCheckedOn}</dd></div>
      </dl>
    </header>
    <section aria-labelledby="road-title" className="kk-road-section">
      <h2 id="road-title">The roadmap</h2>
      <CertRoadmap cert={cert} />
    </section>
    {related.length > 0 && <section aria-labelledby="fresh-title" className="kk-road-section">
      <h2 id="fresh-title">Fresh on this topic</h2>
      <p className="kk-tool-note">Pulled in automatically from official blogs and trusted channels. Refreshes every 6 hours.</p>
      <LiveFeed items={related} />
    </section>}
    {next && <p className="kk-next-cert">Next quest after this one: <Link href={`/certifications/${next.slug}`}>{next.name} ({next.code})</Link></p>}
  </main>;
}
