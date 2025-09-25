import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { totalItems } = useCart();
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo">Hastakalaa</Link>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
          <Link href="/cart" className="cart-link">Cart ({totalItems})</Link>
        </nav>
      </div>
    </header>
  );
}


