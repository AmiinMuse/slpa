// The only module that knows where registrations are stored: a Postgres
// database (see docs/MEMBERSHIP-FORM.md §3 for why Postgres via Netlify Database,
// and §5 for the schema). Swapping storage should mean changing this file alone.
//
// See docs/MEMBERSHIP-FORM.md §6 for the one-time provisioning steps.

import { Pool } from "pg";

// Cached on globalThis rather than a module-level `const` so a warm serverless
// instance (and `next dev`'s hot reload) reuse one pool instead of opening a new
// one per invocation and leaking connections against the database's connection cap.
const globalForDb = globalThis;

function getPool() {
  if (!globalForDb.__slpaPool) {
    globalForDb.__slpaPool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
  }
  return globalForDb.__slpaPool;
}

// Env is read per call rather than at import time so that a missing configuration
// can't break the build — every page still renders, and /api/membership reports a
// clear 503 instead of silently dropping a registration.
export function isDbConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

export async function saveRegistration(registration) {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }

  await getPool().query(
    `insert into registrations (
       first_name, last_name, email, location, phone,
       contact_pref, contact_pref_other, committee, committee_other,
       profession, heard_about
     ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
    [
      registration.firstName,
      registration.lastName,
      registration.email,
      registration.location,
      registration.phone,
      registration.contactPref,
      registration.contactPrefOther,
      registration.committee,
      registration.committeeOther,
      registration.profession,
      registration.heardAbout,
    ]
  );
}
