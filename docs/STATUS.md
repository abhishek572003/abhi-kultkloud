# Status — abhi@KultKloud

Last updated: 2026-11-10

## Current development branch

`recovery/audit-and-design` (created from `main` @ `0bb3a7e`). Not pushed.

## Build / test status (macOS arm64, Node 26.5.1, npm 11.17.0)

| Check | Result |
|---|---|
| `npm ci` | Pass |
| `npm run lint` | Pass (0 issues) |
| `npm run build` | Pass — 28 static routes |
| Tests | None configured (`playwright` installed but unused) |
| Local run | `npm run build && npm run start` → http://localhost:3000 (verified 200); `npm run dev` for development |

## Confirmed working

- All 28 routes prerender; home, roadmaps, guides verified in a browser.
- Client-side search with ⌘K.
- Light/dark theme toggle.
- Sitemap, robots, metadata.
- PDF downloads in `public/resources/`.
- Live site serves the portfolio version.

## Incomplete / broken

- Mobile navigation missing (no menu below 800px).
- `/roadmaps`, `/courses`, `/blog` use the old MVP styling.
- "Coming soon" placeholders (courses, roadmaps, blog, About social links).
- Newsletter/waitlist form is a placeholder and unused.
- Contrast and 10px text issues (see REPO_AUDIT.md).
- No automated tests.

## Tooling

- Impeccable 4.8.2 installed at project scope (`.claude/skills/impeccable`, `.claude/agents/impeccable-*`), **hooks not enabled**. Not yet initialised (`/impeccable init` not run). Engine telemetry is on by default.

## Pending decisions

1. Confirm baseline: current `main` + recovered MVP educational content (recommended).
2. Brand name in UI: "abhi@KultKloud" vs "abhi.tiwari/learn".
3. Design direction (awaiting founder's Instagram references).
4. Whether to move the 29 MB PDF out of Git (e.g. external storage/Releases).
5. Whether to enable the Impeccable design hook and turn off its telemetry.
6. Whether to commit the Impeccable install and these docs to the recovery branch.
