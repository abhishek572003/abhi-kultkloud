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
