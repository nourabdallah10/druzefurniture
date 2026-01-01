import { useState, useEffect, Suspense, lazy } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { ProductCardSkeleton, PageSkeleton } from '../components/LoadingSkeleton';
import { MetaTags, ProductSchema } from '../components/SEO';

// Lazy load heavy components
const ProductImageGallery = lazy(() =>
  import('../components/ProductImageGallery').then((module) => ({ default: module.ProductImageGallery }))
);
const ProductSpecifications = lazy(() =>
  import('../components/ProductSpecifications').then((module) => ({ default: module.ProductSpecifications }))
);
const ProductReviews = lazy(() =>
  import('../components/ProductReviews').then((module) => ({ default: module.ProductReviews }))
);
const RelatedProducts = lazy(() =>
  import('../components/RelatedProducts').then((module) => ({ default: module.RelatedProducts }))
);

export const Product = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, language } = useTranslation();
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const module = await import('../data/productData');
        const loadedProduct = module.getProductById(id);
        setProduct(loadedProduct);
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (isLoading) {
    return <PageSkeleton />;
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('product.notFound')}</h1>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {t('product.backToHome')}
        </button>
      </div>
    );
  }

  // Extract the correct language version of name and description
  const productName = typeof product.name === 'string' ? product.name : product.name[language] || product.name.en;
  const productDescription = typeof product.description === 'string' 
    ? product.description 
    : (product.description?.[language] || product.description?.en || '');

  // WhatsApp contact link
  const whatsappNumber = '972555026838'; // +972 55-502-6838
  const whatsappMessage = language === 'he' 
    ? `שלום, אני מתעניין במוצר: ${productName}`
    : `Hello, I'm interested in the product: ${productName}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Product Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12" dir={language === 'he' ? 'rtl' : 'ltr'}>
        {/* Image Gallery */}
        <div>
          <Suspense fallback={<div className="aspect-square bg-cream-100 rounded-lg animate-pulse" />}>
            <ProductImageGallery
              images={product.images}
              productName={productName}
            />
          </Suspense>
          <div className="mt-6 bg-cream-100 dark:bg-gray-700 rounded-lg p-4 border border-cream-300 dark:border-gray-600">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent-gold dark:text-accent-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-base font-medium text-gray-800 dark:text-gray-200 leading-relaxed flex-1">
                {t('product.qualityMessage')}
              </p>
            </div>
          </div>
        </div>

        {/* Product Information */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            {product.category && (
              <p className="text-sm text-white/80 mb-2 uppercase tracking-wide">
                {product.category}
              </p>
            )}
            <h1 itemProp="name" className="text-h1 font-serif font-semibold text-gray-900 dark:text-gray-300 mb-6">
              {productName}
            </h1>
            
            <p itemProp="description" className="text-responsive-lg text-gray-900 dark:text-gray-300 leading-relaxed mb-6">
              {productDescription}
            </p>

            {/* Specifications */}
            {product.specifications && product.specifications.length > 0 && (
              <div className="mb-6">
                <Suspense fallback={<div className="bg-white rounded-lg shadow-md p-6 h-64 animate-pulse" />}>
                  <ProductSpecifications specifications={product.specifications} />
                </Suspense>
            </div>
          )}
              </div>

          {/* Contact on WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury w-full touch-target min-h-[48px] text-responsive-base text-center flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            {t('product.addToCart')}
          </a>
        </div>
      </div>

      {/* Reviews */}
      {product.reviews && (
        <div className="mb-12">
          <Suspense fallback={<div className="bg-white rounded-lg shadow-md p-6 h-64 animate-pulse" />}>
            <ProductReviews reviews={product.reviews} />
          </Suspense>
        </div>
      )}

      {/* Related Products */}
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <Suspense fallback={<ProductCardSkeleton />}>
          <RelatedProducts products={product.relatedProducts} />
        </Suspense>
      )}
    </div>
  );
};
