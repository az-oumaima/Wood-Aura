export interface Product {
  id: string;
  name: {
    ar: string;
    fr: string;
  };
  description: {
    ar: string;
    fr: string;
  };
  originalPrice: number;
  discountedPrice: number;
  price?: number;
  image: string;
  images?: string[];
  category: 'clocks' | 'tables' | 'etageres';
  qte: number;
}

export interface OrderFormData {
  fullName: string;
  phone: string;
  city: string;
  message: string;
  productName: string;
  productPrice: number;
}

export type Language = 'ar' | 'fr';