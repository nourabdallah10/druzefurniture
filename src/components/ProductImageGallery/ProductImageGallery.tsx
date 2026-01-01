import { useState, memo } from 'react';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export const ProductImageGallery = memo(({ images, productName }: ProductImageGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!images || images.length === 0) {
    return <div className="h-96 bg-gray-200 rounded-lg"></div>;
  }

  const selectedImage = images[selectedImageIndex] || images[0];

  return (
    <div className="space-y-4" role="group" aria-label={`${productName} image gallery`}>
      {/* Main Image */}
      <figure className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden group">
        <div
          className="relative w-full h-full cursor-zoom-in"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          role="button"
          aria-label={`View larger image ${selectedImageIndex + 1} of ${images.length}`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsZoomed(!isZoomed);
            }
          }}
        >
          <img
            src={selectedImage}
            alt={`${productName} - Image ${selectedImageIndex + 1} of ${images.length}`}
            className={`w-full h-full object-cover transition-transform duration-300 ease-out ${
              isZoomed ? 'scale-150' : 'scale-100'
            }`}
            itemProp="image"
          />
        </div>
      </figure>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <nav aria-label="Product image thumbnails" className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedImageIndex(index);
                setIsZoomed(false);
              }}
              className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all touch-target ${
                selectedImageIndex === index
                  ? 'border-blue-600 ring-2 ring-blue-200'
                  : 'border-gray-200 hover:border-gray-300 active:border-gray-400'
              }`}
              aria-label={`View image ${index + 1} of ${images.length}`}
              aria-current={selectedImageIndex === index ? 'true' : 'false'}
            >
              <img
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </nav>
      )}
    </div>
  );
});

