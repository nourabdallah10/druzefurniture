import { useTranslation } from '../../hooks/useTranslation';

/**
 * Skip to main content link for keyboard navigation accessibility
 */
export const SkipLink = () => {
  const { t } = useTranslation();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent-charcoal focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2"
    >
      {t('accessibility.skipToMain')}
    </a>
  );
};

