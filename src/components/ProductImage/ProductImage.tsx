import { useState, useEffect, useRef } from 'react';
import { getFallbackImage, checkImageExists } from '../../utils/imageUtils';
import { getBlurPlaceholder } from '../../utils/blurPlaceholder';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | '4:3' | '16:9' | '3:2' | 'auto';
  lazy?: boolean;
  fallback?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const ASPECT_RATIO_CLASSES: Record<Exclude<ProductImageProps['aspectRatio'], 'auto' | undefined>, string> = {
  square: 'aspect-square',
  '4:3': 'aspect-[4/3]',
  '16:9': 'aspect-video',
  '3:2': 'aspect-[3/2]',
};

export const ProductImage = ({
  src,
  alt,
  className = '',
  aspectRatio = 'square',
  lazy = true,
  fallback,
  onLoad,
  onError,
}: ProductImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [blurDataUrl] = useState(() => getBlurPlaceholder());
  const imgRef = useRef<HTMLDivElement>(null);

  // Check if image exists and use fallback if needed
  useEffect(() => {
    const checkImage = async () => {
      const exists = await checkImageExists(src);
      if (!exists) {
        setCurrentSrc(fallback || getFallbackImage());
        setHasError(true);
      } else {
        setCurrentSrc(src);
        setHasError(false);
      }
    };

    checkImage();
  }, [src, fallback]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    setCurrentSrc(fallback || getFallbackImage());
    onError?.();
  };

  const aspectRatioClass = aspectRatio === 'auto' ? '' : ASPECT_RATIO_CLASSES[aspectRatio] || 'aspect-square';

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden bg-cream-100 ${aspectRatioClass} ${className}`}
    >
      {/* Blur Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={blurDataUrl}
            alt=""
            className="w-full h-full object-cover scale-150 filter blur-xl"
            aria-hidden="true"
          />
        </div>
      )}

      {/* Error State / Fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-cream-100 flex items-center justify-center">
          <div className="text-center text-taupe-500">
            <svg
              className="w-12 h-12 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}

      {/* Actual Image */}
      {isInView && (
        <img
          src={currentSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={lazy ? 'lazy' : 'eager'}
          style={{
            backgroundImage: `url(${blurDataUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
    </div>
  );
};

