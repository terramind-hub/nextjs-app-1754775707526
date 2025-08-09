// Core product interface for e-commerce items
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock?: number;
  rating?: number;
  reviews?: number;
}

// Cart item interface that extends product with quantity
export interface CartItem {
  product: Product;
  quantity: number;
}

// Customer information for checkout
export interface Customer {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

// Shipping address interface
export interface ShippingAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

// Payment information interface
export interface PaymentInfo {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
}

// Order status enum
export enum OrderStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled'
}

// Complete order interface
export interface Order {
  id: string;
  customer: Customer;
  items: CartItem[];
  shippingAddress: ShippingAddress;
  paymentInfo?: Omit<PaymentInfo, 'cardNumber' | 'cvv'>; // Exclude sensitive data
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
}

// Cart context type for state management
export interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getSubtotal: () => number;
  getTotal: () => number;
}

// Product category enum
export enum ProductCategory {
  ELECTRONICS = 'electronics',
  CLOTHING = 'clothing',
  BOOKS = 'books',
  HOME = 'home',
  SPORTS = 'sports',
  BEAUTY = 'beauty',
  TOYS = 'toys',
  AUTOMOTIVE = 'automotive'
}

// Filter options for product search
export interface ProductFilters {
  category?: ProductCategory | string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  inStock?: boolean;
  searchQuery?: string;
}

// Sort options for product listings
export enum SortOption {
  PRICE_LOW_TO_HIGH = 'price_asc',
  PRICE_HIGH_TO_LOW = 'price_desc',
  NAME_A_TO_Z = 'name_asc',
  NAME_Z_TO_A = 'name_desc',
  RATING_HIGH_TO_LOW = 'rating_desc',
  NEWEST_FIRST = 'newest'
}

// API response wrapper
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// Pagination interface
export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// Product listing response
export interface ProductListResponse {
  products: Product[];
  pagination: Pagination;
  filters: ProductFilters;
}

// Form validation error type
export interface FormError {
  field: string;
  message: string;
}

// Checkout form data
export interface CheckoutFormData {
  customer: Customer;
  shippingAddress: ShippingAddress;
  paymentInfo: PaymentInfo;
  sameAsShipping?: boolean;
  billingAddress?: ShippingAddress;
}

// Newsletter subscription
export interface NewsletterSubscription {
  email: string;
  subscribed: boolean;
  subscribedAt?: Date;
}

// Product review interface
export interface ProductReview {
  id: string;
  productId: string;
  customerId: string;
  customerName: string;
  rating: number;
  title: string;
  comment: string;
  createdAt: Date;
  verified: boolean;
}

// Wishlist item interface
export interface WishlistItem {
  id: string;
  product: Product;
  addedAt: Date;
}

// User preferences
export interface UserPreferences {
  currency: string;
  language: string;
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
  theme: 'light' | 'dark' | 'system';
}