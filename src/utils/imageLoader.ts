import { ProductCategory } from '../types/products';

/**
 * Dynamic image loader using Vite's import.meta.glob
 * This creates a mapping of all images in a category
 */
export const createImageLoader = () => {
  // Use import.meta.glob to dynamically load images
  const sofaImages = import.meta.glob('/src/assets/images/sofas/*.jpg', { eager: true, as: 'url' });
  const bedImages = import.meta.glob('/src/assets/images/beds/*.jpg', { eager: true, as: 'url' });
  const tableImages = import.meta.glob('/src/assets/images/tables/*.jpg', { eager: true, as: 'url' });
  const colorImages = import.meta.glob('/src/assets/images/colors/*.jpg', { eager: true, as: 'url' });

  const imageMap: Record<ProductCategory, Record<string, string>> = {
    sofa: sofaImages as Record<string, string>,
    bed: bedImages as Record<string, string>,
    table: tableImages as Record<string, string>,
    color: colorImages as Record<string, string>,
  };

  /**
   * Get image URL from the loaded image map
   * @param category - Product category
   * @param fileName - Image file name (e.g., '1.jpg')
   * @returns Image URL or undefined if not found
   */
  const getImage = (category: ProductCategory, fileName: string): string | undefined => {
    const categoryImages = imageMap[category];
    if (!categoryImages) return undefined;

    // Try different path formats
    const normalizedFileName = fileName.endsWith('.jpg') ? fileName : `${fileName}.jpg`;
    const paths = [
      `/src/assets/images/${category === 'sofa' ? 'sofas' : category === 'bed' ? 'beds' : category === 'table' ? 'tables' : 'colors'}/${normalizedFileName}`,
      `/src/assets/images/${category === 'sofa' ? 'sofas' : category === 'bed' ? 'beds' : category === 'table' ? 'tables' : 'colors'}/${fileName}`,
    ];

    for (const path of paths) {
      if (categoryImages[path]) {
        return categoryImages[path];
      }
    }

    // Try to find by filename in values
    const found = Object.entries(categoryImages).find(([key]) => 
      key.includes(normalizedFileName) || key.includes(fileName)
    );
    
    return found ? found[1] : undefined;
  };

  return { getImage, imageMap };
};

// Create singleton instance
export const imageLoader = createImageLoader();

