# Architecture — abhi@KultKloud

## Current state (verified)

**Stack**
- Next.js 16.2.7 (App Router), React 19.2.4, TypeScript 5
- Tailwind CSS 4 (via `@tailwindcss/postcss`) — used only by legacy MVP pages; newer pages use hand-written CSS
- ESLint 9 with `eslint-config-next`
- npm with `package-lock.json`

**Structure**
```
app/
  layout.tsx            Root layout → PlatformChrome (header, footer, theme toggle)
  page.tsx              Home (learning journey, capabilities, credentials)
  _components/          PlatformChrome, ThemeToggle (+ unused MVP Navbar, Footer, NewsletterForm, SectionTitle)
  _data/                Typed content modules (courses, roadmaps, labs, blog, resources, certifications, platform, projects)
  start-here/ learning-paths/[slug] guides/[slug] labs/[slug] projects/[slug] search/
  about/ blog/ certifications/ courses/ resources/ roadmaps/
  sitemap.ts robots.ts not-found.tsx
  globals.css → platform.css, platform-extra.css; visual-refresh.css (override layer)
public/resources/       Downloadable PDFs (~31 MB total)
```

All pages are static (SSG). Content is compiled in from TypeScript data files; there is no CMS.

**Hosting / CI**
- Hosted on Vercel at https://abhi-kultkloud.vercel.app (live content matches the portfolio version; Vercel project settings not inspected). No `vercel.json`; defaults used.
- GitHub Actions: `.github/workflows/build.yml` runs `npm ci` + `npm run build` on Node 20 for pushes/PRs to `main`. No lint or test step.

**Backend / data**
- None. No API routes, database, auth, environment variables, or analytics.

## Recommended future architecture (proposal — not implemented)

- Keep Next.js static generation on Vercel; no backend until a feature truly needs one.
- Move learning content to MDX or Markdown files in the repo (one file per guide/lab/path) to replace large TS data files.
- One styling system: design tokens as CSS custom properties + a single stylesheet strategy (either Tailwind or plain CSS, not both).
- Shared layout primitives for lesson pages (sidebar TOC, code block, callout, progress).
- Add lint to CI; add a few Playwright smoke tests (home, a guide, search, mobile nav).
- Large PDFs hosted outside Git.
- Defer auth, progress tracking, and database until there is a validated need; if added later, prefer a managed service and keep it isolated from content.

## Update (13 Nov 2026): content that keeps itself fresh

- **Live feed (automatic, every 6 hours):** `app/_lib/feeds.ts` reads 7 public feeds (TechWorld with Nana, KodeKloud and freeCodeCamp YouTube channels; Kubernetes Blog; AWS What's New; HashiCorp Blog; CNCF). Pages that show it (`/`, `/updates`, `/certifications/[slug]`) use `export const revalidate = 21600`, so Vercel regenerates them in the background (ISR). No backend, no API keys.
- **Link health (weekly):** `.github/workflows/content-check.yml` runs `scripts/check-links.mjs` every Monday and opens a GitHub issue listing any broken resource link.
- **Curation (proposed):** a weekly Claude scheduled routine to review exam changes and better free resources and open a pull request for review. Not set up yet.
- **Gamification:** `app/_lib/game.ts` keeps XP, levels, badges and streaks in the visitor's browser (localStorage). Nothing is sent to a server.
- **Certification roadmaps:** `app/_data/certs.ts`, facts checked on official pages on 13 Nov 2026.

## Update (13 Nov 2026, round 4): job-focused rebuild

- **Content model (app/_data):** `careers.ts` (6 roles with time, pay bands and sources), `paths.ts` (7 learning paths, modules with verified free resources), `certs.ts` (13 certifications in 3 stages, EscBash practice linked), `projects.ts` (6 portfolio projects). Search (`platform.ts`) and the sitemap are generated from these.
- **One design system:** `app/kultkloud.css` only (legacy CSS removed). Night-plum palette, Silkscreen pixel display font, Nunito body. Every inner page uses `PageBanner` (pixel sky) from `app/_components/Kit.tsx`; quest checklists are `QuestList` in `Quest.tsx`.
- **Retired routes** (redirected in next.config.ts): /courses, /roadmaps, /blog, /guides/*, /labs/*.
