"use client";

export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const n = encodeURIComponent(form.elements.cname.value);
    const em = encodeURIComponent(form.elements.cemail.value);
    const m = encodeURIComponent(form.elements.cmsg.value);
    window.location.href =
      "mailto:myslpa.info@gmail.com?subject=Website%20inquiry%20from%20" +
      n +
      "&body=" +
      m +
      "%0A%0A" +
      "From:%20" +
      n +
      "%20(" +
      em +
      ")";
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="cname">Name</label>
        <input id="cname" name="cname" type="text" required />
      </div>
      <div className="field">
        <label htmlFor="cemail">Email</label>
        <input id="cemail" name="cemail" type="email" required />
      </div>
      <div className="field">
        <label htmlFor="cmsg">Message</label>
        <textarea id="cmsg" name="cmsg" rows={6} required />
      </div>
      <button type="submit" className="btn btn-primary">
        Send message
      </button>
      <p className="form-note">
        This form opens your email app with the message pre-filled and addressed
        to SLPA. To collect submissions directly on the site instead, connect a
        form service when you deploy.
      </p>
    </form>
  );
}
