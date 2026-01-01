import { useTranslation } from '../hooks/useTranslation';
import { useLanguageStore } from '../store/languageStore';
import { CategorySection } from '../components/CategorySection';
import { HomeImageSlider } from '../components/ImageSlider/HomeImageSlider';
import { ProductCard } from '../components/ProductCard';
import { newArrivals, bestSellers, bedsCollection, sofasCollection } from '../data/mockProducts';
import { MetaTags, OrganizationSchema } from '../components/SEO';

export const Home = () => {
  const { t, language } = useTranslation();

  return (
    <div className="w-full">
      {/* Hero Section with Image Slider - Full Width */}
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gray-50 mb-12">
        <HomeImageSlider
          autoAdvanceInterval={3000}
        />
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            {/* Featured Categories Section */}
            <section aria-labelledby="featured-categories-heading" className="mb-16 sm:mb-24 lg:mb-30" dir={language === 'he' ? 'rtl' : 'ltr'}>
              <h2 id="featured-categories-heading" className="text-h2 font-serif font-semibold text-accent-charcoal dark:text-white mb-12 sm:mb-16 text-center px-4">
                {t('home.featuredCategories')}
              </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            <CategorySection
              titleKey="nav.sofas"
              descriptionKey="sofas.description"
              route="/sofas"
            />
            <CategorySection
              titleKey="nav.beds"
              descriptionKey="beds.description"
              route="/beds"
            />
            <CategorySection
              titleKey="nav.tables"
              descriptionKey="tables.description"
              route="/tables"
            />
            <CategorySection
              titleKey="nav.colors"
              descriptionKey="colors.description"
              route="/colors"
            />
          </div>
        </section>

            {/* New Arrivals Section */}
            <section aria-labelledby="new-arrivals-heading" className="mb-16 sm:mb-24 lg:mb-30" dir={language === 'he' ? 'rtl' : 'ltr'}>
              <h2 id="new-arrivals-heading" className="text-h2 font-serif font-semibold text-accent-charcoal dark:text-white mb-12 sm:mb-16 text-center px-4">
                {t('home.newArrivals')}
              </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {newArrivals.map((product) => (
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

            {/* Best Sellers Section */}
            <section aria-labelledby="best-sellers-heading" className="mb-16 sm:mb-24 lg:mb-30" dir={language === 'he' ? 'rtl' : 'ltr'}>
              <h2 id="best-sellers-heading" className="text-h2 font-serif font-semibold text-accent-charcoal dark:text-white mb-12 sm:mb-16 text-center px-4">
                {t('home.bestSellers')}
              </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {bestSellers.map((product) => (
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

            {/* Beds Collection Section */}
            <section aria-labelledby="beds-collection-heading" className="mb-16 sm:mb-24 lg:mb-30" dir={language === 'he' ? 'rtl' : 'ltr'}>
              <h2 id="beds-collection-heading" className="text-h2 font-serif font-semibold text-accent-charcoal dark:text-white mb-12 sm:mb-16 text-center px-4">
                {t('nav.beds')}
              </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bedsCollection.map((product) => (
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

            {/* Sofas Collection Section */}
            <section aria-labelledby="sofas-collection-heading" className="mb-16 sm:mb-24 lg:mb-30" dir={language === 'he' ? 'rtl' : 'ltr'}>
              <h2 id="sofas-collection-heading" className="text-h2 font-serif font-semibold text-accent-charcoal dark:text-white mb-12 sm:mb-16 text-center px-4">
                {t('nav.sofas')}
              </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sofasCollection.map((product) => (
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
      </div>
    </div>
  );
};
