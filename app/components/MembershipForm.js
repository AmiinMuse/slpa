"use client";

import { useState } from "react";

const CONTACT_OPTIONS = [
  { value: "email", label: "By Email" },
  { value: "phone", label: "By Phone" },
  { value: "website", label: "By Website" },
  { value: "groupchat", label: "By Groupchat (GroupMe, WhatsApp, iMessage, FB)" },
  { value: "social", label: "By FB Group / LinkedIn Group" },
];

export default function MembershipForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const el = form.elements;

    setStatus("submitting");
    setError("");

    const payload = {
      fullName: el.fullName.value,
      location: el.location.value,
      phone: el.phone.value,
      email: el.email.value,
      contactPref: el.contactPref.value,
      committeeInterest: el.committeeInterest.value,
      profession: el.profession.value,
      heardAbout: el.heardAbout.value,
      company: el.company.value, // honeypot
    };

    try {
      const res = await fetch("/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card" role="status">
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
          You&rsquo;re registered &mdash; welcome to SLPA.
        </h2>
        <p style={{ color: "rgba(35,38,31,0.7)", lineHeight: 1.6 }}>
          Thanks for joining. A member of the team will be in touch through your
          preferred channel. Keep an eye on your inbox and our socials for the
          next regional meet-up and the annual conference.
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form className="card" onSubmit={handleSubmit} noValidate>
      {/* Honeypot: hidden from users, catches bots. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field">
        <label htmlFor="fullName">First and last name *</label>
        <input id="fullName" name="fullName" type="text" required />
      </div>

      <div className="field">
        <label htmlFor="location">Where are you located? *</label>
        <input id="location" name="location" type="text" required />
      </div>

      <div className="field">
        <label htmlFor="phone">Best contact number *</label>
        <input id="phone" name="phone" type="tel" required />
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
      </div>

      <div className="field">
        <label htmlFor="contactPref">Preferred way to reach you *</label>
        <select id="contactPref" name="contactPref" required defaultValue="">
          <option value="" disabled>
            Choose one&hellip;
          </option>
          {CONTACT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="committeeInterest">
          Interested in becoming an active committee member? (5&ndash;10 hrs/month) *
        </label>
        <select id="committeeInterest" name="committeeInterest" required defaultValue="">
          <option value="" disabled>
            Choose one&hellip;
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="profession">
          Your profession (or major, for students) *
        </label>
        <input id="profession" name="profession" type="text" required />
      </div>

      <div className="field">
        <label htmlFor="heardAbout">How did you hear about SLPA? *</label>
        <input id="heardAbout" name="heardAbout" type="text" required />
      </div>

      <button type="submit" className="btn btn-primary" disabled={submitting}>
        {submitting ? "Submitting…" : "Register with SLPA"}
      </button>

      {status === "error" && (
        <p className="form-note" role="alert" style={{ color: "#b3261e" }}>
          {error}
        </p>
      )}
      <p className="form-note">
        We use your details only to welcome you into SLPA and stay in touch. We
        never share or sell your information.
      </p>
    </form>
  );
}
