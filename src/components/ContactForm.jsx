import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handle = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setError('');

    if (!form.name || !form.email || !form.subject || !form.message) {
      setError('Please fill out all fields.');
      return;
    }

    setLoading(true);
    emailjs.sendForm(
      "service_tb2oiqn",
      "template_ucqmz8n",
      formRef.current,
      "5KCWLJRCvMxJEOQzj"
    )
      .then(() => {
        alert("Message sent successfully");
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send the message, please try again");
      })
      .finally(() => setLoading(false));
  }

  return (
    <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
  <h3>Let's build something together</h3>
  <p className="form-subtitle">I'm Ernest — a Full Stack Developer. Tell me about your project or collaboration.</p>
  {error && <div className="form-error">{error}</div>}
  <input name="name" value={form.name} onChange={handle} placeholder="Your name" />
  <input name="email" value={form.email} onChange={handle} placeholder="Your email" type="email" />
  <input name="subject" value={form.subject} onChange={handle} placeholder="Subject (e.g. New project, freelance, collaboration)" />
  <textarea name="message" value={form.message} onChange={handle} placeholder="Briefly describe your idea, timeline and budget (optional)" rows="5" />
      <div className="contact-actions">
        <button className="btn primary" type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send message'}</button>
      </div>
    </form>
  )
}

export default ContactForm