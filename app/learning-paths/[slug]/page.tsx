import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MODULE_XP, paths } from "../../_data/paths";
import { careers } from "../../_data/careers";
import { Arrow, PageBanner } from "../../_components/Kit";
import { QuestList } from "../../_components/Quest";
import LiveFeed from "../../_components/LiveFeed";
import { getFeed } from "../../_lib/feeds";

export const revalidate = 21600;

const FEED_TOPIC: Record<string, string> = { systems: "docker", "cloud-foundations": "aws", "git-cicd": "docker", "containers-kubernetes": "kubernetes", "infrastructure-delivery": "terraform", "observability-sre": "kubernetes", "ai-infrastructure": "ai" };

export function generateStaticParams() { return paths.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = paths.find(x => x.slug === slug);
  return p ? { title: `${p.name}: free learning path`, description: `${p.tagline} ${p.modules.length} modules with the best free videos, docs and labs.` } : {};
}

export default async function PathPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = paths.find(x => x.slug === slug);
  if (!p) notFound();
  const idx = paths.indexOf(p);
  const next = paths[idx + 1];
  const roles = p.leadsTo.map(s => careers.find(c => c.slug === s)!).filter(Boolean);
  const feed = await getFeed();
  const fresh = feed.items.filter(i => i.topics.includes(FEED_TOPIC[p.slug] ?? "")).slice(0, 4);

  return <>
    <PageBanner title={p.name} sub={p.tagline} crumbs={[{ href: "/learning-paths", label: "Learning paths" }, { label: p.name }]} chips={[p.weeks, `${p.modules.length} modules`, `${MODULE_XP} XP per module`]} seed={idx * 7 + 3} />
    <div className="kk-page">
      <div className="kk-detail">
        <div>
          <section className="kk-block">
            <h2>Modules</h2>
            <p className="kk-lead">Work top to bottom. Use one video and one hands-on resource per module, then tick it off.</p>
            <QuestList prefix={`path:${p.slug}`} kind="path" xp={MODULE_XP} labelPrefix={p.name}
              items={p.modules.map(m => ({ id: m.id, title: m.title, text: `You will be able to: ${m.outcome}`, resources: m.resources }))} />
          </section>
          {fresh.length > 0 && <section className="kk-block">
            <h2>New this week on this topic</h2>
            <p className="kk-lead">Pulled in automatically from official blogs and trusted channels, refreshed every day.</p>
            <div className="kk-pane kk-feed-wrap"><LiveFeed items={fresh} /></div>
          </section>}
        </div>
        <aside className="kk-side">
          <div className="kk-pane">
            <h2>Leads to these jobs</h2>
            <ul>{roles.map(r => <li key={r.slug}><Link href={`/careers/${r.slug}`}>{r.title}<Arrow /></Link></li>)}</ul>
          </div>
          {next && <div className="kk-pane">
            <h2>Next path</h2>
            <ul><li><Link href={`/learning-paths/${next.slug}`}>{next.name}<Arrow /></Link></li></ul>
          </div>}
          <div className="kk-pane kk-tip"><b>How to use this</b><p>Do not watch everything. Pick one video per module, do the hands-on part, and only then move on. Doing beats watching.</p></div>
        </aside>
      </div>
    </div>
  </>;
}
