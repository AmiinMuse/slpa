"use client";

import { useState } from "react";
import {
  CONTACT_PREFS,
  COMMITTEE_OPTIONS,
  LIMITS,
  OTHER,
  isEmail,
} from "../../lib/membership";

// Labels are the original Google Form questions, verbatim, so registrations stay
// comparable with the responses already collected there. The one change: the old
// single "first and last name" question is two fields here.
const EMPTY = {
  email: "",
  firstName: "",
  lastName: "",
  location: "",
  phone: "",
  contactPref: "",
  contactPrefOther: "",
  committee: "",
  committeeOther: "",
  profession: "",
  heardAbout: "",
};

// Mirrors the server-side checks in app/api/membership/route.js. The server is the
// authority; this exists so people are told immediately, not after a round trip.
function validate(values) {
  const errors = {};
  const blank = (field) => !values[field].trim();

  if (blank("email")) errors.email = "Please add your email address.";
  else if (!isEmail(values.email))
    errors.email = "That does not look like an email address.";

  if (blank("firstName")) errors.firstName = "Please add your first name.";
  if (blank("lastName")) errors.lastName = "Please add your last name.";
  if (blank("location")) errors.location = "Please tell us where you are based.";
  if (blank("phone")) errors.phone = "Please add a contact number.";

  if (blank("contactPref")) errors.contactPref = "Please choose one.";
  else if (values.contactPref === OTHER && blank("contactPrefOther"))
    errors.contactPrefOther = "Please tell us how to reach you.";

  if (blank("committee")) errors.committee = "Please choose one.";
  else if (values.committee === OTHER && blank("committeeOther"))
    errors.committeeOther = "Please tell us a little more.";

  if (blank("profession"))
    errors.profession = "Please add your profession or major.";
  if (blank("heardAbout"))
    errors.heardAbout = "Please let us know how you found us.";

  return errors;
}

function TextField({ id, label, value, error, onChange, ...rest }) {
  const errorId = `${id}-error`;
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={onChange}
        maxLength={LIMITS[id]}
        aria-required="true"
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      {error && (
        <p className="form-error" id={errorId}>
          {error}
        </p>
      )}
    </div>
  );
}

function ChoiceField({
  name,
  legend,
  options,
  value,
  error,
  onChange,
  otherName,
  otherLabel,
  otherValue,
  otherError,
  onOtherChange,
}) {
  const errorId = `${name}-error`;
  const otherErrorId = `${otherName}-error`;
  return (
    <fieldset className="field">
      <legend>{legend}</legend>
      <div
        className="choices"
        role="radiogroup"
        aria-required="true"
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? errorId : undefined}
      >
        {options.map((option) => (
          <label className="choice" key={option}>
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={onChange}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      {error && (
        <p className="form-error" id={errorId}>
          {error}
        </p>
      )}
      {value === OTHER && (
        <div className="choice-other">
          <label htmlFor={otherName}>{otherLabel}</label>
          <input
            id={otherName}
            name={otherName}
            type="text"
            value={otherValue}
            onChange={onOtherChange}
            maxLength={LIMITS[otherName]}
            aria-required="true"
            aria-invalid={otherError ? "true" : undefined}
            aria-describedby={otherError ? otherErrorId : undefined}
          />
          {otherError && (
            <p className="form-error" id={otherErrorId}>
              {otherError}
            </p>
          )}
        </div>
      )}
    </fieldset>
  );
}

export default function MembershipForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [formError, setFormError] = useState("");

  // Clear a field's error as soon as it is edited — an error that lingers while
  // you are fixing it reads as though the fix did not register.
  function update(field) {
    return (event) => {
      const { value } = event.target;
      setValues((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => {
        if (!prev[field]) return prev;
        const next = { ...prev };
        delete next[field];
        return next;
      });
    };
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    const found = validate(values);
    setErrors(found);
    setFormError("");

    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      setStatus("idle");
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          company: form.elements.company.value, // honeypot
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        // The server reports which fields it rejected, so mark those up too.
        if (Array.isArray(data.fields) && data.fields.length > 0) {
          setErrors(
            Object.fromEntries(data.fields.map((field) => [field, data.error]))
          );
        }
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setValues(EMPTY);
      setStatus("success");
    } catch (err) {
      setFormError(err.message);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card" role="status">
        <div className="eyebrow">Registration received</div>
        <h2 style={{ fontSize: "24px", margin: "12px 0 14px" }}>
          You&rsquo;re registered &mdash; welcome to SLPA.
        </h2>
        <p style={{ color: "rgba(35,38,31,0.7)", lineHeight: 1.65, margin: 0 }}>
          A welcome email is on its way. Someone from the team will follow up
          through your preferred channel &mdash; and in the meantime, keep an eye
          on your inbox and our socials for the next regional meet-up and the
          annual conference.
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form className="card" onSubmit={handleSubmit} noValidate>
      {/* Honeypot: off-screen and hidden from assistive tech; only bots fill it. */}
      <div aria-hidden="true" className="honeypot">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <p className="form-note" style={{ marginTop: 0, marginBottom: "26px" }}>
        Every field is required. We use your details only to welcome you into SLPA
        and stay in touch &mdash; we never share or sell your information.
      </p>

      <TextField
        id="email"
        label="Email"
        type="email"
        inputMode="email"
        autoComplete="email"
        value={values.email}
        error={errors.email}
        onChange={update("email")}
      />

      <div className="field-row">
        <TextField
          id="firstName"
          label="First name"
          autoComplete="given-name"
          value={values.firstName}
          error={errors.firstName}
          onChange={update("firstName")}
        />
        <TextField
          id="lastName"
          label="Last name"
          autoComplete="family-name"
          value={values.lastName}
          error={errors.lastName}
          onChange={update("lastName")}
        />
      </div>

      <TextField
        id="location"
        label="Where are you located?"
        autoComplete="address-level2"
        value={values.location}
        error={errors.location}
        onChange={update("location")}
      />

      <TextField
        id="phone"
        label="What is your best contact number?"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        value={values.phone}
        error={errors.phone}
        onChange={update("phone")}
      />

      <ChoiceField
        name="contactPref"
        legend="What would be your preferred medium of communication with the organization?"
        options={CONTACT_PREFS}
        value={values.contactPref}
        error={errors.contactPref}
        onChange={update("contactPref")}
        otherName="contactPrefOther"
        otherLabel="Tell us more"
        otherValue={values.contactPrefOther}
        otherError={errors.contactPrefOther}
        onOtherChange={update("contactPrefOther")}
      />

      <ChoiceField
        name="committee"
        legend="Are you interested in becoming an active committee member? This will require 5-10 hours a month."
        options={COMMITTEE_OPTIONS}
        value={values.committee}
        error={errors.committee}
        onChange={update("committee")}
        otherName="committeeOther"
        otherLabel="Tell us more"
        otherValue={values.committeeOther}
        otherError={errors.committeeOther}
        onOtherChange={update("committeeOther")}
      />

      <TextField
        id="profession"
        label="What is your profession? For students, what is your major?"
        value={values.profession}
        error={errors.profession}
        onChange={update("profession")}
      />

      <TextField
        id="heardAbout"
        label="How did you hear about SLPA?"
        value={values.heardAbout}
        error={errors.heardAbout}
        onChange={update("heardAbout")}
      />

      <button type="submit" className="btn btn-primary" disabled={submitting}>
        {submitting ? "Submitting…" : "Register with SLPA"}
      </button>

      {status === "error" && (
        <p className="form-error form-error-block" role="alert">
          {formError}
        </p>
      )}
    </form>
  );
}
