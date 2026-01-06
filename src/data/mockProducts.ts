// Mock product data for demonstration
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
import sofa11 from '../assets/images/sofas/11.jpg';
import sofa12 from '../assets/images/sofas/12.jpg';
import sofa13 from '../assets/images/sofas/13.jpg';
import sofa14 from '../assets/images/sofas/14.jpg';
import sofa15 from '../assets/images/sofas/15.jpg';
import sofa16 from '../assets/images/sofas/16.jpg';
import sofa17 from '../assets/images/sofas/17.jpg';
import sofa18 from '../assets/images/sofas/18.jpg';
import sofa19 from '../assets/images/sofas/19.jpg';
import sofa20 from '../assets/images/sofas/20.jpg';
import sofa21 from '../assets/images/sofas/21.jpg';
import sofa22 from '../assets/images/sofas/22.jpg';
import sofa24 from '../assets/images/sofas/24.jpg';
import sofa25 from '../assets/images/sofas/25.jpg';

import bed1 from '../assets/images/beds/1.jpg';
import bed2 from '../assets/images/beds/2.jpg';
import bed3 from '../assets/images/beds/3.jpg';
import bed4 from '../assets/images/beds/4.jpg';
import bed5 from '../assets/images/beds/5.jpg';
import bed6 from '../assets/images/beds/6.jpg';
import bed7 from '../assets/images/beds/7.jpg';
import bed8 from '../assets/images/beds/8.jpg';
import bed9 from '../assets/images/beds/9.jpg';
import bed10 from '../assets/images/beds/10.jpg';
import bed11 from '../assets/images/beds/11.jpg';
import bed12 from '../assets/images/beds/12.jpg';
import bed13 from '../assets/images/beds/13.jpg';
import bed14 from '../assets/images/beds/14.jpg';
import bed15 from '../assets/images/beds/15.jpg';
import bed16 from '../assets/images/beds/16.jpg';
import bed17 from '../assets/images/beds/17.jpg';
import bed19 from '../assets/images/beds/19.jpg';
import bed20 from '../assets/images/beds/20.jpg';
import bed21 from '../assets/images/beds/21.jpg';
import bed22 from '../assets/images/beds/22.jpg';
import bed23 from '../assets/images/beds/23.jpg';
import bed24 from '../assets/images/beds/24.jpg';
import bed25 from '../assets/images/beds/25.jpg';
import bed26 from '../assets/images/beds/26.jpg';
import bed27 from '../assets/images/beds/27.jpg';
import bed28 from '../assets/images/beds/28.jpg';

import table1 from '../assets/images/tables/1.jpg';
import table2 from '../assets/images/tables/2.jpg';


import { ProductCardProps } from '../components/ProductCard/ProductCard';

// New Arrivals - Latest products
export const newArrivals: ProductCardProps[] = [
  {
    id: 'sofa-1',
    name: { en: 'Modern Luxury Sofa', he: 'ספה פינתית בעיצוב אישי – בדיוק כמו שדמיינתם' },
    image: sofa1,
    description: { 
      en: 'Contemporary design with premium comfort', 
      he: 'ספה פינתית איכותית ומרשימה, המיוצרת בעבודת יד ובהתאמה מלאה לחלל ולסגנון שלכם.\n\nניתן לבחור את סוג הבד, המרקם והצבע מתוך מגוון רחב של אפשרויות — וליצור מראה ייחודי שמתאים לבית שלכם בצורה מושלמת.\n\nהספה משלבת נוחות גבוהה עם עמידות לאורך שנים, עם מושבים תומכים וריפוד איכותי שקל לניקוי ולתחזוקה.\n\nמתאימה לסלון משפחתי, לאירוח ולרגעי מנוחה מפנקים.' 
    },
    price: 2499,
    category: 'Sofas',
  },
  {
    id: 'bed-1',
    name: { en: 'Elegant Queen Bed', he: 'מיטה מלכותית אלגנטית' },
    image: bed1,
    description: { en: 'Stylish and comfortable bedroom centerpiece', he: 'מרכז אלגנטי ונוח לחדר השינה' },
    price: 1899,
    category: 'Beds',
  },
  {
    id: 'table-1',
    name: { en: 'Modern Dining Table', he: 'שולחן אוכל מודרני' },
    image: table1,
    description: { en: 'Perfect for family gatherings', he: 'מושלם למפגשים משפחתיים' },
    price: 1299,
    category: 'Tables',
  },
  {
    id: 'sofa-2',
    name: { en: 'Classic Leather Sofa', he: 'ספה פינתית בעיצוב אישי – בדיוק כמו שדמיינתם' },
    image: sofa2,
    description: { 
      en: 'Timeless elegance in your living room', 
      he: 'ספה פינתית איכותית ומרשימה, המיוצרת בעבודת יד ובהתאמה מלאה לחלל ולסגנון שלכם.\n\nניתן לבחור את סוג הבד, המרקם והצבע מתוך מגוון רחב של אפשרויות — וליצור מראה ייחודי שמתאים לבית שלכם בצורה מושלמת.\n\nהספה משלבת נוחות גבוהה עם עמידות לאורך שנים, עם מושבים תומכים וריפוד איכותי שקל לניקוי ולתחזוקה.\n\nמתאימה לסלון משפחתי, לאירוח ולרגעי מנוחה מפנקים.' 
    },
    price: 3299,
    category: 'Sofas',
  },
  {
    id: 'bed-5',
    name: { en: 'Premium Bed Collection', he: 'אוסף מיטות פרימיום' },
    image: bed5,
    description: { en: 'Luxurious textures and colors', he: 'מרקמים וצבעים יוקרתיים' },
    price: 89,
    category: 'Beds',
  },
  {
    id: 'bed-2',
    name: { en: 'Contemporary Bed Frame', he: 'מיטה עכשווית' },
    image: bed2,
    description: { en: 'Minimalist design meets comfort', he: 'עיצוב מינימליסטי עם נוחות' },
    price: 1599,
    category: 'Beds',
  },
];

// Best Sellers - Top-rated products
export const bestSellers: ProductCardProps[] = [
  {
    id: 'sofa-3',
    name: { en: 'Premium Comfort Sofa', he: 'ספה פינתית בעיצוב אישי – בדיוק כמו שדמיינתם' },
    image: sofa3,
    description: { 
      en: 'Customer favorite with outstanding reviews', 
      he: 'ספה פינתית איכותית ומרשימה, המיוצרת בעבודת יד ובהתאמה מלאה לחלל ולסגנון שלכם.\n\nניתן לבחור את סוג הבד, המרקם והצבע מתוך מגוון רחב של אפשרויות — וליצור מראה ייחודי שמתאים לבית שלכם בצורה מושלמת.\n\nהספה משלבת נוחות גבוהה עם עמידות לאורך שנים, עם מושבים תומכים וריפוד איכותי שקל לניקוי ולתחזוקה.\n\nמתאימה לסלון משפחתי, לאירוח ולרגעי מנוחה מפנקים.' 
    },
    price: 2799,
    category: 'Sofas',
  },
  {
    id: 'bed-3',
    name: { en: 'Deluxe King Bed', he: 'מיטת קינג דלוקס' },
    image: bed3,
    description: { en: 'Spacious and luxurious sleeping experience', he: 'חווית שינה מרווחת ויוקרתית' },
    price: 2299,
    category: 'Beds',
  },
  {
    id: 'table-2',
    name: { en: 'Extendable Dining Table', he: 'שולחן אוכל מתארך' },
    image: table2,
    description: { en: 'Versatile design for any occasion', he: 'עיצוב רב-תכליתי לכל אירוע' },
    price: 1499,
    category: 'Tables',
  },
  {
    id: 'sofa-5',
    name: { en: 'White Sofa Set', he: 'ספה פינתית בעיצוב אישי – בדיוק כמו שדמיינתם' },
    image: sofa5,
    description: { 
      en: 'High-end materials for IKEA style', 
      he: 'ספה פינתית איכותית ומרשימה, המיוצרת בעבודת יד ובהתאמה מלאה לחלל ולסגנון שלכם.\n\nניתן לבחור את סוג הבד, המרקם והצבע מתוך מגוון רחב של אפשרויות — וליצור מראה ייחודי שמתאים לבית שלכם בצורה מושלמת.\n\nהספה משלבת נוחות גבוהה עם עמידות לאורך שנים, עם מושבים תומכים וריפוד איכותי שקל לניקוי ולתחזוקה.\n\nמתאימה לסלון משפחתי, לאירוח ולרגעי מנוחה מפנקים.' 
    },
    price: 125,
    category: 'Sofas',
  },
  {
    id: 'sofa-4',
    name: { en: 'Sectional Sofa Set', he: 'ספה ישרה בעיצוב אישי – נוחות שמותאמת לכם' },
    image: sofa4,
    description: { 
      en: 'Spacious seating for small families', 
      he: 'ספה ישרה אלגנטית ומעוצבת, המיוצרת בהתאמה מלאה לגודל ולסגנון הבית.\n\nניתן לבחור את סוג הבד והצבע מתוך מגוון רחב של אפשרויות — כך שתוכלו לשלב אותה בצורה מושלמת עם הריהוט והעיצוב הקיים.\n\nהספה משלבת מבנה יציב, ריפוד איכותי ותמיכה נוחה לישיבה ארוכה, עם בדים עמידים שקל לנקות ולתחזק.\n\nמתאימה לסלון, חדר משפחה או חדר אירוח — ומוסיפה מראה נקי ומודרני לכל חלל.' 
    },
    price: 3999,
    category: 'Sofas',
  },
  {
    id: 'bed-4',
    name: { en: 'Platform Bed Frame', he: 'מיטת פלטפורמה' },
    image: bed4,
    description: { en: 'Modern style with storage options', he: 'סגנון מודרני עם אפשרויות אחסון' },
    price: 1799,
    category: 'Beds',
  },
];

// Beds Collection - 25 bed products
export const bedsCollection: ProductCardProps[] = [
  {
    id: 'bed-collection-1',
    name: { en: 'Elegant Queen Bed', he: 'מיטה מלכותית אלגנטית' },
    image: bed1,
    description: { en: 'Stylish and comfortable bedroom centerpiece', he: 'מרכז אלגנטי ונוח לחדר השינה' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-2',
    name: { en: 'Contemporary Bed Frame', he: 'מיטה עכשווית' },
    image: bed2,
    description: { en: 'Minimalist design meets comfort', he: 'עיצוב מינימליסטי עם נוחות' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-3',
    name: { en: 'Deluxe King Bed', he: 'מיטת קינג דלוקס' },
    image: bed3,
    description: { en: 'Spacious and luxurious sleeping experience', he: 'חווית שינה מרווחת ויוקרתית' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-4',
    name: { en: 'Platform Bed Frame', he: 'מיטת פלטפורמה' },
    image: bed4,
    description: { en: 'Modern style with storage options', he: 'סגנון מודרני עם אפשרויות אחסון' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-5',
    name: { en: 'Classic Wooden Bed', he: 'מיטה קלאסית מעץ' },
    image: bed5,
    description: { en: 'Timeless elegance with premium materials', he: 'אלגנטיות נצחית עם חומרים פרימיום' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-6',
    name: { en: 'Upholstered Headboard Bed', he: 'מיטה עם ראש מיטה מרופד' },
    image: bed6,
    description: { en: 'Comfortable and elegant design', he: 'עיצוב נוח ואלגנטי' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-7',
    name: { en: 'Metal Frame Bed', he: 'מיטה עם מסגרת מתכת' },
    image: bed7,
    description: { en: 'Durable and modern metal construction', he: 'בנייה מתכתית עמידה ומודרנית' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-8',
    name: { en: 'Storage Bed', he: 'מיטה עם אחסון' },
    image: bed8,
    description: { en: 'Functional design with built-in storage', he: 'עיצוב פונקציונלי עם אחסון מובנה' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-9',
    name: { en: 'Canopy Bed', he: 'מיטת פרגוד' },
    image: bed9,
    description: { en: 'Luxurious canopy design for elegance', he: 'עיצוב פרגוד יוקרתי לאלגנטיות' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-10',
    name: { en: 'Modern Low-Profile Bed', he: 'מיטה מודרנית נמוכה' },
    image: bed10,
    description: { en: 'Sleek low-profile contemporary design', he: 'עיצוב עכשווי נמוך ומעוצב' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-11',
    name: { en: 'Rustic Bed Frame', he: 'מיטה כפרית' },
    image: bed11,
    description: { en: 'Country charm with natural wood finish', he: 'קסם כפרי עם גימור עץ טבעי' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-12',
    name: { en: 'Sleigh Bed', he: 'מיטת מזחלת' },
    image: bed12,
    description: { en: 'Curved headboard and footboard design', he: 'עיצוב עם ראש מיטה וסיום מעוגלים' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-13',
    name: { en: 'Panel Bed', he: 'מיטת לוח' },
    image: bed13,
    description: { en: 'Classic panel headboard style', he: 'סגנון ראש מיטה קלאסי עם לוחות' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-14',
    name: { en: 'Four Poster Bed', he: 'מיטת ארבעה עמודים' },
    image: bed14,
    description: { en: 'Traditional four-poster elegance', he: 'אלגנטיות מסורתית עם ארבעה עמודים' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-15',
    name: { en: 'Tufted Bed', he: 'מיטה עם תפירה' },
    image: bed15,
    description: { en: 'Button-tufted upholstered headboard', he: 'ראש מיטה מרופד עם תפירת כפתורים' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-16',
    name: { en: 'Minimalist Bed Frame', he: 'מיטה מינימליסטית' },
    image: bed16,
    description: { en: 'Clean lines and simple elegance', he: 'קוים נקיים ואלגנטיות פשוטה' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-17',
    name: { en: 'Luxury Master Bed', he: 'מיטת מאסטר יוקרתית' },
    image: bed17,
    description: { en: 'Premium materials and exquisite craftsmanship', he: 'חומרים פרימיום ומלאכת מחשבת מעולה' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-19',
    name: { en: 'Industrial Bed Frame', he: 'מיטה תעשייתית' },
    image: bed19,
    description: { en: 'Urban industrial style with metal accents', he: 'סגנון תעשייתי עירוני עם פרטי מתכת' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-20',
    name: { en: 'Traditional Bed', he: 'מיטה מסורתית' },
    image: bed20,
    description: { en: 'Classic traditional bedroom furniture', he: 'רהיטי חדר שינה מסורתיים קלאסיים' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-21',
    name: { en: 'Modern Platform Bed', he: 'מיטת פלטפורמה מודרנית' },
    image: bed21,
    description: { en: 'Contemporary platform design', he: 'עיצוב פלטפורמה עכשווי' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-22',
    name: { en: 'Elegant Bedroom Set', he: 'סט חדר שינה אלגנטי' },
    image: bed22,
    description: { en: 'Complete bedroom solution', he: 'פתרון מלא לחדר שינה' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-23',
    name: { en: 'Designer Bed Frame', he: 'מיטה מעוצבת' },
    image: bed23,
    description: { en: 'Unique designer-inspired piece', he: 'יצירה ייחודית בהשראת מעצב' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-24',
    name: { en: 'Comfort Bed', he: 'מיטת נוחות' },
    image: bed24,
    description: { en: 'Maximum comfort and support', he: 'נוחות ותמיכה מקסימליים' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-25',
    name: { en: 'Premium Bed Collection', he: 'אוסף מיטות פרימיום' },
    image: bed25,
    description: { en: 'Luxurious textures and colors', he: 'מרקמים וצבעים יוקרתיים' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-26',
    name: { en: 'Artisan Bed Frame', he: 'מיטה בעבודת יד' },
    image: bed26,
    description: { en: 'Handcrafted with attention to detail', he: 'עשוי בעבודת יד עם תשומת לב לפרטים' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-27',
    name: { en: 'Sleek Modern Bed', he: 'מיטה מודרנית חלקה' },
    image: bed27,
    description: { en: 'Contemporary design with sleek lines', he: 'עיצוב עכשווי עם קוים חלקים' },
    category: 'Beds',
  },
  {
    id: 'bed-collection-28',
    name: { en: 'Cozy Bedroom Bed', he: 'מיטת חדר שינה נעימה' },
    image: bed28,
    description: { en: 'Perfect for a cozy and inviting bedroom', he: 'מושלם לחדר שינה נעים ומזמין' },
    category: 'Beds',
  },
];

// Sofas Collection - 25 sofa products
export const sofasCollection: ProductCardProps[] = [
  {
    id: 'sofa-collection-1',
    name: { en: 'Modern Luxury Sofa', he: 'ספה יוקרתית מודרנית' },
    image: sofa1,
    description: { en: 'Contemporary design with premium comfort', he: 'עיצוב עכשווי עם נוחות פרימיום' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-2',
    name: { en: 'Classic Leather Sofa', he: 'ספה קלאסית מעור' },
    image: sofa2,
    description: { en: 'Timeless elegance in your living room', he: 'אלגנטיות נצחית בסלון שלך' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-3',
    name: { en: 'Premium Comfort Sofa', he: 'ספה נוחה פרימיום' },
    image: sofa3,
    description: { en: 'Customer favorite with outstanding reviews', he: 'מועדף על הלקוחות עם ביקורות מצוינות' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-4',
    name: { en: 'Elegant Sectional Sofa', he: 'ספה מודולרית אלגנטית' },
    image: sofa4,
    description: { en: 'Spacious seating for family gatherings', he: 'מושבים מרווחים למפגשים משפחתיים' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-5',
    name: { en: 'Contemporary Sofa Set', he: 'סט ספות עכשווי' },
    image: sofa5,
    description: { en: 'Modern style with sleek lines', he: 'סגנון מודרני עם קוים חלקים' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-6',
    name: { en: 'Upholstered Sofa', he: 'ספה מרופדת' },
    image: sofa6,
    description: { en: 'Plush comfort and elegant design', he: 'נוחות פלוס ועיצוב אלגנטי' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-7',
    name: { en: 'Convertible Sofa Bed', he: 'ספה מתקפלת למיטה' },
    image: sofa7,
    description: { en: 'Versatile design for any space', he: 'עיצוב רב-תכליתי לכל חלל' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-8',
    name: { en: 'Chesterfield Sofa', he: 'ספת צ\'סטרפילד' },
    image: sofa8,
    description: { en: 'Classic tufted elegance', he: 'אלגנטיות קלאסית עם תפירה' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-9',
    name: { en: 'Mid-Century Modern Sofa', he: 'ספה מודרנית אמצע המאה' },
    image: sofa9,
    description: { en: 'Retro-inspired contemporary design', he: 'עיצוב עכשווי בהשראת רטרו' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-10',
    name: { en: 'L-Shaped Corner Sofa', he: 'ספה פינתית בצורת L' },
    image: sofa10,
    description: { en: 'Perfect for corner spaces', he: 'מושלמת לחללים פינתיים' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-11',
    name: { en: 'Velvet Sofa', he: 'ספת קטיפה' },
    image: sofa11,
    description: { en: 'Luxurious velvet upholstery', he: 'ריפוד קטיפה יוקרתי' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-12',
    name: { en: 'Fabric Sofa', he: 'ספת בד' },
    image: sofa12,
    description: { en: 'Comfortable fabric upholstery', he: 'ריפוד בד נוח' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-13',
    name: { en: 'Modern Sofa Set', he: 'סט ספות מודרני' },
    image: sofa13,
    description: { en: 'Sleek contemporary furniture', he: 'רהיטים עכשוויים חלקים' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-14',
    name: { en: 'Designer Sofa', he: 'ספה מעוצבת' },
    image: sofa14,
    description: { en: 'Unique designer-inspired piece', he: 'יצירה ייחודית בהשראת מעצב' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-15',
    name: { en: 'Comfort Sofa', he: 'ספת נוחות' },
    image: sofa15,
    description: { en: 'Maximum comfort and support', he: 'נוחות ותמיכה מקסימליים' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-16',
    name: { en: 'Elegant Living Room Sofa', he: 'ספת סלון אלגנטית' },
    image: sofa16,
    description: { en: 'Perfect centerpiece for your living room', he: 'מרכז מושלם לסלון שלך' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-17',
    name: { en: 'Luxury Sofa Collection', he: 'אוסף ספות יוקרתי' },
    image: sofa17,
    description: { en: 'Premium materials and craftsmanship', he: 'חומרים פרימיום ומלאכת מחשבת' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-18',
    name: { en: 'Minimalist Sofa', he: 'ספה מינימליסטית' },
    image: sofa18,
    description: { en: 'Clean lines and simple elegance', he: 'קוים נקיים ואלגנטיות פשוטה' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-19',
    name: { en: 'Traditional Sofa', he: 'ספה מסורתית' },
    image: sofa19,
    description: { en: 'Classic traditional design', he: 'עיצוב מסורתי קלאסי' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-20',
    name: { en: 'Contemporary Sofa', he: 'ספה עכשווית' },
    image: sofa20,
    description: { en: 'Modern aesthetics and comfort', he: 'אסתטיקה מודרנית ונוחות' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-21',
    name: { en: 'Premium Sofa Set', he: 'סט ספות פרימיום' },
    image: sofa21,
    description: { en: 'High-end luxury furniture', he: 'רהיטי יוקרה גבוהים' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-22',
    name: { en: 'Stylish Sofa', he: 'ספה אופנתית' },
    image: sofa22,
    description: { en: 'Trendy design with comfort', he: 'עיצוב אופנתי עם נוחות' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-24',
    name: { en: 'Spacious Sofa', he: 'ספה מרווחת' },
    image: sofa24,
    description: { en: 'Room for the whole family', he: 'מקום לכל המשפחה' },
    category: 'Sofas',
  },
  {
    id: 'sofa-collection-25',
    name: { en: 'Elegant Sofa Collection', he: 'אוסף ספות אלגנטי' },
    image: sofa25,
    description: { en: 'Sophisticated design for your home', he: 'עיצוב מתוחכם לביתך' },
    category: 'Sofas',
  },
];

