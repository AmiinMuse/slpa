import { neon } from "@neondatabase/serverless";

// Returns a tagged-template SQL client bound to the Neon connection string.
// We create it lazily (per request) rather than at import time so the app can
// build and render pages even when DATABASE_URL isn't set in the environment.
export function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Copy .env.example to .env.local and add your Neon connection string."
    );
  }
  return neon(url);
}
