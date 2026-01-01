import { useState, useEffect, useRef } from 'react';
import { useLanguageStore } from '../../store/languageStore';
import { useTranslation } from '../../hooks/useTranslation';

// Import 5 images total - mix of sofas and beds (different selection)
import sofa2 from '../../assets/images/sofas/32.jpg';
import sofa7 from '../../assets/images/sofas/36.jpg';
import sofa9 from '../../assets/images/sofas/37.jpg';
import bed1 from '../../assets/images/beds/42.jpg';
import bed7 from '../../assets/images/beds/91.jpg';

// Select only 5 images total - mix of sofas and beds
const allImages = [sofa2, bed1, sofa7, bed7, sofa9];

interface HomeImageSliderProps {
  autoAdvanceInterval?: number;
}

export const HomeImageSlider = ({
  autoAdvanceInterval = 3000,
}: HomeImageSliderProps) => {
  const { language } = useLanguageStore();
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // Auto-advance functionality - switch every 5 seconds
  useEffect(() => {
    if (isPaused || allImages.length <= 1) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Loop back to start after the last image
        return (prevIndex + 1) % allImages.length;
      });
    }, autoAdvanceInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, autoAdvanceInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % allImages.length
    );
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  if (allImages.length === 0) {
    return <div className="h-64 bg-gray-200 rounded-lg"></div>;
  }

  // Calculate transform percentage - each image takes 100% width (only one visible at a time)
  const translateX = -(currentIndex * 100);

  return (
    <div
      className="w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      dir="ltr"
    >
      <div className="relative overflow-hidden w-full">
        {/* Welcome Text Overlay - Above Images */}
        <div className="absolute top-0 left-0 right-0 z-30 px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16">
          <div className="max-w-7xl mx-auto text-center" dir={language === 'he' ? 'rtl' : 'ltr'}>
            <h1 
              id="welcome-heading" 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-3 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            >
              {t('home.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {t('home.subtitle')}
            </p>
          </div>
        </div>

        {/* Image Container with sliding effect - only one image visible at a time */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(${translateX}%)`,
          }}
        >
          {allImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: '100%',
              }}
            >
              <div className="relative h-[512px] md:h-[640px] lg:h-[768px] overflow-hidden shadow-lg group w-full">
                <img
                  src={image}
                  alt={`Furniture ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        {allImages.length > 1 && (
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Right Arrow */}
        {allImages.length > 1 && (
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}

        {/* Navigation Dots - 5 dots for 5 images */}
        {allImages.length > 1 && (
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
            {allImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-white shadow-lg'
                    : 'w-2 h-2 bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
