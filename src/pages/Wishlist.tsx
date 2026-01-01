import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguageStore } from '../store/languageStore';
import { useWishlistStore } from '../store/wishlistStore';
import { ProductCard } from '../components/ProductCard';
import { formatCurrency } from '../utils';
import { MetaTags } from '../components/SEO';

export const Wishlist = () => {
  const { t, language } = useTranslation();
  const { language: lang } = useLanguageStore();
  const { items, clearWishlist } = useWishlistStore();

  if (items.length === 0) {
    return (
      <>
        <MetaTags
          title={`${t('wishlist.title')} - ${t('seo.defaultTitle')}`}
          description={t('wishlist.empty')}
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
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <h2 className="text-h1 font-serif font-semibold text-accent-charcoal mb-4">
              {t('wishlist.empty')}
            </h2>
            <p className="text-responsive-base text-taupe-600 mb-8">
              Start adding products to your wishlist
            </p>
            <Link to="/sofas" className="btn-luxury-accent inline-block">
              {t('nav.sofas')}
            </Link>
          </div>
        </div>
      </>
    );
  }

  const totalPrice = items.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <>
      <MetaTags
        title={`${t('wishlist.title')} - ${t('seo.defaultTitle')}`}
        description={`${items.length} items in your wishlist`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" dir={language === 'he' ? 'rtl' : 'ltr'}>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-h1 font-serif font-semibold text-accent-charcoal mb-2">
              {t('wishlist.title')}
            </h1>
            <p className="text-responsive-base text-taupe-600">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </p>
          </div>
          {items.length > 0 && (
            <button onClick={clearWishlist} className="btn-luxury-secondary">
              {t('wishlist.clear')}
            </button>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {items.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              category={item.category}
            />
          ))}
        </div>

        {/* Total Price */}
        {totalPrice > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center">
              <span className="text-responsive-lg font-semibold text-taupe-700">
                Total Estimated Price:
              </span>
              <span className="text-h1 font-serif font-semibold text-accent-gold">
                {formatCurrency(totalPrice, lang)}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

