export type Language = 'en' | 'he';

export interface Product {
  id: string;
  name: string;
  images: string[];
  category: 'sofas' | 'beds' | 'tables' | 'colors';
  description?: string;
  price?: number;
}

export interface Category {
  id: string;
  name: string;
  route: string;
  image?: string;
}

