import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  url?: string;
}

/**
 * Dynamic meta tags component for SEO
 * Updates document head with page-specific meta tags
 */
export const MetaTags = ({
  title,
  description,
  keywords,
  image,
  type = 'website',
  url,
}: MetaTagsProps) => {
  const { t, language } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Update document title
    const defaultTitle = t('seo.defaultTitle');
    const pageTitle = title || defaultTitle;
    document.title = pageTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description || t('seo.defaultDescription'));
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Open Graph tags
    updateMetaTag('og:title', pageTitle, true);
    updateMetaTag('og:description', description || t('seo.defaultDescription'), true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', url || window.location.href, true);
    if (image) {
      updateMetaTag('og:image', image, true);
    }
    updateMetaTag('og:locale', language === 'he' ? 'he_IL' : 'en_US', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', pageTitle);
    updateMetaTag('twitter:description', description || t('seo.defaultDescription'));
    if (image) {
      updateMetaTag('twitter:image', image);
    }

    // Language
    updateMetaTag('language', language);
  }, [title, description, keywords, image, type, url, language, location, t]);

  return null;
};

