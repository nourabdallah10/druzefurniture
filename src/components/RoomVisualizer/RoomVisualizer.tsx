import { useTranslation } from '../../hooks/useTranslation';
import { useLanguageStore } from '../../store/languageStore';

export const RoomVisualizer = () => {
  const { t, language } = useTranslation();

  return (
    <div className="bg-gradient-to-br from-cream-50 to-beige-50 rounded-lg p-8 md:p-12 text-center" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <div className="max-w-2xl mx-auto">
        {/* Icon */}
        <div className="mb-6">
          <svg
            className="w-24 h-24 mx-auto text-accent-charcoal/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h3 className="text-h2 font-serif font-semibold text-accent-charcoal mb-4">
          {t('roomVisualizer.title')}
        </h3>
        <p className="text-responsive-base text-taupe-600 mb-6">
          {t('roomVisualizer.description')}
        </p>

        {/* Coming Soon Badge */}
        <div className="inline-block bg-accent-gold/20 text-accent-gold px-6 py-2 rounded-full text-responsive-sm font-semibold mb-8">
          {t('roomVisualizer.comingSoon')}
        </div>

        <p className="text-responsive-sm text-taupe-500 leading-relaxed">
          {t('roomVisualizer.placeholder')}
        </p>

        {/* Placeholder Upload Area */}
        <div className="mt-8 border-2 border-dashed border-cream-300 rounded-lg p-12 bg-white/50">
          <svg
            className="w-16 h-16 mx-auto mb-4 text-taupe-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-responsive-sm text-taupe-500">
            {t('roomVisualizer.placeholder')}
          </p>
        </div>
      </div>
    </div>
  );
};

