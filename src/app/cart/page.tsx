import type { Metadata } from 'next';
import CartItems from '@/components/CartItems';
import CartSummary from '@/components/CartSummary';

export const metadata: Metadata = {
  title: 'Shopping Cart - E-Commerce Store',
  description: 'Review and manage items in your shopping cart',
};

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Shopping Cart
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Review your items and proceed to checkout
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items - Takes up 2 columns on large screens */}
        <div className="lg:col-span-2">
          <CartItems />
        </div>

        {/* Cart Summary - Takes up 1 column on large screens */}
        <div className="lg:col-span-1">
          <CartSummary />
        </div>
      </div>
    </div>
  );
}