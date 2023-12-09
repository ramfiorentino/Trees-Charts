import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../src/locales/en.json';
import translationES from '../src/locales/es.json';

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en'
  });

export default i18n;
