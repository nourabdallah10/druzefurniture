import { useEffect, useState } from 'react';
import { preloadImages } from '../utils/imageUtils';

/**
 * Hook to preload images and track loading state
 */
export const useImagePreloader = (imageUrls: string[]) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      setIsLoading(false);
      return;
    }

    let loadedCount = 0;
    const total = imageUrls.length;

    const loadImages = async () => {
      try {
        // Load images sequentially to track progress
        for (const url of imageUrls) {
          try {
            const img = new Image();
            await new Promise<void>((resolve, reject) => {
              img.onload = () => resolve();
              img.onerror = () => reject(new Error(`Failed to load: ${url}`));
              img.src = url;
            });
            loadedCount++;
            setProgress(Math.round((loadedCount / total) * 100));
          } catch (error) {
            // Continue loading other images even if one fails
            loadedCount++;
            setProgress(Math.round((loadedCount / total) * 100));
          }
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error preloading images:', error);
        setIsLoading(false);
      }
    };

    loadImages();
  }, [imageUrls]);

  return { isLoading, progress };
};

