'use client';

import { useCartContext } from '@/context/CartContext';

/**
 * Custom hook to access cart state and actions
 * Must be used within a CartProvider
 */
export const useCart = () => {
  const { state, addItem, removeItem, updateQuantity, clearCart } = useCartContext();
  
  return {
    items: state.items,
    total: state.total,
    itemCount: state.itemCount,
    addItem,
    removeItem,
    updateQuantity,
    clearCart
  };
};