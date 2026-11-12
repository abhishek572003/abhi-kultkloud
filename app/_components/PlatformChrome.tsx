import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";
import GameHud from "./GameHud";
import { owner, socials } from "../_data/site";

const links = [{ href: "/certifications", label: "Certifications" }, { href: "/learning-paths", label: "Learning paths" }, { href: "/tools", label: "Toolkit" }, { href: "/cheatsheets", label: "Cheat sheets" }, { href: "/updates", label: "Live" }];
const footerLinks = [...links, { href: "/start-here", label: "Start here" }, { href: "/resources", label: "Resources" }, { href: "/quest", label: "Quest log" }, { href: "/search", label: "Search" }];

function Brand() {
  return <Link className="platform-brand kk-brand" href="/" aria-label="KultKloud home">
    <svg className="kk-brand-mark" aria-hidden="true" viewBox="0 0 32 24" width="30" height="22"><path d="M8.5 21.5h15.2a6 6 0 0 0 .9-11.9 8 8 0 0 0-15.3-1.5A6.8 6.8 0 0 0 8.5 21.5Z" fill="currentColor" /></svg>
    <span>Kult<b>Kloud</b></span>
  </Link>;
}

export default function PlatformChrome({ children }: { children: React.ReactNode }) {
  return <div className="platform-shell">
    <a className="kk-skip" href="#main">Skip to content</a>
    <header className="platform-header"><div className="platform-header-inner"><Brand /><nav className="platform-nav" aria-label="Primary navigation">{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav><div className="platform-tools"><GameHud /><Link className="search-link" href="/search" aria-label="Search">⌕ <span>Search</span><kbd>⌘ K</kbd></Link><ThemeToggle /><MobileNav links={links} /></div></div></header>
    <div className="platform-content" id="main">{children}</div>
    <footer className="kk-footer">
      <div className="kk-footer-main">
        <div><Brand /><p>Free certification quests, routes and tools for Cloud, DevOps and AI infrastructure. Updated automatically.</p></div>
        <nav aria-label="Footer"><ul>{footerLinks.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul></nav>
      </div>
      <div className="kk-footer-base">
        <span>© {new Date().getFullYear()} KultKloud</span>
        <span className="kk-footer-owner"><Link href="/about">Made by {owner}</Link>{socials.map(s => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>)}</span>
      </div>
    </footer>
  </div>;
}
