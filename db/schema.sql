-- SLPA membership registrations
-- Run this once in your Neon project's SQL editor (or via `psql "$DATABASE_URL" -f db/schema.sql`).

create table if not exists members (
  id                 uuid        primary key default gen_random_uuid(),
  created_at         timestamptz not null    default now(),
  full_name          text        not null,
  location           text        not null,
  phone              text        not null,
  email              text,                       -- new: not on the old Google Form
  contact_pref       text        not null,       -- email | phone | website | groupchat | social
  committee_interest boolean     not null,       -- interested in an active committee role
  profession         text        not null,       -- profession, or major for students
  heard_about        text,                        -- how they heard about SLPA
  status             text        not null default 'new'  -- new | contacted | member (your workflow)
);

-- Newest sign-ups first, without a full table scan.
create index if not exists members_created_at_idx on members (created_at desc);
