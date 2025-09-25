import React from 'react';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="body">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontWeight: 600 }}>{product.name}</div>
            <div className="price">₹ {product.price}</div>
          </div>
          <div title={`${product.rating} stars`}>⭐ {product.rating}</div>
        </div>
        <div style={{ marginTop: 8, color: '#6b7280' }}>{product.short}</div>
        {product.deliveryCharge > 0 ? (
          <div style={{ marginTop: 8 }}>Delivery: ₹ {product.deliveryCharge}</div>
        ) : (
          <div style={{ marginTop: 8 }}>Delivery: Free</div>
        )}
      </div>
    </div>
  );
}


