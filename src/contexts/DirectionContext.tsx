import { createContext, useContext, ReactNode } from 'react';
import { useLanguageStore } from '../store/languageStore';

interface DirectionContextType {
  dir: 'ltr' | 'rtl';
  isRTL: boolean;
  language: 'en' | 'he';
}

const DirectionContext = createContext<DirectionContextType>({
  dir: 'ltr',
  isRTL: false,
  language: 'en',
});

export const useDirection = () => {
  return useContext(DirectionContext);
};

interface DirectionProviderProps {
  children: ReactNode;
}

export const DirectionProvider = ({ children }: DirectionProviderProps) => {
  const { language, isRTL } = useLanguageStore();
  const dir = isRTL ? 'rtl' : 'ltr';

  return (
    <DirectionContext.Provider value={{ dir, isRTL, language }}>
      {children}
    </DirectionContext.Provider>
  );
};

