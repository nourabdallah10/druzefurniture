import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { WishlistButton } from '../WishlistButton/WishlistButton';

export interface ProductCardProps {
  id: string;
  name: string | { en: string; he: string };
  image: string;
  description?: string | { en: string; he: string };
  price?: number;
  category?: string;
  hideDescription?: boolean;
  hideButton?: boolean;
  imageFit?: 'cover' | 'contain';
}

export const ProductCard = memo(({
  id,
  name,
  image,
  description,
  price,
  category,
  hideDescription = false,
  hideButton = false,
  imageFit = 'cover',
}: ProductCardProps) => {
  const { t, language } = useTranslation();
  const navigate = useNavigate();

  // Extract the correct language version of name and description
  const displayName = typeof name === 'string' ? name : name[language] || name.en;
  const displayDescription = description 
    ? (typeof description === 'string' ? description : description[language] || description.en)
    : undefined;

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <article
      className={`card-luxury overflow-hidden relative flex flex-col group cursor-pointer bg-white ${
        imageFit === 'contain' ? 'aspect-square' : 'h-96 sm:h-[450px]'
      }`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`${t('common.viewDetails')} - ${displayName}`}
    >
      {/* Background Image with Hover Zoom Effect */}
      <div 
        className={`absolute inset-0 bg-center bg-no-repeat transition-transform duration-700 ease-out ${imageFit === 'cover' ? 'group-hover:scale-105' : ''}`}
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundSize: imageFit,
        }}
        aria-hidden="true"
      />
      
      {/* Gradient Overlay for Text Readability - only show if we have description/button */}
      {(!hideDescription || !hideButton) && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30 z-10" />
      )}
      
      {/* Content Section - Overlaid on Background */}
      <div className="relative z-20 p-6 flex flex-col flex-1 h-full" dir={language === 'he' ? 'rtl' : 'ltr'}>
        {/* Category Badge */}
        {category && !hideDescription && (
          <span
            className={`absolute top-6 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 px-3 py-1 rounded-full shadow-sm z-30 ${
              language === 'he' ? 'right-6' : 'left-6'
            }`}
          >
            {category}
          </span>
        )}

        {/* Favorite Button */}
        <div className={`absolute top-1 z-30 ${
          language === 'he' ? 'left-1' : 'right-1'
        }`}>
        <WishlistButton
          product={{
            id,
              name: displayName,
            image,
            price,
            category,
          }}
        />
      </div>

        {/* Title and Description */}
        {!hideDescription && !hideButton ? (
          <div className="mt-auto">
            <h3 className="text-responsive-lg font-serif font-semibold text-white mb-3 line-clamp-1 drop-shadow-lg">
              {displayName}
            </h3>

            {displayDescription && (
              <p className="text-responsive-sm text-white/95 mb-6 line-clamp-2 leading-relaxed drop-shadow-md">
                {displayDescription}
              </p>
            )}

            {/* View Details Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick();
                }}
              aria-label={`${t('common.viewDetails')} ${displayName}`}
              className="w-full px-6 py-3 bg-accent-charcoal text-white text-responsive-sm font-medium tracking-wide rounded-lg hover:bg-taupe-600 active:scale-[0.98] transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 flex items-center justify-center touch-target min-h-[44px]"
              >
            {t('common.viewDetails')}
            <svg
              className={`inline-block w-4 h-4 ${language === 'he' ? 'mr-2 rotate-180' : 'ml-2'}`}
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
        </div>
        ) : null}
      </div>
    </article>
  );
});
