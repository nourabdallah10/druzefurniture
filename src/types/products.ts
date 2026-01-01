export type ProductCategory = 'sofa' | 'bed' | 'table' | 'color';

export interface Product {
  id: string;
  name: { en: string; he: string };
  description: { en: string; he: string };
  category: ProductCategory;
  price: number;
  images: string[]; // paths to images
  colors: string[];
  materials: string[];
  dimensions: { width: number; height: number; depth: number };
  rating: number; // 0-5
}

