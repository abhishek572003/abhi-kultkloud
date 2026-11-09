import type { Metadata } from "next";
import Link from "next/link";
import DomainGlyph from "../_components/DomainGlyph";
import { labDomains, labsCheckedOn, providers } from "../_data/freeLabs";

export const metadata: Metadata = { title: "Free hands-on labs", description: "Free Cloud, DevOps and AI labs from KodeKloud and EscBash, grouped by domain in the order to learn them." };

function Arrow() { return <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12L12 4M5.5 4H12v6.5" /></svg>; }

export default function LabsPage() {
  const total = labDomains.reduce((sum, domain) => sum + domain.labs.length, 0);
  return <main className="kk-home kk-labs">
    <header className="kk-labs-head">
      <h1>Free labs, in the order to do them.</h1>
      <p>Reading only gets you so far. These are {total} free lab tracks and skills, mostly from KodeKloud and EscBash, sorted into the same six stops as the KultKloud route, so you always know what to practise next.</p>
      <p className="kk-fresh"><span className="kk-fresh-dot" aria-hidden="true" />Checked {labsCheckedOn}</p>
    </header>

    <ul className="kk-providers" aria-label="How each provider is free">
      {providers.map(p => <li key={p.name}>
        <span className={`kk-provider kk-provider-${p.name.toLowerCase()}`}>{p.name}</span>
        <p>{p.how}</p>
        <a className="kk-text-link" href={p.href} target="_blank" rel="noreferrer">Full catalogue <Arrow /><span className="kk-sr">(opens in a new tab)</span></a>
      </li>)}
    </ul>

    <nav className="kk-jump" aria-label="Jump to a domain">
      {labDomains.map((d, i) => <a key={d.name} href={`#lab-${i + 1}`}><span>{i + 1}</span>{d.name}</a>)}
    </nav>

    {labDomains.map((domain, i) => <section key={domain.name} id={`lab-${i + 1}`} className="kk-lab-domain" aria-labelledby={`lab-${i + 1}-title`}>
      <div className="kk-lab-domain-head">
        <span className="kk-stop" aria-hidden="true">{i + 1}</span>
        <span className="kk-glyph"><DomainGlyph icon={domain.icon} /></span>
        <div>
          <h2 id={`lab-${i + 1}-title`}>{domain.name}</h2>
          <p>{domain.why}</p>
        </div>
      </div>
      <ul className="kk-lab-list">
        {domain.labs.map(lab => {
          const external = lab.href.startsWith("http");
          const inner = <>
            <span className={`kk-provider kk-provider-${lab.provider.toLowerCase()}`}>{lab.provider}</span>
            <span className="kk-lab-title">{lab.title}</span>
            <span className="kk-lab-scope">{lab.scope}</span>
            <span className="kk-lab-free">{lab.free}</span>
            <span className="kk-shelf-go"><Arrow />{external && <span className="kk-sr">(opens in a new tab)</span>}</span>
          </>;
          return <li key={lab.href + lab.title}>
            {external ? <a href={lab.href} target="_blank" rel="noreferrer">{inner}</a> : <Link href={lab.href}>{inner}</Link>}
          </li>;
        })}
      </ul>
    </section>)}

    <p className="kk-labs-note">KultKloud is not affiliated with KodeKloud or EscBash. Labs belong to their creators; free terms can change, so check each provider before you start.</p>
  </main>;
}
