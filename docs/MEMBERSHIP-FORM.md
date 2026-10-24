# Membership Registration: Built-in Form + Supabase

## Context

Every "Become a Member" / "Register today" button sends people to a Google Form (`https://forms.gle/je2pJbUCcXUVd5FQA`). Responses end up in a Google Sheet that sits outside the site. We want a membership form on the site itself that:

- asks the same 8 questions, laid out better and styled like the rest of the site;
- stores each registration in a persistent Supabase Postgres database;
- lets SLPA board members view and export registrations in the Supabase dashboard.

Decisions already made:

| Topic | Decision |
|---|---|
| Scope | Membership form only. The Summer Intern/Volunteer Google Form (`app/programs/page.js:138`) and the Mentorship SurveyMonkey stay as they are. |
| Admin view | Supabase Table Editor: filter and export CSV. Board members are invited to the Supabase org. No admin page in the site. |
| Duplicates | Email must be unique (case-insensitive). A repeat registration gets a friendly "you're already registered" message. |
| Spam | Hidden honeypot field plus strict server-side validation. No CAPTCHA. |
| Communication preference | Multi-select checkboxes, plus "Other" with a free-text box. |
| Emails (alert to SLPA, confirmation to member) | Deferred to Phase 2 (see the end of this plan). The schema is designed so they can be added without changes. |
| Old Google Sheet data | Not imported. The Sheet stays as the archive. |
| Supabase account | You create it under your own email for production. Ownership moves to the SLPA org email later. |

## Where the membership links live (all 5 change)

| File | Line | Element |
|---|---|---|
| `app/components/Header.js` | 55 | Nav CTA "Become a Member" (`.nav-cta`) |
| `app/components/Footer.js` | 46 | "Get Involved" → "Become a Member" |
| `app/components/JoinBand.js` | 13 | "Register today" (`.btn-light`). This band appears on most pages. |
| `app/page.js` | 26 | Home hero "Become a member" (`.btn-primary`) |
| `app/contact/page.js` | 39 | Contact list "Register to become an SLPA member" |

`docs/slpa-site/*.html` also contains the Google link. Those files are the static design reference, so they stay unchanged.

Each link becomes `<Link href="/membership">` from `next/link`, keeping its current class names. `Header.js` already imports `Link`. Adding the import to `JoinBand.js`, `Footer.js`, `app/page.js` and `app/contact/page.js` keeps them server components.

## Current Google Form questions (all required, single page)

1. Email
2. What's your first and last name?
3. Where are you located?
4. What is your best contact number?
5. Preferred medium of communication: By Email / By Phone / By Website / By Groupchat (GroupMe, WhatsApp, iMessage Group, FB) / By FB Group/LinkedIn Group / Other: ___
   *Refined on the new form:* only Email / Phone / Other (with a text box).
6. Interested in becoming an active committee member? (5–10 hours a month): Yes / No / Other: ___
7. What is your profession? For students, what is your major?
8. How did you hear about SLPA?

## 1. Supabase setup (one-time, manual)

1. **You (the project owner) create the Supabase account, organization, and project under your own email.** This is the production project. I won't create any accounts. Name the project `slpa` and pick region US East. Store the database password somewhere safe.
2. Invite board members to the org: Read-only role for viewers, Developer for maintainers.
3. **Later, move ownership to SLPA's email:** invite `myslpa.info@gmail.com` to the org as Owner, then step down or leave. Moving the org keeps the project, data, URL and keys unchanged, so the site needs no code or env changes.
4. Under Project Settings → API Keys, copy the **Project URL** and the **publishable key** (`sb_publishable_…`). We do **not** use the secret key. Reason under "Security model".
5. Add the env vars to `.env.local` (already gitignored) and to Netlify (Site configuration → Environment variables):
   ```
   SUPABASE_URL=https://<project-ref>.supabase.co
   SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
   ```
   The `NEXT_PUBLIC_` prefix is left off on purpose. Only the server uses these values, and Next.js keeps unprefixed vars out of the browser bundle.
6. Apply the migration (§2), either by pasting it into the SQL Editor or with the Supabase CLI (`npx supabase link` then `npx supabase db push`). Keeping the SQL in `supabase/migrations/` means the schema is versioned in git. Supabase warns that editing the schema in the dashboard *and* using `db push` causes drift, so pick one method and stick with it.
7. Free-tier note: Supabase pauses free projects after about a week of inactivity. A paused project stops accepting inserts until someone unpauses it. Steady signups count as activity. Check the current policy on Supabase's pricing page and decide whether the $25/month Pro plan is worth it before the next conference push.

## 2. Database schema: `supabase/migrations/20261023000000_create_members.sql`

This single migration is the whole schema. Paste it into a new Supabase SQL Editor query to create the table.

```sql
-- Membership registrations submitted from /membership.
-- The site writes with the publishable key (anon role), which may only INSERT.
-- Board members read the data through the Supabase dashboard.
--
-- If an older version of the table exists and you want to start over, export
-- it to CSV first, then uncomment the next line. It permanently deletes all rows.
-- drop table if exists public.members cascade;

create table public.members (
  id                 bigint generated always as identity primary key,
  created_at         timestamptz not null default now(),
  email              text not null check (char_length(email) <= 254),
  full_name          text not null check (char_length(full_name) between 1 and 120),
  location           text not null check (char_length(location) between 1 and 120),
  phone              text not null check (char_length(phone) between 7 and 30),
  contact_methods    text[] not null check (
                       cardinality(contact_methods) > 0 and
                       contact_methods <@ array['email','phone','other']),
  contact_other      text check (char_length(contact_other) <= 120),
  committee_interest text not null check (committee_interest in ('yes','no','other')),
  committee_other    text check (char_length(committee_other) <= 200),
  profession         text not null check (char_length(profession) between 1 and 120),
  heard_about        text not null check (char_length(heard_about) between 1 and 300),
  source             text not null default 'website'
);

-- Case-insensitive uniqueness (the app also lowercases before insert)
create unique index members_email_key on public.members (lower(email));

-- Security: insert-only for the public key, nothing else
alter table public.members enable row level security;
revoke all on table public.members from anon, authenticated;
grant insert on table public.members to anon;

create policy "Public can submit a registration"
  on public.members for insert to anon
  with check (true);
```

Notes:
- `id` is a sequential bigint that the database assigns. Postgres never reuses an ID, so deleted rows and rejected inserts (each duplicate-email attempt uses up a number) leave gaps. That is expected, and admins can sort by `id` or `created_at`.
- Columns store stable codes (e.g. `email`). The display labels live in `app/membership/options.js`, so labels can be reworded without migrating data.

## 3. Security model

- **Publishable key with an insert-only RLS policy, no secret key.** The site's key can only `INSERT` into `members`. It cannot read, update or delete anything. Even a bug in our code, or a leaked key, can't expose the member list. Board members read the data through the dashboard, which uses their own login.
- Insert **without** `.select()`. Returning the row would require a SELECT policy, which we deliberately don't have.
- The Server Action is a public POST endpoint, as the Next 16 docs (`server-actions.md` → Security) point out. It re-validates every field on the server, caps lengths, accepts only known option codes, and returns `{ ok, errors }`, never database rows. Next's built-in Origin/Host CSRF check and 1 MB body limit apply, and the defaults are fine.
- Honeypot: a visually hidden `hp_check` input with `tabIndex={-1}` and an unrecognized `autoComplete="slpa-hp"` token. It was originally named `company_website`, but Chrome autofilled that despite `autoComplete="off"`, which silently dropped real registrations. Never give it a name or label a browser might autofill. Dropped submissions log a warning in the server console. If it's filled in, the action returns a fake success and inserts nothing.

## 4. App code

### New dependency
`npm install @supabase/supabase-js`. That's all. No user logins means no cookie sessions, so `@supabase/ssr` isn't needed. Validation is hand-written because there are only 8 fields and the repo has no runtime deps besides Next and React. zod would be fine too if you prefer it.

### `lib/supabase.js` (new): the server-only data layer
```js
import "server-only";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_PUBLISHABLE_KEY,
  { auth: { persistSession: false, autoRefreshToken: false } }
);
```
Following Next's data-security guide, this is the only module that reads `process.env` for Supabase. Also add `npm install server-only` so lint can resolve the import.

### `app/membership/options.js` (new): shared option lists
`CONTACT_METHODS = [{ value: "email", label: "By Email" }, …]` and `COMMITTEE_OPTIONS = [{ value: "yes", label: "Yes, I'm interested" }, …]`. The form renders from these and the action validates against them, so the two can't drift apart.

### `app/membership/actions.js` (new): `'use server'`
`export async function registerMember(prevState, formData)`:
1. If the honeypot is filled, return `{ ok: true }`.
2. Read and trim the fields. Lowercase the email. `contact_methods = formData.getAll("contact_methods")`.
3. Validate:
   - required fields are present;
   - email matches a basic pattern;
   - phone has at least 7 digits after stripping `+ ( ) - .` and spaces;
   - lengths are within the DB limits;
   - option codes are in the allowed lists;
   - if `other` is selected, the matching "Other" text is required.

   On failure, return `{ ok: false, errors: { field: "message" }, values }`. The `values` let the form re-fill the user's input when JavaScript is disabled.
4. `const { error } = await supabase.from("members").insert({...})`.
   - `error.code === "23505"` means a duplicate email. Return `{ ok: false, errors: { email: "This email is already registered. Contact myslpa.info@gmail.com to update your details." } }`.
   - Any other error: `console.error` it, then return a generic "Something went wrong, please try again" message.
5. On success, return `{ ok: true, firstName }`.

### `app/components/MembershipForm.js` (new): `'use client'`
- Uses `useActionState(registerMember, initialState)` imported from `react`, the Next 16 pattern from the forms guide.
- Uses `<form action={formAction}>`, so the form still submits without JavaScript.
- On `state.ok`, the form is replaced with a thank-you card: "Welcome to SLPA, {firstName}!" and a link back home.
- Layout reuses the existing `form.card` and `.field` styles. It's grouped into three `<fieldset>`s so it reads better than the long Google list:
  1. **About you**: full name (`autoComplete="name"`), email (`type="email"`, `autoComplete="email"`), phone (`type="tel"`, `autoComplete="tel"`), location (placeholder "City, State").
  2. **Your work**: profession / major; how you heard about SLPA.
  3. **Getting involved**: contact methods as a checkbox grid with "Other" revealing a text input; committee interest as radios showing the "5–10 hours a month" note, with "Other" revealing a text input.
- HTML `required` attributes give instant feedback. Server errors render under each field with `aria-describedby` / `aria-invalid`, and a form-level message uses `aria-live="polite"`.
- The submit button is disabled with the label "Submitting…" while `pending` is true.
- The bottom of the form has a short privacy note: "Your information is only used by SLPA to contact you about membership and is never shared."

### `app/membership/page.js` (new): server component
- `metadata = { title: "Become a Member | SLPA" }`.
- `.page-hero` with eyebrow "Membership", headline, and lede, matching `app/contact/page.js`.
- A two-column `Reveal` section: on the left, what membership offers (mentorship, regional meet-ups, the annual conference, 650+ members), reusing the JoinBand copy; on the right, `<MembershipForm />`.
- No `JoinBand` on this page, since it would just link back to the same page.

### `app/globals.css` (edit): small additions next to the existing form rules (~line 203)
- Extend the `.field input/textarea` rules to cover `select`.
- New rules: `fieldset.form-group` (no border, legend styled like `.eyebrow`), `.choice-grid` (2-column checkbox/radio grid that collapses to 1 column at 640px), `.choice` (label + input, `accent-color: var(--olive)`), `.field-error` (small red-brown text), `.field.has-error input` (border color), `.form-success`, and `.visually-hidden` for the honeypot.
- Only existing tokens are used (`--olive`, `--line`, `--gold`, …).

### Link swaps
The 5 files listed above.

### Docs
- `docs/MEMBERSHIP-FORM.md`: this plan, plus the setup steps for future maintainers.
- `README.md`: add a short "Environment variables" section (the two vars, where to get them, the Netlify note) and link to `docs/MEMBERSHIP-FORM.md`.
- `.env.example` (new, committed) containing the two var names with blank values. Check `.gitignore`: if it ignores `.env*`, add `!.env.example`.

## 5. Phase 2 (follow-up, not in this build): emails

Add a Supabase **Database Webhook** on `members` INSERT that calls a Supabase **Edge Function**. That function sends:

- an alert to `myslpa.info@gmail.com` with the member's details;
- a welcome/confirmation email to the registrant.

Sending would use Resend from `@myslpa.org` once someone with DNS access adds the SPF/DKIM records. The site code doesn't change. A `confirmation_sent_at timestamptz` column can be added then if needed.

## Files at a glance

**New:**
- `supabase/migrations/<ts>_create_members.sql`
- `lib/supabase.js`
- `app/membership/page.js`
- `app/membership/actions.js`
- `app/membership/options.js`
- `app/components/MembershipForm.js`
- `docs/MEMBERSHIP-FORM.md`
- `.env.example`

**Edited:**
- `app/components/Header.js`
- `app/components/Footer.js`
- `app/components/JoinBand.js`
- `app/page.js`
- `app/contact/page.js`
- `app/globals.css`
- `README.md`
- `package.json` (+ `@supabase/supabase-js`, `server-only`)

## Verification

1. `npm run lint` and `npm run build` both pass. The build output lists `/membership`.
2. With `npm run dev`:
   - all 5 buttons go to `/membership`;
   - the header CTA works in the mobile menu;
   - the form looks right at desktop width and at 375px.
3. **Happy path:** submit a test registration. The thank-you card appears, and the row shows up in Table Editor → `members` with the right array or "Other" values.
4. **Duplicate:** submit again with the same email in different capitalization. The "already registered" message appears under Email.
5. **Validation:** bypass the browser checks (remove `required` in devtools) and submit empty or invalid values. Server errors show per field and nothing is inserted. Selecting "Other" without filling in its text gives an error.
6. **Honeypot:** fill the hidden field in devtools and submit. You get a fake success and no row.
7. **No-JS:** disable JavaScript and submit. The form still posts and the success or error state renders.
8. **RLS:** call the REST API directly with the publishable key: `curl "$SUPABASE_URL/rest/v1/members?select=*" -H "apikey: $KEY"`. It must return an error or `[]`, never rows. Also confirm UPDATE and DELETE are refused.
9. **Netlify:** after setting the env vars, check a deploy preview of the branch with one test submission, then delete the test rows in the dashboard.
