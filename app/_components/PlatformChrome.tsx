import Link from "next/link";
import MobileNav from "./MobileNav";
import GameHud from "./GameHud";
import { LogoMark } from "./PixelWorld";
import { owner, socials } from "../_data/site";

const links = [
  { href: "/careers", label: "Careers" },
  { href: "/learning-paths", label: "Learning paths" },
  { href: "/certifications", label: "Certifications" },
  { href: "/projects", label: "Projects" },
  { href: "/tools", label: "Toolkit" },
  { href: "/updates", label: "Daily updates" },
];

const footer = [
  { title: "Learn", items: [{ href: "/start-here", label: "Start here" }, { href: "/learning-paths", label: "Learning paths" }, { href: "/certifications", label: "Certifications" }, { href: "/projects", label: "Portfolio projects" }] },
  { title: "Get hired", items: [{ href: "/careers", label: "Career paths" }, { href: "/updates", label: "Daily updates" }, { href: "/quest", label: "Your quest log" }] },
  { title: "Tools", items: [{ href: "/tools", label: "Toolkit" }, { href: "/cheatsheets", label: "Cheat sheets" }, { href: "/resources", label: "Study notes" }, { href: "/search", label: "Search" }] },
];

function Brand() {
  return <Link className="kk-brand" href="/" aria-label="KultKloud home"><LogoMark size={34} /><span>Kult<b>Kloud</b></span></Link>;
}

export default function PlatformChrome({ children }: { children: React.ReactNode }) {
  return <>
    <a className="kk-skip" href="#main">Skip to content</a>
    <header className="kk-header">
      <div className="kk-header-inner">
        <Brand />
        <nav className="kk-nav" aria-label="Primary">{links.map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}</nav>
        <div className="kk-tools">
          <GameHud />
          <Link className="kk-search" href="/search" aria-label="Search"><svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" shapeRendering="crispEdges"><path fill="currentColor" d="M5 1h5v1h1v1h1v5h-1v1h-1v1H5V9H4V8H3V3h1V2h1zm0 2v1H4v4h1v1h4V8h1V4H9V3zm6 7h1v1h1v1h1v1h1v2h-2v-1h-1v-1h-1v-1h-1v-1h1z" /></svg></Link>
          <MobileNav links={links} />
        </div>
      </div>
    </header>
    <main id="main">{children}</main>
    <footer className="kk-footer">
      <div className="kk-footer-inner">
        <div className="kk-footer-main">
          <div><Brand /><p>Job-focused routes, certification quests and the best free resources for Cloud, DevOps and AI infrastructure. Updated every day.</p></div>
          <div className="kk-footer-cols">
            {footer.map(col => <nav key={col.title} aria-label={col.title}><h3>{col.title}</h3><ul>{col.items.map(i => <li key={i.href}><Link href={i.href}>{i.label}</Link></li>)}</ul></nav>)}
          </div>
        </div>
        <div className="kk-footer-base">
          <span>© {new Date().getFullYear()} KultKloud · Free to learn, always.</span>
          <span className="kk-footer-owner"><Link href="/about">Made by {owner}</Link>{socials.map(s => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>)}</span>
        </div>
      </div>
    </footer>
  </>;
}
