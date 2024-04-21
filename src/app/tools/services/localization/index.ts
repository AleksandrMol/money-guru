import i18n from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import intervalPlural from 'i18next-intervalplural-postprocessor';
import { initReactI18next } from 'react-i18next';

import Backend from './backend';

i18n
.use(Backend)
.use(languageDetector)
.use(intervalPlural)
.use(initReactI18next)
.init({
  fallbackLng: 'ru',
  detection: {
    order: ['queryString', 'cookie'],
    caches: ['cookie']
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
