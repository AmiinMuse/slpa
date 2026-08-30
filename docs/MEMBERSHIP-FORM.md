# Membership Registration Form — Implementation Notes

Status: implemented
Scope: replaces the external Google Form with a native `/join` page
Related: [DESIGN.md](./DESIGN.md) §7 — closes the "Registration/RSVP" open question

## 1. Why

Every "Become a Member" / "Register today" call to action used to leave the site for a
Google Form (`https://forms.gle/je2pJbUCcXUVd5FQA`). That hand-off dropped the visitor
onto an unbranded Google page at the single most important moment on the site.

Registration now lives at `/join`, built from the site's own design tokens, and
submissions land in a Google Sheet the board already has access to.

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
  for greetings and mail-merges. The sheet stores both, plus a joined `full_name`.
- Everything else mirrors the original exactly, including the free-text "Other" option on
  questions 5 and 6.

## 3. How it works

```
MembershipForm (client component)
   └─ POST /api/membership                  same-origin JSON
        app/api/membership/route.js         honeypot → validate → cap field lengths
          └─ lib/sheets.js                  POST JSON + shared token
               └─ Apps Script Web App       verify token → append row → auto-reply email
                    └─ Google Sheet         one row per registration
```

The API route is a deliberate server-side proxy rather than having the browser post
straight at Apps Script. It:

- keeps the Apps Script URL and shared token out of the client bundle,
- sidesteps CORS entirely (the Apps Script `/exec` URL 302-redirects to
  `script.googleusercontent.com`; a server-side `fetch` follows that transparently,
  while a browser request would need Google's permissive CORS headers), and
- keeps the storage backend swappable — only `lib/sheets.js` would change.

### Why a Google Sheet

It is free with no cap, keeps data permanently, is officially supported, and the board
already lives in Google Workspace. The hosted form services (Web3Forms, Formspree, and
similar) were rejected for a membership roster: their free tiers cap at 50–250
submissions per month **and delete submission history after 30 days**.

## 4. Files

| Path | Role |
|---|---|
| `app/join/page.js` | The `/join` page — hero + "Why join" list + the form |
| `app/components/MembershipForm.js` | Client component: fields, validation, states |
| `app/api/membership/route.js` | Validates, spam-filters, forwards to the sheet |
| `lib/membership.js` | Choice options, length caps, email check — shared by form and API so they cannot drift |
| `lib/sheets.js` | `postToSheet()` — the only file that knows about Apps Script |
| `scripts/apps-script/Code.gs` | Apps Script source, version-controlled here |
| `.env.example` | Documents the two required environment variables |

## 5. Sheet columns

`appendRow` writes in exactly this order. If you add a column, add it to **both**
`Code.gs` and the sheet header row.

```
timestamp · first_name · last_name · full_name · email · location · phone ·
contact_pref · contact_pref_other · committee_interest · committee_other ·
profession · heard_about · source · status
```

- `source` is always `website`, so if old Google Form responses are ever imported into
  the same sheet the two are still distinguishable.
- `status` starts as `new` — free for the board to use as a triage column
  (`new` → `contacted` → `member`).

## 6. One-time setup (board / maintainer)

1. Open the **existing** Google Form responses spreadsheet — using it keeps the whole
   roster in one file. You do not need to create the tab by hand: on its first
   registration the script creates a `Website Registrations` tab, writes the 15 headers
   from §5, and freezes the header row. Create it yourself only if you want the columns
   in place before the first sign-up.
2. **Extensions → Apps Script.** Delete the placeholder, paste the contents of
   `scripts/apps-script/Code.gs`, and set `TOKEN` to a long random string.
3. **Deploy → New deployment → Web app.** Set *Execute as* **Me**, *Who has access*
   **Anyone**. Authorize when prompted — the script needs permission to edit the sheet
   and to send mail as you. Copy the resulting `.../exec` URL.
4. Locally: `cp .env.example .env.local`, then fill in `APPS_SCRIPT_URL` (the `/exec`
   URL) and `APPS_SCRIPT_TOKEN` (the same random string from step 2).
5. In Vercel → Project → Settings → Environment Variables, add both variables for
   Production and Preview, then redeploy.

Auto-reply emails send from whichever Google account deploys the script. `MailApp` allows
100 recipients per day on a consumer Gmail account — far above expected volume.

> **Re-deploying after editing `Code.gs`:** use **Deploy → Manage deployments → edit →
> Version: New version**. Creating a brand-new deployment issues a *different* `/exec`
> URL, which would need updating in `.env.local` and Vercel.

### If the environment variables are missing

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

- **Board notification per signup** — Google Sheets' own notification rules
  (*Tools → Notification settings*) do this with no code.
- **Duplicate-email detection** — duplicates currently append as normal rows.
- **An in-site admin view** of registrations. The sheet is the admin view.
- **Mentorship sign-up** still points at SurveyMonkey
  (`app/contact/page.js`, `app/components/Footer.js`). Same class of problem, separate
  change.
