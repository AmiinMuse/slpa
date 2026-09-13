// Single source of truth for the membership form's choices and limits, shared by
// the client form and the server-side validator so the two can't drift apart.
// Wording is copied verbatim from the original Google Form so that registrations
// stay comparable with the responses already collected there.

export const OTHER = "Other";

export const CONTACT_PREFS = [
  "By Email",
  "By Phone",
  "By Website",
  "By Groupchat (GroupMe, WhatsApp, iMessage Group, FB)",
  "By FB Group/LinkedIn Group",
  OTHER,
];

export const COMMITTEE_OPTIONS = ["Yes", "No", OTHER];

// Per-field length caps, enforced server-side so one field can't bloat a sheet row.
export const LIMITS = {
  firstName: 80,
  lastName: 80,
  email: 200,
  location: 120,
  phone: 40,
  contactPref: 80,
  contactPrefOther: 200,
  committee: 80,
  committeeOther: 200,
  profession: 200,
  heardAbout: 500,
};

// Every question on the original form was required, so all of these are too.
// The two "Other" free-text fields are required only when Other is selected.
export const REQUIRED_FIELDS = [
  "email",
  "firstName",
  "lastName",
  "location",
  "phone",
  "contactPref",
  "committee",
  "profession",
  "heardAbout",
];

// Deliberately permissive: something@something.tld. Real deliverability is proven
// by the welcome email arriving, not by a clever regex.
export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(value ?? "").trim());
}
