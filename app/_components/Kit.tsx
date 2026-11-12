// Shared server-side building blocks so every page speaks the same pixel-game language.
import Link from "next/link";
import { PixelBanner } from "./PixelWorld";
import { Arrow, ResourceLinks, type AnyRes } from "./Links";

export { Arrow, ResourceLinks, type AnyRes };

export function PageBanner({ title, sub, crumbs, chips, seed, children }: {
  title: string; sub?: string; crumbs?: { href?: string; label: string }[]; chips?: string[]; seed?: number; children?: React.ReactNode;
}) {
  return <section className="kk-banner" aria-labelledby="page-title">
    <PixelBanner seed={seed} />
    <div className="kk-banner-inner">
      {crumbs && <nav className="kk-crumbs" aria-label="Breadcrumb">{crumbs.map((c, i) => <span key={c.label}>{i > 0 && " / "}{c.href ? <Link href={c.href}>{c.label}</Link> : c.label}</span>)}</nav>}
      <h1 id="page-title">{title}</h1>
      {sub && <p className="kk-banner-sub">{sub}</p>}
      {chips && <div className="kk-chips">{chips.map(c => <span key={c} className="kk-chip">{c}</span>)}</div>}
      {children}
    </div>
  </section>;
}

export function Effort({ level, of = 6 }: { level: number; of?: number }) {
  return <span className="kk-effort" aria-label={`Effort ${level} of ${of}`}>{Array.from({ length: of }, (_, i) => <i key={i} className={i < level ? "on" : undefined} />)}</span>;
}
