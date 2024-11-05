import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en/en.json';
import pt from './pt/pt.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: { translation: en },
    pt: { translation: pt },
  },
  lng: 'pt',
  fallbackLng: 'en', 
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
