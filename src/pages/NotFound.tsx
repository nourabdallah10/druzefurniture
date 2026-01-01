import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguageStore } from '../store/languageStore';

export const NotFound = () => {
  const { t } = useTranslation();
  const { language } = useLanguageStore();

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[120px] sm:text-[150px] md:text-[180px] font-bold text-accent-charcoal/10 leading-none">
            404
          </h1>
        </div>

        {/* Error Message */}
        <h2 className="text-h1 font-serif font-semibold text-accent-charcoal mb-4">
          {t('notFound.title')}
        </h2>
        <p className="text-responsive-lg text-taupe-600 mb-8 max-w-md mx-auto">
          {t('notFound.description')}
        </p>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="btn-luxury-accent inline-flex items-center justify-center min-w-[200px]"
          >
            {t('notFound.backToHome')}
          </Link>
          <Link
            to="/sofas"
            className="btn-luxury-secondary inline-flex items-center justify-center min-w-[200px]"
          >
            {t('nav.sofas')}
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-cream-200">
          <p className="text-sm text-taupe-500 mb-4">{t('notFound.quickLinks')}</p>
          <nav className="flex flex-wrap justify-center gap-4" aria-label={t('notFound.quickLinks')}>
            <Link
              to="/sofas"
              className="text-responsive-sm text-taupe-600 hover:text-accent-charcoal transition-colors underline"
            >
              {t('nav.sofas')}
            </Link>
            <Link
              to="/beds"
              className="text-responsive-sm text-taupe-600 hover:text-accent-charcoal transition-colors underline"
            >
              {t('nav.beds')}
            </Link>
            <Link
              to="/tables"
              className="text-responsive-sm text-taupe-600 hover:text-accent-charcoal transition-colors underline"
            >
              {t('nav.tables')}
            </Link>
            <Link
              to="/colors"
              className="text-responsive-sm text-taupe-600 hover:text-accent-charcoal transition-colors underline"
            >
              {t('nav.colors')}
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

