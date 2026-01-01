import { useEffect, useState } from 'react';
import { preloadImages } from '../../utils/imageUtils';

interface ImagePreloaderProps {
  images: string[];
  onLoadComplete?: () => void;
  onLoadProgress?: (loaded: number, total: number) => void;
  children?: React.ReactNode;
}

/**
 * ImagePreloader component - Preloads images in the background
 * Shows children once images are loaded (or immediately if children provided)
 */
export const ImagePreloader = ({
  images,
  onLoadComplete,
  onLoadProgress,
  children,
}: ImagePreloaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState({ loaded: 0, total: images.length });

  useEffect(() => {
    if (!images || images.length === 0) {
      setIsLoading(false);
      onLoadComplete?.();
      return;
    }

    let loadedCount = 0;

    const loadImages = async () => {
      try {
        // Load images one by one to track progress
        for (const src of images) {
          try {
            await preloadImages([src]);
            loadedCount++;
            setProgress({ loaded: loadedCount, total: images.length });
            onLoadProgress?.(loadedCount, images.length);
          } catch (error) {
            // Continue loading other images even if one fails
            loadedCount++;
            setProgress({ loaded: loadedCount, total: images.length });
            onLoadProgress?.(loadedCount, images.length);
          }
        }

        setIsLoading(false);
        onLoadComplete?.();
      } catch (error) {
        console.error('Error preloading images:', error);
        setIsLoading(false);
        onLoadComplete?.();
      }
    };

    loadImages();
  }, [images, onLoadComplete, onLoadProgress]);

  // If children provided, show them immediately (preloading happens in background)
  if (children) {
    return <>{children}</>;
  }

  // Optional: Show loading indicator if no children
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-cream-300 border-t-accent-charcoal rounded-full animate-spin mx-auto mb-2" />
          <p className="text-sm text-taupe-600">
            Loading images... {progress.loaded}/{progress.total}
          </p>
        </div>
      </div>
    );
  }

  return null;
};

