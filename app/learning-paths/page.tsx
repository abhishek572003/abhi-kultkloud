import type { Metadata } from "next";
import Link from "next/link";
import { MODULE_XP, paths, resourceCount } from "../_data/paths";
import { PageBanner } from "../_components/Kit";
import DomainGlyph from "../_components/DomainGlyph";
import { TaskProgress } from "../_components/Quest";

export const metadata: Metadata = { title: "Learning paths", description: `Seven free learning paths for Cloud, DevOps and AI infrastructure, with ${resourceCount} hand-picked resources: the best free videos, docs, books and labs.` };

export default function PathsPage() {
  return <>
    <PageBanner title="Learning paths" sub={`Seven paths, each split into modules with the best free videos, docs, books and labs we could find. ${resourceCount} resources in total, every link checked. Tick off a module for ${MODULE_XP} XP.`} chips={["Free resources only", "Checked by hand", "Ordered for beginners"]} seed={21} />
    <div className="kk-page">
      <section className="kk-section">
        <ul className="kk-grid">
          {paths.map((p, i) => <li key={p.slug}><Link className="kk-pane kk-card" href={`/learning-paths/${p.slug}`}>
            <span className="kk-card-top"><span className="kk-glyph"><DomainGlyph icon={p.icon} /></span><span className="kk-tag kk-tag-lilac">Path {i + 1}</span></span>
            <h2 >{p.name}</h2>
            <p>{p.tagline}</p>
            <span className="kk-meta"><span className="kk-chip">{p.weeks}</span><span className="kk-chip">{p.modules.length} modules</span></span>
            <TaskProgress ids={p.modules.map(m => `path:${p.slug}:${m.id}`)} />
          </Link></li>)}
        </ul>
      </section>
    </div>
  </>;
}
