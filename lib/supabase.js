import "server-only";
import { createClient } from "@supabase/supabase-js";

let client;

// Server-only client. The publishable key can only INSERT into `members`
// (see supabase/migrations), so it can never read member data back.
// Created lazily so builds don't need the env vars.
export function getSupabase() {
  if (!client) {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY;
    if (!url || !key) {
      throw new Error("SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY must be set");
    }
    client = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return client;
}
