import Link from "next/link";
import HomeHero from "./_components/HomeHero";
import PixelWorld from "./_components/PixelWorld";
import LiveFeed, { LiveStamp } from "./_components/LiveFeed";
import SpotlightCard from "./_components/reactbits/SpotlightCard";
import DomainGlyph from "./_components/DomainGlyph";
import { Arrow, Effort } from "./_components/Kit";
import { TaskProgress } from "./_components/Quest";
import { careers } from "./_data/careers";
import { certs } from "./_data/certs";
import { paths, resourceCount } from "./_data/paths";
import { projects } from "./_data/projects";
import { commandCount } from "./_data/cheatsheets";
import { cloudMap } from "./_data/cloudMap";
import { getFeed, SOURCES } from "./_lib/feeds";

export const revalidate = 21600; // daily updates section refreshes itself

const featuredCerts = ["aws-cloud-practitioner", "aws-solutions-architect-associate", "azure-administrator", "cka", "terraform-associate", "claude-certified-architect"];

const toolkit = [
  { href: "/tools#subnet", name: "Subnet calculator", what: "Plan VPC ranges without guesswork.", sample: ["10.0.0.0/16", "65,536 addresses", "65,531 usable in an AWS subnet"] },
  { href: "/tools#cron", name: "Cron explainer", what: "Read any schedule in plain English.", sample: ["0 9 * * 1-5", "At 09:00, on Monday to Friday."] },
  { href: "/tools#chmod", name: "chmod calculator", what: "Permissions as ticks, octal and a command.", sample: ["rwxr-xr-x", "chmod 755 deploy.sh"] },
  { href: "/tools#cloud-map", name: "Cloud translator", what: `${cloudMap.length} AWS, Azure and Google Cloud equivalents.`, sample: ["Lambda", "Azure Functions · Cloud Run functions"] },
  { href: "/cheatsheets", name: "Cheat sheets", what: `${commandCount} commands for Linux, Git, Docker, kubectl and Terraform.`, sample: ["kubectl logs <pod> --previous", "Logs from the last crashed container"] },
];

export default async function HomePage() {
  const feed = await getFeed();
  return <div className="kk-home">
    <section className="kk-world-hero" aria-labelledby="kk-hero-title">
      <PixelWorld />
      <HomeHero />
    </section>

    <div className="kk-page">
      <section className="kk-pane kk-live-strip" aria-labelledby="kk-live-title">
        <div>
          <p className="kk-live-badge"><span className="kk-live-dot" aria-hidden="true" /><span className="kk-tag kk-tag-mint">Updated daily</span></p>
          <h2 id="kk-live-title">What changed in cloud today</h2>
          <p>We update every day so you stay current with the DevOps and cloud market: new free videos from trusted teachers and official announcements from AWS, Kubernetes, CNCF and HashiCorp.</p>
          <LiveStamp fetchedAt={feed.fetchedAt} sourcesOk={feed.sourcesOk} total={SOURCES.length} />
          <p style={{ marginTop: 14 }}><Link className="kk-text-link" href="/updates">All daily updates <Arrow /></Link></p>
        </div>
        <LiveFeed items={feed.items} limit={5} />
      </section>

      <section className="kk-section kk-reveal" aria-labelledby="kk-jobs-title">
        <div className="kk-section-head">
          <div>
            <h2 id="kk-jobs-title">Effort in. Job out.</h2>
            <p>Six real jobs, from your first cloud role to AI infrastructure. Each shows how long it takes from zero, what it typically pays in India, and exactly what to learn.</p>
          </div>
          <Link className="kk-text-link" href="/careers">All career paths <Arrow /></Link>
        </div>
        <ol className="kk-ladder">
          {careers.map(c => <li key={c.slug}>
            <Link href={`/careers/${c.slug}`} className="kk-pane kk-rung">
              <span className="kk-rung-top"><span className="kk-rung-tier">Level {c.tier}</span><Effort level={c.tier} /></span>
              <h3>{c.title}</h3>
              <dl className="kk-rung-stats">
                <div><dt>From zero</dt><dd>{c.months}</dd></div>
                <div className="is-pay"><dt>Starts at</dt><dd>{c.entryPay}</dd></div>
              </dl>
              <span className="kk-chips">{c.skills.slice(0, 3).map(s => <span key={s} className="kk-chip">{s}</span>)}</span>
            </Link>
          </li>)}
        </ol>
        <p className="kk-disclaimer">Typical India ranges from public 2026 salary guides, cited on each role page. Real offers vary by city, company and skill.</p>
      </section>

      <section className="kk-section kk-reveal" aria-labelledby="kk-certs-title">
        <div className="kk-section-head">
          <div>
            <h2 id="kk-certs-title">Certification quests</h2>
            <p>{certs.length} of the most valued exams, each broken into steps with the exact free videos, docs, labs and practice to use. Tick steps off and earn XP.</p>
          </div>
          <Link className="kk-text-link" href="/certifications">All {certs.length} certifications <Arrow /></Link>
        </div>
        <ul className="kk-grid">
          {featuredCerts.map(slug => certs.find(c => c.slug === slug)!).map(c => <li key={c.slug}><Link className={`kk-pane kk-card kk-cert-card kk-cert-${c.provider.toLowerCase()}`} href={`/certifications/${c.slug}`}>
            <span className="kk-cert-code">{c.provider} · {c.code}</span>
            <h3 className="kk-cert-name">{c.name}</h3>
            <span className="kk-meta"><span className="kk-chip">{c.stage}</span><span className="kk-chip">{c.weeks}</span></span>
            <TaskProgress ids={c.steps.map(s => `cert:${c.slug}:${s.id}`)} />
          </Link></li>)}
        </ul>
      </section>

      <section className="kk-section kk-reveal" aria-labelledby="kk-paths-title">
        <div className="kk-section-head">
          <div>
            <h2 id="kk-paths-title">The best free resources, in order</h2>
            <p>Seven learning paths and {resourceCount} hand-checked resources: the best free videos, official docs, books and labs on the internet, one module at a time.</p>
          </div>
          <Link className="kk-text-link" href="/learning-paths">All learning paths <Arrow /></Link>
        </div>
        <ul className="kk-grid">
          {paths.slice(0, 6).map(p => <li key={p.slug}><Link className="kk-pane kk-card" href={`/learning-paths/${p.slug}`}>
            <span className="kk-card-top"><span className="kk-glyph"><DomainGlyph icon={p.icon} /></span><span className="kk-chip">{p.weeks}</span></span>
            <h3>{p.name}</h3><p>{p.tagline}</p>
            <TaskProgress ids={p.modules.map(m => `path:${p.slug}:${m.id}`)} />
          </Link></li>)}
        </ul>
      </section>

      <section className="kk-section kk-reveal" aria-labelledby="kk-projects-title">
        <div className="kk-section-head">
          <div>
            <h2 id="kk-projects-title">Projects that get interviews</h2>
            <p>Certifications open the door. Projects get you through it. Each one proves a skill recruiters ask for.</p>
          </div>
          <Link className="kk-text-link" href="/projects">All projects <Arrow /></Link>
        </div>
        <ul className="kk-grid">
          {projects.slice(0, 3).map(p => <li key={p.slug}><Link className="kk-pane kk-card" href={`/projects/${p.slug}`}>
            <span className="kk-card-top"><span className={`kk-tag ${p.level === "Beginner" ? "kk-tag-mint" : p.level === "Intermediate" ? "kk-tag-sky" : "kk-tag-rose"}`}>{p.level}</span><span className="kk-chip">{p.time}</span></span>
            <h3>{p.title}</h3><p>{p.proves}</p>
          </Link></li>)}
        </ul>
      </section>

      <section className="kk-section kk-reveal" aria-labelledby="kk-tools-title">
        <div className="kk-section-head">
          <div>
            <h2 id="kk-tools-title">Tools you will keep open</h2>
            <p>Subnets, schedules, permissions and the names of three clouds. Each tool runs in your browser.</p>
          </div>
          <Link className="kk-text-link" href="/tools">Open the toolkit <Arrow /></Link>
        </div>
        <ul className="kk-bento">
          {toolkit.map((t, i) => <li key={t.href} className={i === 0 ? "is-wide" : undefined}>
            <SpotlightCard className="kk-spot" spotlightColor="rgba(255, 210, 63, 0.16)" theme="dark">
              <Link href={t.href} className="kk-spot-link">
                <span className="kk-spot-name">{t.name}<Arrow /></span>
                <span className="kk-spot-what">{t.what}</span>
                <span className="kk-spot-sample" aria-hidden="true">{t.sample.map((line, j) => <span key={line} className={j === 0 ? "is-input" : undefined}>{line}</span>)}</span>
              </Link>
            </SpotlightCard>
          </li>)}
        </ul>
      </section>

      <section className="kk-pane kk-closer" aria-labelledby="kk-closer-title">
        <h2 id="kk-closer-title">Ready for level 2?</h2>
        <div className="kk-actions">
          <Link className="kk-button kk-button-pixel" href="/start-here">Choose your class</Link>
          <Link className="kk-button kk-button-ghost" href="/quest">Open your quest log</Link>
        </div>
      </section>
    </div>
  </div>;
}
