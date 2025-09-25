import React from 'react';
import Hero from '../components/Home/Hero';
import ProductGrid from '../components/Product/ProductGrid';

export default function HomePage() {
  const collections = [
    { id: 'c1', name: 'Crochet' },
    { id: 'c2', name: 'Crafts' },
    { id: 'c3', name: 'Handmade Gifts' },
    { id: 'c4', name: 'Decor' },
  ];

  const products = [
    { id: '1', name: 'Crochet Bunny', price: 899, rating: 4.7, short: 'Soft pastel plush toy', deliveryCharge: 0, image: 'https://images.unsplash.com/photo-1547887539-38755b74c6f3?q=80&w=1200&auto=format&fit=crop' },
    { id: '2', name: 'Handwoven Basket', price: 1299, rating: 4.6, short: 'Natural fibers, sturdy', deliveryCharge: 40, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop' },
    { id: '3', name: 'Crochet Coasters', price: 499, rating: 4.4, short: 'Set of 4, pastel', deliveryCharge: 0, image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=1200&auto=format&fit=crop' },
    { id: '4', name: 'Macrame Wall Hanging', price: 1499, rating: 4.8, short: 'Boho chic decor', deliveryCharge: 60, image: 'https://images.unsplash.com/photo-1590563440692-d4f9d4f8ccb8?q=80&w=1200&auto=format&fit=crop' },
  ];

  return (
    <div>
      <Hero />
      <section id="collections" className="section">
        <div className="container">
          <h2>Featured Collections</h2>
          <div className="grid">
            {collections.map((c) => (
              <div className="card" key={c.id}>
                <div className="body">
                  <div style={{ fontWeight: 600 }}>{c.name}</div>
                  <div style={{ color: '#6b7280' }}>Explore curated handmade pieces</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>New Arrivals</h2>
          <ProductGrid products={products} />
        </div>
      </section>
    </div>
  );
}


