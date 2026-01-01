import { useState, useMemo } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { ProductCard } from '../components/ProductCard';
import { SortDropdown, SortOption } from '../components/SortDropdown';
import { generateColorProducts } from '../data/colorProducts';

export const Colors = () => {
  const { t, language } = useTranslation();
  const [sortOption, setSortOption] = useState<SortOption>('newest');

  // Generate all products
  const allProducts = useMemo(() => generateColorProducts(), []);

  // Sort products
  const sortedProducts = useMemo(() => {
    return [...allProducts].sort((a, b) => {
      switch (sortOption) {
        case 'price-low':
          return (a.price || 0) - (b.price || 0);
        case 'price-high':
          return (b.price || 0) - (a.price || 0);
        case 'newest':
          // Sort by ID number (newer products have higher numbers)
          const aNum = parseInt(a.id.split('-')[1]) || 0;
          const bNum = parseInt(b.id.split('-')[1]) || 0;
          return bNum - aNum;
        default:
          return 0;
      }
    });
  }, [allProducts, sortOption]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Title */}
      <div className="mb-6 sm:mb-8" dir={language === 'he' ? 'rtl' : 'ltr'}>
        <h1 className="text-responsive-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">
          {t('colors.title')}
        </h1>
        <p className="text-responsive-lg text-gray-600 dark:text-gray-300 px-2">{t('colors.description')}</p>
      </div>

      <div dir={language === 'he' ? 'rtl' : 'ltr'}>
        {/* Sort and Results Count */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="text-gray-600 dark:text-gray-300">
            {t('products.showing')} {sortedProducts.length} {t('products.products')}
          </div>
          <SortDropdown value={sortOption} onChange={setSortOption} />
        </div>

        {/* Product Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                description={product.description}
                price={product.price}
                category={product.category}
                hideDescription={true}
                hideButton={true}
                imageFit="contain"
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-300">{t('products.noProducts')}</p>
          </div>
        )}
      </div>
    </div>
  );
};
