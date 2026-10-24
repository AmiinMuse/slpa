"use client";

import { useActionState } from "react";
import Link from "next/link";
import { registerMember } from "../membership/actions";
import { CONTACT_METHODS, COMMITTEE_OPTIONS } from "../membership/options";

const initialState = { ok: false, errors: {}, values: {} };

function FieldError({ id, error }) {
  if (!error) return null;
  return (
    <p className="field-error" id={id}>
      {error}
    </p>
  );
}

function TextField({ name, label, state, ...props }) {
  const error = state.errors?.[name];
  return (
    <div className={`field${error ? " has-error" : ""}`}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        required
        defaultValue={state.values?.[name] ?? ""}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        {...props}
      />
      <FieldError id={`${name}-error`} error={error} />
    </div>
  );
}

export default function MembershipForm() {
  const [state, formAction, pending] = useActionState(registerMember, initialState);
  const values = state.values ?? {};
  const errors = state.errors ?? {};

  if (state.ok) {
    return (
      <div className="card form-success" role="status">
        <div className="eyebrow">Registration received</div>
        <h2>Welcome to SLPA{state.firstName ? `, ${state.firstName}` : ""}!</h2>
        <p>
          Thank you for joining the network. We&#39;ll be in touch about
          mentorship, regional meet-ups, and the annual conference.
        </p>
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <form className="card membership-form" action={formAction}>
      <fieldset className="form-group">
        <legend>About you</legend>
        <TextField name="full_name" label="First and last name" state={state} autoComplete="name" maxLength={120} />
        <TextField name="email" label="Email" state={state} type="email" autoComplete="email" maxLength={254} />
        <TextField name="phone" label="Best contact number" state={state} type="tel" autoComplete="tel" maxLength={30} />
        <TextField name="location" label="Where are you located?" state={state} placeholder="City, State" autoComplete="address-level2" maxLength={120} />
      </fieldset>

      <fieldset className="form-group">
        <legend>Your work</legend>
        <TextField
          name="profession"
          label="Profession (students: your major)"
          state={state}
          placeholder="e.g. Civil engineer, Nursing student"
          maxLength={120}
        />
        <TextField
          name="heard_about"
          label="How did you hear about SLPA?"
          state={state}
          placeholder="e.g. A friend, Instagram, the 2024 conference"
          maxLength={300}
        />
      </fieldset>

      <fieldset className="form-group">
        <legend>Getting involved</legend>

        <fieldset
          className={`field choice-group${errors.contact_methods ? " has-error" : ""}`}
          aria-describedby={errors.contact_methods ? "contact_methods-error" : undefined}
        >
          <legend className="field-label">
            How would you prefer we reach you? <span className="hint">Choose all that apply</span>
          </legend>
          <div className="choice-grid">
            {CONTACT_METHODS.map((o) => (
              <label className="choice" key={o.value}>
                <input
                  type="checkbox"
                  name="contact_methods"
                  value={o.value}
                  defaultChecked={values.contact_methods?.includes(o.value)}
                />
                {o.label}
              </label>
            ))}
          </div>
          <div className="other-field">
            <label htmlFor="contact_other" className="visually-hidden">
              Other way to reach you
            </label>
            <input
              id="contact_other"
              name="contact_other"
              placeholder="Which other way works for you?"
              defaultValue={values.contact_other ?? ""}
              maxLength={120}
            />
          </div>
          <FieldError id="contact_methods-error" error={errors.contact_methods} />
        </fieldset>

        <fieldset
          className={`field choice-group${errors.committee_interest ? " has-error" : ""}`}
          aria-describedby={errors.committee_interest ? "committee_interest-error" : undefined}
        >
          <legend className="field-label">
            Interested in becoming an active committee member?{" "}
            <span className="hint">About 5&ndash;10 hours a month</span>
          </legend>
          <div className="choice-grid">
            {COMMITTEE_OPTIONS.map((o) => (
              <label className="choice" key={o.value}>
                <input
                  type="radio"
                  name="committee_interest"
                  value={o.value}
                  required
                  defaultChecked={values.committee_interest === o.value}
                />
                {o.label}
              </label>
            ))}
          </div>
          <div className="other-field">
            <label htmlFor="committee_other" className="visually-hidden">
              Committee interest note
            </label>
            <input
              id="committee_other"
              name="committee_other"
              placeholder="Tell us a bit more"
              defaultValue={values.committee_other ?? ""}
              maxLength={200}
            />
          </div>
          <FieldError id="committee_interest-error" error={errors.committee_interest} />
        </fieldset>
      </fieldset>

      {/* Honeypot: hidden from people, tempting to bots. The name and label
          deliberately match nothing browsers autofill (e.g. "company"), and the
          unrecognized autocomplete token stops Chrome from guessing. */}
      <div className="visually-hidden" aria-hidden="true">
        <label htmlFor="hp_check">Leave this field empty</label>
        <input id="hp_check" name="hp_check" type="text" tabIndex={-1} autoComplete="slpa-hp" />
      </div>

      {state.message ? (
        <p className="field-error form-message" aria-live="polite">
          {state.message}
        </p>
      ) : null}

      <button type="submit" className="btn btn-primary" disabled={pending}>
        {pending ? "Submitting…" : "Become a member"}
      </button>
      <p className="form-note">
        Your information is only used by SLPA to contact you about membership
        and is never shared.
      </p>
    </form>
  );
}
