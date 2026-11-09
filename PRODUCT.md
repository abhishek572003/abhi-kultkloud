# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: career switchers, students and beginners moving into Cloud, DevOps and AI infrastructure. They don't know where to start, are overwhelmed by scattered free material, and need a trustworthy order to learn in. Confirmed 2026-11-10.

Secondary (not yet confirmed as a priority): junior engineers filling specific gaps.

## Product Purpose

KultKloud is a curated learning discovery platform for Cloud, DevOps and AI Infrastructure. It helps visitors discover technical domains, follow beginner-friendly learning journeys, and find carefully selected free videos and documentation. Success: a beginner leaves knowing which domain to start with and holding a short list of good free resources in the right order.

## Positioning

Curation and sequencing by a practitioner who walked the path (Abhishek Tiwari's dated 2025–2026 learning record), not a hosted course or lab provider. KultKloud points to the best free material rather than reproducing it.

## Capabilities and Constraints

- Static Next.js site (App Router), deployed on Vercel; no backend, accounts, database or payments.
- Not an LMS and not a hosted cloud-lab platform. No paid labs.
- Freshness/relevance information for resources is a planned future capability (open decision, not built).
- Automated content discovery, scraping and AI automation are out of scope.
- Existing routes: start-here, learning-paths, guides, labs, projects, resources, roadmaps, courses, blog, certifications, about, search.

## Brand Commitments

- Name shown in the UI: "KultKloud" (confirmed 2026-11-10; the "abhi@" prefix is dropped from the header). Repository/project name remains abhi-kultkloud.
- Owner and curator: Abhishek Tiwari.
- Voice: plain, beginner-friendly, practical over theoretical; "sequence matters"; free to start.

## Evidence on Hand

- Curator learning record Sep 2025 – Sep 2026 (homepage timeline data, `app/page.tsx` before redesign; moved to `/about`).
- Credentials: Microsoft Azure Fundamentals; Claude Certified Architect – Foundations (Credly link in `/certifications`).
- PDFs in `public/resources/` (DevOps MasterClass notes, Shell/Linux visual notes, learning record).
- Guides, learning paths, labs and projects data in `app/_data/`.
- Absent: learner counts, testimonials, partner logos, ratings. Do not fabricate them.

## Product Principles

1. Order before volume: always show where to start and what comes next.
2. Free and verified: link only to resources that are free and checked; label sample content as sample.
3. Curator, not course: credit original creators and send people to them.
4. Beginner language first; technical depth is reachable, never a gate.

## Accessibility & Inclusion

WCAG 2.1 AA contrast and keyboard access; usable on low-end mobile devices and slow connections; respect reduced-motion preferences.
