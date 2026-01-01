import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const applyTheme = (theme: Theme) => {
  if (typeof window !== 'undefined') {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      setTheme: (theme) => {
        set({ theme });
        applyTheme(theme);
      },
      toggleTheme: () => {
        const currentTheme = get().theme;
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        set({ theme: newTheme });
        applyTheme(newTheme);
      },
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => (state) => {
        if (state?.theme) {
          applyTheme(state.theme);
        }
      },
    }
  )
);

// Initialize theme on module load
if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('theme-storage');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      const theme = parsed.state?.theme || 'light';
      applyTheme(theme);
    } catch {
      applyTheme('light');
    }
  } else {
    applyTheme('light');
  }
}
