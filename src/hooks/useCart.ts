'use client';

import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';

/**
 * Custom hook to access cart state and actions
 * Must be used within a CartProvider
 */
export const useCart = () => {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
};