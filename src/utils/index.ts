// Export image utilities
export * from './imageUtils';
export * from './imageLoader';
export * from './blurPlaceholder';

// Format currency utility
export const formatCurrency = (amount: number, language: 'en' | 'he'): string => {
  if (language === 'he') {
    return `₪${amount.toLocaleString('he-IL')}`;
  }
  return `$${amount.toLocaleString('en-US')}`;
};
