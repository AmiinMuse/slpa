"use server";

import { getSupabase } from "@/lib/supabase";
import { CONTACT_METHODS, COMMITTEE_OPTIONS } from "./options";

const CONTACT_VALUES = CONTACT_METHODS.map((o) => o.value);
const COMMITTEE_VALUES = COMMITTEE_OPTIONS.map((o) => o.value);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Max lengths mirror the CHECK constraints in the migration.
const TEXT_FIELDS = {
  full_name: { max: 120, label: "your name" },
  email: { max: 254, label: "your email" },
  phone: { max: 30, label: "a contact number" },
  location: { max: 120, label: "your location" },
  profession: { max: 120, label: "your profession or major" },
  heard_about: { max: 300, label: "how you heard about SLPA" },
};

function text(formData, name) {
  const v = formData.get(name);
  return typeof v === "string" ? v.trim() : "";
}

export async function registerMember(prevState, formData) {
  // Honeypot: real people never see this field.
  if (text(formData, "hp_check")) {
    console.warn("Membership form: honeypot filled, submission dropped");
    return { ok: true, firstName: "" };
  }

  const values = {};
  for (const name of Object.keys(TEXT_FIELDS)) values[name] = text(formData, name);
  values.email = values.email.toLowerCase();
  values.contact_methods = formData
    .getAll("contact_methods")
    .filter((v) => typeof v === "string");
  values.contact_other = text(formData, "contact_other");
  values.committee_interest = text(formData, "committee_interest");
  values.committee_other = text(formData, "committee_other");

  const errors = {};
  for (const [name, { max, label }] of Object.entries(TEXT_FIELDS)) {
    if (!values[name]) errors[name] = `Please enter ${label}.`;
    else if (values[name].length > max) errors[name] = `Please keep this under ${max} characters.`;
  }
  if (!errors.email && !EMAIL_RE.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!errors.phone && values.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (
    values.contact_methods.length === 0 ||
    values.contact_methods.some((v) => !CONTACT_VALUES.includes(v))
  ) {
    errors.contact_methods = "Please choose at least one way to reach you.";
  } else if (values.contact_methods.includes("other") && !values.contact_other) {
    errors.contact_methods = "Please tell us which other way works for you.";
  } else if (values.contact_other.length > 120) {
    errors.contact_methods = "Please keep this under 120 characters.";
  }

  if (!COMMITTEE_VALUES.includes(values.committee_interest)) {
    errors.committee_interest = "Please choose an option.";
  } else if (values.committee_interest === "other" && !values.committee_other) {
    errors.committee_interest = "Please add a short note.";
  } else if (values.committee_other.length > 200) {
    errors.committee_interest = "Please keep this under 200 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors, values };
  }

  let error;
  try {
    ({ error } = await getSupabase()
      .from("members")
      .insert({
        ...values,
        contact_other: values.contact_methods.includes("other") ? values.contact_other : null,
        committee_other: values.committee_interest === "other" ? values.committee_other : null,
      }));
  } catch (e) {
    error = e;
  }

  if (error) {
    if (error.code === "23505") {
      return {
        ok: false,
        values,
        errors: {
          email:
            "This email is already registered. Contact myslpa.info@gmail.com to update your details.",
        },
      };
    }
    console.error("Membership insert failed:", error);
    return {
      ok: false,
      values,
      message: "Something went wrong saving your registration. Please try again.",
    };
  }

  return { ok: true, firstName: values.full_name.split(/\s+/)[0] };
}
