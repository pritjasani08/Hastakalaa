import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from 'react';

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'INIT': {
      return action.payload || { items: [], deliveryCharge: 0 };
    }
    case 'ADD_ITEM': {
      const { product, quantity } = action.payload;
      const existingIndex = state.items.findIndex((it) => it.id === product.id);
      let newItems;
      if (existingIndex >= 0) {
        newItems = state.items.map((it, idx) =>
          idx === existingIndex ? { ...it, quantity: it.quantity + quantity } : it
        );
      } else {
        newItems = [...state.items, { ...product, quantity }];
      }
      return { ...state, items: newItems };
    }
    case 'REMOVE_ITEM': {
      const id = action.payload;
      return { ...state, items: state.items.filter((it) => it.id !== id) };
    }
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      return {
        ...state,
        items: state.items.map((it) => (it.id === id ? { ...it, quantity } : it)),
      };
    }
    case 'SET_DELIVERY': {
      return { ...state, deliveryCharge: action.payload };
    }
    case 'CLEAR_CART': {
      return { items: [], deliveryCharge: state.deliveryCharge || 0 };
    }
    default:
      return state;
  }
}

function calculateSubtotal(items) {
  return items.reduce((sum, it) => sum + (it.price || 0) * (it.quantity || 0), 0);
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], deliveryCharge: 0 });

  useEffect(() => {
    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem('cart_state') : null;
      if (raw) {
        const parsed = JSON.parse(raw);
        dispatch({ type: 'INIT', payload: parsed });
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart_state', JSON.stringify(state));
      }
    } catch {}
  }, [state]);

  const addToCart = useCallback((product, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity } });
  }, []);

  const removeFromCart = useCallback((id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  }, []);

  const setDeliveryCharge = useCallback((amount) => {
    dispatch({ type: 'SET_DELIVERY', payload: amount });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const derived = useMemo(() => {
    const subtotal = calculateSubtotal(state.items);
    const totalItems = state.items.reduce((sum, it) => sum + (it.quantity || 0), 0);
    const total = subtotal + (state.deliveryCharge || 0);
    return { subtotal, totalItems, total };
  }, [state.items, state.deliveryCharge]);

  const value = useMemo(
    () => ({
      items: state.items,
      deliveryCharge: state.deliveryCharge,
      addToCart,
      removeFromCart,
      updateQuantity,
      setDeliveryCharge,
      clearCart,
      ...derived,
    }),
    [state.items, state.deliveryCharge, addToCart, removeFromCart, updateQuantity, setDeliveryCharge, clearCart, derived]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return ctx;
}


