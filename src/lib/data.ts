// Seed data for the e-commerce application
// This file provides sample data for products, categories, and other entities

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
  rating: number;
  reviews: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

// Sample products data
export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 79.99,
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'electronics',
    stock: 25,
    rating: 4.5,
    reviews: 128
  },
  {
    id: '2',
    name: 'Smartphone Case',
    price: 24.99,
    description: 'Durable protective case with shock absorption and wireless charging compatibility.',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop',
    category: 'electronics',
    stock: 50,
    rating: 4.2,
    reviews: 89
  },
  {
    id: '3',
    name: 'Coffee Mug Set',
    price: 34.99,
    description: 'Set of 4 ceramic coffee mugs with elegant design, perfect for daily use.',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop',
    category: 'home',
    stock: 15,
    rating: 4.7,
    reviews: 45
  },
  {
    id: '4',
    name: 'Running Shoes',
    price: 129.99,
    description: 'Lightweight running shoes with advanced cushioning and breathable mesh upper.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    category: 'clothing',
    stock: 30,
    rating: 4.6,
    reviews: 203
  },
  {
    id: '5',
    name: 'Desk Lamp',
    price: 45.99,
    description: 'Adjustable LED desk lamp with touch controls and USB charging port.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop',
    category: 'home',
    stock: 20,
    rating: 4.3,
    reviews: 67
  },
  {
    id: '6',
    name: 'Backpack',
    price: 59.99,
    description: 'Spacious laptop backpack with multiple compartments and water-resistant material.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    category: 'accessories',
    stock: 18,
    rating: 4.4,
    reviews: 156
  },
  {
    id: '7',
    name: 'Wireless Mouse',
    price: 29.99,
    description: 'Ergonomic wireless mouse with precision tracking and long battery life.',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
    category: 'electronics',
    stock: 40,
    rating: 4.1,
    reviews: 92
  },
  {
    id: '8',
    name: 'Plant Pot Set',
    price: 19.99,
    description: 'Set of 3 ceramic plant pots with drainage holes and matching saucers.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop',
    category: 'home',
    stock: 35,
    rating: 4.8,
    reviews: 74
  }
];

// Categories data
export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Latest gadgets and electronic devices'
  },
  {
    id: '2',
    name: 'Home & Garden',
    slug: 'home',
    description: 'Home decor and garden essentials'
  },
  {
    id: '3',
    name: 'Clothing',
    slug: 'clothing',
    description: 'Fashion and apparel for all occasions'
  },
  {
    id: '4',
    name: 'Accessories',
    slug: 'accessories',
    description: 'Bags, jewelry, and other accessories'
  }
];

// Sample cart items
export const sampleCartItems: CartItem[] = [
  {
    id: '1',
    productId: '1',
    quantity: 1,
    price: 79.99
  },
  {
    id: '2',
    productId: '3',
    quantity: 2,
    price: 34.99
  }
];

// Sample orders
export const sampleOrders: Order[] = [
  {
    id: 'order-1',
    items: [
      {
        id: '1',
        productId: '1',
        quantity: 1,
        price: 79.99
      },
      {
        id: '2',
        productId: '4',
        quantity: 1,
        price: 129.99
      }
    ],
    total: 209.98,
    status: 'delivered',
    createdAt: '2024-01-15T10:30:00Z',
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA'
    }
  },
  {
    id: 'order-2',
    items: [
      {
        id: '3',
        productId: '3',
        quantity: 1,
        price: 34.99
      }
    ],
    total: 34.99,
    status: 'processing',
    createdAt: '2024-01-20T14:15:00Z',
    shippingAddress: {
      name: 'Jane Smith',
      street: '456 Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      country: 'USA'
    }
  }
];

// Helper functions to get data
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

// Export with alternative names for flexibility
export { products as seedProducts };
export { categories as seedCategories };
export { sampleCartItems as seedCartItems };
export { sampleOrders as seedOrders };