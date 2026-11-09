# Repository Audit — abhi@KultKloud

Audited 2026-11-10 on branch `recovery/audit-and-design` (from `main` @ `0bb3a7e`).

## 1. Historical comparison

| | Educational MVP | Portfolio version (current `main`) |
|---|---|---|
| Commits | `b39d8aa` (2026-06-07) MVP build, `00fe379` CI, `cf14518` (2026-06-08) footer year tweak — last MVP commit | `4e77a85` → `0bb3a7e` (10 commits, all 2026-09-08) |
| Brand | "abhi KultKloud", dark zinc/green Tailwind | "abhi.tiwari/learn", cream paper + Georgia serif, light/dark toggle |
| Shell | `Navbar` + `Footer` components | `PlatformChrome` (header/footer) |
| Routes | `/`, `/about`, `/blog`, `/certifications`, `/courses`, `/labs`, `/resources`, `/roadmaps` | All MVP routes kept, plus `/start-here`, `/learning-paths[/slug]`, `/guides/[slug]`, `/labs/[slug]`, `/projects[/slug]`, `/search`, `sitemap.xml`, `robots.txt`, 404 |
| Content | 6 course stubs, roadmaps, labs, blog stubs, resources (all "Coming soon") | Learning journey timeline, 3 guides, 4 learning paths, 1 lab detail, 3 projects, credentials, 3 PDFs |
| Focus | Beginner Cloud/DevOps education | Personal technical learning portfolio |

The deployed site (https://abhi-kultkloud.vercel.app) currently serves the **portfolio version** (verified: title "Abhishek Tiwari | Technical Learning Portfolio", `/start-here` returns 200). Exact deployed commit not verified (no Vercel access used).

No Flutter code exists anywhere in the Git history.

## 2. Current functionality

- 28 statically generated routes; no server runtime required.
- Client-side search (`/search`) over `app/_data/platform.ts`, with ⌘K/Ctrl+K focus.
- Light/dark theme toggle persisted in `localStorage`.
- SEO: metadata, Open Graph, sitemap, robots.
- Downloadable PDFs in `public/resources/`.

## 3. Reusable functionality

- **Data-driven content** in `app/_data/*.ts` (courses, roadmaps, labs, blog, resources, certifications, platform, projects) — good seed for a learning platform.
- **Detail-route pattern** (`[slug]` + `generateStaticParams`) for guides/labs/paths/projects.
- **Search client** and **ThemeToggle** — small, dependency-free.
- **Learning-oriented IA from the portfolio**: Start here → Learning paths → Guides → Labs → Projects. This is already closer to a learning platform than the MVP.
- **From the MVP**: course catalogue, roadmap list, and the beginner positioning/copy (courses.ts, roadmaps.ts, blog.ts).

## 4. Problems and risks

**Product / UX**
- Two design systems coexist: `/roadmaps`, `/courses`, `/blog` still render the old dark-zinc Tailwind MVP look inside the new cream chrome.
- Orphaned components: `Navbar.tsx`, `Footer.tsx`, `NewsletterForm.tsx` are not used by the layout. `NewsletterForm` is a placeholder (no backend).
- "Coming soon" placeholders: course cards, roadmap links, blog, About social links (`href="#"`).
- Identity drift: brand is "abhi.tiwari/learn" in UI, "abhi KultKloud" in repo/URL.

**Mobile**
- Below 800px the primary nav is `display:none` with **no menu button** — mobile users can only reach pages via the home page, footer, or search.
- Homepage hero long lines (~108 chars) on desktop.

**Accessibility** (Impeccable detector on running site)
- Low contrast: `#f2c776` on `#f3eee5` (1.4:1), `#b8bfbd` on `#f3eee5` (1.6:1), one 1.0:1 text; legacy pages `#52525c` on `#18181b` (2.3:1).
- Many 10px functional labels (dates, "verified").
- Primary hero button appears washed out in dark mode.
- Theme applied after hydration → possible flash of wrong theme.

**Code quality**
- `app/platform.css` and `app/platform-extra.css` are single-line minified CSS committed as source; several TSX files are one-line minified (e.g. `SearchClient.tsx`, `start-here/page.tsx`). Hard to maintain/diff.
- Styling split across `globals.css`, `platform.css`, `platform-extra.css`, `visual-refresh.css` (override layer loaded last) plus Tailwind utilities in legacy pages.
- `playwright` is a devDependency but no tests or test script exist.

**Performance**
- `public/resources/abhishek-tiwari-devops-masterclass-notes.pdf` is **29 MB** committed to Git (and served from Vercel). Bloats clone and repo history.
- System fonts only (Georgia/Arial) — fast, but generic.

**Security**
- `npm audit --omit=dev`: 1 high (`nanoid` ≤3.3.17), 1 moderate (`baseline-browser-mapping`) — both transitive, fixable with `npm audit fix`; low practical risk for a static site. Not fixed (out of scope).
- No secrets, env vars, forms posting data, or third-party scripts found.
- `.claude/settings.local.json` contains Windows-era permission allow-list (committed).
- External links use `rel="noreferrer"`.

## 5. Recommended baseline

**Use current `main` (portfolio version) as the code baseline**, and recover the MVP's *educational positioning and content* into it — not its code or styling.

Reasons: it is what is deployed, it builds cleanly, its IA (start here / paths / guides / labs / projects / search) already fits a learning platform, and it is a superset of MVP routes. The MVP adds only beginner course/roadmap data and copy, which can be migrated into the new route structure during the redesign.
