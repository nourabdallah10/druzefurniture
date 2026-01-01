// Generate product data for color/fabric images
import { ProductCardProps } from '../components/ProductCard/ProductCard';

// Import color/fabric images
import color1 from '../assets/images/colors/1.jpg';
import color2 from '../assets/images/colors/2.jpg';
import color3 from '../assets/images/colors/3.jpg';
import color4 from '../assets/images/colors/4.jpg';
import color5 from '../assets/images/colors/5.jpg';
import color6 from '../assets/images/colors/6.jpg';
import color7 from '../assets/images/colors/7.jpg';
import color8 from '../assets/images/colors/8.jpg';
import color9 from '../assets/images/colors/9.jpg';
import color10 from '../assets/images/colors/10.jpg';
import color11 from '../assets/images/colors/11.jpg';
import color12 from '../assets/images/colors/12.jpg';
import color13 from '../assets/images/colors/13.jpg';
import color14 from '../assets/images/colors/14.jpg';
import color15 from '../assets/images/colors/15.jpg';
import color16 from '../assets/images/colors/16.jpg';
import color17 from '../assets/images/colors/17.jpg';
import color18 from '../assets/images/colors/18.jpg';
import color19 from '../assets/images/colors/19.jpg';
import color20 from '../assets/images/colors/20.jpg';
import color21 from '../assets/images/colors/21.jpg';
import color22 from '../assets/images/colors/22.jpg';

const importedColors = [
  color1, color2, color3, color4, color5, color6, color7, color8, color9, color10,
  color11, color12, color13, color14, color15, color16, color17, color18, color19, color20,
  color21, color22,
];

const colorNames = [
  { en: 'Classic Beige', he: 'בז קלאסי' },
  { en: 'Elegant Gray', he: 'אפור אלגנטי' },
  { en: 'Rich Brown', he: 'חום עשיר' },
  { en: 'Sophisticated Black', he: 'שחור מעודן' },
  { en: 'Warm Cream', he: 'קרם חם' },
  { en: 'Natural Taupe', he: 'טופ טבעי' },
  { en: 'Charming White', he: 'לבן מקסים' },
  { en: 'Modern Charcoal', he: 'פחם מודרני' },
  { en: 'Luxurious Ivory', he: 'שנהב יוקרתי' },
  { en: 'Timeless Navy', he: 'כחול כהה קלאסי' },
  { en: 'Premium Burgundy', he: 'בורדו פרימיום' },
  { en: 'Elegant Sage', he: 'מרווה אלגנטית' },
];

export interface ColorProduct extends ProductCardProps {
  metadata?: {
    color: string;
    isNew: boolean;
  };
}

// Generate products for imported images
export const generateColorProducts = (): ColorProduct[] => {
  return importedColors.map((image, index) => {
    const nameObj = colorNames[index % colorNames.length];

    return {
      id: `color-${index + 1}`,
      name: nameObj,
      image,
      description: {
        en: `Premium ${nameObj.en.toLowerCase()} fabric. High-quality material perfect for furniture upholstery. This luxurious textile offers exceptional durability, comfort, and visual appeal for your custom furniture projects.`,
        he: `בד ${nameObj.he} פרימיום. חומר באיכות גבוהה מושלם לריפוד רהיטים. הטקסטיל היוקרתי הזה מציע עמידות יוצאת דופן, נוחות וערעור ויזואלי לפרויקטי הרהיטים המותאמים אישית שלך.`,
      },
      category: 'Colors',
      metadata: {
        color: nameObj.en,
        isNew: index < 5, // First 5 are "new"
      },
    };
  });
};

