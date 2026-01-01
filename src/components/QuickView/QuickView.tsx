import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { useLanguageStore } from '../../store/languageStore';
import { formatCurrency } from '../../utils';
import { ProductImage } from '../ProductImage';

interface QuickViewProps {
  product: {
    id: string;
    name: string;
    image: string;
    description?: string;
    price?: number;
    category?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export const QuickView = ({ product, isOpen, onClose }: QuickViewProps) => {
  const { t, language } = useTranslation();
  const { language: lang } = useLanguageStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleViewDetails = () => {
    onClose();
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quickview-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10"
        onClick={(e) => e.stopPropagation()}
        dir={language === 'he' ? 'rtl' : 'ltr'}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-110 active:scale-95 touch-target"
          aria-label={t('accessibility.closeFilters')}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Image */}
          <div className="aspect-square">
            <ProductImage
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
              lazy={false}
              aspectRatio="square"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <h2 id="quickview-title" className="text-h1 font-serif font-semibold text-accent-charcoal mb-4">
              {product.name}
            </h2>

            {product.category && (
              <span className="inline-block text-sm text-taupe-500 mb-4">{product.category}</span>
            )}

            {product.price !== undefined && (
              <div className="text-h2 font-serif font-semibold text-accent-gold mb-4">
                {formatCurrency(product.price, lang)}
              </div>
            )}

            {product.description && (
              <p className="text-responsive-base text-taupe-600 mb-6 leading-relaxed">
                {product.description}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button
                onClick={handleViewDetails}
                className="btn-luxury flex-1"
              >
                {t('quickView.viewDetails')}
              </button>
              <button
                onClick={() => {
                  // Add to cart logic here
                  onClose();
                }}
                className="btn-luxury-accent flex-1"
              >
                {t('quickView.addToCart')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

