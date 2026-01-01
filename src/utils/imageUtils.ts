import { ProductCategory } from '../types/products';

// Fallback placeholder image (SVG data URI)
const FALLBACK_IMAGE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2ZhZjlmNyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Zjk0ODIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBVbmF2YWlsYWJsZTwvdGV4dD48L3N2Zz4=';

// Image path mapping - maps categories to their asset paths
const CATEGORY_PATH_MAP: Record<ProductCategory, string> = {
  sofa: 'sofas',
  bed: 'beds',
  table: 'tables',
  color: 'colors',
};

/**
 * Get image URL for a product image
 * @param category - Product category (sofa, bed, table, color)
 * @param fileName - Image file name (e.g., '1.jpg', 'sofa-1.jpg')
 * @returns Image URL path or fallback image
 */
export const getImageUrl = (category: ProductCategory, fileName: string): string => {
  try {
    const categoryPath = CATEGORY_PATH_MAP[category];
    if (!categoryPath) {
      console.warn(`Unknown category: ${category}`);
      return FALLBACK_IMAGE;
    }

    // Handle both cases: file already has extension or needs one
    const normalizedFileName = fileName.endsWith('.jpg') || fileName.endsWith('.jpeg') || fileName.endsWith('.png')
      ? fileName
      : `${fileName}.jpg`;

    // Try to dynamically import - this will work at build time with Vite
    // For runtime, we'll use the path directly
    const imagePath = `/src/assets/images/${categoryPath}/${normalizedFileName}`;
    
    // Return the path - Vite will handle the import at build time
    // If using static imports, this should be handled differently
    return imagePath;
  } catch (error) {
    console.error(`Error loading image: ${category}/${fileName}`, error);
    return FALLBACK_IMAGE;
  }
};

/**
 * Preload an image
 * @param src - Image source URL
 * @returns Promise that resolves when image is loaded
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

/**
 * Preload multiple images
 * @param srcs - Array of image source URLs
 * @returns Promise that resolves when all images are loaded
 */
export const preloadImages = async (srcs: string[]): Promise<void> => {
  const promises = srcs.map((src) => preloadImage(src).catch((error) => {
    console.warn(`Failed to preload image: ${src}`, error);
    // Continue even if some images fail
  }));
  await Promise.all(promises);
};

/**
 * Check if an image exists and can be loaded
 * @param src - Image source URL
 * @returns Promise that resolves to true if image exists
 */
export const checkImageExists = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
};

/**
 * Get fallback image URL
 * @returns Fallback image data URI
 */
export const getFallbackImage = (): string => {
  return FALLBACK_IMAGE;
};

/**
 * Extract filename from full image path
 * @param imagePath - Full path to image
 * @returns Filename with extension
 */
export const extractFileName = (imagePath: string): string => {
  // Handle both imported images (which are URLs) and path strings
  if (imagePath.includes('/')) {
    const parts = imagePath.split('/');
    return parts[parts.length - 1];
  }
  return imagePath;
};

/**
 * Get category from image path
 * @param imagePath - Full path to image
 * @returns Category or null if not found
 */
export const getCategoryFromPath = (imagePath: string): ProductCategory | null => {
  if (imagePath.includes('/sofas/')) return 'sofa';
  if (imagePath.includes('/beds/')) return 'bed';
  if (imagePath.includes('/tables/')) return 'table';
  if (imagePath.includes('/colors/')) return 'color';
  return null;
};

