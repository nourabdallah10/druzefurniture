import { useLanguageStore } from '../../store/languageStore';
import { useTranslation } from '../../hooks/useTranslation';

interface LanguageSwitcherProps {
  variant?: 'default' | 'dark';
}

export const LanguageSwitcher = ({ variant = 'default' }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguageStore();
  const { t } = useTranslation();

  const isDark = variant === 'dark';

  return (
    <div
      className={`flex items-center gap-1 rounded-lg p-1 ${
        isDark 
          ? 'bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300/50 dark:border-white/20' 
          : 'bg-cream-100 dark:bg-gray-800 border border-cream-200 dark:border-gray-700'
      }`}
      dir={language === 'he' ? 'rtl' : 'ltr'}
    >
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-md text-responsive-xs sm:text-responsive-sm font-semibold transition-all duration-200 touch-target min-h-[44px] ${
          language === 'en'
            ? isDark
              ? 'bg-accent-charcoal dark:bg-gray-700 text-white dark:text-gray-100 shadow-md'
              : 'bg-accent-charcoal dark:bg-gray-700 text-white dark:text-gray-100 shadow-sm'
            : isDark
            ? 'text-accent-charcoal dark:text-gray-300 hover:bg-cream-200 dark:hover:bg-gray-700 hover:text-accent-charcoal dark:hover:text-gray-100'
            : 'text-taupe-600 dark:text-gray-300 hover:bg-cream-200 dark:hover:bg-gray-700'
        }`}
        aria-label="Switch to English"
      >
        {t('common.english')}
      </button>
      <button
        onClick={() => setLanguage('he')}
        className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-md text-responsive-xs sm:text-responsive-sm font-semibold transition-all duration-200 touch-target min-h-[44px] ${
          language === 'he'
            ? isDark
              ? 'bg-accent-charcoal dark:bg-gray-700 text-white dark:text-gray-100 shadow-md'
              : 'bg-accent-charcoal dark:bg-gray-700 text-white dark:text-gray-100 shadow-sm'
            : isDark
            ? 'text-accent-charcoal dark:text-gray-300 hover:bg-cream-200 dark:hover:bg-gray-700 hover:text-accent-charcoal dark:hover:text-gray-100'
            : 'text-taupe-600 dark:text-gray-300 hover:bg-cream-200 dark:hover:bg-gray-700'
        }`}
        aria-label="Switch to Hebrew"
      >
        {t('common.hebrew')}
      </button>
    </div>
  );
};
