import { useCompareStore } from '../../store/compareStore';
import { useTranslation } from '../../hooks/useTranslation';

interface CompareButtonProps {
  product: {
    id: string;
    name: string;
    image: string;
    price?: number;
    category?: string;
    description?: string;
    [key: string]: any;
  };
  variant?: 'icon' | 'button';
  className?: string;
}

export const CompareButton = ({
  product,
  variant = 'icon',
  className = '',
}: CompareButtonProps) => {
  const { isInCompare, toggleItem, getItemCount, maxItems } = useCompareStore();
  const { t } = useTranslation();

  const isCompared = isInCompare(product.id);
  const itemCount = getItemCount();
  const isFull = itemCount >= maxItems && !isCompared;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFull) {
      alert(t('compare.maxItemsReached').replace('{{max}}', maxItems.toString()));
      return;
    }
    toggleItem(product);
  };

  if (variant === 'icon') {
    return (
      <button
        onClick={handleClick}
        className={`w-8 h-8 ${className} absolute top-3 left-3 z-30 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 touch-target flex items-center justify-center group ${
          isCompared ? 'bg-blue-50' : ''
        } ${isFull ? 'opacity-50 cursor-not-allowed' : ''}`}
        aria-label={isCompared ? 'Remove from compare' : 'Add to compare'}
        disabled={isFull}
      >
        <svg
          className={`w-8 h-8 transition-all duration-200 ${
            isCompared
              ? 'fill-blue-500 text-blue-500'
              : 'fill-none text-gray-600 group-hover:text-blue-500'
          }`}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
          />
        </svg>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 touch-target min-h-[44px] ${className} ${
        isCompared
          ? 'bg-blue-50 border-blue-500 text-blue-700'
          : 'bg-white border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-700'
      } ${isFull ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={isFull}
      aria-label={isCompared ? 'Remove from compare' : 'Add to compare'}
    >
      {isCompared ? t('compare.remove') : t('compare.add')}
    </button>
  );
};

