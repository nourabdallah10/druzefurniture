import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type Language = 'en' | 'he';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'en',
      isRTL: false,
      setLanguage: (lang: Language) => {
        set({ language: lang, isRTL: lang === 'he' });
        // Update document direction and font
        if (typeof window !== 'undefined') {
          const dir = lang === 'he' ? 'rtl' : 'ltr';
          document.documentElement.dir = dir;
          document.documentElement.lang = lang;
          // Apply Hebrew font class to body when Hebrew is selected
          if (lang === 'he') {
            document.body.classList.add('font-hebrew');
            document.documentElement.classList.add('font-hebrew');
          } else {
            document.body.classList.remove('font-hebrew');
            document.documentElement.classList.remove('font-hebrew');
          }
        }
      },
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state && typeof window !== 'undefined') {
          const dir = state.language === 'he' ? 'rtl' : 'ltr';
          document.documentElement.dir = dir;
          document.documentElement.lang = state.language;
          // Apply Hebrew font class
          if (state.language === 'he') {
            document.body.classList.add('font-hebrew');
            document.documentElement.classList.add('font-hebrew');
          } else {
            document.body.classList.remove('font-hebrew');
            document.documentElement.classList.remove('font-hebrew');
          }
        }
      },
    }
  )
);

// Initialize document direction and font on module load
if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('language-storage');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      const lang = parsed.state?.language || 'en';
      const dir = lang === 'he' ? 'rtl' : 'ltr';
      document.documentElement.dir = dir;
      document.documentElement.lang = lang;
      // Apply Hebrew font class
      if (lang === 'he') {
        document.body.classList.add('font-hebrew');
        document.documentElement.classList.add('font-hebrew');
      }
    } catch {
      // Use default
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }
}

