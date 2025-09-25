import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, subtotal, deliveryCharge, total } = useCart();
  return (
    <div className="section">
      <div className="container">
        <h1 style={{ marginTop: 0 }}>Your Cart</h1>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
            <div>
              {items.map((it) => (
                <div key={it.id} className="card" style={{ marginBottom: 12 }}>
                  <div className="body" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, alignItems: 'center' }}>
                    <div>
                      <div style={{ fontWeight: 600 }}>{it.name}</div>
                      <div className="price">₹ {it.price}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <label htmlFor={`qty-${it.id}`}>Qty</label>
                      <input id={`qty-${it.id}`} type="number" min={1} value={it.quantity} onChange={(e) => updateQuantity(it.id, parseInt(e.target.value || '1', 10))} style={{ width: 72, padding: 8, borderRadius: 8, border: '1px solid #e5e7eb' }} />
                      <button className="btn secondary" onClick={() => removeFromCart(it.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="card">
                <div className="body">
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>Subtotal</div>
                    <div>₹ {subtotal}</div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                    <div>Delivery</div>
                    <div>{deliveryCharge > 0 ? `₹ ${deliveryCharge}` : 'Free'}</div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, fontWeight: 700 }}>
                    <div>Total</div>
                    <div>₹ {total}</div>
                  </div>
                  <a className="btn" href="/checkout" style={{ marginTop: 12, display: 'inline-block' }}>Proceed to Checkout</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


