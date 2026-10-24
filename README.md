# SLPA

Website for the Somaliland Professionals Association of America. Built with Next.js (App Router).

## Development

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

## Structure

- `app/` — routes (home, conference, programs, op-eds, updates, contact), layout, and global styles
- `app/components/` — shared Header, Footer, JoinBand, Reveal, SocialRow, ContactForm
- `app/icon.png` — browser tab icon
- `public/logo-mark.png` / `public/logo-mark-light.png` — SLPA logo marks (header/footer, donate panel)
- `docs/DESIGN.md` — design notes
- `docs/slpa-site/` — static HTML design reference the site is built from

## Environment variables

The membership form (`/membership`) saves registrations to Supabase. Copy `.env.example` to `.env.local` and fill in:

- `SUPABASE_URL`: the project URL
- `SUPABASE_PUBLISHABLE_KEY`: the `sb_publishable_…` key

Both come from Supabase → Project Settings → API Keys. Set the same two variables in Netlify (Site configuration → Environment variables). Neither one takes a `NEXT_PUBLIC_` prefix. The database schema is in `supabase/migrations/`. Full setup steps are in `docs/MEMBERSHIP-FORM.md`.

## Deployment

Hosted on Netlify (custom domain `myslpa.org`). Netlify detects Next.js and builds with `npm run build`; the Node version comes from `.nvmrc`. The local `.netlify/` folder created by the Netlify CLI is gitignored.
