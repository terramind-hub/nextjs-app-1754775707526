'use client';

import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';

/**
 * CartSummary component displays the cart total and provides checkout functionality
 */
export default function CartSummary() {
  const { items, getCartTotal, getCartItemCount } = useCart();
  const router = useRouter();

  const total = getCartTotal();
  const itemCount = getCartItemCount();

  const handleCheckout = () => {
    if (items.length > 0) {
      router.push('/checkout');
    }
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  if (items.length === 0) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-4">
            Your cart is empty
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between text-sm">
          <span>Items ({itemCount})</span>
          <span>{formatCurrency(total)}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span>Shipping</span>
          <span className="text-green-600">Free</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span>Tax</span>
          <span>{formatCurrency(total * 0.08)}</span>
        </div>
        
        <Separator />
        
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>{formatCurrency(total * 1.08)}</span>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handleCheckout}
          className="w-full"
          size="lg"
          disabled={items.length === 0}
        >
          Proceed to Checkout
        </Button>
      </CardFooter>
    </Card>
  );
}