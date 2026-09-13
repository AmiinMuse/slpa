# Membership Registration Form — Implementation Notes

Status: implemented — storage is Postgres (Netlify Database), verified end-to-end
against a real database (schema applied, a test submission written and read back,
honeypot and validation checked). The earlier Google Sheets / Apps Script backend
(`lib/sheets.js`, `scripts/apps-script/Code.gs`) has been removed; it was never
connected in production — `APPS_SCRIPT_URL` was never set.
Scope: replaces the external Google Form with a native `/join` page
Related: [DESIGN.md](./DESIGN.md) §7 — closes the "Registration/RSVP" open question

## 1. Why

Every "Become a Member" / "Register today" call to action used to leave the site for a
Google Form (`https://forms.gle/je2pJbUCcXUVd5FQA`). That hand-off dropped the visitor
onto an unbranded Google page at the single most important moment on the site.

Registration now lives at `/join`, built from the site's own design tokens, and
submissions land in a Postgres database.

The old Google Form is **still live and untouched** — it is simply no longer linked from
the site, so links already sitting in past emails and social posts keep working.

## 2. The form it replaces

Read from the live form on 2026-08-29. Title: *"Register with The Somaliland
Professionals of America (SLPA)"*. Description: *"Please answer the questions below to
enter you into our database."* All eight questions were required.

| # | Question (exact wording) | Type |
|---|---|---|
| 1 | Email | short answer (Google's built-in email collection) |
| 2 | What's your first and last name? | short answer |
| 3 | Where are you located? | short answer |
| 4 | What is your best contact number? | short answer |
| 5 | What would be your preferred medium of communication with the organization? | multiple choice + Other |
| 6 | Are you interested in becoming an active committee member? This will require 5-10 hours a month. | multiple choice (Yes / No) + Other |
| 7 | What is your profession? For students, what is your major? | short answer |
| 8 | How did you hear about SLPA? | short answer |

Question 5 options, verbatim: *By Email* · *By Phone* · *By Website* · *By Groupchat
(GroupMe, WhatsApp, iMessage Group, FB)* · *By FB Group/LinkedIn Group* · *Other*.

For reference, the underlying Google Form field IDs (useful if anyone ever wants to
migrate old responses, or post into that form programmatically):

```
emailAddress       Email                       entry.1648473678   Preferred medium
entry.427156350    First and last name         entry.1793036173   Committee member
entry.2023017200   Where are you located?      entry.1713545064   Profession / major
entry.147332964    Best contact number         entry.888422012    How did you hear
```

### What changed on the way across

- **Name is now two inputs** (first, last) instead of one combined field — cleaner data
  for greetings and mail-merges.
- Everything else mirrors the original exactly, including the free-text "Other" option on
  questions 5 and 6.

## 3. How it works

```
MembershipForm (client component)
   └─ POST /api/membership                  same-origin JSON
        app/api/membership/route.js         honeypot → validate → cap field lengths
          └─ lib/db.js                      parameterized INSERT
               └─ Postgres (Netlify DB)     one row per registration
```

The API route is a deliberate server-side proxy rather than having the browser talk to
the database directly. It:

- keeps the database connection string out of the client bundle,
- runs the same field-length caps and required-field checks regardless of what the
  client sent, and
- keeps the storage backend swappable — only `lib/db.js` would change.

### Why Postgres, and why Netlify Database specifically

A relational table is a better fit than a spreadsheet API once there's real
validation and a fixed schema, and it removes Apps Script entirely — no more Code.gs
version drift between the pasted script and this repo, no `/exec` URL redirect/CORS
workaround, no separate Google account holding write access to the sheet.

Netlify Database was picked over provisioning Neon (or another Postgres host)
directly because the org may consolidate other tooling on Netlify later, and
Netlify Database *is* Neon Postgres underneath — provisioning through Netlify's
dashboard is free (see §6) and hands back an ordinary Postgres connection string,
with no lock-in beyond that.

**This site keeps deploying on Vercel.** Netlify Database's headline features —
automatic migrations on every deploy, and a fresh database branch per PR preview —
are wired into *Netlify's own* build pipeline and don't apply here. What we get
instead is exactly what any other managed Postgres host would give: a connection
string, used from `app/api/membership/route.js` with the plain `pg` client (see
§4). Two consequences:

- **Schema changes are manual.** There is no `netlify/database/migrations/`
  auto-apply step running against a Vercel deploy. A schema change means running
  the SQL by hand once (Neon's SQL editor, or `psql "$DATABASE_URL"`) before
  deploying the code that depends on it.
- **No `@netlify/database` package.** That package's `getDatabase()` helper
  auto-detects Netlify Functions/Edge Functions and optimizes for them; it adds
  nothing on Vercel. `lib/db.js` uses `pg.Pool` directly against the connection
  string instead.

Free tier is more than enough for this project's volume: 5 GB storage, 48 database
compute units per billing period, 5 GB bandwidth per period. Storage itself is free
until at least mid-2026 per Netlify's current pricing.

## 4. Files

| Path | Role |
|---|---|
| `app/join/page.js` | The `/join` page — hero + "Why join" list + the form |
| `app/components/MembershipForm.js` | Client component: fields, validation, states |
| `app/api/membership/route.js` | Validates, spam-filters, forwards to the database |
| `lib/membership.js` | Choice options, length caps, email check — shared by form and API so they cannot drift |
| `lib/db.js` | `saveRegistration()` / `isDbConfigured()` — the only file that knows about Postgres, holds the pooled `pg.Pool` |
| `scripts/db/schema.sql` | The `registrations` table definition — run once by hand, see §5 |
| `.env.example` | Documents the required `DATABASE_URL` |

`lib/sheets.js` and `scripts/apps-script/Code.gs` (the Google Sheets / Apps Script
backend) have been removed now that the database path above is verified working
end-to-end.

## 5. Database schema

One table, `registrations`, columns in the same order as the old sheet so nothing is
lost in translation:

```sql
create table registrations (
  id                 bigint generated always as identity primary key,
  created_at         timestamptz not null default now(),
  first_name         text not null,
  last_name          text not null,
  email              text not null,
  location           text not null,
  phone              text not null,
  contact_pref       text not null,
  contact_pref_other text not null default '',
  committee          text not null,
  committee_other    text not null default '',
  profession         text not null,
  heard_about        text not null
);
```

- No `full_name` column — trivial to derive with `first_name || ' ' || last_name` in a
  query, not worth storing and keeping in sync.
- No `source` or `status` columns from the old sheet: `source` existed to distinguish
  imported Google Form rows from website rows in one shared sheet, which doesn't apply
  to a dedicated table; `status` (triage state) can be added later if the board actually
  wants a workflow column — see §8.

## 6. One-time setup (board / maintainer)

This repo is shared and the person doing this setup may not own the GitHub repo or
have permission to install Netlify's GitHub App on it. That's fine — **the database
does not need to be attached to a Netlify site that deploys this repo.** Use a
manually-created, Git-disconnected Netlify site purely as a place to hang the
database off of; the app keeps deploying on Vercel exactly as it does today.

1. Sign up / log in at [netlify.com](https://netlify.com).
2. **Add new site → Deploy manually**, dragging in the project folder (not "Import an
   existing project" — that's the flow that needs GitHub repo access). This creates a
   site with no Git connection, which needs no repo permissions at all. The deploy
   itself is thrown away; only the site record matters, as a place to hang a database.
3. Open that site → left sidebar → **Data & Storage → Database** → create/enable a
   database. This is the same Neon-backed Postgres described in §3.
4. Click into the **production** branch → scroll to **Connect** → reveal and copy the
   **Read and write** connection string (there's a separate **Read-only** one; don't
   use that for the app, it can't INSERT). The site also exposes this as an
   environment variable named `NETLIFY_DB_URL`, but that name is only meaningful on
   *Netlify's* side — this app doesn't read it by that name, so it's the value you
   need, not the variable.
5. Locally: `cp .env.example .env.local`, then set `DATABASE_URL` to that value.
6. Create the `registrations` table: `psql "$DATABASE_URL" -f scripts/db/schema.sql`.
   The dashboard's own "View and edit data" panel on that same branch page has a SQL
   console, but it's **read-only** — it'll refuse any `CREATE TABLE`/`INSERT`/etc. with
   "Cannot run modification statements in read-only mode." It's fine for inspecting
   rows later; `psql` (or any Postgres client) with the read/write string is what
   actually runs DDL.
7. In Vercel → Project → Settings → Environment Variables, add `DATABASE_URL` (same
   value) for Production and Preview, then redeploy.

No Netlify CLI step is required — everything above is done from the Netlify dashboard
plus a local `psql`, so nothing touches this repo's GitHub permissions.

### If the environment variable is missing

`/api/membership` returns HTTP 503 and the form shows a message pointing at the Google
Form, rather than pretending the submission succeeded. A misconfigured deploy must never
silently drop a registration.

## 7. Spam handling

- A hidden `company` honeypot field, positioned off-screen and hidden from assistive
  tech. Real users never fill it; bots usually do. When it is filled the route returns a
  fake success (so the bot does not retry) and stores nothing.
- Every field is trimmed and length-capped server-side, so one field cannot be used to
  write a huge row.
- Validation runs on the server independently of the browser, so posting directly to the
  API with missing or malformed fields is still rejected.

There is no rate limiting beyond this. If registration spam ever becomes a real problem,
the cheapest next step is a per-IP throttle at the edge (Vercel WAF) rather than more
application code.

## 8. Deliberately not built

- **Board notification per signup** — worth revisiting now that there's no Google
  Sheet notification rule to lean on; not built yet.
- **Duplicate-email detection** — duplicates currently insert as normal rows.
- **An in-site admin view** of registrations. Nobody can casually browse the table the
  way they could a sheet; querying it (via Neon's dashboard SQL editor, or `psql`) is
  the interim answer. An authenticated `/admin` page or CSV export is a reasonable
  follow-up once the write path itself is proven, not part of this change.
- **Automated migrations** — one table, changed rarely, run by hand (§3) rather than
  standing up migration tooling that fights against staying on Vercel.
- **Mentorship sign-up** still points at SurveyMonkey
  (`app/contact/page.js`, `app/components/Footer.js`). Same class of problem, separate
  change.
