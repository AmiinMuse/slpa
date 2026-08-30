import {
  CONTACT_PREFS,
  COMMITTEE_OPTIONS,
  LIMITS,
  OTHER,
  REQUIRED_FIELDS,
  isEmail,
} from "../../../lib/membership";
import { isSheetConfigured, postToSheet } from "../../../lib/sheets";

// Store membership registrations in the SLPA Google Sheet. POST only.
// No `runtime` export: the Edge Runtime is deprecated in Next 16 and 'nodejs'
// is the default (node_modules/next/dist/docs/.../route-segment-config/runtime.md).

// Trim, coerce to string, and cap length so a single field can't bloat a sheet row.
function clean(value, max) {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

function fail(error, fields) {
  return Response.json({ error, fields }, { status: 400 });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: the hidden "company" field is invisible to real users, but bots
  // fill every input they find. Report success so they don't retry, store nothing.
  if (clean(body.company, 100)) {
    return Response.json({ ok: true });
  }

  const registration = {
    firstName: clean(body.firstName, LIMITS.firstName),
    lastName: clean(body.lastName, LIMITS.lastName),
    email: clean(body.email, LIMITS.email),
    location: clean(body.location, LIMITS.location),
    phone: clean(body.phone, LIMITS.phone),
    contactPref: clean(body.contactPref, LIMITS.contactPref),
    contactPrefOther: clean(body.contactPrefOther, LIMITS.contactPrefOther),
    committee: clean(body.committee, LIMITS.committee),
    committeeOther: clean(body.committeeOther, LIMITS.committeeOther),
    profession: clean(body.profession, LIMITS.profession),
    heardAbout: clean(body.heardAbout, LIMITS.heardAbout),
  };

  const missing = REQUIRED_FIELDS.filter((field) => !registration[field]);
  if (missing.length > 0) {
    return fail("Please fill in every field.", missing);
  }

  if (!isEmail(registration.email)) {
    return fail("Please enter a valid email address.", ["email"]);
  }

  if (!CONTACT_PREFS.includes(registration.contactPref)) {
    return fail("Please choose a valid contact preference.", ["contactPref"]);
  }

  if (!COMMITTEE_OPTIONS.includes(registration.committee)) {
    return fail("Please answer the committee question.", ["committee"]);
  }

  // The free-text box is required when Other is chosen, and ignored otherwise —
  // so a stale value from a changed mind never reaches the sheet.
  if (registration.contactPref === OTHER) {
    if (!registration.contactPrefOther) {
      return fail("Please tell us your preferred way to be contacted.", [
        "contactPrefOther",
      ]);
    }
  } else {
    registration.contactPrefOther = "";
  }

  if (registration.committee === OTHER) {
    if (!registration.committeeOther) {
      return fail("Please tell us more about your committee interest.", [
        "committeeOther",
      ]);
    }
  } else {
    registration.committeeOther = "";
  }

  // Never accept a registration we can't store.
  if (!isSheetConfigured()) {
    console.error(
      "APPS_SCRIPT_URL is not set — refusing the registration. See docs/MEMBERSHIP-FORM.md §6."
    );
    return Response.json(
      {
        error:
          "Registration is temporarily unavailable. Please email myslpa.info@gmail.com and we'll sign you up directly.",
      },
      { status: 503 }
    );
  }

  try {
    await postToSheet(registration);
  } catch (err) {
    console.error("membership registration failed:", err);
    return Response.json(
      {
        error:
          "Something went wrong saving your registration. Please try again, or email myslpa.info@gmail.com.",
      },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}
