import { ProductCardSkeleton } from './ProductCardSkeleton';

interface ProductGridSkeletonProps {
  count?: number;
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
}

export const ProductGridSkeleton = ({
  count = 8,
  columns = { mobile: 1, tablet: 2, desktop: 4 },
}: ProductGridSkeletonProps) => {
  return (
    <div
      className={`grid grid-cols-${columns.mobile || 1} sm:grid-cols-${columns.tablet || 2} lg:grid-cols-${columns.desktop || 4} gap-6`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};

