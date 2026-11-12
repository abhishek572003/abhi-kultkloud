import Link from "next/link";
import HomeHero from "./_components/HomeHero";
import PixelWorld from "./_components/PixelWorld";
import RouteTracker from "./_components/RouteTracker";
import LiveFeed, { LiveStamp } from "./_components/LiveFeed";
import SpotlightCard from "./_components/reactbits/SpotlightCard";
import { CertProgress } from "./certifications/CertRoadmap";
import { devopsStarterShelf, resourcesCheckedOn } from "./_data/discovery";
import { commandCount } from "./_data/cheatsheets";
import { cloudMap } from "./_data/cloudMap";
import { certs } from "./_data/certs";
import { getFeed, SOURCES } from "./_lib/feeds";

export const revalidate = 21600; // live section refreshes itself every 6 hours

function Arrow() { return <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12L12 4M5.5 4H12v6.5" /></svg>; }

const toolkit = [
  { href: "/tools#subnet", name: "Subnet calculator", what: "Plan VPC ranges without guesswork.", sample: ["10.0.0.0/16", "65,536 addresses", "65,531 usable in an AWS subnet"] },
  { href: "/tools#cron", name: "Cron explainer", what: "Read any schedule in plain English.", sample: ["0 9 * * 1-5", "At 09:00, on Monday to Friday."] },
  { href: "/tools#chmod", name: "chmod calculator", what: "Permissions as ticks, octal and a command.", sample: ["rwxr-xr-x", "chmod 755 deploy.sh"] },
  { href: "/tools#cloud-map", name: "Cloud translator", what: `${cloudMap.length} AWS, Azure and Google Cloud equivalents.`, sample: ["Lambda", "Azure Functions · Cloud Run functions"] },
  { href: "/cheatsheets", name: "Cheat sheets", what: `${commandCount} commands for Linux, Git, Docker, kubectl and Terraform.`, sample: ["kubectl logs <pod> --previous", "Logs from the last crashed container"] },
];

export default async function HomePage() {
  const feed = await getFeed();
  return <main className="kk-home">
    <section className="kk-world-hero" aria-labelledby="kk-hero-title">
      <PixelWorld />
      <HomeHero />
    </section>

    <section className="kk-section kk-live" aria-labelledby="kk-live-title">
      <div className="kk-live-head">
        <div>
          <h2 id="kk-live-title">This site keeps itself up to date.</h2>
          <p>Cloud moves fast. Every 6 hours KultKloud checks official blogs and trusted YouTube channels and pulls in what is new, so the roadmaps never go stale.</p>
          <LiveStamp fetchedAt={feed.fetchedAt} sourcesOk={feed.sourcesOk} total={SOURCES.length} />
        </div>
        <Link className="kk-text-link" href="/updates">See all live updates <Arrow /></Link>
      </div>
      <LiveFeed items={feed.items} limit={6} />
    </section>

    <section id="quests" className="kk-section" aria-labelledby="kk-quests-title">
      <div className="kk-section-head kk-section-head-row">
        <div>
          <h2 id="kk-quests-title">Certification quests.</h2>
          <p>Six exams, each broken into steps with the exact free videos, docs and practice to use. Tick steps off, earn XP, walk into the exam ready.</p>
        </div>
        <Link className="kk-text-link" href="/certifications">All certification roadmaps <Arrow /></Link>
      </div>
      <ul className="kk-cert-grid">
        {certs.map(c => <li key={c.slug}>
          <Link href={`/certifications/${c.slug}`} className={`kk-cert-card kk-cert-${c.provider.toLowerCase()}`}>
            <span className="kk-cert-code">{c.provider} · {c.code}</span>
            <span className="kk-cert-name">{c.name}</span>
            <span className="kk-cert-meta"><span>{c.level}</span><span>{c.weeks}</span><span>{c.steps.length} steps</span></span>
            <CertProgress cert={c} />
          </Link>
        </li>)}
      </ul>
    </section>

    <section id="route" className="kk-section kk-domains" aria-labelledby="kk-route-title">
      <div className="kk-section-head">
        <h2 id="kk-route-title">New to all this? Follow the route.</h2>
        <p>Six stops, in the order that makes sense. Each one builds on the last. Finish a stop, tick it off, collect 50 XP.</p>
        <Link className="kk-text-link" href="/learning-paths">See every learning path <Arrow /></Link>
      </div>
      <RouteTracker />
    </section>

    <section className="kk-section" aria-labelledby="kk-tools-title">
      <div className="kk-section-head kk-section-head-row">
        <div>
          <h2 id="kk-tools-title">Tools for the parts that trip people up.</h2>
          <p>Subnets, schedules, permissions and the names of three clouds. Each tool runs in your browser and gives you something to copy.</p>
        </div>
        <Link className="kk-text-link" href="/tools">Open the toolkit <Arrow /></Link>
      </div>
      <ul className="kk-bento">
        {toolkit.map((t, i) => <li key={t.href} className={i === 0 ? "is-wide" : undefined}>
          <SpotlightCard className="kk-spot" spotlightColor="rgba(255, 210, 63, 0.18)" theme="dark">
            <Link href={t.href} className="kk-spot-link">
              <span className="kk-spot-name">{t.name}<Arrow /></span>
              <span className="kk-spot-what">{t.what}</span>
              <span className="kk-spot-sample" aria-hidden="true">{t.sample.map((line, j) => <span key={line} className={j === 0 ? "is-input" : undefined}>{line}</span>)}</span>
            </Link>
          </SpotlightCard>
        </li>)}
      </ul>
    </section>

    <section className="kk-section kk-shelf" aria-labelledby="kk-shelf-title">
      <div className="kk-shelf-head">
        <div>
          <h2 id="kk-shelf-title">A DevOps starter shelf.</h2>
          <p>Six free resources in the order we would use them. Official docs first, then the best long-form videos.</p>
        </div>
        <p className="kk-fresh"><span className="kk-fresh-dot" aria-hidden="true" />Links checked {resourcesCheckedOn}</p>
      </div>
      <ol className="kk-shelf-list">
        {devopsStarterShelf.map(item => <li key={item.href}>
          <a href={item.href} target="_blank" rel="noreferrer">
            <span className={`kk-kind kk-kind-${item.kind.toLowerCase()}`}>{item.kind}</span>
            <span className="kk-shelf-title">{item.title}</span>
            <span className="kk-shelf-source">{item.source}{item.length && <> · {item.length}</>}</span>
            <span className="kk-shelf-free">Free</span>
            <span className="kk-shelf-go"><Arrow /><span className="kk-sr">(opens in a new tab)</span></span>
          </a>
        </li>)}
      </ol>
    </section>

    <section className="kk-section kk-closer" aria-labelledby="kk-closer-title">
      <h2 id="kk-closer-title">Ready for level 2?</h2>
      <div className="kk-actions">
        <Link className="kk-button kk-button-pixel" href="/quest">Open your quest log</Link>
        <Link className="kk-button kk-button-quiet" href="/start-here">Not sure where to start?</Link>
      </div>
    </section>
  </main>;
}
