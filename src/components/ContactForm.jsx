import React, { useState } from "react";

 
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  if (sent) {
      <div className="contact-sent">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="#6b46c1"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
        <h4>Thanks  message sent!</h4>
        <p>I'\''ll get back to you shortly.</p>
      </div>
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <h3>Let'\''s talk</h3>
      {error && <div className="form-error">{error}</div>}
      <input name="name" value={form.name} onChange={handle} placeholder="Your name" />
      <input name="email" value={form.email} onChange={handle} placeholder="Email" type="email" />
      <textarea name="message" value={form.message} onChange={handle} placeholder="Message" rows="5" />
      <div className="contact-actions">
        <button className="btn primary" type="submit" disabled={loading}>
          {loading ? "Sending" : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
