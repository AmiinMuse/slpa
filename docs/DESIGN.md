# SLPA Website Redesign — Design Doc

Status: draft, v1
Scope: redesign of myslpa.org, rebuilt in Next.js (see [tech stack decision](#tech-stack-recap))

## 1. Goals

- Rebuild myslpa.org as a custom Next.js codebase instead of the current GoDaddy Website Builder site.
- Start small: ship static pages first (no CMS, no backend), layer in dynamic content later.
- Keep it maintainable by a small volunteer team long-term.

## 2. Current site audit

Source: https://myslpa.org (GoDaddy Website Builder, "Starfield" template)

**Brand today**
- Olive green (`~#5C6B4A`-ish) header/footer, cream/white text
- Tree line-art logo + "SLPA" wordmark
- Full-bleed community photography on the homepage hero
- Tagline: "Moving the next generation forward!" · "Established 2018" · "A space for Somaliland professionals to collaborate & exchange ideas"

**Current navigation / IA**
```
Home
Registration
Events+Programs
  ├─ 2024 ATL Conference
  ├─ 2022 DC Conference
  ├─ Mentorship Program
  ├─ Intern+Volunteer Program
  └─ Development Conference '19
More
  ├─ SLPA Updates          (blog-style posts)
  ├─ Fundraisers
  ├─ 2024 ATL Conference    (sub-nav: Home / Cultural Night / Conference / Gala Night / BBQ Day)
  ├─ Op-Eds
  └─ Donate
```

**Observations / problems to fix**
- Nav is two levels deep and inconsistent (a conference appears in both `Events+Programs` and nested again under `More`).
- No clear primary call-to-action on the homepage (join / donate / RSVP compete for attention equally in a dense dropdown).
- Content types are informally mixed: events, blog-style updates, and op-eds all live under a catch-all "More" menu.
- Site is template-driven — limited control over layout, performance, and accessibility.

## 3. Design direction

**Decision needed from you:** keep-and-refine the current olive/tree identity, or explore a fresh look? Defaulting this doc to **keep & refine** (preserves brand recognition built since 2018) — flag if you'd rather explore fresh options.

Working direction:
- Keep: olive green as primary brand color, tree mark, warm community photography.
- Modernize: real typographic hierarchy, generous whitespace, a real design system (spacing/color tokens) instead of template defaults, faster page loads (no page builder JS bloat), accessible contrast and semantic HTML.
- Clarify the CTA hierarchy: one primary action per page (e.g., "Register for [current event]" on the homepage), donate/mentorship/etc. as secondary.

### Proposed color/type system (starting point, not final)

| Token | Value (placeholder) | Use |
|---|---|---|
| `--color-primary` | Olive green, refined (e.g. `#4A5A3A`) | Header/footer, primary buttons |
| `--color-primary-dark` | Deeper olive | Hover states, text on light bg |
| `--color-accent` | Warm gold/cream | Highlights, small accents |
| `--color-bg` | Off-white | Page background |
| `--color-text` | Near-black / dark olive-gray | Body copy |
| Font — display | A humanist serif or bold grotesk | Headlines |
| Font — body | System sans (`-apple-system`, Inter, etc.) | Body copy, nav |

Exact hex values and fonts to be picked once we look at real photography/logo assets side by side (recommend doing this in a quick visual moodboard pass, not guessing in markdown).

## 4. Proposed information architecture

Flatten to one level where possible; group by *content type*, not by conference year.

```
Home
About            (mission, history, board/leadership)
Events           (all events — filterable list: upcoming / past; each event = own page)
Programs         (Mentorship, Internship+Volunteer — evergreen programs, not one-off events)
Updates          (blog: SLPA Updates + Op-Eds merged into one posts feed, filterable by tag)
Get Involved     (Register / Volunteer / Join)
Donate
```

Each **past conference** (2019, 2022, 2024...) becomes an *Event* detail page with its own sub-sections (Cultural Night, Gala, BBQ, etc. as page anchors, not separate nav items) rather than living in the global nav.

## 5. Page-by-page plan (build order)

Building static-first, one page at a time:

1. **Home** — hero (mission + tagline), highlight of current/next event, 3 quick links (Programs, Get Involved, Donate), photo strip. *Sets the visual language for every other page.*
2. **About** — mission, history (est. 2018), leadership/board.
3. **Events** — static list of past conferences to start (hardcoded array in code); event detail pages.
4. **Programs** — Mentorship + Intern/Volunteer program descriptions.
5. **Updates** — static list of posts to start; can become CMS-driven later.
6. **Get Involved / Registration** — form or link out to external registration tool (TBD, see open questions).
7. **Donate** — link/embed to donation processor (TBD, see open questions).

## 6. Tech stack recap

- **Next.js** (App Router, JS, plain CSS) — already scaffolded in this repo ([PR #1](https://github.com/AmiinMuse/slpa/pull/1)).
- **No CMS/backend yet** — all content hardcoded in the repo (JS/JSON) for phase 1. Non-technical volunteers edit via a CMS in a later phase once static pages are solid.
- **Hosting:** Vercel free tier, custom domain `myslpa.org`.

## 7. Open questions

- [ ] Brand direction: keep & refine olive/tree identity, or explore a fresh look?
- [ ] Registration/RSVP: embed a 3rd-party tool (Eventbrite/Givebutter) for now, or build custom later?
- [ ] Donations: same question — 3rd-party embed vs. custom-built later?
- [ ] Do we have access to original logo files / high-res photography, or do we need to re-derive/replace them?
- [ ] Who are current board/leadership members for the About page?

## 8. Next step

Once brand direction is confirmed, produce a visual mockup of the **Home page** (the page that sets the design language for everything else), then implement it in code.
