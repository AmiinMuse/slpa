// The only module that knows where registrations are stored: a Google Apps Script
// Web App that appends each one to the SLPA registrations sheet. Swapping storage
// (a database, a different service) should mean changing this file and nothing else.
//
// See docs/MEMBERSHIP-FORM.md §6 for the one-time deployment steps.

// Env is read per call rather than at import time so that a missing configuration
// can't break the build — every page still renders, and /api/membership reports a
// clear 503 instead of silently dropping a registration.
export function isSheetConfigured() {
  return Boolean(process.env.APPS_SCRIPT_URL);
}

export async function postToSheet(registration) {
  const url = process.env.APPS_SCRIPT_URL;
  if (!url) {
    throw new Error("APPS_SCRIPT_URL is not set");
  }

  const res = await fetch(url, {
    method: "POST",
    // Apps Script reads the raw body through e.postData.contents, so the content
    // type only has to be one it won't reject. text/plain is the conventional
    // choice here: it's also the only JSON-carrying type that avoids a CORS
    // preflight, should this ever be called from the browser instead.
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      ...registration,
      token: process.env.APPS_SCRIPT_TOKEN ?? "",
    }),
    // An Apps Script /exec URL answers with a 302 to script.googleusercontent.com.
    redirect: "follow",
    cache: "no-store",
    // Apps Script cold starts are occasionally slow; fail loudly rather than
    // leaving the visitor watching a spinner indefinitely.
    signal: AbortSignal.timeout(15000),
  });

  if (!res.ok) {
    throw new Error(`Apps Script responded with ${res.status}`);
  }

  // Apps Script answers 200 even for errors it handled itself, so the payload is
  // the real result — not the status code.
  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    // Usually means the deployment is misconfigured and Google served an HTML
    // sign-in or error page instead of the script's output.
    throw new Error(
      `Apps Script returned a non-JSON response: ${text.slice(0, 200)}`
    );
  }

  if (!data.ok) {
    throw new Error(data.error || "Apps Script rejected the registration");
  }

  return data;
}
