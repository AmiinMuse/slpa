# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

The website for the Somaliland Professionals Association of America (myslpa.org), rebuilt from a
GoDaddy Website Builder site into a Next.js 16 App Router app. Deployed on Vercel.

Plain JavaScript (no TypeScript), React 19, and one hand-written global stylesheet — no CSS
modules, no Tailwind, no component library. `docs/DESIGN.md` records the redesign decisions and
still-open questions; read it before proposing IA or brand changes.

## Commands

```bash
npm run dev        # dev server on :3000
npm run build      # production build — the only real check before pushing
npm start          # serve the production build
npm run lint       # eslint (flat config, eslint-config-next core-web-vitals)
```

Node 20 (`.nvmrc`). There is no test suite and no test runner installed; `npm run build` plus
`npm run lint` are the verification available.

For the membership form to work locally, `cp .env.example .env.local` and fill in
`DATABASE_URL` (see `docs/MEMBERSHIP-FORM.md` §6). Without it, pages still render and
`/api/membership` returns a 503 with a fallback message — by design.

## Architecture

**Content lives in the repo, not a CMS.** Phase 1 of the design doc is deliberately static: page
copy is JSX, and repeated data is a module-scope `const` array in the page or a sibling data file
(`app/conference/2024-atlanta/photos.js`, `app/conference/regionalPhotos.js`,
`NAV_LINKS` in `Header.js`). Adding content means editing those arrays, not wiring a fetch.

**Op-eds are block arrays, not JSX.** Each article page (`app/op-eds/<slug>/page.js`) exports
metadata plus a `BLOCKS` array of `{ t, s }` objects (`lead`, `p`, `h3`, `img`, `src`, …) and
renders `<OpedArticle blocks={BLOCKS} …/>`. `OpedArticle.js` owns the switch that maps block
types to markup and auto-links URLs and email addresses. Add a new article by copying an existing
slug directory; add a new block type in `OpedArticle.js`.

**Photo galleries are `{ src, width, height }` records** grouped into "chapters"
(`{ title, note, photos }`) and fed to `Gallery.js`, which renders the grid plus a keyboard-
navigable lightbox. Intrinsic dimensions are stored per photo so images reserve layout space and
portrait shots aren't cropped to landscape. The site uses plain `<img loading="lazy">`
throughout, **not** `next/image` — keep that consistent.

**Server components by default.** Only seven files carry `"use client"` (`Header`, `Gallery`,
`ConferenceSlideshow`, `RegionalEvents`, `MembershipForm`, `ContactForm`, `Reveal`). Pages
themselves are server components exporting `metadata`; interactivity is pushed into a client
component. `Reveal` is the scroll-in animation wrapper (IntersectionObserver + a `.reveal.in`
class) used to stagger sections.

**Membership registration** is the one piece with a backend:

```text
MembershipForm (client) → POST /api/membership → lib/db.js → Postgres (Netlify Database)
```

- `lib/membership.js` holds the choice options, per-field length caps, required-field list, and
  email check, imported by **both** the form and the API route so client and server validation
  cannot drift. Change a question here, not in two places.
- `app/api/membership/route.js` is a deliberate server-side proxy: it keeps the database
  connection string out of the client bundle, revalidates everything server-side, and drops
  honeypot submissions with a fake success.
- `lib/db.js` is the only module that knows where registrations go — swapping storage should
  touch that file alone. It holds a `pg.Pool` cached on `globalThis` so warm serverless
  invocations reuse one connection pool.
- `scripts/db/schema.sql` is the `registrations` table definition, applied by hand (there's no
  migration tooling — one table, changed rarely). The app deploys on Vercel, not Netlify, so
  Netlify Database's auto-migration/branching features don't apply here; it's used as an
  ordinary Postgres connection string instead.

`docs/MEMBERSHIP-FORM.md` is the full rationale, including what was deliberately not built.

## Styling

`app/globals.css` is the single stylesheet — ~390 lines of global class selectors, written in a
compact one-declaration-per-line style. Design tokens are CSS custom properties on `:root`
(`--olive`, `--olive-dark`, `--olive-deep`, `--olive-tint`, `--gold`, `--gold-tint`, `--ink`,
`--paper`, `--bg`, `--line`, `--max`). Use the tokens; don't introduce raw hex values.

Recurring structural classes: `.wrap` (max-width container), `.eyebrow`, `.page-hero`
(`.dark` variant), `.section-soft` / `.section-olive` (alternating section backgrounds),
`.btn` + `.btn-primary` / `.btn-ghost` / `.btn-light` / `.btn-outline-light`, `.card`, `.gallery`
/ `.tile` / `.lightbox`. Check whether a class already exists before adding one.

Fonts are loaded in `app/layout.js` via `next/font/google` — Fraunces (display, `--font-fraunces`)
and Inter (body, `--font-inter`); headings use Fraunces automatically via `globals.css`.

`docs/slpa-site/*.html` is the original static HTML design reference the Next.js pages were built
from. It is a historical artifact, not a build input — don't edit it to change the site.

## Conventions

- Imports use relative paths in practice, though `@/*` → repo root is configured in
  `jsconfig.json`.
- Every page exports `metadata` with a `title` in the form `Page Name | SLPA`.
- Internal navigation uses `next/link`; external links get `target="_blank" rel="noopener noreferrer"`.
- Comments in this codebase explain *why* a choice was made (see `lib/db.js`,
  `lib/membership.js`). Match that when the reasoning isn't obvious from the code.
- Contact email throughout is `myslpa.info@gmail.com`. `ContactForm` opens a `mailto:` rather than
  posting anywhere; mentorship sign-up still links out to SurveyMonkey.
