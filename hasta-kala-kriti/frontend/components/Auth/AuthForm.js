import React, { useState } from 'react';

export default function AuthForm({ mode = 'login', onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const isSignup = mode === 'signup';

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await (onSubmit ? onSubmit(form) : new Promise((r) => setTimeout(r, 600)));
      alert(isSignup ? 'Account created! (demo)' : 'Logged in! (demo)');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section auth-bg">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 24, alignItems: 'center' }}>
        <div className="glass" style={{ overflow: 'hidden', padding: 20 }}>
          <div style={{ background: 'linear-gradient(120deg, var(--brand), #f7cbe0 60%)', height: 120, borderRadius: 12 }} />
          <div className="body" style={{ marginTop: -60 }}>
            <div style={{ background: '#fff', borderRadius: 14, padding: 20, boxShadow: '0 8px 24px rgba(230,168,194,0.25)' }}>
              <h1 style={{ margin: '0 0 6px' }}>{isSignup ? 'Create your account' : 'Welcome back'}</h1>
              <p style={{ marginTop: 0, color: '#6b7280' }}>{isSignup ? 'Join our handcrafted community' : 'Sign in to continue'}</p>
              <form onSubmit={handleSubmit}>
                {isSignup && (
                  <div style={{ marginBottom: 10 }}>
                    <label>Name</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid #e5e7eb' }} />
                  </div>
                )}
                <div style={{ marginBottom: 10 }}>
                  <label>Email</label>
                  <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="you@example.com" required style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid #e5e7eb' }} />
                </div>
                <div style={{ marginBottom: 12 }}>
                  <label>Password</label>
                  <input name="password" value={form.password} onChange={handleChange} type="password" placeholder="••••••••" required style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid #e5e7eb' }} />
                </div>
                <button disabled={loading} className="btn" type="submit" style={{ width: '100%', transform: loading ? 'scale(0.99)' : 'scale(1)', transition: 'transform 120ms' }}>
                  {loading ? (isSignup ? 'Creating...' : 'Signing in...') : (isSignup ? 'Sign up' : 'Log in')}
                </button>
              </form>
              <p style={{ fontSize: 12, color: '#6b7280', marginTop: 10 }}>By continuing, you agree to our Terms & Privacy.</p>
              <p style={{ fontSize: 14, marginTop: 12 }}>
                {isSignup ? 'Already have an account? ' : "Don't have an account? "}
                <a href={isSignup ? '/login' : '/signup'} style={{ color: 'var(--brand-dark)', textDecoration: 'none' }}>
                  {isSignup ? 'Log in' : 'Sign up'}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="glass" style={{ padding: 16 }}>
            <img src="https://picsum.photos/seed/hasta-kala-auth/1200/320" alt="Crafted with love" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 12, display: 'block' }} />
            <div style={{ marginTop: 12, color: '#6b7280' }}>
              Soft handcrafted theme — pastel colors, elegant type, and subtle glassmorphism.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


