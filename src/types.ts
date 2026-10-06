export interface FragranceNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  type: string;
  defaultSize: string;
  availableSizes: { size: string; price: number }[];
  price: number;
  positioning: string;
  description: string;
  notes: FragranceNotes;
  family: string;
  longevity: string;
  longevityScore: number; // out of 10
  sillage: string;
  sillageScore: number; // out of 10
  occasions: string[];
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
  image: string;
  reviews: Review[];
}

export interface CartItem {
  product: Product;
  size: string;
  price: number;
  quantity: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    recommendedProductSlug: string;
  }[];
}

export interface OrderDetails {
  orderId: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
  paymentMethod: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  date: string;
}
