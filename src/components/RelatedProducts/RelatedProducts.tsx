import { memo } from 'react';
import { ProductCard } from '../ProductCard';
import { ProductCardProps } from '../ProductCard/ProductCard';
import { useTranslation } from '../../hooks/useTranslation';
import { useLanguageStore } from '../../store/languageStore';

interface RelatedProductsProps {
  products: ProductCardProps[];
}

export const RelatedProducts = memo(({ products }: RelatedProductsProps) => {
  const { t, language } = useTranslation();

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="mt-12" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('product.relatedProducts')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </section>
  );
});

