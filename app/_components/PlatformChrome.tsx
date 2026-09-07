import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [{ href: "/start-here", label: "Start here" }, { href: "/learning-paths", label: "Learning paths" }, { href: "/labs", label: "Labs" }, { href: "/projects", label: "Projects" }, { href: "/resources", label: "Resources" }, { href: "/certifications", label: "Credentials" }];

export default function PlatformChrome({ children }: { children: React.ReactNode }) {
  return <div className="platform-shell">
    <header className="platform-header"><div className="platform-header-inner"><Link className="platform-brand" href="/"><span className="brand-mark">AT</span><span>abhi.tiwari<span className="brand-muted">/learn</span></span></Link><nav className="platform-nav" aria-label="Primary navigation">{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav><div className="platform-tools"><Link className="search-link" href="/search">⌕ <span>Search</span><kbd>⌘ K</kbd></Link><ThemeToggle /></div></div></header>
    <div className="platform-content">{children}</div>
    <footer className="platform-footer"><div><Link className="platform-brand" href="/"><span className="brand-mark">AT</span><span>abhi.tiwari<span className="brand-muted">/learn</span></span></Link><p>A calm, practical knowledge platform for cloud and DevOps.</p></div><div className="footer-links"><Link href="/about">About</Link><Link href="/certifications">Certifications</Link><a href="https://github.com/abhishek572003/abhi-kultkloud" target="_blank" rel="noreferrer">GitHub ↗</a></div></footer>
  </div>;
}
