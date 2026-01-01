import { Product } from '../types/products';

// Import images
import sofa1 from '../assets/images/sofas/1.jpg';
import sofa2 from '../assets/images/sofas/2.jpg';
import sofa3 from '../assets/images/sofas/3.jpg';
import sofa4 from '../assets/images/sofas/4.jpg';
import sofa5 from '../assets/images/sofas/5.jpg';
import sofa6 from '../assets/images/sofas/6.jpg';
import sofa7 from '../assets/images/sofas/7.jpg';
import sofa8 from '../assets/images/sofas/8.jpg';
import sofa9 from '../assets/images/sofas/9.jpg';
import sofa10 from '../assets/images/sofas/10.jpg';
import bed1 from '../assets/images/beds/1.jpg';
import bed2 from '../assets/images/beds/2.jpg';
import bed3 from '../assets/images/beds/3.jpg';
import bed4 from '../assets/images/beds/4.jpg';
import bed5 from '../assets/images/beds/5.jpg';
import bed6 from '../assets/images/beds/6.jpg';
import bed7 from '../assets/images/beds/7.jpg';
import bed8 from '../assets/images/beds/8.jpg';
import table1 from '../assets/images/tables/1.jpg';
import table2 from '../assets/images/tables/2.jpg';
import table3 from '../assets/images/tables/3.jpg';
import table4 from '../assets/images/tables/4.jpg';
import table5 from '../assets/images/tables/5.jpg';
import color1 from '../assets/images/colors/1.jpg';
import color2 from '../assets/images/colors/2.jpg';
import color3 from '../assets/images/colors/3.jpg';
import color4 from '../assets/images/colors/4.jpg';
import color5 from '../assets/images/colors/5.jpg';

export const mockProducts: Product[] = [
  // SOFAS (10 products)
  {
    id: 'sofa-001',
    name: {
      en: 'Modern Luxury Sofa',
      he: 'ספה מודרנית יוקרתית',
    },
    description: {
      en: 'Contemporary design with premium comfort. This elegant sofa combines modern aesthetics with exceptional comfort, making it the perfect centerpiece for your living room.',
      he: 'עיצוב עכשווי עם נוחות פרימיום. הספה האלגנטית הזו משלבת אסתטיקה מודרנית עם נוחות יוצאת דופן, מה שהופך אותה ליצירת המופת המושלמת לסלון שלכם.',
    },
    category: 'sofa',
    price: 2499,
    images: [sofa1, sofa2, sofa3],
    colors: ['Black', 'Gray', 'Beige', 'Brown'],
    materials: ['Leather', 'Fabric'],
    dimensions: { width: 200, height: 85, depth: 90 },
    rating: 4.8,
  },
  {
    id: 'sofa-002',
    name: {
      en: 'Classic Leather Sofa',
      he: 'ספת עור קלאסית',
    },
    description: {
      en: 'Timeless elegance in your living room. Crafted from premium Italian leather with hand-stitched details and solid wood frame.',
      he: 'אלגנטיות נצחית בסלון שלכם. עשויה מעור איטלקי פרימיום עם פרטים תפורים ידנית ושלד עץ מלא.',
    },
    category: 'sofa',
    price: 3299,
    images: [sofa4, sofa5],
    colors: ['Brown', 'Black', 'Taupe'],
    materials: ['Leather'],
    dimensions: { width: 220, height: 88, depth: 95 },
    rating: 4.9,
  },
  {
    id: 'sofa-003',
    name: {
      en: 'Premium Comfort Sofa',
      he: 'ספת נוחות פרימיום',
    },
    description: {
      en: 'Customer favorite with outstanding reviews. Features high-density foam cushions and premium fabric upholstery.',
      he: 'מועדף על לקוחות עם ביקורות מצוינות. כולל כריות קצף בצפיפות גבוהה וריפוד בד פרימיום.',
    },
    category: 'sofa',
    price: 2799,
    images: [sofa6, sofa7],
    colors: ['Gray', 'Beige', 'Navy'],
    materials: ['Fabric', 'Velvet'],
    dimensions: { width: 210, height: 82, depth: 92 },
    rating: 4.7,
  },
  {
    id: 'sofa-004',
    name: {
      en: 'Sectional Sofa Set',
      he: 'סט ספה מדורית',
    },
    description: {
      en: 'Spacious seating for large families. Modular design allows customization of layout to fit any room.',
      he: 'ישיבה מרווחת למשפחות גדולות. עיצוב מודולרי מאפשר התאמה אישית של הפריסה להתאמה לכל חדר.',
    },
    category: 'sofa',
    price: 3999,
    images: [sofa8, sofa9],
    colors: ['Gray', 'Beige', 'Cream'],
    materials: ['Fabric', 'Microfiber'],
    dimensions: { width: 280, height: 85, depth: 100 },
    rating: 4.6,
  },
  {
    id: 'sofa-005',
    name: {
      en: 'Scandinavian Style Sofa',
      he: 'ספה בסגנון סקנדינבי',
    },
    description: {
      en: 'Minimalist design with clean lines. Perfect for modern homes seeking simplicity and elegance.',
      he: 'עיצוב מינימליסטי עם קווים נקיים. מושלם לבתים מודרניים המחפשים פשטות ואלגנטיות.',
    },
    category: 'sofa',
    price: 2199,
    images: [sofa10, sofa1],
    colors: ['White', 'Light Gray', 'Beige'],
    materials: ['Fabric', 'Linen'],
    dimensions: { width: 190, height: 80, depth: 85 },
    rating: 4.5,
  },
  {
    id: 'sofa-006',
    name: {
      en: 'Elegant Velvet Sofa',
      he: 'ספת קטיפה אלגנטית',
    },
    description: {
      en: 'Luxurious velvet upholstery with rich colors. Adds sophistication and warmth to any interior.',
      he: 'ריפוד קטיפה יוקרתי עם צבעים עשירים. מוסיף תחכום וחום לכל פנים.',
    },
    category: 'sofa',
    price: 2699,
    images: [sofa2, sofa3],
    colors: ['Navy', 'Emerald', 'Burgundy', 'Teal'],
    materials: ['Velvet'],
    dimensions: { width: 205, height: 83, depth: 90 },
    rating: 4.7,
  },
  {
    id: 'sofa-007',
    name: {
      en: 'Contemporary Corner Sofa',
      he: 'ספת פינתית עכשווית',
    },
    description: {
      en: 'Maximize your space with this corner sofa. Perfect for open-plan living areas.',
      he: 'הגדילו את המרחב שלכם עם ספת הפינה הזו. מושלמת לאזורי מגורים עם תוכנית פתוחה.',
    },
    category: 'sofa',
    price: 3499,
    images: [sofa4, sofa5],
    colors: ['Charcoal', 'Gray', 'Beige'],
    materials: ['Fabric', 'Leather'],
    dimensions: { width: 240, height: 86, depth: 95 },
    rating: 4.6,
  },
  {
    id: 'sofa-008',
    name: {
      en: 'Recliner Sofa Set',
      he: 'סט ספה עם משענות',
    },
    description: {
      en: 'Ultimate relaxation with built-in recliners. Perfect for movie nights and lounging.',
      he: 'הרפיה מושלמת עם משענות מובנות. מושלם לערבי קולנוע ולהתרופפות.',
    },
    category: 'sofa',
    price: 3799,
    images: [sofa6, sofa7],
    colors: ['Brown', 'Black', 'Gray'],
    materials: ['Leather', 'Fabric'],
    dimensions: { width: 230, height: 90, depth: 100 },
    rating: 4.8,
  },
  {
    id: 'sofa-009',
    name: {
      en: 'Luxury Chesterfield Sofa',
      he: 'ספת צסטרפילד יוקרתית',
    },
    description: {
      en: 'Classic British design with button tufting. A statement piece for sophisticated interiors.',
      he: 'עיצוב בריטי קלאסי עם תפירה כפתורית. יצירת אמנות לפנים מתוחכמים.',
    },
    category: 'sofa',
    price: 3199,
    images: [sofa8, sofa9],
    colors: ['Brown', 'Burgundy', 'Navy'],
    materials: ['Leather'],
    dimensions: { width: 215, height: 87, depth: 92 },
    rating: 4.9,
  },
  {
    id: 'sofa-010',
    name: {
      en: 'Modern Sleeper Sofa',
      he: 'ספת שינה מודרנית',
    },
    description: {
      en: 'Space-saving design that converts to a comfortable bed. Ideal for guest rooms and small apartments.',
      he: 'עיצוב חוסך מקום שהופך למיטה נוחה. אידיאלי לחדרי אורחים ודירות קטנות.',
    },
    category: 'sofa',
    price: 2899,
    images: [sofa10, sofa1],
    colors: ['Gray', 'Beige', 'Navy'],
    materials: ['Fabric'],
    dimensions: { width: 200, height: 85, depth: 95 },
    rating: 4.5,
  },

  // BEDS (6 products)
  {
    id: 'bed-001',
    name: {
      en: 'Elegant Queen Bed',
      he: 'מיטת מלכה אלגנטית',
    },
    description: {
      en: 'Stylish and comfortable bedroom centerpiece. This elegant bed frame combines modern design with timeless beauty.',
      he: 'יצירת המופת האלגנטית והנוחה לחדר השינה. מסגרת המיטה האלגנטית הזו משלבת עיצוב מודרני עם יופי נצחי.',
    },
    category: 'bed',
    price: 1899,
    images: [bed1, bed2],
    colors: ['White', 'Black', 'Oak'],
    materials: ['Solid Wood', 'Metal'],
    dimensions: { width: 160, height: 110, depth: 200 },
    rating: 4.7,
  },
  {
    id: 'bed-002',
    name: {
      en: 'Contemporary Bed Frame',
      he: 'מסגרת מיטה עכשווית',
    },
    description: {
      en: 'Minimalist design meets comfort. Perfect for modern bedrooms with clean aesthetics.',
      he: 'עיצוב מינימליסטי פוגש נוחות. מושלם לחדרי שינה מודרניים עם אסתטיקה נקייה.',
    },
    category: 'bed',
    price: 1599,
    images: [bed3, bed4],
    colors: ['Gray', 'White', 'Walnut'],
    materials: ['Solid Wood'],
    dimensions: { width: 160, height: 105, depth: 200 },
    rating: 4.6,
  },
  {
    id: 'bed-003',
    name: {
      en: 'Deluxe King Bed',
      he: 'מיטת קינג דלוקס',
    },
    description: {
      en: 'Spacious and luxurious sleeping experience. Features premium wood construction and elegant headboard.',
      he: 'חוויית שינה מרווחת ויוקרתית. כולל בניית עץ פרימיום וראש מיטה אלגנטי.',
    },
    category: 'bed',
    price: 2299,
    images: [bed5, bed6],
    colors: ['Brown', 'Walnut', 'Oak'],
    materials: ['Solid Wood'],
    dimensions: { width: 180, height: 115, depth: 200 },
    rating: 4.8,
  },
  {
    id: 'bed-004',
    name: {
      en: 'Platform Bed Frame',
      he: 'מסגרת מיטת פלטפורמה',
    },
    description: {
      en: 'Modern style with storage options. Built-in drawers provide extra storage space.',
      he: 'סגנון מודרני עם אפשרויות אחסון. מגירות מובנות מספקות שטח אחסון נוסף.',
    },
    category: 'bed',
    price: 1799,
    images: [bed7, bed8],
    colors: ['White', 'Black', 'Gray'],
    materials: ['Engineered Wood', 'Metal'],
    dimensions: { width: 160, height: 40, depth: 200 },
    rating: 4.5,
  },
  {
    id: 'bed-005',
    name: {
      en: 'Luxury Upholstered Bed',
      he: 'מיטה מרופדת יוקרתית',
    },
    description: {
      en: 'Plush headboard with premium fabric. Adds elegance and comfort to your bedroom.',
      he: 'ראש מיטה רך עם בד פרימיום. מוסיף אלגנטיות ונוחות לחדר השינה שלכם.',
    },
    category: 'bed',
    price: 2099,
    images: [bed1, bed3],
    colors: ['Navy', 'Gray', 'Beige'],
    materials: ['Fabric', 'Wood'],
    dimensions: { width: 160, height: 120, depth: 200 },
    rating: 4.7,
  },
  {
    id: 'bed-006',
    name: {
      en: 'Sleigh Bed Frame',
      he: 'מסגרת מיטת מזחלת',
    },
    description: {
      en: 'Classic curved design with elegant lines. A timeless piece for traditional and modern bedrooms.',
      he: 'עיצוב מעוגל קלאסי עם קווים אלגנטיים. יצירת אמנות נצחית לחדרי שינה מסורתיים ומודרניים.',
    },
    category: 'bed',
    price: 1999,
    images: [bed5, bed7],
    colors: ['Brown', 'Oak', 'Walnut'],
    materials: ['Solid Wood'],
    dimensions: { width: 160, height: 112, depth: 200 },
    rating: 4.6,
  },

  // TABLES (5 products)
  {
    id: 'table-001',
    name: {
      en: 'Modern Dining Table',
      he: 'שולחן אוכל מודרני',
    },
    description: {
      en: 'Perfect for family gatherings. This modern dining table seats 6-8 people comfortably.',
      he: 'מושלם למפגשים משפחתיים. שולחן האוכל המודרני הזה יכול להכיל 6-8 אנשים בנוחות.',
    },
    category: 'table',
    price: 1299,
    images: [table1, table2],
    colors: ['Oak', 'Walnut'],
    materials: ['Solid Wood'],
    dimensions: { width: 200, height: 75, depth: 100 },
    rating: 4.6,
  },
  {
    id: 'table-002',
    name: {
      en: 'Extendable Dining Table',
      he: 'שולחן אוכל מתארך',
    },
    description: {
      en: 'Versatile design for any occasion. Extends to accommodate more guests when needed.',
      he: 'עיצוב רב-תכליתי לכל אירוע. מתרחב להכיל יותר אורחים בעת הצורך.',
    },
    category: 'table',
    price: 1499,
    images: [table3, table4],
    colors: ['Oak', 'Brown'],
    materials: ['Solid Wood'],
    dimensions: { width: 180, height: 75, depth: 90 },
    rating: 4.7,
  },
  {
    id: 'table-003',
    name: {
      en: 'Elegant Coffee Table',
      he: 'שולחן קפה אלגנטי',
    },
    description: {
      en: 'Perfect centerpiece for your living room. Features elegant design with storage shelf.',
      he: 'יצירת המופת המושלמת לסלון שלכם. כולל עיצוב אלגנטי עם מדף אחסון.',
    },
    category: 'table',
    price: 599,
    images: [table5, table1],
    colors: ['Black', 'White', 'Oak'],
    materials: ['Glass', 'Wood', 'Metal'],
    dimensions: { width: 120, height: 45, depth: 60 },
    rating: 4.5,
  },
  {
    id: 'table-004',
    name: {
      en: 'Rustic Farmhouse Table',
      he: 'שולחן חווה כפרי',
    },
    description: {
      en: 'Authentic farmhouse charm. Handcrafted from reclaimed wood with character and warmth.',
      he: 'קסם כפרי אותנטי. עשוי ידנית מעץ משוחזר עם אופי וחום.',
    },
    category: 'table',
    price: 1699,
    images: [table2, table3],
    colors: ['Natural Wood', 'Brown'],
    materials: ['Reclaimed Wood'],
    dimensions: { width: 220, height: 76, depth: 100 },
    rating: 4.8,
  },
  {
    id: 'table-005',
    name: {
      en: 'Contemporary Console Table',
      he: 'שולחן קונסולה עכשווי',
    },
    description: {
      en: 'Sleek design for hallways and entryways. Perfect for displaying decorative items.',
      he: 'עיצוב חלק למבואות ומסדרונות. מושלם להצגת פריטים דקורטיביים.',
    },
    category: 'table',
    price: 799,
    images: [table4, table5],
    colors: ['White', 'Black', 'Gray'],
    materials: ['Engineered Wood', 'Metal'],
    dimensions: { width: 140, height: 80, depth: 40 },
    rating: 4.4,
  },

  // COLORS/FABRICS (5 products)
  {
    id: 'color-001',
    name: {
      en: 'Premium Fabric Collection',
      he: 'אוסף בדים פרימיום',
    },
    description: {
      en: 'Luxurious textures and colors. High-quality fabrics perfect for custom furniture projects.',
      he: 'מרקמים וצבעים יוקרתיים. בדים באיכות גבוהה מושלמים לפרויקטי ריהוט מותאמים אישית.',
    },
    category: 'color',
    price: 89,
    images: [color1, color2],
    colors: ['Various'],
    materials: ['Fabric'],
    dimensions: { width: 100, height: 1, depth: 100 },
    rating: 4.7,
  },
  {
    id: 'color-002',
    name: {
      en: 'Designer Fabric Swatches',
      he: 'דוגמאות בדים מעצב',
    },
    description: {
      en: 'High-end materials for custom projects. Curated selection of premium designer fabrics.',
      he: 'חומרים איכותיים לפרויקטים מותאמים אישית. מבחר מתוחכם של בדים מעצב פרימיום.',
    },
    category: 'color',
    price: 125,
    images: [color3, color4],
    colors: ['Various'],
    materials: ['Fabric', 'Velvet', 'Linen'],
    dimensions: { width: 100, height: 1, depth: 100 },
    rating: 4.8,
  },
  {
    id: 'color-003',
    name: {
      en: 'Leather Samples Collection',
      he: 'אוסף דגימות עור',
    },
    description: {
      en: 'Premium leather swatches in various colors and textures. Perfect for choosing your ideal upholstery.',
      he: 'דגימות עור פרימיום במגוון צבעים ומרקמים. מושלם לבחירת הריפוד האידיאלי שלכם.',
    },
    category: 'color',
    price: 149,
    images: [color5, color1],
    colors: ['Brown', 'Black', 'Taupe', 'Burgundy'],
    materials: ['Leather'],
    dimensions: { width: 100, height: 1, depth: 100 },
    rating: 4.9,
  },
  {
    id: 'color-004',
    name: {
      en: 'Luxury Velvet Collection',
      he: 'אוסף קטיפה יוקרתי',
    },
    description: {
      en: 'Rich velvet fabrics in vibrant colors. Adds sophistication and luxury to any piece.',
      he: 'בדי קטיפה עשירים בצבעים עזים. מוסיף תחכום ויוקרה לכל יצירה.',
    },
    category: 'color',
    price: 99,
    images: [color2, color3],
    colors: ['Navy', 'Emerald', 'Burgundy', 'Teal'],
    materials: ['Velvet'],
    dimensions: { width: 100, height: 1, depth: 100 },
    rating: 4.6,
  },
  {
    id: 'color-005',
    name: {
      en: 'Natural Linen Collection',
      he: 'אוסף פשתן טבעי',
    },
    description: {
      en: 'Eco-friendly linen fabrics in natural tones. Perfect for Scandinavian and minimalist designs.',
      he: 'בדי פשתן ידידותיים לסביבה בגוונים טבעיים. מושלמים לעיצובים סקנדינביים ומינימליסטיים.',
    },
    category: 'color',
    price: 79,
    images: [color4, color5],
    colors: ['Beige', 'Cream', 'Natural', 'Gray'],
    materials: ['Linen'],
    dimensions: { width: 100, height: 1, depth: 100 },
    rating: 4.5,
  },
];

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find((product) => product.id === id);
};

// Helper function to get products by category
export const getProductsByCategory = (category: Product['category']): Product[] => {
  return mockProducts.filter((product) => product.category === category);
};

// Helper function to get all products
export const getAllProducts = (): Product[] => {
  return mockProducts;
};

