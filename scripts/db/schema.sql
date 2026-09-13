-- Registrations table for the /join membership form.
-- Run once by hand against DATABASE_URL — see docs/MEMBERSHIP-FORM.md §5 and §6.
-- There is no migration tooling here on purpose (§8): one table, changed rarely.

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
