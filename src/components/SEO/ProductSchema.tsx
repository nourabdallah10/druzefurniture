import { useEffect } from 'react';

interface ProductSchemaProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    image?: string;
    images?: string[];
    category?: string;
    rating?: number;
    availability?: string;
    brand?: string;
  };
  currency?: string;
}

/**
 * Schema.org JSON-LD markup for product pages
 */
export const ProductSchema = ({ product, currency = 'USD' }: ProductSchemaProps) => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org/',
      '@type': 'Product',
      name: product.name,
      description: product.description,
      image: product.images || (product.image ? [product.image] : []),
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: currency,
        availability: product.availability || 'https://schema.org/InStock',
        url: window.location.href,
      },
    };

    if (product.rating) {
      (schema as any).aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        bestRating: '5',
        worstRating: '1',
      };
    }

    if (product.category) {
      (schema as any).category = product.category;
    }

    if (product.brand) {
      (schema as any).brand = {
        '@type': 'Brand',
        name: product.brand,
      };
    }

    // Remove existing schema script if present
    const existingScript = document.querySelector('script[type="application/ld+json"][data-product-schema]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new schema script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-product-schema', 'true');
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"][data-product-schema]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [product, currency]);

  return null;
};

