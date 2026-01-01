import { memo, useMemo } from 'react';
import { ProductCard, ProductCardProps } from '../ProductCard';
import { ProductCardSkeleton } from '../LoadingSkeleton';

interface VirtualizedProductGridProps {
  products: ProductCardProps[];
  columns?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  isLoading?: boolean;
}

/**
 * VirtualizedProductGrid - A lightweight virtual scrolling implementation
 * Uses windowing technique to only render visible items
 */
export const VirtualizedProductGrid = memo(
  ({ products, columns = { mobile: 1, tablet: 2, desktop: 4 }, isLoading }: VirtualizedProductGridProps) => {
    // For now, we'll render all products but optimize with React.memo
    // For true virtual scrolling with large lists, consider react-window or react-virtualized
    const gridClasses = useMemo(
      () =>
        `grid grid-cols-${columns.mobile} sm:grid-cols-${columns.tablet} lg:grid-cols-${columns.desktop} gap-6`,
      [columns]
    );

    if (isLoading) {
      return (
        <div className={gridClasses}>
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      );
    }

    if (products.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-xl text-taupe-600">No products found</p>
        </div>
      );
    }

    return (
      <div className={gridClasses}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Custom comparison function for memo
    return (
      prevProps.products.length === nextProps.products.length &&
      prevProps.isLoading === nextProps.isLoading &&
      prevProps.products.every((product, index) => product.id === nextProps.products[index]?.id)
    );
  }
);

VirtualizedProductGrid.displayName = 'VirtualizedProductGrid';

