// app/i18n/LanguageContext.js
'use client';

import { createContext, useState, useContext, useEffect } from 'react';
import { getDictionary } from './dictionaries';

// Create the context with default values to avoid undefined
const LanguageContext = createContext({
  locale: 'pt',
  dictionary: getDictionary('pt'),
  changeLanguage: () => {}
});

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('pt');
  const [dictionary, setDictionary] = useState(getDictionary('pt'));

  useEffect(() => {
    // Could get initial language from localStorage or browser settings
    const savedLocale = typeof window !== 'undefined' ? localStorage.getItem('locale') || 'pt' : 'pt';
    setLocale(savedLocale);
    setDictionary(getDictionary(savedLocale));
  }, []);

  const changeLanguage = (newLocale) => {
    setLocale(newLocale);
    setDictionary(getDictionary(newLocale));
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, dictionary, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);