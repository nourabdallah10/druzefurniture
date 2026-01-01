import { useState } from 'react';
import { QuickView } from '../QuickView/QuickView';
import { useTranslation } from '../../hooks/useTranslation';

interface QuickViewButtonProps {
  product: {
    id: string;
    name: string;
    image: string;
    description?: string;
    price?: number;
    category?: string;
  };
  className?: string;
}

export const QuickViewButton = ({ product, className = '' }: QuickViewButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-30 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 touch-target text-responsive-sm font-medium text-accent-charcoal opacity-0 group-hover:opacity-100 ${className}`}
        aria-label={t('quickView.title')}
      >
        {t('quickView.title')}
      </button>
      <QuickView product={product} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

