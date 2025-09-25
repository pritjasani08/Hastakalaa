import React, { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    alert('Thanks! We will contact you soon.');
  };
  const whatsappHref = `https://wa.me/911234567890?text=${encodeURIComponent('Hello! I want to know more about your handcrafted products.')}`;
  return (
    <div className="section">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div>
          <h1 style={{ marginTop: 0 }}>Contact Us</h1>
          <form onSubmit={onSubmit} className="card" style={{ padding: 12 }}>
            <div style={{ marginBottom: 8 }}>
              <label>Name</label>
              <input name="name" value={form.name} onChange={onChange} required style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #e5e7eb' }} />
            </div>
            <div style={{ marginBottom: 8 }}>
              <label>Phone</label>
              <input name="phone" value={form.phone} onChange={onChange} required style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #e5e7eb' }} />
            </div>
            <div style={{ marginBottom: 8 }}>
              <label>Message</label>
              <textarea name="message" value={form.message} onChange={onChange} rows={4} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #e5e7eb' }} />
            </div>
            <button className="btn" type="submit">Send</button>
          </form>
        </div>
        <div>
          <div className="card">
            <div className="body">
              <h3 style={{ marginTop: 0 }}>WhatsApp</h3>
              <p>Reach us quickly on WhatsApp for orders and queries.</p>
              <a className="btn" href={whatsappHref} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


