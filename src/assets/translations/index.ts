// Import translation JSON files
import enTranslations from './en.json';
import heTranslations from './he.json';

export type TranslationKey = string;

export interface Translations {
  [key: string]: string | Translations;
}

export const translations = {
  en: enTranslations,
  he: heTranslations,
} as const;

// Helper function to get nested translation value
export const getTranslation = (
  translations: Translations,
  key: string
): string => {
  const keys = key.split('.');
  let value: any = translations;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  return typeof value === 'string' ? value : key;
};
