import React from 'react';
import { CartProvider } from '../context/CartContext';
import Layout from '../components/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}


