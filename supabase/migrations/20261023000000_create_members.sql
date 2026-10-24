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