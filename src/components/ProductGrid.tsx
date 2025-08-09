'use client';

import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';

interface ProductGridProps {
  searchQuery?: string;
  category?: string;
}

export default function ProductGrid({ searchQuery = '', category = '' }: ProductGridProps) {
  // Filter products based on search query and category
  const filteredProducts = products.filter((product: Product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !category || product.category === category;
    
    return matchesSearch && matchesCategory;
  });

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
        <p className="text-gray-500">
          {searchQuery || category 
            ? 'Try adjusting your search or filter criteria.'
            : 'No products available at the moment.'
          }
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}