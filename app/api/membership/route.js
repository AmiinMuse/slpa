import { getSql } from "../../../lib/db";

// Store membership registrations in Neon. POST only; never cached.
export const runtime = "nodejs";

const CONTACT_PREFS = new Set([
  "email",
  "phone",
  "website",
  "groupchat",
  "social",
]);

// Trim, coerce to string, and cap length so a single field can't be abused.
function clean(value, max = 500) {
  return String(value ?? "").trim().slice(0, max);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill the hidden "company" field. Bots do.
  // Pretend success so they don't retry, but store nothing.
  if (clean(body.company, 100)) {
    return Response.json({ ok: true });
  }

  const fullName = clean(body.fullName, 120);
  const location = clean(body.location, 120);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 200);
  const contactPref = clean(body.contactPref, 40).toLowerCase();
  const profession = clean(body.profession, 200);
  const heardAbout = clean(body.heardAbout, 500);
  const committeeInterest =
    body.committeeInterest === true ||
    body.committeeInterest === "Yes" ||
    body.committeeInterest === "yes" ||
    body.committeeInterest === "true";

  if (
    !fullName ||
    !location ||
    !phone ||
    !contactPref ||
    !profession ||
    body.committeeInterest == null ||
    body.committeeInterest === ""
  ) {
    return Response.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  if (!CONTACT_PREFS.has(contactPref)) {
    return Response.json(
      { error: "Please choose a valid contact preference." },
      { status: 400 }
    );
  }

  try {
    const sql = getSql();
    await sql`
      insert into members
        (full_name, location, phone, email, contact_pref, committee_interest, profession, heard_about)
      values
        (${fullName}, ${location}, ${phone}, ${email || null}, ${contactPref},
         ${committeeInterest}, ${profession}, ${heardAbout || null})
    `;
  } catch (err) {
    console.error("membership insert failed:", err);
    return Response.json(
      { error: "Something went wrong saving your registration. Please try again." },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}
