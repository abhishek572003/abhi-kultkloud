import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";
import { owner, socials } from "../_data/site";

const links = [{ href: "/start-here", label: "Start here" }, { href: "/learning-paths", label: "Learning paths" }, { href: "/labs", label: "Labs" }, { href: "/projects", label: "Projects" }, { href: "/resources", label: "Resources" }];

function Brand() {
  return <Link className="platform-brand kk-brand" href="/" aria-label="KultKloud home">
    <svg className="kk-brand-mark" aria-hidden="true" viewBox="0 0 32 24" width="32" height="24"><path d="M8.5 21.5h15.2a6 6 0 0 0 .9-11.9 8 8 0 0 0-15.3-1.5A6.8 6.8 0 0 0 8.5 21.5Z" fill="currentColor" /></svg>
    <span>Kult<b>Kloud</b></span>
  </Link>;
}

export default function PlatformChrome({ children }: { children: React.ReactNode }) {
  return <div className="platform-shell">
    <a className="kk-skip" href="#main">Skip to content</a>
    <header className="platform-header"><div className="platform-header-inner"><Brand /><nav className="platform-nav" aria-label="Primary navigation">{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav><div className="platform-tools"><Link className="search-link" href="/search" aria-label="Search">⌕ <span>Search</span><kbd>⌘ K</kbd></Link><ThemeToggle /><MobileNav links={links} /></div></div></header>
    <div className="platform-content" id="main">{children}</div>
    <footer className="platform-footer"><div><Brand /><p>Curated free learning for Cloud, DevOps and AI infrastructure.</p><p className="kk-credit">Built and curated by <Link href="/about">{owner}</Link>.</p></div><div className="footer-links">{socials.map(s => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label} ↗</a>)}<a href="https://github.com/abhishek572003/abhi-kultkloud" target="_blank" rel="noreferrer">GitHub ↗</a></div></footer>
  </div>;
}
