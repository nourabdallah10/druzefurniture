import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguageStore } from '../store/languageStore';
import { useCompareStore } from '../store/compareStore';
import { formatCurrency } from '../utils';
import { ProductImage } from '../components/ProductImage';
import { CompareButton } from '../components/CompareButton/CompareButton';
import { MetaTags } from '../components/SEO';

export const Compare = () => {
  const { t, language } = useTranslation();
  const { language: lang } = useLanguageStore();
  const { items, clearCompare } = useCompareStore();

  if (items.length === 0) {
    return (
      <>
        <MetaTags
          title={`${t('compare.title')} - ${t('seo.defaultTitle')}`}
          description={t('compare.empty')}
        />
        <div className="min-h-[60vh] flex items-center justify-center px-4" dir={language === 'he' ? 'rtl' : 'ltr'}>
          <div className="text-center max-w-md mx-auto">
            <svg
              className="w-24 h-24 mx-auto mb-6 text-taupe-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
              />
            </svg>
            <h2 className="text-h1 font-serif font-semibold text-accent-charcoal mb-4">
              {t('compare.empty')}
            </h2>
            <p className="text-responsive-base text-taupe-600 mb-8">
              {t('compare.addToCompare')}
            </p>
            <Link to="/sofas" className="btn-luxury-accent inline-block">
              {t('nav.sofas')}
            </Link>
          </div>
        </div>
      </>
    );
  }

  // Get all unique keys from all products for comparison table
  const allKeys = new Set<string>();
  items.forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (!['id', 'image'].includes(key)) {
        allKeys.add(key);
      }
    });
  });

  return (
    <>
      <MetaTags
        title={`${t('compare.title')} - ${t('seo.defaultTitle')}`}
        description={`Compare ${items.length} products`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" dir={language === 'he' ? 'rtl' : 'ltr'}>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-h1 font-serif font-semibold text-accent-charcoal">
            {t('compare.title')}
          </h1>
          <button onClick={clearCompare} className="btn-luxury-secondary">
            {t('compare.clear')}
          </button>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-cream-200">
                <th className="p-4 text-left text-responsive-sm font-semibold text-taupe-700">
                  {t('compare.specifications')}
                </th>
                {items.map((item) => (
                  <th key={item.id} className="p-4 text-center min-w-[200px]">
                    <div className="flex flex-col items-center gap-4">
                      <Link
                        to={`/product/${item.id}`}
                        className="w-32 h-32 aspect-square relative block"
                      >
                        <ProductImage
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-lg"
                          lazy={false}
                          aspectRatio="square"
                        />
                      </Link>
                      <div className="text-center">
                        <Link
                          to={`/product/${item.id}`}
                          className="text-responsive-base font-semibold text-accent-charcoal hover:text-accent-gold transition-colors block mb-2"
                        >
                          {item.name}
                        </Link>
                        <CompareButton product={item} variant="button" className="text-xs px-3 py-1" />
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from(allKeys).map((key) => (
                <tr key={key} className="border-b border-cream-200 hover:bg-cream-50">
                  <td className="p-4 text-responsive-sm font-semibold text-taupe-700">
                    {t(`compare.${key}`) || key}
                  </td>
                  {items.map((item) => (
                    <td key={item.id} className="p-4 text-center text-responsive-sm text-taupe-600">
                      {key === 'price' && item.price !== undefined
                        ? formatCurrency(item.price, lang)
                        : typeof item[key] === 'object'
                        ? JSON.stringify(item[key])
                        : String(item[key] || '-')}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

