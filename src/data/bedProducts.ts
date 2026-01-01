// Generate product data for bed images
import { ProductCardProps } from '../components/ProductCard/ProductCard';

// Import bed images
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
import bed18 from '../assets/images/beds/18.jpg';
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
import bed29 from '../assets/images/beds/29.jpg';
import bed30 from '../assets/images/beds/30.jpg';
import bed31 from '../assets/images/beds/31.jpg';
import bed32 from '../assets/images/beds/32.jpg';
import bed33 from '../assets/images/beds/33.jpg';
import bed34 from '../assets/images/beds/34.jpg';
import bed35 from '../assets/images/beds/35.jpg';
import bed36 from '../assets/images/beds/36.jpg';
import bed37 from '../assets/images/beds/37.jpg';
import bed38 from '../assets/images/beds/38.jpg';
import bed39 from '../assets/images/beds/39.jpg';
import bed40 from '../assets/images/beds/40.jpg';
import bed41 from '../assets/images/beds/41.jpg';
import bed42 from '../assets/images/beds/42.jpg';
import bed43 from '../assets/images/beds/43.jpg';
import bed44 from '../assets/images/beds/44.jpg';
import bed45 from '../assets/images/beds/45.jpg';
import bed46 from '../assets/images/beds/46.jpg';
import bed47 from '../assets/images/beds/47.jpg';
import bed48 from '../assets/images/beds/48.jpg';
import bed49 from '../assets/images/beds/49.jpg';
import bed50 from '../assets/images/beds/50.jpg';

const importedBeds = [
  bed1, bed2, bed3, bed4, bed5, bed6, bed7, bed8, bed9, bed10,
  bed11, bed12, bed13, bed14, bed15, bed16, bed17, bed18, bed19, bed20,
  bed21, bed22, bed23, bed24, bed25, bed26, bed27, bed28, bed29, bed30,
  bed31, bed32, bed33, bed34, bed35, bed36, bed37, bed38, bed39, bed40,
  bed41, bed42, bed43, bed44, bed45, bed46, bed47, bed48, bed49, bed50,
];

const colors = ['Black', 'White', 'Gray', 'Beige', 'Brown', 'Blue', 'Red'];
const colorTranslations: { [key: string]: { en: string; he: string } } = {
  'Black': { en: 'Black', he: 'שחור' },
  'White': { en: 'White', he: 'לבן' },
  'Gray': { en: 'Gray', he: 'אפור' },
  'Beige': { en: 'Beige', he: 'בז' },
  'Brown': { en: 'Brown', he: 'חום' },
  'Blue': { en: 'Blue', he: 'כחול' },
  'Red': { en: 'Red', he: 'אדום' },
};

const styles = ['Modern', 'Classic', 'Contemporary', 'Traditional', 'Scandinavian'];
const styleTranslations: { [key: string]: { en: string; he: string } } = {
  'Modern': { en: 'Modern', he: 'מודרני' },
  'Classic': { en: 'Classic', he: 'קלאסי' },
  'Contemporary': { en: 'Contemporary', he: 'עכשווי' },
  'Traditional': { en: 'Traditional', he: 'מסורתי' },
  'Scandinavian': { en: 'Scandinavian', he: 'סקנדינבי' },
};

const materials = ['Wood', 'Metal', 'Upholstered', 'Fabric', 'Leather'];
const materialTranslations: { [key: string]: { en: string; he: string } } = {
  'Wood': { en: 'Wood', he: 'עץ' },
  'Metal': { en: 'Metal', he: 'מתכת' },
  'Upholstered': { en: 'Upholstered', he: 'מרופד' },
  'Fabric': { en: 'Fabric', he: 'בד' },
  'Leather': { en: 'Leather', he: 'עור' },
};

const bedNames = [
  { en: 'Elegant Queen Bed', he: 'מיטה מלכותית אלגנטית' },
  { en: 'Contemporary Bed Frame', he: 'מיטה עכשווית' },
  { en: 'Deluxe King Bed', he: 'מיטת קינג דלוקס' },
  { en: 'Platform Bed Frame', he: 'מיטת פלטפורמה' },
  { en: 'Classic Wooden Bed', he: 'מיטה קלאסית מעץ' },
  { en: 'Upholstered Headboard Bed', he: 'מיטה עם ראש מיטה מרופד' },
  { en: 'Metal Frame Bed', he: 'מיטה עם מסגרת מתכת' },
  { en: 'Storage Bed', he: 'מיטה עם אחסון' },
  { en: 'Canopy Bed', he: 'מיטת פרגוד' },
  { en: 'Modern Low-Profile Bed', he: 'מיטה מודרנית נמוכה' },
];

export interface BedProduct extends ProductCardProps {
  metadata?: {
    color: string;
    style: string;
    material: string;
    isNew: boolean;
  };
}

// Generate products for imported images
export const generateBedProducts = (): BedProduct[] => {
  return importedBeds.map((image, index) => {
    const basePrice = 1200 + (index % 50) * 50 + Math.floor(Math.random() * 800);
    const colorKey = colors[index % colors.length];
    const styleKey = styles[index % styles.length];
    const materialKey = materials[index % materials.length];
    const nameObj = bedNames[index % bedNames.length];
    
    const color = colorTranslations[colorKey];
    const style = styleTranslations[styleKey];
    const material = materialTranslations[materialKey];

    return {
      id: `bed-${index + 1}`,
      name: nameObj,
      image,
      description: {
        en: `${style.en} ${material.en} bed in ${color.en}. Premium comfort and quality craftsmanship. Built with attention to detail and superior materials, this bed frame offers exceptional support and timeless elegance for your bedroom.`,
        he: `מיטה ${material.he} ${style.he} בצבע ${color.he}. נוחות פרימיום ואיכות מלאכה גבוהה. בנויה עם תשומת לב לפרטים וחומרים מעולים, מסגרת המיטה הזו מציעה תמיכה יוצאת דופן ואלגנטיות נצחית לחדר השינה שלך.`,
      },
      price: basePrice,
      category: 'Beds',
      metadata: {
        color: colorKey,
        style: styleKey,
        material: materialKey,
        isNew: index < 10, // First 10 are "new"
      },
    };
  });
};

