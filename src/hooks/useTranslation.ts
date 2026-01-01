import { useMemo } from 'react';
import { useLanguageStore } from '../store/languageStore';
import { translations, getTranslation } from '../assets/translations';

export const useTranslation = () => {
  const { language, isRTL } = useLanguageStore();

  const t = useMemo(
    () => (key: string): string => {
      const langTranslations = translations[language];
      return getTranslation(langTranslations, key);
    },
    [language]
  );

  return { t, language, isRTL, dir: isRTL ? 'rtl' : 'ltr' };
};
