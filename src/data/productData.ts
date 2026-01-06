import { ProductCardProps } from '../components/ProductCard/ProductCard';
import { Review } from '../components/ProductReviews/ProductReviews';
import sofa1 from '../assets/images/sofas/1.jpg';
import sofa2 from '../assets/images/sofas/2.jpg';
import sofa3 from '../assets/images/sofas/3.jpg';
import sofa4 from '../assets/images/sofas/4.jpg';
import bed1 from '../assets/images/beds/1.jpg';
import bed2 from '../assets/images/beds/2.jpg';
import table1 from '../assets/images/tables/1.jpg';
import { generateSofaProducts } from './sofaProducts';
import { generateBedProducts } from './bedProducts';
import { generateTableProducts } from './tableProducts';
import { generateColorProducts } from './colorProducts';
import { bedsCollection, sofasCollection, newArrivals, bestSellers } from './mockProducts';

export interface ProductDetails extends ProductCardProps {
  images: string[];
  specifications: Array<{ label: string; value: string }>;
  colors: string[];
  materials: string[];
  reviews: Review[];
  relatedProducts?: ProductCardProps[];
}

// Mock product database
const productDatabase: Record<string, ProductDetails> = {
  'sofa-1': {
    id: 'sofa-1',
    name: { en: 'Modern Luxury Sofa', he: 'ספה פינתית בעיצוב אישי – בדיוק כמו שדמיינתם' },
    image: sofa1,
    images: [sofa1, sofa2, sofa3, sofa4],
    description: {
      en: 'Contemporary design with premium comfort. This elegant sofa combines modern aesthetics with exceptional comfort, making it the perfect centerpiece for your living room.',
      he: 'ספה פינתית איכותית ומרשימה, המיוצרת בעבודת יד ובהתאמה מלאה לחלל ולסגנון שלכם.\n\nניתן לבחור את סוג הבד, המרקם והצבע מתוך מגוון רחב של אפשרויות — וליצור מראה ייחודי שמתאים לבית שלכם בצורה מושלמת.\n\nהספה משלבת נוחות גבוהה עם עמידות לאורך שנים, עם מושבים תומכים וריפוד איכותי שקל לניקוי ולתחזוקה.\n\nמתאימה לסלון משפחתי, לאירוח ולרגעי מנוחה מפנקים.',
    },
    price: 2499,
    category: 'Sofas',
    colors: ['Black', 'Gray', 'Beige'],
    materials: ['Leather', 'Fabric'],
    specifications: [
      { label: 'Dimensions', value: '200cm x 90cm x 85cm' },
      { label: 'Material', value: 'Premium Leather' },
      { label: 'Frame', value: 'Solid Wood' },
      { label: 'Cushion Fill', value: 'High-Density Foam' },
      { label: 'Weight Capacity', value: '300kg' },
    ],
    reviews: [
      {
        id: '1',
        author: 'Sarah Johnson',
        rating: 5,
        date: '2024-01-15',
        comment: 'Absolutely love this sofa! It\'s incredibly comfortable and looks even better in person. The quality is outstanding.',
      },
      {
        id: '2',
        author: 'Michael Chen',
        rating: 4,
        date: '2024-01-10',
        comment: 'Great purchase. Very comfortable and stylish. Delivery was quick and assembly was straightforward.',
      },
      {
        id: '3',
        author: 'Emma Davis',
        rating: 5,
        date: '2024-01-05',
        comment: 'Best sofa I\'ve ever owned! The quality is excellent and it fits perfectly in my living room.',
      },
    ],
    relatedProducts: [
      {
        id: 'sofa-2',
        name: { en: 'Classic Leather Sofa', he: 'ספה קלאסית מעור' },
        image: sofa2,
        description: { en: 'Timeless elegance in your living room', he: 'אלגנטיות נצחית בסלון שלך' },
        price: 3299,
        category: 'Sofas',
      },
      {
        id: 'sofa-3',
        name: { en: 'Premium Comfort Sofa', he: 'ספה נוחה פרימיום' },
        image: sofa3,
        description: { en: 'Customer favorite with outstanding reviews', he: 'מועדף על הלקוחות עם ביקורות מצוינות' },
        price: 2799,
        category: 'Sofas',
      },
      {
        id: 'sofa-4',
        name: { en: 'Sectional Sofa Set', he: 'סט ספות מודולרי' },
        image: sofa4,
        description: { en: 'Spacious seating for large families', he: 'מושבים מרווחים למשפחות גדולות' },
        price: 3999,
        category: 'Sofas',
      },
    ],
  },
  'bed-1': {
    id: 'bed-1',
    name: { en: 'Elegant Queen Bed', he: 'מיטה מלכותית אלגנטית' },
    image: bed1,
    images: [bed1, bed2],
    description: {
      en: 'Stylish and comfortable bedroom centerpiece. This elegant bed frame combines modern design with timeless beauty.',
      he: 'מרכז אלגנטי ונוח לחדר השינה. מסגרת המיטה האלגנטית הזו משלבת עיצוב מודרני עם יופי נצחי.',
    },
    price: 1899,
    category: 'Beds',
    colors: ['White', 'Black', 'Oak'],
    materials: ['Solid Wood', 'Metal'],
    specifications: [
      { label: 'Dimensions', value: '160cm x 200cm' },
      { label: 'Material', value: 'Solid Oak Wood' },
      { label: 'Headboard Height', value: '110cm' },
      { label: 'Weight Capacity', value: '250kg' },
    ],
    reviews: [
      {
        id: '1',
        author: 'David Wilson',
        rating: 5,
        date: '2024-01-12',
        comment: 'Beautiful bed frame! Very sturdy and well-made. Exactly as described.',
      },
    ],
  },
  'table-1': {
    id: 'table-1',
    name: { en: 'Modern Dining Table', he: 'שולחן אוכל מודרני' },
    image: table1,
    images: [table1],
    description: {
      en: 'Perfect for family gatherings. This modern dining table seats 6-8 people comfortably.',
      he: 'מושלם למפגשים משפחתיים. שולחן האוכל המודרני הזה יכול להכיל 6-8 אנשים בנוחות.',
    },
    price: 1299,
    category: 'Tables',
    colors: ['Oak', 'Walnut'],
    materials: ['Solid Wood'],
    specifications: [
      { label: 'Dimensions', value: '200cm x 100cm x 75cm' },
      { label: 'Material', value: 'Solid Oak' },
      { label: 'Seating Capacity', value: '6-8 People' },
      { label: 'Weight Capacity', value: '150kg' },
    ],
    reviews: [],
  },
};

// Generate mock data for other products (fallback)
export const getProductById = (id: string): ProductDetails | null => {
  // Check hardcoded database first
  if (productDatabase[id]) {
    return productDatabase[id];
  }

  // Search through mockProducts arrays first (bedsCollection, sofasCollection, etc.)
  const allMockProducts = [...bedsCollection, ...sofasCollection, ...newArrivals, ...bestSellers];
  const mockProduct = allMockProducts.find((p: any) => p.id === id);
  if (mockProduct) {
    return {
      ...mockProduct,
      images: [mockProduct.image],
      specifications: [
        { label: 'Dimensions', value: 'Standard Size' },
        { label: 'Material', value: 'Premium Quality' },
      ],
      colors: [],
      materials: [],
      reviews: [],
    };
  }

  // Search through generated product lists
  try {
    const category = id.split('-')[0];
    
    // Search through generated products
    if (category === 'sofa') {
      const products = generateSofaProducts();
      const product = products.find((p: any) => p.id === id);
      if (product) {
        // Convert ProductCardProps to ProductDetails
        return {
          ...product,
          images: [product.image],
          specifications: [
            { label: 'Dimensions', value: 'Standard Size' },
            { label: 'Material', value: 'Premium Quality' },
            { label: 'Warranty', value: '1 Year' },
          ],
          colors: product.metadata?.color ? [product.metadata.color] : ['Black', 'White', 'Gray'],
          materials: product.metadata?.material ? [product.metadata.material] : ['Premium Material'],
          reviews: [],
        };
      }
    } else if (category === 'bed') {
      const products = generateBedProducts();
      const product = products.find((p: any) => p.id === id);
      if (product) {
        return {
          ...product,
          images: [product.image],
          specifications: [
            { label: 'Dimensions', value: 'Standard Size' },
            { label: 'Material', value: 'Premium Quality' },
            { label: 'Warranty', value: '1 Year' },
          ],
          colors: product.metadata?.color ? [product.metadata.color] : ['Black', 'White', 'Gray'],
          materials: product.metadata?.material ? [product.metadata.material] : ['Premium Material'],
          reviews: [],
        };
      }
    } else if (category === 'table') {
      const products = generateTableProducts();
      const product = products.find((p: any) => p.id === id);
      if (product) {
        return {
          ...product,
          images: [product.image],
          specifications: [
            { label: 'Dimensions', value: 'Standard Size' },
            { label: 'Material', value: 'Premium Quality' },
            { label: 'Warranty', value: '1 Year' },
          ],
          colors: product.metadata?.color ? [product.metadata.color] : ['Black', 'White', 'Gray'],
          materials: product.metadata?.material ? [product.metadata.material] : ['Premium Material'],
          reviews: [],
        };
      }
    } else if (category === 'color') {
      const products = generateColorProducts();
      const product = products.find((p: any) => p.id === id);
      if (product) {
        return {
          ...product,
          images: [product.image],
          specifications: [
            { label: 'Material', value: 'Premium Quality' },
            { label: 'Warranty', value: '1 Year' },
          ],
          colors: [],
          materials: [],
          reviews: [],
        };
      }
    }
  } catch (error) {
    console.error('Error loading product from generated lists:', error);
  }

  // Generate fallback product data if not found
  const category = id.split('-')[0];
  const imageMap: Record<string, string> = {
    sofa: sofa1,
    bed: bed1,
    table: table1,
  };

  const defaultImage = imageMap[category] || sofa1;

  return {
    id,
    name: { en: `Product ${id}`, he: `מוצר ${id}` },
    image: defaultImage,
    images: [defaultImage],
    description: {
      en: 'Premium quality product with exceptional craftsmanship.',
      he: 'מוצר איכותי עם מלאכת מחשבת מעולה.',
    },
    price: 1999,
    category: category.charAt(0).toUpperCase() + category.slice(1) + 's',
    colors: ['Black', 'White', 'Gray'],
    materials: ['Premium Material'],
    specifications: [
      { label: 'Dimensions', value: 'Standard Size' },
      { label: 'Material', value: 'Premium Quality' },
    ],
    reviews: [],
  };
};

