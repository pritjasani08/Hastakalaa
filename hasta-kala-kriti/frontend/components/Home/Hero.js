import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="section">
      <div className="container hero">
        <div>
          <div className="tagline">Weaving Dreams</div>
          <h1>Handcrafted Crochet & Artisanal Goods</h1>
          <p>Discover lovingly handcrafted pieces — soft textures, pastel hues, and lasting charm.</p>
          <div>
            <Link className="btn" href="#collections">Shop Collections</Link>
            <Link className="btn secondary" href="/about" style={{ marginLeft: 12 }}>About Us</Link>
          </div>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1604335399105-a0d7b1284c02?q=80&w=1200&auto=format&fit=crop" alt="Handcrafted hero" />
        </div>
      </div>
    </section>
  );
}


