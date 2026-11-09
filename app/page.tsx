import Link from "next/link";
import DomainGlyph from "./_components/DomainGlyph";
import InflatedCloud from "./_components/InflatedCloud";
import { devopsStarterShelf, domains, resourcesCheckedOn } from "./_data/discovery";
import { socials } from "./_data/site";

function Arrow() { return <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12L12 4M5.5 4H12v6.5" /></svg>; }

export default function HomePage() {
  return <main className="kk-home">
    <section className="kk-hero" aria-labelledby="kk-hero-title">
      <div className="kk-hero-copy">
        <h1 id="kk-hero-title">Learn the cloud in the order it makes sense.</h1>
        <p className="kk-lede">KultKloud maps Cloud, DevOps and AI infrastructure into beginner-friendly routes, then points you to hand-picked free videos and docs for every stop.</p>
        <div className="kk-actions">
          <a className="kk-button kk-button-primary" href="#domains">Find your starting point</a>
          <Link className="kk-button kk-button-ghost" href="/start-here">How the routes work</Link>
        </div>
        <ul className="kk-promises" aria-label="What KultKloud offers">
          <li>Free resources only</li><li>Picked by a practitioner</li><li>No sign-up</li>
        </ul>
      </div>
      <div className="kk-hero-art"><InflatedCloud /></div>
    </section>

    <section id="domains" className="kk-section kk-domains" aria-labelledby="kk-domains-title">
      <div className="kk-section-head">
        <h2 id="kk-domains-title">Pick a domain. Follow the route.</h2>
        <p>Each stop builds on the one before it. New to all of this? Start at the top. Already comfortable with Linux? Jump in wherever you are.</p>
        <Link className="kk-text-link" href="/learning-paths">See every learning path <Arrow /></Link>
      </div>
      <ol className="kk-route">
        {domains.map((domain, index) => {
          const body = <>
            <span className="kk-stop" aria-hidden="true">{index + 1}</span>
            <span className="kk-glyph"><DomainGlyph icon={domain.icon} /></span>
            <span className="kk-route-main">
              <span className="kk-route-name">{domain.name}</span>
              <span className="kk-route-summary">{domain.summary}</span>
              <span className="kk-chips">{domain.topics.map(topic => <span key={topic}>{topic}</span>)}</span>
            </span>
            <span className="kk-route-meta">{domain.meta}{domain.href && <Arrow />}</span>
          </>;
          return <li key={domain.name} className={domain.href ? "kk-route-item" : "kk-route-item is-pending"}>
            {domain.href ? <Link href={domain.href}>{body}</Link> : <div>{body}</div>}
          </li>;
        })}
      </ol>
    </section>

    <section className="kk-section kk-shelf" aria-labelledby="kk-shelf-title">
      <div className="kk-shelf-head">
        <div>
          <h2 id="kk-shelf-title">A DevOps starter shelf</h2>
          <p>A sample of how KultKloud curates: six free resources, in the order we would use them, from pipelines to containers to infrastructure as code.</p>
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

    <section className="kk-section kk-curator" aria-labelledby="kk-curator-title">
      <div className="kk-curator-copy">
        <h2 id="kk-curator-title">Built by Abhishek Tiwari, who just walked the route.</h2>
        <p>Abhishek Tiwari spent 2025–2026 working through Linux, AWS, Jenkins, Docker, Kubernetes, Terraform and GenAI, kept a dated record of what actually helped, and earned Azure Fundamentals and Claude Certified Architect – Foundations along the way. KultKloud is that record, cleaned up for the next person.</p>
      </div>
      <ul className="kk-curator-links">
        <li><Link href="/about#journey"><b>The learning record</b><span>Six dated phases, Sep 2025 – Sep 2026</span><Arrow /></Link></li>
        <li><Link href="/resources"><b>Study notes</b><span>DevOps MasterClass and Linux notes (PDF)</span><Arrow /></Link></li>
        {socials.map(s => <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer"><b>{s.label}</b><span>{s.handle}</span><Arrow /></a></li>)}
      </ul>
    </section>

    <section className="kk-section kk-closer" aria-labelledby="kk-closer-title">
      <h2 id="kk-closer-title">Not sure where you fit?</h2>
      <div className="kk-actions">
        <Link className="kk-button kk-button-primary" href="/start-here">Choose where you are</Link>
        <Link className="kk-button kk-button-quiet" href="/search">Search the library</Link>
      </div>
    </section>
  </main>;
}
