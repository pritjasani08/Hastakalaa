import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../../context/CartContext';

const MOCK_PRODUCTS = [
  { id: '1', name: 'Crochet Bunny', price: 899, rating: 4.7, deliveryCharge: 0, images: [
    'https://images.unsplash.com/photo-1547887539-38755b74c6f3?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop',
  ], description: 'A soft pastel crochet bunny, handcrafted with love.' },
  { id: '2', name: 'Handwoven Basket', price: 1299, rating: 4.6, deliveryCharge: 40, images: [
    'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop',
  ], description: 'Sturdy natural fiber basket for decor and storage.' },
  { id: '3', name: 'Crochet Coasters', price: 499, rating: 4.4, deliveryCharge: 0, images: [
    'https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=1200&auto=format&fit=crop',
  ], description: 'Set of 4 pastel crochet coasters.' },
];

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart, setDeliveryCharge } = useCart();
  const [qty, setQty] = useState(1);
  const product = useMemo(() => MOCK_PRODUCTS.find((p) => p.id === id), [id]);
  const [active, setActive] = useState(0);

  if (!product) {
    return <div className="container section"><h1>Loading...</h1></div>;
  }

  const onAddToCart = () => {
    setDeliveryCharge(product.deliveryCharge || 0);
    addToCart({ id: product.id, name: product.name, price: product.price }, qty);
  };

  const onBuyNow = () => {
    onAddToCart();
    router.push('/checkout');
  };

  return (
    <div className="section">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div>
          <img src={product.images[active]} alt={product.name} style={{ width: '100%', borderRadius: 12 }} />
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            {product.images.map((src, idx) => (
              <img key={idx} onClick={() => setActive(idx)} src={src} alt={`${product.name} ${idx+1}`} style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 8, cursor: 'pointer', border: active === idx ? '2px solid var(--brand)' : '1px solid #f1e8ee' }} />
            ))}
          </div>
        </div>
        <div>
          <h1 style={{ marginTop: 0 }}>{product.name}</h1>
          <div style={{ color: '#6b7280' }}>⭐ {product.rating} · {product.deliveryCharge > 0 ? `Delivery ₹${product.deliveryCharge}` : 'Free Delivery'}</div>
          <div className="price" style={{ fontSize: 24, marginTop: 8 }}>₹ {product.price}</div>
          <p style={{ marginTop: 12 }}>{product.description}</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
            <label htmlFor="qty">Qty</label>
            <input id="qty" type="number" min={1} value={qty} onChange={(e) => setQty(parseInt(e.target.value || '1', 10))} style={{ width: 72, padding: 8, borderRadius: 8, border: '1px solid #e5e7eb' }} />
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <button className="btn" onClick={onAddToCart}>Add to Cart</button>
            <button className="btn secondary" onClick={onBuyNow}>Buy Now</button>
          </div>

          <div className="section">
            <h3 style={{ margin: 0 }}>Ratings & Reviews</h3>
            <p style={{ color: '#6b7280' }}>Reviews coming soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


