// Generate product data for table images
import { ProductCardProps } from '../components/ProductCard/ProductCard';

// Import table images
import table1 from '../assets/images/tables/1.jpg';
import table2 from '../assets/images/tables/2.jpg';
import table3 from '../assets/images/tables/3.jpg';
import table4 from '../assets/images/tables/4.jpg';
import table5 from '../assets/images/tables/5.jpg';
import table6 from '../assets/images/tables/6.jpg';
import table7 from '../assets/images/tables/7.jpg';
import table8 from '../assets/images/tables/8.jpg';
import table9 from '../assets/images/tables/9.jpg';
import table10 from '../assets/images/tables/10.jpg';
import table11 from '../assets/images/tables/11.jpg';
import table12 from '../assets/images/tables/12.jpg';
import table13 from '../assets/images/tables/13.jpg';
import table14 from '../assets/images/tables/14.jpg';
import table15 from '../assets/images/tables/15.jpg';
import table16 from '../assets/images/tables/16.jpg';
import table17 from '../assets/images/tables/17.jpg';
import table18 from '../assets/images/tables/18.jpg';
import table19 from '../assets/images/tables/19.jpg';
import table20 from '../assets/images/tables/20.jpg';
import table21 from '../assets/images/tables/21.jpg';
import table22 from '../assets/images/tables/22.jpg';

const importedTables = [
  table1, table2, table3, table4, table5, table6, table7, table8, table9, table10,
  table11, table12, table13, table14, table15, table16, table17, table18, table19, table20,
  table21, table22,
];

const colors = ['Black', 'White', 'Gray', 'Beige', 'Brown', 'Oak', 'Walnut'];
const colorTranslations: { [key: string]: { en: string; he: string } } = {
  'Black': { en: 'Black', he: 'שחור' },
  'White': { en: 'White', he: 'לבן' },
  'Gray': { en: 'Gray', he: 'אפור' },
  'Beige': { en: 'Beige', he: 'בז' },
  'Brown': { en: 'Brown', he: 'חום' },
  'Oak': { en: 'Oak', he: 'אלון' },
  'Walnut': { en: 'Walnut', he: 'אגוז' },
};

const styles = ['Modern', 'Classic', 'Contemporary', 'Traditional', 'Rustic'];
const styleTranslations: { [key: string]: { en: string; he: string } } = {
  'Modern': { en: 'Modern', he: 'מודרני' },
  'Classic': { en: 'Classic', he: 'קלאסי' },
  'Contemporary': { en: 'Contemporary', he: 'עכשווי' },
  'Traditional': { en: 'Traditional', he: 'מסורתי' },
  'Rustic': { en: 'Rustic', he: 'כפרי' },
};

const materials = ['Wood', 'Metal', 'Glass', 'Marble', 'Composite'];
const materialTranslations: { [key: string]: { en: string; he: string } } = {
  'Wood': { en: 'Wood', he: 'עץ' },
  'Metal': { en: 'Metal', he: 'מתכת' },
  'Glass': { en: 'Glass', he: 'זכוכית' },
  'Marble': { en: 'Marble', he: 'שיש' },
  'Composite': { en: 'Composite', he: 'מלאכותי' },
};

const tableNames = [
  { en: 'Modern Dining Table', he: 'שולחן אוכל מודרני' },
  { en: 'Classic Wooden Table', he: 'שולחן עץ קלאסי' },
  { en: 'Contemporary Glass Table', he: 'שולחן זכוכית עכשווי' },
  { en: 'Elegant Dining Set', he: 'סט אוכל אלגנטי' },
  { en: 'Extendable Table', he: 'שולחן מתארך' },
  { en: 'Round Dining Table', he: 'שולחן אוכל עגול' },
  { en: 'Square Coffee Table', he: 'שולחן קפה מרובע' },
  { en: 'Rectangular Table', he: 'שולחן מלבני' },
  { en: 'Industrial Table', he: 'שולחן תעשייתי' },
  { en: 'Farmhouse Table', he: 'שולחן כפרי' },
];

export interface TableProduct extends ProductCardProps {
  metadata?: {
    color: string;
    style: string;
    material: string;
    isNew: boolean;
  };
}

// Generate products for imported images
export const generateTableProducts = (): TableProduct[] => {
  return importedTables.map((image, index) => {
    const basePrice = 800 + (index % 22) * 40 + Math.floor(Math.random() * 600);
    const colorKey = colors[index % colors.length];
    const styleKey = styles[index % styles.length];
    const materialKey = materials[index % materials.length];
    const nameObj = tableNames[index % tableNames.length];
    
    const color = colorTranslations[colorKey];
    const style = styleTranslations[styleKey];
    const material = materialTranslations[materialKey];

    return {
      id: `table-${index + 1}`,
      name: nameObj,
      image,
      description: {
        en: `${style.en} ${material.en} table in ${color.en}. Perfect for dining and gatherings. Crafted with precision and style, this table provides a beautiful and functional centerpiece for family meals and social occasions.`,
        he: `שולחן ${material.he} ${style.he} בצבע ${color.he}. מושלם לאירוח ולמפגשים. מיוצר בדיוק ובסגנון, השולחן הזה מספק מרכז יפה ופונקציונלי לארוחות משפחתיות ואירועים חברתיים.`,
      },
      price: basePrice,
      category: 'Tables',
      metadata: {
        color: colorKey,
        style: styleKey,
        material: materialKey,
        isNew: index < 5, // First 5 are "new"
      },
    };
  });
};

